#!/usr/bin/env node

/**
 * Convert static blog page.tsx files from feature/blog branch into MDX files.
 * Reads each page via `git show`, extracts metadata + content, writes to content/blog/.
 *
 * Usage: node scripts/convert-blogs-to-mdx.mjs [--dry-run]
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const BRANCH = 'ix/critical-fix-v5';

// Get all blog directories from the feature/blog branch
function getBlogSlugs() {
  const output = execSync(
    `git ls-tree -r --name-only ${BRANCH} | grep "^app/blog/" | grep "page.tsx$"`,
    { encoding: 'utf-8' }
  );
  return output
    .trim()
    .split('\n')
    .map(line => {
      // app/blog/some-slug/page.tsx -> some-slug
      const match = line.match(/^app\/blog\/([^/]+)\/page\.tsx$/);
      return match ? match[1] : null;
    })
    .filter(s => s && s !== '[slug]');
}

// Read a file from the feature/blog branch
function readFromBranch(filePath) {
  try {
    return execSync(`git show ${BRANCH}:${filePath}`, { encoding: 'utf-8' });
  } catch {
    return null;
  }
}

// Extract metadata from the page.tsx content
function extractMetadata(source, slug) {
  const meta = {
    title: '',
    description: '',
    date: '',
    author: 'PostEngage Team',
    tags: [],
    category: 'General',
    image: '',
  };

  // Extract title
  const titleMatch = source.match(
    /title:\s*\n?\s*['"`]([^'"`]+)['"`]|title:\s*['"`]([^'"`]+)['"`]/
  );
  if (titleMatch) meta.title = titleMatch[1] || titleMatch[2];

  // Multi-line title (template literals or concatenation)
  if (!meta.title) {
    const multiTitle = source.match(/title:\s*\n\s*['"`](.+?)['"`],?\s*\n/s);
    if (multiTitle) meta.title = multiTitle[1].replace(/\s+/g, ' ').trim();
  }

  // Extract description
  const descMatch = source.match(
    /description:\s*\n?\s*['"`]([^'"`]+)['"`]|description:\s*['"`]([^'"`]+)['"`]/
  );
  if (descMatch) meta.description = descMatch[1] || descMatch[2];

  if (!meta.description) {
    const multiDesc = source.match(
      /description:\s*\n\s*['"`](.+?)['"`],?\s*\n/s
    );
    if (multiDesc) meta.description = multiDesc[1].replace(/\s+/g, ' ').trim();
  }

  // Extract publishedTime / date
  const dateMatch = source.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/);
  if (dateMatch) meta.date = dateMatch[1];

  // Fallback: extract from publishDate variable
  if (!meta.date) {
    const pubDate = source.match(/publishDate\s*=\s*['"`]([^'"`]+)['"`]/);
    if (pubDate) {
      try {
        const d = new Date(pubDate[1]);
        if (!isNaN(d.getTime())) meta.date = d.toISOString().split('T')[0];
      } catch {
        meta.date = '2026-03-01';
      }
    }
  }

  if (!meta.date) meta.date = '2026-03-01';

  // Extract category from Badge
  const badgeMatch = source.match(
    /Badge[^>]*>\s*\n?\s*([^<\n]+)\s*\n?\s*<\/Badge/
  );
  if (badgeMatch) meta.category = badgeMatch[1].trim();

  // Extract image
  const imgMatch = source.match(/src=['"`]([^'"`]*blog[^'"`]*)['"`]/);
  if (imgMatch) meta.image = imgMatch[1];

  // Derive tags from slug and category
  const tagSet = new Set();
  if (slug.includes('instagram')) tagSet.add('Instagram');
  if (slug.includes('automation')) tagSet.add('Automation');
  if (slug.includes('dm') || slug.includes('dms')) tagSet.add('DMs');
  if (slug.includes('ai')) tagSet.add('AI');
  if (slug.includes('growth')) tagSet.add('Growth');
  if (slug.includes('engagement')) tagSet.add('Engagement');
  if (slug.includes('affiliate')) tagSet.add('Affiliate Marketing');
  if (slug.includes('ecommerce') || slug.includes('e-commerce'))
    tagSet.add('E-commerce');
  if (slug.includes('brand')) tagSet.add('Branding');
  if (slug.includes('content')) tagSet.add('Content Strategy');
  if (slug.includes('analytics')) tagSet.add('Analytics');
  if (slug.includes('story') || slug.includes('stories')) tagSet.add('Stories');
  if (slug.includes('reel') || slug.includes('reels')) tagSet.add('Reels');
  if (slug.includes('comment')) tagSet.add('Comments');
  if (slug.includes('lead')) tagSet.add('Lead Generation');
  if (slug.includes('seo')) tagSet.add('SEO');
  if (slug.includes('strategy')) tagSet.add('Strategy');
  if (meta.category && meta.category !== 'General') tagSet.add(meta.category);

  // Ensure at least one tag
  if (tagSet.size === 0) tagSet.add('Instagram');

  meta.tags = Array.from(tagSet);

  return meta;
}

// Convert JSX content to markdown
function jsxToMarkdown(source) {
  // Extract only the prose/content section
  let content = source;

  // Try to find the main prose content div
  const proseMatch = content.match(
    /prose prose-lg[^>]*>([\s\S]*?)(?:<\/div>\s*<\/div>\s*<\/div>\s*<\/article>|$)/
  );
  if (proseMatch) {
    content = proseMatch[1];
  } else {
    // Fallback: get everything between article tags
    const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/);
    if (articleMatch) content = articleMatch[1];
  }

  let md = content;

  // Remove JSX comments
  md = md.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

  // Remove className attributes
  md = md.replace(/\s*className=['"`][^'"`]*['"`]/g, '');

  // Remove style attributes
  md = md.replace(/\s*style=\{[^}]*\}/g, '');

  // Convert h1
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, (_, text) => {
    return `# ${cleanText(text)}\n\n`;
  });

  // Convert h2 with id
  md = md.replace(
    /<h2[^>]*?(?:id=['"`]([^'"`]*)['"`])?[^>]*>([\s\S]*?)<\/h2>/g,
    (_, id, text) => {
      return `## ${cleanText(text)}\n\n`;
    }
  );

  // Convert h3
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, text) => {
    return `### ${cleanText(text)}\n\n`;
  });

  // Convert h4
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, (_, text) => {
    return `#### ${cleanText(text)}\n\n`;
  });

  // Convert strong/bold
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, '**$1**');
  md = md.replace(/<b>([\s\S]*?)<\/b>/g, '**$1**');

  // Convert em/italic
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/g, '*$1*');
  md = md.replace(/<i>([\s\S]*?)<\/i>/g, '*$1*');

  // Convert Link components to markdown links
  md = md.replace(
    /<Link[^>]*href=['"`]([^'"`]*)['"`][^>]*>([\s\S]*?)<\/Link>/g,
    (_, href, text) => `[${cleanText(text)}](${href})`
  );

  // Convert <a> tags
  md = md.replace(
    /<a[^>]*href=['"`]([^'"`]*)['"`][^>]*>([\s\S]*?)<\/a>/g,
    (_, href, text) => `[${cleanText(text)}](${href})`
  );

  // Convert Card components to blockquotes
  md = md.replace(
    /<Card[^>]*>[\s\S]*?<CardTitle[^>]*>([\s\S]*?)<\/CardTitle>[\s\S]*?<CardContent[^>]*>([\s\S]*?)<\/CardContent>[\s\S]*?<\/Card>/g,
    (_, title, content) => {
      return `> **${cleanText(title)}**\n>\n> ${cleanText(content)}\n\n`;
    }
  );

  // Convert unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_, items) => {
    return (
      items.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_, text) => {
        return `- ${cleanText(text)}\n`;
      }) + '\n'
    );
  });

  // Convert ordered lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (_, items) => {
    let i = 0;
    return (
      items.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_, text) => {
        i++;
        return `${i}. ${cleanText(text)}\n`;
      }) + '\n'
    );
  });

  // Convert blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g, (_, text) => {
    return (
      cleanText(text)
        .split('\n')
        .map(l => `> ${l}`)
        .join('\n') + '\n\n'
    );
  });

  // Convert code blocks
  md = md.replace(
    /<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/g,
    (_, code) => {
      return `\`\`\`\n${decodeHtml(code.trim())}\n\`\`\`\n\n`;
    }
  );

  // Convert inline code
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/g, '`$1`');

  // Convert paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, (_, text) => {
    const cleaned = cleanText(text).trim();
    return cleaned ? `${cleaned}\n\n` : '';
  });

  // Convert <br> tags
  md = md.replace(/<br\s*\/?>/g, '\n');

  // Convert Image components
  md = md.replace(
    /<Image[^>]*src=['"`]([^'"`]*)['"`][^>]*alt=['"`]([^'"`]*)['"`][^>]*\/?>/g,
    '![$2]($1)'
  );
  md = md.replace(
    /<Image[^>]*alt=['"`]([^'"`]*)['"`][^>]*src=['"`]([^'"`]*)['"`][^>]*\/?>/g,
    '![$1]($2)'
  );

  // Remove remaining JSX/HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // Remove JSX expressions like {' '} or {readTime}
  md = md.replace(/\{'\s*'\}/g, ' ');
  md = md.replace(/\{[a-zA-Z][a-zA-Z0-9]*\}/g, '');

  // Clean up excessive whitespace
  md = md.replace(/\n{4,}/g, '\n\n');
  md = md.replace(/[ \t]+$/gm, ''); // trailing spaces
  md = md.replace(/^\n+/, ''); // leading newlines
  // Remove leading whitespace from lines (JSX indentation)
  md = md.replace(/^[ \t]{2,}/gm, '');

  // Decode HTML entities
  md = decodeHtml(md);

  return md.trim();
}

function cleanText(text) {
  let cleaned = text;
  // Remove JSX components/tags
  cleaned = cleaned.replace(/<[^>]+\/?>/g, '');
  // Remove JSX expressions
  cleaned = cleaned.replace(/\{'\s*'\}/g, ' ');
  cleaned = cleaned.replace(/\{[a-zA-Z][a-zA-Z0-9.]*\}/g, '');
  // Clean whitespace
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  return cleaned;
}

function decodeHtml(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/');
}

function generateMDX(meta, markdownContent) {
  const frontmatter = [
    '---',
    `title: "${meta.title.replace(/"/g, '\\"')}"`,
    `description: "${meta.description.replace(/"/g, '\\"')}"`,
    `date: "${meta.date}"`,
    'author:',
    `  name: "${meta.author}"`,
    'tags:',
    ...meta.tags.map(t => `  - "${t}"`),
    `category: "${meta.category}"`,
  ];

  if (meta.image) {
    frontmatter.push(`image: "${meta.image}"`);
  }

  frontmatter.push('---');

  return frontmatter.join('\n') + '\n\n' + markdownContent + '\n';
}

// Main
async function main() {
  console.log('🔍 Finding blog slugs from feature/blog branch...');
  const slugs = getBlogSlugs();
  console.log(`📝 Found ${slugs.length} blog pages to convert\n`);

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // Check existing MDX files to avoid overwriting
  const existing = new Set(
    fs
      .readdirSync(CONTENT_DIR)
      .filter(f => f.endsWith('.mdx'))
      .map(f => f.replace('.mdx', ''))
  );

  let converted = 0;
  let skipped = 0;
  let failed = 0;
  const errors = [];

  for (const slug of slugs) {
    // Skip only the 3 original hand-written MDX files
    if (
      existing.has(slug) &&
      [
        'ai-voice-matching-instagram',
        'instagram-engagement-automation-2026',
        'measure-instagram-roi-before-after',
      ].includes(slug)
    ) {
      console.log(`⏭️  Skipping ${slug} (original MDX)`);
      skipped++;
      continue;
    }

    const filePath = `app/blog/${slug}/page.tsx`;
    const source = readFromBranch(filePath);

    if (!source) {
      console.log(`❌ Failed to read ${filePath}`);
      errors.push(slug);
      failed++;
      continue;
    }

    try {
      const meta = extractMetadata(source, slug);
      const markdown = jsxToMarkdown(source);

      if (!meta.title) {
        console.log(`⚠️  No title found for ${slug}, using slug`);
        meta.title = slug
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
      }

      const mdxContent = generateMDX(meta, markdown);
      const outPath = path.join(CONTENT_DIR, `${slug}.mdx`);

      if (DRY_RUN) {
        console.log(
          `[DRY RUN] Would write: ${outPath} (${mdxContent.length} chars)`
        );
      } else {
        fs.writeFileSync(outPath, mdxContent, 'utf-8');
        console.log(`✅ ${slug}.mdx (${mdxContent.length} chars)`);
      }
      converted++;
    } catch (err) {
      console.log(`❌ Error converting ${slug}: ${err.message}`);
      errors.push(slug);
      failed++;
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Converted: ${converted}`);
  console.log(`⏭️  Skipped: ${skipped}`);
  console.log(`❌ Failed: ${failed}`);
  if (errors.length > 0) {
    console.log(`\nFailed slugs:`);
    errors.forEach(s => console.log(`  - ${s}`));
  }
  console.log(`\nMDX files saved to: ${CONTENT_DIR}`);
}

main().catch(console.error);

#!/usr/bin/env node

/**
 * Injects BlogJsonLd component into all blog page.tsx files.
 * Extracts title, description, date, category from each file.
 *
 * Usage: node scripts/inject-blog-jsonld.js
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'app', 'blog');

function extractMeta(content, slug) {
  // Title from metadata
  const titleMatch = content.match(
    /title:\s*['"`]\s*([^'"`]+?)(?:\s*\|\s*PostEngage[^'"`]*)?['"`]/
  );
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Description
  const descMatch = content.match(/description:\s*\n?\s*['"`]([^'"`]+)['"`]/);
  const description = descMatch ? descMatch[1].trim() : '';

  // Date from publishedTime or inline text
  const dateMatch = content.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/);
  const inlineDateMatch = content.match(
    /<span>((?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4})<\/span>/
  );
  let date = '2026-03-01';
  if (dateMatch) {
    date = dateMatch[1];
  } else if (inlineDateMatch) {
    date = new Date(inlineDateMatch[1]).toISOString().split('T')[0];
  }

  // Category from Badge
  const badgeMatch = content.match(
    /<Badge[^>]*>\s*\n?\s*([^<\n]+)\s*\n?\s*<\/Badge>/
  );
  const category = badgeMatch ? badgeMatch[1].trim() : 'Blog';

  // Reading time
  const readMatch = content.match(/<span>(\d+\s*min\s*read)<\/span>/);
  const readingTime = readMatch ? readMatch[1] : '';

  return { title, description, date, category, readingTime, slug };
}

let injected = 0;
let skipped = 0;
let errors = 0;

const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isDirectory() || entry.name.startsWith('[')) continue;

  const slug = entry.name;
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');

  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has BlogJsonLd
  if (content.includes('BlogJsonLd')) {
    skipped++;
    continue;
  }

  const meta = extractMeta(content, slug);

  if (!meta.title) {
    console.log(`⚠ Could not extract title for: ${slug}`);
    errors++;
    continue;
  }

  // Add import
  const importLine =
    "import { BlogJsonLd } from '@/components/blog/blog-json-ld';\n";

  // Add after the last import
  const lastImportIdx = content.lastIndexOf('import ');
  const lineEnd = content.indexOf('\n', lastImportIdx);
  content =
    content.slice(0, lineEnd + 1) + importLine + content.slice(lineEnd + 1);

  // Add JsonLd right after opening <main> or first <div
  const escapedTitle = meta.title.replace(/'/g, "\\'");
  const escapedDesc = meta.description.replace(/'/g, "\\'");

  const jsonLdJsx = `\n      <BlogJsonLd\n        title='${escapedTitle}'\n        description='${escapedDesc}'\n        slug='${slug}'\n        date='${meta.date}'\n        category='${meta.category}'${meta.readingTime ? `\n        readingTime='${meta.readingTime}'` : ''}\n      />`;

  // Insert after <main> tag
  const mainMatch = content.match(/<main[^>]*>/);
  if (mainMatch) {
    const mainIdx = content.indexOf(mainMatch[0]);
    const afterMain = mainIdx + mainMatch[0].length;
    content =
      content.slice(0, afterMain) + jsonLdJsx + content.slice(afterMain);
  } else {
    console.log(`⚠ No <main> tag found in: ${slug}`);
    errors++;
    continue;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  injected++;
}

console.log(`\n✅ JSON-LD injection complete:`);
console.log(`   Injected: ${injected}`);
console.log(`   Skipped (already has): ${skipped}`);
console.log(`   Errors: ${errors}`);

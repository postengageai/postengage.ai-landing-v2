#!/usr/bin/env node

/**
 * Inject ArticleJsonLd component into all blog post pages.
 * Adds structured data (Schema.org Article) for search engine rich results.
 *
 * Usage: node scripts/inject-jsonld.js
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'app', 'blog');

function processFile(slug, filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has ArticleJsonLd
  if (content.includes('ArticleJsonLd')) return false;

  // Extract metadata
  const titleMatch = content.match(
    /title:\s*['"`]([^'"`]+?)(?:\s*\|\s*PostEngage[^'"`]*)?['"`]/
  );
  const title = titleMatch ? titleMatch[1].trim() : '';

  const descMatch = content.match(/description:\s*\n?\s*['"`]([^'"`]+)['"`]/);
  const description = descMatch ? descMatch[1].trim() : '';

  const dateMatch = content.match(
    /(?:publishedTime|date):\s*['"`]([^'"`]+)['"`]/
  );
  const date = dateMatch ? dateMatch[1].trim() : '2026-03-01';

  const badgeMatch = content.match(/<Badge[^>]*>([^<]+)<\/Badge>/);
  const category = badgeMatch ? badgeMatch[1].trim() : 'Blog';

  if (!title) return false;

  // Add import
  const importLine = `import { ArticleJsonLd } from '@/components/blog/article-jsonld';\n`;

  // Find the right place to add import (after last import)
  const lastImportIdx = content.lastIndexOf('\nimport ');
  if (lastImportIdx === -1) return false;

  const endOfLastImport = content.indexOf('\n', lastImportIdx + 1);
  content =
    content.slice(0, endOfLastImport + 1) +
    importLine +
    content.slice(endOfLastImport + 1);

  // Add ArticleJsonLd component right after the opening div in the return
  const escapedTitle = title.replace(/'/g, "\\'");
  const escapedDesc = description.replace(/'/g, "\\'").slice(0, 160);

  const jsonLdJsx = `      <ArticleJsonLd
        title='${escapedTitle}'
        description='${escapedDesc}'
        slug='${slug}'
        datePublished='${date}'
        category='${category}'
      />\n`;

  // Find the return statement's first div and inject after it
  const returnMatch = content.match(/return\s*\(\s*\n\s*<div[^>]*>/);
  if (returnMatch) {
    const insertPos = content.indexOf(returnMatch[0]) + returnMatch[0].length;
    content =
      content.slice(0, insertPos) + '\n' + jsonLdJsx + content.slice(insertPos);
  }

  fs.writeFileSync(filePath, content);
  return true;
}

function main() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const blogDirs = entries.filter(
    e => e.isDirectory() && !e.name.startsWith('[')
  );

  console.log(`Processing ${blogDirs.length} blog posts...`);
  let injected = 0;
  let skipped = 0;

  for (const dir of blogDirs) {
    const pagePath = path.join(BLOG_DIR, dir.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    if (processFile(dir.name, pagePath)) {
      injected++;
    } else {
      skipped++;
    }
  }

  console.log(`\nDone! Injected: ${injected}, Skipped: ${skipped}`);
}

main();

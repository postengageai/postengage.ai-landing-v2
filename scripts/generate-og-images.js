#!/usr/bin/env node

/**
 * Generate OG images for all blog posts.
 * Pattern: dark background, category badge top-left, title white bold, "PostEngage AI" bottom-right.
 * Size: 1536x1024
 *
 * Usage: node scripts/generate-og-images.js
 * Requires: npm install canvas
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const BLOG_DIR = path.join(__dirname, '..', 'app', 'blog');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'blog', 'og');
const WIDTH = 1536;
const HEIGHT = 1024;

// Category color map for badge backgrounds
const CATEGORY_COLORS = {
  'AI & Automation': '#7c3aed',
  'AI Analytics': '#2563eb',
  'AI Strategy': '#6d28d9',
  'AI Tools': '#4f46e5',
  'AI Trends': '#7c3aed',
  Analytics: '#2563eb',
  'Analytics & Benchmarks': '#2563eb',
  'Analytics & Optimization': '#0891b2',
  'Analytics & Psychology': '#6366f1',
  B2B: '#059669',
  'Best Practices': '#0d9488',
  'Business Strategy': '#0891b2',
  'Case Studies': '#dc2626',
  'Content Strategy': '#ea580c',
  'E-commerce': '#d97706',
  'Getting Started': '#16a34a',
  Growth: '#059669',
  'Lead Generation': '#0284c7',
  Product: '#8b5cf6',
  SaaS: '#6366f1',
  Sales: '#0891b2',
  Strategy: '#4f46e5',
  Technical: '#475569',
  'Trends & Industry': '#7c3aed',
};

const DEFAULT_BADGE_COLOR = '#6366f1';

function extractBlogMeta(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract category from Badge component
  // Patterns: <Badge ...>Category</Badge> or <Badge ...>Category Name</Badge>
  const badgeMatch = content.match(/<Badge[^>]*>([^<]+)<\/Badge>/);
  const category = badgeMatch ? badgeMatch[1].trim() : 'Blog';

  // Extract title from h1
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  let title = '';
  if (h1Match) {
    title = h1Match[1].trim();
  } else {
    // Fallback: extract from metadata title
    const metaTitleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (metaTitleMatch) {
      title = metaTitleMatch[1]
        .replace(/\s*\|\s*PostEngage.*$/i, '')
        .replace(/\s*\|\s*PostEngage.*$/i, '')
        .trim();
    }
  }

  return { title, category };
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

function generateOGImage(slug, title, category) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // -- Background: dark gradient --
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, '#0a0a0f');
  gradient.addColorStop(0.5, '#0f0f1a');
  gradient.addColorStop(1, '#111118');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // -- Subtle grid pattern --
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 1;
  for (let x = 0; x < WIDTH; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT);
    ctx.stroke();
  }
  for (let y = 0; y < HEIGHT; y += 60) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WIDTH, y);
    ctx.stroke();
  }

  // -- Accent glow (top-left) --
  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 500);
  glow.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
  glow.addColorStop(1, 'rgba(99, 102, 241, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 600, 500);

  // -- Category badge (top-left) --
  const badgeColor = CATEGORY_COLORS[category] || DEFAULT_BADGE_COLOR;
  const padding = 80;
  ctx.font = 'bold 28px "Helvetica Neue", Helvetica, Arial, sans-serif';
  const badgeText = category.toUpperCase();
  const badgeMetrics = ctx.measureText(badgeText);
  const badgePadX = 24;
  const badgePadY = 14;
  const badgeW = badgeMetrics.width + badgePadX * 2;
  const badgeH = 28 + badgePadY * 2;

  // Badge background with rounded corners
  const badgeX = padding;
  const badgeY = padding;
  const radius = 12;
  ctx.fillStyle = badgeColor;
  ctx.beginPath();
  ctx.moveTo(badgeX + radius, badgeY);
  ctx.lineTo(badgeX + badgeW - radius, badgeY);
  ctx.arcTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + radius, radius);
  ctx.lineTo(badgeX + badgeW, badgeY + badgeH - radius);
  ctx.arcTo(
    badgeX + badgeW,
    badgeY + badgeH,
    badgeX + badgeW - radius,
    badgeY + badgeH,
    radius
  );
  ctx.lineTo(badgeX + radius, badgeY + badgeH);
  ctx.arcTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - radius, radius);
  ctx.lineTo(badgeX, badgeY + radius);
  ctx.arcTo(badgeX, badgeY, badgeX + radius, badgeY, radius);
  ctx.closePath();
  ctx.fill();

  // Badge text
  ctx.fillStyle = '#ffffff';
  ctx.textBaseline = 'middle';
  ctx.fillText(badgeText, badgeX + badgePadX, badgeY + badgeH / 2 + 1);

  // -- Title (center-left, white bold) --
  const titleMaxWidth = WIDTH - padding * 2;
  const titleFontSize = title.length > 80 ? 56 : title.length > 50 ? 64 : 72;
  ctx.font = `bold ${titleFontSize}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
  ctx.fillStyle = '#ffffff';
  ctx.textBaseline = 'top';

  const lines = wrapText(ctx, title, titleMaxWidth);
  const lineHeight = titleFontSize * 1.25;
  const totalTextHeight = lines.length * lineHeight;

  // Vertically center the title block (slightly above true center)
  const titleStartY = (HEIGHT - totalTextHeight) / 2 - 20;

  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], padding, titleStartY + i * lineHeight);
  }

  // -- "PostEngage AI" branding (bottom-right) --
  ctx.font = 'bold 32px "Helvetica Neue", Helvetica, Arial, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.textBaseline = 'bottom';
  ctx.textAlign = 'right';
  ctx.fillText('PostEngage AI', WIDTH - padding, HEIGHT - padding);

  // -- Decorative line above branding --
  const brandTextWidth = ctx.measureText('PostEngage AI').width;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(WIDTH - padding - brandTextWidth, HEIGHT - padding - 44);
  ctx.lineTo(WIDTH - padding, HEIGHT - padding - 44);
  ctx.stroke();

  // Reset text align
  ctx.textAlign = 'left';

  return canvas.toBuffer('image/png');
}

function main() {
  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Get all blog directories
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const blogDirs = entries
    .filter(e => e.isDirectory() && e.name !== '[slug]')
    .map(e => e.name);

  console.log(`Found ${blogDirs.length} blog posts. Generating OG images...`);

  let generated = 0;
  let skipped = 0;
  let errors = 0;

  for (const slug of blogDirs) {
    const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      skipped++;
      continue;
    }

    try {
      const { title, category } = extractBlogMeta(pagePath);
      if (!title) {
        console.warn(`  ⚠ No title found for: ${slug}`);
        skipped++;
        continue;
      }

      const outputPath = path.join(OUTPUT_DIR, `${slug}.png`);
      const buffer = generateOGImage(slug, title, category);
      fs.writeFileSync(outputPath, buffer);
      generated++;

      if (generated % 50 === 0) {
        console.log(`  ${generated} images generated...`);
      }
    } catch (err) {
      console.error(`  ✗ Error for ${slug}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\nDone!`);
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Errors: ${errors}`);
  console.log(`  Output: ${OUTPUT_DIR}`);
}

main();

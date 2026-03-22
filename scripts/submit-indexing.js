#!/usr/bin/env node

/**
 * Bulk submit all URLs for search engine indexing.
 *
 * Submits to:
 * 1. IndexNow (Bing, Yandex, Seznam, Naver) — instant
 * 2. Google Sitemap Ping — triggers re-crawl
 * 3. Google Indexing API (if credentials available)
 *
 * Usage:
 *   INDEXNOW_KEY=your-key node scripts/submit-indexing.js
 *
 * Get IndexNow key: https://www.bing.com/indexnow
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://postengage.ai';
const BLOG_DIR = path.join(__dirname, '..', 'app', 'blog');
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

async function getAllUrls() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const blogUrls = entries
    .filter(e => e.isDirectory() && !e.name.startsWith('['))
    .map(e => `${BASE_URL}/blog/${e.name}`);

  const mainPages = [
    '',
    '/pricing',
    '/features',
    '/about',
    '/contact',
    '/blog',
    '/feed.xml',
  ].map(p => `${BASE_URL}${p}`);

  return [...mainPages, ...blogUrls];
}

async function submitIndexNow(urls) {
  if (!INDEXNOW_KEY) {
    console.log('⚠ INDEXNOW_KEY not set — skipping IndexNow submission');
    console.log('  Get one at: https://www.bing.com/indexnow/getstarted\n');
    return;
  }

  console.log(`\n📡 Submitting ${urls.length} URLs to IndexNow...`);

  const payload = {
    host: 'postengage.ai',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const endpoints = [
    { name: 'IndexNow API', url: 'https://api.indexnow.org/indexnow' },
    { name: 'Bing', url: 'https://www.bing.com/indexnow' },
    { name: 'Yandex', url: 'https://yandex.com/indexnow' },
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log(`  ✓ ${endpoint.name}: ${res.status} ${res.statusText}`);
    } catch (err) {
      console.log(`  ✗ ${endpoint.name}: ${err.message}`);
    }
  }
}

async function pingGoogleSitemap() {
  console.log('\n🔔 Pinging Google with sitemap...');
  const sitemapUrl = `${BASE_URL}/sitemap.xml`;

  try {
    const res = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );
    console.log(`  ✓ Google Sitemap Ping: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.log(`  ✗ Google Sitemap Ping: ${err.message}`);
  }
}

async function pingBingSitemap() {
  console.log('\n🔔 Pinging Bing with sitemap...');
  const sitemapUrl = `${BASE_URL}/sitemap.xml`;

  try {
    const res = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );
    console.log(`  ✓ Bing Sitemap Ping: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.log(`  ✗ Bing Sitemap Ping: ${err.message}`);
  }
}

async function main() {
  console.log('🚀 PostEngage.ai — Bulk Search Engine Indexing\n');

  const urls = await getAllUrls();
  console.log(`Found ${urls.length} URLs to submit`);

  // 1. IndexNow (Bing, Yandex, etc.)
  await submitIndexNow(urls);

  // 2. Google Sitemap Ping
  await pingGoogleSitemap();

  // 3. Bing Sitemap Ping
  await pingBingSitemap();

  console.log('\n✅ Done! Next steps:');
  console.log(
    '  1. Verify sitemap in Google Search Console: https://search.google.com/search-console'
  );
  console.log(
    '  2. Verify sitemap in Bing Webmaster Tools: https://www.bing.com/webmasters'
  );
  console.log(
    '  3. Submit sitemap to Yandex Webmaster: https://webmaster.yandex.com'
  );
  console.log(
    `  4. Create IndexNow key file: public/<your-key>.txt with content: <your-key>`
  );
  console.log('  5. Set INDEXNOW_KEY env var in Vercel dashboard');
}

main().catch(console.error);

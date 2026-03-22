import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '';
const BASE_URL = 'https://postengage.ai';

/**
 * POST /api/indexnow — Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver)
 * Body: { urls?: string[], all?: boolean }
 *
 * - { all: true } submits all blog URLs + main pages
 * - { urls: [...] } submits specific URLs
 */
export async function POST(request: NextRequest) {
  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY not configured' },
      { status: 500 }
    );
  }

  const body = await request.json();
  let urls: string[] = body.urls || [];

  if (body.all) {
    // Collect all blog URLs
    const blogDir = path.join(process.cwd(), 'app', 'blog');
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    const blogUrls = entries
      .filter(e => e.isDirectory() && !e.name.startsWith('['))
      .map(e => `${BASE_URL}/blog/${e.name}`);

    // Main pages
    const mainPages = [
      '',
      '/pricing',
      '/features',
      '/about',
      '/contact',
      '/blog',
    ].map(p => `${BASE_URL}${p}`);

    urls = [...mainPages, ...blogUrls];
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
  }

  // IndexNow accepts max 10,000 URLs per request
  const batches: string[][] = [];
  for (let i = 0; i < urls.length; i += 10000) {
    batches.push(urls.slice(i, i + 10000));
  }

  const results = [];

  for (const batch of batches) {
    const payload = {
      host: 'postengage.ai',
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: batch,
    };

    // Submit to multiple IndexNow endpoints
    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow',
    ];

    for (const endpoint of endpoints) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload),
        });
        results.push({
          endpoint,
          status: res.status,
          urls: batch.length,
        });
      } catch (err) {
        results.push({
          endpoint,
          status: 'error',
          error: (err as Error).message,
        });
      }
    }
  }

  return NextResponse.json({
    submitted: urls.length,
    results,
  });
}

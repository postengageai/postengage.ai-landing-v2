import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://postengage.ai';

interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

function extractBlogMeta(filePath: string, slug: string): BlogMeta | null {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract title from metadata
  const titleMatch = content.match(
    /title:\s*['"`]([^'"`]+?)(?:\s*\|\s*PostEngage[^'"`]*)?['"`]/
  );
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Extract description from metadata
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const description = descMatch ? descMatch[1].trim() : '';

  // Extract date
  const dateMatch = content.match(
    /(?:publishedTime|date):\s*['"`]([^'"`]+)['"`]/
  );
  const date = dateMatch ? dateMatch[1].trim() : '2026-03-01';

  // Extract category from Badge
  const badgeMatch = content.match(/<Badge[^>]*>([^<]+)<\/Badge>/);
  const category = badgeMatch ? badgeMatch[1].trim() : 'Blog';

  if (!title) return null;

  return { slug, title, description, date, category };
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  const posts: BlogMeta[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('[')) continue;
    const pagePath = path.join(blogDir, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    const meta = extractBlogMeta(pagePath, entry.name);
    if (meta) posts.push(meta);
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const rssItems = posts
    .map(
      post => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PostEngage.ai Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Instagram automation, AI engagement, growth strategies, and social media marketing insights.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/logo.png</url>
      <title>PostEngage.ai Blog</title>
      <link>${BASE_URL}/blog</link>
    </image>${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

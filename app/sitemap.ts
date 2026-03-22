import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://postengage.ai';
  const appDir = path.join(process.cwd(), 'app');

  function getRoutes(dir: string, currentPath = ''): string[] {
    let routes: string[] = [];

    if (!fs.existsSync(dir)) {
      return routes;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip hidden directories, special Next.js folders, api routes, and dynamic routes
        if (
          entry.name.startsWith('.') ||
          entry.name.startsWith('_') ||
          entry.name.startsWith('[') ||
          entry.name === 'api'
        ) {
          continue;
        }

        const newPath = `${currentPath}/${entry.name}`;
        routes = [...routes, ...getRoutes(path.join(dir, entry.name), newPath)];
      } else if (
        entry.name === 'page.tsx' ||
        entry.name === 'page.ts' ||
        entry.name === 'page.js' ||
        entry.name === 'page.jsx'
      ) {
        routes.push(currentPath);
      }
    }

    return routes;
  }

  const routes = getRoutes(appDir);

  const highPriority = ['', '/pricing', '/features', '/blog'];

  const staticEntries: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : highPriority.includes(route) ? 0.9 : 0.8,
  }));

  // Blog post entries — high priority for search engines
  const blogPosts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

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

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

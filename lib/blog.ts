import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { remark } from 'remark';
import html from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
  category: string;
  image?: string;
  readingTime: string;
  content: string;
  htmlContent?: string;
}

export interface BlogPostMeta extends Omit<
  BlogPost,
  'content' | 'htmlContent'
> {}

function parseFrontmatter(filePath: string): BlogPost | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const slug = path.basename(filePath, '.mdx');
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date
        ? new Date(data.date).toISOString()
        : new Date().toISOString(),
      author: data.author || { name: 'PostEngage Team' },
      tags: data.tags || [],
      category: data.category || 'General',
      image: data.image || undefined,
      readingTime: stats.text,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  const posts = files
    .map(file => {
      const post = parseFrontmatter(path.join(BLOG_DIR, file));
      if (!post) return null;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, htmlContent, ...meta } = post;
      return meta;
    })
    .filter(Boolean) as BlogPostMeta[];

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const post = parseFrontmatter(filePath);
  if (!post) return null;

  const processed = await remark()
    .use(html, { sanitize: false })
    .process(post.content);
  post.htmlContent = processed.toString();

  return post;
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post =>
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(
    post => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(p => p.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap(p => p.tags));
  return Array.from(tags).sort();
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPostMeta[] {
  const allPosts = getAllPosts();
  const current = allPosts.find(p => p.slug === currentSlug);
  if (!current) return allPosts.slice(0, limit);

  const scored = allPosts
    .filter(p => p.slug !== currentSlug)
    .map(post => {
      let score = 0;
      if (post.category === current.category) score += 3;
      const sharedTags = post.tags.filter(t => current.tags.includes(t));
      score += sharedTags.length * 2;
      return { post, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(s => s.post);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  return fs
    .readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''));
}

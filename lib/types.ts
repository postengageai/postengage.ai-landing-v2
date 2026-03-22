export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: { name: string; avatar?: string };
  tags: string[];
  category: string;
  image?: string;
  readingTime: string;
}

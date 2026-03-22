'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { BlogCard } from './blog-card';
import type { BlogPostMeta } from '@/lib/blog';

export function BlogSearch({
  posts,
  categories,
}: {
  posts: BlogPostMeta[];
  categories: string[];
}) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    let result = posts;

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, query, activeCategory]);

  const allCategories = ['All', ...categories];

  return (
    <>
      {/* Search + Filters */}
      <div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        {/* Category tabs */}
        <div className='flex flex-wrap gap-2'>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className='relative w-full sm:w-72'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <input
            type='text'
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Search articles...'
            className='w-full rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50'
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center py-20 text-center'>
          <p className='text-lg font-medium text-foreground'>
            No articles found
          </p>
          <p className='mt-1 text-sm text-muted-foreground'>
            Try a different search or category.
          </p>
        </div>
      )}
    </>
  );
}

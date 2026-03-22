import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5'
    >
      {/* Image */}
      {post.image && (
        <div className='relative aspect-[16/9] overflow-hidden bg-muted'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          {/* Category badge */}
          <span className='absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm'>
            {post.category}
          </span>
        </div>
      )}

      {!post.image && (
        <div className='relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5'>
          <span className='text-4xl font-bold text-primary/20'>PE</span>
          <span className='absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground'>
            {post.category}
          </span>
        </div>
      )}

      {/* Content */}
      <div className='flex flex-1 flex-col p-5'>
        <h3 className='mb-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2'>
          {post.title}
        </h3>
        <p className='mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2'>
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className='mb-4 flex flex-wrap gap-1.5'>
            {post.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className='rounded-md bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground'
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta */}
        <div className='flex items-center justify-between border-t border-border/40 pt-4'>
          <div className='flex items-center gap-2'>
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={24}
                height={24}
                className='rounded-full'
              />
            ) : (
              <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary'>
                {post.author.name.charAt(0)}
              </div>
            )}
            <span className='text-xs text-muted-foreground'>
              {post.author.name}
            </span>
          </div>

          <div className='flex items-center gap-3 text-xs text-muted-foreground'>
            <span className='flex items-center gap-1'>
              <Calendar className='h-3 w-3' />
              {formatDate(post.date)}
            </span>
            <span className='flex items-center gap-1'>
              <Clock className='h-3 w-3' />
              {post.readingTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

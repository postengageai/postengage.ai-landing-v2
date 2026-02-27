'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Calendar, Clock, Search, X } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string | null;
  featured: boolean;
}

interface BlogListProps {
  initialPosts: BlogPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    'Product',
    'Partnership',
    'Guide',
    'Engineering',
    'Customer Experience',
    'Lead Generation',
    'Automation Guide',
    'Ads Strategy',
    'Growth Hacks',
  ];

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, searchQuery, selectedCategory]);

  const featuredPost = filteredPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => p !== featuredPost);

  return (
    <div className='space-y-12'>
      {/* Search & Categories */}
      <div className='mx-auto max-w-4xl'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <div className='flex flex-wrap justify-center gap-2'>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'ghost'}
                size='sm'
                onClick={() => setSelectedCategory(cat)}
                className='rounded-full transition-all'
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className='relative w-full md:w-72'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-muted-foreground' />
            <Input
              type='text'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder='Search articles...'
              className='rounded-full bg-muted/50 pl-9 pr-9 transition-colors focus:bg-background'
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
              >
                <X className='h-4 w-4' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count (only show if filtering) */}
      {(searchQuery || selectedCategory !== 'All') && (
        <div className='text-center text-sm text-muted-foreground'>
          Found {filteredPosts.length}{' '}
          {filteredPosts.length === 1 ? 'article' : 'articles'}
        </div>
      )}

      {/* Featured Post (only show if it exists in filtered results) */}
      {featuredPost && (
        <section className='mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500'>
          <Link href={`/blog/${featuredPost.slug}`} className='group block'>
            <div className='grid items-center gap-8 rounded-3xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card hover:shadow-xl md:grid-cols-2 md:p-10'>
              <div className='relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-sm'>
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                    priority
                  />
                ) : (
                  <div className='absolute inset-0 flex items-center justify-center bg-secondary/30 text-muted-foreground'>
                    <span className='font-medium'>Image Coming Soon</span>
                  </div>
                )}
              </div>
              <div className='flex flex-col justify-center space-y-6'>
                <div className='flex items-center gap-3'>
                  <Badge
                    variant='default'
                    className='rounded-full border-0 bg-primary/10 text-primary hover:bg-primary/20'
                  >
                    {featuredPost.category}
                  </Badge>
                  <span className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                    <Calendar className='h-3.5 w-3.5' /> {featuredPost.date}
                  </span>
                </div>
                <h2 className='text-3xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-primary md:text-4xl'>
                  {featuredPost.title}
                </h2>
                <p className='line-clamp-3 text-lg leading-relaxed text-muted-foreground'>
                  {featuredPost.excerpt}
                </p>
                <div className='flex items-center gap-4 pt-2'>
                  <div className='flex items-center gap-2 text-sm font-medium'>
                    <Avatar className='h-8 w-8 border border-border shadow-sm'>
                      <AvatarImage src='/logo.jpeg' alt='PostEngage.ai' />
                      <AvatarFallback>PE</AvatarFallback>
                    </Avatar>
                    <span>PostEngage.ai Team</span>
                  </div>
                  <span className='h-1 w-1 rounded-full bg-border'></span>
                  <span className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                    <Clock className='h-3.5 w-3.5' /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Post Grid */}
      <section className='mx-auto max-w-7xl'>
        {regularPosts.length > 0 ? (
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {regularPosts.map((post, i) => (
              <Link
                key={post.slug + i}
                href={post.slug !== '#' ? `/blog/${post.slug}` : '#'}
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg ${
                  post.slug === '#'
                    ? 'pointer-events-none grayscale opacity-70'
                    : ''
                }`}
              >
                <div className='relative aspect-video w-full overflow-hidden border-b border-border/50 bg-muted'>
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  ) : (
                    <div className='absolute inset-0 flex items-center justify-center bg-secondary/30 text-muted-foreground'>
                      <span className='text-sm font-medium'>Coming Soon</span>
                    </div>
                  )}
                  <div className='absolute left-4 top-4'>
                    <Badge
                      variant='secondary'
                      className='border-0 bg-background/80 shadow-sm backdrop-blur-md hover:bg-background/90'
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className='flex flex-1 flex-col p-6'>
                  <div className='mb-4 flex items-center gap-3 text-xs font-medium text-muted-foreground'>
                    <time className='flex items-center gap-1.5'>
                      <Calendar className='h-3.5 w-3.5' /> {post.date}
                    </time>
                    <span>•</span>
                    <span className='flex items-center gap-1.5'>
                      <Clock className='h-3.5 w-3.5' /> {post.readTime}
                    </span>
                  </div>
                  <h3 className='mb-3 line-clamp-2 text-xl font-bold leading-tight transition-colors group-hover:text-primary'>
                    {post.title}
                  </h3>
                  <p className='mb-6 flex-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground'>
                    {post.excerpt}
                  </p>

                  <div className='mb-4 flex items-center gap-2'>
                    <Avatar className='h-6 w-6 border border-border shadow-sm'>
                      <AvatarImage src='/logo.jpeg' alt='PostEngage.ai' />
                      <AvatarFallback>PE</AvatarFallback>
                    </Avatar>
                    <span className='text-xs font-medium text-muted-foreground'>
                      PostEngage.ai Team
                    </span>
                  </div>

                  <div className='mt-auto flex items-center border-t border-border/50 pt-4 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1'>
                    Read Article <ArrowRight className='ml-1.5 h-4 w-4' />
                  </div>
                </CardContent>
              </Link>
            ))}
          </div>
        ) : (
          !featuredPost && (
            <div className='rounded-3xl border border-dashed border-border bg-muted/30 py-20 text-center'>
              <p className='text-lg text-muted-foreground'>
                No articles found matching your criteria.
              </p>
              <Button
                variant='link'
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className='mt-2'
              >
                Clear filters
              </Button>
            </div>
          )
        )}
      </section>
    </div>
  );
}

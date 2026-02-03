'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
  
  const categories = ['All', 'Product', 'Partnership', 'Guide', 'Engineering'];

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, searchQuery, selectedCategory]);

  const featuredPost = filteredPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => p !== featuredPost);

  return (
    <div className='space-y-12'>
      {/* Search & Categories */}
      <div className='mx-auto max-w-4xl'>
        <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
          <div className='flex flex-wrap justify-center gap-2'>
            {categories.map((cat) => (
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
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none' />
            <Input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search articles...'
              className='pl-9 pr-9 rounded-full bg-muted/50 focus:bg-background transition-colors'
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
          Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </div>
      )}

      {/* Featured Post (only show if it exists in filtered results) */}
      {featuredPost && (
        <section className='mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500'>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className='group block'
          >
            <div className='grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-border bg-card/50 p-6 md:p-10 transition-all hover:border-primary/50 hover:shadow-xl hover:bg-card'>
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
                  <div className='absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30'>
                    <span className='font-medium'>Image Coming Soon</span>
                  </div>
                )}
              </div>
              <div className='flex flex-col justify-center space-y-6'>
                <div className='flex items-center gap-3'>
                  <Badge variant='default' className='rounded-full bg-primary/10 text-primary hover:bg-primary/20 border-0'>
                    {featuredPost.category}
                  </Badge>
                  <span className='text-sm text-muted-foreground flex items-center gap-1.5'>
                    <Calendar className='h-3.5 w-3.5' /> {featuredPost.date}
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight group-hover:text-primary transition-colors leading-tight'>
                  {featuredPost.title}
                </h2>
                <p className='text-lg text-muted-foreground line-clamp-3 leading-relaxed'>
                  {featuredPost.excerpt}
                </p>
                <div className='flex items-center gap-4 pt-2'>
                  <div className='flex items-center gap-2 text-sm font-medium'>
                    <div className='h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-primary-foreground font-bold text-xs shadow-sm'>
                      PE
                    </div>
                    <span>PostEngage.ai Team</span>
                  </div>
                  <span className='h-1 w-1 rounded-full bg-border'></span>
                  <span className='text-sm text-muted-foreground flex items-center gap-1.5'>
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
                className={`group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 duration-300 ${
                  post.slug === '#' ? 'opacity-70 pointer-events-none grayscale' : ''
                }`}
              >
                <div className='relative aspect-video w-full overflow-hidden bg-muted border-b border-border/50'>
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  ) : (
                    <div className='absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30'>
                      <span className='font-medium text-sm'>Coming Soon</span>
                    </div>
                  )}
                  <div className='absolute top-4 left-4'>
                     <Badge variant="secondary" className="backdrop-blur-md bg-background/80 hover:bg-background/90 shadow-sm border-0">
                        {post.category}
                     </Badge>
                  </div>
                </div>
                <CardContent className='flex flex-1 flex-col p-6'>
                  <div className='mb-4 flex items-center gap-3 text-xs text-muted-foreground font-medium'>
                    <time className='flex items-center gap-1.5'>
                        <Calendar className='h-3.5 w-3.5' /> {post.date}
                    </time>
                    <span>•</span>
                    <span className='flex items-center gap-1.5'>
                         <Clock className='h-3.5 w-3.5' /> {post.readTime}
                    </span>
                  </div>
                  <h3 className='mb-3 text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2'>
                    {post.title}
                  </h3>
                  <p className='mb-6 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed'>
                    {post.excerpt}
                  </p>
                  <div className='mt-auto pt-4 border-t border-border/50 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform'>
                    Read Article <ArrowRight className='ml-1.5 h-4 w-4' />
                  </div>
                </CardContent>
              </Link>
            ))}
          </div>
        ) : (
          !featuredPost && (
             <div className='text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border'>
                <p className='text-muted-foreground text-lg'>No articles found matching your criteria.</p>
                <Button 
                    variant="link" 
                    onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All');
                    }}
                    className="mt-2"
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

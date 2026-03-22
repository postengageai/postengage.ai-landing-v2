import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogProse } from '@/components/blog/mdx-components';
import { ShareButtons } from '@/components/blog/share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { Button } from '@/components/ui/button';
import { getPostBySlug, getRelatedPosts, getAllSlugs } from '@/lib/blog';
import { APP_URL } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://postengage.ai/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(post.image && { images: [post.image] }),
    },
    alternates: {
      canonical: `https://postengage.ai/blog/${slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  // Schema.org Article JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PostEngage.ai',
      url: 'https://postengage.ai',
    },
    mainEntityOfPage: `https://postengage.ai/blog/${slug}`,
    ...(post.image && { image: post.image }),
  };

  return (
    <div className='min-h-screen bg-background'>
      <LandingHeader />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className='mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6'>
        {/* Back link */}
        <Link
          href='/blog'
          className='mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to Blog
        </Link>

        {/* Header */}
        <header className='mb-10'>
          <div className='mb-4 flex flex-wrap items-center gap-2'>
            <span className='rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary'>
              {post.category}
            </span>
            {post.tags.map(tag => (
              <span
                key={tag}
                className='rounded-md bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground'
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
            {post.title}
          </h1>

          <p className='mt-4 text-lg text-muted-foreground'>
            {post.description}
          </p>

          <div className='mt-6 flex flex-wrap items-center gap-6 border-b border-border/40 pb-6'>
            {/* Author */}
            <div className='flex items-center gap-2'>
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className='rounded-full'
                />
              ) : (
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary'>
                  {post.author.name.charAt(0)}
                </div>
              )}
              <span className='text-sm font-medium text-foreground'>
                {post.author.name}
              </span>
            </div>

            <span className='flex items-center gap-1.5 text-sm text-muted-foreground'>
              <Calendar className='h-4 w-4' />
              {formatDate(post.date)}
            </span>

            <span className='flex items-center gap-1.5 text-sm text-muted-foreground'>
              <Clock className='h-4 w-4' />
              {post.readingTime}
            </span>

            <div className='ml-auto'>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>
        </header>

        {/* Hero image */}
        {post.image && (
          <div className='relative mb-10 aspect-[2/1] overflow-hidden rounded-xl border border-border/40'>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className='object-cover'
              priority
            />
          </div>
        )}

        {/* Content layout */}
        <div className='flex gap-10 lg:gap-14'>
          {/* Article */}
          <article className='min-w-0 flex-1'>
            <BlogProse htmlContent={post.htmlContent || ''} />

            {/* CTA */}
            <div className='my-12 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 p-8 text-center'>
              <h3 className='text-xl font-bold text-foreground'>
                Ready to grow your Instagram on autopilot?
              </h3>
              <p className='mx-auto mt-2 max-w-md text-sm text-muted-foreground'>
                PostEngage automates your DMs, comments, and story replies while
                tracking every metric so you can see the ROI.
              </p>
              <Button className='mt-5' size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>Try PostEngage Free</Link>
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className='hidden w-64 shrink-0 lg:block'>
            <div className='sticky top-24 space-y-6'>
              <TableOfContents />

              {/* Share */}
              <div className='rounded-xl border border-border/60 bg-card/50 p-5'>
                <p className='mb-3 text-sm font-semibold text-foreground'>
                  Spread the word
                </p>
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className='mt-20'>
            <h2 className='mb-8 text-2xl font-bold text-foreground'>
              Related Articles
            </h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {related.map(p => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <LandingFooter />
    </div>
  );
}

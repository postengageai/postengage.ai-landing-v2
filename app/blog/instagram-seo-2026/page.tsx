import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Search, Hash } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: 'Instagram SEO: How to Rank Your Content in 2026',
  description:
    'Hashtags are dead. Discover the new ranking factors for Instagram in 2026: Keywords, Alt Text, and User Intent.',
  openGraph: {
    title: 'Instagram SEO: How to Rank Your Content in 2026',
    description:
      'Hashtags are dead. Discover the new ranking factors for Instagram in 2026: Keywords, Alt Text, and User Intent.',
    url: 'https://postengage.ai/blog/instagram-seo-2026',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-15T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/instagram-seo-cover.png',
        width: 1200,
        height: 630,
        alt: 'Instagram SEO 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram SEO: How to Rank Your Content in 2026',
    description:
      'Hashtags are dead. Discover the new ranking factors for Instagram in 2026.',
    images: ['/blog/instagram-seo-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Instagram SEO: How to Rank Your Content in 2026',
    image: ['/blog/instagram-seo-cover.png'],
    datePublished: '2026-03-15T09:00:00.000Z',
    dateModified: '2026-03-15T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'PostEngageAI Team',
        url: 'https://postengage.ai/about',
      },
    ],
  };

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20'>
      <ArticleJsonLd
        title='Instagram SEO: How to Rank Your Content in 2026'
        description='Hashtags are dead. Discover the new ranking factors for Instagram in 2026: Keywords, Alt Text, and User Intent.'
        slug='instagram-seo-2026'
        datePublished='2026-03-15T09:00:00.000Z'
        category='Growth Strategy'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='flex-1 pt-32 pb-24'>
        <BlogJsonLd
          title='Instagram SEO: How to Rank Your Content in 2026'
          description='Hashtags are dead. Discover the new ranking factors for Instagram in 2026: Keywords, Alt Text, and User Intent.'
          slug='instagram-seo-2026'
          date='2026-03-15T09:00:00.000Z'
          category='Growth Strategy'
        />
        <article className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          {/* Navigation & Breadcrumb */}
          <div className='mb-12 flex items-center justify-between'>
            <Link
              href='/blog'
              className='group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
              Back to Blog
            </Link>
            <SocialShareButtons
              title='Instagram SEO: How to Rank Your Content in 2026'
              url='https://postengage.ai/blog/instagram-seo-2026'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Growth Strategy
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                6 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Mar 15, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Instagram SEO: How to Rank Your Content in 2026
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Stop spamming hashtags. Start optimizing for search intent. Here
              is the definitive guide to getting discovered on the Explore page.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Hash className='h-8 w-8 text-primary/70' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
                <div className='h-1.5 w-12 rounded-full bg-primary/20' />
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            {/* Sidebar - Table of Contents */}
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      id: 'hashtags-vs-keywords',
                      title: 'Hashtags vs. Keywords',
                    },
                    {
                      id: 'ranking-factors',
                      title: 'The 3 Ranking Factors',
                    },
                    {
                      id: 'alt-text',
                      title: 'Why Alt Text Matters',
                    },
                    {
                      id: 'voice-search',
                      title: 'Optimizing for Voice',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Boost Your Reach?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Our AI automatically suggests SEO-friendly captions.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard'>Try AI Caption Writer</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  Remember when you could just slap #fyp #viral on a post and
                  get 10k views? Those days are gone. Instagram is now a search
                  engine, not just a feed.
                </p>

                <h2
                  id='hashtags-vs-keywords'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Hashtags vs. Keywords
                </h2>
                <p>
                  In 2026, the Instagram algorithm reads your content like
                  Google reads a website.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                  <div className='p-6 bg-red-500/10 border border-red-500/20 rounded-xl'>
                    <h3 className='text-lg font-bold text-red-600 mb-2 flex items-center'>
                      <Hash className='w-5 h-5 mr-2' /> Old Way (Hashtags)
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      #marketing #business #growth #money #success
                    </p>
                    <p className='text-xs mt-2 text-red-500 font-medium'>
                      Result: Spammy, low intent traffic.
                    </p>
                  </div>
                  <div className='p-6 bg-green-500/10 border border-green-500/20 rounded-xl'>
                    <h3 className='text-lg font-bold text-green-600 mb-2 flex items-center'>
                      <Search className='w-5 h-5 mr-2' /> New Way (Keywords)
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      "Best marketing strategies for small business owners in
                      2026"
                    </p>
                    <p className='text-xs mt-2 text-green-500 font-medium'>
                      Result: High intent, searchable traffic.
                    </p>
                  </div>
                </div>

                <h2
                  id='ranking-factors'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The 3 Ranking Factors
                </h2>
                <ol className='list-decimal pl-5 space-y-4'>
                  <li>
                    <strong>Caption Keywords:</strong> Include your target
                    phrase in the first sentence of your caption.
                  </li>
                  <li>
                    <strong>Profile Bio:</strong> Your bio name and description
                    are searchable. Don't just put "CEO". Put "Real Estate Agent
                    in Austin".
                  </li>
                  <li>
                    <strong>Engagement Velocity:</strong> How quickly people
                    save and share your post tells the algorithm it's valuable.
                  </li>
                </ol>

                <h2
                  id='alt-text'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Why Alt Text Matters
                </h2>
                <p>
                  Alt text was designed for accessibility, but it's a goldmine
                  for SEO. It explicitly tells the algorithm what is in your
                  image.
                </p>
                <blockquote className='border-l-4 border-primary pl-4 italic my-4'>
                  Pro Tip: Don't leave Alt Text blank. Describe the image using
                  your target keywords naturally.
                </blockquote>

                <h2
                  id='voice-search'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Optimizing for Voice
                </h2>
                <p>
                  With the rise of smart glasses and voice assistants, people
                  are searching Instagram with their voice.
                </p>
                <p>"Hey Instagram, show me vegan restaurants near me."</p>
                <p>
                  If your bio and content don't contain "vegan restaurant" and
                  location data, you are invisible.
                </p>
              </div>

              {/* Author Bio */}
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/logo.jpeg' alt='PostEngage.ai Team' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Growth Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <NewsletterForm />
      </main>

      <LandingFooter />
    </div>
  );
}

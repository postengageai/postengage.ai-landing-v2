import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Bookmark, Heart, Share2, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: "The Algorithmic Shift: Why 'Saves' Are the New 'Likes' in 2026",
  description:
    'The Instagram algorithm has changed. Vanity metrics are out. Retention metrics are in. Learn how to optimize for Saves and Shares.',
  openGraph: {
    title: "The Algorithmic Shift: Why 'Saves' Are the New 'Likes' in 2026",
    description:
      'The Instagram algorithm has changed. Vanity metrics are out. Retention metrics are in. Learn how to optimize for Saves and Shares.',
    url: 'https://postengage.ai/blog/algorithm-shift-saves-vs-likes',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-23T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/algorithm-shift-cover.png',
        width: 1200,
        height: 630,
        alt: 'Saves vs Likes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Algorithmic Shift: Why 'Saves' Are the New 'Likes' in 2026",
    description:
      'The Instagram algorithm has changed. Learn how to optimize for Saves and Shares.',
    images: ['/blog/algorithm-shift-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "The Algorithmic Shift: Why 'Saves' Are the New 'Likes' in 2026",
    image: ['/blog/algorithm-shift-cover.png'],
    datePublished: '2026-02-23T09:00:00.000Z',
    dateModified: '2026-02-23T09:00:00.000Z',
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='flex-1 pt-32 pb-24'>
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
              title="The Algorithmic Shift: Why 'Saves' Are the New 'Likes' in 2026"
              url='https://postengage.ai/blog/algorithm-shift-saves-vs-likes'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Algorithm
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                5 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Feb 23, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              The Algorithmic Shift: Why 'Saves' Are the New 'Likes' in 2026
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Stop chasing vanity metrics. If you want viral reach in 2026, you
              need to create content that people want to keep.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Bookmark className='h-8 w-8 text-primary/70' />
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
                      id: 'the-hierarchy',
                      title: 'The Hierarchy of Engagement',
                    },
                    {
                      id: 'why-saves-matter',
                      title: 'Why Saves Matter',
                    },
                    {
                      id: 'creating-saveable-content',
                      title: 'Creating Saveable Content',
                    },
                    {
                      id: 'the-automation-hack',
                      title: 'The Automation Hack',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Boost your Saves?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Deliver value instantly via DM to encourage saves.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard/automations/new'>Learn How</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  Remember when we used to judge an account by how many Likes it
                  got? That seems like ancient history now. In 2026, a post with
                  100 likes can out-perform a post with 1,000 likes if it has
                  more Saves and Shares.
                </p>

                <h2
                  id='the-hierarchy'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Hierarchy of Engagement
                </h2>
                <p>
                  Instagram's AI goal is simple: <strong>Retention</strong>.
                  They want users to stay on the app.
                </p>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-center p-4 bg-card border rounded-lg opacity-60'>
                    <Heart className='h-6 w-6 text-red-500 mr-4' />
                    <div>
                      <div className='font-bold'>1. Like (1 Point)</div>
                      <div className='text-xs'>
                        Passive action. Easy to fake. Low value.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center p-4 bg-card border rounded-lg opacity-80'>
                    <TrendingUp className='h-6 w-6 text-blue-500 mr-4' />
                    <div>
                      <div className='font-bold'>2. Comment (5 Points)</div>
                      <div className='text-xs'>
                        Active engagement. Requires effort. Medium value.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center p-4 bg-card border-2 border-primary rounded-lg shadow-md'>
                    <Share2 className='h-6 w-6 text-green-500 mr-4' />
                    <div>
                      <div className='font-bold'>3. Share (10 Points)</div>
                      <div className='text-xs'>
                        Virality engine. Brings new users to the app. High
                        value.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center p-4 bg-primary/10 border-2 border-primary rounded-lg shadow-lg'>
                    <Bookmark className='h-6 w-6 text-purple-500 mr-4' />
                    <div>
                      <div className='font-bold'>4. Save (20 Points)</div>
                      <div className='text-xs'>
                        The Gold Standard. Signals "This is valuable enough to
                        keep."
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  id='why-saves-matter'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Why Saves Matter
                </h2>
                <p>
                  A "Save" tells the algorithm:{' '}
                  <em>
                    "This user found this content so useful they want to come
                    back to it."
                  </em>
                </p>
                <p>
                  Content that gets saved has a much longer shelf life. While a
                  "Liked" post dies in 24 hours, a "Saved" post can continue to
                  get reach for weeks as users revisit it.
                </p>

                <h2
                  id='creating-saveable-content'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Creating Saveable Content
                </h2>
                <p>
                  You don't get saves by posting selfies. You get saves by
                  posting <strong>utility</strong>.
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>
                    <strong>Checklists:</strong> "The Ultimate 2026 SEO
                    Checklist"
                  </li>
                  <li>
                    <strong>Tutorials:</strong> "How to fix X in 3 steps"
                  </li>
                  <li>
                    <strong>Data/Infographics:</strong> "Market trends for Q1"
                  </li>
                  <li>
                    <strong>Quotes:</strong> Deeply resonant statements.
                  </li>
                </ul>

                <h2
                  id='the-automation-hack'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Automation Hack
                </h2>
                <p>
                  Here is the secret weapon:{' '}
                  <strong>Use automation to force the Save.</strong>
                </p>
                <p>
                  Instead of giving everything away in the caption, lock the
                  value behind a DM.
                </p>
                <div className='bg-muted/50 p-6 rounded-xl border-l-4 border-primary my-6'>
                  <h4 className='font-bold mb-2'>The Strategy:</h4>
                  <ol className='list-decimal pl-5 space-y-2'>
                    <li>Create a Carousel with 5 tips.</li>
                    <li>
                      The last slide says: "Want the full PDF guide? Comment{' '}
                      <strong>GUIDE</strong>."
                    </li>
                    <li>
                      When they comment, PostEngage.ai sends the PDF link via
                      DM.
                    </li>
                    <li>
                      <strong>The Hack:</strong> In the DM, say: "Here is your
                      guide! 🎁 Tip: <strong>Save the original post</strong> so
                      you don't lose this thread!"
                    </li>
                  </ol>
                </div>
                <p>
                  This creates a loop: Comment (5 points) + DM Open (Signal) +
                  Save (20 points). Your reach will explode.
                </p>

                <p>Stop optimizing for likes. Start optimizing for value.</p>
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
                      Content Team
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

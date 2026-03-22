import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, DollarSign, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: "The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs in 2026",
  description:
    'Stop leaving money on the table. A step-by-step guide to turning casual DM conversations into high-ticket sales.',
  openGraph: {
    title: "The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs in 2026",
    description:
      'Stop leaving money on the table. A step-by-step guide to turning casual DM conversations into high-ticket sales.',
    url: 'https://postengage.ai/blog/dm-to-dollar-pipeline',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-12T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/dm-to-dollar-cover.png',
        width: 1200,
        height: 630,
        alt: 'DM to Dollar Pipeline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs in 2026",
    description: 'Stop leaving money on the table. Turn DMs into sales.',
    images: ['/blog/dm-to-dollar-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs in 2026",
    image: ['/blog/dm-to-dollar-cover.png'],
    datePublished: '2026-03-12T09:00:00.000Z',
    dateModified: '2026-03-12T09:00:00.000Z',
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
        title='The'
        description='Stop leaving money on the table. A step-by-step guide to turning casual DM conversations into high-ticket sales.'
        slug='dm-to-dollar-pipeline'
        datePublished='2026-03-12T09:00:00.000Z'
        category='Monetization'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='flex-1 pt-32 pb-24'>
        <BlogJsonLd
          title='The'
          description='Stop leaving money on the table. A step-by-step guide to turning casual DM conversations into high-ticket sales.'
          slug='dm-to-dollar-pipeline'
          date='2026-03-12T09:00:00.000Z'
          category='Monetization'
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
              title="The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs in 2026"
              url='https://postengage.ai/blog/dm-to-dollar-pipeline'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Monetization
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                7 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Mar 12, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Likes don't pay the bills. Sales do. Here is the exact script and
              automation flow to turn "Nice post!" into "Order Confirmed."
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <DollarSign className='h-8 w-8 text-primary/70' />
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
                      id: 'the-problem',
                      title: 'The Problem with Manual Sales',
                    },
                    {
                      id: 'the-pipeline',
                      title: 'The Pipeline Breakdown',
                    },
                    {
                      id: 'qualification',
                      title: 'Automated Qualification',
                    },
                    {
                      id: 'closing',
                      title: 'Closing the Deal',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Build your Funnel?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Clone our high-converting DM templates.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard/automations/new'>
                        Get Templates
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  You have followers. You have engagement. But you don't have
                  sales. Why? Because you are treating DMs like a chatroom
                  instead of a showroom.
                </p>

                <h2
                  id='the-problem'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Problem with Manual Sales
                </h2>
                <p>Selling in DMs manually is a nightmare.</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>You miss messages.</li>
                  <li>You reply too late (leads cool down in 5 minutes).</li>
                  <li>You copy-paste the same answers 100 times.</li>
                  <li>You get burnout.</li>
                </ul>
                <p>
                  The solution isn't to hire more sales reps. It's to build a
                  <strong>DM-to-Dollar Pipeline</strong>.
                </p>

                <h2
                  id='the-pipeline'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Pipeline Breakdown
                </h2>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-center p-4 bg-card border rounded-lg'>
                    <div className='bg-primary/10 text-primary h-8 w-8 rounded-full flex items-center justify-center font-bold mr-4'>
                      1
                    </div>
                    <div>
                      <div className='font-bold'>Trigger</div>
                      <div className='text-sm text-muted-foreground'>
                        Keyword in Comments ("COURSE") or Story Reply.
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center justify-center py-2'>
                    <ArrowRight className='h-6 w-6 text-muted-foreground rotate-90' />
                  </div>
                  <div className='flex items-center p-4 bg-card border rounded-lg'>
                    <div className='bg-primary/10 text-primary h-8 w-8 rounded-full flex items-center justify-center font-bold mr-4'>
                      2
                    </div>
                    <div>
                      <div className='font-bold'>Value Delivery</div>
                      <div className='text-sm text-muted-foreground'>
                        Instant DM with free value (PDF, Video, Tip).
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center justify-center py-2'>
                    <ArrowRight className='h-6 w-6 text-muted-foreground rotate-90' />
                  </div>
                  <div className='flex items-center p-4 bg-card border rounded-lg'>
                    <div className='bg-primary/10 text-primary h-8 w-8 rounded-full flex items-center justify-center font-bold mr-4'>
                      3
                    </div>
                    <div>
                      <div className='font-bold'>Qualification</div>
                      <div className='text-sm text-muted-foreground'>
                        Ask 2-3 questions to see if they are a fit.
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center justify-center py-2'>
                    <ArrowRight className='h-6 w-6 text-muted-foreground rotate-90' />
                  </div>
                  <div className='flex items-center p-4 bg-green-500/10 border-green-500/20 border rounded-lg'>
                    <DollarSign className='h-6 w-6 text-green-600 mr-4' />
                    <div>
                      <div className='font-bold'>The Pitch</div>
                      <div className='text-sm text-muted-foreground'>
                        Present the offer ONLY to qualified leads.
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  id='qualification'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Automated Qualification
                </h2>
                <p>This is where most people fail. They pitch too early.</p>
                <p>
                  Use PostEngage.ai to ask simple "Yes/No" or multiple-choice
                  questions automatically.
                </p>
                <p>
                  <em>Example for a Fitness Coach:</em>
                </p>
                <blockquote className='border-l-4 border-primary pl-4 italic my-4'>
                  "Thanks for downloading the meal plan! Are you looking to lose
                  weight or build muscle right now?"
                </blockquote>
                <p>
                  If they say "Lose Weight" &gt; Tag as 'Weight Loss Lead'. If
                  they say "Build Muscle" &gt; Tag as 'Muscle Lead'.
                </p>

                <h2
                  id='closing'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Closing the Deal
                </h2>
                <p>Once they are tagged, you can either:</p>
                <ol className='list-decimal pl-5 space-y-2'>
                  <li>
                    <strong>Send a Checkout Link:</strong> For products under
                    $100.
                  </li>
                  <li>
                    <strong>Book a Call:</strong> For high-ticket coaching
                    ($1k+).
                  </li>
                </ol>
                <p>
                  The best part? You only talk to people who have already said
                  "Yes" three times (Comment, DM Open, Qualification).
                </p>
                <p>Stop chasing leads. Let them come to you.</p>
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
                      Sales Team
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

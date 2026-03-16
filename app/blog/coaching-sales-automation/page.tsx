import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { TableOfContents } from '@/components/blog/table-of-contents';

export const metadata: Metadata = {
  title: 'How High-Ticket Coaches are Booking 50+ Calls/Month with AI',
  description:
    'Stop paying appointment setters $3k/month. Automate your outreach and booking flow with Instagram DM automation.',
  openGraph: {
    title: 'How High-Ticket Coaches are Booking 50+ Calls/Month with AI',
    description:
      'Stop paying appointment setters $3k/month. Automate your outreach and booking flow with Instagram DM automation.',
    url: 'https://postengage.ai/blog/coaching-sales-automation',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-18T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/coaching-sales-cover.png',
        width: 1200,
        height: 630,
        alt: 'Coaching Sales Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How High-Ticket Coaches are Booking 50+ Calls/Month with AI',
    description:
      'Stop paying appointment setters $3k/month. Automate your booking flow.',
    images: ['/blog/coaching-sales-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How High-Ticket Coaches are Booking 50+ Calls/Month with AI',
    image: ['/blog/coaching-sales-cover.png'],
    datePublished: '2026-03-18T09:00:00.000Z',
    dateModified: '2026-03-18T09:00:00.000Z',
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
              title='How High-Ticket Coaches are Booking 50+ Calls/Month with AI'
              url='https://postengage.ai/blog/coaching-sales-automation'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Coaching & Consulting
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                8 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Mar 18, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              How High-Ticket Coaches are Booking 50+ Calls/Month with AI
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              The Appointment Setter role is being automated. Discover the
              3-step "Triaging" framework that qualifies leads while you sleep.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Sparkles className='h-8 w-8 text-primary/70' />
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
                      id: 'the-setter-problem',
                      title: 'The Setter Problem',
                    },
                    {
                      id: 'ai-triaging',
                      title: 'AI Triaging Framework',
                    },
                    {
                      id: 'the-calendar-integration',
                      title: 'The Calendar Hack',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Scale Your Coaching?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Install our 'High Ticket' bot template.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard'>Install Template</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  If you are paying a human setter $3,000/month + 10% commission
                  to ask "What are your goals?" in the DMs, you are burning
                  cash.
                </p>

                <h2
                  id='the-setter-problem'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Setter Problem
                </h2>
                <p>
                  Humans are slow. They sleep. They have bad days. Your leads
                  are most excited 30 seconds after they watch your Reel. By the
                  time your setter replies 4 hours later, the excitement is
                  gone.
                </p>

                <h2
                  id='ai-triaging'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  AI Triaging Framework
                </h2>
                <p>
                  We built a framework called "The 3 Qs" that PostEngage
                  executes perfectly.
                </p>
                <div className='space-y-4 my-8 not-prose'>
                  <div className='bg-card p-4 rounded border'>
                    <div className='font-bold text-primary mb-1'>
                      Q1: Current State
                    </div>
                    <div className='text-sm'>
                      "Where are you currently at with your [Problem]?"
                    </div>
                  </div>
                  <div className='bg-card p-4 rounded border'>
                    <div className='font-bold text-primary mb-1'>
                      Q2: Desired State
                    </div>
                    <div className='text-sm'>
                      "Where do you want to be in 90 days?"
                    </div>
                  </div>
                  <div className='bg-card p-4 rounded border'>
                    <div className='font-bold text-primary mb-1'>Q3: Gap</div>
                    <div className='text-sm'>
                      "What do you think is holding you back?"
                    </div>
                  </div>
                </div>
                <p>
                  If the AI detects they have a problem you can solve, it drops
                  the link. If not, it sends a free resource and ends the chat.
                </p>

                <h2
                  id='the-calendar-integration'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Calendar Hack
                </h2>
                <p>
                  Don't just send a Calendly link. The AI says: "I have an
                  opening this Thursday at 2pm EST. Does that work for you?"
                </p>
                <p>
                  This conversational approach converts 3x better than "Here is
                  my link."
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
                      Coaching Vertical
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

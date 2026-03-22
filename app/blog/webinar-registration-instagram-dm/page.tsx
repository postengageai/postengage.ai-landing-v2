import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Video, Ticket, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
  description:
    'Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.',
  openGraph: {
    title: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
    description:
      'Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.',
    type: 'article',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
      },
    ],
    publishedTime: '2026-03-16',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 16, 2026';
  const readTime = '6 min read';

  const tableOfContents = [
    {
      id: 'webinar-landing-page-dead',
      title: 'The Webinar Landing Page is Dead',
    },
    { id: 'one-click-registration', title: 'One-Click Registration' },
    { id: 'show-up-sequence', title: 'The Show-Up Sequence' },
    { id: 'post-webinar-sales', title: 'Post-Webinar Sales' },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <ArticleJsonLd
        title='Webinar Automation: How to Fill Seats Using Instagram DMs'
        description='Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.'
        slug='webinar-registration-instagram-dm'
        datePublished='2026-03-16'
        category='Events'
      />

      <LandingHeader />

      <main className='flex-1'>
        <BlogJsonLd
          title='Webinar Automation: How to Fill Seats Using Instagram DMs'
          description='Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.'
          slug='webinar-registration-instagram-dm'
          date='2026-03-16'
          category='Events'
        />
        <article className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
          {/* Breadcrumb & Meta */}
          <header className='mx-auto mb-8 max-w-3xl'>
            <Link
              href='/blog'
              className='mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>

            <div className='mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <Badge variant='secondary' className='rounded-full px-3 py-1'>
                Events
              </Badge>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{publishDate}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{readTime}</span>
              </div>
            </div>

            <h1 className='mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              Webinar Automation: How to Fill Seats Using Instagram DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Stop asking people to "Click the Link in Bio to Register". Make it
              frictionless. Make it conversational. Make it fill up.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Ticket className='h-8 w-8 text-primary/70' />
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
              <div className='sticky top-24 space-y-8'>
                <TableOfContents items={tableOfContents} />
                <div className='space-y-4'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                    Share this article
                  </h4>
                  <SocialShareButtons
                    url='https://postengage.ai/blog/webinar-registration-instagram-dm'
                    title='Webinar Automation: How to Fill Seats Using Instagram DMs'
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                {/* Introduction */}
                <p>
                  We analyzed 500 webinars in 2025. The #1 reason for low
                  attendance?
                  <strong>Friction.</strong>
                </p>
                <p>
                  Every click costs you 50% of your traffic. Sending people from
                  Instagram {'->'} LinkTree {'->'} Landing Page {'->'} Form is
                  suicide for your conversion rate.
                </p>

                <h2
                  id='webinar-landing-page-dead'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Webinar Landing Page is Dead
                </h2>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-start p-4 bg-muted/50 border rounded-lg'>
                    <Ticket className='h-6 w-6 text-muted-foreground mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold'>Traditional Funnel</div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        4 Steps. 20% Registration Rate.
                        <br />
                        <strong>User Experience:</strong> Annoying forms.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start p-4 bg-primary/10 border border-primary/20 rounded-lg'>
                    <Video className='h-6 w-6 text-primary mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold text-primary'>
                        DM Registration
                      </div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        1 Step. 60% Registration Rate.
                        <br />
                        <strong>User Experience:</strong> "Just reply 'YES' to
                        attend."
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  id='one-click-registration'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  One-Click Registration
                </h2>
                <p>
                  With PostEngage.ai, you can capture their email directly in
                  the chat.
                </p>
                <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    <strong>Post a Reel:</strong> "I'm hosting a masterclass on
                    scaling ads. Comment <strong>LIVE</strong> to join."
                  </li>
                  <li>
                    <strong>Bot DMs User:</strong> "Hey! Excited to see you
                    there. Tap below to confirm your spot."
                  </li>
                  <li>
                    <strong>User Taps Button:</strong> Their email is
                    automatically sent to your webinar platform
                    (Zoom/ZoomWebinar).
                  </li>
                </ol>

                <h2
                  id='show-up-sequence'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Show-Up Sequence
                </h2>
                <p>Emails get buried in "Promotions". DMs get read.</p>
                <p>
                  Set your automation to send a DM reminder 15 minutes before
                  you go live:
                  <em>
                    "We are starting in 15! 🚀 Here is the direct link to the
                    room: [LINK]"
                  </em>
                </p>
                <p>This single tactic can double your live attendance.</p>

                <h2
                  id='post-webinar-sales'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Post-Webinar Sales
                </h2>
                <p>
                  After the webinar, trigger a follow-up DM to everyone who
                  registered but didn't buy.
                </p>
                <p>
                  <strong>Bot:</strong> "Hope you enjoyed the session! Did you
                  have any questions about the offer before the cart closes?"
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <TrendingUp className='h-6 w-6 text-primary' />
                      Pack Your Next Event
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai integrates with Zoom, WebinarJam, and more.
                      Start filling your seats on autopilot.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/sign-up'>Start Free Trial</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>View Demo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Author Bio */}
              <div className='mt-12 border-t pt-12'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage
                      src='/team-avatar.png'
                      alt='PostEngageAI Team'
                    />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Helping brands scale with intelligent automation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NewsletterForm />
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}

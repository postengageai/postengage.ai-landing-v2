import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Gem,
  CalendarCheck,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'High-Ticket Sales: Selling $5k+ Coaching Programs in DMs',
  description:
    'Stop chasing low-ticket sales. Learn how to use automated qualification to fill your calendar with high-value coaching prospects.',
  openGraph: {
    title: 'High-Ticket Sales: Selling $5k+ Coaching Programs in DMs',
    description:
      'Stop chasing low-ticket sales. Learn how to use automated qualification to fill your calendar with high-value coaching prospects.',
    type: 'article',
    publishedTime: '2026-03-14',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 14, 2026';
  const readTime = '8 min read';

  const tableOfContents = [
    { id: 'the-high-ticket-problem', title: 'The High-Ticket Problem' },
    { id: 'automated-triage', title: 'Automated Triage: Filter the Noise' },
    { id: 'the-hand-raiser-post', title: 'The "Hand Raiser" Content Strategy' },
    { id: 'booking-flow', title: 'The Booking Flow that Converts' },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <LandingHeader />

      <main className='flex-1'>
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
                Coaching
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
              High-Ticket Sales: Selling $5k+ Coaching Programs in DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              You don't need a complex webinar funnel. You need conversations.
              Here is how to automate the "Setter" role and book qualified calls
              24/7.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Featured Image: High Ticket Funnel (Content {'->'} DM {'->'}{' '}
                Call)
              </span>
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
                    url='https://postengage.ai/blog/high-ticket-coaching-automation'
                    title='High-Ticket Sales: Selling $5k+ Coaching Programs in DMs'
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                {/* Introduction */}
                <p>
                  Selling a $27 ebook is easy. Selling a $5,000 coaching program
                  requires trust. And trust is built in conversations, not on
                  sales pages.
                </p>
                <p>
                  The problem? You can't spend all day chatting with people who
                  can't afford you. You need a system to filter the "tire
                  kickers" from the "action takers."
                </p>

                <h2
                  id='the-high-ticket-problem'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The High-Ticket Problem
                </h2>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-start p-4 bg-muted/50 border rounded-lg'>
                    <MessageSquare className='h-6 w-6 text-muted-foreground mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold'>Manual DMing</div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        You spend 30 mins chatting, only to find out they have
                        $0 budget.
                        <br />
                        <strong>Result:</strong> Burnout and empty calendar.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start p-4 bg-primary/10 border border-primary/20 rounded-lg'>
                    <Gem className='h-6 w-6 text-primary mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold text-primary'>
                        Automated Triage
                      </div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        AI asks 3 qualifying questions. Only books calls with
                        qualified leads.
                        <br />
                        <strong>Result:</strong> You only talk to buyers.
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  id='automated-triage'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Automated Triage: Filter the Noise
                </h2>
                <p>
                  Your automation should act like a digital "Setter". It asks
                  the awkward questions so you don't have to.
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    <strong>The Goal Question:</strong> "What are you looking to
                    achieve in the next 90 days?"
                  </li>
                  <li>
                    <strong>The Obstacle Question:</strong> "What is stopping
                    you from doing it on your own?"
                  </li>
                  <li>
                    <strong>The Investment Question:</strong> "Are you ready to
                    invest in a mentor to get there faster?"
                  </li>
                </ul>

                <h2
                  id='the-hand-raiser-post'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The "Hand Raiser" Content Strategy
                </h2>
                <p>
                  Don't say "Link in Bio". Post a result you got for a client
                  (e.g., "How John added $10k/mo").
                </p>
                <p>
                  Then say:{' '}
                  <em>
                    "Comment <strong>SCALE</strong> and I'll send you the exact
                    roadmap we used."
                  </em>
                </p>
                <p>
                  This triggers the DM automation. They asked for value, you
                  give it to them, and <em>then</em> you qualify them.
                </p>

                <h2
                  id='booking-flow'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Booking Flow that Converts
                </h2>
                <div className='space-y-6 my-8 not-prose'>
                  <Card>
                    <CardHeader className='pb-2'>
                      <CardTitle className='text-lg flex items-center gap-2'>
                        <CalendarCheck className='h-5 w-5 text-green-500' />
                        The Handoff
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground mb-2'>
                        <strong>Bot:</strong> "Based on your answers, it sounds
                        like you are a perfect fit for our Accelerator."
                      </p>
                      <p className='text-sm mb-2'>
                        <strong>Bot:</strong> "I have opened up a few spots on
                        my calendar for a strategy session. Want to grab one?"
                      </p>
                      <Button size='sm' className='mt-2'>
                        Book Strategy Call
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <TrendingUp className='h-6 w-6 text-primary' />
                      Fill Your Calendar with PostEngage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Stop manual setting. Start automated selling. Try
                      PostEngage.ai free for 14 days.
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

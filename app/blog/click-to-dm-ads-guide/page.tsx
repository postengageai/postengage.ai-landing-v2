import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Zap,
  MousePointerClick,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Why Click-to-DM Ads Are Killing Landing Pages in 2026',
  description:
    'Landing pages have a 2% conversion rate. DM Ads have 10%+. Here is why the "Conversation Funnel" is the new standard for paid social.',
  openGraph: {
    title: 'Why Click-to-DM Ads Are Killing Landing Pages in 2026',
    description:
      'Landing pages have a 2% conversion rate. DM Ads have 10%+. Here is why the "Conversation Funnel" is the new standard for paid social.',
    type: 'article',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Why Click-to-DM Ads Are Killing Landing Pages in 2026',
      },
    ],
    publishedTime: '2026-03-02',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 2, 2026';
  const readTime = '8 min read';

  const tableOfContents = [
    {
      id: 'the-death-of-landing-pages',
      title: 'The Death of the Landing Page',
    },
    { id: 'what-are-click-to-dm-ads', title: 'What Are Click-to-DM Ads?' },
    { id: 'why-they-convert-better', title: 'Why They Convert 5x Better' },
    { id: 'retargeting-goldmine', title: 'The Retargeting Goldmine' },
    { id: 'setting-it-up', title: 'How to Set It Up' },
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
                Ads Strategy
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
              Why Click-to-DM Ads Are Killing Landing Pages in 2026
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              The era of "Click {'->'} Wait {'->'} Read {'->'} Fill Form" is
              over. Meet the "Conversation Funnel" that's getting 10%+
              conversion rates.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-yellow-500/20 via-amber-500/10 to-orange-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Zap className='h-8 w-8 text-primary/70' />
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
                    url='https://postengage.ai/blog/click-to-dm-ads-guide'
                    title='Why Click-to-DM Ads Are Killing Landing Pages in 2026'
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                {/* Introduction */}
                <p>
                  For the last decade, the playbook was simple: Run an ad, send
                  traffic to a landing page, and pray they fill out the form.
                </p>
                <p>
                  But in 2026, user patience is at an all-time low. Asking a
                  mobile user to leave Instagram, wait for a site to load, and
                  pinch-zoom to fill out a form? That is asking for a bounce.
                </p>
                <p>
                  Enter <strong>Click-to-DM Ads</strong>.
                </p>

                <h2
                  id='the-death-of-landing-pages'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Death of the Landing Page
                </h2>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-start p-4 bg-muted/50 border rounded-lg'>
                    <MousePointerClick className='h-6 w-6 text-muted-foreground mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold'>Traditional Funnel</div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Ad {'->'} External Site (Load Time) {'->'} Read Long
                        Copy {'->'} Form {'->'} Email Confirmation.
                        <br />
                        <strong>Result:</strong> 2-3% Conversion Rate.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start p-4 bg-primary/10 border border-primary/20 rounded-lg'>
                    <MessageCircle className='h-6 w-6 text-primary mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold text-primary'>
                        Conversational Funnel
                      </div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Ad {'->'} DM Window Opens {'->'} Chatbot Qualifies Lead{' '}
                        {'->'} Sale.
                        <br />
                        <strong>Result:</strong> 10-15% Conversion Rate.
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  id='what-are-click-to-dm-ads'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  What Are Click-to-DM Ads?
                </h2>
                <p>
                  These are standard Facebook or Instagram ads (Feed, Stories,
                  Reels), but the call-to-action button isn't "Learn More"—it's
                  "Send Message".
                </p>
                <p>
                  When a user clicks, they aren't taken to a website. Instead,
                  their Instagram Direct Message window opens with a pre-filled
                  message ready to send (e.g., "I want the discount code").
                </p>

                <h2
                  id='why-they-convert-better'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Why They Convert 5x Better
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    <strong>Zero Load Time:</strong> It's instant. No waiting
                    for a slow mobile site.
                  </li>
                  <li>
                    <strong>Native Experience:</strong> Users trust Instagram
                    more than your unknown website.
                  </li>
                  <li>
                    <strong>Micro-Commitments:</strong> Replying to a chat feels
                    easier than "Submitting a Form".
                  </li>
                </ul>

                <h2
                  id='retargeting-goldmine'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Retargeting Goldmine
                </h2>
                <p>
                  Here is the best part. When someone visits your landing page
                  and leaves, you have to pay to retarget them with ads.
                </p>
                <p>
                  When someone clicks a DM Ad and sends a message,{' '}
                  <strong>you have an open conversation thread</strong>.
                </p>
                <div className='my-8 rounded-xl border bg-card p-6 shadow-sm not-prose flex items-center gap-4'>
                  <Zap className='h-10 w-10 text-yellow-500' />
                  <div>
                    <h4 className='font-semibold'>The 24-Hour Rule</h4>
                    <p className='text-muted-foreground text-sm'>
                      Once they message you, you have 24 hours to message them
                      back for free (via automation). After that, you can use
                      "Sponsored Messages" to re-engage them at a fraction of
                      the cost of feed ads.
                    </p>
                  </div>
                </div>

                <h2
                  id='setting-it-up'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  How to Set It Up
                </h2>
                <p>You need two things:</p>
                <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    <strong>Meta Ads Manager:</strong> Select the "Engagement"
                    objective and choose "Messaging Apps" as the conversion
                    location.
                  </li>
                  <li>
                    <strong>Automation Tool (PostEngage.ai):</strong> Connect
                    your tool to handle the influx of messages instantly. You
                    cannot rely on manual replies at scale.
                  </li>
                </ol>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <TrendingUp className='h-6 w-6 text-primary' />
                      Scale Your Ads with Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Stop wasting budget on bounce rates. Switch to Click-to-DM
                      ads and let PostEngage.ai handle the conversations 24/7.
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

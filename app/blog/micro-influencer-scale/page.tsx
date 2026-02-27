import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Users,
  BarChart2,
  Handshake,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Micro-Influencer Scale: Automating Outreach Without Losing Soul',
  description:
    'How to scale your influencer marketing program from 10 to 1,000 partners using intelligent automation and personalized outreach.',
  openGraph: {
    title: 'Micro-Influencer Scale: Automating Outreach Without Losing Soul',
    description:
      'How to scale your influencer marketing program from 10 to 1,000 partners using intelligent automation and personalized outreach.',
    url: 'https://postengage.ai/blog/micro-influencer-scale',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-21T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/micro-influencer-cover.png',
        width: 1200,
        height: 630,
        alt: 'Micro-Influencer Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro-Influencer Scale: Automating Outreach Without Losing Soul',
    description:
      'Scale your influencer marketing program from 10 to 1,000 partners with automation.',
    images: ['/blog/micro-influencer-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Micro-Influencer Scale: Automating Outreach Without Losing Soul',
    image: ['/blog/micro-influencer-cover.png'],
    datePublished: '2026-02-21T09:00:00.000Z',
    dateModified: '2026-02-21T09:00:00.000Z',
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
              title='Micro-Influencer Scale: Automating Outreach Without Losing Soul'
              url='https://postengage.ai/blog/micro-influencer-scale'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Influencer Marketing
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                6 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Feb 21, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Micro-Influencer Scale: Automating Outreach Without Losing Soul
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              You don't need one influencer with 1 million followers. You need
              1,000 influencers with 1,000 followers. Here's how to manage them
              all.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Featured Image: Network Graph of Influencers
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            {/* Sidebar - Table of Contents */}
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      id: 'the-micro-advantage',
                      title: 'The Micro-Influencer Advantage',
                    },
                    {
                      id: 'the-scaling-problem',
                      title: 'The Scaling Problem',
                    },
                    {
                      id: 'automating-outreach',
                      title: 'Automating Outreach',
                    },
                    {
                      id: 'managing-relationships',
                      title: 'Managing Relationships',
                    },
                    {
                      id: 'tracking-roi',
                      title: 'Tracking ROI',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Scale your outreach?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      PostEngage.ai helps you manage 100s of DMs effortlessly.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard/automations/new'>
                        Start Free Trial
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
                  The era of the "Mega Influencer" is fading. Brands in 2026 are
                  shifting budgets to "Nano" and "Micro" influencers (1k-50k
                  followers). Why? Trust.
                </p>

                <h2
                  id='the-micro-advantage'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Micro-Influencer Advantage
                </h2>
                <p>
                  Data shows that creators with under 10k followers have{' '}
                  <strong>3x higher engagement rates</strong> than those with
                  100k+. Their audience is made up of real friends, family, and
                  hyper-niche enthusiasts.
                </p>
                <ul className='space-y-4 my-6'>
                  <li className='flex items-start'>
                    <Users className='mr-3 h-5 w-5 text-primary flex-shrink-0 mt-1' />
                    <div>
                      <strong>Higher Trust:</strong> A recommendation feels like
                      it's coming from a friend, not a billboard.
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <BarChart2 className='mr-3 h-5 w-5 text-primary flex-shrink-0 mt-1' />
                    <div>
                      <strong>Lower Cost:</strong> Often, product gifting is
                      enough compensation.
                    </div>
                  </li>
                </ul>

                <h2
                  id='the-scaling-problem'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Scaling Problem
                </h2>
                <p>
                  The problem is logistics. Managing 1 deal with a celebrity is
                  easy. Managing 100 deals with micro-influencers is a
                  nightmare.
                </p>
                <p>You have to:</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Find them.</li>
                  <li>DM them.</li>
                  <li>Follow up (x3).</li>
                  <li>Send product.</li>
                  <li>Track posts.</li>
                </ul>
                <p>
                  Doing this manually limits you to maybe 10 partners a month.
                  Automation unlocks 100+.
                </p>

                <h2
                  id='automating-outreach'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Automating Outreach (Without Being Spammy)
                </h2>
                <p>
                  The worst thing you can do is use a bot to comment "Collab? DM
                  us 🔥" on random posts. That ruins your brand.
                </p>
                <p>
                  <strong>The PostEngage.ai Method:</strong>
                </p>
                <ol className='list-decimal pl-5 space-y-4'>
                  <li>
                    <strong>Identify:</strong> Use our partner tools (like
                    RecentReborn) to find accounts posting about your niche.
                  </li>
                  <li>
                    <strong>Warm Up:</strong> Automatically like 3 of their
                    recent posts over 2 days.
                  </li>
                  <li>
                    <strong>Hyper-Personalized DM:</strong> Use AI to analyze
                    their bio and last 3 captions to write a unique opener.
                  </li>
                </ol>
                <div className='bg-muted/50 p-4 rounded-lg border-l-4 border-primary my-4'>
                  <p className='italic text-muted-foreground'>
                    "Hey [Name], saw your post about [Topic]! Loved your take on
                    [Specific Detail]. We're looking for creators with your
                    exact vibe for our new campaign. Would you be open to
                    chatting?"
                  </p>
                </div>

                <h2
                  id='managing-relationships'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Managing Relationships
                </h2>
                <p>
                  Treat your DMs like a CRM. PostEngage.ai allows you to tag
                  conversations:
                </p>
                <ul className='grid sm:grid-cols-2 gap-4 not-prose my-6'>
                  <li className='p-3 bg-card border rounded-lg flex items-center gap-2'>
                    <Badge
                      variant='outline'
                      className='bg-yellow-100 text-yellow-800 border-yellow-200'
                    >
                      Outreach Sent
                    </Badge>
                  </li>
                  <li className='p-3 bg-card border rounded-lg flex items-center gap-2'>
                    <Badge
                      variant='outline'
                      className='bg-blue-100 text-blue-800 border-blue-200'
                    >
                      Negotiating
                    </Badge>
                  </li>
                  <li className='p-3 bg-card border rounded-lg flex items-center gap-2'>
                    <Badge
                      variant='outline'
                      className='bg-purple-100 text-purple-800 border-purple-200'
                    >
                      Product Shipped
                    </Badge>
                  </li>
                  <li className='p-3 bg-card border rounded-lg flex items-center gap-2'>
                    <Badge
                      variant='outline'
                      className='bg-green-100 text-green-800 border-green-200'
                    >
                      Posted ✅
                    </Badge>
                  </li>
                </ul>

                <h2
                  id='tracking-roi'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Tracking ROI
                </h2>
                <p>
                  Finally, you need to know what works. Give every influencer a
                  unique "Keyword Trigger".
                </p>
                <p>
                  Instead of a discount code (which leaks to coupon sites), tell
                  them: "Tell your followers to comment <strong>SARAH20</strong>{' '}
                  on your post for 20% off."
                </p>
                <p>
                  When a user comments "SARAH20", PostEngage.ai sends the code.
                  We track exactly how many DMs were sent per influencer, giving
                  you perfect attribution.
                </p>

                <div className='mt-12 flex items-center gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10'>
                  <Handshake className='h-10 w-10 text-primary' />
                  <div>
                    <h3 className='font-bold text-lg'>
                      Ready to build your army?
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Start automating your influencer outreach today with
                      PostEngage.ai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/logo.jpeg' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Partnership Team
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

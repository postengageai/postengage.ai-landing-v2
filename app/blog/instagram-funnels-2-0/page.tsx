import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Filter,
  Magnet,
  MousePointerClick,
  CheckCircle2,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Instagram Funnels 2.0: From Viewer to Customer in 3 Clicks',
  description:
    'The "Link in Bio" is dead. Learn how to build automated sales funnels that convert 5x higher using Keyword Triggers and DM Automation.',
  openGraph: {
    title: 'Instagram Funnels 2.0: From Viewer to Customer in 3 Clicks',
    description:
      'The "Link in Bio" is dead. Learn how to build automated sales funnels that convert 5x higher using Keyword Triggers and DM Automation.',
    url: 'https://postengage.ai/blog/instagram-funnels-2-0',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-22T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/funnels-2-0-cover.png',
        width: 1200,
        height: 630,
        alt: 'Instagram Funnels 2.0',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Funnels 2.0: From Viewer to Customer in 3 Clicks',
    description:
      'The "Link in Bio" is dead. Learn how to build automated sales funnels that convert 5x higher.',
    images: ['/blog/funnels-2-0-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Instagram Funnels 2.0: From Viewer to Customer in 3 Clicks',
    image: ['/blog/funnels-2-0-cover.png'],
    datePublished: '2026-02-22T09:00:00.000Z',
    dateModified: '2026-02-22T09:00:00.000Z',
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
              title='Instagram Funnels 2.0: From Viewer to Customer in 3 Clicks'
              url='https://postengage.ai/blog/instagram-funnels-2-0'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Strategy
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                7 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Feb 22, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Instagram Funnels 2.0: From Viewer to Customer in 3 Clicks
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Stop telling people to "Link in Bio". It's killing your conversion
              rate. Here is the new way to sell on Instagram.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Magnet className='h-8 w-8 text-primary/70' />
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
                      id: 'death-of-link-in-bio',
                      title: 'The Death of "Link in Bio"',
                    },
                    {
                      id: 'the-new-funnel',
                      title: 'The New Funnel: Comment to DM',
                    },
                    {
                      id: 'keyword-triggers',
                      title: 'Magic Keywords',
                    },
                    {
                      id: 'auto-qualification',
                      title: 'Auto-Qualifying Leads',
                    },
                    {
                      id: 'results',
                      title: 'The Results',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Build your funnel?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Create your first keyword trigger in 60 seconds.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard/automations/new'>Start Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  For a decade, the "Link in Bio" was the holy grail of
                  Instagram marketing. It was also the biggest bottleneck.
                  Asking a user to leave their feed, go to your profile, click a
                  link, wait for a browser to load, and then find the product?
                  That's asking too much.
                </p>

                <h2
                  id='death-of-link-in-bio'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Death of "Link in Bio"
                </h2>
                <p>
                  In 2026, friction is the enemy. Every click you force a user
                  to make drops your conversion rate by 50%. The "Link in Bio"
                  requires 4 clicks.
                </p>
                <p>
                  <strong>The Old Way (4 Clicks):</strong>
                  <br />
                  Tap Profile &rarr; Tap Link &rarr; Tap Product &rarr; Add to
                  Cart.
                </p>
                <p>
                  <strong>The New Way (1 Action):</strong>
                  <br />
                  Comment "SHOES" &rarr; Get DM with Checkout Link.
                </p>

                <h2
                  id='the-new-funnel'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The New Funnel: Comment to DM
                </h2>
                <p>
                  This is "Conversational Commerce". It keeps the user on the
                  platform they love (Instagram) until the very last second.
                </p>
                <div className='my-6 p-6 bg-card border rounded-xl shadow-sm'>
                  <h3 className='text-lg font-bold mb-4 flex items-center'>
                    <Magnet className='mr-2 h-5 w-5 text-primary' />
                    The Perfect Flow
                  </h3>
                  <ol className='space-y-4'>
                    <li className='flex gap-3'>
                      <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary'>
                        1
                      </span>
                      <span>You post a Reel showcasing a product.</span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary'>
                        2
                      </span>
                      <span>
                        CTA: "Comment <strong>SUMMER</strong> to get the look."
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary'>
                        3
                      </span>
                      <span>
                        PostEngage.ai detects the keyword and instantly sends a
                        DM.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary'>
                        4
                      </span>
                      <span>
                        User opens DM, sees a beautiful card with a "Buy Now"
                        button.
                      </span>
                    </li>
                  </ol>
                </div>

                <h2
                  id='keyword-triggers'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Magic Keywords
                </h2>
                <p>
                  The key to this strategy is the{' '}
                  <strong>Keyword Trigger</strong>. It turns passive engagement
                  (viewing) into active engagement (commenting).
                </p>
                <p>
                  Bonus: The algorithm LOVES comments. By asking people to
                  comment, you are signaling to Instagram that your content is
                  engaging, which pushes it to more people. It's a flywheel
                  effect.
                </p>

                <h2
                  id='auto-qualification'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Auto-Qualifying Leads
                </h2>
                <p>
                  For service businesses, you don't just want to send a link.
                  You want to qualify the lead.
                </p>
                <p>
                  With PostEngage.ai, you can build a mini-chat funnel inside
                  the DM:
                </p>
                <div className='bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-2'>
                  <p className='text-muted-foreground'>User: "COACHING"</p>
                  <p className='text-primary'>
                    Bot: "Hey! 👋 Ready to scale? First, what is your current
                    monthly revenue?"
                  </p>
                  <p className='text-muted-foreground'>User: "$10k"</p>
                  <p className='text-primary'>
                    Bot: "Awesome. We help businesses between $5k-$50k. Here is
                    the link to book a call!"
                  </p>
                </div>

                <h2
                  id='results'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Results
                </h2>
                <p>Brands switching to Funnels 2.0 are seeing:</p>
                <ul className='grid sm:grid-cols-2 gap-4 not-prose my-6'>
                  <li className='flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20'>
                    <CheckCircle2 className='h-5 w-5 text-green-600' />
                    <span className='font-medium'>300% More Comments</span>
                  </li>
                  <li className='flex items-center gap-2 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20'>
                    <MousePointerClick className='h-5 w-5 text-blue-600' />
                    <span className='font-medium'>80% DM Open Rate</span>
                  </li>
                  <li className='flex items-center gap-2 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20'>
                    <Filter className='h-5 w-5 text-purple-600' />
                    <span className='font-medium'>Automated Qualification</span>
                  </li>
                  <li className='flex items-center gap-2 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20'>
                    <Magnet className='h-5 w-5 text-orange-600' />
                    <span className='font-medium'>24/7 Sales Agent</span>
                  </li>
                </ul>

                <p>
                  Ready to stop losing sales to friction? Build your first
                  funnel today.
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
                      Growth Strategy Team
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

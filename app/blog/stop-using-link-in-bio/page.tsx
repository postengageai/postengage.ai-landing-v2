import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MousePointerClick, Zap } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'DM Automation Converts 5x vs Link in Bio',
  description:
    'The "Link in Bio" is dead. Discover why top creators are switching to DM automation to skyrocket their sales and engagement.',
  openGraph: {
    title:
      'DM Automation Converts 5x vs Link in Bio',
    description:
      'The "Link in Bio" is dead. Discover why top creators are switching to DM automation to skyrocket their sales and engagement.',
    url: 'https://postengage.ai/blog/stop-using-link-in-bio',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-01T09:00:00.000Z',
    authors: ['Sarah Jenkins'],
    images: [
      {
        url: '/blog/link-in-bio-dead-cover.png',
        width: 1200,
        height: 630,
        alt: 'Stop Using Link in Bio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'DM Automation Converts 5x vs Link in Bio',
    description:
      'The "Link in Bio" is dead. Discover why top creators are switching to DM automation.',
    images: ['/blog/link-in-bio-dead-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'DM Automation Converts 5x vs Link in Bio',
    image: ['/blog/link-in-bio-dead-cover.png'],
    datePublished: '2026-03-01T09:00:00.000Z',
    dateModified: '2026-03-01T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Sarah Jenkins',
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
              title='DM Automation Converts 5x vs Link in Bio'
              url='https://postengage.ai/blog/stop-using-link-in-bio'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='border-0 bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 px-3 py-1 text-sm'
              >
                Strategy
              </Badge>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <span>March 1, 2026</span>
                <span>•</span>
                <Badge
                  variant='outline'
                  className='border-border px-3 py-1 text-sm text-muted-foreground'
                >
                  6 min read
                </Badge>
              </div>
            </div>

            <h1 className='text-balance mb-8 text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl'>
              Stop Using{' '}
              <span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>
                Link in Bio
              </span>
              :
              <br />
              Why DM Automation Conversions Are 5x Higher
            </h1>

            <p className='mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground'>
              The "Link in Bio" is dead. Discover why top creators are switching
              to DM automation to skyrocket their sales and engagement.
            </p>

            <div className='flex items-center justify-center gap-4'>
              <div className='flex items-center gap-3 rounded-full border border-border/50 bg-muted/50 py-2 pl-2 pr-6'>
                <Avatar className='h-10 w-10 border-2 border-background'>
                  <AvatarImage src='/avatars/sarah.jpg' alt='Sarah Jenkins' />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='text-sm font-semibold'>Sarah Jenkins</p>
                  <p className='text-xs text-muted-foreground'>
                    Head of Growth @ PostEngage
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <MousePointerClick className='h-8 w-8 text-primary/70' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
                <div className='h-1.5 w-12 rounded-full bg-primary/20' />
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
              </div>
            </div>
          </div>
          {/* Featured Image */}
          <div className='relative mx-auto mb-20 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border/50 shadow-2xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 mix-blend-multiply' />
            <div className='absolute inset-0 flex items-center justify-center bg-muted/30'>
              <MousePointerClick className='h-24 w-24 text-red-500/50' />
            </div>
          </div>

          <div className='mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12'>
            {/* Sidebar (Table of Contents) */}
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      id: 'friction',
                      title: 'The Friction of "Link in Bio"',
                    },
                    {
                      id: 'dm-strategy',
                      title: 'The "DM Me" Strategy',
                    },
                    {
                      id: 'why-it-works',
                      title: 'Why It Works',
                    },
                    {
                      id: 'case-study',
                      title: 'Case Study: 500% Growth',
                    },
                    {
                      id: 'setup',
                      title: 'How to Set It Up',
                    },
                  ]}
                />
              </div>
            </aside>

            {/* Main Content */}
            <div className='prose prose-lg dark:prose-invert prose-headings:scroll-mt-32 prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-img:rounded-xl lg:col-span-9'>
              <p className='lead'>
                For years, "Link in Bio" has been the mantra of Instagram
                marketing. But in 2026, it's becoming the bottleneck of your
                sales funnel. Users are tired of clicking through multiple steps
                just to find what you're talking about.
              </p>

              <h2 id='friction'>The Friction of "Link in Bio"</h2>
              <p>
                Think about the user journey for a typical "Link in Bio" call to
                action (CTA):
              </p>
              <ol>
                <li>User sees your post.</li>
                <li>User reads the caption.</li>
                <li>User clicks your profile name.</li>
                <li>User clicks the link in your bio.</li>
                <li>User waits for a Linktree or landing page to load.</li>
                <li>User tries to find the specific link you mentioned.</li>
              </ol>
              <p>
                Every step is a drop-off point. You lose 20-30% of your traffic
                at each click. By the time they reach your offer, only a
                fraction of interested users remain.
              </p>

              <h2 id='dm-strategy'>The "DM Me" Strategy</h2>
              <p>Now, compare that to the modern DM automation strategy:</p>
              <ol>
                <li>User sees your post.</li>
                <li>User comments "GUIDE".</li>
                <li>
                  <strong>PostEngage.ai immediately DMs them the link.</strong>
                </li>
              </ol>
              <p>
                That's it. No profile visits, no searching, no friction. The
                link lands directly in their inbox, where they are most
                attentive.
              </p>

              <Card className='my-8 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-900/10'>
                <CardContent className='pt-6'>
                  <div className='flex items-start gap-4'>
                    <Zap className='mt-1 h-6 w-6 text-red-500' />
                    <div>
                      <h3 className='mt-0 text-xl font-bold text-red-700 dark:text-red-400'>
                        The Speed Advantage
                      </h3>
                      <p className='mb-0 text-muted-foreground'>
                        DM automation delivers the value instantly. In a world
                        of 8-second attention spans, speed is everything.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id='why-it-works'>Why It Works</h2>
              <p>
                Aside from removing friction, this strategy leverages the
                Instagram algorithm in your favor.
              </p>
              <ul>
                <li>
                  <strong>Engagement Signal:</strong> Comments are a high-value
                  signal to Instagram. When users comment on your post, the
                  algorithm shows it to more people.
                </li>
                <li>
                  <strong>Personal Connection:</strong> A DM feels personal. It
                  starts a conversation. "Link in Bio" feels like a broadcast.
                </li>
                <li>
                  <strong>Higher Open Rates:</strong> DM open rates are
                  consistently above 80%, compared to email's 20-30%.
                </li>
              </ul>

              <h2 id='case-study'>Case Study: 500% Growth</h2>
              <p>
                We recently worked with a fitness creator who switched from
                "Link in Bio" to DM automation for her workout guide launch.
              </p>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='rounded-lg bg-muted p-6'>
                  <h4 className='font-bold text-muted-foreground'>
                    Before (Link in Bio)
                  </h4>
                  <p className='text-3xl font-bold'>
                    214 <span className='text-sm font-normal'>clicks</span>
                  </p>
                  <p className='text-3xl font-bold'>
                    $4,200 <span className='text-sm font-normal'>revenue</span>
                  </p>
                </div>
                <div className='rounded-lg bg-primary/10 p-6 border border-primary/20'>
                  <h4 className='font-bold text-primary'>
                    After (DM Automation)
                  </h4>
                  <p className='text-3xl font-bold'>
                    1,450 <span className='text-sm font-normal'>DMs sent</span>
                  </p>
                  <p className='text-3xl font-bold'>
                    $22,500 <span className='text-sm font-normal'>revenue</span>
                  </p>
                </div>
              </div>
              <p className='text-sm text-center mt-2 text-muted-foreground'>
                *Results from a campaign with 50k followers.
              </p>

              <h2 id='setup'>How to Set It Up</h2>
              <p>
                Ready to make the switch? Here's how to set up your first DM
                automation with PostEngage.ai:
              </p>
              <ol>
                <li>
                  <strong>Connect your Instagram account</strong> to
                  PostEngage.ai.
                </li>
                <li>
                  <strong>Create a new Automation</strong> and select "Comment
                  Trigger".
                </li>
                <li>
                  <strong>Choose a keyword</strong> (e.g., "GUIDE", "DISCOUNT",
                  "YES").
                </li>
                <li>
                  <strong>Draft your DM response</strong>. Include the link and
                  a friendly message.
                </li>
                <li>
                  <strong>Go live!</strong> Tell your followers to comment the
                  keyword on your next post.
                </li>
              </ol>

              <div className='mt-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 p-8 text-white shadow-2xl'>
                <h3 className='mb-4 text-2xl font-bold text-white'>
                  Start Converting Today
                </h3>
                <p className='mb-6 text-red-100'>
                  Don't let another lead get lost in your bio. Switch to DM
                  automation and watch your engagement soar.
                </p>
                <Button
                  size='lg'
                  variant='secondary'
                  className='w-full sm:w-auto font-bold'
                >
                  Try PostEngage Free
                </Button>
              </div>
            </div>

            {/* Right Sidebar (Newsletter & Ads) */}
            <aside className='space-y-8 lg:col-span-3 lg:block'>
              <Card className='bg-muted/50'>
                <CardHeader>
                  <CardTitle className='text-lg'>Popular Strategy</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold'>
                      1
                    </div>
                    <div>
                      <p className='font-medium'>Comment "VIP"</p>
                      <p className='text-xs text-muted-foreground'>
                        Triggers DM with discount code
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold'>
                      2
                    </div>
                    <div>
                      <p className='font-medium'>Story Reply</p>
                      <p className='text-xs text-muted-foreground'>
                        Triggers product link
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup (Mini) */}
              <Card className='bg-primary text-primary-foreground border-none shadow-xl'>
                <CardHeader>
                  <CardTitle className='text-xl'>Master Instagram</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-primary-foreground/90 text-sm'>
                    Get our "10 Best DM Scripts" PDF when you subscribe.
                  </p>
                  <NewsletterForm variant='mini' />
                </CardContent>
              </Card>
            </aside>
          </div>
        </article>

        {/* Related Posts Section */}
        <section className='mt-32 border-t border-border bg-muted/30 py-24'>
          <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between mb-12'>
              <h3 className='text-3xl font-bold tracking-tight'>
                Read This Next
              </h3>
              <Link
                href='/blog'
                className='text-primary font-medium hover:underline flex items-center gap-1'
              >
                View all articles <ArrowLeft className='h-4 w-4 rotate-180' />
              </Link>
            </div>
            {/* Add related posts logic here if needed */}
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}

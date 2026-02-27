import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Server, Zap, Cpu } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';

export const metadata: Metadata = {
  title: 'From 0 to 10k Followers: The Engineering Behind Scale',
  description:
    'How we built a system capable of handling millions of webhook events per second without crashing. A deep dive into our serverless architecture.',
  openGraph: {
    title: 'From 0 to 10k Followers: The Engineering Behind Scale',
    description:
      "Handling 5000 requests/sec isn't easy. See how PostEngage.ai scaled its infrastructure using Next.js, Redis, and Serverless functions.",
    url: 'https://postengage.ai/blog/engineering-scale-0-to-10k',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-20T14:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/engineering-scale-cover.png',
        width: 1200,
        height: 630,
        alt: 'Engineering Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From 0 to 10k Followers: The Engineering Behind Scale',
    description:
      "Handling 5000 requests/sec isn't easy. See how PostEngage.ai scaled its infrastructure.",
    images: ['/blog/engineering-scale-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'From 0 to 10k Followers: The Engineering Behind Scale',
    image: ['/blog/engineering-scale-cover.png'],
    datePublished: '2026-02-20T14:00:00.000Z',
    dateModified: '2026-02-20T14:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Alex Rivera',
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
              title='From 0 to 10k Followers: The Engineering Behind Scale'
              url='https://postengage.ai/blog/engineering-scale-0-to-10k'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='border-0 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 text-sm'
              >
                Engineering
              </Badge>
              <Badge
                variant='outline'
                className='border-border px-3 py-1 text-sm text-muted-foreground'
              >
                10 min read
              </Badge>
            </div>

            <h1 className='text-balance mb-8 text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl'>
              From 0 to 10k Followers:
              <br />
              The <span className='text-primary'>Engineering Behind Scale</span>
            </h1>

            <p className='mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground'>
              How we built a system capable of handling millions of webhook
              events per second without crashing.
            </p>

            <div className='flex items-center justify-center gap-4'>
              <div className='flex items-center gap-3 rounded-full border border-border/50 bg-muted/50 py-2 pl-2 pr-6'>
                <Avatar className='h-10 w-10 border-2 border-background shadow-sm'>
                  <AvatarImage
                    src='/logo.jpeg'
                    alt='PostEngageAI Team'
                  />
                  <AvatarFallback>PE</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='text-sm font-semibold text-foreground'>
                    PostEngageAI Team
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    Engineering Team
                  </p>
                </div>
              </div>
              <span className='text-muted-foreground'>•</span>
              <p className='text-sm text-muted-foreground'>Feb 20, 2026</p>
            </div>
          </header>

          {/* Placeholder for Featured Image */}
          <div className='relative mb-20 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-r from-slate-900 to-slate-800 shadow-2xl flex items-center justify-center'>
            <div className='text-center p-8'>
              <Server className='w-24 h-24 text-primary mx-auto mb-4' />
              <p className='text-white/80 font-mono font-medium'>
                System Architecture: High Throughput
              </p>
            </div>
          </div>

          {/* Content Wrapper with Grid Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content Column */}
            <div className='lg:col-span-8'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none leading-loose space-y-8'>
                <p className='text-xl md:text-2xl font-medium leading-relaxed text-foreground/90'>
                  When we launched PostEngage.ai, we thought handling 100
                  requests per minute was a lot. Last week, we peaked at{' '}
                  <strong>12,000 requests per second</strong> during a major
                  influencer campaign.
                </p>

                <p>
                  Scaling isn't just about adding more servers. It's about
                  rethinking how data flows through your system. Here is the
                  story of how our architecture evolved.
                </p>

                <h2
                  id='the-bottleneck'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  The Bottleneck: Database Locks
                </h2>

                <p>
                  In V1, every incoming webhook from Instagram triggered a
                  direct database write.
                  <em>Webhook -&gt; API -&gt; Postgres</em>.
                </p>

                <p>
                  It worked fine until we onboarded our first customer with 500k
                  followers. When they posted, thousands of comments flooded in
                  within seconds. Our database CPU spiked to 100%, and
                  connections timed out. We dropped events. It was a disaster.
                </p>

                <h2 id='the-solution' className='text-3xl font-bold mt-12 mb-6'>
                  The Solution: Async Queues
                </h2>

                <p>
                  We decoupled ingestion from processing. Now, the flow looks
                  like this:
                </p>

                <div className='bg-slate-950 p-6 rounded-lg text-slate-200 font-mono text-sm overflow-x-auto my-6 not-prose shadow-inner'>
                  Webhook -&gt; API (Edge) -&gt; Redis Queue -&gt; Worker Pool
                  -&gt; Postgres
                </div>

                <div className='grid md:grid-cols-2 gap-6 my-8 not-prose'>
                  <Card className='bg-card'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Zap className='h-5 w-5 text-yellow-500' /> Edge
                        Ingestion
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='text-sm text-muted-foreground'>
                      We use Vercel Edge Functions to accept the webhook
                      instantly (return 200 OK) and push the payload to a queue.
                      Latency: &lt;50ms.
                    </CardContent>
                  </Card>
                  <Card className='bg-card'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Cpu className='h-5 w-5 text-blue-500' /> Worker
                        Autoscaling
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='text-sm text-muted-foreground'>
                      Our worker fleet scales horizontally based on queue depth.
                      If the queue grows, we spin up more processors.
                    </CardContent>
                  </Card>
                </div>

                <h2
                  id='rate-limiting'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  Distributed Rate Limiting
                </h2>

                <p>
                  Sending replies is harder than receiving webhooks because
                  Instagram has strict API limits. We implemented a "Token
                  Bucket" algorithm using Redis Lua scripts.
                </p>

                <p>
                  Before any worker sends a reply, it must "buy" a token from
                  the user's bucket in Redis. This operation is atomic. If the
                  bucket is empty, the job is re-queued with a delay. This
                  ensures we <strong>never</strong> exceed Instagram's rate
                  limits, no matter how many parallel workers are running.
                </p>

                <h2 id='tech-stack' className='text-3xl font-bold mt-12 mb-6'>
                  Our Current Stack
                </h2>

                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    <strong>Framework:</strong> Next.js 15 (App Router)
                  </li>
                  <li>
                    <strong>Database:</strong> PostgreSQL (Neon Serverless)
                  </li>
                  <li>
                    <strong>Queue:</strong> Upstash Redis + QStash
                  </li>
                  <li>
                    <strong>Hosting:</strong> Vercel
                  </li>
                  <li>
                    <strong>Monitoring:</strong> OpenTelemetry + Grafana
                  </li>
                </ul>

                <p>
                  The beauty of this stack is that it scales to zero. If no one
                  is posting, we pay almost nothing. When a viral post hits, we
                  scale up instantly to handle the load.
                </p>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className='lg:col-span-4 space-y-8'>
              {/* Table of Contents Card */}
              <Card className='sticky top-32 border-border/60 bg-card/50 backdrop-blur-sm'>
                <CardHeader>
                  <CardTitle className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
                    In this technical deep dive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TableOfContents
                    items={[
                      {
                        id: 'the-bottleneck',
                        title: 'The Database Bottleneck',
                      },
                      {
                        id: 'the-solution',
                        title: 'Async Queues Solution',
                      },
                      {
                        id: 'rate-limiting',
                        title: 'Distributed Rate Limiting',
                      },
                      {
                        id: 'tech-stack',
                        title: 'The Tech Stack',
                      },
                    ]}
                  />
                </CardContent>
              </Card>

              {/* Newsletter Signup (Mini) */}
              <Card className='bg-primary text-primary-foreground border-none shadow-xl'>
                <CardHeader>
                  <CardTitle className='text-xl'>Join our Eng Team?</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-primary-foreground/90 text-sm'>
                    We are hiring backend engineers who love scaling problems.
                  </p>
                  <Button variant='secondary' className='w-full font-bold'>
                    View Careers
                  </Button>
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
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}

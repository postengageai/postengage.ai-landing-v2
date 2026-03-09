import Image from 'next/image';
import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  BarChart3,
  Target,
  TrendingUp,
  DollarSign,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'The 5 Instagram Automation KPIs That Actually Matter (And How to Track Them)',
  description:
    'Follower count is a vanity metric. These 5 Instagram automation KPIs reveal whether your DM system is actually generating revenue — and how to improve each one.',
  openGraph: {
    title:
      'The 5 Instagram Automation KPIs That Actually Matter (And How to Track Them)',
    description:
      'Follower count is a vanity metric. These 5 Instagram automation KPIs reveal whether your DM system is actually generating revenue — and how to improve each one.',
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 8, 2026';
  const readTime = '7 min read';

  const tableOfContents = [
    { id: 'why-vanity-metrics-lie', title: 'Why Vanity Metrics Lie' },
    { id: 'the-5-kpis', title: 'The 5 KPIs That Matter' },
    { id: 'setting-benchmarks', title: 'Setting Benchmarks' },
    {
      id: 'building-your-kpi-dashboard',
      title: 'Building Your KPI Dashboard',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <LandingHeader />
      <main className='flex-1'>
        <article className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
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
                Analytics
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
              The 5 Instagram Automation KPIs That Actually Matter
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Follower count is a vanity metric. Reach is a vanity metric. Even
              engagement rate is a vanity metric if it doesn't lead to revenue.
              Here are the 5 KPIs that actually tell you whether your DM
              automation system is working.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/automation-kpis-cover.png'
              alt='Instagram Automation Kpis'
              fill
              className='object-cover'
              priority
            />
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-24 space-y-8'>
                <TableOfContents items={tableOfContents} />
                <div className='space-y-4'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                    Share this article
                  </h4>
                  <SocialShareButtons
                    url='https://postengage.ai/blog/instagram-automation-kpis'
                    title='The 5 Instagram Automation KPIs That Actually Matter'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                <p>
                  I see it all the time: creators tracking metrics that don't
                  matter. They're excited about 50k followers but making zero
                  dollars. They've got 8% engagement rate but converting 0 leads
                  to sales.
                </p>

                <p>
                  It's because they're measuring vanity metrics instead of
                  business metrics.
                </p>

                <p>
                  This post breaks down the exact KPIs that matter for a DM
                  automation system, the benchmarks you should be hitting, and
                  how to set up tracking so you can actually measure progress.
                </p>

                <h2 id='why-vanity-metrics-lie'>Why Vanity Metrics Lie</h2>

                <p>Let's get clear on what doesn't matter for your business:</p>

                <Card className='not-prose my-6 space-y-4'>
                  <CardContent className='pt-6'>
                    <div className='grid gap-4'>
                      <div>
                        <div className='font-semibold text-sm mb-2'>
                          Follower Count
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          You can have 100k followers and make zero dollars. You
                          can have 10k followers and make six figures. Growth
                          matters; followers don't.
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold text-sm mb-2'>
                          Likes & Reach
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Instagram's algorithm prioritizes these for ad
                          revenue. For actual businesses, a post with 1k reach
                          and 50 DM conversations beats a post with 100k reach
                          and 0 conversations.
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold text-sm mb-2'>
                          Engagement Rate
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          An 8% engagement rate is impressive. But if those
                          engaged users never DM you or buy from you, it means
                          nothing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  These metrics matter only insofar as they affect the metrics
                  that actually matter: DM conversations and revenue.
                </p>

                <h2 id='the-5-kpis'>The 5 KPIs That Matter</h2>

                <p>
                  Here are the KPIs you need to track to understand if your DM
                  automation system is working:
                </p>

                <div className='not-prose my-8 space-y-6'>
                  <Card className='border-2 border-primary/20'>
                    <CardHeader className='bg-primary/5'>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold'>
                          1
                        </span>
                        DM Trigger Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-6'>
                      <p className='font-semibold text-sm mb-3'>
                        What it measures: % of post viewers who trigger a DM
                        conversation
                      </p>
                      <div className='bg-muted p-4 rounded mb-4 space-y-2'>
                        <div className='text-sm'>
                          <span className='font-semibold'>Formula:</span> Total
                          DM Triggers / Post Reach × 100
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Benchmark:</span> 2-8%
                          (most accounts)
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Top Performer:</span>{' '}
                          15%+
                        </div>
                      </div>
                      <p className='text-sm text-muted-foreground mb-3'>
                        How to improve: Test different trigger words (DEMO,
                        CLAIM, LINK), optimize post copy to prompt action, make
                        CTAs more visible
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-2 border-primary/20'>
                    <CardHeader className='bg-primary/5'>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold'>
                          2
                        </span>
                        DM Response Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-6'>
                      <p className='font-semibold text-sm mb-3'>
                        What it measures: % of automated DMs that get a reply
                      </p>
                      <div className='bg-muted p-4 rounded mb-4 space-y-2'>
                        <div className='text-sm'>
                          <span className='font-semibold'>Formula:</span> Total
                          Replies / Total DMs Sent × 100
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Benchmark:</span>{' '}
                          40-60%
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Top Performer:</span>{' '}
                          80%+
                        </div>
                      </div>
                      <p className='text-sm text-muted-foreground mb-3'>
                        How to improve: Personalize DM opener (reference their
                        comment), optimize timing (respond within 2 min), ask a
                        question that requires a response, A/B test message copy
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-2 border-primary/20'>
                    <CardHeader className='bg-primary/5'>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold'>
                          3
                        </span>
                        Conversation-to-Lead Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-6'>
                      <p className='font-semibold text-sm mb-3'>
                        What it measures: % of DM conversations resulting in a
                        qualified lead
                      </p>
                      <div className='bg-muted p-4 rounded mb-4 space-y-2'>
                        <div className='text-sm'>
                          <span className='font-semibold'>Formula:</span> Total
                          Qualified Leads / Total DM Conversations × 100
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Benchmark:</span> 15%
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Top Performer:</span>{' '}
                          35%+
                        </div>
                      </div>
                      <p className='text-sm text-muted-foreground mb-3'>
                        How to improve: Improve qualifying questions (are they
                        your target customer?), optimize bridge message (connect
                        their need to your offer), tighten your qualification
                        criteria
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-2 border-primary/20'>
                    <CardHeader className='bg-primary/5'>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold'>
                          4
                        </span>
                        Lead-to-Close Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-6'>
                      <p className='font-semibold text-sm mb-3'>
                        What it measures: % of qualified leads who buy
                      </p>
                      <div className='bg-muted p-4 rounded mb-4 space-y-2'>
                        <div className='text-sm'>
                          <span className='font-semibold'>Formula:</span> Total
                          Customers / Total Qualified Leads × 100
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Benchmark:</span> 8%
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Top Performer:</span>{' '}
                          25%+
                        </div>
                      </div>
                      <p className='text-sm text-muted-foreground mb-3'>
                        How to improve: Improve sales pitch (use a script), add
                        objection handling sequences, create scarcity/urgency
                        (limited spots), follow up with non-buyers 24-48 hours
                        later
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-2 border-primary/20'>
                    <CardHeader className='bg-primary/5'>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold'>
                          5
                        </span>
                        Revenue per DM Conversation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-6'>
                      <p className='font-semibold text-sm mb-3'>
                        What it measures: Total revenue divided by total DM
                        conversations
                      </p>
                      <div className='bg-muted p-4 rounded mb-4 space-y-2'>
                        <div className='text-sm'>
                          <span className='font-semibold'>Formula:</span> Total
                          Revenue from DM Conversations / Total DM Conversations
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Benchmark:</span>{' '}
                          Varies by offer price (high-ticket: $5-20, low-ticket:
                          $0.10-0.50)
                        </div>
                        <div className='text-sm'>
                          <span className='font-semibold'>Target:</span>{' '}
                          Calculate your customer acquisition cost and work
                          backward
                        </div>
                      </div>
                      <p className='text-sm text-muted-foreground mb-3'>
                        How to improve: Increase offer price, increase lead
                        quality, increase close rate, add upsells to the
                        purchase
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 id='setting-benchmarks'>Setting Benchmarks</h2>

                <p>
                  The benchmarks above are industry averages. But you need to
                  set benchmarks for your specific situation. Here's how:
                </p>

                <Card className='not-prose my-8 bg-blue-500/5 border-blue-500/20'>
                  <CardContent className='pt-6'>
                    <div className='space-y-6'>
                      <div>
                        <div className='font-semibold mb-3 flex items-center gap-2'>
                          <Target className='h-5 w-5' />
                          Week 1: Baseline Measurement
                        </div>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Run DM automation without optimization for a full
                          week. Measure all 5 KPIs. This is your baseline.
                        </p>
                        <div className='text-sm bg-muted p-3 rounded'>
                          Example: Trigger Rate 3% → Response Rate 45% →
                          Conversation-to-Lead 12% → Lead-to-Close 6% →
                          Revenue/Conv $2.14
                        </div>
                      </div>

                      <div>
                        <div className='font-semibold mb-3 flex items-center gap-2'>
                          <TrendingUp className='h-5 w-5' />
                          Week 2-4: Optimize One KPI
                        </div>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Pick the weakest KPI and run tests to improve it. Only
                          change one variable at a time.
                        </p>
                        <div className='text-sm bg-muted p-3 rounded'>
                          Example: Trigger Rate is 3%, industry average is 5%.
                          A/B test trigger words to improve it to 5%+
                        </div>
                      </div>

                      <div>
                        <div className='font-semibold mb-3 flex items-center gap-2'>
                          <BarChart3 className='h-5 w-5' />
                          Week 5-8: Move to Next KPI
                        </div>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Once you've improved one KPI, lock it in and move to
                          the next weakest metric.
                        </p>
                        <div className='text-sm bg-muted p-3 rounded'>
                          Example: Trigger Rate is now 5%. Response Rate is 45%,
                          industry is 60%. Now optimize response rate.
                        </div>
                      </div>

                      <div>
                        <div className='font-semibold mb-3 flex items-center gap-2'>
                          <DollarSign className='h-5 w-5' />
                          Month 3+: Compound Improvements
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          A 25% improvement in each KPI = 5x multiplier on total
                          revenue. If you started at $2.14 revenue/conversation
                          and{' '}
                          <Link
                            href='/blog/dm-conversion-rate-optimization'
                            className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                          >
                            improve your conversion rate
                          </Link>{' '}
                          by 25%, you hit $10.70/conversation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 id='building-your-kpi-dashboard'>
                  Building Your KPI Dashboard
                </h2>

                <p>
                  You can't manage what you don't measure. Set up a weekly KPI
                  review. If you're just getting started, our{' '}
                  <Link
                    href='/blog/getting-started-postengage-guide'
                    className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                  >
                    guide will help you set up your first automation
                  </Link>
                  . Here's the template:
                </p>

                <Card className='not-prose my-8'>
                  <CardHeader>
                    <CardTitle className='text-base'>
                      Weekly KPI Review
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-6 text-sm'>
                      <div>
                        <div className='font-semibold mb-2'>
                          Monday Morning:
                        </div>
                        <p className='text-muted-foreground mb-3'>
                          Pull last week's data from PostEngage.ai. Compare to:
                        </p>
                        <ul className='list-disc list-inside space-y-1 text-muted-foreground'>
                          <li>Previous week</li>
                          <li>4-week average</li>
                          <li>Your target benchmark</li>
                        </ul>
                      </div>

                      <div>
                        <div className='font-semibold mb-2'>
                          Identify 1 Issue:
                        </div>
                        <p className='text-muted-foreground'>
                          Which KPI decreased or missed benchmark? Investigate
                          why.
                        </p>
                      </div>

                      <div>
                        <div className='font-semibold mb-2'>Plan 1 Test:</div>
                        <p className='text-muted-foreground mb-2'>
                          Design one A/B test to improve that KPI for the week.
                        </p>
                        <div className='bg-muted p-3 rounded'>
                          Example: DM Response Rate is down to 42% from 50%.
                          Test removing emoji from opener message to see if it
                          improves response rate.
                        </div>
                      </div>

                      <div>
                        <div className='font-semibold mb-2'>
                          Review Winning Variations:
                        </div>
                        <p className='text-muted-foreground'>
                          Which message variations and sequences converted best
                          last week? Lock them in for this week.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  Use a spreadsheet to track weekly KPIs over 12 weeks. You'll
                  start seeing patterns: which days convert best, which message
                  types work, which audience segments need different sequences.
                </p>

                <Card className='not-prose my-8 bg-green-500/5 border-green-500/20'>
                  <CardHeader>
                    <CardTitle className='text-sm text-green-700 dark:text-green-400'>
                      The Power of Compound Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4 text-sm'>
                      <div>
                        <div className='font-semibold mb-2'>
                          Starting Point (Week 1):
                        </div>
                        <p className='text-muted-foreground'>
                          Trigger 3% → Response 45% → Conv-to-Lead 12% →
                          Lead-to-Close 6% = $2.14 revenue/conversation
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold mb-2'>
                          After 12 Weeks (25% improvement per KPI):
                        </div>
                        <p className='text-muted-foreground'>
                          Trigger 3.75% → Response 56% → Conv-to-Lead 15% →
                          Lead-to-Close 7.5% = $3.35 revenue/conversation (56%
                          increase)
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold mb-2'>
                          After 24 Weeks (50% improvement per KPI):
                        </div>
                        <p className='text-muted-foreground'>
                          Trigger 4.5% → Response 67.5% → Conv-to-Lead 18% →
                          Lead-to-Close 9% = $5.20 revenue/conversation (143%
                          increase)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  The bottom line: small improvements in each KPI compound into
                  massive revenue increases over time. A 25% improvement in each
                  metric leads to 56% higher revenue. A 50% improvement leads to
                  143% higher revenue.
                </p>

                <p>
                  But you'll never achieve these improvements if you're
                  measuring vanity metrics. Focus on the 5 KPIs above. Track
                  them weekly. Test continuously. You'll be shocked at the
                  results.
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>Track Your KPIs with PostEngage.ai</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai's built-in dashboard gives you all 5 KPIs
                      automatically calculated. No spreadsheets. No manual
                      tracking. Just data-driven insights that help you optimize
                      faster.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/signup'>Start Free Trial</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>See How It Works</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

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
                      Instagram Growth Experts
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

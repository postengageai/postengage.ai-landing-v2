import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'How to Get a 90%+ Instagram DM Response Rate in 2026',
  description:
    'The exact tactics that top creators use to get replies from nearly every person they message.',
  openGraph: {
    title: 'How to Get a 90%+ Instagram DM Response Rate in 2026',
    description:
      'The exact tactics that top creators use to get replies from nearly every person they message.',
    url: 'https://postengage.ai/blog/instagram-dm-response-rate-guide',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-02T09:00:00.000Z',
    authors: ['Marcus Rivera'],
    images: [
      {
        url: '/blog/instagram-dm-response-rate-guide-cover.png',
        width: 1200,
        height: 630,
        alt: 'Instagram DM Response Rate Tactics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a 90%+ Instagram DM Response Rate in 2026',
    description: 'Get replies from nearly every DM you send.',
    images: ['/blog/instagram-dm-response-rate-guide-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How to Get a 90%+ Instagram DM Response Rate in 2026',
    image: ['/blog/instagram-dm-response-rate-guide-cover.png'],
    datePublished: '2026-03-02T09:00:00.000Z',
    dateModified: '2026-03-02T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Marcus Rivera',
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
          <div className='mb-12 flex items-center justify-between'>
            <Link
              href='/blog'
              className='group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
              Back to Blog
            </Link>
            <SocialShareButtons
              title='How to Get a 90%+ Instagram DM Response Rate in 2026'
              url='https://postengage.ai/blog/instagram-dm-response-rate-guide'
            />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Engagement Strategy
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                9 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated March 2, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              How to Get a 90%+ Instagram DM Response Rate in 2026
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              The exact tactics that top creators use to get replies from nearly
              every person they message.
            </p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <MessageCircle className='h-8 w-8 text-primary/70' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
                <div className='h-1.5 w-12 rounded-full bg-primary/20' />
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      id: 'response-rate-reality',
                      title: 'The Response Rate Reality',
                    },
                    { id: 'the-7-tactics', title: 'The 7 Tactics That Work' },
                    {
                      id: 'personalization-depth',
                      title: 'Personalization Depth Matters',
                    },
                    { id: 'timing-and-frequency', title: 'Timing & Frequency' },
                    { id: 'measurement', title: 'Measuring What Works' },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Automate your DMs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      PostEngage.ai replies to every DM in your voice, 24/7.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/signup'>Start Free Trial</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <h2
                  id='response-rate-reality'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  The Response Rate Reality
                </h2>
                <p>
                  Let's start with the data: the average Instagram DM gets a 23%
                  response rate. Most creators accept this as normal. But the
                  top 5% of creators and brands are hitting 85-95% response
                  rates on the DMs that matter.
                </p>
                <p>
                  The difference isn't luck. It's not about having more
                  followers. It's about understanding the psychology of DM
                  response and engineering your messages to trigger immediate
                  replies.
                </p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "People don't respond to boring. They respond to being seen."
                </blockquote>

                <h2
                  id='the-7-tactics'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  The 7 Tactics That Consistently Deliver 90%+ Response Rates
                </h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        1
                      </span>
                      Mention Something Specific From Their Last 3 Posts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Generic: "Hey, love your content!"</p>
                    <p>
                      Specific: "That carousel about [specific detail in post 2]
                      hit different. Most people miss [the insight you caught].
                      That's why [consequence]. Respect."
                    </p>
                    <p className='font-semibold mt-3'>Why it works:</p>
                    <p className='text-sm'>
                      Your brain is wired to respond when someone demonstrates
                      they know you. They've scrolled your content, paid
                      attention to details. That's the opposite of spam.
                      Response rate lift: +35-45%
                    </p>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        2
                      </span>
                      Ask a Question That Only They Can Answer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Bad: "Do you want to grow faster?"</p>
                    <p>
                      Good: "I've been noticing that your [specific approach]
                      seems different from the typical [industry] playbook. What
                      made you pivot to that strategy?"
                    </p>
                    <p className='font-semibold mt-3'>Why it works:</p>
                    <p className='text-sm'>
                      Questions that only that person can answer compel a
                      response. They're not yes/no questions. They require their
                      unique insight. This is instant engagement. Response rate
                      lift: +40-50%
                    </p>
                  </CardContent>
                </Card>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        3
                      </span>
                      Lead With a Compliment on Something Unconventional
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Cliché: "Your content is amazing"</p>
                    <p>
                      Specific: "Most people in [niche] play it safe with
                      [standard approach]. You're one of the few actually
                      testing [specific unconventional thing]. Curious why."
                    </p>
                    <p className='font-semibold mt-3'>Why it works:</p>
                    <p className='text-sm'>
                      Everyone gets "great content" DMs. Nobody gets noticed for
                      what makes them different. Acknowledging their edge
                      validates their risk-taking. Response rate lift: +25-35%
                    </p>
                  </CardContent>
                </Card>

                <Card className='bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        4
                      </span>
                      Make a Specific Observation About Their Business Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Generic: "Your last post did well"</p>
                    <p>
                      Specific: "Noticed your engagement rate jumped 23%
                      starting in [month]. The posts that shifted were the ones
                      about [specific topic]. That's usually because [insight]."
                    </p>
                    <p className='font-semibold mt-3'>Why it works:</p>
                    <p className='text-sm'>
                      This shows you didn't just follow — you analyzed. You paid
                      real attention. Nobody ignores someone who's clearly
                      studied their work. Response rate lift: +45-60%
                    </p>
                  </CardContent>
                </Card>

                <Card className='bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        5
                      </span>
                      Reference a Real Insight, Not a Product
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Bad: "Check out my course, it's perfect for you"</p>
                    <p>
                      Good: "I found something interesting — people in [their
                      position] typically fail at [specific thing] because they
                      [root cause]. I wrote about it here [link]. Thought it
                      might resonate."
                    </p>
                    <p className='font-semibold mt-3'>Why it works:</p>
                    <p className='text-sm'>
                      Lead with value. No ask. Just "here's something useful for
                      your world." This is the opposite of selling. They reply
                      because you've already helped. Response rate lift: +50-65%
                    </p>
                  </CardContent>
                </Card>

                <Card className='bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        6
                      </span>
                      Keep It Under 100 Words In Your First Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>
                      Long DMs get scrolled past. Your brain interprets length
                      as "this is trying to sell me." Short, punchy DMs feel
                      like a real person reaching out casually.
                    </p>
                    <p className='font-semibold mt-3'>The Formula:</p>
                    <p className='text-sm'>
                      Hook (1 sentence) + Specific Observation (1-2 sentences) +
                      One Question (1 sentence) = Response magnet. That's it.
                      Response rate lift: +30-40%
                    </p>
                  </CardContent>
                </Card>

                <Card className='bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        7
                      </span>
                      Acknowledge That You're A DM, Not Spam
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>
                      Try: "Random DM incoming, but [reason you're reaching
                      out]. Figured it'd be useful."
                    </p>
                    <p className='font-semibold mt-3'>Why it works:</p>
                    <p className='text-sm'>
                      Meta-acknowledgment defuses skepticism. You're saying
                      "yes, this is a cold DM, but here's why it's not spam."
                      It's disarming. Response rate lift: +20-30%
                    </p>
                  </CardContent>
                </Card>

                <h2
                  id='personalization-depth'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  The Personalization Depth Pyramid
                </h2>
                <p>Not all personalization is equal. There's a hierarchy:</p>
                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4 text-sm'>
                  <div className='border-b pb-4'>
                    <p className='font-semibold text-base mb-2'>
                      Level 1 (15-20% response rate): Name + Generic Compliment
                    </p>
                    <p className='text-muted-foreground'>
                      "Hey [name], love your content!"
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold text-base mb-2'>
                      Level 2 (35-45% response rate): Name + Specific Post
                      Reference
                    </p>
                    <p className='text-muted-foreground'>
                      "Hey [name], saw your post about [topic]. Thought
                      [observation]."
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold text-base mb-2'>
                      Level 3 (60-75% response rate): Specific Detail + Unique
                      Insight + Question
                    </p>
                    <p className='text-muted-foreground'>
                      "Your carousel about [specific detail] is smart because
                      [insight they haven't mentioned]. Have you tested
                      [specific variation]?"
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold text-base mb-2'>
                      Level 4 (85-95% response rate): Demonstrates Real Work +
                      Shows Understanding + Genuine Question
                    </p>
                    <p className='text-muted-foreground'>
                      "Analyzed your last 10 posts. Noticed [specific pattern in
                      their data]. That's unusual because most [niche] do
                      [opposite]. What's the reasoning?"
                    </p>
                  </div>
                </div>

                <h2
                  id='timing-and-frequency'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  Timing & Frequency Strategy
                </h2>
                <ul className='space-y-2 my-4'>
                  <li className='flex gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />{' '}
                    <span>
                      <strong>Send at 11am-1pm their timezone:</strong>{' '}
                      Post-lunch energy. They're back online.
                    </span>
                  </li>
                  <li className='flex gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />{' '}
                    <span>
                      <strong>Avoid 6-7pm:</strong> Their DM anxiety peaks. Too
                      many messages.
                    </span>
                  </li>
                  <li className='flex gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />{' '}
                    <span>
                      <strong>If no reply in 24 hours, don't follow up:</strong>{' '}
                      They read it. No response means low interest.
                    </span>
                  </li>
                  <li className='flex gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />{' '}
                    <span>
                      <strong>Batch your outreach:</strong> Send 10-15 DMs per
                      day, not 100. Quality over volume.
                    </span>
                  </li>
                </ul>

                <h2 id='measurement' className='text-2xl font-bold mt-12 mb-4'>
                  Measuring What's Actually Working
                </h2>
                <p>Track these four metrics for every variant you test:</p>
                <div className='grid grid-cols-2 gap-4 my-6'>
                  <Card>
                    <CardHeader>
                      <CardTitle className='text-sm'>Read Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-2xl font-bold text-primary'>23%</p>
                      <p className='text-xs text-muted-foreground'>baseline</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className='text-sm'>Reply Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-2xl font-bold text-primary'>62%</p>
                      <p className='text-xs text-muted-foreground'>
                        target: 90%+
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Put Your Instagram on Autopilot
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    Start your free 14-day trial of PostEngage.ai — no credit
                    card needed.
                  </p>
                  <Button size='lg' asChild>
                    <Link href='/signup'>Get Started for Free</Link>
                  </Button>
                </div>
              </div>
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/logo.jpeg' alt='PostEngage.ai Team' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>Marcus Rivera</div>
                    <div className='text-sm text-muted-foreground'>
                      DM Engagement Specialist
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

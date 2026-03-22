import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Target } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title:
    'Mapping the Instagram DM Customer Journey: From Follower to Paying Customer',
  description:
    'A complete breakdown of how customers move from discovering your profile to buying through DMs.',
  openGraph: {
    title:
      'Mapping the Instagram DM Customer Journey: From Follower to Paying Customer',
    description:
      'A complete breakdown of how customers move from discovering your profile to buying through DMs.',
    url: 'https://postengage.ai/blog/instagram-dm-customer-journey',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-08T09:00:00.000Z',
    authors: ['Priya Patel'],
    images: [
      {
        url: '/blog/instagram-dm-customer-journey-cover.png',
        width: 1200,
        height: 630,
        alt: 'DM Customer Journey Map',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Mapping the Instagram DM Customer Journey: From Follower to Paying Customer',
    description: 'Complete customer journey on Instagram DMs.',
    images: ['/blog/instagram-dm-customer-journey-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Mapping the Instagram DM Customer Journey: From Follower to Paying Customer',
    image: ['/blog/instagram-dm-customer-journey-cover.png'],
    datePublished: '2026-03-08T09:00:00.000Z',
    dateModified: '2026-03-08T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Priya Patel',
        url: 'https://postengage.ai/about',
      },
    ],
  };
  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20'>
      <ArticleJsonLd
        title='Mapping the Instagram DM Customer Journey: From Follower to Paying Customer'
        description='A complete breakdown of how customers move from discovering your profile to buying through DMs.'
        slug='instagram-dm-customer-journey'
        datePublished='2026-03-08T09:00:00.000Z'
        category='Customer Journey'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />
      <main className='flex-1 pt-32 pb-24'>
        <BlogJsonLd
          title='Mapping the Instagram DM Customer Journey: From Follower to Paying Customer'
          description='A complete breakdown of how customers move from discovering your profile to buying through DMs.'
          slug='instagram-dm-customer-journey'
          date='2026-03-08T09:00:00.000Z'
          category='Customer Journey'
        />
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
              title='Mapping the Instagram DM Customer Journey: From Follower to Paying Customer'
              url='https://postengage.ai/blog/instagram-dm-customer-journey'
            />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Customer Journey
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                11 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated March 8, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Mapping the Instagram DM Customer Journey: From Follower to Paying
              Customer
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              A complete breakdown of how customers move from discovering your
              profile to buying through DMs.
            </p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-red-500/20 via-rose-500/10 to-pink-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Target className='h-8 w-8 text-primary/70' />
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
                    { id: 'the-journey', title: 'The Complete Journey' },
                    { id: 'stage-awareness', title: 'Stage 1: Awareness' },
                    { id: 'stage-interest', title: 'Stage 2: Interest' },
                    { id: 'stage-decision', title: 'Stage 3: Decision' },
                    { id: 'stage-retention', title: 'Stage 4: Retention' },
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
                <h2 id='the-journey' className='text-2xl font-bold mt-12 mb-4'>
                  The Complete DM Customer Journey
                </h2>
                <p>
                  Most people think of the Instagram customer journey as: See
                  Post → Like/Follow → Buy. But that's not how it actually
                  works. At least, not for the most successful creators and
                  brands.
                </p>
                <p>
                  The real journey is: Discover → Engage → Message → Qualify →
                  Convert → Retain.
                </p>
                <p>
                  And the DM is where the magic happens. It's where the real
                  relationship begins. It's where trust is built. It's where
                  deals are made.
                </p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "Your Instagram reach brings people in. Your DMs turn them
                  into customers. Everything in between is noise."
                </blockquote>

                <h2
                  id='stage-awareness'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  Stage 1: Awareness (How They Discover You)
                </h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>The Touchpoints</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>Someone discovers you through:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>
                        Instagram Explore (algorithm shows your content as
                        "interesting")
                      </li>
                      <li>Someone tags them in your content</li>
                      <li>A Reel goes viral and they watch it</li>
                      <li>They search for a specific hashtag or topic</li>
                      <li>A friend mentions you</li>
                      <li>
                        Your post shows up in their feed (they follow someone
                        who follows you)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>
                      What Happens Next (Critical Moment)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>
                      They have 3-5 seconds to decide: "Is this relevant to me?"
                      If yes, they explore. If no, they scroll.
                    </p>
                    <p className='font-semibold mt-3'>Your job in Awareness:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Get them to stop scrolling (attention)</li>
                      <li>Show them something relevant (resonance)</li>
                      <li>
                        Make them curious enough to follow/check your bio
                        (interest)
                      </li>
                    </ul>
                    <p className='text-sm mt-3'>
                      Conversion rate: 8-15% of people who see your content will
                      check your profile
                    </p>
                  </CardContent>
                </Card>

                <h2
                  id='stage-interest'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  Stage 2: Interest (Building DM Intent)
                </h2>

                <p>
                  They're on your profile now. They're considering following.
                  But the critical question is: Will they message you?
                </p>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>
                      Your Bio Is Make-or-Break
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>
                      In Stage 2, your bio does 80% of the work. It answers
                      three questions in their head:
                    </p>
                    <div className='space-y-3 mt-3'>
                      <div className='bg-white dark:bg-gray-900 p-3 rounded'>
                        <p className='font-semibold text-sm mb-1'>
                          Q1: What does this person/brand do?
                        </p>
                        <p className='text-xs text-muted-foreground'>
                          Your bio needs to be crystal clear. Not clever. Not
                          mysterious. Clear.
                        </p>
                      </div>
                      <div className='bg-white dark:bg-gray-900 p-3 rounded'>
                        <p className='font-semibold text-sm mb-1'>
                          Q2: Is this relevant to my life/goals?
                        </p>
                        <p className='text-xs text-muted-foreground'>
                          Your bio should speak directly to your ideal
                          customer's problems/desires.
                        </p>
                      </div>
                      <div className='bg-white dark:bg-gray-900 p-3 rounded'>
                        <p className='font-semibold text-sm mb-1'>
                          Q3: Should I message them?
                        </p>
                        <p className='text-xs text-muted-foreground'>
                          Your bio needs a clear CTA. "DM [keyword] for
                          [specific offer]"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className='bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>
                      Interest Content Matters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>
                      Your recent posts should reinforce why they should message
                      you. A good mix:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>
                        Educational content (why they should care about your
                        topic)
                      </li>
                      <li>
                        Social proof (testimonials, results, case studies)
                      </li>
                      <li>
                        Problem/Solution content (addressing their pain points)
                      </li>
                      <li>Clear CTAs ("DM for more" or "Link in bio")</li>
                    </ul>
                    <p className='text-sm mt-3 font-semibold'>
                      Conversion rate: 22-35% of people who check your profile
                      will follow. Of those, 18-28% will message within 48 hours
                      if the CTA is clear.
                    </p>
                  </CardContent>
                </Card>

                <h2
                  id='stage-decision'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  Stage 3: Decision (The DM Conversation)
                </h2>

                <p>
                  Now they've DM'd you. This is where the customer journey gets
                  real. The DM conversation determines if they become a customer
                  or disappear.
                </p>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4'>
                  <div className='border-b pb-4'>
                    <p className='font-semibold text-sm mb-2'>
                      Minutes 0-1 (Your First Message)
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      If you take more than 1 minute to respond: 65% stop the
                      conversation. Speed is everything.
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold text-sm mb-2'>
                      Minutes 1-5 (Setting Expectations)
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Your first reply should: Acknowledge their DM. Deliver the
                      promised offer. Ask a qualification question. Set next
                      steps.
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold text-sm mb-2'>
                      Minutes 5-15 (Their Reply Window)
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      If they reply within 15 minutes: 78% buy within 7 days. If
                      no reply in 15 minutes: 34% buy within 7 days. Early
                      engagement is predictive of buying.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold text-sm mb-2'>
                      Hour 1-24 (Moving Toward Sale)
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Your job: Answer their questions. Build trust. Move toward
                      a clear ask (schedule a call, buy now, etc.)
                    </p>
                  </div>
                </div>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>
                      Qualification Questions That Predict Buying
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>
                      Not all DM conversations will convert. But you can predict
                      which ones will. Ask these questions early:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>"What's your biggest challenge with [topic]?"</li>
                      <li>"Have you tried [solution] before?"</li>
                      <li>"What's your timeline for solving this?"</li>
                      <li>
                        "Are you the decision-maker on this, or will others be
                        involved?"
                      </li>
                      <li>"What's your budget/investment range?"</li>
                    </ul>
                    <p className='text-sm mt-3 font-semibold'>
                      If they answer all these clearly and enthusiastically: 68%
                      conversion probability. If they give vague answers: 8%
                      conversion probability.
                    </p>
                  </CardContent>
                </Card>

                <h2
                  id='stage-retention'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  Stage 4: Retention (Post-Purchase)
                </h2>

                <p>They bought. Now what?</p>

                <p>
                  Most creators think the journey ends at purchase. But the most
                  successful brands understand: The customer journey continues.
                  Your job shifts from "convert" to "delight and retain."
                </p>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>
                      The Post-Purchase DM Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='font-semibold mb-3'>Day 1 (Fulfillment)</p>
                    <p className='text-sm'>
                      "Hey [name]! Purchase confirmed. Here's what to expect
                      [timeline]. Any questions, DM me."
                    </p>
                    <p className='font-semibold mt-3 mb-3'>Day 3 (Check-in)</p>
                    <p className='text-sm'>
                      "How's [product/service] going so far? Any questions or
                      concerns?"
                    </p>
                    <p className='font-semibold mt-3 mb-3'>
                      Week 1 (Value Confirmation)
                    </p>
                    <p className='text-sm'>
                      "Wanted to share [tip/resource] to help you get the most
                      out of [purchase]."
                    </p>
                    <p className='font-semibold mt-3 mb-3'>
                      Week 4 (Results Check)
                    </p>
                    <p className='text-sm'>
                      "Would love to hear if you've seen [specific result] yet.
                      What's working best for you?"
                    </p>
                  </CardContent>
                </Card>

                <h2
                  id='stage-referral'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  The Final Stage: Referral (Turning Customers Into Promoters)
                </h2>

                <p>
                  The most underrated DM strategy is asking for referrals
                  directly.
                </p>

                <p>
                  After delivering great results, a simple DM like: "Would you
                  be open to referring [friend/colleague who might benefit]?
                  Here's a referral link [link]" can turn one customer into
                  five.
                </p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "The customer journey doesn't end at purchase. It ends when
                  they're telling others about you."
                </blockquote>

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
                    <div className='font-semibold'>Priya Patel</div>
                    <div className='text-sm text-muted-foreground'>
                      Customer Journey Expert
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

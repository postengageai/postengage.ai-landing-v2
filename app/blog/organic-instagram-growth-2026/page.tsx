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
  MessageCircle,
  BookmarkIcon,
  TrendingUp,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Organic Instagram Growth in 2026: The Complete Algorithm Guide + DM Strategy',
  description:
    "Paid ads are expensive. Organic Instagram growth in 2026 requires mastering the algorithm, Reels, and DM automation. Here's the complete playbook.",
  openGraph: {
    title:
      'Organic Instagram Growth in 2026: The Complete Algorithm Guide + DM Strategy',
    description:
      "Paid ads are expensive. Organic Instagram growth in 2026 requires mastering the algorithm, Reels, and DM automation. Here's the complete playbook.",
    type: 'article',
    publishedTime: '2026-03-06',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 6, 2026';
  const readTime = '12 min read';

  const tableOfContents = [
    {
      id: 'the-2026-instagram-algorithm',
      title: 'The 2026 Instagram Algorithm',
    },
    {
      id: 'content-pillars-for-organic-growth',
      title: 'Content Pillars for Organic Growth',
    },
    {
      id: 'engagement-signals-that-matter',
      title: 'Engagement Signals That Matter',
    },
    {
      id: 'dm-automation-as-growth-accelerator',
      title: 'DM Automation as Growth Accelerator',
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
                Growth
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
              Organic Instagram Growth in 2026: The Complete Algorithm Guide +
              DM Strategy
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Organic growth in 2026 isn't about posting more. It's about
              mastering signals the algorithm values, creating content people
              save and share, and automating conversations that convert.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Organic Instagram Growth Strategy 2026
              </span>
            </div>
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
                    url='https://postengage.ai/blog/organic-instagram-growth-2026'
                    title='Organic Instagram Growth in 2026: The Complete Algorithm Guide + DM Strategy'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Instagram's algorithm changed significantly in 2024-2025.
                    What worked three years ago is now obsolete. But the new
                    rules? They're actually more favorable to creators who focus
                    on real engagement and community building than ever before.
                  </p>
                  <p className='text-lg text-muted-foreground mb-8'>
                    If you're tired of paid ads eating your budget, this is your
                    roadmap to scaling organically. We'll cover exactly what the
                    algorithm prioritizes now, how to create content that gets
                    saved (not just liked), and how DM automation amplifies it
                    all.
                  </p>
                </section>

                <section id='the-2026-instagram-algorithm'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    The 2026 Instagram Algorithm: What Changed
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Meta made a strategic shift. They want real relationships on
                    the platform, not just passive scrolling. Here's what this
                    means for you.
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <BookmarkIcon className='h-5 w-5' />
                          Saves Rank Highest
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <div>
                          <p className='font-semibold text-primary'>Why:</p>
                          <p className='text-muted-foreground'>
                            When someone saves your content, they're saying "I
                            want to come back to this." That intent signal is
                            gold.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            What to do:
                          </p>
                          <p className='text-muted-foreground'>
                            Create content worth saving: guides, tips,
                            inspiration, templates. Not just entertainment.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <MessageCircle className='h-5 w-5' />
                          Shares & DMs Amplify Reach
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <div>
                          <p className='font-semibold text-primary'>Why:</p>
                          <p className='text-muted-foreground'>
                            When someone shares your post to their DMs or Story,
                            the algorithm knows it's genuinely valuable. It gets
                            pushed to more people.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            What to do:
                          </p>
                          <p className='text-muted-foreground'>
                            Ask people to share. Make shares easy. Create
                            share-worthy moments.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <TrendingUp className='h-5 w-5' />
                          Comments Still Matter
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <div>
                          <p className='font-semibold text-primary'>Why:</p>
                          <p className='text-muted-foreground'>
                            Comments = conversations. The algorithm loves
                            conversations because they keep people on the
                            platform longer.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            What to do:
                          </p>
                          <p className='text-muted-foreground'>
                            Ask questions. Respond to every comment. Start
                            conversations, not just broadcast.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <Zap className='h-5 w-5' />
                          Reels Dominate Feed
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <div>
                          <p className='font-semibold text-primary'>Why:</p>
                          <p className='text-muted-foreground'>
                            Reels get 300%+ more reach than static posts. Meta
                            prioritizes Reels in the algorithm.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            What to do:
                          </p>
                          <p className='text-muted-foreground'>
                            Reels should be 50%+ of your content strategy. Other
                            formats support, but Reels drive growth.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    The New Ranking Order
                  </h3>
                  <div className='bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 not-prose space-y-4'>
                    <div className='flex items-start gap-4'>
                      <span className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                        1
                      </span>
                      <div>
                        <p className='font-semibold'>Saves</p>
                        <p className='text-sm text-muted-foreground'>
                          Someone is saying "I want this in my collection"
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <span className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                        2
                      </span>
                      <div>
                        <p className='font-semibold'>Shares & DM Sends</p>
                        <p className='text-sm text-muted-foreground'>
                          They're saying "someone I know needs to see this"
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <span className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                        3
                      </span>
                      <div>
                        <p className='font-semibold'>
                          Comments (especially reply comments)
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Deep engagement signals. People talking back and
                          forth.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <span className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                        4
                      </span>
                      <div>
                        <p className='font-semibold'>Likes</p>
                        <p className='text-sm text-muted-foreground'>
                          Still important, but lowest priority of engagement
                          signals
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id='content-pillars-for-organic-growth'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Content Pillars for Organic Growth
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Consistency beats virality. If you create a content mix that
                    people save, share, and comment on, the algorithm will push
                    you to more people automatically.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    The 40-30-20-10 Formula
                  </h3>

                  <div className='space-y-6 my-8 not-prose'>
                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-b p-4'>
                        <h3 className='font-semibold text-lg'>
                          40% Educational
                        </h3>
                        <p className='text-sm text-muted-foreground mt-1'>
                          Step-by-step guides, industry data, myth-busting,
                          how-tos
                        </p>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Why it works: Educational content gets saved the most.
                          People come back to learn.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded'>
                          Examples: "5 Steps to [Goal]", "The data on [topic]",
                          "Why everyone gets [thing] wrong"
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-b p-4'>
                        <h3 className='font-semibold text-lg'>
                          30% Entertaining
                        </h3>
                        <p className='text-sm text-muted-foreground mt-1'>
                          Relatable humor, personality, trending audio, fun
                          formats
                        </p>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Why it works: Entertainment gets shares. People want
                          to send funny/relatable stuff to friends.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded'>
                          Examples: Funny takes on your niche, trending format
                          spins, "people who [X]" relatables
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-gradient-to-r from-green-500/10 to-green-500/5 border-b p-4'>
                        <h3 className='font-semibold text-lg'>
                          20% Inspirational
                        </h3>
                        <p className='text-sm text-muted-foreground mt-1'>
                          Transformation stories, motivational, before-afters,
                          success journeys
                        </p>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Why it works: Inspiration gets saved and shared.
                          People save it for when they need motivation.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded'>
                          Examples: Student wins, customer transformations, your
                          own journey, testimonials
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-gradient-to-r from-orange-500/10 to-orange-500/5 border-b p-4'>
                        <h3 className='font-semibold text-lg'>
                          10% Promotional
                        </h3>
                        <p className='text-sm text-muted-foreground mt-1'>
                          Soft CTAs, product features, limited offers,
                          availability
                        </p>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Why it works: Low percentage keeps audience from
                          feeling "sold to." Soft CTAs don't kill reach.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded'>
                          Examples: "Link in bio", "Now available", "Only 3
                          spots left", "New course just launched"
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className='text-lg text-muted-foreground mb-6'>
                    The key: 90% of your content should be valuable first,
                    promotional second. Build an audience that trusts you, and
                    they'll be ready when you have an offer.
                  </p>
                </section>

                <section id='engagement-signals-that-matter'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Engagement Signals That Matter (And How to Improve Them)
                  </h2>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Save Rate (Target: 5%+)
                  </h3>
                  <p className='text-lg text-muted-foreground mb-4'>
                    This is your most important metric now. Save rate = (Total
                    Saves / Total Reaches) × 100
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    To increase saves: Create evergreen content (guides, tips,
                    templates). Add a CTA: "Save this for later." Create
                    carousels with multiple valuable slides. Reframe your
                    content as "something worth collecting."
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Share Rate (Target: 2-3%)
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    When someone shares your post to their DMs or Story, it's an
                    algorithmic gold star. To increase shares: Create surprising
                    content ("You won't believe this stat..."). Make it
                    relatable ("Tag someone who..."). Make sharing easy with a
                    CTA ("Share this with someone who needs it").
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Comment Depth (Target: 3+ replies per comment)
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Not just comment count—comment quality. Are people replying
                    to each other or just to you? To increase depth: Ask
                    open-ended questions. Reply to comments with follow-up
                    questions. Start comment threads by replying to replies.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Watch-Through Rate for Reels (Target: 80%+)
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    The first 3 seconds are critical. If people don't watch past
                    the hook, the algorithm deprioritizes the Reel. To improve:
                    Hook in the first second. Use text overlays to stop scrolls.
                    Match the audio to your first scene.
                  </p>

                  <div className='bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8 not-prose'>
                    <p className='font-semibold text-blue-900 dark:text-blue-100 mb-2'>
                      The Engagement Flywheel
                    </p>
                    <p className='text-blue-800 dark:text-blue-200 text-sm'>
                      Good content → High save rate → Algorithm pushes to more
                      people → More views → More engagement → More reach →
                      Exponential growth. One good piece of content can keep
                      reaching new people for weeks.
                    </p>
                  </div>
                </section>

                <section id='dm-automation-as-growth-accelerator'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    DM Automation as a Growth Accelerator
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Here's the secret most creators miss: DM conversations are
                    an algorithmic signal. Every DM means someone valued your
                    content enough to start a relationship. The algorithm
                    notices.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    How DM Engagement Boosts Reach
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    When high volumes of your audience engage with you in DMs,
                    Instagram's algorithm sees this as strong "relationship
                    signals." This relationship strength increases your organic
                    reach on future posts. More conversations = more reach on
                    next post = better performance all around.
                  </p>

                  <div className='bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 not-prose'>
                    <h3 className='font-semibold text-lg mb-6'>
                      The DM-Powered Growth Loop
                    </h3>
                    <div className='space-y-4'>
                      <div className='flex gap-3'>
                        <span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-xs'>
                          1
                        </span>
                        <p className='text-sm'>
                          <span className='font-semibold'>
                            Post valuable content
                          </span>{' '}
                          → High save/comment rate
                        </p>
                      </div>
                      <div className='flex gap-3'>
                        <span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-xs'>
                          2
                        </span>
                        <p className='text-sm'>
                          <span className='font-semibold'>Include DM CTA</span>{' '}
                          → "Comment [KEYWORD] for more"
                        </p>
                      </div>
                      <div className='flex gap-3'>
                        <span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-xs'>
                          3
                        </span>
                        <p className='text-sm'>
                          <span className='font-semibold'>
                            Auto-DM responds
                          </span>{' '}
                          → Deep relationship signals
                        </p>
                      </div>
                      <div className='flex gap-3'>
                        <span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-xs'>
                          4
                        </span>
                        <p className='text-sm'>
                          <span className='font-semibold'>
                            Conversations convert
                          </span>{' '}
                          → Revenue/followers/engagement
                        </p>
                      </div>
                      <div className='flex gap-3'>
                        <span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-xs'>
                          5
                        </span>
                        <p className='text-sm'>
                          <span className='font-semibold'>
                            Algorithm boosts next post
                          </span>{' '}
                          → 3-5x better reach
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    The 90-Day Organic Growth Plan
                  </h3>

                  <div className='space-y-6 my-8 not-prose'>
                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-purple-500/10 border-b p-4'>
                        <h3 className='font-semibold text-lg'>
                          Month 1: Establish & Automate
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40 space-y-3 text-sm'>
                        <p className='font-semibold text-primary'>Week 1-2:</p>
                        <ul className='space-y-1 text-muted-foreground list-disc list-inside'>
                          <li>
                            Define your 4 content pillars (from the 40-30-20-10
                            mix)
                          </li>
                          <li>Plan 8 weeks of content calendar</li>
                          <li>
                            Start posting daily (or 4x weekly if part-time)
                          </li>
                        </ul>
                        <p className='font-semibold text-primary mt-4'>
                          Week 3-4:
                        </p>
                        <ul className='space-y-1 text-muted-foreground list-disc list-inside'>
                          <li>
                            Set up 1 comment trigger automation ("Comment
                            [KEYWORD]")
                          </li>
                          <li>
                            Monitor metrics: save rate, comment rate, share rate
                          </li>
                          <li>Adjust content based on what's resonating</li>
                        </ul>
                        <p className='font-semibold text-primary mt-4'>
                          Target growth: 2-5% follower increase
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-blue-500/10 border-b p-4'>
                        <h3 className='font-semibold text-lg'>
                          Month 2: Optimize & Scale
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40 space-y-3 text-sm'>
                        <p className='font-semibold text-primary'>Week 1-2:</p>
                        <ul className='space-y-1 text-muted-foreground list-disc list-inside'>
                          <li>
                            Analyze which content types got highest save rate
                          </li>
                          <li>Double down on what's working</li>
                          <li>A/B test hooks and CTAs</li>
                        </ul>
                        <p className='font-semibold text-primary mt-4'>
                          Week 3-4:
                        </p>
                        <ul className='space-y-1 text-muted-foreground list-disc list-inside'>
                          <li>
                            Add 2 more automations (different keywords/CTAs)
                          </li>
                          <li>
                            Review DM conversation quality and response rates
                          </li>
                          <li>Refine auto-DM messages based on performance</li>
                        </ul>
                        <p className='font-semibold text-primary mt-4'>
                          Target growth: 5-10% follower increase
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-green-500/10 border-b p-4'>
                        <h3 className='font-semibold text-lg'>
                          Month 3: Amplify & Collaborate
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40 space-y-3 text-sm'>
                        <p className='font-semibold text-primary'>Week 1-2:</p>
                        <ul className='space-y-1 text-muted-foreground list-disc list-inside'>
                          <li>Partner with complementary creator (3-5x DMs)</li>
                          <li>Collaborations expand reach to new audiences</li>
                          <li>Maintain your best-performing content types</li>
                        </ul>
                        <p className='font-semibold text-primary mt-4'>
                          Week 3-4:
                        </p>
                        <ul className='space-y-1 text-muted-foreground list-disc list-inside'>
                          <li>
                            Launch a "broadcast" (weekly/monthly valuable
                            content drop)
                          </li>
                          <li>Build anticipation and recurring engagement</li>
                          <li>
                            Leverage DM automations for launch day multiplier
                          </li>
                        </ul>
                        <p className='font-semibold text-primary mt-4'>
                          Target growth: 10-15% follower increase
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Benchmarks by Follower Size
                  </h3>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Under 10K followers
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2 text-sm'>
                        <p>
                          <span className='font-semibold'>Save rate:</span> 3-5%
                        </p>
                        <p>
                          <span className='font-semibold'>Comment rate:</span>{' '}
                          3-5%
                        </p>
                        <p>
                          <span className='font-semibold'>Share rate:</span>{' '}
                          0.5-1%
                        </p>
                        <p>
                          <span className='font-semibold'>DM response:</span>{' '}
                          15-25%
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          10K-100K followers
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2 text-sm'>
                        <p>
                          <span className='font-semibold'>Save rate:</span> 4-6%
                        </p>
                        <p>
                          <span className='font-semibold'>Comment rate:</span>{' '}
                          2-4%
                        </p>
                        <p>
                          <span className='font-semibold'>Share rate:</span>{' '}
                          1-2%
                        </p>
                        <p>
                          <span className='font-semibold'>DM response:</span>{' '}
                          10-20%
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          100K+ followers
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2 text-sm'>
                        <p>
                          <span className='font-semibold'>Save rate:</span> 5-8%
                        </p>
                        <p>
                          <span className='font-semibold'>Comment rate:</span>{' '}
                          1-3%
                        </p>
                        <p>
                          <span className='font-semibold'>Share rate:</span>{' '}
                          1-3%
                        </p>
                        <p>
                          <span className='font-semibold'>DM response:</span>{' '}
                          5-15%
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <h2 className='text-3xl font-bold tracking-tight mb-6 mt-12'>
                  One More Thing: The Algorithm Favors Consistency
                </h2>
                <p className='text-lg text-muted-foreground mb-8'>
                  Post every day (or your max sustainable frequency). 3x a week
                  beats 1x a week. 5x a week beats 3x. The algorithm rewards
                  creators who show up consistently. You don't need to post 10
                  times a day, but you do need a predictable schedule your
                  audience learns.
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>
                      Ready to Implement the 2026 Growth Strategy?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Set up your DM automations today and start capturing the
                      conversations that drive algorithmic reach. PostEngage
                      makes it automatic so you can focus on creating great
                      content.
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
          </div>
          <NewsletterForm />
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}

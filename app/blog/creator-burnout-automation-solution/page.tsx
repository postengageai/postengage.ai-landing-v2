import Image from 'next/image';
import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Heart, Clock, MessageSquare, Zap } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title:
    "I Was Burnt Out Replying to DMs. Here's How Automation Saved My Creator Business",
  description:
    'Replying to 200+ DMs a day was destroying my mental health. This is how I automated my Instagram without losing the personal touch my audience loves.',
  openGraph: {
    title:
      "I Was Burnt Out Replying to DMs. Here's How Automation Saved My Creator Business",
    description:
      'Replying to 200+ DMs a day was destroying my mental health. This is how I automated my Instagram without losing the personal touch my audience loves.',
    type: 'article',
    images: [
      {
        url: '/blog/creator-burnout-cover.png',
        width: 1200,
        height: 630,
        alt: 'I Was Burnt Out Replying to DMs. Here',
      },
    ],
    publishedTime: '2026-03-06',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 6, 2026';
  const readTime = '6 min read';

  const tableOfContents = [
    { id: 'the-breaking-point', title: 'The Breaking Point' },
    { id: 'what-i-tried-first', title: 'What I Tried First' },
    { id: 'discovering-voice-dna', title: 'Discovering Voice DNA' },
    { id: 'life-after-automation', title: 'Life After Automation' },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <ArticleJsonLd
        title='I Was Burnt Out Replying to DMs. Here'
        description='Replying to 200+ DMs a day was destroying my mental health. This is how I automated my Instagram without losing the personal touch my audience loves.'
        slug='creator-burnout-automation-solution'
        datePublished='2026-03-06'
        category='Creator Economy'
      />

      <LandingHeader />
      <main className='flex-1'>
        <BlogJsonLd
          title='I Was Burnt Out Replying to DMs. Here'
          description='Replying to 200+ DMs a day was destroying my mental health. This is how I automated my Instagram without losing the personal touch my audience loves.'
          slug='creator-burnout-automation-solution'
          date='2026-03-06'
          category='Creator Economy'
        />
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
                Creator Economy
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
              I Was Burnt Out Replying to DMs. Here's How Automation Saved My
              Creator Business
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              By Q3 2025, I had 180k followers. It should have felt like
              success. Instead, I was drowning in DMs. Here's how I automated my
              way back to loving my audience.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/creator-burnout-cover.png'
              alt='Creator Burnout Automation Solution'
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
                    url='https://postengage.ai/blog/creator-burnout-automation-solution'
                    title="I Was Burnt Out Replying to DMs. Here's How Automation Saved My Creator Business"
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <p className='text-lg leading-relaxed'>
                  Success doesn't always feel like success.
                </p>

                <p className='text-lg leading-relaxed'>
                  By Q3 of 2025, my Instagram account had crossed 180,000
                  followers. My Reels were consistently hitting 200k+ views. My
                  engagement rate was in the top 2% of creators in my niche. By
                  every external metric, I was winning.
                </p>

                <p className='text-lg leading-relaxed'>
                  Internally, I was falling apart.
                </p>

                <section
                  id='the-breaking-point'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    The Breaking Point
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    The problem wasn't followers. It was DMs.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    My notification feed was a constant stream of messages. Good
                    messages. Real people asking genuine questions. But the
                    volume was crushing. By September 2025, I was averaging
                    200-240 DMs per day. That's not an exaggeration. That's a
                    real number I tracked.
                  </p>

                  <Card className='my-6 border-red-200 bg-red-50'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Heart className='h-5 w-5 text-red-600' />
                        What 200 DMs Per Day Looks Like
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-3'>
                      <p className='text-sm text-red-900'>
                        I started tracking my time. Here's what a typical day
                        looked like:
                      </p>
                      <ul className='space-y-2 text-sm text-red-800'>
                        <li className='flex gap-3'>
                          <span className='font-bold'>6am-7am:</span>{' '}
                          <span>
                            Wake up, coffee, check DMs (there are 40 new ones
                            overnight)
                          </span>
                        </li>
                        <li className='flex gap-3'>
                          <span className='font-bold'>7am-10am:</span>{' '}
                          <span>
                            Reply to DMs (3 hours for roughly 60 replies)
                          </span>
                        </li>
                        <li className='flex gap-3'>
                          <span className='font-bold'>10am-1pm:</span>{' '}
                          <span>
                            Work on content (interrupted by DM notifications
                            every 2 minutes)
                          </span>
                        </li>
                        <li className='flex gap-3'>
                          <span className='font-bold'>1pm-2pm:</span>{' '}
                          <span>
                            Lunch + DMs (didn't stop, just ate at desk)
                          </span>
                        </li>
                        <li className='flex gap-3'>
                          <span className='font-bold'>2pm-5pm:</span>{' '}
                          <span>
                            Filming / editing (constant notification anxiety)
                          </span>
                        </li>
                        <li className='flex gap-3'>
                          <span className='font-bold'>5pm-6pm:</span>{' '}
                          <span>
                            Reply to accumulated DMs (another 60 new ones)
                          </span>
                        </li>
                        <li className='flex gap-3'>
                          <span className='font-bold'>6pm onward:</span>{' '}
                          <span>
                            Personal time? Tried. DMs kept coming. Gave up
                            ignoring them by 7pm.
                          </span>
                        </li>
                      </ul>
                      <p className='text-xs text-red-700 mt-3 pt-3 border-t'>
                        Total: 3+ hours per day replying to DMs. But the
                        context-switching destroyed productivity the rest of the
                        day. My actual time cost was closer to 6 hours.
                      </p>
                    </CardContent>
                  </Card>

                  <p className='text-lg leading-relaxed'>
                    The math is brutal: 200 DMs × 365 days = 73,000 messages per
                    year. Even at just 1 minute per message (which is
                    impossible—most took 2-3 minutes), that's 1,216 hours
                    annually. 30+ full-time work weeks just replying to DMs.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    By October 2025, my response rate had tanked to 34%. I
                    wasn't replying to DMs anymore. I was ignoring them. And
                    then I was feeling guilty about ignoring them. And then I
                    was burning out about the guilt.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    The irony was devastating: I'd grown an audience because I
                    was authentic and present. Now that I'd actually made it, I
                    couldn't be present anymore. The very thing that made me
                    successful was destroying me.
                  </p>

                  <Card className='my-6 border-orange-200 bg-orange-50'>
                    <CardContent className='pt-6'>
                      <p className='text-sm font-semibold text-orange-900 mb-2'>
                        The Creator Paradox
                      </p>
                      <p className='text-sm text-orange-800'>
                        Growth creates more engagement. More engagement requires
                        more time. Eventually, you have to choose: either stop
                        growing your audience, or stop being present with your
                        audience.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section
                  id='what-i-tried-first'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    What I Tried First (And Why It Failed)
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    I wasn't going to just accept burnout. I started looking for
                    solutions immediately.
                  </p>

                  <div className='my-8 space-y-5'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base'>
                          Option 1: Hire a Virtual Assistant
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2'>
                        <p className='text-sm'>
                          Seemed like the obvious answer. I hired a VA from a
                          popular agency for $2,400/month. She'd reply to my DMs
                          based on my guidelines.
                        </p>
                        <p className='text-sm text-red-600 font-semibold'>
                          Result: Disaster in 2 weeks.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Within two weeks, followers were commenting on my
                          posts: "Is this still really you?" "Your replies are
                          different now." "This doesn't feel like your energy."
                          The VA was following my guidelines correctly, but she
                          wasn't ME. My tone, my emoji usage, my specific way of
                          phrasing things—none of it matched. Followers could
                          sense the inauthenticity immediately. My comment
                          engagement dropped 23% in week 3.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base'>
                          Option 2: Generic Chatbot
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2'>
                        <p className='text-sm'>
                          I tried a popular chatbot platform that promised
                          "AI-powered responses." Set up some templates, let it
                          run.
                        </p>
                        <p className='text-sm text-red-600 font-semibold'>
                          Result: Worse than useless.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          The responses were so robotic that followers
                          immediately knew it wasn't me. Sample: "Thank you for
                          your interest in my content! I appreciate your
                          support. Feel free to DM me with any questions!" It
                          sounded like a corporate email. Comments on my posts
                          were brutal: "lol the bot replies are so obvious," "is
                          she even here anymore?". I turned it off after 4 days.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base'>
                          Option 3: Ignore It (Not Actually an Option)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2'>
                        <p className='text-sm'>
                          I tried just... not replying for a week. I'd focus on
                          content creation and let DMs sit.
                        </p>
                        <p className='text-sm text-red-600 font-semibold'>
                          Result: Guilt and resentment.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Followers were waiting for responses. Some sent
                          follow-up messages: "Hey, forgot to check my DMs?"
                          "Are you there?" The guilt of ignoring real people who
                          supported me was worse than the exhaustion of
                          replying. I lasted 5 days before diving back in.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p className='text-lg leading-relaxed'>
                    I was stuck. Either I had to:
                  </p>

                  <ul className='text-lg leading-relaxed space-y-2 ml-4'>
                    <li>
                      Keep sacrificing my mental health and time (burnout)
                    </li>
                    <li>
                      Hire someone and lose authenticity (follower backlash)
                    </li>
                    <li>Use a bot and lose my voice (growth stalls)</li>
                    <li>Ignore my audience (guilt + resentment)</li>
                  </ul>

                  <p className='text-lg leading-relaxed mt-6'>
                    None of the options were acceptable. That's when a follower
                    I know sent me a message: "Have you tried PostEngage.ai?
                    They have something called Voice DNA."
                  </p>
                </section>

                <section
                  id='discovering-voice-dna'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    Discovering Voice DNA
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    I was skeptical. Another AI tool promising to sound like me?
                    I'd heard that pitch before. But I had nothing to lose, so I
                    signed up. What I discovered was{' '}
                    <Link
                      href='/blog/voice-dna-instagram-replies'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      Voice DNA technology
                    </Link>{' '}
                    that actually works.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    The setup process was simple. Voice DNA analyzed my last 90
                    days of DMs, comments, captions, and stories. It extracted
                    patterns from how I actually communicate.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    Then I reviewed 5 sample responses it generated. And I was
                    shocked.
                  </p>

                  <Card className='my-6 border-green-200 bg-green-50'>
                    <CardHeader>
                      <CardTitle className='text-base'>
                        Sample Comparison: My Voice vs. Voice DNA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div>
                        <p className='text-sm font-semibold text-green-900 mb-2'>
                          The DM: "How did you get started with Instagram?"
                        </p>
                      </div>
                      <div>
                        <p className='text-xs font-semibold text-green-800 mb-1'>
                          My typical response (what Voice DNA learned):
                        </p>
                        <div className='bg-white p-3 rounded border border-green-200 text-sm'>
                          "honestly wasn't intentional lol. i was just posting
                          things that made me laugh and people started
                          following. biggest thing was consistency + not caring
                          what anyone thought. that combo is magic. what area
                          are you interested in?"
                        </div>
                      </div>
                      <div>
                        <p className='text-xs font-semibold text-green-800 mb-1'>
                          What Voice DNA generated (first try):
                        </p>
                        <div className='bg-white p-3 rounded border border-green-200 text-sm'>
                          "haha good question. honestly it was kinda random at
                          first. just posted stuff consistently and didn't worry
                          about being perfect. people could tell i was real and
                          that was the thing. now i'm just trying to keep it
                          that way. are you thinking about starting?"
                        </div>
                      </div>
                      <p className='text-xs text-green-700 mt-2'>
                        The Voice DNA response captured my casual tone, my
                        specific pattern of starting with "honestly," my emoji
                        usage, my conversational phrasing, and my tendency to
                        ask a follow-up question. It was indistinguishable from
                        how I actually reply.
                      </p>
                    </CardContent>
                  </Card>

                  <p className='text-lg leading-relaxed'>
                    I was sold. I activated Voice DNA on October 15th, 2025.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    The key was that I didn't have to trust it blindly. Voice
                    DNA generates responses, but I still review them before
                    they're sent. Every response gets my approval. So if
                    something doesn't sound right, I edit it or reject it. The
                    AI learns from my feedback.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    Suddenly, I had a system where:
                  </p>

                  <ul className='text-lg leading-relaxed space-y-2 ml-4'>
                    <li>
                      DMs still sounded like me (Voice DNA handles the initial
                      generation)
                    </li>
                    <li>I maintained control (I review everything)</li>
                    <li>
                      My time was cut dramatically (I review instead of write,
                      which is 5x faster)
                    </li>
                    <li>
                      The AI got smarter over time (every response I approve
                      becomes training data)
                    </li>
                  </ul>
                </section>

                <section
                  id='life-after-automation'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    Life After Automation
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    The changes were immediate and dramatic.
                  </p>

                  <Card className='my-8 border-primary/20 bg-primary/5'>
                    <CardHeader>
                      <CardTitle>
                        The Numbers: Before vs. After Voice DNA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p className='text-xs font-semibold text-muted-foreground mb-1'>
                            BEFORE (Oct 2025)
                          </p>
                          <p className='text-2xl font-bold text-red-600'>200</p>
                          <p className='text-xs text-muted-foreground'>
                            DMs per day
                          </p>
                        </div>
                        <div>
                          <p className='text-xs font-semibold text-muted-foreground mb-1'>
                            AFTER (Now, Mar 2026)
                          </p>
                          <p className='text-2xl font-bold text-green-600'>
                            200
                          </p>
                          <p className='text-xs text-muted-foreground'>
                            DMs per day (same volume)
                          </p>
                        </div>
                      </div>

                      <div className='border-t pt-4 space-y-3'>
                        <div>
                          <div className='flex justify-between items-start mb-1'>
                            <span className='text-sm font-semibold'>
                              Time spent replying
                            </span>
                          </div>
                          <div className='flex gap-2'>
                            <div className='flex-1'>
                              <p className='text-xs text-muted-foreground mb-1'>
                                Before: 3+ hours/day
                              </p>
                              <div className='h-2 bg-red-200 rounded w-full'></div>
                            </div>
                            <div className='flex-1'>
                              <p className='text-xs text-muted-foreground mb-1'>
                                After: 45 min/day
                              </p>
                              <div className='h-2 bg-green-200 rounded w-1/4'></div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className='flex justify-between items-start mb-1'>
                            <span className='text-sm font-semibold'>
                              Response rate
                            </span>
                          </div>
                          <div className='flex gap-2'>
                            <div className='flex-1'>
                              <p className='text-xs text-muted-foreground mb-1'>
                                Before: 34%
                              </p>
                              <div className='h-2 bg-red-200 rounded w-1/3'></div>
                            </div>
                            <div className='flex-1'>
                              <p className='text-xs text-muted-foreground mb-1'>
                                After: 100%
                              </p>
                              <div className='h-2 bg-green-200 rounded w-full'></div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className='flex justify-between items-start mb-1'>
                            <span className='text-sm font-semibold'>
                              Follower comments about replies
                            </span>
                          </div>
                          <p className='text-sm text-muted-foreground mt-2'>
                            Before: "Is this still you?" / "This feels
                            different"
                          </p>
                          <p className='text-sm text-green-700 font-semibold'>
                            After: "Wow you're so responsive!" / "I love how
                            real you are"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p className='text-lg leading-relaxed'>
                    But the real impact wasn't in those numbers. It was in how I
                    felt.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    For the first time in months, I didn't feel anxious checking
                    my DMs. I knew they'd be handled. Not by a stranger. Not by
                    a bot. By my own voice, automated.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    I got 2.5 hours back per day. Instead of spending it on DMs,
                    I spent it on:
                  </p>

                  <Card className='my-6'>
                    <CardContent className='pt-6 space-y-3'>
                      <div className='flex gap-3'>
                        <Zap className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <p className='font-semibold text-sm mb-1'>
                            Better Content
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            I had mental energy to brainstorm and plan. My Reel
                            quality improved. Avg view time went from 2.3s to
                            3.1s in 30 days.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <MessageSquare className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <p className='font-semibold text-sm mb-1'>
                            Deeper Conversations
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            With 100% response rate, I could actually build
                            relationships. People felt heard. Conversations went
                            deeper. Customer lifetime value increased.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <Heart className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <p className='font-semibold text-sm mb-1'>
                            Mental Health
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            The guilt and anxiety evaporated. I felt present
                            again. Creating Instagram content became fun instead
                            of a source of stress.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <Clock className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <p className='font-semibold text-sm mb-1'>
                            Personal Time
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            For the first time in 6 months, I had time outside
                            of Instagram. Time to rest. Time to live. Time to
                            remember why I started creating.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p className='text-lg leading-relaxed'>
                    Today (March 2026), I'm at 247k followers. My growth rate
                    actually accelerated after implementing Voice DNA because my
                    content improved. My comment engagement is up 17%. My DM
                    conversations often lead to actual relationships with
                    followers.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    And I'm not burnt out anymore. Success finally feels like
                    success.
                  </p>
                </section>

                <div className='my-8 border-t pt-8'>
                  <p className='text-lg leading-relaxed mb-6'>
                    If you're a creator reading this and you recognize yourself
                    in my story—200 DMs a day, response rate tanking, anxiety
                    spiking, joy draining—you have options. You don't have to
                    choose between growth and mental health. You don't have to
                    lose authenticity to save time. There's a third path:{' '}
                    <Link
                      href='/blog/personal-brand-automation-guide'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      stay authentic while automating
                    </Link>
                    .
                  </p>
                </div>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Heart className='h-5 w-5' />
                      Your Audience Deserves Your Voice. Your Business Deserves
                      Your Time.
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Voice DNA automates your DMs without losing your
                      authenticity. Get your time back. Keep your followers
                      happy. Actually enjoy your success.
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

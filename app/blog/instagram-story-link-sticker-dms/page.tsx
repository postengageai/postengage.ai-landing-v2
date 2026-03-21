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
  TrendingUp,
  MessageCircle,
  Link as LinkIcon,
  BarChart3,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Instagram Story Link Sticker + DM Automation: The Ultimate Traffic Combo',
  description:
    'The link sticker gets clicks, but DMs start conversations. Learn how to combine Instagram Story link stickers with DM automation for maximum conversion.',
  openGraph: {
    title:
      'Instagram Story Link Sticker + DM Automation: The Ultimate Traffic Combo',
    description:
      'The link sticker gets clicks, but DMs start conversations. Learn how to combine Instagram Story link stickers with DM automation for maximum conversion.',
    type: 'article',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Instagram Story Link Sticker + DM Automation: The Ultimate Traffic Combo',
      },
    ],
    publishedTime: '2026-03-07',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 7, 2026';
  const readTime = '6 min read';

  const tableOfContents = [
    { id: 'link-sticker-limitations', title: 'Link Sticker Limitations' },
    {
      id: 'the-story-dm-combo-strategy',
      title: 'The Story + DM Combo Strategy',
    },
    {
      id: 'story-sequences-that-drive-dms',
      title: 'Story Sequences That Drive DMs',
    },
    {
      id: 'measuring-story-dm-performance',
      title: 'Measuring Story-DM Performance',
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
                Stories Strategy
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
              Instagram Story Link Sticker + DM Automation: The Ultimate Traffic
              Combo
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Link stickers get 2-4% clicks. DM CTAs get 8-15% engagement.
              Together? They're the highest-converting traffic combination on
              Instagram.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/story-link-sticker-cover.png'
              alt='Instagram Story Link Sticker Dms'
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
                    url='https://postengage.ai/blog/instagram-story-link-sticker-dms'
                    title='Instagram Story Link Sticker + DM Automation: The Ultimate Traffic Combo'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section id='link-sticker-limitations'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    The Problem with Link Stickers Alone
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Instagram Stories are your most powerful tool for driving
                    traffic. They bypass the algorithm. They land directly in
                    your top followers' views. And with the link sticker, you
                    can direct people straight to your website.
                  </p>
                  <p className='text-lg text-muted-foreground mb-8'>
                    But here's the hard truth: most people who see your Story
                    won't swipe up. Most won't even notice the link sticker. And
                    the ones who do? They might click, but they're clicking with
                    minimal context about what they're clicking to.
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm flex items-center gap-2'>
                          <LinkIcon className='h-4 w-4' />
                          Link Sticker CTR
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-2xl font-bold'>2-4%</p>
                        <p className='text-sm text-muted-foreground mt-2'>
                          Average click-through rate on link stickers
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm flex items-center gap-2'>
                          <MessageCircle className='h-4 w-4' />
                          DM CTA Response
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-2xl font-bold'>8-15%</p>
                        <p className='text-sm text-muted-foreground mt-2'>
                          Average response rate to "DM me" CTAs
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm flex items-center gap-2'>
                          <Zap className='h-4 w-4' />
                          Combined Power
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-2xl font-bold'>10-19%</p>
                        <p className='text-sm text-muted-foreground mt-2'>
                          Engagement when using both together
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p className='text-lg text-muted-foreground mb-6'>
                    The difference? People feel more comfortable DM-ing you.
                    They get a personalized response. And you get a conversation
                    that can convert, not just a one-time click. This is
                    especially powerful when combined with{' '}
                    <Link
                      href='/blog/instagram-broadcast-channels-automation'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      broadcast channels
                    </Link>{' '}
                    and{' '}
                    <Link
                      href='/blog/instagram-reels-automation-2026'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      Reels automation
                    </Link>
                    .
                  </p>
                </section>

                <section id='the-story-dm-combo-strategy'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    The Story + DM Combo Strategy
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    You use BOTH. The link sticker captures the people ready to
                    click now. The DM automation captures people who need more
                    context first.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    How It Works
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Post a Story. Include both a link sticker AND a text overlay
                    saying "Or DM me [KEYWORD]." Some people will click the
                    link. Others will feel more comfortable sending a DM. Both
                    actions lead somewhere. Both are automated and trackable.
                  </p>

                  <div className='bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 not-prose'>
                    <h3 className='font-semibold text-lg mb-6'>
                      The Complete Story + DM Workflow
                    </h3>
                    <div className='space-y-6'>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          1
                        </div>
                        <div>
                          <p className='font-semibold'>Post Your Story</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            With eye-catching visual, your message, and a link
                            sticker at the top
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          2
                        </div>
                        <div>
                          <p className='font-semibold'>Add DM CTA Text</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Text overlay: "Or comment INFO below" or "DM me for
                            details"
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          3
                        </div>
                        <div>
                          <p className='font-semibold'>
                            Story Reply Automation
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            PostEngage detects replies to your Story and
                            auto-DMs contextual response
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          4
                        </div>
                        <div>
                          <p className='font-semibold'>Dual Conversion Paths</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Link sticker → website visitors. Story replies →
                            warm DM conversations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Story Reply Automation: How It Works
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    When someone replies to your Story (even just with an
                    emoji), PostEngage detects it and automatically DMs them
                    back with relevant information.
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle>Story Reply Types</CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p>✓ Text replies ("That's cool!")</p>
                        <p>✓ Emoji replies (any emoji counts)</p>
                        <p>✓ Sticker replies</p>
                        <p>✓ Drawing replies</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Auto-DM Response</CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p>Sent within 60 seconds of reply</p>
                        <p>Personalized to their specific reply</p>
                        <p>Includes next step (link, offer, etc.)</p>
                        <p>Feels personal, not automated</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className='bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8 not-prose'>
                    <p className='font-semibold text-blue-900 dark:text-blue-100 mb-2'>
                      Example Story Reply Automation
                    </p>
                    <p className='text-blue-800 dark:text-blue-200 text-sm mb-4'>
                      Your Story: "Check out our new course. Link in bio. Or
                      reply to this Story!"
                    </p>
                    <p className='text-blue-800 dark:text-blue-200 text-sm mb-3'>
                      <span className='font-semibold'>
                        When someone replies (e.g., with a heart emoji):
                      </span>
                    </p>
                    <p className='text-blue-800 dark:text-blue-200 text-sm italic'>
                      "Love the interest! 🙌 Sent you a preview of the course +
                      student testimonials. Check your DMs!"
                    </p>
                  </div>
                </section>

                <section id='story-sequences-that-drive-dms'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Story Sequences That Drive DM Action
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Not all Stories are created equal. Here are the types that
                    generate the most DM replies and engagement.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Ask Me Anything Stories
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Post a question sticker or poll asking for opinions. "What's
                    your biggest challenge with [topic]?" When people reply,
                    auto-DM them back with a relevant resource or offer tailored
                    to their answer.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Poll Stories That Qualify
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Use polls to qualify leads. "Are you interested in [offer]?
                    Yes/No" Everyone who votes YES gets an auto-DM with next
                    steps. This instantly separates interested from
                    not-interested without effort.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Countdown Stories for Launches
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    "New course drops in 3 days! React to this Story to get
                    early access." Everyone who replies becomes part of your
                    launch day sequence. You can send them exclusive sneak peeks
                    or launch reminders via auto-DM.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Behind-the-Scenes Stories
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    People feel personal connection to behind-the-scenes
                    content. When they reply with interest, auto-DM can offer
                    them insider access, exclusive content, or a chance to chat
                    directly with you.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Testimonial Stories
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Share a customer's transformation. "Swipe to see how Sarah
                    went from [before] to [after]." People who reply get auto-DM
                    with Sarah's full case study + offer to work together.
                  </p>

                  <div className='bg-secondary/40 rounded-lg p-8 my-8 not-prose'>
                    <h3 className='font-semibold text-lg mb-6'>
                      7-Day Story-to-DM Content Calendar
                    </h3>
                    <div className='space-y-4'>
                      <div className='flex gap-4 pb-4 border-b last:border-b-0'>
                        <span className='font-semibold text-primary min-w-fit'>
                          Monday
                        </span>
                        <div>
                          <p className='font-medium'>AMA Story</p>
                          <p className='text-sm text-muted-foreground'>
                            Ask your audience their biggest pain point. Replies
                            trigger DM with solution.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4 pb-4 border-b last:border-b-0'>
                        <span className='font-semibold text-primary min-w-fit'>
                          Wednesday
                        </span>
                        <div>
                          <p className='font-medium'>Poll Story</p>
                          <p className='text-sm text-muted-foreground'>
                            Qualify leads. "Ready for change?" Yes voters get DM
                            offer.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4 pb-4 border-b last:border-b-0'>
                        <span className='font-semibold text-primary min-w-fit'>
                          Thursday
                        </span>
                        <div>
                          <p className='font-medium'>Testimonial Story</p>
                          <p className='text-sm text-muted-foreground'>
                            Student/customer transformation. Replies trigger DM
                            with case study.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4 pb-4 border-b last:border-b-0'>
                        <span className='font-semibold text-primary min-w-fit'>
                          Friday
                        </span>
                        <div>
                          <p className='font-medium'>Behind-the-Scenes</p>
                          <p className='text-sm text-muted-foreground'>
                            Day in your life or work process. Humanizes your
                            brand. Replies = interest.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <span className='font-semibold text-primary min-w-fit'>
                          Weekend
                        </span>
                        <div>
                          <p className='font-medium'>
                            Countdown or Exclusive Offer
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            Build anticipation or FOMO. Replies get exclusive DM
                            access.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id='measuring-story-dm-performance'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Measuring Story + DM Performance
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    What gets measured gets improved. Track these metrics to
                    optimize your Story-to-DM strategy.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Key Metrics
                  </h3>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Story Reply Rate
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2 text-sm'>
                        <p className='font-semibold text-primary'>Formula:</p>
                        <p className='text-muted-foreground'>
                          (Replies / Story Views) × 100
                        </p>
                        <p className='text-xs text-muted-foreground mt-3'>
                          Target: 5%+ is solid. 10%+ is excellent.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Story-to-DM Conversion
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2 text-sm'>
                        <p className='font-semibold text-primary'>Formula:</p>
                        <p className='text-muted-foreground'>
                          (DM Conversations / Story Replies) × 100
                        </p>
                        <p className='text-xs text-muted-foreground mt-3'>
                          Should be 85-95% (most replies trigger DMs)
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Link Sticker CTR
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2 text-sm'>
                        <p className='font-semibold text-primary'>Formula:</p>
                        <p className='text-muted-foreground'>
                          (Link Clicks / Story Views) × 100
                        </p>
                        <p className='text-xs text-muted-foreground mt-3'>
                          Typical 2-4%. Often higher when paired with DM CTA.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          DM Response Rate
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-2 text-sm'>
                        <p className='font-semibold text-primary'>Formula:</p>
                        <p className='text-muted-foreground'>
                          (Replies to DM / DMs sent) × 100
                        </p>
                        <p className='text-xs text-muted-foreground mt-3'>
                          Target: 20%+. High-quality engaged audience.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    How to Track in PostEngage
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Your PostEngage analytics dashboard tracks all of this
                    automatically. Here's what to monitor:
                  </p>

                  <div className='space-y-4 not-prose'>
                    <div className='flex gap-4 p-4 rounded-lg bg-secondary/40'>
                      <BarChart3 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold'>Story Replies Dashboard</p>
                        <p className='text-sm text-muted-foreground'>
                          See total replies, reply rate, and breakdown by Story
                          type
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-4 p-4 rounded-lg bg-secondary/40'>
                      <TrendingUp className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold'>DM Trigger Funnel</p>
                        <p className='text-sm text-muted-foreground'>
                          Track Stories → Replies → DM Sends → DM Responses
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-4 p-4 rounded-lg bg-secondary/40'>
                      <MessageCircle className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold'>Conversation Quality</p>
                        <p className='text-sm text-muted-foreground'>
                          Average DM length, response rate, time to first reply
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4 mt-8'>
                    Optimization Tips
                  </h3>
                  <ul className='space-y-4 text-lg text-muted-foreground mb-8 not-prose'>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>If low reply rate:</strong> Make your CTA more
                        compelling. Try different question types or use urgency
                        ("Last chance" or "48 hours only")
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>If low DM response rate:</strong> Your auto-DM
                        message might not be engaging enough. Try being more
                        specific, adding social proof, or clarifying next steps
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>If link sticker clicks low:</strong> Pair it
                        more explicitly with DM CTA. People should feel they
                        have multiple paths to take action
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>Test constantly:</strong> Run the same Story
                        format 3 times. Compare reply rates. What works for you
                        might be different from what works for others
                      </span>
                    </li>
                  </ul>

                  <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 not-prose'>
                    <p className='font-semibold text-green-900 dark:text-green-100 mb-2'>
                      Real Results: Fashion Influencer Case Study
                    </p>
                    <p className='text-green-800 dark:text-green-200 text-sm'>
                      Before combining link stickers + DM automation: 2,400
                      Story views/week, 48 link clicks, 8 sales. After: 2,400
                      Story views/week, 48 link clicks + 340 Story reply DM
                      conversations, 68 sales (750% increase in conversions).
                      The key: DMs converted at 20% while link-only had 3%
                      conversion. Same traffic. Different paths. Way higher
                      sales.
                    </p>
                  </div>
                </section>

                <h2 className='text-3xl font-bold tracking-tight mb-6 mt-12'>
                  The Combo Strategy: Why It Works
                </h2>
                <p className='text-lg text-muted-foreground mb-6'>
                  Link stickers work for people who are ready to click. DM
                  automation works for people who need social proof, a personal
                  touch, or just prefer conversations to clicking links.
                  Together, you're capturing both audiences without extra
                  effort. One Story. Two conversion paths. Exponentially better
                  results.
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>Ready to Maximize Your Story Traffic?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Set up Story reply automation and start capturing the DM
                      conversations that traditional link stickers miss.
                      PostEngage makes it automatic.
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

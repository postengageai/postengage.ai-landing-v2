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
  CheckCircle2,
  TrendingUp,
  Search,
  MessageCircle,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';

export const metadata: Metadata = {
  title: 'The End of "Post and Pray": PostEngage.ai x RecentReborn',
  description:
    'We are partnering with RecentReborn to solve the biggest problem in 2026: The Discovery Deficit. Learn how to turn visibility into viral engagement.',
  openGraph: {
    title: 'The End of "Post and Pray": PostEngage.ai x RecentReborn',
    description:
      'Stop shouting into the void. A 360-degree solution for Instagram growth that combines instant discovery with automated engagement.',
    url: 'https://postengage.ai/blog/postengage-recentreborn-partnership',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-03T12:00:00.000Z',
    authors: ['PostEngage.ai Team'],
    images: [
      {
        url: 'https://postengage.ai/blog/postengage-recentreborn-cover.png',
        width: 1200,
        height: 630,
        alt: 'PostEngage.ai x RecentReborn Partnership',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The End of "Post and Pray": PostEngage.ai x RecentReborn',
    description:
      'Stop shouting into the void. A 360-degree solution for Instagram growth that combines instant discovery with automated engagement.',
    images: ['https://postengage.ai/blog/postengage-recentreborn-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The End of "Post and Pray": PostEngage.ai x RecentReborn',
    image: ['https://postengage.ai/blog/postengage-recentreborn-cover.png'],
    datePublished: '2025-10-24T12:00:00.000Z',
    dateModified: '2025-10-24T12:00:00.000Z',
    author: [
      {
        '@type': 'Organization',
        name: 'PostEngage.ai Team',
        url: 'https://postengage.ai',
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
              title='The End of "Post and Pray": PostEngage.ai x RecentReborn'
              url='https://postengage.ai/blog/postengage-recentreborn-partnership'
            />
          </div>

          {/* Header Section */}
          <header className='mb-12 text-center max-w-4xl mx-auto'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 border-0 px-3 py-1 text-sm'
              >
                Strategic Partnership
              </Badge>
              <Badge
                variant='outline'
                className='border-border text-muted-foreground px-3 py-1 text-sm'
              >
                5 min read
              </Badge>
            </div>

            <h1 className='mb-8 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]'>
              The End of "Post and Pray": <br className='hidden md:block' />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-600'>
                Why Discovery is the New Engagement
              </span>
            </h1>

            <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8'>
              We are partnering with RecentReborn to solve the two biggest
              challenges in Instagram growth: getting found and staying
              connected.
            </p>

            <div className='flex items-center justify-center gap-4'>
              <div className='flex items-center gap-3 bg-muted/50 rounded-full pl-2 pr-6 py-2 border border-border/50'>
                <Avatar className='h-10 w-10 border-2 border-background shadow-sm'>
                  <AvatarImage src='/logo.jpeg' alt='PostEngage.ai' />
                  <AvatarFallback>PE</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='text-sm font-semibold text-foreground'>
                    PostEngage.ai Team
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    October 24, 2025
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className='relative mb-20 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border/50 bg-muted shadow-2xl'>
            <Image
              src='/blog/postengage-recentreborn-cover.png'
              alt='PostEngage.ai and RecentReborn Partnership'
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Content Wrapper with Grid Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content Column */}
            <div className='lg:col-span-8'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none leading-loose space-y-8'>
                <p className='text-xl md:text-2xl font-medium leading-relaxed text-foreground/90'>
                  Let’s be honest: Instagram growth in 2026 feels broken. You
                  spend hours crafting the perfect reel, writing a witty
                  caption, and researching hashtags, only to hit "Post" and...
                  silence.
                </p>

                <p>
                  This is the <strong>"Post and Pray"</strong> strategy, and for
                  99% of creators and brands, it’s dead. The algorithm has
                  become a black box, favoring viral trends over genuine
                  connection.
                </p>

                <div className='bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 my-8 rounded-r-lg'>
                  <p className='font-bold text-red-800 dark:text-red-300 m-0 text-lg'>
                    The Problem: The Discovery Deficit
                  </p>
                  <p className='text-red-700 dark:text-red-400 mt-2 mb-0'>
                    You have an engagement tool (PostEngage.ai) ready to reply
                    to thousands of comments. But what happens if those comments
                    never come because no one sees your post?
                  </p>
                </div>

                <p>
                  At PostEngage.ai, we solved the <em>retention</em> piece of
                  the puzzle. We ensure that when someone talks to you, you talk
                  back—instantly, personally, and automatically. But we realized
                  we needed to solve the <em>acquisition</em> piece.
                </p>

                <p>
                  Enter{' '}
                  <a
                    href='https://recentreborn.com'
                    target='_blank'
                    className='text-primary font-bold no-underline hover:underline'
                  >
                    RecentReborn
                  </a>
                  .
                </p>

                <h2 className='text-3xl font-bold mt-12 mb-6'>
                  Why RecentReborn Changes Everything
                </h2>

                <p>
                  RecentReborn isn't just another analytics tool. It is a{' '}
                  <strong>Discovery Engine</strong>. It brings back the one
                  thing Instagram killed years ago:{' '}
                  <strong>Chronological Search</strong>.
                </p>

                <p>
                  Imagine being able to find every single post containing
                  specific keywords or hashtags <em>seconds</em> after they are
                  posted. Not the "top" posts from last week. The real, raw,
                  real-time conversations happening <em>right now</em>.
                </p>

                <div className='grid md:grid-cols-2 gap-6 my-10 not-prose'>
                  <Card className='bg-card border-primary/20 shadow-lg'>
                    <CardHeader className='pb-3'>
                      <div className='h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2'>
                        <Search className='h-6 w-6' />
                      </div>
                      <CardTitle className='text-xl'>
                        1. Find the Pulse
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='text-muted-foreground'>
                      RecentReborn lets you identify trending topics and user
                      questions in your niche instantly. You stop guessing what
                      to post and start answering what people are asking.
                    </CardContent>
                  </Card>

                  <Card className='bg-card border-primary/20 shadow-lg'>
                    <CardHeader className='pb-3'>
                      <div className='h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2'>
                        <MessageCircle className='h-6 w-6' />
                      </div>
                      <CardTitle className='text-xl'>
                        2. Own the Conversation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='text-muted-foreground'>
                      Once discovered, PostEngage.ai takes over. We automate the
                      replies, DMs, and follow-ups, turning a casual viewer into
                      a loyal community member.
                    </CardContent>
                  </Card>
                </div>

                <h2 className='text-3xl font-bold mt-12 mb-6'>
                  The "Visibility Velocity" Framework
                </h2>

                <p>
                  We are introducing a new growth framework for our users called{' '}
                  <strong>Visibility Velocity</strong>. It works like this:
                </p>

                <ol className='list-none space-y-6 pl-0 my-8'>
                  <li className='flex gap-4 items-start'>
                    <div className='flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mt-1'>
                      1
                    </div>
                    <div>
                      <strong className='block text-lg mb-1'>
                        Monitor Signals
                      </strong>
                      <span className='text-muted-foreground'>
                        Use RecentReborn to track keywords like
                        "recommendations", "help needed", or specific competitor
                        tags.
                      </span>
                    </div>
                  </li>
                  <li className='flex gap-4 items-start'>
                    <div className='flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mt-1'>
                      2
                    </div>
                    <div>
                      <strong className='block text-lg mb-1'>
                        Engage First
                      </strong>
                      <span className='text-muted-foreground'>
                        Be the first to comment on these new posts. Speed
                        matters. RecentReborn gives you the speed.
                      </span>
                    </div>
                  </li>
                  <li className='flex gap-4 items-start'>
                    <div className='flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mt-1'>
                      3
                    </div>
                    <div>
                      <strong className='block text-lg mb-1'>
                        Automate Retention
                      </strong>
                      <span className='text-muted-foreground'>
                        When they reply to you or visit your profile,
                        PostEngage.ai triggers an automated welcome sequence or
                        delivers a lead magnet.
                      </span>
                    </div>
                  </li>
                </ol>

                <h2 className='text-3xl font-bold mt-12 mb-6'>
                  Exclusive Partnership Offer
                </h2>

                <p>
                  We didn't just want to integrate our tools; we wanted to
                  integrate our communities. Because we believe so strongly in
                  this workflow, we have secured an exclusive deal for
                  PostEngage.ai users.
                </p>

                <div className='not-prose my-12'>
                  <Card className='overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background dark:from-primary/10 shadow-xl'>
                    <div className='absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl'></div>
                    <CardContent className='p-8 sm:p-12 text-center relative z-10'>
                      <Badge className='mb-6 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-1.5 text-sm'>
                        Limited Time Offer
                      </Badge>
                      <h3 className='text-3xl font-extrabold tracking-tight sm:text-4xl mb-4'>
                        Unlock the Discovery Engine
                      </h3>
                      <p className='mx-auto max-w-lg text-muted-foreground mb-10 text-lg'>
                        Get <strong>50% OFF</strong> your first month of
                        RecentReborn Premium and start seeing the posts others
                        miss.
                      </p>

                      <div className='mx-auto max-w-sm rounded-xl border-2 border-dashed border-primary/30 bg-background/80 p-6 shadow-sm mb-10 backdrop-blur-sm'>
                        <p className='text-xs font-bold text-muted-foreground mb-3 uppercase tracking-widest'>
                          Copy Your Code
                        </p>
                        <div className='flex items-center justify-center gap-2'>
                          <code className='text-4xl font-mono font-black text-primary tracking-widest'>
                            POSTENGAGE50
                          </code>
                        </div>
                      </div>

                      <Button
                        asChild
                        size='lg'
                        className='h-14 px-10 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40'
                      >
                        <a
                          href='https://recentreborn.com'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Claim Offer Now
                          <ArrowLeft className='ml-2 h-5 w-5 rotate-180' />
                        </a>
                      </Button>
                      <p className='mt-6 text-sm text-muted-foreground'>
                        Valid until April 01, 2026
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className='text-xl font-medium text-foreground/80 italic border-l-4 border-primary pl-6 py-2 my-8'>
                  "The future of social media isn't just about creating content.
                  It's about creating context. RecentReborn finds the context;
                  PostEngage.ai creates the connection."
                </p>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className='lg:col-span-4 space-y-8'>
              {/* Table of Contents Card */}
              <Card className='sticky top-32 border-border/60 bg-card/50 backdrop-blur-sm'>
                <CardHeader>
                  <CardTitle className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
                    In this article
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className='flex flex-col space-y-3 text-sm'>
                    <a
                      href='#'
                      className='text-foreground hover:text-primary transition-colors flex items-center gap-2'
                    >
                      <CheckCircle2 className='h-4 w-4 text-primary' />
                      The Discovery Deficit
                    </a>
                    <a
                      href='#'
                      className='text-muted-foreground hover:text-primary transition-colors flex items-center gap-2'
                    >
                      <div className='h-1.5 w-1.5 rounded-full bg-border' />
                      Why RecentReborn?
                    </a>
                    <a
                      href='#'
                      className='text-muted-foreground hover:text-primary transition-colors flex items-center gap-2'
                    >
                      <div className='h-1.5 w-1.5 rounded-full bg-border' />
                      Visibility Velocity Framework
                    </a>
                    <a
                      href='#'
                      className='text-muted-foreground hover:text-primary transition-colors flex items-center gap-2'
                    >
                      <div className='h-1.5 w-1.5 rounded-full bg-border' />
                      Exclusive Offer
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Newsletter Signup (Mini) */}
              <Card className='bg-primary text-primary-foreground border-none shadow-xl'>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    Join 50,000+ Creators
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-primary-foreground/90 text-sm'>
                    Get the latest growth hacks and automation strategies
                    delivered to your inbox weekly.
                  </p>
                  <div className='space-y-2'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full h-10 px-3 rounded-md border-0 bg-background/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-background/50'
                    />
                    <Button variant='secondary' className='w-full font-bold'>
                      Subscribe Free
                    </Button>
                  </div>
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

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {/* Mock Post 1 */}
              <Card className='bg-background border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300'>
                <div className='aspect-video w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors' />
                  <TrendingUp className='h-12 w-12 text-muted-foreground/30' />
                </div>
                <CardContent className='p-6'>
                  <div className='mb-3 flex items-center gap-2 text-xs text-muted-foreground'>
                    <span className='font-semibold text-blue-600 dark:text-blue-400'>
                      Strategy
                    </span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <h4 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                    The Ultimate Guide to Instagram Automation
                  </h4>
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    Everything you need to know about automating your engagement
                    without getting banned in 2026.
                  </p>
                </CardContent>
              </Card>

              {/* Mock Post 2 */}
              <Card className='bg-background border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300'>
                <div className='aspect-video w-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors' />
                  <Zap className='h-12 w-12 text-muted-foreground/30' />
                </div>
                <CardContent className='p-6'>
                  <div className='mb-3 flex items-center gap-2 text-xs text-muted-foreground'>
                    <span className='font-semibold text-green-600 dark:text-green-400'>
                      Product
                    </span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                  <h4 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                    Introducing Smart Replies 2.0
                  </h4>
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    How our new AI engine understands context better than ever
                    before to deliver human-like responses.
                  </p>
                </CardContent>
              </Card>

              {/* Mock Post 3 */}
              <Card className='bg-background border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300'>
                <div className='aspect-video w-full bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors' />
                  <MessageCircle className='h-12 w-12 text-muted-foreground/30' />
                </div>
                <CardContent className='p-6'>
                  <div className='mb-3 flex items-center gap-2 text-xs text-muted-foreground'>
                    <span className='font-semibold text-orange-600 dark:text-orange-400'>
                      Community
                    </span>
                    <span>•</span>
                    <span>7 min read</span>
                  </div>
                  <h4 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                    Building a Community from Scratch
                  </h4>
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    A step-by-step framework for going from 0 to 1,000 true fans
                    using automated engagement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

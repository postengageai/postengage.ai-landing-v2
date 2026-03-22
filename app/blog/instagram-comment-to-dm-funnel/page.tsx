import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Zap } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title:
    'The Comment-to-DM Funnel: How to Turn Every Comment Into a Conversation',
  description:
    "Your post gets 200 comments. Most creators reply publicly and move on. Here's what to do instead.",
  openGraph: {
    title:
      'The Comment-to-DM Funnel: How to Turn Every Comment Into a Conversation',
    description:
      "Your post gets 200 comments. Most creators reply publicly and move on. Here's what to do instead.",
    url: 'https://postengage.ai/blog/instagram-comment-to-dm-funnel',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-04T09:00:00.000Z',
    authors: ['James Okonkwo'],
    images: [
      {
        url: '/blog/instagram-comment-to-dm-funnel-cover.png',
        width: 1200,
        height: 630,
        alt: 'Comment to DM Funnel Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Comment-to-DM Funnel: How to Turn Every Comment Into a Conversation',
    description: 'Turn comments into DM conversations.',
    images: ['/blog/instagram-comment-to-dm-funnel-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'The Comment-to-DM Funnel: How to Turn Every Comment Into a Conversation',
    image: ['/blog/instagram-comment-to-dm-funnel-cover.png'],
    datePublished: '2026-03-04T09:00:00.000Z',
    dateModified: '2026-03-04T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'James Okonkwo',
        url: 'https://postengage.ai/about',
      },
    ],
  };
  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20'>
      <ArticleJsonLd
        title='The Comment-to-DM Funnel: How to Turn Every Comment Into a Conversation'
        description='Your post gets 200 comments. Most creators reply publicly and move on. Here'
        slug='instagram-comment-to-dm-funnel'
        datePublished='2026-03-04T09:00:00.000Z'
        category='Funnel Strategy'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />
      <main className='flex-1 pt-32 pb-24'>
        <BlogJsonLd
          title='The Comment-to-DM Funnel: How to Turn Every Comment Into a Conversation'
          description='Your post gets 200 comments. Most creators reply publicly and move on. Here'
          slug='instagram-comment-to-dm-funnel'
          date='2026-03-04T09:00:00.000Z'
          category='Funnel Strategy'
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
              title='The Comment-to-DM Funnel: How to Turn Every Comment Into a Conversation'
              url='https://postengage.ai/blog/instagram-comment-to-dm-funnel'
            />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Funnel Strategy
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                8 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated March 4, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              The Comment-to-DM Funnel: How to Turn Every Comment Into a
              Conversation
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Your post gets 200 comments. Most creators reply publicly and move
              on. Here's what to do instead.
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
                      id: 'the-opportunity',
                      title: 'The Untapped Opportunity',
                    },
                    { id: 'the-funnel', title: 'The 4-Step Funnel' },
                    { id: 'timing-execution', title: 'Timing & Execution' },
                    {
                      id: 'conversation-starters',
                      title: 'DM Opening Templates',
                    },
                    { id: 'automation', title: 'Scaling This Funnel' },
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
                  id='the-opportunity'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  The Opportunity Nobody Is Capturing
                </h2>
                <p>
                  Think about what happens when someone comments on your
                  Instagram post:
                </p>
                <p>
                  They've raised their hand. They've said "I care about this
                  topic enough to publicly comment." That's significant intent.
                  And what do most creators do? Reply with a public comment.
                  Maybe a heart. Then move on.
                </p>
                <p>
                  But the person who commented? They never see that reply unless
                  they come back to the post. And 73% of commenters never come
                  back. You've lost them.
                </p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "Comments are awareness signals. DMs are conversion channels.
                  Turn all those signals into conversions."
                </blockquote>

                <p>
                  Here's the math: If your post gets 100 comments, and you
                  convert just 30% of those commenters to DM conversations,
                  you've turned 30 cold leads into warm DM threads. Cold to warm
                  in seconds, because they already engaged.
                </p>

                <h2 id='the-funnel' className='text-2xl font-bold mt-12 mb-4'>
                  The 4-Step Comment-to-DM Funnel
                </h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        1
                      </span>
                      Identify High-Intent Comments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>
                      Not all comments are equal. Some are worth moving to DM.
                      Some are just noise.
                    </p>
                    <p className='font-semibold mt-3'>
                      High-Intent Comments Look Like:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Questions (they're asking for more information)</li>
                      <li>
                        Specific experiences (they're sharing their own journey)
                      </li>
                      <li>Objections (they're working through a decision)</li>
                      <li>
                        Tag-a-friend comments (they see value for someone else)
                      </li>
                      <li>Follow-up asks (they want to learn more)</li>
                    </ul>
                    <p className='text-sm mt-3 font-semibold'>Skip these:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm text-muted-foreground'>
                      <li>Generic praise ("This is great!")</li>
                      <li>Emoji-only comments</li>
                      <li>Spam/suspicious accounts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        2
                      </span>
                      Reply Publicly (But With A Hook)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>
                      You still reply publicly. But your reply does one thing:
                      it plants the seed for a DM.
                    </p>
                    <p className='font-semibold mt-3'>Formula:</p>
                    <p className='text-sm italic bg-white dark:bg-gray-900 p-3 rounded'>
                      "[Answer their question briefly] [But] this deserves more
                      than a comment thread. Gonna DM you something specific for
                      your situation."
                    </p>
                    <p className='text-sm mt-3'>This does THREE things:</p>
                    <ul className='list-disc list-inside space-y-1 text-sm'>
                      <li>Shows respect (you're taking them seriously)</li>
                      <li>Sets expectation (they know a DM is coming)</li>
                      <li>
                        Creates pattern interrupt (different from their normal
                        comment experience)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        3
                      </span>
                      Send The DM (Within 2 Hours)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>
                      Timing matters. Send the DM while they're still thinking
                      about the post.
                    </p>
                    <p className='font-semibold mt-3'>The DM should include:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Direct answer to their specific comment/question</li>
                      <li>
                        One insight they wouldn't have gotten from the public
                        reply
                      </li>
                      <li>
                        A clear next step (book a call, reply with thoughts,
                        etc.)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>
                        4
                      </span>
                      Move To Deeper Conversation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>
                      Once they reply to your DM, you now have an engaged
                      prospect in a private thread. That's where real
                      conversation happens.
                    </p>
                    <p className='font-semibold mt-3'>
                      Next steps depend on their situation:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>
                        If they're a potential customer: move toward
                        qualification questions
                      </li>
                      <li>
                        If they're peer/collaborator: explore partnership
                        opportunities
                      </li>
                      <li>
                        If they're a fan: invite them to your
                        community/course/list
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <h2
                  id='timing-execution'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  Timing & Execution (The Details That Matter)
                </h2>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4'>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'>
                      <Zap className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' />{' '}
                      Immediate (Within 15 minutes of comment)
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Like their comment. This gets you on their radar and shows
                      appreciation. This also sends a notification.
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'>
                      <Zap className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' />{' '}
                      30 Minutes Later
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Reply to their comment publicly. Plant the hook for the
                      DM.
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'>
                      <Zap className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' />{' '}
                      60-90 Minutes Later
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Send the DM. They're likely still thinking about the post.
                      The notification will remind them.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold flex gap-2 mb-2'>
                      <Zap className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' />{' '}
                      If no reply in 24 hours
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Don't follow up. They saw it. If they were interested,
                      they would have replied.
                    </p>
                  </div>
                </div>

                <h2
                  id='conversation-starters'
                  className='text-2xl font-bold mt-12 mb-4'
                >
                  DM Opening Templates
                </h2>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-6'>
                  <div className='border-b pb-4'>
                    <p className='font-semibold mb-2'>For Questions:</p>
                    <p className='text-sm italic'>
                      "So about your question on [topic] — the real answer isn't
                      what most people think. It's [actual answer]. The reason
                      most people miss it is [insight]. For your specific
                      situation with [their detail], I'd focus on [actionable
                      advice]. Make sense?"
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold mb-2'>For Objections:</p>
                    <p className='text-sm italic'>
                      "Totally get the concern about [their objection]. That's
                      legitimate. Here's what I found works better: [alternative
                      approach]. Most people don't try it because [reason]. But
                      for [their situation], it changes everything. Worth
                      testing?"
                    </p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold mb-2'>
                      For Experiences/Stories:
                    </p>
                    <p className='text-sm italic'>
                      "Love that you mentioned [their experience]. That's rare
                      to see someone actually admit that. We found the same
                      thing with [related insight]. What I realized is [deeper
                      insight]. Have you experienced [follow-up question]?"
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>For Tag-Alongs:</p>
                    <p className='text-sm italic'>
                      "Good call tagging [friend]. They'd probably find this
                      useful too. BTW, [friend's name] situation with [context]
                      is exactly why [insight]. I'm actually working with people
                      in that situation. Worth exploring for [friend]?"
                    </p>
                  </div>
                </div>

                <h2 id='automation' className='text-2xl font-bold mt-12 mb-4'>
                  Scaling This Without Burning Out
                </h2>
                <p>
                  If your posts get 50+ comments, doing this manually kills your
                  time. Here's how to scale:
                </p>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardContent className='space-y-3 pt-6'>
                    <div>
                      <p className='font-semibold mb-2 text-sm'>
                        Week 1-2: Manual Process
                      </p>
                      <p className='text-sm'>
                        Do this manually. Get data on which types of comments
                        convert best. What questions get replies? What
                        objections lead to longer conversations?
                      </p>
                    </div>
                    <div>
                      <p className='font-semibold mb-2 text-sm'>
                        Week 3-4: Create Templates
                      </p>
                      <p className='text-sm'>
                        Once you know your patterns, create 5-7 DM templates for
                        your most common comment types.
                      </p>
                    </div>
                    <div>
                      <p className='font-semibold mb-2 text-sm'>
                        Week 5+: Automate With Tools
                      </p>
                      <p className='text-sm'>
                        Use PostEngage.ai to automate DM responses triggered by
                        specific keywords in comments. Your voice. Automated
                        delivery. You save 10+ hours per week.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <p className='mt-6'>
                  The key insight: you're not replacing yourself. You're
                  capturing leads that would otherwise be lost.
                </p>

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
                    <div className='font-semibold'>James Okonkwo</div>
                    <div className='text-sm text-muted-foreground'>
                      Funnel Design Expert
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

import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Bot,
  Sparkles,
  MessageSquare,
  BrainCircuit,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';

export const metadata: Metadata = {
  title: 'Introducing Smart Replies: AI Context Awareness',
  description:
    'Our new AI engine understands context better than ever before. Learn how it can save you 10+ hours a week by generating human-like responses.',
  openGraph: {
    title: 'Introducing Smart Replies: AI Context Awareness',
    description:
      'Stop sending generic "Nice pic!" comments. Discover how PostEngage.ai uses LLMs to generate context-aware, authentic replies.',
    url: 'https://postengage.ai/blog/smart-replies-ai-context',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-15T10:00:00.000Z',
    authors: ['David Chen'],
    images: [
      {
        url: '/blog/smart-replies-cover.png',
        width: 1200,
        height: 630,
        alt: 'Smart Replies AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducing Smart Replies: AI Context Awareness',
    description:
      'Stop sending generic comments. Discover how PostEngage.ai uses LLMs to generate context-aware replies.',
    images: ['/blog/smart-replies-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Introducing Smart Replies: AI Context Awareness',
    image: ['/blog/smart-replies-cover.png'],
    datePublished: '2026-02-15T10:00:00.000Z',
    dateModified: '2026-02-15T10:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'David Chen',
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
              title='Introducing Smart Replies: AI Context Awareness'
              url='https://postengage.ai/blog/smart-replies-ai-context'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='border-0 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 text-sm'
              >
                Product Update
              </Badge>
              <Badge
                variant='outline'
                className='border-border px-3 py-1 text-sm text-muted-foreground'
              >
                4 min read
              </Badge>
            </div>

            <h1 className='text-balance mb-8 text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl'>
              Introducing{' '}
              <span className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
                Smart Replies
              </span>
              :
              <br />
              AI Context Awareness
            </h1>

            <p className='mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground'>
              Our new AI engine understands context better than ever before.
              Learn how it can save you 10+ hours a week.
            </p>

            <div className='flex items-center justify-center gap-4'>
              <div className='flex items-center gap-3 rounded-full border border-border/50 bg-muted/50 py-2 pl-2 pr-6'>
                <Avatar className='h-10 w-10 border-2 border-background shadow-sm'>
                  <AvatarImage src='/logo.jpeg' alt='PostEngageAI Team' />
                  <AvatarFallback>PE</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='text-sm font-semibold text-foreground'>
                    PostEngageAI Team
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    AI Product Team
                  </p>
                </div>
              </div>
              <span className='text-muted-foreground'>•</span>
              <p className='text-sm text-muted-foreground'>Feb 15, 2026</p>
            </div>
          </header>

          {/* Placeholder for Featured Image */}
          <div className='relative mb-20 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-tr from-purple-900/20 via-background to-blue-900/20 shadow-2xl flex items-center justify-center'>
            <div className='text-center p-8'>
              <BrainCircuit className='w-24 h-24 text-purple-500/50 mx-auto mb-4' />
              <p className='text-muted-foreground font-medium'>
                Next-Gen AI Engagement
              </p>
            </div>
          </div>

          {/* Content Wrapper with Grid Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content Column */}
            <div className='lg:col-span-8'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none leading-loose space-y-8'>
                <p className='text-xl md:text-2xl font-medium leading-relaxed text-foreground/90'>
                  We've all seen them. The "Fire emoji" comments on a tragic
                  news post. The "Great shot!" comment on a text-only graphic.
                </p>

                <p>
                  Dumb automation is embarrassing. It damages your brand and
                  screams "I don't care." That's why we spent the last 6 months
                  rebuilding our reply engine from the ground up using the
                  latest in Large Language Model (LLM) technology.
                </p>

                <h2
                  id='what-is-smart-replies'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  What is Smart Replies?
                </h2>

                <p>
                  Smart Replies isn't just a random comment generator. It's a
                  context-aware engagement system. Before suggesting or posting
                  a reply, it analyzes three layers of data:
                </p>

                <div className='grid gap-6 my-8 not-prose'>
                  <div className='flex gap-4 items-start'>
                    <div className='bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-purple-600'>
                      <Sparkles className='h-6 w-6' />
                    </div>
                    <div>
                      <h3 className='text-lg font-bold'>1. Visual Context</h3>
                      <p className='text-muted-foreground'>
                        It "sees" the image. It knows if it's a sunset, a
                        selfie, a chart, or a meme.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4 items-start'>
                    <div className='bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600'>
                      <MessageSquare className='h-6 w-6' />
                    </div>
                    <div>
                      <h3 className='text-lg font-bold'>2. Caption Context</h3>
                      <p className='text-muted-foreground'>
                        It reads the user's caption to understand the intent. Is
                        it a question? A celebration? A rant?
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4 items-start'>
                    <div className='bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600'>
                      <Bot className='h-6 w-6' />
                    </div>
                    <div>
                      <h3 className='text-lg font-bold'>3. Tone Matching</h3>
                      <p className='text-muted-foreground'>
                        It matches your configured brand voice. Friendly?
                        Professional? Sarcastic? You decide.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id='comparison' className='text-3xl font-bold mt-12 mb-6'>
                  Old Way vs. Smart Way
                </h2>

                <p>
                  Let's look at a real example. A user posts a photo of a failed
                  baking attempt with the caption:
                  <em>"Well, that didn't go as planned. #fail #baking"</em>
                </p>

                <div className='grid md:grid-cols-2 gap-4 my-8 not-prose'>
                  <div className='border border-red-200 bg-red-50 dark:bg-red-900/10 p-6 rounded-xl'>
                    <p className='text-xs font-bold text-red-600 uppercase mb-2'>
                      Old Automation
                    </p>
                    <p className='font-mono text-sm'>"Looks delicious! 😍"</p>
                    <p className='text-xs text-red-500 mt-2 italic'>
                      Result: User feels mocked/ignored.
                    </p>
                  </div>
                  <div className='border border-green-200 bg-green-50 dark:bg-green-900/10 p-6 rounded-xl'>
                    <p className='text-xs font-bold text-green-600 uppercase mb-2'>
                      Smart Replies
                    </p>
                    <p className='font-mono text-sm'>
                      "Oh no! 🙈 We've all been there. Bet it still tastes good
                      though!"
                    </p>
                    <p className='text-xs text-green-600 mt-2 italic'>
                      Result: Genuine connection made.
                    </p>
                  </div>
                </div>

                <h2
                  id='how-to-enable'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  How to Enable It
                </h2>

                <p>
                  Smart Replies is now available for all Pro and Business tier
                  users. To enable it:
                </p>

                <ol className='list-decimal pl-6 space-y-2'>
                  <li>
                    Go to your <strong>Dashboard &gt; Settings</strong>.
                  </li>
                  <li>
                    Select the <strong>AI & Automation</strong> tab.
                  </li>
                  <li>
                    Toggle <strong>Smart Context Engine</strong> to ON.
                  </li>
                  <li>
                    Choose your <strong>Brand Voice Persona</strong>.
                  </li>
                </ol>

                <div className='bg-primary/5 border border-primary/20 p-6 rounded-xl my-8'>
                  <h3 className='text-lg font-bold mb-2'>Privacy Note</h3>
                  <p className='text-sm text-muted-foreground m-0'>
                    We respect your data. Images and captions processed by our
                    AI are ephemeral. We do not train our models on your private
                    data without explicit consent.
                  </p>
                </div>

                <p>
                  Engagement is about quality, not just quantity. With Smart
                  Replies, you can finally scale quality.
                </p>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className='lg:col-span-4 space-y-8'>
              {/* Table of Contents Card */}
              <Card className='sticky top-32 border-border/60 bg-card/50 backdrop-blur-sm'>
                <CardHeader>
                  <CardTitle className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
                    In this update
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TableOfContents
                    items={[
                      {
                        id: 'what-is-smart-replies',
                        title: 'What is Smart Replies?',
                      },
                      {
                        id: 'comparison',
                        title: 'Old vs. Smart Way',
                      },
                      {
                        id: 'how-to-enable',
                        title: 'How to Enable',
                      },
                    ]}
                  />
                </CardContent>
              </Card>

              {/* Newsletter Signup (Mini) */}
              <Card className='bg-primary text-primary-foreground border-none shadow-xl'>
                <CardHeader>
                  <CardTitle className='text-xl'>Try Smart Replies</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-primary-foreground/90 text-sm'>
                    Sign up for a Pro trial today and see the magic yourself.
                  </p>
                  <Button variant='secondary' className='w-full font-bold'>
                    Start Free Trial
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

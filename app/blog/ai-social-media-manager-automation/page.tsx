import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Bot, User, HeartHandshake } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'The Rise of the AI Social Media Manager: What to Automate vs. What to Keep Human',
  description:
    "AI is changing the game, but it's not replacing you. Learn the perfect balance between automated efficiency and human connection in 2026.",
  openGraph: {
    title: 'The Rise of the AI Social Media Manager',
    description:
      "AI is changing the game, but it's not replacing you. Learn the perfect balance between automated efficiency and human connection.",
    url: 'https://postengage.ai/blog/ai-social-media-manager-automation',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-05T09:00:00.000Z',
    authors: ['David Chen'],
    images: [
      {
        url: '/blog/ai-manager-cover.png',
        width: 1200,
        height: 630,
        alt: 'AI Social Media Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rise of the AI Social Media Manager',
    description: 'What to automate vs. what to keep human in 2026.',
    images: ['/blog/ai-manager-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'The Rise of the AI Social Media Manager: What to Automate vs. What to Keep Human',
    image: ['/blog/ai-manager-cover.png'],
    datePublished: '2026-03-05T09:00:00.000Z',
    dateModified: '2026-03-05T09:00:00.000Z',
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
              title='The Rise of the AI Social Media Manager'
              url='https://postengage.ai/blog/ai-social-media-manager-automation'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='border-0 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 text-sm'
              >
                Future Trends
              </Badge>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <span>March 5, 2026</span>
                <span>•</span>
                <Badge
                  variant='outline'
                  className='border-border px-3 py-1 text-sm text-muted-foreground'
                >
                  8 min read
                </Badge>
              </div>
            </div>

            <h1 className='text-balance mb-8 text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl'>
              The Rise of the{' '}
              <span className='bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'>
                AI Social Media Manager
              </span>
            </h1>

            <p className='mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground'>
              AI is changing the game, but it's not replacing you. Learn the
              perfect balance between automated efficiency and human connection.
            </p>

            <div className='flex items-center justify-center gap-4'>
              <div className='flex items-center gap-3 rounded-full border border-border/50 bg-muted/50 py-2 pl-2 pr-6'>
                <Avatar className='h-10 w-10 border-2 border-background'>
                  <AvatarImage src='/avatars/david.jpg' alt='David Chen' />
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='text-sm font-semibold'>David Chen</p>
                  <p className='text-xs text-muted-foreground'>
                    CTO @ PostEngage
                  </p>
                </div>
              </div>
            </div>
          </header>


          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Bot className='h-8 w-8 text-primary/70' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
                <div className='h-1.5 w-12 rounded-full bg-primary/20' />
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
              </div>
            </div>
          </div>
          {/* Featured Image */}
          <div className='relative mx-auto mb-20 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border/50 shadow-2xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mix-blend-multiply' />
            <div className='absolute inset-0 flex items-center justify-center bg-muted/30'>
              <div className='flex items-center gap-8'>
                <Bot className='h-20 w-20 text-blue-500/50' />
                <div className='h-px w-20 bg-border' />
                <User className='h-20 w-20 text-cyan-500/50' />
              </div>
            </div>
          </div>

          <div className='mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12'>
            {/* Sidebar (Table of Contents) */}
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      id: 'fear-factor',
                      title: 'Will AI Replace Me?',
                    },
                    {
                      id: 'automate',
                      title: 'What to Automate',
                    },
                    {
                      id: 'human',
                      title: 'What to Keep Human',
                    },
                    {
                      id: 'hybrid-model',
                      title: 'The Hybrid Model',
                    },
                  ]}
                />
              </div>
            </aside>

            {/* Main Content */}
            <div className='prose prose-lg dark:prose-invert prose-headings:scroll-mt-32 prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-img:rounded-xl lg:col-span-9'>
              <p className='lead'>
                The headline is scary: "AI is coming for your job." But in
                social media marketing, the reality is far more nuanced. In
                2026, the most successful brands aren't choosing between AI and
                humans—they're building super-teams that leverage the best of
                both.
              </p>

              <h2 id='fear-factor'>Will AI Replace Me?</h2>
              <p>
                Short answer: No. Long answer: AI will replace the{' '}
                <em>boring</em> parts of your job.
              </p>
              <p>
                Imagine never having to answer "Where is my order?" or "What are
                your hours?" again. That's what AI is for. It frees you up to do
                what humans do best: create, strategize, and connect
                emotionally.
              </p>

              <h2 id='automate'>What to Automate (The "Robot" Work)</h2>
              <p>
                To scale effectively, you need to hand off repetitive tasks to
                your AI counterpart. Here's what's safe to automate:
              </p>
              <div className='grid gap-4 md:grid-cols-2 not-prose my-8'>
                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg flex items-center gap-2'>
                      <Bot className='h-5 w-5 text-blue-500' /> FAQs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      Pricing, shipping times, return policies. These have fixed
                      answers.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg flex items-center gap-2'>
                      <Bot className='h-5 w-5 text-blue-500' /> Initial Lead
                      Qual
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      "Are you an agency or brand?" "What's your budget?"
                      Collect this data automatically.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 id='human'>What to Keep Human (The "Soul" Work)</h2>
              <p>
                Here is where you draw the line. AI cannot replicate genuine
                empathy or complex problem-solving.
              </p>
              <ul>
                <li>
                  <strong>Crisis Management:</strong> If a customer is angry or
                  a PR issue arises, a human must handle it. AI lacks the nuance
                  to de-escalate effectively.
                </li>
                <li>
                  <strong>High-Ticket Sales:</strong> AI can book the meeting,
                  but a human should close the deal. People buy from people.
                </li>
                <li>
                  <strong>Community Building:</strong> Responding to thoughtful
                  comments with thoughtful answers. Jokes, memes, and cultural
                  references are best left to humans.
                </li>
              </ul>

              <h2 id='hybrid-model'>The Hybrid Model</h2>
              <p>
                The future belongs to the "AI-Augmented Social Media Manager."
                Here's what that workflow looks like:
              </p>
              <ol>
                <li>
                  <strong>Step 1 (AI):</strong> Detects a new comment or DM.
                  Analyzes sentiment.
                </li>
                <li>
                  <strong>Step 2 (AI):</strong> If it's a simple question,
                  answer it instantly. If it's complex or negative, flag it for
                  human review.
                </li>
                <li>
                  <strong>Step 3 (Human):</strong> Review the flagged
                  conversations. Spend your time crafting a personalized
                  solution.
                </li>
                <li>
                  <strong>Step 4 (AI):</strong> Follow up 24 hours later to
                  ensure satisfaction.
                </li>
              </ol>

              <div className='mt-12 rounded-xl bg-slate-900 p-8 text-slate-100 shadow-2xl'>
                <div className='flex items-center gap-4 mb-4'>
                  <HeartHandshake className='h-8 w-8 text-blue-400' />
                  <h3 className='text-2xl font-bold text-white m-0'>
                    Ready to Build Your Hybrid Team?
                  </h3>
                </div>
                <p className='mb-6 text-slate-300'>
                  PostEngage.ai provides the AI infrastructure so you can focus
                  on the human connection. See how our "Smart Handoff" feature
                  works.
                </p>
                <Button size='lg' className='w-full sm:w-auto font-bold'>
                  View Demo
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className='space-y-8 lg:col-span-3 lg:block'>
              <Card className='bg-muted/50'>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    Automation Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-2 text-sm'>
                  <div className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      checked
                      readOnly
                      className='accent-blue-500'
                    />
                    <span>Set up Welcome DM</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      checked
                      readOnly
                      className='accent-blue-500'
                    />
                    <span>Automate FAQ Replies</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type='checkbox' className='accent-blue-500' />
                    <span>Connect CRM</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type='checkbox' className='accent-blue-500' />
                    <span>Train AI Voice</span>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup (Mini) */}
              <Card className='bg-primary text-primary-foreground border-none shadow-xl'>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    Future-Proof Your Career
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-primary-foreground/90 text-sm'>
                    Join 10,000+ marketers learning to master AI tools.
                  </p>
                  <NewsletterForm variant='mini' />
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
            {/* Add related posts logic here if needed */}
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}

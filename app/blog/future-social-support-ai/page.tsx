import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, User, HeartHandshake, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'The Future of Social Customer Support: AI vs Human Agents',
  description:
    "Will AI replace human support teams? We explore the hybrid model that's winning in 2026: AI for speed, humans for empathy.",
  openGraph: {
    title: 'The Future of Social Customer Support: AI vs Human Agents',
    description:
      "Will AI replace human support teams? We explore the hybrid model that's winning in 2026.",
    url: 'https://postengage.ai/blog/future-social-support-ai',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-20T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/future-support-cover.png',
        width: 1200,
        height: 630,
        alt: 'AI vs Human Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Social Customer Support: AI vs Human Agents',
    description: 'AI vs Human Support: The Hybrid Model Winning in 2026.',
    images: ['/blog/future-support-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Future of Social Customer Support: AI vs Human Agents',
    image: ['/blog/future-support-cover.png'],
    datePublished: '2026-02-20T09:00:00.000Z',
    dateModified: '2026-02-20T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'PostEngageAI Team',
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
              title='The Future of Social Customer Support: AI vs Human Agents'
              url='https://postengage.ai/blog/future-social-support-ai'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Customer Experience
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                6 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Feb 20, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              The Future of Social Customer Support: AI vs Human Agents
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              It's not about replacing humans—it's about empowering them.
              Discover the hybrid model that's redefining customer service.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <User className='h-8 w-8 text-primary/70' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
                <div className='h-1.5 w-12 rounded-full bg-primary/20' />
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            {/* Sidebar - Table of Contents */}
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      id: 'the-24-7-expectation',
                      title: 'The 24/7 Expectation',
                    },
                    {
                      id: 'where-ai-wins',
                      title: 'Where AI Wins: Speed and Repetition',
                    },
                    {
                      id: 'where-humans-win',
                      title: 'Where Humans Win: Empathy and Complexity',
                    },
                    {
                      id: 'the-hybrid-model',
                      title: 'The Hybrid Model: Best of Both Worlds',
                    },
                    {
                      id: 'case-study',
                      title: 'Case Study: Reducing Response Time by 90%',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Scale your support?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Handle 50% of queries automatically with PostEngage.ai.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard/automations/new'>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  The debate is over. AI isn't coming for customer support
                  jobs—it's coming for the <em>boring parts</em> of those jobs.
                  In 2026, the brands winning on social media are the ones
                  leveraging AI to handle the noise so their humans can handle
                  the nuance.
                </p>

                <h2
                  id='the-24-7-expectation'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The 24/7 Expectation
                </h2>
                <p>
                  Social media never sleeps. A customer in Tokyo might DM your
                  New York-based brand at 3 AM EST. If they have to wait until 9
                  AM for a reply, they've likely already bought from a
                  competitor.
                </p>
                <p>
                  <strong>Fact:</strong> 67% of customers expect a response on
                  social media within 24 hours. The top 10% of brands respond in
                  under 30 minutes.
                </p>

                <h2
                  id='where-ai-wins'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Where AI Wins: Speed and Repetition
                </h2>
                <p>
                  AI excels at the "Tier 1" support tickets. These are the
                  repetitive, simple questions that bog down your support team:
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>"Where is my order?"</li>
                  <li>"Do you ship to Canada?"</li>
                  <li>"What's your return policy?"</li>
                  <li>"How do I reset my password?"</li>
                </ul>
                <p>
                  Using PostEngage.ai, you can set up AI agents trained on your
                  Knowledge Base to answer these instantly, 24/7, with zero
                  human intervention.
                </p>

                <h2
                  id='where-humans-win'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Where Humans Win: Empathy and Complexity
                </h2>
                <p>
                  AI (even GPT-5) still struggles with deep empathy and complex
                  problem-solving.
                </p>
                <div className='my-6 flex items-start p-4 bg-muted/30 rounded-lg'>
                  <User className='h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1' />
                  <div>
                    <strong>The Human Touch:</strong> When a customer is angry
                    because their package arrived damaged before a birthday,
                    they don't want a bot. They want to be heard. They want a
                    human to say, "I am so sorry, let me fix this personally."
                  </div>
                </div>

                <h2
                  id='the-hybrid-model'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Hybrid Model: Best of Both Worlds
                </h2>
                <p>
                  The "Hybrid Model" is the architecture we built PostEngage.ai
                  around. Here's how it works:
                </p>
                <ol className='list-decimal pl-5 space-y-4'>
                  <li>
                    <strong>Initial Contact:</strong> AI receives the
                    DM/Comment.
                  </li>
                  <li>
                    <strong>Intent Classification:</strong> AI determines if it
                    can answer (e.g., shipping info) or if it needs escalation
                    (e.g., complaint).
                  </li>
                  <li>
                    <strong>Resolution or Handoff:</strong>
                    <ul className='list-disc pl-5 mt-2'>
                      <li>
                        <em>Simple:</em> AI answers instantly. Ticket closed.
                      </li>
                      <li>
                        <em>Complex:</em> AI tags the conversation as "Needs
                        Human" and summarizes the issue for the agent.
                      </li>
                    </ul>
                  </li>
                </ol>

                <h2
                  id='case-study'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Case Study: Reducing Response Time by 90%
                </h2>
                <p>
                  One of our D2C fashion clients implemented this Hybrid Model
                  last month. The results were staggering:
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-8'>
                  <div className='p-6 bg-green-500/10 rounded-xl border border-green-500/20'>
                    <TrendingUp className='h-8 w-8 text-green-500 mb-2' />
                    <div className='text-3xl font-bold'>-90%</div>
                    <div className='text-sm text-muted-foreground'>
                      First Response Time
                    </div>
                  </div>
                  <div className='p-6 bg-blue-500/10 rounded-xl border border-blue-500/20'>
                    <HeartHandshake className='h-8 w-8 text-blue-500 mb-2' />
                    <div className='text-3xl font-bold'>+15%</div>
                    <div className='text-sm text-muted-foreground'>
                      CSAT Score
                    </div>
                  </div>
                </div>

                <p>
                  Your support team is drowning. Throw them a lifeline with AI,
                  and let them get back to doing what they do best: delighting
                  customers.
                </p>
              </div>

              {/* Author Bio */}
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/logo.jpeg' alt='PostEngage.ai Team' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Customer Success Team
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

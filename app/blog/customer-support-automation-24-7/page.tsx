import React from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle, BarChart } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Slash Customer Support Response Time by 80% on Instagram',
  description:
    'Customers expect a reply in 5 minutes. Learn how to use AI and automation to deliver 24/7 support without hiring more staff.',
  openGraph: {
    title: 'Slash Customer Support Response Time by 80% on Instagram',
    description:
      'The average response time on Instagram is 24 hours. Automation brings it down to 5 seconds. Here is how.',
    type: 'article',
    publishedTime: '2026-03-23',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: 'https://postengage.ai/blog/support-automation-cover.png',
        width: 1200,
        height: 630,
        alt: 'Customer Support Automation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slash Customer Support Response Time by 80% on Instagram',
    description:
      'The average response time on Instagram is 24 hours. Automation brings it down to 5 seconds. Here is how.',
    images: ['https://postengage.ai/blog/support-automation-cover.png'],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Slash Customer Support Response Time by 80% on Instagram',
    image: 'https://postengage.ai/blog/support-automation-cover.png',
    author: {
      '@type': 'Organization',
      name: 'PostEngageAI Team',
      url: 'https://postengage.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PostEngageAI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://postengage.ai/logo.png',
      },
    },
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
    description:
      'Customers expect a reply in 5 minutes. Learn how to use AI and automation to deliver 24/7 support without hiring more staff.',
  };

  return (
    <div className='min-h-screen bg-background font-sans antialiased'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='relative pt-24 pb-16 lg:pt-32 lg:pb-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <Link
              href='/blog'
              className='inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>
          </div>

          <article className='mx-auto max-w-4xl'>
            <header className='mb-12 text-center'>
              <div className='mb-4 flex items-center justify-center gap-2'>
                <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                  Customer Service
                </span>
                <span className='text-sm text-muted-foreground'>
                  Mar 23, 2026 • 5 min read
                </span>
              </div>
              <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
                Slash Customer Support Response Time by 80% on Instagram
              </h1>
              <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
                Customers expect a reply in 5 minutes, not 5 hours. Learn how to
                use AI and automation to deliver 24/7 support without hiring
                more staff.
              </p>
            </header>

            {/* Featured Image Placeholder */}
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
              {/* Sidebar */}
              <aside className='hidden lg:col-span-3 lg:block'>
                <div className='sticky top-32 space-y-8'>
                  <div className='space-y-4'>
                    <h3 className='text-sm font-semibold tracking-wider text-foreground uppercase'>
                      Table of Contents
                    </h3>
                    <nav className='space-y-2 text-sm text-muted-foreground'>
                      <a
                        href='#expectation-gap'
                        className='block hover:text-primary transition-colors'
                      >
                        The Expectation Gap
                      </a>
                      <a
                        href='#faq-automation'
                        className='block hover:text-primary transition-colors'
                      >
                        Automating FAQs
                      </a>
                      <a
                        href='#ai-escalation'
                        className='block hover:text-primary transition-colors'
                      >
                        AI + Human Handoff
                      </a>
                      <a
                        href='#setup'
                        className='block hover:text-primary transition-colors'
                      >
                        Quick Setup Guide
                      </a>
                    </nav>
                  </div>
                  <div className='space-y-4'>
                    <h3 className='text-sm font-semibold tracking-wider text-foreground uppercase'>
                      Share this post
                    </h3>
                    <SocialShareButtons
                      url='https://postengage.ai/blog/customer-support-automation-24-7'
                      title='Slash Customer Support Response Time by 80% on Instagram'
                    />
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className='lg:col-span-9'>
                <div className='prose prose-lg dark:prose-invert max-w-none'>
                  <p className='lead text-xl text-muted-foreground mb-8'>
                    "Where is my order?"
                    <br />
                    "Do you ship to Canada?"
                    <br />
                    "How much is shipping?"
                  </p>
                  <p>
                    If you are a D2C brand, 80% of your DMs are these same 5
                    questions over and over again. Answering them manually is a
                    waste of human talent.
                  </p>
                  <p>
                    In 2026, automation handles the repetitive stuff so your
                    team can focus on complex issues.
                  </p>

                  <h2
                    id='expectation-gap'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    The Expectation Gap
                  </h2>
                  <p>
                    A study by Sprout Social found that 40% of consumers expect
                    a response on social media within <strong>1 hour</strong>.
                    The average brand takes <strong>10 hours</strong>.
                  </p>
                  <div className='my-6 p-4 border-l-4 border-destructive bg-destructive/10'>
                    <p className='font-bold text-destructive'>The Risk:</p>
                    <p className='text-sm'>
                      If you don't answer quickly, they go to your competitor
                      who will. Speed is the #1 factor in conversion for impulse
                      buys.
                    </p>
                  </div>

                  <h2
                    id='faq-automation'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    Automating FAQs
                  </h2>
                  <p>
                    Using PostEngage.ai, you can set up "Keyword Triggers" for
                    common questions.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                    <div className='p-6 rounded-xl border bg-card'>
                      <div className='flex items-center gap-2 mb-4'>
                        <MessageCircle className='h-5 w-5 text-primary' />
                        <h3 className='font-semibold'>Shipping Query</h3>
                      </div>
                      <p className='text-sm text-muted-foreground mb-2'>
                        <strong>Trigger Keywords:</strong> "shipping",
                        "delivery", "arrive"
                      </p>
                      <div className='bg-muted p-3 rounded-lg text-sm'>
                        "Hi! 👋 We ship worldwide! Domestic orders take 2-3
                        days. International takes 5-7 days. Track your order
                        here: [Link]"
                      </div>
                    </div>
                    <div className='p-6 rounded-xl border bg-card'>
                      <div className='flex items-center gap-2 mb-4'>
                        <MessageCircle className='h-5 w-5 text-primary' />
                        <h3 className='font-semibold'>Returns Query</h3>
                      </div>
                      <p className='text-sm text-muted-foreground mb-2'>
                        <strong>Trigger Keywords:</strong> "return", "refund",
                        "exchange"
                      </p>
                      <div className='bg-muted p-3 rounded-lg text-sm'>
                        "No worries! We have a 30-day return policy. Just head
                        to our returns portal here: [Link] to start the
                        process."
                      </div>
                    </div>
                  </div>

                  <h2
                    id='ai-escalation'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    AI + Human Handoff
                  </h2>
                  <p>
                    Automation doesn't mean "no humans". It means "better human
                    usage".
                  </p>
                  <p>
                    If the AI detects frustration or a complex question it can't
                    answer, it can automatically tag a human agent.
                  </p>
                  <blockquote className='border-l-4 border-primary pl-4 italic my-4'>
                    "I see you have a specific issue with your order #12345. Let
                    me grab a human agent to help you out! 👤 They will be with
                    you shortly."
                  </blockquote>

                  <h2
                    id='setup'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    Quick Setup Guide
                  </h2>
                  <ol className='list-decimal pl-5 space-y-4 my-6'>
                    <li>
                      <strong>Audit your DMs:</strong> Look at the last 50
                      messages. What are the top 3 questions?
                    </li>
                    <li>
                      <strong>Write the answers:</strong> Keep them friendly,
                      short, and helpful. Use emojis!
                    </li>
                    <li>
                      <strong>Set up keywords:</strong> Add variations (e.g.,
                      "ship", "shipping", "delivery").
                    </li>
                    <li>
                      <strong>Test it:</strong> Send a DM from a personal
                      account to verify it works.
                    </li>
                  </ol>
                  <div className='bg-muted/30 p-6 rounded-xl border mt-8'>
                    <h4 className='font-bold mb-4 flex items-center gap-2'>
                      <BarChart className='h-5 w-5' />
                      Impact
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Brands using this system report a{' '}
                      <strong>70-80% reduction</strong> in manual support
                      tickets within the first week.
                    </p>
                  </div>
                </div>

                <div className='mt-16 rounded-2xl bg-muted p-8 text-center'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Stop Making Customers Wait
                  </h3>
                  <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
                    Turn your Instagram DMs into a 24/7 support channel today.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button size='lg' className='font-semibold'>
                      Automate Support Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <NewsletterForm />
      </main>

      <LandingFooter />
    </div>
  );
}

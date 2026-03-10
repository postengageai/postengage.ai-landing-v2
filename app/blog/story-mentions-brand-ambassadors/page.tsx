import React from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Turning Story Mentions into Brand Ambassadors with Auto-DMs',
  description:
    'Never miss a Story mention again. Learn how to automatically thank fans and invite them to your ambassador program.',
  openGraph: {
    title: 'Turning Story Mentions into Brand Ambassadors with Auto-DMs',
    description:
      'Your best influencers are already tagging you. Here is how to find them and recruit them on autopilot.',
    type: 'article',
    publishedTime: '2026-03-22',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: 'https://postengage.ai/blog/story-mentions-cover.png',
        width: 1200,
        height: 630,
        alt: 'Story Mentions Automation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turning Story Mentions into Brand Ambassadors with Auto-DMs',
    description:
      'Your best influencers are already tagging you. Here is how to find them and recruit them on autopilot.',
    images: ['https://postengage.ai/blog/story-mentions-cover.png'],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Turning Story Mentions into Brand Ambassadors with Auto-DMs',
    image: 'https://postengage.ai/blog/story-mentions-cover.png',
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
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    description:
      'Never miss a Story mention again. Learn how to automatically thank fans and invite them to your ambassador program.',
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
                  Influencer Marketing
                </span>
                <span className='text-sm text-muted-foreground'>
                  Mar 22, 2026 • 4 min read
                </span>
              </div>
              <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
                Turning Story Mentions into Brand Ambassadors with Auto-DMs
              </h1>
              <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
                The most valuable lead is the one who publicly endorses you.
                Here is how to instantly reward them and recruit them to your
                team.
              </p>
            </header>

            {/* Featured Image Placeholder */}
            <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-red-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Heart className='h-8 w-8 text-primary/70' />
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
                        href='#missed-opportunity'
                        className='block hover:text-primary transition-colors'
                      >
                        The Missed Opportunity
                      </a>
                      <a
                        href='#automation-workflow'
                        className='block hover:text-primary transition-colors'
                      >
                        The Automation Workflow
                      </a>
                      <a
                        href='#qualification-logic'
                        className='block hover:text-primary transition-colors'
                      >
                        Filtering for Quality
                      </a>
                      <a
                        href='#roi'
                        className='block hover:text-primary transition-colors'
                      >
                        ROI Calculation
                      </a>
                    </nav>
                  </div>
                  <div className='space-y-4'>
                    <h3 className='text-sm font-semibold tracking-wider text-foreground uppercase'>
                      Share this post
                    </h3>
                    <SocialShareButtons
                      url='https://postengage.ai/blog/story-mentions-brand-ambassadors'
                      title='Turning Story Mentions into Brand Ambassadors with Auto-DMs'
                    />
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className='lg:col-span-9'>
                <div className='prose prose-lg dark:prose-invert max-w-none'>
                  <p className='lead text-xl text-muted-foreground mb-8'>
                    Every day, your customers are tagging you in their Instagram
                    Stories. They are showing off your product, unboxing your
                    package, or visiting your store.
                  </p>
                  <p>Most brands do one of two things:</p>
                  <ol className='list-decimal pl-5 space-y-2 mb-6'>
                    <li>Ignore it (Criminal!)</li>
                    <li>Manually repost it 6 hours later (Too slow)</li>
                  </ol>
                  <p>
                    There is a third option:{' '}
                    <strong>Instant Gratification</strong>.
                  </p>

                  <h2
                    id='missed-opportunity'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    The Missed Opportunity
                  </h2>
                  <p>
                    When someone tags you, they are at peak excitement. They are
                    publicly vouching for you. This is the <em>perfect</em>{' '}
                    moment to deepen the relationship.
                  </p>
                  <p>
                    If you wait hours to respond, the moment is gone. If you
                    reply instantly, you create a "Wow" moment.
                  </p>

                  <h2
                    id='automation-workflow'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    The Automation Workflow
                  </h2>
                  <div className='my-8 rounded-xl border bg-card p-6 shadow-sm'>
                    <div className='flex items-start gap-4'>
                      <div className='rounded-full bg-primary/10 p-3'>
                        <Heart className='h-6 w-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-foreground mb-2'>
                          The "Super-Fan" Flow
                        </h3>
                        <div className='space-y-4 border-l-2 border-muted pl-4 ml-2'>
                          <div className='relative'>
                            <span className='absolute -left-[25px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground'>
                              1
                            </span>
                            <p className='text-sm'>
                              <strong>Trigger:</strong> User mentions @YourBrand
                              in their Story.
                            </p>
                          </div>
                          <div className='relative'>
                            <span className='absolute -left-[25px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground'>
                              2
                            </span>
                            <p className='text-sm'>
                              <strong>Bot (Instant):</strong> "Omg! 😍 We love
                              this photo! Thank you so much for sharing."
                            </p>
                          </div>
                          <div className='relative'>
                            <span className='absolute -left-[25px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground'>
                              3
                            </span>
                            <p className='text-sm'>
                              <strong>Bot (Delay 5s):</strong> "Since you
                              clearly have great taste... want to join our
                              Ambassador Program and earn cash for referrals?"
                            </p>
                          </div>
                          <div className='relative'>
                            <span className='absolute -left-[25px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground'>
                              4
                            </span>
                            <p className='text-sm'>
                              <strong>User:</strong> Taps "Tell me more!"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2
                    id='qualification-logic'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    Filtering for Quality
                  </h2>
                  <p>
                    You might not want <em>everyone</em> to be an ambassador.
                    With PostEngage.ai, you can filter who gets the invite.
                  </p>
                  <ul className='list-disc pl-6 space-y-2 my-6'>
                    <li>
                      <strong>Follower Count:</strong> Only invite users with
                      &gt;1,000 followers.
                    </li>
                    <li>
                      <strong>Private vs. Public:</strong> Only invite public
                      profiles.
                    </li>
                    <li>
                      <strong>Content Check:</strong> Send the DM, but manually
                      approve the application later.
                    </li>
                  </ul>

                  <h2
                    id='roi'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    ROI Calculation
                  </h2>
                  <div className='bg-muted/30 p-6 rounded-xl border'>
                    <h4 className='font-bold mb-4 flex items-center gap-2'>
                      <Star className='h-5 w-5' />
                      Why this works
                    </h4>
                    <p className='text-sm text-muted-foreground mb-4'>
                      Recruiting ambassadors manually takes ~20 minutes per
                      person (finding them, DMing, emailing).
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      <strong>With Automation:</strong> 0 minutes.
                    </p>
                    <div className='mt-4 pt-4 border-t'>
                      <div className='text-lg font-bold'>
                        Result: A 24/7 Recruiting Machine
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-16 rounded-2xl bg-muted p-8 text-center'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Turn Fans into Sales Force
                  </h3>
                  <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
                    Start automating your Story mentions today.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button size='lg' className='font-semibold'>
                      Create Story Trigger
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

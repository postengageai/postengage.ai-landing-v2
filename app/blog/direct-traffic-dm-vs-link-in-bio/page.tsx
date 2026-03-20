import React from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  MousePointer,
  ExternalLink,
  Link as LinkIcon,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'The "Link in Bio" is Dead: Direct Traffic via DM Automation',
  description:
    'Stop asking followers to leave their feed. Use DM automation to send direct links and increase click-through rates by 300%.',
  openGraph: {
    title: 'The "Link in Bio" is Dead: Direct Traffic via DM Automation',
    description:
      'Why "Link in Bio" tools like Linktree are killing your reach, and what to do instead.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: 'https://postengage.ai/blog/link-in-bio-dead-cover.png',
        width: 1200,
        height: 630,
        alt: 'Direct Traffic vs Link in Bio Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The "Link in Bio" is Dead: Direct Traffic via DM Automation',
    description:
      'Why "Link in Bio" tools like Linktree are killing your reach, and what to do instead.',
    images: ['https://postengage.ai/blog/link-in-bio-dead-cover.png'],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The "Link in Bio" is Dead: Direct Traffic via DM Automation',
    image: 'https://postengage.ai/blog/link-in-bio-dead-cover.png',
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
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    description:
      'Stop asking followers to leave their feed. Use DM automation to send direct links and increase click-through rates by 300%.',
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
                  Marketing Strategy
                </span>
                <span className='text-sm text-muted-foreground'>
                  Mar 24, 2026 • 5 min read
                </span>
              </div>
              <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
                The "Link in Bio" is Dead: Direct Traffic via DM Automation
              </h1>
              <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
                Instagram hates it when you send users off-platform via your
                bio. But they LOVE it when you keep users in the DMs. Here is
                the loophole.
              </p>
            </header>

            {/* Featured Image Placeholder */}
            <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20'>
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                  <MousePointer className='h-8 w-8 text-primary/70' />
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
                        href='#why-bio-links-fail'
                        className='block hover:text-primary transition-colors'
                      >
                        Why Bio Links Fail
                      </a>
                      <a
                        href='#dm-traffic-strategy'
                        className='block hover:text-primary transition-colors'
                      >
                        The DM Traffic Strategy
                      </a>
                      <a
                        href='#ctr-comparison'
                        className='block hover:text-primary transition-colors'
                      >
                        CTR Comparison
                      </a>
                      <a
                        href='#implementation'
                        className='block hover:text-primary transition-colors'
                      >
                        Implementation Guide
                      </a>
                    </nav>
                  </div>
                  <div className='space-y-4'>
                    <h3 className='text-sm font-semibold tracking-wider text-foreground uppercase'>
                      Share this post
                    </h3>
                    <SocialShareButtons
                      url='https://postengage.ai/blog/direct-traffic-dm-vs-link-in-bio'
                      title='The "Link in Bio" is Dead: Direct Traffic via DM Automation'
                    />
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className='lg:col-span-9'>
                <div className='prose prose-lg dark:prose-invert max-w-none'>
                  <p className='lead text-xl text-muted-foreground mb-8'>
                    For years, "Link in Bio" was the only way out of Instagram's
                    walled garden. Tools like Linktree became billion-dollar
                    companies solving this problem.
                  </p>
                  <p>
                    But there is a flaw. It requires <strong>intent</strong>.
                    The user has to stop scrolling, go to your profile, click
                    the link, and find the content.
                  </p>
                  <p>Most don't.</p>

                  <h2
                    id='why-bio-links-fail'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    Why Bio Links Fail
                  </h2>
                  <div className='my-8 rounded-xl border bg-destructive/5 p-6 shadow-sm'>
                    <div className='flex items-start gap-4'>
                      <div className='rounded-full bg-destructive/10 p-3'>
                        <LinkIcon className='h-6 w-6 text-destructive' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-foreground mb-2'>
                          The Friction Funnel
                        </h3>
                        <ol className='list-decimal pl-5 space-y-2 text-muted-foreground'>
                          <li>User sees post (100%)</li>
                          <li>User reads caption "Link in Bio" (50%)</li>
                          <li>User clicks profile (10%)</li>
                          <li>User clicks Linktree (5%)</li>
                          <li>User finds specific link (2%)</li>
                        </ol>
                        <p className='mt-4 font-bold text-destructive'>
                          98% Drop-off Rate.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2
                    id='dm-traffic-strategy'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    The DM Traffic Strategy
                  </h2>
                  <p>
                    Instead of sending them to a generic menu, you send the
                    specific link directly to their inbox.
                  </p>
                  <p>
                    <strong>The New Flow:</strong>
                  </p>
                  <ol className='list-decimal pl-5 space-y-2 my-6'>
                    <li>User sees post.</li>
                    <li>
                      Caption says: "Comment <strong>GUIDE</strong> for the
                      link."
                    </li>
                    <li>User comments "GUIDE".</li>
                    <li>
                      <strong>Bot:</strong> Sends direct link to the guide in
                      DMs.
                    </li>
                    <li>User clicks link (high intent).</li>
                  </ol>

                  <h2
                    id='ctr-comparison'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    CTR Comparison
                  </h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                    <div className='p-6 rounded-xl border bg-muted'>
                      <h4 className='font-semibold text-muted-foreground mb-2'>
                        Link in Bio CTR
                      </h4>
                      <div className='text-3xl font-bold'>0.8%</div>
                      <div className='text-sm text-muted-foreground'>
                        Average Click-Through Rate
                      </div>
                    </div>
                    <div className='p-6 rounded-xl border border-primary/20 bg-primary/5'>
                      <h4 className='font-semibold text-primary mb-2'>
                        DM Automation CTR
                      </h4>
                      <div className='text-3xl font-bold text-foreground'>
                        22.4%
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Average Click-Through Rate
                      </div>
                    </div>
                  </div>

                  <h2
                    id='implementation'
                    className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                  >
                    Implementation Guide
                  </h2>
                  <p>You can set this up for:</p>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose'>
                    <div className='p-4 border rounded-lg text-center'>
                      <MousePointer className='h-8 w-8 mx-auto mb-2 text-primary' />
                      <h4 className='font-bold'>Blog Posts</h4>
                      <p className='text-xs text-muted-foreground'>
                        "Comment READ for the article"
                      </p>
                    </div>
                    <div className='p-4 border rounded-lg text-center'>
                      <ExternalLink className='h-8 w-8 mx-auto mb-2 text-primary' />
                      <h4 className='font-bold'>Webinars</h4>
                      <p className='text-xs text-muted-foreground'>
                        "Comment JOIN to register"
                      </p>
                    </div>
                    <div className='p-4 border rounded-lg text-center'>
                      <LinkIcon className='h-8 w-8 mx-auto mb-2 text-primary' />
                      <h4 className='font-bold'>Products</h4>
                      <p className='text-xs text-muted-foreground'>
                        "Comment SHOP for the link"
                      </p>
                    </div>
                  </div>
                  <p>
                    Stop fighting the algorithm. Work with it. Keep users
                    engaged on your post (comments) and in the DMs (messages),
                    and Instagram will reward you with more reach.
                  </p>
                </div>

                <div className='mt-16 rounded-2xl bg-muted p-8 text-center'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Ditch the "Link in Bio"
                  </h3>
                  <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
                    Start sending direct traffic today with PostEngage.ai.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button size='lg' className='font-semibold'>
                      Start for Free
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

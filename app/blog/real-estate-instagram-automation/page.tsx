import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: "The Realtor's Guide to Automating Open House Leads on Instagram",
  description:
    'Stop chasing sign-in sheets. Learn how to capture, qualify, and follow up with every open house visitor automatically.',
  openGraph: {
    title: "The Realtor's Guide to Automating Open House Leads on Instagram",
    description:
      'Stop chasing sign-in sheets. Learn how to capture, qualify, and follow up with every open house visitor automatically.',
    url: 'https://postengage.ai/blog/real-estate-instagram-automation',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-16T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/real-estate-automation-cover.png',
        width: 1200,
        height: 630,
        alt: 'Real Estate Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Realtor's Guide to Automating Open House Leads on Instagram",
    description:
      'Stop chasing sign-in sheets. Automate your open house follow-up.',
    images: ['/blog/real-estate-automation-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "The Realtor's Guide to Automating Open House Leads on Instagram",
    image: ['/blog/real-estate-automation-cover.png'],
    datePublished: '2026-03-16T09:00:00.000Z',
    dateModified: '2026-03-16T09:00:00.000Z',
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
      <ArticleJsonLd
        title='The Realtor'
        description='Stop chasing sign-in sheets. Learn how to capture, qualify, and follow up with every open house visitor automatically.'
        slug='real-estate-instagram-automation'
        datePublished='2026-03-16T09:00:00.000Z'
        category='Real Estate'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='flex-1 pt-32 pb-24'>
        <BlogJsonLd
          title='The Realtor'
          description='Stop chasing sign-in sheets. Learn how to capture, qualify, and follow up with every open house visitor automatically.'
          slug='real-estate-instagram-automation'
          date='2026-03-16T09:00:00.000Z'
          category='Real Estate'
        />
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
              title="The Realtor's Guide to Automating Open House Leads on Instagram"
              url='https://postengage.ai/blog/real-estate-instagram-automation'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Real Estate
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                5 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Mar 16, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              The Realtor's Guide to Automating Open House Leads
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Paper sign-in sheets are where leads go to die. Here is how top
              agents use QR codes and DM automation to capture 100% of visitors.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Sparkles className='h-8 w-8 text-primary/70' />
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
                      id: 'the-qr-code-trick',
                      title: 'The QR Code Strategy',
                    },
                    {
                      id: 'instant-follow-up',
                      title: 'Instant Follow-Up',
                    },
                    {
                      id: 'qualification',
                      title: 'Buyer or Lookie-Loo?',
                    },
                    {
                      id: 'case-study',
                      title: 'Agent Success Story',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Automate Your Listings?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Get our Real Estate template pack.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard'>Get Templates</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  It's Sunday afternoon. 30 people walked through your listing.
                  You have 5 scribbled names on a piece of paper. You can't read
                  3 of them. Sound familiar?
                </p>

                <h2
                  id='the-qr-code-trick'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The QR Code Strategy
                </h2>
                <p>
                  Put a QR code at the entrance. "Scan for Price, Photos &
                  Disclosures."
                </p>
                <div className='flex items-center p-4 bg-muted rounded-lg my-6'>
                  <div className='bg-background p-2 rounded mr-4 border'>
                    <div className='w-16 h-16 bg-foreground/10 flex items-center justify-center text-xs text-muted-foreground'>
                      QR
                    </div>
                  </div>
                  <div>
                    <h3 className='font-bold text-lg m-0'>The Flow</h3>
                    <p className='text-sm m-0 text-muted-foreground'>
                      Scan QR &gt; Opens Instagram DM &gt; Sends Keyword
                      "OPENHOUSE"
                    </p>
                  </div>
                </div>
                <p>
                  When they scan, it opens their Instagram DM with a pre-filled
                  message. They hit send, and PostEngage.ai takes over.
                </p>

                <h2
                  id='instant-follow-up'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Instant Follow-Up
                </h2>
                <p>
                  While they are walking through the kitchen, your AI agent
                  sends them the full property PDF and asks:
                </p>
                <blockquote className='border-l-4 border-primary pl-4 italic my-4'>
                  "Welcome to 123 Main St! I just sent you the brochure. What do
                  you think of the kitchen renovation?"
                </blockquote>
                <p>
                  This engages them immediately while their interest is highest.
                </p>

                <h2
                  id='qualification'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Buyer or Lookie-Loo?
                </h2>
                <p>PostEngage can ask qualification questions automatically:</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>"Are you working with an agent?"</li>
                  <li>"Are you pre-approved?"</li>
                  <li>"When are you looking to move?"</li>
                </ul>
                <p>
                  If they answer "No agent" and "Pre-approved", you get a
                  notification: <strong>HOT LEAD</strong>. Go find them in the
                  living room and introduce yourself.
                </p>

                <h2
                  id='case-study'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Agent Success Story
                </h2>
                <p>
                  Sarah Jenkins, a Realtor in Miami, switched to this system in
                  2025.
                </p>
                <div className='bg-card border rounded-xl p-6 shadow-sm'>
                  <div className='grid grid-cols-3 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        300%
                      </div>
                      <div className='text-xs text-muted-foreground uppercase tracking-wider'>
                        More Leads Captured
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        2 hrs
                      </div>
                      <div className='text-xs text-muted-foreground uppercase tracking-wider'>
                        Saved Per Open House
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        $2.4M
                      </div>
                      <div className='text-xs text-muted-foreground uppercase tracking-wider'>
                        Closed from DMs
                      </div>
                    </div>
                  </div>
                </div>
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
                      Real Estate Vertical
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

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
  title: 'Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy',
  description:
    'Email open rates are plummeting. DM open rates are 90%+. Here is how to use Instagram to save lost sales.',
  openGraph: {
    title: 'Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy',
    description:
      'Email open rates are plummeting. DM open rates are 90%+. Here is how to use Instagram to save lost sales.',
    url: 'https://postengage.ai/blog/ecommerce-cart-recovery-dm',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-17T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/ecommerce-recovery-cover.png',
        width: 1200,
        height: 630,
        alt: 'Ecommerce Cart Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy',
    description:
      'Email open rates are plummeting. Recover lost sales with DMs.',
    images: ['/blog/ecommerce-recovery-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy',
    image: ['/blog/ecommerce-recovery-cover.png'],
    datePublished: '2026-03-17T09:00:00.000Z',
    dateModified: '2026-03-17T09:00:00.000Z',
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
        title='Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy'
        description='Email open rates are plummeting. DM open rates are 90%+. Here is how to use Instagram to save lost sales.'
        slug='ecommerce-cart-recovery-dm'
        datePublished='2026-03-17T09:00:00.000Z'
        category='E-commerce'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='flex-1 pt-32 pb-24'>
        <BlogJsonLd
          title='Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy'
          description='Email open rates are plummeting. DM open rates are 90%+. Here is how to use Instagram to save lost sales.'
          slug='ecommerce-cart-recovery-dm'
          date='2026-03-17T09:00:00.000Z'
          category='E-commerce'
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
              title='Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy'
              url='https://postengage.ai/blog/ecommerce-cart-recovery-dm'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                E-commerce
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                4 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Mar 17, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Recovering Abandoned Carts via Instagram DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Your customers live in their DMs, not their Inbox. Learn why
              PostEngage.ai is the new Klaviyo for Instagram.
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
                      id: 'email-is-dying',
                      title: 'Why Email is Dying',
                    },
                    {
                      id: 'the-dm-strategy',
                      title: 'The DM Strategy',
                    },
                    {
                      id: 'compliance',
                      title: 'Staying Compliant',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Shopify Store Owner?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Connect your store to Instagram DMs.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/integrations/shopify'>View Integration</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  The average e-commerce store loses 70% of sales at checkout.
                  You send an email. It goes to the "Promotions" tab. They never
                  see it.
                </p>

                <h2
                  id='email-is-dying'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Why Email is Dying
                </h2>
                <div className='grid grid-cols-2 gap-4 my-8 not-prose'>
                  <div className='text-center p-6 border rounded-lg'>
                    <div className='text-4xl font-bold text-muted-foreground mb-2'>
                      21%
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Avg Email Open Rate
                    </div>
                  </div>
                  <div className='text-center p-6 border rounded-lg bg-primary/5 border-primary/20'>
                    <div className='text-4xl font-bold text-primary mb-2'>
                      88%
                    </div>
                    <div className='text-sm text-primary font-medium'>
                      Avg DM Open Rate
                    </div>
                  </div>
                </div>
                <p>
                  The numbers don't lie. If you want to recover sales, you need
                  to reach customers where they are paying attention.
                </p>

                <h2
                  id='the-dm-strategy'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The DM Strategy
                </h2>
                <p>
                  You can't just DM anyone who abandons a cart (that's spam).
                  But you CAN DM anyone who has engaged with you.
                </p>
                <h3 className='text-xl font-bold mt-6 mb-4'>
                  The "Save My Cart" Flow
                </h3>
                <ol className='list-decimal pl-5 space-y-4'>
                  <li>
                    <strong>Opt-In:</strong> Add a "Send to Messenger" checkbox
                    on your product page or cart drawer.
                  </li>
                  <li>
                    <strong>Trigger:</strong> If they don't checkout in 30
                    minutes, PostEngage fires a DM.
                  </li>
                  <li>
                    <strong>Offer:</strong> "Hey [Name], did you forget this?
                    Here is a 5% code to complete your order: [LINK]"
                  </li>
                </ol>

                <h2
                  id='compliance'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Staying Compliant
                </h2>
                <p>
                  Meta has strict rules about promotional messages. You must use
                  the "One-Time Notification" (OTN) or recurring notification
                  tokens.
                </p>
                <p>
                  PostEngage handles all of this complexity for you, ensuring
                  you never get blocked.
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
                      E-commerce Specialists
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

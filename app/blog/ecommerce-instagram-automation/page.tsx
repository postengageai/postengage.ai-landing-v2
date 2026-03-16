import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  ShoppingBag,
  Zap,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'E-commerce Automation 2026: Sync Shopify to Instagram DMs',
  description:
    'Stop losing sales to "Link in Bio". Learn how to sync your Shopify catalog to Instagram and sell directly in DMs with AI.',
  openGraph: {
    title: 'E-commerce Automation 2026: Sync Shopify to Instagram DMs',
    description:
      'Stop losing sales to "Link in Bio". Learn how to sync your Shopify catalog to Instagram and sell directly in DMs with AI.',
    type: 'article',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'E-commerce Automation 2026: Sync Shopify to Instagram DMs',
      },
    ],
    publishedTime: '2026-03-06',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 6, 2026';
  const readTime = '7 min read';

  const tableOfContents = [
    { id: 'the-friction-problem', title: 'The Friction Problem' },
    { id: 'shopify-integration', title: 'Shopify + DM Automation' },
    { id: 'abandoned-cart-recovery', title: 'Abandoned Cart Recovery via DM' },
    { id: 'comment-to-sale', title: 'The "Comment to Sale" Flow' },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <LandingHeader />

      <main className='flex-1'>
        <article className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
          {/* Breadcrumb & Meta */}
          <header className='mx-auto mb-8 max-w-3xl'>
            <Link
              href='/blog'
              className='mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>

            <div className='mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <Badge variant='secondary' className='rounded-full px-3 py-1'>
                E-commerce
              </Badge>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{publishDate}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{readTime}</span>
              </div>
            </div>

            <h1 className='mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              E-commerce Automation 2026: Sync Shopify to Instagram DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Your customers are on Instagram. Your products are on Shopify.
              Here is how to bridge the gap and close sales without them ever
              leaving the chat.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-indigo-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <ShoppingBag className='h-8 w-8 text-primary/70' />
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
              <div className='sticky top-24 space-y-8'>
                <TableOfContents items={tableOfContents} />
                <div className='space-y-4'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                    Share this article
                  </h4>
                  <SocialShareButtons
                    url='https://postengage.ai/blog/ecommerce-instagram-automation'
                    title='E-commerce Automation 2026: Sync Shopify to Instagram DMs'
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                {/* Introduction */}
                <p>
                  DTC brands love Instagram for brand building, but hate it for
                  conversion tracking. "Link in Bio" is a leaky bucket. Stories
                  disappear.
                </p>
                <p>
                  But in 2026, the best brands aren't sending traffic to their
                  store. They are bringing their store to the DMs.
                </p>

                <h2
                  id='the-friction-problem'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Friction Problem
                </h2>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-start p-4 bg-muted/50 border rounded-lg'>
                    <ShoppingBag className='h-6 w-6 text-muted-foreground mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold'>Old Way</div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        See Post {'->'} Visit Profile {'->'} Click Link {'->'}{' '}
                        Search for Product {'->'} Add to Cart.
                        <br />
                        <strong>Result:</strong> High drop-off at every step.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start p-4 bg-primary/10 border border-primary/20 rounded-lg'>
                    <Zap className='h-6 w-6 text-primary mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold text-primary'>
                        New Way (Automation)
                      </div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Comment "BUY" {'->'} Receive DM with Product Card {'->'}{' '}
                        One-Click Checkout.
                        <br />
                        <strong>Result:</strong> Instant conversion.
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  id='shopify-integration'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Shopify + DM Automation
                </h2>
                <p>
                  With tools like PostEngage.ai, you can sync your Shopify
                  catalog directly to your automation.
                </p>
                <p>
                  When a user asks "Do you have this in blue?", your AI agent
                  checks your real-time Shopify inventory and replies:{' '}
                  <em>
                    "Yes! We have 3 left in Blue (Size M). Want the link?"
                  </em>
                </p>

                <h2
                  id='abandoned-cart-recovery'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Abandoned Cart Recovery via DM
                </h2>
                <p>Email open rates are 20%. DM open rates are 90%.</p>
                <p>
                  If a user interacts with your automation but doesn't buy, you
                  can trigger a follow-up DM 1 hour later:
                  <em>
                    "Hey! Saw you checking out the Summer Dress. Here is a 10%
                    code to finish your order: [CODE]"
                  </em>
                </p>

                <h2
                  id='comment-to-sale'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The "Comment to Sale" Flow
                </h2>
                <div className='space-y-6 my-8 not-prose'>
                  <Card>
                    <CardHeader className='pb-2'>
                      <CardTitle className='text-lg flex items-center gap-2'>
                        <MessageCircle className='h-5 w-5 text-blue-500' />
                        The Workflow
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className='list-decimal pl-4 space-y-2 text-sm'>
                        <li>Post a Reel of your new product.</li>
                        <li>
                          Caption: "Comment <strong>NEED</strong> to get the
                          link."
                        </li>
                        <li>User comments "NEED".</li>
                        <li>
                          Automation sends a DM with a "Buy Now" card linked
                          directly to that Shopify product page.
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <TrendingUp className='h-6 w-6 text-primary' />
                      Connect Shopify to PostEngage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Ready to turn your Instagram comments into Shopify sales?
                      Start your free trial and sync your store today.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/sign-up'>Start Free Trial</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>View Demo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Author Bio */}
              <div className='mt-12 border-t pt-12'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage
                      src='/team-avatar.png'
                      alt='PostEngageAI Team'
                    />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Helping brands scale with intelligent automation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NewsletterForm />
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}

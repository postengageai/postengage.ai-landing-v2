import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { ArrowLeft, PieChart, DollarSign, Search } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';

export const metadata: Metadata = {
  title: 'Influencer ROI Tracking: The Missing Link in Your Campaigns',
  description:
    'Stop guessing if your influencers are driving sales. Use DM automation to track every click, conversation, and conversion with 100% accuracy.',
  openGraph: {
    title: 'Influencer ROI Tracking: The Missing Link in Your Campaigns',
    description:
      'Stop guessing if your influencers are driving sales. Use DM automation to track every click, conversation, and conversion with 100% accuracy.',
    url: 'https://postengage.ai/blog/influencer-roi-tracking',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-28T00:00:00.000Z',
    authors: ['PostEngage Team'],
    images: [
      {
        url: 'https://postengage.ai/blog/influencer-roi-cover.png',
        width: 1200,
        height: 630,
        alt: 'Influencer ROI Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer ROI Tracking: The Missing Link in Your Campaigns',
    description:
      'Stop guessing if your influencers are driving sales. Use DM automation to track every click, conversation, and conversion with 100% accuracy.',
    images: ['https://postengage.ai/blog/influencer-roi-cover.png'],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Influencer ROI Tracking: The Missing Link in Your Campaigns',
    image: 'https://postengage.ai/blog/influencer-roi-cover.png',
    datePublished: '2026-03-28T00:00:00.000Z',
    dateModified: '2026-03-28T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'PostEngage Team',
      url: 'https://postengage.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PostEngage.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://postengage.ai/logo.png',
      },
    },
    description:
      'Stop guessing if your influencers are driving sales. Use DM automation to track every click, conversation, and conversion with 100% accuracy.',
  };

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='pt-32 pb-20'>
        <article className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          {/* Breadcrumb & Navigation */}
          <div className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
            <Link
              href='/blog'
              className='hover:text-primary transition-colors flex items-center gap-1'
            >
              <ArrowLeft className='w-4 h-4' />
              Back to Blog
            </Link>
            <span>/</span>
            <span className='text-foreground font-medium'>Influencer ROI</span>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content */}
            <div className='lg:col-span-8'>
              {/* Header */}
              <header className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <Badge variant='secondary' className='rounded-full px-4 py-1'>
                    Analytics
                  </Badge>
                  <span className='text-sm text-muted-foreground'>
                    Mar 28, 2026 • 6 min read
                  </span>
                </div>
                <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
                  Influencer ROI Tracking: The Missing Link in Your Campaigns
                </h1>
                <p className='text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-6 italic'>
                  Vanity metrics (likes, comments) are useless if they don't
                  convert. Here is how to track the only metric that matters:
                  Sales.
                </p>
              </header>

              {/* Featured Image Placeholder */}
              <div className='mb-12 rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-muted/30 aspect-video flex items-center justify-center relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <span className='text-muted-foreground/20 font-medium flex flex-col items-center gap-4'>
                  <PieChart className='w-16 h-16' />
                  Featured Image: Analytics Dashboard
                </span>
              </div>

              {/* Content */}
              <div className='prose prose-lg prose-slate dark:prose-invert max-w-none'>
                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    1
                  </span>
                  The Problem with Discount Codes
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  Traditional influencer tracking relies on discount codes
                  (e.g., "SARAH20"). But what if the user sees the post, forgets
                  the code, and buys later? Or clicks the link in bio but
                  doesn't use the code? You lose the attribution data.
                </p>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    2
                  </span>
                  The Solution: Keyword Attribution
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  With PostEngage.ai, you assign a unique keyword to each
                  influencer.
                </p>
                <div className='bg-muted/30 p-6 rounded-xl border border-border/50 my-6'>
                  <h3 className='font-bold mb-2'>Example Workflow:</h3>
                  <ul className='list-disc pl-5 space-y-2 text-muted-foreground'>
                    <li>
                      Influencer A posts: "Comment 'GLOW' for my skincare
                      routine."
                    </li>
                    <li>
                      Influencer B posts: "Comment 'SHINE' for my skincare
                      routine."
                    </li>
                    <li>
                      PostEngage.ai tracks exactly how many DMs were triggered
                      by 'GLOW' vs 'SHINE'.
                    </li>
                  </ul>
                </div>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    3
                  </span>
                  Tracking the Funnel Deep Dive
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  We don't just track the start of the conversation. We track
                  how deep they go.
                </p>
                <div className='grid gap-6 my-8'>
                  <Card className='bg-background/50 backdrop-blur'>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-3 mb-4 text-primary'>
                        <Search className='w-6 h-6' />
                        <h3 className='font-bold'>Metrics You Can Track</h3>
                      </div>
                      <ul className='space-y-2 text-sm text-muted-foreground'>
                        <li>• Total DMs initiated</li>
                        <li>• Email collected rate</li>
                        <li>• Click-through rate to website</li>
                        <li>• Conversion rate (via pixel integration)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    4
                  </span>
                  Automated Payouts (Coming Soon)
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  Imagine a system where your influencers are paid automatically
                  based on the <em>qualified leads</em> they generate, not just
                  sales. This opens up new partnership models (Cost Per Lead)
                  that are fairer for both brands and creators.
                </p>

                <div className='my-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 text-center'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Stop wasting budget on low-performing influencers
                  </h3>
                  <p className='text-muted-foreground mb-8 max-w-lg mx-auto'>
                    Get granular data on your influencer campaigns with
                    PostEngage.ai Analytics.
                  </p>
                  <Button
                    size='lg'
                    className='rounded-full px-8 h-12 text-base'
                  >
                    See Dashboard Demo <DollarSign className='ml-2 w-4 h-4' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className='lg:col-span-4 space-y-8'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      title: 'Problem with Discount Codes',
                      id: 'the-problem-with-discount-codes',
                    },
                    {
                      title: 'Solution: Keyword Attribution',
                      id: 'the-solution-keyword-attribution',
                    },
                    {
                      title: 'Tracking the Funnel',
                      id: 'tracking-the-funnel-deep-dive',
                    },
                    {
                      title: 'Automated Payouts',
                      id: 'automated-payouts-coming-soon',
                    },
                  ]}
                />
                <SocialShareButtons
                  url='https://postengage.ai/blog/influencer-roi-tracking'
                  title='Influencer ROI Tracking: The Missing Link in Your Campaigns'
                />
              </div>
            </aside>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}

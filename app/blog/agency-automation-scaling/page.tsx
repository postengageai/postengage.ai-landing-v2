import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Briefcase,
  DollarSign,
  BarChart,
  Users,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: 'Agency DM Automation: Scale to $50k/mo | PostEngage.ai',
  description:
    'Stop selling hours. Start selling systems. Learn how agencies are productizing Instagram automation to retain clients and increase MRR.',
  openGraph: {
    title: 'Agency DM Automation: Scale to $50k/mo | PostEngage.ai',
    description:
      'Stop selling hours. Start selling systems. Learn how agencies are productizing Instagram automation to retain clients and increase MRR.',
    type: 'article',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'How Agencies Are Scaling to $50k/mo with DM Automation Services',
      },
    ],
    publishedTime: '2026-03-04',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 4, 2026';
  const readTime = '9 min read';

  const tableOfContents = [
    { id: 'the-agency-trap', title: 'The "Retainer" Trap' },
    { id: 'the-new-offer', title: 'The New Offer: "Growth Systems"' },
    { id: 'pricing-models', title: 'Pricing Models that Work' },
    { id: 'whitelabel-automation', title: 'Whitelabeling Automation' },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <ArticleJsonLd
        title='Agency DM Automation: Scale to $50k/mo'
        description='Stop selling hours. Start selling systems. Learn how agencies are productizing Instagram automation to retain clients and increase MRR.'
        slug='agency-automation-scaling'
        datePublished='2026-03-04'
        category='Agency Growth'
      />

      <LandingHeader />

      <main className='flex-1'>
        <BlogJsonLd
          title='Agency DM Automation: Scale to $50k/mo'
          description='Stop selling hours. Start selling systems. Learn how agencies are productizing Instagram automation to retain clients and increase MRR.'
          slug='agency-automation-scaling'
          date='2026-03-04'
          category='Agency Growth'
        />
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
                Agency Growth
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
              How Agencies Are Scaling to $50k/mo with DM Automation Services
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Content creation is a commodity. Automation is an asset. Discover
              how smart agencies are pivoting to high-margin "Chat Funnel"
              services.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-slate-500/20 via-gray-500/10 to-zinc-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Briefcase className='h-8 w-8 text-primary/70' />
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
                    url='https://postengage.ai/blog/agency-automation-scaling'
                    title='How Agencies Are Scaling to $50k/mo with DM Automation Services'
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                {/* Introduction */}
                <p>
                  If you run a social media agency, you know the struggle.
                  Clients want viral posts, but they measure success in leads.
                  You spend hours creating Reels, but if they don't convert, you
                  get fired.
                </p>
                <p>
                  The problem isn't your content. It's the{' '}
                  <strong>conversion mechanism</strong>. Agencies that add "DM
                  Automation" to their stack are seeing 3x longer retention and
                  5x higher margins.
                </p>

                <h2
                  id='the-agency-trap'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The "Retainer" Trap
                </h2>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-start p-4 bg-muted/50 border rounded-lg'>
                    <Users className='h-6 w-6 text-muted-foreground mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold'>Traditional Agency</div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Sells: Content & Community Management.
                        <br />
                        Problem: Hard to prove ROI. High churn. Labor intensive.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start p-4 bg-primary/10 border border-primary/20 rounded-lg'>
                    <Briefcase className='h-6 w-6 text-primary mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold text-primary'>
                        Automation Agency
                      </div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Sells: "Customer Acquisition Systems".
                        <br />
                        Benefit: Clear ROI (Leads Generated). Sticky software
                        lock-in.
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  id='the-new-offer'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The New Offer: "Growth Systems"
                </h2>
                <p>
                  Stop pitching "3 posts a week". Start pitching "The 24/7 Sales
                  Agent".
                </p>
                <p>Your new package includes:</p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    <strong>Comment-to-DM Setup:</strong> "We turn every comment
                    into a lead."
                  </li>
                  <li>
                    <strong>Story Auto-Reply:</strong> "We monetize your story
                    views."
                  </li>
                  <li>
                    <strong>FAQ Bot:</strong> "We save your team 10 hours a week
                    on support."
                  </li>
                </ul>

                <h2
                  id='pricing-models'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Pricing Models that Work
                </h2>
                <div className='space-y-6 my-8 not-prose'>
                  <Card>
                    <CardHeader className='pb-2'>
                      <CardTitle className='text-lg flex items-center gap-2'>
                        <DollarSign className='h-5 w-5 text-green-500' />
                        The Setup Fee + SaaS
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        Charge $1,500 - $3,000 for the initial "Funnel Build".
                        Then charge $300/mo for "Maintenance & Software" (using
                        PostEngage.ai).
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2
                  id='whitelabel-automation'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Whitelabeling Automation
                </h2>
                <p>
                  The secret weapon for 2026 is whitelabeling. Instead of
                  telling clients "Go sign up for Tool X", you provide the tool
                  as <em>your</em> proprietary technology.
                </p>
                <p>
                  This increases your perceived value and makes it incredibly
                  hard for clients to leave, because their entire lead system
                  runs on your platform.
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <BarChart className='h-6 w-6 text-primary' />
                      Partner with PostEngage.ai
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      We offer a dedicated Agency Partner Program with bulk
                      pricing and priority support. Scale your agency today.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/agency'>Apply for Partner Program</Link>
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

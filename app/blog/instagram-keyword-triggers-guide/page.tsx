import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, Zap } from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: 'Instagram Keyword Triggers: The Secret to Hyper-Targeted Automation',
  description:
    'Not all DMs are equal. Learn how to use keyword triggers to fire the right automation at the right person — and why this one feature triples your conversion rate.',
  openGraph: {
    title:
      'Instagram Keyword Triggers: The Secret to Hyper-Targeted Automation',
    description:
      'Not all DMs are equal. Learn how to use keyword triggers to fire the right automation at the right person — and why this one feature triples your conversion rate.',
    type: 'article',
    url: 'https://postengage.ai/blog/instagram-keyword-triggers-guide',
    images: [
      {
        url: '/blog/instagram-keyword-triggers-guide-cover.png',
        width: 1200,
        height: 630,
        alt: 'Instagram Keyword Triggers: The Secret to Hyper-Targeted Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Instagram Keyword Triggers: The Secret to Hyper-Targeted Automation',
    description:
      'Not all DMs are equal. Learn how to use keyword triggers to fire the right automation at the right person — and why this one feature triples your conversion rate.',
    images: ['/blog/instagram-keyword-triggers-guide-cover.png'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'what-are-keyword-triggers', title: 'What Are Keyword Triggers?' },
    { id: 'best-keywords-by-niche', title: 'Best Keywords by Niche' },
    { id: 'multi-keyword-flows', title: 'Multi-Keyword Flows' },
    {
      id: 'keyword-trigger-content-ideas',
      title: 'Content Ideas That Drive Keywords',
    },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <ArticleJsonLd
        title='Instagram Keyword Triggers: The Secret to Hyper-Targeted Automation'
        description='Not all DMs are equal. Learn how to use keyword triggers to fire the right automation at the right person — and why this one feature triples your conversion rat'
        slug='instagram-keyword-triggers-guide'
        datePublished='2026-03-01'
        category='Strategy'
      />

      <LandingHeader />
      <main className='relative pt-32 pb-24'>
        <BlogJsonLd
          title='Instagram Keyword Triggers: The Secret to Hyper-Targeted Automation'
          description='Not all DMs are equal. Learn how to use keyword triggers to fire the right automation at the right person — and why this one feature triples your conversion rate.'
          slug='instagram-keyword-triggers-guide'
          date='2026-04-02'
          category='Strategy'
          readingTime='6 min read'
        />
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-60' />
        </div>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-32 lg:self-start space-y-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                <Link
                  href='/blog'
                  className='hover:text-primary transition-colors'
                >
                  Blog
                </Link>
                <span>/</span>
                <span className='text-foreground font-medium'>Strategy</span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge
                  variant='secondary'
                  className='mb-6 text-sm font-medium px-3 py-1'
                >
                  Strategy
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  Instagram Keyword Triggers: The Secret to Hyper-Targeted
                  Automation
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Zap className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>
                        PostEngageAI Team
                      </p>
                      <p className='text-xs'>Automation Experts</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Calendar className='h-4 w-4' />
                    <span>April 3, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>6 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
                  <div className='text-center p-8'>
                    <Zap className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>
                      Strategy
                    </p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                The difference between a 2% DM conversion rate and a 20% one
                often comes down to a single word. Keyword triggers let you
                segment your audience in real-time — responding differently to
                someone who comments "PRICE" versus "HOW" versus "FREE". Here is
                how to build a keyword strategy that does the heavy lifting for
                you.
              </div>

              <h2
                id='what-are-keyword-triggers'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                What Are Keyword Triggers?
              </h2>
              <p>
                A keyword trigger is a word or phrase that, when detected in a
                comment or DM, activates a specific automation flow. Unlike
                generic auto-replies that treat every user the same, keyword
                triggers let you deliver highly relevant responses based on
                exactly what someone is asking.
              </p>
              <p>
                For example: someone comments "PRICE" on your product post →
                your bot sends a DM with pricing details and a booking link.
                Someone else comments "FREE" → they receive your lead magnet.
                Same post, two completely different customer journeys — all
                automated.
              </p>

              <h2
                id='best-keywords-by-niche'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Best Keyword Triggers by Niche
              </h2>
              <p>
                <strong>E-commerce</strong>: PRICE, SHOP, BUY, SIZE, LINK,
                DISCOUNT — triggers product info and checkout links.
              </p>
              <p>
                <strong>Coaches & service providers</strong>: APPLY, CALL, INFO,
                PROGRAM, JOIN — triggers application forms or booking links.
              </p>
              <p>
                <strong>Content creators</strong>: FREE, GUIDE, TEMPLATE,
                CHECKLIST, DOWNLOAD — triggers lead magnet delivery.
              </p>
              <p>
                <strong>Local businesses</strong>: BOOK, HOURS, LOCATION,
                AVAILABLE, MENU — triggers reservation links or business info.
              </p>
              <p>
                The keyword itself becomes your CTA. Put it in your caption
                ("Comment GUIDE below") and watch your comment section fill up
                with high-intent leads.
              </p>

              <h2
                id='multi-keyword-flows'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Multi-Keyword Flows: The Advanced Strategy
              </h2>
              <p>
                The real power of keyword triggers comes from chaining them
                together inside a DM conversation. After your bot delivers the
                initial resource, it can ask a follow-up question with two or
                three quick-reply buttons. Each button is effectively a new
                keyword trigger that routes the user down a different path.
              </p>
              <p>
                Example flow: Comment "PROGRAM" → Bot sends program overview →
                Bot asks "What's your goal? Reply A for weight loss or B for
                muscle gain" → Each answer triggers a different follow-up with
                specific case studies and a booking link. This is a complete
                sales qualification funnel — inside Instagram DMs.
              </p>

              <h2
                id='keyword-trigger-content-ideas'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                5 Content Ideas Built Around Keyword Triggers
              </h2>
              <p>
                <strong>The Free Resource Post</strong>: "I've been getting tons
                of DMs about [topic]. I put together a free guide. Comment GUIDE
                below and I'll send it to you."{' '}
              </p>
              <p>
                <strong>The Challenge Post</strong>: "30-day [challenge] starts
                Monday. Comment JOIN to get the free daily plan sent to your
                DMs."
              </p>
              <p>
                <strong>The Waitlist Post</strong>: "New product dropping soon.
                Comment WAITLIST to get early access + 20% off."
              </p>
              <p>
                <strong>The Behind-the-Scenes Post</strong>: "I broke down my
                entire [strategy] in a PDF. Comment STRATEGY and I'll send it."
              </p>
              <p>
                <strong>The Comparison Post</strong>: "Confused about [topic A]
                vs [topic B]? Comment A or B and I'll send you the breakdown
                that fits your situation."
              </p>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>
                  Build Your First Keyword Trigger in 60 Seconds
                </h3>
                <p className='mb-6'>
                  PostEngage makes it simple to create intelligent keyword flows
                  that convert.
                </p>
                <Link href='https://app.postengage.ai/signup'>
                  <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                    Try PostEngage Free <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                </Link>
              </div>
            </article>

            <aside className='hidden lg:block lg:col-span-2 lg:sticky lg:top-32 lg:self-start'>
              <div className='flex flex-col gap-4 items-center'>
                <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2'>
                  Share
                </p>
                <SocialShareButtons
                  url='https://postengage.ai/blog/instagram-keyword-triggers-guide'
                  title='Instagram Keyword Triggers: The Secret to Hyper-Targeted Automation'
                />
              </div>
            </aside>
          </div>
        </div>
        <NewsletterForm />
      </main>
      <LandingFooter />
    </div>
  );
}

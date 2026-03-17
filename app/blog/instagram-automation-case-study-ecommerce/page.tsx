import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Calendar,
  Clock,
  Zap,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Case Study: How One E-commerce Brand Got 847 Leads from Instagram in 30 Days',
  description: 'We documented every step of a 30-day Instagram DM automation campaign: the trigger words, the scripts, the bot settings, and the final results.',
  openGraph: {
    title: 'Case Study: How One E-commerce Brand Got 847 Leads from Instagram in 30 Days',
    description: 'We documented every step of a 30-day Instagram DM automation campaign: the trigger words, the scripts, the bot settings, and the final results.',
    type: 'article',
    url: 'https://postengage.ai/blog/instagram-automation-case-study-ecommerce',
    images: [{ url: '/blog/instagram-automation-case-study-ecommerce-cover.png', width: 1200, height: 630, alt: 'Case Study: How One E-commerce Brand Got 847 Leads from Instagram in 30 Days' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study: How One E-commerce Brand Got 847 Leads from Instagram in 30 Days',
    description: 'We documented every step of a 30-day Instagram DM automation campaign: the trigger words, the scripts, the bot settings, and the final results.',
    images: ['/blog/instagram-automation-case-study-ecommerce-cover.png'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'why-it-matters', title: 'Why This Matters in 2026' },
    { id: 'the-core-strategy', title: 'The Core Strategy' },
    { id: 'practical-implementation', title: 'Practical Implementation' },
    { id: 'advanced-tips', title: 'Advanced Tips' },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <LandingHeader />
      <main className='relative pt-32 pb-24'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-60' />
        </div>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-32 lg:self-start space-y-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                <Link href='/blog' className='hover:text-primary transition-colors'>Blog</Link>
                <span>/</span>
                <span className='text-foreground font-medium'>Case Studies</span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge variant='secondary' className='mb-6 text-sm font-medium px-3 py-1'>
                  Case Studies
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  Case Study: How One E-commerce Brand Got 847 Leads from Instagram in 30 Days
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Zap className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>PostEngageAI Team</p>
                      <p className='text-xs'>Automation Experts</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Calendar className='h-4 w-4' />
                    <span>May 12, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>9 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
                  <div className='text-center p-8'>
                    <Zap className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>Case Studies</p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                We documented every step of a 30-day Instagram DM automation campaign: the trigger words, the scripts, the bot settings, and the final results. This guide covers everything you need to know to get started and see results quickly.
              </div>

              <h2
                id='why-it-matters'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Why Case Studies on Instagram Matters in 2026
              </h2>
              <p>Instagram has over 2 billion monthly active users, and direct engagement through DMs and comments has never been higher. For case studies professionals and businesses, the platform represents an unmatched opportunity to reach qualified prospects where they are already spending time.</p>
              <p>The shift happening in 2026 is from passive social media presence to active, AI-powered conversation funnels. Brands that treat Instagram as a two-way communication channel — rather than just a broadcast medium — are seeing 3–5x better ROI on every hour invested.</p>

              <h2
                id='the-core-strategy'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                The Core Strategy: From Engagement to Conversion
              </h2>
              <p>The most effective Instagram automation strategies follow a consistent three-step pattern: attract attention with content, capture intent with a trigger (comment, DM keyword, Story reply), then convert with a personalized automated conversation.</p>
              <p>What separates high-performing accounts from average ones is the quality of that third step — the automated conversation itself. Rule-based bots send the same canned response to everyone. AI-powered bots like PostEngage read the context of each interaction and craft replies that feel genuinely personal, dramatically improving conversion rates at every stage of the funnel.</p>

              <h2
                id='practical-implementation'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Practical Implementation: Getting Started
              </h2>
              <p>Start with one trigger and one goal. The most common mistake brands make is trying to automate everything at once — welcome messages, comment replies, story responses, and DM sequences simultaneously. The result is a confusing mess.</p>
              <p>Instead, pick the trigger that aligns with your highest-volume touchpoint. For most accounts, that is comment automation on Reels. Set up a single keyword trigger, write a compelling CTA in your caption, and measure results for two weeks before expanding. Once you see the conversion data, you will have a clear picture of where to invest next.</p>

              <h2
                id='advanced-tips'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Advanced Tips for Maximum Results
              </h2>
              <p>Once your baseline automation is running, layer in AI personalization. PostEngage allows you to train a custom AI model on your brand voice — feeding it examples of your past replies, your tone guidelines, and your product knowledge. The result is an AI that responds to nuanced questions the way you would, not the way a generic chatbot would.</p>
              <p>Also use time-window scheduling to match your automation to your audience's active hours. A bot that replies at 3am to someone in your target timezone creates a better first impression than one that batches responses at irregular times. Even small improvements in response quality and timing compound into significant conversion rate gains over weeks and months.</p>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>Start Automating Your Instagram Today</h3>
                <p className='mb-6'>Join thousands of brands using PostEngage to turn Instagram engagement into revenue.</p>
                <Link href='https://app.postengage.ai/signup'>
                  <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                    Get Started Free <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                </Link>
              </div>
            </article>

            <aside className='hidden lg:block lg:col-span-2 lg:sticky lg:top-32 lg:self-start'>
              <div className='flex flex-col gap-4 items-center'>
                <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2'>Share</p>
                <SocialShareButtons
                  url='https://postengage.ai/blog/instagram-automation-case-study-ecommerce'
                  title='Case Study: How One E-commerce Brand Got 847 Leads from Instagram in 30 Days' />
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

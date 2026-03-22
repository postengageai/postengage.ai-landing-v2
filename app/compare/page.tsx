import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Bot, Monitor } from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'PostEngage vs Competitors — Instagram Automation Comparison | PostEngage.ai',
  description:
    'Compare PostEngage.ai with ManyChat, Chatfuel, IGDM Pro, and other Instagram automation tools. See features, pricing, and why creators switch to PostEngage.',
  openGraph: {
    title:
      'PostEngage vs Competitors — Instagram Automation Comparison | PostEngage.ai',
    description:
      'Compare PostEngage.ai with ManyChat, Chatfuel, IGDM Pro, and other Instagram automation tools. See features, pricing, and why creators switch to PostEngage.',
    type: 'website',
    url: 'https://postengage.ai/compare',
  },
  alternates: {
    canonical: 'https://postengage.ai/compare',
  },
};

const comparisons = [
  {
    competitor: 'ManyChat',
    slug: 'postengage-vs-manychat',
    icon: Bot,
    tagline: 'AI-native replies vs flow-based chatbots',
    highlights: [
      'Pay-per-use vs monthly subscriptions',
      'Voice DNA that sounds like you',
      'INR pricing for Indian creators',
    ],
  },
  {
    competitor: 'Chatfuel',
    slug: 'postengage-vs-chatfuel',
    icon: Zap,
    tagline: 'Instagram-first vs multi-platform chatbot builder',
    highlights: [
      'AI-powered vs rule-based responses',
      'Built specifically for Instagram',
      'No complex flow builder needed',
    ],
  },
  {
    competitor: 'IGDM Pro',
    slug: 'postengage-vs-igdm-pro',
    icon: Monitor,
    tagline: 'Cloud AI automation vs desktop DM manager',
    highlights: [
      'Cloud-based vs desktop-only',
      'AI auto-replies vs manual messaging',
      'Analytics & ROI tracking included',
    ],
  },
];

export default function ComparePage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl text-center'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground'>
              Comparisons
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              How PostEngage compares
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-muted-foreground'>
              Choosing the right Instagram automation tool matters. See how
              PostEngage.ai stacks up against the most popular alternatives on
              features, pricing, and ease of use.
            </p>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <div className='grid gap-6 md:grid-cols-3'>
              {comparisons.map(item => (
                <Link
                  key={item.slug}
                  href={`/compare/${item.slug}`}
                  className='group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg'
                >
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10'>
                    <item.icon className='h-6 w-6 text-primary' />
                  </div>

                  <h2 className='text-xl font-semibold'>
                    PostEngage vs {item.competitor}
                  </h2>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    {item.tagline}
                  </p>

                  <ul className='mt-6 space-y-2'>
                    {item.highlights.map(h => (
                      <li
                        key={h}
                        className='flex items-start gap-2 text-sm text-muted-foreground'
                      >
                        <span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary' />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className='mt-6 flex items-center gap-1 text-sm font-medium text-primary'>
                    Read comparison
                    <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Alternatives Link */}
        <section className='mt-16 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <Link
              href='/alternatives/instagram-automation-tools'
              className='group flex items-center justify-between rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg'
            >
              <div>
                <h2 className='text-xl font-semibold'>
                  Best Instagram Automation Tools in 2026
                </h2>
                <p className='mt-2 text-muted-foreground'>
                  A comprehensive guide comparing the top 6 Instagram automation
                  tools with pros, cons, and pricing.
                </p>
              </div>
              <ArrowRight className='h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 text-center'>
            <h2 className='text-3xl font-bold'>
              Ready to see the difference yourself?
            </h2>
            <p className='mx-auto mt-4 max-w-lg text-muted-foreground'>
              Start with 100 free credits. No credit card required. Set up in
              under 2 minutes.
            </p>
            <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center'>
              <Button size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>
                  Try PostEngage Free
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <Link href='/pricing'>View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

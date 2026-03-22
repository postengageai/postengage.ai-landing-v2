import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight, Brain, Mic, Instagram } from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'PostEngage vs Chatfuel — Instagram Automation Comparison | PostEngage.ai',
  description:
    'Compare PostEngage.ai vs Chatfuel for Instagram automation. See how AI-native replies with Voice DNA compare to rule-based chatbot flows across features, pricing, and ease of use.',
  openGraph: {
    title: 'PostEngage vs Chatfuel — Instagram Automation Comparison',
    description:
      'Compare PostEngage.ai vs Chatfuel for Instagram automation. AI-native replies vs rule-based chatbot flows.',
    type: 'website',
    url: 'https://postengage.ai/compare/postengage-vs-chatfuel',
  },
  alternates: {
    canonical: 'https://postengage.ai/compare/postengage-vs-chatfuel',
  },
};

const featureComparison = [
  {
    feature: 'AI-Powered Replies',
    postengage: true,
    competitor: false,
    note: 'Chatfuel uses rule-based chatbot flows',
  },
  {
    feature: 'Voice DNA (sounds like you)',
    postengage: true,
    competitor: false,
    note: 'PostEngage learns your unique writing style',
  },
  {
    feature: 'Instagram-Specific Features',
    postengage: true,
    competitor: 'limited' as const,
    note: 'Chatfuel is multi-platform, not Instagram-optimized',
  },
  {
    feature: 'Pay-per-use Pricing',
    postengage: true,
    competitor: false,
    note: 'Chatfuel charges monthly subscriptions',
  },
  {
    feature: 'INR Pricing',
    postengage: true,
    competitor: false,
    note: 'Native pricing in Indian Rupees',
  },
  {
    feature: 'Comment Auto-Reply',
    postengage: true,
    competitor: true,
    note: 'Both support automated comment responses',
  },
  {
    feature: 'DM Automation',
    postengage: true,
    competitor: true,
    note: 'Both support automated direct messages',
  },
  {
    feature: 'No Flow Builder Required',
    postengage: true,
    competitor: false,
    note: 'Chatfuel requires building conversation flows',
  },
  {
    feature: 'Content Scheduler',
    postengage: true,
    competitor: false,
    note: 'Schedule Instagram posts directly',
  },
  {
    feature: 'ROI Dashboard',
    postengage: true,
    competitor: false,
    note: 'Track revenue impact of automation',
  },
  {
    feature: 'No Credit Card Required',
    postengage: true,
    competitor: false,
    note: 'Start free without payment details',
  },
];

function StatusCell({ value }: { value: boolean | string | 'limited' }) {
  if (value === true) {
    return (
      <span className='inline-flex items-center gap-1.5 text-green-500'>
        <Check className='h-5 w-5' />
        <span className='sr-only'>Yes</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className='inline-flex items-center gap-1.5 text-red-500'>
        <X className='h-5 w-5' />
        <span className='sr-only'>No</span>
      </span>
    );
  }
  if (value === 'limited') {
    return <span className='text-sm text-yellow-500 font-medium'>Limited</span>;
  }
  return <span className='text-sm text-muted-foreground'>{value}</span>;
}

const switchReasons = [
  {
    icon: Brain,
    title: 'AI-native, not rule-based',
    description:
      'Chatfuel requires you to build complex conversation flows with triggers and conditions. PostEngage uses AI to understand context and reply naturally without any flow building.',
  },
  {
    icon: Mic,
    title: 'Voice DNA keeps it authentic',
    description:
      'Every reply PostEngage sends sounds like you wrote it. Chatfuel bots sound like bots. Your audience knows the difference.',
  },
  {
    icon: Instagram,
    title: 'Built for Instagram, not bolted on',
    description:
      'Chatfuel spreads across Facebook, Instagram, WhatsApp, and websites. PostEngage is purpose-built for Instagram, with features like comment-to-DM flows and content scheduling.',
  },
];

export default function PostEngageVsChatfuel() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PostEngage.ai',
    description:
      'AI-powered Instagram automation that sounds like you. Compare with Chatfuel.',
    url: 'https://postengage.ai',
    brand: { '@type': 'Brand', name: 'PostEngage.ai' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier with 100 credits. Pay-per-use pricing.',
    },
  };

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl text-center'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground'>
              Comparison
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              PostEngage vs Chatfuel
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-muted-foreground'>
              Chatfuel is a multi-platform chatbot builder with rule-based
              flows. PostEngage is an AI-native Instagram automation tool with
              Voice DNA. Here is a detailed comparison to help you choose.
            </p>

            {/* Brand pills */}
            <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8'>
              <div className='flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3'>
                <div className='h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-lg font-bold text-primary'>
                  P
                </div>
                <div className='text-left'>
                  <div className='font-semibold'>PostEngage.ai</div>
                  <div className='text-xs text-muted-foreground'>
                    AI-native Instagram automation
                  </div>
                </div>
              </div>
              <span className='text-2xl font-bold text-muted-foreground'>
                vs
              </span>
              <div className='flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-3'>
                <div className='h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground'>
                  C
                </div>
                <div className='text-left'>
                  <div className='font-semibold'>Chatfuel</div>
                  <div className='text-xs text-muted-foreground'>
                    Multi-platform chatbot builder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold text-center mb-10'>
              Feature-by-Feature Comparison
            </h2>

            {/* Desktop Table */}
            <div className='hidden md:block overflow-hidden rounded-xl border border-border'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b border-border bg-muted/50'>
                    <th className='px-6 py-4 text-left text-sm font-medium text-muted-foreground'>
                      Feature
                    </th>
                    <th className='px-6 py-4 text-center text-sm font-medium text-primary'>
                      PostEngage.ai
                    </th>
                    <th className='px-6 py-4 text-center text-sm font-medium text-muted-foreground'>
                      Chatfuel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i < featureComparison.length - 1
                          ? 'border-b border-border'
                          : ''
                      }
                    >
                      <td className='px-6 py-4'>
                        <div className='font-medium text-sm'>{row.feature}</div>
                        <div className='text-xs text-muted-foreground mt-0.5'>
                          {row.note}
                        </div>
                      </td>
                      <td className='px-6 py-4 text-center'>
                        <StatusCell value={row.postengage} />
                      </td>
                      <td className='px-6 py-4 text-center'>
                        <StatusCell value={row.competitor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className='space-y-3 md:hidden'>
              {featureComparison.map(row => (
                <div
                  key={row.feature}
                  className='rounded-xl border border-border bg-card p-4'
                >
                  <div className='font-medium text-sm mb-3'>{row.feature}</div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col items-center gap-1 rounded-lg bg-primary/5 p-3'>
                      <span className='text-xs text-muted-foreground'>
                        PostEngage
                      </span>
                      <StatusCell value={row.postengage} />
                    </div>
                    <div className='flex flex-col items-center gap-1 rounded-lg bg-muted/50 p-3'>
                      <span className='text-xs text-muted-foreground'>
                        Chatfuel
                      </span>
                      <StatusCell value={row.competitor} />
                    </div>
                  </div>
                  <p className='text-xs text-muted-foreground mt-2'>
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold text-center mb-10'>
              Pricing Comparison
            </h2>
            <div className='grid gap-6 md:grid-cols-2'>
              <div className='rounded-xl border-2 border-primary/30 bg-primary/5 p-8'>
                <h3 className='text-lg font-semibold text-primary'>
                  PostEngage.ai
                </h3>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Pay-per-use credits
                </p>
                <ul className='mt-6 space-y-3'>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                    100 free credits to start
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                    Buy credit packs when needed
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                    No monthly commitment
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                    INR pricing available
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                    No credit card required
                  </li>
                </ul>
              </div>
              <div className='rounded-xl border border-border bg-card p-8'>
                <h3 className='text-lg font-semibold'>Chatfuel</h3>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Monthly subscriptions
                </p>
                <ul className='mt-6 space-y-3'>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-green-500' />
                    Free trial available
                  </li>
                  <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                    <X className='mt-0.5 h-4 w-4 shrink-0 text-red-500' />
                    Business plan starts at $14.39/month
                  </li>
                  <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                    <X className='mt-0.5 h-4 w-4 shrink-0 text-red-500' />
                    Enterprise plan at $300/month
                  </li>
                  <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                    <X className='mt-0.5 h-4 w-4 shrink-0 text-red-500' />
                    USD-only pricing
                  </li>
                  <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                    <X className='mt-0.5 h-4 w-4 shrink-0 text-red-500' />
                    Credit card required for paid plans
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Creators Switch */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold text-center mb-4'>
              Why Creators Switch to PostEngage
            </h2>
            <p className='text-center text-muted-foreground mb-10 max-w-2xl mx-auto'>
              Three key reasons creators move from Chatfuel to PostEngage for
              their Instagram automation.
            </p>
            <div className='grid gap-6 md:grid-cols-3'>
              {switchReasons.map(reason => (
                <div
                  key={reason.title}
                  className='rounded-xl border border-border bg-card p-6'
                >
                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                    <reason.icon className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='font-semibold'>{reason.title}</h3>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 text-center'>
            <h2 className='text-3xl font-bold'>Try PostEngage Free</h2>
            <p className='mx-auto mt-4 max-w-lg text-muted-foreground'>
              Start with 100 free credits. No credit card required. No complex
              flow builders to learn. Set up in under 2 minutes.
            </p>
            <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center'>
              <Button size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>
                  Get Started Free
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

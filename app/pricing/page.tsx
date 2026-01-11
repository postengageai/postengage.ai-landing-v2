import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import {
  Check,
  Zap,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  TrendingUp,
  Bot,
} from 'lucide-react';
import Link from 'next/link';
import {
  CREDIT_PACKS,
  CREDIT_COSTS,
  calculateActions,
} from '@/lib/config/credit-pricing';

export default function PricingPage() {
  const usageExamples = [
    {
      persona: 'Small Creator',
      followers: '5K-10K',
      commentsPerDay: '10-20',
      creditsPerMonth: '~300',
      recommendation: 'Starter Pack',
    },
    {
      persona: 'Growing Influencer',
      followers: '25K-50K',
      commentsPerDay: '40-80',
      creditsPerMonth: '~1,200',
      recommendation: 'Pro Pack',
    },
    {
      persona: 'Brand / Agency',
      followers: '100K+',
      commentsPerDay: '150+',
      creditsPerMonth: '~5,000+',
      recommendation: 'Business Pack',
    },
  ];

  const faqs = [
    {
      q: 'Do credits expire?',
      a: 'No. Credits never expire. Use them at your own pace - today, next month, or next year.',
    },
    {
      q: "What's the difference between basic and AI actions?",
      a: `Basic actions (reply/DM with templates) cost ${CREDIT_COSTS.REPLY_COMMENT} credits. AI-powered personalized replies cost ${CREDIT_COSTS.AI_REPLY_COMMENT} credits.`,
    },
    {
      q: 'Can I get a refund?',
      a: 'Credits are non-refundable once purchased, but unused credits stay in your account forever.',
    },
    {
      q: 'What if I run out of credits?',
      a: "Automations pause until you add more. You'll get a notification before running low.",
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes! New accounts get 50 free credits to test the service - enough for 25 basic actions or 12 AI actions.',
    },
    {
      q: 'Do you support UPI / Indian payments?',
      a: 'We support UPI, cards, net banking, and all major Indian payment methods via Razorpay.',
    },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6 mb-20'>
          <div className='mx-auto max-w-4xl text-center'>
            <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
              <Zap className='w-3.5 h-3.5' />
              Simple Pricing
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6'>
              Simple, credit-based pricing
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Pay for what you use. No subscriptions. No surprises.
            </p>
          </div>
        </section>

        {/* Credit Explanation Card */}
        <section className='px-4 sm:px-6 mb-20'>
          <div className='mx-auto max-w-4xl'>
            <div className='rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-8 sm:p-10'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center'>
                  <Sparkles className='w-7 h-7 text-primary' />
                </div>
                <div>
                  <h2 className='text-xl font-semibold mb-1'>
                    How credits work
                  </h2>
                  <p className='text-muted-foreground'>
                    Simple and transparent pricing per action
                  </p>
                </div>
              </div>

              <div className='grid gap-4 sm:grid-cols-2'>
                {/* Basic Actions */}
                <div className='rounded-xl border border-border bg-background/50 p-5'>
                  <h3 className='font-medium mb-4 flex items-center gap-2'>
                    <MessageCircle className='w-4 h-4 text-muted-foreground' />
                    Basic Actions
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-muted-foreground'>
                        Comment Reply
                      </span>
                      <span className='font-semibold'>
                        {CREDIT_COSTS.REPLY_COMMENT} credits
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-muted-foreground'>
                        Private Reply (DM)
                      </span>
                      <span className='font-semibold'>
                        {CREDIT_COSTS.PRIVATE_REPLY} credits
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-muted-foreground'>
                        Auto DM
                      </span>
                      <span className='font-semibold'>
                        {CREDIT_COSTS.SEND_DM} credits
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI-Powered Actions */}
                <div className='rounded-xl border border-primary/30 bg-primary/5 p-5'>
                  <h3 className='font-medium mb-4 flex items-center gap-2 text-primary'>
                    <Bot className='w-4 h-4' />
                    AI-Powered Actions
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-muted-foreground'>
                        AI Comment Reply
                      </span>
                      <span className='font-semibold text-primary'>
                        {CREDIT_COSTS.AI_REPLY_COMMENT} credits
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-muted-foreground'>
                        AI Private Reply
                      </span>
                      <span className='font-semibold text-primary'>
                        {CREDIT_COSTS.AI_PRIVATE_REPLY} credits
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-muted-foreground'>
                        AI DM
                      </span>
                      <span className='font-semibold text-primary'>
                        {CREDIT_COSTS.AI_SEND_DM} credits
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className='text-sm text-muted-foreground mt-6 text-center'>
                AI actions cost +2 credits more because they use advanced
                language models to personalize each reply
              </p>
            </div>
          </div>
        </section>

        {/* Credit Packs */}
        <section className='px-4 sm:px-6 mb-20'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-4'>
              Choose your pack
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-xl mx-auto'>
              Buy once, use anytime. Credits never expire.
            </p>

            <div className='grid gap-6 lg:grid-cols-3'>
              {CREDIT_PACKS.map(pack => {
                const perCredit = pack.price / pack.credits;
                const basicActions = calculateActions(pack.credits, false);
                const aiActions = calculateActions(pack.credits, true);

                return (
                  <div
                    key={pack.id}
                    className={`relative group rounded-2xl border p-8 transition-all duration-300 hover:translate-y-[-4px] ${
                      pack.popular
                        ? 'border-primary/50 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent shadow-xl shadow-primary/10'
                        : 'border-border bg-card hover:border-border/80 hover:shadow-lg'
                    }`}
                  >
                    {pack.popular && (
                      <div className='absolute -top-3.5 left-1/2 -translate-x-1/2'>
                        <div className='rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30'>
                          Most Popular
                        </div>
                      </div>
                    )}

                    {pack.savings && (
                      <div className='absolute top-4 right-4'>
                        <div className='rounded-full bg-success/10 text-success px-2.5 py-1 text-xs font-semibold'>
                          Save {pack.savings}
                        </div>
                      </div>
                    )}

                    <div>
                      {/* Pack Name & Description */}
                      <div className='mb-6'>
                        <h3 className='text-xl font-semibold mb-2'>
                          {pack.name}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {pack.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className='mb-6'>
                        <div className='flex items-baseline gap-1'>
                          <span className='text-4xl font-bold'>
                            ₹{pack.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className='text-sm text-muted-foreground mt-1'>
                          one-time purchase
                        </div>
                      </div>

                      {/* Credits & Actions */}
                      <div className='space-y-3 mb-8 pb-8 border-b border-border'>
                        <div className='flex items-center justify-between'>
                          <span className='text-muted-foreground'>Credits</span>
                          <span className='font-semibold'>
                            {pack.credits.toLocaleString()}
                          </span>
                        </div>
                        <div className='flex items-center justify-between'>
                          <span className='text-muted-foreground'>
                            Basic actions
                          </span>
                          <span className='font-semibold'>
                            {basicActions.toLocaleString()}
                          </span>
                        </div>
                        <div className='flex items-center justify-between'>
                          <span className='text-muted-foreground'>
                            AI actions
                          </span>
                          <span className='font-semibold text-primary'>
                            {aiActions.toLocaleString()}
                          </span>
                        </div>
                        <div className='flex items-center justify-between'>
                          <span className='text-muted-foreground'>
                            Per credit
                          </span>
                          <span className='text-sm'>
                            ₹{perCredit.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className='space-y-3 mb-8'>
                        {[
                          'Credits never expire',
                          'All features included',
                          'Priority support',
                        ].map((feature, i) => (
                          <div key={i} className='flex items-center gap-3'>
                            <div className='w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0'>
                              <Check className='w-3 h-3 text-success' />
                            </div>
                            <span className='text-sm text-muted-foreground'>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button
                        className='w-full'
                        variant={pack.popular ? 'default' : 'outline'}
                        size='lg'
                        asChild
                      >
                        <Link href='/signup'>
                          Get {pack.name}
                          <ArrowRight className='ml-2 h-4 w-4' />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Credits */}
        <section className='px-4 sm:px-6 mb-20'>
          <div className='mx-auto max-w-5xl'>
            <div className='rounded-2xl border border-border bg-card p-8 sm:p-12'>
              <h2 className='text-2xl font-bold text-center mb-4'>
                Why credits instead of subscriptions?
              </h2>
              <p className='text-center text-muted-foreground mb-12 max-w-xl mx-auto'>
                We believe in fair, transparent pricing that puts you in
                control.
              </p>

              <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                {[
                  {
                    icon: Shield,
                    title: 'No waste',
                    description:
                      'Only pay for actions taken. Slow month? Use fewer credits.',
                  },
                  {
                    icon: Clock,
                    title: 'No expiry',
                    description:
                      "Credits don't expire. Use them whenever you need.",
                  },
                  {
                    icon: Zap,
                    title: 'Full control',
                    description:
                      'See exactly what each action costs. No surprises.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Scale freely',
                    description: "Busy period? Buy more. Quiet time? Don't.",
                  },
                ].map((item, index) => (
                  <div key={index} className='text-center'>
                    <div className='w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                      <item.icon className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>{item.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className='px-4 sm:px-6 mb-20'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold text-center mb-4'>
              How many credits do I need?
            </h2>
            <p className='text-center text-muted-foreground mb-12'>
              Here's what typical usage looks like for different creator sizes.
            </p>

            <div className='rounded-2xl border border-border overflow-hidden'>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-6 py-4 text-left text-sm font-semibold'>
                        Creator Type
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-semibold'>
                        Followers
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-semibold'>
                        Daily Comments
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-semibold'>
                        Monthly Credits
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-semibold'>
                        Recommended
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usageExamples.map((example, index) => (
                      <tr key={index} className='border-t border-border'>
                        <td className='px-6 py-4 font-medium'>
                          {example.persona}
                        </td>
                        <td className='px-6 py-4 text-muted-foreground'>
                          {example.followers}
                        </td>
                        <td className='px-6 py-4 text-muted-foreground'>
                          {example.commentsPerDay}
                        </td>
                        <td className='px-6 py-4 text-muted-foreground'>
                          {example.creditsPerMonth}
                        </td>
                        <td className='px-6 py-4'>
                          <span className='inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary'>
                            {example.recommendation}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='px-4 sm:px-6 mb-20'>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-2xl font-bold text-center mb-12'>
              Frequently asked questions
            </h2>

            <div className='grid gap-4 sm:grid-cols-2'>
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6 hover:border-border/80 transition-colors'
                >
                  <div className='flex items-start gap-4'>
                    <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0'>
                      <HelpCircle className='w-4 h-4 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-medium mb-2'>{item.q}</h3>
                      <p className='text-sm text-muted-foreground leading-relaxed'>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <div className='rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 sm:p-14 text-center'>
              <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
                <Sparkles className='w-3.5 h-3.5' />
                Start Free
              </div>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
                Ready to automate your engagement?
              </h2>
              <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
                Start with 50 free credits. That's 25 basic actions or 12
                AI-powered replies to test the waters.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Button size='lg' className='min-w-[200px]' asChild>
                  <Link href='/signup'>
                    Get Started Free
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button size='lg' variant='outline' asChild>
                  <Link href='/demo'>Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

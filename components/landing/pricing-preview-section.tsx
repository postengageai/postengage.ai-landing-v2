import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Check,
  ArrowRight,
  Zap,
  Sparkles,
  MessageCircle,
  Send,
  Bot,
} from 'lucide-react';
import {
  CREDIT_PACKS,
  CREDIT_COSTS,
  calculateActions,
} from '@/lib/config/credit-pricing';

export function PricingPreviewSection() {
  return (
    <section id='pricing' className='py-20 sm:py-32 border-t border-border/50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
            <Zap className='w-3.5 h-3.5' />
            Simple Pricing
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-balance'>
            Simple, credit-based pricing
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Pay for what you use. No subscriptions. No surprises.
          </p>
        </div>

        {/* Credit Cost Breakdown */}
        <div className='mb-16'>
          <div className='rounded-2xl border border-border bg-card p-6 sm:p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center'>
                <Sparkles className='w-5 h-5 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold'>How credits work</h3>
                <p className='text-sm text-muted-foreground'>
                  Transparent pricing per action
                </p>
              </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {/* Basic Reply */}
              <div className='flex items-center gap-4 rounded-xl border border-border bg-background/50 px-4 py-3'>
                <div className='w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0'>
                  <MessageCircle className='w-4 h-4 text-muted-foreground' />
                </div>
                <div className='min-w-0'>
                  <div className='text-sm font-medium truncate'>
                    Comment Reply
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    {CREDIT_COSTS.REPLY_COMMENT} credits
                  </div>
                </div>
              </div>

              {/* AI Reply */}
              <div className='flex items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3'>
                <div className='w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0'>
                  <Bot className='w-4 h-4 text-primary' />
                </div>
                <div className='min-w-0'>
                  <div className='text-sm font-medium truncate'>AI Reply</div>
                  <div className='text-xs text-muted-foreground'>
                    {CREDIT_COSTS.AI_REPLY_COMMENT} credits
                  </div>
                </div>
              </div>

              {/* Basic DM */}
              <div className='flex items-center gap-4 rounded-xl border border-border bg-background/50 px-4 py-3'>
                <div className='w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0'>
                  <Send className='w-4 h-4 text-muted-foreground' />
                </div>
                <div className='min-w-0'>
                  <div className='text-sm font-medium truncate'>Auto DM</div>
                  <div className='text-xs text-muted-foreground'>
                    {CREDIT_COSTS.SEND_DM} credits
                  </div>
                </div>
              </div>

              {/* AI DM */}
              <div className='flex items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3'>
                <div className='w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0'>
                  <Bot className='w-4 h-4 text-primary' />
                </div>
                <div className='min-w-0'>
                  <div className='text-sm font-medium truncate'>AI DM</div>
                  <div className='text-xs text-muted-foreground'>
                    {CREDIT_COSTS.AI_SEND_DM} credits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
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
                    <h3 className='text-xl font-semibold mb-2'>{pack.name}</h3>
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
                      <span className='text-muted-foreground'>AI actions</span>
                      <span className='font-semibold text-primary'>
                        {aiActions.toLocaleString()}
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-muted-foreground'>Per credit</span>
                      <span className='text-sm'>₹{perCredit.toFixed(2)}</span>
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

        {/* Features */}
        <div className='rounded-2xl border border-border bg-card/50 p-8 mt-6'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              '50 free credits to start',
              'Credits never expire',
              'No monthly commitment',
              'Bulk discounts available',
              'Cancel anytime',
              'Priority support',
            ].map((feature, i) => (
              <div key={i} className='flex items-center gap-3'>
                <div className='w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0'>
                  <Check className='w-3 h-3 text-success' />
                </div>
                <span className='text-sm text-muted-foreground'>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* See Full Pricing */}
        <div className='text-center mt-10'>
          <Button
            variant='ghost'
            className='text-muted-foreground hover:text-foreground'
            asChild
          >
            <Link href='/pricing'>
              See full pricing details
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

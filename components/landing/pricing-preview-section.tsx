'use client';

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
import { usePricing } from '@/hooks/use-pricing';
import { PricingCard } from '@/components/pricing/pricing-card';
import { Skeleton } from '@/components/ui/skeleton';

// Fallback costs if loading
const DEFAULT_COSTS = {
  REPLY_COMMENT: 2,
  AI_REPLY_COMMENT: 4,
  SEND_DM: 2,
  AI_SEND_DM: 4,
};

export function PricingPreviewSection() {
  const { data: pricing, isLoading } = usePricing();
  const costs = pricing?.costs || DEFAULT_COSTS;

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
                    {costs.REPLY_COMMENT} credits
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
                    {costs.AI_REPLY_COMMENT} credits
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
                    {costs.SEND_DM} credits
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
                    {costs.AI_SEND_DM} credits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid gap-6 lg:grid-cols-3'>
          {isLoading
            ? [1, 2, 3].map(i => (
                <div
                  key={i}
                  className='rounded-2xl border border-border bg-card p-8'
                >
                  <Skeleton className='h-8 w-1/2 mb-4' />
                  <Skeleton className='h-4 w-3/4 mb-8' />
                  <Skeleton className='h-12 w-1/3 mb-6' />
                  <div className='space-y-4'>
                    <Skeleton className='h-4 w-full' />
                    <Skeleton className='h-4 w-full' />
                    <Skeleton className='h-4 w-full' />
                  </div>
                  <Skeleton className='h-12 w-full mt-8' />
                </div>
              ))
            : pricing?.packs.map(pack => (
                <PricingCard key={pack.id} pack={pack} />
              ))}
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

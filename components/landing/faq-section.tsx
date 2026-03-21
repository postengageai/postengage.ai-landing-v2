'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── FAQ data ───────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How does PostEngage measure my follower growth?',
    a: 'When you connect Instagram, PostEngage captures a baseline snapshot of your account — follower count, engagement rate, average reach. Every day after, it tracks changes. The Growth Chart shows you the before vs after, with a line marking when your first automation activated.',
  },
  {
    q: 'Can PostEngage prove that it grew my followers?',
    a: 'PostEngage uses attribution confidence levels — High, Medium, and Low — based on the correlation between your automation activity and account growth. We never overclaim. High confidence means a strong temporal correlation between automation activity and follower or engagement gains. Medium and Low confidence are noted transparently.',
  },
  {
    q: 'How is time saved calculated?',
    a: 'PostEngage counts every comment reply, DM, and story reply your automations handle. Each action type has a time benchmark (comment reply: 1.5 min, DM: 3 min, story reply: 2 min). The total is shown weekly in your ROI widget, with your hourly rate applied for dollar value.',
  },
  {
    q: 'What is the PostEngage Impact Score?',
    a: 'Your Impact Score is the cumulative total of every lead captured, follower attributed, and hour saved since you connected your Instagram. It never resets — it only grows. The longer you use PostEngage, the more undeniable the number.',
  },
  {
    q: 'Does PostEngage work as a content scheduler too?',
    a: 'Yes. The Content Scheduler lets you schedule posts and link automations to them. When your scheduled post goes live, the linked automation activates automatically — ready to handle comments the moment they arrive.',
  },
  {
    q: 'Does PostEngage work with Instagram?',
    a: 'Yes — PostEngage is built exclusively for Instagram. It connects via the official Instagram API, meaning your account is safe and compliant. You can automate comment replies, DMs, and story replies.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. You get a 14-day free trial with no credit card required. You can connect your Instagram, run your first automations, and see your baseline captured — all before spending anything.',
  },
  {
    q: 'How quickly does PostEngage reply to comments?',
    a: "Typically within seconds of a comment appearing on your post. Instagram webhooks notify PostEngage in real-time, and your automation fires immediately. This speed is what Instagram's algorithm rewards with more reach.",
  },
] as const;

// ── FAQ item ───────────────────────────────────────────────────────────────────

interface FAQItemProps {
  readonly q: string;
  readonly a: string;
  readonly open: boolean;
  readonly onToggle: () => void;
}

function FAQItem({ q, a, open, onToggle }: FAQItemProps) {
  return (
    <div className='border-b border-border/50 last:border-0'>
      <button
        type='button'
        onClick={onToggle}
        className='flex w-full items-start justify-between py-5 text-left gap-4 hover:text-primary transition-colors'
      >
        <span className='text-sm font-medium text-foreground'>{q}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 mt-0.5',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-64 pb-5' : 'max-h-0'
        )}
      >
        <p className='text-sm text-muted-foreground leading-relaxed'>{a}</p>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className='py-16 sm:py-24 border-t border-border/50'>
      <div className='mx-auto max-w-3xl px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Frequently asked questions
          </h2>
          <p className='mt-4 text-muted-foreground'>
            Everything you need to know about PostEngage and how it grows your
            Instagram.
          </p>
        </div>

        <div className='rounded-2xl border border-border bg-card px-6'>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import {
  Check,
  X,
  Zap,
  IndianRupee,
  Clock,
  Users,
  Bot,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';
import { usePlatformStats } from '@/hooks/use-platform-stats';

const advantages = [
  {
    icon: IndianRupee,
    title: 'Local + global friendly',
    description:
      'INR pricing and UPI support for Indian creators, with workflows used by global teams too.',
  },
  {
    icon: Zap,
    title: 'Pay-per-use',
    description:
      'No monthly subscriptions. Buy credits when you need them, use them whenever.',
  },
  {
    icon: Bot,
    title: 'AI that sounds like you',
    description:
      'Our AI learns your tone. Replies feel authentic, not robotic or generic.',
  },
  {
    icon: Clock,
    title: 'Credits never expire',
    description: 'Slow month? No problem. Your credits stay valid forever.',
  },
  {
    icon: MessageCircle,
    title: 'Comment + DM automation',
    description:
      'Auto-reply to comments AND send DMs from one platform. Others charge extra.',
  },
  {
    icon: Users,
    title: 'Built by creators, for creators',
    description:
      'Created from real creator workflows: comments, inbox, and lead capture in one place.',
  },
];

export function ComparisonSection() {
  const ref = useTrackSectionView('comparison_section');
  const tableRef = useTrackSectionView('comparison_table_view');
  const { data: platformStats } = usePlatformStats();
  const activeUsers = platformStats?.active_users;

  const competitors = [
    {
      name: 'Manychat',
      pricing: '$15+/mo',
      pricingType: 'subscription',
      instagram: true,
      aiReplies: true,
      indianPayments: false,
      freeTier: 'Limited',
      support: 'Email only',
    },
    {
      name: 'SendPulse',
      pricing: '$12+/mo',
      pricingType: 'subscription',
      instagram: true,
      aiReplies: false,
      indianPayments: false,
      freeTier: 'Limited',
      support: 'Email only',
    },
    {
      name: 'InstantDM',
      pricing: '$29+/mo',
      pricingType: 'subscription',
      instagram: true,
      aiReplies: true,
      indianPayments: false,
      freeTier: 'No',
      support: 'Email only',
    },
    {
      name: 'PostEngageAI',
      pricing: 'Free + credits',
      pricingType: 'free_credits',
      instagram: true,
      aiReplies: true,
      indianPayments: true,
      freeTier: 'Free forever',
      support: 'Priority',
      highlighted: true,
    },
  ];

  return (
    <section ref={ref} className='py-20 sm:py-32 border-t border-border/50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
            <Zap className='w-3.5 h-3.5' />
            Why PostEngageAI?
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Automation that combines speed, control, and{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #a78bfa 0%, #6c47ff 100%)',
              }}
            >
              transparent pricing
            </span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Start free forever, then pay only for AI usage when your volume
            grows.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          ref={tableRef as React.RefObject<HTMLDivElement>}
          className='mb-20 overflow-hidden rounded-2xl border border-border/60 shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
        >
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-secondary/40'>
                  <th className='px-6 py-4 text-left text-sm font-semibold'>
                    Feature
                  </th>
                  {competitors.map(c => (
                    <th
                      key={c.name}
                      className={`px-4 py-4 text-center text-sm font-semibold cursor-default ${c.highlighted ? 'bg-primary/10' : ''}`}
                      onMouseEnter={() => {
                        sendGAEvent({
                          action: 'competitor_logo_hover',
                          category: 'content',
                          label: c.name,
                        });
                      }}
                    >
                      <div className={c.highlighted ? 'text-primary' : ''}>
                        {c.name}
                      </div>
                      {c.highlighted && (
                        <div className='mt-1 text-xs font-normal text-primary/70'>
                          ✓ Best choice
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'Pricing',
                    render: (c: (typeof competitors)[number]) => (
                      <>
                        <div
                          className={
                            c.highlighted ? 'font-semibold text-primary' : ''
                          }
                        >
                          {c.pricing}
                        </div>
                        <div className='text-xs text-muted-foreground mt-0.5'>
                          {c.pricingType === 'credits'
                            ? 'pay as you go'
                            : c.pricingType === 'free_credits'
                              ? 'free forever + usage'
                              : 'per month'}
                        </div>
                      </>
                    ),
                  },
                  {
                    label: 'Instagram Support',
                    render: (c: (typeof competitors)[number]) =>
                      c.instagram ? (
                        <Check className='w-5 h-5 text-success mx-auto' />
                      ) : (
                        <X className='w-5 h-5 text-muted-foreground/50 mx-auto' />
                      ),
                  },
                  {
                    label: 'AI-Powered Replies',
                    render: (c: (typeof competitors)[number]) =>
                      c.aiReplies ? (
                        <Check className='w-5 h-5 text-success mx-auto' />
                      ) : (
                        <X className='w-5 h-5 text-muted-foreground/50 mx-auto' />
                      ),
                  },
                  {
                    label: 'Indian Payments (UPI)',
                    render: (c: (typeof competitors)[number]) =>
                      c.indianPayments ? (
                        <Check className='w-5 h-5 text-success mx-auto' />
                      ) : (
                        <X className='w-5 h-5 text-muted-foreground/50 mx-auto' />
                      ),
                  },
                  {
                    label: 'Free Tier',
                    render: (c: (typeof competitors)[number]) => (
                      <span
                        className={
                          c.highlighted
                            ? 'font-semibold text-primary'
                            : 'text-muted-foreground'
                        }
                      >
                        {c.freeTier}
                      </span>
                    ),
                  },
                  {
                    label: 'Support',
                    render: (c: (typeof competitors)[number]) => (
                      <span
                        className={
                          c.highlighted
                            ? 'font-semibold text-primary'
                            : 'text-muted-foreground'
                        }
                      >
                        {c.support}
                      </span>
                    ),
                  },
                ].map(row => (
                  <tr key={row.label} className='border-t border-border/50'>
                    <td className='px-6 py-4 text-sm font-medium'>
                      {row.label}
                    </td>
                    {competitors.map(c => (
                      <td
                        key={c.name}
                        className={`px-4 py-4 text-center text-sm ${c.highlighted ? 'bg-primary/5' : ''}`}
                      >
                        {row.render(c)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-center mb-10'>
            Why creators choose PostEngageAI
          </h3>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {advantages.map((item, index) => (
              <div
                key={index}
                className='group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5'
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'>
                  <item.icon className='w-5 h-5 text-primary' />
                </div>
                <h4 className='font-semibold mb-2'>{item.title}</h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='text-center'>
          <p className='text-muted-foreground mb-6'>
            Join{' '}
            <span className='font-semibold text-foreground'>
              {activeUsers != null ? `${activeUsers}+` : 'hundreds of'}
            </span>{' '}
            creators already automating replies
          </p>
          <Button
            size='lg'
            className='font-semibold'
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              boxShadow: '0 0 24px #6c47ff4d',
            }}
            asChild
          >
            <Link href={`${APP_URL}/signup`}>
              Start free forever
              <Zap className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

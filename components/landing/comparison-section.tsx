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

const competitors = [
  {
    name: 'Manychat',
    pricing: '$15+/mo',
    pricingType: 'subscription',
    instagram: true,
    aiReplies: false,
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
    pricing: '₹499+',
    pricingType: 'credits',
    instagram: true,
    aiReplies: true,
    indianPayments: true,
    freeTier: '50 credits',
    support: 'Priority',
    highlighted: true,
  },
];

const advantages = [
  {
    icon: IndianRupee,
    title: 'Made for India',
    description:
      'INR pricing, UPI payments, Razorpay integration. No forex markup or hidden fees.',
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
      'We understand Indian creator economy. Features designed for your workflow.',
  },
];

export function ComparisonSection() {
  return (
    <section className='py-20 sm:py-32 border-t border-border/50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
            <Zap className='w-3.5 h-3.5' />
            Why PostEngageAI?
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-balance'>
            The only automation tool built for Indian creators
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            While others charge in dollars with monthly subscriptions, we offer
            INR pricing with pay-as-you-go credits.
          </p>
        </div>

        {/* Comparison Table */}
        <div className='mb-20 overflow-hidden rounded-2xl border border-border'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-muted/50'>
                  <th className='px-6 py-4 text-left text-sm font-semibold'>
                    Feature
                  </th>
                  {competitors.map(c => (
                    <th
                      key={c.name}
                      className={`px-4 py-4 text-center text-sm font-semibold ${c.highlighted ? 'bg-primary/10' : ''}`}
                    >
                      <div className={c.highlighted ? 'text-primary' : ''}>
                        {c.name}
                      </div>
                      {c.highlighted && (
                        <div className='mt-1 text-xs font-normal text-primary/80'>
                          You are here
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Pricing Row */}
                <tr className='border-t border-border'>
                  <td className='px-6 py-4 text-sm font-medium'>Pricing</td>
                  {competitors.map(c => (
                    <td
                      key={c.name}
                      className={`px-4 py-4 text-center text-sm ${c.highlighted ? 'bg-primary/5' : ''}`}
                    >
                      <div
                        className={
                          c.highlighted ? 'font-semibold text-primary' : ''
                        }
                      >
                        {c.pricing}
                      </div>
                      <div className='text-xs text-muted-foreground mt-0.5'>
                        {c.pricingType === 'credits' ? 'one-time' : 'per month'}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Instagram Row */}
                <tr className='border-t border-border'>
                  <td className='px-6 py-4 text-sm font-medium'>
                    Instagram Support
                  </td>
                  {competitors.map(c => (
                    <td
                      key={c.name}
                      className={`px-4 py-4 text-center ${c.highlighted ? 'bg-primary/5' : ''}`}
                    >
                      {c.instagram ? (
                        <Check className='w-5 h-5 text-success mx-auto' />
                      ) : (
                        <X className='w-5 h-5 text-muted-foreground mx-auto' />
                      )}
                    </td>
                  ))}
                </tr>

                {/* AI Replies Row */}
                <tr className='border-t border-border'>
                  <td className='px-6 py-4 text-sm font-medium'>
                    AI-Powered Replies
                  </td>
                  {competitors.map(c => (
                    <td
                      key={c.name}
                      className={`px-4 py-4 text-center ${c.highlighted ? 'bg-primary/5' : ''}`}
                    >
                      {c.aiReplies ? (
                        <Check className='w-5 h-5 text-success mx-auto' />
                      ) : (
                        <X className='w-5 h-5 text-muted-foreground mx-auto' />
                      )}
                    </td>
                  ))}
                </tr>

                {/* Indian Payments Row */}
                <tr className='border-t border-border'>
                  <td className='px-6 py-4 text-sm font-medium'>
                    Indian Payments (UPI)
                  </td>
                  {competitors.map(c => (
                    <td
                      key={c.name}
                      className={`px-4 py-4 text-center ${c.highlighted ? 'bg-primary/5' : ''}`}
                    >
                      {c.indianPayments ? (
                        <Check className='w-5 h-5 text-success mx-auto' />
                      ) : (
                        <X className='w-5 h-5 text-muted-foreground mx-auto' />
                      )}
                    </td>
                  ))}
                </tr>

                {/* Free Tier Row */}
                <tr className='border-t border-border'>
                  <td className='px-6 py-4 text-sm font-medium'>Free Tier</td>
                  {competitors.map(c => (
                    <td
                      key={c.name}
                      className={`px-4 py-4 text-center text-sm ${c.highlighted ? 'bg-primary/5' : ''}`}
                    >
                      <span
                        className={
                          c.highlighted
                            ? 'font-semibold text-primary'
                            : 'text-muted-foreground'
                        }
                      >
                        {c.freeTier}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Support Row */}
                <tr className='border-t border-border'>
                  <td className='px-6 py-4 text-sm font-medium'>Support</td>
                  {competitors.map(c => (
                    <td
                      key={c.name}
                      className={`px-4 py-4 text-center text-sm ${c.highlighted ? 'bg-primary/5' : ''}`}
                    >
                      <span
                        className={
                          c.highlighted
                            ? 'font-semibold text-primary'
                            : 'text-muted-foreground'
                        }
                      >
                        {c.support}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-center mb-12'>
            Why creators choose PostEngageAI
          </h3>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {advantages.map((item, index) => (
              <div
                key={index}
                className='rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors group'
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'>
                  <item.icon className='w-6 h-6 text-primary' />
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
            Join thousands of Indian creators who switched to PostEngageAI
          </p>
          <Button size='lg' asChild>
            <Link href={`${APP_URL}/signup`}>
              Start Free with 50 Credits
              <Zap className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

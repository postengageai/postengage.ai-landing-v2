import Image from 'next/image';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    metrics: [
      '+1,240 followers in 45 days',
      '4.1x engagement rate increase',
      '847 leads captured',
    ],
    quote:
      'I could finally see PostEngage was actually working — not just running.',
    author: 'Priya Sharma',
    role: 'Fashion Creator',
    niche: 'Fashion',
    avatar: '/indian-woman-fashion-creator.jpg',
  },
  {
    metrics: [
      '890 comments/week handled',
      '47 hours saved last month',
      '$2,350/month in time value',
    ],
    quote:
      "The AI actually uses my 'lol' and '😭' correctly. My audience thinks I'm just really on top of things.",
    author: 'Marcus Chen',
    role: 'Tech Reviewer',
    niche: 'Tech',
    avatar: '/asian-man-tech-youtuber.jpg',
  },
  {
    metrics: [
      '$12K extra revenue',
      'DM conversions up 40%',
      '300+ leads/month',
    ],
    quote:
      'Replies happen in seconds, not hours. This paid for itself day one.',
    author: 'Sofia Rodriguez',
    role: 'Course Creator',
    niche: 'Education',
    avatar: '/latina-woman-entrepreneur.jpg',
  },
] as const;

const AGGREGATE_STATS = [
  { value: '2.1M', label: 'automations fired' },
  { value: '48K', label: 'leads captured' },
  { value: '180K', label: 'hours saved' },
] as const;

export function TestimonialsSection() {
  return (
    <section className='py-16 sm:py-24 bg-secondary/30'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>
            Real results from{' '}
            <span className='text-primary'>real creators</span>
          </h2>
          <p className='mt-3 text-muted-foreground'>
            Metrics first. Quotes second. Numbers are the social proof.
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-6'>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className='relative rounded-xl border border-border bg-card p-6 flex flex-col'
            >
              {/* Niche tag */}
              <span className='inline-flex self-start rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-4'>
                {t.niche}
              </span>

              {/* Metrics — the real social proof */}
              <div className='space-y-2 mb-5'>
                {t.metrics.map(m => (
                  <div key={m} className='flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 rounded-full bg-success shrink-0' />
                    <span className='text-sm font-semibold text-foreground'>
                      {m}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className='text-sm text-muted-foreground italic flex-1 border-t border-border/50 pt-4'>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className='flex items-center gap-3 pt-4 mt-4 border-t border-border'>
                <Image
                  src={t.avatar}
                  alt={t.author}
                  width={36}
                  height={36}
                  className='rounded-full object-cover bg-secondary'
                />
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium'>{t.author}</p>
                  <p className='text-xs text-muted-foreground'>{t.role}</p>
                </div>
                <div className='flex gap-0.5'>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className='h-3 w-3 fill-primary text-primary'
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate stats banner */}
        <div className='mt-10 rounded-2xl border border-border bg-card/60 px-6 py-5'>
          <p className='text-center text-xs font-medium text-muted-foreground mb-4'>
            Across all PostEngage users this month
          </p>
          <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-16'>
            {AGGREGATE_STATS.map(({ value, label }) => (
              <div key={label} className='text-center'>
                <p className='text-3xl font-bold text-primary'>{value}</p>
                <p className='text-xs text-muted-foreground mt-0.5'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

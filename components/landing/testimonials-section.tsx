import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const STORIES = [
  {
    useCase: 'Fashion content creator with 45K followers',
    scenario:
      'Was spending 2+ hours daily replying to comments on Reels. Set up PostEngage auto-replies and DM automations for product inquiries.',
    outcome:
      'Cut reply time to under 15 minutes a day. Followers feel heard instantly, even at 2 AM.',
    niche: 'Fashion',
    avatar: '/indian-woman-fashion-creator.jpg',
  },
  {
    useCase: 'Tech reviewer running a YouTube + Instagram combo',
    scenario:
      'Gets 500+ comments per video drop. Used PostEngage Voice DNA to match casual tone with slang and emojis.',
    outcome:
      'Automated 80% of replies without followers noticing. More time for content, less time in comment sections.',
    niche: 'Tech',
    avatar: '/asian-man-tech-youtuber.jpg',
  },
  {
    useCase: 'Online course creator selling via Instagram DMs',
    scenario:
      'Needed a way to auto-send course links when people commented specific keywords. Set up keyword triggers + DM flows.',
    outcome:
      'DM conversion flow runs 24/7. No more manually sending links to every commenter.',
    niche: 'Education',
    avatar: '/latina-woman-entrepreneur.jpg',
  },
] as const;

const AGGREGATE_STATS = [
  { value: '1.2M+', label: 'replies sent' },
  { value: '8,200+', label: 'creators signed up' },
  { value: '47 hrs', label: 'avg time saved/month' },
] as const;

export function TestimonialsSection() {
  return (
    <section className='py-16 sm:py-24 bg-secondary/30'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>
            Early User <span className='text-primary'>Stories</span>
          </h2>
          <p className='mt-3 text-muted-foreground'>
            How creators are using PostEngage to reclaim their time.
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-6'>
          {STORIES.map((t, i) => (
            <div
              key={i}
              className='relative rounded-xl border border-border bg-card p-6 flex flex-col'
            >
              {/* Niche tag */}
              <span className='inline-flex self-start rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-4'>
                {t.niche}
              </span>

              {/* Use case */}
              <p className='text-sm font-semibold text-foreground mb-3'>
                {t.useCase}
              </p>

              {/* Scenario */}
              <div className='space-y-2 mb-4'>
                <p className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                  The problem
                </p>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {t.scenario}
                </p>
              </div>

              {/* Outcome */}
              <div className='space-y-2 flex-1 border-t border-border/50 pt-4'>
                <p className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                  The result
                </p>
                <p className='text-sm text-foreground leading-relaxed'>
                  {t.outcome}
                </p>
              </div>

              {/* Avatar row */}
              <div className='flex items-center gap-3 pt-4 mt-4 border-t border-border'>
                <Image
                  src={t.avatar}
                  alt={`${t.niche} creator`}
                  width={36}
                  height={36}
                  className='rounded-full object-cover bg-secondary'
                />
                <div className='flex-1 min-w-0'>
                  <p className='text-xs text-muted-foreground'>
                    {t.niche} creator
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className='mt-6 text-center text-xs text-muted-foreground/70'>
          Based on real user experiences. Names and photos are illustrative.{' '}
          <span className='text-primary'>
            Want to share yours? DM us @postengage_ai
          </span>
        </p>

        {/* Aggregate stats banner */}
        <div className='mt-10 rounded-2xl border border-border bg-card/60 px-6 py-5'>
          <p className='text-center text-xs font-medium text-muted-foreground mb-4'>
            Platform-wide stats
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

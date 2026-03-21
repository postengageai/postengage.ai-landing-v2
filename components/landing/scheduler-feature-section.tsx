import { Check, CalendarDays } from 'lucide-react';

const BULLETS = [
  'AI-powered best time to post — based on your own audience data',
  'Schedule images, videos, Reels, Stories, and carousels',
  'Link any automation to any scheduled post',
  'Post performance analytics: reach, engagement, saves — 30 min after publishing',
  'Bulk schedule via CSV (up to 100 posts)',
] as const;

// ── Calendar mockup ────────────────────────────────────────────────────────────

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

const MOCK_POSTS: Record<
  number,
  { time: string; status: 'published' | 'scheduled' | 'best' }
> = {
  1: { time: '9:00 AM', status: 'published' },
  3: { time: '7:00 PM', status: 'best' },
  5: { time: '12:00 PM', status: 'scheduled' },
  6: { time: '3:00 PM', status: 'scheduled' },
};

const STATUS_DOT: Record<string, string> = {
  published: 'bg-success',
  scheduled: 'bg-primary',
  best: 'bg-primary animate-pulse',
};

function CalendarMockup() {
  return (
    <div className='rounded-2xl border border-border bg-card p-4 shadow-lg'>
      {/* Header */}
      <div className='flex items-center justify-between mb-3'>
        <p className='text-sm font-semibold'>March 2026</p>
        <div className='flex items-center gap-1.5 text-xs text-success font-medium'>
          <span className='h-1.5 w-1.5 rounded-full bg-success' />
          Best time: Wed 7pm
        </div>
      </div>

      {/* Day headers */}
      <div className='grid grid-cols-7 mb-1'>
        {DAYS.map(d => (
          <div
            key={d}
            className='text-center text-[10px] text-muted-foreground py-1'
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className='grid grid-cols-7 gap-px'>
        {Array.from({ length: 7 }, (_, i) => {
          const post = MOCK_POSTS[i];
          return (
            <div
              key={i}
              className={`min-h-[60px] rounded-lg p-1.5 text-[10px] border ${
                i === 2
                  ? 'border-primary/40 bg-primary/5'
                  : 'border-transparent bg-muted/20'
              }`}
            >
              <span className='font-medium text-foreground'>{i + 17}</span>
              {post && (
                <div className='mt-1 flex items-center gap-1'>
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${STATUS_DOT[post.status]}`}
                  />
                  <span className='text-muted-foreground truncate'>
                    {post.time}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Linked automation pill */}
      <div className='mt-3 pt-3 border-t border-border/50'>
        <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary font-medium'>
          <span className='h-1.5 w-1.5 rounded-full bg-primary' />
          Linked: Comment Reply automation
        </div>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function SchedulerFeatureSection() {
  return (
    <section className='py-16 sm:py-24 border-t border-border/50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left: mockup */}
          <CalendarMockup />

          {/* Right: copy */}
          <div>
            <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
              <CalendarDays className='h-3.5 w-3.5' />
              Content Scheduler
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-balance'>
              Schedule posts. Then watch them{' '}
              <span className='text-primary'>
                work — with automation attached.
              </span>
            </h2>
            <p className='mt-4 text-muted-foreground leading-relaxed'>
              The only scheduler that connects your content to your automation.
              Schedule your post for Tuesday 7pm (PostEngage tells you
              that&apos;s your best slot). Then link an automation: when people
              comment, PostEngage replies automatically — and you see the
              results in your Impact Score.
            </p>
            <p className='mt-3 text-muted-foreground leading-relaxed'>
              Content + automation + analytics — in one place. No switching
              between Buffer and ManyChat.
            </p>
            <ul className='mt-6 space-y-2.5'>
              {BULLETS.map(b => (
                <li key={b} className='flex items-start gap-3 text-sm'>
                  <Check className='h-4 w-4 text-success shrink-0 mt-0.5' />
                  <span className='text-muted-foreground'>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

// ── Data ───────────────────────────────────────────────────────────────────────

const MILESTONES = [
  { icon: '🎯', text: 'A fitness creator just captured their 100th lead' },
  {
    icon: '👥',
    text: 'A DTC brand gained +50 followers this week via automations',
  },
  { icon: '💬', text: 'A beauty creator hit 1,000 automated conversations' },
  {
    icon: '✅',
    text: 'A solopreneur saved 8 hours this week — 320 replies handled',
  },
  { icon: '📈', text: 'An agency account saw 2.3x engagement rate increase' },
  {
    icon: '🏆',
    text: 'A course creator captured 50 leads in their first 7 days',
  },
  {
    icon: '🔥',
    text: 'A lifestyle creator sent 10,000 automated DMs this month',
  },
  {
    icon: '💡',
    text: 'A SaaS founder linked their scheduler post to an automation — 340 comments handled',
  },
  {
    icon: '🎯',
    text: 'A restaurant account captured 200 reservations via DM automation',
  },
  {
    icon: '⚡',
    text: 'A creator hit their first milestone: 100 automated replies',
  },
] as const;

// ── Ticker ─────────────────────────────────────────────────────────────────────

export function MilestoneTicker() {
  // Pure CSS marquee using animation — no JS needed for scrolling
  return (
    <section className='py-8 border-y border-border/40 bg-muted/10 overflow-hidden'>
      <div className='flex gap-0 whitespace-nowrap animate-[marquee_40s_linear_infinite]'>
        {/* Duplicate for seamless loop */}
        {[...MILESTONES, ...MILESTONES].map((m, i) => (
          <span
            key={i}
            className='inline-flex items-center gap-2 px-6 text-sm text-muted-foreground shrink-0'
          >
            <span className='text-base'>{m.icon}</span>
            {m.text}
            <span className='mx-4 text-border/60'>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

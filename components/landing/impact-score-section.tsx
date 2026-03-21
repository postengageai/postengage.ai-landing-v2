'use client';

import { useEffect, useRef, useState } from 'react';
import { Target, Users, Clock, DollarSign } from 'lucide-react';

// ── Count-up ───────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration: number, active: boolean): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

// ── Stat counter ───────────────────────────────────────────────────────────────

interface StatCounterProps {
  readonly icon: React.ElementType;
  readonly label: string;
  readonly value: number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly duration: number;
  readonly active: boolean;
  readonly color: string;
}

function StatCounter({
  icon: Icon,
  label,
  value,
  prefix = '',
  suffix = '',
  duration,
  active,
  color,
}: StatCounterProps) {
  const count = useCountUp(value, duration, active);
  return (
    <div className='flex items-center gap-4 py-4 border-b border-border/50 last:border-0'>
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}
      >
        <Icon className='h-5 w-5' />
      </div>
      <div className='flex-1'>
        <p className='text-sm text-muted-foreground'>{label}</p>
      </div>
      <p className='text-2xl font-bold text-foreground tabular-nums'>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function ImpactScoreSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className='py-16 sm:py-24 bg-secondary/30'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left: animated counters */}
          <div className='rounded-2xl border border-border bg-card p-6 shadow-lg'>
            <div className='mb-2'>
              <p className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                Your PostEngage Impact
              </p>
              <p className='text-xs text-muted-foreground/60 mt-0.5'>
                cumulative · since day one
              </p>
            </div>
            <div className='mt-4'>
              <StatCounter
                icon={Target}
                label='Leads captured (lifetime)'
                value={1203}
                duration={2000}
                active={active}
                color='bg-primary/10 text-primary'
              />
              <StatCounter
                icon={Users}
                label='Followers attributed'
                value={650}
                prefix='+'
                duration={1800}
                active={active}
                color='bg-info/10 text-info'
              />
              <StatCounter
                icon={Clock}
                label='Hours saved this month'
                value={264}
                suffix='h'
                duration={1600}
                active={active}
                color='bg-success/10 text-success'
              />
              <StatCounter
                icon={DollarSign}
                label='Value delivered'
                value={1320}
                prefix='$'
                duration={2200}
                active={active}
                color='bg-warning/10 text-warning'
              />
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
              Impact Score
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-balance'>
              A number that grows{' '}
              <span className='text-primary'>
                every day you use PostEngage.
              </span>
            </h2>
            <p className='mt-4 text-muted-foreground leading-relaxed'>
              Unlike tools that reset their stats monthly, PostEngage shows you
              the cumulative impact from day one. Every lead captured, every
              follower attributed, every hour saved — added to a running total.
            </p>
            <p className='mt-3 text-muted-foreground leading-relaxed'>
              The longer you use PostEngage, the more undeniable the value.
              Users who&apos;ve been active for 3+ months report an Impact Score
              they&apos;d never want to reset.
            </p>

            <div className='mt-8 grid grid-cols-2 gap-4'>
              {[
                {
                  stat: '3+ months',
                  label: 'avg time to see strong attribution',
                },
                { stat: '20x', label: 'avg ROI at $50/hr hourly rate' },
              ].map(({ stat, label }) => (
                <div
                  key={stat}
                  className='rounded-xl border border-border bg-card/50 p-4 text-center'
                >
                  <p className='text-2xl font-bold text-primary'>{stat}</p>
                  <p className='text-xs text-muted-foreground mt-1'>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

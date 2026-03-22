'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Users, Clock, Star } from 'lucide-react';

function useCountUp(target: number, duration = 2000, start = false): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return value;
}

const STATS = [
  {
    icon: MessageCircle,
    target: 1200000,
    suffix: '+',
    label: 'replies sent',
    format: (v: number) =>
      v >= 1000000
        ? `${(v / 1000000).toFixed(1)}M`
        : v >= 1000
          ? `${(v / 1000).toFixed(0)}K`
          : `${v}`,
  },
  {
    icon: Users,
    target: 8200,
    suffix: '+',
    label: 'creators',
    format: (v: number) =>
      v >= 1000 ? `${(v / 1000).toFixed(1)}K` : `${v}`,
  },
  {
    icon: Clock,
    target: 47,
    suffix: '',
    label: 'hours saved/month avg',
    format: (v: number) => `${v}`,
  },
  {
    icon: Star,
    target: 48,
    suffix: '',
    label: 'average rating',
    format: (v: number) => `${(v / 10).toFixed(1)}★`,
  },
] as const;

export function SocialProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const replies = useCountUp(1200000, 2000, visible);
  const creators = useCountUp(8200, 1800, visible);
  const hours = useCountUp(47, 1600, visible);
  const rating = useCountUp(48, 1400, visible);

  const values = [replies, creators, hours, rating];

  return (
    <section ref={ref} className='py-10 border-t border-border'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <p className='text-center text-xs uppercase tracking-widest text-muted-foreground mb-6'>
          Real numbers from real creators
        </p>
        <div className='flex items-center justify-center gap-8 sm:gap-12 flex-wrap'>
          {STATS.map((stat, i) => (
            <div key={stat.label} className='flex items-center gap-2.5'>
              <stat.icon className='h-5 w-5 text-primary shrink-0' />
              <div className='text-center'>
                <p className='text-xl sm:text-2xl font-bold text-foreground tabular-nums'>
                  {STATS[i].format(values[i])}
                  {stat.suffix}
                </p>
                <p className='text-xs text-muted-foreground'>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

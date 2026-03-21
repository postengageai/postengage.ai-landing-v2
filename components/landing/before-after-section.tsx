'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

// ── Animated growth chart ──────────────────────────────────────────────────────

// Fake follower data: flat before activation (index 6), then rising after
const DATA_POINTS = [
  1280,
  1295,
  1300,
  1308,
  1305,
  1310, // before PostEngage (indices 0–5)
  1320,
  1360,
  1410,
  1490,
  1580,
  1680,
  1790, // after activation (indices 6–12)
];
const ACTIVATION_INDEX = 6;
const W = 400;
const H = 180;
const PAD = { top: 20, right: 20, bottom: 30, left: 44 };

function scaleX(i: number, total: number) {
  return PAD.left + (i / (total - 1)) * (W - PAD.left - PAD.right);
}

function scaleY(v: number, min: number, max: number) {
  return PAD.top + (1 - (v - min) / (max - min)) * (H - PAD.top - PAD.bottom);
}

function buildPath(points: number[], min: number, max: number, count: number) {
  return points
    .slice(0, count)
    .map(
      (v, i) =>
        `${i === 0 ? 'M' : 'L'} ${scaleX(i, DATA_POINTS.length).toFixed(1)} ${scaleY(v, min, max).toFixed(1)}`
    )
    .join(' ');
}

function GrowthChartSVG({ progress }: { progress: number }) {
  const min = Math.min(...DATA_POINTS) - 40;
  const max = Math.max(...DATA_POINTS) + 40;
  const total = DATA_POINTS.length;
  const count = Math.max(2, Math.round(progress * total));
  const activationX = scaleX(ACTIVATION_INDEX, total);

  const yTicks = [1300, 1500, 1700];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className='w-full h-full'>
      {/* Before zone (grey shade) */}
      <rect
        x={PAD.left}
        y={PAD.top}
        width={activationX - PAD.left}
        height={H - PAD.top - PAD.bottom}
        fill='currentColor'
        className='text-muted/20'
      />

      {/* After zone (brand tint) */}
      <rect
        x={activationX}
        y={PAD.top}
        width={W - PAD.right - activationX}
        height={H - PAD.top - PAD.bottom}
        fill='currentColor'
        className='text-primary/5'
      />

      {/* Grid lines */}
      {yTicks.map(tick => {
        const y = scaleY(tick, min, max);
        return (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y}
              y2={y}
              stroke='currentColor'
              strokeWidth='0.5'
              className='text-border'
            />
            <text
              x={PAD.left - 6}
              y={y + 4}
              textAnchor='end'
              fontSize='9'
              fill='currentColor'
              className='text-muted-foreground'
            >
              {(tick / 1000).toFixed(1)}k
            </text>
          </g>
        );
      })}

      {/* X axis */}
      <line
        x1={PAD.left}
        x2={W - PAD.right}
        y1={H - PAD.bottom}
        y2={H - PAD.bottom}
        stroke='currentColor'
        strokeWidth='0.5'
        className='text-border'
      />

      {/* Activation reference line */}
      <line
        x1={activationX}
        x2={activationX}
        y1={PAD.top}
        y2={H - PAD.bottom}
        stroke='currentColor'
        strokeWidth='1.5'
        strokeDasharray='4 3'
        className='text-primary/70'
      />

      {/* "PostEngage activated" label */}
      {progress > 0.4 && (
        <g>
          <text
            x={activationX + 5}
            y={PAD.top + 10}
            fontSize='8'
            fill='currentColor'
            className='text-primary/80'
          >
            PostEngage
          </text>
          <text
            x={activationX + 5}
            y={PAD.top + 20}
            fontSize='8'
            fill='currentColor'
            className='text-primary/80'
          >
            activated
          </text>
        </g>
      )}

      {/* Before line (grey) */}
      {count > 0 && (
        <path
          d={buildPath(
            DATA_POINTS.slice(0, ACTIVATION_INDEX + 1),
            min,
            max,
            Math.min(count, ACTIVATION_INDEX + 1)
          )}
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-muted-foreground/50'
        />
      )}

      {/* After line (brand colour) */}
      {count > ACTIVATION_INDEX && (
        <path
          d={buildPath(
            DATA_POINTS.slice(ACTIVATION_INDEX),
            min,
            max,
            count - ACTIVATION_INDEX
          ).replace(
            'M',
            `M ${scaleX(ACTIVATION_INDEX, total).toFixed(1)} ${scaleY(DATA_POINTS[ACTIVATION_INDEX], min, max).toFixed(1)} L`
          )}
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-primary'
        />
      )}

      {/* Before / After labels */}
      <text
        x={PAD.left + 8}
        y={H - PAD.bottom - 6}
        fontSize='9'
        fill='currentColor'
        className='text-muted-foreground/60'
      >
        Before
      </text>
      {count > ACTIVATION_INDEX + 2 && (
        <text
          x={activationX + 10}
          y={H - PAD.bottom - 6}
          fontSize='9'
          fill='currentColor'
          className='text-primary/80'
        >
          After
        </text>
      )}
    </svg>
  );
}

// ── Main section ───────────────────────────────────────────────────────────────

const BULLETS = [
  'Follower growth tracked from day one',
  'Engagement rate before vs after automation',
  'Average reach per post, trending over time',
  'Attribution confidence: high / medium / low',
] as const;

export function BeforeAfterSection() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 2200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setProgress(p);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className='py-16 sm:py-24 border-t border-border/50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left: copy */}
          <div>
            <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
              Before vs After
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-balance'>
              Every Instagram tool tells you what happened.{' '}
              <span className='text-primary'>
                PostEngage shows you what changed.
              </span>
            </h2>
            <p className='mt-4 text-muted-foreground leading-relaxed'>
              The moment you connect Instagram, PostEngage captures a baseline
              snapshot: your follower count, engagement rate, average reach.
              That&apos;s your &ldquo;before.&rdquo;
            </p>
            <p className='mt-3 text-muted-foreground leading-relaxed'>
              Every day after, PostEngage tracks every metric. You always know
              the delta — with attribution: &ldquo;Your comment reply automation
              drove 847 conversations. Engagement rate increased 2.3x in the
              same period.&rdquo;
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

          {/* Right: animated chart */}
          <div className='rounded-2xl border border-border bg-card p-5 shadow-lg'>
            <div className='mb-3 flex items-center justify-between'>
              <p className='text-sm font-semibold text-foreground'>
                Follower Growth
              </p>
              <div className='flex items-center gap-4 text-xs text-muted-foreground'>
                <span className='flex items-center gap-1.5'>
                  <span className='h-2 w-6 rounded-full bg-muted-foreground/40 inline-block' />
                  Before
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='h-2 w-6 rounded-full bg-primary inline-block' />
                  After
                </span>
              </div>
            </div>
            <div className='h-[180px]'>
              <GrowthChartSVG progress={progress} />
            </div>
            <div className='mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground'>
              <span>90-day view</span>
              <span className='text-success font-medium'>
                +36.7% followers ↑
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

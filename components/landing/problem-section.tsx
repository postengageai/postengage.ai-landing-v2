'use client';

import {
  Clock,
  TrendingDown,
  AlertCircle,
  Users,
  LucideIcon,
} from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';

interface Problem {
  icon: LucideIcon;
  stat: string;
  label: string;
  description: string;
}

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
  const ref = useTrackSectionView(`problem_stat_card_${index + 1}`);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className='group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-6 hover:border-warning/40 transition-all duration-300 hover:-translate-y-0.5'
      onMouseEnter={() => {
        sendGAEvent({
          action: 'problem_stat_card_hover',
          category: 'content',
          label: problem.label,
        });
      }}
    >
      {/* Hover glow */}
      <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_left,#f59e0b0f_0%,transparent_70%)]' />
      {/* Top accent line */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warning/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative'>
        <div className='w-11 h-11 rounded-xl bg-warning/10 border border-warning/20 flex items-center justify-center mb-5'>
          <problem.icon className='w-5 h-5 text-warning' />
        </div>
        <div className='text-4xl font-bold text-foreground tracking-tight'>
          {problem.stat}
        </div>
        <div className='text-sm font-semibold text-foreground/80 mt-1.5'>
          {problem.label}
        </div>
        <div className='text-sm text-muted-foreground mt-2 leading-relaxed'>
          {problem.description}
        </div>
      </div>
    </div>
  );
}

export function ProblemSection() {
  const ref = useTrackSectionView('problem_section');
  const problems: Problem[] = [
    {
      icon: Clock,
      stat: '15+ hours',
      label: 'lost every week',
      description:
        'Manual replies become a second full-time job for creators and small teams.',
    },
    {
      icon: TrendingDown,
      stat: '80%',
      label: 'DMs unanswered',
      description:
        'Most incoming messages are missed in the first hour, where conversion intent is highest.',
    },
    {
      icon: AlertCircle,
      stat: '0.3s vs hours',
      label: 'response speed gap',
      description:
        'Fast replies win trust and sales. Slow replies push leads to competitors.',
    },
    {
      icon: Users,
      stat: '1,840',
      label: 'messages missed/week',
      description:
        'For active creators, unanswered comments and DMs quietly leak growth every week.',
    },
  ];

  return (
    <section ref={ref} className='py-20 sm:py-28 border-t border-border/50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/8 border border-warning/20 text-warning text-sm font-medium mb-5'>
            <AlertCircle className='w-4 h-4' />
            Honestly? Managing Instagram is exhausting
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Manual engagement is{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #f59e0b 0%, #ff6b35 100%)',
              }}
            >
              costing you growth
            </span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Every delayed reply hurts reach, trust, and conversion while your
            best leads cool off.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {problems.map((problem, i) => (
            <ProblemCard key={i} problem={problem} index={i} />
          ))}
        </div>

        {/* Bottom callout */}
        <div className='mt-10 mx-auto max-w-2xl rounded-2xl border border-warning/20 bg-warning/5 p-6 text-center'>
          <p className='text-sm font-medium text-warning/90'>
            💡 Creators using automation report up to{' '}
            <span className='font-bold text-warning'>
              47 hours saved per month
            </span>{' '}
            by removing manual reply work from their day.
          </p>
        </div>
      </div>
    </section>
  );
}

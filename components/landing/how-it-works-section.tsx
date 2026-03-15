'use client';

import { Link2, Sliders, Sparkles, Coffee, LucideIcon } from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';

interface Step {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  detail: string;
  trackId: string;
}

const steps: Step[] = [
  {
    icon: Link2,
    step: '01',
    title: 'Connect Instagram',
    description:
      'Secure OAuth connection via the official Meta API. We never store your password. Takes 30 seconds.',
    detail: 'Official Meta API · Zero credentials stored',
    trackId: 'step_1',
  },
  {
    icon: Sliders,
    step: '02',
    title: 'Set Your Voice',
    description:
      'Answer a few questions about your tone, style, and emoji habits. Our AI learns how you communicate in minutes.',
    detail: 'AI voice training · Learns your emojis & slang',
    trackId: 'step_2',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Activate Automation',
    description:
      'Choose which posts to monitor. Set DM triggers with keywords. Review or auto-approve replies.',
    detail: 'Visual flow builder · Keyword triggers · Review mode',
    trackId: 'step_3',
  },
  {
    icon: Coffee,
    step: '04',
    title: 'Relax & Grow',
    description:
      'Watch engagement happen automatically. Check your analytics dashboard. Focus on creating content.',
    detail: 'Real-time analytics · Growth tracking · 24/7 replies',
    trackId: 'step_4',
  },
];

function StepCard({ step }: { step: Step }) {
  const ref = useTrackSectionView(step.trackId);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className='relative group text-center'
    >
      <div className='relative z-10 w-16 h-16 rounded-2xl border border-border/60 bg-card flex items-center justify-center mx-auto mb-5 group-hover:border-primary/40 group-hover:bg-primary/8 transition-all duration-300 shadow-[0_2px_12px_oklch(0_0_0/0.2)]'>
        <step.icon className='w-6 h-6 text-primary' />
      </div>
      <span className='font-mono text-xs font-bold text-primary/60 tracking-widest uppercase'>
        Step {step.step}
      </span>
      <h3 className='mt-1.5 text-lg font-bold text-foreground'>{step.title}</h3>
      <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
        {step.description}
      </p>
      <div className='mt-3 inline-flex items-center gap-1.5 text-xs text-primary/70 bg-primary/8 border border-primary/15 rounded-full px-3 py-1'>
        {step.detail}
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const ref = useTrackSectionView('how_it_works');

  return (
    <section
      ref={ref}
      id='how-it-works'
      className='border-t border-border/50 bg-secondary/10 py-20 sm:py-32'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5'>
            <Sparkles className='w-4 h-4' />
            How It Works
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            From setup to autopilot{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, oklch(0.75 0.18 265) 0%, oklch(0.65 0.18 265) 100%)',
              }}
            >
              in 5 minutes
            </span>
          </h2>
          <p className='mx-auto mt-4 max-w-xl text-muted-foreground text-lg'>
            No complex configurations. No learning curve. Just connect and let
            AI handle the rest.
          </p>
        </div>

        {/* Steps grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative'>
          {/* Connection line (desktop) */}
          <div className='absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block' />
          {steps.map(step => (
            <StepCard key={step.step} step={step} />
          ))}
        </div>

        {/* Bottom trust note */}
        <div className='mt-16 text-center'>
          <div className='inline-flex flex-wrap items-center justify-center gap-4 px-5 py-3 rounded-xl border border-border/60 bg-card/50'>
            <div className='flex items-center gap-1.5'>
              <div className='w-2 h-2 rounded-full bg-success animate-pulse' />
              <span className='text-sm text-muted-foreground'>
                Average setup time:{' '}
                <span className='font-semibold text-foreground'>
                  4 minutes 32 seconds
                </span>
              </span>
            </div>
            <div className='w-px h-4 bg-border hidden sm:block' />
            <span className='text-sm text-muted-foreground'>
              First automated reply within{' '}
              <span className='font-semibold text-foreground'>10 minutes</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

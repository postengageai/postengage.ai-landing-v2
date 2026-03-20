'use client';

import { Link2, Sliders, Sparkles, LucideIcon } from 'lucide-react';
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
      'Connect with official Meta OAuth and choose which posts and inboxes to automate.',
    detail: 'Official Meta API · Zero credentials stored',
    trackId: 'step_1',
  },
  {
    icon: Sliders,
    step: '02',
    title: 'Choose Triggers',
    description:
      'Set comment keywords like "price" or "link" and map each trigger to a DM or reply flow.',
    detail: 'Keyword triggers · DM templates · Rule-based replies',
    trackId: 'step_2',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Go Live',
    description:
      'Turn on automation and start replying in 0.3 seconds while your AI voice handles personalisation.',
    detail: 'Auto comment reply · Auto DM · AI voice replies',
    trackId: 'step_3',
  },
];

function StepCard({ step }: { step: Step }) {
  const ref = useTrackSectionView(step.trackId);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className='relative group text-center'
    >
      <div className='relative z-10 w-16 h-16 rounded-2xl border border-border/60 bg-card flex items-center justify-center mx-auto mb-5 group-hover:border-primary/40 group-hover:bg-primary/8 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.2)]'>
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
            From chaos to autopilot{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #a78bfa 0%, #6c47ff 100%)',
              }}
            >
              in 3 steps
            </span>
          </h2>
          <p className='mx-auto mt-4 max-w-xl text-muted-foreground text-lg'>
            Connect once, set your triggers, and let PostEngage.ai handle
            replies and lead capture 24/7.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
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
                  under 3 minutes
                </span>
              </span>
            </div>
            <div className='w-px h-4 bg-border hidden sm:block' />
            <span className='text-sm text-muted-foreground'>
              First automated reply within{' '}
              <span className='font-semibold text-foreground'>0.3 seconds</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

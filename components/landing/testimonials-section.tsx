'use client';

import { BadgeCheck, ShieldCheck, Lock, Globe, Zap } from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';
const trustSignals = [
  {
    icon: BadgeCheck,
    title: 'Meta-ready infrastructure',
    description:
      'Built for official Instagram API workflows and policy-safe automation patterns.',
  },
  {
    icon: ShieldCheck,
    title: 'Policy-first automation',
    description:
      'Every flow is designed around platform limits, safe pacing, and account protection.',
  },
  {
    icon: Lock,
    title: 'Security-focused architecture',
    description:
      'OAuth-based account connection, scoped access, and production-grade backend controls.',
  },
  {
    icon: Globe,
    title: 'Built for global creators',
    description:
      'Used across 21+ countries with geo-aware pricing and creator-first onboarding.',
  },
  {
    icon: Zap,
    title: 'Reliable partner stack',
    description:
      'Cloud-native services and verified APIs to keep automations stable at scale.',
  },
];

export function TrustPartnersSection() {
  const ref = useTrackSectionView('trust_partners_section');
  return (
    <section
      ref={ref}
      id='trust'
      className='py-20 sm:py-32 border-t border-border/50'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5'>
            <BadgeCheck className='w-4 h-4' />
            Trusted Technology
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Built on trusted APIs and{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #a78bfa 0%, #6c47ff 100%)',
              }}
            >
              partner-grade infrastructure
            </span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            We are focused on reliable automation with official Meta-compatible
            workflows, secure integrations, and a stack designed for scale.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {trustSignals.map(item => (
            <button
              key={item.title}
              type='button'
              className='group relative flex flex-col h-full rounded-2xl border border-border/60 bg-card overflow-hidden p-6 text-left hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
              onClick={() => {
                sendGAEvent({
                  action: 'trust_signal_click',
                  category: 'content',
                  label: item.title,
                });
              }}
            >
              <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_left,#6c47ff0d_0%,transparent_70%)]' />
              <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative flex flex-col h-full'>
                <div className='w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4'>
                  <item.icon className='w-5 h-5 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {item.description}
                </p>
                <div className='mt-4 inline-flex items-center gap-2 text-xs text-primary/80'>
                  <span>Learn more</span>
                  <span aria-hidden='true'>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className='text-center text-xs text-muted-foreground mt-10 opacity-70'>
          Official Meta API compatible • Security-first implementation • Built
          for long-term reliability
        </p>
      </div>
    </section>
  );
}

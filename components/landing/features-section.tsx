'use client';

import {
  Shield,
  Gauge,
  GitBranch,
  Calendar,
  BarChart3,
  Repeat2,
  BrainCircuit,
} from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';

export function FeaturesSection() {
  const ref = useTrackSectionView('features_section');

  return (
    <section ref={ref} className='py-20 sm:py-28 border-t border-border/50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5'>
            <BrainCircuit className='w-4 h-4' />
            Platform Features
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Everything you need.{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #a78bfa 0%, #6c47ff 100%)',
              }}
            >
              Nothing you don&apos;t.
            </span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            A complete Instagram growth platform — from AI replies to analytics
            to scheduling.
          </p>
        </div>

        {/* Bento grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {/* Large card: AI Voice DNA */}
          <div className='lg:col-span-2 group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-7 hover:border-primary/40 transition-all duration-300'>
            <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_right,#6c47ff0f_0%,transparent_60%)]' />
            <div className='relative'>
              <div className='w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5'>
                <BrainCircuit className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-2'>AI Voice DNA</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Our AI analyzes your previous comments, captions, and DMs to
                learn your unique communication style. It picks up your emojis,
                catchphrases, and tone — so replies sound exactly like you wrote
                them.
              </p>
              {/* Demo chips */}
              <div className='flex flex-wrap gap-2'>
                {[
                  'Learns your emojis 😭✨',
                  'Matches your energy',
                  'Adapts per post context',
                  'Updates as you evolve',
                ].map((tag, i) => (
                  <span
                    key={i}
                    className='text-xs px-2.5 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary/80'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Control */}
          <div className='group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-6 hover:border-primary/40 transition-all duration-300'>
            <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_bottom_left,#6c47ff0f_0%,transparent_70%)]' />
            <div className='relative'>
              <div className='w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4'>
                <Shield className='w-5 h-5 text-primary' />
              </div>
              <h3 className='text-lg font-bold mb-2'>
                You&apos;re Always in Control
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Review pending replies, adjust AI behavior, set per-post rules.
                Pause anytime. Your account, your rules.
              </p>
            </div>
          </div>

          {/* Visual Flow Builder */}
          <div className='group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-6 hover:border-primary/40 transition-all duration-300'>
            <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_right,#6c47ff0f_0%,transparent_70%)]' />
            <div className='relative'>
              <div className='w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4'>
                <GitBranch className='w-5 h-5 text-primary' />
              </div>
              <h3 className='text-lg font-bold mb-2'>Visual Flow Builder</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Build full DM funnels with a drag-and-drop canvas. No code.
                Keyword triggers, conditionals, delays — all visual.
              </p>
            </div>
          </div>

          {/* Speed */}
          <div className='group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-6 hover:border-success/30 transition-all duration-300'>
            <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_bottom_right,#22c55e0d_0%,transparent_70%)]' />
            <div className='relative'>
              <div className='w-11 h-11 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center mb-4'>
                <Gauge className='w-5 h-5 text-success' />
              </div>
              <h3 className='text-lg font-bold mb-2'>Speed = Algorithm Love</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Replies in under 10 seconds. Instagram rewards fast engagement
                with 3× more reach. Simple math.
              </p>
            </div>
          </div>

          {/* Content Scheduling */}
          <div className='group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-6 hover:border-primary/40 transition-all duration-300'>
            <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_left,#6c47ff0f_0%,transparent_70%)]' />
            <div className='relative'>
              <div className='w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4'>
                <Calendar className='w-5 h-5 text-primary' />
              </div>
              <h3 className='text-lg font-bold mb-2'>Instagram Scheduling</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Plan and schedule your posts for peak engagement times. Posts,
                Stories, and Reels from one dashboard.
              </p>
            </div>
          </div>

          {/* Analytics — large card */}
          <div className='lg:col-span-2 group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-7 hover:border-primary/40 transition-all duration-300'>
            <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_bottom_left,#6c47ff0f_0%,transparent_60%)]' />
            <div className='relative grid sm:grid-cols-2 gap-6 items-center'>
              <div>
                <div className='w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5'>
                  <BarChart3 className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Deep Analytics</h3>
                <p className='text-muted-foreground leading-relaxed'>
                  See response rates, follower growth, credit usage, and DM
                  conversion funnels. Know exactly how automation is impacting
                  your account growth.
                </p>
              </div>
              {/* Mini chart visual */}
              <div className='flex items-end justify-center gap-2 h-24'>
                {[35, 55, 42, 68, 72, 85, 90].map((h, i) => (
                  <div
                    key={i}
                    className='flex-1 rounded-sm transition-all duration-500'
                    style={{
                      height: `${h}%`,
                      background: `rgb(108 71 255 / ${0.4 + i * 0.08})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Multi-account */}
          <div className='group relative rounded-2xl border border-border/60 bg-card overflow-hidden p-6 hover:border-primary/40 transition-all duration-300'>
            <div className='relative'>
              <div className='w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4'>
                <Repeat2 className='w-5 h-5 text-primary' />
              </div>
              <h3 className='text-lg font-bold mb-2'>Multi-Account</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Manage multiple Instagram accounts from one dashboard.
                Agency-ready with separate analytics per account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

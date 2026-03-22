'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  DollarSign,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { APP_URL } from '@/lib/constants';

// ── Avatar strip ───────────────────────────────────────────────────────────────

const AVATARS = [
  '/indian-woman-fashion-creator.jpg',
  '/asian-man-tech-youtuber.jpg',
  '/latina-woman-entrepreneur.jpg',
  '/professional-man-portrait.png',
  '/business-woman-portrait.png',
];

// ── Count-up hook ─────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1800, start = false): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return value;
}

// ── Animated ImpactHero mockup ─────────────────────────────────────────────────

function ImpactHeroMockup({ animate }: { animate: boolean }) {
  const followers = useCountUp(650, 1800, animate);
  const leads = useCountUp(312, 1600, animate);
  const value = useCountUp(1300, 2000, animate);

  return (
    <div className='rounded-2xl border border-border bg-card/80 backdrop-blur p-5 shadow-2xl shadow-black/20'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <div>
          <p className='text-xs text-muted-foreground'>PostEngage Impact</p>
          <p className='text-xs text-muted-foreground/60 mt-0.5'>
            since Feb 1, 2026
          </p>
        </div>
        <div className='flex items-center gap-1.5'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-success' />
          </span>
          <span className='text-[10px] text-success font-medium'>Live</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className='grid grid-cols-2 gap-3'>
        {/* Followers */}
        <div className='rounded-xl bg-background/60 p-3'>
          <Users className='h-4 w-4 text-info mb-1.5' />
          <p className='text-xl font-bold text-foreground tabular-nums'>
            +{animate ? followers.toLocaleString() : '0'}
          </p>
          <p className='text-[10px] text-muted-foreground mt-0.5'>
            Followers gained
          </p>
          <p className='text-[10px] text-info font-medium mt-0.5'>
            +52% attributed
          </p>
        </div>

        {/* Engagement */}
        <div className='rounded-xl bg-background/60 p-3'>
          <TrendingUp className='h-4 w-4 text-success mb-1.5' />
          <p className='text-xl font-bold text-foreground tabular-nums'>
            {animate ? '4.7%' : '0%'}
          </p>
          <p className='text-[10px] text-muted-foreground mt-0.5'>
            Engagement rate
          </p>
          <p className='text-[10px] text-success font-medium mt-0.5'>
            +124% vs before
          </p>
        </div>

        {/* Leads */}
        <div className='rounded-xl bg-background/60 p-3'>
          <Target className='h-4 w-4 text-primary mb-1.5' />
          <p className='text-xl font-bold text-foreground tabular-nums'>
            {animate ? leads.toLocaleString() : '0'}
          </p>
          <p className='text-[10px] text-muted-foreground mt-0.5'>
            Leads captured
          </p>
          <p className='text-[10px] text-primary font-medium mt-0.5'>
            from DM automations
          </p>
        </div>

        {/* Value */}
        <div className='rounded-xl bg-background/60 p-3'>
          <DollarSign className='h-4 w-4 text-warning mb-1.5' />
          <p className='text-xl font-bold text-foreground tabular-nums'>
            ${animate ? value.toLocaleString() : '0'}
          </p>
          <p className='text-[10px] text-muted-foreground mt-0.5'>
            Value delivered
          </p>
          <p className='text-[10px] text-warning font-medium mt-0.5'>
            26 hrs × $50/hr
          </p>
        </div>
      </div>

      {/* Footer bar */}
      <div className='mt-3 pt-3 border-t border-border/50 flex items-center justify-between'>
        <span className='text-[10px] text-muted-foreground'>
          30-day snapshot
        </span>
        <span className='text-[10px] px-2 py-0.5 rounded-full bg-success/10 text-success font-medium'>
          High confidence attribution
        </span>
      </div>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────────

export function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24'>
      {/* Radial gradient */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-linear-to-b from-primary/8 via-primary/3 to-transparent rounded-full blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Badge row */}
        <div className='flex flex-wrap items-center justify-center gap-4 mb-8'>
          <a
            href='https://www.producthunt.com/products/postengageai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-postengageai-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              alt='PostEngageAI on Product Hunt'
              width='250'
              height='54'
              src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1067654&theme=light&t=1769428844503'
              unoptimized
            />
          </a>
          <div className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-muted-foreground'>
            <TrendingUp className='h-4 w-4 text-primary' />
            The only Instagram tool that{' '}
            <span className='font-bold text-foreground'>
              proves its own ROI
            </span>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left: Copy */}
          <div className='text-center lg:text-left'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'>
              <span className='text-muted-foreground'>See your before.</span>
              <br />
              <span className='text-foreground'>See your after.</span>
            </h1>

            <p className='mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0'>
              Connect your Instagram. PostEngage captures your starting point.
              Then it shows you — in real numbers — every way it&apos;s growing
              your account.
            </p>

            <div className='mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start'>
              <Button
                size='lg'
                className='min-w-[220px] h-12 text-base'
                asChild
              >
                <Link href={`${APP_URL}/signup`}>
                  Start tracking your growth
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <span className='text-sm text-muted-foreground'>
                Free forever for basic actions · No credit card · Connects in 60
                seconds
              </span>
            </div>

            <p className='mt-3 text-xs text-muted-foreground/70 text-center lg:text-left'>
              Baseline captured the moment you connect. Your before starts now.
            </p>

            {/* Social proof strip */}
            <div className='mt-10 pt-8 border-t border-border'>
              <div className='flex items-center gap-6 justify-center lg:justify-start flex-wrap'>
                <div className='flex -space-x-2'>
                  {AVATARS.map((src, i) => (
                    <div
                      key={i}
                      className='relative h-8 w-8 rounded-full border-2 border-background overflow-hidden bg-secondary'
                    >
                      <Image
                        src={src}
                        alt={`Creator ${i + 1}`}
                        fill
                        className='object-cover'
                        sizes='32px'
                      />
                    </div>
                  ))}
                </div>
                <div className='text-sm'>
                  <span className='font-semibold text-foreground'>2,400+</span>
                  <span className='text-muted-foreground'>
                    {' '}
                    creators tracking{' '}
                  </span>
                  <span className='font-semibold text-foreground'>
                    their Instagram growth
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Animated ImpactHero mockup */}
          <div ref={mockupRef} className='relative'>
            <div className='relative mx-auto max-w-[380px]'>
              <ImpactHeroMockup animate={animate} />

              {/* Floating "Milestone" badge */}
              <div
                className={`absolute -left-4 bottom-16 bg-card border border-border rounded-xl p-3 shadow-lg transition-all duration-700 delay-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              >
                <div className='flex items-center gap-2'>
                  <span className='text-xl'>🎯</span>
                  <div>
                    <p className='text-xs font-semibold'>First 100 leads!</p>
                    <p className='text-[10px] text-muted-foreground'>
                      Milestone achieved
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating "Growth" badge */}
              <div
                className={`absolute -right-4 top-8 bg-card border border-border rounded-xl p-3 shadow-lg transition-all duration-700 delay-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              >
                <div className='flex items-center gap-2'>
                  <span className='text-xl'>📈</span>
                  <div>
                    <p className='text-xs font-semibold'>+52 followers today</p>
                    <p className='text-[10px] text-muted-foreground'>
                      via PostEngage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

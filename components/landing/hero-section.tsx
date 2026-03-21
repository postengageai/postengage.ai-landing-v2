'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Zap, Users, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { APP_URL } from '@/lib/constants';
import { sendGAEvent } from '@/lib/gtag';
import { LiveReplyDemo } from '@/components/landing/live-reply-demo';
import { useLandingConfig } from '@/hooks/use-landing-config';
import { usePlatformStats } from '@/hooks/use-platform-stats';

const AVATARS = [
  {
    src: '/indian-woman-fashion-creator.jpg',
    alt: 'Indian fashion creator using PostEngage.ai',
  },
  {
    src: '/asian-man-tech-youtuber.jpg',
    alt: 'Tech YouTuber automating Instagram replies',
  },
  {
    src: '/latina-woman-entrepreneur.jpg',
    alt: 'Latina entrepreneur growing Instagram with automation',
  },
  {
    src: '/professional-man-portrait.png',
    alt: 'Business owner using Instagram DM automation',
  },
  {
    src: '/business-woman-portrait.png',
    alt: 'Creator automating Instagram engagement',
  },
];

function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    let current = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {displayed.toLocaleString()}
      {suffix}
    </>
  );
}

export function HeroSection() {
  const { data: landingConfig } = useLandingConfig();
  const { data: platformStats } = usePlatformStats();
  const signupBonus = landingConfig?.signup_bonus ?? 200;
  const [ignoredCount, setIgnoredCount] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setIgnoredCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sendGAEvent({
      action: 'hero_live_counter_view',
      category: 'content',
      label: 'live_counter_active',
    });
  }, []);

  const handleProductHuntClick = () => {
    sendGAEvent({
      action: 'click_product_hunt',
      category: 'social',
      label: 'hero_badge',
    });
  };

  const handleCtaClick = () => {
    sendGAEvent({
      action: 'click_cta_hero',
      category: 'conversion',
      label: 'hero_signup',
    });
  };

  return (
    <section className='relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-32'>
      {/* Multi-layer background glow */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,#6c47ff1f_0%,transparent_70%)]' />
        <div className='absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,#6c47ff0d_0%,transparent_70%)] blur-2xl' />
        <div className='absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_center,#22c55e0f_0%,transparent_70%)] blur-2xl' />
        {/* Subtle grid */}
        <div
          className='absolute inset-0 opacity-[0.018]'
          style={{
            backgroundImage:
              'linear-gradient(#f1f1f4 1px, transparent 1px), linear-gradient(90deg, #f1f1f4 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Top badges row */}
        <div className='flex flex-wrap items-center justify-center gap-3 mb-8'>
          <a
            href='https://www.producthunt.com/products/postengageai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-postengageai-2'
            target='_blank'
            rel='noopener noreferrer'
            onClick={handleProductHuntClick}
            className='transition-opacity hover:opacity-80'
          >
            <Image
              alt='PostEngageAI on Product Hunt'
              width={200}
              height={44}
              src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1067654&theme=light&t=1769428844503'
              unoptimized
              priority
            />
          </a>

          <div className='inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/5 px-4 py-2'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75' />
              <span className='relative inline-flex rounded-full h-2 w-2 bg-warning' />
            </span>
            <span className='text-sm text-warning font-medium'>
              <span className='font-mono font-bold'>
                {ignoredCount.toLocaleString()}
              </span>{' '}
              leads waiting right now
            </span>
          </div>
        </div>

        {/* Insight pill */}
        <div className='flex justify-center mb-10'>
          <div className='inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-5 py-2.5'>
            <MessageCircle className='w-4 h-4 text-primary' />
            <span className='text-sm text-muted-foreground'>
              <span className='font-semibold text-foreground'>80% of DMs</span>{' '}
              go unanswered in the first hour
            </span>
          </div>
        </div>

        {/* Main content grid */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left: Copy */}
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]'>
              <span className='text-muted-foreground'>Never miss another</span>
              <br />
              <span
                className='text-transparent bg-clip-text'
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #c4b5fd 0%, #6c47ff 50%, #6d28d9 100%)',
                }}
              >
                Instagram lead.
              </span>
            </h1>

            <p className='mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed'>
              Auto comment reply and keyword DM are free forever.{' '}
              <span className='text-foreground font-medium'>
                Set up in 3 minutes and reply in your voice, 24/7.
              </span>
            </p>

            {/* CTA */}
            <div className='mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start'>
              <Button
                size='lg'
                className='min-w-[240px] h-14 text-base font-bold relative overflow-hidden group border-0'
                style={{
                  background:
                    'linear-gradient(135deg, #a78bfa 0%, #7c3aed 60%, #6d28d9 100%)',
                  boxShadow:
                    '0 0 0 2px #a78bfa55, 0 8px 40px #7c3aed99, 0 2px 8px #0008',
                }}
                asChild
                onClick={handleCtaClick}
              >
                <Link href={`${APP_URL}/signup`}>
                  <span className='relative z-10 flex items-center gap-2 text-white'>
                    Start free — no card needed
                    <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </span>
                </Link>
              </Button>
              <div className='flex flex-col items-center sm:items-start gap-1'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-3.5 h-3.5 fill-warning text-warning'
                    />
                  ))}
                </div>
                <span className='text-xs text-muted-foreground'>
                  Setup in 3 min •{' '}
                  <a
                    href='#pricing'
                    className='underline underline-offset-2 hover:text-foreground transition-colors'
                  >
                    Credits from ₹749
                  </a>
                </span>
              </div>
            </div>

            {/* Social proof strip */}
            <div className='mt-10 pt-8 border-t border-border/60'>
              <div className='flex items-center gap-6 justify-center lg:justify-start flex-wrap'>
                <div className='flex -space-x-2.5'>
                  {AVATARS.map((avatar, i) => (
                    <div
                      key={i}
                      className='relative w-9 h-9 rounded-full border-2 border-background overflow-hidden bg-secondary ring-1 ring-primary/20'
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        className='object-cover'
                        sizes='36px'
                      />
                    </div>
                  ))}
                </div>
                <div className='text-sm'>
                  <span className='font-semibold text-foreground'>
                    {platformStats?.active_users != null ? (
                      <AnimatedCounter
                        value={platformStats.active_users}
                        suffix='+'
                      />
                    ) : (
                      '12+'
                    )}
                  </span>{' '}
                  <span className='text-muted-foreground'>
                    creators automating Instagram replies
                  </span>
                </div>
              </div>
            </div>
            <p className='mt-3 text-xs text-muted-foreground'>
              + {signupBonus} free AI credits on signup
            </p>
          </div>

          {/* Right: Demo */}
          <div className='relative flex items-center justify-center'>
            <div className='relative'>
              <div className='absolute inset-0 -m-8 bg-[radial-gradient(ellipse_at_center,#6c47ff26_0%,transparent_70%)] blur-2xl pointer-events-none' />
              <LiveReplyDemo />
            </div>
          </div>
        </div>

        {/* Platform stats strip */}
        {platformStats != null && (
          <div className='mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto'>
            {[
              {
                icon: MessageCircle,
                value: platformStats.replies_sent,
                label: 'Auto-replies sent',
              },
              {
                icon: Zap,
                value: platformStats.total_automations,
                label: 'Live automations',
              },
              {
                icon: Users,
                value: platformStats.active_users,
                label: 'Active creators',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className='text-center p-4 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm'
              >
                <div className='flex justify-center mb-2'>
                  <stat.icon className='w-4 h-4 text-primary' />
                </div>
                <div className='text-2xl font-bold font-mono text-foreground'>
                  <AnimatedCounter value={stat.value} suffix='+' />
                </div>
                <div className='text-xs text-muted-foreground mt-0.5'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

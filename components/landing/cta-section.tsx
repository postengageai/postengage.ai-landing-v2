'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Star, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { APP_URL } from '@/lib/constants';
import { sendGAEvent } from '@/lib/gtag';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { useLandingConfig } from '@/hooks/use-landing-config';

export function CTASection() {
  const { data: landingConfig } = useLandingConfig();
  const signupBonus = landingConfig?.signup_bonus ?? 200;
  const ref = useTrackSectionView('cta_section');
  const bannerRef = useTrackSectionView('cta_urgency_banner');
  const [lostComments, setLostComments] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLostComments(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = () => {
    sendGAEvent({
      action: 'click_cta_bottom',
      category: 'conversion',
      label: 'bottom_signup',
    });
  };

  return (
    <section ref={ref} className='py-20 sm:py-28 bg-secondary/20'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6'>
        <div
          className='relative overflow-hidden rounded-3xl border border-primary/25 p-10 sm:p-16 text-center'
          style={{
            background:
              'radial-gradient(ellipse at top, rgb(108 71 255 / 0.12) 0%, #1a1a2499 60%)',
          }}
        >
          {/* Background glow layers */}
          <div className='pointer-events-none absolute inset-0'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,#6c47ff26_0%,transparent_70%)] blur-2xl' />
            <div className='absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-[radial-gradient(ellipse_at_center,#22c55e14_0%,transparent_70%)] blur-2xl' />
          </div>

          {/* Top border glow */}
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />

          <div className='relative'>
            {/* Urgency counter */}
            <div
              ref={bannerRef as React.RefObject<HTMLDivElement>}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/25 text-warning text-sm mb-8'
            >
              <Clock className='w-4 h-4' />
              <span>
                {lostComments > 0 && (
                  <span className='font-mono font-bold'>
                    {lostComments} leads
                  </span>
                )}{' '}
                went cold while you read this page
              </span>
            </div>

            {/* Main headline */}
            <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4'>
              Go live once,
              <br />
              <span className='text-muted-foreground'>auto-reply forever.</span>
            </h2>

            <p className='text-lg text-muted-foreground max-w-lg mx-auto mb-10'>
              Auto comment reply and keyword DM are free forever. Use AI credits
              only when you need personalisation.
            </p>

            {/* CTA button */}
            <div className='flex flex-col items-center gap-5'>
              <Button
                size='lg'
                className='min-w-[260px] h-14 text-lg font-bold relative overflow-hidden group'
                style={{
                  background:
                    'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
                  boxShadow: '0 0 40px #6c47ff73, 0 4px 20px rgba(0,0,0,0.3)',
                }}
                asChild
                onClick={handleCtaClick}
              >
                <Link href={`${APP_URL}/signup`}>
                  <span className='flex items-center gap-2'>
                    Start free forever
                    <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                  </span>
                </Link>
              </Button>

              {/* Trust indicators */}
              <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1.5'>
                  <Star className='w-4 h-4 fill-warning text-warning' />
                  <span>No credit card</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <Zap className='w-4 h-4 text-primary' />
                  <span>Setup in 3 minutes</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <Shield className='w-4 h-4 text-success' />
                  <span>Cancel anytime</span>
                </div>
              </div>

              <p className='text-xs text-muted-foreground/60'>
                Free forever automation • +{signupBonus} AI credits • Official
                Instagram API
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

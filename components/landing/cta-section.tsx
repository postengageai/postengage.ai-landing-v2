'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { APP_URL } from '@/lib/constants';
import { sendGAEvent } from '@/lib/gtag';
import { useTrackSectionView } from '@/hooks/use-track-section-view';

import { useLandingConfig } from '@/hooks/use-landing-config';

export function CTASection() {
  const { data: landingConfig } = useLandingConfig();
  const signupBonus = landingConfig?.signup_bonus || 500;
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
    <section ref={ref} className='py-16 sm:py-24 bg-secondary/30'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6'>
        <div className='relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8 sm:p-12'>
          {/* Subtle glow */}
          <div className='pointer-events-none absolute inset-0'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl' />
          </div>

          <div className='relative text-center'>
            <div
              ref={bannerRef as React.RefObject<HTMLDivElement>}
              className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm mb-6'
            >
              <Clock className='w-4 h-4' />
              <span>
                {lostComments > 0 && (
                  <span className='font-mono font-bold'>
                    {lostComments} comments
                  </span>
                )}{' '}
                went cold while you read this page
              </span>
            </div>

            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Every minute you wait,
              <br />
              <span className='text-muted-foreground'>
                another follower moves on.
              </span>
            </h2>

            <p className='mt-4 text-muted-foreground max-w-lg mx-auto'>
              Start replying in 5 minutes. No credit card. No commitment. Just
              faster engagement.
            </p>

            <div className='mt-8 flex flex-col items-center gap-4'>
              <Button
                size='lg'
                className='min-w-[240px] h-12 text-base'
                asChild
                onClick={handleCtaClick}
              >
                <Link href={`${APP_URL}/signup`}>
                  Start Your Free Trial
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <span className='text-sm text-muted-foreground'>
                {signupBonus} free credits • Setup in 5 min • Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Gift, Clock } from 'lucide-react';
import { APP_URL } from '@/lib/constants';
import { trackConversion } from '@/components/analytics/conversion-tracker';
import { sendGAEvent } from '@/lib/gtag';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Only trigger if mouse leaves through the top of the page
      if (e.clientY < 10 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        // Track exit intent shown
        trackConversion('exit_intent_shown');
        sendGAEvent({
          action: 'view_exit_popup',
          category: 'engagement',
          label: 'exit_intent_shown',
        });
        sendGAEvent({
          action: 'exit_intent_triggered',
          category: 'engagement',
          label: 'exit_intent_trigger',
        });
        // Store in session so it does not show again
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    },
    [hasShown]
  );

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Add mouse leave listener
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
    sendGAEvent({
      action: 'exit_intent_popup_close',
      category: 'engagement',
      label: 'close_button',
    });
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200'>
      <div className='relative w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-2xl animate-in zoom-in-95 duration-200'>
        {/* Close button */}
        <button
          onClick={handleClose}
          className='absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors'
          aria-label='Close popup'
        >
          <X className='w-5 h-5 text-muted-foreground' />
        </button>

        {/* Content */}
        <div className='text-center'>
          {/* Icon */}
          <div className='mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6'>
            <Gift className='w-8 h-8 text-primary' />
          </div>

          {/* Headline */}
          <h3 className='text-2xl sm:text-3xl font-bold tracking-tight mb-3'>
            Wait! Don't leave empty-handed
          </h3>

          {/* Subheadline */}
          <p className='text-muted-foreground mb-6 max-w-sm mx-auto'>
            Get{' '}
            <span className='font-semibold text-foreground'>
              100 bonus credits
            </span>{' '}
            when you sign up today. That&apos;s 50 extra credits on top of your
            free trial!
          </p>

          {/* Urgency */}
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm mb-6'>
            <Clock className='w-4 h-4' />
            <span>Limited time offer for first 100 users today</span>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button
              size='lg'
              className='w-full sm:w-auto'
              asChild
              onClick={() => {
                trackConversion('exit_intent_cta_click');
                sendGAEvent({
                  action: 'click_exit_popup_cta',
                  category: 'conversion',
                  label: 'claim_offer',
                });
                sendGAEvent({
                  action: 'exit_intent_popup_discount_claim',
                  category: 'conversion',
                  label: 'claim_discount',
                });
              }}
            >
              <Link href={`${APP_URL}/signup?ref=exit_intent`}>
                Claim My 100 Credits
              </Link>
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={handleClose}
              className='w-full sm:w-auto'
            >
              No thanks, I'll pass
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

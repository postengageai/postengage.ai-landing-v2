'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Loader2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'exit-intent-shown';
const MIN_TIME_ON_PAGE_MS = 10_000;
const MOBILE_TIMER_MS = 45_000;

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pageLoadTime = useRef(Date.now());
  const hasTriggered = useRef(false);

  const showPopup = useCallback(() => {
    if (hasTriggered.current) return;
    if (Date.now() - pageLoadTime.current < MIN_TIME_ON_PAGE_MS) return;

    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // sessionStorage unavailable (private browsing edge cases)
    }

    hasTriggered.current = true;
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // noop
    }

    // Desktop: mouse leaves viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        showPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile fallback: time-based trigger
    const mobileTimer = setTimeout(() => {
      showPopup();
    }, MOBILE_TIMER_MS);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [showPopup]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/v1/newsletter/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'exit-intent-playbook' }),
        }
      );

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Escape key
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleClose]);

  if (!isMounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          isVisible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={handleClose}
        aria-hidden='true'
      />

      {/* Modal — centered on desktop, bottom sheet on mobile */}
      <div
        role='dialog'
        aria-modal='true'
        aria-label='Free playbook offer'
        className={cn(
          'fixed z-50 w-full transition-all duration-300 ease-out',
          // Mobile: bottom sheet
          'bottom-0 left-0 right-0 max-h-[90dvh]',
          'rounded-t-2xl',
          // Desktop: centered modal
          'md:bottom-auto md:left-1/2 md:top-1/2 md:right-auto',
          'md:-translate-x-1/2 md:max-w-lg md:rounded-2xl',
          isVisible
            ? 'translate-y-0 scale-100 opacity-100 pointer-events-auto md:-translate-y-1/2'
            : 'translate-y-full scale-95 opacity-0 pointer-events-none md:translate-y-0 md:scale-90 md:-translate-y-1/2'
        )}
      >
        <div className='relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-background via-background to-primary/5 border border-border shadow-2xl md:rounded-2xl'>
          {/* Decorative gradient bar */}
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500' />

          {/* Mobile drag indicator */}
          <div className='flex justify-center pt-3 md:hidden'>
            <div className='h-1 w-10 rounded-full bg-muted-foreground/30' />
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className='absolute top-3 right-3 z-10 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            aria-label='Close popup'
          >
            <X className='h-5 w-5' />
          </button>

          <div className='px-6 pb-8 pt-6 md:px-8 md:pt-8'>
            {isSuccess ? (
              /* Success state */
              <div className='flex flex-col items-center gap-4 py-6 text-center'>
                <div className='text-5xl'>📩</div>
                <h3 className='text-xl font-bold text-foreground'>
                  Check your inbox!
                </h3>
                <p className='text-sm text-muted-foreground'>
                  We&apos;ve sent your free playbook. It should arrive within a
                  few minutes.
                </p>
                <Button
                  variant='outline'
                  onClick={handleClose}
                  className='mt-2'
                >
                  Close
                </Button>
              </div>
            ) : (
              /* Form state */
              <>
                <div className='mb-6 text-center'>
                  <h2 className='text-2xl font-bold tracking-tight text-foreground md:text-3xl'>
                    Wait! Grab Your Free Playbook
                  </h2>
                  <p className='mt-3 text-sm leading-relaxed text-muted-foreground md:text-base'>
                    7 Instagram DM Automation Flows That Convert — used by
                    8,000+ creators
                  </p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                  <Input
                    type='email'
                    placeholder='you@example.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='h-12 bg-background text-base'
                    disabled={isLoading}
                    autoFocus
                    required
                  />
                  <Button
                    type='submit'
                    size='lg'
                    className='h-12 w-full text-base font-semibold'
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className='h-5 w-5 animate-spin' />
                    ) : (
                      'Send Me the Playbook'
                    )}
                  </Button>
                </form>

                <p className='mt-4 text-center text-xs text-muted-foreground/70'>
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

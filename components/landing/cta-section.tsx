'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { APP_URL } from '@/lib/constants';

export function CTASection() {
  const [lostComments, setLostComments] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLostComments(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-16 sm:py-24 bg-secondary/30'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6'>
        <div className='relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8 sm:p-12'>
          {/* Subtle glow */}
          <div className='pointer-events-none absolute inset-0'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl' />
          </div>

          <div className='relative text-center'>
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm mb-6'>
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
              Start tracking your growth.
              <br />
              <span className='text-muted-foreground'>
                Your before starts now.
              </span>
            </h2>

            <p className='mt-4 text-muted-foreground max-w-lg mx-auto'>
              Connect your Instagram. PostEngage captures your baseline. Then it
              shows you — in real numbers — every way it&apos;s growing your
              account.
            </p>

            <div className='mt-8 flex flex-col items-center gap-4'>
              <Button
                size='lg'
                className='min-w-[240px] h-12 text-base'
                asChild
              >
                <Link href={`${APP_URL}/signup`}>
                  Start tracking your growth
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <span className='text-sm text-muted-foreground'>
                Free 14-day trial · No credit card · Connects in 60 seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

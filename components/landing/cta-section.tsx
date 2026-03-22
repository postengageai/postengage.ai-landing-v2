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

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight'>
              Stop losing followers.
              <br />
              <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                Start automating today.
              </span>
            </h2>

            <p className='mt-5 text-lg text-muted-foreground font-light max-w-lg mx-auto'>
              100 free credits. No credit card. Setup in 60 seconds. Your first
              AI reply goes out in under 5 minutes.
            </p>

            <div className='mt-8 flex flex-col items-center gap-4'>
              <Button
                size='lg'
                className='min-w-[240px] h-12 text-base'
                asChild
              >
                <Link href={`${APP_URL}/signup`}>
                  Start free — no card needed
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <span className='text-sm text-muted-foreground'>
                Free forever for basic actions · Connects in 60 seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

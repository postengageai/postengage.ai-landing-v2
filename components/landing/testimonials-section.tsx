'use client';

import { Quote, Star } from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLandingConfig } from '@/hooks/use-landing-config';
import { Skeleton } from '@/components/ui/skeleton';
import type { Testimonial } from '@/lib/types/landing';

function TestimonialSkeleton() {
  return (
    <div className='rounded-2xl border border-border/60 bg-card p-6 space-y-4'>
      <Skeleton className='h-5 w-24 rounded' />
      <Skeleton className='h-6 w-6 rounded' />
      <Skeleton className='h-20 w-full rounded' />
      <Skeleton className='h-7 w-32 rounded-full' />
      <div className='flex items-center gap-3 pt-4 border-t border-border'>
        <Skeleton className='w-10 h-10 rounded-full' />
        <div className='space-y-1.5'>
          <Skeleton className='h-4 w-28' />
          <Skeleton className='h-3 w-20' />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useTrackSectionView(`testimonial_card_${index + 1}`);
  const initials = testimonial.author
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className='group relative flex flex-col h-full rounded-2xl border border-border/60 bg-card overflow-hidden p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
    >
      {/* Hover glow */}
      <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_left,#6c47ff0d_0%,transparent_70%)]' />
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative flex flex-col h-full'>
        {/* Stars */}
        <div className='flex gap-0.5 mb-4'>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className='w-4 h-4 fill-warning text-warning' />
          ))}
        </div>

        <Quote className='w-7 h-7 text-primary/20 mb-3' />

        <blockquote className='text-foreground/90 flex-1 mb-5 text-base leading-relaxed'>
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Metric highlight */}
        <div className='mb-5 py-2 px-3 rounded-lg bg-success/10 border border-success/20 w-fit'>
          <p className='text-sm font-semibold text-success'>
            {testimonial.metric}
          </p>
        </div>

        {/* Author */}
        <div
          className='flex items-center gap-3 pt-4 border-t border-border/60 mt-auto cursor-pointer'
          onClick={() => {
            sendGAEvent({
              action: 'testimonial_author_click',
              category: 'content',
              label: testimonial.author,
            });
          }}
        >
          <Avatar className='w-10 h-10 ring-2 ring-primary/15'>
            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
            <AvatarFallback className='text-xs font-semibold bg-primary/10 text-primary'>
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className='font-semibold text-sm'>{testimonial.author}</p>
            <p className='text-xs text-muted-foreground'>{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useTrackSectionView('testimonials_section');
  const { data: config, isLoading } = useLandingConfig();
  const testimonials = config?.testimonials ?? [];

  return (
    <section
      ref={ref}
      id='testimonials'
      className='py-20 sm:py-32 border-t border-border/50'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm font-medium mb-5'>
            <Star className='w-4 h-4 fill-warning' />
            Real Results
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Creators who{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #a78bfa 0%, #6c47ff 100%)',
              }}
            >
              got their time back
            </span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Real creators, real results. See how PostEngage.ai is changing the
            way people grow on Instagram.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {isLoading
            ? [1, 2, 3].map(i => <TestimonialSkeleton key={i} />)
            : testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
        </div>

        <p className='text-center text-xs text-muted-foreground mt-10 opacity-50'>
          * Results may vary based on account size and engagement strategy.
        </p>
      </div>
    </section>
  );
}

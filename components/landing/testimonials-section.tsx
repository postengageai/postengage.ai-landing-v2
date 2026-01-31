'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';
import { useLandingConfig } from '@/hooks/use-landing-config';
import { Skeleton } from '@/components/ui/skeleton';
import { Testimonial } from '@/lib/types/landing';

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useTrackSectionView(`testimonial_card_${index + 1}`);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className='relative rounded-xl border border-border bg-card p-6 flex flex-col'
    >
      <Quote className='w-8 h-8 text-primary/20 mb-4' />

      <blockquote className='text-foreground flex-1'>
        "{testimonial.quote}"
      </blockquote>

      {/* Metric highlight */}
      <div className='my-4 py-3 px-4 rounded-lg bg-success/10 border border-success/20'>
        <p className='text-sm font-semibold text-success'>
          {testimonial.metric}
        </p>
      </div>

      <div className='flex items-center gap-3 pt-4 border-t border-border'>
        <Image
          src={testimonial.avatar || '/placeholder.svg'}
          alt={testimonial.author}
          width={40}
          height={40}
          className='rounded-full bg-secondary object-cover'
        />
        <div
          className='cursor-pointer'
          onClick={() => {
            sendGAEvent({
              action: 'testimonial_author_click',
              category: 'content',
              label: testimonial.author,
            });
          }}
        >
          <p className='font-medium text-sm'>{testimonial.author}</p>
          <p className='text-xs text-muted-foreground'>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className='relative rounded-xl border border-border bg-card p-6 flex flex-col'>
      <Skeleton className='w-8 h-8 mb-4' />
      <Skeleton className='w-full h-20 mb-4' />
      <Skeleton className='w-full h-12 mb-4' />
      <div className='flex items-center gap-3 pt-4 border-t border-border'>
        <Skeleton className='w-10 h-10 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='w-24 h-4' />
          <Skeleton className='w-20 h-3' />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useTrackSectionView('testimonials_section');
  const { data: config, isLoading } = useLandingConfig();
  const testimonials = config?.testimonials || [];

  return (
    <section ref={ref} id='testimonials' className='py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center mb-16'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Trusted by creators who value their time
          </h2>
          <p className='mt-6 text-lg leading-8 text-muted-foreground'>
            See how PostEngage.ai is helping creators and businesses scale their
            engagement without burnout.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          {isLoading ? (
            <>
              <TestimonialSkeleton />
              <TestimonialSkeleton />
              <TestimonialSkeleton />
              <TestimonialSkeleton />
            </>
          ) : (
            testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id || index}
                testimonial={testimonial}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

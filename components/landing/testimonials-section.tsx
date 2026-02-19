'use client';

import { Quote } from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  avatar: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      "Finally an automation tool that doesn't feel like a bot. My engagement has doubled.",
    author: 'Priya M.',
    role: 'Fashion Creator',
    metric: '2x Engagement',
    avatar: '/indian-woman-fashion-creator.jpg',
    initials: 'PM',
  },
  {
    id: '2',
    quote:
      'I used to spend 2 hours a day replying to DMs. Now it takes 15 minutes.',
    author: 'Rahul S.',
    role: 'Tech Reviewer',
    metric: 'Save 10hrs/week',
    avatar: '/asian-man-tech-youtuber.jpg',
    initials: 'RS',
  },
  {
    id: '3',
    quote: 'The best investment for my personal brand. It just works.',
    author: 'Anika T.',
    role: 'Lifestyle Vlogger',
    metric: '30% More Leads',
    avatar: '/lifestyle-instagram-avatar.jpg',
    initials: 'AT',
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useTrackSectionView(`testimonial_card_${index + 1}`);

  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className='relative p-6 flex flex-col h-full'
    >
      <Quote className='w-8 h-8 text-primary/20 mb-4' />

      <blockquote className='text-foreground flex-1 mb-6 text-lg'>
        "{testimonial.quote}"
      </blockquote>

      {/* Metric highlight */}
      <div className='mb-6 py-2 px-3 rounded-lg bg-success/10 border border-success/20 w-fit'>
        <p className='text-sm font-semibold text-success'>
          {testimonial.metric}
        </p>
      </div>

      <div className='flex items-center gap-3 pt-4 border-t border-border mt-auto'>
        <Avatar>
          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
          <AvatarFallback>{testimonial.initials}</AvatarFallback>
        </Avatar>
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
    </Card>
  );
}

export function TestimonialsSection() {
  const ref = useTrackSectionView('testimonials_section');

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

        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <p className='text-center text-xs text-muted-foreground mt-12 opacity-60'>
          * Results may vary based on account size and engagement strategy.
        </p>
      </div>
    </section>
  );
}

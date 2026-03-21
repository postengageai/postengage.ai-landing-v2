'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';
import { useLandingConfig } from '@/hooks/use-landing-config';
import { Skeleton } from '@/components/ui/skeleton';

function FaqSkeleton() {
  return (
    <div className='space-y-4'>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className='border-b border-border py-4'>
          <Skeleton className='h-6 w-3/4 mb-2' />
          <Skeleton className='h-4 w-full' />
        </div>
      ))}
    </div>
  );
}

export function FaqSection() {
  const ref = useTrackSectionView('faq_section');
  const { data: config, isLoading } = useLandingConfig();
  const faqs = config?.faqs || [];

  return (
    <section ref={ref} id='faq' className='py-20 sm:py-32 bg-secondary/30'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center mb-16'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Frequently asked questions
          </h2>
          <p className='mt-6 text-lg leading-8 text-muted-foreground'>
            Everything you need to know about PostEngage.ai and how it can help
            you grow.
          </p>
        </div>

        <div className='mx-auto max-w-3xl'>
          {isLoading ? (
            <FaqSkeleton />
          ) : (
            <Accordion type='single' collapsible className='w-full'>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id || index}
                  value={`item-${index}`}
                  className='border-border'
                >
                  <AccordionTrigger
                    className='text-left'
                    onClick={() => {
                      sendGAEvent({
                        action: 'faq_expand',
                        category: 'interaction',
                        label: faq.question,
                      });
                    }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
}

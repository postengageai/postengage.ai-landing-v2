'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';

const faqs = [
  {
    question: 'What is PostEngage.ai?',
    answer:
      'PostEngage.ai is an AI-powered Instagram automation platform that helps creators and businesses automatically reply to comments and DMs in their unique voice, schedule content, and track analytics. It saves creators an average of 47 hours per month on engagement tasks.',
  },
  {
    question: 'How does the AI reply in my voice?',
    answer:
      'Our AI analyzes your previous comments, captions, and communication style to learn your unique tone, emojis, and phrases. It then generates replies that sound authentically like you, maintaining your personal brand voice while saving you time.',
  },
  {
    question: "Is PostEngage.ai compliant with Instagram's policies?",
    answer:
      "Yes, PostEngage.ai uses Instagram's official API and complies with all platform policies. We are a Meta-approved tool that operates within Instagram's guidelines for automation and messaging.",
  },
  {
    question: 'How does the credit-based pricing work?',
    answer:
      'You purchase credits that are consumed based on actions: 2 credits for basic comment replies, 4 credits for AI-powered replies, 2 credits for DMs, and 4 credits for AI DMs. Pay only for what you use with no monthly subscriptions required.',
  },
  {
    question: 'Can I try PostEngage.ai for free?',
    answer:
      'Yes! New users receive 50 free credits to test all features. No credit card required to start. Setup takes less than 5 minutes.',
  },
  {
    question: 'What makes PostEngage.ai different from ManyChat?',
    answer:
      'Unlike ManyChat, PostEngage.ai offers AI voice adaptation that learns YOUR unique communication style, pay-as-you-go pricing instead of subscriptions, and a visual flow builder specifically designed for Instagram creators. We focus on authentic engagement that sounds like you.',
  },
];

export function FAQSection() {
  const ref = useTrackSectionView('faq_section');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    if (isOpening) {
      sendGAEvent({
        action: 'faq_question_expand',
        category: 'content',
        label: faqs[index].question,
      });

      // Specific question tracking
      const questionMap: Record<string, string> = {
        'What is PostEngage.ai?': 'faq_what_is_expand',
        'How does the AI reply in my voice?': 'faq_ai_voice_expand',
        "Is PostEngage.ai compliant with Instagram's policies?":
          'faq_safe_expand',
        'How does the credit-based pricing work?': 'faq_pricing_expand',
        'Can I try PostEngage.ai for free?': 'faq_free_trial_expand',
        'What makes PostEngage.ai different from ManyChat?':
          'faq_manychat_expand',
      };

      const specificEvent = questionMap[faqs[index].question];
      if (specificEvent) {
        sendGAEvent({
          action: specificEvent,
          category: 'content',
          label: faqs[index].question,
        });
      }
    } else {
      sendGAEvent({
        action: 'faq_question_collapse',
        category: 'content',
        label: faqs[index].question,
      });
    }
  };

  return (
    <section
      ref={ref}
      id='faq'
      className='py-16 sm:py-24 border-t border-border/50'
    >
      <div className='mx-auto max-w-3xl px-4 sm:px-6'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6'>
            <HelpCircle className='w-3.5 h-3.5' />
            FAQ
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-balance'>
            Frequently asked questions
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Everything you need to know about PostEngage.ai
          </p>
        </div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='rounded-xl border border-border bg-card overflow-hidden'
            >
              <button
                onClick={() => handleToggle(index)}
                className='w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors'
              >
                <span className='font-medium pr-4'>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className='px-5 pb-5 text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 duration-200'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className='mt-12 text-center'>
          <p className='text-muted-foreground'>
            Still have questions?{' '}
            <a
              href='mailto:support@postengage.ai'
              onClick={() => {
                sendGAEvent({
                  action: 'faq_contact_support_click',
                  category: 'support',
                  label: 'faq_footer_email',
                });
              }}
              className='text-primary hover:underline font-medium'
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

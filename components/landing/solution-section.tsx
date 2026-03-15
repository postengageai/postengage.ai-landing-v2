'use client';

import { Check, Sparkles, MessageCircle, Send, Brain } from 'lucide-react';
import { useState } from 'react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';
import { sendGAEvent } from '@/lib/gtag';

export function SolutionSection() {
  const ref = useTrackSectionView('solution_section');
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: MessageCircle,
      title: 'Smart Comment Replies',
      description:
        'AI reads context, tone, and intent. Replies like you would — because it learned from you.',
      demo: {
        comment: "Is this still available? What's the price?",
        reply:
          "Hey! Yes it's available 🙌 Check the link in my bio for pricing, or DM me and I'll send it directly!",
        time: '4 seconds',
        credits: '2 credits',
      },
    },
    {
      icon: Send,
      title: 'Trigger-Based DMs',
      description:
        'Someone comments a keyword? Auto-send a personalized DM with your lead magnet or offer.',
      demo: {
        comment: 'I need this! How do I get started?',
        reply: 'Just sent you a DM with the full guide! Check your requests 📩',
        time: '2 seconds',
        credits: '4 credits',
      },
    },
    {
      icon: Brain,
      title: 'Your Voice, Preserved',
      description:
        "Uses your emojis, your slang, your tone. Followers can't tell it's not you.",
      demo: {
        comment: 'This is so helpful thank you!!',
        reply:
          "Ahh you're so welcome! 💕 Means everything that this helped you. More coming soon!",
        time: '3 seconds',
        credits: '4 credits',
      },
    },
  ];

  return (
    <section ref={ref} className='py-20 sm:py-28 bg-secondary/20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-5'>
            <Sparkles className='w-4 h-4' />
            The Solution
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            AI that{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #a78bfa 0%, #6c47ff 100%)',
              }}
            >
              sounds like you
            </span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Not generic. Not robotic. Trained on your unique style — emojis,
            slang, tone and all.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Feature list */}
          <div className='space-y-3'>
            {features.map((feature, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveFeature(i);
                  sendGAEvent({
                    action: 'feature_accordion_expand',
                    category: 'content',
                    label: feature.title,
                  });
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                  activeFeature === i
                    ? 'border-primary bg-primary/8 shadow-[0_0_20px_#6c47ff1f]'
                    : 'border-border/60 bg-card hover:border-primary/40 hover:bg-primary/4'
                }`}
              >
                <div className='flex items-start gap-4'>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      activeFeature === i ? 'bg-primary/20' : 'bg-secondary'
                    }`}
                  >
                    <feature.icon
                      className={`w-5 h-5 transition-colors ${activeFeature === i ? 'text-primary' : 'text-muted-foreground'}`}
                    />
                  </div>
                  <div className='flex-1'>
                    <h3
                      className={`font-semibold transition-colors ${activeFeature === i ? 'text-foreground' : 'text-foreground/80'}`}
                    >
                      {feature.title}
                    </h3>
                    <p className='text-sm text-muted-foreground mt-1'>
                      {feature.description}
                    </p>
                  </div>
                  {activeFeature === i && (
                    <div className='w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5'>
                      <Check className='w-3 h-3 text-primary-foreground' />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Demo preview */}
          <div className='relative'>
            <div className='rounded-2xl border border-border/60 bg-card p-6 sticky top-24 shadow-[0_0_40px_rgba(0,0,0,0.3)]'>
              {/* Top label */}
              <div className='flex items-center justify-between mb-5'>
                <span className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
                  Live Preview
                </span>
                <div className='flex items-center gap-1.5'>
                  <span className='relative flex h-2 w-2'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75' />
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-success' />
                  </span>
                  <span className='text-xs text-success font-medium'>
                    Active
                  </span>
                </div>
              </div>

              {/* Comment */}
              <div className='flex gap-3 mb-5'>
                <div className='w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-muted shrink-0' />
                <div className='flex-1'>
                  <p className='text-sm font-medium text-foreground'>
                    @potential_customer
                  </p>
                  <div className='mt-1.5 rounded-xl rounded-tl-sm bg-secondary/60 px-3 py-2.5'>
                    <p className='text-sm text-foreground/90'>
                      &ldquo;{features[activeFeature].demo.comment}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Processing indicator */}
              <div className='flex items-center gap-2 ml-12 mb-3'>
                <div className='h-px flex-1 bg-gradient-to-r from-border to-primary/30' />
                <span className='text-xs text-primary font-mono'>
                  AI processing...
                </span>
                <div className='h-px flex-1 bg-gradient-to-l from-border to-primary/30' />
              </div>

              {/* AI Reply */}
              <div className='flex gap-3 ml-6'>
                <div className='w-9 h-9 rounded-full bg-gradient-to-br from-primary/60 to-primary/30 shrink-0 flex items-center justify-center'>
                  <Sparkles className='w-4 h-4 text-primary' />
                </div>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-1.5'>
                    <p className='text-sm font-medium'>@your_brand</p>
                    <span className='text-[10px] px-2 py-0.5 rounded-full bg-success/15 text-success font-semibold border border-success/20'>
                      AI Reply
                    </span>
                  </div>
                  <div className='rounded-xl rounded-tl-sm bg-primary/10 border border-primary/20 px-3 py-2.5'>
                    <p className='text-sm text-foreground/90'>
                      &ldquo;{features[activeFeature].demo.reply}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className='mt-5 pt-4 border-t border-border/60 flex items-center justify-between'>
                <div className='flex items-center gap-1.5'>
                  <div className='w-1.5 h-1.5 rounded-full bg-success' />
                  <span className='text-xs text-muted-foreground'>
                    Response time:{' '}
                    <span className='font-semibold text-foreground'>
                      {features[activeFeature].demo.time}
                    </span>
                  </span>
                </div>
                <span className='text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full'>
                  {features[activeFeature].demo.credits}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

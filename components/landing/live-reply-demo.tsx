'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Bot, Zap, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLandingConfig } from '@/hooks/use-landing-config';

export function LiveReplyDemo() {
  const [step, setStep] = useState(0);
  const [currentExample, setCurrentExample] = useState(0);
  const { data: landingConfig } = useLandingConfig();
  const signupBonus = landingConfig?.signup_bonus ?? 200;

  const EXAMPLES = [
    {
      user: { name: 'nina_creates', initials: 'NC', color: 'bg-blue-500' },
      comment: 'price please 👀',
      reply: `Sent you a DM with the pricing and setup steps. You also get ${signupBonus} free AI credits on signup ✨`,
      trigger: 'Triggered by "price"',
    },
    {
      user: { name: 'sarah_design', initials: 'SD', color: 'bg-purple-500' },
      comment: 'Does this work for creators in India and abroad? 🌍',
      reply:
        'Yes! We support INR + UPI, and teams across multiple countries use the same workflows.',
      trigger: 'Triggered by "India"',
    },
    {
      user: { name: 'mike_tech', initials: 'MT', color: 'bg-green-500' },
      comment: 'Is auto-reply really free forever? 💬',
      reply:
        'Yes, auto comment reply and keyword DM are free forever. AI personalisation runs on credits when needed.',
      trigger: 'Triggered by "free"',
    },
    {
      user: { name: 'priya_vlogs', initials: 'PV', color: 'bg-orange-500' },
      comment: 'How fast does it reply to comments?',
      reply:
        'Replies usually go out in around 0.3 seconds, so hot leads get a response before they bounce.',
      trigger: 'Triggered by "fast"',
    },
  ];

  // Animation sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev === 3) {
          setCurrentExample(prevExample => (prevExample + 1) % EXAMPLES.length);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const example = EXAMPLES[currentExample];

  return (
    <div className='relative mx-auto max-w-[400px]'>
      {/* Phone/App Frame */}
      <Card className='relative overflow-hidden border-border bg-background shadow-2xl rounded-[2.5rem] border-4 h-[400px] flex flex-col'>
        {/* Header */}
        <div className='bg-card/80 backdrop-blur-md border-b border-border p-4 flex items-center gap-3 sticky top-0 z-10'>
          <div className='w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs'>
            IG
          </div>
          <div className='flex-1'>
            <div className='h-2.5 w-24 bg-foreground/10 rounded-full mb-1' />
            <div className='h-2 w-16 bg-foreground/5 rounded-full' />
          </div>
        </div>

        {/* Content Area */}
        <div className='flex-1 p-4 space-y-6 overflow-hidden'>
          {/* User Comment */}
          <div
            className={cn(
              'flex gap-3 transition-all duration-500 ease-out transform',
              step >= 0
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            )}
          >
            <Avatar className='w-8 h-8 border border-border'>
              <AvatarImage src={`/avatars/${example.user.initials}.jpg`} />
              <AvatarFallback className={example.user.color}>
                {example.user.initials}
              </AvatarFallback>
            </Avatar>
            <div className='flex-1 space-y-1'>
              <div className='flex items-baseline justify-between'>
                <span className='text-sm font-semibold'>
                  {example.user.name}
                </span>
                <span className='text-[10px] text-muted-foreground'>2m</span>
              </div>
              <p className='text-sm text-foreground/90 leading-snug'>
                {example.comment}
              </p>
            </div>
          </div>

          {/* AI Processing / Typing Indicator */}
          <div
            className={cn(
              'flex gap-3 transition-all duration-300',
              step === 1 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            )}
          >
            <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20'>
              <Bot className='w-4 h-4 text-primary animate-pulse' />
            </div>
            <div className='flex items-center gap-1 bg-muted/50 rounded-2xl px-3 py-2'>
              <div className='w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]' />
              <div className='w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]' />
              <div className='w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce' />
            </div>
          </div>

          {/* AI Reply */}
          <div
            className={cn(
              'flex gap-3 transition-all duration-500 ease-out transform',
              step >= 2
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            )}
          >
            <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20'>
              <Zap className='w-4 h-4 text-primary-foreground' />
            </div>
            <div className='flex-1 space-y-2'>
              <div className='bg-primary/5 border border-primary/10 rounded-2xl rounded-tl-none p-3'>
                <p className='text-sm text-foreground/90 leading-snug'>
                  {example.reply}
                </p>
              </div>
              <div className='flex items-center gap-2 text-[10px] text-muted-foreground'>
                <span className='flex items-center gap-1 text-primary'>
                  <Bot className='w-3 h-3' /> AI Auto-reply
                </span>
                <span>•</span>
                <span>Just now</span>
              </div>
            </div>
          </div>

          {/* DM Sent Notification */}
          <div
            className={cn(
              'absolute bottom-8 left-4 right-4 bg-background/95 backdrop-blur border border-border shadow-lg rounded-xl p-3 flex items-center gap-3 transition-all duration-500 transform',
              step >= 3
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            )}
          >
            <div className='w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success'>
              <Send className='w-4 h-4' />
            </div>
            <div>
              <p className='text-sm font-medium'>DM Sent Successfully</p>
              <p className='text-xs text-muted-foreground'>{example.trigger}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Glow Effect */}
      <div className='absolute -inset-4 bg-primary/20 blur-3xl -z-10 opacity-50' />
    </div>
  );
}

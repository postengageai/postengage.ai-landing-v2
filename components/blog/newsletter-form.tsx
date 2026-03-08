'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  variant?: 'default' | 'mini';
  className?: string;
}

export function NewsletterForm({
  variant = 'default',
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      // Assuming api client is set up, otherwise use fetch
      // await api.post('/newsletter/subscribe', { email });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/v1/newsletter/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      toast.success('Successfully subscribed to the newsletter!');
      setEmail('');
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'mini') {
    return (
      <form onSubmit={handleSubmit} className={cn('space-y-2', className)}>
        <Input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='w-full h-10 px-3 rounded-md border-0 bg-background/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-background/50'
          disabled={isLoading}
        />
        <Button
          type='submit'
          variant='secondary'
          className='w-full font-bold'
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className='h-4 w-4 animate-spin' />
          ) : (
            'Subscribe Free'
          )}
        </Button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col sm:flex-row gap-3 max-w-md mx-auto',
        className
      )}
    >
      <Input
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        className='bg-background h-10'
        disabled={isLoading}
      />
      <Button type='submit' className='h-10 px-6' disabled={isLoading}>
        {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Subscribe'}
      </Button>
    </form>
  );
}

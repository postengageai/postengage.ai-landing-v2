'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, MailWarning } from 'lucide-react';
import { PageHeader } from '@/components/marketing/page-header';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';

function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/v1/newsletter/unsubscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error('Unsubscribe failed');
      }

      setIsSuccess(true);
      toast.success('Successfully unsubscribed from the newsletter.');
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      toast.error('Failed to unsubscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className='text-center space-y-4 py-8'>
        <div className='mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
          <MailWarning className='h-6 w-6 text-green-600' />
        </div>
        <h3 className='text-xl font-semibold'>You have been unsubscribed</h3>
        <p className='text-muted-foreground max-w-sm mx-auto'>
          We're sorry to see you go. You won't receive any more emails from us.
        </p>
        <Button variant='outline' onClick={() => (window.location.href = '/')}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <Input
          type='email'
          placeholder='Enter your email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      <Button
        type='submit'
        className='w-full'
        variant='destructive'
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Processing...
          </>
        ) : (
          'Unsubscribe'
        )}
      </Button>
    </form>
  );
}

export default function UnsubscribePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <LandingHeader />
      <div className='py-20'>
        <PageHeader
          title='Unsubscribe'
          description='Manage your newsletter preferences'
        />
      </div>
      <main className='flex-1 flex items-center justify-center pb-20 px-4 bg-muted/30'>
        <Card className='w-full max-w-md mx-auto'>
          <CardHeader className='text-center'>
            <CardTitle className='text-2xl'>Unsubscribe</CardTitle>
            <CardDescription>
              Enter your email address to unsubscribe from our newsletter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense
              fallback={
                <div className='flex justify-center'>
                  <Loader2 className='h-6 w-6 animate-spin' />
                </div>
              }
            >
              <UnsubscribeForm />
            </Suspense>
          </CardContent>
        </Card>
      </main>
      <LandingFooter />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Target,
  Lightbulb,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';

// Metadata is handled via layout.tsx for this client component

interface EngagementResult {
  rate: number;
  rating: string;
  color: string;
  description: string;
}

const benchmarks = [
  { label: 'Nano (1K-10K)', rate: 4.4 },
  { label: 'Micro (10K-50K)', rate: 2.4 },
  { label: 'Mid (50K-500K)', rate: 1.6 },
  { label: 'Macro (500K-1M)', rate: 1.3 },
  { label: 'Mega (1M+)', rate: 0.9 },
];

const tips = [
  {
    icon: Target,
    title: 'Post at peak times',
    description:
      'Analyze when your audience is most active and schedule posts accordingly. Even a 2-hour shift can double your engagement.',
  },
  {
    icon: TrendingUp,
    title: 'Use carousel posts',
    description:
      'Carousels get 1.4x more reach and 3.1x more engagement than regular posts. Use them to tell stories and share value.',
  },
  {
    icon: Lightbulb,
    title: 'Write engaging captions',
    description:
      'Start with a hook, add value in the middle, and end with a question or CTA. Longer captions (150+ words) drive more comments.',
  },
  {
    icon: BarChart3,
    title: 'Reply to every comment',
    description:
      'Responding to comments within 1 hour boosts your post in the algorithm. Use PostEngage to automate this without losing authenticity.',
  },
];

function getEngagementResult(rate: number): EngagementResult {
  if (rate < 1) {
    return {
      rate,
      rating: 'Low',
      color: 'text-red-400',
      description:
        'Your engagement rate is below average. Focus on content quality, posting consistency, and audience interaction to improve.',
    };
  }
  if (rate < 3) {
    return {
      rate,
      rating: 'Average',
      color: 'text-yellow-400',
      description:
        'Your engagement rate is on par with most Instagram accounts. With some optimization, you can push into the good range.',
    };
  }
  if (rate < 6) {
    return {
      rate,
      rating: 'Good',
      color: 'text-green-400',
      description:
        'Great engagement rate! Your audience is actively interacting with your content. Keep up the good work and experiment with new formats.',
    };
  }
  return {
    rate,
    rating: 'Excellent',
    color: 'text-emerald-400',
    description:
      'Outstanding engagement! You have a highly engaged community. Your content resonates deeply with your audience.',
  };
}

export default function EngagementRateCalculatorPage() {
  const [followers, setFollowers] = useState('');
  const [avgLikes, setAvgLikes] = useState('');
  const [avgComments, setAvgComments] = useState('');
  const [result, setResult] = useState<EngagementResult | null>(null);

  function handleCalculate() {
    const f = parseFloat(followers);
    const l = parseFloat(avgLikes);
    const c = parseFloat(avgComments);

    if (!f || f <= 0) return;

    const rate = ((l + c) / f) * 100;
    setResult(getEngagementResult(rate));
  }

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider'>
              Free Tool
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Instagram Engagement Rate Calculator
            </h1>
            <p className='mt-4 text-lg text-muted-foreground max-w-xl mx-auto'>
              Calculate your engagement rate in seconds. Compare against
              benchmarks and get actionable tips to grow.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className='mt-16 px-4 sm:px-6'>
          <div className='mx-auto max-w-2xl'>
            <Card className='border-border'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Calculator className='h-5 w-5 text-primary' />
                  Calculate Your Rate
                </CardTitle>
                <CardDescription>
                  Enter your account metrics below
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-2'>
                  <Label htmlFor='followers'>Total Followers</Label>
                  <Input
                    id='followers'
                    type='number'
                    placeholder='e.g. 10000'
                    value={followers}
                    onChange={e => setFollowers(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='likes'>Average Likes per Post</Label>
                  <Input
                    id='likes'
                    type='number'
                    placeholder='e.g. 350'
                    value={avgLikes}
                    onChange={e => setAvgLikes(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='comments'>Average Comments per Post</Label>
                  <Input
                    id='comments'
                    type='number'
                    placeholder='e.g. 25'
                    value={avgComments}
                    onChange={e => setAvgComments(e.target.value)}
                  />
                </div>
                <Button onClick={handleCalculate} className='w-full' size='lg'>
                  Calculate Engagement Rate
                </Button>
              </CardContent>
            </Card>

            {/* Result */}
            {result && (
              <Card className='mt-8 border-border'>
                <CardContent className='pt-6'>
                  <div className='text-center'>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Your Engagement Rate
                    </p>
                    <p className={`text-5xl font-bold ${result.color}`}>
                      {result.rate.toFixed(2)}%
                    </p>
                    <p className={`mt-2 text-lg font-semibold ${result.color}`}>
                      {result.rating}
                    </p>
                    <p className='mt-3 text-sm text-muted-foreground max-w-md mx-auto'>
                      {result.description}
                    </p>
                  </div>

                  {/* Benchmark Comparison */}
                  <div className='mt-8'>
                    <h3 className='text-sm font-semibold mb-4'>
                      Industry Benchmarks
                    </h3>
                    <div className='space-y-3'>
                      {benchmarks.map(b => (
                        <div key={b.label} className='flex items-center gap-3'>
                          <span className='text-sm text-muted-foreground w-36 shrink-0'>
                            {b.label}
                          </span>
                          <div className='relative h-3 flex-1 rounded-full bg-muted overflow-hidden'>
                            <div
                              className='absolute inset-y-0 left-0 rounded-full bg-primary/30'
                              style={{
                                width: `${Math.min(b.rate * 10, 100)}%`,
                              }}
                            />
                            {result && (
                              <div
                                className='absolute top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary'
                                style={{
                                  left: `${Math.min(result.rate * 10, 100)}%`,
                                }}
                                title={`Your rate: ${result.rate.toFixed(2)}%`}
                              />
                            )}
                          </div>
                          <span className='text-sm font-medium w-12 text-right'>
                            {b.rate}%
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className='mt-3 text-xs text-muted-foreground'>
                      The vertical line shows your engagement rate relative to
                      each tier.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Tips */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold text-center mb-10'>
              Tips to Improve Your Engagement Rate
            </h2>
            <div className='grid gap-6 md:grid-cols-2'>
              {tips.map(tip => (
                <div
                  key={tip.title}
                  className='rounded-2xl border border-border bg-card p-6'
                >
                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10'>
                    <tip.icon className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='font-semibold mb-2'>{tip.title}</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10'>
              <Sparkles className='h-7 w-7 text-primary' />
            </div>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
              Boost your engagement rate with PostEngage AI
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
              Automatically reply to every comment, send personalized DMs, and
              never miss an interaction. Let AI handle your engagement 24/7.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>
                  Try PostEngage Free
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/tools'>All Free Tools</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Instagram Engagement Rate Calculator',
            description:
              'Calculate your Instagram engagement rate for free and compare against industry benchmarks.',
            url: 'https://postengage.ai/tools/instagram-engagement-rate-calculator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Clock, ArrowRight, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';

// Metadata is handled via layout.tsx for this client component

type Niche =
  | 'fashion'
  | 'tech'
  | 'food'
  | 'fitness'
  | 'business'
  | 'education'
  | 'travel';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = Array.from({ length: 24 }, (_, i) => i);

// Engagement scores 0-10 for each niche, day (0-6), hour (0-23)
const nicheData: Record<Niche, number[][]> = {
  fashion: [
    [0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 7, 9, 8, 6, 5, 6, 7, 8, 9, 8, 7, 5, 3, 1], // Mon
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 9, 7, 5, 4, 5, 6, 7, 8, 9, 8, 6, 3, 1], // Tue
    [0, 0, 0, 0, 0, 1, 2, 4, 5, 8, 9, 10, 8, 6, 5, 6, 7, 8, 9, 8, 7, 5, 3, 1], // Wed
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 8, 7, 5, 4, 5, 6, 7, 8, 8, 7, 5, 3, 1], // Thu
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 9, 8, 7, 6, 7, 8, 8, 7, 6, 5, 4, 3, 1], // Fri
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 9, 8, 7, 6, 5, 6, 7, 8, 7, 5, 3, 1], // Sat
    [0, 0, 0, 0, 0, 0, 1, 2, 3, 5, 8, 9, 8, 7, 6, 5, 5, 6, 7, 9, 8, 6, 4, 1], // Sun
  ],
  tech: [
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 9, 8, 7, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Mon
    [0, 0, 0, 0, 0, 1, 3, 5, 8, 10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Tue
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 9, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Wed
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 8, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Thu
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 9, 8, 7, 6, 6, 7, 6, 5, 4, 3, 2, 1, 1, 0, 0], // Fri
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 7, 7, 6, 5, 5, 4, 4, 5, 6, 5, 4, 3, 2, 1], // Sat
    [0, 0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 6, 5, 4, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1], // Sun
  ],
  food: [
    [0, 0, 0, 0, 0, 1, 2, 4, 5, 6, 7, 9, 8, 6, 5, 5, 6, 8, 9, 8, 7, 5, 3, 1], // Mon
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 7, 9, 8, 6, 5, 5, 6, 8, 10, 9, 7, 5, 3, 1], // Tue
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 7, 9, 8, 6, 5, 5, 7, 8, 9, 8, 7, 5, 3, 1], // Wed
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 7, 8, 8, 6, 5, 5, 6, 8, 9, 8, 7, 5, 3, 1], // Thu
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 7, 9, 8, 7, 6, 6, 7, 8, 10, 9, 8, 6, 4, 1], // Fri
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 8, 10, 9, 7, 6, 5, 5, 7, 9, 8, 7, 5, 3, 1], // Sat
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 9, 10, 9, 7, 6, 5, 5, 7, 8, 7, 6, 4, 3, 1], // Sun
  ],
  fitness: [
    [0, 0, 0, 0, 0, 2, 5, 8, 9, 7, 6, 5, 6, 5, 4, 5, 6, 7, 8, 7, 5, 3, 2, 1], // Mon
    [0, 0, 0, 0, 0, 2, 5, 8, 10, 7, 6, 5, 6, 5, 4, 5, 6, 7, 8, 7, 5, 3, 2, 1], // Tue
    [0, 0, 0, 0, 0, 2, 5, 7, 9, 7, 6, 5, 6, 5, 4, 5, 6, 7, 9, 8, 6, 4, 2, 1], // Wed
    [0, 0, 0, 0, 0, 2, 5, 8, 9, 7, 6, 5, 5, 5, 4, 5, 6, 7, 8, 7, 5, 3, 2, 1], // Thu
    [0, 0, 0, 0, 0, 2, 5, 7, 8, 7, 6, 5, 5, 5, 4, 5, 6, 7, 8, 7, 5, 3, 2, 1], // Fri
    [0, 0, 0, 0, 0, 1, 3, 6, 9, 10, 8, 7, 6, 5, 4, 4, 5, 6, 7, 6, 5, 3, 2, 1], // Sat
    [0, 0, 0, 0, 0, 1, 3, 5, 8, 9, 8, 7, 6, 5, 4, 4, 5, 7, 8, 7, 5, 3, 2, 1], // Sun
  ],
  business: [
    [0, 0, 0, 0, 0, 1, 3, 6, 8, 10, 9, 8, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Mon
    [0, 0, 0, 0, 0, 1, 3, 6, 8, 9, 9, 8, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Tue
    [0, 0, 0, 0, 0, 1, 3, 6, 8, 9, 10, 9, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Wed
    [0, 0, 0, 0, 0, 1, 3, 6, 8, 9, 9, 8, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], // Thu
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 8, 8, 7, 6, 7, 7, 6, 5, 4, 3, 3, 2, 1, 1, 0], // Fri
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 7, 7, 6, 5, 4, 3, 3, 4, 5, 4, 3, 2, 1, 0], // Sat
    [0, 0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 6, 5, 4, 4, 4, 5, 6, 7, 6, 4, 3, 2, 0], // Sun
  ],
  education: [
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 9, 8, 7, 6, 7, 8, 9, 8, 6, 5, 4, 3, 2, 1, 0], // Mon
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 9, 8, 7, 6, 7, 8, 9, 8, 6, 5, 4, 3, 2, 1, 0], // Tue
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 8, 9, 8, 7, 7, 8, 10, 9, 7, 5, 4, 3, 2, 1, 0], // Wed
    [0, 0, 0, 0, 0, 1, 3, 5, 7, 8, 8, 7, 6, 7, 8, 9, 8, 6, 5, 4, 3, 2, 1, 0], // Thu
    [0, 0, 0, 0, 0, 1, 3, 5, 6, 8, 7, 6, 5, 6, 7, 8, 7, 5, 4, 3, 2, 1, 1, 0], // Fri
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 8, 7, 5, 4, 4, 5, 6, 7, 6, 4, 3, 2, 0], // Sat
    [0, 0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 7, 6, 5, 5, 6, 7, 8, 9, 7, 5, 3, 2, 0], // Sun
  ],
  travel: [
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 9, 8, 6, 5, 5, 6, 7, 8, 9, 8, 5, 3, 1], // Mon
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 9, 8, 6, 5, 5, 6, 7, 8, 9, 8, 5, 3, 1], // Tue
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 9, 8, 7, 6, 6, 7, 8, 9, 10, 8, 5, 3, 1], // Wed
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 9, 8, 6, 5, 5, 6, 7, 8, 9, 8, 5, 3, 1], // Thu
    [0, 0, 0, 0, 0, 1, 2, 3, 5, 7, 8, 10, 9, 7, 6, 6, 7, 8, 9, 9, 8, 6, 4, 1], // Fri
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 9, 10, 9, 8, 7, 6, 6, 7, 8, 8, 7, 5, 3, 1], // Sat
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 9, 10, 9, 8, 7, 6, 5, 6, 7, 8, 7, 5, 3, 1], // Sun
  ],
};

const nicheOptions: { value: Niche; label: string }[] = [
  { value: 'fashion', label: 'Fashion & Style' },
  { value: 'tech', label: 'Tech & Software' },
  { value: 'food', label: 'Food & Cooking' },
  { value: 'fitness', label: 'Fitness & Health' },
  { value: 'business', label: 'Business & Entrepreneurship' },
  { value: 'education', label: 'Education & Learning' },
  { value: 'travel', label: 'Travel & Adventure' },
];

const timezones = [
  { value: '0', label: 'UTC+0 (London, Lisbon)' },
  { value: '1', label: 'UTC+1 (Paris, Berlin)' },
  { value: '2', label: 'UTC+2 (Cairo, Athens)' },
  { value: '3', label: 'UTC+3 (Moscow, Istanbul)' },
  { value: '4', label: 'UTC+4 (Dubai)' },
  { value: '5', label: 'UTC+5 (Karachi)' },
  { value: '5.5', label: 'UTC+5:30 (Mumbai, Delhi)' },
  { value: '8', label: 'UTC+8 (Singapore, Beijing)' },
  { value: '9', label: 'UTC+9 (Tokyo, Seoul)' },
  { value: '10', label: 'UTC+10 (Sydney)' },
  { value: '-5', label: 'UTC-5 (New York, EST)' },
  { value: '-6', label: 'UTC-6 (Chicago, CST)' },
  { value: '-7', label: 'UTC-7 (Denver, MST)' },
  { value: '-8', label: 'UTC-8 (Los Angeles, PST)' },
];

function getHeatColor(score: number): string {
  if (score <= 0) return 'bg-muted/30';
  if (score <= 2) return 'bg-emerald-950/40';
  if (score <= 4) return 'bg-emerald-900/50';
  if (score <= 6) return 'bg-emerald-700/50';
  if (score <= 8) return 'bg-emerald-500/60';
  return 'bg-emerald-400/70';
}

function formatHour(h: number): string {
  if (h === 0) return '12a';
  if (h < 12) return `${h}a`;
  if (h === 12) return '12p';
  return `${h - 12}p`;
}

export default function BestTimeToPostPage() {
  const [niche, setNiche] = useState<Niche | ''>('');
  const [tzOffset, setTzOffset] = useState('-5');

  const adjustedData = useMemo(() => {
    if (!niche) return null;
    const data = nicheData[niche];
    const offset = parseFloat(tzOffset);
    // The data is in UTC-5 (EST) by default. Adjust for selected timezone.
    const diff = offset - -5;
    return data.map(dayRow => {
      const shifted = new Array(24);
      for (let h = 0; h < 24; h++) {
        const srcH = (((h - diff) % 24) + 24) % 24;
        shifted[h] = dayRow[Math.floor(srcH)];
      }
      return shifted;
    });
  }, [niche, tzOffset]);

  const topTimes = useMemo(() => {
    if (!adjustedData) return [];
    const slots: { day: number; hour: number; score: number }[] = [];
    adjustedData.forEach((dayRow, d) => {
      dayRow.forEach((score, h) => {
        slots.push({ day: d, hour: h, score });
      });
    });
    slots.sort((a, b) => b.score - a.score);
    return slots.slice(0, 3);
  }, [adjustedData]);

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
              Best Time to Post on Instagram
            </h1>
            <p className='mt-4 text-lg text-muted-foreground max-w-xl mx-auto'>
              Discover the optimal posting times for your niche with our visual
              heatmap. Maximize your reach and engagement.
            </p>
          </div>
        </section>

        {/* Controls */}
        <section className='mt-16 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <Card className='border-border'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Clock className='h-5 w-5 text-primary' />
                  Find Your Best Times
                </CardTitle>
                <CardDescription>
                  Select your niche and timezone to see personalized
                  recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid gap-6 sm:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label>Niche / Industry</Label>
                    <Select
                      value={niche}
                      onValueChange={v => setNiche(v as Niche)}
                    >
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select your niche' />
                      </SelectTrigger>
                      <SelectContent>
                        {nicheOptions.map(n => (
                          <SelectItem key={n.value} value={n.value}>
                            {n.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label>Timezone</Label>
                    <Select value={tzOffset} onValueChange={setTzOffset}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select timezone' />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map(tz => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heatmap */}
            {adjustedData && (
              <div className='mt-8'>
                {/* Top 3 Times */}
                <div className='mb-8 grid gap-4 sm:grid-cols-3'>
                  {topTimes.map((slot, i) => (
                    <div
                      key={i}
                      className='flex items-center gap-3 rounded-xl border border-border bg-card p-4'
                    >
                      <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10'>
                        <Star className='h-5 w-5 text-primary' />
                      </div>
                      <div>
                        <p className='text-sm font-semibold'>
                          #{i + 1} Best Time
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          {days[slot.day]} at{' '}
                          {slot.hour === 0
                            ? '12:00 AM'
                            : slot.hour < 12
                              ? `${slot.hour}:00 AM`
                              : slot.hour === 12
                                ? '12:00 PM'
                                : `${slot.hour - 12}:00 PM`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Heatmap Grid */}
                <Card className='border-border overflow-hidden'>
                  <CardContent className='pt-6 overflow-x-auto'>
                    <div className='min-w-[640px]'>
                      {/* Hour labels */}
                      <div className='flex mb-1'>
                        <div className='w-12 shrink-0' />
                        {hours.map(h => (
                          <div
                            key={h}
                            className='flex-1 text-center text-[10px] text-muted-foreground'
                          >
                            {h % 3 === 0 ? formatHour(h) : ''}
                          </div>
                        ))}
                      </div>
                      {/* Rows */}
                      {days.map((day, dayIndex) => (
                        <div key={day} className='flex mb-0.5'>
                          <div className='w-12 shrink-0 flex items-center text-xs font-medium text-muted-foreground'>
                            {day}
                          </div>
                          {hours.map(h => {
                            const score = adjustedData[dayIndex][h];
                            const isTop = topTimes.some(
                              t => t.day === dayIndex && t.hour === h
                            );
                            return (
                              <div
                                key={h}
                                className={`flex-1 h-8 mx-px rounded-sm transition-colors ${getHeatColor(score)} ${isTop ? 'ring-2 ring-primary ring-offset-1 ring-offset-background' : ''}`}
                                title={`${day} ${formatHour(h)} — Score: ${score}/10`}
                              />
                            );
                          })}
                        </div>
                      ))}
                      {/* Legend */}
                      <div className='flex items-center justify-end gap-1 mt-4'>
                        <span className='text-[10px] text-muted-foreground mr-1'>
                          Low
                        </span>
                        {[0, 2, 4, 6, 8, 10].map(s => (
                          <div
                            key={s}
                            className={`w-6 h-4 rounded-sm ${getHeatColor(s)}`}
                          />
                        ))}
                        <span className='text-[10px] text-muted-foreground ml-1'>
                          High
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!niche && (
              <div className='mt-8 rounded-2xl border border-dashed border-border p-12 text-center'>
                <Clock className='mx-auto h-10 w-10 text-muted-foreground/50 mb-4' />
                <p className='text-muted-foreground'>
                  Select your niche above to see the heatmap
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10'>
              <Sparkles className='h-7 w-7 text-primary' />
            </div>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
              Schedule posts at the perfect time with PostEngage
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
              Know the best time to post? Now automate it. PostEngage schedules
              your content and handles engagement automatically.
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
            name: 'Best Time to Post on Instagram',
            description:
              'Find the best times to post on Instagram for your niche with a visual heatmap.',
            url: 'https://postengage.ai/tools/instagram-best-time-to-post',
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

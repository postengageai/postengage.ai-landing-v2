'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/constants';

// ── Constants ──────────────────────────────────────────────────────────────────

const TIME_PER_COMMENT_MIN = 1.5;
const TIME_PER_DM_MIN = 3.0;
const PLAN_COST_USD = 29;
const MAX_ROI_DISPLAY = 30;

// ── Slider input ───────────────────────────────────────────────────────────────

interface SliderInputProps {
  readonly label: string;
  readonly value: number;
  readonly min: number;
  readonly max: number;
  readonly step: number;
  readonly onChange: (v: number) => void;
  readonly suffix?: string;
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix = '',
}: SliderInputProps) {
  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <label className='text-sm text-muted-foreground'>{label}</label>
        <span className='text-sm font-semibold text-foreground tabular-nums'>
          {suffix}
          {value.toLocaleString()}
        </span>
      </div>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className='w-full accent-primary h-1.5 rounded-full cursor-pointer'
      />
      <div className='flex justify-between text-[10px] text-muted-foreground/60'>
        <span>
          {suffix}
          {min}
        </span>
        <span>
          {suffix}
          {max}
        </span>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function ROICalculatorSection() {
  const [comments, setComments] = useState(50);
  const [dms, setDms] = useState(20);
  const [rate, setRate] = useState(50);

  const minutesSaved = comments * TIME_PER_COMMENT_MIN + dms * TIME_PER_DM_MIN;
  const hoursSaved = minutesSaved / 60;
  const dollarsSaved = hoursSaved * rate;
  const roiMultiple = PLAN_COST_USD > 0 ? dollarsSaved / PLAN_COST_USD : 0;
  const weeksToPayOff =
    dollarsSaved > 0 ? (PLAN_COST_USD / (dollarsSaved / 4.33)).toFixed(1) : '—';
  const roiBarWidth = Math.min((roiMultiple / MAX_ROI_DISPLAY) * 100, 100);

  return (
    <section className='py-16 sm:py-24 bg-secondary/30'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight'>
            How much is your Instagram time{' '}
            <span className='text-primary'>actually worth?</span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground font-light'>
            Adjust the sliders to see your personalised ROI — all calculated
            client-side, no sign-up needed.
          </p>
        </div>

        <div className='rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-lg'>
          <div className='grid sm:grid-cols-2 gap-8'>
            {/* Inputs */}
            <div className='space-y-6'>
              <SliderInput
                label='Comments you reply to per week'
                value={comments}
                min={0}
                max={500}
                step={5}
                onChange={setComments}
              />
              <SliderInput
                label='DMs you reply to per week'
                value={dms}
                min={0}
                max={200}
                step={5}
                onChange={setDms}
              />
              <SliderInput
                label='Your hourly rate'
                value={rate}
                min={10}
                max={300}
                step={5}
                onChange={setRate}
                suffix='$'
              />
            </div>

            {/* Output */}
            <div className='flex flex-col justify-between rounded-xl bg-muted/30 border border-border/50 p-5'>
              <div className='space-y-4'>
                <p className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                  PostEngage would save you
                </p>

                <div>
                  <p className='text-4xl font-bold text-foreground tabular-nums'>
                    {hoursSaved.toFixed(1)}{' '}
                    <span className='text-xl font-normal text-muted-foreground'>
                      hrs/week
                    </span>
                  </p>
                  <p className='mt-1 text-2xl font-semibold text-primary tabular-nums'>
                    ${dollarsSaved.toFixed(0)}/week
                  </p>
                  <p className='mt-0.5 text-sm text-muted-foreground'>
                    = ${(dollarsSaved * 4.33).toFixed(0)}/month in time saved
                  </p>
                </div>

                {/* ROI bar */}
                <div className='space-y-1.5'>
                  <div className='flex items-center justify-between text-xs'>
                    <span className='text-muted-foreground'>
                      ROI vs plan cost (${PLAN_COST_USD}/mo)
                    </span>
                    <span className='font-bold text-foreground'>
                      {roiMultiple.toFixed(1)}x
                    </span>
                  </div>
                  <div className='h-2 w-full rounded-full bg-muted overflow-hidden'>
                    <div
                      className='h-full rounded-full bg-primary transition-all duration-300'
                      style={{ width: `${roiBarWidth}%` }}
                    />
                  </div>
                  {roiMultiple >= MAX_ROI_DISPLAY && (
                    <p className='text-[10px] text-muted-foreground/60'>
                      Capped at {MAX_ROI_DISPLAY}x display
                    </p>
                  )}
                </div>
              </div>

              {dollarsSaved > PLAN_COST_USD && (
                <p className='text-xs text-success font-medium mt-4'>
                  At your rate, PostEngage pays for itself in {weeksToPayOff}{' '}
                  weeks.
                </p>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className='mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-muted-foreground text-center sm:text-left'>
              PostEngage handles every reply automatically, 24/7.
            </p>
            <Button size='lg' className='min-w-[200px]' asChild>
              <Link href={`${APP_URL}/signup`}>
                Start saving time
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

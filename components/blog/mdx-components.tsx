'use client';

import React from 'react';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

/* ---------- Callout / Alert ---------- */
type CalloutVariant = 'info' | 'warning' | 'success' | 'tip';

const calloutStyles: Record<
  CalloutVariant,
  { bg: string; border: string; icon: React.ReactNode; heading: string }
> = {
  info: {
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/30',
    icon: <Info className='h-5 w-5 text-blue-400' />,
    heading: 'Info',
  },
  warning: {
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/30',
    icon: <AlertTriangle className='h-5 w-5 text-amber-400' />,
    heading: 'Warning',
  },
  success: {
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/30',
    icon: <CheckCircle className='h-5 w-5 text-emerald-400' />,
    heading: 'Success',
  },
  tip: {
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/30',
    icon: <Lightbulb className='h-5 w-5 text-purple-400' />,
    heading: 'Tip',
  },
};

export function Callout({
  variant = 'info',
  title,
  children,
}: {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}) {
  const s = calloutStyles[variant];
  return (
    <div
      className={`my-6 rounded-lg border ${s.border} ${s.bg} p-4`}
    >
      <div className='flex items-center gap-2 font-semibold mb-1'>
        {s.icon}
        <span>{title || s.heading}</span>
      </div>
      <div className='text-sm text-muted-foreground leading-relaxed pl-7'>
        {children}
      </div>
    </div>
  );
}

/* ---------- Blog prose HTML wrapper ---------- */
export function BlogProse({ htmlContent }: { htmlContent: string }) {
  return (
    <div
      className='blog-prose'
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

'use client';

import { useState } from 'react';
import { Twitter, Linkedin, Link2, Check } from 'lucide-react';

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://postengage.ai/blog/${slug}`;

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm text-muted-foreground mr-1'>Share:</span>
      <button
        onClick={shareTwitter}
        className='flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'
        aria-label='Share on Twitter'
      >
        <Twitter className='h-4 w-4' />
      </button>
      <button
        onClick={shareLinkedIn}
        className='flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'
        aria-label='Share on LinkedIn'
      >
        <Linkedin className='h-4 w-4' />
      </button>
      <button
        onClick={copyLink}
        className='flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'
        aria-label='Copy link'
      >
        {copied ? (
          <Check className='h-4 w-4 text-emerald-400' />
        ) : (
          <Link2 className='h-4 w-4' />
        )}
      </button>
    </div>
  );
}

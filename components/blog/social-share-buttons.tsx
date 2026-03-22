'use client';

import { Button } from '@/components/ui/button';
import { Share2, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

interface SocialShareButtonsProps {
  title: string;
  url?: string;
}

export function SocialShareButtons({ title, url }: SocialShareButtonsProps) {
  const resolvedUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(resolvedUrl);

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      '_blank',
      'width=550,height=400'
    );
  };

  const handleLinkedinShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      '_blank',
      'width=550,height=400'
    );
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: resolvedUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err); // eslint-disable-line no-console
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(resolvedUrl);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <div className='flex gap-2'>
      <Button
        variant='ghost'
        size='icon'
        onClick={handleTwitterShare}
        className='h-9 w-9 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors dark:hover:bg-blue-900/20'
        aria-label='Share on Twitter'
      >
        <Twitter className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={handleLinkedinShare}
        className='h-9 w-9 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors dark:hover:bg-blue-900/20'
        aria-label='Share on LinkedIn'
      >
        <Linkedin className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={handleNativeShare}
        className='h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-colors'
        aria-label='Share options'
      >
        <Share2 className='h-4 w-4' />
      </Button>
    </div>
  );
}

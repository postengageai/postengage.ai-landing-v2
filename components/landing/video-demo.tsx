'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function VideoDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className='relative mx-auto max-w-[600px] cursor-pointer group'>
          {/* Browser Frame */}
          <div className='rounded-xl border border-border bg-card shadow-2xl overflow-hidden'>
            {/* Header */}
            <div className='h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-2'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-red-500/20' />
                <div className='w-3 h-3 rounded-full bg-yellow-500/20' />
                <div className='w-3 h-3 rounded-full bg-green-500/20' />
              </div>
              <div className='mx-auto px-3 py-0.5 rounded-md bg-background text-[10px] text-muted-foreground font-medium'>
                postengage.ai/demo
              </div>
            </div>

            {/* Video Placeholder / Thumbnail */}
            <div className='relative aspect-video bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors'>
              <div className='absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent' />

              {/* Play Button */}
              <div className='relative z-10 h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform group-hover:scale-110'>
                <Play className='h-6 w-6 text-primary-foreground fill-primary-foreground ml-1' />
              </div>

              {/* Pulse Effect */}
              <div className='absolute z-0 h-16 w-16 rounded-full bg-primary/20 animate-ping' />

              <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                <div className='space-y-1'>
                  <div className='h-2 w-24 bg-foreground/10 rounded-full' />
                  <div className='h-2 w-16 bg-foreground/10 rounded-full' />
                </div>
              </div>
            </div>
          </div>

          {/* Label */}
          <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
            Watch 1-minute demo
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className='max-w-4xl p-0 overflow-hidden bg-black border-none'>
        <div className='aspect-video w-full flex items-center justify-center bg-black text-white'>
          {/* In a real implementation, this would be an iframe to YouTube/Loom/Vimeo */}
          <div className='text-center'>
            <p className='text-lg font-medium'>Demo Video Placeholder</p>
            <p className='text-sm text-gray-400 mt-2'>
              Embed YouTube/Loom here
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

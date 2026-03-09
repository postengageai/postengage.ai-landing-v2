'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { sendGAEvent } from '@/lib/gtag';

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    let eventName = '';

    if (pathname === '/') {
      eventName = 'landing_page_view';
    } else if (pathname === '/pricing') {
      eventName = 'pricing_page_view';
    } else if (pathname === '/features') {
      eventName = 'features_page_view';
    } else if (pathname === '/about') {
      eventName = 'about_page_view';
    }

    if (eventName) {
      sendGAEvent({
        action: eventName,
        category: 'navigation',
        label: pathname,
      });
    }
  }, [pathname]);

  return null;
}

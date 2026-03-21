'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { sendGAEvent } from '@/lib/gtag';

export function TimeOnPageTracker() {
  const pathname = usePathname();
  // Use refs to keep track of timeouts so we can clear them
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear existing timeouts on route change
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    const milestones = [30, 60, 120, 300];

    milestones.forEach(seconds => {
      const timeout = setTimeout(() => {
        sendGAEvent({
          action: `time_on_page_${seconds}s`,
          category: 'engagement',
          label: 'time_on_page',
          value: seconds,
        });
      }, seconds * 1000);

      timeoutsRef.current.push(timeout);
    });

    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [pathname]);

  return null;
}

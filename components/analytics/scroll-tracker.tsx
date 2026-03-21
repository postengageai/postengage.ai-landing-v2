'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { sendGAEvent } from '@/lib/gtag';

export function ScrollTracker() {
  const pathname = usePathname();
  const [trackedMilestones, setTrackedMilestones] = useState<number[]>([]);

  useEffect(() => {
    // Reset milestones on route change
    setTrackedMilestones([]);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const milestones = [25, 50, 75, 100];

      milestones.forEach(milestone => {
        if (
          scrollPercent >= milestone &&
          !trackedMilestones.includes(milestone)
        ) {
          sendGAEvent({
            action: `scroll_${milestone}_percent`,
            category: 'engagement',
            label: 'scroll_depth',
            value: milestone,
          });
          setTrackedMilestones(prev => [...prev, milestone]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackedMilestones]);

  return null;
}

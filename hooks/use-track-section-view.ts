import { useEffect, useRef } from 'react';
import { sendGAEvent } from '@/lib/gtag';

export function useTrackSectionView(sectionName: string) {
  const ref = useRef<HTMLElement | null>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          sendGAEvent({
            action: `${sectionName}_view`,
            category: 'content',
            label: sectionName,
          });
          hasTracked.current = true;
        }
      },
      { threshold: 0.2 } // 20% visible is safer for large sections
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [sectionName]);

  return ref;
}

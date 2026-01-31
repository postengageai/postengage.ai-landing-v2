'use client';

import { useEffect } from 'react';
import { IS_DEV } from '@/lib/constants';

// Conversion event types
export type ConversionEvent =
  | 'page_view'
  | 'hero_cta_click'
  | 'pricing_cta_click'
  | 'exit_intent_shown'
  | 'exit_intent_cta_click'
  | 'faq_expand'
  | 'testimonial_view'
  | 'signup_start'
  | 'signup_complete';

interface ConversionData {
  event: ConversionEvent;
  timestamp: number;
  url: string;
  referrer?: string;
  [key: string]: unknown;
}

/**
 * Track conversion events
 * This can be connected to Google Analytics, Mixpanel, or your own analytics backend
 */
export function trackConversion(
  event: ConversionEvent,
  additionalData?: Record<string, unknown>
) {
  const data: ConversionData = {
    event,
    timestamp: Date.now(),
    url: window.location.href,
    referrer: document.referrer,
    ...additionalData,
  };

  // Log to console in development
  if (IS_DEV) {
    // eslint-disable-next-line no-console
    console.log('[Conversion]', data);
  }

  // Send to Vercel Analytics if available
  if (typeof window !== 'undefined' && 'va' in window) {
    // @ts-expect-error - Vercel Analytics global
    window.va('event', {
      name: event,
      data: additionalData,
    });
  }

  // Send to your analytics endpoint
  // fetch('/api/analytics/conversion', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // }).catch(() => {
  //   // Silently fail - don't block user experience
  // });
}

/**
 * Hook to track page views
 */
export function usePageViewTracking() {
  useEffect(() => {
    trackConversion('page_view', {
      title: document.title,
      path: window.location.pathname,
    });
  }, []);
}

/**
 * Hook to track CTA clicks
 */
export function useCTATracking(ctaName: string) {
  return {
    onClick: () => {
      trackConversion(`${ctaName}_cta_click` as ConversionEvent, {
        ctaName,
      });
    },
  };
}

/**
 * Component to inject conversion tracking
 */
export function ConversionTracker() {
  usePageViewTracking();
  return null;
}

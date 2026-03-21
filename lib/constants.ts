export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || '';
export const IS_DEV = process.env.NODE_ENV === 'development';

// Analytics
export const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || '';
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';

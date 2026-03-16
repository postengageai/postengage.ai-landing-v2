import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Pricing — PostEngage.ai',
  description:
    'PostEngage.ai pricing: auto DM and comment reply are FREE forever. AI-powered replies from ₹149. No monthly subscription. Pay only for what you use.',
  alternates: {
    canonical: 'https://postengage.ai/pricing',
  },
  openGraph: {
    title: 'PostEngage.ai Pricing — Free to Start, No Subscription',
    description:
      'Auto DM + comment reply free forever. AI replies from ₹149. No monthly subscription — pay only for what you use.',
    url: 'https://postengage.ai/pricing',
    siteName: 'PostEngage.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PostEngage.ai Pricing — Free to Start, No Subscription',
    description:
      'Auto DM + comment reply free forever. AI replies from ₹149. No monthly subscription — pay only for what you use.',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

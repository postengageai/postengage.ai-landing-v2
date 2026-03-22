import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Instagram Engagement Rate Calculator',
  description:
    'Calculate your Instagram engagement rate for free. Compare your performance against industry benchmarks and get actionable tips to improve.',
  openGraph: {
    title: 'Free Instagram Engagement Rate Calculator | PostEngage.ai',
    description:
      'Calculate your Instagram engagement rate for free. Compare your performance against industry benchmarks and get actionable tips to improve.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://postengage.ai/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

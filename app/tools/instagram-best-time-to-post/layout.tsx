import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Time to Post on Instagram',
  description:
    'Find the best times to post on Instagram for your niche. Visual heatmap shows optimal posting times across all 7 days and 24 hours.',
  openGraph: {
    title: 'Best Time to Post on Instagram | PostEngage.ai',
    description:
      'Find the best times to post on Instagram for your niche with a visual heatmap.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

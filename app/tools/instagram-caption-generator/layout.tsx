import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Instagram Caption Generator',
  description:
    'Generate engaging Instagram captions with hashtags for any niche. Choose your tone, add keywords, and get 3 ready-to-use captions instantly.',
  openGraph: {
    title: 'Free Instagram Caption Generator | PostEngage.ai',
    description:
      'Generate engaging Instagram captions with hashtags for any niche. Choose your tone and get ready-to-use captions instantly.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

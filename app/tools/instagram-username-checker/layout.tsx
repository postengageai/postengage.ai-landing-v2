import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Username Ideas Generator',
  description:
    'Generate creative Instagram username ideas based on your name or brand. Get 10 unique suggestions with availability indicators.',
  openGraph: {
    title: 'Instagram Username Ideas Generator | PostEngage.ai',
    description:
      'Generate creative Instagram username ideas based on your name or brand.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

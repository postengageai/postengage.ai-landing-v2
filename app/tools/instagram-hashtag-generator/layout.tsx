import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Instagram Hashtag Generator',
  description:
    'Generate 30 strategic Instagram hashtags for any niche. Organized by popularity tier — popular, medium, and niche-specific — to maximize your reach.',
  openGraph: {
    title: 'Free Instagram Hashtag Generator | PostEngage.ai',
    description:
      'Generate 30 strategic Instagram hashtags organized by popularity tier to maximize your reach.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from '@/components/providers';
import './globals.css';
import { ScrollToTop } from '@/components/scroll-to-top';
import { MetaPixel } from '@/components/analytics/meta-pixel';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://postengage.ai'),
  title: {
    template: '%s | PostEngage.ai',
    default: 'PostEngage — Instagram Automation That Tracks Its Own ROI',
  },
  description:
    'PostEngage automates your Instagram DMs, comments, and story replies — and shows you the before vs after in real follower growth, leads captured, and time saved. The only tool that proves its own ROI.',
  keywords: [
    'Instagram Automation',
    'Instagram ROI Tracker',
    'ManyChat Alternative',
    'Instagram Growth Analytics',
    'Before After Instagram',
    'Auto DM Tool',
    'Instagram Lead Capture',
    'AI Comment Reply',
    'Social Media Automation',
    'Instagram Post Scheduler',
    'Instagram Impact Score',
    'Lead Generation Tool',
    'Time Saved Instagram',
    'Pay-as-you-go Automation',
    'AI Voice Adaptation',
  ],
  openGraph: {
    title: 'PostEngage — Instagram Automation That Tracks Its Own ROI',
    description:
      'PostEngage automates your Instagram and shows you the before vs after: real follower growth, leads captured, and hours saved — in one dashboard. Join 2,400+ creators tracking their Instagram growth.',
    url: 'https://postengage.ai',
    siteName: 'PostEngage.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@postengage_ai',
    creator: '@postengage_ai',
    title: 'PostEngage — Instagram Automation That Proves Its Own ROI',
    description:
      'See your before. See your after. PostEngage tracks every follower, lead, and hour saved from day one. Join 2,400+ creators.',
  },
  alternates: {
    canonical: 'https://postengage.ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <head>
        <link
          rel='alternate'
          type='application/rss+xml'
          title='PostEngage.ai Blog'
          href='/feed.xml'
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ScrollToTop />
        <Providers>{children}</Providers>
        <Analytics />
        <MetaPixel />
      </body>
    </html>
  );
}

import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from '@/components/providers';
import './globals.css';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ConversionTracker } from '@/components/analytics/conversion-tracker';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { GoogleTagManager } from '@/components/analytics/google-tag-manager';
import { ScrollTracker } from '@/components/analytics/scroll-tracker';
import { PageViewTracker } from '@/components/analytics/page-view-tracker';
import { TimeOnPageTracker } from '@/components/analytics/time-on-page-tracker';
import { JsonLd } from '@/components/seo/json-ld';
import { MicrosoftClarity } from '@/components/analytics/clarity';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://postengage.ai'),
  title: {
    template: '%s | PostEngage.ai',
    default: 'PostEngage.ai — AI Instagram Automation & DM Replies',
  },
  description:
    'Stop losing followers to slow replies. PostEngage.ai automates Instagram DMs & comments in your exact voice. Free to start — no credit card.',
  keywords: [
    'Instagram Automation',
    'ManyChat Alternative',
    'Auto DM Tool',
    'Instagram Bot',
    'AI Instagram Replies',
    'Instagram DM Automation',
    'AI Comment Reply',
    'Social Media Automation',
    'Visual Flow Builder',
    'Instagram Lead Generation',
    'Voice DNA',
    'Instagram Engagement Tool',
    'Auto Comment Reply',
    'Pay-as-you-go Automation',
    'AI Voice Adaptation',
  ],
  openGraph: {
    title: 'PostEngage.ai — AI Instagram Automation & DM Replies',
    description:
      'AI that replies to every Instagram comment & DM in your exact voice. Free to start. Join 2,400+ creators saving 47 hours/month.',
    url: 'https://postengage.ai',
    siteName: 'PostEngage.ai',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'PostEngage.ai — AI Instagram Automation & DM Replies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@postengageai',
    creator: '@postengageai',
    title: 'PostEngage.ai — AI Instagram Automation & DM Replies',
    description:
      'AI that replies to every Instagram comment & DM in your exact voice. Free to start. Join 2,400+ creators saving 47 hours/month.',
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <JsonLd />
        <GoogleTagManager />
        <GoogleAnalytics />
        <MicrosoftClarity />
        <ConversionTracker />
        <ScrollTracker />
        <PageViewTracker />
        <TimeOnPageTracker />
        <ScrollToTop />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}

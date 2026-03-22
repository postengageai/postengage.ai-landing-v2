import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  PenLine,
  Clock,
  Hash,
  AtSign,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Instagram Tools | PostEngage.ai',
  description:
    'Free Instagram tools to grow your account: engagement rate calculator, caption generator, best time to post, hashtag generator, and username checker.',
  openGraph: {
    title: 'Free Instagram Tools | PostEngage.ai',
    description:
      'Free Instagram tools to grow your account: engagement rate calculator, caption generator, best time to post, hashtag generator, and username checker.',
    type: 'website',
  },
};

interface Tool {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const tools: Tool[] = [
  {
    icon: Calculator,
    title: 'Engagement Rate Calculator',
    description:
      'Calculate your Instagram engagement rate instantly. See how you compare to industry benchmarks and get tips to improve.',
    href: '/tools/instagram-engagement-rate-calculator',
  },
  {
    icon: PenLine,
    title: 'Caption Generator',
    description:
      'Generate scroll-stopping Instagram captions with hashtags for any niche. Choose your tone and get 3 ready-to-use captions.',
    href: '/tools/instagram-caption-generator',
  },
  {
    icon: Clock,
    title: 'Best Time to Post',
    description:
      'Find the optimal posting times for your niche with a visual heatmap. Maximize reach by posting when your audience is active.',
    href: '/tools/instagram-best-time-to-post',
  },
  {
    icon: Hash,
    title: 'Hashtag Generator',
    description:
      'Get 30 strategically organized hashtags for your niche — popular, medium, and niche-specific — to maximize your post reach.',
    href: '/tools/instagram-hashtag-generator',
  },
  {
    icon: AtSign,
    title: 'Username Ideas Generator',
    description:
      'Generate creative Instagram username ideas based on your name or brand. Get 10 unique suggestions with availability indicators.',
    href: '/tools/instagram-username-checker',
  },
];

export default function ToolsPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider'>
              Free Tools
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Free Instagram Tools
            </h1>
            <p className='mt-4 text-lg text-muted-foreground max-w-xl mx-auto'>
              Everything you need to optimize your Instagram presence —
              completely free. No sign-up required.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {tools.map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className='group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
              >
                <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15'>
                  <tool.icon className='h-6 w-6 text-primary' />
                </div>
                <h2 className='text-xl font-semibold mb-3'>{tool.title}</h2>
                <p className='text-sm text-muted-foreground leading-relaxed mb-6'>
                  {tool.description}
                </p>
                <span className='inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all'>
                  Try Free
                  <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10'>
              <Sparkles className='h-7 w-7 text-primary' />
            </div>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
              Want AI-powered automation?
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
              These free tools are just the beginning. PostEngage.ai automates
              your comments, DMs, and engagement with AI that sounds like you.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>
                  Try PostEngage Free
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/pricing'>View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

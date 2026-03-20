import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  UserPlus,
  Clock,
  Zap,
  UtensilsCrossed,
  MessageCircle,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Restaurant Instagram Automation: Fill Tables and Take Reservations on Autopilot',
  description:
    'Restaurants live on foot traffic. Instagram drives foot traffic. Learn how restaurants use DM automation to handle reservation requests, promote daily specials, and increase reservations without paid ads.',
  openGraph: {
    title:
      'Restaurant Instagram Automation: Fill Tables and Take Reservations on Autopilot',
    description:
      'Restaurants live on foot traffic. Instagram drives foot traffic. Learn how restaurants use DM automation to handle reservation requests, promote daily specials, and increase reservations without paid ads.',
    type: 'article',
    url: 'https://postengage.ai/blog/instagram-automation-for-restaurants',
    images: [
      {
        url: '/blog/restaurant-instagram-cover.png',
        width: 1200,
        height: 630,
        alt: 'Restaurant Instagram Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Restaurant Instagram Automation: Fill Tables and Take Reservations on Autopilot',
    description:
      'Restaurants live on foot traffic. Instagram drives foot traffic. Learn how restaurants use DM automation to handle reservation requests, promote daily specials, and increase reservations without paid ads.',
    images: ['/blog/restaurant-instagram-cover.png'],
  },
};

export default function BlogPost() {
  const tocItems = [
    {
      id: 'why-instagram-for-restaurants',
      title: 'Why Instagram for Restaurants?',
    },
    {
      id: 'automation-use-cases',
      title: '5 Automation Use Cases for Restaurants',
    },
    { id: 'reservation-dm-flow', title: 'The Reservation DM Flow' },
    {
      id: 'slow-period-strategy',
      title: 'Filling Slow Periods with Automation',
    },
    { id: 'getting-started', title: 'Getting Started' },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <LandingHeader />

      <main className='relative pt-32 pb-24'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-primary/5 via-transparent to-transparent opacity-60' />
        </div>

        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Sidebar (TOC) */}
            <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-32 lg:self-start space-y-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                <Link
                  href='/blog'
                  className='hover:text-primary transition-colors'
                >
                  Blog
                </Link>
                <span>/</span>
                <span className='text-foreground font-medium'>
                  Local Business
                </span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main Content */}
            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge
                  variant='secondary'
                  className='mb-6 text-sm font-medium px-3 py-1'
                >
                  Local Business
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  Restaurant Instagram Automation: Fill Tables and Take
                  Reservations on Autopilot
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <UserPlus className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>
                        PostEngageAI Team
                      </p>
                      <p className='text-xs'>Automation Experts</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Calendar className='h-4 w-4' />
                    <span>May 18, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>6 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-21/9 rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-linear-to-br from-orange-900 to-red-800 text-white'>
                  <div className='text-center p-8'>
                    <UtensilsCrossed className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>
                      Restaurant Instagram Automation
                    </p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                A restaurant's best marketing asset is a beautiful plate of food
                — and Instagram is where beautiful food goes viral. But going
                viral does not automatically fill tables. The link between a
                drooling follower and a booked reservation is a conversation.
                That conversation can now happen automatically.
              </div>

              <h2
                id='why-instagram-for-restaurants'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Why Instagram for Restaurants?
              </h2>
              <p>
                Instagram is inherently visual, which makes it the perfect
                platform for the restaurant industry. Food photography posts
                receive 36% more engagement than any other content category.
                Restaurant accounts with 10,000 followers can realistically
                drive 200–400 covers per month from Instagram alone — but only
                if they have a system to convert interest into reservations.
              </p>
              <p>
                The problem is that most restaurant Instagram accounts are
                passive. They post beautiful food shots, get likes and comments,
                and then do nothing to convert that engagement into bookings. DM
                automation closes that gap.
              </p>

              <h2
                id='automation-use-cases'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                5 Automation Use Cases for Restaurants
              </h2>
              <ul className='space-y-2 my-6'>
                {[
                  'Reservation requests — "Comment BOOK to reserve a table tonight"',
                  'Menu questions — AI answers "Is there a vegetarian menu?" instantly',
                  'Event inquiries — Birthday dinners, private dining, corporate bookings',
                  'Daily specials push — Story reply automation for "Today\'s special?"',
                  'Loyalty program enrollment — Auto-DM new followers with a welcome offer',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary shrink-0 mt-1' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2
                id='reservation-dm-flow'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                The Reservation DM Flow
              </h2>
              <p>
                Here is the exact automation flow that top restaurants use to
                convert Instagram engagement into confirmed reservations:
              </p>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-4 flex items-center gap-2'>
                  <MessageCircle className='h-5 w-5 text-primary' />
                  Step 1: The Hook Post
                </h4>
                <p className='italic text-muted-foreground text-sm'>
                  Post caption: "Our weekend tasting menu is BACK 🍷 Only 12
                  seats left for Saturday. Comment 'TABLE' to get details in
                  your DMs."
                </p>
              </div>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-4 flex items-center gap-2'>
                  <MessageCircle className='h-5 w-5 text-primary' />
                  Step 2: Automatic DM
                </h4>
                <p className='italic text-muted-foreground text-sm'>
                  "Hey [Name]! 👋 Our Saturday tasting menu (6 courses, wine
                  pairing available) runs from 7PM–10PM. Tickets are £85pp. To
                  reserve your seats, reply with how many people and your
                  preferred time and we will confirm within the hour."
                </p>
              </div>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-4 flex items-center gap-2'>
                  <MessageCircle className='h-5 w-5 text-primary' />
                  Step 3: AI Qualification
                </h4>
                <p className='italic text-muted-foreground text-sm'>
                  When they reply, the AI asks: "Perfect! And are there any
                  dietary requirements we should know about?" Then it hands off
                  to staff for the final confirmation — or links directly to
                  your booking system.
                </p>
              </div>

              <h2
                id='slow-period-strategy'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Filling Slow Periods with Automation
              </h2>
              <p>
                Tuesday nights and early weekday lunches are the bane of
                restaurant profitability. Use Instagram automation to
                proactively push offers during slow periods:
              </p>
              <p>
                Post a Story at 2PM on Tuesday: "Tonight only — 25% off all
                mains if you book before 6PM. Reply 'TONIGHT' to claim your
                table."
              </p>
              <p>
                The automation fires a personalized DM to everyone who replies,
                captures their party size and time, and either books them
                directly or pings your host to confirm. Tables that would have
                sat empty are now filled — without a single paid ad.
              </p>

              <h2
                id='getting-started'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Getting Started
              </h2>
              <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
                <li>
                  Connect your restaurant's Instagram account to PostEngage.
                </li>
                <li>
                  Set up a Comment Trigger automation with your keyword (e.g.,
                  "BOOK", "TABLE", "RESERVE").
                </li>
                <li>
                  Write your DM script using our template library (we have
                  restaurant-specific templates).
                </li>
                <li>
                  Connect your booking link or enable the AI qualification flow.
                </li>
                <li>
                  Post your first hook post and watch the reservations come in.
                </li>
              </ol>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>
                  Stop Leaving Tables Empty
                </h3>
                <p className='mb-6'>
                  Set up your restaurant's first Instagram DM automation in
                  under 20 minutes. No technical skills needed.
                </p>
                <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                  Start Filling Tables <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </div>
            </article>

            {/* Social Share Sidebar */}
            <aside className='hidden lg:block lg:col-span-2 lg:sticky lg:top-32 lg:self-start'>
              <div className='flex flex-col gap-4 items-center'>
                <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2'>
                  Share
                </p>
                <SocialShareButtons
                  url='https://postengage.ai/blog/instagram-automation-for-restaurants'
                  title='Restaurant Instagram Automation: Fill Tables and Take Reservations on Autopilot'
                />
              </div>
            </aside>
          </div>
        </div>
        <NewsletterForm />
      </main>

      <LandingFooter />
    </div>
  );
}

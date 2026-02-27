import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Utensils,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';

export const metadata: Metadata = {
  title: 'Instagram Automation for Restaurants & Local Biz: Bookings on Autopilot',
  description:
    'Stop missing reservations and appointments. Learn how local businesses use Instagram DM automation to fill tables and calendars 24/7.',
  openGraph: {
    title: 'Instagram Automation for Restaurants & Local Biz: Bookings on Autopilot',
    description:
      'Stop missing reservations and appointments. Learn how local businesses use Instagram DM automation to fill tables and calendars 24/7.',
    type: 'article',
    url: 'https://postengage.ai/blog/instagram-automation-local-business',
    images: [
      {
        url: '/blog/local-business-automation.jpg',
        width: 1200,
        height: 630,
        alt: 'Instagram Automation for Local Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Automation for Restaurants & Local Biz: Bookings on Autopilot',
    description:
      'Stop missing reservations and appointments. Learn how local businesses use Instagram DM automation to fill tables and calendars 24/7.',
    images: ['/blog/local-business-automation.jpg'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'the-local-business-problem', title: 'The "Open?" Problem' },
    { id: 'restaurant-automation', title: 'For Restaurants: The "Menu" Trigger' },
    { id: 'service-business-booking', title: 'For Salons & Gyms: Instant Booking' },
    { id: 'google-reviews-automation', title: 'The Google Review Booster' },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <LandingHeader />

      <main className='relative pt-32 pb-24'>
        {/* Background Elements */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-60' />
        </div>

        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Sidebar (TOC) */}
            <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-32 lg:self-start space-y-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                <Link href='/blog' className='hover:text-primary transition-colors'>
                  Blog
                </Link>
                <span>/</span>
                <span className='text-foreground font-medium'>Local Business</span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main Content */}
            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge variant='secondary' className='mb-6 text-sm font-medium px-3 py-1'>
                  Local Business
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  Instagram Automation for Restaurants & Local Biz: Bookings on Autopilot
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Utensils className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>PostEngageAI Team</p>
                      <p className='text-xs'>Automation Experts</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Calendar className='h-4 w-4' />
                    <span>October 24, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>6 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
                  <div className='text-center p-8'>
                    <MapPin className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>Local Business Automation</p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                If you run a local business—whether it's a bustling restaurant, a boutique salon, or a real estate agency—you know the pain of missed calls. Every unanswered DM asking "Are you open?" or "How much for a cut?" is money walking out the door.
                <br />
                <br />
                In 2026, customers don't want to call. They want to DM. And they expect an instant reply. Here's how to automate your Instagram to fill your tables and calendar while you sleep.
              </div>

              <h2 id='the-local-business-problem' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                The "Open?" Problem
              </h2>
              <p>
                Local businesses live and die by convenience. If a potential customer sees your delicious burger on Instagram but can't figure out if you're open or how to book a table within 30 seconds, they're going to your competitor.
              </p>
              <p>
                But you're busy running the floor. You can't be glued to your phone answering:
              </p>
              <ul className='space-y-2 my-6'>
                {[
                  'What are your hours?',
                  'Do you have vegan options?',
                  'Can I book a table for 4?',
                  'Where are you located?',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary shrink-0 mt-1' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                This is where automation steps in. Not to replace your hospitality, but to extend it into the DMs.
              </p>

              <h2 id='restaurant-automation' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                For Restaurants: The "Menu" Trigger
              </h2>
              <p>
                Imagine posting a Reel of your new seasonal special. In the caption, you say: 
                <br />
                <strong>"Comment MENU to see our full list of new dishes!"</strong>
              </p>
              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-4 flex items-center gap-2'>
                  <MessageCircle className='h-5 w-5 text-primary' />
                  The Automation Flow
                </h4>
                <ol className='list-decimal pl-5 space-y-3 text-sm'>
                  <li>User comments "MENU" on your post.</li>
                  <li>PostEngageAI instantly replies to the comment: "Check your DMs! 🍔"</li>
                  <li>Bot sends a DM with a beautiful Gallery Card of your menu categories (Starters, Mains, Drinks).</li>
                  <li>User taps "Book a Table" button directly in the chat.</li>
                </ol>
              </div>
              <p>
                <strong>Result:</strong> You turn engagement into a reservation without lifting a finger.
              </p>

              <h2 id='service-business-booking' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                For Salons & Gyms: Instant Booking
              </h2>
              <p>
                Service businesses thrive on appointments. The friction of "DM to book" &gt; "Wait for reply" &gt; "Back and forth on times" kills conversion.
              </p>
              <p>
                Instead, use a Keyword Trigger like <strong>"BOOK"</strong>.
              </p>
              <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                <li><strong>User DMs "BOOK"</strong></li>
                <li><strong>Bot:</strong> "Hey! Ready for your fresh look? Tap below to see available slots."</li>
                <li><strong>Button:</strong> [Book Now] (Links directly to your Calendly, Vagaro, or booking page).</li>
              </ul>
              <p>
                You can even qualify them first: "Looking for a Cut or Color?" to send them to the right booking link.
              </p>

              <h2 id='google-reviews-automation' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                The Google Review Booster
              </h2>
              <p>
                Reviews are gold for local SEO. Use automation to get more of them.
              </p>
              <p>
                Create a QR code for your table or front desk that opens an Instagram DM with a specific message (ref URL).
              </p>
              <p>
                <strong>The Flow:</strong>
                <br />
                1. Customer scans QR code &gt; Opens DM saying "I loved my visit!"
                <br />
                2. Bot replies: "Thanks so much! It would mean the world if you left us a quick Google review. Here's the link:"
                <br />
                3. Customer clicks link &gt; Leaves 5 stars.
              </p>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>Ready to Automate Your Local Biz?</h3>
                <p className='mb-6'>
                  Stop losing customers to missed DMs. Set up your first "Menu" or "Book" automation today with PostEngageAI.
                </p>
                <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                  Start Your Free Trial <ArrowRight className='ml-2 h-5 w-5' />
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
                  url='https://postengage.ai/blog/instagram-automation-local-business'
                  title='Instagram Automation for Restaurants & Local Biz: Bookings on Autopilot'
                />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}

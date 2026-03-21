import Image from 'next/image';
import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  UtensilsCrossed,
  TrendingUp,
  Calendar,
  Gift,
  BarChart3,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Restaurant Instagram DM Automation: Fill Tables and Increase Reservations on Autopilot',
  description:
    'Empty tables on Tuesday nights? Learn how restaurants are using Instagram DM automation to fill slow periods, push specials, and increase reservations without paid ads.',
  openGraph: {
    title:
      'Restaurant Instagram DM Automation: Fill Tables and Increase Reservations on Autopilot',
    description:
      'Empty tables on Tuesday nights? Learn how restaurants are using Instagram DM automation to fill slow periods, push specials, and increase reservations without paid ads.',
    type: 'article',
    images: [
      {
        url: '/blog/restaurant-automation-cover.png',
        width: 1200,
        height: 630,
        alt: 'Restaurant Instagram DM Automation: Fill Tables and Increase Reservations on Autopilot',
      },
    ],
    publishedTime: '2026-03-07',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 7, 2026';
  const readTime = '6 min read';

  const tableOfContents = [
    {
      id: 'why-restaurants-need-dm-automation',
      title: 'Why Restaurants Need DM Automation',
    },
    { id: 'menu-to-reservation-funnel', title: 'Menu to Reservation Funnel' },
    { id: 'slow-night-dm-campaigns', title: 'Slow Night DM Campaigns' },
    {
      id: 'loyalty-and-repeat-customer-automation',
      title: 'Loyalty & Repeat Customers',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <LandingHeader />
      <main className='flex-1'>
        <article className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
          <header className='mx-auto mb-8 max-w-3xl'>
            <Link
              href='/blog'
              className='mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>
            <div className='mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <Badge variant='secondary' className='rounded-full px-3 py-1'>
                Local Business
              </Badge>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{publishDate}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{readTime}</span>
              </div>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              Restaurant Instagram DM Automation: Fill Tables and Increase
              Reservations on Autopilot
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Stop posting beautiful food photos and hoping people make
              reservations. Use Instagram DM automation to turn food lovers into
              paying customers and fill your slowest nights.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/restaurant-automation-cover.png'
              alt='Restaurant Instagram Dm Automation'
              fill
              className='object-cover'
              priority
            />
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-24 space-y-8'>
                <TableOfContents items={tableOfContents} />
                <div className='space-y-4'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                    Share this article
                  </h4>
                  <SocialShareButtons
                    url='https://postengage.ai/blog/restaurant-instagram-dm-automation'
                    title='Restaurant Instagram DM Automation: Fill Tables and Increase Reservations on Autopilot'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                <p className='text-lg leading-relaxed'>
                  Your restaurant has 15,000 Instagram followers. Your food
                  photos get 400 likes each. Your Reels hit 50,000 views. But
                  Tuesday night? You've got 8 tables booked, and it's 7 PM. The
                  kitchen staff is going home at 11, and you're paying them for
                  a slow night.
                </p>

                <p className='text-lg leading-relaxed'>
                  The problem isn't your content. Your followers love your food.
                  The problem is the gap between loving your content and making
                  a reservation. They'd have to find your phone number in your
                  bio, call and wait on hold, or navigate to OpenTable and
                  search for your restaurant.
                </p>

                <p className='text-lg leading-relaxed'>
                  But what if you could send a DM to everyone who engaged with
                  your food posts? "Hey! Saw you loved our risotto. We're
                  running a Tuesday night special at 6 PM tonight — comment
                  SPECIAL for your reservation link." This works best when you
                  use{' '}
                  <Link
                    href='/blog/trigger-word-strategy-2026'
                    className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                  >
                    trigger words
                  </Link>{' '}
                  and follow our guide for{' '}
                  <Link
                    href='/blog/getting-started-postengage-guide'
                    className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                  >
                    setting up your first automation
                  </Link>
                  .
                </p>

                <p className='text-lg leading-relaxed'>
                  That's reservation automation. And restaurants that use it
                  fill slow nights and increase average party size by 18%.
                </p>

                <h2
                  id='why-restaurants-need-dm-automation'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Why Restaurants Need DM Automation
                </h2>

                <p className='text-lg leading-relaxed'>
                  The restaurant industry has a unique problem: inventory that
                  expires. If that table isn't filled by 9 PM, that revenue is
                  gone forever. You can't store it, discount it for next month,
                  or get it back. The seat was worth $120 in revenue and now
                  it's worth $0.
                </p>

                <div className='my-8 grid gap-4'>
                  <Card className='border-l-4 border-l-blue-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <UtensilsCrossed className='h-5 w-5' />
                        Perishable Revenue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        An empty table is lost revenue that can never be
                        recovered. DM automation gives you a last-minute way to
                        fill those seats at the 11th hour.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-green-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <BarChart3 className='h-5 w-5' />
                        Massive Audience Gap
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Most restaurants have way more Instagram followers than
                        dining customers. A pizza place with 12,000 followers
                        might only host 8,000 diners per month. You're not
                        reaching your audience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-orange-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <TrendingUp className='h-5 w-5' />
                        Decision Friction
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Even people who want to come in have to make a phone
                        call, find your reservation system, or search OpenTable.
                        That friction kills 60% of potential bookings.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-purple-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2 text-base'>
                        <Gift className='h-5 w-5' />
                        No Upsell Mechanism
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        When someone makes a reservation, you can't tell them
                        about tonight's wine pairing, the new appetizer, or the
                        fact that you're running a 20% discount on prix-fixe
                        dinners.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className='text-lg leading-relaxed'>
                  DM automation fixes all of these problems. Here's how.
                </p>

                <h2
                  id='menu-to-reservation-funnel'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  The Menu-to-Reservation Funnel
                </h2>

                <p className='text-lg leading-relaxed'>
                  Here's the exact framework:
                </p>

                <div className='my-8 space-y-6'>
                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        1
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Post Your Menu or Daily Specials
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      Create a carousel post of your daily specials, featured
                      dishes, or new menu items. Make it look delicious. End
                      with a CTA in the caption.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        2
                      </div>
                      <h3 className='text-xl font-semibold'>
                        CTA: Comment a Keyword
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      Caption: "Comment MENU for today's specials" or "Comment
                      RESERVATION for a table tonight." Make it obvious what
                      they're getting.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        3
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Auto-DM: Direct Reservation Link
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      They comment, they get an instant DM: "Hey! Thanks for the
                      interest. Here's a direct link to book your table:
                      [OpenTable/Resy link]. We've got your favorite table
                      available at 7 PM tonight!" Make it personal and urgent.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        4
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Upsell in the DM
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      "Heads up: we're doing a special wine pairing tonight that
                      pairs perfectly with the risotto. Ask your server about it
                      when you arrive!"
                    </p>
                  </div>
                </div>

                <h2
                  id='slow-night-dm-campaigns'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Slow Night DM Campaigns
                </h2>

                <p className='text-lg leading-relaxed'>
                  Here's where the magic happens. Tuesday nights are typically
                  your slowest night. Instead of paying staff to stand around,
                  use DM automation:
                </p>

                <div className='my-8 space-y-4'>
                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Calendar className='h-5 w-5 text-blue-500' />
                        Story Poll Strategy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold text-sm'>
                        Tuesday afternoon:
                      </p>
                      <p className='text-muted-foreground'>
                        Post a story poll: "Should we do a prix-fixe Tuesday
                        night at 6 PM? Yes or No?" Anyone who votes YES gets a
                        DM with a reservation link and 15% off the prix-fixe
                        menu. This takes 30 seconds to set up.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Gift className='h-5 w-5 text-green-500' />
                        Flash Sale Campaign
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold text-sm'>Tuesday at 5 PM:</p>
                      <p className='text-muted-foreground'>
                        "Tonight only: comment TUESDAY for 15% off. Offer ends
                        at 9 PM." Auto-DM sends a personalized discount code and
                        reservation link. This fills tables in the final rush.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <UtensilsCrossed className='h-5 w-5 text-orange-500' />
                        Inventory Clearing Campaign
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold text-sm'>
                        When you have excess inventory:
                      </p>
                      <p className='text-muted-foreground'>
                        "We went heavy on scallops today — got an incredible
                        deal. Tonight we're making pasta alle vongole and
                        scallop risotto. Comment SEAFOOD for a reservation."
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <TrendingUp className='h-5 w-5 text-purple-500' />
                        Event Promotion
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold text-sm'>
                        For special nights:
                      </p>
                      <p className='text-muted-foreground'>
                        Wine pairing dinners, live music nights, chef's table
                        experiences. "Comment WINE for our 5-course wine pairing
                        dinner this Friday. Limited to 20 seats."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2
                  id='loyalty-and-repeat-customer-automation'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Loyalty and Repeat Customer Automation
                </h2>

                <p className='text-lg leading-relaxed'>
                  Once someone dines with you, keep them coming back with smart
                  automation:
                </p>

                <div className='my-8 space-y-4'>
                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3'>
                      VIP Offers for Repeat Customers
                    </p>
                    <p className='text-muted-foreground mb-3'>
                      Track who's visited 3+ times. Auto-DM them VIP offers:
                      "Hey! We've loved seeing you. Next time you come in, ask
                      for table 7 (your favorite) and we'll comp a dessert."
                    </p>
                  </div>

                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3'>Birthday Specials</p>
                    <p className='text-muted-foreground mb-3'>
                      Ask followers in your bio: "Birthday coming up? DM us the
                      month and we'll send you a special offer." 1 week before
                      their birthday: "Happy almost-birthday! Here's a code for
                      a free dessert when you celebrate with us."
                    </p>
                  </div>

                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3'>Post-Visit Follow-Ups</p>
                    <p className='text-muted-foreground mb-3'>
                      After someone visits (you can collect emails at
                      reservation), auto-DM 48 hours later: "Thanks for dinner!
                      We loved having you. Here's 20% off your next
                      reservation."
                    </p>
                  </div>

                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3'>Referral Campaigns</p>
                    <p className='text-muted-foreground mb-3'>
                      "Tell 3 friends about us and you both get a free appetizer
                      on your next visit. DM us when you've referred someone!"
                    </p>
                  </div>
                </div>

                <h2 className='mt-12 mb-6 text-3xl font-bold'>
                  Case Study: Italian Bistro Turnaround
                </h2>

                <Card className='my-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'>
                  <CardHeader>
                    <CardTitle>
                      From 34% Tuesday Increase to Full Weeks
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-muted-foreground'>
                      An Italian bistro in downtown was struggling with Tuesday
                      and Wednesday nights. They implemented DM automation for
                      slow-night campaigns.
                    </p>

                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Before: Tue Tables
                        </p>
                        <p className='text-2xl font-bold'>12</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          After: Tue Tables
                        </p>
                        <p className='text-2xl font-bold'>16</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Increase
                        </p>
                        <p className='text-2xl font-bold'>+34%</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Avg Party Size
                        </p>
                        <p className='text-2xl font-bold'>+18%</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Monthly Adds
                        </p>
                        <p className='text-2xl font-bold'>~23 covers</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Monthly Revenue
                        </p>
                        <p className='text-2xl font-bold'>+$12,500</p>
                      </div>
                    </div>

                    <p className='text-sm text-muted-foreground pt-4 border-t'>
                      They posted menu specials and slow-night flash sales 2-3x
                      per week with DM triggers. In 3 months, Tuesday and
                      Wednesday nights became as busy as Friday. They expanded
                      to 2 shifts and hired 2 more servers.
                    </p>
                  </CardContent>
                </Card>

                <div className='my-8 rounded-lg border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950 p-6'>
                  <p className='font-semibold mb-2'>
                    Pro Tip: OpenTable & Resy Integration
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Use URL parameters from your OpenTable/Resy account to send
                    direct reservation links. Example:
                    "https://www.resy.com/cities/nyc/restaurant-name?date=2026-03-10&partySize=4"
                    — this pre-fills the reservation request.
                  </p>
                </div>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>Ready to Fill Your Slow Nights?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai handles all the reservation-driving DM
                      automation so you can focus on delivering amazing
                      experiences. Set up your first slow-night campaign in
                      under 5 minutes.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/signup'>Start Free Trial</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>See How It Works</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className='mt-12 border-t pt-12'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage
                      src='/team-avatar.png'
                      alt='PostEngageAI Team'
                    />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Instagram Growth Experts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewsletterForm />
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}

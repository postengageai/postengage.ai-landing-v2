import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Car, Calendar, DollarSign } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Car Dealerships on Instagram: Using DM Automation to Generate Test Drive Bookings',
  description:
    'Learn how car dealerships use Instagram DM automation to generate qualified test drive leads and increase sales volume.',
  openGraph: {
    title:
      'Car Dealerships on Instagram: Using DM Automation to Generate Test Drive Bookings',
    description:
      'Learn how car dealerships use Instagram DM automation to generate qualified test drive leads and increase sales volume.',
    url: 'https://postengage.ai/blog/instagram-automation-car-dealerships',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-09T09:00:00.000Z',
    authors: ['James Okonkwo'],
    images: [
      {
        url: '/blog/instagram-automation-car-dealerships-cover.png',
        width: 1200,
        height: 630,
        alt: 'Car dealership automating test drive inquiries through Instagram DMs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Car Dealerships on Instagram: Using DM Automation to Generate Test Drive Bookings',
    description: 'Automate test drive scheduling and fill your dealer lot',
    images: ['/blog/instagram-automation-car-dealerships-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Car Dealerships on Instagram: Using DM Automation to Generate Test Drive Bookings',
    image: ['/blog/instagram-automation-car-dealerships-cover.png'],
    datePublished: '2026-03-09T09:00:00.000Z',
    dateModified: '2026-03-09T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'James Okonkwo',
        url: 'https://postengage.ai/about',
      },
    ],
  };

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />
      <main className='flex-1 pt-32 pb-24'>
        <article className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 flex items-center justify-between'>
            <Link
              href='/blog'
              className='group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
              Back to Blog
            </Link>
            <SocialShareButtons
              title='Car Dealerships on Instagram: Using DM Automation to Generate Test Drive Bookings'
              url='https://postengage.ai/blog/instagram-automation-car-dealerships'
            />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Automotive
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                9 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated March 9, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Car Dealerships on Instagram: Using DM Automation to Generate Test
              Drive Bookings
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Turn Instagram vehicle showcases into booked test drives with
              instant DM responses, qualified lead routing, and automated
              scheduling.
            </p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-slate-500/20 via-gray-500/10 to-zinc-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Car className='h-8 w-8 text-primary/70' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
                <div className='h-1.5 w-12 rounded-full bg-primary/20' />
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    { id: 'dealership-challenge', title: 'The Challenge' },
                    {
                      id: 'instagram-automotive',
                      title: 'Instagram for Dealerships',
                    },
                    { id: 'automation-strategy', title: 'Automation Strategy' },
                    { id: 'lead-qualification', title: 'Lead Qualification' },
                    { id: 'dealer-results', title: 'Dealer Results' },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Ready to automate?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      PostEngage.ai automates your Instagram DMs in your voice.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/signup'>Start Free Trial</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-8'>
                <section id='dealership-challenge'>
                  <h2 className='text-3xl font-bold mb-4'>
                    The Car Dealership Lead Challenge
                  </h2>
                  <p>
                    Car dealerships operate on volume and conversion rates. A
                    typical dealership gets 30-60 test drive inquiries per week,
                    but 40-50% of those never convert to a dealership visit. The
                    main culprit? Slow response times and poor lead
                    qualification. Someone DMs about a specific vehicle on
                    Sunday evening and doesn't hear back until Tuesday morning.
                    By then, they've visited three competitors' dealerships or
                    bought elsewhere.
                  </p>
                  <p>
                    Instagram is transforming automotive sales. Buyers research
                    vehicles online, watch review videos, check dealer
                    inventory, and reach out via DM to ask specific questions
                    about vehicles, pricing, financing, or to schedule a test
                    drive. Those who respond within 30 minutes book test drives
                    at 4-5x the rate of those who respond after 2+ hours.
                  </p>
                  <p>
                    The opportunity: The automotive industry generates $800B
                    annually in the U.S. alone. Dealerships automating DM
                    responses see 35-50% increases in test drive bookings and
                    20-30% improvements in sales conversion rates. For a
                    mid-sized dealership, that's 15-25 additional sales per
                    month, or $150K-$300K additional monthly revenue.
                  </p>
                </section>

                <section id='instagram-automotive'>
                  <h2 className='text-3xl font-bold mb-4'>
                    Why Instagram Is Reshaping Automotive Sales
                  </h2>
                  <p>
                    Instagram lets dealerships showcase inventory in ways
                    websites can't. Video walk-arounds of cars, customer
                    testimonials, financing options, special offers, trade-in
                    processes—all visual, engaging, and shareable. Buyers
                    scroll, engage, and DM with specific questions when they're
                    interested.
                  </p>
                  <Card className='bg-muted/50 border-primary/10 p-6'>
                    <CardHeader className='p-0 mb-4'>
                      <CardTitle className='text-sm font-medium'>
                        The Car Buyer's Instagram Journey
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 space-y-3'>
                      <div className='flex gap-3'>
                        <Car className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <span className='font-medium text-sm'>
                            Vehicle Discovery:
                          </span>{' '}
                          <span className='text-sm text-muted-foreground'>
                            Scrolls your inventory videos, watches 360 vehicle
                            walk-arounds, sees customer reviews and
                            testimonials.
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <DollarSign className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <span className='font-medium text-sm'>
                            Pricing & Financing:
                          </span>{' '}
                          <span className='text-sm text-muted-foreground'>
                            Posts about financing options, current promotions,
                            trade-in value estimators build trust that you're
                            transparent.
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <Calendar className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <span className='font-medium text-sm'>
                            Test Drive DM:
                          </span>{' '}
                          <span className='text-sm text-muted-foreground'>
                            High-intent message: "Can I test drive the blue
                            RAV4?" If you respond in 30 min, 70% schedule
                            immediately. If you wait 3 hours, conversion drops
                            to 20%.
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='automation-strategy'>
                  <h2 className='text-3xl font-bold mb-4'>
                    The DM Automation Blueprint for Dealerships
                  </h2>
                  <p>
                    Smart automation for dealerships means instant vehicle
                    information, inventory confirmation, and test drive
                    scheduling—all without the buyer having to leave Instagram.
                  </p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>
                    1. Instant Vehicle Information & Availability
                  </h3>
                  <p>
                    When someone asks about a specific vehicle, respond within 5
                    minutes with full details: specs, pricing, financing
                    options, warranty, availability, and direct test drive
                    booking link. Remove friction from inquiry to booking.
                  </p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'>
                      <CardTitle className='text-sm font-medium'>
                        Example Instant Response
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 space-y-3 text-sm'>
                      <div>
                        <span className='font-semibold'>Buyer DMs:</span> "Is
                        that blue RAV4 still available? Any discounts right
                        now?"
                      </div>
                      <div>
                        <span className='font-semibold'>
                          Your Auto-Response:
                        </span>{' '}
                        "Yes! We have the 2025 RAV4 XLE in Blueprint
                        Blue—incredible color. It's priced at $31,400, and we
                        have 0% financing available for 60 months. We're running
                        a $1,500 bonus on RAV4s this month. Test drive
                        availability: [Calendly link with available slots]. Or
                        call us at [number]. Let's get you behind the wheel! 🚗"
                      </div>
                      <div className='text-muted-foreground mt-2'>
                        Result: Buyer books test drive within minutes. Salesman
                        gets qualified lead automatically.
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className='text-xl font-bold mt-6 mb-3'>
                    2. FAQ Automation for Common Questions
                  </h3>
                  <p>
                    Automate: "What's your down payment requirement?", "Do you
                    accept trade-ins?", "What financing options are available?",
                    "Do you do delivery?", "How long is the sales process?",
                    "What's your warranty?", "Can I get a pre-approval?". Save
                    5-8 hours/week on repetitive questions.
                  </p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>
                    3. Inventory Management & Routing
                  </h3>
                  <p>
                    If someone asks about a vehicle that's sold, automatically
                    suggest similar available vehicles. If they're asking about
                    a specific trim you don't have, suggest comparable options.
                    This keeps them in the pipeline instead of bouncing to
                    competitors.
                  </p>
                </section>

                <section id='lead-qualification'>
                  <h2 className='text-3xl font-bold mb-4'>
                    Qualifying and Routing Leads
                  </h2>
                  <p>
                    Not all test drive inquiries are equal. Build a funnel that
                    identifies serious buyers and routes them to the right sales
                    team:
                  </p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'>
                      <CardTitle className='text-sm font-medium'>
                        4-Stage Test Drive Conversion Funnel
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 space-y-4 text-sm'>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            1
                          </span>{' '}
                          Inquiry (Minutes 0-10)
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Automated: Warm response with full vehicle details,
                          pricing, financing options, and test drive booking
                          link. Identify vehicle interest and buyer type.
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            2
                          </span>{' '}
                          Pre-Drive Qualification (Hours 1-6)
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Semi-automated: Send pre-drive checklist, ask about
                          financing questions, request trade-in info if
                          applicable. Route to appropriate sales specialist.
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            3
                          </span>{' '}
                          Test Drive Experience
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Manual: Personalized test drive experience, financing
                          pre-approval, trade-in appraisal, sales discussion.
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            4
                          </span>{' '}
                          Post-Drive Follow-Up (Same day & ongoing)
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Manual or semi-automated: Send thank you message,
                          financing offer summary, remind about incentives.
                          Close sale or schedule finance meeting.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='dealer-results'>
                  <h2 className='text-3xl font-bold mb-4'>
                    Real Results: What Dealerships Are Achieving
                  </h2>
                  <p>
                    Dealerships using DM automation are reporting significant
                    increases in test drive bookings and sales:
                  </p>
                  <ul className='space-y-3 my-6'>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>
                          70-80% faster response time = 4-5x higher test drive
                          booking rate.
                        </strong>{' '}
                        Responding within 30 minutes instead of hours wins the
                        lead before competitors contact the buyer.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>
                          15-25 additional test drive bookings per month.
                        </strong>{' '}
                        One mid-sized dealership reported: "We went from 45 test
                        drive bookings/month via Instagram to 70-80. That's
                        25-35 additional test drives, resulting in 5-7
                        additional sales per month."
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>
                          25-30% improvement in test-drive-to-sale conversion.
                        </strong>{' '}
                        Qualified inquiries and pre-drive education mean buyers
                        are more serious. Close rate improved from 20% to 26%.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>$150K-$300K additional monthly revenue.</strong>{' '}
                        5-7 additional sales per month × $25K-$40K average
                        vehicle price = significant bottom-line impact.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>8-12 hours/week saved on DM management.</strong>{' '}
                        Sales team focuses on closing deals, not answering "Is
                        this car still available?" for the 100th time.
                      </span>
                    </li>
                  </ul>
                  <p className='mt-6'>
                    One dealership manager shared:{' '}
                    <em>
                      "DM automation transformed our Instagram sales process. We
                      went from sporadic Instagram leads to a consistent flow of
                      qualified test drive bookings. The instant responses meant
                      we beat our competitors every time. Instagram is now our
                      fastest-growing lead channel, and we've added one
                      full-time salesman just to handle the volume."
                    </em>
                  </p>
                </section>

                <div className='mt-12 rounded-xl bg-muted/50 p-8 border border-primary/10'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Start automating your Instagram today
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    PostEngage.ai lets you respond to every test drive inquiry
                    in seconds, in your voice, 24/7. Free trial, no credit card
                    required.
                  </p>
                  <Button size='lg' asChild>
                    <Link href='/signup'>Get Started for Free</Link>
                  </Button>
                </div>
              </div>

              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/logo.jpeg' alt='PostEngage.ai Team' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>James Okonkwo</div>
                    <div className='text-sm text-muted-foreground'>
                      Automotive Sales & Dealership Growth Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <NewsletterForm />
      </main>
      <LandingFooter />
    </div>
  );
}

const CheckCircle2 = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <polyline points='20 6 9 17 4 12'></polyline>
    <circle cx='12' cy='12' r='10'></circle>
  </svg>
);

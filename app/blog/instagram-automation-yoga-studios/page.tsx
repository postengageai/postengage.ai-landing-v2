import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Heart, Calendar, Star, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Yoga Studios & Meditation Apps: Filling Classes with Instagram DM Automation',
  description:
    'Learn how yoga studios use Instagram DM automation to fill classes, manage member inquiries, and build a thriving wellness community.',
  openGraph: {
    title:
      'Yoga Studios & Meditation Apps: Filling Classes with Instagram DM Automation',
    description:
      'Learn how yoga studios use Instagram DM automation to fill classes, manage member inquiries, and build a thriving wellness community.',
    url: 'https://postengage.ai/blog/instagram-automation-yoga-studios',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-05T09:00:00.000Z',
    authors: ['Emma Clarke'],
    images: [
      {
        url: '/blog/instagram-automation-yoga-studios-cover.png',
        width: 1200,
        height: 630,
        alt: 'Yoga studio automating DMs to fill classes and manage members',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Yoga Studios & Meditation Apps: Filling Classes with Instagram DM Automation',
    description:
      'Automate inquiries and keep your studio fully booked year-round',
    images: ['/blog/instagram-automation-yoga-studios-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Yoga Studios & Meditation Apps: Filling Classes with Instagram DM Automation',
    image: ['/blog/instagram-automation-yoga-studios-cover.png'],
    datePublished: '2026-03-05T09:00:00.000Z',
    dateModified: '2026-03-05T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Emma Clarke',
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
              title='Yoga Studios & Meditation Apps: Filling Classes with Instagram DM Automation'
              url='https://postengage.ai/blog/instagram-automation-yoga-studios'
            />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Wellness
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                8 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated March 5, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Yoga Studios & Meditation Apps: Filling Classes with Instagram DM
              Automation
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Convert Instagram followers into paying members, manage class
              bookings instantly, and build a thriving wellness community 24/7.
            </p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-red-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Heart className='h-8 w-8 text-primary/70' />
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
                    { id: 'studio-challenge', title: 'The Studio Challenge' },
                    {
                      id: 'instagram-wellness',
                      title: 'Instagram for Wellness',
                    },
                    { id: 'automation-strategy', title: 'Automation Strategy' },
                    { id: 'booking-management', title: 'Smart Booking' },
                    { id: 'member-retention', title: 'Retention & Growth' },
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
                <section id='studio-challenge'>
                  <h2 className='text-3xl font-bold mb-4'>
                    The Yoga Studio Scheduling Nightmare
                  </h2>
                  <p>
                    Yoga and meditation studios operate on razor-thin margins.
                    Revenue depends on class utilization—empty mat spaces are
                    lost revenue. Instagram is perfect for building a wellness
                    community, but it creates a booking management headache: DMs
                    asking "Do you have a 6 PM vinyasa tomorrow?", "What's the
                    beginner class schedule?", "How much is a drop-in?", "Can I
                    book 5 classes at a time?"
                  </p>
                  <p>
                    Most studios manually handle DMs while teaching classes,
                    answering the same scheduling questions 50+ times per week.
                    The result? Delayed responses, double-bookings, frustrated
                    members, and canceled classes because people couldn't find
                    the booking link fast enough.
                  </p>
                  <p>
                    The opportunity: The global yoga market is worth $88.6B and
                    growing 9.2% annually. Studios that respond to booking
                    inquiries within 15 minutes fill 35% more classes than those
                    with 1+ hour response times.
                  </p>
                </section>

                <section id='instagram-wellness'>
                  <h2 className='text-3xl font-bold mb-4'>
                    Why Instagram Is Your Studio's Growth Engine
                  </h2>
                  <p>
                    Instagram lets yoga studios showcase their teaching
                    philosophy, community energy, transformations, and
                    personality—all the things that differentiate you from
                    competitors. Members choose your studio because of vibe, not
                    just price.
                  </p>
                  <Card className='bg-muted/50 border-primary/10 p-6'>
                    <CardHeader className='p-0 mb-4'>
                      <CardTitle className='text-sm font-medium'>
                        Why Members Book via Instagram DM
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 space-y-3'>
                      <div className='flex gap-3'>
                        <Heart className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <span className='font-medium text-sm'>
                            Community Vibe:
                          </span>{' '}
                          <span className='text-sm text-muted-foreground'>
                            Stories of class energy, member transformations, and
                            instructor personality build belonging before they
                            ever step on a mat.
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <Star className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <span className='font-medium text-sm'>
                            Social Proof:
                          </span>{' '}
                          <span className='text-sm text-muted-foreground'>
                            Comments, reviews, and testimonials from current
                            members demonstrate results and create FOMO (fear of
                            missing out).
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <Calendar className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div>
                          <span className='font-medium text-sm'>
                            Easy Booking:
                          </span>{' '}
                          <span className='text-sm text-muted-foreground'>
                            DM feels less formal than calling. Lower friction =
                            more inquiries from curious, high-intent people.
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='automation-strategy'>
                  <h2 className='text-3xl font-bold mb-4'>
                    The DM Automation Playbook for Yoga Studios
                  </h2>
                  <p>
                    The key to studio automation is instant booking information
                    combined with warmth and community invitation. Here's what
                    works:
                  </p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>
                    1. Instant Class Schedule + Booking Link
                  </h3>
                  <p>
                    When someone asks about schedule or drop-in availability,
                    respond within 2 minutes with current week's schedule and
                    direct booking link. Don't make them wait or navigate a
                    website.
                  </p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'>
                      <CardTitle className='text-sm font-medium'>
                        Example Quick Booking Response
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 space-y-3 text-sm'>
                      <div>
                        <span className='font-semibold'>Member DMs:</span> "Do
                        you have a morning class tomorrow?"
                      </div>
                      <div>
                        <span className='font-semibold'>
                          Your Auto-Response:
                        </span>{' '}
                        "Yes! We have Hatha Flow at 7:30 AM and Vinyasa Power at
                        9 AM. Both have spots available. Book here: [link to
                        class]. Drop-in is $18, or get a 5-class pack for $80.
                        See you on the mat! 🙏"
                      </div>
                      <div className='text-muted-foreground mt-2'>
                        Result: Member books in 30 seconds. Class fills. No
                        follow-up needed.
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className='text-xl font-bold mt-6 mb-3'>
                    2. Membership FAQ Automation
                  </h3>
                  <p>
                    80% of DMs ask: "What's the monthly membership price?", "Can
                    I freeze my membership?", "Do I get unlimited classes?", "Is
                    there a contract?". Automate these answers with your pricing
                    and membership options. Save 5-7 hours per week on
                    repetitive questions.
                  </p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>
                    3. Trial Class Converter
                  </h3>
                  <p>
                    Someone asking "Can I try a class?" gets instant
                    encouragement + special first-timer offer. "Absolutely! Your
                    first class is only $10, or try free with a membership.
                    Let's get you started: [booking link]. Come as you are 💫"
                  </p>
                </section>

                <section id='booking-management'>
                  <h2 className='text-3xl font-bold mb-4'>
                    Managing the Member Conversion Funnel
                  </h2>
                  <p>
                    Turn Instagram followers into paying members with a
                    structured booking + retention sequence:
                  </p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'>
                      <CardTitle className='text-sm font-medium'>
                        4-Stage Member Conversion Pipeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 space-y-4 text-sm'>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            1
                          </span>{' '}
                          Inquiry (Minutes 0-5)
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Automated: Warm response with schedule or membership
                          info, booking link, and welcoming tone. Remove
                          friction.
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            2
                          </span>{' '}
                          Trial Class (Day 1-3)
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Manual or semi-automated: 24 hours before their trial,
                          send logistics (where to arrive, what to bring, which
                          instructor, parking info) + encouragement. First-time
                          experience matters.
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            3
                          </span>{' '}
                          Post-Class Conversion (Hours 6-24)
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Semi-automated: "How was your experience? 🙏 If you
                          loved it, consider a membership—unlimited classes for
                          $99/mo. Or lock in 5 classes at $80. Let's keep you on
                          your mat!"
                        </p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'>
                          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>
                            4
                          </span>{' '}
                          Retention & Upsell (Ongoing)
                        </div>
                        <p className='text-muted-foreground mt-1'>
                          Automated: Monthly check-ins, special member events,
                          referral rewards ("Bring a friend, get $20 credit"),
                          new class announcements. Churn rate drops 25-30%.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='member-retention'>
                  <h2 className='text-3xl font-bold mb-4'>
                    Real Results: What Studios Are Achieving
                  </h2>
                  <p>
                    Yoga studios using DM automation report measurable growth:
                  </p>
                  <ul className='space-y-3 my-6'>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>
                          55-70% faster booking response = 2-3x more trial
                          classes booked.
                        </strong>{' '}
                        Someone asking about schedule at 6 PM books instantly.
                        The next studio they DM, they wait 2 hours. You win.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>
                          35-45% higher trial-to-member conversion.
                        </strong>{' '}
                        Trials double-book (two spots, two people) because
                        instant confirmation works better than "let me check the
                        schedule." Classes fill instead of having gaps.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>50-75 new members per month.</strong> One
                        mid-sized studio reported: "Before automation, we got
                        15-20 new members/month from Instagram. Now we're at
                        60-75. That's $6K-$9K additional monthly revenue."
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>25% improvement in member retention.</strong>{' '}
                        Quick responses and consistent engagement via DM create
                        stronger community bonds. Members feel valued, churn
                        drops.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>
                        <strong>
                          8-12 hours/week saved on administrative work.
                        </strong>{' '}
                        No more scheduling back-and-forth, FAQ repetition, or
                        reminder messages. Instructors teach. Managers manage
                        community.
                      </span>
                    </li>
                  </ul>
                  <p className='mt-6'>
                    One boutique yoga studio shared:{' '}
                    <em>
                      "Instagram DM automation changed our booking game. We're
                      fully booked 4-5 days a week now instead of 1-2. Members
                      appreciate the instant responses, and our instructors love
                      full rooms. Revenue increased 40% in the first quarter."
                    </em>
                  </p>
                </section>

                <div className='mt-12 rounded-xl bg-muted/50 p-8 border border-primary/10'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Start automating your Instagram today
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    PostEngage.ai lets you respond to every member inquiry in
                    seconds, in your voice, 24/7. Free trial, no credit card
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
                    <AvatarImage src='/logo.jpeg' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>Emma Clarke</div>
                    <div className='text-sm text-muted-foreground'>
                      Wellness & Fitness Business Growth Expert
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

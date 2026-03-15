import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Camera, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'How Photographers Are Using Instagram DM Automation to Book 3x More Clients',
  description:
    'Discover how professional photographers leverage Instagram DM automation to streamline client inquiries, reduce response time, and triple their bookings.',
  openGraph: {
    title:
      'How Photographers Are Using Instagram DM Automation to Book 3x More Clients',
    description:
      'Discover how professional photographers leverage Instagram DM automation to streamline client inquiries, reduce response time, and triple their bookings.',
    url: 'https://postengage.ai/blog/instagram-automation-photographers',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-01T09:00:00.000Z',
    authors: ['Sarah Jenkins'],
    images: [
      {
        url: '/blog/instagram-automation-photographers-cover.png',
        width: 1200,
        height: 630,
        alt: 'Photography DM automation strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'How Photographers Are Using Instagram DM Automation to Book 3x More Clients',
    description:
      'Streamline client inquiries and triple your photography bookings with Instagram DM automation.',
    images: ['/blog/instagram-automation-photographers-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'How Photographers Are Using Instagram DM Automation to Book 3x More Clients',
    image: ['/blog/instagram-automation-photographers-cover.png'],
    datePublished: '2026-03-01T09:00:00.000Z',
    dateModified: '2026-03-01T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Sarah Jenkins',
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
              title='How Photographers Are Using Instagram DM Automation to Book 3x More Clients'
              url='https://postengage.ai/blog/instagram-automation-photographers'
            />
          </div>

          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Photography
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                8 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated March 1, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              How Photographers Are Using Instagram DM Automation to Book 3x
              More Clients
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Transform your Instagram DMs into a booking machine. Learn how
              leading photographers are streamlining client inquiries and
              tripling their revenue without sacrificing personalization.
            </p>
          </header>

          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Camera className='h-8 w-8 text-primary/70' />
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
                    {
                      id: 'the-challenge',
                      title: 'The Client Inquiry Challenge',
                    },
                    {
                      id: 'automation-basics',
                      title: 'How DM Automation Works',
                    },
                    {
                      id: 'booking-strategy',
                      title: 'Building Your Booking Strategy',
                    },
                    {
                      id: 'personalization',
                      title: 'Maintaining Authentic Connection',
                    },
                    { id: 'results-metrics', title: 'Measuring Your Success' },
                    { id: 'getting-started', title: 'Getting Started Today' },
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
                      PostEngage.ai helps photographers like you manage client
                      inquiries automatically.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/signup'>Start Free Trial</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <h2
                  id='the-challenge'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  The Client Inquiry Challenge Photographers Face
                </h2>

                <p>
                  As a photographer, you've built a stunning portfolio on
                  Instagram. Your photos get likes, comments, and shares. But
                  here's the harsh reality: many of those potential clients who
                  slide into your DMs never become bookings because you're
                  overwhelmed managing messages.
                </p>

                <p>
                  You're juggling inquiries about session types, pricing,
                  availability, and location. Some prospects ask the same
                  questions repeatedly. By the time you respond to a message
                  asking "What's your availability in April?", they've already
                  booked with someone else. You're losing clients not because
                  your work isn't exceptional, but because you're not responding
                  fast enough.
                </p>

                <blockquote className='border-l-4 border-primary pl-4 italic text-muted-foreground my-6'>
                  "Photography studios that respond to inquiries within 1 hour
                  are 7x more likely to book the client compared to those
                  responding after 24 hours."
                </blockquote>

                <p>
                  The problem multiplies during peak seasons. Wedding season.
                  Holiday portrait season. You get 50+ inquiries a day, and each
                  one deserves attention. But you can't possibly answer them all
                  manually while also editing photos and managing existing
                  clients.
                </p>

                <h2
                  id='automation-basics'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  How DM Automation Works for Photographers
                </h2>

                <p>
                  Instagram DM automation uses AI and intelligent workflows to
                  handle your initial client conversations instantly. But this
                  isn't the impersonal bot replies photographers used to fear.
                  Modern automation is sophisticated, personalized, and actually
                  helps you book more clients while maintaining genuine
                  connection.
                </p>

                <p>
                  Here's how it works: When someone DMs you a message about
                  booking, your automation system can:
                </p>

                <Card className='bg-muted/40 border-muted/60 my-6'>
                  <CardContent className='pt-6 space-y-4'>
                    <div className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>
                          Immediately greet the prospect
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Welcome them and thank them for their interest before
                          you even see the message
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>Qualify the inquiry</div>
                        <p className='text-sm text-muted-foreground'>
                          Ask clarifying questions about their photography
                          needs, budget, and timeline
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>
                          Share key information automatically
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Send pricing, packages, availability, and portfolio
                          links instantly
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>
                          Schedule consultations
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Book discovery calls or send booking links without
                          manual back-and-forth
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  The key advantage? Prospects get instant responses, which
                  dramatically increases your booking rate. And you only jump
                  into conversations when they're actually interested and
                  qualified.
                </p>

                <h2
                  id='booking-strategy'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  Building Your DM Automation Booking Strategy
                </h2>

                <p>
                  The best photography studios don't just set up automation and
                  hope for results. They create a strategic workflow that moves
                  prospects toward booking.
                </p>

                <p>
                  <strong>Step 1: Segment Your Message Types</strong>
                </p>

                <p>
                  Different inquiries need different responses. Someone asking
                  "Do you do boudoir photography?" needs a different automated
                  response than someone asking "Are you available June 15th?"
                  Effective photographers set up response templates for their
                  most common inquiries:
                </p>

                <ul className='my-6 space-y-3'>
                  <li>Wedding photography availability</li>
                  <li>Engagement session inquiries</li>
                  <li>Maternity/newborn questions</li>
                  <li>Family portrait bookings</li>
                  <li>Pricing and package questions</li>
                  <li>Quick turnaround rush inquiries</li>
                </ul>

                <p>
                  <strong>Step 2: Create Qualifying Questions</strong>
                </p>

                <p>
                  Your automation should ask prospects questions that help you
                  understand if they're a good fit. Questions like "What date
                  range are you looking for?" and "What's your approximate
                  budget?" help you qualify leads and collect information you'd
                  normally have to ask manually.
                </p>

                <p>
                  <strong>Step 3: Share Your Portfolio Strategically</strong>
                </p>

                <p>
                  Don't just send generic links. Based on the type of
                  photography they're interested in, send them to relevant
                  gallery sections. A couple inquiring about engagement sessions
                  should see your engagement portfolio, not your newborn work.
                </p>

                <Card className='bg-primary/5 border-primary/10 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg font-semibold flex items-center gap-2'>
                      <Camera className='h-5 w-5' />
                      Pro Tip for Photographers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>
                      Set up different response workflows for different seasons.
                      Your spring inquiry workflow should highlight engagement
                      and wedding availability, while your fall workflow
                      emphasizes family portraits and holiday sessions.
                    </p>
                  </CardContent>
                </Card>

                <h2
                  id='personalization'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  Maintaining Authentic Connection While Automating
                </h2>

                <p>
                  The biggest concern photographers have about automation: "Will
                  it feel impersonal? Won't clients think I'm using a bot?"
                </p>

                <p>
                  The answer is no—if you do it right. Modern DM automation can
                  feel incredibly personal while still being efficient.
                </p>

                <p>
                  <strong>Use Their Name Dynamically</strong>
                </p>

                <p>
                  Your automation can extract the person's name and use it
                  throughout the conversation. "Hi Sarah! Thanks for your
                  interest in engagement sessions..." feels personal, not
                  robotic.
                </p>

                <p>
                  <strong>Reference Their Specific Interests</strong>
                </p>

                <p>
                  When someone says "We love your outdoor wedding shots," your
                  follow-up can acknowledge this: "Great! I specialize in
                  outdoor and natural light photography. Let me share some of my
                  favorite outdoor wedding galleries..."
                </p>

                <p>
                  <strong>Hand Off to You at the Right Time</strong>
                </p>

                <p>
                  The best automation knows when to step back and let you take
                  over. Once a prospect has been qualified and is genuinely
                  interested, they should be talking to you directly.
                  PostEngage.ai flags these ready-to-book leads so you can
                  personally close them.
                </p>

                <h2
                  id='results-metrics'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  Measuring Your DM Automation Success
                </h2>

                <p>
                  How do you know if your automation is actually working? Track
                  these key metrics:
                </p>

                <Card className='bg-muted/40 border-muted/60 my-6'>
                  <CardContent className='pt-6 space-y-4'>
                    <div>
                      <div className='font-semibold text-primary'>
                        Response Time
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Track your average time from inquiry to first response.
                        Most photographers see this drop from 4-8 hours to under
                        5 minutes with automation.
                      </p>
                    </div>
                    <div>
                      <div className='font-semibold text-primary'>
                        Inquiry-to-Consultation Rate
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        What percentage of inquiries result in a consultation
                        call? Target 30-40% of qualified inquiries converting to
                        calls.
                      </p>
                    </div>
                    <div>
                      <div className='font-semibold text-primary'>
                        Consultation-to-Booking Rate
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Of those consultations, how many convert to bookings?
                        Most photographers see 60-75% conversion once you're
                        speaking with genuinely interested clients.
                      </p>
                    </div>
                    <div>
                      <div className='font-semibold text-primary'>
                        Average Booking Value
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Does automation help you upsell or book premium
                        packages? Many photographers see a 15-20% increase in
                        average order value.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <h2
                  id='getting-started'
                  className='text-3xl font-bold mt-12 mb-6'
                >
                  Getting Started With Instagram DM Automation Today
                </h2>

                <p>
                  If you're ready to 3x your bookings without abandoning your
                  personal touch, here's how to start:
                </p>

                <p>
                  <strong>1. Audit Your Current DMs</strong>
                </p>

                <p>
                  For one week, track every DM inquiry you receive. Write down
                  the most common questions and requests. This data becomes your
                  automation framework.
                </p>

                <p>
                  <strong>2. Create Your Response Templates</strong>
                </p>

                <p>
                  Based on your audit, write 5-7 core response messages. Make
                  them warm, professional, and informative. Include your
                  personality—clients book photographers they like.
                </p>

                <p>
                  <strong>3. Choose the Right Automation Platform</strong>
                </p>

                <p>
                  PostEngage.ai is built specifically for Instagram automation,
                  with features photographers love: smart qualification,
                  portfolio linking, calendar integration, and the ability to
                  hand off seamlessly to you.
                </p>

                <p>
                  <strong>4. Set Up Your Workflows</strong>
                </p>

                <p>
                  Build your automation sequences for different inquiry types.
                  Test them with a few messages before going live. Make sure
                  they feel like you.
                </p>

                <p>
                  <strong>5. Monitor and Optimize</strong>
                </p>

                <p>
                  Review your automation performance weekly. Which response
                  scripts convert best? Which questions work best for
                  qualification? Continuously refine based on real data.
                </p>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Ready to grow your photography business?
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    Join hundreds of photographers already using PostEngage.ai
                    to automate inquiries and book 3x more clients. No credit
                    card required.
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
                    <div className='font-semibold'>Sarah Jenkins</div>
                    <div className='text-sm text-muted-foreground'>
                      Instagram Growth Strategist
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

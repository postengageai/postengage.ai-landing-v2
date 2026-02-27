import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Home,
  MessageSquare,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Real Estate Lead Gen 2026: Automate Your Instagram DMs',
  description:
    'Speed to lead is everything. Learn how top agents are using Instagram automation to qualify buyers and book showings 24/7.',
  openGraph: {
    title: 'Real Estate Lead Gen 2026: Automate Your Instagram DMs',
    description:
      'Speed to lead is everything. Learn how top agents are using Instagram automation to qualify buyers and book showings 24/7.',
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 8, 2026';
  const readTime = '6 min read';

  const tableOfContents = [
    { id: 'speed-to-lead', title: 'Why Speed to Lead Wins Listings' },
    { id: 'listing-automation', title: 'Automating Listing Inquiries' },
    { id: 'qualification-script', title: 'The 3-Question Qualification Script' },
    { id: 'booking-appointments', title: 'Booking Appointments on Autopilot' },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <LandingHeader />

      <main className='flex-1'>
        <article className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
          {/* Breadcrumb & Meta */}
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
                Real Estate
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
              Real Estate Lead Gen 2026: Automate Your Instagram DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              You are busy showing homes. Let your Instagram handle the leads.
              Discover the system that top agents use to book 10+ showings a week on autopilot.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Featured Image: House Photo {'->'} DM Inquiry {'->'} Booked Calendar
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            {/* Sidebar - Table of Contents */}
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-24 space-y-8'>
                <TableOfContents items={tableOfContents} />
                <div className='space-y-4'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                    Share this article
                  </h4>
                  <SocialShareButtons
                    url='https://postengage.ai/blog/real-estate-instagram-leads'
                    title='Real Estate Lead Gen 2026: Automate Your Instagram DMs'
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                {/* Introduction */}
                <p>
                  In real estate, if you don't reply in 5 minutes, you lose the lead.
                  But you can't be on your phone 24/7. You have closings, inspections, and a life.
                </p>
                <p>
                  That is why smart agents are using <strong>Instagram DM Automation</strong> to qualify buyers instantly,
                  even while they are asleep.
                </p>

                <h2 id='speed-to-lead' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                  Why Speed to Lead Wins Listings
                </h2>
                <div className='grid gap-4 my-8 not-prose'>
                  <div className='flex items-start p-4 bg-muted/50 border rounded-lg'>
                    <Clock className='h-6 w-6 text-muted-foreground mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold'>Manual Response</div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Lead DMs at 8 PM. You reply at 9 AM.
                        <br />
                        <strong>Result:</strong> They already booked with another agent.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start p-4 bg-primary/10 border border-primary/20 rounded-lg'>
                    <CheckCircle2 className='h-6 w-6 text-primary mr-4 shrink-0 mt-1' />
                    <div>
                      <div className='font-bold text-primary'>Automated Response</div>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Lead DMs at 8 PM. Bot replies instantly. Books showing.
                        <br />
                        <strong>Result:</strong> You wake up to a new appointment.
                      </div>
                    </div>
                  </div>
                </div>

                <h2 id='listing-automation' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                  Automating Listing Inquiries
                </h2>
                <p>
                  Stop manually sending the MLS link to everyone who asks "Price?".
                </p>
                <p>
                  Set up a keyword trigger: <em>"Comment <strong>123MAIN</strong> for price, photos, and floorplan."</em>
                </p>
                <p>
                  When they comment, your bot sends the full listing card instantly.
                </p>

                <h2 id='qualification-script' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                  The 3-Question Qualification Script
                </h2>
                <p>
                  Don't waste time on tire kickers. Let the bot filter them for you.
                </p>
                <div className='bg-muted/50 p-6 rounded-lg border my-6 font-mono text-sm'>
                  <p className='text-primary font-bold mb-4'>Bot Script:</p>
                  <p><strong>Bot:</strong> "Thanks for your interest in 123 Main St! 🏡 Are you currently working with an agent?"</p>
                  <p className='ml-4 text-muted-foreground'>[Yes] [No]</p>
                  <p className='mt-4'><strong>Bot:</strong> "Great. When are you looking to move?"</p>
                  <p className='ml-4 text-muted-foreground'>[ASAP] [1-3 Months] [Just Looking]</p>
                  <p className='mt-4'><strong>Bot:</strong> "Perfect. Want to schedule a private tour?"</p>
                </div>

                <h2 id='booking-appointments' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                  Booking Appointments on Autopilot
                </h2>
                <p>
                  If they qualify (e.g., Not working with an agent, Moving ASAP), the bot sends your Calendly link.
                  If they don't, the bot tags them as "Nurture" and sends them your newsletter.
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Home className='h-6 w-6 text-primary' />
                      Get More Listings with Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai helps you capture every lead from your listings.
                      Try it free for 14 days.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/sign-up'>Start Free Trial</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>View Demo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Author Bio */}
              <div className='mt-12 border-t pt-12'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/team-avatar.png' alt='PostEngageAI Team' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Helping brands scale with intelligent automation.
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

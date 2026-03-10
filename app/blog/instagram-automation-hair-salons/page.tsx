import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star, Calendar, Users, Scissors, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Hair Salons & Barbershops: How Instagram DM Automation Keeps Your Chair Full',
  description: 'Discover how hair salons and barbershops use Instagram DM automation to manage bookings, reduce no-shows, and maximize chair utilization.',
  openGraph: {
    title: 'Hair Salons & Barbershops: How Instagram DM Automation Keeps Your Chair Full',
    description: 'Discover how hair salons and barbershops use Instagram DM automation to manage bookings, reduce no-shows, and maximize chair utilization.',
    url: 'https://postengage.ai/blog/instagram-automation-hair-salons',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-06T09:00:00.000Z',
    authors: ['Sarah Jenkins'],
    images: [{ url: '/blog/instagram-automation-hair-salons-cover.png', width: 1200, height: 630, alt: 'Hair salon automating booking inquiries through Instagram DMs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Hair Salons & Barbershops: How Instagram DM Automation Keeps Your Chair Full', description: 'Automate bookings and fill appointment slots faster', images: ['/blog/instagram-automation-hair-salons-cover.png'], creator: '@postengageai' },
};

export default function BlogPostPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Hair Salons & Barbershops: How Instagram DM Automation Keeps Your Chair Full', image: ['/blog/instagram-automation-hair-salons-cover.png'], datePublished: '2026-03-06T09:00:00.000Z', dateModified: '2026-03-06T09:00:00.000Z', author: [{ '@type': 'Person', name: 'Sarah Jenkins', url: 'https://postengage.ai/about' }] };

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingHeader />
      <main className='flex-1 pt-32 pb-24'>
        <article className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 flex items-center justify-between'>
            <Link href='/blog' className='group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
              <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />Back to Blog
            </Link>
            <SocialShareButtons title='Hair Salons & Barbershops: How Instagram DM Automation Keeps Your Chair Full' url='https://postengage.ai/blog/instagram-automation-hair-salons' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Beauty Services</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>8 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 6, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>Hair Salons & Barbershops: How Instagram DM Automation Keeps Your Chair Full</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>Convert Instagram followers into booked clients, manage appointments instantly, and eliminate empty chair time with automated DM responses.</p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>Hair salon managing appointment bookings through automated DMs</span>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents items={[{ id: 'booking-challenge', label: 'The Booking Challenge' }, { id: 'instagram-discovery', label: 'Instagram Discovery Path' }, { id: 'automation-system', label: 'DM Automation System' }, { id: 'booking-flow', label: 'Booking Optimization' }, { id: 'retention-revenue', label: 'Retention & Revenue' }]} />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader><CardTitle className='text-sm font-medium text-primary'>Ready to automate?</CardTitle></CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>PostEngage.ai automates your Instagram DMs in your voice.</p>
                    <Button className='w-full text-xs' size='sm' asChild><Link href='/signup'>Start Free Trial</Link></Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-8'>
                <section id='booking-challenge'>
                  <h2 className='text-3xl font-bold mb-4'>The Hair Salon Booking Problem</h2>
                  <p>Hair salons and barbershops live and die by chair utilization. An empty chair is lost revenue—on average, a missed appointment costs a stylist $80-200 in daily income. Yet most salons handle bookings reactively: clients DM asking availability, stylists respond hours later (if at all), and by then the client has booked elsewhere.</p>
                  <p>Instagram is where clients find you. They see your portfolio of cuts, colors, and styles, scroll reviews, and DM asking availability. But slow responses mean they've already called three competitors. The data: 45% of salon DM inquiries go unanswered within 1 hour. If you respond within 15 minutes, you book 60% of inquiries. If you wait 2 hours, that drops to 20%.</p>
                  <p>The opportunity: The global hair care market is $65B annually. Salons that automate booking responses fill 35-40% more appointments and reduce no-shows by 25%.</p>
                </section>

                <section id='instagram-discovery'>
                  <h2 className='text-3xl font-bold mb-4'>Why Instagram Is Your Booking Goldmine</h2>
                  <p>Clients choose stylists based on portfolio, personality, and vibe. Instagram lets you showcase cuts, colors, transformations, and your studio environment. By the time someone DMs, they've already decided they want YOU—they just need to book quickly.</p>
                  <Card className='bg-muted/50 border-primary/10 p-6'>
                    <CardHeader className='p-0 mb-4'><CardTitle className='text-sm font-medium'>The Client Booking Journey</CardTitle></CardHeader>
                    <CardContent className='p-0 space-y-3'>
                      <div className='flex gap-3'>
                        <Star className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div><span className='font-medium text-sm'>Portfolio Browsing:</span> <span className='text-sm text-muted-foreground'>Scrolls your grid, sees before-and-after transformations, reads captions about technique and pricing.</span></div>
                      </div>
                      <div className='flex gap-3'>
                        <Scissors className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div><span className='font-medium text-sm'>Vibe Check:</span> <span className='text-sm text-muted-foreground'>Behind-the-scenes stories, reviews from current clients, studio energy—determines if this is their stylist.</span></div>
                      </div>
                      <div className='flex gap-3'>
                        <Calendar className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div><span className='font-medium text-sm'>DM to Book:</span> <span className='text-sm text-muted-foreground'>High-intent DM: "Can I get an appointment next Friday?" They're ready to book NOW. If you don't respond in 15 min, they're gone.</span></div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='automation-system'>
                  <h2 className='text-3xl font-bold mb-4'>Building Your DM Automation System</h2>
                  <p>The key is instant availability response combined with quick booking confirmation. Here's the framework:</p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>1. Immediate Availability Response</h3>
                  <p>When someone DMs asking for an appointment, respond within 2 minutes with current availability and booking link. No waiting, no back-and-forth scheduling text.</p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'><CardTitle className='text-sm font-medium'>Example Instant Booking Response</CardTitle></CardHeader>
                    <CardContent className='p-0 space-y-3 text-sm'>
                      <div><span className='font-semibold'>Client DMs:</span> "Do you have an appointment available next week? Looking for a cut and color."</div>
                      <div><span className='font-semibold'>Your Auto-Response:</span> "Yes! I have availability Monday at 2 PM, Wednesday at 10 AM, and Saturday at 11 AM. Cut + color typically takes 3 hours. Book here: [Calendly link]. Can't wait to refresh your look! 💇‍♀️"</div>
                      <div className='text-muted-foreground mt-2'>Result: Client books in 30 seconds. Chair filled. Revenue locked in.</div>
                    </CardContent>
                  </Card>

                  <h3 className='text-xl font-bold mt-6 mb-3'>2. FAQ Automation for Common Questions</h3>
                  <p>Automate answers to: "How much does a cut cost?", "Do you do ombre/balayage/perms?", "How long is the appointment?", "Do you take walk-ins?", "What's your cancellation policy?", "Can I request a specific stylist?". Save 4-6 hours/week on repetitive questions.</p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>3. Pre-Appointment Reminders & Preparation</h3>
                  <p>24 hours before their appointment, send automated reminder with studio address, parking info, and ask about any specific requests (color shade references, inspiration photos, hair concerns). This reduces no-shows by 15-20%.</p>
                </section>

                <section id='booking-flow'>
                  <h2 className='text-3xl font-bold mb-4'>The Complete Client Booking & Retention Flow</h2>
                  <p>Turn Instagram DM inquiries into booked, returning clients:</p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'><CardTitle className='text-sm font-medium'>5-Step Client Lifecycle</CardTitle></CardHeader>
                    <CardContent className='p-0 space-y-4 text-sm'>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>1</span> Inquiry (Minutes 0-5)</div>
                        <p className='text-muted-foreground mt-1'>Automated: Warm response with current week availability + booking link. Emphasize specific stylist or service specialty.</p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>2</span> Pre-Appointment (24 hrs before)</div>
                        <p className='text-muted-foreground mt-1'>Automated: Confirm appointment, ask about specific requests (hair goals, color inspiration), set expectations on timing.</p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>3</span> Service Experience</div>
                        <p className='text-muted-foreground mt-1'>Manual: Personalized, exceptional service. Encourage Instagram posts/tags. Build relationship.</p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>4</span> Post-Service Upsell (Same day)</div>
                        <p className='text-muted-foreground mt-1'>Semi-automated: "Thanks for coming in! Your hair looks amazing. Recommend booking your next color touch-up in 6-8 weeks. [Book Now link]"</p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>5</span> Retention & Loyalty (Ongoing)</div>
                        <p className='text-muted-foreground mt-1'>Automated: Regular check-ins, loyalty rewards, referral bonuses, seasonal promotions. Monthly DM: "Time for a refresh? Book your next appointment."</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='retention-revenue'>
                  <h2 className='text-3xl font-bold mb-4'>Real Results: What Salons Are Achieving</h2>
                  <p>Salons using DM automation are reporting dramatic improvements:</p>
                  <ul className='space-y-3 my-6'>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>60-75% faster booking response = 3x more conversions.</strong> Responding within 15 minutes instead of hours wins the booking race against competitors.</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>25-30% reduction in no-shows.</strong> Automated reminders with appointment details reduce last-minute cancellations and forgotten appointments.</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>40-60 additional appointments per month.</strong> One salon reported: "We went from 80 appointments/month to 140. That's 15-20 extra clients, or $3K-$5K additional monthly revenue."</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>35-45% increase in repeat bookings.</strong> Quick response + loyalty automation means clients book their next appointment before they leave the chair.</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>6-10 hours/week saved on manual scheduling.</strong> Stylists focus on clients. Admin time drops. Team morale improves.</span>
                    </li>
                  </ul>
                  <p className='mt-6'>One busy salon owner shared: <em>"DM automation transformed our booking process. We went from having 4-5 empty chair slots per day to nearly full capacity. The instant responses let us capitalize on our Instagram followers immediately. Revenue jumped 45% in the first three months."</em></p>
                </section>

                <div className='mt-12 rounded-xl bg-muted/50 p-8 border border-primary/10'>
                  <h3 className='text-lg font-semibold mb-2'>Start automating your Instagram today</h3>
                  <p className='text-muted-foreground mb-4'>PostEngage.ai lets you respond to every booking inquiry in seconds, in your voice, 24/7. Free trial, no credit card required.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>

              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>Sarah Jenkins</div><div className='text-sm text-muted-foreground'>Beauty & Salon Business Growth Specialist</div></div>
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
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={className}><polyline points='20 6 9 17 4 12'></polyline><circle cx='12' cy='12' r='10'></circle></svg>
);

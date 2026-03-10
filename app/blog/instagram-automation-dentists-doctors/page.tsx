import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Heart, Calendar, Shield, CheckCircle2, Users } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Healthcare on Instagram: How Dentists & Doctors Use DM Automation to Book Appointments',
  description: 'Learn how dental practices and medical providers use Instagram DM automation to book more appointments, answer patient questions, and grow their practice sustainably.',
  openGraph: {
    title: 'Healthcare on Instagram: How Dentists & Doctors Use DM Automation to Book Appointments',
    description: 'Learn how dental practices and medical providers use Instagram DM automation to book more appointments, answer patient questions, and grow their practice sustainably.',
    url: 'https://postengage.ai/blog/instagram-automation-dentists-doctors',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-09T09:00:00.000Z',
    authors: ['Emma Clarke'],
    images: [{ url: '/blog/instagram-automation-dentists-doctors-cover.png', width: 1200, height: 630, alt: 'Healthcare provider DM automation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare on Instagram: How Dentists & Doctors Use DM Automation to Book Appointments',
    description: 'Book more appointments with DM automation for healthcare providers and medical practices.',
    images: ['/blog/instagram-automation-dentists-doctors-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Healthcare on Instagram: How Dentists & Doctors Use DM Automation to Book Appointments',
    image: ['/blog/instagram-automation-dentists-doctors-cover.png'],
    datePublished: '2026-03-09T09:00:00.000Z',
    dateModified: '2026-03-09T09:00:00.000Z',
    author: [{ '@type': 'Person', name: 'Emma Clarke', url: 'https://postengage.ai/about' }],
  };

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingHeader />
      <main className='flex-1 pt-32 pb-24'>
        <article className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 flex items-center justify-between'>
            <Link href='/blog' className='group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
              <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
              Back to Blog
            </Link>
            <SocialShareButtons title='Healthcare on Instagram: How Dentists & Doctors Use DM Automation to Book Appointments' url='https://postengage.ai/blog/instagram-automation-dentists-doctors' />
          </div>

          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Healthcare</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>9 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 9, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Healthcare on Instagram: How Dentists & Doctors Use DM Automation to Book Appointments
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>Grow your healthcare practice on Instagram. Learn how dentists and doctors use DM automation to handle patient inquiries, book appointments, and provide timely health information while maintaining HIPAA compliance.</p>
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
                <TableOfContents items={[
                  { id: 'healthcare-patient-flow', title: 'The Patient Inquiry Flow' },
                  { id: 'appointment-automation', title: 'Automating Appointments' },
                  { id: 'patient-education', title: 'Patient Education in DMs' },
                  { id: 'hipaa-compliance', title: 'HIPAA & Security' },
                  { id: 'post-appointment', title: 'Post-Appointment Care' },
                  { id: 'implementation', title: 'Launch Your System' },
                ]} />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader><CardTitle className='text-sm font-medium text-primary'>Ready to automate?</CardTitle></CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>PostEngage.ai helps healthcare providers manage patient DMs safely and securely.</p>
                    <Button className='w-full text-xs' size='sm' asChild><Link href='/signup'>Start Free Trial</Link></Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <h2 id='healthcare-patient-flow' className='text-3xl font-bold mt-12 mb-6'>The Healthcare Patient Inquiry Flow on Instagram</h2>

                <p>
                  Your dental or medical Instagram shows your work. Before and afters of teeth whitening. Healthy smile transformations. Patient testimonials. People follow you because they're interested in your services. Many of them are ready to book—they just need a quick way to schedule.
                </p>

                <p>
                  But traditional DM responses in healthcare are challenging. You're managing a healthcare practice. You can't ignore patient inquiries. But you also can't have your clinical staff fielding DMs all day when they should be seeing patients.
                </p>

                <blockquote className='border-l-4 border-primary pl-4 italic text-muted-foreground my-6'>
                  "Healthcare providers who respond to DM appointment inquiries within 2 hours see 50% higher appointment booking rates compared to providers with slower response times."
                </blockquote>

                <p>
                  DM automation solves this perfectly. It provides instant responses to appointment inquiries, handles common questions about services, and efficiently funnels ready-to-book patients to your scheduling system.
                </p>

                <h2 id='appointment-automation' className='text-3xl font-bold mt-12 mb-6'>Automating the Appointment Booking Process</h2>

                <p>
                  Most healthcare inquiries are straightforward: someone wants to schedule an appointment. Your automation should make this frictionless.
                </p>

                <p>
                  <strong>The Instant Booking Flow</strong>
                </p>

                <p>
                  When someone DMs asking about appointments:
                </p>

                <Card className='bg-muted/40 border-muted/60 my-6'>
                  <CardContent className='pt-6 space-y-4'>
                    <div className='flex gap-3'>
                      <Calendar className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>Immediate Welcome</div>
                        <p className='text-sm text-muted-foreground'>"Thanks for reaching out! I'm excited to help you with [SPECIFIC SERVICE]. Let me get you scheduled."</p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <Calendar className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>Ask Service Type</div>
                        <p className='text-sm text-muted-foreground'>"Are you looking for a cleaning, specific treatment, or consultation?" This helps identify new patients vs. existing.</p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <Calendar className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>Send Booking Link</div>
                        <p className='text-sm text-muted-foreground'>Provide a direct link to your online scheduler (Acuity, Calendly, or your EHR's patient portal). This lets them book without more back-and-forth.</p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <Calendar className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                      <div>
                        <div className='font-semibold'>Capture Insurance Info</div>
                        <p className='text-sm text-muted-foreground'>If insurance is important for your practice, ask about coverage. Automation can send the link to insurance information if they're uncertain.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  <strong>Real Healthcare Booking Example</strong>
                </p>

                <p>
                  Patient DMs: "I'd like to schedule a cleaning"
                </p>

                <p>
                  Instant automated response: "Great! We'd love to have you in. For a cleaning appointment, we typically schedule 1 hour. Are you a new patient or returning? This helps us prepare for you. In the meantime, here's our online scheduler [LINK] where you can see available times and book directly."
                </p>

                <p>
                  If they've booked online, they're done. If they need more help, they reply with a question and you handle it personally. Either way, the friction is removed.
                </p>

                <h2 id='patient-education' className='text-3xl font-bold mt-12 mb-6'>Patient Education: Answering Common Health Questions</h2>

                <p>
                  Beyond appointments, patients have questions about dental and medical health. Many of these questions repeat:
                </p>

                <ul className='my-6 space-y-3'>
                  <li>"Do I need insurance for my appointment?" → Share your insurance policy</li>
                  <li>"What should I expect during a root canal?" → Share educational content about the procedure</li>
                  <li>"Is teeth whitening safe?" → Provide scientific information and your recommendations</li>
                  <li>"Do you take [INSURANCE]?" → Share accepted insurance list</li>
                  <li>"Are you accepting new patients?" → Answer directly</li>
                </ul>

                <p>
                  Your automation can handle most of these instantly with reliable, medically accurate information. This reduces phone calls to your office while providing immediate patient value.
                </p>

                <Card className='bg-primary/5 border-primary/10 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg font-semibold flex items-center gap-2'>
                      <Heart className='h-5 w-5' />
                      Patient Education Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground text-sm'>When you educate patients about procedures and health topics in DMs, they feel more confident booking appointments. They understand what to expect, what the treatment involves, and why it's recommended. This reduces appointment anxiety and improves patient outcomes.</p>
                  </CardContent>
                </Card>

                <h2 id='hipaa-compliance' className='text-3xl font-bold mt-12 mb-6'>HIPAA Compliance & Patient Privacy: Security First</h2>

                <p>
                  Healthcare is different from other industries. You must protect patient privacy. HIPAA regulations are strict. Your DM automation must be compliant and secure.
                </p>

                <p>
                  <strong>What NOT to Share in DMs</strong>
                </p>

                <p>
                  Your automation should NEVER share sensitive patient information via DMs:
                </p>

                <ul className='my-6 space-y-3'>
                  <li>Patient names from existing records</li>
                  <li>Medication information</li>
                  <li>Medical test results</li>
                  <li>Billing or insurance information</li>
                  <li>Appointment details to unverified numbers</li>
                </ul>

                <p>
                  Instead, authentication should happen first. Only direct patients from DMs to secure patient portals where they log in with credentials to view sensitive information.
                </p>

                <p>
                  <strong>Safe DM Content</strong>
                </p>

                <p>
                  Your automation CAN safely share:
                </p>

                <ul className='my-6 space-y-3'>
                  <li>General health education</li>
                  <li>Service descriptions and pricing</li>
                  <li>Booking links</li>
                  <li>Office hours and location</li>
                  <li>Insurance accepted list</li>
                  <li>Pre-appointment instructions (general, not patient-specific)</li>
                </ul>

                <Card className='bg-muted/40 border-muted/60 my-6'>
                  <CardContent className='pt-6'>
                    <div>
                      <div className='font-semibold text-primary'>HIPAA Compliance Principle</div>
                      <p className='text-sm text-muted-foreground'>If you wouldn't share it over the phone with someone who didn't prove they were the patient, don't share it in DMs. When in doubt, send them to your secure patient portal to log in and view information privately.</p>
                    </div>
                  </CardContent>
                </Card>

                <h2 id='post-appointment' className='text-3xl font-bold mt-12 mb-6'>Post-Appointment Care: Building Patient Loyalty</h2>

                <p>
                  DM automation shouldn't stop after booking. The real value comes in post-appointment follow-up that builds loyalty and encourages future appointments.
                </p>

                <p>
                  <strong>The Post-Appointment Automation</strong>
                </p>

                <p>
                  After a patient's appointment, your automation can:
                </p>

                <ul className='my-6 space-y-3'>
                  <li>Send a "thanks for visiting" message with care instructions</li>
                  <li>Check in after a few days: "How are you feeling after your appointment?"</li>
                  <li>Remind about preventive care: "It's been 6 months—time for your checkup?"</li>
                  <li>Share relevant health tips related to their treatment</li>
                  <li>Request feedback: "How was your experience with us?"</li>
                </ul>

                <p>
                  This automation keeps your practice top-of-mind and increases the likelihood of repeat appointments and positive reviews.
                </p>

                <p>
                  <strong>Reminder Automation</strong>
                </p>

                <p>
                  Send appointment reminders via DM: "Hi [NAME]! Just a friendly reminder that your appointment is tomorrow at 2:00 PM. Please arrive 10 minutes early. See you then!"
                </p>

                <p>
                  This simple reminder reduces no-shows by 20-30%, which protects your schedule and revenue.
                </p>

                <h2 id='implementation' className='text-3xl font-bold mt-12 mb-6'>Implementing Healthcare DM Automation Safely</h2>

                <p>
                  <strong>Step 1: Audit Current DM Inquiries (Week 1)</strong>
                </p>

                <p>
                  Collect a week of incoming DMs. Categorize them. You'll likely find: appointment requests, insurance questions, service questions, general health questions, and specific medical concerns.
                </p>

                <p>
                  <strong>Step 2: Create Safe, Compliant Scripts (Week 1-2)</strong>
                </p>

                <p>
                  Write automation responses for each category. Have a team member or attorney review for HIPAA compliance. Make sure you're not sharing any protected health information.
                </p>

                <p>
                  <strong>Step 3: Set Up Secure Integration (Week 2)</strong>
                </p>

                <p>
                  Ensure PostEngage.ai is HIPAA-compliant if handling ANY patient data. Connect your scheduling system securely. Test appointments to confirm bookings flow to your system correctly.
                </p>

                <p>
                  <strong>Step 4: Staff Training (Week 3)</strong>
                </p>

                <p>
                  Train your staff on DM automation. They should know what automation handles and when they need to step in. They should also know HIPAA rules about DM communication.
                </p>

                <p>
                  <strong>Step 5: Monitor & Optimize (Ongoing)</strong>
                </p>

                <p>
                  Review automation conversations regularly. Are appointment conversions improving? Are patients getting helpful information? Are there privacy concerns? Adjust based on real-world interactions.
                </p>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>Ready to grow your healthcare practice?</h3>
                  <p className='text-muted-foreground mb-4'>PostEngage.ai helps healthcare providers automate appointment booking and patient inquiries while maintaining HIPAA compliance and patient privacy. Book more appointments and deliver better patient care.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>

              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>Emma Clarke</div><div className='text-sm text-muted-foreground'>Healthcare & Medical Practice Expert</div></div>
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

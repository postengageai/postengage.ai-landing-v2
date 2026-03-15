import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Law Firms on Instagram: How to Generate Client Inquiries With DM Automation (Ethically)',
  description:
    "Instagram is an untapped channel for law firms. Here's how to generate qualified client inquiries while staying bar-compliant.",
  openGraph: {
    title:
      'Law Firms on Instagram: How to Generate Client Inquiries With DM Automation (Ethically)',
    description:
      "Instagram is an untapped channel for law firms. Here's how to generate qualified client inquiries while staying bar-compliant.",
    url: 'https://postengage.ai/blog/instagram-automation-lawyers',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-10T09:00:00.000Z',
    authors: ['Emma Clarke'],
    images: [
      {
        url: '/blog/instagram-automation-lawyers-cover.png',
        width: 1200,
        height: 630,
        alt: 'Law firms using Instagram to generate ethical client inquiries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Law Firms on Instagram: Ethical Client Generation Through DM Automation',
    description:
      'How law firms generate qualified client inquiries through Instagram while staying bar-compliant',
    images: ['/blog/instagram-automation-lawyers-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Law Firms on Instagram: How to Generate Client Inquiries With DM Automation (Ethically)',
    image: ['/blog/instagram-automation-lawyers-cover.png'],
    datePublished: '2026-03-10T09:00:00.000Z',
    dateModified: '2026-03-10T09:00:00.000Z',
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
              title='Law Firms on Instagram: How to Generate Client Inquiries With DM Automation (Ethically)'
              url='https://postengage.ai/blog/instagram-automation-lawyers'
            />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Legal
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                10 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                March 10, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Law Firms on Instagram: How to Generate Client Inquiries With DM
              Automation (Ethically)
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Instagram is an untapped channel for law firms. Here's how to
              generate qualified client inquiries while staying bar-compliant.
            </p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-slate-500/20 via-gray-500/10 to-zinc-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Shield className='h-8 w-8 text-primary/70' />
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
                      id: 'legal-instagram-opportunity',
                      title: 'Why Law Firms Should Be on Instagram',
                    },
                    {
                      id: 'bar-compliance-automation',
                      title: 'Bar Compliance & Automation',
                    },
                    {
                      id: 'ethical-client-intake',
                      title: 'Ethical Client Intake Automation',
                    },
                    {
                      id: 'practice-area-specialization',
                      title: 'Practice-Area Specific Automation',
                    },
                    {
                      id: 'legal-best-practices',
                      title: 'Best Practices for Law Firms',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Try PostEngage Free
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Automate your Instagram DMs in your exact voice.
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
                <h2 id='legal-instagram-opportunity' className='scroll-mt-24'>
                  Why Law Firms Should Be on Instagram
                </h2>
                <p>
                  Law firms are notoriously late to adopt new channels. While
                  your competitors are still relying on yellow pages ads and
                  referrals, potential clients are on Instagram seeking legal
                  guidance about divorces, employment disputes, immigration,
                  contract reviews, and countless other matters.
                </p>
                <p>
                  Instagram allows law firms to demonstrate expertise, build
                  trust through educational content, and attract clients seeking
                  their specific services. A divorce attorney sharing insights
                  about high-net-worth divorces isn't just content — it's a
                  client attractor. An immigration lawyer posting about visa
                  changes is already educating potential clients.
                </p>
                <p>
                  The challenge has always been responding quickly to inquiries
                  while maintaining bar compliance. Automation solves this. It
                  allows law firms to respond instantly to inquiries while
                  ensuring all communications meet ethical requirements.
                </p>
                <Card className='my-8 border-primary/20 bg-primary/5'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-base'>
                      <Shield className='h-5 w-5 text-primary' />
                      Legal Clients on Instagram
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <div className='flex gap-4'>
                      <div className='font-semibold text-primary'>61%</div>
                      <p className='text-sm text-muted-foreground'>
                        of people seeking legal services research attorneys on
                        social media first
                      </p>
                    </div>
                    <div className='flex gap-4'>
                      <div className='font-semibold text-primary'>48%</div>
                      <p className='text-sm text-muted-foreground'>
                        have contacted a law firm via social media DM about
                        legal representation
                      </p>
                    </div>
                    <div className='flex gap-4'>
                      <div className='font-semibold text-primary'>2.1x</div>
                      <p className='text-sm text-muted-foreground'>
                        higher engagement for legal content addressing common
                        client questions vs. firm promotion
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <h2 id='bar-compliance-automation' className='scroll-mt-24'>
                  Bar Compliance & Automation
                </h2>
                <p>
                  This is the crucial question: Can law firms use DM automation
                  ethically and in compliance with bar rules? The answer is yes,
                  but with careful attention to rules of professional conduct.
                </p>
                <p>Most states' bar rules require that:</p>
                <ul>
                  <li>
                    Communications don't create attorney-client relationships
                    unintentionally
                  </li>
                  <li>
                    Responses are accurate and don't constitute legal advice
                  </li>
                  <li>Marketing complies with solicitation rules</li>
                  <li>
                    Confidentiality is maintained (Instagram DMs aren't
                    encrypted)
                  </li>
                  <li>
                    Clear identification that communication is from the law firm
                  </li>
                </ul>
                <Card className='my-6 border-yellow-500/20 bg-yellow-500/5'>
                  <CardHeader>
                    <CardTitle className='text-base'>
                      Critical Compliance Note
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='text-sm space-y-2'>
                    <p className='font-medium'>
                      Before implementing DM automation, your firm should:
                    </p>
                    <ul className='space-y-1 ml-4'>
                      <li>
                        • Consult your state bar rules on social media
                        solicitation
                      </li>
                      <li>
                        • Review your malpractice insurance for social media
                        liability
                      </li>
                      <li>
                        • Have your automation responses reviewed by a
                        compliance officer
                      </li>
                      <li>
                        • Include required disclaimers in all automated
                        responses
                      </li>
                      <li>• Maintain records of all DM communications</li>
                    </ul>
                  </CardContent>
                </Card>

                <h2 id='ethical-client-intake' className='scroll-mt-24'>
                  Ethical Client Intake Automation
                </h2>
                <p>
                  The key to compliant automation for law firms is positioning
                  it as initial intake, not legal advice. Someone DMs "I'm going
                  through a divorce. Do I need a lawyer?" Your automation should
                  acknowledge their inquiry and gather information for your
                  team's follow-up.
                </p>
                <h3>The Compliant Automation Sequence</h3>
                <Card className='my-6 border-blue-500/20 bg-blue-500/5'>
                  <CardContent className='pt-6 space-y-4'>
                    <div>
                      <p className='font-medium text-sm mb-2'>
                        Message 1 (Instant - With Disclaimer):
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        "Thank you for contacting [Law Firm]. IMPORTANT: This is
                        not legal advice. Responding to this message does not
                        create an attorney-client relationship. We look forward
                        to discussing your legal matter. To protect
                        confidentiality, please do not include sensitive
                        information in DMs. Could you share: 1) Practice area
                        (divorce, employment, etc), 2) Timing (urgent or can
                        wait), 3) Location?"
                      </p>
                    </div>
                    <div>
                      <p className='font-medium text-sm mb-2'>
                        Message 2 (After they respond):
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        Based on their info: "Thank you for providing those
                        details. We handle [practice area] cases. Our typical
                        consultation fee is $[X]. Let's schedule a confidential
                        consultation where we can properly assess your
                        situation. [Calendar link]"
                      </p>
                    </div>
                    <div>
                      <p className='font-medium text-sm mb-2'>
                        Message 3 (After booking):
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        "Your consultation is confirmed for [date/time]. Please
                        don't share sensitive case details via DM for
                        confidentiality. We'll discuss everything thoroughly
                        during our call. [Zoom link or location]"
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  Notice how every message includes a disclaimer that this isn't
                  legal advice and doesn't create an attorney-client
                  relationship. This protects your firm while still responding
                  promptly to inquiries.
                </p>

                <Card className='my-8 border-green-500/20 bg-green-500/5'>
                  <CardHeader>
                    <CardTitle className='text-base'>
                      Case Study: Miller & Associates (Divorce Practice)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-2 text-sm'>
                    <p>
                      <span className='font-semibold text-green-600'>
                        62 new divorce clients
                      </span>{' '}
                      from Instagram DM automation (6-month period)
                    </p>
                    <p>
                      <span className='font-semibold text-green-600'>
                        $412,000
                      </span>{' '}
                      in engagement fees from Instagram-sourced clients
                    </p>
                    <p>
                      <span className='font-semibold'>Challenge:</span> Law firm
                      wasn't generating new divorce leads; existing referral
                      network was declining
                    </p>
                    <p>
                      <span className='font-semibold'>Solution:</span> Launched
                      Instagram content about divorce misconceptions. Used
                      compliant automation for inquiries. Every automated
                      response included bar-approved disclaimers.
                    </p>
                  </CardContent>
                </Card>

                <h2 id='practice-area-specialization' className='scroll-mt-24'>
                  Practice-Area Specific Automation
                </h2>
                <p>Different practice areas require different approaches:</p>
                <h3>Family Law & Divorce</h3>
                <p>
                  "Going through a divorce? Our firm specializes in
                  high-net-worth divorces. Initial consultations are $350. Would
                  you like to schedule? [Calendar link]" This automation is
                  straightforward: intake inquiry, fee structure, scheduling.
                </p>
                <h3>Employment Law</h3>
                <p>
                  "Facing a workplace issue? We help employees with wrongful
                  termination, discrimination, and wage disputes. Our initial
                  consultation is confidential and free. [Calendar link]"
                  Different value prop (free consultations) and clear practice
                  area.
                </p>
                <h3>Immigration Law</h3>
                <p>
                  "Immigration questions? We handle visa sponsorships, green
                  cards, and citizenship applications. IMPORTANT: Do not share
                  passport numbers or personal ID info via DM. Schedule a
                  confidential consultation to discuss your case. [Calendar
                  link]"
                </p>
                <h3>Personal Injury</h3>
                <p>
                  "Injured due to someone else's negligence? We work on
                  contingency — you don't pay unless we win. Schedule a free
                  consultation to discuss your case. [Calendar link]" This
                  automation emphasizes the contingency model (removes cost
                  barrier).
                </p>

                <h2 id='legal-best-practices' className='scroll-mt-24'>
                  Best Practices for Law Firms
                </h2>
                <h3>1. Have All Automated Responses Reviewed by Compliance</h3>
                <p>
                  Before activating any automation, have a partner or compliance
                  officer review it. Make sure it includes all required
                  disclaimers and doesn't inadvertently create attorney-client
                  relationships.
                </p>
                <h3>2. Use Educational Content to Drive Inquiries</h3>
                <p>
                  Post educational content that addresses common client
                  questions. This builds trust and drives DM inquiries from
                  people actively seeking your services. "5 mistakes people make
                  in divorce mediation" will generate more inquiries than "Hire
                  us for your divorce."
                </p>
                <h3>3. Segment by Practice Area</h3>
                <p>
                  If you handle multiple practice areas, create separate
                  automation flows. Someone asking about an employment dispute
                  needs different info than someone asking about estate
                  planning.
                </p>
                <h3>4. Never Provide Legal Advice Via Automation</h3>
                <p>
                  Automation should schedule consultations and ask qualifying
                  questions. It should never provide actual legal advice. "I
                  can't advise you on your specific situation via DM, but let's
                  discuss in a proper consultation" protects your firm and
                  complies with bar rules.
                </p>
                <h3>5. Maintain Complete Records of DM Communications</h3>
                <p>
                  Export and archive all DM conversations. This protects your
                  firm if disputes arise about what was discussed or promised.
                </p>
                <h3>6. Be Transparent About Consultation Fees</h3>
                <p>
                  Include your consultation fee in automation: "Initial
                  consultations are $250/hour" or "Free 30-minute consultation."
                  This filters inquiries and sets expectations.
                </p>
                <h3>7. Monitor for Potential Conflicts of Interest</h3>
                <p>
                  When someone inquires, flag their name in your
                  conflict-checking system before scheduling a consultation.
                  Automation should ask their location/practice area to help
                  with this assessment.
                </p>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Ready to generate qualified client inquiries ethically?
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    Try PostEngage.ai free for 14 days — no credit card
                    required. Respond to every client inquiry instantly while
                    maintaining bar compliance.
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
                      Legal Practice Growth Expert
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

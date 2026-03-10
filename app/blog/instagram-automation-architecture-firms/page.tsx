import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Building2, Star, MessageCircle, DollarSign, Calendar } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Architecture Firms on Instagram: How DM Automation Converts Project Inquiries',
  description: 'Instagram is the ultimate portfolio platform for architects. Here\'s how to turn viewers into project clients automatically.',
  openGraph: {
    title: 'Architecture Firms on Instagram: How DM Automation Converts Project Inquiries',
    description: 'Instagram is the ultimate portfolio platform for architects. Here\'s how to turn viewers into project clients automatically.',
    url: 'https://postengage.ai/blog/instagram-automation-architecture-firms',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-06T09:00:00.000Z',
    authors: ['Sarah Jenkins'],
    images: [
      {
        url: '/blog/instagram-automation-architecture-firms-cover.png',
        width: 1200,
        height: 630,
        alt: 'Architecture firms using Instagram to convert project clients'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture Firms on Instagram: DM Automation for Project Conversion',
    description: 'How architects convert Instagram viewers into project clients through automation',
    images: ['/blog/instagram-automation-architecture-firms-cover.png'],
    creator: '@postengageai'
  }
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Architecture Firms on Instagram: How DM Automation Converts Project Inquiries',
    image: ['/blog/instagram-automation-architecture-firms-cover.png'],
    datePublished: '2026-03-06T09:00:00.000Z',
    dateModified: '2026-03-06T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Sarah Jenkins',
        url: 'https://postengage.ai/about'
      }
    ]
  };

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
            <SocialShareButtons title='Architecture Firms on Instagram: How DM Automation Converts Project Inquiries' url='https://postengage.ai/blog/instagram-automation-architecture-firms' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Architecture & Design</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>9 min read</Badge>
              <span className='text-sm text-muted-foreground'>March 6, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>Architecture Firms on Instagram: How DM Automation Converts Project Inquiries</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>Instagram is the ultimate portfolio platform for architects. Here's how to turn viewers into project clients automatically.</p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-slate-500/20 via-gray-500/10 to-zinc-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Building2 className='h-8 w-8 text-primary/70' />
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
                  { id: 'instagram-architecture', title: 'Why Instagram Dominates Architecture' },
                  { id: 'architecture-client-types', title: 'Types of Inquiries Architects Receive' },
                  { id: 'automation-for-architects', title: 'Automation Strategy for Architects' },
                  { id: 'project-qualification', title: 'Qualifying Architecture Inquiries' },
                  { id: 'architecture-best-practices', title: 'Best Practices for Design Firms' }
                ]} />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader><CardTitle className='text-sm font-medium text-primary'>Try PostEngage Free</CardTitle></CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>Automate your Instagram DMs in your exact voice.</p>
                    <Button className='w-full text-xs' size='sm' asChild><Link href='/signup'>Start Free Trial</Link></Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <h2 id='instagram-architecture' className='scroll-mt-24'>Why Instagram Dominates Architecture</h2>
                <p>
                  Architecture is fundamentally visual. A portfolio of beautiful renderings, completed buildings, and design details is far more compelling on Instagram than on a traditional website. Architects who master Instagram don't just showcase their work — they influence which projects people commission.
                </p>
                <p>
                  Homeowners researching residential architects, real estate developers evaluating firms, corporate clients planning headquarters expansions — they're all scrolling through Instagram looking for inspiration and evaluating design sensibilities. Your Instagram feed is your sales team.
                </p>
                <p>
                  Yet most architecture inquiries that come through Instagram go nowhere. Someone sees a beautiful residential project, DMs asking "Would you consider a similar project in [city]?", and if you don't respond within hours, they've already contacted three other firms. Automation ensures every inquiry gets an immediate, professional response.
                </p>
                <Card className='my-8 border-primary/20 bg-primary/5'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-base'>
                      <Star className='h-5 w-5 text-primary' />
                      Architecture Leads on Instagram
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <div className='flex gap-4'>
                      <div className='font-semibold text-primary'>64%</div>
                      <p className='text-sm text-muted-foreground'>of potential architecture clients discover firms through Instagram before reaching out</p>
                    </div>
                    <div className='flex gap-4'>
                      <div className='font-semibold text-primary'>76%</div>
                      <p className='text-sm text-muted-foreground'>say Instagram presence directly influences their decision to contact a firm</p>
                    </div>
                    <div className='flex gap-4'>
                      <div className='font-semibold text-primary'>3.1x</div>
                      <p className='text-sm text-muted-foreground'>higher project values from Instagram-sourced inquiries vs. other channels</p>
                    </div>
                  </CardContent>
                </Card>

                <h2 id='architecture-client-types' className='scroll-mt-24'>Types of Inquiries Architects Receive</h2>
                <p>
                  Not all Instagram inquiries to architecture firms are created equal. Understanding the different types helps you tailor your automation:
                </p>
                <h3>Type 1: Residential Project Inquiries</h3>
                <p>
                  A homeowner sees your residential portfolio and DMs: "We're planning a renovation. Would you consider projects in [location]?" These can range from small $50k updates to major $2M+ renovations. They often require initial consultations to scope.
                </p>
                <h3>Type 2: Commercial/Development Inquiries</h3>
                <p>
                  Real estate developers, corporate teams, or institutional clients reach out about significant projects. These are often higher-value but longer sales cycles. Decision-makers are evaluating multiple firms.
                </p>
                <h3>Type 3: Collaboration Requests</h3>
                <p>
                  Other design firms, contractors, or complementary service providers ask about collaboration opportunities. These create long-term relationships and referral networks.
                </p>
                <h3>Type 4: Feature/Interview Requests</h3>
                <p>
                  Publications, podcasts, or design blogs want to feature your work or interview you. These don't directly generate projects but build brand authority.
                </p>
                <p>
                  Your automation needs to handle each type appropriately. A residential prospect needs different information than a commercial inquiry.
                </p>

                <h2 id='automation-for-architects' className='scroll-mt-24'>Automation Strategy for Architects</h2>
                <h3>The Intelligent Qualification Sequence</h3>
                <p>
                  An architect's Instagram DM automation should do one thing exceptionally well: qualify the inquiry quickly and move qualified prospects toward a consultation.
                </p>
                <Card className='my-6 border-blue-500/20 bg-blue-500/5'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-base'>
                      <MessageCircle className='h-5 w-5 text-blue-600' />
                      The Initial Response Sequence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div>
                      <p className='font-medium text-sm mb-1'>Message 1 (Instant - 30 seconds):</p>
                      <p className='text-xs text-muted-foreground'>"Hi [Name]! Thanks for reaching out. We're fascinated by [type of project they're interested in]. To see if we're a good fit, could you share: 1) Location, 2) Project scope/size, 3) Timeline, 4) Budget range?"</p>
                    </div>
                    <div>
                      <p className='font-medium text-sm mb-1'>Message 2 (After they respond - 3-5 min):</p>
                      <p className='text-xs text-muted-foreground'>Based on their response, either: a) "This sounds like exactly what we do. Let's set up a 30-min consultation to discuss details" (qualified inquiry), or b) "This is outside our typical scope, but here are three firms that specialize in this..." (graceful disqualification)</p>
                    </div>
                    <div>
                      <p className='font-medium text-sm mb-1'>Message 3 (If qualified):</p>
                      <p className='text-xs text-muted-foreground'>[Calendar link to schedule consultation] "Here's our availability for the next week. All consultations are free, and we'll discuss your vision, our process, and fees."</p>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  This sequence accomplishes several things: it acknowledges them immediately (critical for high-touch professionals), qualifies the project, disqualifies poor fits gracefully, and moves good fits toward a sales conversation.
                </p>

                <Card className='my-8 border-green-500/20 bg-green-500/5'>
                  <CardHeader>
                    <CardTitle className='text-base'>Case Study: Meridian Architects</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-2 text-sm'>
                    <p><span className='font-semibold text-green-600'>$4.2M</span> in new project contracts from Instagram automation (year one)</p>
                    <p><span className='font-semibold text-green-600'>47%</span> of qualified inquiries converted to signed projects</p>
                    <p><span className='font-semibold'>Challenge:</span> Principal architect was responding to DMs sporadically; missing qualified prospects</p>
                    <p><span className='font-semibold'>Solution:</span> Automated qualification sequence. Principal reviews qualified leads and schedules consultations.</p>
                  </CardContent>
                </Card>

                <h2 id='project-qualification' className='scroll-mt-24'>Qualifying Architecture Inquiries</h2>
                <p>
                  Architecture firms need to be selective. Not every inquiry is a good fit. An international client asking about residential design when you specialize in commercial is a poor fit. A homeowner with a $30k budget when your minimum project size is $250k won't work.
                </p>
                <p>
                  Your automation should identify deal-breakers early and gracefully disqualify. This saves you time and gives the prospect helpful direction instead of false hope.
                </p>
                <h3>Deal-Breaker Questions to Ask Automatically</h3>
                <ul>
                  <li><strong>Location:</strong> Are they in your service area? (Some firms only work in specific regions)</li>
                  <li><strong>Project Type:</strong> Is it within your specialization? (Residential vs. commercial, new construction vs. renovation)</li>
                  <li><strong>Project Size/Budget:</strong> Does it meet your minimum project size? (Many firms won't take projects under $200k)</li>
                  <li><strong>Timeline:</strong> Do they need a designer in the next 3 months or planning a year out? (Affects scheduling)</li>
                </ul>
                <p>
                  Automation can ask these questions, interpret the answers, and either confirm qualification or suggest alternative firms that might be better suited.
                </p>

                <h2 id='architecture-best-practices' className='scroll-mt-24'>Best Practices for Design Firms</h2>
                <h3>1. Use Portfolio References in Your Automation</h3>
                <p>
                  When someone inquires about a specific style or project type, reference your portfolio: "I noticed you loved our coastal residential work. We've completed 12 projects in that aesthetic in the past 3 years." This feels personalized and demonstrates range.
                </p>
                <h3>2. Segment by Project Type</h3>
                <p>
                  Create different automation flows for residential, commercial, and institutional inquiries. Each segment has different questions, timelines, and decision-making processes.
                </p>
                <h3>3. Clearly State Your Minimum Project Size</h3>
                <p>
                  Many inquiries will be below your minimum. Rather than waste time going back-and-forth, automation should state this upfront: "Our typical minimum for residential projects is $250,000 to ensure we can provide the attention your vision deserves."
                </p>
                <h3>4. Offer Virtual Consultations for Out-of-Area Inquiries</h3>
                <p>
                  Even if you don't take projects outside your region, virtual consultations might be valuable. Let automation offer this option: "While we typically focus on [region], we're open to strategic projects outside our area. Would a virtual consultation interest you?"
                </p>
                <h3>5. Build Your Team Into the Conversation</h3>
                <p>
                  In your automation, mention key team members. "Our senior designer, [Name], specializes in exactly this type of project." This builds credibility and sets expectations for who they'll work with.
                </p>
                <h3>6. Track Which Projects Inquiries Convert</h3>
                <p>
                  Monitor which types of Instagram inquiries convert to projects and at what value. Are residential inquiries converting better than commercial? Are specific project types more profitable? This data shapes your content strategy.
                </p>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>Ready to turn Instagram followers into paying clients?</h3>
                  <p className='text-muted-foreground mb-4'>Try PostEngage.ai free for 14 days — no credit card required. Qualify every architecture inquiry instantly.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>Sarah Jenkins</div><div className='text-sm text-muted-foreground'>Design Industry Growth Expert</div></div>
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

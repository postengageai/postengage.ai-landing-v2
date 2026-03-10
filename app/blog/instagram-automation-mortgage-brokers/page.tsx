import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Home, DollarSign, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Mortgage Brokers: How Instagram DM Automation Generates Pre-Qualified Leads',
  description: 'Discover how mortgage brokers use Instagram DM automation to qualify leads, answer rate questions, and grow their loan origination volume.',
  openGraph: {
    title: 'Mortgage Brokers: How Instagram DM Automation Generates Pre-Qualified Leads',
    description: 'Discover how mortgage brokers use Instagram DM automation to qualify leads, answer rate questions, and grow their loan origination volume.',
    url: 'https://postengage.ai/blog/instagram-automation-mortgage-brokers',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-10T09:00:00.000Z',
    authors: ['Emma Clarke'],
    images: [{ url: '/blog/instagram-automation-mortgage-brokers-cover.png', width: 1200, height: 630, alt: 'Mortgage broker automating lead inquiries through Instagram DMs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Mortgage Brokers: How Instagram DM Automation Generates Pre-Qualified Leads', description: 'Automate mortgage inquiries and grow your loan origination pipeline', images: ['/blog/instagram-automation-mortgage-brokers-cover.png'], creator: '@postengageai' },
};

export default function BlogPostPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Mortgage Brokers: How Instagram DM Automation Generates Pre-Qualified Leads', image: ['/blog/instagram-automation-mortgage-brokers-cover.png'], datePublished: '2026-03-10T09:00:00.000Z', dateModified: '2026-03-10T09:00:00.000Z', author: [{ '@type': 'Person', name: 'Emma Clarke', url: 'https://postengage.ai/about' }] };

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
            <SocialShareButtons title='Mortgage Brokers: How Instagram DM Automation Generates Pre-Qualified Leads' url='https://postengage.ai/blog/instagram-automation-mortgage-brokers' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Finance & Real Estate</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>9 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 10, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>Mortgage Brokers: How Instagram DM Automation Generates Pre-Qualified Leads</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>Convert Instagram followers into pre-qualified mortgage leads with instant rate quotes, automated qualification, and expert guidance.</p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>Mortgage broker automating lead inquiries through Instagram DMs</span>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents items={[{ id: 'lead-challenge', label: 'The Lead Challenge' }, { id: 'instagram-mortgage', label: 'Instagram for Brokers' }, { id: 'automation-system', label: 'Automation System' }, { id: 'qualification-funnel', label: 'Qualification Funnel' }, { id: 'broker-growth', label: 'Growth Results' }]} />
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
                <section id='lead-challenge'>
                  <h2 className='text-3xl font-bold mb-4'>The Mortgage Broker Lead Challenge</h2>
                  <p>Mortgage brokers live on loan origination volume. Each completed mortgage generates $3K-$8K in commission, depending on loan size. Yet most brokers spend 60-70% of their time prospecting and qualifying leads—time that could be spent closing deals. Instagram is transforming mortgage lead generation, but only for brokers who respond fast.</p>
                  <p>Here's the scenario: Someone gets pre-approved for a home loan, finds their dream house, and DMs a mortgage broker asking "What rates do you offer?" If they get a response in 15 minutes, 70% will continue the conversation and likely close with you. If they wait 2+ hours, they've already talked to three other brokers and comparison-shopped rates. You've lost control of the deal.</p>
                  <p>The data: Mortgage brokers who respond to Instagram inquiries within 30 minutes close 3x more loans from those leads. The U.S. mortgage market originates $2.8T annually. For a typical broker, faster response automation means 10-20 additional loan closings per year—$30K-$160K additional annual revenue.</p>
                </section>

                <section id='instagram-mortgage'>
                  <h2 className='text-3xl font-bold mb-4'>Why Instagram Is Becoming a Primary Mortgage Lead Channel</h2>
                  <p>Instagram lets mortgage brokers demonstrate expertise through educational content—rate trends, refinance tips, first-time buyer guides, loan program comparisons. Followers who engage with this content are pre-educated and ready to apply.</p>
                  <Card className='bg-muted/50 border-primary/10 p-6'>
                    <CardHeader className='p-0 mb-4'><CardTitle className='text-sm font-medium'>The Mortgage Buyer's Instagram Journey</CardTitle></CardHeader>
                    <CardContent className='p-0 space-y-3'>
                      <div className='flex gap-3'>
                        <Home className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div><span className='font-medium text-sm'>Education & Discovery:</span> <span className='text-sm text-muted-foreground'>Follows mortgage broker content about rates, loan types, first-time buyer tips. Evaluates your expertise and communication style.</span></div>
                      </div>
                      <div className='flex gap-3'>
                        <DollarSign className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div><span className='font-medium text-sm'>Rate Comparison:</span> <span className='text-sm text-muted-foreground'>Posts about current rates build trust. Educational content about APR, points, and loan options positions you as expert.</span></div>
                      </div>
                      <div className='flex gap-3'>
                        <Shield className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div><span className='font-medium text-sm'>Trust Building:</span> <span className='text-sm text-muted-foreground'>Client testimonials, loan approval stories, and success stories reduce buyer hesitation about working with you.</span></div>
                      </div>
                      <div className='flex gap-3'>
                        <TrendingUp className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                        <div><span className='font-medium text-sm'>DM Inquiry:</span> <span className='text-sm text-muted-foreground'>High-intent message: "What rates do you have for a $400K loan?" If you respond in 30 min with a quote, you likely close this deal.</span></div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='automation-system'>
                  <h2 className='text-3xl font-bold mb-4'>The DM Automation System for Mortgage Brokers</h2>
                  <p>Smart automation for brokers means instant rate quotes, pre-qualification assessments, and application guidance—all within DMs before the buyer calls a competitor.</p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>1. Instant Rate Quote + Loan Program Options</h3>
                  <p>When someone asks "What rates do you offer?", respond within 15 minutes with current rates, loan programs available, and estimated monthly payment based on their inquiry details. This captures the moment they're most interested.</p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'><CardTitle className='text-sm font-medium'>Example Instant Rate Response</CardTitle></CardHeader>
                    <CardContent className='p-0 space-y-3 text-sm'>
                      <div><span className='font-semibold'>Buyer DMs:</span> "Looking to refinance a $350K mortgage. What rates do you have?"</div>
                      <div><span className='font-semibold'>Your Auto-Response:</span> "Great timing! Refi rates are competitive right now. We have: 30-year fixed at 6.2% APR, 15-year fixed at 5.8% APR, 7/1 ARM at 5.9%. For a $350K refi, your P&I on 30-year fixed would be ~$2,100/mo. We can potentially save you $200-300/mo vs. your current rate. Let's get you pre-qualified in 10 minutes: [application link]. Questions? I'm here!"</div>
                      <div className='text-muted-foreground mt-2'>Result: Buyer sees rates immediately, gets pre-qualified estimate, and can apply without friction.</div>
                    </CardContent>
                  </Card>

                  <h3 className='text-xl font-bold mt-6 mb-3'>2. FAQ Automation for Common Questions</h3>
                  <p>Automate: "What's the difference between a fixed and ARM?", "How long is the approval process?", "What documents do I need?", "Can I lock in a rate?", "What credit score do I need?", "Can I do a cash-out refi?", "What are closing costs?". Save 5-7 hours/week on repetitive questions.</p>

                  <h3 className='text-xl font-bold mt-6 mb-3'>3. Smart Pre-Qualification</h3>
                  <p>Ask qualifying questions: loan amount, property type, purpose (purchase/refi), estimated credit score, employment status. Route prospects to purchase vs. refi specialists automatically.</p>
                </section>

                <section id='qualification-funnel'>
                  <h2 className='text-3xl font-bold mb-4'>The Loan Application Funnel</h2>
                  <p>Convert Instagram inquiries into completed mortgage applications:</p>
                  <Card className='bg-muted/50 border-primary/10 p-6 my-6'>
                    <CardHeader className='p-0 mb-4'><CardTitle className='text-sm font-medium'>4-Stage Loan Origination Pipeline</CardTitle></CardHeader>
                    <CardContent className='p-0 space-y-4 text-sm'>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>1</span> Inquiry (Minutes 0-15)</div>
                        <p className='text-muted-foreground mt-1'>Automated: Instant rate quote + monthly payment estimate. Ask about loan purpose, amount, credit, and employment status. Send application link.</p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>2</span> Pre-Qualification (Hours 1-4)</div>
                        <p className='text-muted-foreground mt-1'>Semi-automated or manual: Review application. Send loan officer details, explain next steps, answer questions, schedule pre-approval call.</p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>3</span> Processing & Approval (Days 1-7)</div>
                        <p className='text-muted-foreground mt-1'>Manual: Collect documents, underwriting review, appraisal order, conditional approval. Keep borrower updated via DM.</p>
                      </div>
                      <div>
                        <div className='font-semibold flex items-center gap-2'><span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs'>4</span> Closing (Days 5-10)</div>
                        <p className='text-muted-foreground mt-1'>Manual: Final clear-to-close, closing disclosure, title exam, closing meeting, funding. Loan closes and originates.</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id='broker-growth'>
                  <h2 className='text-3xl font-bold mb-4'>Real Results: What Mortgage Brokers Are Originating</h2>
                  <p>Mortgage brokers using DM automation are experiencing significant increases in loan volume:</p>
                  <ul className='space-y-3 my-6'>
                    <li className='flex gap-3'>
                      <CheckCircle2Icon className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>70-80% faster response to rate inquiries = 3-4x higher conversion to pre-qual.</strong> Responding within 30 minutes means you get the application before competitors do.</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2Icon className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>10-20 additional mortgage closings per year.</strong> One mortgage broker reported: "Instagram DM automation brought in 15-20 additional loan applications per year. With our 65% approval rate, that's 10-13 additional closings annually, or $75K-$150K additional revenue."</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2Icon className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>Higher loan quality & lower defaults.</strong> Pre-qualified leads from Instagram are typically serious buyers. Loan default rates are 15-20% lower than cold leads.</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2Icon className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>40-50% of closes are repeat clients or referrals.</strong> One successful mortgage leads to refinances, home equity lines, and client referrals over time. Lifetime value multiplies.</span>
                    </li>
                    <li className='flex gap-3'>
                      <CheckCircle2Icon className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span><strong>10-15 hours/week saved on prospecting and lead qualification.</strong> Automation handles inquiry response and pre-qual questions. You focus on underwriting and closing.</span>
                    </li>
                  </ul>
                  <p className='mt-6'>One successful mortgage broker shared: <em>"DM automation became our lead generation game-changer. We used to get 3-5 loan applications per month from Instagram. Now we're at 15-20 per month. Response time was the difference—Instagram followers expect instant answers. Once we automated rate quotes and basic pre-qual, applications started rolling in. We've become known in our market as the broker who responds instantly."</em></p>
                </section>

                <div className='mt-12 rounded-xl bg-muted/50 p-8 border border-primary/10'>
                  <h3 className='text-lg font-semibold mb-2'>Start automating your Instagram today</h3>
                  <p className='text-muted-foreground mb-4'>PostEngage.ai lets you respond to every mortgage inquiry in seconds, in your voice, 24/7. Free trial, no credit card required.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>

              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>Emma Clarke</div><div className='text-sm text-muted-foreground'>Mortgage & Finance Services Growth Expert</div></div>
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

const CheckCircle2Icon = ({ className }: { className: string }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={className}><polyline points='20 6 9 17 4 12'></polyline><circle cx='12' cy='12' r='10'></circle></svg>
);

import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, ArrowRight, DollarSign, Target, Zap } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Building a Full Instagram DM Sales Funnel in 2026 (Awareness to Close)',
  description: 'A complete architecture for turning Instagram followers into customers entirely through automated DM conversations.',
  openGraph: { title: 'Building a Full Instagram DM Sales Funnel in 2026 (Awareness to Close)', description: 'A complete architecture for turning Instagram followers into customers entirely through automated DM conversations.', url: 'https://postengage.ai/blog/instagram-dm-sales-funnel-2026', siteName: 'PostEngage.ai', locale: 'en_US', type: 'article', publishedTime: '2026-03-10T09:00:00.000Z', authors: ['Emma Clarke'], images: [{ url: '/blog/instagram-dm-sales-funnel-2026-cover.png', width: 1200, height: 630, alt: 'Complete Instagram DM Sales Funnel' }] },
  twitter: { card: 'summary_large_image', title: 'Building a Full Instagram DM Sales Funnel in 2026 (Awareness to Close)', description: 'Complete DM sales funnel from start to finish.', images: ['/blog/instagram-dm-sales-funnel-2026-cover.png'], creator: '@postengageai' },
};

export default function BlogPostPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Building a Full Instagram DM Sales Funnel in 2026 (Awareness to Close)', image: ['/blog/instagram-dm-sales-funnel-2026-cover.png'], datePublished: '2026-03-10T09:00:00.000Z', dateModified: '2026-03-10T09:00:00.000Z', author: [{ '@type': 'Person', name: 'Emma Clarke', url: 'https://postengage.ai/about' }] };
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
            <SocialShareButtons title='Building a Full Instagram DM Sales Funnel in 2026 (Awareness to Close)' url='https://postengage.ai/blog/instagram-dm-sales-funnel-2026' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Sales Funnel</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>12 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 10, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>Building a Full Instagram DM Sales Funnel in 2026 (Awareness to Close)</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>A complete architecture for turning Instagram followers into customers entirely through automated DM conversations.</p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-teal-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <TrendingUp className='h-8 w-8 text-primary/70' />
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
                <TableOfContents items={[{ id: 'funnel-overview', title: 'The Funnel Overview' }, { id: 'stage-1-awareness', title: 'Stage 1: Awareness' }, { id: 'stage-2-interest', title: 'Stage 2: Interest' }, { id: 'stage-3-decision', title: 'Stage 3: Decision' }, { id: 'stage-4-action', title: 'Stage 4: Action' }, { id: 'metrics', title: 'Key Metrics' }]} />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader><CardTitle className='text-sm font-medium text-primary'>Automate your DMs</CardTitle></CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>PostEngage.ai replies to every DM in your voice, 24/7.</p>
                    <Button className='w-full text-xs' size='sm' asChild><Link href='/signup'>Start Free Trial</Link></Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <h2 id='funnel-overview' className='text-2xl font-bold mt-12 mb-4'>The Complete DM Sales Funnel (AIDA Model on Instagram)</h2>
                <p>Most people think of sales funnels as having 3 stages: Awareness, Consideration, Purchase. But Instagram DMs are different. The conversation happens inside the funnel. The entire customer journey takes place in DMs.</p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "On Instagram, your DMs aren't a support channel. They're your entire sales department."
                </blockquote>

                <p>The best part? You can fully automate 60-70% of this funnel while maintaining your voice, personality, and authenticity.</p>

                <h2 id='stage-1-awareness' className='text-2xl font-bold mt-12 mb-4'>Stage 1: Awareness (Creating DM Intent)</h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>What Happens Here</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>Someone discovers your content on Instagram. They don't know you yet. They don't follow you. They're just scrolling.</p>
                    <p className='font-semibold mt-3'>Your goal:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Stop their scroll with compelling content</li>
                      <li>Make them curious about your offer</li>
                      <li>Create urgency or incentive to take action</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Content Strategy for Stage 1</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='font-semibold mb-2'>Create Reels that:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Teach something valuable (make them smarter)</li>
                      <li>Address a specific problem (make them feel seen)</li>
                      <li>Share surprising stats or insights (make them curious)</li>
                      <li>Include clear DM CTAs ("DM [keyword] for [offer]")</li>
                    </ul>
                    <p className='text-sm mt-3 font-semibold'>Key metric: Profile visits from Reels (target: 12-15% of views)</p>
                  </CardContent>
                </Card>

                <h2 id='stage-2-interest' className='text-2xl font-bold mt-12 mb-4'>Stage 2: Interest (The Bio Conversion Point)</h2>

                <p>Someone watched your Reel. They're interested. Now they clicked your profile. In the next 5 seconds, your bio determines if they DM you or keep scrolling.</p>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>The Bio Formula for Stage 2</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <div className='bg-white dark:bg-gray-900 p-4 rounded space-y-3'>
                      <div>
                        <p className='font-semibold text-sm mb-1'>Line 1 (What You Do):</p>
                        <p className='text-sm italic text-muted-foreground'>"Instagram DM Growth for [specific audience]"</p>
                      </div>
                      <div>
                        <p className='font-semibold text-sm mb-1'>Line 2 (Specific Result):</p>
                        <p className='text-sm italic text-muted-foreground'>"3-5 qualified leads per Reel on average"</p>
                      </div>
                      <div>
                        <p className='font-semibold text-sm mb-1'>Line 3 (Clear CTA):</p>
                        <p className='text-sm italic text-muted-foreground'>"DM 'LEADS' for the free DM audit"</p>
                      </div>
                    </div>
                    <p className='text-sm mt-3 font-semibold'>Key metric: DM conversion rate from profile visits (target: 22-30%)</p>
                  </CardContent>
                </Card>

                <h2 id='stage-3-decision' className='text-2xl font-bold mt-12 pb-4'>Stage 3: Decision (The DM Sequence)</h2>

                <p>They've DM'd you. Now the real funnel begins. The next 24 hours determine if they become a customer or disappear.</p>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>The 3-Message Sequence</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='space-y-3'>
                      <div className='border-b pb-3'>
                        <p className='font-semibold text-sm mb-2'>Message 1 (0-5 minutes): The Instant Acknowledgment</p>
                        <p className='text-sm italic'>"Got it! Sending you the audit in just a sec. Check your DMs."</p>
                        <p className='text-xs text-muted-foreground mt-2'>Automation: Keyword trigger. Instant auto-reply in your voice.</p>
                      </div>
                      <div className='border-b pb-3'>
                        <p className='font-semibold text-sm mb-2'>Message 2 (15-30 minutes): The Value Delivery</p>
                        <p className='text-sm italic'>"Here's your [audit/resource]. Three things stand out: [insight 1], [insight 2], [insight 3]. Which one is most relevant to your situation?"</p>
                        <p className='text-xs text-muted-foreground mt-2'>Automation: Delayed send. Personalized based on their keyword.</p>
                      </div>
                      <div>
                        <p className='font-semibold text-sm mb-2'>Message 3 (If they reply): The Qualification</p>
                        <p className='text-sm italic'>"Interesting. Most people struggle with [insight]. If we could [solve that], what would it mean for [their goal]?"</p>
                        <p className='text-xs text-muted-foreground mt-2'>Automation: Manual or AI-suggested based on their response.</p>
                      </div>
                    </div>
                    <p className='text-sm mt-3 font-semibold'>Key metric: Reply rate to Message 2 (target: 40-50%)</p>
                  </CardContent>
                </Card>

                <h2 id='stage-4-action' className='text-2xl font-bold mt-12 mb-4'>Stage 4: Action (The Close)</h2>

                <p>If they replied to Message 3, they're genuinely interested. Now you move from providing value to making an ask.</p>

                <Card className='bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 my-6'>
                  <CardHeader>
                    <CardTitle className='text-lg'>The Close Sequence</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='font-semibold text-sm mb-3'>Message 4 (Transition to Offer):</p>
                    <p className='text-sm italic'>"Based on what you shared, I think [specific solution] would be perfect for you. It's designed exactly for [their situation]. Price is [X]. Want to start this week?"</p>
                    <p className='font-semibold text-sm mt-4 mb-2'>Message 5 (If no immediate reply, 24 hours later):</p>
                    <p className='text-sm italic'>"No pressure at all. Just want to make sure you got the offer. Any questions, or is this something we should explore?"</p>
                    <p className='font-semibold text-sm mt-4 mb-2'>Message 6 (If still no reply, 48 hours later):</p>
                    <p className='text-sm italic'>"Totally understand if the timing's not right. But if you're still interested, let me know. Otherwise, feel free to reach out anytime."</p>
                    <p className='text-sm mt-3 font-semibold'>Key metric: Close rate (target: 15-25% of people who reach Message 4)</p>
                  </CardContent>
                </Card>

                <h2 id='metrics' className='text-2xl font-bold mt-12 mb-4'>Key Metrics for Your DM Funnel</h2>

                <p>To optimize your funnel, track these metrics at each stage:</p>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4'>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'><TrendingUp className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Stage 1: Awareness → Profile Visit Rate</p>
                    <p className='text-sm text-muted-foreground'>Target: 10-15% of people who see your Reel visit your profile</p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'><TrendingUp className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Stage 2: Interest → DM Conversion Rate</p>
                    <p className='text-sm text-muted-foreground'>Target: 25-35% of profile visitors send a DM</p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'><TrendingUp className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Stage 3: Decision → Reply Rate</p>
                    <p className='text-sm text-muted-foreground'>Target: 45-60% reply to your first value message</p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'><TrendingUp className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Stage 4: Action → Close Rate</p>
                    <p className='text-sm text-muted-foreground'>Target: 15-25% of qualified leads become customers</p>
                  </div>
                  <div>
                    <p className='font-semibold flex gap-2 mb-2'><TrendingUp className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Overall: Content to Customer</p>
                    <p className='text-sm text-muted-foreground'>10K views → 1,200 profile visits → 300 DMs → 135 conversations → 20-30 customers</p>
                  </div>
                </div>

                <h2 className='text-2xl font-bold mt-12 mb-4'>The Automation Layer (How to Scale Without Burning Out)</h2>

                <p>You can automate 60-70% of this entire funnel while maintaining your authenticity:</p>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardContent className='space-y-3 pt-6'>
                    <p className='font-semibold text-sm mb-2'>Fully Automated (70-80% of your volume):</p>
                    <ul className='list-disc list-inside space-y-1 text-sm'>
                      <li>Message 1 (instant acknowledgment)</li>
                      <li>Message 2 (value delivery with personalization)</li>
                      <li>Follow-up after 24-48 hours if no reply</li>
                    </ul>
                    <p className='font-semibold text-sm mt-4 mb-2'>Hybrid (30-40% needs your review):</p>
                    <ul className='list-disc list-inside space-y-1 text-sm'>
                      <li>Message 3+ (qualification and close)</li>
                      <li>AI-suggested responses that you review before sending</li>
                    </ul>
                  </CardContent>
                </Card>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "The future of Instagram sales isn't 'human' or 'automated'. It's 'smart automation guided by human judgment'."
                </blockquote>

                <p>PostEngage.ai does exactly this. It learns your voice, suggests responses, and handles the timing—but you stay in control. You're always part of the conversation. The automation just handles the tedious parts.</p>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>Put Your Instagram on Autopilot</h3>
                  <p className='text-muted-foreground mb-4'>Start your free 14-day trial of PostEngage.ai — no credit card needed.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>Emma Clarke</div><div className='text-sm text-muted-foreground'>DM Sales Funnel Architect</div></div>
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

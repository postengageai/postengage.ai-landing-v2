import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, MessageCircle, Zap, Target, DollarSign } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'The Reels-to-DM Funnel: Converting Viral Views Into DM Leads Automatically',
  description: 'Your Reel just hit 50K views. Without a DM funnel, 99% of those viewers vanish forever.',
  openGraph: { title: 'The Reels-to-DM Funnel: Converting Viral Views Into DM Leads Automatically', description: 'Your Reel just hit 50K views. Without a DM funnel, 99% of those viewers vanish forever.', url: 'https://postengage.ai/blog/instagram-reels-to-dm-funnel', siteName: 'PostEngage.ai', locale: 'en_US', type: 'article', publishedTime: '2026-03-05T09:00:00.000Z', authors: ['Emma Clarke'], images: [{ url: '/blog/instagram-reels-to-dm-funnel-cover.png', width: 1200, height: 630, alt: 'Reels to DM Conversion Funnel' }] },
  twitter: { card: 'summary_large_image', title: 'The Reels-to-DM Funnel: Converting Viral Views Into DM Leads Automatically', description: 'Turn viral views into DM leads.', images: ['/blog/instagram-reels-to-dm-funnel-cover.png'], creator: '@postengageai' },
};

export default function BlogPostPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'The Reels-to-DM Funnel: Converting Viral Views Into DM Leads Automatically', image: ['/blog/instagram-reels-to-dm-funnel-cover.png'], datePublished: '2026-03-05T09:00:00.000Z', dateModified: '2026-03-05T09:00:00.000Z', author: [{ '@type': 'Person', name: 'Emma Clarke', url: 'https://postengage.ai/about' }] };
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
            <SocialShareButtons title='The Reels-to-DM Funnel: Converting Viral Views Into DM Leads Automatically' url='https://postengage.ai/blog/instagram-reels-to-dm-funnel' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Reels Strategy</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>10 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 5, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>The Reels-to-DM Funnel: Converting Viral Views Into DM Leads Automatically</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>Your Reel just hit 50K views. Without a DM funnel, 99% of those viewers vanish forever.</p>
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
                <TableOfContents items={[{ id: 'viral-traffic-waste', title: 'The Viral Traffic Waste' }, { id: 'funnel-architecture', title: 'Funnel Architecture' }, { id: 'cta-strategies', title: 'Call-to-Action Strategies' }, { id: 'conversion-rates', title: 'Real Conversion Numbers' }, { id: 'automation-setup', title: 'Automation Setup' }]} />
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
                <h2 id='viral-traffic-waste' className='text-2xl font-bold mt-12 mb-4'>The Viral Traffic Waste Nobody Talks About</h2>
                <p>Your Reel has 100K views. Maybe 50K of those are from people who have never seen your content before. They're not followers. They're viewers who found you because Instagram's algorithm made it their problem.</p>
                <p>What happens next?</p>
                <p>95% of them leave. They watch, maybe like, and disappear forever. They're never coming back to your profile. They're not following. They're not in your DMs. They're gone.</p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "Viral reach without conversion is just vanity metrics. Viral reach WITH DM capture is a business engine."
                </blockquote>

                <p>The top 5% of creators have figured something out: Reels are lead-generation machines, not follower machines. A single viral Reel can generate 500-2000 DM leads if you have the funnel right.</p>

                <h2 id='funnel-architecture' className='text-2xl font-bold mt-12 mb-4'>The Reels-to-DM Funnel Architecture</h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <TrendingUp className='h-5 w-5 text-blue-600' />
                      Stage 1: The Reel (Awareness)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Your Reel job is simple: Stop the scroll. Get them to watch 3+ seconds. Everything else is bonus.</p>
                    <p className='font-semibold mt-3'>For Reel-to-DM funnels, optimize for these metrics:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Watch time (how many seconds do they stay)</li>
                      <li>Click-through to your bio (how many tap your profile)</li>
                      <li>Profile visit rate (the #1 indicator of DM funnel success)</li>
                      <li>Story clicks or link clicks (secondary CTAs)</li>
                    </ul>
                    <p className='text-sm font-semibold mt-3'>Pro tip:</p>
                    <p className='text-sm text-muted-foreground'>Reels that mention "DM me" in the video get 40-60% more DM clicks than Reels with standard CTAs. Be explicit about your desired action.</p>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <MessageCircle className='h-5 w-5 text-green-600' />
                      Stage 2: The Bio & CTA (Interest)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Your bio is make-or-break for the Reels-to-DM funnel. When someone watches your Reel and visits your profile, they're hot. Your bio should immediately tell them why they should DM you.</p>
                    <p className='font-semibold mt-3'>Bio Formula for DM Funnels:</p>
                    <div className='text-sm bg-white dark:bg-gray-900 p-3 rounded italic mt-2'>"[What I do for you] • [Specific result] • DM "[specific keyword]" for [specific offer]"</div>
                    <p className='text-sm mt-3'>Example: "Instagram Strategy for D2C Brands • 8-20% Conversion Rate Increase • DM 'GROWTH' for free DM audit"</p>
                    <p className='text-sm text-muted-foreground mt-2'>This is explicit. They know exactly what to DM you. No guessing.</p>
                  </CardContent>
                </Card>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <Zap className='h-5 w-5 text-purple-600' />
                      Stage 3: The Auto-Reply (Conversion)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Someone DMs you "GROWTH". What happens next? If you're manually replying, you miss the conversion window. They DM at 11pm. You see it at 8am. They've already forgotten.</p>
                    <p className='font-semibold mt-3'>This is where automation wins:</p>
                    <p className='text-sm'>An instant auto-reply that acknowledges their DM, confirms the offer, and tells them next steps converts at 6-8x higher rate than a delayed manual reply.</p>
                    <p className='text-sm mt-3'>Your auto-reply should:</p>
                    <ul className='list-disc list-inside space-y-1 text-sm'>
                      <li>Confirm they got the right offer</li>
                      <li>Set expectations ("You'll get the audit by tomorrow")</li>
                      <li>Move them to the next step (download link, Calendly, email sequence)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <Target className='h-5 w-5 text-orange-600' />
                      Stage 4: The Follow-Up (Engagement)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>The auto-reply gets them in the door. The follow-up keeps them there. Within 2-4 hours, send a personalized follow-up message that:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Delivers the promised offer (the audit, free resource, etc.)</li>
                      <li>Asks a qualification question to understand their situation</li>
                      <li>Opens the door to deeper conversation</li>
                    </ul>
                  </CardContent>
                </Card>

                <h2 id='cta-strategies' className='text-2xl font-bold mt-12 mb-4'>Call-to-Action Strategies for Different Reel Types</h2>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4'>
                  <div className='border-b pb-4'>
                    <p className='font-semibold mb-2'>Educational Reels ("5 Ways To...")</p>
                    <p className='text-sm'>CTA: "DM 'FULL GUIDE' for the complete framework" — Creates segmentation. People who engage get high-value content. Easy to automate.</p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold mb-2'>Story Reels (Personal/Narrative)</p>
                    <p className='text-sm'>CTA: "DM me which one resonates most" — Qualifies interest. Lower friction. Gets them in conversation mode.</p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold mb-2'>Behind-the-Scenes Reels</p>
                    <p className='text-sm'>CTA: "DM 'PROCESS' to see the full breakdown" — Builds curiosity. Creates exclusivity. Makes them feel special.</p>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>Controversy/Hot-Take Reels</p>
                    <p className='text-sm'>CTA: "DM me your thoughts" — Invites debate. Gets strong engagement. Filters for people who actually think critically.</p>
                  </div>
                </div>

                <h2 id='conversion-rates' className='text-2xl font-bold mt-12 mb-4'>Real Conversion Numbers You Should Know</h2>

                <div className='grid grid-cols-2 gap-4 my-6'>
                  <Card>
                    <CardHeader><CardTitle className='text-sm'>Reel Views to Profile Visits</CardTitle></CardHeader>
                    <CardContent><p className='text-2xl font-bold text-primary'>8-15%</p><p className='text-xs text-muted-foreground'>typical range</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle className='text-sm'>Profile Visits to DM</CardTitle></CardHeader>
                    <CardContent><p className='text-2xl font-bold text-primary'>22-35%</p><p className='text-xs text-muted-foreground'>with explicit CTA</p></CardContent>
                  </Card>
                </div>

                <p className='my-6'>Let's work backwards from a viral Reel:</p>
                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-3 text-sm'>
                  <div className='flex justify-between'><span>100K Reel Views</span><span className='font-semibold'>100,000</span></div>
                  <div className='flex justify-between border-t pt-3'><span>Profile Visits (12% average)</span><span className='font-semibold'>12,000</span></div>
                  <div className='flex justify-between border-t pt-3'><span>DMs Sent (28% with good CTA)</span><span className='font-semibold'>3,360</span></div>
                  <div className='flex justify-between border-t pt-3'><span>Qualified Leads (40% have real intent)</span><span className='font-semibold'>1,344</span></div>
                  <div className='flex justify-between border-t pt-3'><span>Actual Conversations (70% of qualified)</span><span className='font-semibold'>940</span></div>
                </div>

                <p className='mt-6'>One viral Reel. Nearly 1,000 DM conversations captured. That's not luck — that's a system.</p>

                <h2 id='automation-setup' className='text-2xl font-bold mt-12 mb-4'>Setting Up Automation (The Right Way)</h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardContent className='space-y-4 pt-6'>
                    <div className='border-b pb-4'>
                      <p className='font-semibold text-sm mb-2'>Trigger 1: Keyword-Based Auto-Reply</p>
                      <p className='text-sm'>IF someone DMs "GROWTH" → Auto-reply with "Got it! You're interested in the DM audit. Check your DMs in a few hours for the full report + analysis."</p>
                    </div>
                    <div className='border-b pb-4'>
                      <p className='font-semibold text-sm mb-2'>Trigger 2: Delayed Follow-Up</p>
                      <p className='text-sm'>4 hours after auto-reply → Send the promised content + a qualification question: "Quick question — when you say you want better DM engagement, is it about volume or quality?"</p>
                    </div>
                    <div>
                      <p className='font-semibold text-sm mb-2'>Trigger 3: Second Follow-Up</p>
                      <p className='text-sm'>24 hours after first follow-up IF no reply → "Just checking in — was the report helpful? Happy to answer any questions."</p>
                    </div>
                  </CardContent>
                </Card>

                <p>The key: Your voice. Your insights. Automated timing. That's the winning formula.</p>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>Put Your Instagram on Autopilot</h3>
                  <p className='text-muted-foreground mb-4'>Start your free 14-day trial of PostEngage.ai — no credit card needed.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>Emma Clarke</div><div className='text-sm text-muted-foreground'>Reels & Viral Strategy Expert</div></div>
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

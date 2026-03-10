import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Zap, MessageCircle, ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'How to Design High-Converting Instagram DM Sequences (Step-by-Step)',
  description: 'A complete framework for building multi-step DM flows that move prospects from curious to converted.',
  openGraph: { title: 'How to Design High-Converting Instagram DM Sequences (Step-by-Step)', description: 'A complete framework for building multi-step DM flows that move prospects from curious to converted.', url: 'https://postengage.ai/blog/instagram-dm-sequence-design', siteName: 'PostEngage.ai', locale: 'en_US', type: 'article', publishedTime: '2026-03-01T09:00:00.000Z', authors: ['Sarah Jenkins'], images: [{ url: '/blog/instagram-dm-sequence-design-cover.png', width: 1200, height: 630, alt: 'Instagram DM Sequence Design Framework' }] },
  twitter: { card: 'summary_large_image', title: 'How to Design High-Converting Instagram DM Sequences (Step-by-Step)', description: 'Build multi-step DM flows that convert.', images: ['/blog/instagram-dm-sequence-design-cover.png'], creator: '@postengageai' },
};

export default function BlogPostPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'How to Design High-Converting Instagram DM Sequences (Step-by-Step)', image: ['/blog/instagram-dm-sequence-design-cover.png'], datePublished: '2026-03-01T09:00:00.000Z', dateModified: '2026-03-01T09:00:00.000Z', author: [{ '@type': 'Person', name: 'Sarah Jenkins', url: 'https://postengage.ai/about' }] };
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
            <SocialShareButtons title='How to Design High-Converting Instagram DM Sequences (Step-by-Step)' url='https://postengage.ai/blog/instagram-dm-sequence-design' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Strategy Guide</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>8 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 1, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>How to Design High-Converting Instagram DM Sequences (Step-by-Step)</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>A complete framework for building multi-step DM flows that move prospects from curious to converted.</p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>DM Sequence Architecture Visualization</span>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents items={[{ id: 'why-sequences', title: 'Why DM Sequences Matter' }, { id: 'framework', title: 'The 4-Stage Framework' }, { id: 'message-formulas', title: 'Message Formulas' }, { id: 'timing-strategy', title: 'Timing Strategy' }, { id: 'testing', title: 'A/B Testing Your Sequences' }]} />
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
                <h2 id='why-sequences' className='text-2xl font-bold mt-12 mb-4'>Why DM Sequences Matter More Than Ever</h2>
                <p>Most creators treat Instagram DMs like a one-off interaction. Someone messages, you reply, and the conversation either converts or dies. But the most successful creators and brands on Instagram don't think this way. They design DM sequences — intentional, strategic progressions that guide prospects through a buying journey entirely within Instagram's ecosystem.</p>
                <p>Here's the reality: <strong>a single DM rarely converts anyone to a customer</strong>. Research from HubSpot shows that the average B2B sales funnel requires 5-7 touchpoints before a prospect is ready to buy. On Instagram, most of those touchpoints happen in DMs. If you're not structuring your DMs strategically, you're leaving money on the table.</p>

                <h2 id='framework' className='text-2xl font-bold mt-12 mb-4'>The 4-Stage DM Sequence Framework</h2>
                <p>Every high-converting DM sequence follows four distinct stages. Understand these, and you can build sequences that work for any offer or audience.</p>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <Target className='h-5 w-5 text-primary' />
                      Stage 1: Hook (Message 1)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='font-medium'>Goal: Break through the noise and establish relevance</p>
                    <p>Your first message has one job: make them want to read your second message. In a crowded DM inbox, 73% of messages go unread. You need to stand out immediately.</p>
                    <p className='font-semibold mt-3'>Formula:</p>
                    <p className='italic text-sm'>"[Specific observation about their content/account] + [Why it matters to them] + [Clear benefit of continuing the conversation]"</p>
                    <p className='text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded mt-2'>Example: "Saw your post about [specific pain point]. Most people miss [insight]. That's costing you [specific outcome]. Thought you should know."</p>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <MessageCircle className='h-5 w-5 text-green-600' />
                      Stage 2: Engagement (Messages 2-3)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='font-medium'>Goal: Build credibility and move from awareness to interest</p>
                    <p>Now that they're reading, prove you know what you're talking about. Share a specific insight, framework, or stat related to their challenge. Make it educational, not salesy.</p>
                    <p className='font-semibold mt-3'>What to include:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Specific stat or data point (with source)</li>
                      <li>The counterintuitive insight they don't know yet</li>
                      <li>A brief case study or example (not about you, about them)</li>
                      <li>One clear next step (ask for their thoughts)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <ArrowRight className='h-5 w-5 text-purple-600' />
                      Stage 3: Qualification (Messages 4-5)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='font-medium'>Goal: Determine if they're actually a fit, and disqualify bad leads early</p>
                    <p>At this stage, you ask questions. Real questions. Not "are you interested" but "what's your biggest challenge with [specific area]?" The goal is to understand whether helping them is even possible.</p>
                    <p className='text-sm mt-3'>Pro tip: The best sequences qualify out 60-70% of leads. A sequence that tries to convert everyone converts almost nobody.</p>
                  </CardContent>
                </Card>

                <Card className='bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <CheckCircle2 className='h-5 w-5 text-orange-600' />
                      Stage 4: Solution (Messages 6+)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='font-medium'>Goal: Present your solution and make the ask</p>
                    <p>Only now do you present what you're offering. But here's the key: frame it directly around their stated challenges from Stage 3. Make it feel custom, not canned.</p>
                  </CardContent>
                </Card>

                <h2 id='message-formulas' className='text-2xl font-bold mt-12 mb-4'>Specific Message Formulas for Each Stage</h2>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4'>
                  <div>
                    <p className='font-semibold text-sm mb-2'>HOOK MESSAGE FORMULA:</p>
                    <p className='text-sm italic'>"Hey [name] 👋 Saw your recent post on [specific topic]. The part about [specific detail] is gold — most people miss [insight]. That's why [consequence]. Not sure if it's relevant, but thought you should know."</p>
                  </div>
                  <div>
                    <p className='font-semibold text-sm mb-2 mt-4'>INSIGHT MESSAGE FORMULA:</p>
                    <p className='text-sm italic'>"One thing I've noticed: [your industry] typically [common mistake]. We analyzed [data source] and found [surprising stat]. The root cause is usually [insight]. Have you seen this pattern on your end?"</p>
                  </div>
                  <div>
                    <p className='font-semibold text-sm mb-2 mt-4'>QUALIFICATION QUESTION FORMULA:</p>
                    <p className='text-sm italic'>"Before I share more, genuinely curious — of those challenges, which one is hitting hardest right now? And what have you already tried?"</p>
                  </div>
                  <div>
                    <p className='font-semibold text-sm mb-2 mt-4'>SOLUTION MESSAGE FORMULA:</p>
                    <p className='text-sm italic'>"Makes sense. That's exactly why we built [solution]. It's specifically designed to [address stated challenge]. The way it works is [brief 2-sentence explanation]. Most of our clients see [specific result]. Want me to show you how it could work for you?"</p>
                  </div>
                </div>

                <h2 id='timing-strategy' className='text-2xl font-bold mt-12 mb-4'>The Timing Architecture That Matters</h2>
                <p>Message timing is underrated. Don't send all five messages back-to-back. Use this spacing:</p>
                <ul className='space-y-2 my-4'>
                  <li className='flex gap-3'><Zap className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Message 1:</strong> Immediately when you identify them</span></li>
                  <li className='flex gap-3'><Zap className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Message 2:</strong> 2-3 hours later (if they read Message 1)</span></li>
                  <li className='flex gap-3'><Zap className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Message 3:</strong> Next day, 24 hours after Message 1 (if no response)</span></li>
                  <li className='flex gap-3'><Zap className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Message 4+:</strong> Only if they've engaged or replied</span></li>
                </ul>

                <h2 id='testing' className='text-2xl font-bold mt-12 mb-4'>A/B Testing Your Sequences for Conversion Gains</h2>
                <p>You can't optimize what you don't measure. Track these metrics for each sequence variant:</p>
                <ul className='space-y-2 my-4'>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Read Rate:</strong> % of Message 1s that get opened</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Reply Rate:</strong> % who reply to any message</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Qualification Rate:</strong> % who answer your qualification questions</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Conversion Rate:</strong> % who take your desired action (book call, buy, etc.)</span></li>
                </ul>
                <p className='mt-6'>Start with testing Hook messages. Small changes (specific detail name vs. generic phrase) can increase read rates by 15-25%. Once you optimize the hook, move to testing Engagement messages, then Qualification questions.</p>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>Put Your Instagram on Autopilot</h3>
                  <p className='text-muted-foreground mb-4'>Start your free 14-day trial of PostEngage.ai — no credit card needed.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>Sarah Jenkins</div><div className='text-sm text-muted-foreground'>Instagram Growth Strategist</div></div>
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

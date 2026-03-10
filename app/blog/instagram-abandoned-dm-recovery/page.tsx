import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Clock, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Recovering Abandoned Instagram Conversations: How to Re-Engage Cold DM Leads',
  description: '73% of Instagram leads go cold after the first DM. Here\'s the exact playbook to bring them back.',
  openGraph: { title: 'Recovering Abandoned Instagram Conversations: How to Re-Engage Cold DM Leads', description: '73% of Instagram leads go cold after the first DM. Here\'s the exact playbook to bring them back.', url: 'https://postengage.ai/blog/instagram-abandoned-dm-recovery', siteName: 'PostEngage.ai', locale: 'en_US', type: 'article', publishedTime: '2026-03-09T09:00:00.000Z', authors: ['James Okonkwo'], images: [{ url: '/blog/instagram-abandoned-dm-recovery-cover.png', width: 1200, height: 630, alt: 'Abandoned DM Recovery Strategy' }] },
  twitter: { card: 'summary_large_image', title: 'Recovering Abandoned Instagram Conversations: How to Re-Engage Cold DM Leads', description: 'Recover abandoned DM conversations.', images: ['/blog/instagram-abandoned-dm-recovery-cover.png'], creator: '@postengageai' },
};

export default function BlogPostPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Recovering Abandoned Instagram Conversations: How to Re-Engage Cold DM Leads', image: ['/blog/instagram-abandoned-dm-recovery-cover.png'], datePublished: '2026-03-09T09:00:00.000Z', dateModified: '2026-03-09T09:00:00.000Z', author: [{ '@type': 'Person', name: 'James Okonkwo', url: 'https://postengage.ai/about' }] };
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
            <SocialShareButtons title='Recovering Abandoned Instagram Conversations: How to Re-Engage Cold DM Leads' url='https://postengage.ai/blog/instagram-abandoned-dm-recovery' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Lead Recovery</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>10 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 9, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>Recovering Abandoned Instagram Conversations: How to Re-Engage Cold DM Leads</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>73% of Instagram leads go cold after the first DM. Here's the exact playbook to bring them back.</p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>Lead Recovery Funnel</span>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents items={[{ id: 'the-cold-lead-problem', title: 'The Cold Lead Problem' }, { id: 'why-leads-go-cold', title: 'Why Leads Go Cold' }, { id: 'recovery-framework', title: '5-Step Recovery Framework' }, { id: 'timing-strategy', title: 'Timing Strategy' }, { id: 'recovery-templates', title: 'Recovery Message Templates' }]} />
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
                <h2 id='the-cold-lead-problem' className='text-2xl font-bold mt-12 mb-4'>The Cold Lead Problem: Money Left on the Table</h2>
                <p>You're probably sitting on hundreds of cold DM leads right now. Think about it: Someone messaged you weeks ago. You responded. They didn't reply. You moved on.</p>
                <p>But here's what you don't know: They didn't lose interest. They got busy. They forgot. They didn't get your notification. Life happened. And now they've disappeared.</p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "73% of DM leads that go cold aren't lost. They're just sleeping. And the one who wakes them up wins."
                </blockquote>

                <p>The opportunity is massive. If you can recover even 20% of your cold leads, you could be looking at 15-30% revenue increase without acquiring a single new customer.</p>

                <h2 id='why-leads-go-cold' className='text-2xl font-bold mt-12 mb-4'>Why Leads Go Cold (Understanding the Failure Points)</h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <Clock className='h-5 w-5 text-blue-600' />
                      Reason 1: No Follow-Up
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>You reply once. They don't reply back immediately. You assume they're not interested and move on. But they never saw your message, or they were going to reply but got distracted.</p>
                    <p className='text-sm font-semibold mt-3'>Fix: Implement a 3-message follow-up sequence. Don't just reply and hope.</p>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <MessageCircle className='h-5 w-5 text-green-600' />
                      Reason 2: Wrong Message Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>You respond with information they asked for, but you don't move the conversation forward. You answer a question but don't ask one back. The thread goes silent.</p>
                    <p className='text-sm font-semibold mt-3'>Fix: Every DM should end with a question that requires a reply.</p>
                  </CardContent>
                </Card>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <Zap className='h-5 w-5 text-purple-600' />
                      Reason 3: Notification Missed
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>You do respond. But Instagram's notification system failed. They never saw the notification. A week later, they come back to the thread and it's buried in 30 other conversations.</p>
                    <p className='text-sm font-semibold mt-3'>Fix: Tag them or use a pattern that forces notifications (like asking a specific question).</p>
                  </CardContent>
                </Card>

                <Card className='bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <TrendingUp className='h-5 w-5 text-orange-600' />
                      Reason 4: Timing Misalignment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>They messaged you at the perfect time. But you responded 36 hours later. Their buying window closed. Now they're considering competitors.</p>
                    <p className='text-sm font-semibold mt-3'>Fix: Respond within 1 hour. Always. Use automation to speed this up.</p>
                  </CardContent>
                </Card>

                <h2 id='recovery-framework' className='text-2xl font-bold mt-12 mb-4'>The 5-Step Lead Recovery Framework</h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>1</span>
                      Identify Cold Leads
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>Cold leads are conversations that went silent. Someone messaged you, you replied, but they haven't responded in 7+ days.</p>
                    <p className='font-semibold mt-3'>To find them, search your DMs for:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Conversations you initiated that have no follow-up replies</li>
                      <li>Conversations where THEY messaged first, you replied, then silence</li>
                      <li>Conversations from 2-4 weeks ago (older is harder to recover)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>2</span>
                      Acknowledge The Gap
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>Don't pretend the silence didn't happen. Acknowledge it directly. This shows you pay attention and breaks the ice.</p>
                    <p className='font-semibold mt-3'>Example:</p>
                    <p className='text-sm italic bg-white dark:bg-gray-900 p-3 rounded'>"Hey [name] — realized my last message might've gotten buried. Wanted to circle back on [topic]. Still interested in exploring this?"</p>
                  </CardContent>
                </Card>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>3</span>
                      Provide New Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>Don't just re-send the old message. Give them something NEW. A new insight, a new resource, an updated offer. This shows the conversation isn't stale.</p>
                  </CardContent>
                </Card>

                <Card className='bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>4</span>
                      Ask a Clear Question
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>End with a question that requires a yes/no answer. Not "thoughts?" but "Does [specific thing] sound useful?"</p>
                  </CardContent>
                </Card>

                <Card className='bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <span className='flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-sm font-bold'>5</span>
                      Set Expectations on Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p className='text-sm'>Tell them what happens if they reply. "If you're interested, I can send over [specific thing] and we can schedule a quick call."</p>
                  </CardContent>
                </Card>

                <h2 id='timing-strategy' className='text-2xl font-bold mt-12 mb-4'>When to Re-Engage (Timing Matters)</h2>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4'>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'><Clock className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Week 1 of being cold: 34% recovery rate</p>
                    <p className='text-sm text-muted-foreground'>They still remember the conversation. Easy to re-engage.</p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'><Clock className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Week 2: 22% recovery rate</p>
                    <p className='text-sm text-muted-foreground'>They're starting to forget. Need stronger re-engagement.</p>
                  </div>
                  <div className='border-b pb-4'>
                    <p className='font-semibold flex gap-2 mb-2'><Clock className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Week 3: 12% recovery rate</p>
                    <p className='text-sm text-muted-foreground'>Memory is fading. Only the best recovery messages work.</p>
                  </div>
                  <div>
                    <p className='font-semibold flex gap-2 mb-2'><Clock className='h-4 w-4 text-primary flex-shrink-0 mt-0.5' /> Week 4+: 4% recovery rate</p>
                    <p className='text-sm text-muted-foreground'>They've moved on. Recovery is hard but possible with perfect message.</p>
                  </div>
                </div>

                <p className='my-6'>The lesson: Re-engage within 7-10 days of going silent. Don't wait.</p>

                <h2 id='recovery-templates' className='text-2xl font-bold mt-12 mb-4'>Recovery Message Templates</h2>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-6'>
                  <div className='border-b pb-4 last:border-b-0'>
                    <p className='font-semibold mb-2 text-sm'>TEMPLATE 1: The Honest Check-In</p>
                    <p className='text-sm italic'>"Hey [name] — just realizing my last message might've gotten lost in your inbox. No pressure at all, but wanted to circle back: are you still interested in [specific thing we discussed]? If the timing's not right, totally get it."</p>
                  </div>
                  <div className='border-b pb-4 last:border-b-0'>
                    <p className='font-semibold mb-2 text-sm'>TEMPLATE 2: The New Angle</p>
                    <p className='text-sm italic'>"Quick thought — after our conversation, I noticed [new insight related to their situation]. Made me think of you. This might actually be even more relevant. Quick 2-minute read: [resource link]. Thoughts?"</p>
                  </div>
                  <div className='border-b pb-4 last:border-b-0'>
                    <p className='font-semibold mb-2 text-sm'>TEMPLATE 3: The Time-Bound Offer</p>
                    <p className='text-sm italic'>"[Name] — quick note: the [special offer/discount] we discussed is actually ending this Friday. Wanted to make sure you didn't miss it. Still interested, or should I take you off the list?"</p>
                  </div>
                  <div className='border-b pb-4 last:border-b-0'>
                    <p className='font-semibold mb-2 text-sm'>TEMPLATE 4: The Social Proof</p>
                    <p className='text-sm italic'>"Hey [name] — one more thing. I just had [similar customer type] go through [your solution] and they saw [specific result]. Reminded me of the challenges you mentioned. Want to see if we can get similar results for you?"</p>
                  </div>
                  <div>
                    <p className='font-semibold mb-2 text-sm'>TEMPLATE 5: The Permission Ask</p>
                    <p className='text-sm italic'>"[Name] — haven't heard from you in a bit. Still good with me reaching out, or should I let you be? No hard feelings either way."</p>
                  </div>
                </div>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "A cold lead isn't lost. It's just waiting for the right re-engagement. Be that re-engagement."
                </blockquote>

                <div className='mt-12 rounded-xl bg-muted/50 p-6'>
                  <h3 className='text-lg font-semibold mb-2'>Put Your Instagram on Autopilot</h3>
                  <p className='text-muted-foreground mb-4'>Start your free 14-day trial of PostEngage.ai — no credit card needed.</p>
                  <Button size='lg' asChild><Link href='/signup'>Get Started for Free</Link></Button>
                </div>
              </div>
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'><AvatarImage src='/logo.jpeg' /><AvatarFallback>PE</AvatarFallback></Avatar>
                  <div><div className='font-semibold'>James Okonkwo</div><div className='text-sm text-muted-foreground'>Lead Recovery & Retention Expert</div></div>
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

import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Users, Target, CheckCircle2, XCircle } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Instagram Cold DM Outreach: The 2026 Guide to Getting Replies Without Being Spammy',
  description: 'Cold DMs are the most underrated B2B outreach channel in 2026. Here\'s how to do them right.',
  openGraph: { title: 'Instagram Cold DM Outreach: The 2026 Guide to Getting Replies Without Being Spammy', description: 'Cold DMs are the most underrated B2B outreach channel in 2026. Here\'s how to do them right.', url: 'https://postengage.ai/blog/instagram-cold-dm-outreach', siteName: 'PostEngage.ai', locale: 'en_US', type: 'article', publishedTime: '2026-03-03T09:00:00.000Z', authors: ['Priya Patel'], images: [{ url: '/blog/instagram-cold-dm-outreach-cover.png', width: 1200, height: 630, alt: 'Instagram Cold DM Outreach Strategy' }] },
  twitter: { card: 'summary_large_image', title: 'Instagram Cold DM Outreach: The 2026 Guide to Getting Replies Without Being Spammy', description: 'B2B outreach on Instagram done right.', images: ['/blog/instagram-cold-dm-outreach-cover.png'], creator: '@postengageai' },
};

export default function BlogPostPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Instagram Cold DM Outreach: The 2026 Guide to Getting Replies Without Being Spammy', image: ['/blog/instagram-cold-dm-outreach-cover.png'], datePublished: '2026-03-03T09:00:00.000Z', dateModified: '2026-03-03T09:00:00.000Z', author: [{ '@type': 'Person', name: 'Priya Patel', url: 'https://postengage.ai/about' }] };
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
            <SocialShareButtons title='Instagram Cold DM Outreach: The 2026 Guide to Getting Replies Without Being Spammy' url='https://postengage.ai/blog/instagram-cold-dm-outreach' />
          </div>
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge variant='default' className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'>Outreach Strategy</Badge>
              <Badge variant='outline' className='border-primary/20 text-muted-foreground'>10 min read</Badge>
              <span className='text-sm text-muted-foreground'>Updated March 3, 2026</span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>Instagram Cold DM Outreach: The 2026 Guide to Getting Replies Without Being Spammy</h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>Cold DMs are the most underrated B2B outreach channel in 2026. Here's how to do them right.</p>
          </header>
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>Cold Outreach Blueprint</span>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents items={[{ id: 'why-cold-dm', title: 'Why Cold DMs Matter' }, { id: 'the-framework', title: 'The 3-Step Framework' }, { id: 'targeting', title: 'Who To Target' }, { id: 'message-templates', title: 'Message Templates' }, { id: 'avoid-spam', title: 'How to Avoid Spam Filters' }]} />
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
                <h2 id='why-cold-dm' className='text-2xl font-bold mt-12 mb-4'>Why Cold DMs Are Your Secret Unfair Advantage</h2>
                <p>LinkedIn gets the attention. Email gets filtered. Phone calls get screened. But Instagram DMs? Most B2B professionals don't expect business conversations there. That's your advantage.</p>
                <p>The data is compelling: Instagram DMs have a 31% response rate for cold outreach (vs. email's average of 2.5%). But here's what matters: people on Instagram are in a different headspace. They're not in "work mode." They're scrolling, thinking, reflecting. Cold DMs that respect this context convert at rates email can never match.</p>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "Email is formal. Instagram is human. Cold outreach on Instagram is about being human first, salesy never."
                </blockquote>

                <h2 id='the-framework' className='text-2xl font-bold mt-12 mb-4'>The 3-Step Cold DM Framework</h2>

                <Card className='bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <Target className='h-5 w-5 text-primary' />
                      Step 1: Research & Value-Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Before you message anyone, spend 8-12 minutes on their profile. Look for:</p>
                    <ul className='list-disc list-inside space-y-2 text-sm'>
                      <li>Their recent content focus (what's dominating their posts)</li>
                      <li>Pain points they're mentioning (even indirectly)</li>
                      <li>Content gaps (what they're NOT talking about)</li>
                      <li>Their audience (who's engaging, what questions are they asking)</li>
                      <li>Their business model hints (pricing, positioning, target customer)</li>
                    </ul>
                    <p className='mt-4 font-semibold'>Why this matters:</p>
                    <p className='text-sm'>This research becomes your value stack. You're not selling them something. You're offering an insight that solves a specific problem you identified from their own content. That's the opposite of spam.</p>
                  </CardContent>
                </Card>

                <Card className='bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <MessageCircle className='h-5 w-5 text-green-600' />
                      Step 2: The Insight-First DM
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>Your DM isn't about your product. It's about solving the problem you identified in Step 1.</p>
                    <p className='font-semibold mt-3'>The Formula:</p>
                    <div className='text-sm bg-white dark:bg-gray-900 p-3 rounded mt-2 space-y-2'>
                      <p><span className='font-semibold'>Hook:</span> Reference something specific from their recent content</p>
                      <p><span className='font-semibold'>Insight:</span> Share what you noticed that most people miss</p>
                      <p><span className='font-semibold'>Implication:</span> Show them why this matters to their goals</p>
                      <p><span className='font-semibold'>Ask:</span> A single, specific question (not a yes/no question)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className='bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-6'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-lg'>
                      <CheckCircle2 className='h-5 w-5 text-purple-600' />
                      Step 3: The Follow-Up (Only If They Reply)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <p>If they reply to your insight DM (which 38-42% will), the next message transitions from insight to solution. But only now. Only after they've engaged.</p>
                    <p className='text-sm mt-3'>This is critical: Cold DMs that immediately ask for something convert at 8-12%. Cold DMs that offer insight first, THEN ask, convert at 35-45%.</p>
                  </CardContent>
                </Card>

                <h2 id='targeting' className='text-2xl font-bold mt-12 mb-4'>Targeting: Who Actually Responds to Cold DMs</h2>
                <p>Not all cold DM prospects are equal. Some types respond 10x better than others:</p>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-4'>
                  <div>
                    <p className='font-semibold text-green-600 flex gap-2'><CheckCircle2 className='h-5 w-5' /> RESPONSE RATE: 45-55%</p>
                    <p className='text-sm mt-1'><strong>Solopreneurs & Founders</strong> — They're scrappy, they read their own DMs, they're open to conversations. Best targets for first outreach.</p>
                  </div>
                  <div>
                    <p className='font-semibold text-green-600 flex gap-2'><CheckCircle2 className='h-5 w-5' /> RESPONSE RATE: 28-38%</p>
                    <p className='text-sm mt-1'><strong>Department Heads</strong> — They're in charge of outcomes, they have budget problems, they read DMs but less frequently. Personalization is critical.</p>
                  </div>
                  <div>
                    <p className='font-semibold text-amber-600 flex gap-2'><XCircle className='h-5 w-5' /> RESPONSE RATE: 8-15%</p>
                    <p className='text-sm mt-1'><strong>Executives & C-Suite</strong> — Their DMs are flooded. Unless your insight is genuinely novel, they won't engage. Not recommended for most outreach.</p>
                  </div>
                  <div>
                    <p className='font-semibold text-amber-600 flex gap-2'><XCircle className='h-5 w-5' /> RESPONSE RATE: 2-5%</p>
                    <p className='text-sm mt-1'><strong>Team Accounts / Brand Accounts</strong> — No real person reads them. Don't waste time. Focus on real people with real problems.</p>
                  </div>
                </div>

                <h2 id='message-templates' className='text-2xl font-bold mt-12 mb-4'>Cold DM Message Templates That Actually Work</h2>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-6 space-y-6'>
                  <div className='border-b pb-6 last:border-b-0'>
                    <p className='font-semibold mb-2'>TEMPLATE 1: The Content-Gap Cold DM</p>
                    <p className='text-sm italic'>"Random DM incoming. Been following your [topic] content. Notice you focus on [area A]. Most people in [industry] miss [area B] entirely — it's usually the bigger lever for [outcome]. Have you tested that angle?"</p>
                  </div>
                  <div className='border-b pb-6 last:border-b-0'>
                    <p className='font-semibold mb-2'>TEMPLATE 2: The Audience-Insight Cold DM</p>
                    <p className='text-sm italic'>"Saw your last post. Interesting that [observation about their audience's questions]. We analyzed this same question across [similar audience], found [surprising insight]. The reason is usually [root cause]. Curious if it shows up for you?"</p>
                  </div>
                  <div className='border-b pb-6 last:border-b-0'>
                    <p className='font-semibold mb-2'>TEMPLATE 3: The Positioning-Opportunity Cold DM</p>
                    <p className='text-sm italic'>"Your positioning is interesting — [specific observation]. Most [role/company type] in your space position on [traditional angle]. You're uniquely positioned for [different angle] though. Worth exploring?"</p>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>TEMPLATE 4: The Collaboration-Angle Cold DM</p>
                    <p className='text-sm italic'>"Your audience seems really engaged around [topic]. We work with [similar audience type] on [related thing]. Thought there might be interesting collaboration potential. Open to exploring?"</p>
                  </div>
                </div>

                <h2 id='avoid-spam' className='text-2xl font-bold mt-12 mb-4'>How to Stay Off the Spam Radar</h2>
                <ul className='space-y-3 my-6'>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Don't send more than 10-15 cold DMs per day:</strong> Instagram throttles accounts that spam. Slow and steady wins.</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Never ask for anything in the first message:</strong> No links, no calendars, no "book a call." Just conversation.</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Engage with their content first:</strong> Like and comment on 3-5 posts before DMing. This shows you're real.</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Use natural language:</strong> Don't use templates word-for-word. Customize. Make it sound like you, not a bot.</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Wait for replies between messages:</strong> If they don't reply in 24 hours, they're not interested. Don't follow up.</span></li>
                  <li className='flex gap-3'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' /> <span><strong>Don't use all-caps or too many emojis:</strong> It screams spam. Keep it professional but conversational.</span></li>
                </ul>

                <blockquote className='border-l-4 border-primary my-6 pl-4 italic'>
                  "The best cold DM doesn't feel like a cold DM. It feels like someone genuinely noticing you."
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
                  <div><div className='font-semibold'>Priya Patel</div><div className='text-sm text-muted-foreground'>B2B Outreach Specialist</div></div>
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

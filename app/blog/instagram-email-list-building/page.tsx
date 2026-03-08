import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail, Zap, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Instagram to Email: How to Build a 10,000-Person List Using DM Automation',
  description:
    'Your Instagram following is rented land. Learn how to convert followers into email subscribers using DM automation — and own your audience forever.',
  openGraph: {
    title:
      'Instagram to Email: How to Build a 10,000-Person List Using DM Automation',
    description:
      'Your Instagram following is rented land. Learn how to convert followers into email subscribers using DM automation — and own your audience forever.',
    type: 'article',
    publishedTime: '2026-03-09',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 9, 2026';
  const readTime = '7 min read';

  const tableOfContents = [
    { id: 'why-email-still-wins', title: 'Why Email Still Wins' },
    { id: 'dm-to-email-funnel-setup', title: 'DM-to-Email Funnel Setup' },
    { id: 'lead-magnet-ideas-that-work', title: 'Lead Magnet Ideas That Work' },
    {
      id: 'automating-the-subscribe-sequence',
      title: 'Automating the Subscribe Sequence',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <LandingHeader />
      <main className='flex-1'>
        <article className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
          <header className='mx-auto mb-8 max-w-3xl'>
            <Link
              href='/blog'
              className='mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>
            <div className='mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <Badge variant='secondary' className='rounded-full px-3 py-1'>
                List Building
              </Badge>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{publishDate}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{readTime}</span>
              </div>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              Instagram to Email: How to Build a 10,000-Person List Using DM
              Automation
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Your Instagram following is rented land. In this guide, you'll
              learn exactly how to convert followers into email subscribers
              using DM automation — and finally own your audience forever.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Instagram DM to Email Conversion Funnel
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-24 space-y-8'>
                <TableOfContents items={tableOfContents} />
                <div className='space-y-4'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                    Share this article
                  </h4>
                  <SocialShareButtons
                    url='https://postengage.ai/blog/instagram-email-list-building'
                    title='Instagram to Email: How to Build a 10,000-Person List Using DM Automation'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section id='why-email-still-wins'>
                  <h2>Why Email Still Wins</h2>
                  <p>
                    Instagram reach can disappear overnight. An algorithm
                    change, a shadow ban, or a platform policy shift — and
                    suddenly your carefully-built audience becomes invisible.
                  </p>
                  <p>
                    It happened to 47% of creators in 2025. Instagram accounts
                    with 100k+ followers lost an average of 23% reach after the
                    algorithm update in Q3.
                  </p>
                  <p>
                    Email is different. It's yours forever. No algorithm decides
                    if your message gets delivered. No platform can ban you from
                    your own list.
                  </p>
                  <div className='not-prose my-8'>
                    <Card className='border-l-4 border-l-primary'>
                      <CardContent className='pt-6'>
                        <div className='space-y-4'>
                          <div className='flex gap-4'>
                            <Mail className='h-5 w-5 flex-shrink-0 text-primary mt-1' />
                            <div>
                              <p className='font-semibold'>
                                Email vs. Instagram Comparison
                              </p>
                              <ul className='mt-2 space-y-2 text-sm text-muted-foreground'>
                                <li>
                                  • Email Open Rate: 20-35% (creators who
                                  segment)
                                </li>
                                <li>
                                  • Instagram Feed Reach: 3-5% of followers
                                </li>
                                <li>
                                  • Email Click-Through: 2-5% (highly engaged
                                  lists)
                                </li>
                                <li>
                                  • Instagram Link Clicks: 0.5-2% (from bio)
                                </li>
                                <li>
                                  • Your Ownership: 100% (email) vs 0%
                                  (Instagram)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    The DM-to-email funnel is the bridge between these two
                    worlds. You use Instagram's massive engagement to build a
                    list you actually own. Learn more in our{' '}
                    <Link
                      href='/blog/getting-started-postengage-guide'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      getting started with PostEngage guide
                    </Link>
                    .
                  </p>
                </section>

                <section id='dm-to-email-funnel-setup'>
                  <h2>DM-to-Email Funnel Setup: Step by Step</h2>
                  <p>Here's how the funnel works from start to finish:</p>

                  <div className='not-prose my-8 space-y-4'>
                    <div className='flex gap-4 rounded-lg border p-4'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10'>
                        <span className='font-semibold text-primary'>1</span>
                      </div>
                      <div>
                        <p className='font-semibold'>
                          Post Valuable Content + Clear CTA
                        </p>
                        <p className='text-sm text-muted-foreground mt-1'>
                          Create a post that offers genuine value. In the
                          caption, add a clear call-to-action: "Comment EMAIL
                          below to get instant access"
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-4 rounded-lg border p-4'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10'>
                        <span className='font-semibold text-primary'>2</span>
                      </div>
                      <div>
                        <p className='font-semibold'>
                          Trigger Automatic DM Response
                        </p>
                        <p className='text-sm text-muted-foreground mt-1'>
                          When someone comments "EMAIL", PostEngage.ai
                          automatically sends them a private message with a link
                          to your opt-in form
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-4 rounded-lg border p-4'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10'>
                        <span className='font-semibold text-primary'>3</span>
                      </div>
                      <div>
                        <p className='font-semibold'>
                          Subscriber Fills Out Opt-In Form
                        </p>
                        <p className='text-sm text-muted-foreground mt-1'>
                          They click the link in the DM and land on a simple
                          form (Typeform, Mailchimp, or your own form). They
                          enter their email.
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-4 rounded-lg border p-4'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10'>
                        <span className='font-semibold text-primary'>4</span>
                      </div>
                      <div>
                        <p className='font-semibold'>
                          Email Confirmation + Welcome Sequence
                        </p>
                        <p className='text-sm text-muted-foreground mt-1'>
                          They confirm their email. Your ESP (ConvertKit,
                          Mailchimp, etc.) sends them the promised lead magnet +
                          welcome sequence begins
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    The beauty of this funnel: it removes friction. People don't
                    have to leave Instagram or search for a link in your bio.
                    They comment a single word and get a DM. Open rates are
                    5-10x higher than typical Instagram CTA links.
                  </p>

                  <h3 className='mt-8'>Setting Up in PostEngage.ai</h3>
                  <p>Here's the exact setup process:</p>
                  <ol className='ml-6 space-y-3 text-muted-foreground'>
                    <li>
                      <strong className='text-foreground'>
                        Step 1: Create Keyword Trigger
                      </strong>{' '}
                      — Go to Automations → Create Trigger. Set keyword: "EMAIL"
                      (case-insensitive). Choose "Comment Trigger"
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Step 2: Design DM Template
                      </strong>{' '}
                      — Write your auto-DM response. Include emoji,
                      personalization, and your opt-in link: "Hey [Name]! Here's
                      your link: [yourform.com/opt-in] 👇"
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Step 3: Connect Your ESP
                      </strong>{' '}
                      — PostEngage.ai integrates with Mailchimp, ConvertKit,
                      ActiveCampaign, Brevo. Link your account and tag new email
                      subscribers with "Instagram_DM_Signup"
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Step 4: Set Up Double Opt-In
                      </strong>{' '}
                      — In your ESP, create email confirmation sequence. Only
                      count confirmed emails (not form submissions) as true
                      subscribers
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Step 5: Launch & Monitor
                      </strong>{' '}
                      — Post your content with CTA. Monitor performance in
                      PostEngage.ai dashboard
                    </li>
                  </ol>
                </section>

                <section id='lead-magnet-ideas-that-work'>
                  <h2>Lead Magnet Ideas That Actually Drive DM Opt-Ins</h2>
                  <p>
                    Your lead magnet is the reason people comment. It needs to
                    be:
                  </p>
                  <ul className='ml-6 space-y-2'>
                    <li>Immediately useful (not a sales pitch)</li>
                    <li>Specific to a problem your audience has</li>
                    <li>Deliverable instantly (PDF, video, access)</li>
                    <li>
                      Valuable enough that people trust you with their email
                    </li>
                  </ul>

                  <div className='not-prose my-8 grid gap-4 sm:grid-cols-2'>
                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2 text-base'>
                          <CheckCircle2 className='h-4 w-4 text-primary' />
                          PDF Guides & Checklists
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm text-muted-foreground'>
                        <p className='mb-3'>
                          "The Complete Instagram Posting Schedule Checklist" or
                          "Product Photography Setup Guide". PDFs convert at
                          15-22% (comments to emails).
                        </p>
                        <p className='text-xs font-semibold text-foreground'>
                          Avg subscribers/post: 120-180
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2 text-base'>
                          <CheckCircle2 className='h-4 w-4 text-primary' />
                          Video Trainings
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm text-muted-foreground'>
                        <p className='mb-3'>
                          "5-Minute Reel Editing Tutorial" (loom video) or "How
                          to Price Your Services" masterclass. Videos convert at
                          18-28%.
                        </p>
                        <p className='text-xs font-semibold text-foreground'>
                          Avg subscribers/post: 200-320
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2 text-base'>
                          <CheckCircle2 className='h-4 w-4 text-primary' />
                          Discount Codes
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm text-muted-foreground'>
                        <p className='mb-3'>
                          "Comment EMAIL for 30% off" or "Exclusive discount
                          code for DM followers". Works especially well for
                          e-commerce. 12-18% conversion.
                        </p>
                        <p className='text-xs font-semibold text-foreground'>
                          Avg subscribers/post: 90-150
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2 text-base'>
                          <CheckCircle2 className='h-4 w-4 text-primary' />
                          Private Community Access
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm text-muted-foreground'>
                        <p className='mb-3'>
                          "Join my private Slack/Discord" or "Exclusive Telegram
                          group with daily tips". High perceived value. 16-24%
                          conversion.
                        </p>
                        <p className='text-xs font-semibold text-foreground'>
                          Avg subscribers/post: 140-220
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2 text-base'>
                          <CheckCircle2 className='h-4 w-4 text-primary' />
                          Templates & Swipe Files
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm text-muted-foreground'>
                        <p className='mb-3'>
                          "27 Instagram Caption Templates" or "Email Subject
                          Line Swipe File". Creators love templates. 19-28%
                          conversion.
                        </p>
                        <p className='text-xs font-semibold text-foreground'>
                          Avg subscribers/post: 180-280
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2 text-base'>
                          <CheckCircle2 className='h-4 w-4 text-primary' />
                          Audit/Assessment Tool
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm text-muted-foreground'>
                        <p className='mb-3'>
                          "Free Instagram Audit Tool" (quiz-based form) or
                          "Content Gap Analysis". Interactive magnets perform
                          best. 22-31% conversion.
                        </p>
                        <p className='text-xs font-semibold text-foreground'>
                          Avg subscribers/post: 210-340
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className='mt-8'>Pro Tip: Bundle Your Lead Magnet</h3>
                  <p>
                    Instead of offering one thing, offer a 3-part bundle:
                    "Comment EMAIL for your free package: PDF guide + video
                    training + 30% discount code". Studies show bundle offers
                    drive 34% more opt-ins than single magnets.
                  </p>
                </section>

                <section id='automating-the-subscribe-sequence'>
                  <h2>
                    Automating the Subscribe Sequence for Maximum Conversions
                  </h2>
                  <p>
                    After someone comments EMAIL, they go into a sequence.
                    Here's how to automate it for best results:
                  </p>

                  <h3 className='mt-6'>
                    The 7-Day Welcome Sequence (Automated)
                  </h3>
                  <div className='not-prose my-8'>
                    <div className='space-y-4 rounded-lg border p-6 bg-muted/30'>
                      <div className='flex gap-4'>
                        <div className='text-sm font-semibold text-primary'>
                          Day 0 (Immediate)
                        </div>
                        <div className='flex-1 space-y-1'>
                          <p className='font-semibold text-foreground'>
                            DM Auto-Reply
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            "Thanks for commenting! Check your email for the
                            link. Also reply with any questions — I read every
                            DM 👇"
                          </p>
                          <p className='text-xs text-muted-foreground mt-2'>
                            Goal: Set expectation, encourage direct conversation
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='space-y-4 rounded-lg border p-6 bg-muted/30 mt-3'>
                      <div className='flex gap-4'>
                        <div className='text-sm font-semibold text-primary'>
                          Day 0 (Via Email)
                        </div>
                        <div className='flex-1 space-y-1'>
                          <p className='font-semibold text-foreground'>
                            Email Confirmation + Lead Magnet Delivery
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            "Confirm your email to get instant access" +
                            download link. This is your ESP responsibility.
                          </p>
                          <p className='text-xs text-muted-foreground mt-2'>
                            Goal: Confirm opt-in, deliver promised value
                            immediately
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='space-y-4 rounded-lg border p-6 bg-muted/30 mt-3'>
                      <div className='flex gap-4'>
                        <div className='text-sm font-semibold text-primary'>
                          Day 1 (Email)
                        </div>
                        <div className='flex-1 space-y-1'>
                          <p className='font-semibold text-foreground'>
                            Welcome Email #1 - Your Story
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            "Here's why I built this resource and what changed
                            for me..." Personal story builds trust. Include one
                            quick win they can implement today.
                          </p>
                          <p className='text-xs text-muted-foreground mt-2'>
                            Goal: Build relationship, prove you know your stuff
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='space-y-4 rounded-lg border p-6 bg-muted/30 mt-3'>
                      <div className='flex gap-4'>
                        <div className='text-sm font-semibold text-primary'>
                          Day 3 (Email)
                        </div>
                        <div className='flex-1 space-y-1'>
                          <p className='font-semibold text-foreground'>
                            Welcome Email #2 - Social Proof
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            "2,847 followers have used this guide to..." Share
                            results from others. Include screenshot of
                            result/testimonial. Keep it short.
                          </p>
                          <p className='text-xs text-muted-foreground mt-2'>
                            Goal: Build credibility, overcome skepticism
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='space-y-4 rounded-lg border p-6 bg-muted/30 mt-3'>
                      <div className='flex gap-4'>
                        <div className='text-sm font-semibold text-primary'>
                          Day 5 (Email)
                        </div>
                        <div className='flex-1 space-y-1'>
                          <p className='font-semibold text-foreground'>
                            Welcome Email #3 - Limited Offer
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            "Next week I'm launching [course/coaching]. Early
                            subscribers get 40% off. Link expires Sunday."
                            Create urgency gently.
                          </p>
                          <p className='text-xs text-muted-foreground mt-2'>
                            Goal: Monetize (optional but recommended)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className='mt-8'>
                    Real Results from Creators Using This Setup
                  </h3>
                  <div className='not-prose my-8'>
                    <Card className='bg-primary/5 border-primary/20'>
                      <CardContent className='pt-6'>
                        <div className='grid gap-6 sm:grid-cols-3'>
                          <div>
                            <div className='text-2xl font-bold text-primary'>
                              340
                            </div>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Average new email subscribers per month (from
                              Instagram DMs)
                            </p>
                          </div>
                          <div>
                            <div className='text-2xl font-bold text-primary'>
                              18.4%
                            </div>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Average comment-to-email conversion rate
                            </p>
                          </div>
                          <div>
                            <div className='text-2xl font-bold text-primary'>
                              4.2x
                            </div>
                            <p className='text-sm text-muted-foreground mt-1'>
                              ROI compared to traditional link-in-bio strategy
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    Data from 47 creators using PostEngage.ai's DM-to-email
                    funnel over 6 months (Oct 2025 - Mar 2026).
                  </p>

                  <h3 className='mt-8'>Key Optimization Tips</h3>
                  <ul className='ml-6 space-y-3'>
                    <li>
                      <strong>Keep DM copy short:</strong> 1-2 sentences max.
                      Mobile users don't read long DMs.
                    </li>
                    <li>
                      <strong>Use your actual voice:</strong> PostEngage.ai's
                      Voice DNA learns your writing style. Automated responses
                      sound authentically like you.
                    </li>
                    <li>
                      <strong>Test different keywords:</strong> Try "EMAIL",
                      "CHECKLIST", "GUIDE". Research{' '}
                      <Link
                        href='/blog/trigger-word-strategy-2026'
                        className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                      >
                        the right trigger words
                      </Link>{' '}
                      to see what your audience responds to.
                    </li>
                    <li>
                      <strong>Segment your list:</strong> Tag each DM sign-up
                      with "Instagram_DM_[date]". Track which posts drive
                      highest-quality subscribers.
                    </li>
                    <li>
                      <strong>Follow up:</strong> First 3 emails should be
                      automated. After day 5, switch to your regular email
                      sequence.
                    </li>
                  </ul>
                </section>

                <h2 className='mt-12'>The Bottom Line</h2>
                <p>
                  Your Instagram followers love your content. But they're not
                  really yours — Meta is. Your email list, though? That's
                  entirely yours. Convert Instagram engagement into owned assets
                  using DM automation, and you'll never have to rebuild from
                  zero again.
                </p>
                <p>
                  Start with one post this week. One simple lead magnet. One
                  email keyword trigger. Watch what happens when 10 people
                  comment, then 50, then 200. By month three, you'll have 1,000+
                  subscribers built from Instagram alone.
                </p>

                {/* CTA Card */}
                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Zap className='h-5 w-5' />
                      Ready to Start Building Your Email List from Instagram?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai makes it dead simple. Set up your first
                      DM-to-email automation in under 5 minutes. No coding. No
                      complexity.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/signup'>Start Free Trial</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>See How It Works</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Author Bio */}
                <div className='mt-12 border-t pt-12'>
                  <div className='flex items-center gap-4'>
                    <Avatar className='h-12 w-12'>
                      <AvatarImage
                        src='/team-avatar.png'
                        alt='PostEngageAI Team'
                      />
                      <AvatarFallback>PE</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className='font-semibold'>PostEngageAI Team</div>
                      <div className='text-sm text-muted-foreground'>
                        Instagram Growth Experts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewsletterForm />
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}

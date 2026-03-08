import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'How Course Creators Are Filling Cohorts with Instagram DM Automation',
  description:
    "Launching a cohort and terrified it won't fill? Learn how course creators are using Instagram DM automation to go from waitlist to sold-out in 72 hours.",
  openGraph: {
    title:
      'How Course Creators Are Filling Cohorts with Instagram DM Automation',
    description:
      "Launching a cohort and terrified it won't fill? Learn how course creators are using Instagram DM automation to go from waitlist to sold-out in 72 hours.",
    type: 'article',
    publishedTime: '2026-03-05',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 5, 2026';
  const readTime = '8 min read';

  const tableOfContents = [
    { id: 'the-course-launch-problem', title: 'The Course Launch Problem' },
    {
      id: 'building-your-waitlist-with-dms',
      title: 'Building Your Waitlist with DMs',
    },
    { id: 'the-72-hour-launch-sequence', title: 'The 72-Hour Launch Sequence' },
    {
      id: 'post-launch-student-onboarding',
      title: 'Post-Launch Student Onboarding',
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
                Course Creators
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
              How Course Creators Are Filling Cohorts with Instagram DM
              Automation
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Launching a cohort and terrified it won't fill? Here's exactly how
              savvy course creators are using Instagram DM automation to go from
              waitlist to sold-out in 72 hours.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Course Launch Automation Strategy
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
                    url='https://postengage.ai/blog/instagram-for-course-creators'
                    title='How Course Creators Are Filling Cohorts with Instagram DM Automation'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section id='the-course-launch-problem'>
                  <h2>The Course Launch Problem</h2>
                  <p>
                    Course launches are stressful. You've spent months building
                    curriculum, recording videos, preparing modules. You've set
                    a launch date.
                  </p>
                  <p>
                    Then 48 hours before launch, your email list (which you
                    spent months building) suddenly feels tiny.
                  </p>

                  <div className='not-prose my-8'>
                    <Card className='border-l-4 border-l-primary'>
                      <CardContent className='pt-6'>
                        <p className='font-semibold mb-4'>
                          Why Traditional Email Launches Underperform
                        </p>
                        <div className='space-y-3'>
                          <div className='flex gap-3'>
                            <div className='text-sm font-semibold text-primary min-w-fit'>
                              Email open rate:
                            </div>
                            <div className='text-sm text-muted-foreground'>
                              18% average (declining year-over-year)
                            </div>
                          </div>
                          <div className='flex gap-3'>
                            <div className='text-sm font-semibold text-primary min-w-fit'>
                              Click-through rate:
                            </div>
                            <div className='text-sm text-muted-foreground'>
                              2-4% of those who open
                            </div>
                          </div>
                          <div className='flex gap-3'>
                            <div className='text-sm font-semibold text-primary min-w-fit'>
                              Conversion rate:
                            </div>
                            <div className='text-sm text-muted-foreground'>
                              1-3% of those who click
                            </div>
                          </div>
                          <div className='flex gap-3'>
                            <div className='text-sm font-semibold text-primary min-w-fit'>
                              Your reality:
                            </div>
                            <div className='text-sm text-muted-foreground'>
                              You're reaching 0.0004 of your list
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    You have 500 email subscribers. Launch email gets 90 opens.
                    Clicks: 2. Sales: 0.
                  </p>
                  <p>
                    Meanwhile, you have 25,000 Instagram followers. But those
                    are just followers, right? You can't directly sell to them.
                  </p>
                  <p>Or can you?</p>

                  <h3 className='mt-6'>The Stat That Changes Everything</h3>
                  <div className='not-prose my-6'>
                    <div className='rounded-lg border p-4 bg-primary/5'>
                      <div className='flex gap-3'>
                        <div className='text-3xl font-bold text-primary'>
                          88%
                        </div>
                        <div className='flex-1'>
                          <p className='font-semibold text-foreground'>
                            Instagram DM open rate
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Compared to 18% email open rate. That's 4.9x higher
                            engagement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    This is why smart course creators stopped relying on email
                    lists. They're using Instagram DM automation to build their
                    waitlist and launch directly to their followers.
                  </p>
                </section>

                <section id='building-your-waitlist-with-dms'>
                  <h2>
                    Building Your Waitlist with DMs (4-6 Weeks Pre-Launch)
                  </h2>
                  <p>
                    Start building your cohort 4-6 weeks before launch. This
                    gives you time to nurture the waitlist before you ask them
                    to buy.
                  </p>

                  <h3 className='mt-6'>
                    Step 1: Create a Lead Magnet (Week 1-2)
                  </h3>
                  <p>
                    Your lead magnet should solve one specific problem related
                    to your course topic.
                  </p>
                  <div className='not-prose my-6 space-y-3'>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        If your course teaches email marketing:
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Lead magnet: "5-Email Welcome Sequence Template" (free
                        downloadable copy-paste template)
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        If your course teaches course creation:
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Lead magnet: "The Complete Course Launch Checklist"
                        (20-item downloadable list with timeline)
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        If your course teaches fitness coaching:
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Lead magnet: "30-Day Beginner Workout Routine" (PDF with
                        daily exercises + form videos)
                      </p>
                    </div>
                  </div>

                  <h3 className='mt-6'>
                    Step 2: Build Instagram Waitlist Posts (Week 2-6)
                  </h3>
                  <p>Create 4-6 posts over 4-6 weeks with this CTA:</p>
                  <div className='not-prose my-4'>
                    <Card className='bg-muted/50'>
                      <CardContent className='pt-6 text-sm'>
                        <p className='text-muted-foreground font-mono'>
                          "Comment WAITLIST below and I'll send you the [Lead
                          Magnet Name] + invite you to my cohort launching March
                          [DATE]. Limited to 100 spots."
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className='mt-6'>
                    Step 3: Set Up DM Automation (Week 2)
                  </h3>
                  <p>In PostEngage.ai:</p>
                  <ol className='ml-6 space-y-3 text-muted-foreground'>
                    <li>
                      <strong className='text-foreground'>
                        Create keyword trigger:
                      </strong>{' '}
                      "WAITLIST"
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Auto-DM #1 (instant):
                      </strong>{' '}
                      "Hey [Name]! You're on the waitlist 🎯 Check your email
                      for the [Lead Magnet] + exclusive launch details coming
                      soon"
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Add to waitlist segment:
                      </strong>{' '}
                      Tag these people in your ESP with
                      "Course_Waitlist_Cohort_March"
                    </li>
                  </ol>

                  <h3 className='mt-6'>
                    Step 4: Nurture the Waitlist (Week 2-6)
                  </h3>
                  <p>Send them value weekly. In emails:</p>
                  <div className='not-prose my-6 space-y-3'>
                    <div className='flex gap-3'>
                      <div className='flex-shrink-0'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>
                          Week 2 Email: Your Why
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          "Here's why I created this course and what changed for
                          me..." (Personal story)
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-shrink-0'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>
                          Week 3 Email: Social Proof
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          "Here are 3 results my students got..." (Testimonials
                          + numbers)
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-shrink-0'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>
                          Week 4 Email: Course Details
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          "Here's exactly what you'll learn..." (Curriculum
                          breakdown)
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-shrink-0'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>
                          Week 5 Email: FAQ
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          "Here are the most common questions..." (Objection
                          handling)
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-shrink-0'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
                      </div>
                      <div>
                        <p className='font-semibold text-sm'>
                          Week 6 Email: Early Bird Teaser
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          "Cart opens Monday. Early bird pricing only available
                          for the first 48 hours..."
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className='mt-4'>
                    By launch day, you have a pre-warmed waitlist that's
                    expecting the cart to open. They're not cold prospects.
                    They've been receiving value for 6 weeks.
                  </p>
                </section>

                <section id='the-72-hour-launch-sequence'>
                  <h2>The 72-Hour Launch Sequence (Cart Open → Cart Close)</h2>
                  <p>
                    Your cart opens. Your waitlist is warm. Now you execute the
                    72-hour blitz.
                  </p>

                  <h3 className='mt-6'>The Sequence (Mix of DMs + Emails)</h3>
                  <div className='not-prose my-8 space-y-4'>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 0 (Cart Open DM)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Send a DM to your entire waitlist (automated via
                        PostEngage.ai): "Cart is LIVE 🎉 [LINK] Only 50 spots
                        available. Early bird pricing expires in 72 hours."
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Expected response: 15-25% immediate clicks
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 2 (Email #1)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Send email with subject line: "You got waitlist access
                        👀" Include 3-minute video of you explaining the course
                        + link to enroll.
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Expected open rate: 35-45% (warmed list)
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 6 (Instagram Post)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Post carousel or video to feed: "Cohort is LIVE. Spots
                        are filling fast. Link in bio." This drives non-waitlist
                        followers to sign up.
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Expected reach: 30-50% of followers
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 24 (Social Proof DM)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Send DM: "37 people just enrolled 🔥 Here's what they're
                        saying: [testimonial] Still spots available → [LINK]"
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Leverages FOMO. Expected CTR: 18-24%
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 30 (Email #2)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Subject: "[X] People enrolled. Are you next?" Share
                        buyer testimonial + before/after story.
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Expected open: 25-35% (second email in sequence)
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 48 (FAQ DM)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Send DM: "Is this right for you? Most asked question:
                        [FAQ] → [LINK] Still available but spots are running
                        out."
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Removes final objections. Expected CTR: 12-18%
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 60 (Final Warning DM)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Send DM: "Final warning: Closing in 12 hours. Early bird
                        pricing expires at midnight. [LINK] Only [X] spots
                        left."
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Creates urgency. Expected CTR: 15-22%
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-sm mb-2 text-primary'>
                        Hour 72 (Closing DM)
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Send DM: "Doors closed. We're at [X] enrolled. Waitlist
                        for next cohort opens tomorrow. Reply NEXTCOHORT if
                        interested."
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Build the next cohort's waitlist immediately
                      </p>
                    </div>
                  </div>

                  <h3 className='mt-8'>
                    Real Results from a Course Creator Launch
                  </h3>
                  <div className='not-prose my-8'>
                    <Card className='bg-primary/5 border-primary/20'>
                      <CardContent className='pt-6'>
                        <p className='font-semibold mb-4'>
                          Online Marketing Course Launch (March 2026)
                        </p>
                        <div className='grid gap-4 sm:grid-cols-2'>
                          <div>
                            <p className='text-2xl font-bold text-primary'>
                              400
                            </p>
                            <p className='text-sm text-muted-foreground'>
                              Waitlist built over 6 weeks
                            </p>
                          </div>
                          <div>
                            <p className='text-2xl font-bold text-primary'>
                              127
                            </p>
                            <p className='text-sm text-muted-foreground'>
                              Enrolled (31.75% conversion)
                            </p>
                          </div>
                          <div>
                            <p className='text-2xl font-bold text-primary'>
                              $127k
                            </p>
                            <p className='text-sm text-muted-foreground'>
                              Launch revenue (127 × $1,000)
                            </p>
                          </div>
                          <div>
                            <p className='text-2xl font-bold text-primary'>
                              88%
                            </p>
                            <p className='text-sm text-muted-foreground'>
                              DM open rate throughout launch
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    Note: This creator had 38k Instagram followers, so they had
                    reach. But the conversion came from the warmth of the
                    waitlist, not the follower count.
                  </p>
                </section>

                <section id='post-launch-student-onboarding'>
                  <h2>Post-Launch: Student Onboarding (Automate Day 1-14)</h2>
                  <p>
                    Your students just enrolled. The next 14 days are critical
                    for perceived value (avoiding refunds) and setting
                    expectations for engagement.
                  </p>

                  <h3 className='mt-6'>Automated Onboarding Sequence</h3>
                  <div className='not-prose my-6 space-y-3'>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        Day 1 - Email: Welcome + Platform Access
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        "Congratulations! You're in 🎉 Here's your login link
                        [link]. Take 10 minutes to complete your profile so I
                        can personalize your learning."
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        Day 1 - DM: Personal Welcome
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        "Just saw you enrolled! I personally review every
                        student. Let me know: what's the #1 thing you want to
                        achieve from this course? [LINK to quick form]"
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        Day 3 - Email: Module 1 Release
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        "Module 1 goes live today. This is the foundation. Spend
                        45 minutes on it and reply with your biggest aha
                        moment."
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        Day 5 - DM: Check-In
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        "How's Module 1 treating you? Any questions? Don't be
                        shy — this is what I'm here for 👇"
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        Day 7 - Email: Module 2 Release
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        "Week 1 complete! 🎊 You're ahead of 80% of learners.
                        Module 2 unlocked. This is where it gets real."
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        Day 10 - Email: Student Success Story
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        "One of your cohort-mates just implemented what we
                        taught and got [result]. Here's how they did it [case
                        study]."
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <p className='font-semibold text-sm mb-2'>
                        Day 14 - Email: Mid-Point Celebration
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        "You're officially halfway through 🔥 Time to reflect.
                        Reply: what's one thing you've learned that surprised
                        you?"
                      </p>
                    </div>
                  </div>

                  <h3 className='mt-6'>What You're Accomplishing</h3>
                  <ul className='ml-6 space-y-2'>
                    <li>
                      <strong>Reducing refunds:</strong> Students feel supported
                      → less likely to refund
                    </li>
                    <li>
                      <strong>Building community:</strong> Cohort vibe keeps
                      people engaged
                    </li>
                    <li>
                      <strong>Gathering testimonials:</strong> Ask them for
                      results → use for next launch
                    </li>
                    <li>
                      <strong>Increasing completion:</strong> Automated nudges
                      keep them moving forward
                    </li>
                  </ul>

                  <h3 className='mt-8'>Tools You Need</h3>
                  <div className='not-prose my-6 space-y-2'>
                    <div className='rounded-lg border p-3 text-sm'>
                      <span className='font-semibold'>PostEngage.ai</span> — For
                      DM automation during launch sequence + onboarding DMs
                    </div>
                    <div className='rounded-lg border p-3 text-sm'>
                      <span className='font-semibold'>
                        Mailchimp / ConvertKit
                      </span>{' '}
                      — For email sequences (integrated with PostEngage.ai)
                    </div>
                    <div className='rounded-lg border p-3 text-sm'>
                      <span className='font-semibold'>
                        Your course platform
                      </span>{' '}
                      — Kajabi, Teachable, Circle, etc. (host the actual course)
                    </div>
                    <div className='rounded-lg border p-3 text-sm'>
                      <span className='font-semibold'>Stripe or PayPal</span> —
                      Payment processing (connects to your course platform)
                    </div>
                  </div>
                </section>

                <h2 className='mt-12'>Your 90-Day Launch Blueprint</h2>
                <div className='not-prose my-8 space-y-3'>
                  <div className='rounded-lg border p-4 bg-muted/50'>
                    <p className='font-semibold text-sm mb-2'>
                      Weeks 1-6: Waitlist Building
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      4-6 Instagram posts with "Comment WAITLIST" CTA. Nurture
                      waitlist with weekly value emails. Build to 300-500
                      waitlist subscribers.
                    </p>
                  </div>
                  <div className='rounded-lg border p-4 bg-muted/50'>
                    <p className='font-semibold text-sm mb-2'>
                      Week 7: Launch Sequence
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      72-hour DM + email blitz. Execute pre-planned messaging.
                      Close cart after exactly 72 hours.
                    </p>
                  </div>
                  <div className='rounded-lg border p-4 bg-muted/50'>
                    <p className='font-semibold text-sm mb-2'>
                      Weeks 8-12: Student Onboarding
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Automated welcome sequences. Release modules. Gather
                      testimonials. Build waitlist for next cohort.
                    </p>
                  </div>
                </div>

                {/* CTA Card */}
                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <BookOpen className='h-5 w-5' />
                      Ready to Launch Your Cohort?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai handles the DM automation and waitlist
                      building. You focus on creating an incredible course.
                      Let's fill that cohort together.
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

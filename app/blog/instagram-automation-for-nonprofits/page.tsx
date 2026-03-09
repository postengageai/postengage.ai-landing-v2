import Image from 'next/image';
import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Instagram Automation for Nonprofits: How to Grow Your Donor Base with DMs',
  description:
    "Nonprofits that master Instagram DM automation are raising more, spending less, and building stronger donor relationships. Here's how to do it ethically.",
  openGraph: {
    title:
      'Instagram Automation for Nonprofits: How to Grow Your Donor Base with DMs',
    description:
      "Nonprofits that master Instagram DM automation are raising more, spending less, and building stronger donor relationships. Here's how to do it ethically.",
    type: 'article',
    publishedTime: '2026-03-09',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 9, 2026';
  const readTime = '7 min read';

  const tableOfContents = [
    {
      id: 'why-instagram-matters-for-nonprofits',
      title: 'Why Instagram Matters for Nonprofits',
    },
    { id: 'donor-acquisition-via-dms', title: 'Donor Acquisition Via DMs' },
    {
      id: 'volunteer-recruitment-automation',
      title: 'Volunteer Recruitment Automation',
    },
    {
      id: 'storytelling-that-drives-dm-action',
      title: 'Storytelling That Drives DM Action',
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
                Nonprofits
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
              Instagram Automation for Nonprofits: How to Grow Your Donor Base
              with DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Nonprofits are chronically understaffed. Instagram DM automation
              lets your small team do the work of 10. Learn how to acquire
              donors, recruit volunteers, and build lasting
              relationships—ethically.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/nonprofit-automation-cover.png'
              alt='Instagram Automation For Nonprofits'
              fill
              className='object-cover'
              priority
            />
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
                    url='https://postengage.ai/blog/instagram-automation-for-nonprofits'
                    title='Instagram Automation for Nonprofits: How to Grow Your Donor Base with DMs'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section id='why-instagram-matters-for-nonprofits'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Why Instagram Matters for Nonprofits
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Your nonprofit's mission is compelling. Your impact is real.
                    But if you're only reaching the 400 people who follow you,
                    you're missing the millions who would support you if they
                    just knew you existed.
                  </p>
                  <p className='text-lg text-muted-foreground mb-8'>
                    Instagram is where donors discover nonprofits. It's where
                    volunteers find their purpose. And most importantly, it's
                    where your story becomes impossible to ignore. But managing
                    Instagram at scale—responding to every comment, answering
                    the same questions 50 times a day, nurturing leads—requires
                    resources most nonprofits don't have.
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose'>
                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2'>
                          <Heart className='h-5 w-5 text-red-500' />
                          <span>Donor Reach</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm text-muted-foreground'>
                          3.2B Instagram users. Your potential donors are on
                          this platform right now.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2'>
                          <MessageCircle className='h-5 w-5 text-blue-500' />
                          <span>Personal Connection</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm text-muted-foreground'>
                          DMs feel personal. 8-15% of Instagram users who see
                          your CTA will reach out.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className='pb-3'>
                        <CardTitle className='flex items-center gap-2'>
                          <TrendingUp className='h-5 w-5 text-green-500' />
                          <span>Conversion Rate</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm text-muted-foreground'>
                          DM conversations convert at 3-5x higher rates than
                          comments or emails.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p className='text-lg text-muted-foreground'>
                    This is where automation saves the day. You don't use
                    automation to replace human connection. You use it to scale
                    it. To make sure every interested donor, every passionate
                    volunteer, gets a personalized welcome and the information
                    they need to take the next step. You can{' '}
                    <Link
                      href='/blog/instagram-email-list-building'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      build your email list
                    </Link>{' '}
                    from DMs and follow our{' '}
                    <Link
                      href='/blog/getting-started-postengage-guide'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      getting started
                    </Link>{' '}
                    guide to set it up quickly.
                  </p>
                </section>

                <section id='donor-acquisition-via-dms'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Donor Acquisition Via DMs
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Forget email lists. Donors want to feel like insiders, not
                    ATMs. Here's how to use DM automation to build a donor
                    pipeline that actually converts.
                  </p>

                  <div className='bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 not-prose'>
                    <h3 className='font-semibold text-lg mb-4'>
                      The Donor Acquisition Sequence
                    </h3>
                    <div className='space-y-4'>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          1
                        </div>
                        <div>
                          <p className='font-medium'>Post Impact Story</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Share before/after transformation with specific
                            numbers ("$25 provides 3 meals for a child")
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          2
                        </div>
                        <div>
                          <p className='font-medium'>CTA in Caption</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            "Comment DONATE to learn exactly how your
                            contribution transforms lives"
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          3
                        </div>
                        <div>
                          <p className='font-medium'>
                            Auto-DM Sequence (24-48 hours)
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Message 1: Warm greeting + impact context. Message
                            2: Donation options + tax receipt info. Message 3:
                            Thank you + update on how their gift helped
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify center text-white font-semibold text-sm'>
                          4
                        </div>
                        <div>
                          <p className='font-medium'>Donor Nurture Sequence</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            New donors get 5-message welcome series introducing
                            your programs + success stories + upcoming needs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className='text-lg text-muted-foreground mb-4'>
                    The key principle: make donors feel like insiders. They're
                    not funding transactions. They're joining a community of
                    people who care about your cause.
                  </p>

                  <div className='bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8 not-prose'>
                    <p className='font-semibold text-blue-900 dark:text-blue-100 mb-2'>
                      Real Numbers from an Animal Shelter
                    </p>
                    <p className='text-blue-800 dark:text-blue-200 text-sm'>
                      Before Instagram DM automation: 15 new donors per month,
                      $340 average first gift. After: 340+ new donors per month,
                      $520 average first gift, 180 monthly recurring donors.
                      That's not a 340% increase in donors—that's the difference
                      between survival and thriving.
                    </p>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Building Your Donor Communication Sequence
                  </h3>
                  <ul className='space-y-3 text-lg text-muted-foreground mb-6'>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>
                          New Donor Welcome Series (5 DMs over 30 days):
                        </strong>{' '}
                        Message 1 (immediate): Thank you + mission overview.
                        Message 2 (day 3): Introduce your flagship program.
                        Message 3 (day 7): Beneficiary spotlight story. Message
                        4 (day 14): Impact of donations like theirs. Message 5
                        (day 30): Invite to exclusive donor event or monthly
                        update.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>Monthly Impact Updates:</strong> Every recurring
                        donor gets a DM with new impact metrics + beneficiary
                        story + thank you video.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>Year-End Tax Receipt + Gratitude:</strong>{' '}
                        Auto-DM tax receipt 48 hours after December 31st.
                        Include personalized thank you based on their giving
                        level.
                      </span>
                    </li>
                    <li className='flex gap-3'>
                      <span className='text-primary font-semibold'>•</span>
                      <span>
                        <strong>Major Donor Grants:</strong> For donors giving
                        $500+ in a single gift, schedule a human-handoff DM
                        offering an exclusive call with your ED or program
                        director.
                      </span>
                    </li>
                  </ul>
                </section>

                <section id='volunteer-recruitment-automation'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Volunteer Recruitment Automation
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Volunteers are the lifeblood of nonprofits. But finding
                    them, vetting them, and onboarding them is time-intensive.
                    DM automation lets you recruit at scale.
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <Users className='h-5 w-5' />
                          Traditional Recruitment
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p className='text-muted-foreground'>
                          Post about volunteering on Feed
                        </p>
                        <p className='text-muted-foreground'>
                          Wait for DMs (low response rate)
                        </p>
                        <p className='text-muted-foreground'>
                          Manual intake form requests
                        </p>
                        <p className='text-muted-foreground'>
                          Weeks to onboard
                        </p>
                        <p className='font-semibold text-red-600'>
                          Low conversion
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <Users className='h-5 w-5 text-green-600' />
                          DM Automation Recruitment
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p className='text-muted-foreground'>
                          "Comment VOLUNTEER" CTA
                        </p>
                        <p className='text-muted-foreground'>
                          Auto-DM within 60 seconds
                        </p>
                        <p className='text-muted-foreground'>
                          Qualify by location + availability
                        </p>
                        <p className='text-muted-foreground'>
                          Auto-send application link
                        </p>
                        <p className='font-semibold text-green-600'>
                          3-4x higher conversion
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    The Volunteer Recruitment Workflow
                  </h3>
                  <p className='text-lg text-muted-foreground mb-4'>
                    Post: A video of volunteers making an impact. Caption:
                    "Comment VOLUNTEER if you're passionate about [cause] and
                    have 4+ hours a month to give."
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Auto-DM Flow:
                  </p>

                  <div className='bg-secondary/40 rounded-lg p-8 space-y-4 my-8 not-prose'>
                    <div className='space-y-2'>
                      <p className='font-semibold text-sm uppercase text-muted-foreground'>
                        Message 1 (immediate)
                      </p>
                      <p className='text-sm italic'>
                        "Hey! So grateful you're interested in [cause]. We need
                        passionate people exactly like you. What city are you
                        in?"
                      </p>
                    </div>
                    <div className='border-t pt-4 space-y-2'>
                      <p className='font-semibold text-sm uppercase text-muted-foreground'>
                        Message 2 (60 seconds later)
                      </p>
                      <p className='text-sm italic'>
                        "We have [3-5] specific roles in [their city]: [list
                        roles]. Check them out and apply here: [link].
                        Questions? Just reply!"
                      </p>
                    </div>
                    <div className='border-t pt-4 space-y-2'>
                      <p className='font-semibold text-sm uppercase text-muted-foreground'>
                        Message 3 (day 3, if no application)
                      </p>
                      <p className='text-sm italic'>
                        "Did those roles not fit? We have other opportunities.
                        Reply YES if you want to hear about remote options!"
                      </p>
                    </div>
                  </div>

                  <p className='text-lg text-muted-foreground'>
                    Result: Volunteers are pre-qualified by location before they
                    ever talk to a human. Your volunteer coordinator can focus
                    on interviews and onboarding, not cold outreach.
                  </p>
                </section>

                <section id='storytelling-that-drives-dm-action'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Storytelling That Drives DM Action
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Automation only works if your content is worth responding
                    to. Here's the storytelling formula that gets donors and
                    volunteers to hit reply.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Impact Stories with Specific Numbers
                  </h3>
                  <p className='text-lg text-muted-foreground mb-4'>
                    Don't say "Your donation helps families." Say "Your $25
                    today buys groceries that feed a family of 4 for a week.
                    That's 28 meals because of you."
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Specific numbers create urgency and make impact tangible.
                    They trigger the "I could actually make a difference"
                    emotion that converts to DMs.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Beneficiary Spotlights (With Permission)
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Share stories of people helped. Names, faces (if they
                    consent), transformation arcs. "Meet Sarah. 6 months ago she
                    was struggling with housing. Today, thanks to donors like
                    you, she just signed a lease on her first apartment." These
                    stories humanize your cause and make donors feel the weight
                    of their impact.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Volunteer Success Stories
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Show volunteers making an impact. "Our volunteer Marcus has
                    mentored 12 youth this year. Each one improved their grades
                    by an average of 2 letter grades. Comment VOLUNTEER to join
                    this movement."
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Crisis/Urgency Posts
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    "Winter is coming and 340 families in our community don't
                    have heat. $100 covers one family's fuel costs for a month.
                    Comment HELP to donate today." Urgency + specific impact =
                    high DM response.
                  </p>

                  <div className='bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8 not-prose'>
                    <p className='font-semibold text-amber-900 dark:text-amber-100 mb-2'>
                      Pro Tip: The One-Sentence DM Hook
                    </p>
                    <p className='text-amber-800 dark:text-amber-200 text-sm'>
                      Your Instagram caption is long. Your DM needs to hook them
                      instantly. First sentence of your auto-DM should
                      acknowledge their specific action ("I see you want to
                      donate!") and deliver immediate value ("Here are 3 impact
                      stories from the last month that will blow your mind").
                    </p>
                  </div>
                </section>

                <h2 className='text-3xl font-bold tracking-tight mb-6 mt-12'>
                  The Ethics of Automation for Nonprofits
                </h2>
                <p className='text-lg text-muted-foreground mb-6'>
                  Your nonprofit's reputation is everything. Automation only
                  works if it feels human and transparent.
                </p>
                <ul className='space-y-4 text-lg text-muted-foreground mb-8'>
                  <li className='flex gap-3'>
                    <span className='text-primary font-semibold'>•</span>
                    <span>
                      <strong>Disclose automation:</strong> It's okay to use AI
                      assistance. But be transparent. Something like: "Hey! This
                      is an automated response powered by PostEngage.ai. I'll
                      personally follow up within 2 hours."
                    </span>
                  </li>
                  <li className='flex gap-3'>
                    <span className='text-primary font-semibold'>•</span>
                    <span>
                      <strong>Human handoff for major conversations:</strong> If
                      someone's gift is $500+, or if they ask a complex
                      question, have a human follow up within 4 hours. The
                      automation is the first touch. You're the relationship.
                    </span>
                  </li>
                  <li className='flex gap-3'>
                    <span className='text-primary font-semibold'>•</span>
                    <span>
                      <strong>Respect privacy:</strong> Don't share donor
                      information. Don't use their data for anything beyond what
                      you promised.
                    </span>
                  </li>
                  <li className='flex gap-3'>
                    <span className='text-primary font-semibold'>•</span>
                    <span>
                      <strong>Make opt-out easy:</strong> Include an unsubscribe
                      option in your DM sequences. Respect their choice.
                    </span>
                  </li>
                </ul>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>
                      Ready to Scale Your Nonprofit's Instagram Impact?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Start automating donor acquisition and volunteer
                      recruitment today. Set up your first DM automation in less
                      than 30 minutes with PostEngage.ai. No coding. No
                      complicated setup. Just results.
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

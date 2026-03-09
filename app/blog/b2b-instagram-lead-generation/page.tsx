import Image from 'next/image';
import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Briefcase, TrendingUp, Users } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'B2B Instagram Lead Generation: How to Get Enterprise Clients from Your DMs',
  description:
    "Instagram isn't just for B2C. Discover the exact DM automation playbook B2B companies are using to book sales calls and generate six-figure pipeline.",
  openGraph: {
    title:
      'B2B Instagram Lead Generation: How to Get Enterprise Clients from Your DMs',
    description:
      "Instagram isn't just for B2C. Discover the exact DM automation playbook B2B companies are using to book sales calls and generate six-figure pipeline.",
    type: 'article',
    publishedTime: '2026-03-05',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 5, 2026';
  const readTime = '10 min read';

  const tableOfContents = [
    { id: 'why-b2b-instagram-works', title: 'Why B2B Instagram Works' },
    { id: 'b2b-dm-qualification-funnel', title: 'The DM Qualification Funnel' },
    {
      id: 'content-triggers-for-b2b',
      title: 'Content That Triggers DM Inquiries',
    },
    { id: 'measuring-b2b-instagram-roi', title: 'Measuring B2B Instagram ROI' },
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
                B2B Marketing
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
              B2B Instagram Lead Generation: How to Get Enterprise Clients from
              Your DMs
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              LinkedIn feels saturated. LinkedIn DMs feel invasive. But
              Instagram DMs? Decision-makers are opening them. Here's how B2B
              companies are generating six-figure sales pipelines directly from
              Instagram.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/b2b-lead-gen-cover.png'
              alt='B2B Instagram Lead Generation'
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
                    url='https://postengage.ai/blog/b2b-instagram-lead-generation'
                    title='B2B Instagram Lead Generation: How to Get Enterprise Clients from Your DMs'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <p className='text-lg leading-relaxed'>
                  LinkedIn is the default for B2B. Everyone knows this. LinkedIn
                  is where business professionals spend their time. LinkedIn is
                  where B2B conversations happen. LinkedIn is saturated,
                  expensive, and increasingly ineffective.
                </p>

                <p className='text-lg leading-relaxed'>
                  But there's a shadow network of B2B decision-makers on
                  Instagram that nobody's talking about. They're not there to
                  see vacation photos. They're there during business hours,
                  scrolling industry content, consuming thought leadership,
                  looking for problems and solutions.
                </p>

                <p className='text-lg leading-relaxed'>
                  And they open their Instagram DMs at a 88% rate. Compare that
                  to LinkedIn (67% open rate) or email (21% open rate).
                </p>

                <p className='text-lg leading-relaxed'>
                  This is the B2B Instagram opportunity most companies are
                  missing.
                </p>

                <section
                  id='why-b2b-instagram-works'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    Why B2B Instagram Works
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    Let's clear up a misconception first: Instagram isn't just
                    for B2C. It's not just for fashion brands, fitness coaches,
                    and lifestyle creators. B2B SaaS, professional services,
                    consulting, enterprise software—these all have thriving
                    communities on Instagram.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    The key difference is that LinkedIn is where B2B
                    professionals go to "do" professional things. They're in
                    professional mode. LinkedIn DMs feel transactional. They're
                    responding to sales outreach. They're being sold to.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    Instagram is where B2B professionals go to learn and stay
                    informed. They're consuming content, not being sold to. A DM
                    on Instagram doesn't feel like a cold outreach. It feels
                    like a conversation with someone whose work they respect.
                  </p>

                  <Card className='my-8 border-primary/20 bg-primary/5'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <TrendingUp className='h-5 w-5' />
                        Why B2B Decision-Makers Prefer Instagram Over LinkedIn
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div>
                        <h4 className='font-semibold text-sm mb-2'>
                          Less Transactional
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          LinkedIn is for professional networking. Instagram is
                          for learning. A DM from someone whose content you
                          respect feels like a peer conversation, not a sales
                          pitch.
                        </p>
                      </div>
                      <div>
                        <h4 className='font-semibold text-sm mb-2'>
                          Higher-Quality Signal
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          If someone follows your B2B Instagram account, they've
                          made a deliberate choice. LinkedIn followers sometimes
                          follow everything. Instagram followers are
                          self-selected.
                        </p>
                      </div>
                      <div>
                        <h4 className='font-semibold text-sm mb-2'>
                          Less Spam
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          LinkedIn inboxes are flooded with connection requests
                          and sales messages. Instagram DMs are cleaner. Your
                          message actually gets attention.
                        </p>
                      </div>
                      <div>
                        <h4 className='font-semibold text-sm mb-2'>
                          Personal Yet Professional
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          Instagram allows personality. You can be human and
                          professional. LinkedIn forces formal tone. That
                          authenticity converts better in B2B.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <p className='text-lg leading-relaxed'>
                    The metrics back this up. According to data from B2B
                    Instagram communities in 2026, DM inquiries from Instagram
                    convert to calls at 34% rate. LinkedIn DM inquiries convert
                    at 18% rate.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    The reason is simple: Instagram DMs mean intent. Someone saw
                    your content, followed your account, and then sent you a
                    message. That's high-intent behavior. You're not
                    cold-emailing. You're responding to inbound interest.
                  </p>
                </section>

                <section
                  id='b2b-dm-qualification-funnel'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    The B2B DM Qualification Funnel
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    Here's where automation becomes critical. B2B sales cycles
                    are long. A qualified lead might not be ready to talk to a
                    sales rep immediately. They need nurturing. They need their
                    questions answered. They need to feel understood.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    The B2B DM Qualification Funnel is a 3-question sequence
                    that helps you identify which DMs are actually qualified for
                    your sales team:
                  </p>

                  <Card className='my-8'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Briefcase className='h-5 w-5' />
                        The 3-Question Qualification Sequence
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-6'>
                      <div>
                        <div className='flex items-center gap-3 mb-3'>
                          <span className='font-bold text-sm bg-primary text-white px-2 py-1 rounded'>
                            Q1
                          </span>
                          <h4 className='font-semibold'>
                            What's your biggest challenge with [your solution
                            space]?
                          </h4>
                        </div>
                        <p className='text-sm text-muted-foreground ml-10'>
                          Purpose: Identify pain. Not everyone DMing you has the
                          problem you solve. This question filters for people
                          who actually experience the pain.
                        </p>
                        <p className='text-xs text-primary ml-10 mt-2'>
                          Automation: You send this as your first auto-response
                          when someone DMs you a trigger word like "STRATEGY" or
                          "HELP".
                        </p>
                      </div>

                      <div>
                        <div className='flex items-center gap-3 mb-3'>
                          <span className='font-bold text-sm bg-primary text-white px-2 py-1 rounded'>
                            Q2
                          </span>
                          <h4 className='font-semibold'>
                            What's your timeline for solving this?
                          </h4>
                        </div>
                        <p className='text-sm text-muted-foreground ml-10'>
                          Purpose: Identify urgency. Someone solving the problem
                          in Q4 is not the same as someone solving it next
                          month. This separates immediate pain from "someday"
                          pain.
                        </p>
                        <p className='text-xs text-primary ml-10 mt-2'>
                          Automation: They respond to Q1. You respond with Q2
                          plus a social proof message (client case study,
                          testimonial).
                        </p>
                      </div>

                      <div>
                        <div className='flex items-center gap-3 mb-3'>
                          <span className='font-bold text-sm bg-primary text-white px-2 py-1 rounded'>
                            Q3
                          </span>
                          <h4 className='font-semibold'>
                            Who else is involved in the decision?
                          </h4>
                        </div>
                        <p className='text-sm text-muted-foreground ml-10'>
                          Purpose: Identify decision-making authority. Are they
                          the decision-maker or a gatekeeper? Is this a
                          committee? Who else has influence?
                        </p>
                        <p className='text-xs text-primary ml-10 mt-2'>
                          Automation: They respond to Q2. You respond with Q3
                          plus your company overview or relevant resource.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <p className='text-lg leading-relaxed'>
                    After these three questions, you have the qualification data
                    you need. Someone who answers all three questions with
                    high-intent answers gets routed directly to your sales team
                    via calendar link. Everyone else gets added to a nurture
                    sequence.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    The beauty of automation here is scale. Instead of a sales
                    rep manually qualifying every DM, PostEngage.ai can send
                    these questions automatically and collect the responses.
                    Then only the truly qualified leads hit your sales team's
                    calendar.
                  </p>

                  <Card className='my-8 border-blue-200 bg-blue-50'>
                    <CardHeader>
                      <CardTitle>Why This Matters for B2B Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-blue-900'>
                        B2B sales reps are expensive. A $200k/year
                        quota-carrying rep has a loaded cost of about
                        $400k/year. Qualifying leads before they hit your sales
                        team saves massive amounts of money. Using DM automation
                        to pre-qualify means your reps only talk to hot leads.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section
                  id='content-triggers-for-b2b'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    Content That Triggers B2B DM Inquiries
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    Not all Instagram content triggers B2B DM inquiries. You
                    can't just post lifestyle content and expect enterprise
                    decision-makers to slide into your DMs. You need strategic
                    content.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    B2B Instagram content falls into a few high-performing
                    categories:
                  </p>

                  <div className='my-8 space-y-5'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base flex items-center gap-2'>
                          <span className='font-bold text-primary'>1</span>
                          Stat-Heavy Carousels
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm mb-3'>
                          5-slide posts with shocking statistics, trends, or
                          insights in your industry. "5 Stats Everyone Gets
                          Wrong About [Topic]" format performs well.
                        </p>
                        <p className='text-xs bg-muted p-2 rounded'>
                          Example: Marketing ops platform posts "5 Stats About
                          Marketing Automation." Slide 1: 73% of companies
                          underspend on automation. Slide 2: Average
                          implementation takes 4-6 months... Slide 5: Call to
                          action: "Comment STATS for our full benchmarking
                          report."
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base flex items-center gap-2'>
                          <span className='font-bold text-primary'>2</span>
                          Trend & Prediction Posts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm mb-3'>
                          "3 things I think will happen in [Industry] in 2026"
                          or "This trend is about to blow up in [your
                          vertical]." Forward-thinking content attracts
                          decision-makers.
                        </p>
                        <p className='text-xs bg-muted p-2 rounded'>
                          Example: CRM vendor posts "5 things enterprise sales
                          teams are doing differently in 2026." High engagement.
                          People DM asking "When did this change?" and "How do
                          we implement this?"
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base flex items-center gap-2'>
                          <span className='font-bold text-primary'>3</span>
                          Customer Results / Case Studies
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm mb-3'>
                          "How [Customer Company] achieved [Impressive Result]."
                          Real customer successes trigger DMs from similar
                          companies in the same situation.
                        </p>
                        <p className='text-xs bg-muted p-2 rounded'>
                          Example: "How Acme Corp reduced sales cycle from 6
                          months to 8 weeks." People DM asking about similar
                          results and if the solution works for their company.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base flex items-center gap-2'>
                          <span className='font-bold text-primary'>4</span>
                          Thought Leadership (Direct but Authentic)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm mb-3'>
                          Takes on industry trends. "Here's why everyone's
                          approaching [common solution] wrong..." or "[Vendor
                          approach] is overrated, here's what actually works."
                        </p>
                        <p className='text-xs bg-muted p-2 rounded'>
                          Example: "Why most AI implementations fail (and what
                          we learned after 200 deployments)." High credibility
                          signal. Attracts CIOs and VPs evaluating solutions.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-base flex items-center gap-2'>
                          <span className='font-bold text-primary'>5</span>
                          Behind-the-Scenes / Hiring / Culture
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm mb-3'>
                          How you build your company. Who you're hiring. Company
                          values. B2B decision-makers want to know who they'll
                          be working with.
                        </p>
                        <p className='text-xs bg-muted p-2 rounded'>
                          Example: "Here's how we hire engineers at [Company]."
                          or "This is what our company values actually look like
                          (not just words on a website)." Humanizes your B2B
                          brand.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p className='text-lg leading-relaxed'>
                    The common thread: all this content solves a problem or
                    answers a question that B2B decision-makers have. It's not
                    promotional. It's educational. Educational content attracts
                    people who are in research/evaluation mode—exactly where you
                    want them.
                  </p>
                </section>

                <section
                  id='measuring-b2b-instagram-roi'
                  className='scroll-mt-24 space-y-4'
                >
                  <h2 className='text-3xl font-bold tracking-tight'>
                    Measuring B2B Instagram ROI
                  </h2>
                  <p className='text-lg leading-relaxed'>
                    B2B Instagram is only worth it if it generates revenue.
                    Here's how to measure whether your Instagram DM funnel is
                    actually working, using{' '}
                    <Link
                      href='/blog/instagram-automation-kpis'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      the right KPIs
                    </Link>{' '}
                    to track:
                  </p>

                  <Card className='my-8'>
                    <CardHeader>
                      <CardTitle>
                        Key Metrics for B2B Instagram Lead Generation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div className='border-l-2 border-primary pl-4'>
                        <h4 className='font-bold text-sm mb-1'>
                          Qualified Lead Rate
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          Of all DMs, what percentage are actually qualified?
                          Track: DMs received → DMs qualified → % qualified.
                        </p>
                        <p className='text-xs text-primary mt-2'>
                          Benchmark: 18-24% is healthy for B2B.
                        </p>
                      </div>

                      <div className='border-l-2 border-primary pl-4'>
                        <h4 className='font-bold text-sm mb-1'>
                          DM to Meeting Conversion
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          Of qualified DMers, how many actually take a meeting
                          with your sales team?
                        </p>
                        <p className='text-xs text-primary mt-2'>
                          Benchmark: 34-42% for Instagram DMs (vs 18% for
                          LinkedIn).
                        </p>
                      </div>

                      <div className='border-l-2 border-primary pl-4'>
                        <h4 className='font-bold text-sm mb-1'>
                          Meeting to Opportunity
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          Of meetings taken, how many become tracked sales
                          opportunities?
                        </p>
                        <p className='text-xs text-primary mt-2'>
                          Benchmark: 52-68% for Instagram-sourced meetings.
                        </p>
                      </div>

                      <div className='border-l-2 border-primary pl-4'>
                        <h4 className='font-bold text-sm mb-1'>
                          Opportunity to Win
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          Of opportunities, how many close (in your sales cycle
                          timeline)?
                        </p>
                        <p className='text-xs text-primary mt-2'>
                          Benchmark: 23-31% for Instagram-sourced opps.
                        </p>
                      </div>

                      <div className='border-l-2 border-primary pl-4'>
                        <h4 className='font-bold text-sm mb-1'>
                          CAC (Customer Acquisition Cost)
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          Total cost to acquire a customer via Instagram divided
                          by customers acquired.
                        </p>
                        <p className='text-xs text-primary mt-2'>
                          Factor in: Your time, content creation, automation
                          platform, sales time spent.
                        </p>
                      </div>

                      <div className='border-l-2 border-primary pl-4'>
                        <h4 className='font-bold text-sm mb-1'>
                          Pipeline Generated
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          Total dollar value of opportunities sourced from
                          Instagram DMs.
                        </p>
                        <p className='text-xs text-primary mt-2'>
                          This is THE number that justifies continued
                          investment.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='my-8 border-green-200 bg-green-50'>
                    <CardHeader>
                      <CardTitle>
                        Real B2B Instagram Case Study: SaaS Company
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div>
                        <p className='text-sm font-semibold text-green-900 mb-2'>
                          The Setup
                        </p>
                        <p className='text-sm text-green-800'>
                          SaaS company selling mid-market sales automation
                          software. Monthly ACV: $8,000. Sales cycle: 90 days.
                        </p>
                      </div>
                      <div className='bg-white p-3 rounded-lg space-y-2'>
                        <div className='flex justify-between'>
                          <span className='text-sm'>Instagram followers</span>
                          <span className='font-bold text-sm'>18,400</span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-sm'>Avg monthly DMs</span>
                          <span className='font-bold text-sm'>340</span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-sm'>Qualified leads (24%)</span>
                          <span className='font-bold text-sm'>82</span>
                        </div>
                        <div className='flex justify-between border-t pt-2'>
                          <span className='text-sm'>Meetings booked (40%)</span>
                          <span className='font-bold text-sm'>33</span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-sm'>
                            Opportunities created (58%)
                          </span>
                          <span className='font-bold text-sm'>19</span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-sm'>Deals closed (28%)</span>
                          <span className='font-bold text-sm'>5</span>
                        </div>
                        <div className='flex justify-between font-bold text-green-700 border-t pt-2'>
                          <span className='text-sm'>
                            Monthly revenue generated
                          </span>
                          <span className='text-sm'>$40,000 (5 × $8k ACV)</span>
                        </div>
                        <div className='flex justify-between font-bold text-green-700'>
                          <span className='text-sm'>Annual pipeline</span>
                          <span className='text-sm'>$480,000</span>
                        </div>
                      </div>
                      <div>
                        <p className='text-xs text-green-700 mt-2'>
                          Cost: PostEngage.ai automation ($500/mo) + internal
                          time (est. 20 hrs/mo = $1,500). Total: $2,000/month
                          invested to generate $40k monthly revenue. 20:1 ROI.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <p className='text-lg leading-relaxed'>
                    The key insight: B2B Instagram isn't about viral reach. It's
                    about the right people in the right mindset. You might have
                    10x fewer followers than a comparable B2C Instagram account,
                    but the 340 DMs you receive are from actual decision-makers
                    actively evaluating solutions.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    That's worth more than a million generic followers from an
                    unqualified audience.
                  </p>
                </section>

                <div className='my-8 border-t pt-8'>
                  <p className='text-lg leading-relaxed mb-6'>
                    B2B Instagram is the untapped goldmine of 2026. LinkedIn is
                    saturated. Cold email is dead. But Instagram? B2B
                    decision-makers are there, consuming content, ready to talk
                    to companies they respect. If you're a{' '}
                    <Link
                      href='/blog/instagram-for-saas-startups'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      SaaS company on Instagram
                    </Link>
                    , DM automation lets you nurture and qualify them at scale.
                    Your competitors still think Instagram is only for B2C. You
                    can have the entire B2B DM opportunity to yourself.
                  </p>
                </div>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Users className='h-5 w-5' />
                      Generate Six-Figure B2B Pipeline from Instagram
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai's DM automation helps B2B companies qualify
                      and nurture Instagram-sourced leads on autopilot. Book
                      calls directly from Instagram. Track pipeline end-to-end.
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

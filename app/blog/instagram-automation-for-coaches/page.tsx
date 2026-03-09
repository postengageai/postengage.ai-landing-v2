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
  Shield,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Users,
  Lock,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Instagram Automation for Coaches and Therapists: Grow Your Practice Ethically',
  description:
    "Coaches and therapists have unique ethical obligations around client communication. Here's how to use Instagram DM automation to grow your practice without compromising integrity.",
  openGraph: {
    title:
      'Instagram Automation for Coaches and Therapists: Grow Your Practice Ethically',
    description:
      "Coaches and therapists have unique ethical obligations around client communication. Here's how to use Instagram DM automation to grow your practice without compromising integrity.",
    type: 'article',
    publishedTime: '2026-03-05',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 5, 2026';
  const readTime = '8 min read';

  const tableOfContents = [
    { id: 'the-ethical-framework', title: 'The Ethical Framework' },
    { id: 'automating-discovery-calls', title: 'Automating Discovery Calls' },
    {
      id: 'content-that-attracts-ideal-clients',
      title: 'Content That Attracts Ideal Clients',
    },
    {
      id: 'compliant-automation-practices',
      title: 'Compliant Automation Practices',
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
                Coaches & Therapists
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
              Instagram Automation for Coaches and Therapists: Grow Your
              Practice Ethically
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Your work is inherently personal. Automation should never
              compromise that trust. Here's how to automate the admin work and
              keep the human connection at the heart of your practice.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/coaches-automation-cover.png'
              alt='Instagram Automation For Coaches'
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
                    url='https://postengage.ai/blog/instagram-automation-for-coaches'
                    title='Instagram Automation for Coaches and Therapists: Grow Your Practice Ethically'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section>
                  <p className='text-lg text-muted-foreground mb-6'>
                    You became a coach or therapist because you care about
                    transformation. Your work is about building trust, listening
                    deeply, and creating a safe space for people to change. So
                    naturally, you're hesitant about automation. What if it
                    feels impersonal? What if someone needs a human and gets a
                    bot instead?
                  </p>
                  <p className='text-lg text-muted-foreground mb-8'>
                    Valid concerns. But here's the truth: you can use automation
                    to handle the administrative tasks so you have more time and
                    energy for the actual coaching/therapy work. The key is
                    knowing WHAT to automate and what to keep human. Follow our{' '}
                    <Link
                      href='/blog/getting-started-postengage-guide'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      getting started guide
                    </Link>{' '}
                    to implement{' '}
                    <Link
                      href='/blog/personal-brand-automation-guide'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      personal brand automation
                    </Link>{' '}
                    ethically, and{' '}
                    <Link
                      href='/blog/instagram-email-list-building'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      build your email list
                    </Link>{' '}
                    from Instagram.
                  </p>
                </section>

                <section id='the-ethical-framework'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    The Ethical Framework: What to Automate, What Not To
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    This is the foundation everything else builds on. Your
                    reputation is built on trust. Never compromise it for
                    convenience.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    What's Safe to Automate
                  </h3>

                  <div className='space-y-4 my-8 not-prose'>
                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-green-500/10 border-b p-4 flex items-start gap-3'>
                        <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Free Resource Delivery
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Auto-DM free resources when someone comments a
                          keyword.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded mb-3'>
                          "Comment WORKSHEET to get my free anxiety toolkit"
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Why it's okay: Delivering value. No clinical content
                          involved.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-green-500/10 border-b p-4 flex items-start gap-3'>
                        <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Discovery Call Bookings
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Auto-DM with your Calendly link when someone comments
                          a keyword.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded mb-3'>
                          "Comment CALL to schedule your free 20-minute
                          discovery session"
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Why it's okay: Scheduling is admin. The actual call is
                          where the human connection happens.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-green-500/10 border-b p-4 flex items-start gap-3'>
                        <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          FAQ Answers (General Info)
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Auto-DM answers to common questions about your
                          services, pricing, qualifications.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded mb-3'>
                          "Comment INFO for details on my coaching programs and
                          pricing"
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Why it's okay: Factual information. No therapeutic
                          interaction.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-green-500/10 border-b p-4 flex items-start gap-3'>
                        <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Intake Form Distribution
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Send intake forms automatically when someone books a
                          discovery call or requests an appointment.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Why it's okay: Collection of background information
                          before the actual therapeutic relationship begins.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-green-500/10 border-b p-4 flex items-start gap-3'>
                        <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Waitlist Management
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Auto-DM when a client opening becomes available.
                        </p>
                        <p className='text-sm font-mono bg-white dark:bg-black p-2 rounded mb-3'>
                          "We have a spot opening up for Thursday 6pm sessions.
                          Reply YES if interested"
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Why it's okay: Administrative notification. No
                          therapeutic content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    What to NEVER Automate
                  </h3>

                  <div className='space-y-4 my-8 not-prose'>
                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-red-500/10 border-b p-4 flex items-start gap-3'>
                        <AlertCircle className='h-5 w-5 text-red-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Crisis Disclosures
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          If a client mentions suicidal thoughts, self-harm, or
                          crisis in a DM, a bot should never respond.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Implement keyword monitoring: "suicide," "self-harm,"
                          "crisis" → IMMEDIATE HUMAN RESPONSE with crisis
                          resources.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-red-500/10 border-b p-4 flex items-start gap-3'>
                        <AlertCircle className='h-5 w-5 text-red-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Therapeutic Advice
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Never send therapeutic advice, coping strategies, or
                          clinical guidance through auto-DM.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          That's your 1-on-1 work. It's personalized. It's what
                          your clients pay for.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-red-500/10 border-b p-4 flex items-start gap-3'>
                        <AlertCircle className='h-5 w-5 text-red-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Ongoing Client Communication
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Once someone is actively in your program, they should
                          hear from YOU, not the bot.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Client-facing communication during a coaching/therapy
                          relationship needs to be human.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-red-500/10 border-b p-4 flex items-start gap-3'>
                        <AlertCircle className='h-5 w-5 text-red-600 flex-shrink-0 mt-0.5' />
                        <h3 className='font-semibold text-lg'>
                          Anything That Might Sound Clinical
                        </h3>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          If your auto-DM could be mistaken for therapeutic
                          advice, don't send it automatically.
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Your compliance team / licensing board should be able
                          to read your auto-DM and never wonder if you're
                          providing clinical guidance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-8 not-prose'>
                    <p className='font-semibold text-yellow-900 dark:text-yellow-100 flex items-start gap-2'>
                      <AlertCircle className='h-5 w-5 mt-0.5 flex-shrink-0' />
                      Check Your Licensing Board
                    </p>
                    <p className='text-yellow-800 dark:text-yellow-200 text-sm mt-2'>
                      Some states/provinces have specific rules about how
                      therapists and coaches can communicate with clients.
                      Before implementing automation, check your licensing
                      board's guidelines. What's okay in California might be
                      restricted in New York. Better to be safe.
                    </p>
                  </div>
                </section>

                <section id='automating-discovery-calls'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Automating Discovery Calls (The Money Maker)
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Discovery calls are your lifeblood. They're where you
                    convert interested people into paying clients. Automation
                    should make scheduling them frictionless.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    The Discovery Call Automation Sequence
                  </h3>

                  <div className='bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 not-prose'>
                    <div className='space-y-6'>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          1
                        </div>
                        <div>
                          <p className='font-semibold'>Post with CTA</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            "Comment CALL to schedule a free 20-minute discovery
                            session"
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          2
                        </div>
                        <div>
                          <p className='font-semibold'>
                            Auto-DM #1 (Immediate)
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            "Awesome! I help [target client] overcome [problem].
                            Let's chat about what's possible for you. [Calendly
                            link]"
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          3
                        </div>
                        <div>
                          <p className='font-semibold'>They Book Call</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Calendly sends automated confirmation email
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          4
                        </div>
                        <div>
                          <p className='font-semibold'>Auto-DM #2 (Next Day)</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            "Looking forward to our call! Here's what to expect:
                            [brief outline]. Any questions before then? Just
                            reply!"
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          5
                        </div>
                        <div>
                          <p className='font-semibold'>You Have the Call</p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            This is where YOU show up. This is where the magic
                            happens.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                          6
                        </div>
                        <div>
                          <p className='font-semibold'>
                            Auto-DM #3 (After Call)
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            "Thanks for the conversation! Here's the info we
                            discussed about getting started. Ready to transform?
                            Reply YES or [link to book]"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className='text-lg text-muted-foreground mb-6'>
                    Notice: The automation handles the friction (scheduling).
                    YOU handle the conversion (the actual call). This is the
                    right balance.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Sample Discovery Call DM Sequence
                  </h3>

                  <div className='space-y-4 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Message 1 (Immediate)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm space-y-2'>
                        <p>
                          Hey! Thanks for reaching out. I help therapists like
                          you overcome burnout so they can actually enjoy their
                          practice again.
                        </p>
                        <p>
                          I'd love to see if we're a good fit. Book a free
                          20-min call here [Calendly link]
                        </p>
                        <p>Looking forward to chatting!</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Message 2 (Day Before Call)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm space-y-2'>
                        <p>
                          Excited for our call tomorrow! Here's what we'll
                          cover:
                        </p>
                        <ul className='list-disc list-inside'>
                          <li>Your biggest challenge right now</li>
                          <li>What you've tried before</li>
                          <li>
                            A realistic roadmap to get you back to loving your
                            work
                          </li>
                        </ul>
                        <p>See you then!</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Message 3 (After Call)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm space-y-2'>
                        <p>
                          Thanks for the honest conversation today. Here are the
                          resources I mentioned + next steps if you want to move
                          forward: [link]
                        </p>
                        <p>Any questions, just reply!</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id='content-that-attracts-ideal-clients'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Content That Attracts Ideal Clients
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Your content on Instagram should demonstrate expertise,
                    build trust, and make people feel like "this therapist/coach
                    gets me."
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Content Pillars That Convert
                  </h3>

                  <div className='space-y-6 my-8 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <BookOpen className='h-5 w-5' />
                          Psychoeducation (40%)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p className='text-muted-foreground'>
                          Teach about mental health topics related to your
                          specialty. De-stigmatize the condition you treat.
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          "5 signs of burnout (and why you can't 'just relax')"
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          "What attachment styles actually mean (the real psych
                          behind the buzzword)"
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <Shield className='h-5 w-5' />
                          Myth-Busting (25%)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p className='text-muted-foreground'>
                          Challenge common misconceptions about
                          therapy/coaching/mental health. Show what's NOT true.
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          "Therapy isn't just about talking about your
                          childhood"
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          "You don't need to be 'broken' to benefit from
                          coaching"
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <Users className='h-5 w-5' />
                          Practitioner Humanization (20%)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p className='text-muted-foreground'>
                          Show YOUR personality, values, approach. Let people
                          know who they'd be working with.
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          Your own transformation story
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          What kind of coach/therapist you are (direct? gentle?
                          funny?)
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <Lock className='h-5 w-5' />
                          Soft CTAs (15%)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <p className='text-muted-foreground'>
                          Gently guide interested people toward discovery calls.
                          No hard selling.
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          "Does this resonate? Comment CALL if you want to
                          explore this further"
                        </p>
                        <p className='font-mono bg-secondary/40 p-2 rounded'>
                          "Questions about my coaching style? DM me or book a
                          free chat"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id='compliant-automation-practices'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    HIPAA & Compliance: What You Need to Know
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    If you work with Protected Health Information (PHI) or are
                    subject to HIPAA, there are specific rules about how DMs can
                    work.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Golden Rules
                  </h3>

                  <div className='space-y-4 not-prose'>
                    <div className='flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800'>
                      <CheckCircle className='h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold text-blue-900 dark:text-blue-100'>
                          Auto-DMs should be general/informational
                        </p>
                        <p className='text-sm text-blue-800 dark:text-blue-200'>
                          Never send PHI (patient health info) through Instagram
                          DM
                        </p>
                      </div>
                    </div>

                    <div className='flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800'>
                      <CheckCircle className='h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold text-blue-900 dark:text-blue-100'>
                          For HIPAA-covered entities
                        </p>
                        <p className='text-sm text-blue-800 dark:text-blue-200'>
                          Schedule appointments and share info via your
                          encrypted practice management system, not Instagram
                        </p>
                      </div>
                    </div>

                    <div className='flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800'>
                      <CheckCircle className='h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold text-blue-900 dark:text-blue-100'>
                          Intake forms and confidentiality
                        </p>
                        <p className='text-sm text-blue-800 dark:text-blue-200'>
                          Collect intake via encrypted form, not Instagram
                        </p>
                      </div>
                    </div>

                    <div className='flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800'>
                      <CheckCircle className='h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold text-blue-900 dark:text-blue-100'>
                          Disclose automation
                        </p>
                        <p className='text-sm text-blue-800 dark:text-blue-200'>
                          Let people know they're getting an automated response:
                          "This is an automated message powered by
                          PostEngage.ai. I'll personally follow up within
                          [timeframe]"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-8 not-prose'>
                    <p className='font-semibold text-green-900 dark:text-green-100 flex items-start gap-2'>
                      <CheckCircle className='h-5 w-5 mt-0.5 flex-shrink-0' />
                      Real Results: Therapy Practice Growth
                    </p>
                    <p className='text-green-800 dark:text-green-200 text-sm mt-2'>
                      Therapist in private practice, implemented ethical
                      automation: fully booked 6-week waiting list, 28 discovery
                      calls per month (up from 8), 18 new clients from Instagram
                      automation. Revenue grew 340% in 6 months. Key: No
                      automation was ever clinical. All admin. All boundaries
                      respected. All trust maintained.
                    </p>
                  </div>
                </section>

                <h2 className='text-3xl font-bold tracking-tight mb-6 mt-12'>
                  The Bottom Line: Automation Amplifies Your Work, Doesn't
                  Replace It
                </h2>
                <p className='text-lg text-muted-foreground mb-8'>
                  Use automation to handle the scheduling, FAQ answering, and
                  resource sharing. This frees you to do what only you can do:
                  build genuine relationships, provide skilled
                  therapeutic/coaching interventions, and change lives.
                </p>

                <p className='text-lg text-muted-foreground mb-8'>
                  The coaches and therapists who grow fastest aren't the ones
                  trying to automate everything. They're the ones who automate
                  the right things so they can show up more present, more
                  skilled, more human in the conversations that matter.
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>Ready to Automate Ethically?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Start automating your discovery call booking and FAQ
                      responses today. PostEngage lets you maintain full control
                      over what gets automated and what stays human.
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

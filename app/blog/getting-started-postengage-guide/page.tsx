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
  CheckCircle,
  Clock,
  Zap,
  BarChart3,
  AlertCircle,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Getting Started with PostEngage.ai: Your First Week Setup Guide',
  description:
    'New to PostEngage.ai? This step-by-step first-week guide will have you automating Instagram DMs and comments in under 30 minutes — no technical experience needed.',
  openGraph: {
    title: 'Getting Started with PostEngage.ai: Your First Week Setup Guide',
    description:
      'New to PostEngage.ai? This step-by-step first-week guide will have you automating Instagram DMs and comments in under 30 minutes — no technical experience needed.',
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 8, 2026';
  const readTime = '10 min read';

  const tableOfContents = [
    { id: 'day-1-account-setup', title: 'Day 1: Account Setup' },
    { id: 'day-2-voice-dna-training', title: 'Day 2: Voice DNA Training' },
    { id: 'day-3-first-automation', title: 'Day 3: Your First Automation' },
    { id: 'day-7-review-and-optimize', title: 'Day 7: Review & Optimize' },
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
                Tutorial
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
              Getting Started with PostEngage.ai: Your First Week Setup Guide
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              No technical experience? No problem. Follow this beginner-friendly
              guide and you'll be automating Instagram DMs and comments by Day
              3. Complete setup takes less than 30 minutes.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/getting-started-cover.png'
              alt='Getting Started Postengage Guide'
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
                    url='https://postengage.ai/blog/getting-started-postengage-guide'
                    title='Getting Started with PostEngage.ai: Your First Week Setup Guide'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section>
                  <p className='text-lg text-muted-foreground mb-6'>
                    You just signed up for PostEngage.ai. Awesome! Now what?
                    This guide walks you through your first week—one day at a
                    time. By day 7, you'll have your first automation live and
                    be seeing real conversations with your audience.
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-8 not-prose'>
                    <div className='flex flex-col items-center text-center p-4 bg-secondary/40 rounded-lg'>
                      <Clock className='h-8 w-8 mb-2 text-primary' />
                      <p className='font-semibold text-sm'>Day 1</p>
                      <p className='text-xs text-muted-foreground mt-1'>
                        15 mins
                      </p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4 bg-secondary/40 rounded-lg'>
                      <Zap className='h-8 w-8 mb-2 text-primary' />
                      <p className='font-semibold text-sm'>Day 2</p>
                      <p className='text-xs text-muted-foreground mt-1'>
                        24-72 hrs
                      </p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4 bg-secondary/40 rounded-lg'>
                      <CheckCircle className='h-8 w-8 mb-2 text-primary' />
                      <p className='font-semibold text-sm'>Day 3</p>
                      <p className='text-xs text-muted-foreground mt-1'>
                        10 mins
                      </p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4 bg-secondary/40 rounded-lg'>
                      <BarChart3 className='h-8 w-8 mb-2 text-primary' />
                      <p className='font-semibold text-sm'>Day 7</p>
                      <p className='text-xs text-muted-foreground mt-1'>
                        5 mins
                      </p>
                    </div>
                  </div>
                </section>

                <section id='day-1-account-setup'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Day 1: Account Setup (15 minutes)
                  </h2>
                  <p className='text-lg text-muted-foreground mb-8'>
                    First day goal: Get your Instagram account connected to
                    PostEngage.ai. This is the foundation everything else builds
                    on. After setup, you'll unlock features like{' '}
                    <Link
                      href='/blog/voice-dna-instagram-replies'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      Voice DNA
                    </Link>
                    ,{' '}
                    <Link
                      href='/blog/trigger-word-strategy-2026'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      50 proven trigger words
                    </Link>
                    , and the ability to{' '}
                    <Link
                      href='/blog/instagram-automation-kpis'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      track the right KPIs
                    </Link>
                    .
                  </p>

                  <div className='space-y-6 not-prose'>
                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            1
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Sign Up or Log In
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Go to postengage.ai and create your account.
                              You'll need an email address and a strong
                              password.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm font-mono bg-white dark:bg-black p-3 rounded border'>
                          Email: your.email@example.com
                        </p>
                        <p className='text-sm text-muted-foreground mt-3'>
                          Password: Use a mix of uppercase, lowercase, numbers,
                          and symbols
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            2
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Connect Your Instagram Account
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              After login, click "Connect Instagram" or navigate
                              to → Integrations.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          PostEngage will redirect you to Instagram/Meta's login
                          page. This is secure—all data is encrypted.
                        </p>
                        <div className='bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-3 rounded text-sm text-blue-900 dark:text-blue-100'>
                          <span className='font-semibold'>Note:</span> You must
                          have a Business or Creator Instagram account. Personal
                          accounts won't work with DM automation.
                        </div>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            3
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Verify Permissions
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              PostEngage needs permission to access DMs,
                              comments, and stories. You'll see a list of
                              permissions—review and confirm each.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                          <li className='flex gap-2'>
                            <CheckCircle className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                            <span>Read/Write Direct Messages</span>
                          </li>
                          <li className='flex gap-2'>
                            <CheckCircle className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                            <span>Read/Write Comments</span>
                          </li>
                          <li className='flex gap-2'>
                            <CheckCircle className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                            <span>Read Stories</span>
                          </li>
                          <li className='flex gap-2'>
                            <CheckCircle className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                            <span>Read Insights (analytics)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            4
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Configure Notification Preferences
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Go to → Notifications. Choose how you want to be
                              alerted about incoming DMs and comments.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Recommended settings for starters:
                        </p>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                          <li>Email alerts: ON (high-priority DMs only)</li>
                          <li>Daily digest: ON (summary at 9 AM)</li>
                          <li>In-app notifications: ON</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-8 not-prose'>
                    <p className='font-semibold text-green-900 dark:text-green-100 flex items-start gap-2'>
                      <CheckCircle className='h-5 w-5 mt-0.5 flex-shrink-0' />
                      Day 1 Complete!
                    </p>
                    <p className='text-green-800 dark:text-green-200 text-sm mt-2'>
                      Your Instagram account is now connected to PostEngage.
                      You're ready to train your Voice DNA tomorrow.
                    </p>
                  </div>
                </section>

                <section id='day-2-voice-dna-training'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Day 2: Voice DNA Training (24-72 hours)
                  </h2>
                  <p className='text-lg text-muted-foreground mb-8'>
                    Day 2 is about teaching PostEngage to sound like YOU. This
                    is what makes your automations feel personal, not robotic.
                  </p>

                  <div className='space-y-6 not-prose'>
                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            1
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Navigate to Voice DNA
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              In your PostEngage dashboard, click on the "Voice
                              DNA" tab in the left sidebar.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground'>
                          You'll see an overview of your current voice profile
                          and an "Analyze My Voice" button.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            2
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Click "Analyze My Voice"
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              PostEngage will scan your past Instagram DMs and
                              comments (the last 3-6 months). This takes 24-72
                              hours.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <div className='bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-3 rounded text-sm text-amber-900 dark:text-amber-100'>
                          <span className='font-semibold'>
                            Processing time:
                          </span>{' '}
                          The analysis uses AI to detect your communication
                          style, tone, emoji usage, and personality. You'll get
                          an email when it's complete.
                        </div>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            3
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Review Generated Samples
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Once analysis completes, you'll see 5 sample DM
                              replies that PostEngage generated in YOUR voice.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Read each sample carefully. Do they sound like you?
                          Here's what to look for:
                        </p>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                          <li className='flex gap-2'>
                            <span className='text-primary font-semibold'>
                              •
                            </span>
                            <span>
                              Tone: Matches your personality (professional,
                              casual, enthusiastic, etc.)
                            </span>
                          </li>
                          <li className='flex gap-2'>
                            <span className='text-primary font-semibold'>
                              •
                            </span>
                            <span>
                              Emoji use: Similar to your natural patterns
                            </span>
                          </li>
                          <li className='flex gap-2'>
                            <span className='text-primary font-semibold'>
                              •
                            </span>
                            <span>
                              Length: Feels like your typical DM length
                            </span>
                          </li>
                          <li className='flex gap-2'>
                            <span className='text-primary font-semibold'>
                              •
                            </span>
                            <span>
                              Authenticity: Doesn't feel over-the-top or out of
                              character
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            4
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Rate and Edit Each Sample
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              For each sample, rate it 1-5 stars. If a sample
                              feels "off," edit it directly.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Example edit:
                        </p>
                        <div className='bg-white dark:bg-black p-3 rounded border text-sm space-y-2'>
                          <p className='line-through text-muted-foreground'>
                            Original: "Hello! Thank you so much for reaching
                            out. I'm excited to help!"
                          </p>
                          <p>
                            Edited: "Hey! Thanks for the message. Love this
                            energy—how can I help?"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            5
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Save Your Voice DNA Baseline
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Click "Save Voice DNA" at the bottom. You've now
                              created your communication baseline.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground'>
                          From now on, all AI-generated responses will match
                          this baseline. You can update it anytime.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8 not-prose'>
                    <p className='font-semibold text-blue-900 dark:text-blue-100 flex items-start gap-2'>
                      <AlertCircle className='h-5 w-5 mt-0.5 flex-shrink-0' />
                      Pro Tip: Voice DNA Accuracy
                    </p>
                    <p className='text-blue-800 dark:text-blue-200 text-sm mt-2'>
                      The more past messages PostEngage analyzes, the more
                      accurate your Voice DNA will be. If you just started your
                      account, you might want to wait a week before doing this
                      step. The system works better with more data.
                    </p>
                  </div>
                </section>

                <section id='day-3-first-automation'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Day 3: Your First Automation (10 minutes)
                  </h2>
                  <p className='text-lg text-muted-foreground mb-8'>
                    Today, you create your first live automation. This is the
                    moment everything becomes real. Let's start simple.
                  </p>

                  <div className='space-y-6 not-prose'>
                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            1
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Go to Automations
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              In your dashboard, click "Automations" in the left
                              sidebar.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground'>
                          You'll see a list of any existing automations
                          (probably empty) and a "+ Create New" button.
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            2
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Click "Create New"
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              You'll be asked to choose a trigger type. For your
                              first automation, select "Comment Trigger."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Trigger types explained:
                        </p>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                          <li>
                            <span className='font-semibold'>
                              Comment Trigger:
                            </span>{' '}
                            Responds when someone comments a keyword
                          </li>
                          <li>
                            <span className='font-semibold'>Story Reply:</span>{' '}
                            Responds to replies on your Stories
                          </li>
                          <li>
                            <span className='font-semibold'>Keyword DM:</span>{' '}
                            Responds when someone DMs you a keyword
                          </li>
                          <li>
                            <span className='font-semibold'>Post Trigger:</span>{' '}
                            Sends a DM after someone likes/follows
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            3
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Set Your Keyword
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Start with something simple like "INFO." This will
                              be the word people comment to trigger your DM
                              response.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Guidelines for choosing keywords:
                        </p>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                          <li>Keep it SHORT (1-2 words max)</li>
                          <li>
                            Make it CLEAR (avoid slang or inside jokes
                            initially)
                          </li>
                          <li>
                            Make it RELEVANT (if you're selling a course, use
                            "COURSE" not "HELP")
                          </li>
                        </ul>
                        <p className='text-sm text-primary font-semibold mt-4'>
                          Example keywords: INFO, PROMO, GUIDE, BOOK, JOIN, CHAT
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            4
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Write Your First DM Response
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              This is the message people will receive when they
                              comment your keyword. Keep it short (under 3
                              sentences) and natural.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Example DM response:
                        </p>
                        <div className='bg-white dark:bg-black p-3 rounded border text-sm'>
                          <p>
                            "Hey! Thanks for commenting! 🙌 I've got exactly
                            what you're looking for. Sending details now."
                          </p>
                        </div>
                        <p className='text-sm text-muted-foreground mt-4'>
                          Tips for a great first message:
                        </p>
                        <ul className='space-y-2 text-sm text-muted-foreground mt-2'>
                          <li>
                            Acknowledge their comment ("Thanks for asking!")
                          </li>
                          <li>Be warm but brief</li>
                          <li>
                            Use 1 emoji max (or none if that's not your style)
                          </li>
                          <li>
                            End with a next step ("I'm sending you a link")
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            5
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Add a Follow-Up Message (Optional)
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              You can schedule a second message to send 30-60
                              minutes after the first one. This keeps the
                              conversation warm.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          Example follow-up (30 mins later):
                        </p>
                        <div className='bg-white dark:bg-black p-3 rounded border text-sm'>
                          <p>
                            "Did you check out the link? Let me know if you have
                            any questions!"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            6
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Activate Your Automation
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Click the "Activate" button. Your automation is
                              now LIVE.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground'>
                          You'll see a confirmation: "Automation active. Ready
                          to respond to [KEYWORD]."
                        </p>
                      </div>
                    </div>

                    <div className='border rounded-lg overflow-hidden'>
                      <div className='bg-primary/10 border-b p-4'>
                        <div className='flex items-start gap-4'>
                          <div className='flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
                            7
                          </div>
                          <div>
                            <h3 className='font-semibold text-lg'>
                              Test Your Automation
                            </h3>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Go to one of YOUR posts. Comment the keyword
                              (e.g., "INFO") from a test account or have a
                              friend comment it.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-6 bg-secondary/40'>
                        <p className='text-sm text-muted-foreground mb-3'>
                          What happens:
                        </p>
                        <ol className='space-y-2 text-sm text-muted-foreground list-decimal list-inside'>
                          <li>Comment appears on your post</li>
                          <li>Within 10-15 seconds, the commenter gets a DM</li>
                          <li>
                            30 minutes later, they get the follow-up message
                          </li>
                        </ol>
                        <p className='text-sm text-green-600 font-semibold mt-4'>
                          If it works, YOU JUST BUILT YOUR FIRST AUTOMATION!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-8 not-prose'>
                    <p className='font-semibold text-green-900 dark:text-green-100 flex items-start gap-2'>
                      <CheckCircle className='h-5 w-5 mt-0.5 flex-shrink-0' />
                      Day 3 Complete! Your First Automation is Live!
                    </p>
                    <p className='text-green-800 dark:text-green-200 text-sm mt-2'>
                      You've taken the biggest step. Everything from here is
                      optimization and expansion. Pat yourself on the back.
                    </p>
                  </div>
                </section>

                <section id='day-7-review-and-optimize'>
                  <h2 className='text-3xl font-bold tracking-tight mb-6'>
                    Day 7: Review & Optimize (5 minutes)
                  </h2>
                  <p className='text-lg text-muted-foreground mb-8'>
                    One week in. Time to see how your automation performed and
                    plan next steps.
                  </p>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4'>
                    Check Your Analytics Dashboard
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Go to Dashboard → Analytics. You'll see real-time metrics
                    for your automation.
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          Metrics to Watch
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <div>
                          <p className='font-semibold text-primary'>
                            DM Trigger Rate
                          </p>
                          <p className='text-muted-foreground'>
                            How many people commented your keyword. Target:
                            5-8%+ of post viewers.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            Response Rate
                          </p>
                          <p className='text-muted-foreground'>
                            How many DM recipients opened and replied. Target:
                            15-30%.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            Conversation Count
                          </p>
                          <p className='text-muted-foreground'>
                            Total active DM conversations. This is your sales
                            pipeline.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-sm'>
                          What These Numbers Mean
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3 text-sm'>
                        <div>
                          <p className='font-semibold text-primary'>
                            Low trigger rate?
                          </p>
                          <p className='text-muted-foreground'>
                            Your CTA might be unclear. Try a different keyword
                            or emphasize the benefit in your caption.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            Low response rate?
                          </p>
                          <p className='text-muted-foreground'>
                            Your DM message might not be compelling. Try being
                            more personal or adding urgency.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            High conversation count?
                          </p>
                          <p className='text-muted-foreground'>
                            Great! Now focus on converting conversations to
                            sales/signups/follows.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4 mt-8'>
                    A/B Test Your Message Copy
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Based on your day 7 analytics, try tweaking your DM
                    response. Small changes often lead to big improvements.
                  </p>

                  <div className='bg-secondary/40 rounded-lg p-6 not-prose'>
                    <p className='text-sm text-muted-foreground mb-4'>
                      <span className='font-semibold'>Example A/B test:</span>
                    </p>
                    <div className='space-y-4'>
                      <div>
                        <p className='text-sm font-semibold text-primary mb-2'>
                          Version A (current):
                        </p>
                        <p className='text-sm italic text-muted-foreground'>
                          "Hey! Thanks for asking. I've got what you need."
                        </p>
                      </div>
                      <div>
                        <p className='text-sm font-semibold text-primary mb-2'>
                          Version B (more specific):
                        </p>
                        <p className='text-sm italic text-muted-foreground'>
                          "Hey! So glad you're interested. I'm sending you my
                          top 3 resources plus a video walkthrough."
                        </p>
                      </div>
                    </div>
                    <p className='text-xs text-muted-foreground mt-4'>
                      Run Version B for 3 days. Compare response rates. If B
                      wins, make it your new default.
                    </p>
                  </div>

                  <h3 className='text-2xl font-semibold tracking-tight mb-4 mt-8'>
                    Expand to More Automations
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    You've proven the concept works. Now add 2-3 more
                    automations targeting different audiences or CTAs.
                  </p>

                  <div className='space-y-3 not-prose'>
                    <div className='flex gap-3 p-4 rounded-lg bg-secondary/40'>
                      <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold'>Automation #2:</p>
                        <p className='text-sm text-muted-foreground'>
                          Different keyword + different audience (e.g., if #1
                          was for leads, make #2 for testimonials)
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-3 p-4 rounded-lg bg-secondary/40'>
                      <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='font-semibold'>Automation #3:</p>
                        <p className='text-sm text-muted-foreground'>
                          Story reply automation or a different post type (Reel
                          vs. carousel)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8 not-prose'>
                    <p className='font-semibold mb-4'>Pro Tips for Week 2+</p>
                    <ul className='space-y-3 text-sm text-muted-foreground'>
                      <li className='flex gap-3'>
                        <span className='font-semibold text-primary'>•</span>
                        <span>
                          <strong>Don't over-automate.</strong> Start with 1-2
                          automations. Master them before adding more.
                        </span>
                      </li>
                      <li className='flex gap-3'>
                        <span className='font-semibold text-primary'>•</span>
                        <span>
                          <strong>Review weekly.</strong> Check analytics every
                          7 days. Adjust based on what's working.
                        </span>
                      </li>
                      <li className='flex gap-3'>
                        <span className='font-semibold text-primary'>•</span>
                        <span>
                          <strong>Stay personal.</strong> Use automation to
                          scale efficiency, not to replace your personality.
                          Read and reply to key conversations yourself.
                        </span>
                      </li>
                      <li className='flex gap-3'>
                        <span className='font-semibold text-primary'>•</span>
                        <span>
                          <strong>Monitor sentiment.</strong> Occasionally
                          review automated responses to make sure they still
                          feel authentic to you.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <h2 className='text-3xl font-bold tracking-tight mb-6 mt-12'>
                  Your First Week: Summary
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 not-prose'>
                  <Card>
                    <CardHeader>
                      <CardTitle>What You Built</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2 text-sm'>
                      <p>✓ Connected Instagram account</p>
                      <p>✓ Trained Voice DNA</p>
                      <p>✓ Created first automation</p>
                      <p>✓ Ran A/B test</p>
                      <p>✓ Reviewed analytics</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>What You Learned</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2 text-sm'>
                      <p>✓ How automations trigger</p>
                      <p>✓ How to measure success</p>
                      <p>✓ Where bottlenecks are</p>
                      <p>✓ How to improve over time</p>
                      <p>✓ You're not alone (support is here!)</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>Ready to Take Week 2?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      You've built the foundation. Week 2 is about scaling: more
                      automations, targeting new audiences, optimizing for
                      conversions. You've got this.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/signup'>Explore Advanced Features</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>Speak to Our Team</Link>
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

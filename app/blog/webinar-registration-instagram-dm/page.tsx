import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import {
  ArrowLeft,
  Calendar,
  Users,
  MessageCircle,
  BarChart,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';

export const metadata: Metadata = {
  title: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
  description:
    'Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.',
  openGraph: {
    title: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
    description:
      'Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.',
    url: 'https://postengage.ai/blog/webinar-registration-instagram-dm',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-16T00:00:00.000Z',
    authors: ['PostEngage Team'],
    images: [
      {
        url: 'https://postengage.ai/blog/webinar-automation-cover.png',
        width: 1200,
        height: 630,
        alt: 'Webinar Automation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
    description:
      'Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.',
    images: ['https://postengage.ai/blog/webinar-automation-cover.png'],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
    image: 'https://postengage.ai/blog/webinar-automation-cover.png',
    datePublished: '2026-03-16T00:00:00.000Z',
    dateModified: '2026-03-16T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'PostEngage Team',
      url: 'https://postengage.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PostEngage.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://postengage.ai/logo.png',
      },
    },
    description:
      'Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.',
  };

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='pt-32 pb-20'>
        <article className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          {/* Breadcrumb & Navigation */}
          <div className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
            <Link
              href='/blog'
              className='hover:text-primary transition-colors flex items-center gap-1'
            >
              <ArrowLeft className='w-4 h-4' />
              Back to Blog
            </Link>
            <span>/</span>
            <span className='text-foreground font-medium'>
              Webinar Automation
            </span>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content */}
            <div className='lg:col-span-8'>
              {/* Header */}
              <header className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <Badge variant='secondary' className='rounded-full px-4 py-1'>
                    Events
                  </Badge>
                  <span className='text-sm text-muted-foreground'>
                    Mar 16, 2026 • 6 min read
                  </span>
                </div>
                <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
                  Webinar Automation: How to Fill Seats Using Instagram DMs
                </h1>
                <p className='text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-6 italic'>
                  The old way: "Link in Bio" &gt; Landing Page &gt; Form &gt; Email Confirmation. <br />
                  The new way: Comment "WEBINAR" &gt; DM Registration &gt; Calendar Invite.
                </p>
              </header>

              {/* Featured Image Placeholder */}
              <div className='mb-12 rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-muted/30 aspect-video flex items-center justify-center relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <span className='text-muted-foreground/20 font-medium flex flex-col items-center gap-4'>
                  <Calendar className='w-16 h-16' />
                  Featured Image: Webinar Funnel Diagram
                </span>
              </div>

              {/* Content */}
              <div className='prose prose-lg prose-slate dark:prose-invert max-w-none'>
                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    1
                  </span>
                  Why Landing Pages Are Failing
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  For years, the standard webinar funnel has been: Drive traffic to a landing page, ask for an email, and hope they show up. But in 2026, friction is the enemy. Every click, every form field, and every page load drops your conversion rate by 50%.
                </p>
                <p className='leading-relaxed text-muted-foreground mt-4'>
                  Instagram DM Automation removes the friction. By allowing users to register directly within the chat interface, you keep them on the platform they are already enjoying, resulting in significantly higher opt-in rates.
                </p>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    2
                  </span>
                  The "Comment to Register" Workflow
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  Here is the exact workflow our top users are running:
                </p>
                <ul className='space-y-4 my-8'>
                  <li className='flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50'>
                    <div className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold'>
                      1
                    </div>
                    <div>
                      <strong className='block text-foreground mb-1'>Trigger</strong>
                      You post a Reel or Story saying "Comment WEBINAR below to get your free ticket."
                    </div>
                  </li>
                  <li className='flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50'>
                    <div className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold'>
                      2
                    </div>
                    <div>
                      <strong className='block text-foreground mb-1'>Capture</strong>
                      PostEngage.ai instantly sends a DM: "Hey! Excited to see you at the webinar. Tap below to confirm your spot."
                    </div>
                  </li>
                  <li className='flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50'>
                    <div className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold'>
                      3
                    </div>
                    <div>
                      <strong className='block text-foreground mb-1'>Confirmation</strong>
                      The user taps "Register". We automatically capture their public email (or ask for it) and send it to your webinar platform (Zoom, WebinarJam, etc.) via webhook.
                    </div>
                  </li>
                </ul>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    3
                  </span>
                  Automated Reminders = Higher Show-Up Rates
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  Email reminders often go to the "Promotions" tab. DM reminders get seen instantly. With PostEngage.ai, you can schedule automated follow-ups:
                </p>
                <div className='grid sm:grid-cols-2 gap-6 my-8'>
                  <Card className='bg-background/50 backdrop-blur'>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-3 mb-4 text-primary'>
                        <MessageCircle className='w-6 h-6' />
                        <h3 className='font-bold'>24 Hours Before</h3>
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        "Hey [Name], just a reminder that the masterclass is tomorrow at 2 PM EST! Can't wait."
                      </p>
                    </CardContent>
                  </Card>
                  <Card className='bg-background/50 backdrop-blur'>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-3 mb-4 text-primary'>
                        <Users className='w-6 h-6' />
                        <h3 className='font-bold'>15 Minutes Before</h3>
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        "We are starting in 15 mins! Here is your direct link to join: [Link]"
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    4
                  </span>
                  Post-Webinar Follow-Up
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  The sale happens after the webinar. Use automation to segment attendees vs. non-attendees. Send the replay link to those who missed it, and a special offer link to those who stayed until the end.
                </p>

                <div className='my-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 text-center'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Ready to fill your next webinar?
                  </h3>
                  <p className='text-muted-foreground mb-8 max-w-lg mx-auto'>
                    Start using PostEngage.ai today to automate your event registration and double your show-up rates.
                  </p>
                  <Button size='lg' className='rounded-full px-8 h-12 text-base'>
                    Start Free Trial <BarChart className='ml-2 w-4 h-4' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className='lg:col-span-4 space-y-8'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      title: 'Why Landing Pages Are Failing',
                      id: 'why-landing-pages-are-failing',
                    },
                    {
                      title: 'The "Comment to Register" Workflow',
                      id: 'the-comment-to-register-workflow',
                    },
                    {
                      title: 'Automated Reminders',
                      id: 'automated-reminders-higher-show-up-rates',
                    },
                    {
                      title: 'Post-Webinar Follow-Up',
                      id: 'post-webinar-follow-up',
                    },
                  ]}
                />
                <SocialShareButtons
                  url='https://postengage.ai/blog/webinar-registration-instagram-dm'
                  title='Webinar Automation: How to Fill Seats Using Instagram DMs'
                />
              </div>
            </aside>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}

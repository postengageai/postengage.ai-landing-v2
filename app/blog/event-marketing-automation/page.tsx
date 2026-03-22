import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: 'Automating Event RSVPs: From Story Reply to Calendar Invite',
  description:
    'Hosting a webinar, workshop, or live event? Learn how to fill your seats using Instagram Stories and DM automation.',
  openGraph: {
    title: 'Automating Event RSVPs: From Story Reply to Calendar Invite',
    description:
      'Hosting a webinar, workshop, or live event? Learn how to fill your seats using Instagram Stories and DM automation.',
    url: 'https://postengage.ai/blog/event-marketing-automation',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-19T09:00:00.000Z',
    authors: ['PostEngageAI Team'],
    images: [
      {
        url: '/blog/event-marketing-cover.png',
        width: 1200,
        height: 630,
        alt: 'Event Marketing Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automating Event RSVPs: From Story Reply to Calendar Invite',
    description:
      'Fill your event seats automatically using Instagram DM automation.',
    images: ['/blog/event-marketing-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Automating Event RSVPs: From Story Reply to Calendar Invite',
    image: ['/blog/event-marketing-cover.png'],
    datePublished: '2026-03-19T09:00:00.000Z',
    dateModified: '2026-03-19T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'PostEngageAI Team',
        url: 'https://postengage.ai/about',
      },
    ],
  };

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20'>
      <ArticleJsonLd
        title='Automating Event RSVPs: From Story Reply to Calendar Invite'
        description='Hosting a webinar, workshop, or live event? Learn how to fill your seats using Instagram Stories and DM automation.'
        slug='event-marketing-automation'
        datePublished='2026-03-19T09:00:00.000Z'
        category='Event Marketing'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='flex-1 pt-32 pb-24'>
        <BlogJsonLd
          title='Automating Event RSVPs: From Story Reply to Calendar Invite'
          description='Hosting a webinar, workshop, or live event? Learn how to fill your seats using Instagram Stories and DM automation.'
          slug='event-marketing-automation'
          date='2026-03-19T09:00:00.000Z'
          category='Event Marketing'
        />
        <article className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          {/* Navigation & Breadcrumb */}
          <div className='mb-12 flex items-center justify-between'>
            <Link
              href='/blog'
              className='group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
              Back to Blog
            </Link>
            <SocialShareButtons
              title='Automating Event RSVPs: From Story Reply to Calendar Invite'
              url='https://postengage.ai/blog/event-marketing-automation'
            />
          </div>

          {/* Header Section */}
          <header className='mx-auto mb-12 max-w-4xl text-center'>
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
              <Badge
                variant='default'
                className='bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none'
              >
                Event Marketing
              </Badge>
              <Badge
                variant='outline'
                className='border-primary/20 text-muted-foreground'
              >
                4 min read
              </Badge>
              <span className='text-sm text-muted-foreground'>
                Updated Mar 19, 2026
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
              Automating Event RSVPs: From Story Reply to Calendar Invite
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Nobody wants to click "Link in Bio" to register. Remove the
              friction and watch your attendance skyrocket.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/5'>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-background/60 border border-border/40 shadow-inner'>
                <Sparkles className='h-8 w-8 text-primary/70' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
                <div className='h-1.5 w-12 rounded-full bg-primary/20' />
                <div className='h-1.5 w-1.5 rounded-full bg-primary/40' />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            {/* Sidebar - Table of Contents */}
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      id: 'friction-kills-events',
                      title: 'Friction Kills Events',
                    },
                    {
                      id: 'the-story-reply-method',
                      title: 'The Story Reply Method',
                    },
                    {
                      id: 'calendar-sync',
                      title: 'Calendar Sync',
                    },
                  ]}
                />
                <Card className='bg-primary/5 border-primary/10 shadow-none'>
                  <CardHeader>
                    <CardTitle className='text-sm font-medium text-primary'>
                      Hosting a Webinar?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-xs text-muted-foreground'>
                      Get 500+ signups with zero ad spend.
                    </p>
                    <Button className='w-full text-xs' size='sm' asChild>
                      <Link href='/dashboard'>Start Campaign</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className='lg:col-span-9'>
              <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
                <p className='lead text-xl text-muted-foreground mb-8'>
                  Getting people to your registration page is hard. Getting them
                  to actually fill out the form is harder. Why not do both
                  inside Instagram?
                </p>

                <h2
                  id='friction-kills-events'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Friction Kills Events
                </h2>
                <p>Every click costs you 50% of your traffic.</p>
                <div className='flex items-center justify-center space-x-4 my-8 not-prose text-sm text-muted-foreground'>
                  <span>Link in Bio</span>
                  <span>&gt;</span>
                  <span>Wait for Landing Page Load</span>
                  <span>&gt;</span>
                  <span>Fill Name</span>
                  <span>&gt;</span>
                  <span>Fill Email</span>
                  <span>&gt;</span>
                  <span>Submit</span>
                </div>
                <p>That's 5 steps. PostEngage reduces it to 1 step.</p>

                <h2
                  id='the-story-reply-method'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  The Story Reply Method
                </h2>
                <p>
                  Post a story about your event. Add a sticker: "Reply with
                  'TICKET' to get your seat."
                </p>
                <p>When they reply, PostEngage:</p>
                <ol className='list-decimal pl-5 space-y-4'>
                  <li>
                    DM: "Hey! Excited you want to join. What is your email?"
                  </li>
                  <li>User: "john@example.com"</li>
                  <li>
                    PostEngage: *Validates Email* &gt; *Sends to
                    Zoom/WebinarJam*
                  </li>
                  <li>DM: "You are in! Check your inbox for the link."</li>
                </ol>

                <h2
                  id='calendar-sync'
                  className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
                >
                  Calendar Sync
                </h2>
                <p>
                  The final piece is the calendar invite. PostEngage can send an
                  .ics file directly in the DM. One tap, and it is on their
                  Google/Apple Calendar.
                </p>
                <p>
                  Attendance rates jump from 30% to 70% with this one trick.
                </p>
              </div>

              {/* Author Bio */}
              <div className='mt-16 border-t pt-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/logo.jpeg' alt='PostEngage.ai Team' />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Event Marketing
                    </div>
                  </div>
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

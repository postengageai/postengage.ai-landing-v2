import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  UserPlus,
  MessageCircle,
  Clock,
  Zap,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title:
    "The 'Silent' Lead Magnet: How Follow-to-DM Automation is Changing the Game",
  description:
    'Turn new followers into leads instantly. Learn how to legally and effectively use the "Follow to DM" trigger to grow your email list.',
  openGraph: {
    title:
      "The 'Silent' Lead Magnet: How Follow-to-DM Automation is Changing the Game",
    description:
      'Turn new followers into leads instantly. Learn how to legally and effectively use the "Follow to DM" trigger to grow your email list.',
    type: 'article',
    url: 'https://postengage.ai/blog/instagram-follow-to-dm-guide',
    images: [
      {
        url: '/blog/follow-to-dm-cover.png',
        width: 1200,
        height: 630,
        alt: 'Follow to DM Automation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "The 'Silent' Lead Magnet: How Follow-to-DM Automation is Changing the Game",
    description:
      'Turn new followers into leads instantly. Learn how to legally and effectively use the "Follow to DM" trigger to grow your email list.',
    images: ['/blog/follow-to-dm-cover.png'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'what-is-follow-to-dm', title: 'What is Follow-to-DM?' },
    { id: 'is-it-compliant', title: 'Is it Compliant? (The 24h Rule)' },
    { id: 'strategy-welcome-gift', title: 'Strategy 1: The Welcome Gift' },
    { id: 'strategy-segmentation', title: 'Strategy 2: Instant Segmentation' },
    { id: 'how-to-set-up', title: 'How to Set It Up' },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <ArticleJsonLd
        title='The'
        description='Turn new followers into leads instantly. Learn how to legally and effectively use the'
        slug='instagram-follow-to-dm-guide'
        datePublished='2026-03-01'
        category='Growth Hacks'
      />

      <LandingHeader />

      <main className='relative pt-32 pb-24'>
        <BlogJsonLd
          title='The'
          description='Turn new followers into leads instantly. Learn how to legally and effectively use the'
          slug='instagram-follow-to-dm-guide'
          date='2026-03-26'
          category='Growth Hacks'
          readingTime='5 min read'
        />
        {/* Background Elements */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-60' />
        </div>

        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Sidebar (TOC) */}
            <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-32 lg:self-start space-y-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                <Link
                  href='/blog'
                  className='hover:text-primary transition-colors'
                >
                  Blog
                </Link>
                <span>/</span>
                <span className='text-foreground font-medium'>
                  Growth Hacks
                </span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main Content */}
            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge
                  variant='secondary'
                  className='mb-6 text-sm font-medium px-3 py-1'
                >
                  Growth Hacks
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  The 'Silent' Lead Magnet: How Follow-to-DM Automation is
                  Changing the Game
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <UserPlus className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>
                        PostEngageAI Team
                      </p>
                      <p className='text-xs'>Automation Experts</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Calendar className='h-4 w-4' />
                    <span>March 27, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>5 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
                  <div className='text-center p-8'>
                    <Zap className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>
                      Follow-to-DM Strategy
                    </p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                Imagine if every person who walked into your store got a
                personal greeting and a 10% coupon instantly. That's what
                Follow-to-DM automation does for your Instagram profile.
                <br />
                <br />
                It turns a passive "Follow" into an active conversation,
                drastically increasing the chance of conversion in the first 5
                minutes.
              </div>

              <h2
                id='what-is-follow-to-dm'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                What is Follow-to-DM?
              </h2>
              <p>
                Follow-to-DM is an automation trigger that fires the moment
                someone hits the "Follow" button on your profile.
              </p>
              <p>
                Instead of waiting for them to comment or click a link, you
                proactively start the conversation.
              </p>
              <ul className='space-y-2 my-6'>
                {[
                  'Instant Welcome Message',
                  'Delivery of Lead Magnet (PDF/Guide)',
                  'Question to Segment Audience',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary shrink-0 mt-1' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2
                id='is-it-compliant'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Is it Compliant? (The 24h Rule)
              </h2>
              <p>
                Yes, but with caveats. Meta has strict rules about spam. You
                cannot just blast every new follower with a sales pitch.
              </p>
              <p>
                <strong>The Golden Rule:</strong> Keep it short, valuable, and
                non-intrusive.
              </p>
              <p>
                Use it to <em>deliver value</em>, not to{' '}
                <em>demand attention</em>. If they don't reply, do not send a
                follow-up. The 24-hour window only opens if they reply to your
                initial message or if the trigger is considered a user action
                (which Following is, but it's a "soft" action).
              </p>

              <h2
                id='strategy-welcome-gift'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Strategy 1: The Welcome Gift
              </h2>
              <p>
                This is the highest converting strategy for e-commerce and
                coaches.
              </p>
              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-4 flex items-center gap-2'>
                  <MessageCircle className='h-5 w-5 text-primary' />
                  The Script
                </h4>
                <p className='italic text-muted-foreground'>
                  "Hey [First Name]! 👋 Thanks for following. I saw you're
                  interested in [Niche]. <br />
                  <br />
                  To help you get started, here is my free [Guide/Checklist] on
                  [Topic]. <br />
                  <br />
                  [Button: Download Now]"
                </p>
              </div>
              <p>
                This immediately establishes you as an authority and gives them
                a reason to stay.
              </p>

              <h2
                id='strategy-segmentation'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Strategy 2: Instant Segmentation
              </h2>
              <p>
                For service providers, use this to find out <em>who</em> just
                followed you.
              </p>
              <p>
                <strong>Bot:</strong> "Thanks for the follow! Quick question -
                are you looking to [Goal A] or [Goal B]?"
              </p>
              <p>
                <strong>User taps [Goal A].</strong>
              </p>
              <p>
                <strong>Bot:</strong> "Awesome! Here is a case study on how we
                helped someone achieve [Goal A]."
              </p>

              <h2
                id='how-to-set-up'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                How to Set It Up
              </h2>
              <p>With PostEngageAI, it takes 3 clicks:</p>
              <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
                <li>
                  Go to <strong>Automations</strong> &gt;{' '}
                  <strong>New Trigger</strong>.
                </li>
                <li>
                  Select <strong>"User Follows Account"</strong>.
                </li>
                <li>Write your Welcome Message.</li>
                <li>Activate!</li>
              </ol>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>
                  Start Converting Followers Today
                </h3>
                <p className='mb-6'>
                  Don't let your new followers be strangers. Turn them into
                  leads instantly with PostEngageAI.
                </p>
                <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                  Set Up Follow Automation{' '}
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </div>
            </article>

            {/* Social Share Sidebar */}
            <aside className='hidden lg:block lg:col-span-2 lg:sticky lg:top-32 lg:self-start'>
              <div className='flex flex-col gap-4 items-center'>
                <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2'>
                  Share
                </p>
                <SocialShareButtons
                  url='https://postengage.ai/blog/instagram-follow-to-dm-guide'
                  title="The 'Silent' Lead Magnet: How Follow-to-DM Automation is Changing the Game"
                />
              </div>
            </aside>
          </div>
        </div>
        <NewsletterForm />
      </main>

      <LandingFooter />
    </div>
  );
}

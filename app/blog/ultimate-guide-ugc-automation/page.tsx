import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  Camera,
  Clock,
  Heart,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to UGC Automation: Turn Customers into Advocates',
  description:
    'User Generated Content (UGC) is the most powerful social proof. Learn how to automate rewards for Story mentions, post tags, and viral sharing.',
  openGraph: {
    title:
      'The Ultimate Guide to UGC Automation: Turn Customers into Advocates',
    description:
      'User Generated Content (UGC) is the most powerful social proof. Learn how to automate rewards for Story mentions, post tags, and viral sharing.',
    type: 'article',
    url: 'https://postengage.ai/blog/ultimate-guide-ugc-automation',
    images: [
      {
        url: '/blog/ugc-automation-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'UGC Automation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Ultimate Guide to UGC Automation: Turn Customers into Advocates',
    description:
      'User Generated Content (UGC) is the most powerful social proof. Learn how to automate rewards for Story mentions, post tags, and viral sharing.',
    images: ['/blog/ugc-automation-guide.jpg'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'why-ugc-matters', title: 'Why UGC is King' },
    { id: 'story-mention-automation', title: 'Automating Story Mentions' },
    { id: 'post-comment-rewards', title: 'Post Comment Rewards' },
    { id: 'viral-giveaways', title: 'Viral "Share to Win" Contests' },
    { id: 'tracking-roi', title: 'Tracking UGC ROI' },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <LandingHeader />

      <main className='relative pt-32 pb-24'>
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
                  UGC Strategy
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
                  UGC Strategy
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  The Ultimate Guide to UGC Automation: Turn Customers into
                  Advocates
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Camera className='h-5 w-5 text-primary' />
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
                    <span>October 24, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>8 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
                  <div className='text-center p-8'>
                    <Users className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>
                      UGC Automation Strategy
                    </p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                User Generated Content (UGC) is the holy grail of marketing.
                It's authentic, it's trusted, and it's free. But tracking every
                story mention and rewarding every loyal customer is a logistical
                nightmare.
                <br />
                <br />
                Until now. Discover how to automate the entire UGC loop—from
                "Thanks for sharing!" to delivering rewards—instantly in the
                DMs.
              </div>

              <h2
                id='why-ugc-matters'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Why UGC is King
              </h2>
              <p>
                People trust people, not brands. When a customer posts a photo
                of your product, their followers pay attention.
              </p>
              <ul className='space-y-2 my-6'>
                {[
                  '92% of consumers trust recommendations from people they know.',
                  'UGC results in 29% higher web conversions than campaigns without it.',
                  'It builds a community, not just a customer base.',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary shrink-0 mt-1' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2
                id='story-mention-automation'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Automating Story Mentions
              </h2>
              <p>
                The biggest missed opportunity on Instagram is the Story
                Mention. When someone tags you (@yourbrand), they are shouting
                you out to their audience.
              </p>
              <p>
                Most brands just "Heart" the story manually 6 hours later.
                That's boring.
              </p>
              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-4 flex items-center gap-2'>
                  <Heart className='h-5 w-5 text-primary' />
                  The "Instant Gratification" Flow
                </h4>
                <ol className='list-decimal pl-5 space-y-3 text-sm'>
                  <li>
                    User posts a Story and tags <strong>@YourBrand</strong>.
                  </li>
                  <li>PostEngageAI detects the mention instantly (24/7).</li>
                  <li>
                    Bot sends a DM: "Omg! We love this photo! 😍 Thanks for the
                    shoutout."
                  </li>
                  <li>
                    <strong>The Reward:</strong> "As a thank you, here is 10%
                    off your next order: [CODE: UGC10]"
                  </li>
                </ol>
              </div>
              <p>
                This turns a passive "tag" into a repeat purchase immediately.
              </p>

              <h2
                id='post-comment-rewards'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Post Comment Rewards
              </h2>
              <p>Want to flood your own comments section? Incentivize it.</p>
              <p>
                <strong>Strategy:</strong> Post a photo and say "Tag us in your
                photos wearing our gear! Comment <strong>ADVOCATE</strong> below
                to join our ambassador program."
              </p>
              <p>
                When they comment <strong>ADVOCATE</strong>, the bot DMs them a
                link to your ambassador application or a guide on how to take
                great photos for your brand.
              </p>

              <h2
                id='viral-giveaways'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Viral "Share to Win" Contests
              </h2>
              <p>
                Giveaways often attract low-quality leads. But not if you
                structure them around UGC.
              </p>
              <p>
                <strong>The Automation Setup:</strong>
              </p>
              <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                <li>
                  <strong>Entry Rule:</strong> "Share this post to your Story
                  and tag us to enter!"
                </li>
                <li>
                  <strong>Validation:</strong> The bot listens for the Story
                  Mention.
                </li>
                <li>
                  <strong>Confirmation:</strong> Bot DMs the user: "You're in!
                  🎟️ Good luck!"
                </li>
              </ul>
              <p>
                This guarantees that every entrant is actually spreading the
                word, creating a viral loop.
              </p>

              <h2
                id='tracking-roi'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Tracking UGC ROI
              </h2>
              <p>How do you know it's working? PostEngageAI tracks:</p>
              <ul className='space-y-2 my-6'>
                <li>
                  <strong>Mentions Count:</strong> How many stories were you
                  tagged in?
                </li>
                <li>
                  <strong>DM Open Rates:</strong> Did they read your thank you
                  note?
                </li>
                <li>
                  <strong>Coupon Redemptions:</strong> How many sales came from
                  that 10% code?
                </li>
              </ul>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>
                  Turn Customers into Superfans
                </h3>
                <p className='mb-6'>
                  Don't let another shoutout go unnoticed. Automate your UGC
                  rewards and build a community that sells for you.
                </p>
                <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                  Start Automating UGC <ArrowRight className='ml-2 h-5 w-5' />
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
                  url='https://postengage.ai/blog/ultimate-guide-ugc-automation'
                  title='The Ultimate Guide to UGC Automation: Turn Customers into Advocates'
                />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}

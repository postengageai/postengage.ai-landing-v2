import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { PageHeader } from '@/components/marketing/page-header';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  Send,
  Lock,
  Fingerprint,
  BookOpen,
  Brain,
  CalendarClock,
  UserCheck,
  BarChart3,
  SlidersHorizontal,
  Timer,
  Coins,
  Trophy,
  Users,
  Check,
  ArrowRight,
  Sparkles,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';
import type { LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - PostEngage.ai',
  description:
    'Explore every feature PostEngage.ai offers: comment auto-reply, auto DM, Voice DNA, knowledge base, bot memory, content scheduler, lead capture, analytics, and more.',
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  badge?: string;
}

interface FeatureCategory {
  label: string;
  title: string;
  description: string;
  features: Feature[];
}

const categories: FeatureCategory[] = [
  {
    label: 'Engagement Automation',
    title: 'Respond to every interaction automatically',
    description:
      'Never miss a comment or DM again. PostEngage.ai handles every conversation so you can focus on creating content.',
    features: [
      {
        icon: MessageCircle,
        title: 'Comment Auto-Reply',
        description:
          'Reply to every Instagram comment automatically with template-based responses (FREE) or AI-generated replies that sound exactly like you.',
        highlights: [
          'Keyword-based triggers with any, all, exact, and none matching modes',
          'Works on posts, reels, stories, and live videos',
          'Template replies are free forever; AI replies use credits',
          'Replies feel personal and on-brand every time',
        ],
        badge: 'Core',
      },
      {
        icon: Send,
        title: 'Auto DM',
        description:
          'Trigger direct messages when users comment specific keywords. Send text, images, videos, or files directly to their inbox.',
        highlights: [
          'Keyword-triggered DMs for lead magnets and funnels',
          'Send text, images, videos, or file attachments',
          'Quick reply buttons for guided conversations',
          'Perfect for lead magnet delivery and nurturing',
        ],
        badge: 'Core',
      },
      {
        icon: Lock,
        title: 'Private Reply',
        description:
          "Reply privately to public comments so your response lands in the user's DM inbox instead of the public thread.",
        highlights: [
          'Responds privately to any public comment',
          "Appears directly in the user's DM inbox",
          'Ideal for customer support conversations',
          'Great for lead capture without public back-and-forth',
        ],
      },
    ],
  },
  {
    label: 'AI Intelligence',
    title: 'AI that actually sounds like you',
    description:
      'Not another generic chatbot. PostEngage.ai learns your voice, remembers your conversations, and draws from your knowledge.',
    features: [
      {
        icon: Fingerprint,
        title: 'Voice DNA Technology',
        description:
          'Our AI analyzes your past captions, comments, and messages to learn your unique voice -- emoji usage, slang, tone, and personality.',
        highlights: [
          'Auto-infer mode analyzes your content with zero setup',
          'Learns your emoji usage, slang, and tone patterns',
          'Continuous learning from your feedback over time',
          'Few-shot and negative examples for fine-tuning',
        ],
        badge: 'Unique',
      },
      {
        icon: BookOpen,
        title: 'Knowledge Base',
        description:
          'Give your AI the context it needs. Upload documents, add URLs, or write entries so it can answer questions accurately.',
        highlights: [
          'Upload PDFs, DOCX, and TXT files (up to 10MB each)',
          'Add URLs for automatic web scraping',
          'Text-based and FAQ knowledge entries',
          'Per-bot knowledge isolation for multiple brands',
        ],
      },
      {
        icon: Brain,
        title: 'Bot Memory',
        description:
          'Your AI remembers every conversation. It tracks users, recalls past interactions, and builds context over time for smarter responses.',
        highlights: [
          'Structured memory tracks users and conversation history',
          'Semantic memory powered by pgvector for deep recall',
          'Remembers past interactions with each individual user',
          'Context-aware responses that get better over time',
        ],
        badge: 'Unique',
      },
    ],
  },
  {
    label: 'Growth Tools',
    title: 'Turn engagement into measurable growth',
    description:
      'Schedule content, capture leads, and track your ROI. Everything you need to grow your Instagram presence in one place.',
    features: [
      {
        icon: CalendarClock,
        title: 'Content Scheduler',
        description:
          'Plan and schedule your posts for the best times. View everything in a calendar and track your publishing quota.',
        highlights: [
          'Schedule posts for future publishing',
          'Best posting time recommendations',
          'Calendar view for content planning',
          'Publishing quota tracking',
        ],
      },
      {
        icon: UserCheck,
        title: 'Lead Capture & Management',
        description:
          'Automatically capture leads from comments and DMs. Tag, organize, link profiles across platforms, and export when ready.',
        highlights: [
          'Auto-capture leads from comments and DMs',
          'Tagging system for lead organization',
          'Multi-platform profile linking',
          'CSV and JSON export, plus manual entry',
        ],
      },
      {
        icon: BarChart3,
        title: 'Analytics & ROI Tracking',
        description:
          'See exactly how PostEngage.ai impacts your growth. Compare before vs. after, track your Impact Score, and calculate real ROI.',
        highlights: [
          'Before vs. After growth comparison dashboard',
          'Impact Score tracking: followers, engagement, value',
          'ROI calculator with IP-based currency detection',
          'Reply rate, conversion rate, and response time metrics',
        ],
      },
    ],
  },
  {
    label: 'Safety & Control',
    title: 'Automation that stays invisible',
    description:
      'Smart conditions, human-like timing, and granular controls keep your account safe and your automation undetectable.',
    features: [
      {
        icon: SlidersHorizontal,
        title: 'Smart Conditions',
        description:
          'Control exactly when and how your bots respond. Filter by keywords, user attributes, time ranges, and engagement history.',
        highlights: [
          'Keyword matching: any, all, exact, or none modes',
          'User filters by follower count and engagement history',
          'Time range scheduling for active hours',
          'First contact detection and source filtering',
        ],
      },
      {
        icon: Timer,
        title: 'Human-Like Timing',
        description:
          'Natural reply delays that mimic real human behavior. Configurable cooldowns and rate limits keep your account safe from flags.',
        highlights: [
          'Configurable reply delays from 30s to 3600s',
          'Max replies per hour and per day limits',
          'Cooldown periods between responses',
          'Prevents Instagram rate limits automatically',
        ],
      },
    ],
  },
  {
    label: 'Pricing & Rewards',
    title: 'Pay for what you use, earn as you grow',
    description:
      'No subscriptions, no expiry. A transparent credit system plus built-in rewards for your milestones and referrals.',
    features: [
      {
        icon: Coins,
        title: 'Credit-Based Pricing',
        description:
          'Basic actions are free forever. AI features use credits with no subscriptions and no expiry. Bring your own model for just 1 credit.',
        highlights: [
          'Basic template actions are FREE forever',
          'AI Standard replies cost 9 credits',
          'AI with Knowledge Base costs 13 credits',
          'AI Full Context costs 19 credits; BYOM just 1 credit',
        ],
        badge: 'No Subscription',
      },
      {
        icon: Trophy,
        title: 'Achievements & Gamification',
        description:
          'Hit milestones, unlock achievements, and celebrate your wins. PostEngage.ai makes growing your account feel rewarding.',
        highlights: [
          'Milestone tracking: first 10 replies, first lead, and more',
          'Confetti and toast celebrations on achievements',
          'Progressive unlocking system',
          'Wins feed to track your journey',
        ],
      },
      {
        icon: Users,
        title: 'Affiliate Program',
        description:
          'Earn commissions by referring others. Get your unique referral link, track conversions, and grow your earnings alongside your audience.',
        highlights: [
          'Unique referral link for every user',
          'Commission tracking dashboard',
          'Built-in referral system with no extra setup',
        ],
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <PageHeader
            badge='Features'
            title='The complete Instagram growth platform'
            description='14 powerful features working together -- from AI-powered replies that sound like you, to lead capture, analytics, and content scheduling. Everything you need to grow, nothing you don&#39;t.'
          />

          {/* Quick nav */}
          <div className='mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2'>
            {categories.map(cat => (
              <a
                key={cat.label}
                href={`#${cat.label.toLowerCase().replace(/\s+/g, '-')}`}
                className='rounded-full border border-border bg-muted/40 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30'
              >
                {cat.label}
              </a>
            ))}
          </div>
        </section>

        {/* Feature Categories */}
        {categories.map((category, catIndex) => (
          <section
            key={category.label}
            id={category.label.toLowerCase().replace(/\s+/g, '-')}
            className={`scroll-mt-24 ${catIndex === 0 ? 'mt-24' : 'mt-32'} px-4 sm:px-6`}
          >
            {/* Category Header */}
            <div className='mx-auto max-w-3xl text-center mb-16'>
              <div className='mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider'>
                {category.label}
              </div>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                {category.title}
              </h2>
              <p className='mt-4 text-lg text-muted-foreground'>
                {category.description}
              </p>
            </div>

            {/* Feature Cards */}
            <div className='mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {category.features.map(feature => (
                <div
                  key={feature.title}
                  className='group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
                >
                  {/* Badge */}
                  {feature.badge && (
                    <div className='absolute -top-3 right-6 inline-flex items-center rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground'>
                      {feature.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15'>
                    <feature.icon className='h-6 w-6 text-primary' />
                  </div>

                  {/* Title & Description */}
                  <h3 className='text-xl font-semibold mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed mb-6'>
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className='space-y-2.5'>
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className='flex items-start gap-2.5 text-sm'>
                        <Check className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                        <span className='text-muted-foreground'>
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Stats Banner */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl rounded-2xl border border-border bg-muted/30 p-10 sm:p-14'>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center'>
              {[
                { value: '14', label: 'Powerful Features' },
                { value: '0', label: 'Monthly Subscriptions' },
                { value: '100%', label: 'Official API Only' },
                { value: 'Free', label: 'Basic Actions Forever' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className='text-3xl font-bold text-primary'>
                    {stat.value}
                  </div>
                  <div className='mt-1 text-sm text-muted-foreground'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10'>
              <Shield className='h-7 w-7 text-primary' />
            </div>
            <h2 className='text-2xl font-bold mb-4'>Safety-first automation</h2>
            <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
              Every feature is built with your account safety in mind. Official
              APIs only. Human-like behavior. Configurable rate limits. You stay
              in control at all times.
            </p>
            <Button variant='outline' asChild>
              <Link href='/security'>Learn about our security practices</Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10'>
              <Sparkles className='h-7 w-7 text-primary' />
            </div>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
              Ready to automate your engagement?
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
              Start with free template replies. Upgrade to AI when you are
              ready. No subscription required.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>
                  Get Started Free
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/pricing'>View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

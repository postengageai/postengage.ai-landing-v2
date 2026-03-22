import { Metadata } from 'next';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { PageHeader } from '@/components/marketing/page-header';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Clock,
  Fingerprint,
  MessageCircle,
  Send,
  Brain,
  Zap,
  BarChart3,
  Bot,
  BookOpen,
  Target,
  Calendar,
  Image,
  Users,
  Key,
  TrendingUp,
  Award,
  CreditCard,
  Lock,
  Eye,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessagesSquare,
  Heart,
  UserPlus,
  AtSign,
  Radio,
  Hash,
  SmilePlus,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Product — Instagram Automation with Voice DNA AI',
  description:
    'Auto-reply to comments, send DMs on keywords, private replies, AI that learns your voice via Voice DNA, credit-based pricing, 9 trigger types, and full analytics dashboard.',
};

const triggers = [
  { icon: MessageCircle, label: 'New Comment' },
  { icon: Send, label: 'DM Received' },
  { icon: MessagesSquare, label: 'Story Reply' },
  { icon: AtSign, label: 'Story Mention' },
  { icon: Radio, label: 'Live Comment' },
  { icon: Hash, label: 'Comment Mention' },
  { icon: SmilePlus, label: 'Message Reaction' },
  { icon: UserPlus, label: 'New Follower' },
  { icon: Star, label: 'Messaging Referral' },
];

const actions = [
  {
    icon: MessageCircle,
    title: 'Reply to Comment',
    description:
      'Instantly respond to comments with templates or AI-generated replies.',
  },
  {
    icon: Send,
    title: 'Send DM',
    description:
      'Trigger personalized DMs based on keywords, hashtags, or user actions.',
  },
  {
    icon: Eye,
    title: 'Private Reply',
    description:
      'Send a private message in response to a public comment — perfect for lead capture.',
  },
  {
    icon: ShieldCheck,
    title: 'Hide Comment',
    description:
      'Automatically hide spam, toxic, or off-topic comments to keep your feed clean.',
  },
  {
    icon: Heart,
    title: 'React to DM',
    description:
      'React to incoming DMs to acknowledge messages even before a full reply.',
  },
];

const intelligenceFeatures = [
  {
    icon: Fingerprint,
    title: 'Voice DNA',
    description:
      'Our AI analyzes your past content — captions, replies, stories — to clone your exact writing style, tone, and personality.',
  },
  {
    icon: Bot,
    title: 'Multiple Bots per Account',
    description:
      'Create specialized bots for different purposes — sales, support, engagement — each with its own knowledge base and personality.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description:
      'Upload PDFs, URLs, or raw text. Your bot draws from this context to give accurate, informed responses.',
  },
  {
    icon: Brain,
    title: 'Bot Memory',
    description:
      'Semantic and structured memory lets your bot remember past conversations, preferences, and context for each user.',
  },
  {
    icon: Target,
    title: 'Hot Leads Detection',
    description:
      'AI identifies high-intent users from conversation patterns and flags them as hot leads for your attention.',
  },
  {
    icon: Key,
    title: 'BYOM — Bring Your Own Model',
    description:
      'Use your own OpenAI or Anthropic API key. Full control over your AI, charged at just 1 credit for infrastructure.',
  },
];

const pricingTiers = [
  {
    label: 'Basic Actions',
    credits: 'FREE',
    description: 'Reply, DM, private reply using templates',
    highlight: false,
  },
  {
    label: 'AI Standard Reply',
    credits: '9 credits',
    description: 'AI-generated reply in your voice',
    highlight: false,
  },
  {
    label: 'AI + Knowledge',
    credits: '13 credits',
    description: 'AI reply informed by your knowledge base',
    highlight: true,
  },
  {
    label: 'AI Full Context',
    credits: '19 credits',
    description: 'AI with knowledge base + conversation memory',
    highlight: false,
  },
  {
    label: 'BYOM',
    credits: '1 credit',
    description: 'Your own API key — infra cost only',
    highlight: false,
  },
];

const dashboardFeatures = [
  {
    icon: TrendingUp,
    title: 'Before vs After Tracking',
    description:
      'See exactly how your growth metrics changed after enabling PostEngage.',
  },
  {
    icon: Award,
    title: 'Impact Score',
    description:
      'A single metric combining followers gained, engagement rate uplift, and value delivered.',
  },
  {
    icon: BarChart3,
    title: 'ROI Calculator',
    description:
      'Real-time ROI with currency localization — know exactly what your automation is worth.',
  },
  {
    icon: Zap,
    title: 'Performance Metrics',
    description:
      'Reply rate, conversion rate, average response time — all in one view.',
  },
];

export default function ProductPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <PageHeader
            badge='The Product'
            title='Instagram automation that actually sounds like you'
            description='PostEngage.ai auto-replies to comments, sends DMs on keywords, and captures leads — all powered by AI that learns your voice through Voice DNA technology. Basic actions are free forever.'
          />

          <div className='mt-10 flex justify-center gap-4'>
            <Button size='lg' asChild>
              <Link href={`${APP_URL}/signup`}>
                Start Free
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button size='lg' variant='outline' asChild>
              <Link href='/pricing'>View Pricing</Link>
            </Button>
          </div>
        </section>

        {/* Problem / Outcome */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <div className='grid gap-12 md:grid-cols-2'>
              <div className='rounded-2xl border border-border bg-muted/30 p-8'>
                <div className='mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider'>
                  The Problem
                </div>
                <h3 className='text-2xl font-semibold mb-4'>
                  Your audience grows. Your time doesn&apos;t.
                </h3>
                <p className='text-muted-foreground'>
                  Every unanswered comment is a missed connection. Every ignored
                  DM is a lost sale. Hiring a VA means losing your authentic
                  voice — and generic chatbots sound like robots. You need
                  automation that understands <em>you</em>.
                </p>
              </div>

              <div className='rounded-2xl border border-primary/50 bg-primary/5 p-8'>
                <div className='mb-4 text-sm font-medium text-primary uppercase tracking-wider'>
                  The Outcome
                </div>
                <h3 className='text-2xl font-semibold mb-4'>
                  Engage every follower. In your own voice.
                </h3>
                <p className='text-muted-foreground'>
                  PostEngage replies to comments, sends DMs, captures leads, and
                  nurtures conversations — all using AI trained on your writing
                  style. Your audience feels heard. You get your time back. And
                  you can measure the ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9 Trigger Types */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='text-3xl font-bold text-center mb-4'>
              9 triggers. Every interaction covered.
            </h2>
            <p className='text-center text-muted-foreground max-w-2xl mx-auto mb-12'>
              PostEngage listens across every Instagram touchpoint — comments,
              DMs, stories, live streams, mentions, reactions, and new
              followers.
            </p>

            <div className='grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9'>
              {triggers.map((trigger, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/50 hover:bg-primary/5'
                >
                  <trigger.icon className='h-5 w-5 text-primary' />
                  <span className='text-xs font-medium text-muted-foreground'>
                    {trigger.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 Actions */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='text-3xl font-bold text-center mb-4'>
              5 powerful actions
            </h2>
            <p className='text-center text-muted-foreground max-w-2xl mx-auto mb-12'>
              Every trigger can fire one or more actions — reply publicly, DM
              privately, hide spam, or react to messages. Chain them together
              for complete automation flows.
            </p>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {actions.map((action, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30'
                >
                  <action.icon className='h-8 w-8 text-primary mb-4' />
                  <h3 className='text-lg font-semibold mb-2'>{action.title}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {action.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Conditions */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-3xl font-bold text-center mb-4'>
              Precision targeting with 6 condition types
            </h2>
            <p className='text-center text-muted-foreground max-w-2xl mx-auto mb-12'>
              Don&apos;t just automate blindly. PostEngage fires actions only
              when your conditions are met — so the right people get the right
              response at the right time.
            </p>

            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: 'Keyword Matching',
                  description:
                    'Trigger on specific words, phrases, or patterns in comments and DMs.',
                },
                {
                  title: 'User Filters',
                  description:
                    'Target by verified status, follower count, account type, or custom lists.',
                },
                {
                  title: 'Time Ranges',
                  description:
                    'Activate automations only during business hours or specific schedules.',
                },
                {
                  title: 'Follower Count',
                  description:
                    'Different responses for micro-influencers vs. high-follower accounts.',
                },
                {
                  title: 'Engagement History',
                  description:
                    'Respond differently to loyal fans vs. first-time visitors.',
                },
                {
                  title: 'First Contact Detection',
                  description:
                    'Special welcome flows for users messaging you for the first time.',
                },
              ].map((condition, index) => (
                <div
                  key={index}
                  className='rounded-lg border border-border bg-muted/30 p-5'
                >
                  <h3 className='text-sm font-semibold mb-1'>
                    {condition.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {condition.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intelligence / Voice DNA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <div className='text-center mb-16'>
              <div className='mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary'>
                <Sparkles className='mr-2 h-3.5 w-3.5' />
                AI Intelligence Layer
              </div>
              <h2 className='text-3xl font-bold mb-4'>
                AI that doesn&apos;t just reply. It <em>understands</em>.
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Voice DNA technology analyzes your past content to clone your
                writing style. Combine it with knowledge bases, bot memory, and
                hot lead detection for automation that feels genuinely human.
              </p>
            </div>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {intelligenceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
                >
                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                    <feature.icon className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-3xl font-bold text-center mb-16'>
              Up and running in 4 steps
            </h2>

            <div className='space-y-8'>
              {[
                {
                  step: '01',
                  title: 'Connect your Instagram',
                  description:
                    "Secure OAuth through Meta's official API. We never see or store your password. One click and you're connected.",
                },
                {
                  step: '02',
                  title: 'Train your Voice DNA',
                  description:
                    'Our AI analyzes your captions, comments, and replies to learn your tone, humor, and communication style. You can also upload a knowledge base for product or brand context.',
                },
                {
                  step: '03',
                  title: 'Build your automation flows',
                  description:
                    'Pick triggers (new comment, DM, story reply, etc.), set conditions (keywords, follower count, time range), and choose actions (reply, DM, private reply, hide). Chain them however you want.',
                },
                {
                  step: '04',
                  title: 'Track results in real time',
                  description:
                    'Your dashboard shows before vs. after metrics, impact score, ROI calculation, hot leads, and a wins feed. See exactly what PostEngage is doing for your account.',
                },
              ].map((item, index) => (
                <div key={index} className='flex gap-6 items-start'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono text-sm font-medium'>
                    {item.step}
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                    <p className='text-muted-foreground'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard & Analytics */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='text-3xl font-bold text-center mb-4'>
              A dashboard that proves the ROI
            </h2>
            <p className='text-center text-muted-foreground max-w-2xl mx-auto mb-12'>
              Most tools show you vanity metrics. PostEngage shows you exactly
              what changed since you started — followers, engagement, leads, and
              revenue impact.
            </p>

            <div className='grid gap-6 sm:grid-cols-2'>
              {dashboardFeatures.map((feature, index) => (
                <div
                  key={index}
                  className='flex gap-4 rounded-xl border border-border bg-card p-6'
                >
                  <div className='flex-shrink-0'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                      <feature.icon className='h-5 w-5 text-primary' />
                    </div>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-1'>
                      {feature.title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Features */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Everything else you need
            </h2>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                {
                  icon: Calendar,
                  title: 'Content Scheduler',
                  description: 'Schedule posts with AI-suggested best times.',
                },
                {
                  icon: Image,
                  title: 'Media Library',
                  description: 'Store and organize your creative assets.',
                },
                {
                  icon: Users,
                  title: 'Lead Management',
                  description:
                    'Capture, tag, and manage leads from conversations.',
                },
                {
                  icon: CreditCard,
                  title: 'Affiliate Program',
                  description: 'Earn by referring creators and businesses.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-5 text-center'
                >
                  <feature.icon className='h-6 w-6 text-primary mx-auto mb-3' />
                  <h3 className='text-sm font-semibold mb-1'>
                    {feature.title}
                  </h3>
                  <p className='text-xs text-muted-foreground'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credit-Based Pricing */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-3xl font-bold text-center mb-4'>
              Pay only for AI. Basic actions are free.
            </h2>
            <p className='text-center text-muted-foreground max-w-2xl mx-auto mb-12'>
              Template-based replies, DMs, and private replies cost nothing. You
              only spend credits when AI generates a response — and the cost
              scales with how much context the AI uses.
            </p>

            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-xl border p-5 text-center transition-colors ${
                    tier.highlight
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className='text-2xl font-bold text-primary mb-1'>
                    {tier.credits}
                  </div>
                  <div className='text-sm font-semibold mb-2'>{tier.label}</div>
                  <p className='text-xs text-muted-foreground'>
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='mt-8 text-center'>
              <Button variant='outline' asChild>
                <Link href='/pricing'>See Full Pricing Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Built on trust and safety
            </h2>
            <p className='text-muted-foreground mb-12'>
              PostEngage uses Meta&apos;s official Instagram API only. No
              scraping, no password storage, no shady workarounds. Your account
              stays safe.
            </p>

            <div className='grid gap-3 sm:grid-cols-2'>
              {[
                {
                  icon: Lock,
                  text: 'OAuth only — we never see your password',
                },
                {
                  icon: Shield,
                  text: 'Official Meta/Instagram API — no scraping',
                },
                {
                  icon: Clock,
                  text: 'Human-like timing delays on every action',
                },
                {
                  icon: ShieldCheck,
                  text: 'Loop guards to prevent spam and rate limits',
                },
                {
                  icon: CheckCircle2,
                  text: 'You control every automation rule',
                },
                {
                  icon: CreditCard,
                  text: 'Credit-based usage — no surprise charges',
                },
                {
                  icon: Eye,
                  text: 'Full activity log — review everything anytime',
                },
                {
                  icon: Users,
                  text: 'Disconnect your account with one click',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3 text-left'
                >
                  <item.icon className='h-4 w-4 text-primary shrink-0' />
                  <span className='text-sm'>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center'>
              <h2 className='text-3xl font-bold mb-4'>
                Ready to automate your Instagram engagement?
              </h2>
              <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
                Basic actions are free forever. Start automating replies and DMs
                today — upgrade to AI when you&apos;re ready.
              </p>
              <div className='flex justify-center gap-4'>
                <Button size='lg' asChild>
                  <Link href={`${APP_URL}/signup`}>
                    Start Free
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button size='lg' variant='outline' asChild>
                  <Link href='/features'>Explore Features</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

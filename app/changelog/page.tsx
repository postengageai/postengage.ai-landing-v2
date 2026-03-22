import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { PageHeader } from '@/components/marketing/page-header';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  BarChart3,
  LayoutDashboard,
  CalendarDays,
  Target,
  Mic,
  TrendingUp,
  MessageCircle,
  Settings2,
  Rocket,
} from 'lucide-react';

export default function ChangelogPage() {
  const changelog = [
    {
      version: '1.0.0',
      date: 'March 15, 2026',
      title: 'PostEngageAI v1.0 — General Availability',
      type: 'major',
      icon: Globe,
      changes: [
        'IP-based currency detection (INR for India, USD for others)',
        'Meta Pixel integration for landing and app',
        'Corrected free plan messaging — basic actions free forever',
        'Achievement milestone backfill from execution logs',
        'Brand-consistent logo across landing and app',
        'Value analytics with localized currency display',
      ],
      whyItMatters:
        'This is the milestone we have been building toward. v1.0 marks PostEngageAI as production-ready with polished branding, accurate billing, and a global-first experience for creators in India and beyond.',
    },
    {
      version: '0.9.0',
      date: 'March 1, 2026',
      title: 'Value Analytics Dashboard',
      type: 'feature',
      icon: BarChart3,
      changes: [
        'User value analytics dashboard (Before vs After growth)',
        'Impact Score with follower attribution',
        'ROI calculator with editable hourly rate',
        'Wins feed with real-time milestone notifications',
        'Performance metrics (reply rate, conversion rate, response time)',
        'Growth chart with baseline comparison',
      ],
      whyItMatters:
        'Numbers tell the story. Now you can see exactly how PostEngageAI is growing your audience, saving your time, and turning engagement into measurable ROI.',
    },
    {
      version: '0.8.0',
      date: 'February 15, 2026',
      title: 'Dashboard v2 Redesign',
      type: 'feature',
      icon: LayoutDashboard,
      changes: [
        'Dashboard v2 redesign with conversation charts',
        'Greeting banner with personalized insights',
        'Quick insights cards (credits, leads, time saved)',
        'Automation performance cards',
        'Credit warning alerts when balance is low',
        'Recent activity feed with mark-as-read',
      ],
      whyItMatters:
        'Your dashboard is where you start every day. The v2 redesign puts the most important metrics front-and-center so you can understand your engagement health at a glance.',
    },
    {
      version: '0.7.0',
      date: 'February 1, 2026',
      title: 'Content Scheduler',
      type: 'feature',
      icon: CalendarDays,
      changes: [
        'Content Scheduler with calendar view',
        'Best posting time recommendations',
        'Publishing quota tracking',
        'Media library with Instagram sync',
        'Bulk upload support',
      ],
      whyItMatters:
        'Engagement starts with great content posted at the right time. The scheduler closes the loop — plan, publish, and engage, all from one platform.',
    },
    {
      version: '0.6.0',
      date: 'January 20, 2026',
      title: 'Hot Leads & Affiliate Program',
      type: 'feature',
      icon: Target,
      changes: [
        'Hot leads detection and thread tracking',
        'Lead management with tagging system',
        'Multi-platform social profile linking',
        'CSV/JSON lead export',
        'Affiliate program with referral tracking',
      ],
      whyItMatters:
        'Not all conversations are equal. Hot leads detection surfaces the people most likely to convert, so you can focus your energy where it counts.',
    },
    {
      version: '0.5.0',
      date: 'January 10, 2026',
      title: 'Voice DNA & Knowledge Base',
      type: 'feature',
      icon: Mic,
      changes: [
        'Voice DNA technology — AI voice cloning',
        'Zero-config auto-inference mode',
        'Few-shot and negative examples',
        'Continuous learning from feedback',
        'Knowledge base (PDF, DOCX, URL, text)',
        'Bot memory (structured + semantic)',
        'BYOM support (bring your own model)',
      ],
      whyItMatters:
        'This is the heart of PostEngageAI. Voice DNA learns how you write and speak, then responds as you — not as a generic bot. Combined with a knowledge base, your AI truly understands your brand.',
    },
    {
      version: '0.4.0',
      date: 'January 5, 2026',
      title: 'Voice Training Improvements',
      type: 'improvement',
      icon: TrendingUp,
      changes: [
        'Voice training accuracy improved by 40%',
        'Credit usage analytics dashboard',
        'Bug fixes and stability improvements',
      ],
      whyItMatters:
        'Better voice matching means every automated reply sounds more authentically you. Small accuracy gains compound into a dramatically better experience for your audience.',
    },
    {
      version: '0.3.0',
      date: 'December 20, 2025',
      title: 'Auto DM Launch',
      type: 'feature',
      icon: MessageCircle,
      changes: [
        'Auto DM with keyword triggers',
        'Private reply to public comments',
        'Quick reply buttons in DMs',
        'Activity feed',
      ],
      whyItMatters:
        'DMs are where relationships deepen. Now you can welcome every new follower personally — at scale — and move public conversations into private threads automatically.',
    },
    {
      version: '0.2.0',
      date: 'December 10, 2025',
      title: 'Automation Engine',
      type: 'feature',
      icon: Settings2,
      changes: [
        'Automation conditions (keywords, user filters, time ranges)',
        'Human-like timing delays',
        'Loop guard protection',
        'Credit-based billing with Razorpay',
      ],
      whyItMatters:
        'Automation without guardrails is dangerous. The conditions engine lets you control exactly when, how, and to whom your AI responds — with built-in protections against spam loops.',
    },
    {
      version: '0.1.0',
      date: 'December 1, 2025',
      title: 'Initial Launch',
      type: 'feature',
      icon: Rocket,
      changes: [
        'Initial launch',
        'Comment auto-reply (template-based)',
        'Instagram OAuth connection',
        'Basic dashboard',
        '100 free credits on signup',
      ],
      whyItMatters:
        'Where it all began. A simple idea: what if you could reply to every Instagram comment without lifting a finger? This first version proved the concept.',
    },
  ];

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'major':
        return (
          <Badge className='bg-emerald-500/20 text-emerald-400 border-emerald-500/30'>
            Major Release
          </Badge>
        );
      case 'feature':
        return (
          <Badge className='bg-primary/20 text-primary border-primary/30'>
            New Feature
          </Badge>
        );
      case 'improvement':
        return (
          <Badge className='bg-blue-500/20 text-blue-400 border-blue-500/30'>
            Improvement
          </Badge>
        );
      case 'fix':
        return (
          <Badge className='bg-amber-500/20 text-amber-400 border-amber-500/30'>
            Bug Fix
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <PageHeader
            badge='Changelog'
            title="What's new in PostEngageAI"
            description='A running log of improvements, fixes, and new features. We ship often.'
          />
        </section>

        {/* Changelog */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='relative'>
              {/* Timeline line */}
              <div className='absolute left-0 top-0 bottom-0 w-px bg-border md:left-20' />

              <div className='space-y-12'>
                {changelog.map((entry, index) => {
                  const Icon = entry.icon;
                  return (
                    <div key={index} className='relative pl-8 md:pl-32'>
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-0 top-2 h-2 w-2 rounded-full md:left-20 -translate-x-0.5 ${
                          index === 0 ? 'bg-emerald-400' : 'bg-primary'
                        }`}
                      />

                      {/* Date (desktop) */}
                      <div className='hidden md:block absolute left-0 top-0 w-16 text-right'>
                        <span className='text-xs text-muted-foreground font-mono'>
                          {entry.version}
                        </span>
                      </div>

                      {/* Content */}
                      <div
                        className={`rounded-xl border bg-card p-6 ${
                          index === 0
                            ? 'border-emerald-500/30 ring-1 ring-emerald-500/10'
                            : 'border-border'
                        }`}
                      >
                        <div className='flex flex-wrap items-center gap-3 mb-4'>
                          <Icon className='h-4 w-4 text-muted-foreground' />
                          {getTypeBadge(entry.type)}
                          {index === 0 && (
                            <Badge
                              variant='outline'
                              className='border-emerald-500/40 text-emerald-400 text-[10px]'
                            >
                              Latest
                            </Badge>
                          )}
                          <span className='text-sm text-muted-foreground'>
                            {entry.date}
                          </span>
                          <span className='md:hidden text-xs font-mono text-muted-foreground'>
                            v{entry.version}
                          </span>
                        </div>

                        <h3 className='text-xl font-semibold mb-4'>
                          {entry.title}
                        </h3>

                        <ul className='space-y-2 mb-4'>
                          {entry.changes.map((change, changeIndex) => (
                            <li
                              key={changeIndex}
                              className='flex gap-2 text-sm text-muted-foreground'
                            >
                              <span className='text-primary mt-0.5'>•</span>
                              {change}
                            </li>
                          ))}
                        </ul>

                        {entry.whyItMatters && (
                          <div className='mt-4 pt-4 border-t border-border'>
                            <div className='text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2'>
                              Why this matters
                            </div>
                            <p className='text-sm text-muted-foreground'>
                              {entry.whyItMatters}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-xl text-center'>
            <h2 className='text-xl font-bold mb-4'>Stay updated</h2>
            <p className='text-sm text-muted-foreground'>
              Follow us on{' '}
              <a href='#' className='text-primary hover:underline'>
                Twitter
              </a>{' '}
              for the latest updates, or check back here regularly. We ship
              often.
            </p>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

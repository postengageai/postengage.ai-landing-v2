import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { PageHeader } from '@/components/marketing/page-header';
import {
  CircleDot,
  Circle,
  CircleDashed,
  MessageSquareReply,
  Send,
  Lock,
  AudioWaveform,
  UserCircle,
  BookOpen,
  Brain,
  CalendarClock,
  Target,
  BarChart3,
  CreditCard,
  Trophy,
  Users2,
  Key,
  Flame,
  Timer,
  TrendingUp,
  Building2,
  ShieldCheck,
  Webhook,
  Filter,
  LayoutTemplate,
  Music2,
  Twitter,
  Linkedin,
  MessageCircle,
  FileBarChart,
  GitBranch,
} from 'lucide-react';

export default function RoadmapPage() {
  const roadmapSections = [
    {
      title: 'Now',
      subtitle: 'Shipped — Available today',
      icon: CircleDot,
      iconColor: 'text-green-500',
      items: [
        {
          title: 'Comment Auto-Reply',
          description:
            'Template and AI-powered replies to comments on posts, reels, stories, and live videos.',
          icon: MessageSquareReply,
        },
        {
          title: 'Auto DM',
          description:
            'Keyword-triggered direct messages with text, images, and quick replies.',
          icon: Send,
        },
        {
          title: 'Private Reply',
          description:
            'Send private responses to public comments automatically.',
          icon: Lock,
        },
        {
          title: 'Voice DNA',
          description:
            'AI voice cloning trained from your own content samples.',
          icon: AudioWaveform,
        },
        {
          title: 'Brand Voice Profiles',
          description:
            'Create multiple voice personas per account for different contexts.',
          icon: UserCircle,
        },
        {
          title: 'Knowledge Base',
          description:
            'Upload PDFs, URLs, and text to give AI full context about your brand.',
          icon: BookOpen,
        },
        {
          title: 'Bot Memory',
          description:
            'Structured and semantic memory for ongoing conversation context.',
          icon: Brain,
        },
        {
          title: 'Content Scheduler',
          description:
            'Schedule posts with best-time recommendations for maximum reach.',
          icon: CalendarClock,
        },
        {
          title: 'Lead Capture',
          description:
            'Auto-capture leads from comments and DMs with smart tagging.',
          icon: Target,
        },
        {
          title: 'Analytics Dashboard',
          description:
            'Growth charts, impact score, ROI calculator, and performance metrics.',
          icon: BarChart3,
        },
        {
          title: 'Credit-Based Billing',
          description:
            'Razorpay integration with INR and USD support. Pay for what you use.',
          icon: CreditCard,
        },
        {
          title: 'Achievements & Milestones',
          description:
            'Gamified progress tracking to celebrate your engagement wins.',
          icon: Trophy,
        },
        {
          title: 'Affiliate Program',
          description:
            'Referral links and commission tracking for advocates.',
          icon: Users2,
        },
        {
          title: 'BYOM Support',
          description:
            'Bring your own OpenAI or Anthropic API keys for AI responses.',
          icon: Key,
        },
        {
          title: 'Hot Leads Detection',
          description:
            'Identify high-value conversation threads worth your attention.',
          icon: Flame,
        },
        {
          title: 'Human-Like Timing',
          description:
            'Configurable delays and rate limits so replies feel natural.',
          icon: Timer,
        },
      ],
    },
    {
      title: 'Next',
      subtitle: 'Actively building',
      icon: Circle,
      iconColor: 'text-primary',
      items: [
        {
          title: 'Advanced Analytics',
          description:
            'Deeper intent analysis and conversation quality scoring.',
          icon: TrendingUp,
        },
        {
          title: 'Multi-Account Management',
          description:
            'Manage multiple Instagram accounts from a single dashboard.',
          icon: Building2,
        },
        {
          title: 'Team Access & Roles',
          description:
            'Invite team members with granular permissions and role-based access.',
          icon: ShieldCheck,
        },
        {
          title: 'API & Webhooks',
          description:
            'Developer API for custom integrations and real-time event hooks.',
          icon: Webhook,
        },
        {
          title: 'Comment Filtering',
          description:
            'Smart spam and toxicity detection to keep conversations clean.',
          icon: Filter,
        },
        {
          title: 'Automation Templates',
          description:
            'Pre-built automation flows to get started in minutes.',
          icon: LayoutTemplate,
        },
      ],
    },
    {
      title: 'Later',
      subtitle: 'Exploring',
      icon: CircleDashed,
      iconColor: 'text-muted-foreground',
      items: [
        {
          title: 'TikTok Integration',
          description:
            'Extend comment and DM automation to TikTok creators.',
          icon: Music2,
        },
        {
          title: 'Twitter/X Integration',
          description:
            'Cross-platform expansion for reply and thread automation.',
          icon: Twitter,
        },
        {
          title: 'LinkedIn Integration',
          description:
            'B2B creator support for professional network engagement.',
          icon: Linkedin,
        },
        {
          title: 'WhatsApp Business Integration',
          description:
            'Messaging automation for WhatsApp Business accounts.',
          icon: MessageCircle,
        },
        {
          title: 'Advanced Reporting',
          description:
            'Custom reports, data exports, and white-label analytics.',
          icon: FileBarChart,
        },
        {
          title: 'AI Conversation Flows',
          description:
            'Multi-step conversation automation with branching logic.',
          icon: GitBranch,
        },
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <PageHeader
            badge='Roadmap'
            title="Where we're headed"
            description="A transparent look at what we've built and what's coming next. No empty promises — just honest direction."
          />
        </section>

        {/* Note */}
        <section className='mt-12 px-4 sm:px-6'>
          <div className='mx-auto max-w-2xl'>
            <div className='rounded-xl border border-border bg-muted/30 p-6 text-center'>
              <p className='text-sm text-muted-foreground'>
                This roadmap reflects our current thinking. Priorities shift
                based on user feedback and technical constraints. Want to
                influence what we build next?{' '}
                <a
                  href='mailto:postengage.ai@gmail.com'
                  className='text-primary hover:underline'
                >
                  Tell us what matters to you
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <div className='space-y-16'>
              {roadmapSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {/* Section Header */}
                  <div className='flex items-center gap-3 mb-8'>
                    <section.icon
                      className={`h-6 w-6 ${section.iconColor}`}
                    />
                    <div>
                      <h2 className='text-2xl font-bold'>{section.title}</h2>
                      <p className='text-sm text-muted-foreground'>
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className='grid gap-4 sm:grid-cols-2'>
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`rounded-xl border p-6 ${
                          sectionIndex === 0
                            ? 'border-green-500/30 bg-green-500/5'
                            : sectionIndex === 1
                              ? 'border-primary/30 bg-primary/5'
                              : 'border-border bg-card'
                        }`}
                      >
                        <div className='flex items-start gap-3'>
                          <item.icon
                            className={`h-5 w-5 mt-0.5 shrink-0 ${
                              sectionIndex === 0
                                ? 'text-green-500'
                                : sectionIndex === 1
                                  ? 'text-primary'
                                  : 'text-muted-foreground'
                            }`}
                          />
                          <div>
                            <h3 className='font-semibold mb-1'>
                              {item.title}
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-2xl font-bold text-center mb-12'>
              How we prioritize
            </h2>

            <div className='grid gap-6 sm:grid-cols-2'>
              {[
                {
                  title: 'Reliability first',
                  description:
                    "We won't ship features that compromise stability. Your automation needs to work every time.",
                },
                {
                  title: 'User-driven',
                  description:
                    'The most requested features move up. We listen more than we assume.',
                },
                {
                  title: 'Platform-safe',
                  description:
                    "We only build what's compliant with platform policies. No shortcuts.",
                },
                {
                  title: 'Depth over breadth',
                  description:
                    "We'd rather do two things exceptionally than ten things poorly.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6'
                >
                  <h3 className='font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

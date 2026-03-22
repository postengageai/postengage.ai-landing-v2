'use client';

import { useState } from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  MessageCircle,
  Gift,
  ShoppingCart,
  Phone,
  FileText,
  Link2,
  CalendarDays,
  Headphones,
  Users,
  GraduationCap,
  UtensilsCrossed,
  Building2,
  Dumbbell,
  Send,
  ArrowRight,
  Zap,
  Sparkles,
  Mail,
} from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';
import type { LucideIcon } from 'lucide-react';

// ---------- Types ----------

type Category =
  | 'All'
  | 'Lead Capture'
  | 'E-commerce'
  | 'Creators'
  | 'Agencies'
  | 'Engagement';

interface Template {
  slug: string;
  icon: LucideIcon;
  name: string;
  category: Exclude<Category, 'All'>;
  description: string;
  triggers: string[];
  actions: string[];
}

// ---------- Data ----------

const CATEGORIES: Category[] = [
  'All',
  'Lead Capture',
  'E-commerce',
  'Creators',
  'Agencies',
  'Engagement',
];

const TEMPLATES: Template[] = [
  {
    slug: 'welcome-dm',
    icon: Heart,
    name: 'Welcome DM',
    category: 'Engagement',
    description:
      'Auto-send a personalized welcome message to every new follower the moment they hit follow.',
    triggers: ['New follower'],
    actions: ['Send DM', 'Add to audience list'],
  },
  {
    slug: 'comment-to-dm-funnel',
    icon: MessageCircle,
    name: 'Comment-to-DM Funnel',
    category: 'Lead Capture',
    description:
      'When someone comments a keyword on your post, instantly send them a DM with your link or offer.',
    triggers: ['Comment keyword'],
    actions: ['Send DM with link', 'Track conversion'],
  },
  {
    slug: 'story-mention-thank-you',
    icon: Sparkles,
    name: 'Story Mention Thank You',
    category: 'Engagement',
    description:
      'Automatically thank anyone who mentions you in their Instagram story with a warm DM reply.',
    triggers: ['Story mention'],
    actions: ['Send thank-you DM', 'Share their story'],
  },
  {
    slug: 'giveaway-entry-flow',
    icon: Gift,
    name: 'Giveaway Entry Flow',
    category: 'Engagement',
    description:
      'Let followers enter giveaways by commenting. Confirm their entry via DM and track participants.',
    triggers: ['Comment keyword', 'Post like'],
    actions: ['Confirm entry via DM', 'Add to giveaway list'],
  },
  {
    slug: 'ecommerce-product-inquiry',
    icon: ShoppingCart,
    name: 'E-commerce Product Inquiry',
    category: 'E-commerce',
    description:
      'Answer product questions, share pricing, and send purchase links automatically through DMs.',
    triggers: ['Comment keyword', 'DM keyword'],
    actions: ['Send product details', 'Share purchase link'],
  },
  {
    slug: 'coaching-discovery-call',
    icon: Phone,
    name: 'Coaching Discovery Call',
    category: 'Lead Capture',
    description:
      'Qualify potential coaching clients with automated DM questions and book discovery calls.',
    triggers: ['Comment keyword', 'DM trigger'],
    actions: ['Qualify via DM', 'Send booking link', 'Add to leads'],
  },
  {
    slug: 'lead-magnet-delivery',
    icon: FileText,
    name: 'Lead Magnet Delivery',
    category: 'Lead Capture',
    description:
      'Followers comment a keyword and instantly receive your free PDF, guide, or checklist via DM.',
    triggers: ['Comment keyword'],
    actions: ['Send DM with file', 'Add to leads'],
  },
  {
    slug: 'affiliate-link-distribution',
    icon: Link2,
    name: 'Affiliate Link Distribution',
    category: 'Creators',
    description:
      'Automatically send affiliate links when followers request them through comments or DMs.',
    triggers: ['Comment keyword', 'DM keyword'],
    actions: ['Send affiliate link', 'Track clicks'],
  },
  {
    slug: 'event-registration',
    icon: CalendarDays,
    name: 'Event Registration',
    category: 'Agencies',
    description:
      'Collect RSVPs and event registrations seamlessly through Instagram DM automation.',
    triggers: ['Comment keyword', 'Story reply'],
    actions: ['Collect RSVP', 'Send confirmation DM', 'Add to event list'],
  },
  {
    slug: 'customer-support-triage',
    icon: Headphones,
    name: 'Customer Support Triage',
    category: 'E-commerce',
    description:
      'Route incoming support queries to the right automated responses or escalate to your team.',
    triggers: ['DM keyword', 'Comment mention'],
    actions: ['Categorize query', 'Send FAQ response', 'Escalate to team'],
  },
  {
    slug: 'content-collaboration',
    icon: Users,
    name: 'Content Collaboration',
    category: 'Creators',
    description:
      'Handle collaboration requests automatically by collecting details and filtering serious inquiries.',
    triggers: ['DM keyword', 'Comment keyword'],
    actions: ['Send collab form', 'Collect details', 'Add to pipeline'],
  },
  {
    slug: 'course-webinar-signup',
    icon: GraduationCap,
    name: 'Course/Webinar Signup',
    category: 'Lead Capture',
    description:
      'Capture course or webinar registrations through DM, collect emails, and send calendar invites.',
    triggers: ['Comment keyword', 'Story reply'],
    actions: ['Collect email', 'Send registration link', 'Add to leads'],
  },
  {
    slug: 'restaurant-order-inquiry',
    icon: UtensilsCrossed,
    name: 'Restaurant Order Inquiry',
    category: 'E-commerce',
    description:
      'Handle menu questions, table booking requests, and order inquiries through DM automation.',
    triggers: ['DM keyword', 'Comment keyword'],
    actions: [
      'Send menu/details',
      'Collect booking info',
      'Confirm reservation',
    ],
  },
  {
    slug: 'real-estate-listing-info',
    icon: Building2,
    name: 'Real Estate Listing Info',
    category: 'Agencies',
    description:
      'Send property details, pricing, and schedule viewings automatically when prospects inquire.',
    triggers: ['Comment keyword', 'DM keyword'],
    actions: ['Send listing details', 'Collect buyer info', 'Schedule viewing'],
  },
  {
    slug: 'fitness-challenge-signup',
    icon: Dumbbell,
    name: 'Fitness Challenge Signup',
    category: 'Creators',
    description:
      'Enroll participants in fitness challenges through DM, track entries, and send daily prompts.',
    triggers: ['Comment keyword', 'Story reply'],
    actions: ['Confirm enrollment', 'Add to challenge list', 'Send daily DM'],
  },
];

// ---------- JSON-LD ----------

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Instagram Automation Templates',
  description:
    'Browse 15+ pre-built Instagram automation templates. DM flows, comment replies, lead capture, giveaways, and more.',
  numberOfItems: TEMPLATES.length,
  itemListElement: TEMPLATES.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    description: t.description,
    url: `${APP_URL}/signup?template=${t.slug}`,
  })),
};

// ---------- Category badge color mapping ----------

const CATEGORY_COLORS: Record<Exclude<Category, 'All'>, string> = {
  'Lead Capture': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'E-commerce': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Creators: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  Agencies: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  Engagement: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
};

// ---------- Component ----------

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered =
    activeCategory === 'All'
      ? TEMPLATES
      : TEMPLATES.filter(t => t.category === activeCategory);

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LandingHeader />

      <main className='min-h-screen'>
        {/* ---- Hero ---- */}
        <section className='relative overflow-hidden border-b border-border/40'>
          <div className='absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent-glow),transparent_70%)]' />
          <div className='relative mx-auto max-w-7xl px-6 py-24 text-center lg:py-32'>
            <Badge variant='secondary' className='mb-6'>
              <Zap className='mr-1 size-3' />
              15+ Ready-to-Use Templates
            </Badge>
            <h1 className='mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              Automation Templates
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-muted-foreground'>
              Pre-built flows to get you started in minutes. Pick a template,
              customize it, and let PostEngage handle the rest.
            </p>
          </div>
        </section>

        {/* ---- Filter Tabs ---- */}
        <section className='sticky top-16 z-30 border-b border-border/40 bg-background/80 backdrop-blur-md'>
          <div className='mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 scrollbar-none'>
            {CATEGORIES.map(cat => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* ---- Template Grid ---- */}
        <section className='mx-auto max-w-7xl px-6 py-16'>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {filtered.map(template => {
              const Icon = template.icon;
              return (
                <Card
                  key={template.slug}
                  className='group relative flex flex-col justify-between border-border/60 bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5'
                >
                  <CardHeader className='gap-3'>
                    <div className='flex items-start justify-between'>
                      <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                        <Icon className='size-5' />
                      </div>
                      <Badge
                        variant='outline'
                        className={CATEGORY_COLORS[template.category]}
                      >
                        {template.category}
                      </Badge>
                    </div>
                    <CardTitle className='text-base'>{template.name}</CardTitle>
                    <p className='line-clamp-2 text-sm text-muted-foreground'>
                      {template.description}
                    </p>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    {/* Triggers */}
                    <div>
                      <span className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                        Triggers
                      </span>
                      <div className='flex flex-wrap gap-1.5'>
                        {template.triggers.map(trigger => (
                          <span
                            key={trigger}
                            className='inline-flex items-center rounded-md border border-border/80 bg-secondary/60 px-2 py-0.5 text-xs text-secondary-foreground'
                          >
                            <Zap className='mr-1 size-3 text-primary' />
                            {trigger}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div>
                      <span className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                        Actions
                      </span>
                      <div className='flex flex-wrap gap-1.5'>
                        {template.actions.map(action => (
                          <span
                            key={action}
                            className='inline-flex items-center rounded-md border border-border/80 bg-secondary/60 px-2 py-0.5 text-xs text-secondary-foreground'
                          >
                            <Send className='mr-1 size-3 text-primary' />
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button asChild className='w-full' size='lg'>
                      <Link
                        href={`${APP_URL}/signup?template=${template.slug}`}
                      >
                        Use Template
                        <ArrowRight className='ml-2 size-4' />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className='py-20 text-center'>
              <p className='text-lg text-muted-foreground'>
                No templates found for this category.
              </p>
            </div>
          )}
        </section>

        {/* ---- CTA Section ---- */}
        <section className='border-t border-border/40'>
          <div className='mx-auto max-w-7xl px-6 py-24'>
            <div className='relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-card p-10 text-center sm:p-16'>
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--accent-glow),transparent_60%)]' />
              <div className='relative'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                  Can&apos;t find what you need?
                </h2>
                <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
                  Create custom automations with PostEngage AI. Build any flow
                  you can imagine — no coding required.
                </p>
                <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
                  <Button asChild size='lg'>
                    <Link href={`${APP_URL}/signup`}>
                      Build Custom Flow
                      <Sparkles className='ml-2 size-4' />
                    </Link>
                  </Button>
                  <Button asChild variant='outline' size='lg'>
                    <Link href='/pricing'>
                      View Pricing
                      <ArrowRight className='ml-2 size-4' />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Newsletter Signup ---- */}
        <section className='border-t border-border/40'>
          <div className='mx-auto max-w-7xl px-6 py-16'>
            <div className='mx-auto max-w-xl text-center'>
              <Mail className='mx-auto mb-4 size-8 text-primary' />
              <h3 className='text-2xl font-bold tracking-tight'>
                Get new templates in your inbox
              </h3>
              <p className='mt-2 text-muted-foreground'>
                We ship new automation templates every week. Subscribe to get
                notified.
              </p>
              <form
                className='mt-6 flex gap-3'
                onSubmit={e => e.preventDefault()}
              >
                <input
                  type='email'
                  placeholder='you@example.com'
                  required
                  className='h-10 flex-1 rounded-md border border-border bg-input/30 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                />
                <Button type='submit'>Subscribe</Button>
              </form>
              <p className='mt-3 text-xs text-muted-foreground'>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}

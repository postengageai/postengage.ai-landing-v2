import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Calendar,
  Clock,
  Zap,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'The Complete Instagram DM Automation Guide for 2026',
  description: 'Everything you need to know about Instagram DM automation in one place — triggers, AI bots, compliance, and the exact setup that generates leads on autopilot.',
  openGraph: {
    title: 'The Complete Instagram DM Automation Guide for 2026',
    description: 'Everything you need to know about Instagram DM automation in one place — triggers, AI bots, compliance, and the exact setup that generates leads on autopilot.',
    type: 'article',
    url: 'https://postengage.ai/blog/instagram-dm-automation-complete-guide-2026',
    images: [{ url: '/blog/instagram-dm-automation-complete-guide-2026-cover.png', width: 1200, height: 630, alt: 'The Complete Instagram DM Automation Guide for 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Instagram DM Automation Guide for 2026',
    description: 'Everything you need to know about Instagram DM automation in one place — triggers, AI bots, compliance, and the exact setup that generates leads on autopilot.',
    images: ['/blog/instagram-dm-automation-complete-guide-2026-cover.png'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'what-is-dm-automation', title: 'What Is DM Automation?' },
    { id: 'trigger-types', title: 'The 4 Trigger Types' },
    { id: 'ai-vs-rule-based', title: 'AI Bots vs Rule-Based Bots' },
    { id: 'compliance-rules', title: 'Instagram Compliance Rules' },
    { id: 'setup-guide', title: 'Step-by-Step Setup' },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <LandingHeader />
      <main className='relative pt-32 pb-24'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-60' />
        </div>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-32 lg:self-start space-y-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                <Link href='/blog' className='hover:text-primary transition-colors'>Blog</Link>
                <span>/</span>
                <span className='text-foreground font-medium'>Automation</span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge variant='secondary' className='mb-6 text-sm font-medium px-3 py-1'>
                  Automation
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  The Complete Instagram DM Automation Guide for 2026
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Zap className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>PostEngageAI Team</p>
                      <p className='text-xs'>Automation Experts</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Calendar className='h-4 w-4' />
                    <span>April 1, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>14 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
                  <div className='text-center p-8'>
                    <Zap className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>Automation</p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                Instagram DM automation is no longer a nice-to-have — it is the difference between a brand that scales and one that drowns in manual replies. In 2026, over 60% of top-performing Instagram accounts use some form of DM automation. This guide covers everything: triggers, AI replies, compliance, and a full setup walkthrough.
              </div>

              <h2
                id='what-is-dm-automation'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                What Is DM Automation?
              </h2>
              <p>DM automation is the process of using software to automatically send, reply to, and manage Instagram direct messages based on user actions or triggers. Instead of a human responding to every comment, follow, story reply, or keyword mention manually, an automation system handles it in seconds — 24 hours a day.</p>
              <p>The best modern DM automation tools go far beyond simple "if this then that" logic. They use AI to understand intent, detect sentiment, qualify leads, and craft replies that feel genuinely personal — not robotic.</p>

              <h2
                id='trigger-types'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                The 4 Trigger Types You Need to Know
              </h2>
              <p><strong>Comment triggers</strong> fire when someone comments a specific keyword on your post. This is the most popular trigger for giveaways, lead magnets, and content upgrades. Someone comments "GUIDE" and instantly receives your free resource via DM.</p>
              <p><strong>Story reply triggers</strong> fire when a viewer replies to your Instagram Story. Since Story viewers are already warm and engaged, these conversations convert at 3–4x higher rates than cold outreach.</p>
              <p><strong>Follow triggers</strong> fire when someone follows your account, letting you send an instant welcome message before they lose interest. <strong>Mention triggers</strong> fire when someone tags you in their content — perfect for UGC campaigns and ambassador programs.</p>

              <h2
                id='ai-vs-rule-based'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                AI Bots vs Rule-Based Bots: Which Is Better?
              </h2>
              <p>Rule-based bots follow a decision tree. If user says X, reply with Y. They are predictable and easy to set up, but they break the moment someone asks something unexpected.</p>
              <p>AI bots — like the engine behind PostEngage — understand natural language, detect intent, and craft contextually appropriate replies. They can handle objections, answer product questions, and even qualify leads by asking the right follow-up questions. For any business doing meaningful volume, AI bots are the only sustainable option.</p>

              <h2
                id='compliance-rules'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Instagram Compliance Rules You Cannot Ignore
              </h2>
              <p>Meta allows automation that enhances user experience but prohibits anything that looks like spam. Key rules: only message users who have interacted with you first (commented, followed, replied to your Story), never send unsolicited promotional messages to cold users, and always respect the 24-hour messaging window after the last user interaction.</p>
              <p>PostEngage is built compliance-first — every automation flow is reviewed against Meta's policies before it can be activated. You get the power of automation without the risk of account restriction.</p>

              <h2
                id='setup-guide'
                className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'
              >
                Step-by-Step Setup with PostEngage
              </h2>
              <p>1. Connect your Instagram account under Settings → Social Accounts.</p>
              <p>2. Navigate to Automations → New Automation.</p>
              <p>3. Choose your trigger type (comment, follow, story reply, mention).</p>
              <p>4. Set your keyword filters if using comment triggers.</p>
              <p>5. Write your initial message — or let the AI generate it based on your brand voice.</p>
              <p>6. Set rate limits under your AI Bot settings to stay within safe reply volumes.</p>
              <p>7. Activate and monitor replies in the Activity feed.</p>
              <p>Most accounts see their first automated lead within 24 hours of activation.</p>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>Start Automating Your DMs Today</h3>
                <p className='mb-6'>Set up your first automation in under 5 minutes. No credit card required.</p>
                <Link href='https://app.postengage.ai/signup'>
                  <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                    Get Started Free <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                </Link>
              </div>
            </article>

            <aside className='hidden lg:block lg:col-span-2 lg:sticky lg:top-32 lg:self-start'>
              <div className='flex flex-col gap-4 items-center'>
                <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2'>Share</p>
                <SocialShareButtons
                  url='https://postengage.ai/blog/instagram-dm-automation-complete-guide-2026'
                  title='The Complete Instagram DM Automation Guide for 2026' />
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

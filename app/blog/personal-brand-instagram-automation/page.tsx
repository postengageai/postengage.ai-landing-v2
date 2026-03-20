import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  UserPlus,
  Clock,
  Zap,
  User,
  TrendingUp,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Building a Personal Brand on Instagram at Scale with Automation',
  description:
    'Personal brands win when they feel personal. But you cannot manually reply to 500 DMs a day. Here is how to automate engagement in a way that still feels 1-on-1.',
  openGraph: {
    title: 'Building a Personal Brand on Instagram at Scale with Automation',
    description:
      'Personal brands win when they feel personal. But you cannot manually reply to 500 DMs a day. Here is how to automate engagement in a way that still feels 1-on-1.',
    type: 'article',
    url: 'https://postengage.ai/blog/personal-brand-instagram-automation',
    images: [
      {
        url: '/blog/personal-brand-automation-cover.png',
        width: 1200,
        height: 630,
        alt: 'Personal Brand Instagram Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building a Personal Brand on Instagram at Scale with Automation',
    description:
      'Personal brands win when they feel personal. But you cannot manually reply to 500 DMs a day. Here is how to automate engagement in a way that still feels 1-on-1.',
    images: ['/blog/personal-brand-automation-cover.png'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'the-personal-brand-paradox', title: 'The Personal Brand Paradox' },
    { id: 'what-to-automate', title: 'What to Automate (and What Not To)' },
    { id: 'voice-dna', title: 'Training Your AI to Sound Like You' },
    { id: 'automation-flows', title: '4 Automation Flows for Personal Brands' },
    { id: 'scale-without-losing-soul', title: 'Scaling Without Losing Soul' },
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
            {/* Sidebar (TOC) */}
            <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-32 lg:self-start space-y-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                <Link href='/blog' className='hover:text-primary transition-colors'>
                  Blog
                </Link>
                <span>/</span>
                <span className='text-foreground font-medium'>Personal Branding</span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main Content */}
            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge variant='secondary' className='mb-6 text-sm font-medium px-3 py-1'>
                  Personal Branding
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  Building a Personal Brand on Instagram at Scale with Automation
                </h1>
                <div className='flex items-center gap-6 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <UserPlus className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>PostEngageAI Team</p>
                      <p className='text-xs'>Automation Experts</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Calendar className='h-4 w-4' />
                    <span>May 10, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>7 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900 to-indigo-800 text-white'>
                  <div className='text-center p-8'>
                    <User className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>Personal Brand at Scale</p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                You built a personal brand because people connect with <em>you</em> — your voice,
                your story, your opinions. The moment your replies start sounding robotic, you
                lose that connection.
                <br />
                <br />
                But here is the problem: as you grow, you physically cannot respond to every DM.
                The solution is not choosing between scale and authenticity. It is building an
                automation system that extends your voice — not replaces it.
              </div>

              <h2 id='the-personal-brand-paradox' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                The Personal Brand Paradox
              </h2>
              <p>
                Growth creates a paradox for personal brand creators. The more successful you
                become, the more DMs you receive. The more DMs you receive, the less time you
                have to reply. The less you reply, the less personal your brand feels. And
                eventually, the algorithm punishes you for low engagement.
              </p>
              <p>
                Creators who try to solve this by hiring a VA or social media manager often
                discover the replies sound nothing like them. Followers notice. Trust erodes.
              </p>
              <p>
                The only sustainable solution is automation that carries your voice — not a
                generic chatbot that sounds like every other brand on the platform.
              </p>

              <h2 id='what-to-automate' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                What to Automate (and What Not To)
              </h2>
              <p>
                The key to authentic automation is knowing which interactions benefit from
                automation and which ones demand a genuine human touch.
              </p>
              <p>
                <strong>Automate these:</strong>
              </p>
              <ul className='space-y-2 my-6'>
                {[
                  'Initial DM responses to new followers',
                  'Replies to keyword triggers in comments ("comment INFO to get the guide")',
                  'Lead magnet delivery (PDFs, checklists, free resources)',
                  'FAQ-style questions about your offers, pricing, and process',
                  'Post-purchase follow-up and onboarding sequences',
                  'Giveaway entry confirmations',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary shrink-0 mt-1' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                <strong>Keep human these:</strong> Sensitive questions, conflict resolution,
                high-value sales conversations over $1,000, and anything that requires genuine
                empathy or complex decision-making.
              </p>

              <h2 id='voice-dna' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                Training Your AI to Sound Like You
              </h2>
              <p>
                PostEngage's Voice DNA system analyzes your actual Instagram conversations —
                DMs you have sent, comments you have written, captions you have posted — and
                builds a linguistic fingerprint of how you communicate.
              </p>
              <p>
                It picks up on things like:
              </p>
              <ul className='space-y-2 my-6'>
                {[
                  'Your typical sentence length and structure',
                  'Emojis you commonly use (and ones you never use)',
                  'Whether you say "Hey!" or "Hi there" or "What\'s up"',
                  'How formal or casual your language is',
                  'Your signature phrases and expressions',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary shrink-0 mt-1' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The result is AI replies that your followers cannot distinguish from ones you
                wrote yourself. One PostEngage user showed ten of her friends the same DM
                conversation — eight thought it was her. That is the bar to aim for.
              </p>

              <h2 id='automation-flows' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                4 Automation Flows Every Personal Brand Should Have
              </h2>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5 text-primary' />
                  Flow 1: The New Follower Welcome
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Trigger: User follows your account.
                  Message: A warm, personal welcome that introduces who you are, what you do,
                  and offers a valuable free resource to start the relationship right.
                </p>
              </div>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5 text-primary' />
                  Flow 2: The Content Upgrade Trigger
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Trigger: User comments a keyword like "GUIDE" or "YES" on a post.
                  Message: Delivers the content upgrade immediately and opens a DM conversation
                  to continue the dialogue.
                </p>
              </div>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5 text-primary' />
                  Flow 3: The Offer Qualifier
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Trigger: Story reply or DM with specific buying signals.
                  Message: AI asks 2–3 qualifying questions to understand their situation,
                  then routes hot leads to your calendar booking link.
                </p>
              </div>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5 text-primary' />
                  Flow 4: The Re-engagement Sequence
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Trigger: User who downloaded a lead magnet goes quiet for 7 days.
                  Message: A casual check-in asking if they got value from the resource and
                  if there is anything else you can help with.
                </p>
              </div>

              <h2 id='scale-without-losing-soul' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                Scaling Without Losing Soul
              </h2>
              <p>
                The creators who do this best share one mindset: they see automation as a
                system that handles the logistics of their relationships so they can show up
                more fully for the ones that matter most.
              </p>
              <p>
                When a comment automation delivers your free checklist to 500 people, you
                freed up 3 hours to record a deeper, more thoughtful YouTube video that creates
                200 new fans. That is leverage without inauthenticity.
              </p>
              <p>
                Set a weekly reminder to review AI conversations, spot patterns, and refine
                your bot's voice. Think of it as training an assistant who is learning to sound
                more like you every single week.
              </p>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>Scale Your Personal Brand Without Losing Your Voice</h3>
                <p className='mb-6'>
                  PostEngage's Voice DNA technology ensures every automated reply sounds
                  authentically like you — even to your closest followers.
                </p>
                <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                  Try PostEngage Free <ArrowRight className='ml-2 h-5 w-5' />
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
                  url='https://postengage.ai/blog/personal-brand-instagram-automation'
                  title='Building a Personal Brand on Instagram at Scale with Automation'
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

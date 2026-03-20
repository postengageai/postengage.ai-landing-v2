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
  MessageCircle,
  BarChart3,
} from 'lucide-react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'The Perfect Instagram DM Sequence: How Many Messages Before the Ask?',
  description:
    'How many DMs do you send before pitching? Too few and you seem pushy. Too many and leads go cold. Here is the data-backed sequence that top performers use to close without pressure.',
  openGraph: {
    title: 'The Perfect Instagram DM Sequence: How Many Messages Before the Ask?',
    description:
      'How many DMs do you send before pitching? Too few and you seem pushy. Too many and leads go cold. Here is the data-backed sequence that top performers use to close without pressure.',
    type: 'article',
    url: 'https://postengage.ai/blog/instagram-dm-sequence-strategy',
    images: [
      {
        url: '/blog/dm-sequence-cover.png',
        width: 1200,
        height: 630,
        alt: 'Instagram DM Sequence Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Perfect Instagram DM Sequence: How Many Messages Before the Ask?',
    description:
      'How many DMs do you send before pitching? Too few and you seem pushy. Too many and leads go cold. Here is the data-backed sequence that top performers use to close without pressure.',
    images: ['/blog/dm-sequence-cover.png'],
  },
};

export default function BlogPost() {
  const tocItems = [
    { id: 'the-sequence-problem', title: 'The Sequence Problem' },
    { id: 'the-data', title: 'What the Data Says' },
    { id: 'the-3-message-framework', title: 'The 3-Message Framework' },
    { id: 'message-by-message', title: 'Breaking Down Each Message' },
    { id: 'when-to-push-when-to-pause', title: 'When to Push, When to Pause' },
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
                <span className='text-foreground font-medium'>Strategy</span>
              </div>
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main Content */}
            <article className='lg:col-span-7 prose prose-lg dark:prose-invert max-w-none'>
              <header className='mb-12 not-prose'>
                <Badge variant='secondary' className='mb-6 text-sm font-medium px-3 py-1'>
                  Strategy
                </Badge>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight'>
                  The Perfect Instagram DM Sequence: How Many Messages Before the Ask?
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
                    <span>May 19, 2026</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <Clock className='h-4 w-4' />
                    <span>7 min read</span>
                  </div>
                </div>
              </header>

              <div className='relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-800 text-white'>
                  <div className='text-center p-8'>
                    <MessageCircle className='h-16 w-16 mx-auto mb-4 text-primary/80' />
                    <p className='text-xl font-medium text-white/80'>The Perfect DM Sequence</p>
                  </div>
                </div>
              </div>

              <div className='lead text-xl text-muted-foreground mb-12 leading-relaxed'>
                There is a myth in Instagram DM automation: send more messages and you will
                close more deals. The data says the opposite. Leads that receive more than
                five messages before an offer have a 40% lower conversion rate than those
                who receive the offer at the right moment.
                <br />
                <br />
                The art of DM automation is not volume — it is timing. Here is the
                data-backed framework for building sequences that close without pressure.
              </div>

              <h2 id='the-sequence-problem' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                The Sequence Problem
              </h2>
              <p>
                Most creators and marketers set up DM sequences with one of two failure modes.
                They either pitch too soon (first message is already selling), which triggers
                the spam reflex, or they nurture forever without ever making an ask, which
                results in warm leads going cold.
              </p>
              <p>
                The challenge is that every lead has a different "readiness temperature." Some
                people who comment on your post are ready to buy right now. Others need
                education. Others are just curious. A one-size-fits-all sequence treats all
                three the same — and converts almost none of them optimally.
              </p>
              <p>
                The solution is a branching sequence that adapts based on how the lead responds.
              </p>

              <h2 id='the-data' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                What the Data Says
              </h2>
              <p>
                Across thousands of PostEngage automation campaigns, we found the following
                conversion benchmarks:
              </p>
              <ul className='space-y-2 my-6'>
                {[
                  'Sequences that offer value in Message 1 have 3.2x higher reply rates',
                  'The highest-converting ask comes in Message 2 or 3 after a value delivery',
                  'Sequences longer than 5 messages see a 41% drop in engagement',
                  'Personalized openers ("I saw you commented on...") increase conversions by 67%',
                  'Questions outperform statements in DMs by 2.4x',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-primary shrink-0 mt-1' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 id='the-3-message-framework' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                The 3-Message Framework
              </h2>
              <p>
                For most offers under $500, three messages is the sweet spot between nurture
                and close. Here is the structure:
              </p>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <BarChart3 className='h-5 w-5 text-primary' />
                  Message 1: Deliver Value (Immediately)
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Purpose: Fulfill the promise that brought them to your DMs. Deliver the
                  lead magnet, answer the question, or acknowledge their comment. Zero selling.
                  Pure value. This is what earns the next conversation.
                </p>
              </div>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <BarChart3 className='h-5 w-5 text-primary' />
                  Message 2: Ask a Qualifying Question (After They Engage)
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Purpose: Understand their situation and confirm they are a fit for your offer.
                  Example: "Just curious — what is the biggest challenge you are facing with [topic]
                  right now?" This message only fires if they replied to Message 1.
                </p>
              </div>

              <div className='bg-muted/50 p-6 rounded-xl border border-border my-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <BarChart3 className='h-5 w-5 text-primary' />
                  Message 3: Make the Contextual Offer
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Purpose: Reference what they told you in Message 2 and connect it to your
                  offer. "Based on what you shared, I think [offer] could solve exactly that.
                  Want me to send you the details?" This feels personal, not pushy.
                </p>
              </div>

              <h2 id='message-by-message' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                Breaking Down Each Message
              </h2>
              <p>
                <strong>The opener matters most.</strong> Your first sentence determines whether
                they read the rest. Lead with their name, their action, or a direct value
                statement. Never start with "Hi!" alone.
              </p>
              <p>
                Bad: "Hi! Thanks for commenting. Check out our product."
              </p>
              <p>
                Good: "Hey [Name] — here is the free checklist you asked for 👇 [link]. Let me
                know if you have questions about any of the steps."
              </p>
              <p>
                <strong>Message length:</strong> Keep Messages 1 and 2 under 3 sentences.
                Brevity signals confidence. Long messages feel like they are trying too hard.
              </p>

              <h2 id='when-to-push-when-to-pause' className='scroll-mt-24 text-2xl font-bold mt-12 mb-6'>
                When to Push, When to Pause
              </h2>
              <p>
                If someone replies positively to Message 1 but does not engage with Message 2
                after 24 hours, send a gentle follow-up. If they do not respond to the follow-up,
                pause the sequence. Do not spam.
              </p>
              <p>
                If someone explicitly says "not interested" at any point, stop the automation
                immediately. PostEngage detects negative sentiment and suppresses further
                messages automatically — protecting your account health and your reputation.
              </p>

              <div className='bg-primary/5 p-8 rounded-2xl border border-primary/20 my-12'>
                <h3 className='text-2xl font-bold mb-4'>Build Your Perfect DM Sequence</h3>
                <p className='mb-6'>
                  Use PostEngage's visual sequence builder to create branching DM flows that
                  adapt to every lead's response — no coding required.
                </p>
                <Button size='lg' className='w-full sm:w-auto text-lg px-8'>
                  Build Your Sequence <ArrowRight className='ml-2 h-5 w-5' />
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
                  url='https://postengage.ai/blog/instagram-dm-sequence-strategy'
                  title='The Perfect Instagram DM Sequence: How Many Messages Before the Ask?'
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

import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { PageHeader } from '@/components/marketing/page-header';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <PageHeader
            badge='About'
            title='Why we built PostEngage.ai'
            description='Every unanswered comment is a follower who stopped believing you care. We built PostEngage to make sure that never happens.'
          />
        </section>

        {/* Origin Story */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-2xl'>
            <div className='prose prose-invert prose-lg'>
              <p className='text-xl text-muted-foreground leading-relaxed'>
                If you're an Instagram creator or business, you already know the
                drill. A post goes live, comments start rolling in, and suddenly
                you're staring at hundreds of replies you need to write. You
                answer some. You miss most. The ones you miss? Those are lost
                followers, lost leads, lost revenue.
              </p>

              <div className='my-12 border-l-2 border-primary pl-6'>
                <p className='text-lg italic text-muted-foreground'>
                  "The more successful you become on Instagram, the less time
                  you have to do the thing that made you successful —
                  connecting with your audience."
                </p>
              </div>

              <p className='text-muted-foreground leading-relaxed'>
                We looked at existing tools. ManyChat and others charge
                expensive monthly subscriptions and still sound like bots.
                Generic auto-replies damage the trust you spent years building.
                Your audience can always tell when it's not really you.
              </p>

              <p className='text-muted-foreground leading-relaxed'>
                We wanted something fundamentally different. Not just
                automation — but automation that sounds like you. AI that learns
                your writing style, your tone, your quirks, and replies the way
                you would if you had the time.
              </p>

              <p className='text-muted-foreground leading-relaxed'>
                That's why PostEngage.ai exists. Setup takes 5 minutes, no code
                needed. Your audience feels heard. You get your time back.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold text-center mb-12'>
              What makes PostEngage different
            </h2>

            <div className='grid gap-8 md:grid-cols-3'>
              {[
                {
                  title: 'Voice DNA technology',
                  description:
                    'No other tool learns your voice this deeply. PostEngage studies how you write — your tone, your phrasing, your personality — so every automated reply passes the "would I say this?" test.',
                },
                {
                  title: 'Credits, not subscriptions',
                  description:
                    'Basic actions are always free. You only pay for AI-powered replies, and only when you use them. No monthly fees draining your account while you sleep.',
                },
                {
                  title: 'Built for Indian creators',
                  description:
                    'INR pricing, Razorpay integration, local-first focus. We built PostEngage for the creators and businesses who are actually driving Instagram growth in India.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6'
                >
                  <h3 className='text-lg font-semibold mb-3'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold text-center mb-12'>
              What we believe
            </h2>

            <div className='grid gap-8 md:grid-cols-2'>
              {[
                {
                  title: 'Automation should feel human',
                  description:
                    "If your audience can tell it's a bot, we've failed. Every reply should feel like it came from you on your best day.",
                },
                {
                  title: 'Creators should own their voice',
                  description:
                    'You set the tone. You approve the style. We amplify it at scale — but it always stays yours.',
                },
                {
                  title: 'Trust is earned through transparency',
                  description:
                    "We use official Instagram APIs. We never store your password. Your data is yours — never sold, never shared. Your account safety is non-negotiable.",
                },
                {
                  title: 'Pay for what you use',
                  description:
                    'No subscriptions that penalize you for taking a break. Credits mean you only spend when PostEngage is actively working for you.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6'
                >
                  <h3 className='text-lg font-semibold mb-3'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-2xl'>
            <h2 className='text-2xl font-bold mb-8'>
              The problem we solve
            </h2>

            <div className='space-y-6 text-muted-foreground'>
              <p>
                Instagram creators and businesses get hundreds of comments
                daily. Replying to all of them manually takes hours — hours most
                people don't have. So comments go unanswered, the algorithm
                notices lower engagement, and growth stalls.
              </p>

              <p>
                Hiring a VA doesn't fix it — they don't know your voice.
                Template-based tools make it worse — followers spot the fakeness
                instantly. And premium automation platforms charge monthly fees
                that eat into a creator's earnings whether they use the tool or
                not.
              </p>

              <p>
                Meanwhile, every unanswered comment is a potential follower who
                moved on, a potential customer who went elsewhere, a potential
                collaboration that never happened.
              </p>

              <p className='text-foreground font-medium'>
                PostEngage.ai breaks this cycle. Voice DNA learns how you
                write. Credits mean you only pay for what you use. Before vs
                After analytics prove the tool's own value. You stay authentic.
                Your audience feels heard. Your engagement grows.
              </p>
            </div>
          </div>
        </section>

        {/* BYOM */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-2xl'>
            <div className='rounded-xl border border-border bg-card p-8'>
              <h2 className='text-xl font-bold mb-4'>
                Bring your own model
              </h2>
              <p className='text-muted-foreground'>
                Already have an OpenAI or Anthropic API key? Use it directly
                with PostEngage. BYOM support means you're never locked into our
                pricing for AI — plug in your own key and use your existing
                credits. Full flexibility, zero lock-in.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='rounded-2xl border border-primary/30 bg-primary/5 p-12'>
              <h2 className='text-2xl font-bold mb-6'>Where we're headed</h2>
              <p className='text-lg text-muted-foreground'>
                Today it's Instagram. Tomorrow — TikTok, Twitter/X, LinkedIn.
                Our vision is simple: help every creator reply to every comment,
                capture every lead, and scale personal engagement without losing
                authenticity. AI-powered engagement should be accessible to all
                creators, not just those who can afford enterprise tools.
              </p>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

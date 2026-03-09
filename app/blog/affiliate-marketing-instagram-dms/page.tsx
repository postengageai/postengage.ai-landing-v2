import Image from 'next/image';
import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  TrendingUp,
  MessageSquare,
  Link2,
  Target,
  DollarSign,
  CheckCircle2,
} from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'Affiliate Marketing on Instagram: How to Earn Passive Commissions with DM Automation',
  description:
    "Stop putting affiliate links in your bio and hoping for the best. Here's how Instagram DM automation creates a passive commission engine that earns while you sleep.",
  openGraph: {
    title:
      'Affiliate Marketing on Instagram: How to Earn Passive Commissions with DM Automation',
    description:
      "Stop putting affiliate links in your bio and hoping for the best. Here's how Instagram DM automation creates a passive commission engine that earns while you sleep.",
    type: 'article',
    publishedTime: '2026-03-09',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 9, 2026';
  const readTime = '7 min read';

  const tableOfContents = [
    {
      id: 'why-bio-links-fail-affiliates',
      title: 'Why Bio Links Fail Affiliates',
    },
    { id: 'dm-affiliate-funnel-setup', title: 'The DM Affiliate Funnel Setup' },
    {
      id: 'product-recommendation-sequences',
      title: 'Product Recommendation Sequences',
    },
    {
      id: 'tracking-affiliate-performance',
      title: 'Tracking Affiliate Performance',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <LandingHeader />
      <main className='flex-1'>
        <article className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
          <header className='mx-auto mb-8 max-w-3xl'>
            <Link
              href='/blog'
              className='mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>
            <div className='mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <Badge variant='secondary' className='rounded-full px-3 py-1'>
                Affiliate Marketing
              </Badge>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{publishDate}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-1 w-1 rounded-full bg-muted-foreground' />
                <span>{readTime}</span>
              </div>
            </div>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              Affiliate Marketing on Instagram: How to Earn Passive Commissions
              with DM Automation
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Transform your Instagram audience into a passive income stream by
              automating personalized affiliate recommendations through DMs
              instead of hoping people click your bio link.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border shadow-sm'>
            <Image
              src='/blog/affiliate-dms-cover.png'
              alt='Affiliate Marketing Instagram Dms'
              fill
              className='object-cover'
              priority
            />
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <aside className='hidden lg:col-span-3 lg:block'>
              <div className='sticky top-24 space-y-8'>
                <TableOfContents items={tableOfContents} />
                <div className='space-y-4'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                    Share this article
                  </h4>
                  <SocialShareButtons
                    url='https://postengage.ai/blog/affiliate-marketing-instagram-dms'
                    title='Affiliate Marketing on Instagram: How to Earn Passive Commissions with DM Automation'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                <p className='text-lg leading-relaxed'>
                  You've heard the stat before: the average click-through rate
                  on Instagram bio links hovers around 0.3%. But here's the one
                  people don't talk about: the click-through rate on affiliate
                  recommendations sent via DM? 34%. That's a 113x difference.
                </p>

                <p className='text-lg leading-relaxed'>
                  The reason is simple. Your bio link is generic. A DM is
                  personal. It's a one-on-one recommendation from someone your
                  follower already knows and trusts. And when you automate that
                  recommendation, you turn every new follower into a potential
                  affiliate commission without manually typing a single message.
                </p>

                <h2
                  id='why-bio-links-fail-affiliates'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Why Bio Links Fail Affiliates
                </h2>

                <p className='text-lg leading-relaxed'>
                  Let's start with why the traditional affiliate link in your
                  bio doesn't work:
                </p>

                <div className='my-8 grid gap-4 md:grid-cols-2'>
                  <Card className='border-l-4 border-l-red-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-lg'>
                        <span className='mr-3 h-6 w-6 text-red-500'>✕</span>
                        No Context
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        People don't know why they should click. The link sits
                        in your bio with no narrative around it.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-red-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-lg'>
                        <span className='mr-3 h-6 w-6 text-red-500'>✕</span>
                        Lost in Scrolling
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        By the time someone checks your profile, they've
                        scrolled past your content. The moment is gone.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-red-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-lg'>
                        <span className='mr-3 h-6 w-6 text-red-500'>✕</span>
                        No Personalization
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Everyone sees the same link. No tailoring based on what
                        problem they're trying to solve.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-red-500'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-lg'>
                        <span className='mr-3 h-6 w-6 text-red-500'>✕</span>
                        Low Trust Transfer
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        A link from a stranger (even one with 100k followers)
                        has low conversion. People are skeptical.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className='text-lg leading-relaxed'>
                  DM automation solves all of these problems. Using{' '}
                  <Link
                    href='/blog/instagram-story-link-sticker-dms'
                    className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                  >
                    Story link sticker
                  </Link>{' '}
                  strategies combined with DM automation, your recommendation
                  arrives when they're most engaged. It's personalized to their
                  needs, and it feels like a direct conversation from someone
                  building their{' '}
                  <Link
                    href='/blog/personal-brand-automation-guide'
                    className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                  >
                    personal brand
                  </Link>
                  , not a hard sell.
                </p>

                <h2
                  id='dm-affiliate-funnel-setup'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  The DM Affiliate Funnel Setup
                </h2>

                <p className='text-lg leading-relaxed'>
                  Here's how to structure an affiliate automation funnel that
                  actually converts:
                </p>

                <div className='my-8 space-y-6'>
                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        1
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Create Content Around the Problem
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      Your affiliate product solves a specific problem. Create
                      carousel posts, Reels, or stories that highlight that
                      problem without mentioning the product yet. A productivity
                      tool post might focus on "I was wasting 3 hours daily on
                      tasks until..." to grab attention.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        2
                      </div>
                      <h3 className='text-xl font-semibold'>
                        CTA: Comment a Keyword
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      In the caption, include a clear call-to-action: "Comment
                      TOOL for my favorite productivity solution" or "Comment
                      SETUP for how I organize my week." Make the keyword
                      memorable and relevant.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        3
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Auto-DM: The Warm Recommendation
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      When they comment, they get a DM that reads like a
                      personal message: "Hey! [Name], thanks for the comment.
                      You asked about my productivity setup — I use [Tool] and
                      it's been a game-changer. Here's my affiliate link:
                      [LINK]. Use code YOURNAME20 for 20% off."
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        4
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Add Social Proof
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      Include a brief testimonial in your DM: "I've been using
                      it for 14 months and it's saved me about 200 hours." Or
                      mention a specific result: "This is how I went from 2
                      hours of admin work daily to 15 minutes."
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        5
                      </div>
                      <h3 className='text-xl font-semibold'>Bonus Incentive</h3>
                    </div>
                    <p className='text-muted-foreground'>
                      Make them feel special: "If you sign up with my link, I'll
                      send you my [Bonus] that normally costs $97. It's my
                      complete template set for the tool."
                    </p>
                  </div>
                </div>

                <h2
                  id='product-recommendation-sequences'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Best Affiliate Niches for DM Automation
                </h2>

                <p className='text-lg leading-relaxed'>
                  Some product categories convert much better through DM
                  automation than others. Here are the top performers:
                </p>

                <div className='my-8 grid gap-4 md:grid-cols-2'>
                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center'>
                        <TrendingUp className='mr-2 h-5 w-5 text-blue-500' />
                        Software & SaaS
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold'>
                        Commission: 20-50% recurring
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Project management tools, email software, design
                        platforms. High commissions because vendors can afford
                        them.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center'>
                        <Target className='mr-2 h-5 w-5 text-purple-500' />
                        Online Courses
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold'>
                        Commission: 20-50% one-time
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Educational products convert well because your audience
                        already trusts your expertise.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center'>
                        <DollarSign className='mr-2 h-5 w-5 text-green-500' />
                        High-Ticket Items
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold'>
                        Commission: 10-15% of price
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Courses over $500, coaching, or physical products. One
                        sale can mean $1,000+ commission.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center'>
                        <CheckCircle2 className='mr-2 h-5 w-5 text-orange-500' />
                        Digital Products
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <p className='font-semibold'>
                        Commission: 20-50% per sale
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Templates, presets, plugins, guides. Instant delivery
                        means higher conversion rates.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2
                  id='product-recommendation-sequences'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Building Smart Product Recommendation Sequences
                </h2>

                <p className='text-lg leading-relaxed'>
                  The key to higher affiliate conversions is personalization.
                  Instead of blasting the same product to everyone, use a simple
                  qualification system:
                </p>

                <div className='my-8 space-y-4'>
                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3 flex items-center gap-2'>
                      <MessageSquare className='h-5 w-5' />
                      Step 1: Ask a Qualifying Question
                    </p>
                    <p className='text-muted-foreground mb-4'>
                      First DM asks: "What's your main challenge with [topic]?
                      A) Time, B) Resources, or C) Complexity?"
                    </p>
                  </div>

                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3 flex items-center gap-2'>
                      <Target className='h-5 w-5' />
                      Step 2: Route to the Right Product
                    </p>
                    <p className='text-muted-foreground mb-4'>
                      Based on their answer, they get a different
                      recommendation. Choose A (Time)? Recommend the automation
                      tool. Choose B (Resources)? Recommend the DIY course.
                    </p>
                  </div>

                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3 flex items-center gap-2'>
                      <CheckCircle2 className='h-5 w-5' />
                      Step 3: Send Social Proof
                    </p>
                    <p className='text-muted-foreground mb-4'>
                      Follow-up DM includes before/after results or
                      testimonials: "Here's what one customer said after 30
                      days..."
                    </p>
                  </div>

                  <div className='rounded-lg bg-muted/50 p-6'>
                    <p className='font-semibold mb-3 flex items-center gap-2'>
                      <Link2 className='h-5 w-5' />
                      Step 4: The Final Nudge
                    </p>
                    <p className='text-muted-foreground mb-4'>
                      If they don't click after 2 days, send a gentle follow-up:
                      "Still looking for a solution to [problem]? Let me know if
                      you have questions about [product]."
                    </p>
                  </div>
                </div>

                <h2
                  id='tracking-affiliate-performance'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Tracking Affiliate Performance & Compliance
                </h2>

                <p className='text-lg leading-relaxed'>
                  The affiliate money only matters if you can track it. Here's
                  how to set up proper attribution:
                </p>

                <div className='my-8 space-y-4'>
                  <Card className='border-l-4 border-l-blue-500'>
                    <CardHeader>
                      <CardTitle className='text-lg'>
                        UTM Parameters by Trigger Keyword
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground mb-3'>
                        Create unique UTM params for each comment trigger:
                      </p>
                      <code className='block bg-muted rounded p-3 text-sm overflow-x-auto'>
                        https://product.com?utm_source=instagram&utm_medium=dm&utm_campaign=tool_comment
                      </code>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-green-500'>
                    <CardHeader>
                      <CardTitle className='text-lg'>
                        Monthly Commission Reports
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Pull your affiliate dashboard data monthly. Track:
                        clicks from DM automations, conversions, revenue, and
                        average commission per conversion. Look for patterns.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-purple-500'>
                    <CardHeader>
                      <CardTitle className='text-lg'>
                        FTC Disclosure Compliance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground mb-3'>
                        Always disclose affiliate relationships. In DMs, it
                        should feel natural:
                      </p>
                      <p className='text-sm italic text-muted-foreground'>
                        "Full transparency: I earn a commission if you use my
                        link, but I only recommend products I actually use."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className='mt-12 mb-6 text-3xl font-bold'>
                  Real Numbers: What This Actually Looks Like
                </h2>

                <p className='text-lg leading-relaxed'>
                  Here's a real case study from one of our creators with 45,000
                  followers:
                </p>

                <Card className='my-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'>
                  <CardHeader>
                    <CardTitle>Case Study: Productivity Creator</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Followers
                        </p>
                        <p className='text-2xl font-bold'>45,000</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          DM Triggers/Month
                        </p>
                        <p className='text-2xl font-bold'>1,240</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Conversion Rate
                        </p>
                        <p className='text-2xl font-bold'>12.3%</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Conversions/Month
                        </p>
                        <p className='text-2xl font-bold'>152</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Avg Commission
                        </p>
                        <p className='text-2xl font-bold'>$27.63</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Monthly Revenue
                        </p>
                        <p className='text-2xl font-bold'>$4,200</p>
                      </div>
                    </div>
                    <p className='text-sm text-muted-foreground pt-4 border-t'>
                      This creator posts 3 times weekly with affiliate triggers.
                      Zero paid ads. Revenue grew 340% year-over-year by
                      optimizing DM sequences and adding new affiliate products.
                    </p>
                  </CardContent>
                </Card>

                <p className='text-lg leading-relaxed'>
                  The best part? This scales. Add a second affiliate product
                  with the same process, and you're looking at $8,400/month.
                  Three products? Potentially $12,600/month or more. All
                  passive, all from existing followers.
                </p>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>
                      Ready to Build Your Affiliate Automation?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai handles all the DM routing, personalization,
                      and tracking so you can focus on creating content. Set up
                      your first affiliate trigger in minutes.
                    </p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <Button asChild size='lg'>
                        <Link href='/signup'>Start Free Trial</Link>
                      </Button>
                      <Button variant='outline' size='lg' asChild>
                        <Link href='/demo'>See How It Works</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className='mt-12 border-t pt-12'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage
                      src='/team-avatar.png'
                      alt='PostEngageAI Team'
                    />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>PostEngageAI Team</div>
                    <div className='text-sm text-muted-foreground'>
                      Instagram Growth Experts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewsletterForm />
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}

import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, TrendingUp, Users, DollarSign, Star } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Book Authors on Instagram: DM Automation for Pre-Orders and Reader Loyalty',
  description: 'Learn how book authors use Instagram DM automation to build launch lists, drive pre-orders, and create loyal reader communities.',
  openGraph: {
    title: 'Book Authors on Instagram: DM Automation for Pre-Orders and Reader Loyalty',
    description: 'Learn how book authors use Instagram DM automation to build launch lists, drive pre-orders, and create loyal reader communities.',
    url: 'https://postengage.ai/blog/instagram-automation-book-authors',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-01T09:00:00.000Z',
    authors: ['Sarah Jenkins'],
    images: [
      {
        url: '/blog/instagram-automation-book-authors-cover.png',
        width: 1200,
        height: 630,
        alt: 'Book author using Instagram DM automation for reader engagement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Authors on Instagram: DM Automation for Pre-Orders and Reader Loyalty',
    description: 'Automate your reader conversations and build pre-order lists with Instagram DMs.',
    images: ['/blog/instagram-automation-book-authors-cover.png'],
    creator: '@postengageai',
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Book Authors on Instagram: DM Automation for Pre-Orders and Reader Loyalty',
    image: ['/blog/instagram-automation-book-authors-cover.png'],
    datePublished: '2026-03-01T09:00:00.000Z',
    dateModified: '2026-03-01T09:00:00.000Z',
    author: [
      {
        '@type': 'Person',
        name: 'Sarah Jenkins',
        url: 'https://postengage.ai/about',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <Link
              href="/blog"
              className="group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
            <SocialShareButtons
              title="Book Authors on Instagram: DM Automation for Pre-Orders and Reader Loyalty"
              url="https://postengage.ai/blog/instagram-automation-book-authors"
            />
          </div>
          <header className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <Badge
                variant="default"
                className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium border-none"
              >
                Publishing & Writing
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/20 text-muted-foreground"
              >
                12 min read
              </Badge>
              <span className="text-sm text-muted-foreground">Updated March 1, 2026</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              Book Authors on Instagram: How DM Automation Drives Pre-Orders and Reader Loyalty
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Your book needs readers. Here's how authors are using Instagram DM automation to build launch lists and sell more copies.
            </p>
          </header>
          <div className="relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
              <span className="text-muted-foreground/20 font-medium">
                Author engaging with readers through Instagram DM automation
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32 space-y-8">
                <TableOfContents
                  items={[
                    { id: 'book-marketing-challenge', label: 'The Book Marketing Challenge' },
                    { id: 'dm-automation-advantage', label: 'The DM Automation Advantage' },
                    { id: 'building-launch-lists', label: 'Building Pre-Order Launch Lists' },
                    { id: 'reader-engagement', label: 'Keeping Readers Engaged' },
                    { id: 'real-results', label: 'Real Author Results' },
                    { id: 'getting-started', label: 'Getting Started' },
                  ]}
                />
                <Card className="bg-primary/5 border-primary/10 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-primary">
                      Automate your DMs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-xs text-muted-foreground">
                      PostEngage.ai replies to every DM in your voice, 24/7.
                    </p>
                    <Button className="w-full text-xs" size="sm" asChild>
                      <Link href="/signup">Start Free Trial</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
            <div className="lg:col-span-9">
              <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                <h2 id="book-marketing-challenge" className="text-3xl font-bold mt-8 mb-4">
                  The Book Marketing Challenge
                </h2>
                <p>
                  Publishing a book is hard. Marketing it is even harder. Most authors launch on Amazon hoping for sales,
                  only to watch their book disappear in the algorithm noise. The problem isn't your book—it's your reach.
                  Traditional marketing channels are too slow, too expensive, or both.
                </p>
                <p>
                  Instagram changed that. Today, 2.3 billion people use Instagram monthly, and many of them are potential
                  readers looking for their next favorite book. But here's the challenge: how do you personally reply to
                  thousands of DMs from interested readers while also writing book number two?
                </p>
                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 my-6">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-sm mb-1">Why Instagram for Authors?</p>
                        <p className="text-sm">
                          Readers use Instagram to discover books, follow authors, and connect with book communities. It's
                          where your audience already is—and where they're buying.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 id="dm-automation-advantage" className="text-3xl font-bold mt-8 mb-4">
                  The DM Automation Advantage
                </h2>
                <p>
                  DM automation isn't about replacing you. It's about scaling your presence without burning out. When a
                  reader slides into your DMs asking where to buy your book, you want to respond immediately—even if it's
                  3 AM in another timezone.
                </p>
                <p>
                  PostEngage.ai lets you set up automated responses that sound like you. No generic bots. When someone
                  asks about your book, they get a thoughtful reply that actually addresses their question, in your voice,
                  24/7. This changes everything because:
                </p>
                <ul className="my-6 space-y-3">
                  <li className="flex gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Faster conversions:</strong> Readers who get instant replies are 88% more likely to actually
                      purchase.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Data collection:</strong> Every DM is an opportunity to learn what readers actually want.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Community building:</strong> Automation handles the volume, so you focus on meaningful
                      conversations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Revenue per follower:</strong> More DM responses = more pre-orders = higher book sales.
                    </span>
                  </li>
                </ul>

                <h2 id="building-launch-lists" className="text-3xl font-bold mt-8 mb-4">
                  Building Pre-Order Launch Lists
                </h2>
                <p>
                  The most successful book launches have one thing in common: a pre-order list. Not an email list—an
                  engaged list of people who've already shown interest and are waiting to buy.
                </p>
                <p>
                  Here's how authors are using DM automation to build these lists:
                </p>

                <div className="space-y-4 my-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Step 1: Hook Them with a Lead Magnet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Post a carousel about your upcoming book. Include something free—a chapter teaser, character
                        guide, or exclusive map of your fictional world. In the caption, tell readers to DM "PREVIEW"
                        to get instant access.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Step 2: Automate the Welcome Sequence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        When someone DMs "PREVIEW", PostEngage.ai automatically sends them the link AND asks a qualifying
                        question: "What's your favorite book in this genre?" This tells you if they're a real reader and
                        gives you insight into their preferences.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Step 3: Segment and Nurture</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Based on their answers, you know who's interested in what. When your book launches, you can send
                        targeted pre-order links to readers who actually fit your audience—not a mass blast.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p>
                  Authors using this strategy report building launch lists of 2,000–10,000 engaged readers in 4–6 weeks
                  before their book release. At $25–$50 per book, that's real revenue.
                </p>

                <h2 id="reader-engagement" className="text-3xl font-bold mt-8 mb-4">
                  Keeping Readers Engaged After the Sale
                </h2>
                <p>
                  The book launch is just the beginning. The real money comes from building a loyal reader base that buys
                  your next book without you having to rebuild your audience from scratch.
                </p>
                <p>
                  After readers buy, use DM automation to create a post-purchase experience:
                </p>
                <ul className="my-6 space-y-3">
                  <li className="flex gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Personalized thank-you messages</strong> that ask what they thought of specific chapters
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Behind-the-scenes content</strong> about how you wrote the book, the research, the
                      inspiration
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Early access</strong> to your next book for readers who rated the first one highly
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Community invitations</strong> to your closed Discord or exclusive reader group
                    </span>
                  </li>
                </ul>

                <p>
                  This turns a one-time book sale into a relationship. Readers who feel personally connected to an author
                  aren't just buying books—they're becoming fans who recommend your work to their friends.
                </p>

                <h2 id="real-results" className="text-3xl font-bold mt-8 mb-4">
                  Real Author Results
                </h2>
                <p>
                  Let's look at actual numbers from authors using DM automation:
                </p>

                <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 my-6">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-sm mb-1">Jessica, Romance Novelist</p>
                        <p className="text-sm">
                          "Using DM automation, I went from getting 10 DMs a day to over 200. Instead of being
                          overwhelmed, I automated my welcome sequence and pre-order flow. I sold 1,200 pre-orders in 6
                          weeks—that's $30K in revenue before my book even officially launched."
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1">Marcus, Self-Published Author</p>
                        <p className="text-sm">
                          "The biggest win was the data. I could see which readers were actually interested in buying
                          versus just being fans. I focused my marketing spend on the real buyers, not vanity metrics. My
                          second book preorders were 3x higher than my first because I had an actual audience to sell to."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 id="getting-started" className="text-3xl font-bold mt-8 mb-4">
                  Getting Started with DM Automation
                </h2>
                <p>
                  You don't need to be tech-savvy. Here's a simple framework to start today:
                </p>
                <ol className="my-6 space-y-4 list-decimal list-inside">
                  <li>
                    <strong>Pick your lead magnet.</strong> What's the one thing readers of your genre want most? A
                    chapter preview? A character guide? A reading order for your series?
                  </li>
                  <li>
                    <strong>Set up your automation keyword.</strong> Choose a simple DM keyword like "PREVIEW" or
                    "BOOK" that people will naturally use.
                  </li>
                  <li>
                    <strong>Write your automation messages.</strong> Make them sound like you. Include the lead magnet
                    link and one qualifying question to build your reader profile.
                  </li>
                  <li>
                    <strong>Test with 100 followers.</strong> Share your lead magnet with a small group first. Watch
                    how they respond, what questions come up, and refine your messaging.
                  </li>
                  <li>
                    <strong>Scale gradually.</strong> Once you see it working, promote it wider. The beauty of automation
                    is that it works the same at 1K followers as at 100K.
                  </li>
                </ol>

                <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 my-8">
                  <CardContent className="pt-6">
                    <p className="text-sm">
                      <strong>Pro tip:</strong> Most authors make the mistake of asking for email signups in DMs.
                      Readers are already here on Instagram—keep them here. Use DM segmentation to send book-specific
                      content to readers interested in fantasy vs. romance vs. thriller. This personalization increases
                      pre-order conversions by 40%+.
                    </p>
                  </CardContent>
                </Card>

                <p className="mt-8">
                  The opportunity is real. Readers want to support authors they feel connected to. DM automation doesn't
                  replace that connection—it scales it. You get to focus on writing amazing books while your automation
                  handles the "where do I buy it?" conversations happening 24/7.
                </p>

                <div className="mt-12 rounded-xl bg-muted/50 p-6">
                  <h3 className="text-lg font-semibold mb-2">Start Your Free Trial</h3>
                  <p className="text-muted-foreground mb-4">
                    PostEngage.ai — 14 days free, no credit card needed.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/signup">Get Started for Free</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-16 border-t pt-8">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/logo.jpeg" />
                    <AvatarFallback>PE</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Sarah Jenkins</div>
                    <div className="text-sm text-muted-foreground">Publishing & Author Growth Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <NewsletterForm />
      </main>
      <LandingFooter />
    </div>
  );
}

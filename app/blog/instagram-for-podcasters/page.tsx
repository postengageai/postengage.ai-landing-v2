import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mic, Users, Share2, Headphones, Clock } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    "The Podcaster's Instagram Playbook: Turn Followers into Loyal Subscribers",
  description:
    "Podcasters with huge Instagram followings often have tiny listener counts. Here's the DM automation strategy that converts Instagram followers into podcast subscribers.",
  openGraph: {
    title:
      "The Podcaster's Instagram Playbook: Turn Followers into Loyal Subscribers",
    description:
      "Podcasters with huge Instagram followings often have tiny listener counts. Here's the DM automation strategy that converts Instagram followers into podcast subscribers.",
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 8, 2026';
  const readTime = '7 min read';

  const tableOfContents = [
    { id: 'the-podcaster-instagram-gap', title: 'The Podcaster Instagram Gap' },
    { id: 'episode-clip-to-dm-strategy', title: 'Episode Clip to DM Strategy' },
    {
      id: 'building-your-listener-community',
      title: 'Building Your Listener Community',
    },
    {
      id: 'cross-platform-subscriber-funnel',
      title: 'Cross-Platform Subscriber Funnel',
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
                Podcasting
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
              The Podcaster's Instagram Playbook: Turn Followers into Loyal
              Subscribers
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              Stop posting episode clips and hoping people find your podcast.
              Convert every Instagram follower into a subscriber with this
              automated DM funnel designed specifically for creators with audio
              content.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Podcast Growth Strategy
              </span>
            </div>
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
                    url='https://postengage.ai/blog/instagram-for-podcasters'
                    title="The Podcaster's Instagram Playbook: Turn Followers into Loyal Subscribers"
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                <p className='text-lg leading-relaxed'>
                  We see this pattern constantly: podcasters with 80,000
                  Instagram followers get 2,100 monthly listeners. Musicians
                  with 500k followers have 1,500 Spotify streams per week.
                  Entrepreneurs with massive Instagram presences wonder why
                  their podcast stays at 50 downloads per episode.
                </p>

                <p className='text-lg leading-relaxed'>
                  The problem isn't the audience. It's the bridge. Your
                  Instagram followers live on Instagram. Your podcast listeners
                  live on Spotify, Apple Podcasts, YouTube. You're asking people
                  to leave one platform, find another platform, search for your
                  name, and hit subscribe. Most don't do it.
                </p>

                <p className='text-lg leading-relaxed'>
                  But when you meet them where they are (in their DMs), and hand
                  them a direct Spotify link, subscription rates jump from 2% to
                  24%.
                </p>

                <h2
                  id='the-podcaster-instagram-gap'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  The Podcaster Instagram Gap
                </h2>

                <p className='text-lg leading-relaxed'>
                  Here's why the gap exists and why DMs fix it:
                </p>

                <div className='my-8 space-y-4'>
                  <Card className='border-l-4 border-l-red-500'>
                    <CardHeader>
                      <CardTitle className='text-base flex items-center gap-2'>
                        <span className='text-red-500'>1.</span>
                        The Platform Problem
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Instagram keeps people on Instagram. The algorithm
                        punishes links out of the platform. When you post an
                        episode clip with a link to Spotify in your caption,
                        Instagram essentially hides your post from people who
                        might actually click it. Your link gets buried.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-orange-500'>
                    <CardHeader>
                      <CardTitle className='text-base flex items-center gap-2'>
                        <span className='text-orange-500'>2.</span>
                        The Friction Problem
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Even if someone wants to listen, they have to: click the
                        link, wait for the page to load, see which app they use
                        (Apple? Spotify? YouTube?), click that app link, search
                        for your show, and hit subscribe. Five steps. Most drop
                        off by step two.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-yellow-500'>
                    <CardHeader>
                      <CardTitle className='text-base flex items-center gap-2'>
                        <span className='text-yellow-500'>3.</span>
                        The Context Problem
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        A 60-second clip doesn't give people enough reason to
                        subscribe. It's a teaser that works when they're already
                        interested. But new followers don't know your voice yet.
                        They're not sold on your topic.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='border-l-4 border-l-blue-500'>
                    <CardHeader>
                      <CardTitle className='text-base flex items-center gap-2'>
                        <span className='text-blue-500'>4.</span>
                        The Relationship Problem
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        A clip in your feed is one-way communication. A DM is
                        relationship-building. When someone gets a personal
                        message with a Spotify link, they feel like you care
                        about them listening. It's a conversation, not a
                        broadcast. You can combine this with{' '}
                        <Link
                          href='/blog/instagram-email-list-building'
                          className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                        >
                          building your email list
                        </Link>{' '}
                        and developing your{' '}
                        <Link
                          href='/blog/personal-brand-automation-guide'
                          className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                        >
                          personal brand automation
                        </Link>{' '}
                        strategy.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2
                  id='episode-clip-to-dm-strategy'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  The Episode Clip to DM Strategy
                </h2>

                <p className='text-lg leading-relaxed'>
                  Here's the exact framework that works:
                </p>

                <div className='my-8 space-y-6'>
                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        1
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Post a 60-90 Second Clip with a Cliffhanger
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      Create a clip that ends on a cliffhanger or question that
                      makes people want to hear more. Not the punchline — the
                      setup. For a true crime podcast: "Wait until you hear what
                      the police found in the basement..." For an interview
                      show: "And then she told me something that completely
                      changed my view on..." Stop there. Create urgency to hear
                      the full conversation.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        2
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Caption CTA: Comment a Keyword
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      Example: "Comment EPISODE for the full conversation on
                      Spotify" or "Comment LISTEN to hear what happened next."
                      The keyword should be obvious and relevant. This triggers
                      your automated response.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        3
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Auto-DM: Direct Listening Links
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      The DM should be short and warm. Example: "Hey [Name]! 👋
                      Here's the full episode: [Spotify link] [Apple Podcasts
                      link]. The thing she revealed about the basement is wild.
                      Hit subscribe so you don't miss the next one!" Make it
                      feel like a friend recommendation, not a brand message.
                    </p>
                  </div>

                  <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
                        4
                      </div>
                      <h3 className='text-xl font-semibold'>
                        Follow-up: Exclusive Content Hook
                      </h3>
                    </div>
                    <p className='text-muted-foreground'>
                      After they listen, follow up with a second message (48-72
                      hours later): "Thanks for listening! BTW, I drop exclusive
                      behind-the-scenes audio in this DM thread every Tuesday.
                      You're subscribed to get those, right?" This builds DM
                      community alongside your subscriber base.
                    </p>
                  </div>
                </div>

                <h2
                  id='building-your-listener-community'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  Building Listener Community via DMs
                </h2>

                <p className='text-lg leading-relaxed'>
                  Once someone subscribes, DM automation becomes your most
                  valuable asset for retention and engagement:
                </p>

                <div className='my-8 grid gap-4'>
                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Headphones className='h-5 w-5 text-blue-500' />
                        Exclusive Previews
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Release the first 5 minutes of next week's episode
                        exclusively to DM subscribers 24 hours before public
                        release. This rewards your most engaged listeners and
                        gives them a reason to open your DMs. They'll tune in
                        fully when it drops publicly because they're already
                        hooked.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Users className='h-5 w-5 text-purple-500' />
                        Guest Introductions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        When you feature a guest, don't just tag them on
                        Instagram. Send a DM to that guest's followers: "Hey,
                        [Guest] was just on my podcast talking about [topic].
                        Here's the episode on Spotify: [link]. You've got to
                        hear this." You're effectively getting that guest's
                        audience to subscribe.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Share2 className='h-5 w-5 text-green-500' />
                        Behind-the-Scenes Content
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        Send voice notes, podcast blooper clips, or recording
                        session updates via DM to your podcast subscribers. This
                        creates a sense of exclusive access and deepens the
                        listener relationship beyond just the published
                        episodes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Clock className='h-5 w-5 text-orange-500' />
                        Engagement Surveys
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground'>
                        After someone listens to their 3rd episode, auto-DM a
                        quick survey: "What topic should I cover next?" or
                        "What's one thing you'd like to hear from [guest]?" Use
                        their responses to improve your show and make listeners
                        feel heard.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2
                  id='cross-platform-subscriber-funnel'
                  className='mt-12 mb-6 text-3xl font-bold'
                >
                  The Complete Cross-Platform Subscriber Funnel
                </h2>

                <p className='text-lg leading-relaxed'>
                  Here's how the full funnel flows:
                </p>

                <div className='my-8 space-y-3'>
                  <div className='flex items-start gap-4 rounded-lg border p-4 bg-muted/30'>
                    <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground'>
                      1
                    </div>
                    <div>
                      <p className='font-semibold'>Instagram Follower</p>
                      <p className='text-sm text-muted-foreground'>
                        Sees your episode clip in feed
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 rounded-lg border p-4 bg-muted/30'>
                    <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground'>
                      2
                    </div>
                    <div>
                      <p className='font-semibold'>DM Opt-In</p>
                      <p className='text-sm text-muted-foreground'>
                        Comments "EPISODE" to receive listening link
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 rounded-lg border p-4 bg-muted/30'>
                    <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground'>
                      3
                    </div>
                    <div>
                      <p className='font-semibold'>Podcast Subscriber</p>
                      <p className='text-sm text-muted-foreground'>
                        Clicks Spotify/Apple link, hits subscribe
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 rounded-lg border p-4 bg-muted/30'>
                    <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground'>
                      4
                    </div>
                    <div>
                      <p className='font-semibold'>Email Subscriber</p>
                      <p className='text-sm text-muted-foreground'>
                        Receives follow-up about exclusive DM content,
                        optionally joins email list
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 rounded-lg border p-4 bg-muted/30'>
                    <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground'>
                      5
                    </div>
                    <div>
                      <p className='font-semibold'>Community Member</p>
                      <p className='text-sm text-muted-foreground'>
                        Engages with DM community, exclusive previews, becomes
                        superfan
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className='mt-12 mb-6 text-3xl font-bold'>
                  Case Study: True Crime Podcast Growth
                </h2>

                <Card className='my-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'>
                  <CardHeader>
                    <CardTitle>
                      From 2,100 to 28,000 Listeners in 8 Months
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-muted-foreground'>
                      A true crime podcaster started with 2,100 monthly
                      listeners and 35k Instagram followers (massive gap). They
                      implemented this exact DM strategy:
                    </p>

                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Month 1 Listeners
                        </p>
                        <p className='text-2xl font-bold'>2,100</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Month 8 Listeners
                        </p>
                        <p className='text-2xl font-bold'>28,000</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>Growth</p>
                        <p className='text-2xl font-bold'>1,233%</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          DM Conversions
                        </p>
                        <p className='text-2xl font-bold'>847/mo</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Conversion Rate
                        </p>
                        <p className='text-2xl font-bold'>22%</p>
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          Time Investment
                        </p>
                        <p className='text-2xl font-bold'>0 hours</p>
                      </div>
                    </div>

                    <p className='text-sm text-muted-foreground pt-4 border-t'>
                      The creator posted 2 clips per week with DM CTAs. The
                      automation ran while they recorded and edited the next
                      episode. No extra work, but massive growth. Spotify
                      started featuring their show in recommendation playlists
                      because of the subscriber velocity.
                    </p>
                  </CardContent>
                </Card>

                <p className='text-lg leading-relaxed'>
                  The key insight: your Instagram followers are warm leads for
                  your podcast. They already follow you. They like your content.
                  They just need a frictionless path from Instagram to Spotify.
                  DM automation provides exactly that.
                </p>

                <div className='my-8 rounded-lg border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950 p-6'>
                  <p className='font-semibold mb-2 flex items-center gap-2'>
                    <Mic className='h-5 w-5' />
                    Pro Tip: Timing Matters
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Post your episode clip when your audience is most active
                    (usually early evening). This puts the clip at the top of
                    people's feeds when they're scrolling. Comments come in a
                    concentrated burst. The DMs hit their inbox while they're
                    still engaged and excited about the content.
                  </p>
                </div>

                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle>
                      Ready to Turn Your Instagram Followers into Listeners?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      PostEngage.ai automates the entire listener acquisition
                      funnel. Set up your first DM trigger for episode clips,
                      and watch your listener count grow without extra work.
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

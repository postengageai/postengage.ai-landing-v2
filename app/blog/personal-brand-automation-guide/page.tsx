import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, User, Sparkles, Shield } from 'lucide-react';
import { Metadata } from 'next';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title:
    'The Personal Brand Automation Playbook: Stay Authentic While Scaling to Millions',
  description:
    'The biggest fear with automation is "sounding fake." Here\'s how top personal brand creators use AI to scale without losing the voice their audience fell in love with.',
  openGraph: {
    title:
      'The Personal Brand Automation Playbook: Stay Authentic While Scaling to Millions',
    description:
      'The biggest fear with automation is "sounding fake." Here\'s how top personal brand creators use AI to scale without losing the voice their audience fell in love with.',
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['PostEngageAI Team'],
  },
};

export default function BlogPost() {
  const publishDate = 'March 8, 2026';
  const readTime = '8 min read';

  const tableOfContents = [
    { id: 'the-authenticity-paradox', title: 'The Authenticity Paradox' },
    {
      id: 'what-to-automate-vs-what-not-to',
      title: 'What to Automate vs. What Not To',
    },
    {
      id: 'voice-dna-for-personal-brands',
      title: 'Voice DNA for Personal Brands',
    },
    {
      id: 'personal-brand-automation-stack',
      title: 'Personal Brand Automation Stack',
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
                Personal Branding
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
              The Personal Brand Automation Playbook: Stay Authentic While
              Scaling to Millions
            </h1>
            <p className='mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed'>
              The biggest fear with automation is "sounding fake." Here's
              exactly how top personal brand creators use AI to scale without
              losing the voice their audience fell in love with.
            </p>
          </header>

          {/* Featured Image */}
          <div className='relative mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-2xl border bg-muted/30 shadow-sm'>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5'>
              <span className='text-muted-foreground/20 font-medium'>
                Personal Brand Automation Strategy
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
                    url='https://postengage.ai/blog/personal-brand-automation-guide'
                    title='The Personal Brand Automation Playbook: Stay Authentic While Scaling to Millions'
                  />
                </div>
              </div>
            </aside>

            <div className='lg:col-span-9 xl:col-span-8'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <section id='the-authenticity-paradox'>
                  <h2>The Authenticity Paradox</h2>
                  <p>
                    Your personal brand is everything. Your audience follows
                    YOU, not your logo. They bought your course because they
                    trust you. They recommend your services because they've
                    experienced your personality.
                  </p>
                  <p>
                    So the thought of automating your DMs feels like betrayal.
                    "If I automate responses, they'll know I'm fake. They'll
                    unfollow me."
                  </p>
                  <p>
                    But here's the paradox: without automation, you can't
                    actually give personal attention to anyone.
                  </p>

                  <div className='not-prose my-8'>
                    <Card className='border-l-4 border-l-primary'>
                      <CardContent className='pt-6'>
                        <div className='space-y-4'>
                          <p className='font-semibold'>
                            The Numbers Behind Personal Brands
                          </p>
                          <div className='space-y-2 text-sm text-muted-foreground'>
                            <div className='flex justify-between'>
                              <span>
                                Average DMs received daily (100k followers):
                              </span>
                              <span className='font-semibold text-foreground'>
                                1,200-2,400
                              </span>
                            </div>
                            <div className='flex justify-between'>
                              <span>Time to respond manually to all:</span>
                              <span className='font-semibold text-foreground'>
                                6-12 hours
                              </span>
                            </div>
                            <div className='flex justify-between'>
                              <span>Currently responded to (manually):</span>
                              <span className='font-semibold text-foreground'>
                                2-5%
                              </span>
                            </div>
                            <div className='flex justify-between'>
                              <span>Follower expectation response rate:</span>
                              <span className='font-semibold text-foreground'>
                                30-50%
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    You're already disappointing people by not responding. An
                    automated response in your voice is infinitely better than
                    silence. And here's the truth: your audience doesn't care if
                    it's automated as long as it feels personal and helpful.
                  </p>

                  <h3 className='mt-6'>
                    Case Study: Lifestyle Creator with 780k Followers
                  </h3>
                  <p>
                    Meet Alex. Interior design creator. 780k followers. About
                    2,400 DMs arrive daily. Before automation: Alex manually
                    responded to maybe 50 DMs. Followers felt ignored.
                    Satisfaction score: 34%.
                  </p>
                  <p>
                    After implementing automation with{' '}
                    <Link
                      href='/blog/voice-dna-instagram-replies'
                      className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                    >
                      Voice DNA
                    </Link>
                    : Alex responds to all 2,400 DMs automatically (initial
                    responses). But here's the key: Alex personally engages the
                    "hot leads" — people asking specific questions about
                    services, collaborations, or deep conversations. Alex
                    manually responds to about 50 of those daily.
                  </p>
                  <p>
                    The difference? Now those 50 conversations are ACTUALLY
                    valuable. Not rushed. Not squeezed in between other tasks.
                    The automated responses handle FAQ, objections, and initial
                    triage. The human time handles relationship-building.
                  </p>
                  <p>Satisfaction score: 87%. Sales from DMs: up 240%.</p>
                </section>

                <section id='what-to-automate-vs-what-not-to'>
                  <h2>
                    The Automation Spectrum: What to Automate vs. What to Keep
                    Human
                  </h2>
                  <p>
                    The secret to authentic automation isn't automating
                    everything. It's automating ruthlessly where it makes sense,
                    and being present where it matters most.
                  </p>

                  <h3 className='mt-6'>
                    What TO Automate (with AI voice matching)
                  </h3>
                  <div className='not-prose my-8 space-y-3'>
                    <div className='rounded-lg border p-4 bg-green-50 dark:bg-green-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Sparkles className='h-5 w-5 text-green-600 dark:text-green-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-green-900 dark:text-green-100'>
                            Initial DM Responses
                          </p>
                          <p className='text-sm text-green-800 dark:text-green-200 mt-1'>
                            "Hey [Name]! Thanks for reaching out. Quick question
                            — are you looking for [Option A] or [Option B]?"
                            Triage incoming messages, qualify leads, set
                            expectations.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-lg border p-4 bg-green-50 dark:bg-green-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Sparkles className='h-5 w-5 text-green-600 dark:text-green-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-green-900 dark:text-green-100'>
                            FAQ Responses
                          </p>
                          <p className='text-sm text-green-800 dark:text-green-200 mt-1'>
                            "Great question! Here's the link to my
                            [resource/free course/booking page]." Repeat the
                            same answer to the same question 50 times? Automate
                            it.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-lg border p-4 bg-green-50 dark:bg-green-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Sparkles className='h-5 w-5 text-green-600 dark:text-green-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-green-900 dark:text-green-100'>
                            Lead Magnet Delivery
                          </p>
                          <p className='text-sm text-green-800 dark:text-green-200 mt-1'>
                            "Thanks for your interest! Here's your free resource
                            [link]. I also want to invite you to [next step]."
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-lg border p-4 bg-green-50 dark:bg-green-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Sparkles className='h-5 w-5 text-green-600 dark:text-green-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-green-900 dark:text-green-100'>
                            Appointment Booking Confirmations
                          </p>
                          <p className='text-sm text-green-800 dark:text-green-200 mt-1'>
                            "Perfect! I've added you to my calendar for
                            [date/time]. Here's the Zoom link: [link]. Looking
                            forward to it!"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-lg border p-4 bg-green-50 dark:bg-green-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Sparkles className='h-5 w-5 text-green-600 dark:text-green-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-green-900 dark:text-green-100'>
                            Content Promotion Engagement
                          </p>
                          <p className='text-sm text-green-800 dark:text-green-200 mt-1'>
                            "Thanks for watching! If you found this helpful, I'd
                            love to see you apply it. DM me with your results
                            👇"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className='mt-8'>
                    What NOT to Automate (Keep These Human)
                  </h3>
                  <div className='not-prose my-8 space-y-3'>
                    <div className='rounded-lg border p-4 bg-red-50 dark:bg-red-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Shield className='h-5 w-5 text-red-600 dark:text-red-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-red-900 dark:text-red-100'>
                            Crisis or Sensitive Situations
                          </p>
                          <p className='text-sm text-red-800 dark:text-red-200 mt-1'>
                            Someone criticizing you, sharing personal problems,
                            or expressing anger. These require empathy and
                            judgment. You must respond.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-lg border p-4 bg-red-50 dark:bg-red-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Shield className='h-5 w-5 text-red-600 dark:text-red-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-red-900 dark:text-red-100'>
                            Major Announcements
                          </p>
                          <p className='text-sm text-red-800 dark:text-red-200 mt-1'>
                            Launching a course, having a baby, major life news.
                            Your audience deserves to hear this from you
                            directly, not from a bot.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-lg border p-4 bg-red-50 dark:bg-red-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Shield className='h-5 w-5 text-red-600 dark:text-red-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-red-900 dark:text-red-100'>
                            Relationship Nurturing with Top Fans/Collaborators
                          </p>
                          <p className='text-sm text-red-800 dark:text-red-200 mt-1'>
                            Your most engaged followers, potential
                            collaborators, VIP clients. These conversations
                            deserve your personal attention.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-lg border p-4 bg-red-50 dark:bg-red-950'>
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0'>
                          <Shield className='h-5 w-5 text-red-600 dark:text-red-400' />
                        </div>
                        <div>
                          <p className='font-semibold text-red-900 dark:text-red-100'>
                            Personal Questions About Your Story
                          </p>
                          <p className='text-sm text-red-800 dark:text-red-200 mt-1'>
                            "How did you recover from failure?" or "What was
                            your biggest mistake?" Share these stories
                            personally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className='mt-8'>The "Automation Sandwich" Strategy</h3>
                  <p>Here's how the best personal brands do it:</p>
                  <ol className='ml-6 space-y-3 text-muted-foreground mt-4'>
                    <li>
                      <strong className='text-foreground'>
                        Layer 1: Human
                      </strong>{' '}
                      — Publish your authentic content. A vulnerable story, real
                      struggle, genuine teaching moment.
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Layer 2: Automated
                      </strong>{' '}
                      — DM responses, link distribution, FAQ answers flow
                      automatically. Your voice, but at scale.
                    </li>
                    <li>
                      <strong className='text-foreground'>
                        Layer 3: Human
                      </strong>{' '}
                      — You manually engage with "hot leads" who show buying
                      signals, ask specific questions, or want deeper
                      connection.
                    </li>
                  </ol>
                  <p className='mt-4'>
                    This structure lets you be massively present at scale.
                  </p>
                </section>

                <section id='voice-dna-for-personal-brands'>
                  <h2>
                    Voice DNA: How to Sound Like Yourself (Even When Automated)
                  </h2>
                  <p>
                    Traditional chatbots sound generic. "Thank you for your
                    inquiry. Please standby." Ew. That's the opposite of
                    personal branding.
                  </p>
                  <p>
                    Voice DNA is different. It's AI trained on YOUR actual
                    writing. Your past DMs, your captions, your emails. Not a
                    generic template. Your voice.
                  </p>

                  <h3 className='mt-6'>How Voice DNA Training Works</h3>
                  <div className='not-prose my-8'>
                    <div className='space-y-4'>
                      <div className='rounded-lg border p-4'>
                        <div className='font-semibold mb-2'>
                          Step 1: Voice Upload
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          You provide 20-50 examples of your actual DM messages
                          to PostEngage.ai. Funny ones. Serious ones. Casual
                          ones. The variety teaches the AI your authentic range.
                        </p>
                      </div>
                      <div className='rounded-lg border p-4'>
                        <div className='font-semibold mb-2'>
                          Step 2: AI Training
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Machine learning analyzes your word choices, emoji
                          use, length, tone, sentence structure. "This person
                          uses emojis at the end. They prefer short paragraphs.
                          They use 'hey' not 'hello'."
                        </p>
                      </div>
                      <div className='rounded-lg border p-4'>
                        <div className='font-semibold mb-2'>
                          Step 3: Continuous Learning
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Every DM you approve becomes training data. The AI
                          gets better over time. Month 1: 85% match to your
                          voice. Month 3: 94%.
                        </p>
                      </div>
                      <div className='rounded-lg border p-4'>
                        <div className='font-semibold mb-2'>
                          Step 4: Generate & Review
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          When a DM comes in, PostEngage.ai generates a response
                          in your voice. You review it (takes 3 seconds).
                          Approve or tweak. Send.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className='mt-8'>
                    Real Example: Before vs. After Voice DNA
                  </h3>
                  <div className='not-prose my-8 grid gap-4 md:grid-cols-2'>
                    <Card className='border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800'>
                      <CardHeader className='pb-3'>
                        <CardTitle className='text-base text-red-900 dark:text-red-100'>
                          Generic Automation ❌
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm'>
                        <p className='text-red-900 dark:text-red-100'>
                          "Thank you for your message. We appreciate your
                          interest in our services. Please allow 24-48 hours for
                          a response. Best regards, [Business Name]"
                        </p>
                      </CardContent>
                    </Card>

                    <Card className='border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800'>
                      <CardHeader className='pb-3'>
                        <CardTitle className='text-base text-green-900 dark:text-green-100'>
                          Voice DNA Match ✓
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='text-sm'>
                        <p className='text-green-900 dark:text-green-100'>
                          "Hey! Love that you reached out 🙌 Quick q — are you
                          looking to start with a 1:1 call or dive straight into
                          the course? Either way, let's make it happen 👇"
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    Same purpose (triage), completely different vibe. One sounds
                    like a brand. One sounds like a person you want to do
                    business with.
                  </p>
                </section>

                <section id='personal-brand-automation-stack'>
                  <h2>The Personal Brand Automation Stack (2026)</h2>
                  <p>
                    Here's the complete toolkit successful personal brands are
                    using:
                  </p>

                  <h3 className='mt-6'>Core Stack</h3>
                  <div className='not-prose my-8 space-y-3'>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-primary mb-1'>
                        PostEngage.ai
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        DM automation + Voice DNA. The center of your personal
                        brand automation.
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Cost: Credit-based ($49-$299/mo depending on volume)
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-primary mb-1'>
                        Mailchimp / ConvertKit / Brevo
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Email automation. Integrates with PostEngage.ai to tag
                        and segment DM subscribers.
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Cost: Free to $100+/mo (depending on list size)
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-primary mb-1'>
                        Calendly / Acuity Scheduling
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Booking automation. Share link in auto-DM response.
                        Prospects book directly.
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Cost: Free to $25/mo
                      </p>
                    </div>
                    <div className='rounded-lg border p-4'>
                      <div className='font-semibold text-primary mb-1'>
                        Typeform / Jotform
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Lead magnet forms, surveys, interest qualification. Link
                        sent via auto-DM.
                      </p>
                      <p className='text-xs text-muted-foreground mt-2'>
                        Cost: Free to $84/mo
                      </p>
                    </div>
                  </div>

                  <h3 className='mt-8'>Typical Setup Process</h3>
                  <div className='not-prose my-8 grid gap-3 sm:grid-cols-2'>
                    <div className='rounded-lg border p-4 bg-muted/50'>
                      <p className='font-semibold text-sm mb-2'>
                        Month 1: The Foundation
                      </p>
                      <ul className='text-sm text-muted-foreground space-y-1'>
                        <li>• Train Voice DNA (20-50 examples)</li>
                        <li>• Set up 3 keyword triggers</li>
                        <li>• Connect email platform</li>
                      </ul>
                    </div>
                    <div className='rounded-lg border p-4 bg-muted/50'>
                      <p className='font-semibold text-sm mb-2'>
                        Month 2: Building Sequences
                      </p>
                      <ul className='text-sm text-muted-foreground space-y-1'>
                        <li>• Create 5-part welcome sequence</li>
                        <li>• Set up booking link automation</li>
                        <li>• Build lead magnet delivery flow</li>
                      </ul>
                    </div>
                    <div className='rounded-lg border p-4 bg-muted/50'>
                      <p className='font-semibold text-sm mb-2'>
                        Month 3: Optimization
                      </p>
                      <ul className='text-sm text-muted-foreground space-y-1'>
                        <li>• Train model on new responses</li>
                        <li>• A/B test keyword triggers</li>
                        <li>• Segment lists by engagement</li>
                      </ul>
                    </div>
                    <div className='rounded-lg border p-4 bg-muted/50'>
                      <p className='font-semibold text-sm mb-2'>
                        Ongoing: Scale & Refine
                      </p>
                      <ul className='text-sm text-muted-foreground space-y-1'>
                        <li>• Personal touch to hot leads</li>
                        <li>• Continuous voice learning</li>
                        <li>• Revenue optimization</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className='mt-8'>Results: By the Numbers</h3>
                  <div className='not-prose my-8'>
                    <Card className='bg-primary/5 border-primary/20'>
                      <CardContent className='pt-6'>
                        <div className='grid gap-6 sm:grid-cols-4'>
                          <div>
                            <div className='text-2xl font-bold text-primary'>
                              2,400
                            </div>
                            <p className='text-sm text-muted-foreground mt-1'>
                              DMs responded to daily (was 50)
                            </p>
                          </div>
                          <div>
                            <div className='text-2xl font-bold text-primary'>
                              87%
                            </div>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Audience satisfaction score
                            </p>
                          </div>
                          <div>
                            <div className='text-2xl font-bold text-primary'>
                              240%
                            </div>
                            <p className='text-sm text-muted-foreground mt-1'>
                              Increase in DM-sourced revenue
                            </p>
                          </div>
                          <div>
                            <div className='text-2xl font-bold text-primary'>
                              4.2x
                            </div>
                            <p className='text-sm text-muted-foreground mt-1'>
                              ROI vs. doing nothing
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <h2 className='mt-12'>The Paradox Resolved</h2>
                <p>
                  You don't have to choose between authenticity and scale. You
                  can have both. But you have to be intentional about what gets
                  automated and what stays human.
                </p>
                <p>
                  The top personal brands in 2026 aren't the ones who respond to
                  every DM manually. They're the ones who automated the routine,
                  so they could be deeply personal with the important
                  conversations. If you're worried about{' '}
                  <Link
                    href='/blog/creator-burnout-automation-solution'
                    className='font-medium text-primary underline underline-offset-4 hover:text-primary/80'
                  >
                    creator burnout
                  </Link>
                  , automation is the solution.
                </p>
                <p>
                  That's not fake. That's scaled authenticity. And your audience
                  will feel the difference.
                </p>

                {/* CTA Card */}
                <Card className='my-12 bg-primary/5 border-primary/20'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <User className='h-5 w-5' />
                      Scale Your Personal Brand Without Losing Your Voice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-6 text-muted-foreground'>
                      Train Voice DNA on your actual writing.
                      AutomateTriage-level responses. Stay human for what
                      matters. That's the 2026 personal brand playbook.
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

                {/* Author Bio */}
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
          </div>
          <NewsletterForm />
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}

import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { ArrowLeft, BrainCircuit, Target, Sparkles, Filter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SocialShareButtons } from '@/components/blog/social-share-buttons';

export const metadata: Metadata = {
  title: 'Instagram Quiz Funnels: Segment Your Audience on Autopilot',
  description:
    'Stop treating all followers the same. Learn how to use interactive DM quizzes to segment your audience and send hyper-personalized offers.',
  openGraph: {
    title: 'Instagram Quiz Funnels: Segment Your Audience on Autopilot',
    description:
      'Stop treating all followers the same. Learn how to use interactive DM quizzes to segment your audience and send hyper-personalized offers.',
    url: 'https://postengage.ai/blog/instagram-quiz-funnels',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-20T00:00:00.000Z',
    authors: ['PostEngage Team'],
    images: [
      {
        url: 'https://postengage.ai/blog/quiz-funnels-cover.png',
        width: 1200,
        height: 630,
        alt: 'Instagram Quiz Funnels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Quiz Funnels: Segment Your Audience on Autopilot',
    description:
      'Stop treating all followers the same. Learn how to use interactive DM quizzes to segment your audience and send hyper-personalized offers.',
    images: ['https://postengage.ai/blog/quiz-funnels-cover.png'],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Instagram Quiz Funnels: Segment Your Audience on Autopilot',
    image: 'https://postengage.ai/blog/quiz-funnels-cover.png',
    datePublished: '2026-03-20T00:00:00.000Z',
    dateModified: '2026-03-20T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'PostEngage Team',
      url: 'https://postengage.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PostEngage.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://postengage.ai/logo.png',
      },
    },
    description:
      'Stop treating all followers the same. Learn how to use interactive DM quizzes to segment your audience and send hyper-personalized offers.',
  };

  return (
    <div className='min-h-screen bg-background text-foreground font-sans selection:bg-primary/20'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />

      <main className='pt-32 pb-20'>
        <article className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          {/* Breadcrumb & Navigation */}
          <div className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
            <Link
              href='/blog'
              className='hover:text-primary transition-colors flex items-center gap-1'
            >
              <ArrowLeft className='w-4 h-4' />
              Back to Blog
            </Link>
            <span>/</span>
            <span className='text-foreground font-medium'>Quiz Funnels</span>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content */}
            <div className='lg:col-span-8'>
              {/* Header */}
              <header className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <Badge variant='secondary' className='rounded-full px-4 py-1'>
                    Engagement
                  </Badge>
                  <span className='text-sm text-muted-foreground'>
                    Mar 20, 2026 • 7 min read
                  </span>
                </div>
                <h1 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent'>
                  Instagram Quiz Funnels: Segment Your Audience on Autopilot
                </h1>
                <p className='text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-6 italic'>
                  One-size-fits-all marketing is dead. Use interactive quizzes in DMs to discover exactly what your followers want, then sell it to them.
                </p>
              </header>

              {/* Featured Image Placeholder */}
              <div className='mb-12 rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-muted/30 aspect-video flex items-center justify-center relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <span className='text-muted-foreground/20 font-medium flex flex-col items-center gap-4'>
                  <BrainCircuit className='w-16 h-16' />
                  Featured Image: Quiz Logic Flowchart
                </span>
              </div>

              {/* Content */}
              <div className='prose prose-lg prose-slate dark:prose-invert max-w-none'>
                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    1
                  </span>
                  The Power of Micro-Commitments
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  Asking for a sale immediately is like proposing on the first date. A quiz is a conversation. It's a series of micro-commitments. Each tap of an option is a small "yes" that builds momentum towards the final offer.
                </p>
                <p className='leading-relaxed text-muted-foreground mt-4'>
                  Quizzes are inherently engaging. People love to learn about themselves. By framing your sales qualification as a "Personality Test" or "Assessment", you lower resistance and increase participation.
                </p>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    2
                  </span>
                  How It Works: The Skin Care Example
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  Let's say you sell skincare products. Instead of blasting "Buy our moisturizer!" to everyone, you run a "Skin Type Quiz".
                </p>
                <div className='grid gap-6 my-8'>
                  <Card className='bg-background/50 backdrop-blur border-l-4 border-l-blue-500'>
                    <CardContent className='p-6'>
                      <h3 className='font-bold text-lg mb-2'>Question 1</h3>
                      <p className='text-muted-foreground mb-4'>
                        "What is your biggest skin concern right now?"
                      </p>
                      <div className='flex gap-2 flex-wrap'>
                        <Badge variant='outline'>Acne</Badge>
                        <Badge variant='outline'>Dryness</Badge>
                        <Badge variant='outline'>Wrinkles</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className='bg-background/50 backdrop-blur border-l-4 border-l-green-500'>
                    <CardContent className='p-6'>
                      <h3 className='font-bold text-lg mb-2'>Result & Offer</h3>
                      <p className='text-muted-foreground'>
                        If they tap <strong>Dryness</strong>: <br />
                        "Got it! Hydration is key. We recommend our Hyaluronic Acid Serum. Here is a 10% off code just for you."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    3
                  </span>
                  Building the Logic in PostEngage.ai
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  With PostEngage.ai's visual flow builder, creating these quizzes is drag-and-drop simple.
                </p>
                <ul className='space-y-4 my-8'>
                  <li className='flex items-start gap-3'>
                    <Target className='w-6 h-6 text-primary mt-1' />
                    <div>
                      <strong className='text-foreground'>Tagging:</strong> Apply tags based on answers (e.g., 'Skin: Dry', 'Skin: Oily'). This builds your customer data profile for future marketing.
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Filter className='w-6 h-6 text-primary mt-1' />
                    <div>
                      <strong className='text-foreground'>Conditional Logic:</strong> Show different questions based on previous answers.
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Sparkles className='w-6 h-6 text-primary mt-1' />
                    <div>
                      <strong className='text-foreground'>AI Recommendations:</strong> Use our AI integration to analyze their answers and generate a personalized paragraph explaining <em>why</em> this product is perfect for them.
                    </div>
                  </li>
                </ul>

                <h2 className='scroll-m-20 text-3xl font-bold tracking-tight mt-16 mb-6 flex items-center gap-3'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-xl'>
                    4
                  </span>
                  Retargeting Based on Quiz Data
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  The value does not stop at the first interaction. Now that you know 500 of your followers have "Dry Skin", you can send a broadcast DM (within the 24-hour window or via sponsored message) specifically to that segment when you launch a new hydrating mask.
                </p>

                <div className='my-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 text-center'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Start segmenting your audience today
                  </h3>
                  <p className='text-muted-foreground mb-8 max-w-lg mx-auto'>
                    Build your first Instagram DM Quiz in minutes with PostEngage.ai templates.
                  </p>
                  <Button size='lg' className='rounded-full px-8 h-12 text-base'>
                    Build My Quiz <ArrowLeft className='ml-2 w-4 h-4 rotate-180' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className='lg:col-span-4 space-y-8'>
              <div className='sticky top-32 space-y-8'>
                <TableOfContents
                  items={[
                    {
                      title: 'Power of Micro-Commitments',
                      id: 'the-power-of-micro-commitments',
                    },
                    {
                      title: 'How It Works: Example',
                      id: 'how-it-works-the-skin-care-example',
                    },
                    {
                      title: 'Building Logic',
                      id: 'building-the-logic-in-postengage-ai',
                    },
                    {
                      title: 'Retargeting Data',
                      id: 'retargeting-based-on-quiz-data',
                    },
                  ]}
                />
                <SocialShareButtons
                  url='https://postengage.ai/blog/instagram-quiz-funnels'
                  title='Instagram Quiz Funnels: Segment Your Audience on Autopilot'
                />
              </div>
            </aside>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}

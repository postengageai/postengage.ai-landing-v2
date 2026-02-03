import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { PageHeader } from '@/components/marketing/page-header';
import { Metadata } from 'next';
import { BlogList } from '@/components/blog/blog-list';
import { NewsletterForm } from '@/components/blog/newsletter-form';

export const metadata: Metadata = {
  title: 'Blog - PostEngage.ai',
  description:
    'Insights, updates, and guides on Instagram engagement, automation, and community growth.',
  openGraph: {
    title: 'Blog - PostEngage.ai',
    description:
      'Insights, updates, and guides on Instagram engagement, automation, and community growth.',
    url: 'https://postengage.ai/blog',
    siteName: 'PostEngage.ai',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = [
    {
      slug: 'postengage-recentreborn-partnership',
      title: 'PostEngage.ai x RecentReborn: Bridging Discovery & Engagement',
      excerpt:
        'We are partnering with RecentReborn to solve the two biggest challenges in Instagram growth: getting found and staying connected.',
      date: 'Feb 3, 2026',
      category: 'Partnership',
      readTime: '4 min read',
      image: '/blog/postengage-recentreborn-cover.png',
      featured: true,
    },
    // Mock future posts
    {
      slug: '#',
      title: 'The Ultimate Guide to Instagram Automation Rules in 2026',
      excerpt:
        'How to automate your engagement without risking your account health. The definitive guide for modern creators.',
      date: 'Coming Soon',
      category: 'Guide',
      readTime: '8 min read',
      image: null, // Fallback
      featured: false,
    },
    {
      slug: '#',
      title: 'Introducing Smart Replies: AI Context Awareness',
      excerpt:
        'Our new AI engine understands context better than ever before. Learn how it can save you 10+ hours a week.',
      date: 'Coming Soon',
      category: 'Product',
      readTime: '3 min read',
      image: null, // Fallback
      featured: false,
    },
    {
      slug: '#',
      title: 'From 0 to 10k Followers: The Engineering Behind Scale',
      excerpt:
        'How we built a system capable of handling millions of webhook events per second without crashing.',
      date: 'Coming Soon',
      category: 'Engineering',
      readTime: '6 min read',
      image: null,
      featured: false,
    },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col font-sans'>
      <LandingHeader />

      <main className='flex-1 pt-32 pb-20'>
        {/* Header Section */}
        <section className='px-4 sm:px-6 mb-16'>
          <PageHeader
            badge='Blog'
            title='Latest Updates & Insights'
            description='News, strategies, and stories from the PostEngage.ai team.'
          />
        </section>

        {/* Blog List (Client Component) */}
        <section className='px-4 sm:px-6 mb-20'>
          <BlogList initialPosts={posts} />
        </section>

        {/* Newsletter Section */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-12 text-center'>
            <h2 className='text-2xl font-bold mb-4'>
              Subscribe to our newsletter
            </h2>
            <p className='text-muted-foreground mb-8 max-w-lg mx-auto'>
              Get the latest tips on Instagram growth, automation strategies,
              and product updates delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

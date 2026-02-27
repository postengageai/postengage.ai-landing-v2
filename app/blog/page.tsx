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
      slug: 'ai-social-media-manager-automation',
      title:
        'The Rise of the AI Social Media Manager: What to Automate vs. What to Keep Human',
      excerpt:
        "AI is changing the game, but it's not replacing you. Learn the perfect balance between automated efficiency and human connection.",
      date: 'Mar 5, 2026',
      category: 'Future Trends',
      readTime: '8 min read',
      image: '/blog/ai-manager-cover.png',
      featured: true,
    },
    {
      slug: 'stop-using-link-in-bio',
      title:
        'Stop Using Link in Bio: Why DM Automation Conversions Are 5x Higher',
      excerpt:
        'The "Link in Bio" is dead. Discover why top creators are switching to DM automation to skyrocket their sales and engagement.',
      date: 'Mar 1, 2026',
      category: 'Strategy',
      readTime: '6 min read',
      image: '/blog/link-in-bio-dead-cover.png',
      featured: false,
    },
    {
      slug: 'postengage-recentreborn-partnership',
      title: 'PostEngage.ai x RecentReborn: Bridging Discovery & Engagement',
      excerpt:
        'We are partnering with RecentReborn to solve the two biggest challenges in Instagram growth: getting found and staying connected.',
      date: 'Feb 3, 2026',
      category: 'Partnership',
      readTime: '4 min read',
      image: '/blog/postengage-recentreborn-cover.png',
      featured: false,
    },
    {
      slug: 'future-social-support-ai',
      title: 'The Future of Social Customer Support: AI vs Human Agents',
      excerpt:
        "Will AI replace human support teams? We explore the hybrid model that's winning in 2026.",
      date: 'Feb 20, 2026',
      category: 'Customer Experience',
      readTime: '6 min read',
      image: '/blog/future-support-cover.png',
      featured: false,
    },
    {
      slug: 'lead-gen-ai-comments',
      title: 'Maximizing Lead Generation with AI-Powered Instagram Comments',
      excerpt:
        'Turn every comment into a qualified lead. Learn how to use AI to identify intent and start DM conversations.',
      date: 'Feb 18, 2026',
      category: 'Lead Generation',
      readTime: '8 min read',
      image: '/blog/lead-gen-comments-cover.png',
      featured: false,
    },
    {
      slug: 'automate-instagram-dms-2026',
      title:
        'How to Automate Instagram DMs Without Getting Banned (2026 Guide)',
      excerpt:
        'Learn the safe way to automate Instagram DMs in 2026. Avoid shadowbans and boost engagement.',
      date: 'Feb 15, 2026',
      category: 'Automation Guide',
      readTime: '10 min read',
      image: '/blog/automate-dms-cover.png',
      featured: false,
    },
    {
      slug: 'instagram-automation-rules-2026',
      title: 'The Ultimate Guide to Instagram Automation Rules in 2026',
      excerpt:
        'How to automate your engagement without risking your account health. The definitive guide for modern creators.',
      date: 'Feb 10, 2026',
      category: 'Guide',
      readTime: '8 min read',
      image: '/blog/automation-rules-cover.png',
      featured: false,
    },
    {
      slug: 'smart-replies-ai-context',
      title: 'Introducing Smart Replies: AI Context Awareness',
      excerpt:
        'Our new AI engine understands context better than ever before. Learn how it can save you 10+ hours a week.',
      date: 'Feb 15, 2026',
      category: 'Product',
      readTime: '3 min read',
      image: '/blog/smart-replies-cover.png',
      featured: false,
    },
    {
      slug: 'engineering-scale-0-to-10k',
      title: 'From 0 to 10k Followers: The Engineering Behind Scale',
      excerpt:
        'How we built a system capable of handling millions of webhook events per second without crashing.',
      date: 'Feb 20, 2026',
      category: 'Engineering',
      readTime: '6 min read',
      image: '/blog/engineering-scale-cover.png',
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

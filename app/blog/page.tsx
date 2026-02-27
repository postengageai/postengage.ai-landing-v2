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
      slug: 'ultimate-guide-ugc-automation',
      title: 'The Ultimate Guide to UGC Automation: Turn Customers into Advocates',
      excerpt:
        'User Generated Content (UGC) is the most powerful social proof. Learn how to automate rewards for Story mentions, post tags, and viral sharing.',
      date: 'Mar 20, 2026',
      category: 'UGC Strategy',
      readTime: '8 min read',
      image: '/blog/ugc-automation-cover.png',
      featured: true,
    },
    {
      slug: 'instagram-automation-local-business',
      title: 'Instagram Automation for Restaurants & Local Biz: Bookings on Autopilot',
      excerpt:
        'Stop missing reservations and appointments. Learn how local businesses use Instagram DM automation to fill tables and calendars 24/7.',
      date: 'Mar 18, 2026',
      category: 'Local Business',
      readTime: '6 min read',
      image: '/blog/local-business-cover.png',
      featured: false,
    },
    {
      slug: 'webinar-registration-instagram-dm',
      title: 'Webinar Automation: How to Fill Seats Using Instagram DMs',
      excerpt:
        'Landing pages convert at 20%. DM conversations convert at 60%. Learn how to double your webinar show-up rate with automation.',
      date: 'Mar 16, 2026',
      category: 'Events',
      readTime: '6 min read',
      image: '/blog/webinar-automation-cover.png',
      featured: false,
    },
    {
      slug: 'high-ticket-coaching-automation',
      title: 'High-Ticket Sales: Selling $5k+ Coaching Programs in DMs',
      excerpt:
        'Stop chasing low-ticket sales. Learn how to use automated qualification to fill your calendar with high-value coaching prospects.',
      date: 'Mar 14, 2026',
      category: 'Coaching',
      readTime: '8 min read',
      image: '/blog/high-ticket-cover.png',
      featured: false,
    },
    {
      slug: 'dm-to-dollar-pipeline',
      title: "The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs in 2026",
      excerpt:
        'Stop leaving money on the table. A step-by-step guide to turning casual DM conversations into high-ticket sales.',
      date: 'Mar 12, 2026',
      category: 'Monetization',
      readTime: '7 min read',
      image: '/blog/dm-to-dollar-cover.png',
      featured: false,
    },
    {
      slug: 'ai-community-manager-2026',
      title: "Why 2026 is the Year of the 'AI Community Manager'",
      excerpt:
        'Forget chatbots. The new wave of AI Community Managers can understand context, tone, and intent, handling 90% of your engagement automatically.',
      date: 'Mar 10, 2026',
      category: 'Future Trends',
      readTime: '6 min read',
      image: '/blog/ai-community-manager-cover.png',
      featured: false,
    },
    {
      slug: 'instagram-seo-2026',
      title: 'Instagram SEO 2026: Ranking #1 on Explore',
      excerpt:
        'Hashtags are out. Keywords are in. Learn the new rules of Instagram SEO to get your content seen by millions of non-followers.',
      date: 'Mar 9, 2026',
      category: 'Growth Hacks',
      readTime: '6 min read',
      image: '/blog/instagram-seo-cover.png',
      featured: false,
    },
    {
      slug: 'instagram-story-automation-guide',
      title: 'Instagram Story Automation: How to Turn Views into Leads (2026)',
      excerpt:
        'Stories have the highest engagement but the lowest retention. Learn how to use automation to capture leads before they swipe away.',
      date: 'Mar 3, 2026',
      category: 'Engagement',
      readTime: '5 min read',
      image: '/blog/story-automation-cover.png',
      featured: false,
    },
    {
      slug: 'click-to-dm-ads-guide',
      title: 'Why Click-to-DM Ads Are Killing Landing Pages in 2026',
      excerpt:
        'Landing pages have a 2% conversion rate. DM Ads have 10%+. Here is why the "Conversation Funnel" is the new standard for paid social.',
      date: 'Mar 2, 2026',
      category: 'Ads Strategy',
      readTime: '8 min read',
      image: '/blog/dm-ads-cover.png',
      featured: false,
    },
    {
      slug: 'instagram-giveaways-2026',
      title: 'Instagram Giveaways in 2026: The Anti-Spam Automation Guide',
      excerpt:
        'Stop asking for "Tag 3 friends". Learn the new, compliant way to run viral giveaways that actually build a qualified list.',
      date: 'Mar 1, 2026',
      category: 'Growth Hacks',
      readTime: '6 min read',
      image: '/blog/giveaway-2026-cover.png',
      featured: false,
    },
    {
      slug: 'real-estate-instagram-leads',
      title: 'Real Estate Lead Gen 2026: Automate Your Instagram DMs',
      excerpt:
        'Speed to lead is everything. Learn how top agents are using Instagram automation to qualify buyers and book showings 24/7.',
      date: 'Mar 8, 2026',
      category: 'Real Estate',
      readTime: '6 min read',
      image: '/blog/real-estate-cover.png',
      featured: true,
    },
    {
      slug: 'ecommerce-instagram-automation',
      title: 'E-commerce Automation 2026: Sync Shopify to Instagram DMs',
      excerpt:
        'Stop losing sales to "Link in Bio". Learn how to sync your Shopify catalog to Instagram and sell directly in DMs with AI.',
      date: 'Mar 6, 2026',
      category: 'E-commerce',
      readTime: '7 min read',
      image: '/blog/ecommerce-cover.png',
      featured: true,
    },
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
      featured: false,
    },
    {
      slug: 'event-marketing-automation',
      title: 'Automating Event RSVPs: From Story Reply to Calendar Invite',
      excerpt:
        'Hosting a webinar, workshop, or live event? Learn how to fill your seats using Instagram Stories and DM automation.',
      date: 'Mar 19, 2026',
      category: 'Event Marketing',
      readTime: '4 min read',
      image: '/blog/event-marketing-cover.png',
      featured: true,
    },
    {
      slug: 'coaching-sales-automation',
      title: 'How High-Ticket Coaches are Booking 50+ Calls/Month with AI',
      excerpt:
        'Stop paying appointment setters $3k/month. Automate your outreach and booking flow with Instagram DM automation.',
      date: 'Mar 18, 2026',
      category: 'Coaching & Consulting',
      readTime: '8 min read',
      image: '/blog/coaching-sales-cover.png',
      featured: false,
    },
    {
      slug: 'ecommerce-cart-recovery-dm',
      title: 'Recovering Abandoned Carts via Instagram DMs: A 2026 Strategy',
      excerpt:
        'Email open rates are plummeting. DM open rates are 90%+. Here is how to use Instagram to save lost sales.',
      date: 'Mar 17, 2026',
      category: 'E-commerce',
      readTime: '4 min read',
      image: '/blog/ecommerce-recovery-cover.png',
      featured: false,
    },
    {
      slug: 'real-estate-instagram-automation',
      title: "The Realtor's Guide to Automating Open House Leads on Instagram",
      excerpt:
        'Stop chasing sign-in sheets. Learn how to capture, qualify, and follow up with every open house visitor automatically.',
      date: 'Mar 16, 2026',
      category: 'Real Estate',
      readTime: '5 min read',
      image: '/blog/real-estate-automation-cover.png',
      featured: false,
    },
    {
      slug: 'instagram-seo-2026',
      title: 'Instagram SEO: How to Rank Your Content in 2026',
      excerpt:
        'Hashtags are dead. Discover the new ranking factors for Instagram in 2026: Keywords, Alt Text, and User Intent.',
      date: 'Mar 15, 2026',
      category: 'Growth Strategy',
      readTime: '6 min read',
      image: '/blog/instagram-seo-cover.png',
      featured: true,
    },
    {
      slug: 'dm-to-dollar-pipeline',
      title:
        "The 'DM-to-Dollar' Pipeline: How to Monetize Instagram DMs in 2026",
      excerpt:
        'Stop leaving money on the table. A step-by-step guide to turning casual DM conversations into high-ticket sales.',
      date: 'Mar 12, 2026',
      category: 'Monetization',
      readTime: '7 min read',
      image: '/blog/dm-to-dollar-cover.png',
      featured: true,
    },
    {
      slug: 'ai-community-manager-2026',
      title: "Why 2026 is the Year of the 'AI Community Manager'",
      excerpt:
        'Forget chatbots. The new wave of AI Community Managers can understand context, tone, and intent, handling 90% of your engagement automatically.',
      date: 'Mar 10, 2026',
      category: 'Future Trends',
      readTime: '6 min read',
      image: '/blog/ai-community-manager-cover.png',
      featured: false,
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
      slug: 'algorithm-shift-saves-vs-likes',
      title: "The Algorithmic Shift: Why 'Saves' Are the New 'Likes' in 2026",
      excerpt:
        'The Instagram algorithm has changed. Vanity metrics are out. Retention metrics are in. Learn how to optimize for Saves and Shares.',
      date: 'Feb 23, 2026',
      category: 'Algorithm',
      readTime: '7 min read',
      image: '/blog/algorithm-shift-cover.png',
      featured: false,
    },
    {
      slug: 'instagram-funnels-2-0',
      title: 'Instagram Funnels 2.0: From Viewer to Customer in 3 Clicks',
      excerpt:
        'The "Link in Bio" is dead. Learn how to build automated sales funnels that convert 5x higher using Keyword Triggers and DM Automation.',
      date: 'Feb 22, 2026',
      category: 'Strategy',
      readTime: '6 min read',
      image: '/blog/funnels-2-0-cover.png',
      featured: false,
    },
    {
      slug: 'micro-influencer-scale',
      title: 'Micro-Influencer Scale: Automating Outreach Without Losing Soul',
      excerpt:
        'How to scale your influencer marketing program from 10 to 1,000 partners using intelligent automation and personalized outreach.',
      date: 'Feb 21, 2026',
      category: 'Influencer Marketing',
      readTime: '5 min read',
      image: '/blog/micro-influencer-cover.png',
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

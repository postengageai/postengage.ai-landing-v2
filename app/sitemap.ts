import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Explicit publish dates for blog posts (for accurate lastModified in sitemap)
const blogPublishDates: Record<string, string> = {
  'instagram-follow-to-dm-guide': '2026-03-27',
  'bfcm-automation-guide': '2026-03-26',
  'instagram-quiz-funnels': '2026-03-25',
  'influencer-roi-tracking': '2026-03-24',
  'fitness-studio-membership-automation': '2026-03-23',
  'instagram-giveaways-2026': '2026-03-22',
  'real-estate-instagram-leads': '2026-03-21',
  'webinar-registration-instagram-dm': '2026-03-20',
  'instagram-story-automation-guide': '2026-03-19',
  'micro-influencer-scale': '2026-03-18',
  'instagram-seo-2026': '2026-03-17',
  'viral-giveaways-2-0': '2026-03-16',
  'click-to-dm-ads-guide': '2026-03-15',
  'stop-using-link-in-bio': '2026-03-14',
  'instagram-funnels-2-0': '2026-03-13',
  'high-ticket-coaching-automation': '2026-03-12',
  'dm-to-dollar-pipeline': '2026-03-11',
  'ecommerce-cart-recovery-dm': '2026-03-10',
  'agency-automation-scaling': '2026-03-04',
  'ai-community-manager-2026': '2026-03-03',
  'ai-social-media-manager-automation': '2026-03-02',
  'algorithm-shift-saves-vs-likes': '2026-03-01',
  'automate-instagram-dms-2026': '2026-02-28',
  'coaching-sales-automation': '2026-02-27',
  'customer-support-automation-24-7': '2026-02-26',
  'direct-traffic-dm-vs-link-in-bio': '2026-02-25',
  'ecommerce-instagram-automation': '2026-02-24',
  'engineering-scale-0-to-10k': '2026-02-20',
  'event-marketing-automation': '2026-02-22',
  'future-social-support-ai': '2026-02-21',
  'instagram-automation-local-business': '2026-02-23',
  'instagram-automation-rules-2026': '2026-02-19',
  'instagram-live-dm-automation': '2026-02-18',
  'lead-gen-ai-comments': '2026-02-17',
  'postengage-recentreborn-partnership': '2026-02-16',
  'real-estate-instagram-automation': '2026-02-15',
  'smart-replies-ai-context': '2026-02-14',
  'story-mentions-brand-ambassadors': '2026-02-13',
  'ultimate-guide-ugc-automation': '2026-02-12',
  // New vertical + strategy posts (batch 2)
  'instagram-abandoned-dm-recovery': '2026-03-10',
  'instagram-automation-accountants': '2026-03-09',
  'instagram-automation-architecture-firms': '2026-03-09',
  'instagram-automation-beauty-brands': '2026-03-08',
  'instagram-automation-book-authors': '2026-03-08',
  'instagram-automation-car-dealerships': '2026-03-08',
  'instagram-automation-charities': '2026-03-07',
  'instagram-automation-childrens-education': '2026-03-07',
  'instagram-automation-consulting-firms': '2026-03-07',
  'instagram-automation-content-creator-agencies': '2026-03-06',
  'instagram-automation-dentists-doctors': '2026-03-06',
  'instagram-automation-event-planners': '2026-03-06',
  'instagram-automation-fashion-brands': '2026-03-05',
  'instagram-automation-financial-advisors': '2026-03-05',
  'instagram-automation-grocery-local-food': '2026-03-05',
  'instagram-automation-hair-salons': '2026-03-04',
  'instagram-automation-healthcare-clinics': '2026-03-04',
  'instagram-automation-interior-designers': '2026-03-04',
  'instagram-automation-jewelry-brands': '2026-03-03',
  'instagram-automation-language-coaches': '2026-03-03',
  'instagram-automation-lawyers': '2026-03-03',
  'instagram-automation-mental-health-coaches': '2026-03-02',
  'instagram-automation-mortgage-brokers': '2026-03-02',
  'instagram-automation-multilingual-global': '2026-03-02',
  'instagram-automation-music-artists': '2026-03-01',
  'instagram-automation-pet-industry': '2026-03-01',
  'instagram-automation-photographers': '2026-03-01',
  'instagram-automation-schools-universities': '2026-02-28',
  'instagram-automation-software-companies': '2026-02-28',
  'instagram-automation-sports-coaches': '2026-02-28',
  'instagram-automation-subscription-boxes': '2026-02-27',
  'instagram-automation-tech-gadgets': '2026-02-27',
  'instagram-automation-travel-agents': '2026-02-27',
  'instagram-automation-travel-bloggers': '2026-02-26',
  'instagram-automation-virtual-assistants': '2026-02-26',
  'instagram-automation-wedding-industry': '2026-02-26',
  'instagram-automation-yoga-studios': '2026-02-25',
  'instagram-cold-dm-outreach': '2026-02-25',
  'instagram-comment-to-dm-funnel': '2026-02-25',
  'instagram-dm-customer-journey': '2026-02-24',
  'instagram-dm-response-rate-guide': '2026-02-24',
  'instagram-dm-sales-funnel-2026': '2026-02-24',
  'instagram-dm-sequence-design': '2026-02-23',
  'instagram-dm-speed-matters': '2026-02-23',
  'instagram-dms-vs-email-marketing-2026': '2026-02-23',
  'instagram-membership-community-automation': '2026-02-22',
  'instagram-notes-engagement-strategy': '2026-02-22',
  'instagram-reels-to-dm-funnel': '2026-02-22',
  'instagram-threads-strategy-2026': '2026-02-21',
  'voice-dna-deep-dive': '2026-02-21',
  // New posts
  'voice-dna-instagram-replies': '2026-03-09',
  'instagram-reels-automation-2026': '2026-03-08',
  'instagram-shopping-dm-automation': '2026-03-07',
  'creator-burnout-automation-solution': '2026-03-06',
  'b2b-instagram-lead-generation': '2026-03-05',
  'instagram-email-list-building': '2026-03-09',
  'personal-brand-automation-guide': '2026-03-08',
  'trigger-word-strategy-2026': '2026-03-07',
  'postengage-vs-manychat-2026': '2026-03-06',
  'instagram-for-course-creators': '2026-03-05',
  'dm-conversion-rate-optimization': '2026-03-09',
  'instagram-automation-kpis': '2026-03-08',
  'instagram-broadcast-channels-automation': '2026-03-07',
  'instagram-for-saas-startups': '2026-03-06',
  'instagram-live-monetization-dms': '2026-03-05',
  'affiliate-marketing-instagram-dms': '2026-03-09',
  'instagram-for-podcasters': '2026-03-08',
  'restaurant-instagram-dm-automation': '2026-03-07',
  'instagram-collab-posts-automation': '2026-03-06',
  'multilingual-instagram-automation': '2026-03-05',
  'instagram-automation-for-nonprofits': '2026-03-09',
  'getting-started-postengage-guide': '2026-03-08',
  'instagram-story-link-sticker-dms': '2026-03-07',
  'organic-instagram-growth-2026': '2026-03-06',
  'instagram-automation-for-coaches': '2026-03-05',
};

// Priority tiers for non-blog pages
const pagePriorities: Record<
  string,
  {
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }
> = {
  '': { priority: 1.0, changeFrequency: 'weekly' }, // Home
  '/pricing': { priority: 0.9, changeFrequency: 'weekly' },
  '/features': { priority: 0.9, changeFrequency: 'monthly' },
  '/blog': { priority: 0.9, changeFrequency: 'daily' }, // Blog index — new posts daily
  '/login': { priority: 0.7, changeFrequency: 'monthly' },
  '/signup': { priority: 0.8, changeFrequency: 'monthly' },
  '/demo': { priority: 0.8, changeFrequency: 'monthly' },
  '/about': { priority: 0.6, changeFrequency: 'monthly' },
  '/contact': { priority: 0.6, changeFrequency: 'monthly' },
  '/product': { priority: 0.8, changeFrequency: 'monthly' },
  '/roadmap': { priority: 0.6, changeFrequency: 'weekly' },
  '/changelog': { priority: 0.7, changeFrequency: 'weekly' },
  '/security': { priority: 0.4, changeFrequency: 'yearly' },
  '/privacy': { priority: 0.3, changeFrequency: 'yearly' },
  '/terms': { priority: 0.3, changeFrequency: 'yearly' },
  '/data-deletion': { priority: 0.2, changeFrequency: 'yearly' },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://postengage.ai';
  const appDir = path.join(process.cwd(), 'app');

  function getRoutes(dir: string, currentPath = ''): string[] {
    let routes: string[] = [];

    if (!fs.existsSync(dir)) {
      return routes;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (
          entry.name.startsWith('.') ||
          entry.name.startsWith('_') ||
          entry.name.startsWith('[') ||
          entry.name.endsWith('~') ||
          entry.name === 'api'
        ) {
          continue;
        }

        const newPath = `${currentPath}/${entry.name}`;
        routes = [...routes, ...getRoutes(path.join(dir, entry.name), newPath)];
      } else if (
        entry.name === 'page.tsx' ||
        entry.name === 'page.ts' ||
        entry.name === 'page.js' ||
        entry.name === 'page.jsx'
      ) {
        routes.push(currentPath);
      }
    }

    return routes;
  }

  const routes = getRoutes(appDir);

  return routes.map(route => {
    const isBlogPost = route.startsWith('/blog/') && route !== '/blog';
    const slug = isBlogPost ? route.replace('/blog/', '') : null;
    const publishDate =
      slug && blogPublishDates[slug]
        ? new Date(blogPublishDates[slug])
        : new Date();

    if (isBlogPost) {
      return {
        url: `${baseUrl}${route}`,
        lastModified: publishDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    }

    const pageConfig = pagePriorities[route];
    if (pageConfig) {
      return {
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: pageConfig.changeFrequency,
        priority: pageConfig.priority,
      };
    }

    // Default for any other page
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });
}

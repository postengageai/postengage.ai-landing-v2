import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LandingHeader } from '@/components/landing-header';
import { LandingFooter } from '@/components/landing-footer';
import { TableOfContents } from '@/components/table-of-contents';
import { SocialShareButtons } from '@/components/social-share-buttons';
import { NewsletterForm } from '@/components/newsletter-form';

export const metadata: Metadata = {
  title: 'Instagram Automation Case Study: How an E-commerce Brand Tripled DM Revenue | PostEngage Blog',
  description: 'A detailed case study showing exactly how one e-commerce brand used Instagram DM automation to go from $8,000 to $26,000 in monthly DM-attributed revenue in 90 days.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'brand-background', title: 'The Brand: Before Automation' },
    { id: 'the-setup', title: 'The Automation Setup' },
    { id: 'first-30-days', title: 'Results: First 30 Days' },
    { id: 'optimization-cycle', title: 'The 60-Day Optimization Cycle' },
    { id: 'final-results', title: '90-Day Results and Key Lessons' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Case Studies</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Instagram Automation Case Study: How an E-commerce Brand Tripled DM Revenue</h1>
              <p className="text-xl text-gray-600 mb-6">A detailed case study showing exactly how one e-commerce brand used Instagram DM automation to go from $8,000 to $26,000 in monthly DM-attributed revenue in 90 days.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>May 1, 2026</span><span>·</span><span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-12 gap-8">
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24"><TableOfContents items={tocItems} /></div>
            </aside>
            <article className="col-span-12 lg:col-span-7">

          <section id="brand-background" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Brand: Before Automation</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The brand in this case study is a mid-size direct-to-consumer skincare brand with 45,000 Instagram followers. Before implementing automation, they had a team member spending 3-4 hours per day manually responding to DMs — product questions, skincare routine inquiries, order status requests, and occasional high-intent purchase conversations.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Their baseline metrics: approximately 150-200 DMs per day, 15 minutes average response time during business hours (no response outside business hours), and a self-reported DM-to-purchase conversion rate that they estimated was around 5% but had never actually measured.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The problem: after-hours DMs (which made up about 40% of total volume) were getting responses 8-14 hours later. Studies they had read suggested this delay was costing them significant revenue. Their social media manager was also spending time on routine questions (ingredient queries, shipping times) that were preventing them from handling high-intent purchase conversations.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Pre-automation baseline:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>150-200 daily DMs with manual handling</li>
                <li>15-min response time during hours, 8-14h overnight delay</li>
                <li>Estimated 5% DM conversion rate (unmeasured)</li>
                <li>3-4 hours/day staff time on DM management</li>
                <li>High-intent conversations mixed with routine questions</li>
              </ul>
          </section>
          <section id="the-setup" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Automation Setup</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Phase 1 (Week 1-2): set up keyword triggers for the brand's most common DM entry points. Comment "ROUTINE" on skincare routine posts triggered a DM with a personalized routine quiz. Comment "INGREDIENTS" triggered a DM with their ingredient glossary. Comment "SHOP" on any product post sent the product page link instantly.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Phase 2 (Week 2-3): built a product recommendation flow. The routine quiz asked three questions (skin type, primary concern, budget range) and delivered a tailored product recommendation with direct purchase links. This replaced the 10-15 minute back-and-forth that the social media manager had been handling manually.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Phase 3 (Week 3-4): set up a re-engagement flow for past customers. Anyone who had purchased in the last 90 days and engaged with a new product post got a DM: "Since you loved [previous product], I thought you might be interested in this — it addresses [next skin concern] perfectly. Here is 10% off if you want to try it."</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Automation Flow Architecture</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Comment triggers: ROUTINE, INGREDIENTS, SHOP, QUIZ on relevant posts</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Product recommendation quiz: 3 questions, 12 outcome paths</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Routine query handler: ingredient questions routed to glossary + quiz</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Order status: auto-reply with tracking link request</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Past customer re-engagement: behavior-triggered upsell sequence</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Human escalation: high-value conversations flagged for social media manager</li>
                </ul>
              </div>
          </section>
          <section id="first-30-days" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results: First 30 Days</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Month 1 results were strong but not dramatic. DM response time dropped from 8-14 hours overnight to under 2 minutes at all hours. The social media manager's daily DM time dropped from 3-4 hours to 45-60 minutes (focused on escalated high-intent conversations only).</p>
              <p className="text-gray-700 mb-4 leading-relaxed">DM-attributed revenue in Month 1: $11,200. This was up from their estimated $8,000 baseline, though the team acknowledged they had never precisely measured baseline revenue before, so the exact increase was uncertain. What they could measure precisely: DM-to-purchase conversion rate was 7.3% on automated flows — higher than their 5% estimate for manual handling.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The surprising early win: the routine quiz. 34% of people who entered the quiz completed all three questions and received a product recommendation. Of those, 12.1% purchased within 72 hours. The quiz was converting cold DM conversations to purchases faster than any other flow.</p>
          </section>
          <section id="optimization-cycle" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The 60-Day Optimization Cycle</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Month 2 was spent optimizing based on data. The team identified three improvements based on real conversation analysis: the first message in the shopping flow was too generic and got a low response rate, the re-engagement flow was too sales-forward and getting ignored by some past customers, and high-intent leads were not being escalated to the social media manager fast enough.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Changes made: the shopping flow's first message was rewritten from "Here is the link to [product]" to "I grabbed the link for you — what are you thinking about getting it for? I can tell you if it is the right fit." This single change increased the follow-on conversation rate by 31%.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The re-engagement flow was softened: instead of leading with a discount offer, it led with a helpful tip related to their purchase history. The purchase offer came in message 3 rather than message 1. This version had a higher response rate and similar conversion, with fewer people marking messages as spam.</p>
          </section>
          <section id="final-results" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">90-Day Results and Key Lessons</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Month 3 DM-attributed revenue: $26,400. The jump from Month 1 ($11,200) to Month 3 ($26,400) came from three compounding improvements: better flows (optimization from Month 2), higher conversation volume (more content was created with DM triggers in mind), and the social media manager spending more time on high-intent escalations instead of routine queries.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Staff time on DM management: reduced from 3-4 hours/day to 1-1.5 hours/day. The time freed up was redirected to content creation and influencer outreach — both of which further increased Instagram reach and DM volume.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Key lessons from the case study: measure your baseline before automating (impossible to know ROI without a starting point), start with your most common query types (highest volume = fastest impact), and plan for the optimization cycle (Month 1 results are a starting point, not the ceiling). The brand's 90-day journey is reproducible but requires patience through the setup and early measurement phases.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Key lessons from this case study:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Measure baseline DM conversion rate before automating</li>
                <li>Start with highest-volume query types for fastest impact</li>
                <li>Build escalation paths for high-intent conversations from day one</li>
                <li>Plan at least 30 days of data collection before major optimizations</li>
                <li>Treat Month 1 as a learning period, Month 2-3 as optimization</li>
              </ul>
          </section>
              <div className="bg-linear-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
                <h2 className="text-2xl font-bold mb-3">Ready to Automate Your Instagram Growth?</h2>
                <p className="text-violet-100 mb-6">PostEngage helps you turn Instagram engagement into leads, bookings, and sales automatically.</p>
                <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-violet-50">
                  <Link href="/#waitlist">Start Free Today</Link>
                </Button>
              </div>
              <div className="mt-12"><NewsletterForm /></div>
            </article>
            <aside className="hidden lg:block lg:col-span-2">
              <div className="sticky top-24"><SocialShareButtons title="Instagram Automation Case Study: How an E-commerce Brand Tripled DM Revenue" /></div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

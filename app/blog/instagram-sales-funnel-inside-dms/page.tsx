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
  title: 'The Instagram Sales Funnel Inside DMs: Build It Once, Sell on Autopilot | PostEngage Blog',
  description: 'How to build a complete sales funnel that lives entirely inside Instagram DMs — from awareness to purchase — using automation that runs 24/7 without manual work.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'dm-funnel-concept', title: 'The DM Funnel Concept Explained' },
    { id: 'funnel-stages', title: 'The 4 Stages of an Instagram DM Sales Funnel' },
    { id: 'building-the-funnel', title: 'Building Your DM Funnel Step by Step' },
    { id: 'offer-positioning', title: 'Positioning Your Offer Inside the DM Funnel' },
    { id: 'optimization-and-scale', title: 'Optimizing and Scaling Your DM Funnel' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Sales Strategy</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">The Instagram Sales Funnel Inside DMs: Build It Once, Sell on Autopilot</h1>
              <p className="text-xl text-gray-600 mb-6">How to build a complete sales funnel that lives entirely inside Instagram DMs — from awareness to purchase — using automation that runs 24/7 without manual work.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>May 20, 2026</span><span>·</span><span>10 min read</span>
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

          <section id="dm-funnel-concept" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The DM Funnel Concept Explained</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A traditional sales funnel moves prospects through awareness, consideration, decision, and purchase stages across multiple platforms and touchpoints: social media, landing pages, email sequences, sales calls. An Instagram DM sales funnel compresses this journey into a single conversation channel.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">This is not a limitation — it is an advantage. Every stage transition in a traditional funnel represents a drop-off risk. Moving from Instagram to a landing page loses 70-90% of the traffic. Moving from a landing page to an email sequence loses another 20-40%. A DM funnel eliminates those transitions. The prospect stays in one conversation from first contact to purchase.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The DM funnel works because modern buyers are comfortable making purchasing decisions through conversation. The rise of messaging apps as commerce channels (WhatsApp Business, WeChat, Messenger) has primed consumers to transact inside chat environments. Instagram DMs leverage the same behavioral patterns on a platform people already spend significant time on.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Why DM funnels outperform traditional funnels:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>DM funnel eliminates drop-off points between platforms</li>
                <li>Single conversation context = better relationship and higher conversion</li>
                <li>Buyers are comfortable purchasing through messaging channels</li>
                <li>Automation makes the funnel scalable beyond manual capacity</li>
                <li>Real-time conversation handles objections that kill email sequences</li>
              </ul>
          </section>
          <section id="funnel-stages" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The 4 Stages of an Instagram DM Sales Funnel</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Stage 1: Entry (Awareness to Interest). The prospect comments a keyword on your post or DMs you directly. Your automation responds instantly with something valuable — a resource, a quick win, a compelling piece of information. Goal: establish that this conversation is worth continuing.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Stage 2: Qualification (Interest to Consideration). Through 2-3 conversational messages, your automation identifies what the prospect is trying to achieve and whether your offer is relevant to their situation. Goal: understand their specific situation and establish relevance of your solution.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Stage 3: Proposition (Consideration to Decision). Based on their qualification answers, your automation delivers a tailored explanation of how your offer addresses their specific situation. Goal: make the connection between their stated need and your product so clear that objections are pre-empted.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Stage 4: Conversion (Decision to Purchase). The automation delivers the offer with a direct purchase link or booking CTA. For higher-ticket offers, this stage may involve escalation to a human for the final conversation. Goal: remove friction from the act of purchasing and close the sale.</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">DM Funnel Stage Map</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Entry: keyword comment or direct DM + instant value delivery</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Qualification: 2-3 questions to understand situation and fit</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Proposition: tailored explanation connecting offer to their situation</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Conversion: purchase link, booking CTA, or human handoff</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Post-conversion: welcome sequence + upsell/cross-sell opportunities</li>
                </ul>
              </div>
          </section>
          <section id="building-the-funnel" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Your DM Funnel Step by Step</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Step 1: Define your entry points. What content will you create to generate DM conversations? What keywords will you use? For each entry point, what promise are you making to the commenter?</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Step 2: Write your qualification questions. What 2-3 questions help you understand whether the prospect is a good fit for your offer? What are the key segmentation variables in your customer base (company size, role, problem type, timeline)?</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Step 3: Create your proposition messages. For each segment your qualification reveals, write a tailored message that connects your offer specifically to their situation. If your qualification reveals 3 main customer types, you need 3 proposition messages.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Step 4: Write your conversion messages. The direct offer — clear, specific, and linked. Include a purchase link or booking link. Address the most common objection proactively. Provide social proof (one specific testimonial or result). Limit the number of choices (one primary offer, optionally one alternative).</p>
          </section>
          <section id="offer-positioning" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Positioning Your Offer Inside the DM Funnel</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">How you position your offer in a DM conversation is different from how you position it on a landing page. The DM context allows for personalization that is impossible on a page — you know what the prospect told you, and you can reference it directly.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The personalization formula: "[what they told you about their situation] + [how your offer specifically addresses that] + [the specific result they can expect] + [the next step]." Example: "Since you mentioned you're managing a 5-person team and the bottleneck is the handoff process, our [Product]'s workflow automation specifically addresses that — teams like yours typically eliminate 6-8 hours of weekly handoff time within the first two weeks. Here's how to get started: [link]."</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Pricing in DM funnels: do not hide price until the end. If your offer has a significant price, include it in your proposition stage. "This is a $1,497 program" addressed directly and early removes price shock at the conversion stage and ensures you are only investing conversation time in prospects who are genuinely open to the investment.</p>
          </section>
          <section id="optimization-and-scale" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimizing and Scaling Your DM Funnel</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Optimize one stage at a time. Start with Stage 1 (entry): are your keyword comment rates above 15%? If not, the entry point content or keyword offer needs improvement. Then Stage 2 (qualification): are prospects answering your qualification questions? If response rate is below 30%, the questions may be too personal or the value exchange is unclear.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Scale by increasing the volume of content that feeds entry points. More posts with keyword triggers = more DM conversations = more pipeline. The funnel itself does not need to be changed to scale — only the top-of-funnel content volume needs to increase.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The compounding advantage of DM funnels: every optimization you make improves conversion for all future prospects who enter the funnel. A 5% improvement in qualification response rate from a messaging change applies to all future DM conversations at no additional cost. Over 12 months of consistent optimization, a well-built DM funnel can achieve conversion rates that would be considered exceptional in any other channel.</p>
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
              <div className="sticky top-24"><SocialShareButtons title="The Instagram Sales Funnel Inside DMs: Build It Once, Sell on Autopilot" /></div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

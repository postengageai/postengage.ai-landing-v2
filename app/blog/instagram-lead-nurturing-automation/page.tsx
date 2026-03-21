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
  title: 'Instagram Lead Nurturing Automation: From First Contact to Ready to Buy | PostEngage Blog',
  description: 'How to build Instagram DM lead nurturing sequences that move prospects from awareness to purchase readiness — without being pushy or losing them to inactivity.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'what-is-lead-nurturing', title: 'What Lead Nurturing Actually Means in Instagram' },
    { id: 'nurture-sequence-design', title: 'Designing Your Nurture Sequence' },
    { id: 'content-by-stage', title: 'Content by Buyer Journey Stage' },
    { id: 'reengagement', title: 'Re-Engaging Inactive Leads' },
    { id: 'nurture-to-close', title: 'Moving from Nurture to Conversion' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Lead Nurturing</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Instagram Lead Nurturing Automation: From First Contact to Ready to Buy</h1>
              <p className="text-xl text-gray-600 mb-6">How to build Instagram DM lead nurturing sequences that move prospects from awareness to purchase readiness — without being pushy or losing them to inactivity.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>May 18, 2026</span><span>·</span><span>9 min read</span>
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

          <section id="what-is-lead-nurturing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Lead Nurturing Actually Means in Instagram</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Lead nurturing is the process of building a relationship with a prospect over time until they are ready to buy. On Instagram, this happens through a combination of DM sequences, content exposure, and conversation — all working together to move someone from "vaguely interested" to "ready to act."</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The nurturing timeline varies dramatically by offer. A $29 digital product might be purchased within 24 hours of first engagement. A $5,000 consulting package might require 3-6 weeks of relationship building. Your nurture sequence length and frequency should be calibrated to your specific offer and price point.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The mistake most accounts make: treating nurturing as broadcasting. Sending a weekly educational email to your Instagram leads is a start, but it is not nurturing. Nurturing involves two-way interaction, personalization based on behavior, and sequencing that responds to where the prospect is in their decision process.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Lead nurturing principles:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Nurture timeline varies by offer price and complexity</li>
                <li>High-ticket offers require more touchpoints before conversion</li>
                <li>Nurturing is two-way (conversation) not one-way (broadcast)</li>
                <li>Personalization based on engagement behavior increases conversion</li>
                <li>Re-engagement of inactive leads is part of nurture strategy</li>
              </ul>
          </section>
          <section id="nurture-sequence-design" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Designing Your Nurture Sequence</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A well-designed nurture sequence has three phases: value delivery, relationship deepening, and conversion readiness.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Value delivery phase (messages 1-3): deliver on your initial promise (lead magnet), follow up with additional relevant resources, and demonstrate your expertise through content. No selling in this phase. The goal is to have the prospect think "this person really knows what they are talking about."</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Relationship deepening phase (messages 4-6): shift from one-way delivery to two-way conversation. Ask about their specific situation. Share a relevant story or case study. Reference something they told you earlier in the conversation. This phase builds the personal connection that makes conversion possible.</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Nurture Sequence Framework</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Phase 1 (messages 1-3): deliver value, demonstrate expertise, no selling</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Phase 2 (messages 4-6): ask questions, build two-way conversation</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Phase 3 (messages 7-9): introduce offer, connect to their specific situation</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Phase 4 (messages 10+): follow up on offer, handle objections, close</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span>&#x2192;</span>Throughout: respond to all replies personally or with highly contextual automation</li>
                </ul>
              </div>
          </section>
          <section id="content-by-stage" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content by Buyer Journey Stage</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Awareness stage prospects (just discovered you): deliver foundational value — your best educational content, the resource that clearly shows what you know. Do not pitch. Build the "this person is worth paying attention to" impression.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Consideration stage prospects (know you, evaluating options): deliver proof and differentiation — case studies, testimonials, comparisons that clarify why your approach is different. Ask discovery questions that help them articulate their specific situation.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Decision stage prospects (ready to buy, just need the right push): deliver specificity — tailored recommendations, specific ROI examples, objection handling. The conversation at this stage should feel like a consultation where you are helping them make the right decision, not a sales pitch where you are trying to close.</p>
          </section>
          <section id="reengagement" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Re-Engaging Inactive Leads</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Leads who entered your DM flow, showed initial interest, and then went quiet are not lost — they are dormant. A re-engagement sequence, sent 2-4 weeks after their last activity, can revive 15-25% of these leads.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Re-engagement message design: do not pick up where you left off with more sales content. Start with something that delivers fresh value with no strings attached. "I just put together something I thought you would find useful — [resource]. No ask, just something relevant to what we talked about."</p>
              <p className="text-gray-700 mb-4 leading-relaxed">If the re-engagement delivers value and gets a response, move them back into your active nurture sequence. If two re-engagement attempts get no response, move to a very low-frequency "keep in touch" sequence — one message per month with a piece of genuinely useful content. Some leads take 6-12 months to convert; consistent low-frequency contact keeps you top of mind without being pushy.</p>
          </section>
          <section id="nurture-to-close" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Moving from Nurture to Conversion</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The transition from nurture to conversion is a tone shift, not a script switch. The relationship you have built through nurturing is the foundation for the conversion conversation — abruptly going from educational content to a sales pitch destroys the relationship.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The conversion invitation: frame it as a natural next step based on what you know about them. "Given what you've shared about [specific situation], I think [offer] would be the most direct path to [their stated goal]. Would it make sense to explore that?" This is not a pitch — it is a recommendation based on relationship.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Post-conversion nurture: the relationship does not end at purchase. A post-purchase nurture sequence that checks in, provides implementation support, and builds toward the next purchase is one of the highest-ROI nurture investments you can make. Customers who receive post-purchase nurturing have 40-60% higher lifetime values than those who do not.</p>
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
              <div className="sticky top-24"><SocialShareButtons title="Instagram Lead Nurturing Automation: From First Contact to Ready to Buy" /></div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

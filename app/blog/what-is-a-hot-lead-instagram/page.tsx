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
  title: 'What Is a Hot Lead on Instagram? (And How to Automate Your Response) | PostEngage Blog',
  description: 'Learn how to identify hot leads from Instagram signals, set up automated responses that strike while interest is peak, and never let a high-intent prospect go cold again.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'defining-hot-lead', title: 'Defining a Hot Lead on Instagram' },
    { id: 'signals-and-triggers', title: 'Hot Lead Signals and Triggers' },
    { id: 'instant-response-strategy', title: 'The Instant Response Strategy' },
    { id: 'scoring-leads', title: 'Lead Scoring in Your DM Automation' },
    { id: 'hot-lead-mistakes', title: 'Mistakes That Let Hot Leads Go Cold' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        {/* Hero */}
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Lead Generation</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What Is a Hot Lead on Instagram? (And How to Automate Your Response)</h1>
              <p className="text-xl text-gray-600 mb-6">Learn how to identify hot leads from Instagram signals, set up automated responses that strike while interest is peak, and never let a high-intent prospect go cold again.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>May 24, 2026</span>
                <span>·</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-12 gap-8">
            {/* TOC Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Article */}
            <article className="col-span-12 lg:col-span-7">

          <section id="defining-hot-lead" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Defining a Hot Lead on Instagram</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A hot lead is someone who has recently demonstrated high purchase intent through their behavior. On Instagram, this looks different than in a CRM. There is no form fill, no page visit duration — just a collection of behavioral signals that, when interpreted correctly, indicate someone is close to a buying decision.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Hot leads on Instagram share three characteristics: recency (the signal happened within 24-48 hours), specificity (they engaged with purchase-related content, not just general interest content), and directness (they took an action that required effort, like commenting a keyword, sending a DM, or clicking a link in bio).</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The critical distinction: a warm lead is someone who follows you and likes your posts. A hot lead is someone who just commented on your offer post, DM'd you a question about your product, or clicked your link in bio for the third time this week. Every hour of delay reduces conversion probability by approximately 40% for intent-based leads.</p>
          </section>

          <section id="signals-and-triggers" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hot Lead Signals and Triggers</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Instagram gives you more buying intent signals than most businesses realize. The key is setting up your automation to respond to them in real time.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Strongest signals that warrant an immediate personalized response: comments a keyword on an offer post, DMs asking a price or logistics question, comments on a testimonial or case study post.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Medium signals that warrant a nurture sequence: saves a post about your offer, watches a full product demo Reel, DMs asking a general question about how something works, engages with 3 or more posts in a single day.</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Hot Lead Signal Hierarchy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>HOT: Keyword comment on offer post — trigger instant automated DM</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>HOT: Price question in DMs — trigger instant human or auto response</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>WARM: Post save on product content — enter DM nurture sequence</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>WARM: Full Reel view on demo content — Story retargeting plus DM invite</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>COLD: New follower — welcome sequence (low urgency)</li>
                </ul>
              </div>
          </section>

          <section id="instant-response-strategy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Instant Response Strategy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Speed is everything for hot leads. Research consistently shows that responding within 5 minutes of a high-intent signal is 21x more effective than responding within 30 minutes. Automation makes sub-minute response times possible at any scale.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Your instant response needs to do three things: acknowledge the specific action they took (so it feels relevant, not generic), deliver immediate value (so the interaction starts with them receiving, not you asking), and create a natural next step.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Example for a "PRICING" keyword comment: acknowledge their interest, give a quick pricing summary, and ask one qualifying question to understand their situation before going deeper. Keep it conversational — a starting point for a real exchange, not a sales script.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Elements of a perfect hot lead instant response:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Acknowledge their specific action (not a generic greeting)</li>
                <li>Deliver immediate value before asking anything</li>
                <li>Ask ONE qualifying question to understand their situation</li>
                <li>Keep it conversational — not a sales pitch, a conversation starter</li>
                <li>Include a soft next step: a question, resource, or easy yes/no</li>
              </ul>
          </section>

          <section id="scoring-leads" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lead Scoring in Your DM Automation</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">As leads move through your DM sequences, they provide data that lets you score their likelihood to buy. Basic lead scoring in Instagram automation works by assigning points to behaviors and branching the sequence based on score.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Point assignments (example): responds to first DM (+10), answers a qualifying question (+15), clicks a product link (+20), asks a price-related question (+25), mentions a timeline (+20), mentions a budget (+30). Leads above a threshold score get flagged for priority human follow-up.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">In practice, your automation handles lead qualification while you personally only spend time on the leads most likely to buy. A business getting 500 DM conversations per month might identify 50-75 as high-score hot leads — the ones worth personal attention.</p>
          </section>

          <section id="hot-lead-mistakes" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mistakes That Let Hot Leads Go Cold</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Mistake 1: Slow response. If your automation does not trigger within 60 seconds of the signal, you are losing hot leads. Test your flows regularly to confirm they fire instantly.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Mistake 2: Generic opening message. A hot lead who just asked about pricing and gets "Thanks for reaching out! What are you interested in?" is immediately less excited. Reference their specific action.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Mistake 3: Too many messages too fast. Hot does not mean desperate. One message, wait for a reply. One follow-up after 4-6 hours of no reply. One final follow-up at 24 hours. Then stop.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Mistake 4: Forgetting to close the loop. When a hot lead says they are interested but will get back to you — set a reminder to follow up in 48 hours. A personal check-in message from a real person at the right moment closes deals that full automation cannot.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Hot lead recovery checklist:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Check automation trigger timing — should fire within 60 seconds</li>
                <li>Review opening message — is it specific to their action?</li>
                <li>Audit follow-up cadence — max 2-3 touchpoints before pausing</li>
                <li>Flag high-score leads for personal follow-up within 48 hours</li>
                <li>Review drop-off points in sequence — where are hot leads going cold?</li>
              </ul>
          </section>

              {/* CTA */}
              <div className="bg-linear-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
                <h2 className="text-2xl font-bold mb-3">Ready to Automate Your Instagram Growth?</h2>
                <p className="text-violet-100 mb-6">PostEngage helps you turn Instagram engagement into leads, bookings, and sales — automatically.</p>
                <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-violet-50">
                  <Link href="/#waitlist">Start Free Today</Link>
                </Button>
              </div>

              <div className="mt-12">
                <NewsletterForm />
              </div>
            </article>

            {/* Share Sidebar */}
            <aside className="hidden lg:block lg:col-span-2">
              <div className="sticky top-24">
                <SocialShareButtons title="What Is a Hot Lead on Instagram? (And How to Automate Your Response)" />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

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
  title: 'Instagram Automation for Bakeries | PostEngage Blog',
  description: 'How bakeries and custom cake makers use Instagram DM automation to respond to pricing questions, capture custom order details, and fill their production calendar automatically.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'bakery-instagram-problem', title: 'Why Bakeries Lose Orders on Instagram' },
    { id: 'custom-order-flow', title: 'Building a Custom Order Inquiry Automation Flow' },
    { id: 'pricing-questions', title: 'Handling Pricing Questions at Scale' },
    { id: 'seasonal-automation', title: 'Seasonal Campaign Automation for Bakeries' },
    { id: 'repeat-customer', title: 'Turning One-Time Buyers Into Repeat Customers' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Food & Beverage</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Instagram Automation for Bakeries: Turn Cake Photos Into Custom Order Inquiries</h1>
              <p className="text-xl text-gray-600 mb-6">Bakeries that automate Instagram DMs turn every photo into a potential custom order. Here is the system that fills your order book.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>March 17, 2026</span><span>·</span><span>8 min read</span>
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

          <section id="bakery-instagram-problem" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Bakeries Lose Orders on Instagram</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A bakery posts a stunning tiered cake on Instagram. It gets 500 likes. People comment 'gorgeous', 'how much?', and 'where are you located?' The baker is in the kitchen for the next 6 hours. By the time she responds, 3 of those commenters have ordered from someone else.</p><p className="text-gray-700 mb-4 leading-relaxed">This scenario plays out dozens of times per week for most bakeries on Instagram. The product photography does its job — it creates desire. But without a system to capture that desire and convert it into an order, most of the social proof is just vanity.</p><p className="text-gray-700 mb-4 leading-relaxed">Bakeries are particularly vulnerable to this problem because production schedules create natural offline periods. You cannot respond to DMs while you are decorating a wedding cake. Automation eliminates this gap by responding instantly regardless of what you are doing in the kitchen.</p>
          </section>
          <section id="custom-order-flow" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building a Custom Order Inquiry Automation Flow</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A custom order flow for bakeries needs to gather specific information to determine feasibility and provide accurate pricing: the occasion, the date needed, the serving count, flavor preferences, and design complexity. This information traditionally requires multiple back-and-forth messages — automation collects it conversationally in one flow.</p><p className="text-gray-700 mb-4 leading-relaxed">Start with the warm acknowledgment: 'Thank you for reaching out! I would love to help with your custom cake. A few quick questions so I can give you accurate details...' Then present 2 to 3 multiple-choice questions that guide the conversation efficiently.</p><p className="text-gray-700 mb-4 leading-relaxed">By the end of the flow, you have everything you need to provide a quote or schedule a consultation call for complex orders. The customer feels heard and informed; you have the information you need without a 3-day back-and-forth.</p>
          </section>
          <section id="pricing-questions" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Handling Pricing Questions at Scale</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Pricing questions are the most common — and most sensitive — inquiry bakeries receive on Instagram. Responding to 'how much?' without enough context either gives a number that is too low (creating a race to the bottom) or too high (scaring away good customers who would have paid more if they understood the value).</p><p className="font-semibold text-gray-800 mt-6 mb-2">The right framework for pricing DMs:</p><p className="text-gray-700 mb-4 leading-relaxed">Never lead with a number. Lead with a question that establishes scope: 'Great question! Pricing depends on the size, design complexity, and any special dietary requirements. For a 3-tier wedding cake serving 100 guests with custom florals, for example, our starting price is $[X]. What is the occasion you have in mind?'</p><p className="text-gray-700 mb-4 leading-relaxed">This response establishes a reference point without boxing you in, demonstrates your range and capability, and opens a conversation that allows you to understand their needs before quoting.</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Bakery Instagram Automation Setup</h3>
                <ul className="space-y-2">
                  ['<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Keyword triggers: \'price\', \'order\', \'how much\', \'custom\'</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Auto-reply with your starting prices and order form link</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Ask: occasion, date, serving size, flavor preferences</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Set minimum order lead time in automated message</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Follow-up 48 hours after inquiry if no order placed</li>']
                </ul>
              </div>
          </section>
          <section id="seasonal-automation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Campaign Automation for Bakeries</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Seasonal campaigns are high-opportunity periods for bakeries — Valentine's Day, Mother's Day, graduation season, Halloween, and Christmas all drive significant spikes in custom order inquiries. Automation allows you to prepare for these spikes and capitalize on every inquiry.</p><p className="text-gray-700 mb-4 leading-relaxed">Set up season-specific automation campaigns 3 to 4 weeks before each peak holiday. A Valentine's Day campaign might have a special keyword ('LOVE' or 'VALENTINE') that triggers a message about your Valentine's offerings, limited availability, and early-order discount.</p><p className="text-gray-700 mb-4 leading-relaxed">Most importantly, set up an automated 'fully booked' message for when your production calendar is at capacity. This message can still capture the inquiry for a waitlist or refer them to a future date, turning a potentially negative 'we are booked' into a positive 'you are on our list for next time.'</p>
          </section>
          <section id="repeat-customer" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Turning One-Time Buyers Into Repeat Customers</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Repeat customers are the foundation of a sustainable bakery business. Someone who orders a birthday cake, then a baby shower cake, then a graduation cake is worth many times more than a one-time customer. Automation helps you stay top of mind between orders.</p><p className="text-gray-700 mb-4 leading-relaxed">Set up a follow-up message 2 to 3 weeks after every completed order: 'Hope everyone loved the [occasion] cake! Do you have any upcoming celebrations where we can help?' This simple message generates a surprisingly high rate of repeat orders.</p><p className="text-gray-700 mb-4 leading-relaxed">For customers who provided their birthday or anniversary during the custom order process, set up automated reminder messages 6 to 8 weeks before that date. 'Just a reminder that your daughter's birthday is coming up in 6 weeks — slots are filling up fast!' This proactive outreach feels like exceptional service and generates orders you would otherwise never see.</p>
          </section>
              <div className="bg-linear-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
                <h2 className="text-2xl font-bold mb-3">Ready to Automate Your Instagram Growth?</h2>
                <p className="text-violet-100 mb-6">PostEngage.ai turns every comment and DM into a lead, booking, or sale — automatically, in your exact voice.</p>
                <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-violet-50">
                  <Link href="/#waitlist">Start Free Today</Link>
                </Button>
              </div>
              <div className="mt-12"><NewsletterForm /></div>
            </article>
            <aside className="hidden lg:block lg:col-span-2">
              <div className="sticky top-24"><SocialShareButtons title="Instagram Automation for Bakeries: Turn Cake Photos Into Custom Order Inquiries" /></div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

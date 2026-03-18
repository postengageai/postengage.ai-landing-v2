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
  title: 'Instagram Automation for Florists | PostEngage Blog',
  description: 'How florists and floral designers use Instagram DM automation to handle pricing questions, capture custom order details, and fill seasonal order calendars automatically.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'florist-instagram-challenge', title: 'The Florist Instagram Challenge' },
    { id: 'inquiry-automation', title: 'Automating Floral Inquiry Responses' },
    { id: 'custom-arrangement-flow', title: 'The Custom Arrangement Order Flow' },
    { id: 'seasonal-peaks', title: 'Managing Valentine's Day and Mother's Day Traffic' },
    { id: 'subscription-flowers', title: 'Selling Flower Subscription Services via DM' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Floristry</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Instagram Automation for Florists: Convert Bouquet Admirers Into Paying Customers</h1>
              <p className="text-xl text-gray-600 mb-6">Florists who automate Instagram DMs turn every floral photo into an order opportunity. Here is the exact system.</p>
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

          <section id="florist-instagram-challenge" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Florist Instagram Challenge</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Florists face a unique Instagram challenge: their work is inherently visual and creates strong emotional responses, but translating that emotional response into an order requires multiple steps that most potential customers abandon. Seeing a beautiful bouquet, commenting 'gorgeous!', and then actually ordering flowers requires intention that fades quickly without a system to capture it.</p><p className="text-gray-700 mb-4 leading-relaxed">The floral industry is also highly seasonal, with 60 to 70 percent of annual revenue concentrated around Valentine's Day, Mother's Day, weddings, and Christmas. During these peak periods, the volume of inquiries becomes completely unmanageable without automation.</p><p className="text-gray-700 mb-4 leading-relaxed">Florists who have implemented Instagram DM automation report that it is particularly valuable during the 2 to 3 weeks before major holidays when inquiry volume spikes 5 to 10 times above normal. Without automation, those peak periods involve working 14-hour days just on communication — with automation, the communication handles itself while the florist focuses on creating arrangements.</p>
          </section>
          <section id="inquiry-automation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Automating Floral Inquiry Responses</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Floral inquiry automation needs to handle three distinct inquiry types: standard orders (bouquets, arrangements from your existing menu), custom designs (bespoke arrangements for specific occasions), and wedding floristry (larger, more complex engagements requiring a consultation).</p><p className="text-gray-700 mb-4 leading-relaxed">Each type needs a slightly different opening response. Standard orders should direct to your menu or online shop immediately. Custom designs should ask qualifying questions about the occasion, style preferences, and budget. Wedding floristry should qualify budget and date first before investing time in a consultation conversation.</p><p className="text-gray-700 mb-4 leading-relaxed">Set up separate keyword triggers for each type: BOUQUET or ARRANGEMENT for standard, CUSTOM or DESIGN for bespoke, and WEDDING FLOWERS for bridal. This routing ensures each inquiry gets the right response immediately rather than a generic reply that may not be relevant.</p>
          </section>
          <section id="custom-arrangement-flow" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Custom Arrangement Order Flow</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Custom floral arrangements require specific information before you can provide any meaningful quote: the occasion, the date needed, the style preference (romantic, modern, wild, structured), the approximate budget, and any specific flowers or colors requested.</p><p className="font-semibold text-gray-800 mt-6 mb-2">Custom arrangement inquiry flow:</p><p className="text-gray-700 mb-4 leading-relaxed">Message 1: Warm acknowledgment and first question (occasion and date). Message 2: Style and preference questions. Message 3: Budget and delivery/pickup preference. Message 4: Summary of what you understood + your quote or consultation offer.</p><p className="text-gray-700 mb-4 leading-relaxed">This 4-message flow collects everything you need while feeling like a natural conversation rather than a form. Most custom order inquiries that reach this point convert at 50 to 65 percent — significantly higher than inquiries that start with 'fill out this form.'</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Florist DM Automation Quick Start</h3>
                <ul className="space-y-2">
                  ['<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Keyword triggers: \'price\', \'order\', \'delivery\', \'wedding flowers\'</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Opening message: warm acknowledgment + key questions</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Auto-share your full menu/price list PDF</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Set up seasonal campaign triggers 3 weeks before peak dates</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Post-delivery follow-up for repeat order cultivation</li>']
                </ul>
              </div>
          </section>
          <section id="seasonal-peaks" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Valentine's Day and Mother's Day Traffic</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Valentine's Day and Mother's Day together can represent 30 to 40 percent of a florist's annual revenue — but the 2-week window around each holiday creates an almost unmanageable communication load. Automation is not a nice-to-have during these periods; it is a survival tool.</p><p className="text-gray-700 mb-4 leading-relaxed">Set up Valentine's Day automation campaigns in late January. Create a specific Valentine's keyword ('VALENTINE' or 'LOVE'), prepare a seasonal catalog or price list, set minimum order dates, and create an 'I am fully booked' response for when capacity is reached.</p><p className="text-gray-700 mb-4 leading-relaxed">Critical for peak periods: set up your availability honestly. An automated response that says 'We still have availability for February 14th deliveries — but spots are going fast!' creates urgency and is more honest than a generic response that disappoints customers later.</p>
          </section>
          <section id="subscription-flowers" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selling Flower Subscription Services via DM</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Flower subscriptions — weekly or monthly fresh arrangement deliveries — are one of the highest-value products a florist can sell, and Instagram is one of the best channels for selling them. A well-positioned subscription offer converts well in DMs because the value proposition (fresh flowers in your home every week) is highly desirable and emotionally resonant.</p><p className="text-gray-700 mb-4 leading-relaxed">Position the subscription as an exclusive offering rather than a commodity. 'Our Bloom Club members receive a fresh seasonal arrangement every week, curated around what is best at the flower market — no two arrangements are ever the same' is far more compelling than 'weekly flower delivery service available.'</p><p className="text-gray-700 mb-4 leading-relaxed">Use Instagram automation to follow up with first-time buyers 2 weeks after their order with a subscription offer. 'Hope you loved your arrangement! Did you know we offer a monthly subscription that delivers fresh blooms to your door every week? Members save 20 percent versus ordering individually.'</p>
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
              <div className="sticky top-24"><SocialShareButtons title="Instagram Automation for Florists: Convert Bouquet Admirers Into Paying Customers" /></div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

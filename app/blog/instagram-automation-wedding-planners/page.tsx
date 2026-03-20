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
  title: 'Instagram Automation for Wedding Planners | PostEngage Blog',
  description: 'How wedding planners use Instagram DM automation to respond instantly to pricing inquiries, book discovery calls, and fill their calendar without spending hours online.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'why-automation-matters', title: 'Why Response Speed Wins Wedding Bookings' },
    { id: 'inquiry-flow', title: 'Building Your Wedding Inquiry Automation Flow' },
    { id: 'scripts', title: 'DM Scripts That Convert Bride and Groom Inquiries' },
    { id: 'booking-automation', title: 'Automating the Discovery Call Booking Process' },
    { id: 'results', title: 'What to Expect: Results Timeline for Wedding Planners' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Wedding & Events</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Instagram Automation for Wedding Planners: Turn Inquiries Into Booked Clients</h1>
              <p className="text-xl text-gray-600 mb-6">Wedding planners who automate their Instagram DMs book consultations while they are on site at venues. Here is the exact system that works.</p>
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

          <section id="why-automation-matters" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Response Speed Wins Wedding Bookings</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Every weekend you are on site at a wedding, your Instagram is getting DMs from couples planning their own. If those messages wait 48 hours for a reply, those couples have already booked someone else. The wedding planning industry runs on emotion and urgency — couples in the excitement of engagement want responses immediately, not Monday morning.</p><p className="text-gray-700 mb-4 leading-relaxed">Planners who use automated DMs report that 60 to 70 percent of their booked clients for the following season came from Instagram inquiries. The ones who convert most are not the most talented planners — they are the most responsive. Automation levels that playing field completely.</p><p className="text-gray-700 mb-4 leading-relaxed">The average engaged couple messages 5 to 8 wedding planners simultaneously. The first one to respond with a warm, helpful reply almost always gets the discovery call. PostEngage.ai ensures you are always first, even when you are photographing a ceremony.</p>
          </section>
          <section id="inquiry-flow" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Your Wedding Inquiry Automation Flow</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A wedding inquiry flow has three stages. The first stage is the initial response — triggered the moment someone comments 'pricing', 'available', or 'wedding' on any of your posts, or sends you a direct message. This response should feel warm and personal, not automated.</p><p className="text-gray-700 mb-4 leading-relaxed">The second stage is qualification. You need to know their wedding date, rough guest count, and venue type to understand whether they are the right fit. Build a conversational flow that asks these questions naturally over 2 to 3 messages rather than presenting a form. Couples respond much better to conversation than questionnaires.</p><p className="text-gray-700 mb-4 leading-relaxed">The third stage is conversion. Once you have the basic details, the flow should present your discovery call as the natural next step — with a direct calendar link. Removing the back-and-forth of scheduling is worth an additional 20 to 30 percent conversion on its own.</p>
          </section>
          <section id="scripts" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DM Scripts That Convert Bride and Groom Inquiries</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The best DM scripts for wedding planners lead with empathy before logistics. Congratulating the couple on their engagement before asking about their date makes the conversation feel human, not transactional.</p><p className="font-semibold text-gray-800 mt-6 mb-2">High-converting opening message:</p><p className="text-gray-700 mb-4 leading-relaxed">"Congratulations on your engagement! I would love to chat about your vision for your wedding day. What date are you thinking, and where are you leaning for the venue?"</p><p className="text-gray-700 mb-4 leading-relaxed">Notice this message does not start with pricing or packages. It starts with their story. That shift alone doubles response rates for wedding planners compared to messages that lead with 'here is what I offer.'</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Wedding Planner DM Automation Checklist</h3>
                <ul className="space-y-2">
                  ['<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Set up keyword trigger for \'wedding date\', \'available\', \'pricing\'</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Auto-reply with your services overview + calendar link</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Follow-up message 24 hours later if no booking</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Capture name, wedding date, and budget in the flow</li>', '<li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Route qualified leads to personal follow-up list</li>']
                </ul>
              </div>
          </section>
          <section id="booking-automation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Automating the Discovery Call Booking Process</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The discovery call is where wedding planners close. The automation's job is simply to get couples onto that call — not to close them in the DMs. Set up your calendar tool (Calendly, Acuity, or Google Calendar booking) and include the link in the final message of your qualification flow.</p><p className="text-gray-700 mb-4 leading-relaxed">Send a calendar link with two to three specific available slots rather than an open calendar. 'I have Tuesday at 2pm or Thursday at 6pm — which works for you?' converts far better than a generic booking page because it creates commitment through choice rather than open-ended action.</p><p className="text-gray-700 mb-4 leading-relaxed">Set up a reminder DM 24 hours before the scheduled call. Include a brief note like 'Looking forward to chatting tomorrow about your wedding vision.' This simple message cuts no-show rates by roughly 35 percent.</p>
          </section>
          <section id="results" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect: Results Timeline for Wedding Planners</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Wedding planners who implement Instagram DM automation typically see inquiry response rates jump from under 40 percent to 95 percent within the first week. The shift in consultation bookings comes in weeks two and three as the pipeline builds.</p><p className="text-gray-700 mb-4 leading-relaxed">By month two, most planners report that their consultation calendar is booking out 3 to 4 weeks in advance — something most had not experienced from Instagram before. By month three, you will have enough data to know which posts drive the highest quality inquiries and can start optimizing your content accordingly.</p><p className="text-gray-700 mb-4 leading-relaxed">The longer-term benefit is time recovery. Wedding planners spend an average of 8 to 12 hours per month on Instagram DM management. Automation brings that to under 2 hours while producing better conversion results.</p>
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
              <div className="sticky top-24"><SocialShareButtons title="Instagram Automation for Wedding Planners: Turn Inquiries Into Booked Clients" /></div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

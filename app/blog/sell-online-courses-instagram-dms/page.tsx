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
  title: 'How to Sell Online Courses Through Instagram DMs (Step-by-Step) | PostEngage Blog',
  description: 'The complete playbook for course creators using Instagram DM automation to generate enrollment, handle objections, and fill cohorts without a complex sales funnel.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'dm-vs-funnel', title: 'DMs vs. Funnels: Why Course Creators Are Switching' },
    { id: 'pre-launch-strategy', title: 'Pre-Launch DM Strategy' },
    { id: 'enrollment-conversation', title: 'The Enrollment Conversation Framework' },
    { id: 'objection-handling', title: 'Handling Objections in DMs' },
    { id: 'evergreen-vs-cohort', title: 'Evergreen vs. Cohort: Different DM Strategies' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        {/* Hero */}
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Course Creators</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Sell Online Courses Through Instagram DMs (Step-by-Step)</h1>
              <p className="text-xl text-gray-600 mb-6">The complete playbook for course creators using Instagram DM automation to generate enrollment, handle objections, and fill cohorts without a complex sales funnel.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>May 17, 2026</span>
                <span>·</span>
                <span>10 min read</span>
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

          <section id="dm-vs-funnel" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DMs vs. Funnels: Why Course Creators Are Switching</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The traditional course launch playbook is broken. Build a webinar funnel, run ads, get email subscribers, nurture for 2 weeks, launch, and watch 80% of your list ignore you. Meanwhile, you have spent thousands on ads before making a dollar.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">DM-based selling is fundamentally different. Instead of broadcasting to thousands of cold prospects, you are having individual conversations with people who already follow you and trust you. Webinar funnels typically convert at 1-3% of registrants. DM conversations close at 10-30% when the lead is properly qualified.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The math works for mid-size audiences. If you have 5,000 followers and 300 people comment on a course teaser post, and your automation has DM conversations with all 300, and 15% enroll in your $997 course — that is $44,865 from a single post with no ad spend. This is not hypothetical. Course creators are doing this every launch cycle.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">What makes DMs work for course sales:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Personal conversation builds trust faster than email sequences</li>
                <li>Real-time objection handling beats FAQ pages</li>
                <li>Scarcity and urgency land harder in direct conversation</li>
                <li>Mobile-native experience — students are already in Instagram</li>
                <li>No landing page or webinar tech required</li>
              </ul>
          </section>

          <section id="pre-launch-strategy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Launch DM Strategy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The 30-day pre-launch period is where DM automation creates massive leverage. Most course creators waste this window posting generic "something big is coming" content. Instead, use it to build a list of warm prospects through DM conversations.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Week 1-2: Post content that illuminates the problem your course solves. End each post with a comment keyword trigger. Everyone who comments enters a DM sequence where you deliver additional value and ask: "Is this the main thing holding you back right now?" Their answer qualifies them.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Week 3: Announce the course is coming. DM everyone who has been in your pre-launch sequences to invite them to a waitlist with early access and an exclusive bonus.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Week 4 (launch week): DM your waitlist 24 hours before cart opens. DM your full warm prospect list at cart open. Follow up with everyone who clicked but did not enroll at the 48-hour mark.</p>
          </section>

          <section id="enrollment-conversation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Enrollment Conversation Framework</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The goal of an enrollment DM conversation is not to close immediately — it is to understand the prospect situation and connect your course to their specific goal. The framework has four stages: Situation, Problem, Implication, and Payoff.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Situation: ask what they are working on right now. Problem: ask what is the biggest thing stopping them. Implication: ask how long that has been the case and what it has cost them. Payoff: explain exactly how a specific module of your course addresses that stated problem.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">This is not manipulation. It is clarifying whether your course is actually the right solution. When you explain the payoff in terms of their own stated problem, enrollment happens naturally because you are solving something they already told you they need to solve.</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Enrollment Conversation Checklist</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>Understand their current situation before pitching</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>Let them name their number one problem in their own words</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>Ask how long they have had the problem (urgency amplifier)</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>Reference their specific problem when explaining your course</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>Address price in terms of what the problem is costing them</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">→</span>Offer a payment plan proactively to remove the biggest objection</li>
                </ul>
              </div>
          </section>

          <section id="objection-handling" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Handling Objections in DMs</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">"I will think about it." In an email funnel, this means the sale is probably lost. In a DM conversation, it is an invitation to understand the real hesitation. Reply by asking what the main thing they are on the fence about is.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">"It is too expensive." Do not discount immediately. First explore what they are comparing it to. Often they are comparing to a low-ticket course, not realizing yours is a different category. If price is genuinely the barrier, offer a payment plan that breaks the investment into monthly amounts.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">"I do not have time." This is often fear of starting, not actual time shortage. Address it directly by showing the time commitment per week and noting that most students complete it while working full-time. Ask what their week typically looks like to understand the real concern.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Top objections and DM responses:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>"Too busy" — show time commitment is manageable, ask about their schedule</li>
                <li>"Too expensive" — uncover the comparison, offer payment plan</li>
                <li>"I will wait" — ask what they are waiting for, create legitimate urgency</li>
                <li>"Not sure it will work for me" — ask about their specific situation, address directly</li>
                <li>"Already tried similar things" — ask what did not work, differentiate your approach</li>
              </ul>
          </section>

          <section id="evergreen-vs-cohort" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Evergreen vs. Cohort: Different DM Strategies</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Evergreen courses and cohort courses require different DM automation strategies because the buying decision is different. For evergreen courses, urgency must be manufactured — limited-time bonuses, periodic price increases, or enrollment windows. DM automation creates that urgency through personal conversations and time-limited offers.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">For cohort courses, urgency is real — there is a start date and limited spots. DM automation for cohorts should mirror a sales process: identify prospects, qualify, handle objections, and close with a specific enrollment deadline.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The biggest leverage point for evergreen: create a DM-exclusive bonus not available anywhere else. If you enroll through the DM conversation, you get something extra — a 1:1 implementation call, an additional module, lifetime access upgrade. This makes the DM the preferred enrollment path and lets you track ROI precisely.</p>
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
                <SocialShareButtons title="How to Sell Online Courses Through Instagram DMs (Step-by-Step)" />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

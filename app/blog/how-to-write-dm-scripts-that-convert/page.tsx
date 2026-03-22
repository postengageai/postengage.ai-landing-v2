import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LandingHeader } from '@/components/landing-header';
import { LandingFooter } from '@/components/landing-footer';
import { TableOfContents } from '@/components/table-of-contents';
import { SocialShareButtons } from '@/components/social-share-buttons';
import { NewsletterForm } from '@/components/newsletter-form';
import { ArticleJsonLd } from '@/components/blog/article-jsonld';
import { BlogJsonLd } from '@/components/blog/blog-json-ld';

export const metadata: Metadata = {
  title: 'How to Write Instagram DM Scripts That Convert | PostEngage Blog',
  description:
    'A complete guide to writing Instagram DM scripts that feel personal, build trust, and consistently convert leads into customers — even when fully automated.',
};

export default function BlogPost() {
  const tocItems = [
    {
      id: 'why-scripts-fail',
      title: 'Why Most DM Scripts Fail (And How to Fix Them)',
    },
    {
      id: 'voice-principles',
      title: 'The 5 Principles of Scripts That Sound Human',
    },
    {
      id: 'script-structures',
      title: 'The 3 Core DM Script Structures for Any Goal',
    },
    { id: 'objection-handling', title: 'Scripting Objection Handling in DMs' },
    { id: 'testing-scripts', title: 'Testing and Optimizing Your DM Scripts' },
  ];
  return (
    <div className='min-h-screen bg-white'>
      <ArticleJsonLd
        title='How to Write Instagram DM Scripts That Convert'
        description='A complete guide to writing Instagram DM scripts that feel personal, build trust, and consistently convert leads into customers — even when fully automated.'
        slug='how-to-write-dm-scripts-that-convert'
        datePublished='2026-03-01'
        category='Copywriting'
      />

      <LandingHeader />
      <main>
        <BlogJsonLd
          title='How to Write Instagram DM Scripts That Convert'
          description='A complete guide to writing Instagram DM scripts that feel personal, build trust, and consistently convert leads into customers — even when fully automated.'
          slug='how-to-write-dm-scripts-that-convert'
          date='2026-03-16'
          category='Copywriting'
          readingTime='8 min read'
        />
        <div className='bg-linear-to-b from-violet-50 to-white border-b border-gray-100'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className='max-w-3xl mx-auto text-center'>
              <Badge className='mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100'>
                Copywriting
              </Badge>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                How to Write Instagram DM Scripts That Convert: A Complete
                Copywriting Guide
              </h1>
              <p className='text-xl text-gray-600 mb-6'>
                Most DM scripts fail because they sound automated. Here is how
                to write scripts that feel human, build trust, and convert at
                industry-leading rates.
              </p>
              <div className='flex items-center justify-center gap-4 text-sm text-gray-500'>
                <span>March 17, 2026</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-12 gap-8'>
            <aside className='hidden lg:block lg:col-span-3'>
              <div className='sticky top-24'>
                <TableOfContents items={tocItems} />
              </div>
            </aside>
            <article className='col-span-12 lg:col-span-7'>
              <section id='why-scripts-fail' className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Why Most DM Scripts Fail (And How to Fix Them)
                </h2>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  The most common DM automation failure is not a technical
                  problem — it is a copy problem. Scripts that sound robotic,
                  that open with 'Hi there!' or 'Great news!', that pepper every
                  message with exclamation marks, are immediately identified as
                  automated by anyone over 25. Once a recipient decides they are
                  talking to a bot, the conversation is over.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  The paradox is that the scripts most people write for
                  automation are the opposite of how they would actually talk to
                  someone. In real life, you would not open a sales conversation
                  with 'I wanted to reach out and share some exciting
                  information about our amazing offer!' But somehow in written
                  DMs, this kind of language feels normal to write.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Great DM scripts are written in the first person, use specific
                  details, ask real questions, and read exactly like a message
                  from a human who cares about the recipient. They require more
                  thought to write but produce dramatically better results.
                </p>
              </section>
              <section id='voice-principles' className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  The 5 Principles of Scripts That Sound Human
                </h2>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Principle 1: Short sentences. Conversational text messages are
                  rarely more than 2 to 3 sentences. Long paragraphs signal that
                  a robot wrote this. Keep opening messages under 3 sentences.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Principle 2: Specific over generic. 'I saw your post about X'
                  beats 'I love your content.' Specific references create
                  connection even when automated, because they demonstrate that
                  the message is relevant to this particular person.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Principle 3: Question ends. End most messages with a question.
                  This creates conversational momentum and gives the recipient a
                  natural action to take. 'What is your biggest challenge with
                  X?' is far more compelling than 'Let me know if you have any
                  questions.'
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Principle 4: No filler words. Remove 'definitely',
                  'absolutely', 'great question', and 'I completely understand.'
                  These phrases are automation tells — human conversationalists
                  rarely use them.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Principle 5: Consistent voice. The script should match the
                  voice on your profile. If your captions are casual and use
                  humor, the DM scripts should too.
                </p>
              </section>
              <section id='script-structures' className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  The 3 Core DM Script Structures for Any Goal
                </h2>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Structure 1 — The Resource Delivery: For lead magnet delivery.
                  Open: deliver the resource as promised. Follow-up: add one
                  genuinely useful observation. Transition: ask a qualifying
                  question that naturally leads to the paid offer.
                </p>
                <p className='font-semibold text-gray-800 mt-6 mb-2'>
                  Structure 2 — The Conversation Opener:
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  For cold or warm outreach. Open: specific observation about
                  them. Follow-up: question about their current situation.
                  Transition: bridge from their situation to how you help.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Structure 3 — The Direct Offer: For high-intent leads who
                  commented on purchase-intent content. Open: acknowledge their
                  interest. Middle: specific offer with clear value proposition.
                  End: single CTA with deadline or scarcity.
                </p>
                <div className='bg-violet-50 border border-violet-200 rounded-xl p-6 my-6'>
                  <h3 className='font-bold text-violet-900 mb-3'>
                    DM Script Quality Checklist
                  </h3>
                  <ul className='space-y-2'>
                    ['
                    <li className='flex items-start gap-2 text-sm text-violet-800'>
                      <span className='text-violet-500 mt-0.5'>&#x2192;</span>
                      Does it sound like how you actually talk?
                    </li>
                    ', '
                    <li className='flex items-start gap-2 text-sm text-violet-800'>
                      <span className='text-violet-500 mt-0.5'>&#x2192;</span>
                      Does it deliver value before making any request?
                    </li>
                    ', '
                    <li className='flex items-start gap-2 text-sm text-violet-800'>
                      <span className='text-violet-500 mt-0.5'>&#x2192;</span>
                      Does it end with a single clear next step?
                    </li>
                    ', '
                    <li className='flex items-start gap-2 text-sm text-violet-800'>
                      <span className='text-violet-500 mt-0.5'>&#x2192;</span>Is
                      it under 3 sentences for the opening message?
                    </li>
                    ', '
                    <li className='flex items-start gap-2 text-sm text-violet-800'>
                      <span className='text-violet-500 mt-0.5'>&#x2192;</span>
                      Does it avoid generic phrases like \'great question\' or
                      \'definitely\'?
                    </li>
                    ']
                  </ul>
                </div>
              </section>
              <section id='objection-handling' className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Scripting Objection Handling in DMs
                </h2>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Objection handling in DM scripts requires anticipating the 3
                  to 5 most common objections your specific audience raises and
                  writing responses that address them without sounding
                  defensive.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  The most universal objections: 'I need to think about it'
                  (try: 'Of course — what specific questions can I answer to
                  help you decide?'), 'It is too expensive' (try: 'Totally
                  understand — what budget did you have in mind? I may have an
                  option that works better.'), and 'I am not ready yet' (try:
                  'No problem at all — when would be a better time? I can follow
                  up then.').
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Write these as if they are natural conversational responses,
                  not policy statements. The tone should be curious and helpful,
                  not defensive. Someone who raises an objection and receives a
                  thoughtful, genuinely helpful response is far more likely to
                  convert than someone who receives a sales rebuttal.
                </p>
              </section>
              <section id='testing-scripts' className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Testing and Optimizing Your DM Scripts
                </h2>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  DM script optimization is a continuous process. The scripts
                  you write today will perform better after 30 to 60 days of
                  real-world testing and iteration.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Test one variable at a time: opening line tone, question
                  structure, offer positioning, CTA format. If you change
                  multiple things simultaneously, you cannot know what drove a
                  change in performance. Run each variation for at least 100
                  conversations before drawing conclusions.
                </p>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Track reply rate (percentage who respond to your opening
                  message), conversation depth (average number of exchanges),
                  and conversion rate (percentage who take the desired action).
                  All three metrics together tell the complete story. A script
                  with a high reply rate but low conversion is a different
                  problem than one with low reply rate — each requires a
                  different fix.
                </p>
              </section>
              <div className='bg-linear-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12'>
                <h2 className='text-2xl font-bold mb-3'>
                  Ready to Automate Your Instagram Growth?
                </h2>
                <p className='text-violet-100 mb-6'>
                  PostEngage.ai turns every comment and DM into a lead, booking,
                  or sale — automatically, in your exact voice.
                </p>
                <Button
                  asChild
                  size='lg'
                  className='bg-white text-violet-600 hover:bg-violet-50'
                >
                  <Link href='/#waitlist'>Start Free Today</Link>
                </Button>
              </div>
              <div className='mt-12'>
                <NewsletterForm />
              </div>
            </article>
            <aside className='hidden lg:block lg:col-span-2'>
              <div className='sticky top-24'>
                <SocialShareButtons title='How to Write Instagram DM Scripts That Convert: A Complete Copywriting Guide' />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

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
  title: 'Training AI to Match Your Brand Voice in Instagram DMs | PostEngage Blog',
  description: 'How to create brand voice guidelines that actually work for AI-powered DM automation, so your automated replies sound like you rather than a robot.',
};

export default function BlogPost() {
  const tocItems = [
    { id: 'why-voice-matters', title: 'Why Brand Voice Is the Difference Between Converting and Creeping' },
    { id: 'voice-dna', title: 'Building Your Voice DNA Document' },
    { id: 'training-examples', title: 'Creating Training Examples That Work' },
    { id: 'testing-voice', title: "Testing Your Bot's Voice" },
    { id: 'iterating', title: 'Iterating Based on Real Conversations' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <div className="bg-linear-to-b from-violet-50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Branding & AI</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Training AI to Match Your Brand Voice in Instagram DMs</h1>
              <p className="text-xl text-gray-600 mb-6">How to create brand voice guidelines that actually work for AI-powered DM automation, so your automated replies sound like you rather than a robot.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>April 8, 2026</span><span>·</span><span>8 min read</span>
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

          <section id="why-voice-matters" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Brand Voice Is the Difference Between Converting and Creeping</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The reason most automated DMs feel robotic is not the technology — it is the absence of personality. Generic phrases like "Thanks for reaching out!" and "I would love to help you with that!" trigger immediate distrust. Followers have trained themselves to recognize and ignore them.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Brand voice in Instagram DMs means writing like a specific person with a specific personality, not like a customer service chatbot. When your automation sounds like your actual captions, your Stories, your podcast voice — when it sounds like you — recipients respond as if they are talking to a real person.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">This matters commercially. A/B tests consistently show that brand-voice-matched DMs generate 40-60% higher response rates than generic automation templates. The revenue difference between a 20% response rate and a 35% response rate can be measured in thousands of dollars per month for an active account.</p>
              <p className="font-semibold text-gray-800 mt-6 mb-2">Brand voice DM principles:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Write like a specific person, not a service department</li>
                <li>Use your actual vocabulary and sentence length</li>
                <li>Match the formality level of your caption style</li>
                <li>Include your real opinions and perspectives</li>
                <li>Sound like the next DM in an ongoing friendship</li>
              </ul>
          </section>
          <section id="voice-dna" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Your Voice DNA Document</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A Voice DNA document is a reference guide that captures your communication style precisely enough that a human copywriter or an AI can reproduce it without guessing. It should be specific enough to make wrong-sounding copy obviously wrong.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Core Voice DNA components: three words that describe your voice (example: direct, warm, slightly irreverent); three words that are explicitly NOT your voice (example: corporate, formal, salesy); 5-10 example sentences you would actually write vs. 5-10 sentences that sound like someone else pretending to be you; vocabulary list (words you always use, words you never use); punctuation style (do you use ellipses? exclamation points? em dashes?).</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The most useful exercise: paste 10 of your best-performing captions into a document. Have someone else identify the recurring patterns — the sentence starters, the rhythm, the humor style, the level of directness. Those patterns are your voice fingerprint.</p>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-violet-900 mb-3">Voice DNA Template</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>3 words that ARE your voice</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>3 words that are NOT your voice</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>5 sentences in your voice vs. 5 that are not</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Vocabulary: always use / never use list</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>Punctuation and formatting style notes</li>
                  <li className="flex items-start gap-2 text-sm text-violet-800"><span className="text-violet-500 mt-0.5">&#x2192;</span>10 real captions as reference examples</li>
                </ul>
              </div>
          </section>
          <section id="training-examples" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Creating Training Examples That Work</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">AI automation platforms learn from examples. The more specific and high-quality your training examples, the more accurately the bot will replicate your voice.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Create training examples in pairs: situation and ideal response. "Someone comments LINK on a freebie post" paired with "Hey [name]! Here it is: [link]. Let me know what you think — I put a lot into this one." Then add a "wrong version" of the same response so the AI learns what to avoid: "Hello! Thank you for your interest. Here is the link you requested."</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Minimum viable training set: 30-50 example pairs covering your most common DM scenarios. Focus on: initial response to comments, response to "how much does it cost," response to "I'll think about it," response to someone who sounds excited, response to someone who sounds skeptical. Revisit and add 5-10 new examples monthly as you encounter novel scenarios.</p>
          </section>
          <section id="testing-voice" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Testing Your Bot&apos;s Voice</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Before going live with automated DMs, test your bot the same way a quality writer would test their copy — with real human reactions. Have 5-10 people read example automated responses without telling them the responses are automated. Ask: "Does this sound like a real person? Does this sound like someone you would want to respond to?"</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Red flags to test for: responses that are too long (DMs should be conversational, not essays), responses that start with "I" too often, responses that repeat phrases across different scenarios (bots get caught when they use the exact same opener every time), responses that feel like they are selling before they are connecting.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Set up a test account or use your own secondary account to run through your flows manually. The experience of being on the receiving end of your own automation reveals problems that reviewing screenshots never does.</p>
          </section>
          <section id="iterating" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Iterating Based on Real Conversations</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">No brand voice gets it perfectly right on the first attempt. The real refinement happens by reviewing actual DM conversations after your automation goes live.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Weekly review process: read 20-30 real conversations from the past week. Flag any response that got no reply, any response that got a negative reaction, and any response that generated an unusually positive reaction. The negatives tell you where the voice feels off. The positives tell you what to do more of.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The most common iteration: making responses shorter. First-draft automated DMs tend to be too long. Real DM conversations are punchy — 1-3 sentences per message at most. If your automation is sending 5-sentence paragraphs, cut them in half. Response rates almost always improve.</p>
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
              <div className="sticky top-24"><SocialShareButtons title="Training AI to Match Your Brand Voice in Instagram DMs" /></div>
            </aside>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

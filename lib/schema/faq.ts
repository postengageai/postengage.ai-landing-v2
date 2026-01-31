/**
 * FAQ Schema for SEO
 * Helps appear in Google's "People also ask" section
 */

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PostEngage.ai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PostEngage.ai is an AI-powered Instagram automation platform that helps creators and businesses automatically reply to comments and DMs in their unique voice, schedule content, and track analytics. It saves creators an average of 47 hours per month on engagement tasks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the AI reply in my voice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI analyzes your previous comments, captions, and communication style to learn your unique tone, emojis, and phrases. It then generates replies that sound authentically like you, maintaining your personal brand voice while saving you time.',
      },
    },
    {
      '@type': 'Question',
      name: "Is PostEngage.ai compliant with Instagram's policies?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, PostEngage.ai uses Instagram's official API and complies with all platform policies. We are a Meta-approved tool that operates within Instagram's guidelines for automation and messaging.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the credit-based pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You purchase credits that are consumed based on actions: 2 credits for basic comment replies, 4 credits for AI-powered replies, 2 credits for DMs, and 4 credits for AI DMs. Pay only for what you use with no monthly subscriptions required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I try PostEngage.ai for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! New users receive 50 free credits to test all features. No credit card required to start. Setup takes less than 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes PostEngage.ai different from ManyChat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike ManyChat, PostEngage.ai offers AI voice adaptation that learns YOUR unique communication style, pay-as-you-go pricing instead of subscriptions, and a visual flow builder specifically designed for Instagram creators. We focus on authentic engagement that sounds like you.',
      },
    },
  ],
};

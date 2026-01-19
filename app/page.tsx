import { LandingHeader } from '@/components/landing/landing-header';
import { HeroSection } from '@/components/landing/hero-section';
import { SocialProofSection } from '@/components/landing/social-proof-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { SolutionSection } from '@/components/landing/solution-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { PricingPreviewSection } from '@/components/landing/pricing-preview-section';
import { CTASection } from '@/components/landing/cta-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { ComparisonSection } from '@/components/landing/comparison-section';

export default function LandingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'PostEngage.ai',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'AI-powered social media automation platform. Features include Visual Flow Builder for DMs, Instagram Content Scheduling, Advanced Analytics, and Auto-replies for comments and stories.',
            image: 'https://postengage.ai/logo.jpeg',
            featureList: [
              'Visual Automation Builder',
              'Instagram Post Scheduling',
              'Advanced Analytics & Insights',
              'Auto-DM & Comment Reply',
              'Lead Management System',
              'Credit-based Pay-as-you-go Pricing',
            ],
            offers: {
              '@type': 'Offer',
              price: '1',
              priceCurrency: 'INR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '1',
                priceCurrency: 'INR',
                referenceQuantity: {
                  '@type': 'QuantitativeValue',
                  value: '1',
                  unitCode: 'C62', // 'One' unit
                },
              },
              description: 'Pay-as-you-go credit system starting at ₹1/credit',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '1250',
            },
          }),
        }}
      />
      <script
        src='https://analytics.ahrefs.com/analytics.js'
        data-key='O2+6Avr4IoWf6dlPe6uMCQ'
        async
      ></script>
      <div className='min-h-screen bg-background'>
        <LandingHeader />
        <main>
          {/* Hook: Emotional entry with live counter + Instagram demo */}
          <HeroSection />

          {/* Trust: Quick brand validation */}
          <SocialProofSection />

          {/* Pain: Show the cost of inaction */}
          <ProblemSection />

          {/* Solution: AI that sounds like you */}
          <SolutionSection />

          {/* Simplicity: 3 steps to start */}
          <HowItWorksSection />

          {/* Reassurance: Control, speed, analytics */}
          <FeaturesSection />

          {/* Proof: Real results from real creators */}
          <TestimonialsSection />

          {/* Trust: Why PostEngageAI over alternatives */}
          <ComparisonSection />

          {/* Value: Simple pricing preview */}
          <PricingPreviewSection />

          {/* Urgency: Final push with live counter */}
          <CTASection />
        </main>
        <LandingFooter />
      </div>
    </>
  );
}

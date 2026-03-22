import { LandingHeader } from '@/components/landing/landing-header';
import { HeroSection } from '@/components/landing/hero-section';
import { BeforeAfterSection } from '@/components/landing/before-after-section';
import { ImpactScoreSection } from '@/components/landing/impact-score-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { SolutionSection } from '@/components/landing/solution-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { SchedulerFeatureSection } from '@/components/landing/scheduler-feature-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { ComparisonSection } from '@/components/landing/comparison-section';
import { ROICalculatorSection } from '@/components/landing/roi-calculator-section';
import { MilestoneTicker } from '@/components/landing/milestone-ticker';
import { PricingPreviewSection } from '@/components/landing/pricing-preview-section';
import { FAQSection } from '@/components/landing/faq-section';
import { CTASection } from '@/components/landing/cta-section';
import { LandingFooter } from '@/components/landing/landing-footer';

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
              'Instagram automation that tracks its own ROI. PostEngage automates DMs, comments, and story replies — and shows you the before vs after in real follower growth, leads captured, and time saved.',
            image: 'https://postengage.ai/logo.jpeg',
            featureList: [
              'Before vs After Growth Tracking',
              'Cumulative Impact Score',
              'Visual Automation Builder',
              'Instagram Post Scheduling',
              'ROI Calculator',
              'Lead Attribution',
              'Auto-DM & Comment Reply',
              'Best Time to Post AI',
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
                  unitCode: 'C62',
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
          {/* Hook: Outcome-first hero with animated Impact mockup */}
          <HeroSection />

          {/* Value: Before vs After growth chart */}
          <BeforeAfterSection />

          {/* Value: Cumulative Impact Score */}
          <ImpactScoreSection />

          {/* Pain: Show the cost of inaction */}
          <ProblemSection />

          {/* Solution: AI that sounds like you */}
          <SolutionSection />

          {/* Simplicity: 3 steps to start */}
          <HowItWorksSection />

          {/* Feature: Content Scheduler + linked automations */}
          <SchedulerFeatureSection />

          {/* Reassurance: Control, speed, analytics */}
          <FeaturesSection />

          {/* Live feed: Real milestone events */}
          <MilestoneTicker />

          {/* Trust: Why PostEngage over alternatives */}
          <ComparisonSection />

          {/* Interactive: ROI Calculator */}
          <ROICalculatorSection />

          {/* Value: Simple pricing preview */}
          <PricingPreviewSection />

          {/* FAQ: New value-feature questions */}
          <FAQSection />

          {/* Urgency: Final push */}
          <CTASection />
        </main>
        <LandingFooter />
      </div>
    </>
  );
}

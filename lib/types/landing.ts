import { CreditCosts, CreditPackage } from './pricing';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LandingConfigResponse {
  costs: CreditCosts;
  packs: CreditPackage[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
}

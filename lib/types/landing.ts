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

export interface AppLimits {
  bot: {
    default_max_replies_per_hour: number;
    default_max_replies_per_day: number;
    default_reply_delay_min_seconds: number;
    default_reply_delay_max_seconds: number;
    max_reply_delay_seconds: number;
    max_cooldown_hours: number;
    max_replies_per_hour_cap: number;
    max_replies_per_day_cap: number;
  };
  knowledge: {
    max_file_size_mb: number;
    supported_file_types: string[];
  };
}

export interface LandingConfigResponse {
  costs: CreditCosts;
  packs: CreditPackage[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  signup_bonus: number;
  /** App-level limits and defaults sourced from backend env config */
  app_limits?: AppLimits;
  meta?: {
    country: string;
    currency: string;
  };
}

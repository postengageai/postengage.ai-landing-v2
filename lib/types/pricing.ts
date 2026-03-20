export interface CreditPackage {
  id: string;
  name: string;
  description: string;
  credits: number | null;
  price: number | null;
  currency: string;
  popular: boolean;
  savings: string;
  approx_actions: number | null;
  /** Display badge, e.g. "Most Popular" or "Best Value" */
  badge?: string;
  /** True for the Enterprise tier — shows Contact Sales CTA instead of signup link */
  is_enterprise?: boolean;
  /** CTA label, e.g. "Get Started" or "Contact Sales" */
  cta?: string;
  /** Credits hint for Enterprise, e.g. "50,000+ credits" */
  credits_hint?: string;
  /** Feature list shown on Enterprise card */
  features?: string[];
}

export interface CreditCosts {
  REPLY_COMMENT: number;
  PRIVATE_REPLY: number;
  SEND_DM: number;
  AI_REPLY_COMMENT: number;
  AI_PRIVATE_REPLY: number;
  AI_SEND_DM: number;
}

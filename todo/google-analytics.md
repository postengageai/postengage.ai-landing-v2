# Google Analytics Event Tracking Todos

This file tracks all locations in the landing page codebase where Google Analytics events should be implemented.
Based on `google-analytics-events.todo.md` and current implementation status.

## 1. Global / Shared Components

### `components/landing/landing-header.tsx`
- [x] **Event**: Click "Sign In" (`click_signin`)
- [x] **Event**: Click "Get Started" (`click_signup`)
- [x] **Event**: Click Navigation Links (`click_nav_link`)

### `components/landing/landing-footer.tsx`
- [x] **Event**: Click Footer Link (`click_footer_link`)
- [x] **Event**: Click Social Link (`click_social_link`)
- [x] **Event**: View Footer (`footer_view`)
- [ ] **Event**: Submit Newsletter Form (`footer_newsletter_submit`) (Feature not present)

### `components/conversion/exit-intent-popup.tsx`
- [x] **Event**: Popup Shown (`view_exit_popup`)
- [x] **Event**: Click CTA in Popup (`click_exit_popup_cta`)
- [x] **Event**: Exit Intent Detected (`exit_intent_triggered`) (If different from view)
- [x] **Event**: Close Popup (`exit_intent_popup_close`)
- [ ] **Event**: Submit Email (`exit_intent_popup_email_submit`) (Feature not present)
- [x] **Event**: Claim Discount (`exit_intent_popup_discount_claim`)

---

## 2. Landing Page Sections (In Order)

### `components/landing/hero-section.tsx`
- [x] **Event**: Click CTA (`click_cta_hero`)
- [x] **Event**: Click Product Hunt Badge (`click_product_hunt`)
- [x] **Event**: View Live Counter (`hero_live_counter_view`)

### `components/landing/social-proof-section.tsx`
- [x] **Event**: View Section (`social_proof_view`)
- [ ] **Event**: Hover Creator Avatar (`creator_avatar_hover`) (Not applicable: Section displays brands, not avatars)
- [ ] **Event**: View Stats Counter (`stats_counter_view`) (Not applicable: Section displays brands)

### `components/landing/problem-section.tsx`
- [x] **Event**: View Section (`problem_section_view`)
- [x] **Event**: View Stat Card (`problem_stat_card_view`)
- [x] **Event**: Hover Stat Card (`problem_stat_card_hover`)

### `components/landing/solution-section.tsx`
- [x] **Event**: View Section (`solution_section_view`)
- [x] **Event**: Expand Feature Accordion (`feature_accordion_expand`)
- [x] **Event**: Interact with Demo (`feature_demo_interaction`) (Covered by accordion expand)

### `components/landing/how-it-works-section.tsx`
- [x] **Event**: View Section (`how_it_works_view`)
- [x] **Event**: View Step 1 (`step_1_view`)
- [x] **Event**: View Step 2 (`step_2_view`)
- [x] **Event**: View Step 3 (`step_3_view`)
- [x] **Event**: View Step 4 (`step_4_view`)

### `components/landing/features-section.tsx`
- [x] **Event**: View Section (`features_section_view`)
- [x] **Event**: View Control Feature (`feature_control_view`)
- [x] **Event**: View Speed Feature (`feature_speed_view`)
- [x] **Event**: View Analytics Feature (`feature_analytics_view`)

### `components/landing/testimonials-section.tsx`
- [x] **Event**: View Section (`testimonials_section_view`)
- [x] **Event**: View Testimonial Card (`testimonial_card_view`)
- [x] **Event**: Click Author (`testimonial_author_click`)
- [ ] **Event**: View Metric (`testimonial_metric_view`) (Included in card view)

### `components/landing/pricing-preview-section.tsx` (or `pricing-card.tsx`)
- [x] **Event**: Select Plan (`select_plan`) (Implemented in `pricing-card.tsx`)
- [x] **Event**: View Pricing Section (`pricing_section_view`)
- [ ] **Event**: Use Credit Calculator (`pricing_credit_calculator_use`) (Calculator not implemented)
- [ ] **Event**: Expand Pricing FAQ (`pricing_faq_expand`) (Covered by main FAQ section)
- [ ] **Event**: Click Pricing CTA (`pricing_cta_click`) (Same as select plan)

### `components/landing/comparison-section.tsx`
- [x] **Event**: View Section (`comparison_section_view`)
- [x] **Event**: View Comparison Table (`comparison_table_view`)
- [x] **Event**: Hover Competitor Logo (`competitor_logo_hover`)

### `components/landing/faq-section.tsx`
- [x] **Event**: View Section (`faq_section_view`)
- [x] **Event**: Expand Question (`faq_question_expand`)
- [x] **Event**: Collapse Question (`faq_question_collapse`)
- [x] **Event**: Click Contact Support (`faq_contact_support_click`)
- [x] **Event**: Specific Question Expands (`faq_what_is_expand`, etc.)

### `components/landing/cta-section.tsx`
- [x] **Event**: Click Bottom CTA (`click_cta_bottom`)
- [x] **Event**: View Section (`cta_section_view`)
- [x] **Event**: View Urgency Banner (`cta_urgency_banner_view`)

---

## 3. Other Pages

### Page Views (Virtual or Component-Based)
- [x] **Event**: Landing Page View (`landing_page_view`) (Handled by `PageViewTracker`)
- [x] **Event**: Pricing Page View (`pricing_page_view`) (Handled by `PageViewTracker`)
- [ ] **Event**: Features Page View (`features_page_view`)
- [ ] **Event**: About Page View (`about_page_view`)

---

## 4. General / Global Events

### Scroll Events
- [ ] **Event**: Scroll 25% (`scroll_25_percent`)
- [ ] **Event**: Scroll 50% (`scroll_50_percent`)
- [ ] **Event**: Scroll 75% (`scroll_75_percent`)
- [ ] **Event**: Scroll 100% (`scroll_100_percent`)

### Engagement Events
- [ ] **Event**: Time on Page 30s (`time_on_page_30s`)
- [ ] **Event**: Time on Page 60s (`time_on_page_60s`)
- [ ] **Event**: Time on Page 120s (`time_on_page_120s`)
- [ ] **Event**: Time on Page 300s (`time_on_page_300s`)

# Google Analytics Events - Landing Page Only

> This file contains only the landing page events for PostEngage.ai. App events will be tracked separately.

---

## Page View Events

- [ ] `page_view` - Automatic page view tracking
- [ ] `landing_page_view` - User lands on the homepage
- [ ] `pricing_page_view` - User views pricing page
- [ ] `features_page_view` - User views features page
- [ ] `about_page_view` - User views about page

---

## Hero Section Events

- [ ] `hero_cta_click` - Click on "Start Replying Now" button
- [ ] `hero_get_started_click` - Click on "Get Started" button in header
- [ ] `hero_sign_in_click` - Click on "Sign In" link
- [ ] `hero_product_hunt_click` - Click on Product Hunt badge
- [ ] `hero_live_counter_view` - User sees the live comment counter

---

## Navigation Events

- [ ] `nav_product_click` - Click on Product menu
- [ ] `nav_features_click` - Click on Features menu
- [ ] `nav_pricing_click` - Click on Pricing menu
- [ ] `nav_company_click` - Click on Company dropdown
- [ ] `nav_sign_in_click` - Click on Sign In
- [ ] `nav_get_started_click` - Click on Get Started button

---

## Social Proof Section Events

- [ ] `social_proof_view` - User scrolls to social proof section
- [ ] `creator_avatar_hover` - Hover over creator avatars
- [ ] `stats_counter_view` - Views "2,400+ creators" stats

---

## Problem Section Events (The Cost of Silence)

- [ ] `problem_section_view` - User views problem section
- [ ] `problem_stat_card_view` - Views individual stat cards (3+ hours, 70% drop, etc.)
- [ ] `problem_stat_card_hover` - Hover on stat cards

---

## Solution Section Events

- [ ] `solution_section_view` - User views solution section
- [ ] `feature_accordion_expand` - Expand feature accordion (Smart Comment Replies, Trigger-Based DMs, etc.)
- [ ] `feature_demo_interaction` - Interact with demo/mockup

---

## How It Works Section Events

- [ ] `how_it_works_view` - User views how it works section
- [ ] `step_1_view` - Views "Connect Instagram" step
- [ ] `step_2_view` - Views "Set Your Voice" step
- [ ] `step_3_view` - Views "Activate Automation" step
- [ ] `step_4_view` - Views "Relax & Grow" step

---

## Features Section Events

- [ ] `features_section_view` - User views features section
- [ ] `feature_control_view` - Views "You're Always in Control"
- [ ] `feature_speed_view` - Views "Speed = Algorithm Love"
- [ ] `feature_analytics_view` - Views "Track What Matters"

---

## Testimonials Section Events

- [ ] `testimonials_section_view` - User views testimonials
- [ ] `testimonial_card_view` - Views individual testimonial
- [ ] `testimonial_author_click` - Click on author name/avatar
- [ ] `testimonial_metric_view` - Views metrics (47 hours saved, $12K revenue, etc.)

---

## Comparison Section Events

- [ ] `comparison_section_view` - User views competitor comparison
- [ ] `comparison_table_view` - Views full comparison table
- [ ] `competitor_logo_hover` - Hover over competitor logos (Manychat, SendPulse, etc.)

---

## Why PostEngageAI Section Events

- [ ] `why_section_view` - User views "Why PostEngageAI" section
- [ ] `benefit_card_view` - Views benefit cards (Made for India, Pay-per-use, etc.)
- [ ] `benefit_card_hover` - Hover on benefit cards

---

## Pricing Section Events

- [ ] `pricing_section_view` - User views pricing section
- [ ] `pricing_credit_calculator_use` - Uses credit calculator
- [ ] `pricing_faq_expand` - Expands pricing FAQ
- [ ] `pricing_cta_click` - Click on pricing CTA

---

## FAQ Section Events

- [ ] `faq_section_view` - User views FAQ section
- [ ] `faq_question_expand` - Expands a FAQ question
- [ ] `faq_question_collapse` - Collapses a FAQ question
- [ ] `faq_contact_support_click` - Click on "Contact our support team"

**Specific FAQ Questions to Track:**
- [ ] `faq_what_is_expand` - "What is PostEngage.ai?"
- [ ] `faq_ai_voice_expand` - "How does the AI reply in my voice?"
- [ ] `faq_platforms_expand` - "Which platforms are supported?"
- [ ] `faq_safe_expand` - "Is it safe? Will Instagram ban me?"
- [ ] `faq_pricing_expand` - "How does the credit-based pricing work?"
- [ ] `faq_free_trial_expand` - "Can I try PostEngage.ai for free?"
- [ ] `faq_manychat_expand` - "What makes PostEngage.ai different from ManyChat?"
- [ ] `faq_support_expand` - "What if I need help?"

---

## CTA Section Events

- [ ] `cta_section_view` - User views final CTA section
- [ ] `cta_button_click` - Click on "Start Your Free Trial"
- [ ] `cta_urgency_banner_view` - Views "comments went cold" banner

---

## Footer Events

- [ ] `footer_view` - User views footer
- [ ] `footer_product_link_click` - Click on Product links
- [ ] `footer_company_link_click` - Click on Company links
- [ ] `footer_resources_link_click` - Click on Resources links
- [ ] `footer_legal_link_click` - Click on Legal links
- [ ] `footer_social_click` - Click on social media icons
- [ ] `footer_newsletter_submit` - Submit newsletter form

---

## Exit Intent Popup Events

- [ ] `exit_intent_triggered` - Exit intent detected
- [ ] `exit_intent_popup_view` - Popup displayed
- [ ] `exit_intent_popup_close` - User closes popup
- [ ] `exit_intent_popup_cta_click` - Click on popup CTA
- [ ] `exit_intent_popup_email_submit` - Submit email in popup
- [ ] `exit_intent_popup_discount_claim` - Claim discount offer

---

## Scroll Events

- [ ] `scroll_25_percent` - User scrolls 25% of page
- [ ] `scroll_50_percent` - User scrolls 50% of page
- [ ] `scroll_75_percent` - User scrolls 75% of page
- [ ] `scroll_100_percent` - User scrolls to bottom

---

## Engagement Events

- [ ] `time_on_page_30s` - 30 seconds on page
- [ ] `time_on_page_60s` - 1 minute on page
- [ ] `time_on_page_120s` - 2 minutes on page
- [ ] `time_on_page_300s` - 5 minutes on page

---

## Event Parameters to Track

For each event, consider tracking these parameters:

### Common Parameters
- `event_category` - Category of the event (e.g., "engagement", "conversion", "error")
- `event_label` - Label for the event (e.g., "hero_cta", "pricing_section")
- `event_value` - Numeric value (e.g., scroll percentage, time spent)
- `page_location` - URL of the page
- `page_title` - Title of the page
- `page_referrer` - Referrer URL

### Device/Session Properties
- `device_category` - Desktop, mobile, tablet
- `operating_system` - OS name
- `browser` - Browser name
- `screen_resolution` - Screen resolution
- `viewport_size` - Viewport dimensions
- `language` - Browser language
- `timezone` - User timezone

### Custom Dimensions
- `traffic_source` - Source of traffic (organic, paid, social, referral)
- `campaign_name` - Marketing campaign name
- `landing_page` - First page visited in session

---

## Implementation Priority

### High Priority (Implement First)
1. Page view events
2. Hero CTA clicks
3. Scroll depth events
4. Sign up / Get Started clicks

### Medium Priority (Implement Next)
1. Section view events
2. Feature interaction events
3. FAQ expand/collapse events
4. Exit intent events

### Low Priority (Implement Later)
1. Hover events
2. Time on page events
3. Detailed engagement events

---

## Testing Checklist

- [ ] Verify events fire correctly in GA4 DebugView
- [ ] Check event parameters are populated correctly
- [ ] Test events across different browsers
- [ ] Test events on mobile devices
- [ ] Verify no duplicate events
- [ ] Check event timing (not delayed)
- [ ] Validate event names follow naming convention
- [ ] Test with ad blockers enabled
- [ ] Verify consent mode compliance

---

## Notes

- Use snake_case for event names (GA4 best practice)
- Keep event names consistent and descriptive
- Avoid PII in event parameters
- Use event parameters for additional context
- Set up custom dimensions in GA4 before sending
- **App events (signup, login, dashboard, automation, etc.) will be tracked separately in the application codebase**

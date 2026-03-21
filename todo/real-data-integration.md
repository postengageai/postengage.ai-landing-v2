# Real Data Integration Plan

This document outlines the plan to replace hardcoded fake data on the landing page with real data served from the backend.

## 1. Backend Implementation (`postengage.ai-backend`)

### New Module: `LandingModule`
We need a dedicated module to serve public-facing data for the landing page.

- [x] **Create Module Structure**
  - `apps/gatekeeper/src/modules/landing/`
  - `landing.module.ts`
  - `landing.controller.ts`
  - `landing.service.ts`

### Data Models & Interfaces
Define the structure for the data we need to serve.

- [x] **Define Interfaces/DTOs**
  - `LandingConfigResponse` (Aggregate response)
  - `TestimonialDto`
  - `FaqDto`
  - `CreditCostDto`

### API Endpoints
Create public endpoints (no auth required).

- [x] **Implement `GET /landing/config`**
  - Should return:
    - `costs`: Credit costs per action (e.g., reply, ai_reply)
    - `testimonials`: List of testimonials
    - `faqs`: List of FAQs
    - `stats`: (Optional) Platform stats like "hours saved", "active users"

- [x] **Implement `GET /landing/pricing`** (Merged into `/landing/config`)
  - Ensure it returns the current credit packages.

## 2. Frontend Implementation (`postengage.ai-landing`)

### API Client & Types
Update the frontend to consume the new endpoints.

- [x] **Define Types** (`lib/types/landing.ts`)
  - `LandingConfig`
  - `Testimonial`
  - `FaqItem`
- [x] **Update `ApiClient`** if necessary (or just use `httpClient`)

### React Hooks
Create hooks to fetch the data.

- [x] **Create `useLandingConfig` hook**
  - Fetches from `/landing/config`
  - Uses `react-query` with a long `staleTime` (e.g., 1 hour)

### Component Refactoring
Replace hardcoded data with hook data.

- [x] **Refactor `PricingPreviewSection`**
  - Use `costs` from `useLandingConfig`
  - Fallback to default constants if loading/error
- [x] **Refactor `TestimonialsSection`**
  - Use `testimonials` from `useLandingConfig`
  - Map backend data to UI component
  - Add Skeleton loader state
- [x] **Refactor `FaqSection`**
  - Use `faqs` from `useLandingConfig`
  - Map backend data to UI component
  - Add Skeleton loader state

## 3. Verification

- [x] Verify backend endpoints return correct JSON structure (Checked code)
- [x] Verify frontend displays real data (Implemented hooks and components)
- [x] Verify loading states look good (Implemented Skeletons)
- [ ] Verify error handling (fallback to defaults)

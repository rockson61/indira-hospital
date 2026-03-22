# Plan: Pricing Transparency Bank Expansion

## Description
This plan centralizes and expands surgical pricing data to ensure "Elite" transparency across the Indira ecosystem, from SEO landing pages to the international cost estimator.

## Proposed Changes

### [NEW] [pricing-elite.ts](file:///Users/rockson61/Downloads/Indira%20Hospital/src/data/pricing-elite.ts)
- Create a single source of truth for surgical costs.
- Define `ElitePricingBank` with category, procedure, range, and value descriptors.

### [MODIFY] [content-engine.mjs](file:///Users/rockson61/Downloads/Indira%20Hospital/rockseo/content-engine.mjs)
- Update `domainData` to pull from or reflect the `ElitePricingBank`.
- Expand categories to match the updated surgical silos.

### [MODIFY] [EstimatorWidget.tsx](file:///Users/rockson61/Downloads/Indira%20Hospital/src/app/patients/international/cost-estimator/EstimatorWidget.tsx)
- Replace "Transparent Pricing" placeholders with actual range estimates from `pricing-elite.ts`.
- Update the savings logic to reflect Elite surgical precision vs. Western costs.

## Verification Plan

### Manual Verification
- Verify that generated SEO pages (e.g., `src/app/seo/robotic-knee-replacement-vellore.tsx`) reflect the updated pricing.
- Audit the Cost Estimator widget at `/patients/international/cost-estimator` to ensure price ranges are displayed instead of placeholders.

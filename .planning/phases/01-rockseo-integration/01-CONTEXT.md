---
phase: 1
name: rockseo Integration
area: tooling
---

## Phase Goal
Integrate the `rockseo` generator into the Next.js production build process to automate the closing of SEO gaps with "Elite" surgical content.

## Decisions

### 1. Build Hook
- Use a `prebuild` script in `package.json` to trigger the `rockseo` generator before `next build`.
- Command: `node rockseo/generate-pages-from-gaps.mjs`.

### 2. Taxonomy Transition
- Replace the legacy "dental" taxonomy with "Elite Surgical Silos":
  - **Proctology**: Focus on Piles, Fistula, Fissure.
  - **Orthopaedics**: Focus on Knee Replacement, Robotic AI.
  - **Ophthalmology**: Focus on Cataract, MICS.
  - **Cardiology**: Focus on Heart Checkup.

### 3. Output Destination
- Generated pages will be written directly to `src/app/seo/[slug]/page.tsx`.
- This ensures they are statically generated (SSG) by Next.js during the production build.

### 4. Generation Logic
- The generator will create physical files during `prebuild`.
- These files will use the `Elite Cinematic Hero` and `LSI-Linkify` patterns.

## Code Context
- Relevant script: `rockseo/generate-pages-from-gaps.mjs`
- Build config: `package.json`
- Target path: `src/app/seo`

# Plan: rockseo Next.js Integration

## Description
This plan integrates the custom `rockseo` generation engine into the official Next.js build lifecycle and upgrades its taxonomy to the "Indira Elite" standard.

## Proposed Changes

### [MODIFY] `package.json`
- Add a `prebuild` script to call the `rockseo` generator.
- Update `build` script if necessary to ensure sequential execution.

### [MODIFY] `rockseo/generate-pages-from-gaps.mjs`
- **Taxonomy Refactor**: Remove dental subtopics.
- **Surgical Silos**: Inject Proctology, Orthopaedics, and Ophthalmology themes.
- **Target Path**: Update `CONFIG.appDir` to point to `src/app/seo`.
- **Template Update**: Ensure the generated `page.tsx` uses the latest "Elite" UI components (HeroUI, Lucide, Linkify).

### [NEW] `src/app/seo/`
- Directory to hold automatically generated high-authority landing pages.

## Verification Plan

### Automated Tests
- Run `npm run build` and verify that `rockseo` creates files in `src/app/seo/` before the Next.js build starts.
- Check that the build completes successfully with 5000+ paths.

### Manual Verification
- Inspect one generated page (e.g., `/seo/laser-piles-treatment-vellore`) to confirm it uses the Elite aesthetic and LSI bolding.

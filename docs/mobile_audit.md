# Mobile UX, Performance & Accessibility Audit

## 1️⃣ Mobile Audit Summary

**Top UX Issues:**
1. **Horizontal Scroll/Overflow Risks:** Several pages use `overflow-x-auto` on tables and tabs, which is good, but many deep layout elements lack `hidden` overflow containers, threatening layout integrity on `320px` screens.
2. **Touch Target Sizing:** Many `xs` and `sm` buttons within dense healthcare cards (e.g., in `ServiceDetailModal.tsx` and `ClinicInfoCard.tsx`) fail the 44px minimum tap target rule.
3. **Dense Modals:** `ServiceDetailModal.tsx` stacks 3 action buttons horizontally, which cramps significantly on 375px screens, increasing mis-taps.

**Top Performance Issues:**
1. **Heavy DOM on Mobile:** Complex pages like the `/doctor/near-me/` directory render large lists and extensive SVG icons that can block the main thread on low-end Android devices.
2. **Excessive Background Blurs:** Elements tracking `blur-[120px]` (e.g., in `about/page.tsx` and `contact/page.tsx`) force heavy GPU calculation. On mobile Safari, high-radius blurs cause major battery drain and scroll lag.

**Top Accessibility Issues:**
1. **Color Contrast:** Low contrast on subtle text like `text-slate-500` against dark backgrounds or `text-fuchsia-200` navs.
2. **Focus States:** Custom buttons frequently use `outline-none` without providing `focus-visible:ring` fallbacks, making keyboard/switch navigation impossible.

**Top SEO/Mobile Parity Risks:**
1. **Hidden Content on Mobile:** Responsive designs sometimes hide text (`hidden md:block`) instead of adapting it, degrading the mobile DOM for Googlebot.

---

## 2️⃣ Prioritized Fix Plan

### Critical
- Fix horizontal button stacking in modals for 320px-390px screens.
- Replace heavy GPU `blur-[]` gradients on mobile with static fallback images or hide them completely on `max-sm` breakpoints.

### High
- Increase all minimum button/touch target heights to `min-h-[44px]`.
- Add focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`) to all interactive elements globally.

### Medium
- Audit text-contrast ratios resulting from Theme Toggling (specifically text-slate-500).
- Optimize complex lists (Service Directory) to use virtualization or pagination if the list exceeds 50 items.

### Low
- Convert `overflow-x-auto` carousels to use native CSS scroll snapping (`snap-x snap-mandatory`) for smoother, native-feeling swipes.

---

## 3️⃣ Implementation Plan (No Code Yet)

**1. Modal Action Stacking (`src/components/healthcare/services/ServiceDetailModal.tsx`)**
- *What:* Change `flex-row` to `flex-col` for the button group on `sm` and below breakpoints.
- *Why:* Prevents 3 buttons from cramming into 320px, avoiding accidental taps.
- *Desktop Impact:* None (uses `sm:flex-row`).

**2. GPU Blur Performance (`src/app/about/page.tsx`, `src/app/contact/page.tsx`, etc.)**
- *What:* Add `hidden sm:block` to the absolute positioned ambient glow `div`s (e.g., `blur-[120px]`).
- *Why:* Drastically improves scrolling frame rates on mobile by reducing compound rendering.
- *Desktop Impact:* None. Glows remain visible on tablet and up.

**3. Global Tap Targets (`src/components/ui/button.tsx` & inline buttons)**
- *What:* Update the base utility classes in `components/ui/button.tsx` and custom buttons to guarantee `min-h-[44px]`.
- *Why:* Meets WCAG 2.1 touch target spacing metrics, stopping user frustration.
- *Desktop Impact:* Buttons may appear slightly taller, which generally improves modern UI aesthetics.

**4. Focus Accessibility (`src/components/ui/button.tsx`, `src/components/theme-toggle.tsx`)**
- *What:* Append `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` to interactive elements.
- *Why:* Enables users relying on screen readers or keyboard-style navigation on mobile devices.
- *Desktop Impact:* Better accessibility globally.

---

## 4️⃣ Mobile QA Checklist

- [ ] Verify `320px` width has absolutely zero horizontal scrolling on all marketing pages.
- [ ] Confirm scrolling on an actual mobile device (or throttled emulator) hits 60fps after disabling heavy blurs.
- [ ] Test that closing modals (`ServiceDetailModal.tsx`) is reachable via a `44px` target area.
- [ ] Verify form inputs trigger the correct mobile keyboard (e.g., `<input type="tel">` for phone numbers).
- [ ] Tab through the application to ensure visible focus states appear.
- [ ] Ensure `overflow-x-auto` lists (e.g., tabs in `Services.tsx`) swipe smoothly without breaking vertical scrolling.

---

## 5️⃣ Optional Next Phase Recommendations

- **PWA Integration:** Add a `manifest.json` and service worker to allow users to "Install to Home Screen" for faster repeat visits.
- **Intersection Observer Animations:** Disable heavy Framer Motion animations on mobile to save battery, falling back to simple CSS transitions.
- **Dynamic CSS:** Swap Tailwind's massive utility payload for aggressively purged CSS via Turbopack specific treeshaking.

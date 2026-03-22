---
phase: 2
name: Appointment Flow Hardening
area: ui
---

## Phase Goal
Transition the appointment booking flow into the **Indira Elite** cinematic standard to ensure a high-trust, frictionless conversion path for patients.

## Decisions

### 1. Cinematic Aesthetic
- Replace the legacy bright fuchsia/pink palette with the **Elite Slate/Glass** theme.
- Use `backdrop-blur-2xl`, darker gradients (`slate-950`), and `border-white/10`.
- Maintain the premium "Elite" typography site-wide.

### 2. Specialty-Aware Prepopulation
- Use the `useSearchParams` hook to detect `?dept=` or `?doctor=` query parameters.
- When coming from an "Elite" specialty page (e.g., Proctology), the form should pre-select the correct department.

### 3. Trust & Conversion Badges
- Integrate official accreditation badges (NABH) and "35+ Years of Clinical Mastery" directly into the booking side-panel or header.
- This reinforces the "Elite" authority at the moment of conversion.

### 4. Step Labels
- Rename generic "Step 1" to "Elite Clinical Selection" or similar high-authority terms.

## Code Context
- Client component: `src/app/book-appointment/AppointmentBookingClient.tsx`
- Routing: `src/app/book-appointment/page.tsx`
- Data sources: `src/data/departments.ts`, `src/data/doctors.ts`

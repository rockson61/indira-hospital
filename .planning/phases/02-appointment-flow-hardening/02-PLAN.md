# Plan: Appointment Flow Hardening

## Description
This plan upgrades the appointment booking journey to the "Indira Elite" branding standard, improving conversion through cinematic UX and specialty-specific context.

## Proposed Changes

### [MODIFY] `src/app/book-appointment/AppointmentBookingClient.tsx`
- **Branding**: Update colors from fuchsia/pink to `slate-950` glassmorphism and `elite-` cinematic gradients.
- **Prepopulation**: Implement `useSearchParams` to filter the department list based on incoming URL parameters.
- **Trust Integration**: Add a sidebar or header section featuring "35+ Years Mastery" and "NABH Accreditation".
- **Micro-copy**: Refine button and label text to emphasize clinical precision.

### [MODIFY] `src/app/book-appointment/page.tsx`
- Wrap the client component in a `Suspense` boundary to handle search params properly in Next.js.
- Ensure the hero background matches the "Elite" institutional pages.

## Verification Plan

### Manual Verification
- Navigate to `/book-appointment?dept=proctology` and verify the Proctology department is pre-selected.
- Audit the visual aesthetic via `browser_subagent` to ensure it matches the "Elite" dark/glassy standard.
- Verify the successful confirmation state and the ensuing Directus submission.

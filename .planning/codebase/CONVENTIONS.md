# Coding Conventions

## Naming
- **Components**: PascalCase (e.g., `EliteComparisonBank.tsx`).
- **Utilities**: camelCase (e.g., `injectInternalLinks.ts`).
- **Pages**: Follow Next.js `page.tsx` naming.

## UI Standards
- Use `elite-` prefixed CSS classes for brand consistency.
- Prefer `elite-hero-title` over manual Tailwind text sizing.
- Use `lucide-react` for general icons and `healthicons-react` for medical iconography.

## SEO Rules
- Every page must have a unique `MetaData` export.
- Descriptions must pass through the `injectInternalLinks` utility for LSI bolding.
- H1 must always be high-authority (e.g., "Best Hospital in [City]").

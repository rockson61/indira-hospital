# System Architecture

## Paradigms
- **App Router**: Dynamic routing architecture with heavy use of catch-all segments (`[...slug]`).
- **Server Components (RSC)**: Default for data-fetching and high-performance rendering.
- **Client Components**: Used for interactive sections (forms, carousels, maps).

## Data Flow
1. **Request**: Handled by Next.js dynamic routing.
2. **Fetch**: Directus SDK retrieves data from the headless CMS.
3. **Hydrate**: Components transform CMS data into "Elite" UI blocks.
4. **Fallback**: If CMS fails, the `fallback-blog-data.ts` and related constants ensure the site remains functional.

## Component Pattern
- **Domain-Driven UI**: Components are categorized by function (`trust`, `seo`, `marketing`, `healthcare`).
- **Standardized Hooks**: Shared logic for SEO, theme, and data fetching.

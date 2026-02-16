# Final Implementation Plan: UI/UX Optimization & Standardization

## Goal Description
Transform the codebase from a "Page-First" to a "Component-First" architecture. Create a robust set of standardized **Entity Cards** (Doctors, Services, Departments, Locations) to enable seamless cross-embedding ("Semantic Mesh") and ensure a consistent, premium UI/UX across the entire site.

## User Review Required
> [!IMPORTANT]
> This plan focuses on **Standardization**. We will replace ad-hoc styles in individual pages with shared components. This ensures that if we change a Doctor Card's design, it updates everywhere (Home, Search, Sidebar, etc.).

## 1. The "Entity Card" System
**Objective**: Build a library of "Smart Cards" that handle their own data display, fallback logic (images/icons), and interactions.

### New Components (`src/components/entities/`)
#### 1. `DoctorCard.tsx`
- **Variants**:
    - `grid`: Standard vertical card for listing pages (Image top, details bottom).
    - `list`: Horizontal card for detailed lists (Image left, details right).
    - `compact`: Minimal version for sidebars (Small avatar, name, "Book").
- **Features**: dynamic image fallback, department linking, "Book" CTA.

#### 2. `ServiceCard.tsx`
- **Variants**:
    - `poster`: Icon-heavy, gradient background (for Home/Landing).
    - `detail`: detailed description + "Learn More" (for Department pages).
    - `compact`: Simple row with icon and title (for Sidebars).
- **Features**: Icon mapping integration, "Key Procedures" pill list.

#### 3. `DepartmentCard.tsx`
- **Design**: Icon + Title + "Services Count" indicator. High-gloss "Glass" effect.

#### 4. `LocationCard.tsx`
- **Features**: Integrated Google Map thumbnail (static), Address, distance/travel metadata, and transport icons.

#### 5. `DiagnosticCard.tsx`
- **Features**: Price display, report time, home collection badges, and category-aware icons.

## 2. UI/UX Overhaul: Service Pages
**Target**: `src/app/services/[...slug]/page.tsx`
- **Problem**: Currently uses inline HTML for related doctors/locations, leading to code duplication and inconsistency.
- **Fix**:
    - Replace "Our Specialists" section with `<DoctorCard variant="grid" />` grid.
    - Replace "Available Locations" sidebar with `<LocationCard variant="compact" />` list.
    - Replace "Related Services" with `<ServiceCard variant="compact" />`.
    - Refactor `Hero` to use a shared `PageHero` component (if flexible enough) or enhance current gradient.

## 3. UI/UX Overhaul: Doctor Pages
**Target**: `src/app/doctors/[slug]/page.tsx`
- **Problem**: Manually constructs "Related Procedures" cards.
- **Fix**:
    - Replace "Procedures Performed" with `<ServiceCard variant="detail" />` grid.
    - Replace "Other Doctors" carousel with `<DoctorCard variant="grid" />`.
    - Ensure "Book Appointment" sticky bar uses the same logic as Service pages.

## 4. Cross-Embedding Strategy (The Semantic Mesh)
Embed these cards across the site to increase "Link Density" and user engagement.

| Page Type | Embeds |
| :--- | :--- |
| **Home** | `DoctorCard` (Top Rated), `ServiceCard` (Key Treatments), `DepartmentCard` (Grid) |
| **Department** | `DoctorCard` (Team), `ServiceCard` (Procedures offered) |
| **Doctor** | `ServiceCard` (My Specialties), `LocationCard` (Where I sit), `DepartmentCard` (My Dept) |
| **Service** | `DoctorCard` (Who performs this), `LocationCard` (Where available) |
| **Location** | `DoctorCard` (Visiting Doctors), `ServiceCard` (Services available here) |

## 5. Implementation Steps
1.  **Setup**: Create `src/components/entities` directory.
2.  **Build Cards**: Implement `DoctorCard`, `ServiceCard`, `DepartmentCard`, `LocationCard`.
3.  **Refactor Doctor Page**: Update `src/app/doctors/[slug]/page.tsx` to use new cards.
4.  **Refactor Service Page**: Update `src/app/services/[...slug]/page.tsx` to use new cards.
5.  **Refactor Listings**: Update `/doctors`, `/services`, `/locations`, and `/diagnostics` main pages to use the `grid` variants.
6.  **Refactor Location Detail**: Update `src/app/locations/[slug]/page.tsx` with doctor/service cards.
7.  **Final Polish**: 
    - Standardize `src/app/about/page.tsx` and `src/app/contact/page.tsx` with the core design system.
    - Inject `framer-motion` micro-interactions into all Entity Cards for a premium feel.
    - Audit all CTA buttons for brand alignment.
8.  **Verify**: Check responsiveness and data fallbacks (missing images/icons).

## 6. Freshness & Universal SEO (Final Phase)
**Objective**: Remove all legacy "Indira Dental" items and ensure high-end SEO coverage on all pages.

### Legacy Cleanup [DELETE]
- **Service Directories**: Delete legacy dental folders: `cosmetic-dentistry`, `dental-implants`, `gum-treatment`, `orthodontics`, `root-canal-treatment`.
- **Hardcoded Data**: Remove `rockseoGuides` (hardcoded dental guides) from `src/app/services/[...slug]/page.tsx`.
- **Duplicate Components**: Remove old trust components (`FAQ.tsx`, `PatientReviews.tsx`) in favor of centralized `EntityReviews` and `EntityFAQs`.

### Metadata & Config Updates [MODIFY]
- **`clinic-config.ts`**: Replace dental equipment with hospital items (3T MRI, 128-Slice CT, Modular OTs).
- **`faq-data.ts`**: Purge dental FAQs; replace with General Hospital & Specialty FAQs.

### New Universal Hubs [NEW]
- **`EntityFAQs.tsx`**: Implement a server component that fetches category-specific FAQs from Directus/Static data and injects JSON-LD automatically.

## Verification Plan
- **Legacy Audit**: Run `grep` for "Dental" and "Samuel" to ensure 100% replacement with "Hospital".
- **SEO Audit**: Verify `FAQPage` and `AggregateRating` schemas are present on every detail page.

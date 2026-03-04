# Master Blueprint: Architecture, Strategy & Design

## 1. System Architecture
- **Framework**: Next.js 15 (App Router) - Selected for Server-Side Rendering (SSR) and SEO performance.
- **Styling**: Tailwind CSS + Shadcn UI - Ensures consistency and rapid development.
- **CMS**: Directus (Headless) - Provides a flexible, secure backend for content management.
- **Database**: PostgreSQL - Robust relational data storage.

## 2. Content Hierarchy (Pillar-Cluster Model)
This structure is designed to maximize "Link Juice" flow and Semantic SEO.
1.  **Home Page (Hub)**: Central entry point linking to all pillars.
2.  **Pillars (Aggregators)**
    - **/departments**: Complete directory of 41+ specialties.
    - **/services**: Taxonomy of medical/surgical procedures.
    - **/doctors**: Searchable directory of specialists.
    - **/locations**: Geo-landing pages (e.g., "Hospital near Katpadi") to capture local intent.
3.  **Clusters (Deep Content)**
    - **Service Guides**: E.g., `/services/piles-treatment-vellore`. Contains:
        - Educational Overview (Symptoms, Causes, Treatment)
        - Interactive Tools (Cost Calculator, Insurance Checker)
        - Patient FAQs
    - **Doctor Profiles**: Detailed bio, experience, and direct booking.
4.  **Semantic Mesh**: Automated interlinking (Doctor ↔ Department ↔ Service).

## 3. Design System & Theme
*Derived from Theme Analysis*

### Core Brand Identity
- **Primary**: Deep Purple (`hsl(310 62% 32%)`) - Wisdom, dignity, specialized care.
- **Secondary**: Indigo/Blue (`hsl(222 47% 31%)`) - Trust, stability, medical expertise.
- **Accent**: Gold/Amber - Highlights #1 Rankings and Awards.

### UI Philosophy: "Glassmorphism & Trust"
- **Aesthetic**: Premium, modern feel using translucency (`bg-white/10 backdrop-blur`) on dark backgrounds.
- **Typography**: `H1 -> H2 -> H3` strict hierarchy for readability and accessibility (WCAG).
- **Interactivity**: Micro-animations on hover to provide tactile feedback; Sticky mobile actions for conversion.

## 4. Strategic Differentiation
*Derived from Competitor Analysis (vs. Apollo Hospitals)*

| Feature | Competitor Standard (e.g., Apollo) | Indira Hospital Strategy |
| :--- | :--- | :--- |
| **SEO** | Broad brand terms | Hyper-local + Symptom-specific (e.g., "Piles treatment Vellore") |
| **Booking** | Complex multi-step forms | 1-Click WhatsApp Direct access to Coordinators |
| **Speed** | Often legacy/slow load times | Next.js Static Generation (SSG) for sub-second loads |
| **Pricing** | Opaque | Transparent "Cost Estimation" tools and Insurance lists |
| **Design** | Corporate Blue/White | Premium Purple/Gold to signal "Super Speciality" status |

## 5. International Standards Compliance
To position Indira Hospital as a global destination (Medical Tourism), the platform adheres to:

- **JCI Digital Standards (Joint Commission International)**
    - **Transparency**: Clear listing of doctors' credentials and privileges.
    - **Patient Education**: Validated health information (Service Guides) to support informed decision-making.
    - **Access**: Multiple channels for appointment booking (Digital + Human).
- **Web Accessibility (WCAG 2.1)**
    - Semantic HTML5 structure (Landmarks, Headings).
    - Color contrast ratios compliant for effective readability.
    - Keyboard navigability for all interactive elements.
- **Data Privacy & Security**
    - **HTTPS/SSL**: Mandatory for all connections.
    - **Minimal Data Collection**: Forms prioritize connecting users to humans rather than storing sensitive health data online (reducing HIPAA/GDPR complexity for the web layer).
- **Performance**
    - **Core Web Vitals**: optimized for LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) to ensure a stable experience for users on varied connection speeds globally.

## 6. Key Features Roadmap
- [x] **International Patients Hub**: Dedicated resource for visa/travel support.
- [x] **Dynamic SEO Engine**: Automated JSON-LD Schema for rich results.
- [x] **Lead Gen Integration**: WhatsApp/Call sticky bars.
- [ ] **Multi-language Support**: Future expansion for international markets (Arabic/Bengali).
- [ ] **Tele-medicine Integration**: Direct video consultation capability.

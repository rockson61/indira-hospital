// =============================================
// Directus CMS TypeScript Schema
// All interfaces include SEO fields for Schema.org JSON-LD
// =============================================

// ─────────────────────────────────────────
// Hospital Settings (Singleton)
// Schema.org: Hospital, MedicalOrganization, LocalBusiness
// ─────────────────────────────────────────
export interface HospitalSettings {
    id: string;
    hospital_name: string;
    legal_name?: string;
    tagline?: string;
    description?: string;
    logo?: string; // UUID
    founded_year?: number;
    phone?: string;
    emergency_phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    address_street?: string;
    address_city?: string;
    address_state?: string;
    address_pincode?: string;
    address_country?: string;
    geo_lat?: number;
    geo_lng?: number;
    opening_hours?: OpeningHoursSpec[];
    price_range?: string;
    bed_count?: number;
    social_facebook?: string;
    social_instagram?: string;
    social_youtube?: string;
    social_linkedin?: string;
    social_twitter?: string;
    google_maps_url?: string;
    aggregate_rating?: number;
    review_count?: number;
    areas_served?: string[];
}

export interface OpeningHoursSpec {
    dayOfWeek: string[];
    opens: string;
    closes: string;
    description?: string;
}

// ─────────────────────────────────────────
// Doctors — Schema.org: Physician
// ─────────────────────────────────────────
export interface Doctor {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug: string;
    designation: string;
    department: string | Department;
    image: string; // UUID
    bio: string;
    experience_years?: number;
    consultation_fee?: number;
    specialties?: string[];
    languages?: string[];
    education?: { degree: string; institution: string; year: string }[];
    experience_timeline?: { role: string; hospital: string; start: string; end: string }[];
    awards?: { title: string; year: string }[];
    opd_schedule?: Record<string, string>;
    // SEO fields
    seo_title?: string;
    seo_description?: string;
    medical_registration_number?: string;
    gender?: 'male' | 'female' | 'other';
    qualifications?: string;
    available_days?: string[];
    phone?: string;
    email?: string;
    social_linkedin?: string;
    social_website?: string;
    accepting_new_patients?: boolean;
    sort_order?: number;
}

// ─────────────────────────────────────────
// Departments — Schema.org: MedicalSpecialty
// ─────────────────────────────────────────
export interface Department {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug: string;
    icon: string; // UUID
    featured_image: string; // UUID
    description: string;
    services?: string[] | Service[];
    // SEO fields
    seo_title?: string;
    seo_description?: string;
    short_description?: string;
    head_of_department?: string;
    facilities?: string[];
    sort_order?: number;
}

// ─────────────────────────────────────────
// Services — Schema.org: MedicalProcedure
// ─────────────────────────────────────────
export interface Service {
    id: string;
    status: 'published' | 'draft' | 'archived';
    title: string;
    slug: string;
    icon: string; // UUID
    short_description: string;
    full_description: string;
    department?: string | Department;
    video_explainer?: string; // UUID
    recovery_timeline?: { day: string; activity: string }[];
    cost_range_min?: number;
    cost_range_max?: number;
    // SEO fields
    seo_title?: string;
    seo_description?: string;
    procedure_type?: 'SurgicalProcedure' | 'NonInvasiveProcedure' | 'DiagnosticProcedure' | 'TherapeuticProcedure' | 'PalliativeProcedure';
    body_location?: string;
    preparation?: string;
    followup?: string;
    how_performed?: string;
    risks_description?: string;
    benefits_list?: string[];
    risks_list?: string[];
    duration_minutes?: number;
    sort_order?: number;
}

// ─────────────────────────────────────────
// Locations — Schema.org: MedicalClinic, Place
// ─────────────────────────────────────────
export interface Location {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug: string;
    district: string;
    address: string;
    phone: string;
    map_embed: string;
    visiting_hours: string;
    distance_from_hospital?: string;
    // SEO fields
    seo_title?: string;
    seo_description?: string;
    geo_lat?: number;
    geo_lng?: number;
    google_maps_url?: string;
    transport_guide?: string;
    nearby_landmarks?: string[];
    sort_order?: number;
}

// ─────────────────────────────────────────
// FAQs — Schema.org: FAQPage
// ─────────────────────────────────────────
export interface FAQ {
    id: string;
    status: 'published' | 'draft' | 'archived';
    question: string;
    answer: string;
    category: 'general' | 'insurance' | 'treatment';
    related_service?: string;
    related_department?: string;
    sort_order?: number;
}

// ─────────────────────────────────────────
// Testimonials — Schema.org: Review
// ─────────────────────────────────────────
export interface Testimonial {
    id: string;
    status: 'published' | 'draft' | 'archived';
    patient_name: string;
    content: string;
    rating: number;
    image: string; // UUID
    // SEO fields
    treatment_received?: string;
    department?: string;
    doctor?: string;
    date_of_visit?: string;
    is_featured?: boolean;
    sort_order?: number;
}

// ─────────────────────────────────────────
// Health Packages — Schema.org: Product, Offer
// ─────────────────────────────────────────
export interface HealthPackage {
    id: string;
    status: 'published' | 'draft' | 'archived';
    title: string;
    slug: string;
    price: number;
    tests_included: string;
    thumbnail: string; // UUID
    // SEO fields
    seo_title?: string;
    seo_description?: string;
    short_description?: string;
    original_price?: number;
    validity_days?: number;
    is_featured?: boolean;
    sort_order?: number;
}

// ─────────────────────────────────────────
// Insurances
// ─────────────────────────────────────────
export interface Insurance {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug?: string;
    logo: string; // UUID
    tier: 'gold' | 'silver' | 'bronze';
    description?: string;
    website_url?: string;
    cashless_available?: boolean;
    sort_order?: number;
}

// ─────────────────────────────────────────
// Diagnostics
// ─────────────────────────────────────────
export interface Diagnostic {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug: string;
    category: 'radiology' | 'pathology' | 'cardiology' | 'other';
    description?: string;
    short_description?: string;
    price?: number;
    preparation_instructions?: string;
    report_time?: string;
    home_collection?: boolean;
    sample_type?: string;
    fasting_required?: boolean;
    parameters_count?: number;
    thumbnail?: string; // UUID
    // SEO fields
    seo_title?: string;
    seo_description?: string;
    sort_order?: number;
    // Schema.org MedicalTest
    body_system?: string;
    used_to_diagnose?: string[] | string;
    normal_range?: string;
}


// ─────────────────────────────────────────
// Pages — Schema.org: WebPage
// ─────────────────────────────────────────
export interface Page {
    id: string;
    status: 'published' | 'draft' | 'archived';
    title: string;
    slug: string;
    hero_image: string; // UUID
    content: string;
    seo_title: string;
    seo_description: string;
    og_image?: string; // UUID
    canonical_url?: string;
    robots_meta?: 'index,follow' | 'noindex,follow' | 'index,nofollow' | 'noindex,nofollow';
    sort_order?: number;
}

// ─────────────────────────────────────────
// Blog Posts — Schema.org: Article
// ─────────────────────────────────────────
export interface Author {
    id: string;
    name: string;
    avatar: string; // UUID
    bio: string;
}

export interface Post {
    id: string;
    status: 'published' | 'draft' | 'archived';
    title: string;
    slug: string;
    image: string; // UUID
    content: string;
    excerpt: string;
    author: Author | string;
    date_created: string;
    category: string;
    tags: string[];
    seo_title?: string;
    seo_description?: string;
}

// ─────────────────────────────────────────
// Aggregate Schema
// ─────────────────────────────────────────
export interface Schema {
    hospital_settings: HospitalSettings;
    doctors: Doctor[];
    departments: Department[];
    services: Service[];
    testimonials: Testimonial[];
    health_packages: HealthPackage[];
    locations: Location[];
    pages: Page[];
    faqs: FAQ[];
    insurances: Insurance[];
    diagnostics: Diagnostic[];
    posts: Post[];
    authors: Author[];
}

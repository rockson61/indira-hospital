export interface Doctor {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug: string;
    designation: string;
    department: string | Department; // ID or Object depending on fetch depth
    image: string; // UUID
    bio: string;
    experience_years?: number;
    consultation_fee?: number;
    specialties?: string[]; // tags
    languages?: string[]; // tags
    education?: { degree: string; institution: string; year: string }[];
    experience_timeline?: { role: string; hospital: string; start: string; end: string }[];
    awards?: { title: string; year: string }[];
    opd_schedule?: Record<string, string>; // { mon: "10-12", tue: "14-16" }
}

export interface Department {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug: string;
    icon: string; // UUID
    featured_image: string; // UUID
    description: string;
    services?: string[] | Service[]; // O2M or M2M
}

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
    benefits?: string[]; // List of benefits
    risks?: string[]; // List of risks
    faqs?: string[] | FAQ[]; // M2M
}

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
    transport_guide?: string; // Rich Text
    coordinates?: { lat: number; lng: number };
    amenities?: string[]; // List of nearby amenities
}

export interface Page {
    id: string;
    status: 'published' | 'draft' | 'archived';
    title: string;
    slug: string;
    hero_image: string;
    content: string;
    seo_title: string;
    seo_description: string;
}

export interface Schema {
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
}

export interface Testimonial {
    id: string;
    status: 'published' | 'draft' | 'archived';
    patient_name: string;
    content: string;
    rating: number;
    image: string; // UUID
}

export interface HealthPackage {
    id: string;
    status: 'published' | 'draft' | 'archived';
    title: string;
    price: number;
    tests_included: string;
    thumbnail: string; // UUID
}

export interface FAQ {
    id: string;
    status: 'published' | 'draft' | 'archived';
    question: string;
    answer: string;
    category: 'general' | 'insurance' | 'treatment';
}

export interface Diagnostic {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    slug: string; // Add slug for page generation
    category: 'radiology' | 'pathology' | 'cardiology' | 'other';
    price?: number;
    preparation_instructions?: string;
    report_time?: string;
    home_collection?: boolean;
    description?: string;
}

export interface Insurance {
    id: string;
    status: 'published' | 'draft' | 'archived';
    name: string;
    logo: string; // UUID
    tier: 'gold' | 'silver' | 'bronze';
}

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
    content: string; // HTML or Markdown
    excerpt: string;
    author: Author | string;
    date_created: string;
    category: string;
    tags: string[];
    seo_title?: string;
    seo_description?: string;
}

export interface Schema {
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

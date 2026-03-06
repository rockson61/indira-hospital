// =========================================================
// HEADLESS CMS CONTENT ARCHITECTURE & INTEGRATION SCHEMAS
// =========================================================

export interface SEOObject {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonicalURL?: string;
    noIndex?: boolean;
    structuredDataOverride?: Record<string, any>;
}

export interface GlobalSiteSettings {
    id: string;
    hospitalName: string;
    tagline?: string;
    logo?: string;
    favicon?: string;
    primaryPhone?: string;
    emergencyPhone?: string;
    email?: string;
    socialLinks?: Record<string, string>;
    primaryColor?: string;
    secondaryColor?: string;
    trustBadges?: string[];
    footerText?: string;
    defaultSEO?: SEOObject;
}

export interface Doctor {
    id: string;
    name: string;
    slug: string;
    photo?: string;
    qualifications?: string[];
    specialization: string;
    department?: string | Department;
    yearsOfExperience?: number;
    languagesSpoken?: string[];
    bio?: string;
    availability?: string[];
    consultationFee?: number;
    location?: string | Location;
    featured?: boolean;
    seo?: SEOObject;

    // Legacy
    image?: string;
    status?: string;
    designation?: string;
    experience_years?: number;
    specialties?: string[];
    procedures?: string[];
    faqs?: { question: string; answer: string }[];
    reviews?: { patient_name: string; content: string; rating: number; date?: string }[];
    memberships?: string[];
    related_services?: Service[] | any[];
    available_locations?: Location[] | any[];
}

export interface Department {
    id: string;
    name: string;
    slug: string;
    icon?: string;
    shortDescription?: string;
    fullDescription?: string;
    featuredImage?: string;
    doctors?: string[] | Doctor[];
    location?: string | Location;
    seo?: SEOObject;

    // Legacy
    status?: string;
}

export interface Location {
    id: string;
    name: string;
    slug: string;
    address?: string;
    mapEmbed?: string;
    phone?: string;
    emergencyPhone?: string;
    operatingHours?: string;
    departments?: string[] | Department[];
    doctors?: string[] | Doctor[];
    seo?: SEOObject;

    // Legacy
    status?: string;
    related_doctors?: Doctor[] | any[];
    related_services?: Service[] | any[];
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    featuredImage?: string;
    content?: string;
    author?: { name: string; avatar?: string; bio?: string } | string | any;
    category?: string;
    tags?: string[];
    publishedDate?: string;
    seo?: SEOObject;

    // Legacy mappings
    date_created: string;
    image?: string;
    status?: string;
    related_doctors?: Doctor[] | any[];
    related_services?: Service[] | any[];
}

export interface Testimonial {
    id: string;
    patientName: string;
    patientPhoto?: string;
    quote: string;
    rating?: number;
    relatedDepartment?: string | Department;
    location?: string | Location;
}

export interface InsurancePartner {
    id: string;
    name: string;
    logo?: string;
    link?: string;
    description?: string;
}

// ─────────────────────────────────────────
// 4️⃣ MODULAR SECTION BLOCKS
// ─────────────────────────────────────────
export interface HeroSectionBlock {
    _type: 'hero';
    heading: string;
    subheading?: string;
    backgroundImage?: string;
    primaryCTALabel?: string;
    primaryCTALink?: string;
    secondaryCTA?: string;
    showEmergencyBadge?: boolean;
}

export interface DepartmentGridBlock {
    _type: 'department_grid';
    title: string;
    description?: string;
    departments?: Department[];
    layoutVariant?: 'grid' | 'carousel';
}

export interface DoctorHighlightBlock {
    _type: 'doctor_highlight';
    title: string;
    doctors?: Doctor[];
    showFilter?: boolean;
}

export interface AppointmentCTABlock {
    _type: 'appointment_cta';
    title: string;
    description?: string;
    buttonText?: string;
    backgroundStyle?: 'primary' | 'secondary' | 'light' | 'image';
}

export interface TestimonialSectionBlock {
    _type: 'testimonial_section';
    title: string;
    testimonials?: Testimonial[];
    autoSlide?: boolean;
}

export interface InsuranceSectionBlock {
    _type: 'insurance_section';
    title: string;
    insurancePartners?: InsurancePartner[];
}

export interface BlogPreviewBlock {
    _type: 'blog_preview';
    title: string;
    numberOfPosts?: number;
    categoryFilter?: string;
}

export type CMSBlock =
    | HeroSectionBlock
    | DepartmentGridBlock
    | DoctorHighlightBlock
    | AppointmentCTABlock
    | TestimonialSectionBlock
    | InsuranceSectionBlock
    | BlogPreviewBlock;

// ─────────────────────────────────────────
// 3️⃣ PAGE-LEVEL CONTENT MODEL
// ─────────────────────────────────────────
export interface Page {
    id: string;
    title: string;
    slug: string;
    heroSection?: HeroSectionBlock;
    sections?: CMSBlock[];
    seo?: SEOObject;
}

// ─────────────────────────────────────────
// 5️⃣ ADVANCED ENTERPRISE MODELS
// ─────────────────────────────────────────
export interface Event {
    id: string;
    title: string;
    slug: string;
    description?: string; // Rich Text
    startDate: string;
    endDate?: string;
    location?: string | Location;
    isVirtual?: boolean;
    registrationLink?: string;
    featuredImage?: string;
    seo?: SEOObject;
}

export interface HealthPackage {
    id: string;
    title: string;
    slug: string;
    price?: number;
    originalPrice?: number;
    testsIncluded?: string[]; // Array of test names
    thumbnail?: string;
    shortDescription?: string;
    fullDescription?: string; // Rich Text
    isFeatured?: boolean;
    relatedDepartments?: string[] | Department[];
    seo?: SEOObject;

    // Legacy
    status?: string;
    tests_included?: string;
    related_services?: any[];
}

export interface DoctorSchedule {
    id: string;
    doctor: string | Doctor;
    location: string | Location;
    dayOfWeek: string; // e.g. "Monday"
    startTime: string; // e.g. "09:00"
    endTime: string;   // e.g. "17:00"
    exceptions?: { date: string; isAvailable: boolean; reason?: string }[];
}

export interface FAQ {
    id: string;
    question: string;
    answer: string; // Rich Text or plain text
    category?: string;
    relatedEntity?: string; // Polymorphic reference ID

    // Legacy
    status?: string;
}

export interface ClinicalProcedure {
    id: string;
    title: string;
    slug: string;
    overview?: string; // Rich text
    preparation?: string; // Rich text
    recovery?: string; // Rich text
    risks?: string; // Rich text
    relatedDepartments?: string[] | Department[];
    relatedDoctors?: string[] | Doctor[];
    faqs?: FAQ[];
    seo?: SEOObject;
}

export interface PatientEducationResource {
    id: string;
    title: string;
    slug: string;
    resourceType: 'article' | 'video' | 'pdf_guide';
    fileUrl?: string;
    videoUrl?: string;
    content?: string; // Rich Text
    relatedDepartments?: string[] | Department[];
    seo?: SEOObject;
}

export interface TelemedicineProfile {
    id: string;
    doctor: string | Doctor;
    isAvailable: boolean;
    consultationFee: number;
    platformLink?: string;
    languagesSpoken: string[];
}

export interface Diagnostic {
    id: string;
    name: string;
    slug: string;
    shortDescription?: string;
    price?: number;
    reportTimeHours?: number;
    thumbnail?: string;

    // Legacy
    status?: string;
    short_description?: string;
    body_system?: string;
    used_to_diagnose?: string[] | string | any;
    normal_range?: string;
}

export interface Service {
    id: string;
    title: string;
    slug: string;
    icon?: string;
    shortDescription?: string;
    procedureType?: string;
    relatedDoctors?: any[];
    availableLocations?: any[];
    seo?: SEOObject;

    // Legacy mappings
    status?: string;
    short_description?: string;
    full_description?: string;
    procedure_type?: string;
    seo_title?: string;
    seo_description?: string;
    related_doctors?: any[];
    available_locations?: any[];
}

// ─────────────────────────────────────────
// Aggregate Schema for Directus SDK
// ─────────────────────────────────────────
export interface Schema {
    hospital_settings: GlobalSiteSettings;
    doctors: Doctor[];
    departments: Department[];
    services: Service[];
    testimonials: Testimonial[];
    health_packages: HealthPackage[];
    locations: Location[];
    pages: Page[];
    faqs: FAQ[];
    insurances: InsurancePartner[];
    diagnostics: Diagnostic[];
    posts: Post[];
    events: Event[];
    doctor_schedules: DoctorSchedule[];
    clinical_procedures: ClinicalProcedure[];
    patient_education: PatientEducationResource[];
    telemedicine_profiles: TelemedicineProfile[];
}

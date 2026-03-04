export const DOCTORS_DIRECTORY = {
    DEFAULT_SEARCH_DEPT: "all",
    DEFAULT_NO_DOCTORS_MESSAGE: "No Doctors Found",
    DEFAULT_NO_DOCTORS_SUGGESTION: "Try adjusting your search or filters.",
    DEFAULT_CLEAR_FILTERS_TEXT: "Clear all filters",
    PROFILE_HREF_PREFIX: "/doctor",
    BOOK_VISIT_HREF_PREFIX: "/book-appointment",
    EXPERIENCE_SUFFIX: "+ Yrs",
    MAIN_CAMPUS_LOCATION: "Main Campus, Vellore",
} as const;

export const DOCTORS_DATA = {
    PLACEHOLDER_IMAGE: "/images/doctors/placeholder.jpg",
} as const;

export const DEPARTMENTS_DATA = {
    ALL_LABEL: "All Departments",
} as const;

export const DOCTOR_PROFILE = {
    BREADCRUMB_HOME: "Home",
    BREADCRUMB_DOCTORS: "Doctors",
    DEFAULT_LOCATION: "Indira Hospital",
    EXPERIENCE_EXP_SUFFIX: "+ Yrs Exp",
    BTN_WHATSAPP_BOOK: "Get Free Consultation",
    BTN_WHATSAPP_CHAT: "Ask a Question Free",
    BTN_CALL_TOKEN: "Call — It's Free",
    BTN_VIEW_DIRECTORY: "See All Specialists",
    SECTION_BIOGRAPHY: "Why This Doctor?",
    SECTION_ACADEMIC_PROFILE: "Credentials & Training",
    SECTION_QUICK_BOOKING: "Book in 30 Seconds",
    SECTION_LANGUAGES: "Languages",
    SECTION_INDIRA_STANDARDS: "The Indira Difference",
    SECTION_EXPERT_NETWORK: "Other Specialists You May Need",
    SECTION_OTHER_PROFILES: "Other Professional Profiles",
    WHATSAPP_MESSAGE_PREFIX: "Hi, I want to book an appointment with",
    DEFAULT_BIO: "<p>Highly experienced specialist dedicated to pain-free, same-day discharge procedures. Trusted by thousands of patients across Tamil Nadu for clinical excellence and compassionate care at Indira Super Speciality Hospital.</p>",
    VERIFIED_PROFILE_TEXT: "Verified & Trusted",
    QUICK_BOOKING_SUBTEXT: "WhatsApp is the fastest way. Get instant confirmation, cost estimate, and insurance details.",
} as const;

export const DOCTOR_EXPERTISE_FALLBACK_1 = {
    TITLE: "Minimal Access Surgery",
    DESC: "Advanced specialized competence in keyhole procedures ensuring faster recovery times.",
} as const;

export const DOCTOR_EXPERTISE_FALLBACK_2 = {
    TITLE: "Evidence-Based Care",
    DESC: "Adhering to international JCI standards for clinical excellence and patient safety protocols.",
} as const;

export const INDIRA_STANDARDS = [
    { icon: "Users", text: "15,000+ Successful Surgeries" },
    { icon: "Clock", text: "Same-Day Discharge Available" },
    { icon: "Shield", text: "50+ Cashless Insurance Partners" }
] as const;

export const BLOG_CONFIGURATION = {
    TITLE: "Health Insights & News",
    SUBTITLE: "Expert advice, wellness tips, and the latest updates from Indira Super Speciality Hospital.",
    NO_IMAGE_PLACEHOLDER: "No Image",
    PLACEHOLDER_IMAGE_PATH: "/images/hospital-placeholder.jpg",
    DEFAULT_CATEGORY: "Health",
    DEFAULT_AUTHOR: "Indira Hospital",
    READ_ARTICLE_BUTTON: "Read Article",
    NO_ARTICLES_MESSAGE: "No articles found. Check back soon for updates!",
    DYNAMIC_CONTENT_PLACEHOLDER: "This is a placeholder for the blog post content. Blog data will be fetched from CMS dynamically in Phase 3/4."
} as const;

export const HOME_PAGE_CONTENT = {
    ACCREDITATION_TITLE: "Recognized & Accredited By",
    ACCREDITATION_BADGES: ["NABH ACCREDITED", "NABL CERTIFIED", "ISO 9001:2015"],
    CTA_HEADING: "Your Health Can't Wait. Neither Should You.",
    CTA_SUBTEXT: "Delaying necessary treatment often leads to worsening symptoms. Get world-class care at Indira Hospital today. Consult our experts for a clear, transparent cost estimate and rapid recovery plan.",
    CTA_BUTTON_BOOK: "Schedule Consultation",
    CTA_BUTTON_CONTACT: "Call Admission Desk"
} as const;

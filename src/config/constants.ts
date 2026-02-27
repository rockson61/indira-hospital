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
    BTN_WHATSAPP_BOOK: "Book via WhatsApp",
    BTN_WHATSAPP_CHAT: "WhatsApp Chat",
    BTN_CALL_TOKEN: "Call for Token",
    BTN_VIEW_DIRECTORY: "View Expert Directory",
    SECTION_BIOGRAPHY: "Biography",
    SECTION_ACADEMIC_PROFILE: "Academic Profile",
    SECTION_QUICK_BOOKING: "Quick Booking",
    SECTION_LANGUAGES: "Languages",
    SECTION_INDIRA_STANDARDS: "Indira Standards",
    SECTION_EXPERT_NETWORK: "Expert Medical Network",
    SECTION_OTHER_PROFILES: "Other Professional Profiles",
    WHATSAPP_MESSAGE_PREFIX: "Hi, I want to book an appointment with",
    DEFAULT_BIO: "<p>Highly skilled medical professional dedicated to providing superior patient outcomes at Indira Super Speciality Hospital. Expert in advanced medical diagnostics and therapy.</p>",
    VERIFIED_PROFILE_TEXT: "Verified Profile",
    QUICK_BOOKING_SUBTEXT: "Preferred mode for instant consultation confirmation and cost estimates.",
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
    { icon: "Users", text: "Top-Tier Clinical Excellence" },
    { icon: "Clock", text: "Advanced Diagnostic Precision" },
    { icon: "Shield", text: "Patient Privacy First" }
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
    CTA_HEADING: "Every Day You Wait Costs You More",
    CTA_SUBTEXT: "Delaying surgery doesn't save money — it doubles it. Get a free cost estimate today and stop the pain tomorrow.",
    CTA_BUTTON_BOOK: "Get Free Estimate",
    CTA_BUTTON_CONTACT: "Call Now — It's Free"
} as const;

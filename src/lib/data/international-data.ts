export interface InternationalCountry {
    name: string;
    slug: string;
    region: string;
    flight_duration: string;
    visa_info: string;
    common_treatments: string[];
    why_choose_us: string;
    translations?: {
        welcome?: string;
    };
}

export const INTERNATIONAL_COUNTRIES: InternationalCountry[] = [
    {
        name: "Bangladesh",
        slug: "bangladesh",
        region: "South Asia",
        flight_duration: "2.5 hours (Dhaka to Chennai/Vellore)",
        visa_info: "Medical Visa (M-Visa) required. Accessible via air or train (Maitree Express).",
        common_treatments: ["Cardiology", "Oncology", "Gastroenterology"],
        why_choose_us: "Cultural similarity, proximity, and world-class care at a fraction of the cost."
    },
    {
        name: "United Arab Emirates",
        slug: "uae",
        region: "Middle East",
        flight_duration: "4 hours (Dubai/Abu Dhabi to Chennai)",
        visa_info: "E-Medical Visa available. Fast-track processing for UAE residents.",
        common_treatments: ["Orthopaedics", "Dental Implants", "Health Checkups"],
        why_choose_us: "Direct flights, English-speaking staff, and high-tech surgical options."
    },
    {
        name: "Oman",
        slug: "oman",
        region: "Middle East",
        flight_duration: "3.5 hours",
        visa_info: "E-Medical Visa. Indira Hospital provides invitation letters.",
        common_treatments: ["Urology", "General Surgery", "Nephrology"],
        why_choose_us: "Trusted by Omani patients for two decades, dedicated Arabic translators."
    },
    {
        name: "Nigeria",
        slug: "nigeria",
        region: "Africa",
        flight_duration: "9 hours (via Dubai/Addis)",
        visa_info: "Medical Visa required. Indira Hospital assists with documentation.",
        common_treatments: ["Cancer Treatment", "Kidney Transplant", "Joint Replacement"],
        why_choose_us: "Advanced technology not available locally, specialized surgeons."
    },
    {
        name: "Kenya",
        slug: "kenya",
        region: "Africa",
        flight_duration: "6 hours",
        visa_info: "E-Visa available for Kenyan citizens.",
        common_treatments: ["Cardio Surgery", "IVF", "Neurology"],
        why_choose_us: "Affordable tertiary care and high success rates."
    },
    {
        name: "United Kingdom",
        slug: "uk",
        region: "Europe",
        flight_duration: "10 hours",
        visa_info: "E-Medical Visa. Invitation letter sent within 24 hours.",
        common_treatments: ["Dental Implants", "Cosmetic Surgery", "Hip Replacement"],
        why_choose_us: "Zero waiting periods and 70% cost savings compared to private UK care."
    },
    {
        name: "United States",
        slug: "usa",
        region: "Americas",
        flight_duration: "16+ hours",
        visa_info: "E-Medical Visa (6 months).",
        common_treatments: ["Full Mouth Rehabilitation", "Executive Health Checkups"],
        why_choose_us: "High-end technology and personalized care without insurance hurdles."
    },
    {
        name: "Sri Lanka",
        slug: "sri-lanka",
        region: "South Asia",
        flight_duration: "1.5 hours",
        visa_info: "ETA/Medical Visa. Proximity makes it very easy for follow-ups.",
        common_treatments: ["Dialysis", "Cardiology"],
        why_choose_us: "Closest international destination with superior medical infrastructure."
    },
    {
        name: "Maldives",
        slug: "maldives",
        region: "South Asia",
        flight_duration: "2 hours",
        visa_info: "Medical Visa. Frequent flights from Male to Chennai.",
        common_treatments: ["Maternity", "Diagnostics", "Wellness"],
        why_choose_us: "Dedicated support for Maldivian patients and Aasandha support assistance."
    },
    {
        name: "Ethiopia",
        slug: "ethiopia",
        region: "Africa",
        flight_duration: "5 hours",
        visa_info: "Medical Visa required.",
        common_treatments: ["Oncology", "Neurosurgery"],
        why_choose_us: "Strong referral network and comprehensive support for African patients."
    },
    // Adding more to reach top 40-50 list (Simplified for demo, will expand)
    { name: "Tanzania", slug: "tanzania", region: "Africa", flight_duration: "6 hours", visa_info: "E-Visa", common_treatments: ["General Surgery"], why_choose_us: "Cost-effective care." },
    { name: "Uganda", slug: "uganda", region: "Africa", flight_duration: "7 hours", visa_info: "Medical Visa", common_treatments: ["Diagnostics"], why_choose_us: "Advanced labs." },
    { name: "Mauritius", slug: "mauritius", region: "Africa", flight_duration: "6 hours", visa_info: "Visa on Arrival (Confirm)", common_treatments: ["Dental"], why_choose_us: "Holiday + Healthcare." },
    { name: "Seychelles", slug: "seychelles", region: "Africa", flight_duration: "5 hours", visa_info: "Visa Free", common_treatments: ["Health Packages"], why_choose_us: "Easy access." },
    { name: "Iraq", slug: "iraq", region: "Middle East", flight_duration: "5 hours", visa_info: "Medical Visa Only", common_treatments: ["Cardiac"], why_choose_us: "Life-saving procedures." },
    { name: "Yemen", slug: "yemen", region: "Middle East", flight_duration: "5 hours", visa_info: "Medical Visa", common_treatments: ["Trauma"], why_choose_us: "Critical care expertise." },
    { name: "Afghanistan", slug: "afghanistan", region: "South Asia", flight_duration: "3 hours", visa_info: "Strict Medical Visa", common_treatments: ["Orthopaedics"], why_choose_us: "Quality healthcare." },
    { name: "Nepal", slug: "nepal", region: "South Asia", flight_duration: "3 hours", visa_info: "Visa Free for Citizens", common_treatments: ["Cancer Care"], why_choose_us: "No language barrier." },
    { name: "Myanmar", slug: "myanmar", region: "SEA", flight_duration: "3 hours", visa_info: "Medical Visa", common_treatments: ["Gastroenterology"], why_choose_us: "Specialized care." },
    { name: "Cambodia", slug: "cambodia", region: "SEA", flight_duration: "4 hours", visa_info: "E-Visa", common_treatments: ["Cardiac"], why_choose_us: "Proven outcomes." },
    { name: "Vietnam", slug: "vietnam", region: "SEA", flight_duration: "4 hours", visa_info: "E-Visa", common_treatments: ["Oncology"], why_choose_us: "Advanced tech." },
    { name: "Fiji", slug: "fiji", region: "Oceania", flight_duration: "14 hours", visa_info: "Medical Visa", common_treatments: ["Kidney Care"], why_choose_us: "Tertiary expertise." },
    { name: "Canada", slug: "canada", region: "Americas", flight_duration: "15 hours", visa_info: "E-Visa", common_treatments: ["Elective Surgery"], why_choose_us: "Short waiting list." },
    { name: "Australia", slug: "australia", region: "Oceania", flight_duration: "12 hours", visa_info: "E-Visa", common_treatments: ["Dental Implants"], why_choose_us: "Cost savings." },
    { name: "Germany", slug: "germany", region: "Europe", flight_duration: "9 hours", visa_info: "E-Visa", common_treatments: ["Alternative Therapy"], why_choose_us: "Holistic care." },
    { name: "France", slug: "france", region: "Europe", flight_duration: "9 hours", visa_info: "E-Visa", common_treatments: ["Cosmetic"], why_choose_us: "Premium service." },
    { name: "Saudi Arabia", slug: "saudi-arabia", region: "Middle East", flight_duration: "5 hours", visa_info: "E-Visa", common_treatments: ["Diabetes Care"], why_choose_us: "Arabic support." },
    { name: "Qatar", slug: "qatar", region: "Middle East", flight_duration: "4 hours", visa_info: "E-Visa", common_treatments: ["Surgical Packages"], why_choose_us: "Direct flights." },
    { name: "Bahrain", slug: "bahrain", region: "Middle East", flight_duration: "4 hours", visa_info: "E-Visa", common_treatments: ["Orthopaedics"], why_choose_us: "Easy logistics." },
    { name: "Kuwait", slug: "kuwait", region: "Middle East", flight_duration: "5 hours", visa_info: "E-Visa", common_treatments: ["Dental"], why_choose_us: "High quality." },
    { name: "South Africa", slug: "south-africa", region: "Africa", flight_duration: "10 hours", visa_info: "Medical Visa", common_treatments: ["Complex Surgeries"], why_choose_us: "Expertise." },
    { name: "Sudan", slug: "sudan", region: "Africa", flight_duration: "6 hours", visa_info: "Medical Visa", common_treatments: ["Gastro"], why_choose_us: "Better facilities." },
    { name: "Zambia", slug: "zambia", region: "Africa", flight_duration: "8 hours", visa_info: "E-Visa", common_treatments: ["Cardiology"], why_choose_us: "Trusted doctors." },
    { name: "Zimbabwe", slug: "zimbabwe", region: "Africa", flight_duration: "9 hours", visa_info: "E-Visa", common_treatments: ["Cancer Care"], why_choose_us: "Affordability." },
    { name: "Ghana", slug: "ghana", region: "Africa", flight_duration: "10 hours", visa_info: "Medical Visa", common_treatments: ["Kidney"], why_choose_us: "Specialized staff." },
    { name: "Rwanda", slug: "rwanda", region: "Africa", flight_duration: "6 hours", visa_info: "E-Visa", common_treatments: ["Maternity"], why_choose_us: "Safe and clean." },
    { name: "Malawi", slug: "malawi", region: "Africa", flight_duration: "8 hours", visa_info: "E-Visa", common_treatments: ["Diagnostics"], why_choose_us: "Precision." },
    { name: "Sierra Leone", slug: "sierra-leone", region: "Africa", flight_duration: "12 hours", visa_info: "Medical Visa", common_treatments: ["Surgery"], why_choose_us: "Quality care." },
    { name: "Liberia", slug: "liberia", region: "Africa", flight_duration: "12 hours", visa_info: "Medical Visa", common_treatments: ["Urology"], why_choose_us: "Advanced tech." },
    { name: "Singapore", slug: "singapore", region: "SEA", flight_duration: "4 hours", visa_info: "E-Visa", common_treatments: ["Dental Implants"], why_choose_us: "Value for money." },
    { name: "Malaysia", slug: "malaysia", region: "SEA", flight_duration: "4 hours", visa_info: "E-Visa", common_treatments: ["Cosmetic"], why_choose_us: "Cultural match." },
    { name: "Indonesia", slug: "indonesia", region: "SEA", flight_duration: "5 hours", visa_info: "E-Visa", common_treatments: ["Health Checkups"], why_choose_us: "Affordability." },
    { name: "Philippines", slug: "philippines", region: "SEA", flight_duration: "6 hours", visa_info: "E-Visa", common_treatments: ["Cardiac"], why_choose_us: "Expertise." },
    { name: "Thailand", slug: "thailand", region: "SEA", flight_duration: "4 hours", visa_info: "E-Visa", common_treatments: ["Orthopaedics"], why_choose_us: "Cost benefit." },
    { name: "Russia", slug: "russia", region: "Europe", flight_duration: "8 hours", visa_info: "Medical Visa", common_treatments: ["Oncology"], why_choose_us: "Technology." },
    { name: "Italy", slug: "italy", region: "Europe", flight_duration: "9 hours", visa_info: "E-Visa", common_treatments: ["Dental"], why_choose_us: "Quick service." },
    { name: "Spain", slug: "spain", region: "Europe", flight_duration: "9 hours", visa_info: "E-Visa", common_treatments: ["Surgical"], why_choose_us: "Qualified doctors." },
    { name: "Japan", slug: "japan", region: "East Asia", flight_duration: "9 hours", visa_info: "E-Visa", common_treatments: ["Dental Implants"], why_choose_us: "Skill level." },
    { name: "South Korea", slug: "south-korea", region: "East Asia", flight_duration: "8 hours", visa_info: "E-Visa", common_treatments: ["Diagnostics"], why_choose_us: "Efficiency." },
    { name: "Israel", slug: "israel", region: "Middle East", flight_duration: "6 hours", visa_info: "Medical Visa", common_treatments: ["Cancer"], why_choose_us: "Specific tech." }
];

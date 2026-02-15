
export interface TreatmentItem {
    id: string;
    slug: string; // matches the last segment of url, e.g. 'angioplasty'
    parentServiceSlug: string; // e.g., 'cardiology'
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    faq?: { question: string; answer: string }[];
}

export const TREATMENT_DATA: TreatmentItem[] = [
    {
        id: "t-1",
        slug: "angioplasty",
        parentServiceSlug: "cardiology",
        title: "Angioplasty & Stenting",
        shortDescription: "Minimally invasive procedure to open blocked coronary arteries.",
        fullDescription: "Angioplasty is a procedure to restore blood flow through the artery. It involves threading a catheter with a small balloon into a blocked blood vessel. The balloon is inflated to widen the artery and a stent is often placed to keep it open.",
        features: [
            "Emergency Primary Angioplasty (24/7)",
            "Drug-Eluting Stents (USFDA approved)",
            "Intravascular Ultrasound (IVUS) guidance",
            "Radial route (via wrist) for early discharge"
        ],
        benefits: [
            "Immediate relief from chest pain",
            "life-saving in heart attack",
            "Short hospital stay (2-3 days)",
            "Quick recovery"
        ],
        faq: [
            { question: "How long does the procedure take?", answer: "Usually 45 to 90 minutes." },
            { question: "Is it painful?", answer: "Local anesthesia is used at the insertion site, so you shouldn't feel pain. You might feel mild chest discomfort." }
        ]
    },
    {
        id: "t-2",
        slug: "piles-treatment",
        parentServiceSlug: "general-surgery",
        title: "Laser Piles Treatment",
        shortDescription: "Painless, bloodless laser surgery for Hemorrhoids.",
        fullDescription: "Laser treatment for piles (hemorrhoids) is a minimally invasive procedure that uses laser energy to shrink the hemorrhoidal tissue. It offers significant advantages over traditional surgery.",
        features: [
            "No incisions or stitches",
            "Minimal bleeding",
            "advanced diode laser",
            "Day-care procedure"
        ],
        benefits: [
            "Painless recovery",
            "Discharge within 24 hours",
            "Early return to work",
            "Negligible recurrence rate"
        ],
        faq: [
            { question: "Is it permanent?", answer: "Yes, laser treatment has a very high success rate and low recurrence." }
        ]
    },
    {
        id: "t-3",
        slug: "maternity",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Maternity & Pregnancy Care",
        shortDescription: "Comprehensive care for safe delivery and healthy baby.",
        fullDescription: "We provide comprehensive maternity services ranging from biological to high-risk pregnancy care. Our luxury birthing suites and advanced NICU ensuring the safest delivery experience.",
        features: [
            "High-Risk Pregnancy Management",
            "Luxury LDR Suites",
            "Painless Delivery (Epidural)",
            "Lactation Counselling"
        ],
        benefits: [
            "24/7 Obstetrician coverage",
            "Connected Level 3 NICU",
            "Antenatal classes",
            "Post-natal care and vaccination"
        ]
    },
    {
        id: "t-4",
        slug: "stroke-management",
        parentServiceSlug: "neurology",
        title: "Stroke Management",
        shortDescription: "Rapid assessment and treatment for acute stroke.",
        fullDescription: "Time is Brain. Our dedicated Stroke Unit provides rapid thrombolysis (clot-busting) and interventional mechanical thrombectomy to restore blood flow to the brain and minimize damage.",
        features: [
            "24/7 Stroke Ready Hospital",
            "Rapid CT/MRI imaging",
            "Thrombolysis therapy",
            "Neuro-intervention capability"
        ],
        benefits: [
            "Better survival rates",
            "Reduced long-term disability",
            "Comprehensive rehabilitation",
            "Expert neurologist care"
        ]
    },
    {
        id: "t-5",
        slug: "fracture-care",
        parentServiceSlug: "orthopaedics",
        title: "Complex Fracture Care",
        shortDescription: "Advanced trauma care for bone fractures and dislocations.",
        fullDescription: "Our Orthopaedic trauma team specializes in managing complex fractures, pelvic injuries, and poly-trauma cases. We use advanced fixation techniques to ensure optimal bone healing and functional recovery.",
        features: [
            "Minimally Invasive Plate Osteosynthesis (MIPO)",
            "Interlocking Nailing",
            "24/7 Trauma Surgery",
            "C-Arm guidance"
        ],
        benefits: [
            "Faster bone healing",
            "Early mobilization",
            "Reduced infection risk",
            "Restoration of full function"
        ]
    },
    {
        id: "t-6",
        slug: "knee-replacement",
        parentServiceSlug: "orthopaedics",
        title: "Total Knee Replacement",
        shortDescription: "Pain-free mobility with advanced joint replacement.",
        fullDescription: "Our Joint Replacement Centre performs Total Knee Replacement (TKR) using computer navigation and minimally invasive techniques. This ensures perfect alignment, longer implant life, and faster recovery.",
        features: [
            "Computer Navigated Surgery",
            "Minimally Invasive Sub-vastus approach",
            "High-flex rotating platform knees",
            "Rapid Recovery Protocol"
        ],
        benefits: [
            "Walk within 24 hours",
            "Long-lasting implants (20+ years)",
            "Painless post-op period",
            "Stitch-less skin closure"
        ],
        faq: [
            { question: "When can I walk after surgery?", answer: "Most patients walk with support on the same day or next day after surgery." }
        ]
    },
    {
        id: "t-7",
        slug: "hip-replacement",
        parentServiceSlug: "orthopaedics",
        title: "Total Hip Replacement",
        shortDescription: "Restore mobility with advanced hip replacement surgery.",
        fullDescription: "Our orthopaedic team performs total hip replacement surgery for patients with severe arthritis or hip fractures, using durable implants and minimally invasive techniques for faster recovery.",
        features: [
            "Ceramic-on-Ceramic implants",
            "Minimally Invasive approach",
            "Computer Navigation",
            "Rapid Rehab Protocol"
        ],
        benefits: [
            "Pain-free walking",
            "Improved joint mobility",
            "Long-lasting results",
            "Enhanced quality of life"
        ]
    },
    {
        id: "t-8",
        slug: "arthroscopy",
        parentServiceSlug: "orthopaedics",
        title: "Arthroscopy (Sports Medicine)",
        shortDescription: "Minimally invasive keyhole surgery for joint problems.",
        fullDescription: "Arthroscopy is a procedure for diagnosing and treating joint problems. A surgeon inserts a narrow tube attached to a fiber-optic video camera through a small incision.",
        features: [
            "Keyhole surgery",
            "ligament reconstruction (ACL/PCL)",
            "Meniscus Repair",
            "Rotator Cuff Repair"
        ],
        benefits: [
            "Minimal scarring",
            "Day-care procedure",
            "Faster return to sports",
            "Less post-op pain"
        ]
    },
    {
        id: "t-9",
        slug: "kidney-transplant",
        parentServiceSlug: "urology",
        title: "Kidney Transplantation",
        shortDescription: "Life-saving transplant surgery for renal failure.",
        fullDescription: "We offer a comprehensive renal transplant program involving live related donors and deceased donors, supported by advanced immunology and post-transplant care.",
        features: [
            "Laparoscopic Donor Nephrectomy",
            "Advanced Immunosuppression",
            "Dedicated Transplant ICU",
            "Cross-match compatibility testing"
        ],
        benefits: [
            "Freedom from Dialysis",
            "Normal lifestyle",
            "High success rates",
            "Comprehensive follow-up"
        ]
    },
    {
        id: "t-10",
        slug: "prostate-surgery",
        parentServiceSlug: "urology",
        title: "Laser Prostate Surgery (TURP/HoLEP)",
        shortDescription: "Advanced laser treatment for enlarged prostate (BPH).",
        fullDescription: "We use Holmium Laser Enucleation of the Prostate (HoLEP) and TURP to treat benign prostatic hyperplasia (BPH), ensuring rapid relief from urinary symptoms.",
        features: [
            "Holmium Laser technology",
            "Bloodless procedure",
            "Suitable for cardiac patients",
            "Short hospital stay"
        ],
        benefits: [
            "Immediate symptom relief",
            "Quick catheter removal",
            "Low recurrence risk",
            "Safe for elderly"
        ]
    },
    {
        id: "t-11",
        slug: "liver-transplant",
        parentServiceSlug: "gastroenterology",
        title: "Liver Transplantation",
        shortDescription: "Expert care for end-stage liver disease.",
        fullDescription: "Our liver transplant unit provides state-of-the-art care for patients with liver failure and liver cancer, offering both living donor and cadaveric transplant options.",
        features: [
            "Living Donor Liver Transplant",
            "Dedicated Liver ICU",
            "Experienced Transplant Team",
            "Post-transplant rehabilitation"
        ],
        benefits: [
            "Survival benefit",
            "Improved quality of life",
            "Expert multidisciplinary care",
            "Long-term management"
        ]
    },
    {
        id: "t-12",
        slug: "gallbladder-removal",
        parentServiceSlug: "gastroenterology",
        title: "Laparoscopic Gallbladder Removal",
        shortDescription: "Minimally invasive surgery for gallstones.",
        fullDescription: "Cholecystectomy is the surgical removal of the gallbladder. Laparoscopic removal is the gold standard, offering minimal pain and quick recovery.",
        features: [
            "Keyhole incisions",
            "HD Laparoscopy",
            "Day-care option",
            "Low complication rate"
        ],
        benefits: [
            "No dietary restrictions post-recovery",
            "Prevention of complications",
            "Cosmetic advantage",
            "Return to work in days"
        ]
    },
    {
        id: "t-13",
        slug: "root-canal-treatment",
        parentServiceSlug: "dental",
        title: "Root Canal Treatment",
        shortDescription: "Save your natural tooth with painless root canal therapy.",
        fullDescription: "Root canal treatment is designed to eliminate bacteria from the infected root canal, prevent reinfection of the tooth and save the natural tooth.",
        features: [
            "Single-sitting option",
            "Rotary Endodontics",
            "Digital X-rays",
            "Painless anesthesia"
        ],
        benefits: [
            "Saves natural tooth",
            "Relieves severe pain",
            "Prevents spread of infection",
            "Durable functionality"
        ]
    },
    {
        id: "t-14",
        slug: "dental-implants",
        parentServiceSlug: "dental",
        title: "Dental Implants",
        shortDescription: "Permanent solution for missing teeth.",
        fullDescription: "Dental implants are replacement tooth roots. Implants provide a strong foundation for fixed (permanent) or removable replacement teeth that are made to match your natural teeth.",
        features: [
            "Titanium implants",
            "Immediate Loading option",
            "Bone grafting if needed",
            "3D Guide planning"
        ],
        benefits: [
            "Looks and feels like natural teeth",
            "Improved speech",
            "Easier eating",
            "Durability (Life-long)"
        ]
    },
    {
        id: "t-15",
        slug: "lasik",
        parentServiceSlug: "ophthalmology",
        title: "LASIK Eye Surgery",
        shortDescription: "Freedom from glasses with advanced laser vision correction.",
        fullDescription: "LASIK is a refractive surgery for the correction of myopia, hyperopia, and astigmatism. The surgery is performed by an ophthalmologist who uses a laser or microkeratome to reshape the eye's cornea.",
        features: [
            "Blade-free option",
            "Custom Wavefront technology",
            "Quick procedure (10 mins)",
            "Fast visual recovery"
        ],
        benefits: [
            "20/20 vision potential",
            "Freedom from contact lenses",
            "Painless procedure",
            "Permanent results"
        ]
    },
    {
        id: "t-16",
        slug: "hernia-repair",
        parentServiceSlug: "general-surgery",
        title: "Laparoscopic Hernia Repair",
        shortDescription: "Advanced mesh repair for all types of hernias.",
        fullDescription: "We perform laparoscopic repair for Inguinal, Umbilical, and Incisional hernias using 3D mesh, ensuring strong reinforcement and minimal recurrence.",
        features: [
            "3D Mesh technolgy",
            "TAPP / TEP techniques",
            "Minimal incisions",
            "Fast recovery"
        ],
        benefits: [
            "Reduced post-op pain",
            "Low recurrence rate",
            "Early return to activity",
            "Better cosmetics"
        ]
    },
    {
        id: "t-17",
        slug: "dialysis",
        parentServiceSlug: "nephrology",
        title: "Dialysis Services",
        shortDescription: "24/7 Hemodialysis for acute and chronic kidney failure.",
        fullDescription: "Our Dialysis unit is equipped with advanced Fresenius machines to provide safe and effective hemodialysis for patients with renal failure.",
        features: [
            "24/7 Emergency Dialysis",
            "Bedside dialysis in ICU",
            "RO Water plant",
            "Strict infection control"
        ],
        benefits: [
            "Life-sustaining treatment",
            "Experienced technicians",
            "Comfortable environment",
            "Dietary counseling"
        ]
    },
    {
        id: "t-18",
        slug: "chemotherapy",
        parentServiceSlug: "oncology",
        title: "Chemotherapy Day Care",
        shortDescription: "Comprehensive medical oncology services.",
        fullDescription: "We provide chemotherapy administration in a comfortable day-care setting, managed by experienced oncologists and specially trained nursing staff.",
        features: [
            "Chemo-port handling",
            "Targeted Therapy",
            "Immunotherapy",
            "Palliative care integration"
        ],
        benefits: [
            "Personalized protocols",
            "Side-effect management",
            "Psychological support",
            "Nutrition guidance"
        ]
    },
    {
        id: "t-19",
        slug: "c-section",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Caesarean Section (C-Section)",
        shortDescription: "Safe surgical delivery for mother and baby.",
        fullDescription: "While we encourage normal delivery, our team is ready 24/7 for emergency or elective C-sections to ensure the safety of both mother and child in high-risk situations.",
        features: [
            "Epidural / Spinal Anesthesia",
            "Pediatrician at birth",
            "Cosmetic skin closure",
            "Partner allowed (in some cases)"
        ],
        benefits: [
            "Life-saving intervention",
            "Controlled environment",
            "Pain management",
            "Planned timing (for elective)"
        ]
    }
];

export const getTreatmentBySlug = (slug: string) => {
    return TREATMENT_DATA.find(t => t.slug === slug);
};

export const getAllTreatments = () => {
    return TREATMENT_DATA;
};

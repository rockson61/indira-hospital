
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
,
    // Auto-generated from navigation route gap analysis
    {
        id: "t-100",
        slug: "laser-piles-treatment-cost",
        parentServiceSlug: "general-surgery",
        title: "Laser Piles Treatment",
        shortDescription: "Advanced laser piles treatment at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for laser piles treatment, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-101",
        slug: "fistula-surgery-treatment",
        parentServiceSlug: "general-surgery",
        title: "Fistula Surgery",
        shortDescription: "Advanced fistula surgery at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for fistula surgery, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-102",
        slug: "laparoscopic-hernia-repair",
        parentServiceSlug: "general-surgery",
        title: "Hernia Repair",
        shortDescription: "Advanced hernia repair at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for hernia repair, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-103",
        slug: "gallbladder-removal-recovery",
        parentServiceSlug: "general-surgery",
        title: "Gallbladder Removal",
        shortDescription: "Advanced gallbladder removal at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for gallbladder removal, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-104",
        slug: "appendix-surgery-steps",
        parentServiceSlug: "general-surgery",
        title: "Appendix Surgery",
        shortDescription: "Advanced appendix surgery at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for appendix surgery, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-105",
        slug: "laparoscopic-hysterectomy-guide",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Laparoscopic Hysterectomy",
        shortDescription: "Advanced laparoscopic hysterectomy at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for laparoscopic hysterectomy, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-106",
        slug: "pcod-pcos-treatment-guide",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "PCOD / PCOS Treatment",
        shortDescription: "Advanced pcod / pcos treatment at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for pcod / pcos treatment, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-107",
        slug: "endometriosis-treatment",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Endometriosis",
        shortDescription: "Advanced endometriosis at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for endometriosis, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-108",
        slug: "high-risk-pregnancy-care",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "High-Risk Pregnancy",
        shortDescription: "Advanced high-risk pregnancy at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for high-risk pregnancy, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-109",
        slug: "painless-delivery-epidural",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Painless Delivery",
        shortDescription: "Advanced painless delivery at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for painless delivery, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-110",
        slug: "normal-delivery-vs-c-section",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "C-Section vs Normal",
        shortDescription: "Advanced c-section vs normal at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for c-section vs normal, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-111",
        slug: "cervical-cancer-screening",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Cervical Cancer Screening",
        shortDescription: "Advanced cervical cancer screening at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for cervical cancer screening, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-112",
        slug: "kidney-stone-laser-surgery",
        parentServiceSlug: "urology",
        title: "Kidney Stone Laser",
        shortDescription: "Advanced kidney stone laser at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for kidney stone laser, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-113",
        slug: "prostate-turp-surgery",
        parentServiceSlug: "urology",
        title: "Prostate TURP",
        shortDescription: "Advanced prostate turp at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for prostate turp, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-114",
        slug: "enlarged-prostate-bph-treatment",
        parentServiceSlug: "urology",
        title: "Enlarged Prostate (BPH)",
        shortDescription: "Advanced enlarged prostate (bph) at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for enlarged prostate (bph), ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-115",
        slug: "bladder-cancer-diagnosis-treatment",
        parentServiceSlug: "urology",
        title: "Bladder Cancer",
        shortDescription: "Advanced bladder cancer at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for bladder cancer, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-116",
        slug: "uti-treatment-guide",
        parentServiceSlug: "urology",
        title: "UTI Treatment",
        shortDescription: "Advanced uti treatment at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for uti treatment, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-117",
        slug: "varicose-veins-laser-treatment",
        parentServiceSlug: "general-surgery",
        title: "Varicose Veins Laser",
        shortDescription: "Advanced varicose veins laser at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for varicose veins laser, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-118",
        slug: "av-fistula-surgery",
        parentServiceSlug: "nephrology",
        title: "AV Fistula Surgery",
        shortDescription: "Advanced av fistula surgery at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for av fistula surgery, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-119",
        slug: "total-knee-replacement-cost",
        parentServiceSlug: "orthopaedics",
        title: "Knee Replacement",
        shortDescription: "Advanced knee replacement at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for knee replacement, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-120",
        slug: "hip-replacement-surgery-guide",
        parentServiceSlug: "orthopaedics",
        title: "Hip Replacement",
        shortDescription: "Advanced hip replacement at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for hip replacement, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-121",
        slug: "arthroscopy-joint-surgery",
        parentServiceSlug: "orthopaedics",
        title: "Arthroscopy",
        shortDescription: "Advanced arthroscopy at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for arthroscopy, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-122",
        slug: "acl-reconstruction-recovery",
        parentServiceSlug: "orthopaedics",
        title: "ACL Reconstruction",
        shortDescription: "Advanced acl reconstruction at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for acl reconstruction, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-123",
        slug: "spine-surgery-disc-prolapse",
        parentServiceSlug: "orthopaedics",
        title: "Spine Surgery",
        shortDescription: "Advanced spine surgery at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for spine surgery, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-124",
        slug: "fracture-care-rehabilitation",
        parentServiceSlug: "orthopaedics",
        title: "Fracture Care",
        shortDescription: "Advanced fracture care at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for fracture care, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-125",
        slug: "infertility-evaluation-steps",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Infertility Evaluation",
        shortDescription: "Advanced infertility evaluation at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for infertility evaluation, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-126",
        slug: "male-infertility-causes",
        parentServiceSlug: "urology",
        title: "Male Infertility",
        shortDescription: "Advanced male infertility at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for male infertility, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-127",
        slug: "coronary-angiography-guide",
        parentServiceSlug: "cardiology",
        title: "Coronary Angiography",
        shortDescription: "Advanced coronary angiography at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for coronary angiography, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-128",
        slug: "heart-angioplasty-procedure",
        parentServiceSlug: "cardiology",
        title: "Heart Angioplasty",
        shortDescription: "Advanced heart angioplasty at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for heart angioplasty, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-129",
        slug: "pacemaker-implantation-steps",
        parentServiceSlug: "cardiology",
        title: "Pacemaker Implantation",
        shortDescription: "Advanced pacemaker implantation at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for pacemaker implantation, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-130",
        slug: "heart-valve-replacement-surgery",
        parentServiceSlug: "cardiology",
        title: "Heart Valve Replacement",
        shortDescription: "Advanced heart valve replacement at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for heart valve replacement, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-131",
        slug: "cardiac-surgery-bypass",
        parentServiceSlug: "cardiology",
        title: "Cardiac Bypass",
        shortDescription: "Advanced cardiac bypass at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for cardiac bypass, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-132",
        slug: "dementia-alzheimers-care",
        parentServiceSlug: "neurology",
        title: "Dementia & Alzheimer's",
        shortDescription: "Advanced dementia & alzheimer's at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for dementia & alzheimer's, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-133",
        slug: "stroke-recovery-exercises",
        parentServiceSlug: "neurology",
        title: "Stroke Recovery",
        shortDescription: "Advanced stroke recovery at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for stroke recovery, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-134",
        slug: "epilepsy-treatment-options",
        parentServiceSlug: "neurology",
        title: "Epilepsy Treatment",
        shortDescription: "Advanced epilepsy treatment at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for epilepsy treatment, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-135",
        slug: "migraine-relief-management",
        parentServiceSlug: "neurology",
        title: "Migraine Relief",
        shortDescription: "Advanced migraine relief at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for migraine relief, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-136",
        slug: "parkinsons-disease-care",
        parentServiceSlug: "neurology",
        title: "Parkinson's Disease",
        shortDescription: "Advanced parkinson's disease at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for parkinson's disease, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-137",
        slug: "endoscopy-procedure-guide",
        parentServiceSlug: "gastroenterology",
        title: "Endoscopy Guide",
        shortDescription: "Advanced endoscopy guide at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for endoscopy guide, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-138",
        slug: "colonoscopy-screening-cost",
        parentServiceSlug: "gastroenterology",
        title: "Colonoscopy",
        shortDescription: "Advanced colonoscopy at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for colonoscopy, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-139",
        slug: "ercp-bile-duct-stone-removal",
        parentServiceSlug: "gastroenterology",
        title: "ERCP Bile Duct",
        shortDescription: "Advanced ercp bile duct at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for ercp bile duct, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-140",
        slug: "liver-cirrhosis-treatment",
        parentServiceSlug: "gastroenterology",
        title: "Liver Cirrhosis",
        shortDescription: "Advanced liver cirrhosis at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for liver cirrhosis, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-141",
        slug: "fatty-liver-treatment-diet",
        parentServiceSlug: "gastroenterology",
        title: "Fatty Liver",
        shortDescription: "Advanced fatty liver at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for fatty liver, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-142",
        slug: "ibs-treatment-guide",
        parentServiceSlug: "gastroenterology",
        title: "IBS Treatment",
        shortDescription: "Advanced ibs treatment at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for ibs treatment, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-143",
        slug: "acid-reflux-gerd-management",
        parentServiceSlug: "gastroenterology",
        title: "Acid Reflux / GERD",
        shortDescription: "Advanced acid reflux / gerd at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for acid reflux / gerd, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-144",
        slug: "dialysis-procedure-guide",
        parentServiceSlug: "nephrology",
        title: "Dialysis Guide",
        shortDescription: "Advanced dialysis guide at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for dialysis guide, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-145",
        slug: "kidney-transplant-guide",
        parentServiceSlug: "nephrology",
        title: "Kidney Transplant",
        shortDescription: "Advanced kidney transplant at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for kidney transplant, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-146",
        slug: "diabetic-kidney-disease-ckd",
        parentServiceSlug: "nephrology",
        title: "Diabetic Kidney Disease",
        shortDescription: "Advanced diabetic kidney disease at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for diabetic kidney disease, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-147",
        slug: "chronic-kidney-disease-stages",
        parentServiceSlug: "nephrology",
        title: "CKD Stages",
        shortDescription: "Advanced ckd stages at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for ckd stages, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-148",
        slug: "chemotherapy-side-effects",
        parentServiceSlug: "oncology",
        title: "Chemotherapy",
        shortDescription: "Advanced chemotherapy at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for chemotherapy, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-149",
        slug: "radiation-therapy-overview",
        parentServiceSlug: "oncology",
        title: "Radiation Therapy",
        shortDescription: "Advanced radiation therapy at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for radiation therapy, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-150",
        slug: "surgical-oncology-overview",
        parentServiceSlug: "oncology",
        title: "Surgical Oncology",
        shortDescription: "Advanced surgical oncology at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for surgical oncology, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-151",
        slug: "breast-cancer-screening-guide",
        parentServiceSlug: "oncology",
        title: "Breast Cancer Screening",
        shortDescription: "Advanced breast cancer screening at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for breast cancer screening, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    },
    {
        id: "t-152",
        slug: "palliative-care-services",
        parentServiceSlug: "oncology",
        title: "Palliative Care",
        shortDescription: "Advanced palliative care at Indira Hospital with experienced specialists.",
        fullDescription: "We provide comprehensive care and expert treatment for palliative care, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.",
        features: ["Expert Specialists","Advanced Technology","Comprehensive Care","Fast Recovery"],
        benefits: ["Improved Quality of Life","Personalized Treatment Plan","Minimal Discomfort","Safe & Effective"]
    }
];

export const getTreatmentBySlug = (slug: string) => {
    return TREATMENT_DATA.find(t => t.slug === slug);
};

export const getAllTreatments = () => {
    return TREATMENT_DATA;
};

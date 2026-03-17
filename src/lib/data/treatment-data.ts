
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
        title: "Advanced Total Knee Replacement (TKR)",
        shortDescription: "Pain-free mobility with high-precision joint replacement and rapid recovery.",
        fullDescription: "Regain your mobility with the most advanced **Total Knee Replacement** surgery in Vellore. At Indira Hospital, we utilize high-precision computer navigation and minimally invasive 'Sub-vastus' approaches that preserve muscle integrity. This ensures accurate implant alignment, reduced post-operative pain, and a significantly longer lifespan for your new joint, allowing you to return to an active, pain-free lifestyle.",
        features: [
            "Computer Navigated Surgery for Perfect Alignment",
            "Minimally Invasive Sub-vastus (Muscle-Sparing) Approach",
            "High-Flexion Long-Life Implant Systems",
            "Dedicated Pain-Free Rapid Recovery Protocol"
        ],
        benefits: [
            "Walk within 24 Hours of Surgery",
            "Long-Lasting Results (up to 20-25 Years)",
            "Significantly Reduced Post-Operative Pain",
            "Quick Return to Stair Climbing and Daily Activities"
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
        parentServiceSlug: "general-surgery",
        title: "Laparoscopic Gallbladder Surgery",
        shortDescription: "Safe, minimally invasive keyhole surgery for gallstones with one-day recovery.",
        fullDescription: "Laparoscopic Cholecystectomy (Gallbladder Removal) is our specialty. Using high-definition laparoscopy, our senior surgeons remove the gallbladder through tiny keyhole incisions. This gold-standard approach ensures minimal blood loss, minimal scarring, and allows most patients to return home within 24 hours.",
        features: [
            "Advanced HD Laparoscopic Imaging",
            "Precision Keyhole Incisions",
            "Harmonic Scalpel for Bloodless Dissection",
            "Day-Care Surgery Option Available"
        ],
        benefits: [
            "Virtually Scar-Free Outcome",
            "Rapid Return to Regular Diet",
            "Minimal Post-Operative Discomfort",
            "Avoidance of Gallbladder Complications"
        ]
    },
    {
        id: "t-13",
        slug: "root-canal-treatment",
        parentServiceSlug: "dentistry",
        title: "Single-Sitting Laser Root Canal",
        shortDescription: "Painless, expert root canal therapy to save your natural teeth.",
        fullDescription: "Experience a stress-free, painless **Root Canal Treatment** (RCT) at Indira Hospital. We use advanced rotary endodontics and diode lasers to thoroughly disinfect and seal the tooth canal in a single visit. Our precision approach saves your natural tooth while eliminating infection and severe pain, preserving your smile effectively.",
        features: [
            "Single-Sitting Completion for Most Cases",
            "Advanced Laser Disinfection of Canals",
            "High-Precision Rotary Endodontics",
            "Digital Apex Locators for Accuracy"
        ],
        benefits: [
            "Permanent Relief from Toothache",
            "Preserves Your Original Natural Tooth",
            "Prevents Bone Loss and Abscess Spread",
            "Perfect Foundation for Zirconia Crowns"
        ]
    },
    {
        id: "t-14",
        slug: "dental-implants",
        parentServiceSlug: "dentistry",
        title: "Advanced Dental Implants",
        shortDescription: "Permanent, natural-looking solution for missing teeth with world-class implants.",
        fullDescription: "Restore your smile and confidence with permanent **Dental Implants**. Using 3D-guided surgery and premium titanium or zirconia implants, we provide a replacement that looks, feels, and functions exactly like your natural teeth. Whether it is a single tooth or full-mouth rehabilitation, our dental specialists ensure a lifetime of comfort and durability.",
        features: [
            "USFDA Approved Titanium & Zirconia Implants",
            "3D Guided Implant Placement Planning",
            "Immediate Loading Implants for Quick Smile",
            "Bone Grafting and Sinus Lift Facilities"
        ],
        benefits: [
            "Restores Natural Chewing Efficiency",
            "Prevents Facial Bone Resorption",
            "Looks and Feels Completely Natural",
            "Lifetime Solution with Proper Care"
        ]
    },
    {
        id: "t-14-1",
        slug: "cataract-surgery-phaco",
        parentServiceSlug: "ophthalmology",
        title: "Micro-Incision Cataract Surgery (Phaco)",
        shortDescription: "Stitch-less, painless cataract removal with premium IOL implantation.",
        fullDescription: "Experience crystal clear vision with our advanced **Phacoemulsification** (Cataract Surgery). Using micro-incision techniques and premium high-definition intraocular lenses (IOLs), we restore your sight in a painless, stitch-less 15-minute procedure. Most patients experience immediate improvement in vision and can return to normal activities the very next day.",
        features: [
            "Advanced Phacoemulsification Technology",
            "Premium Foldable & Trifocal IOL Options",
            "Topical (Drop-based) No-Injection Anesthesia",
            "Zero Stitch, Zero Bandage Procedure"
        ],
        benefits: [
            "Immediate Restoration of Vision Clarity",
            "Rapid Recovery and No Hospital Stay",
            "Minimal Post-Operative Restrictions",
            "Enhanced Contrast and Vibrant Colors"
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
        shortDescription: "Painless laser surgery for piles with same-day discharge.",
        fullDescription: "Experience the most advanced **Laser Piles Treatment** in Vellore. We use precision diode lasers to treat hemorrhoids without cuts or stitches, resulting in a practically bloodless procedure. This modern approach ensures rapid healing compared to traditional open surgery.",
        features: ["No Cuts or Stitches", "USFDA Approved Laser Tech", "30-Minute Procedure", "Same-Day Discharge"],
        benefits: ["Virtually Painless Recovery", "Minimal to No Bleeding", "Get Back to Work in 48 Hours", "Very Low Recurrence Rate"]
    },
    {
        id: "t-101",
        slug: "fistula-surgery-treatment",
        parentServiceSlug: "general-surgery",
        title: "Fistula Surgery",
        shortDescription: "Advanced laser and VAAFT procedures for complex fistulas.",
        fullDescription: "Our specialized proctologists offer comprehensive **Fistula Surgery Treatment**, including cutting-edge FiLaC (Fistula-tract Laser Closure) and VAAFT techniques. This ensures thorough cleaning and closure of the fistula tract while perfectly preserving sphincter muscle function.",
        features: ["Anal Sphincter Preservation", "FiLaC Laser Technology", "VAAFT Video Assisted Tech", "High Success Rate"],
        benefits: ["Minimizes Risk of Incontinence", "Faster Wound Healing", "Shorter Hospital Stay", "Less Post-operative Pain"]
    },
    {
        id: "t-102",
        slug: "laparoscopic-hernia-repair",
        parentServiceSlug: "general-surgery",
        title: "Hernia Repair",
        shortDescription: "Minimally invasive 3D mesh repair for all hernia types.",
        fullDescription: "We perform globally accepted **Laparoscopic Hernia Repair** for inguinal, umbilical, and incisional hernias. Utilizing advanced 3D anatomical meshes and keyhole techniques, we deliver strong abdominal wall reinforcement with minimal trauma.",
        features: ["TEP and TAPP Techniques", "Imported 3D Anatomical Mesh", "Keyhole Incisions", "Minimal Tissue Trauma"],
        benefits: ["Excellent Abdominal Wall Strength", "Less Post-Op Pain", "Cosmetically Superior Results", "Quick Return to Normal Activity"]
    },
    {
        id: "t-103",
        slug: "gallbladder-removal-recovery",
        parentServiceSlug: "general-surgery",
        title: "Gallbladder Removal",
        shortDescription: "Safe laparoscopic cholecystectomy for gallstone relief.",
        fullDescription: "Persistent pain from gallstones? Our **Laparoscopic Gallbladder Removal** (Cholecystectomy) is the gold standard solution. Using high-definition cameras and precision instruments, our surgeons safely extract the diseased gallbladder through tiny punctures.",
        features: ["HD Laparoscopic Imaging", "Tiny Keyhole Punctures", "Done by Senior Surgeons", "Day-Care Surgery Option"],
        benefits: ["Immediate Relief from Gallstone Pain", "No Need for Restricted Diets Post-Healing", "Minimal Scarring", "Discharge in 24-48 Hours"]
    },
    {
        id: "t-104",
        slug: "appendix-surgery-steps",
        parentServiceSlug: "general-surgery",
        title: "Appendix Surgery",
        shortDescription: "Emergency laparoscopic appendectomy available 24/7.",
        fullDescription: "Appendicitis requires urgent attention to prevent rupture. We offer emergency **Laparoscopic Appendix Surgery** 24 hours a day. The minimally invasive approach ensures successful removal of the inflamed appendix while greatly reducing the risk of wound infections.",
        features: ["24/7 Emergency Surgery Unit", "Laparoscopic (Keyhole) Approach", "Advanced Infection Control", "Rapid Diagnostic Imaging"],
        benefits: ["Prevents Life-Threatening Ruptures", "Very Low Risk of Infection", "Almost Invisible Scars", "Fast Recovery Time"]
    },
    {
        id: "t-105",
        slug: "laparoscopic-hysterectomy-guide",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Laparoscopic Hysterectomy",
        shortDescription: "Minimally invasive uterus removal by expert gynecologists with rapid recovery.",
        fullDescription: "When surgical removal of the uterus is medically required, our **Laparoscopic Hysterectomy** (Total Laparoscopic Hysterectomy or TLH) offers a modern alternative to traditional open surgery. Using high-definition cameras and specialized instruments, the uterus is removed through tiny abdominal incisions. This approach treats fibroids, abnormal bleeding, and endometriosis with unparalleled precision while ensuring minimal scarring and a much faster return to daily activities.",
        features: ["Total Laparoscopic Approach (TLH)", "Vaginal Hysterectomy Options", "Specialized Gynae-Surgeons", "Minimal Blood Loss"],
        benefits: ["No Large Abdominal Incisions", "Shorter Hospitalization (1-2 days)", "Rapid Return to Daily Life", "Reduced Post-Surgical Adhesions"]
    },
    {
        id: "t-106",
        slug: "pcod-pcos-treatment-guide",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "PCOD / PCOS Treatment",
        shortDescription: "Holistic management and treatment for PCOS and hormonal imbalances.",
        fullDescription: "Polycystic Ovarian Syndrome (PCOS) needs a multidisciplinary approach. Our **PCOD / PCOS Treatment** strategy integrates advanced endocrinology, customized dietary counseling, and targeted medications to regulate your cycles and improve fertility chances.",
        features: ["Hormonal Profiling & Ultrasound", "Personalized Diet & Lifestyle Plans", "Fertility Preservation Focus", "Dermatological Support (if needed)"],
        benefits: ["Restores Menstrual Regularity", "Effectively Manages Weight", "Improves Conception Chances", "Reduces Acne and Hair Fall"]
    },
    {
        id: "t-107",
        slug: "endometriosis-treatment",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Endometriosis",
        shortDescription: "Specialized care and surgical solutions for endometriosis pain.",
        fullDescription: "Endometriosis can cause debilitating pelvic pain. We offer complete **Endometriosis Treatment**, ranging from hormonal therapies to highly intricate laparoscopic excision surgeries to remove the endometrial tissue while preserving your reproductive organs.",
        features: ["Advanced Pelvic MRI Diagnostics", "Medical Therapy Management", "Laparoscopic Excision Procedure", "Pain Management Protocols"],
        benefits: ["Significant Relief from Chronic Pelvic Pain", "Preserves and Enhances Fertility", "Prevents Disease Progression", "Compassionate Care"]
    },
    {
        id: "t-108",
        slug: "high-risk-pregnancy-care",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "High-Risk Pregnancy",
        shortDescription: "Expert maternal-fetal monitoring for complex pregnancies.",
        fullDescription: "For mothers facing complications like gestational diabetes, hypertension, or multiple pregnancies, our **High-Risk Pregnancy Care** unit provides vigilant monitoring. Backed by a Level 3 NICU, we ensure the absolute safety of both mother and baby.",
        features: ["Maternal-Fetal Medicine Experts", "Advanced TIFFA / Anomaly Scans", "Continuous Fetal Monitoring", "Intensive Care Backup (Level 3 NICU)"],
        benefits: ["Safely Manages Medical Conditions", "Prevents Premature Birth Complications", "Empathetic Emotional Support", "Highest Standard of Emergency Readiness"]
    },
    {
        id: "t-109",
        slug: "painless-delivery-epidural",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Painless Delivery",
        shortDescription: "Comfortable birthing experiences using safe epidural anesthesia.",
        fullDescription: "We believe delivery should be a joyful experience, not a painful one. Our **Painless Delivery (Epidural)** program uses safe, specialized anesthesia during labor to numb the pain while keeping you completely awake and capable of participating in childbirth.",
        features: ["24/7 Expert Anesthesiologists", "Continuous Maternal Monitoring", "Luxury LDR (Labor, Delivery, Recovery) Suites", "Dedicated Midwifery Support"],
        benefits: ["Greatly Reduces Labor Exhaustion", "Makes Childbirth a Beautiful Experience", "Safe for the Baby", "Allows You to Actively Push"]
    },
    {
        id: "t-110",
        slug: "normal-delivery-vs-c-section",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "C-Section vs Normal",
        shortDescription: "Evidence-based counseling and execution for safe birthing modes.",
        fullDescription: "We strongly advocate for normal (vaginal) deliveries whenever medically feasible. However, when circumstances demand it, our team is equipped to perform safe, swift **Caesarean Sections (C-Sections)** to guarantee the safety of the newborn and mother.",
        features: ["Trial of Labor After Caesarean (TOLAC) Option", "Emergency C-Section Readiness", "Continuous Fetal Heart Rate Monitoring", "Cosmetic Suture Techniques"],
        benefits: ["Prioritizes Baby & Mother Safety", "Transparent, Patient-First Counseling", "Exceptional Post-Delivery Care", "Minimal Scarring for C-Sections"]
    },
    {
        id: "t-111",
        slug: "cervical-cancer-screening",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Cervical Cancer Screening",
        shortDescription: "Preventive Pap Smears and HPV typing for early detection.",
        fullDescription: "Early detection saves lives. Our comprehensive **Cervical Cancer Screening** program utilizes high-precision liquid-based cytology (Pap Smear) and advanced HPV DNA typing to detect abnormal cervical cells years before they can turn into cancer.",
        features: ["Liquid-Based Cytology (LBC)", "High-Risk HPV DNA Typing", "Colposcopy Guided Biopsy", "Gentle, Private Environment"],
        benefits: ["Detects Pre-Cancerous Changes", "Highly Accurate Results", "Prevents Cervical Cancer Development", "Peace of Mind"]
    },
    {
        id: "t-112",
        slug: "kidney-stone-laser-surgery",
        parentServiceSlug: "urology",
        title: "Laser Surgery for Kidney Stones (RIRS/PCNL)",
        shortDescription: "Incision-less laser treatment (RIRS) and Mini-PCNL for complete stone clearance.",
        fullDescription: "Say goodbye to the pain of kidney stones with our advanced **Laser Lithotripsy** solutions. We specialize in RIRS (Retrograde Intrarenal Surgery) and Mini-PCNL, using high-power Holmium lasers to dust stones into fine particles without major incisions. These precise procedures ensure maximum stone clearance with minimal risk and rapid recovery.",
        features: [
            "Flexible RIRS (No Cuts/No Scars approach)",
            "Holmium Laser Stone Dusting Technology",
            "Mini-PCNL for Larger Kidney Stones",
            "State-of-the-Art Urodynamic Evaluation"
        ],
        benefits: [
            "Complete Clearance of Complex Stones",
            "Rapid Recovery and Same-Day Discharge",
            "Minimal Post-Operative Pain and Bleeding",
            "Prevention of Recurrent Stone Formation"
        ]
    },
    {
        id: "t-113",
        slug: "prostate-turp-surgery",
        parentServiceSlug: "urology",
        title: "Prostate TURP",
        shortDescription: "Gold-standard surgical relief for severe prostate enlargement.",
        fullDescription: "Transurethral Resection of the Prostate (**TURP**) remains the gold standard for treating benign prostatic hyperplasia (BPH). Our expert urologists perform this minimally invasive endoscopic procedure to remove excess prostate tissue, restoring strong and normal urine flow.",
        features: ["Bipolar TURP Technology", "Endoscopic (No Incision) Approach", "Experienced Uro-surgeons", "High-Definition Visualization"],
        benefits: ["Permanent Relief from Urinary Blockage", "Stops Frequent Nighttime Urination", "Reduces Risk of Bladder Damage", "Short Hospitalization"]
    },
    {
        id: "t-114",
        slug: "enlarged-prostate-bph-treatment",
        parentServiceSlug: "urology",
        title: "Enlarged Prostate (BPH)",
        shortDescription: "Comprehensive medical and laser management for BPH.",
        fullDescription: "Struggling with weak urine flow or frequent bathroom trips? We offer complete **Enlarged Prostate (BPH) Treatment**. Based on your prostate size, we provide customized plans ranging from Alpha-blocker medications to advanced Holmium Laser Enucleation (HoLEP).",
        features: ["Advanced Uroflowmetry Testing", "HoLEP (Holmium Laser) Surgery", "Medical Therapy Management", "Prostate Cancer Screening (PSA)"],
        benefits: ["Customized to Prostate Volume", "Improves Sleep Quality", "Prevents Urinary Retention", "Preserves Sexual Function"]
    },
    {
        id: "t-115",
        slug: "bladder-cancer-diagnosis-treatment",
        parentServiceSlug: "urology",
        title: "Bladder Cancer",
        shortDescription: "Expert diagnosis and surgical oncology for bladder cancer.",
        fullDescription: "Blood in your urine? Don't ignore it. Our Uro-Oncology department provides comprehensive **Bladder Cancer Diagnosis & Treatment**. From advanced Blue Light Cystoscopy for early detection to Radical Cystectomy with neobladder creation, we offer life-saving, state-of-the-art care.",
        features: ["Blue Light Cystoscopy", "Transurethral Resection of Bladder Tumor (TURBT)", "Intravesical BCG Therapy", "Radical Cystectomy (Open/Robotic)"],
        benefits: ["Early Detection Saves Lives", "Preserves Normal Bladder Function When Possible", "Multidisciplinary Cancer Board approach", "Comprehensive Post-Op Rehab"]
    },
    {
        id: "t-116",
        slug: "uti-treatment-guide",
        parentServiceSlug: "urology",
        title: "UTI Treatment",
        shortDescription: "Rapid diagnostics and targeted therapy for Urinary Tract Infections.",
        fullDescription: "Urinary Tract Infections (UTIs) require prompt and correct treatment to prevent kidney damage. We offer expert **UTI Treatment** encompassing rapid urine cultures, targeted antibiotic therapy, and investigation of underlying causes (like strictures or stones) to prevent painful recurrences.",
        features: ["Rapid Urine Culture Analysis", "Uroflowmetry Assessments", "Targeted Antimicrobial Therapy", "Preventative Care Counseling"],
        benefits: ["Immediate Relief from Burning and Pain", "Prevents Chronic Kidney Infections", "Reduces Risk of Recurrent UTIs", "Safe for Pregnancy (if applicable)"]
    },
    {
        id: "t-117",
        slug: "varicose-veins-laser-treatment",
        parentServiceSlug: "general-surgery",
        title: "Varicose Veins Laser",
        shortDescription: "Painless Endovenous Laser Ablation (EVLA) for swollen veins.",
        fullDescription: "Suffering from painful, bulging veins in your legs? Our **Varicose Veins Laser Treatment** (EVLA) provides a permanent solution. This minimally invasive day-care procedure uses precision laser energy to seal off the diseased veins, rerouting blood to healthier ones instantly.",
        features: ["Endovenous Laser Ablation (EVLA)", "Sclerotherapy for Spider Veins", "Color Doppler Guided Mapping", "Zero Cuts or Stitches"],
        benefits: ["Alleviates Heavy Legs and Aching", "Excellent Cosmetic Results", "Walk Home the Same Day", "Low Risk of Recurrence"]
    },
    {
        id: "t-118",
        slug: "av-fistula-surgery",
        parentServiceSlug: "nephrology",
        title: "AV Fistula Surgery",
        shortDescription: "Expert vascular access creation for long-term dialysis.",
        fullDescription: "A well-functioning vascular access is the lifeline for dialysis patients. Our skilled vascular surgeons perform precise **AV Fistula Surgery**, creating a robust connection between an artery and a vein to ensure safe, effective, and continuous hemodialysis treatments.",
        features: ["Pre-operative Duplex Ultrasound Mapping", "Radiocephalic & Brachiocephalic Techniques", "Dedicated Vascular Surgical Team", "Fistula Salvage Procedures"],
        benefits: ["Ensures Reliable Dialysis Access", "Lower Risk of Clots compared to Catheters", "Significantly Reduced Infection Risk", "Longer Lifespan of the Access Point"]
    },
    {
        id: "t-119",
        slug: "total-knee-replacement-cost",
        parentServiceSlug: "orthopaedics",
        title: "Knee Replacement",
        shortDescription: "Advanced computer-navigated Total Knee Replacement (TKR).",
        fullDescription: "Regain your mobility and live pain-free. Our Center for Excellence executes **Total Knee Replacements** using zero-error computer navigation and high-flex imported implants. Our rapid rehabilitation protocol gets you walking on the very same day.",
        features: ["Computer-Navigated Surgical Precision", "USFDA Approved High-Flex Implants", "Minimally Invasive Sub-vastus Approach", "Dedicated Joint Replacement ICU"],
        benefits: ["Zero-Error Implant Alignment", "Bend Your Knee Freely", "Walk Within 24 Hours", "Implants Built to Last 20+ Years"]
    },
    {
        id: "t-120",
        slug: "hip-replacement-surgery-guide",
        parentServiceSlug: "orthopaedics",
        title: "Hip Replacement",
        shortDescription: "Minimally invasive Total Hip Replacement for severe arthritis.",
        fullDescription: "Is hip pain limiting your lifestyle? Regain freedom of movement with our **Total Hip Replacement Surgery**. We use advanced, muscle-sparing techniques and highly durable Ceramic-on-Ceramic implants to restore your hip joint function completely, ensuring a fast and smooth recovery.",
        features: ["Ceramic-on-Ceramic Implants", "Minimally Invasive Anterior/Posterior Approaches", "Dual Mobility Cup Options", "Customized Pain Management"],
        benefits: ["Immediate Relief from Chronic Hip Pain", "Restores Full Range of Motion", "Return to Pain-Free Walking", "Implants Last Up to 25 Years"]
    },
    {
        id: "t-121",
        slug: "arthroscopy-joint-surgery",
        parentServiceSlug: "orthopaedics",
        title: "Arthroscopy",
        shortDescription: "Keyhole joint surgery for sports injuries and cartilage tears.",
        fullDescription: "Get back to the sport you love faster. **Arthroscopy** is a minimally invasive \"keyhole\" procedure used to diagnose and treat joint problems, especially in the knee and shoulder. Using a tiny HD camera, our sports medicine experts repair ligaments and cartilage without large surgical cuts.",
        features: ["HD Fiber-Optic Camera Visualization", "Radiofrequency Ablation Tech", "Day-Care Surgery Option", "Advanced Sports Rehab Center"],
        benefits: ["Extremely Small Incisions", "Less Post-Operative Swelling", "Rapid Return to Athletics", "Accurate Diagnosis and Repair"]
    },
    {
        id: "t-122",
        slug: "acl-reconstruction-recovery",
        parentServiceSlug: "orthopaedics",
        title: "ACL Reconstruction",
        shortDescription: "Expert arthroscopic ACL ligament repair and rehabilitation.",
        fullDescription: "A torn ACL shouldn't end your active life. Our **Arthroscopic ACL Reconstruction** utilizes a graft to replace the torn ligament in your knee. Delivered by elite sports medicine surgeons, this procedure restores the knee's stability so you can pivot and jump with confidence again.",
        features: ["All-Inside ACL Reconstruction Technique", "Autograft / Allograft Options", "Anatomic Graft Placement", "Phased Physiotherapy Program"],
        benefits: ["Restores Complete Knee Stability", "Prevents Secondary Cartilage Damage", "Minimizes Joint Pain", "High Success Rate in Athletes"]
    },
    {
        id: "t-123",
        slug: "spine-surgery-disc-prolapse",
        parentServiceSlug: "orthopaedics",
        title: "Spine Surgery",
        shortDescription: "Microscopic and minimally invasive solutions for back pain.",
        fullDescription: "Living with chronic back pain or sciatica? Our Spine Center offers advanced **Spine Surgery** for conditions like slipped discs (Disc Prolapse), spinal stenosis, and spondylolisthesis. With microscopic precision, we decompress nerves safely to give you your life back.",
        features: ["Micro-Endoscopic Discectomy (MED)", "Spinal Fusion with Pedicle Screws", "C-Arm Image Guidance", "Dedicated Neuro-monitoring"],
        benefits: ["Alleviates Radiating Leg Pain (Sciatica)", "Improves Walking Distance", "Minimal Muscle Disruption", "Faster Recovery than Open Spine Surgery"]
    },
    {
        id: "t-124",
        slug: "fracture-care-rehabilitation",
        parentServiceSlug: "orthopaedics",
        title: "Fracture Care",
        shortDescription: "24/7 expert trauma care for complex fractures and crush injuries.",
        fullDescription: "Accidents happen, but our trauma team is always ready. We provide immediate, comprehensive **Fracture Care & Rehabilitation** for everything from simple cast treatments to complex, multi-fragment intra-articular fractures requiring advanced titanium plating and interlocking nails.",
        features: ["24/7 Poly-Trauma Readiness", "Minimally Invasive Plate Osteosynthesis (MIPO)", "Titanium Locking Plates", "In-house Physical Therapy"],
        benefits: ["Restores Perfect Bone Alignment", "Immediate Pain Stabilization", "Prevents Improper Healing (Malunion)", "Accelerates Safe Weight-Bearing"]
    },
    {
        id: "t-125",
        slug: "infertility-evaluation-steps",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "Infertility Evaluation",
        shortDescription: "Comprehensive diagnostic testing for couples struggling to conceive.",
        fullDescription: "Struggling to start a family? Our **Infertility Evaluation** program provides a compassionate, root-cause approach. We conduct comprehensive hormonal, structural, and genetic assessments for women to pinpoint exactly what is preventing conception and design a tailored fertility plan.",
        features: ["Transvaginal Ultrasound (Follicular Tracking)", "Hysterosalpingography (HSG) for Tubal Patency", "Complete Ovarian Reserve Testing (AMH)", "Diagnostic Laparoscopy/Hysteroscopy"],
        benefits: ["Identifies the Exact Problem", "Personalized Conception Strategies", "High Patient Privacy", "Supportive Counseling"]
    },
    {
        id: "t-126",
        slug: "male-infertility-causes",
        parentServiceSlug: "urology",
        title: "Male Infertility",
        shortDescription: "Expert diagnosis and surgical correction for male factor infertility.",
        fullDescription: "Infertility is a shared journey. We offer highly specialized **Male Infertility Evaluation and Treatment**. From advanced semen analysis to microscopic surgeries for varicocele or sperm retrieval (TESE/PESA), our andrologists provide discrete, result-oriented care.",
        features: ["Advanced Semen Analysis & DNA Fragmentation", "Microscopic Varicocelectomy", "Surgical Sperm Retrieval (PESA/TESE)", "Hormonal Imbalance Correction"],
        benefits: ["Greatly Improves Sperm Quality", "Increases Natural Conception Odds", "Enables IVF/ICSI Success", "Strictly Confidential Care"]
    },
    {
        id: "t-127",
        slug: "coronary-angiography-guide",
        parentServiceSlug: "cardiology",
        title: "Coronary Angiography",
        shortDescription: "Gold-standard imaging to detect blockages in heart arteries.",
        fullDescription: "Chest pain or shortness of breath? A **Coronary Angiography** is the most accurate test to map blockages in your heart's blood vessels. Using our state-of-the-art Flat Panel Cath Lab, we capture high-resolution contrast images to determine if you need medication, stenting, or bypass.",
        features: ["Radial Approach (Via the Wrist)", "Advanced Flat Panel Cath Lab", "Performed by Senior Interventional Cardiologists", "Takes Only 15-20 Minutes"],
        benefits: ["Identifies Exact Blockage Location & Severity", "Discharge in Only 4 Hours", "Minimal Bleeding Risk", "Crucial for Preventing Heart Attacks"]
    },
    {
        id: "t-128",
        slug: "heart-angioplasty-procedure",
        parentServiceSlug: "cardiology",
        title: "Heart Angioplasty",
        shortDescription: "Life-saving stenting procedure for blocked coronary arteries.",
        fullDescription: "In the event of a heart attack, every second counts. Our 24/7 Primary **Heart Angioplasty** service immediately opens blocked arteries using high-quality Drug-Eluting Stents (DES). This minimally invasive procedure restores blood flow instantly, saving the heart muscle from permanent damage.",
        features: ["24/7 Emergency Primary Angioplasty", "USFDA Approved Drug-Eluting Stents", "Intravascular Ultrasound (IVUS) Guidance", "Radial Route (Wrist) Technique"],
        benefits: ["Instantly Stops Heart Attack Progress", "Saves Heart Muscle Function", "Faster Recovery than Bypass", "Short Hospital Stay"]
    },
    {
        id: "t-129",
        slug: "pacemaker-implantation-steps",
        parentServiceSlug: "cardiology",
        title: "Pacemaker Implantation",
        shortDescription: "Expert insertion of pacemakers and defibrillators for rhythm disorders.",
        fullDescription: "Does your heart beat too slowly or irregularly? We offer highly specialized **Pacemaker Implantation** services. From single and dual-chamber pacemakers to advanced Implantable Cardioverter Defibrillators (ICDs), our electophysiology team ensures your heart maintains a perfect rhythm.",
        features: ["Single & Dual Chamber Pacemakers", "CRT and ICD Devices", "Leadless Pacemaker Options", "Lifelong Device Monitoring"],
        benefits: ["Prevents Fainting and Fatigue", "Life-Saving Shock Delivery (ICDs)", "Restores Normal Energy Levels", "Minimally Invasive Local Anesthesia Procedure"]
    },
    {
        id: "t-130",
        slug: "heart-valve-replacement-surgery",
        parentServiceSlug: "cardiology",
        title: "Heart Valve Replacement",
        shortDescription: "Minimally invasive TAVR/TAVI and open-heart surgical valve repair.",
        fullDescription: "Does a faulty heart valve make you feel breathless and fatigued? Our Cardiac Surgery Center excels in **Heart Valve Replacement & Repair**. Whether you need a traditional Biological/Mechanical valve replacement or a cutting-edge, non-surgical Transcatheter Aortic Valve Replacement (TAVR), we have the expertise to get your heart pumping perfectly again.",
        features: ["Transcatheter Aortic Valve Replacement (TAVR)", "Mitral Valve Repair (MVR)", "Durable Mechanical & Tissue Valves", "Beating Heart Surgery Options"],
        benefits: ["Eliminates Severe Breathlessness", "Prevents Heart Failure", "Minimally Invasive Options Available", "Long-Term Survival Improvement"]
    },
    {
        id: "t-131",
        slug: "cardiac-surgery-bypass",
        parentServiceSlug: "cardiology",
        title: "Cardiac Bypass (CABG)",
        shortDescription: "Beating-heart bypass surgery for severe coronary artery disease.",
        fullDescription: "When multiple heart arteries are severely blocked, a **Coronary Artery Bypass Graft (CABG)** is the safest, most durable solution. Our renowned cardiothoracic surgeons perform 'Beating Heart' (Off-Pump) bypass surgeries, using your own healthy blood vessels to create new pathways for blood to reach your heart muscle, significantly reducing recovery times.",
        features: ["Off-Pump (Beating Heart) CABG", "Total Arterial Revascularization (LIMA-RIMA)", "Dedicated Cardiac ICU", "Minimally Invasive Options (MIDCAB)"],
        benefits: ["Relieves Severe Angina", "Reduces Risk of Future Heart Attacks", "Promotes Long-term Heart Function", "Safer for Diabetic Patients"]
    },
    {
        id: "t-132",
        slug: "dementia-alzheimers-care",
        parentServiceSlug: "neurology",
        title: "Dementia & Alzheimer's",
        shortDescription: "Compassionate, comprehensive care for memory loss disorders.",
        fullDescription: "Watching a loved one experience memory loss is incredibly difficult. Our multidisciplinary Neurology team provides expert **Dementia & Alzheimer's Care**. Through precise neuro-cognitive testing and MRI imaging, we diagnose the exact type of dementia, offering advanced medical therapies and behavioral management to slow progression and improve quality of life.",
        features: ["Detailed Neuro-Cognitive Assessments", "High-Resolution Brain MRI/PET", "Medication Management Protocols", "Caregiver Support & Counseling"],
        benefits: ["Slows Down Cognitive Decline", "Manages Behavioral Symptoms", "Improves Daily Patient Safety", "Provides Essential Family Guidance"]
    },
    {
        id: "t-133",
        slug: "stroke-recovery-exercises",
        parentServiceSlug: "neurology",
        title: "Stroke Recovery",
        shortDescription: "Advanced neuro-rehabilitation and physical therapy post-stroke.",
        fullDescription: "Life after a stroke requires intensive, specialized rehabilitation. Our **Stroke Recovery** center combines expert neurology with dedicated physiotherapy and speech therapy. Using evidence-based neuroplasticity techniques, we help patients regain lost motor skills, speech, and independence in a supportive environment.",
        features: ["Robotic-Assisted Gait Training", "Speech and Swallow Therapy", "Occupational Therapy for Daily Living", "Spasticity Management (Botox)"],
        benefits: ["Accelerates Brain Rewiring", "Restores Lost Muscle Mobility", "Improves Communication Skills", "Drives Independence at Home"]
    },
    {
        id: "t-134",
        slug: "epilepsy-treatment-options",
        parentServiceSlug: "neurology",
        title: "Epilepsy Treatment",
        shortDescription: "Precise seizure diagnosis and targeted management protocols.",
        fullDescription: "Seizures should not control your life. We offer comprehensive **Epilepsy Treatment** starting with continuous Video EEG monitoring to pinpoint the exact origin of seizures in the brain. We then tailor treatment plans, ranging from Anti-Epileptic Drugs (AEDs) to ketogenic diets and surgical evaluations for drug-resistant cases.",
        features: ["Long-Term Video EEG Monitoring", "High-Resolution 3T Epilepsy MRI", "Advanced Anti-Epileptic Drug Management", "Epilepsy Surgery Evaluation"],
        benefits: ["Achieves Long-Term Seizure Freedom", "Prevents Brain Injury from Falls", "Optimizes Medication to Avoid Side Effects", "Restores Driving and Work Capabilities"]
    },
    {
        id: "t-135",
        slug: "migraine-relief-management",
        parentServiceSlug: "neurology",
        title: "Migraine Relief",
        shortDescription: "Targeted therapies and lifestyle management for chronic migraines.",
        fullDescription: "Don't let debilitating headaches steal your days. Our comprehensive **Migraine Relief & Management** clinic offers highly specialized care for chronic migraines and cluster headaches. We combine advanced diagnostic imaging with modern prophylactics, acute abortive therapies, and Botox injections to significantly reduce headache frequency and severity.",
        features: ["CGRP Monoclonal Antibodies Therapy", "Botox Injections for Chronic Migraine", "Trigger Identification Counseling", "Advanced MRI to Rule Out Secondary Causes"],
        benefits: ["Drastically Reduces Headache Days", "Minimizes Reliance on Painkillers", "Restores Quality of Life and Work", "Personalized Attack Action Plans"]
    },
    {
        id: "t-136",
        slug: "parkinsons-disease-care",
        parentServiceSlug: "neurology",
        title: "Parkinson's Disease",
        shortDescription: "Expert movement disorder management and DBS evaluation.",
        fullDescription: "Regain control of your movements. Our Movement Disorders Clinic specializes in the holistic care of **Parkinson's Disease**. Our neurologists offer optimized pharmacological therapies to manage tremors, rigidity, and bradykinesia natively, alongside evaluation for advanced interventions like Deep Brain Stimulation (DBS) for qualifying patients.",
        features: ["Optimized Levodopa Therapy Protocols", "Evaluation for Deep Brain Stimulation (DBS)", "Targeted Physical & Occupational Therapy", "Botulinum Toxin for Dystonia"],
        benefits: ["Improves Motor Function & Balance", "Reduces Tremors and Rigidity", "Prolongs Independent Living", "Multidisciplinary Support System"]
    },
    {
        id: "t-137",
        slug: "endoscopy-procedure-guide",
        parentServiceSlug: "gastroenterology",
        title: "Endoscopy Guide",
        shortDescription: "Painless Upper GI diagnostic imaging for ulcers and reflux.",
        fullDescription: "Experiencing persistent heartburn, nausea, or stomach pain? An **Upper Endoscopy (UGIE)** is a painless, day-care procedure allowing our gastroenterologists to visually examine your esophagus, stomach, and duodenum. We use high-definition scopes to precisely diagnose ulcers, gastritis, H. pylori infections, and early-stage cancers.",
        features: ["High-Definition Endoscopic Imaging", "Painless Procedure under Conscious Sedation", "Instant Biopsy & Rapid Urease Testing", "Day-Care—Go Home in Hours"],
        benefits: ["Highly Accurate Diagnosis", "Identifies the Root Cause of Pain", "Detects Pre-Cancerous Changes Early", "Completely Pain-Free Experience"]
    },
    {
        id: "t-138",
        slug: "colonoscopy-screening-cost",
        parentServiceSlug: "gastroenterology",
        title: "Colonoscopy",
        shortDescription: "Life-saving screening for colon cancer and bowel diseases.",
        fullDescription: "A **Colonoscopy** is the gold standard for investigating bowel issues and preventing colorectal cancer. Our expert specialists use advanced flexible scopes to examine the entire large intestine, allowing for the immediate removal of pre-cancerous polyps during the procedure, all while you rest comfortably under light sedation.",
        features: ["Complete Lower GI Tract Visualisation", "Simultaneous Polyp Removal (Polypectomy)", "Conducted under Deep Sedation", "Detailed Photo Documentation"],
        benefits: ["Prevents Colon Cancer", "Diagnoses Causes of Bleeding or Changes in Bowel Habits", "Painless and Swift Procedure", "Clear, Actionable Diagnostic Reports"]
    },
    {
        id: "t-139",
        slug: "ercp-bile-duct-stone-removal",
        parentServiceSlug: "gastroenterology",
        title: "ERCP Bile Duct",
        shortDescription: "Advanced endoscopic removal of bile duct stones and stents.",
        fullDescription: "Jaundice or severe abdominal pain caused by a blocked bile duct requires expert intervention. **ERCP (Endoscopic Retrograde Cholangiopancreatography)** is a highly specialized, non-surgical procedure used to diagnose and treat conditions of the bile and pancreatic ducts, including the extraction of stones and placement of stents to relieve blockages.",
        features: ["Non-Surgical Stone Extraction", "Placement of Plastic or Metal Stents", "Fluoroscopic X-Ray Guidance", "Therapeutic and Diagnostic Capabilities"],
        benefits: ["Avoids Major Open Surgery", "Rapid Relief from Obstructive Jaundice", "Quick Post-Procedure Recovery", "Highly Effective for Complex Biliary Disease"]
    },
    {
        id: "t-140",
        slug: "liver-cirrhosis-treatment",
        parentServiceSlug: "gastroenterology",
        title: "Liver Cirrhosis",
        shortDescription: "Comprehensive management and transplant evaluation for liver disease.",
        fullDescription: "Chronic liver damage needs urgent, specialized care. Our Hepatology department provides expert **Liver Cirrhosis Management**. We focus on halting disease progression, managing complex complications like ascites or variceal bleeding, and providing seamless evaluation and bridging therapies for liver transplantation when necessary.",
        features: ["Liver FibroScan for Non-Invasive Staging", "Variceal Banding (EVL)", "Transjugular Intrahepatic Portosystemic Shunt (TIPS)", "Liver Transplant Evaluation Clinic"],
        benefits: ["Delays Progression to End-Stage Liver Failure", "Prevents Fatal Gastrointestinal Bleeding", "Optimizes Nutrition and Fluid Balance", "Improves Overall Survival Rates"]
    },
    {
        id: "t-141",
        slug: "fatty-liver-treatment-diet",
        parentServiceSlug: "gastroenterology",
        title: "Fatty Liver",
        shortDescription: "Proactive screening and lifestyle intervention for NAFLD.",
        fullDescription: "Fatty liver is a silent epidemic that can lead to irreversible liver damage if ignored. Our **Fatty Liver Disease (NAFLD) Clinic** offers proactive FibroScan screening and creates customized, evidence-based lifestyle, nutrition, and medical plans to reverse liver fat accumulation before it progresses to cirrhosis.",
        features: ["Ultrasonic FibroScan Assessment", "Customized Diet & Nutrition Planning", "Metabolic Syndrome Management", "Regular Liver Function Monitoring"],
        benefits: ["Reverses Early-Stage Liver Fat", "Prevents Cirrhosis and Liver Cancer", "Reduces Cardiovascular Risk", "Promotes Healthy Weight Loss"]
    },
    {
        id: "t-142",
        slug: "ibs-treatment-guide",
        parentServiceSlug: "gastroenterology",
        title: "IBS Treatment",
        shortDescription: "Personalized dietary and medical protocols for irritable bowel.",
        fullDescription: "Living with chronic bloating, diarrhea, or constipation? **Irritable Bowel Syndrome (IBS)** requires a highly individualized approach. Our gastroenterologists utilize a combination of specific dietary modifications (like the FODMAP diet), gut-brain therapeutics, and targeted medications to restore your gut health and give you back control of your life.",
        features: ["FODMAP Diet Guidance", "Gut-Brain Behavioral Therapy", "Advanced Microbiome Assessments", "Targeted Spasmolytic Medications"],
        benefits: ["Resolves Chronic Bloating and Pain", "Normalizes Bowel Movements", "Identifies Specific Food Triggers", "Significantly Improves Daily Comfort"]
    },
    {
        id: "t-143",
        slug: "acid-reflux-gerd-management",
        parentServiceSlug: "gastroenterology",
        title: "Acid Reflux / GERD",
        shortDescription: "Endoscopic diagnostics and surgical solutions for chronic heartburn.",
        fullDescription: "Tired of relying on antacids? Chronic **Acid Reflux or GERD** can damage your esophagus over time. We provide precise diagnosing via pH monitoring and Endoscopy. For severe, medication-resistant cases, we offer advanced laparoscopic anti-reflux surgeries (Fundoplication) for a permanent cure.",
        features: ["24-Hour pH Impedance Monitoring", "High-Definition Endoscopy", "Laparoscopic Nissen Fundoplication", "Stretta Radiofrequency Therapy"],
        benefits: ["Instantly Stops Heartburn & Regurgitation", "Prevents Barrett's Esophagus (Pre-cancer)", "Eliminates Daily Medication Needs", "Restores Normal Eating Without Pain"]
    },
    {
        id: "t-144",
        slug: "dialysis-procedure-guide",
        parentServiceSlug: "nephrology",
        title: "Dialysis Guide",
        shortDescription: "State-of-the-art Hemodialysis and Peritoneal Dialysis services.",
        fullDescription: "For kidneys that can no longer filter waste, we offer a world-class **Dialysis Center**. Operating 24/7, our facility provides both advanced Hemodialysis and training for Continuous Ambulatory Peritoneal Dialysis (CAPD), ensuring patients with End-Stage Renal Disease (ESRD) receive safe, sterile, and comfortable life-saving care.",
        features: ["24/7 Advanced Hemodialysis Unit", "Isolated Machines for Seropositive Patients", "Continuous Renal Replacement (CRRT)", "CAPD Training & Support"],
        benefits: ["Effectively Cleanses Blood Toxins", "Maintains Safe Fluid Balance", "Highly Sterile Infection-Free Environment", "Comfortable, Patient-Centric Design"]
    },
    {
        id: "t-145",
        slug: "kidney-transplant-guide",
        parentServiceSlug: "nephrology",
        title: "Kidney Transplant",
        shortDescription: "Comprehensive evaluation and life-saving renal transplant surgery.",
        fullDescription: "A kidney transplant is the best definitive treatment for end-stage renal disease (ESRD). Our integrated Transplant Center provides complete care, from rigorous pre-transplant donor/recipient evaluation to advanced laparoscopic donor nephrectomy and lifelong post-transplant immunosuppressant management.",
        features: ["Living & Deceased Donor Programs", "Laparoscopic Donor Nephrectomy", "Advanced Immunosuppression Protocols", "Dedicated Transplant ICU"],
        benefits: ["Freedom from Dialysis Dependency", "Significantly Longer Life Expectancy", "Restores Normal Diet & Fluid Intake", "Comprehensive Lifelong Follow-up"]
    },
    {
        id: "t-146",
        slug: "diabetic-kidney-disease-ckd",
        parentServiceSlug: "nephrology",
        title: "Diabetic Kidney Disease",
        shortDescription: "Multidisciplinary management of diabetic nephropathy.",
        fullDescription: "Diabetes is the leading cause of kidney failure. Protect your kidneys early with our **Diabetic Nephropathy Clinic**. We use early microalbuminuria screening protocols natively integrated into your diabetes care plan, deploying advanced nephroprotective medications to stop protein leakage and halt kidney function decline.",
        features: ["Early Microalbuminuria Screening", "Advanced SGLT2 & RAAS Inhibitor Therapy", "Integrated Endocrinologist Collaboration", "Strict Blood Pressure Management"],
        benefits: ["Prevents Progression to Dialysis", "Slows Rate of GFR Decline", "Protects Cardiovascular Health", "Holistic Diabetic Management"]
    },
    {
        id: "t-147",
        slug: "chronic-kidney-disease-stages",
        parentServiceSlug: "nephrology",
        title: "CKD Stages Management",
        shortDescription: "Targeted staging and proactive progression slowing for CKD.",
        fullDescription: "Navigating **Chronic Kidney Disease (CKD)** requires expert, staged care. Whether you are at Stage 1 or approaching Stage 5, our nephrologists provide personalized dietary modifications, anemia management, and bone metabolism stabilization to keep your native kidneys functioning for as long as possible.",
        features: ["Renal Diet & Nutrition Counseling", "Erythropoietin Therapy for Anemia", "Bone/Mineral Metabolism Control", "Pre-emptive Transplant Planning"],
        benefits: ["Delays Need for Dialysis", "Manages Severe Fatigue and Weakness", "Prevents Bone Fractures", "Provides a Clear Long-Term Care Roadmap"]
    },
    {
        id: "t-148",
        slug: "chemotherapy-side-effects",
        parentServiceSlug: "oncology",
        title: "Chemotherapy & Targeted Therapy",
        shortDescription: "Systemic cancer treatment tailored to your specific tumor genetics.",
        fullDescription: "Fighting cancer requires strategy and precision. Our Medical Oncology department offers advanced **Chemotherapy, Targeted Therapy, and Immunotherapy** protocols. We construct bespoke treatment regimens based on the molecular profiling of your tumor safely administered within our specialized Day-Care Infusion Center.",
        features: ["Molecular Tumor Board Assessments", "Genomic-Guided Targeted Therapy", "Immunotherapy Access", "Dedicated Day-Care Infusion Unit"],
        benefits: ["Maximizes Efficacy Against Cancer Cells", "Actively Manages Side Effects like Nausea", "Outpatient Administration for Comfort", "Personalized to Your Genetic Profile"]
    },
    {
        id: "t-149",
        slug: "radiation-therapy-overview",
        parentServiceSlug: "oncology",
        title: "Radiation Therapy",
        shortDescription: "Ultra-precise radiation delivery to eradicate deep-seated tumors.",
        fullDescription: "Our **Radiation Oncology** center utilizes high-end Linear Accelerators to deliver pinpoint-accurate radiation. By employing advanced techniques like IMRT and VMAT, we deliver maximum tumoricidal doses directly to the cancer while actively sparing the surrounding healthy organs from collateral damage.",
        features: ["Intensity-Modulated Radiation (IMRT)", "Volumetric Modulated Arc Therapy (VMAT)", "Image-Guided Precision (IGRT)", "Brachytherapy Options"],
        benefits: ["Painless, Non-Invasive Treatment", "Drastically Reduces Collateral Tissue Damage", "Shrinks Tumors Before Surgery", "Curative for Many Localized Cancers"]
    },
    {
        id: "t-150",
        slug: "surgical-oncology-overview",
        parentServiceSlug: "oncology",
        title: "Surgical Oncology",
        shortDescription: "Minimally invasive and complex tumor removal surgeries.",
        fullDescription: "Surgical removal remains the cornerstone of curing many solid tumors. Our **Surgical Oncology** team holds extensive experience in performing complex, organ-preserving surgeries for gastrointestinal, gynecological, head/neck, and urological cancers. We utilize robotic and laparoscopic platforms to ensure complete tumor excision with minimal physical trauma.",
        features: ["Robotic-Assisted Tumor Resection", "Organ-Preserving Cancer Surgery", "Hyperthermic Intraperitoneal Chemotherapy (HIPEC)", "Advanced Reconstructive Surgery"],
        benefits: ["Maximizes Chance of Complete Cure", "Less Post-Operative Pain and Scarring", "Faster Return to Daily Activities", "Multidisciplinary Pre-Op Planning"]
    },
    {
        id: "t-151",
        slug: "breast-cancer-screening-guide",
        parentServiceSlug: "oncology",
        title: "Breast Cancer Clinic",
        shortDescription: "Early detection screening and complete breast cancer management.",
        fullDescription: "Early detection saves lives. Our dedicated **Breast Cancer Clinic** provides a safe, private environment for comprehensive screening using advanced 3D Mammography and Ultrasound. We offer end-to-end care, from needle biopsies to breast-conserving surgeries (lumpectomies) and immediate aesthetic breast reconstruction.",
        features: ["3D Digital Mammography (Tomosynthesis)", "Minimally Invasive Core Needle Biopsies", "Breast-Conserving Surgery (BCS)", "Oncoplastic Reconstructive Surgery"],
        benefits: ["Detects Cancer Years Before Symptoms", "High Rate of Complete Cure", "Superior Aesthetic Outcomes", "Compassionate, All-Female Support Staff Available"]
    },
    {
        id: "t-152",
        slug: "palliative-care-services",
        parentServiceSlug: "oncology",
        title: "Palliative Care",
        shortDescription: "Compassionate pain management and quality of life support.",
        fullDescription: "Cancer treatment can be physically and emotionally taxing. Our **Palliative Care Services** focus solely on your comfort. We provide expert pain management, nutritional support, and psychological counseling to help you and your family navigate the challenges of advanced illness with dignity and profound support.",
        features: ["Advanced Pain Management Protocols", "Customized Nutritional Support Plans", "Dedicated Psychological Counseling", "Family & Caregiver Support Groups"],
        benefits: ["Significantly Improves Daily Comfort", "Reduces Treatment-Related Nausea/Fatigue", "Alleviates Anxiety and Depression", "Ensures Patient Dignity Always"]
    }
,
    {
        id: "t-302",
        slug: "acute-kidney-injury-care",
        parentServiceSlug: "nephrology",
        title: "acute kidney injury care",
        shortDescription: "Comprehensive care and treatment for acute kidney injury care....",
        fullDescription: "Comprehensive care and treatment for acute kidney injury care.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-303",
        slug: "all-on-4-implants-guide",
        parentServiceSlug: "dentistry",
        title: "All-on-4 Dental Implants",
        shortDescription: "Restore a full arch of teeth with just four strategically placed implants.",
        fullDescription: "All-on-4 dental implants provide a revolutionary fixed solution for patients with significant tooth loss. By placing four titanium implants at precise angles, we can support a full temporary bridge on the same day, restoring your smile's function and aesthetics with minimal downtime and without the need for extensive bone grafting.",
        features: ["Same-Day Fixed Bridge","Angled Posterior Implants","Minimal Bone Grafting Needed","Rapid Recovery Protocol"],
        benefits: ["Immediate Full Smile Restore","Stable and Secure Fit","No Slipping or Adhesives","High Aesthetic Standard"]
    },
    {
        id: "t-304",
        slug: "all-on-6-implants-guide",
        parentServiceSlug: "dentistry",
        title: "All-on-6 Dental Implants",
        shortDescription: "Maximum stability and support for a complete arch tooth replacement.",
        fullDescription: "The All-on-6 implant system utilizes six precision-placed implants to provide enhanced stability and weight distribution for a permanent dental bridge. This approach is ideal for patients with adequate bone density seeking the most durable and natural-feeling solution for total tooth replacement in the upper or lower jaw.",
        features: ["Enhanced Arch Stability","6-Post Load Distribution","Bio-Material Integration","Complete Jaw Restoration"],
        benefits: ["Maximum Chewing Power","Predictable Long-Term Success","Superior Functional Stability","Natural Look and Feel"]
    },
    {
        id: "t-305",
        slug: "alzheimers-dementia-care",
        parentServiceSlug: "neurology",
        title: "alzheimers dementia care",
        shortDescription: "Comprehensive care and treatment for alzheimers dementia care....",
        fullDescription: "Comprehensive care and treatment for alzheimers dementia care.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-306",
        slug: "apicoectomy-procedure",
        parentServiceSlug: "dentistry",
        title: "Apicoectomy (Root-End Surgery)",
        shortDescription: "Advanced surgical preservation for complex root canal cases.",
        fullDescription: "When a standard root canal treatment is insufficient to clear an infection, an apicoectomy may be necessary. Our endodontic surgeons precisely remove the infected tip of the tooth's root and seal the canal from the end, effectively saving the natural tooth and preventing the need for an extraction or implant.",
        features: ["Microsurgical Precision","Ultrasonic Root-End Prep","Bio-Ceramic Sealing","Minimally Invasive Entry"],
        benefits: ["Saves Your Natural Tooth","Resolves Chronic Infection","Prevents Tooch Extraction","Stops Root Tip Pain"]
    },
    {
        id: "t-308",
        slug: "arrhythmia-treatment-options",
        parentServiceSlug: "cardiology",
        title: "Arrhythmia Treatment Options",
        shortDescription: "Comprehensive clinical management of irregular heart rhythms.",
        fullDescription: "Heart rhythm disorders (arrhythmias) require precise diagnosis and targeted therapy. We provide a full spectrum of treatments, from medical management and anticoagulation for AFib to advanced procedures like Radiofrequency Ablation (RFA) and Pacemaker/ICD implantation to restore a healthy, stable heartbeat.",
        features: ["Electrophysiology Studies (EPS)","Pacemaker & ICD Implants","Radiofrequency Ablation (RFA)","Complex Rhythm Drug Therapy"],
        benefits: ["Prevents Stroke & Heart Failure","Eliminates Palpitations","Restores Steady Heartbeat","Peace of Mind for Active Life"]
    },
    {
        id: "t-310",
        slug: "bell-palsy-recovery",
        parentServiceSlug: "neurology",
        title: "bell palsy recovery",
        shortDescription: "Comprehensive care and treatment for bell palsy recovery....",
        fullDescription: "Comprehensive care and treatment for bell palsy recovery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-311",
        slug: "bladder-cancer-treatment-options",
        parentServiceSlug: "nephrology",
        title: "bladder cancer treatment options",
        shortDescription: "Comprehensive care and treatment for bladder cancer treatment options....",
        fullDescription: "Comprehensive care and treatment for bladder cancer treatment options.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-312",
        slug: "bleeding-gums-causes",
        parentServiceSlug: "dentistry",
        title: "Bleeding Gums Treatment",
        shortDescription: "Expert diagnosis and clinical care to stop gum inflammation early.",
        fullDescription: "Bleeding gums are often the first sign of gingivitis or periodontitis. We use advanced diagnostic 3D imaging and clinical scaling to identify the root cause of inflammation. By removing plaque and tartar below the gum line, we restore tissue health and prevent the progression of severe gum disease.",
        features: ["Bacterial Plaque Analysis","Ultrasonic Scaling Tech","Gingival Health Mapping","Personalized Hygiene Audit"],
        benefits: ["Stops Gum Bleeding","Freshens Breath","Prevents Bone Loss","Healthy Gum Regrowth"]
    },
    {
        id: "t-313",
        slug: "bone-grafting-for-implants",
        parentServiceSlug: "dentistry",
        title: "Bone Grafting for Implants",
        shortDescription: "Restoring jawbone volume to create a stable foundation for implants.",
        fullDescription: "Sufficient bone volume is essential for successful dental implant placement. We utilize advanced bone grafting techniques, including sinus lifts and ridge augmentations, using high-quality bio-compatible materials to restore lost bone and ensure a lifetime of stability for your new dental restorations.",
        features: ["Sinus Lift Specialization","Bio-Material Augmentation","Platelet-Rich Fibrin (PRF)","Accelerated Healing Tech"],
        benefits: ["Enables Successful Implants","Restores Facial Structure","Strengthens Jaw Foundation","Ensures Implant Longevity"]
    },
    {
        id: "t-314",
        slug: "bone-marrow-transplant-prep",
        parentServiceSlug: "orthopaedics",
        title: "Bone Marrow Procedure Prep",
        shortDescription: "Clinical optimization and planning for bone marrow procedures.",
        fullDescription: "Preparing for a bone marrow transplant or biopsy requires meticulous clinical coordination. Our team ensures all pre-procedure screenings, including blood work and imaging, are completed safely. We focus on patient stabilization and infection control to ensure the highest success rate for your orthopedic or oncological procedure.",
        features: ["Comprehensive Blood Profiling","Sterile Preparation Suite","Patient Fitness Audit","Infection Control Protocols"],
        benefits: ["Maximizes Procedure Success","Minimizes Complication Risk","Ensures Patient Safety","Detailed Clinical Optimization"]
    },
    {
        id: "t-315",
        slug: "braces-age-limit",
        parentServiceSlug: "dentistry",
        title: "Braces: No Age Limit",
        shortDescription: "It's never too late for a perfect smile—orthodontics for all ages.",
        fullDescription: "Orthodontic treatment is highly effective at any age. Whether you are 7 or 70, we offer customized solutions including clear aligners and ceramic braces that respect your lifestyle. Modern tech ensures that adult tooth movement is gentle, efficient, and leads to life-changing aesthetic and functional results.",
        features: ["Adult Orthodontic Specialists","Discreet Treatment Options","Bone-Density Analysis","Accelerated Tooth Movement"],
        benefits: ["Aesthetic Smile Confidence","Improved Bite Function","Prevents Tooth Overcrowding","Lifelong Oral Health"]
    },
    {
        id: "t-316",
        slug: "braces-cost-in-vellore",
        parentServiceSlug: "dentistry",
        title: "Braces Cost in Vellore",
        shortDescription: "Transparent and accessible pricing for all orthodontic treatments.",
        fullDescription: "The cost of braces in Vellore varies by the type of treatment—metal, ceramic, or self-ligating. We provide transparent, all-inclusive packages that cover all monthly adjustments and initial diagnostic work. With flexible interest-free EMI plans, achieving your dream smile is more affordable than ever.",
        features: ["All-Inclusive Pricing","Interest-Free EMI Plans","Variable Treatment Levels","Detailed Cost Breakdown"],
        benefits: ["No Hidden Charges","Affordable Payment Flow","Quality Material Guarantee","Predictable Financial Planning"]
    },
    {
        id: "t-317",
        slug: "braces-for-adults",
        parentServiceSlug: "dentistry",
        title: "Orthodontics for Adults",
        shortDescription: "Discreet and sophisticated smile correction for mature professionals.",
        fullDescription: "Adult orthodontics focuses on aesthetics and convenience. We offer specialized treatments like Invisalign and clear lingual braces that remain virtually invisible while correcting years of misalignment. Our plans also address complex adult issues like missing teeth or prior dental work for a complete smile restoration.",
        features: ["Virtually Invisible Aligners","Lingual (Behind-Teeth) Braces","Discreet Ceramic Brackets","Professional Life Scheduling"],
        benefits: ["Confident Social Presence","No 'Metal-Mouth' Look","Improved Dental Longevity","Tailored to Adult Needs"]
    },
    {
        id: "t-318",
        slug: "braces-pain-management",
        parentServiceSlug: "dentistry",
        title: "Braces Pain Management",
        shortDescription: "Effective ways to manage discomfort during orthodontic treatment.",
        fullDescription: "While modern braces are designed for comfort, patients may experience minor soreness after adjustments. Our clinical team provides comprehensive guidance on managing pain using orthodontic wax, salt-water rinses, and over-the-counter relief, ensuring a smooth transition to your new smile.",
        features: ["Soft Silicone Wax","Adjustment Comfort Kits","Emergency Ortho Support","Gentle Tightening Tech"],
        benefits: ["Reduced Oral Irritation","Comfortable Chewing","Faster Adaptation","Clinical Pain Relief"]
    },
    {
        id: "t-319",
        slug: "braces-treatment-duration",
        parentServiceSlug: "dentistry",
        title: "Braces Treatment Duration",
        shortDescription: "Understanding how long your journey to a perfect smile will take.",
        fullDescription: "Orthodontic treatment typically lasts between 12 to 24 months, depending on the complexity of teeth alignment. We use advanced diagnostic 3D imaging to provide accurate timelines and utilize accelerated techniques to minimize duration while ensuring optimal clinical results.",
        features: ["3D Treatment Planning","Accelerated Orthodontics","Monthly Progress Tracking","Customized Timelines"],
        benefits: ["Predictable Results","Efficient Tooth Movement","Fewer Clinic Visits","Timely Completion"]
    },
    {
        id: "t-320",
        slug: "brain-tumor-surgery-guide",
        parentServiceSlug: "neurology",
        title: "brain tumor surgery guide",
        shortDescription: "Comprehensive care and treatment for brain tumor surgery guide....",
        fullDescription: "Comprehensive care and treatment for brain tumor surgery guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-322",
        slug: "breast-lump-removal",
        parentServiceSlug: "general-surgery",
        title: "breast lump removal",
        shortDescription: "Comprehensive care and treatment for breast lump removal....",
        fullDescription: "Comprehensive care and treatment for breast lump removal.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-323",
        slug: "bypass-surgery-cabg",
        parentServiceSlug: "cardiology",
        title: "Bypass Surgery (CABG) Guide",
        shortDescription: "Understanding the most effective long-term solution for blocked arteries.",
        fullDescription: "Coronary Arterial Bypass Grafting (CABG) remains the gold standard for treating multi-vessel blockages. We guide patients through the entire journey, from pre-operative optimization to meticulous surgery and structured cardiac rehabilitation, ensuring a safe and durable restoration of heart health.",
        features: ["Multivessel Bypass Expertise","Total Arterial Revascularization","Minimally Invasive Entry Options","Cardiac Rehab Support"],
        benefits: ["Longest-Lasting Blockage Relief","Prevents Recurrent Heart Pain","Maximizes Heart Power","Safe, Reliable Recovery Flow"]
    },
    {
        id: "t-324",
        slug: "cancer-pain-management",
        parentServiceSlug: "oncology",
        title: "cancer pain management",
        shortDescription: "Comprehensive care and treatment for cancer pain management....",
        fullDescription: "Comprehensive care and treatment for cancer pain management.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-325",
        slug: "carpal-tunnel-release",
        parentServiceSlug: "orthopaedics",
        title: "Carpal Tunnel Release",
        shortDescription: "Advanced surgical relief for hand numbness and nerve compression.",
        fullDescription: "Carpal Tunnel Release is a highly effective procedure to alleviate pressure on the median nerve. Whether through traditional or minimally invasive endoscopic techniques, we aim to eliminate pain, numbness, and tingling in the hand, restoring full grip strength and functional dexterity.",
        features: ["Endoscopic Release Option","HD Microsurgical View","Painless Local Anesthesia","Rapid Recovery Protocol"],
        benefits: ["Immediate Pressure Relief","Restores Hand Strength","Small Incision Healing","Resolves Chronic Numbness"]
    },
    {
        id: "t-326",
        slug: "ceramic-braces-vs-metal",
        parentServiceSlug: "dentistry",
        title: "Ceramic Braces vs Metal Braces",
        shortDescription: "Comparing aesthetic and traditional orthodontic options.",
        fullDescription: "Choosing between ceramic (clear) and metal braces depends on your aesthetic preferences and clinical needs. Ceramic braces offer a discreet look by blending with tooth color, while traditional metal braces are highly durable and effective for complex structural corrections.",
        features: ["Clear Sapphire Brackets","Stain-Resistant Ligatures","High-Tensile Metal Brackets","Custom Archwires"],
        benefits: ["Aesthetic Confidence","Superior Durability","Precise Alignment","Flexible Choice"]
    },
    {
        id: "t-327",
        slug: "cervical-cancer-screening-pap",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "cervical cancer screening pap",
        shortDescription: "Comprehensive care and treatment for cervical cancer screening pap....",
        fullDescription: "Comprehensive care and treatment for cervical cancer screening pap.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-328",
        slug: "cervical-cancer-vaccines",
        parentServiceSlug: "oncology",
        title: "cervical cancer vaccines",
        shortDescription: "Comprehensive care and treatment for cervical cancer vaccines....",
        fullDescription: "Comprehensive care and treatment for cervical cancer vaccines.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-330",
        slug: "cholesterol-management-plan",
        parentServiceSlug: "cardiology",
        title: "Cholesterol Management Plan",
        shortDescription: "Personalized clinical strategies to lower LDL and protect arteries.",
        fullDescription: "High cholesterol is a primary driver of atherosclerosis and heart disease. Our clinical management plan includes detailed lipid profiling, lifestyle optimization (DASH diet), and advanced medical therapies (Statins, PCSK9 inhibitors) to achieve your target LDL levels and maintain long-term vascular health.",
        features: ["Advanced Lipid Profiling","Arterial Health Screening","Precision Medical Therapy","Clinical Nutrition Support"],
        benefits: ["Lowers Heart Attack Risk","Prevents Arterial Blockage","Improves Metabolic Health","Guided Wellness Roadmap"]
    },
    {
        id: "t-332",
        slug: "circumcision-surgery-guide",
        parentServiceSlug: "urology",
        title: "circumcision surgery guide",
        shortDescription: "Comprehensive care and treatment for circumcision surgery guide....",
        fullDescription: "Comprehensive care and treatment for circumcision surgery guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-333",
        slug: "colon-cancer-treatment",
        parentServiceSlug: "oncology",
        title: "colon cancer treatment",
        shortDescription: "Comprehensive care and treatment for colon cancer treatment....",
        fullDescription: "Comprehensive care and treatment for colon cancer treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-335",
        slug: "colposcopy-procedure-details",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "colposcopy procedure details",
        shortDescription: "Comprehensive care and treatment for colposcopy procedure details....",
        fullDescription: "Comprehensive care and treatment for colposcopy procedure details.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-336",
        slug: "composite-bonding-guide",
        parentServiceSlug: "dentistry",
        title: "Composite Bonding Guide",
        shortDescription: "A quick and effective way to repair minor dental imperfections.",
        fullDescription: "Composite bonding involves applying a tooth-colored resin material to repair chips, gaps, or discoloration. It is a minimally invasive procedure that usually requires just one visit, providing an immediate and natural-looking enhancement to your smile.",
        features: ["Matching Tooth Shading","Minimally Invasive","Single-Visit Procedure","Durable Resin Material"],
        benefits: ["Immediate Improvement","Cost-Effective Cosmetic","Preserves Natural Enamel","Natural Aesthetics"]
    },
    {
        id: "t-338",
        slug: "crohns-disease-management",
        parentServiceSlug: "gastroenterology",
        title: "Crohn's Disease Management",
        shortDescription: "Advanced clinical care for chronic inflammatory bowel condition.",
        fullDescription: "Crohn's disease requires a life-long, multidisciplinary management approach. We focus on achieving clinical remission through advanced biological therapies, nutritional support, and surgical interventions when necessary. Our goal is to minimize flare-ups and prevent long-term intestinal damage.",
        features: ["Biological Drug Therapy","Mucosal Healing Monitoring","Advanced GI Nutrition Planning","Symptom Control Strategies"],
        benefits: ["Reduces Intestinal Scars","Achieves Deep Remission","Prevents Future Surgeries","Improves Long-Term GI Health"]
    },
    {
        id: "t-339",
        slug: "crossbite-correction",
        parentServiceSlug: "dentistry",
        title: "Crossbite Correction",
        shortDescription: "Specialized treatment to align upper and lower teeth correctly.",
        fullDescription: "A crossbite occurs when upper teeth sit inside lower teeth, leading to jaw pain and tooth wear. We provide specialized corrective treatments including palatal expanders, braces, and clear aligners to restore proper bite function and prevent long-term dental complications.",
        features: ["Palatal Expanders","Digital Bite Analysis","Custom Orthodontics","Jaw Alignment Correction"],
        benefits: ["Improved Chewing","Reduced Jaw Tension","Healthier Teeth Alignment","Preventive Care"]
    },
    {
        id: "t-340",
        slug: "deep-cleaning-scaling",
        parentServiceSlug: "dentistry",
        title: "Deep Cleaning & Scaling",
        shortDescription: "Professional periodontal therapy to treat and prevent gum disease.",
        fullDescription: "Scaling and root planing (deep cleaning) removes plaque and tartar from below the gum line. This essential procedure helps treat gingivitis and prevents the progression of periodontitis, protecting your teeth from bone loss and ensuring long-term oral health.",
        features: ["Ultrasonic Scaling","Root Planing Technique","Antibacterial Irrigation","Painless Local Anesthesia"],
        benefits: ["Halt Gum Recession","Eliminate Bad Breath","Prevent Tooth Loss","Cleaner, Smoother Teeth"]
    },
    {
        id: "t-341",
        slug: "dental-bonding-vs-veneers",
        parentServiceSlug: "dentistry",
        title: "Dental Bonding vs Veneers",
        shortDescription: "Deciding on the best cosmetic solution for your smile transformation.",
        fullDescription: "While both bonding and veneers improve smile aesthetics, they differ in durability and application. Bonding is ideal for minor repairs in one visit, whereas porcelain veneers offer a more permanent, stain-resistant, and high-end transformation for multiple teeth.",
        features: ["Porcelain Veneer Options","Direct Composite Bonding","Longevity Comparisons","Custom Design Wax-ups"],
        benefits: ["Tailored Aesthetics","Stain Resistance","Variable Price Points","Predictable Outcomes"]
    },
    {
        id: "t-342",
        slug: "dental-implant-failure-signs",
        parentServiceSlug: "dentistry",
        title: "Dental Implant Failure Signs",
        shortDescription: "What symptoms to watch for to ensure your implant longevity.",
        fullDescription: "While rare, early detection of implant failure can save the restoration. Key signs include persistent pain, swelling at the implant site, or any sensation of looseness. Our specialists use digital X-rays to assess bone integration and provide immediate corrective care if issues are detected.",
        features: ["Low-Radiation Digital X-ray","Bone Integration Assessment","Implant Rescue Protocol","Specialized Oral Surgeon"],
        benefits: ["Early Detection Savings","Restores Oral Stability","Prevents Bone Loss","Peace of Mind"]
    },
    {
        id: "t-343",
        slug: "dental-implant-pain-management",
        parentServiceSlug: "dentistry",
        title: "Dental Implant Pain Management",
        shortDescription: "Ensuring a comfortable recovery after your implant procedure.",
        fullDescription: "Modern implant surgery is remarkably gentle. Most patients transition comfortably with mild analgesics and cold compresses. We provide a detailed post-operative care kit and personalized pain management plans to ensure your recovery is smooth and virtually pain-free.",
        features: ["Minimally Invasive Tech","Post-Op Care Kits","Cold Compress Therapy","Precision Local Anesthesia"],
        benefits: ["Faster Healing","Minimal Discomfort","Immediate Support Access","Safe Recovery"]
    },
    {
        id: "t-344",
        slug: "dental-implant-procedure-steps",
        parentServiceSlug: "dentistry",
        title: "Dental Implant Procedure Steps",
        shortDescription: "A step-by-step walkthrough of the implant journey.",
        fullDescription: "The implant process typically involves four stages: 1) Initial clinical consultation and 3D planning, 2) Precise titanium post placement, 3) Osseointegration (healing phase), and 4) Final custom crown placement. This structured approach ensures a lifetime of functional and aesthetic success.",
        features: ["CBCT 3D Bone Imaging","Computer-Guided Surgery","Titanium Bio-Materials","Custom Aesthetic Crowns"],
        benefits: ["Permanent Tooth Solution","Natural Look and Feel","Jawbone Preservation","Complete Smile Restore"]
    },
    {
        id: "t-345",
        slug: "dental-implant-recovery-time",
        parentServiceSlug: "dentistry",
        title: "Dental Implant Recovery Time",
        shortDescription: "What to expect during the healing and integration phases.",
        fullDescription: "Initial soft tissue healing typically occurs within 7-10 days, while the underlying bone integration (osseointegration) can take 3-6 months. We monitor your progress closely with monthly follow-ups to ensure the implant is perfectly stabilized before placing your final permanent crown.",
        features: ["Weekly Healing Checks","Laser Therapy Assistance","Accelerated Healing Tech","Regular Integration Scans"],
        benefits: ["Highly Stable Result","Reduced Risk of Failure","Informed Recovery Steps","Long-Term Success"]
    },
    {
        id: "t-346",
        slug: "dental-veneers-types",
        parentServiceSlug: "dentistry",
        title: "Types of Dental Veneers",
        shortDescription: "Exploring porcelain, composite, and ultra-thin veneer options.",
        fullDescription: "We offer various veneer types to match your smile goals. Porcelain veneers provide maximum durability and stain resistance, while composite veneers offer a cost-effective, single-visit solution. For minimal enamel removal, we also provide 'ultra-thin' veneers that create a stunning, natural looking result.",
        features: ["E-Max Porcelain","Ultra-Thin Lumineers","Direct Composite Resins","CAD/CAM Precision"],
        benefits: ["Personalized Aesthetics","Stain Resistance","Minimal Tooth Prep","Durable Smile Makeover"]
    },
    {
        id: "t-347",
        slug: "diabetic-foot-ulcer-care",
        parentServiceSlug: "general-surgery",
        title: "diabetic foot ulcer care",
        shortDescription: "Comprehensive care and treatment for diabetic foot ulcer care....",
        fullDescription: "Comprehensive care and treatment for diabetic foot ulcer care.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-348",
        slug: "diabetic-nephropathy-prevention",
        parentServiceSlug: "nephrology",
        title: "diabetic nephropathy prevention",
        shortDescription: "Comprehensive care and treatment for diabetic nephropathy prevention....",
        fullDescription: "Comprehensive care and treatment for diabetic nephropathy prevention.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-350",
        slug: "echocardiogram-test-details",
        parentServiceSlug: "cardiology",
        title: "Echocardiogram (Echo) Details",
        shortDescription: "Advanced ultrasound imaging to assess heart structure and function.",
        fullDescription: "An echocardiogram uses high-frequency sound waves (ultrasound) to create real-time images of your heart. It allows our cardiologists to evaluate the size of the heart, the strength of the heart muscle, and the precise function of the heart valves, providing essential diagnostic data for all cardiac conditions.",
        features: ["Color Doppler Imaging","3D Cardiac Ultrasound","Strain Rate Analysis","Non-Invasive Precision"],
        benefits: ["Accurate Heart Function View","No Radiation Exposure","Immediate Diagnostic Results","Essential Valve Health Audit"]
    },
    {
        id: "t-351",
        slug: "ectopic-pregnancy-treatment",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "ectopic pregnancy treatment",
        shortDescription: "Comprehensive care and treatment for ectopic pregnancy treatment....",
        fullDescription: "Comprehensive care and treatment for ectopic pregnancy treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-352",
        slug: "eeg-test-procedure",
        parentServiceSlug: "neurology",
        title: "eeg test procedure",
        shortDescription: "Comprehensive care and treatment for eeg test procedure....",
        fullDescription: "Comprehensive care and treatment for eeg test procedure.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-353",
        slug: "endometriosis-pain-management",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "endometriosis pain management",
        shortDescription: "Comprehensive care and treatment for endometriosis pain management....",
        fullDescription: "Comprehensive care and treatment for endometriosis pain management.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-356",
        slug: "erectile-dysfunction-treatment",
        parentServiceSlug: "nephrology",
        title: "erectile dysfunction treatment",
        shortDescription: "Comprehensive care and treatment for erectile dysfunction treatment....",
        fullDescription: "Comprehensive care and treatment for erectile dysfunction treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-358",
        slug: "fibroid-removal-surgery",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "fibroid removal surgery",
        shortDescription: "Comprehensive care and treatment for fibroid removal surgery....",
        fullDescription: "Comprehensive care and treatment for fibroid removal surgery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-359",
        slug: "fissure-surgery-recovery",
        parentServiceSlug: "general-surgery",
        title: "fissure surgery recovery",
        shortDescription: "Comprehensive care and treatment for fissure surgery recovery....",
        fullDescription: "Comprehensive care and treatment for fissure surgery recovery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-360",
        slug: "fistula-laser-treatment",
        parentServiceSlug: "general-surgery",
        title: "Laser Fistula Surgery (FiLaC)",
        shortDescription: "Advanced laser closure (FiLaC) for anal fistula, preserving sphincter function.",
        fullDescription: "Anal fistula is a complex condition that traditionally required extensive surgery. We specialize in **FiLaC (Fistula-tract Laser Closure)**, a minimally invasive technique where laser energy is used to effectively seal the fistula tract without cutting the sphincter muscles. This ensures thorough healing while drastically reducing the risk of incontinence and post-operative pain.",
        features: ["Anal Sphincter Preservation", "FiLaC Laser Technology", "VAAFT Video Assisted Tech", "High Success Rate"],
        benefits: ["Minimizes Risk of Incontinence", "Faster Wound Healing", "Shorter Hospital Stay", "Less Post-operative Pain"]
    },
    {
        id: "t-361",
        slug: "fluid-restriction-guidelines",
        parentServiceSlug: "nephrology",
        title: "fluid restriction guidelines",
        shortDescription: "Comprehensive care and treatment for fluid restriction guidelines....",
        fullDescription: "Comprehensive care and treatment for fluid restriction guidelines.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-364",
        slug: "gastric-balloon-weight-loss",
        parentServiceSlug: "gastroenterology",
        title: "Gastric Balloon Weight Loss",
        shortDescription: "Non-surgical, endoscopic weight loss solution for metabolic health.",
        fullDescription: "The intragastric balloon is a non-surgical weight loss procedure where a saline-filled silicone balloon is endoscopically placed in the stomach. This promotes a feeling of fullness and limits food intake, providing a safe and effective jumpstart for significant weight loss when combined with clinical nutritional support.",
        features: ["Endoscopic Placement (No Surgery)","Reversible weight loss Tech","Clinical Dietician Support","Metabolic Health Monitoring"],
        benefits: ["Significant Weight Loss","Improved Metabolic Health","No Surgical Incisions","Guided Lifestyle Transformation"]
    },
    {
        id: "t-365",
        slug: "gingivitis-treatment-guide",
        parentServiceSlug: "dentistry",
        title: "Gingivitis Treatment Guide",
        shortDescription: "Reversing early-stage gum disease through clinical care.",
        fullDescription: "Gingivitis is the only stage of gum disease that is fully reversible. Our targeted treatment includes professional ultrasonic scaling, antibacterial rinses, and personalized oral hygiene coaching to eliminate inflammation, stop gum bleeding, and restore healthy, pink gum tissue.",
        features: ["Air-Polishing Tech","Antiseptic Irrigation","Personalized Hygiene Plan","Plaque Control Audit"],
        benefits: ["Stops Gum Bleeding","Freshens Breath","Prevents Periodontitis","Long-Term Oral Health"]
    },
    {
        id: "t-366",
        slug: "glomerulonephritis-treatment",
        parentServiceSlug: "nephrology",
        title: "glomerulonephritis treatment",
        shortDescription: "Comprehensive care and treatment for glomerulonephritis treatment....",
        fullDescription: "Comprehensive care and treatment for glomerulonephritis treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-367",
        slug: "gum-disease-prevention",
        parentServiceSlug: "dentistry",
        title: "Gum Disease Prevention",
        shortDescription: "Proactive strategies to maintain healthy gums for life.",
        fullDescription: "Preventing gum disease is essential for overall systemic health. We focus on regular clinical check-ups, early detection of pocketing, and advanced cleaning techniques. By maintaining healthy gums, you reduce the risk of tooth loss and complications related to heart disease and diabetes.",
        features: ["6-Month Prophylaxis","Pocket Depth Mapping","Digital Plaque Analysis","Nutritional Guidance"],
        benefits: ["Preserves Natural Teeth","Reduces Systemic Risks","Avoids Costly Surgery","Lifelong Oral Health"]
    },
    {
        id: "t-368",
        slug: "gum-grafting-procedure",
        parentServiceSlug: "dentistry",
        title: "Gum Grafting Procedure",
        shortDescription: "Advanced surgical restoration for severe gum recession.",
        fullDescription: "Gum grafting restores tissue lost to recession, protecting tooth roots and reducing sensitivity. We use minimally invasive 'Pinhole' techniques or traditional grafting to reinforce the gum line, resulting in a healthier, more balanced smile and preventing further bone loss.",
        features: ["Pinhole Surgical Tech","Connective Tissue Grafts","Microsurgical Precision","Laser-Assisted Healing"],
        benefits: ["Reduced Sensitivity","Protects Tooth Roots","Enhanced Aesthetics","Stops Further Recession"]
    },
    {
        id: "t-369",
        slug: "gum-pocket-treatment",
        parentServiceSlug: "dentistry",
        title: "Gum Pocket Treatment",
        shortDescription: "Eliminating bacteria from deep periodontal pockets.",
        fullDescription: "Deep pockets between teeth and gums harbor harmful bacteria that lead to bone loss. We use specialized subgingival scaling and locally applied antibiotics (LAA) to clean these pockets and encourage the gum tissue to reattach, stabilizing the foundation of your teeth.",
        features: ["Subgingival Scaling","Local Antibiotic Therapy","Laser Bacterial Reduction","Pocket Depth Tracking"],
        benefits: ["Promotes Tissue Attachment","Stabilizes Loose Teeth","Reduces Inflammation","Prevents Bone Loss"]
    },
    {
        id: "t-370",
        slug: "gum-recession-treatment",
        parentServiceSlug: "dentistry",
        title: "Gum Recession Treatment",
        shortDescription: "Non-surgical and surgical options to restore your gum line.",
        fullDescription: "Gum recession exposes sensitive roots and can affect your smile's appearance. Depending on the severity, we offer treatments ranging from scaling and root planing to advanced soft tissue grafting. Early intervention is key to stopping recession and avoiding tooth sensitivity.",
        features: ["Soft Tissue Assessment","Minimally Invasive Care","Root Planing Therapy","Cosmetic Gum Contouring"],
        benefits: ["Protects Dentin/Roots","Improves Smile Balance","Reduces Sensitivity","Long-Term Periodontal Health"]
    },
    {
        id: "t-371",
        slug: "gum-surgery-recovery",
        parentServiceSlug: "dentistry",
        title: "Gum Surgery Aftercare",
        shortDescription: "Crucial steps for healthy healing after periodontal surgery.",
        fullDescription: "Successful gum surgery depends on a meticulous recovery phase. We provide a detailed aftercare protocol including specialized mouth rinses, dietary modifications (soft foods), and activity restrictions. Our team monitors your healing through weekly follow-ups to ensure tissue integration and prevent post-operative complications.",
        features: ["Post-Surgical Care Kit","Hemostatic Gauze Support","Dietary Management Plan","Laser-Assisted Healing Check"],
        benefits: ["Reduces Post-Op Swelling","Ensures Graft Success","Faster Wound Closure","Prevents Clinical Infection"]
    },
    {
        id: "t-372",
        slug: "gummy-smile-correction",
        parentServiceSlug: "dentistry",
        title: "Gummy Smile Correction",
        shortDescription: "Aesthetic gum contouring to reveal a balanced, beautiful smile.",
        fullDescription: "If you feel your gums dominate your smile, gummy smile correction (Gingivectomy) can restore balance. Using advanced soft-tissue lasers, we precisely remove excess gum tissue to reveal more of your natural tooth structure. This painless, single-visit procedure results in a more symmetrical and confident smile.",
        features: ["Diode Laser Contouring","Aesthetic Smile Mapping","Painless Tissue Removal","Instant Visual Symmetry"],
        benefits: ["Confident Social Presence","Balanced Smile Proportions","Immediate Aesthetic Boost","Safe and Rapid Healing"]
    },
    {
        id: "t-373",
        slug: "h-pylori-infection-cure",
        parentServiceSlug: "gastroenterology",
        title: "H. Pylori Eradication",
        shortDescription: "Targeted clinical therapy to eliminate the primary cause of ulcers.",
        fullDescription: "Helicobacter pylori (H. pylori) is a bacterium that infects the stomach lining, often leading to chronic gastritis and peptic ulcers. Our clinical eradication protocol uses a precise combination of antibiotics and acid-suppressing medications, followed by verification testing, to ensure the bacteria is fully eliminated and the stomach is protected.",
        features: ["Urea Breath Test Diagnostic","Triple/Quadruple Therapy","Eradication Verification","Ulcer Healing Monitoring"],
        benefits: ["Heals Stomach Lining","Prevents Ulcer Recurrence","Reduces Gastric Cancer Risk","Eliminates Chronic Heartburn"]
    },
    {
        id: "t-374",
        slug: "head-and-neck-cancer-care",
        parentServiceSlug: "oncology",
        title: "head and neck cancer care",
        shortDescription: "Comprehensive care and treatment for head and neck cancer care....",
        fullDescription: "Comprehensive care and treatment for head and neck cancer care.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-376",
        slug: "heart-attack-warning-signs",
        parentServiceSlug: "cardiology",
        title: "Heart Attack Warning Signs",
        shortDescription: "Critical educational guide for early detection of cardiac emergencies.",
        fullDescription: "Early recognition of heart attack symptoms can save your life. We provide comprehensive education on classic and atypical warning signs, including chest pain (angina), shortness of breath, and radiating pain. Our 24/7 emergency cardiac unit is always prepared for immediate primary angioplasty when every second counts.",
        features: ["24/7 Chest Pain Clinic","Atypical Symptom Education","Emergency Cardiac Triage","Rapid Diagnostic Protocols"],
        benefits: ["Immediate Life-Saving Action","Reduces Heart Muscle Damage","Prevents Cardiac Arrest","Faster Access to Care"]
    },
    {
        id: "t-377",
        slug: "heart-failure-management",
        parentServiceSlug: "cardiology",
        title: "Heart Failure Management",
        shortDescription: "Comprehensive clinical care to restore heart power and quality of life.",
        fullDescription: "Living with heart failure requires a proactive, multidisciplinary approach. We offer advanced medical management, fluid balance monitoring, and specialized cardiac rehabilitation programs aimed at strengthening the heart muscle, reducing hospitalizations, and significantly improving your daily functional capacity.",
        features: ["Ejection Fraction Monitoring","Advanced Medical Therapy (GDMT)","Fluid Balance Supervision","Cardiac Rehab Programs"],
        benefits: ["Reduces Hospital Stays","Improves Breathing & Stamina","Enhanced Quality of Life","Prolonged Heart Health"]
    },
    {
        id: "t-378",
        slug: "heart-valve-replacement",
        parentServiceSlug: "cardiology",
        title: "Heart Valve Replacement Guide",
        shortDescription: "State-of-the-art surgical and non-surgical valve restorations.",
        fullDescription: "When heart valves fail to open or close properly, it strains the entire circulatory system. We specialize in both traditional surgical valve replacement and minimally invasive transcatheter options (TAVR/TAVI), using durable biological or mechanical prosthetics to restore healthy, one-way blood flow through the heart.",
        features: ["Non-Surgical TAVR/TAVI Tech","Bio-Prosthetic Valve Options","Minimally Invasive Entry","Valve Repair Specialization"],
        benefits: ["Eliminates Breathlessness","Prevents Heart Strain","Restores Active Lifestyle","Reduces Heart Failure Risk"]
    },
    {
        id: "t-379",
        slug: "hemodialysis-vs-peritoneal-dialysis",
        parentServiceSlug: "nephrology",
        title: "hemodialysis vs peritoneal dialysis",
        shortDescription: "Comprehensive care and treatment for hemodialysis vs peritoneal dialysis....",
        fullDescription: "Comprehensive care and treatment for hemodialysis vs peritoneal dialysis.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-380",
        slug: "hepatitis-b-treatment-options",
        parentServiceSlug: "gastroenterology",
        title: "Hepatitis B Management",
        shortDescription: "Advanced antiviral therapy to control and monitor chronic HBV.",
        fullDescription: "Chronic Hepatitis B requires life-long monitoring and precision antiviral therapy. Our hepatology specialists use advanced viral load testing (HBV DNA) and non-invasive liver scans (FibroScan) to monitor liver health. We provide the latest antiviral medications to suppress the virus, prevent liver damage, and reduce the risk of cirrhosis.",
        features: ["HBV DNA Viral Loading","FibroScan Liver Audit","Advanced Antiviral Meds","Liver Function Screening"],
        benefits: ["Prevents Liver Cirrhosis","Suppresses Viral Activity","Reduces Cancer Risk","High Quality of Life"]
    },
    {
        id: "t-381",
        slug: "high-creatinine-levels-causes",
        parentServiceSlug: "nephrology",
        title: "high creatinine levels causes",
        shortDescription: "Comprehensive care and treatment for high creatinine levels causes....",
        fullDescription: "Comprehensive care and treatment for high creatinine levels causes.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-384",
        slug: "holter-monitor-test",
        parentServiceSlug: "cardiology",
        title: "Holter Monitor Test",
        shortDescription: "Continuous 24-48 hour ECG monitoring for detailed rhythm analysis.",
        fullDescription: "A Holter monitor is a portable device that records your heart's electrical activity continuously for 24 to 48 hours. This test is essential for capturing transient heart rhythm issues that a standard ECG might miss, helping our cardiologists diagnose palpitations, unexplained dizziness, or 'silent' arrhythmias.",
        features: ["Extended Rhythm Capture","Portable HD Recording","Symptom-Rhythm Correlation","Digital Interpretation Tech"],
        benefits: ["Captures Transient Issues","Highly Accurate Diagnosis","Non-Invasive and Painless","Guided Treatment Planning"]
    },
    {
        id: "t-385",
        slug: "hydrocele-surgery-cost",
        parentServiceSlug: "urology",
        title: "hydrocele surgery cost",
        shortDescription: "Comprehensive care and treatment for hydrocele surgery cost....",
        fullDescription: "Comprehensive care and treatment for hydrocele surgery cost.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-386",
        slug: "hypertension-control-diet",
        parentServiceSlug: "cardiology",
        title: "Hypertension Control & Diet",
        shortDescription: "Nutrition-led strategies to lower blood pressure and protect your heart.",
        fullDescription: "High blood pressure is a leading risk factor for stroke and heart disease. Our clinical dietary plans focus on salt reduction (DASH diet), potassium-rich foods, and weight management. Combined with medical therapy, this nutritional approach helps achieve and maintain healthy blood pressure levels naturally.",
        features: ["DASH Diet Planning","Sodium Intake Audit","Metabolic Weight Support","Clinical Nutrition Tracking"],
        benefits: ["Lowers Stroke Risk","Protects Kidney Function","Reduces Medication Needs","Holistic Heart Health"]
    },
    {
        id: "t-387",
        slug: "immediate-load-implants",
        parentServiceSlug: "dentistry",
        title: "Immediate Load Implants",
        shortDescription: "Get your new smile in just one day with 'Same-Day' implants.",
        fullDescription: "Immediate load implants, also known as 'Teeth-in-a-Day', allow for the placement of a temporary restoration on the same day as the implant surgery. This advanced technique eliminates the months-long waiting period, providing immediate functional and aesthetic benefits while the final osseointegration occurs.",
        features: ["Same-Day Temporary Crowns","Immediate Aesthetic Result","Precision Digital Planning","Single-Visit Surgical Phase"],
        benefits: ["No Waiting Period","Immediate Confidence","Restores Function Instantly","Minimizes Treatment Time"]
    },
    {
        id: "t-388",
        slug: "immunotherapy-treatment-options",
        parentServiceSlug: "oncology",
        title: "immunotherapy treatment options",
        shortDescription: "Comprehensive care and treatment for immunotherapy treatment options....",
        fullDescription: "Comprehensive care and treatment for immunotherapy treatment options.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-389",
        slug: "implant-aftercare-instructions",
        parentServiceSlug: "dentistry",
        title: "Implant Aftercare Instructions",
        shortDescription: "Crucial steps to ensure the long-term success of your dental implant.",
        fullDescription: "Proper aftercare is vital for the success of your dental implant. Our clinical guide covers immediate post-operative care, dietary recommendations during the healing phase, and long-term maintenance protocols including specialized flossing and clinical hygiene visits to prevent peri-implantitis.",
        features: ["Post-Op Hygiene Kit","Personalized Care Schedule","Dietary Management Plan","Implant Health Monitoring"],
        benefits: ["Enhanced Integration","Prevents Infection","Maximizes Implant Lifespan","Safe Healing Process"]
    },
    {
        id: "t-390",
        slug: "implant-cost-in-vellore",
        parentServiceSlug: "dentistry",
        title: "Dental Implant Cost in Vellore",
        shortDescription: "Transparent pricing guide for high-quality dental restorations.",
        fullDescription: "The cost of dental implants in Vellore depends on several factors, including the implant brand (e.g., Straumann, Nobel Biocare), bone density requirements, and the type of final crown. We provide transparent, all-inclusive pricing packages with financing options to make advanced restorations accessible.",
        features: ["Premium Global Brands","Flexible Finance Plans","All-Inclusive Packaging","Detailed Price Breakdowns"],
        benefits: ["Affordable High-End Care","No Hidden Fees","Quality Assurance","Value-Driven Healthcare"]
    },
    {
        id: "t-391",
        slug: "implant-vs-bridge-comparison",
        parentServiceSlug: "dentistry",
        title: "Dental Implant vs Bridge",
        shortDescription: "Choosing the best solution for your missing teeth.",
        fullDescription: "While bridges are a traditional solution for missing teeth, implants offer a superior alternative by preserving adjacent teeth and preventing jawbone loss. Our comparison guide helps you understand the long-term health benefits, durability, and cost-effectiveness of each option for your unique situation.",
        features: ["Bio-Mechanic Analysis","Bone Health Comparison","Durability Assessments","Conservative Dentistry Map"],
        benefits: ["Preserves Natural Teeth","Stops Bone Loss","Superior Longevity","Natural Bite Function"]
    },
    {
        id: "t-392",
        slug: "implant-warranty-policy",
        parentServiceSlug: "dentistry",
        title: "Dental Implant Warranty Policy",
        shortDescription: "Our commitment to the long-term success of your restoration.",
        fullDescription: "We stand behind our dental implants with a comprehensive warranty policy. This coverage ensures that your investment is protected against clinical failure or material defects, provided regular maintenance protocols and hygiene visits are followed as prescribed by our implantologists.",
        features: ["Material Defect Coverage","Clinical Success Guarantee","Transferable Warranties","Global Brand Partnering"],
        benefits: ["Protected Investment","Confidence in Quality","Long-Term Support","Worry-Free Restorations"]
    },
    {
        id: "t-394",
        slug: "inflammatory-bowel-disease-ibd-care",
        parentServiceSlug: "gastroenterology",
        title: "IBD Comprehensive Care",
        shortDescription: "Expert management of Ulcerative Colitis and Crohn's disease.",
        fullDescription: "Inflammatory Bowel Disease (IBD) requires specialized, high-intensity clinical care. We provide a full spectrum of treatments for Ulcerative Colitis and Crohn's, including advanced immunomodulators, biological drugs, and targeted nutritional support to induce and maintain mucosal healing and prevent disease complications.",
        features: ["Mucosal Healing Monitoring","Advanced Biological Therapy","Nutritional Gastroenterology","Transition of Care Support"],
        benefits: ["Reduces Intestinal Damage","Improves Long-Term Outcomes","Significantly Less Flare-Ups","Comprehensive GI Support"]
    },
    {
        id: "t-395",
        slug: "invisalign-treatment-guide",
        parentServiceSlug: "dentistry",
        title: "Invisalign Treatment Guide",
        shortDescription: "The clear alternative to metal braces for a discreet smile transformation.",
        fullDescription: "Invisalign uses a series of custom-made, clear plastic aligners to gradually shift your teeth into position. This removable and nearly invisible solution allows you to eat your favorite foods and maintain easy oral hygiene, making it the preferred choice for adults and teens seeking aesthetic orthodontics.",
        features: ["Clear SmartTrack Material","Removable For Eating/Cleaning","iTero 3D Digital Scanning","Predictable Result Previews"],
        benefits: ["Virtually Invisible","Superior Comfort","Better Oral Hygiene","No Emergency Appointments"]
    },
    {
        id: "t-396",
        slug: "irritable-bowel-syndrome-ibs-relief",
        parentServiceSlug: "gastroenterology",
        title: "IBS Relief & Management",
        shortDescription: "Personalized clinical strategies to manage chronic digestive discomfort.",
        fullDescription: "Irritable Bowel Syndrome (IBS) requires a multi-faceted clinical approach. We provide personalized management plans focusing on dietary triggers, stress management, and targeted medications to alleviate symptoms like bloating, abdominal pain, and irregular bowel habits, helping you regain control over your digestive health.",
        features: ["Dietary Trigger Analysis (FODMAP)","Microbiome Health Support","Stress Gut-Axis Management","Targeted Symptom Medication"],
        benefits: ["Reduces Chronic Bloating","Eliminates Abdominal Pain","Regulates Bowel Function","Significant Life Quality Improvement"]
    },
    {
        id: "t-397",
        slug: "joint-pain-relief-injections",
        parentServiceSlug: "orthopaedics",
        title: "Joint Pain Relief Injections",
        shortDescription: "Non-surgical pain management through advanced cushioning and lubrication.",
        fullDescription: "We offer specialized intra-articular injections including Viscosupplementation (Hyaluronic Acid) and Corticosteroids to manage joint pain. These treatments provide significant relief from arthritis symptoms by reducing inflammation and restoring joint lubrication, often delaying the need for surgical intervention.",
        features: ["Hyaluronic Acid Cushioning","Anti-Inflammatory Steroids","Ultrasound-Guided Precision","Quick Outpatient Procedure"],
        benefits: ["Immediate Pain Reduction","Improved Joint Mobility","Non-Surgical Relief","Delays Joint Surgery"]
    },
    {
        id: "t-398",
        slug: "kidney-biopsy-procedure",
        parentServiceSlug: "nephrology",
        title: "kidney biopsy procedure",
        shortDescription: "Comprehensive care and treatment for kidney biopsy procedure....",
        fullDescription: "Comprehensive care and treatment for kidney biopsy procedure.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-399",
        slug: "kidney-diet-plan",
        parentServiceSlug: "nephrology",
        title: "kidney diet plan",
        shortDescription: "Comprehensive care and treatment for kidney diet plan....",
        fullDescription: "Comprehensive care and treatment for kidney diet plan.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-401",
        slug: "kidney-stone-prevention-tips",
        parentServiceSlug: "nephrology",
        title: "kidney stone prevention tips",
        shortDescription: "Comprehensive care and treatment for kidney stone prevention tips....",
        fullDescription: "Comprehensive care and treatment for kidney stone prevention tips.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-402",
        slug: "kidney-transplant-preparation",
        parentServiceSlug: "nephrology",
        title: "kidney transplant preparation",
        shortDescription: "Comprehensive care and treatment for kidney transplant preparation....",
        fullDescription: "Comprehensive care and treatment for kidney transplant preparation.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-403",
        slug: "knee-arthroscopy-recovery",
        parentServiceSlug: "orthopaedics",
        title: "Knee Arthroscopy Recovery",
        shortDescription: "Personalized rehabilitation programs after keyhole knee surgery.",
        fullDescription: "Post-operative recovery is a critical component of successful knee arthroscopy. We provide tailored physiotherapy protocols focused on reducing swelling, restoring full range of motion, and strengthening the supporting muscles. Our goal is to return you to your daily activities and sports safely and efficiently.",
        features: ["Phased Physical Therapy","Cold Compression Therapy","Range-of-Motion Tracking","Expert Rehab Supervision"],
        benefits: ["Faster Return to Work","Reduced Post-Op Stiffness","Strength Restoration","Safe Activity Resumption"]
    },
    {
        id: "t-404",
        slug: "knee-cartilage-repair",
        parentServiceSlug: "orthopaedics",
        title: "Knee Cartilage Repair",
        shortDescription: "Advanced techniques to restore joint surfaces and prevent arthritis.",
        fullDescription: "Damaged knee cartilage can lead to chronic pain and eventually osteoarthritis. We specialize in cartilage restoration techniques such as Microfracture, Autologous Chondrocyte Implantation (ACI), and OATS. These procedures aim to 'regrow' or replace lost cartilage, preserving the natural joint and restoring smooth movement.",
        features: ["Microfracture Technique","Cartilage Resurfacing Tech","OATS Procedure Options","Minimally Invasive Entry"],
        benefits: ["Prevents Knee Arthritis","Reduces Joint Friction","Significant Pain Relief","Preserves Natural Joint"]
    },
    {
        id: "t-407",
        slug: "laser-gum-treatment",
        parentServiceSlug: "dentistry",
        title: "Laser Gum Treatment",
        shortDescription: "Advanced laser therapy for precise and painless periodontal care.",
        fullDescription: "Laser gum treatment (LANAP) utilizes specialized light energy to remove diseased tissue and kill bacteria within gum pockets without the need for scalpels or sutures. This minimally invasive approach promotes faster healing, reduces bleeding, and stimulates natural tissue regeneration for superior periodontal health.",
        features: ["Biolase Laser Technology","Suture-Free Procedure","Microbial Decontamination","Tissue-Specific Wavelengths"],
        benefits: ["Pain-Free Experience","Minimal Post-op Swelling","Faster Recovery Time","Preserves Healthy Tissue"]
    },
    {
        id: "t-409",
        slug: "laser-prostatectomy-holep",
        parentServiceSlug: "nephrology",
        title: "laser prostatectomy holep",
        shortDescription: "Comprehensive care and treatment for laser prostatectomy holep....",
        fullDescription: "Comprehensive care and treatment for laser prostatectomy holep.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-410",
        slug: "laser-root-canal-benefits",
        parentServiceSlug: "dentistry",
        title: "Laser Root Canal Benefits",
        shortDescription: "Why laser-assisted endodontics is the gold standard in tooth preservation.",
        fullDescription: "Laser-assisted root canal treatment offers unparalleled disinfection of the root canal system. The laser energy reaches deep into lateral canals that traditional tools cannot access, ensuring a 99.9% bacterial kill rate. This results in higher success rates, less post-operative discomfort, and significantly faster treatment times.",
        features: ["Deep Canal Disinfection","Acoustic Stream Cleaning","High Success Rate (>98%)","Reduced Treatment Time"],
        benefits: ["Superior Disinfection","Less Post-Op Sensitivity","Increased Tooth Longevity","Quiet, Drill-Free Tech"]
    },
    {
        id: "t-411",
        slug: "lipoma-excision-surgery",
        parentServiceSlug: "general-surgery",
        title: "lipoma excision surgery",
        shortDescription: "Comprehensive care and treatment for lipoma excision surgery....",
        fullDescription: "Comprehensive care and treatment for lipoma excision surgery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-412",
        slug: "liver-cirrhosis-care-plan",
        parentServiceSlug: "gastroenterology",
        title: "Liver Cirrhosis Care Plan",
        shortDescription: "Comprehensive clinical care to manage and slow liver scarring.",
        fullDescription: "Living with liver cirrhosis requires a highly coordinated, multi-faceted care plan. We focus on managing complications like ascites and jaundice while implementing nutritional and medical strategies to preserve remaining liver function. Our goal is to stabilize your health and significantly improve your long-term survival and comfort.",
        features: ["Ascites Management Tech","Clinical Nutritional Scaling","Portal Hypertension Audit","Liver Transplant Evaluation"],
        benefits: ["Prevents Clinical Decompensation","Improves Long-Term Survival","Reduces Hospital Stays","Complete Hepatology Support"]
    },
    {
        id: "t-413",
        slug: "lung-cancer-early-signs",
        parentServiceSlug: "oncology",
        title: "lung cancer early signs",
        shortDescription: "Comprehensive care and treatment for lung cancer early signs....",
        fullDescription: "Comprehensive care and treatment for lung cancer early signs.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-415",
        slug: "menopause-symptom-relief",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "menopause symptom relief",
        shortDescription: "Comprehensive care and treatment for menopause symptom relief....",
        fullDescription: "Comprehensive care and treatment for menopause symptom relief.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-416",
        slug: "metal-braces-guide",
        parentServiceSlug: "dentistry",
        title: "Metal Braces Guide",
        shortDescription: "The most effective and durable solution for complex orthodontic issues.",
        fullDescription: "Traditional metal braces remain the most versatile tool for correcting complex misalignments and bite issues. Made from high-grade stainless steel, modern metal braces are smaller, flatter, and more comfortable than ever. They offer precise control over tooth movement, ensuring a perfect functional and aesthetic result.",
        features: ["High-Grade Stainless Steel","Low-Profile Brackets","Customizable Elastic Colors","Precise Torque Control"],
        benefits: ["Corrects Severe Crowding","Most Cost-Effective Option","Extremely Durable","Predictable Excellence"]
    },
    {
        id: "t-418",
        slug: "multiple-sclerosis-treatment",
        parentServiceSlug: "neurology",
        title: "multiple sclerosis treatment",
        shortDescription: "Comprehensive care and treatment for multiple sclerosis treatment....",
        fullDescription: "Comprehensive care and treatment for multiple sclerosis treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-419",
        slug: "myasthenia-gravis-care",
        parentServiceSlug: "neurology",
        title: "myasthenia gravis care",
        shortDescription: "Comprehensive care and treatment for myasthenia gravis care....",
        fullDescription: "Comprehensive care and treatment for myasthenia gravis care.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-420",
        slug: "myomectomy-surgery-cost",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "myomectomy surgery cost",
        shortDescription: "Comprehensive care and treatment for myomectomy surgery cost....",
        fullDescription: "Comprehensive care and treatment for myomectomy surgery cost.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-421",
        slug: "ncs-emg-test-guide",
        parentServiceSlug: "neurology",
        title: "ncs emg test guide",
        shortDescription: "Comprehensive care and treatment for ncs emg test guide....",
        fullDescription: "Comprehensive care and treatment for ncs emg test guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-422",
        slug: "nephrotic-syndrome-cure",
        parentServiceSlug: "nephrology",
        title: "nephrotic syndrome cure",
        shortDescription: "Comprehensive care and treatment for nephrotic syndrome cure....",
        fullDescription: "Comprehensive care and treatment for nephrotic syndrome cure.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-423",
        slug: "neuropathy-pain-relief",
        parentServiceSlug: "neurology",
        title: "neuropathy pain relief",
        shortDescription: "Comprehensive care and treatment for neuropathy pain relief....",
        fullDescription: "Comprehensive care and treatment for neuropathy pain relief.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-425",
        slug: "osteoporosis-management-plan",
        parentServiceSlug: "orthopaedics",
        title: "Osteoporosis Management Plan",
        shortDescription: "Comprehensive bone health strategy to prevent fractures and bone loss.",
        fullDescription: "Osteoporosis is a 'silent' disease that weakens bones over time. Our management plan includes Bone Mineral Density (BMD) testing, targeted medical therapy (Bisphosphonates), and customized exercise programs. We focus on strengthening the skeletal system to prevent high-risk fractures in the spine and hip.",
        features: ["DEXA Bone Density Scan","Medical Bone Strengthening","Fall Prevention Coaching","Nutritional Bone Support"],
        benefits: ["Reduces Fracture Risk","Improves Bone Quality","Enhanced Quality of Life","Proactive Health Monitoring"]
    },
    {
        id: "t-426",
        slug: "ovarian-cyst-laparoscopy",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "ovarian cyst laparoscopy",
        shortDescription: "Comprehensive care and treatment for ovarian cyst laparoscopy....",
        fullDescription: "Comprehensive care and treatment for ovarian cyst laparoscopy.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-427",
        slug: "overactive-bladder-relief",
        parentServiceSlug: "nephrology",
        title: "overactive bladder relief",
        shortDescription: "Comprehensive care and treatment for overactive bladder relief....",
        fullDescription: "Comprehensive care and treatment for overactive bladder relief.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-428",
        slug: "overbite-correction",
        parentServiceSlug: "dentistry",
        title: "Overbite Correction",
        shortDescription: "Specialized orthodontic care to fix deep bites and improve jaw health.",
        fullDescription: "An overbite (deep bite) occurs when the upper front teeth excessively overlap the lower teeth, potentially causing jaw pain and tooth wear. We provide tailored correction strategies using braces, clear aligners, or functional appliances to bring the jaws into proper alignment and create a balanced, beautiful profile.",
        features: ["Deep Bite Diagnosis","Functional Appliances","Bite Plane Appliances","Digital Profile Analysis"],
        benefits: ["Prevents Tooth Wear","Eliminates Jaw Locking","Improves Facial Profile","Enhanced Bite Function"]
    },
    {
        id: "t-432",
        slug: "pancreatitis-treatment-steps",
        parentServiceSlug: "gastroenterology",
        title: "Pancreatitis Treatment Steps",
        shortDescription: "Intensive clinical care for acute and chronic pancreatic inflammation.",
        fullDescription: "Pancreatitis management focuses on specialized intestinal rest, aggressive hydration, and pain control. For chronic cases, we provide advanced interventions like ERCP for stone removal or duct drainage and enzyme replacement therapy to ensure optimal digestion and nutrient absorption during recovery.",
        features: ["ERCP Stone Removal","Pancreatic Enzyme Therapy","Advanced Nutritional Support","Pain Management Protocols"],
        benefits: ["Stops Clinical Inflammation","Restores Digestive Function","Prevents Recurrent Episodes","Comprehensive Recovery Guide"]
    },
    {
        id: "t-435",
        slug: "pediatric-cardiology-care",
        parentServiceSlug: "cardiology",
        title: "Pediatric Cardiology Care",
        shortDescription: "Specialized heart care for infants, children, and adolescents.",
        fullDescription: "Children's hearts require specialized expertise. We provide comprehensive care for congenital heart defects, heart murmurs, and rhythm disorders in young patients. Our pediatric cardiology team combines advanced diagnostics like Pediatric Echo with a compassionate, family-centered approach to ensure the best start for your child's heart health.",
        features: ["Pediatric Echocardiography","Congenital Defect Screening","Fetal Echo Monitoring","Child-Centric Cardiac Care"],
        benefits: ["Early Defect Detection","Specialized Pediatric Care","Family-Focused Support","Optimal Developmental Outcomes"]
    },
    {
        id: "t-436",
        slug: "peptic-ulcer-disease-treatment",
        parentServiceSlug: "gastroenterology",
        title: "Peptic Ulcer Treatment",
        shortDescription: "Advanced clinical healing for stomach and duodenal ulcers.",
        fullDescription: "Peptic ulcers require precise diagnosis and targeted healing. We focus on identifying the root cause, such as H. pylori infection or NSAID use, and provide clinical-strength medical therapy to neutralize acid and promote tissue repair, preventing complications like bleeding or perforation.",
        features: ["H. Pylori Diagnostic Testing","Endoscopic Ulcer Monitoring","Advanced Acid Suppression","Nutrition-Led Healing Plan"],
        benefits: ["Rapid Pain Relief","Heals Esophageal Lining","Prevents Internal Bleeding","Long-Term Recurrence Control"]
    },
    {
        id: "t-437",
        slug: "periodontitis-stages",
        parentServiceSlug: "dentistry",
        title: "Stages of Periodontitis",
        shortDescription: "Understanding the progression of advanced gum disease.",
        fullDescription: "Periodontitis progresses through four stages: 1) Initial (early bone loss), 2) Moderate (measurable attachment loss), 3) Severe (potential tooth loss), and 4) Advanced (risk of losing all teeth). We provide specialized interventions for each stage, focusing on stopping the disease progression and restoring foundational stability.",
        features: ["Gingival Attachment Mapping","Bone Density Assessment","Laser Debridement Therapy","Customized Scaling & Planing"],
        benefits: ["Saves Natural Teeth","Prevents Systemic Inflammation","Restores Bite Stability","Healthy Gum Regeneration"]
    },
    {
        id: "t-438",
        slug: "pet-scan-for-cancer",
        parentServiceSlug: "oncology",
        title: "pet scan for cancer",
        shortDescription: "Comprehensive care and treatment for pet scan for cancer....",
        fullDescription: "Comprehensive care and treatment for pet scan for cancer.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-439",
        slug: "phimosis-treatment-options",
        parentServiceSlug: "nephrology",
        title: "phimosis treatment options",
        shortDescription: "Comprehensive care and treatment for phimosis treatment options....",
        fullDescription: "Comprehensive care and treatment for phimosis treatment options.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-440",
        slug: "pilonidal-sinus-laser-surgery",
        parentServiceSlug: "general-surgery",
        title: "pilonidal sinus laser surgery",
        shortDescription: "Comprehensive care and treatment for pilonidal sinus laser surgery....",
        fullDescription: "Comprehensive care and treatment for pilonidal sinus laser surgery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-441",
        slug: "polycystic-kidney-disease-management",
        parentServiceSlug: "nephrology",
        title: "polycystic kidney disease management",
        shortDescription: "Comprehensive care and treatment for polycystic kidney disease management....",
        fullDescription: "Comprehensive care and treatment for polycystic kidney disease management.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-442",
        slug: "preventive-heart-checkup",
        parentServiceSlug: "cardiology",
        title: "Preventive Heart Checkup",
        shortDescription: "Proactive screening to identify and manage cardiac risk factors early.",
        fullDescription: "Prevention is better than cure. Our Comprehensive Heart Checkup includes a battery of tests—ECG, Treadmill Test (TMT), Echocardiogram, and Lipid Profiling—to assess your overall cardiac risk. We provide a detailed risk scorecard and personalized preventive roadmap to help you maintain a healthy heart for years to come.",
        features: ["Cardiac Risk Scoring","Lipid Balance Analysis","Treadmill Stress Testing","Detailed Preventive Roadmap"],
        benefits: ["Identifies Hidden Risks","Prevents Major Heart Events","Peace of Mind","Guided Heart Lifestyle"]
    },
    {
        id: "t-443",
        slug: "prostate-cancer-screening",
        parentServiceSlug: "urology",
        title: "prostate cancer screening",
        shortDescription: "Comprehensive care and treatment for prostate cancer screening....",
        fullDescription: "Comprehensive care and treatment for prostate cancer screening.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-444",
        slug: "prostate-cancer-treatment-options",
        parentServiceSlug: "urology",
        title: "prostate cancer treatment options",
        shortDescription: "Comprehensive care and treatment for prostate cancer treatment options....",
        fullDescription: "Comprehensive care and treatment for prostate cancer treatment options.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-446",
        slug: "proteinuria-treatment-options",
        parentServiceSlug: "nephrology",
        title: "proteinuria treatment options",
        shortDescription: "Comprehensive care and treatment for proteinuria treatment options....",
        fullDescription: "Comprehensive care and treatment for proteinuria treatment options.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-447",
        slug: "radiation-therapy-guide",
        parentServiceSlug: "oncology",
        title: "radiation therapy guide",
        shortDescription: "Comprehensive care and treatment for radiation therapy guide....",
        fullDescription: "Comprehensive care and treatment for radiation therapy guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-448",
        slug: "re-root-canal-treatment",
        parentServiceSlug: "dentistry",
        title: "Re-Root Canal Treatment",
        shortDescription: "Specialized care for persistent infections in previously treated teeth.",
        fullDescription: "Sometimes a previously treated tooth fails to heal or becomes re-infected due to complex canal anatomy. Our endodontists specialize in 'retreatment', which involves removing the old filling material, meticulously re-cleaning and disinfecting the canals using advanced laser technology, and resealing the tooth for long-term success.",
        features: ["Microscopic Endodontics","Laser Disinfection (PIPS)","Digital Diagnostic Imaging","Bioceramic Sealing Tech"],
        benefits: ["Saves Damaged Teeth","Eliminates Deep Infection","Resolves Chronic Pain","Avoids Tooth Extraction"]
    },
    {
        id: "t-449",
        slug: "retainer-after-braces",
        parentServiceSlug: "dentistry",
        title: "Retainer After Braces",
        shortDescription: "Protecting your investment and maintaining your new smile.",
        fullDescription: "The 'retention phase' is the most critical part of orthodontic treatment. Retainers prevent teeth from shifting back to their original positions. We provide various options, including fixed (bonded) and removable (Essix or Hawley) retainers, tailored to your lifestyle to ensure your smile remains perfect for a lifetime.",
        features: ["Fixed Bonded Retainers","Clear Essix Aligners","Durable Hawley Retainers","Digital Impression Scanning"],
        benefits: ["Prevents Relapse","Long-Term Alignment","Custom Fit Comfort","Discreet Retention Options"]
    },
    {
        id: "t-450",
        slug: "root-canal-aftercare",
        parentServiceSlug: "dentistry",
        title: "Root Canal Aftercare",
        shortDescription: "Essential steps for a smooth recovery and long-lasting results.",
        fullDescription: "Post-endodontic success depends on proper aftercare. We provide detailed guidelines on managing temporary sensitivity, avoiding hard foods initially, and the importance of timely permanent crown placement. Our team follows up with you to ensure the tooth is healing perfectly and remains symptom-free.",
        features: ["Post-Op Care Guide","24/7 Clinical Support","Temporary Filling Care","Follow-up X-ray Checks"],
        benefits: ["Pain-Free Healing","Prevents Fractures","Informed Recovery","Long-Term Stability"]
    },
    {
        id: "t-451",
        slug: "root-canal-cost-breakdown",
        parentServiceSlug: "dentistry",
        title: "Root Canal Cost Breakdown",
        shortDescription: "Transparent and value-driven pricing for endodontic care.",
        fullDescription: "The cost of a root canal varies based on the tooth type (incisor vs. molar) and the complexity of the canal system. Our transparent pricing includes the digital X-rays, local anesthesia, specialized instrumentation, and laser disinfection. We offer comprehensive packages that include the final restorative crown.",
        features: ["Tooth-Specific Pricing","All-Inclusive Packaging","Transparent Estimates","Flexible Billing Options"],
        benefits: ["No Surprise Costs","Affordable Specialized Care","Maximized Insurance Benefit","Clarity in Planning"]
    },
    {
        id: "t-452",
        slug: "root-canal-crown-needed",
        parentServiceSlug: "dentistry",
        title: "Why a Crown is Needed After Root Canal",
        shortDescription: "Restoring strength and protection to your treated tooth.",
        fullDescription: "A root canal removes the tooth's blood supply, making it more brittle over time. A permanent crown is essential to provide structural reinforcement, prevent fractures, and seal the tooth from future bacterial leakage. We offer high-strength Zirconia and E-Max crowns for maximum durability and aesthetics.",
        features: ["Zirconia Strength Crowns","E-Max Aesthetic Porcelain","Full-Coverage Protection","CAD/CAM Precision Fit"],
        benefits: ["Prevents Tooth Fracture","Restores Chewing Strength","Natural Look & Feel","Long-Term Protection"]
    },
    {
        id: "t-453",
        slug: "root-canal-during-pregnancy",
        parentServiceSlug: "dentistry",
        title: "Root Canal During Pregnancy",
        shortDescription: "Safe and essential dental care for expecting mothers.",
        fullDescription: "Dental infections can impact pregnancy health, making timely treatment essential. We follow strict safety protocols, including lead shielding for X-rays and pregnancy-safe anesthetics, as recommended by obstetric associations. The second trimester is usually the optimal time for essential endodontic procedures.",
        features: ["Double Lead Shielding","Pregnancy-Safe Anesthetics","OB-GYN Coordination","Comfort-Focus Positioning"],
        benefits: ["Reduces Systemic Risk","Painless Procedure","Peace of Mind","Protects Mother & Baby"]
    },
    {
        id: "t-454",
        slug: "root-canal-failure-symptoms",
        parentServiceSlug: "dentistry",
        title: "Root Canal Failure Symptoms",
        shortDescription: "Recognizing when a previous treatment needs clinical attention.",
        fullDescription: "While root canals have high success rates, symptoms like persistent pain, localized swelling, or a 'pimple' on the gums (sinus tract) may indicate failure. Our endodontists use high-resolution scans to identify hidden canals or fractures and provide specialized retreatment to save the tooth.",
        features: ["Digital Radiography","Microscopic Inspection","CBCT Bone Scanning","Endodontic Expertise"],
        benefits: ["Early Problem Diagnosis","Precision Retreatment","Avoids Unnecessary Extraction","Chronic Infection Relief"]
    },
    {
        id: "t-455",
        slug: "root-canal-for-children",
        parentServiceSlug: "dentistry",
        title: "Root Canal for Children (Pulpectomy)",
        shortDescription: "Saving primary teeth to ensure proper adult tooth development.",
        fullDescription: "A 'baby root canal' (pulpectomy) is performed on primary teeth to stop infection and prevent premature loss, which can cause alignment issues for adult teeth. We use child-size instruments and gentle techniques to ensure your child remains comfortable and calm throughout the procedure.",
        features: ["Gentle Pediatric Care","Child-Size Bio-Fillings","Calming Clinical Environment","Preventive Spacers"],
        benefits: ["Maintains Proper Alignment","Prevents Adult Canal Damage","Eliminates Childhood Pain","Positive Dental Experience"]
    },
    {
        id: "t-456",
        slug: "root-canal-pain-during-treatment",
        parentServiceSlug: "dentistry",
        title: "Root Canal Pain During Treatment",
        shortDescription: "Dispelling myths with modern painless endodontics.",
        fullDescription: "Contrary to popular belief, a modern root canal procedure is designed to stop pain, not cause it. With advanced local anesthetics and gentle techniques, the sensation is similar to a routine filling. We prioritize your comfort and ensure you are completely numb and relaxed throughout the treatment.",
        features: ["Precision Anesthesia Tech","Gentle Filling Tech","Noise-Canceling Support","Relaxation Environment"],
        benefits: ["Virtually Painless","Stress-Free Experience","Immediate Relief","Comfort-Centric Care"]
    },
    {
        id: "t-457",
        slug: "root-canal-vs-extraction",
        parentServiceSlug: "dentistry",
        title: "Root Canal vs Tooth Extraction",
        shortDescription: "Making the right choice to preserve your natural smile.",
        fullDescription: "Whenever possible, we recommend saving your natural tooth through a root canal rather than extracting it. A natural tooth is always superior to any prosthetic for chewing and jawbone health. We help you weigh the long-term benefits of tooth preservation against the immediate cost of extraction and subsequent replacement options like implants.",
        features: ["Tooth Salvage Audit","Bone Loss Risk Analysis","Longevity Comparison","Replacement Cost Analysis"],
        benefits: ["Preserves Natural Bite","Avoids Jawbone Loss","Lower Long-Term Cost","Natural Aesthetics"]
    },
    {
        id: "t-458",
        slug: "rotator-cuff-repair-surgery",
        parentServiceSlug: "orthopaedics",
        title: "Rotator Cuff Repair Surgery",
        shortDescription: "Minimally invasive restoration of shoulder strength and mobility.",
        fullDescription: "A torn rotator cuff can significantly limit your arm's function and cause severe pain. Our surgeons utilize advanced arthroscopic techniques to reattach the torn tendons to the bone using specialized anchors. This minimally invasive approach reduces recovery time and helps restore full overhead reach and strength.",
        features: ["Arthroscopic Suture Anchors","Micro-Incision Tech","PRP Graft Augmentation Option","Day-Care Surgical Flow"],
        benefits: ["Significant Pain Reduction","Restores Overhead Strength","Faster Return to Activity","Small Cosmetic Incisions"]
    },
    {
        id: "t-459",
        slug: "sebaceous-cyst-removal",
        parentServiceSlug: "general-surgery",
        title: "sebaceous cyst removal",
        shortDescription: "Comprehensive care and treatment for sebaceous cyst removal....",
        fullDescription: "Comprehensive care and treatment for sebaceous cyst removal.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-460",
        slug: "shoulder-arthroscopy-guide",
        parentServiceSlug: "orthopaedics",
        title: "Shoulder Arthroscopy Guide",
        shortDescription: "Precise keyhole surgery for diagnosing and treating shoulder issues.",
        fullDescription: "Shoulder arthroscopy allows our specialists to view and treat various shoulder conditions like impingement, labral tears, and instability through tiny incisions. Using a high-definition arthroscope, we can perform complex repairs with minimal tissue disruption, leading to superior clinical outcomes and faster healing.",
        features: ["HD Fiber-Optic Visualization","Labral Repair Specialization","Biceps Tenodesis Tech","Minimally Invasive Debridement"],
        benefits: ["Less Post-Op Pain","Low Risk of Infection","Rapid Mobility Restoration","Highly Accurate Diagnosis"]
    },
    {
        id: "t-461",
        slug: "single-sitting-root-canal",
        parentServiceSlug: "dentistry",
        title: "Single-Sitting Root Canal",
        shortDescription: "Efficient and painless tooth preservation in a single clinical visit.",
        fullDescription: "For appropriate clinical cases, we offer single-sitting root canal treatment. Using advanced rotary files and laser disinfection, we can complete the cleaning, shaping, and sealing of the canal system in under 60 minutes. This reduces clinic visits and provides immediate relief from dental pain while ensuring a high success rate.",
        features: ["Advanced Rotary Files","Electronic Apex Locators","Single-Sitting Disinfection","Rapid Recovery Protocol"],
        benefits: ["Saves Time","Immediate Pain Relief","High Success Rate","Fewer Anesthesia Cycles"]
    },
    {
        id: "t-462",
        slug: "single-tooth-implant-cost",
        parentServiceSlug: "dentistry",
        title: "Single Tooth Implant Cost",
        shortDescription: "A permanent and aesthetic solution for a single missing tooth.",
        fullDescription: "A single tooth implant is the gold standard for restoring a missing tooth without affecting adjacent teeth. Cost varies based on the choice of titanium post and the aesthetic quality of the final porcelain crown. We provide high-end, durable options that look and feel exactly like your natural tooth.",
        features: ["Custom Abutment Design","E-Max Porcelain Crown","Titanium Post Placement","3D Guided Surgery"],
        benefits: ["Preserves Neighboring Teeth","Restores Natural Function","Lifelong Durability","Flawless Aesthetics"]
    },
    {
        id: "t-463",
        slug: "sinus-lift-before-implants",
        parentServiceSlug: "dentistry",
        title: "Sinus Lift Procedure",
        shortDescription: "Bone grafting to enable successful implants in the upper jaw.",
        fullDescription: "A sinus lift is specialized bone grafting that adds bone to the upper jaw in the molar and premolar areas. This procedure is essential when the sinus is too close to the jaw or there is insufficient bone height for a stable implant. It provides a solid foundation for your permanent restoration.",
        features: ["Sinus Membrane Elevation","Bio-Compatible Bone Graft","Growth Factor Enhancement","Piezosurgery Technology"],
        benefits: ["Enables Upper Implants","Ensures Implant Stability","Restores Bone Volume","Long-Term Success Guide"]
    },
    {
        id: "t-464",
        slug: "sleep-apnea-study",
        parentServiceSlug: "neurology",
        title: "sleep apnea study",
        shortDescription: "Comprehensive care and treatment for sleep apnea study....",
        fullDescription: "Comprehensive care and treatment for sleep apnea study.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-465",
        slug: "smile-makeover-process",
        parentServiceSlug: "dentistry",
        title: "Smile Makeover Process",
        shortDescription: "A comprehensive digital transformation of your smile aesthetics.",
        fullDescription: "A smile makeover is a custom plan that combines multiple cosmetic procedures—such as veneers, whitening, and contouring—to achieve your ideal smile. We use 'Digital Smile Design' (DSD) to show you a virtual preview of your results, ensuring every detail of your transformation is perfectly planned.",
        features: ["Digital Smile Design (DSD)","Multi-Step Cosmetic Plan","Visual Result Preview","Comprehensive Aesthetic Audit"],
        benefits: ["Enhanced Confidence","Total Smile Transformation","Predictable Outcomes","Tailored Perfection"]
    },
    {
        id: "t-466",
        slug: "spinal-cord-injury-rehab",
        parentServiceSlug: "neurology",
        title: "spinal cord injury rehab",
        shortDescription: "Comprehensive care and treatment for spinal cord injury rehab....",
        fullDescription: "Comprehensive care and treatment for spinal cord injury rehab.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-468",
        slug: "sports-injury-treatment",
        parentServiceSlug: "orthopaedics",
        title: "Sports Injury Treatment",
        shortDescription: "Specialized care for athletes to ensure a safe and rapid return to play.",
        fullDescription: "From ligament tears to stress fractures, our sports medicine team provides comprehensive care for athletic injuries. We combine advanced diagnostics, minimally invasive surgical options, and elite-level rehabilitation to help athletes of all levels return to their peak performance as quickly as possible.",
        features: ["Elite Athletic Rehab","Advanced Biological Therapies","Biomechanical Analysis","Custom Injury Bracing"],
        benefits: ["Optimal Return-to-Play Timing","Prevents Re-Injury","Peak Performance Restoration","Specialized Athlete Focus"]
    },
    {
        id: "t-471",
        slug: "targeted-therapy-for-cancer",
        parentServiceSlug: "oncology",
        title: "targeted therapy for cancer",
        shortDescription: "Comprehensive care and treatment for targeted therapy for cancer....",
        fullDescription: "Comprehensive care and treatment for targeted therapy for cancer.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-472",
        slug: "teeth-contouring-reshaping",
        parentServiceSlug: "dentistry",
        title: "Teeth Contouring & Reshaping",
        shortDescription: "Quickly correcting small chips and uneven edges for a smoother smile.",
        fullDescription: "Teeth contouring (odontoplasty) involves removing tiny amounts of tooth enamel to change the length, shape, or surface of one or more teeth. This painless, single-visit procedure is ideal for correcting minor overlapping, uneven edges, or pointed teeth, resulting in a more harmonious and symmetrical appearance.",
        features: ["Painless Enamel Shaping","Single-Visit Transformation","Precision Finishing Tools","No Anesthesia Required"],
        benefits: ["Immediate Visual Improvement","Self-Confidence Boost","Smoothers Uneven Edges","Conservative Enhancement"]
    },
    {
        id: "t-473",
        slug: "teeth-gaps-treatment",
        parentServiceSlug: "dentistry",
        title: "Teeth Gaps Treatment (Diastema)",
        shortDescription: "Closing gaps to improve both your smile's beauty and health.",
        fullDescription: "Gaps between teeth (diastema) can occur anywhere but are most noticeable between the front teeth. We offer various solutions to close these gaps, including composite bonding for immediate results, porcelain veneers for a durable finish, or clear aligners for a complete orthodontic correction.",
        features: ["Gap-Specific Bonding","Porcelain Veneer Design","Clear Aligner Solutions","Bite Alignment Correction"],
        benefits: ["Complete Smile Closure","Improves Speech & Bite","Prevents Gapped Food Impaction","Confident Smile Results"]
    },
    {
        id: "t-474",
        slug: "teeth-whitening-guide",
        parentServiceSlug: "dentistry",
        title: "Professional Teeth Whitening",
        shortDescription: "Brighten your smile safely with clinical-strength whitening technology.",
        fullDescription: "Our professional teeth whitening provides dramatically brighter results compared to over-the-counter options. We use laser-activated gel that safely penetrates the enamel to break down deep stains from coffee, tea, and aging. The procedure is completed in one hour, providing a significantly whiter and more vibrant smile.",
        features: ["Laser-Activated Whitening","Professional Strength Gel","Sensitivity Guard Protocol","Immediate 6-8 Shade Lift"],
        benefits: ["Dramatically Brighter Smile","Safe Enamel Protection","Fast Single-Visit Result","Long-Lasting Radiance"]
    },
    {
        id: "t-475",
        slug: "testicular-torsion-emergency",
        parentServiceSlug: "nephrology",
        title: "testicular torsion emergency",
        shortDescription: "Comprehensive care and treatment for testicular torsion emergency....",
        fullDescription: "Comprehensive care and treatment for testicular torsion emergency.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-476",
        slug: "thyroid-surgery-guide",
        parentServiceSlug: "general-surgery",
        title: "thyroid surgery guide",
        shortDescription: "Comprehensive care and treatment for thyroid surgery guide....",
        fullDescription: "Comprehensive care and treatment for thyroid surgery guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-477",
        slug: "tmt-test-for-heart",
        parentServiceSlug: "cardiology",
        title: "Treadmill Stress Test (TMT)",
        shortDescription: "Diagnostic exercise test to evaluate heart function under physical stress.",
        fullDescription: "The Treadmill Stress Test (TMT) is a vital tool for diagnosing coronary artery disease. By monitoring your heart's electrical activity (ECG) while you exercise on a treadmill, we can identify abnormal heart rhythms or signs of restricted blood flow that may not be visible while at rest, ensuring a comprehensive cardiac evaluation.",
        features: ["Continuous HD ECG Tracking","Blood Pressure Stress Map","Standardized Bruce Protocol","Expert Cardiologist Supervision"],
        benefits: ["Detects Blockages Early","Evaluates Exercise Fitness","Guided Treatment Roadmap","Peace of Mind for Active Life"]
    },
    {
        id: "t-479",
        slug: "total-shoulder-replacement",
        parentServiceSlug: "orthopaedics",
        title: "Total Shoulder Replacement",
        shortDescription: "Advanced joint replacement for severe arthritis and complex fractures.",
        fullDescription: "When shoulder pain becomes debilitating due to advanced arthritis, total shoulder replacement offers a path to pain-free living. We use the latest prosthetic designs and anatomical or reverse replacement techniques to restore smooth joint movement and improve overall arm function and comfort.",
        features: ["Anatomic & Reverse Options","Low-Friction Prosthetics","3D Surgical Pre-Planning","Dedicated Joint Replacement Wing"],
        benefits: ["Eliminates Chronic Pain","Restores Range of Motion","Long-Lasting Joint Results","Significant Life Quality Boost"]
    },
    {
        id: "t-480",
        slug: "trigger-finger-release",
        parentServiceSlug: "orthopaedics",
        title: "Trigger Finger Release",
        shortDescription: "Simple surgical solution for painful finger locking and stiffness.",
        fullDescription: "Trigger finger causes painful clicking or locking when you bend your finger. Our quick, minimally invasive release procedure involves loosening the tendon sheath to allow for smooth, glide-like movement again. This procedure provides immediate relief and prevents long-term joint stiffness.",
        features: ["Quick Outpatient Procedure","Micro-Incision Release","Immediate Finger Mobility","Local Anesthesia Only"],
        benefits: ["Stops Finger Locking","Immediate Pain Relief","Rapid Hand Function Recovery","High Success Rate"]
    },
    {
        id: "t-481",
        slug: "tubal-ligation-procedure",
        parentServiceSlug: "obstetrics-gynaecology",
        title: "tubal ligation procedure",
        shortDescription: "Comprehensive care and treatment for tubal ligation procedure....",
        fullDescription: "Comprehensive care and treatment for tubal ligation procedure.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-482",
        slug: "ulcerative-colitis-treatment",
        parentServiceSlug: "gastroenterology",
        title: "Ulcerative Colitis Care",
        shortDescription: "Advanced medical and biological therapies for chronic colon health.",
        fullDescription: "Ulcerative Colitis (UC) requires a strategic, long-term clinical approach. We focus on achieving mucosal healing through advanced biological drugs, immunomodulators, and specialized GI nutrition. Our comprehensive monitor program using calprotectin tests ensures we catch flare-ups early and maintain deep clinical remission.",
        features: ["Biological Drug Therapy","Mucosal Healing Tracking","Fecal Calprotectin Audit","Advanced GI Infusion Suite"],
        benefits: ["Reduces Colon Inflammation","Prevents Future Surgeries","Eliminates Chronic Diarrhea","Restores Active Lifestyle"]
    },
    {
        id: "t-483",
        slug: "underbite-treatment",
        parentServiceSlug: "dentistry",
        title: "Underbite Correction",
        shortDescription: "Restoring facial harmony and bite function for lower jaw prominence.",
        fullDescription: "An underbite occurs when the lower teeth protrude beyond the upper teeth. This can lead to jaw strain and wearing of the front teeth. We utilize specialized orthodontic appliances, braces, and sometimes orthognathic surgery coordination to correctly align the jaws and improve both function and facial aesthetics.",
        features: ["Skeletal Growth Modulation","Advanced Braces Systems","Functional Jaw Appliances","Correction Preview Scans"],
        benefits: ["Ideal Facial Symmetry","Improved Chewing Power","Reduces Jaw Pain (TMJ)","Lifetime Dental Health"]
    },
    {
        id: "t-484",
        slug: "upper-gi-endoscopy-prep",
        parentServiceSlug: "gastroenterology",
        title: "Upper GI Endoscopy (EGD)",
        shortDescription: "Advanced diagnostic imaging for stomach and esophageal health.",
        fullDescription: "An Upper GI Endoscopy (EGD) allows for the direct visual examination of the esophagus, stomach, and duodenum. It is the gold standard for diagnosing ulcers, reflux (GERD), and early-stage gastric cancers. Our specialists use high-definition video scopes and gentle sedation to ensure a comfortable and highly accurate diagnostic experience.",
        features: ["HD Video Endoscopy Tech","Narrow Band Imaging (NBI)","Painless Conscious Sedation","Biopsy & Poly Removal Tech"],
        benefits: ["Immediate Visual Diagnosis","Early Cancer Detection","Minimally Invasive Entry","Accurate Ulcer Mapping"]
    },
    {
        id: "t-485",
        slug: "urethral-stricture-repair",
        parentServiceSlug: "nephrology",
        title: "urethral stricture repair",
        shortDescription: "Comprehensive care and treatment for urethral stricture repair....",
        fullDescription: "Comprehensive care and treatment for urethral stricture repair.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-486",
        slug: "urinary-incontinence-treatment",
        parentServiceSlug: "urology",
        title: "urinary incontinence treatment",
        shortDescription: "Comprehensive care and treatment for urinary incontinence treatment....",
        fullDescription: "Comprehensive care and treatment for urinary incontinence treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-487",
        slug: "urinary-tract-infection-treatment",
        parentServiceSlug: "nephrology",
        title: "urinary tract infection treatment",
        shortDescription: "Comprehensive care and treatment for urinary tract infection treatment....",
        fullDescription: "Comprehensive care and treatment for urinary tract infection treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-488",
        slug: "varicocele-surgery-guide",
        parentServiceSlug: "nephrology",
        title: "varicocele surgery guide",
        shortDescription: "Comprehensive care and treatment for varicocele surgery guide....",
        fullDescription: "Comprehensive care and treatment for varicocele surgery guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-490",
        slug: "vertigo-dizziness-treatment",
        parentServiceSlug: "neurology",
        title: "vertigo dizziness treatment",
        shortDescription: "Comprehensive care and treatment for vertigo dizziness treatment....",
        fullDescription: "Comprehensive care and treatment for vertigo dizziness treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-491",
        slug: "zirconia-vs-titanium-implants",
        parentServiceSlug: "dentistry",
        title: "Zirconia vs Titanium Implants",
        shortDescription: "Comparing the world's leading materials for dental restoration.",
        fullDescription: "Choosing between Zirconia (ceramic) and Titanium implants depends on your aesthetic goals and bone health. While titanium is the time-tested gold standard for durability and integration, Zirconia offers a metal-free, highly aesthetic alternative ideal for patients with thin gum tissue or metal sensitivities. We help you choose the best material for your lifelong restoration.",
        features: ["Bio-Compatible Titanium","Metal-Free Zirconia","Aesthetic Gum Integration","Allergic Sensitivity Audit"],
        benefits: ["Flawless Aesthetic Result","Superior Integration Success","Long-Term Restoration Health","Tailored Material Choice"]
    },
    {
        id: "t-501",
        slug: "laser-piles-treatment",
        parentServiceSlug: "general-surgery",
        title: "Laser Piles Treatment",
        shortDescription: "Advanced, painless laser treatment for Hemorrhoids (Piles) with same-day discharge.",
        fullDescription: "Experience the most advanced **Laser Piles Treatment** in Vellore. Using precision diode lasers, we treat hemorrhoids without cuts, stitches, or significant bleeding. This minimally invasive approach ensures rapid healing and allows most patients to return to work within 48 hours, with practically no post-operative discomfort.",
        features: ["No Cuts or Stitches", "USFDA Approved Laser Tech", "30-Minute Procedure", "Same-Day Discharge"],
        benefits: ["Virtually Painless Recovery", "Minimal to No Bleeding", "Get Back to Work in 48 Hours", "Very Low Recurrence Rate"]
    },
    {
        id: "t-502",
        slug: "anal-fissure-treatment",
        parentServiceSlug: "general-surgery",
        title: "Anal Fissure Treatment",
        shortDescription: "Specialized laser surgery and medical management for chronic anal fissures.",
        fullDescription: "An **Anal Fissure** can be incredibly painful, but modern treatment offers rapid relief. Our specialists provide comprehensive care ranging from specialized medical management to minimally invasive laser sphincterotomy. Laser treatment provides immediate relief from pain and promotes faster healing of the fissure without the discomfort of traditional surgical methods.",
        features: ["Laser Lateral Sphincterotomy", "Minimal Tissue Trauma", "Immediate Pain Relief", "Local/Regional Anesthesia"],
        benefits: ["Faster Healing", "Minimal Post-Op Discomfort", "Early Return to Activity", "High Success Rate"]
    },
    {
        id: "t-503",
        slug: "pilonidal-sinus",
        parentServiceSlug: "general-surgery",
        title: "Pilonidal Sinus",
        shortDescription: "Modern laser treatment (SiLaC) and EPSiT for pilonidal sinus, ensuring minimal recurrence.",
        fullDescription: "Pilonidal sinus treatment has evolved. We offer **SiLaC (Sinus Laser Closure)** and **EPSiT (Endoscopic Pilonidal Sinus Treatment)**. These advanced techniques allow us to thoroughly clean and close the sinus tract through tiny punctures, avoiding the large, painful, and slow-healing wounds associated with traditional open surgery.",
        features: ["SiLaC Laser Technology", "EPSiT Endoscopic Access", "No Large Wounds", "Reduced Recurrence Rate"],
        benefits: ["Painless Recovery", "Faster Wound Closure", "Minimal Scarring", "No Long-Term Dressings"]
    },
    {
        id: "t-504",
        slug: "laparoscopic-gallbladder-removal",
        parentServiceSlug: "general-surgery",
        title: "Laparoscopic Gallbladder Removal",
        shortDescription: "Minimally invasive keyhole surgery for gallstones and gallbladder inflammation.",
        fullDescription: "Laparoscopic Cholecystectomy is the gold standard for **Gallbladder Removal**. Using high-definition laparoscopes and precision instruments, our surgeons remove the gallbladder through 3-4 tiny keyhole incisions. This approach ensures safety, minimal pain, and a rapid recovery, allowing most patients to be discharged within 24 hours.",
        features: ["HD Laparoscopic Imaging", "Tiny Keyhole Punctures", "Advanced Harmonic Scalpel", "Day-Care Surgery Option"],
        benefits: ["Minimal Scarring", "Reduced Infection Risk", "Fast Return to Work", "Relief from Gallstone Pain"]
    },
    {
        id: "t-505",
        slug: "laparoscopic-appendix-surgery",
        parentServiceSlug: "general-surgery",
        title: "Laparoscopic Appendix Surgery",
        shortDescription: "Emergency and elective keyhole surgery for appendicitis with rapid recovery.",
        fullDescription: "Appendicitis requires urgent surgical intervention. Our **Laparoscopic Appendix Surgery** (Appendectomy) allows for the safe removal of the appendix through small keyhole incisions. This minimally invasive approach significantly reduces the risk of wound infections, minimizes post-operative pain, and facilitates a much faster return to daily activities compared to traditional open surgery.",
        features: ["24/7 Emergency Readiness", "Laparoscopic (Keyhole) Approach", "Advanced Infection Control", "Rapid Recovery Protocol"],
        benefits: ["Small Cosmetic Scars", "Lower Infection Risk", "Reduced Post-Op Pain", "Short Hospital Stay"]
    }
];

export const getTreatmentBySlug = (slug: string) => {
    return TREATMENT_DATA.find(t => t.slug === slug);
};

export const getAllTreatments = () => {
    return TREATMENT_DATA;
};

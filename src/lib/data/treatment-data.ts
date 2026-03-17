
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
        title: "all on 4 implants guide",
        shortDescription: "Comprehensive care and treatment for all on 4 implants guide....",
        fullDescription: "Comprehensive care and treatment for all on 4 implants guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-304",
        slug: "all-on-6-implants-guide",
        parentServiceSlug: "dentistry",
        title: "all on 6 implants guide",
        shortDescription: "Comprehensive care and treatment for all on 6 implants guide....",
        fullDescription: "Comprehensive care and treatment for all on 6 implants guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "apicoectomy procedure",
        shortDescription: "Comprehensive care and treatment for apicoectomy procedure....",
        fullDescription: "Comprehensive care and treatment for apicoectomy procedure.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-308",
        slug: "arrhythmia-treatment-options",
        parentServiceSlug: "cardiology",
        title: "arrhythmia treatment options",
        shortDescription: "Comprehensive care and treatment for arrhythmia treatment options....",
        fullDescription: "Comprehensive care and treatment for arrhythmia treatment options.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "bleeding gums causes",
        shortDescription: "Comprehensive care and treatment for bleeding gums causes....",
        fullDescription: "Comprehensive care and treatment for bleeding gums causes.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-313",
        slug: "bone-grafting-for-implants",
        parentServiceSlug: "dentistry",
        title: "bone grafting for implants",
        shortDescription: "Comprehensive care and treatment for bone grafting for implants....",
        fullDescription: "Comprehensive care and treatment for bone grafting for implants.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-314",
        slug: "bone-marrow-transplant-prep",
        parentServiceSlug: "orthopaedics",
        title: "bone marrow transplant prep",
        shortDescription: "Comprehensive care and treatment for bone marrow transplant prep....",
        fullDescription: "Comprehensive care and treatment for bone marrow transplant prep.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-315",
        slug: "braces-age-limit",
        parentServiceSlug: "dentistry",
        title: "braces age limit",
        shortDescription: "Comprehensive care and treatment for braces age limit....",
        fullDescription: "Comprehensive care and treatment for braces age limit.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-316",
        slug: "braces-cost-in-vellore",
        parentServiceSlug: "dentistry",
        title: "braces cost in vellore",
        shortDescription: "Comprehensive care and treatment for braces cost in vellore....",
        fullDescription: "Comprehensive care and treatment for braces cost in vellore.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-317",
        slug: "braces-for-adults",
        parentServiceSlug: "dentistry",
        title: "braces for adults",
        shortDescription: "Comprehensive care and treatment for braces for adults....",
        fullDescription: "Comprehensive care and treatment for braces for adults.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-318",
        slug: "braces-pain-management",
        parentServiceSlug: "dentistry",
        title: "braces pain management",
        shortDescription: "Comprehensive care and treatment for braces pain management....",
        fullDescription: "Comprehensive care and treatment for braces pain management.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-319",
        slug: "braces-treatment-duration",
        parentServiceSlug: "dentistry",
        title: "braces treatment duration",
        shortDescription: "Comprehensive care and treatment for braces treatment duration....",
        fullDescription: "Comprehensive care and treatment for braces treatment duration.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "bypass surgery cabg",
        shortDescription: "Comprehensive care and treatment for bypass surgery cabg....",
        fullDescription: "Comprehensive care and treatment for bypass surgery cabg.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "carpal tunnel release",
        shortDescription: "Comprehensive care and treatment for carpal tunnel release....",
        fullDescription: "Comprehensive care and treatment for carpal tunnel release.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-326",
        slug: "ceramic-braces-vs-metal",
        parentServiceSlug: "dentistry",
        title: "ceramic braces vs metal",
        shortDescription: "Comprehensive care and treatment for ceramic braces vs metal....",
        fullDescription: "Comprehensive care and treatment for ceramic braces vs metal.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "cholesterol management plan",
        shortDescription: "Comprehensive care and treatment for cholesterol management plan....",
        fullDescription: "Comprehensive care and treatment for cholesterol management plan.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "composite bonding guide",
        shortDescription: "Comprehensive care and treatment for composite bonding guide....",
        fullDescription: "Comprehensive care and treatment for composite bonding guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-338",
        slug: "crohns-disease-management",
        parentServiceSlug: "cardiology",
        title: "crohns disease management",
        shortDescription: "Comprehensive care and treatment for crohns disease management....",
        fullDescription: "Comprehensive care and treatment for crohns disease management.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-339",
        slug: "crossbite-correction",
        parentServiceSlug: "dentistry",
        title: "crossbite correction",
        shortDescription: "Comprehensive care and treatment for crossbite correction....",
        fullDescription: "Comprehensive care and treatment for crossbite correction.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-340",
        slug: "deep-cleaning-scaling",
        parentServiceSlug: "dentistry",
        title: "deep cleaning scaling",
        shortDescription: "Comprehensive care and treatment for deep cleaning scaling....",
        fullDescription: "Comprehensive care and treatment for deep cleaning scaling.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-341",
        slug: "dental-bonding-vs-veneers",
        parentServiceSlug: "dentistry",
        title: "dental bonding vs veneers",
        shortDescription: "Comprehensive care and treatment for dental bonding vs veneers....",
        fullDescription: "Comprehensive care and treatment for dental bonding vs veneers.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-342",
        slug: "dental-implant-failure-signs",
        parentServiceSlug: "dentistry",
        title: "dental implant failure signs",
        shortDescription: "Comprehensive care and treatment for dental implant failure signs....",
        fullDescription: "Comprehensive care and treatment for dental implant failure signs.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-343",
        slug: "dental-implant-pain-management",
        parentServiceSlug: "dentistry",
        title: "dental implant pain management",
        shortDescription: "Comprehensive care and treatment for dental implant pain management....",
        fullDescription: "Comprehensive care and treatment for dental implant pain management.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-344",
        slug: "dental-implant-procedure-steps",
        parentServiceSlug: "dentistry",
        title: "dental implant procedure steps",
        shortDescription: "Comprehensive care and treatment for dental implant procedure steps....",
        fullDescription: "Comprehensive care and treatment for dental implant procedure steps.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-345",
        slug: "dental-implant-recovery-time",
        parentServiceSlug: "dentistry",
        title: "dental implant recovery time",
        shortDescription: "Comprehensive care and treatment for dental implant recovery time....",
        fullDescription: "Comprehensive care and treatment for dental implant recovery time.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-346",
        slug: "dental-veneers-types",
        parentServiceSlug: "dentistry",
        title: "dental veneers types",
        shortDescription: "Comprehensive care and treatment for dental veneers types....",
        fullDescription: "Comprehensive care and treatment for dental veneers types.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "echocardiogram test details",
        shortDescription: "Comprehensive care and treatment for echocardiogram test details....",
        fullDescription: "Comprehensive care and treatment for echocardiogram test details.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "gastric balloon weight loss",
        shortDescription: "Comprehensive care and treatment for gastric balloon weight loss....",
        fullDescription: "Comprehensive care and treatment for gastric balloon weight loss.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-365",
        slug: "gingivitis-treatment-guide",
        parentServiceSlug: "dentistry",
        title: "gingivitis treatment guide",
        shortDescription: "Comprehensive care and treatment for gingivitis treatment guide....",
        fullDescription: "Comprehensive care and treatment for gingivitis treatment guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "gum disease prevention",
        shortDescription: "Comprehensive care and treatment for gum disease prevention....",
        fullDescription: "Comprehensive care and treatment for gum disease prevention.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-368",
        slug: "gum-grafting-procedure",
        parentServiceSlug: "dentistry",
        title: "gum grafting procedure",
        shortDescription: "Comprehensive care and treatment for gum grafting procedure....",
        fullDescription: "Comprehensive care and treatment for gum grafting procedure.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-369",
        slug: "gum-pocket-treatment",
        parentServiceSlug: "dentistry",
        title: "gum pocket treatment",
        shortDescription: "Comprehensive care and treatment for gum pocket treatment....",
        fullDescription: "Comprehensive care and treatment for gum pocket treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-370",
        slug: "gum-recession-treatment",
        parentServiceSlug: "dentistry",
        title: "gum recession treatment",
        shortDescription: "Comprehensive care and treatment for gum recession treatment....",
        fullDescription: "Comprehensive care and treatment for gum recession treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-371",
        slug: "gum-surgery-recovery",
        parentServiceSlug: "dentistry",
        title: "gum surgery recovery",
        shortDescription: "Comprehensive care and treatment for gum surgery recovery....",
        fullDescription: "Comprehensive care and treatment for gum surgery recovery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-372",
        slug: "gummy-smile-correction",
        parentServiceSlug: "dentistry",
        title: "gummy smile correction",
        shortDescription: "Comprehensive care and treatment for gummy smile correction....",
        fullDescription: "Comprehensive care and treatment for gummy smile correction.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-373",
        slug: "h-pylori-infection-cure",
        parentServiceSlug: "cardiology",
        title: "h pylori infection cure",
        shortDescription: "Comprehensive care and treatment for h pylori infection cure....",
        fullDescription: "Comprehensive care and treatment for h pylori infection cure.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "heart attack warning signs",
        shortDescription: "Comprehensive care and treatment for heart attack warning signs....",
        fullDescription: "Comprehensive care and treatment for heart attack warning signs.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-377",
        slug: "heart-failure-management",
        parentServiceSlug: "cardiology",
        title: "heart failure management",
        shortDescription: "Comprehensive care and treatment for heart failure management....",
        fullDescription: "Comprehensive care and treatment for heart failure management.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-378",
        slug: "heart-valve-replacement",
        parentServiceSlug: "cardiology",
        title: "heart valve replacement",
        shortDescription: "Comprehensive care and treatment for heart valve replacement....",
        fullDescription: "Comprehensive care and treatment for heart valve replacement.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "hepatitis b treatment options",
        shortDescription: "Comprehensive care and treatment for hepatitis b treatment options....",
        fullDescription: "Comprehensive care and treatment for hepatitis b treatment options.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "holter monitor test",
        shortDescription: "Comprehensive care and treatment for holter monitor test....",
        fullDescription: "Comprehensive care and treatment for holter monitor test.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "hypertension control diet",
        shortDescription: "Comprehensive care and treatment for hypertension control diet....",
        fullDescription: "Comprehensive care and treatment for hypertension control diet.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-387",
        slug: "immediate-load-implants",
        parentServiceSlug: "dentistry",
        title: "immediate load implants",
        shortDescription: "Comprehensive care and treatment for immediate load implants....",
        fullDescription: "Comprehensive care and treatment for immediate load implants.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "implant aftercare instructions",
        shortDescription: "Comprehensive care and treatment for implant aftercare instructions....",
        fullDescription: "Comprehensive care and treatment for implant aftercare instructions.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-390",
        slug: "implant-cost-in-vellore",
        parentServiceSlug: "dentistry",
        title: "implant cost in vellore",
        shortDescription: "Comprehensive care and treatment for implant cost in vellore....",
        fullDescription: "Comprehensive care and treatment for implant cost in vellore.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-391",
        slug: "implant-vs-bridge-comparison",
        parentServiceSlug: "dentistry",
        title: "implant vs bridge comparison",
        shortDescription: "Comprehensive care and treatment for implant vs bridge comparison....",
        fullDescription: "Comprehensive care and treatment for implant vs bridge comparison.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-392",
        slug: "implant-warranty-policy",
        parentServiceSlug: "dentistry",
        title: "implant warranty policy",
        shortDescription: "Comprehensive care and treatment for implant warranty policy....",
        fullDescription: "Comprehensive care and treatment for implant warranty policy.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-394",
        slug: "inflammatory-bowel-disease-ibd-care",
        parentServiceSlug: "cardiology",
        title: "inflammatory bowel disease ibd care",
        shortDescription: "Comprehensive care and treatment for inflammatory bowel disease ibd care....",
        fullDescription: "Comprehensive care and treatment for inflammatory bowel disease ibd care.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-395",
        slug: "invisalign-treatment-guide",
        parentServiceSlug: "dentistry",
        title: "invisalign treatment guide",
        shortDescription: "Comprehensive care and treatment for invisalign treatment guide....",
        fullDescription: "Comprehensive care and treatment for invisalign treatment guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-396",
        slug: "irritable-bowel-syndrome-ibs-relief",
        parentServiceSlug: "gastroenterology",
        title: "irritable bowel syndrome ibs relief",
        shortDescription: "Comprehensive care and treatment for irritable bowel syndrome ibs relief....",
        fullDescription: "Comprehensive care and treatment for irritable bowel syndrome ibs relief.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-397",
        slug: "joint-pain-relief-injections",
        parentServiceSlug: "orthopaedics",
        title: "joint pain relief injections",
        shortDescription: "Comprehensive care and treatment for joint pain relief injections....",
        fullDescription: "Comprehensive care and treatment for joint pain relief injections.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "knee arthroscopy recovery",
        shortDescription: "Comprehensive care and treatment for knee arthroscopy recovery....",
        fullDescription: "Comprehensive care and treatment for knee arthroscopy recovery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-404",
        slug: "knee-cartilage-repair",
        parentServiceSlug: "orthopaedics",
        title: "knee cartilage repair",
        shortDescription: "Comprehensive care and treatment for knee cartilage repair....",
        fullDescription: "Comprehensive care and treatment for knee cartilage repair.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-407",
        slug: "laser-gum-treatment",
        parentServiceSlug: "dentistry",
        title: "laser gum treatment",
        shortDescription: "Comprehensive care and treatment for laser gum treatment....",
        fullDescription: "Comprehensive care and treatment for laser gum treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "laser root canal benefits",
        shortDescription: "Comprehensive care and treatment for laser root canal benefits....",
        fullDescription: "Comprehensive care and treatment for laser root canal benefits.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "liver cirrhosis care plan",
        shortDescription: "Comprehensive care and treatment for liver cirrhosis care plan....",
        fullDescription: "Comprehensive care and treatment for liver cirrhosis care plan.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "metal braces guide",
        shortDescription: "Comprehensive care and treatment for metal braces guide....",
        fullDescription: "Comprehensive care and treatment for metal braces guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "osteoporosis management plan",
        shortDescription: "Comprehensive care and treatment for osteoporosis management plan....",
        fullDescription: "Comprehensive care and treatment for osteoporosis management plan.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "overbite correction",
        shortDescription: "Comprehensive care and treatment for overbite correction....",
        fullDescription: "Comprehensive care and treatment for overbite correction.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-432",
        slug: "pancreatitis-treatment-steps",
        parentServiceSlug: "gastroenterology",
        title: "pancreatitis treatment steps",
        shortDescription: "Comprehensive care and treatment for pancreatitis treatment steps....",
        fullDescription: "Comprehensive care and treatment for pancreatitis treatment steps.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-435",
        slug: "pediatric-cardiology-care",
        parentServiceSlug: "cardiology",
        title: "pediatric cardiology care",
        shortDescription: "Comprehensive care and treatment for pediatric cardiology care....",
        fullDescription: "Comprehensive care and treatment for pediatric cardiology care.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-436",
        slug: "peptic-ulcer-disease-treatment",
        parentServiceSlug: "gastroenterology",
        title: "peptic ulcer disease treatment",
        shortDescription: "Comprehensive care and treatment for peptic ulcer disease treatment....",
        fullDescription: "Comprehensive care and treatment for peptic ulcer disease treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-437",
        slug: "periodontitis-stages",
        parentServiceSlug: "dentistry",
        title: "periodontitis stages",
        shortDescription: "Comprehensive care and treatment for periodontitis stages....",
        fullDescription: "Comprehensive care and treatment for periodontitis stages.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "preventive heart checkup",
        shortDescription: "Comprehensive care and treatment for preventive heart checkup....",
        fullDescription: "Comprehensive care and treatment for preventive heart checkup.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "re root canal treatment",
        shortDescription: "Comprehensive care and treatment for re root canal treatment....",
        fullDescription: "Comprehensive care and treatment for re root canal treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-449",
        slug: "retainer-after-braces",
        parentServiceSlug: "dentistry",
        title: "retainer after braces",
        shortDescription: "Comprehensive care and treatment for retainer after braces....",
        fullDescription: "Comprehensive care and treatment for retainer after braces.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-450",
        slug: "root-canal-aftercare",
        parentServiceSlug: "dentistry",
        title: "root canal aftercare",
        shortDescription: "Comprehensive care and treatment for root canal aftercare....",
        fullDescription: "Comprehensive care and treatment for root canal aftercare.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-451",
        slug: "root-canal-cost-breakdown",
        parentServiceSlug: "dentistry",
        title: "root canal cost breakdown",
        shortDescription: "Comprehensive care and treatment for root canal cost breakdown....",
        fullDescription: "Comprehensive care and treatment for root canal cost breakdown.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-452",
        slug: "root-canal-crown-needed",
        parentServiceSlug: "dentistry",
        title: "root canal crown needed",
        shortDescription: "Comprehensive care and treatment for root canal crown needed....",
        fullDescription: "Comprehensive care and treatment for root canal crown needed.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-453",
        slug: "root-canal-during-pregnancy",
        parentServiceSlug: "dentistry",
        title: "root canal during pregnancy",
        shortDescription: "Comprehensive care and treatment for root canal during pregnancy....",
        fullDescription: "Comprehensive care and treatment for root canal during pregnancy.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-454",
        slug: "root-canal-failure-symptoms",
        parentServiceSlug: "dentistry",
        title: "root canal failure symptoms",
        shortDescription: "Comprehensive care and treatment for root canal failure symptoms....",
        fullDescription: "Comprehensive care and treatment for root canal failure symptoms.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-455",
        slug: "root-canal-for-children",
        parentServiceSlug: "dentistry",
        title: "root canal for children",
        shortDescription: "Comprehensive care and treatment for root canal for children....",
        fullDescription: "Comprehensive care and treatment for root canal for children.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-456",
        slug: "root-canal-pain-during-treatment",
        parentServiceSlug: "dentistry",
        title: "root canal pain during treatment",
        shortDescription: "Comprehensive care and treatment for root canal pain during treatment....",
        fullDescription: "Comprehensive care and treatment for root canal pain during treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-457",
        slug: "root-canal-vs-extraction",
        parentServiceSlug: "dentistry",
        title: "root canal vs extraction",
        shortDescription: "Comprehensive care and treatment for root canal vs extraction....",
        fullDescription: "Comprehensive care and treatment for root canal vs extraction.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-458",
        slug: "rotator-cuff-repair-surgery",
        parentServiceSlug: "orthopaedics",
        title: "rotator cuff repair surgery",
        shortDescription: "Comprehensive care and treatment for rotator cuff repair surgery....",
        fullDescription: "Comprehensive care and treatment for rotator cuff repair surgery.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "shoulder arthroscopy guide",
        shortDescription: "Comprehensive care and treatment for shoulder arthroscopy guide....",
        fullDescription: "Comprehensive care and treatment for shoulder arthroscopy guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-461",
        slug: "single-sitting-root-canal",
        parentServiceSlug: "dentistry",
        title: "single sitting root canal",
        shortDescription: "Comprehensive care and treatment for single sitting root canal....",
        fullDescription: "Comprehensive care and treatment for single sitting root canal.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-462",
        slug: "single-tooth-implant-cost",
        parentServiceSlug: "dentistry",
        title: "single tooth implant cost",
        shortDescription: "Comprehensive care and treatment for single tooth implant cost....",
        fullDescription: "Comprehensive care and treatment for single tooth implant cost.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-463",
        slug: "sinus-lift-before-implants",
        parentServiceSlug: "dentistry",
        title: "sinus lift before implants",
        shortDescription: "Comprehensive care and treatment for sinus lift before implants....",
        fullDescription: "Comprehensive care and treatment for sinus lift before implants.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "smile makeover process",
        shortDescription: "Comprehensive care and treatment for smile makeover process....",
        fullDescription: "Comprehensive care and treatment for smile makeover process.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "sports injury treatment",
        shortDescription: "Comprehensive care and treatment for sports injury treatment....",
        fullDescription: "Comprehensive care and treatment for sports injury treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "teeth contouring reshaping",
        shortDescription: "Comprehensive care and treatment for teeth contouring reshaping....",
        fullDescription: "Comprehensive care and treatment for teeth contouring reshaping.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-473",
        slug: "teeth-gaps-treatment",
        parentServiceSlug: "dentistry",
        title: "teeth gaps treatment",
        shortDescription: "Comprehensive care and treatment for teeth gaps treatment....",
        fullDescription: "Comprehensive care and treatment for teeth gaps treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-474",
        slug: "teeth-whitening-guide",
        parentServiceSlug: "dentistry",
        title: "teeth whitening guide",
        shortDescription: "Comprehensive care and treatment for teeth whitening guide....",
        fullDescription: "Comprehensive care and treatment for teeth whitening guide.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "tmt test for heart",
        shortDescription: "Comprehensive care and treatment for tmt test for heart....",
        fullDescription: "Comprehensive care and treatment for tmt test for heart.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-479",
        slug: "total-shoulder-replacement",
        parentServiceSlug: "orthopaedics",
        title: "total shoulder replacement",
        shortDescription: "Comprehensive care and treatment for total shoulder replacement....",
        fullDescription: "Comprehensive care and treatment for total shoulder replacement.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-480",
        slug: "trigger-finger-release",
        parentServiceSlug: "orthopaedics",
        title: "trigger finger release",
        shortDescription: "Comprehensive care and treatment for trigger finger release....",
        fullDescription: "Comprehensive care and treatment for trigger finger release.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "ulcerative colitis treatment",
        shortDescription: "Comprehensive care and treatment for ulcerative colitis treatment....",
        fullDescription: "Comprehensive care and treatment for ulcerative colitis treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-483",
        slug: "underbite-treatment",
        parentServiceSlug: "dentistry",
        title: "underbite treatment",
        shortDescription: "Comprehensive care and treatment for underbite treatment....",
        fullDescription: "Comprehensive care and treatment for underbite treatment.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
    },
    {
        id: "t-484",
        slug: "upper-gi-endoscopy-prep",
        parentServiceSlug: "gastroenterology",
        title: "upper gi endoscopy prep",
        shortDescription: "Comprehensive care and treatment for upper gi endoscopy prep....",
        fullDescription: "Comprehensive care and treatment for upper gi endoscopy prep.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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
        title: "zirconia vs titanium implants",
        shortDescription: "Comprehensive care and treatment for zirconia vs titanium implants....",
        fullDescription: "Comprehensive care and treatment for zirconia vs titanium implants.",
        features: ["Advanced Medical Technology","Expert Specialists","Compassionate Care","High Success Rates"],
        benefits: ["Faster Recovery","Minimal Pain","Premium Hospital Facilities","Dedicated Support"]
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

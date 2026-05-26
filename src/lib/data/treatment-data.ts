
import { AUTO_TREATMENTS } from './treatment-data-auto';

export interface TreatmentItem {
 id: string;
 slug: string; // matches the last segment of url, e.g. 'angioplasty'
 parentServiceSlug: string; // e.g., 'cardiology'
 title: string;
 shortDescription: string;
 fullDescription: string;
 features: string[] | { title: string; description: string; icon: string }[];
 benefits: string[] | { title: string; description: string; icon: string }[];
 faq?: { question: string; answer: string }[];
 relatedTreatments?: string[];
 aliases?: string[];
 duration?: string;
 hospitalStay?: string;
 recoveryTime?: string;
 anesthesia?: string;
}

export const TREATMENT_DATA: TreatmentItem[] = [
 ...AUTO_TREATMENTS,
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
 slug: "laser-piles-treatment",
 aliases: [
 "piles", "piles-treatment", "hemorrhoids", "fissure", "fistula", "proctology", "laser-piles",
 "best-piles-hospital", "best-treatment-for-piles", "best-treatment-for-fissure", "piles-surgery-treatment",
 "laser-treatment-for-piles", "piles-laser-surgery", "piles-specialist-doctor", "fistula-surgery-in-vellore",
 "best-doctor-for-fistula-surgery", "laser-fistula-surgery-in-vellore", "best-hospital-for-piles-treatment",
 "piles-doctor-in-vellore", "fissure-specialist-doctor", "medicine-for-piles-treatment"
 ],
 parentServiceSlug: "proctology",
 title: "Laser Piles Treatment in Vellore, Tamil Nadu (Hemorrhoids)",
 shortDescription: "Painless, bloodless laser surgery for Hemorrhoids with same-day discharge.",
 fullDescription: "Laser treatment for piles (hemorrhoids) is a minimally invasive procedure that uses laser energy to shrink the hemorrhoidal tissue. At Indira Hospital, we use high-power 1470nm Diode Lasers to achieve precision-driven results, ensuring zero incisions and a rapid return to daily life. This procedure, known as Laser Hemorrhoidopexy (LHP), is the gold standard for Grade 2, 3, and 4 hemorrhoids, offering a virtually pain-free alternative to traditional surgery.",
 features: [
 { title: "1470nm Diode Laser", description: "Precision radial fiber technology for bloodless shrinkage.", icon: "Zap" },
 { title: "LHP Technique", description: "Laser Hemorrhoidopexy ensures zero surgical incisions.", icon: "Target" },
 { title: "Day-Care Procedure", description: "Walk-in, walk-out treatment within 4-6 hours.", icon: "Clock" },
 { title: "Elite Sedation", description: "High-quality conscious sedation for absolute comfort.", icon: "Shield" }
 ],
 benefits: [
 { title: "Zero Post-Op Pain", description: "Minimal reliance on painkillers compared to traditional methods.", icon: "Star" },
 { title: "No Recurrence", description: "Technically superior closure reduces recurrence to under 1%.", icon: "CheckCircle" },
 { title: "Rapid Recovery", description: "Resume light professional work within 24-48 hours.", icon: "Zap" },
 { title: "International Standard", description: "Treatment matching the highest global surgical benchmarks.", icon: "Globe" }
 ],
 faq: [
 { question: "Is laser treatment for piles permanent?", answer: "Yes. Laser Hemorrhoidopexy (LHP) treats the root cause by shrinking the hemorrhoidal mass and sealing the blood supply, resulting in a permanent solution with negligible recurrence rates." },
 { question: "When can I resume a normal diet and work?", answer: "You can resume a high-fiber diet immediately. Most patients return to desk work within 48 hours and can resume light exercise after 7 days." },
 { question: "Do you offer support for international patients?", answer: "Yes, we provide a dedicated concierge for patients from UAE, Bangladesh, and Africa, including cost estimates, airport pickup, and local accommodation help." }
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
 title: "Total Knee Replacement (TKR) in Vellore, Tamil Nadu",
 shortDescription: "Pain-free mobility with high-precision joint replacement and rapid recovery.",
 fullDescription: "Regain your mobility with the most advanced <strong>Total Knee Replacement</strong> surgery in Vellore. At Indira Hospital, we utilize high-precision computer navigation and minimally invasive 'Sub-vastus' approaches that preserve muscle integrity. This ensures accurate implant alignment, reduced post-operative pain, and a significantly longer lifespan for your new joint, allowing you to return to an active, pain-free lifestyle.",
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
 aliases: ["turp", "bph", "enlarged-prostate"],
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
 id: "t-13",
 slug: "root-canal-treatment",
 aliases: ["rct", "tooth-pain", "dental-nerve"],
 parentServiceSlug: "dentistry",
 title: "Single-Sitting Laser Root Canal",
 shortDescription: "Painless, expert root canal therapy to save your natural teeth.",
 fullDescription: "Experience a stress-free, painless <strong>Root Canal Treatment</strong> (RCT) at Indira Hospital. Led by <strong>Dr. Rockson Samuel</strong>, we use advanced rotary endodontics and diode lasers to thoroughly disinfect and seal the tooth canal in a single visit. Our precision approach saves your natural tooth while eliminating infection and severe pain, preserving your smile effectively.",
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
 fullDescription: "Restore your smile and confidence with permanent <strong>Dental Implants</strong>. Under the expert hands of <strong>Dr. Rockson Samuel</strong>, we use 3D-guided surgery and premium titanium or zirconia implants to provide a replacement that looks, feels, and functions exactly like your natural teeth. Whether it is a single tooth or full-mouth rehabilitation, our dental specialists ensure a lifetime of comfort and durability.",
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
 fullDescription: "Experience crystal clear vision with our advanced <strong>Phacoemulsification</strong> (Cataract Surgery). Using micro-incision techniques and premium high-definition intraocular lenses (IOLs), we restore your sight in a painless, stitch-less 15-minute procedure. Most patients experience immediate improvement in vision and can return to normal activities the very next day.",
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
 ],
 relatedTreatments: ["t-2", "t-25", "t-26", "t-27"]
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
 id: "t-107",
 slug: "endometriosis-treatment",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Endometriosis",
 shortDescription: "Specialized care and surgical solutions for endometriosis pain.",
 fullDescription: "Endometriosis can cause debilitating pelvic pain. We offer complete <strong>Endometriosis Treatment</strong>, ranging from hormonal therapies to highly intricate laparoscopic excision surgeries to remove the endometrial tissue while preserving your reproductive organs.",
 features: ["Advanced Pelvic MRI Diagnostics", "Medical Therapy Management", "Laparoscopic Excision Procedure", "Pain Management Protocols"],
 benefits: ["Significant Relief from Chronic Pelvic Pain", "Preserves and Enhances Fertility", "Prevents Disease Progression", "Compassionate Care"]
 },
 {
 id: "t-109",
 slug: "painless-delivery-epidural",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Painless Delivery",
 shortDescription: "Comfortable birthing experiences using safe epidural anesthesia.",
 fullDescription: "We believe delivery should be a joyful experience, not a painful one. Our <strong>Painless Delivery (Epidural)</strong> program uses safe, specialized anesthesia during labor to numb the pain while keeping you completely awake and capable of participating in childbirth.",
 features: ["24/7 Expert Anesthesiologists", "Continuous Maternal Monitoring", "Luxury LDR (Labor, Delivery, Recovery) Suites", "Dedicated Midwifery Support"],
 benefits: ["Greatly Reduces Labor Exhaustion", "Makes Childbirth a Beautiful Experience", "Safe for the Baby", "Allows You to Actively Push"]
 },
 {
 id: "t-110",
 slug: "normal-delivery-vs-c-section",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "C-Section vs Normal",
 shortDescription: "Evidence-based counseling and execution for safe birthing modes.",
 fullDescription: "We strongly advocate for normal (vaginal) deliveries whenever medically feasible. However, when circumstances demand it, our team is equipped to perform safe, swift <strong>Caesarean Sections (C-Sections)</strong> to guarantee the safety of the newborn and mother.",
 features: ["Trial of Labor After Caesarean (TOLAC) Option", "Emergency C-Section Readiness", "Continuous Fetal Heart Rate Monitoring", "Cosmetic Suture Techniques"],
 benefits: ["Prioritizes Baby & Mother Safety", "Transparent, Patient-First Counseling", "Exceptional Post-Delivery Care", "Minimal Scarring for C-Sections"]
 },
 {
 id: "t-111",
 slug: "cervical-cancer-screening",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Cervical Cancer Screening",
 shortDescription: "Preventive Pap Smears and HPV typing for early detection.",
 fullDescription: "Early detection saves lives. Our comprehensive <strong>Cervical Cancer Screening</strong> program utilizes high-precision liquid-based cytology (Pap Smear) and advanced HPV DNA typing to detect abnormal cervical cells years before they can turn into cancer.",
 features: ["Liquid-Based Cytology (LBC)", "High-Risk HPV DNA Typing", "Colposcopy Guided Biopsy", "Gentle, Private Environment"],
 benefits: ["Detects Pre-Cancerous Changes", "Highly Accurate Results", "Prevents Cervical Cancer Development", "Peace of Mind"]
 },
 {
 id: "t-112",
 slug: "laser-kidney-stone-surgery",
 aliases: [
 "kidney-stone", "rirs", "pcnl", "stone-removal", 
 "gall-bladder-surgery", "best-treatment-for-gall-bladder-stone", "gallstones-treatment",
 "best-doctor-for-gallstones", "best-hospital-for-gallstones-treatment", "laser-surgery-for-gall-stones",
 "gallstones-treatment-in-tn"
 ],
 parentServiceSlug: "urology",
 title: "Laser Kidney Stone Surgery in Vellore, Tamil Nadu (RIRS/PCNL)",
 shortDescription: "Incision-less laser treatment (RIRS) and Mini-PCNL for complete stone clearance.",
 fullDescription: "Say goodbye to the pain of kidney stones with our advanced <strong>Laser Lithotripsy</strong> solutions. We specialize in RIRS (Retrograde Intrarenal Surgery) and Mini-PCNL, using high-power Holmium lasers to dust stones into fine particles without major incisions. These precise procedures ensure maximum stone clearance with minimal risk and rapid recovery.",
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
 slug: "laser-prostate-surgery",
 parentServiceSlug: "urology",
 title: "Laser Prostate Surgery in Vellore, Tamil Nadu (TURP)",
 shortDescription: "Gold-standard surgical relief for severe prostate enlargement with rapid recovery.",
 fullDescription: "Transurethral Resection of the Prostate (<strong>TURP</strong>) remains the gold standard for treating benign prostatic hyperplasia (BPH). Our expert urologists perform this minimally invasive endoscopic procedure to remove excess prostate tissue, restoring strong and normal urine flow.",
 features: ["Bipolar TURP Technology", "Endoscopic (No Incision) Approach", "Experienced Uro-surgeons", "High-Definition Visualization"],
 benefits: ["Permanent Relief from Urinary Blockage", "Stops Frequent Nighttime Urination", "Reduces Risk of Bladder Damage", "Short Hospitalization"]
 },
 {
 id: "t-113-1",
 slug: "pcnl-complex-stone-removal",
 parentServiceSlug: "urology",
 title: "Complex Kidney Stone Surgery (PCNL)",
 shortDescription: "Keyhole surgery for large staghorn stones with microscopic precision.",
 fullDescription: "For large or complex 'Staghorn' stones, our Percutaneous Nephrolithotomy (PCNL) offers the most definitive clearance through a tiny 5mm keyhole access.",
 features: ["Ultra-Thin Keyhole Access", "Pneumatic & Laser Fragmentation", "Total Clearance Protocol"],
 benefits: ["Definitive Stone Removal", "Minimal Scarring", "Rapid Return to Normalcy"]
 },
 {
 id: "t-114",
 slug: "enlarged-prostate-bph-treatment",
 parentServiceSlug: "urology",
 title: "Enlarged Prostate (BPH)",
 shortDescription: "Comprehensive medical and laser management for BPH.",
 fullDescription: "Struggling with weak urine flow or frequent bathroom trips? We offer complete <strong>Enlarged Prostate (BPH) Treatment</strong>. Based on your prostate size, we provide customized plans ranging from Alpha-blocker medications to advanced Holmium Laser Enucleation (HoLEP).",
 features: ["Advanced Uroflowmetry Testing", "HoLEP (Holmium Laser) Surgery", "Medical Therapy Management", "Prostate Cancer Screening (PSA)"],
 benefits: ["Customized to Prostate Volume", "Improves Sleep Quality", "Prevents Urinary Retention", "Preserves Sexual Function"]
 },
 {
 id: "t-115",
 slug: "bladder-cancer-diagnosis-treatment",
 parentServiceSlug: "urology",
 title: "Bladder Cancer",
 shortDescription: "Expert diagnosis and surgical oncology for bladder cancer.",
 fullDescription: "Blood in your urine? Don't ignore it. Our Uro-Oncology department provides comprehensive <strong>Bladder Cancer Diagnosis & Treatment</strong>. From advanced Blue Light Cystoscopy for early detection to Radical Cystectomy with neobladder creation, we offer life-saving, state-of-the-art care.",
 features: ["Blue Light Cystoscopy", "Transurethral Resection of Bladder Tumor (TURBT)", "Intravesical BCG Therapy", "Radical Cystectomy (Open/Robotic)"],
 benefits: ["Early Detection Saves Lives", "Preserves Normal Bladder Function When Possible", "Multidisciplinary Cancer Board approach", "Comprehensive Post-Op Rehab"]
 },
 {
 id: "t-116",
 slug: "uti-treatment-guide",
 parentServiceSlug: "urology",
 title: "UTI Treatment",
 shortDescription: "Rapid diagnostics and targeted therapy for Urinary Tract Infections.",
 fullDescription: "Urinary Tract Infections (UTIs) require prompt and correct treatment to prevent kidney damage. We offer expert <strong>UTI Treatment</strong> encompassing rapid urine cultures, targeted antibiotic therapy, and investigation of underlying causes (like strictures or stones) to prevent painful recurrences.",
 features: ["Rapid Urine Culture Analysis", "Uroflowmetry Assessments", "Targeted Antimicrobial Therapy", "Preventative Care Counseling"],
 benefits: ["Immediate Relief from Burning and Pain", "Prevents Chronic Kidney Infections", "Reduces Risk of Recurrent UTIs", "Safe for Pregnancy (if applicable)"]
 },
 {
 id: "t-117",
 slug: "stapler-sunnath-surgery",
 aliases: ["stapler-circumcision", "sunnath-surgery", "circumcision-treatment", "painless-circumcision"],
 parentServiceSlug: "urology",
 title: "Painless Stapler Sunnath (Circumcision) in Vellore, Tamil Nadu",
 shortDescription: "Advanced ZSR/Stapler circumcision for infants and adults with zero stitches.",
 fullDescription: "Experience the most advanced, bloodless <strong>Stapler Circumcision</strong> (ZSR/Stapler technique) at Indira Super Speciality Hospital. This revolutionary procedure ensures a stitch-less result, minimal downtime, and a perfectly aesthetic healing process. Our expert urologists perform this daily for both medical reasons (Balanitis/Phimosis) and religious Sunnath requirements, ensuring maximum comfort for patients of all ages.",
 features: [
 { title: "ZSR Stapler Tech", description: "World-class device for simultaneous cutting and stapling.", icon: "Zap" },
 { title: "Stitch-less Result", description: "Silicone ring technology avoids messy traditional sutures.", icon: "Star" },
 { title: "Day-Care Surgery", description: "Procedure takes only 15 minutes; discharge in 2 hours.", icon: "Clock" }
 ],
 benefits: [
 { title: "No Blood Loss", description: "Clean surgical environment with rapid healing.", icon: "Shield" },
 { title: "Immediate Recovery", description: "Return to work or school in just 24-48 hours.", icon: "Activity" },
 { title: "Superior Aesthetics", description: "Uniform, clean results compared to manual clipping.", icon: "Sparkles" }
 ],
 faq: [
 { question: "Is it suitable for infants?", answer: "Yes, we specialize in pediatric stapler circumcision with extra care for safety and comfort." },
 { question: "Will it hurt afterwards?", answer: "Patients experience significantly less discomfort than traditional methods. Most don't require heavy pain medication." }
 ]
 },
 {
 id: "t-707",
 slug: "varicose-veins-laser-treatment",
 aliases: [
 "laser-surgery-for-varicose-vein", "best-hospital-for-varicose-vein", "varicose-vein-treatment-in-vellore",
 "surgeon-for-varicose-vein-treatment"
 ],
 parentServiceSlug: "general-surgery",
 title: "Laser Varicose Veins Ablation (EVLA) in Vellore, Tamil Nadu",
 shortDescription: "Painless, non-surgical laser closure of diseased veins with immediate walk-home recovery.",
 fullDescription: "<h2>Modern Vascular Care: Say Goodbye to Painful Veins</h2>\n<p><strong>Varicose Veins</strong> are not just a cosmetic concern; they are a sign of underlying venous insufficiency that can lead to ulcers, bleeding, and deep vein thrombosis (DVT). At Indira Super Speciality Hospital, we have replaced traditional 'stripping' surgery with the international gold-standard: <strong>Endovenous Laser Ablation (EVLA)</strong>.</p>\n<p>This minimally invasive procedure uses a tiny laser fiber inserted into the diseased vein under ultrasound guidance. The laser energy gently collapses the vein wall, causing it to seal shut. Your body naturally reroutes blood flow to healthy veins, providing immediate relief from the heavy, aching sensation in your legs.</p>\n\n<h3>The Indira Laser Advantage</h3>\n<ul>\n<li><strong>Precision Mapping</strong>: We use high-resolution Color Doppler to map every valve, ensuring we only treat the source of the problem.</li>\n<li><strong>Zero Incisions</strong>: The entire procedure is performed through a tiny needle puncture, meaning no stitches and no visible scars.</li>\n<li><strong>Local Anesthesia</strong>: Performed under 'Tumescent' local anesthesia, making the procedure safer and allowing you to remain fully awake and comfortable.</li>\n<li><strong>Permanent Results</strong>: EVLA has a success rate of over 98%, significantly higher than traditional surgery or injections alone.</li>\n</ul>",
 features: [
 { title: "Diode Laser Tech", description: "Use of 1470nm radial fibers for uniform vein closure.", icon: "Zap" },
 { title: "Doppler Guided", description: "Real-time ultrasound monitoring for sub-millimeter accuracy.", icon: "Activity" },
 { title: "Walk-Home Recovery", description: "Patients are encouraged to walk immediately post-procedure.", icon: "Clock" }
 ],
 benefits: [
 { title: "Instant Relief", description: "Disappearance of 'heavy leg' syndrome within 24 hours.", icon: "CheckCircle" },
 { title: "Aesthetic Excellence", description: "Bulging veins flatten and fade without surgical scars.", icon: "Sparkles" },
 { title: "Low DVT Risk", description: "Active mobilization prevents post-operative clot formation.", icon: "Shield" }
 ],
 faq: [
 { question: "Is the procedure painful?", answer: "Most patients describe a sensation of mild pressure during the local anesthesia injection, but the laser treatment itself is virtually painless." },
 { question: "When can I return to work?", answer: "Most patients return to desk work the very next day. We only advise avoiding heavy gym workouts for about 1 week." },
 { question: "Are the results permanent?", answer: "Yes. Once a vein is sealed by the laser, it is eventually absorbed by the body and cannot reopen. However, maintaining a healthy weight helps prevent new veins from becoming varicose." }
 ]
 },
 {
 id: "t-118",
 slug: "av-fistula-surgery",
 parentServiceSlug: "nephrology",
 title: "AV Fistula Surgery",
 shortDescription: "Expert vascular access creation for long-term dialysis.",
 fullDescription: "A well-functioning vascular access is the lifeline for dialysis patients. Our skilled vascular surgeons perform precise <strong>AV Fistula Surgery</strong>, creating a robust connection between an artery and a vein to ensure safe, effective, and continuous hemodialysis treatments.",
 features: ["Pre-operative Duplex Ultrasound Mapping", "Radiocephalic & Brachiocephalic Techniques", "Dedicated Vascular Surgical Team", "Fistula Salvage Procedures"],
 benefits: ["Ensures Reliable Dialysis Access", "Lower Risk of Clots compared to Catheters", "Significantly Reduced Infection Risk", "Longer Lifespan of the Access Point"]
 },
 {
 id: "t-119",
 slug: "total-knee-replacement-cost",
 parentServiceSlug: "orthopaedics",
 title: "Knee Replacement",
 shortDescription: "Advanced computer-navigated Total Knee Replacement (TKR).",
 fullDescription: "Regain your mobility and live pain-free. Our Center for Excellence executes <strong>Total Knee Replacements</strong> using zero-error computer navigation and high-flex imported implants. Our rapid rehabilitation protocol gets you walking on the very same day.",
 features: ["Computer-Navigated Surgical Precision", "USFDA Approved High-Flex Implants", "Minimally Invasive Sub-vastus Approach", "Dedicated Joint Replacement ICU"],
 benefits: ["Zero-Error Implant Alignment", "Bend Your Knee Freely", "Walk Within 24 Hours", "Implants Built to Last 20+ Years"]
 },
 {
 id: "t-120",
 slug: "hip-replacement-surgery-guide",
 parentServiceSlug: "orthopaedics",
 title: "Hip Replacement",
 shortDescription: "Minimally invasive Total Hip Replacement for severe arthritis.",
 fullDescription: "Is hip pain limiting your lifestyle? Regain freedom of movement with our <strong>Total Hip Replacement Surgery</strong>. We use advanced, muscle-sparing techniques and highly durable Ceramic-on-Ceramic implants to restore your hip joint function completely, ensuring a fast and smooth recovery.",
 features: ["Ceramic-on-Ceramic Implants", "Minimally Invasive Anterior/Posterior Approaches", "Dual Mobility Cup Options", "Customized Pain Management"],
 benefits: ["Immediate Relief from Chronic Hip Pain", "Restores Full Range of Motion", "Return to Pain-Free Walking", "Implants Last Up to 25 Years"]
 },
 {
 id: "t-121",
 slug: "arthroscopy-joint-surgery",
 parentServiceSlug: "orthopaedics",
 title: "Arthroscopy",
 shortDescription: "Keyhole joint surgery for sports injuries and cartilage tears.",
 fullDescription: "Get back to the sport you love faster. <strong>Arthroscopy</strong> is a minimally invasive \"keyhole\" procedure used to diagnose and treat joint problems, especially in the knee and shoulder. Using a tiny HD camera, our sports medicine experts repair ligaments and cartilage without large surgical cuts.",
 features: ["HD Fiber-Optic Camera Visualization", "Radiofrequency Ablation Tech", "Day-Care Surgery Option", "Advanced Sports Rehab Center"],
 benefits: ["Extremely Small Incisions", "Less Post-Operative Swelling", "Rapid Return to Athletics", "Accurate Diagnosis and Repair"]
 },
 {
 id: "t-122",
 slug: "acl-reconstruction-recovery",
 parentServiceSlug: "orthopaedics",
 title: "ACL Reconstruction",
 shortDescription: "Expert arthroscopic ACL ligament repair and rehabilitation.",
 fullDescription: "A torn ACL shouldn't end your active life. Our <strong>Arthroscopic ACL Reconstruction</strong> utilizes a graft to replace the torn ligament in your knee. Delivered by elite sports medicine surgeons, this procedure restores the knee's stability so you can pivot and jump with confidence again.",
 features: ["All-Inside ACL Reconstruction Technique", "Autograft / Allograft Options", "Anatomic Graft Placement", "Phased Physiotherapy Program"],
 benefits: ["Restores Complete Knee Stability", "Prevents Secondary Cartilage Damage", "Minimizes Joint Pain", "High Success Rate in Athletes"]
 },
 {
 id: "t-123",
 slug: "spine-surgery-disc-prolapse",
 parentServiceSlug: "orthopaedics",
 title: "Spine Surgery",
 shortDescription: "Microscopic and minimally invasive solutions for back pain.",
 fullDescription: "Living with chronic back pain or sciatica? Our Spine Center offers advanced <strong>Spine Surgery</strong> for conditions like slipped discs (Disc Prolapse), spinal stenosis, and spondylolisthesis. With microscopic precision, we decompress nerves safely to give you your life back.",
 features: ["Micro-Endoscopic Discectomy (MED)", "Spinal Fusion with Pedicle Screws", "C-Arm Image Guidance", "Dedicated Neuro-monitoring"],
 benefits: ["Alleviates Radiating Leg Pain (Sciatica)", "Improves Walking Distance", "Minimal Muscle Disruption", "Faster Recovery than Open Spine Surgery"]
 },
 {
 id: "t-124",
 slug: "fracture-care-rehabilitation",
 parentServiceSlug: "orthopaedics",
 title: "Fracture Care",
 shortDescription: "24/7 expert trauma care for complex fractures and crush injuries.",
 fullDescription: "Accidents happen, but our trauma team is always ready. We provide immediate, comprehensive <strong>Fracture Care & Rehabilitation</strong> for everything from simple cast treatments to complex, multi-fragment intra-articular fractures requiring advanced titanium plating and interlocking nails.",
 features: ["24/7 Poly-Trauma Readiness", "Minimally Invasive Plate Osteosynthesis (MIPO)", "Titanium Locking Plates", "In-house Physical Therapy"],
 benefits: ["Restores Perfect Bone Alignment", "Immediate Pain Stabilization", "Prevents Improper Healing (Malunion)", "Accelerates Safe Weight-Bearing"]
 },
 {
 id: "t-126",
 slug: "male-infertility-causes",
 parentServiceSlug: "urology",
 title: "Male Infertility",
 shortDescription: "Expert diagnosis and surgical correction for male factor infertility.",
 fullDescription: "Infertility is a shared journey. We offer highly specialized <strong>Male Infertility Evaluation and Treatment</strong>. From advanced semen analysis to microscopic surgeries for varicocele or sperm retrieval (TESE/PESA), our andrologists provide discrete, result-oriented care.",
 features: ["Advanced Semen Analysis & DNA Fragmentation", "Microscopic Varicocelectomy", "Surgical Sperm Retrieval (PESA/TESE)", "Hormonal Imbalance Correction"],
 benefits: ["Greatly Improves Sperm Quality", "Increases Natural Conception Odds", "Enables IVF/ICSI Success", "Strictly Confidential Care"]
 },
 {
 id: "t-127",
 slug: "coronary-angiography-guide",
 parentServiceSlug: "cardiology",
 title: "Coronary Angiography",
 shortDescription: "Gold-standard imaging to detect blockages in heart arteries.",
 fullDescription: "Chest pain or shortness of breath? A <strong>Coronary Angiography</strong> is the most accurate test to map blockages in your heart's blood vessels. Using our state-of-the-art Flat Panel Cath Lab, we capture high-resolution contrast images to determine if you need medication, stenting, or bypass.",
 features: ["Radial Approach (Via the Wrist)", "Advanced Flat Panel Cath Lab", "Performed by Senior Interventional Cardiologists", "Takes Only 15-20 Minutes"],
 benefits: ["Identifies Exact Blockage Location & Severity", "Discharge in Only 4 Hours", "Minimal Bleeding Risk", "Crucial for Preventing Heart Attacks"]
 },
 {
 id: "t-128",
 slug: "heart-angioplasty-procedure",
 parentServiceSlug: "cardiology",
 title: "Heart Angioplasty",
 shortDescription: "Life-saving stenting procedure for blocked coronary arteries.",
 fullDescription: "In the event of a heart attack, every second counts. Our 24/7 Primary <strong>Heart Angioplasty</strong> service immediately opens blocked arteries using high-quality Drug-Eluting Stents (DES). This minimally invasive procedure restores blood flow instantly, saving the heart muscle from permanent damage.",
 features: ["24/7 Emergency Primary Angioplasty", "USFDA Approved Drug-Eluting Stents", "Intravascular Ultrasound (IVUS) Guidance", "Radial Route (Wrist) Technique"],
 benefits: ["Instantly Stops Heart Attack Progress", "Saves Heart Muscle Function", "Faster Recovery than Bypass", "Short Hospital Stay"]
 },
 {
 id: "t-129",
 slug: "pacemaker-implantation-steps",
 parentServiceSlug: "cardiology",
 title: "Pacemaker Implantation",
 shortDescription: "Expert insertion of pacemakers and defibrillators for rhythm disorders.",
 fullDescription: "Does your heart beat too slowly or irregularly? We offer highly specialized <strong>Pacemaker Implantation</strong> services. From single and dual-chamber pacemakers to advanced Implantable Cardioverter Defibrillators (ICDs), our electophysiology team ensures your heart maintains a perfect rhythm.",
 features: ["Single & Dual Chamber Pacemakers", "CRT and ICD Devices", "Leadless Pacemaker Options", "Lifelong Device Monitoring"],
 benefits: ["Prevents Fainting and Fatigue", "Life-Saving Shock Delivery (ICDs)", "Restores Normal Energy Levels", "Minimally Invasive Local Anesthesia Procedure"]
 },
 {
 id: "t-130",
 slug: "heart-valve-replacement-surgery",
 parentServiceSlug: "cardiology",
 title: "Heart Valve Replacement",
 shortDescription: "Minimally invasive TAVR/TAVI and open-heart surgical valve repair.",
 fullDescription: "Does a faulty heart valve make you feel breathless and fatigued? Our Cardiac Surgery Center excels in <strong>Heart Valve Replacement & Repair</strong>. Whether you need a traditional Biological/Mechanical valve replacement or a cutting-edge, non-surgical Transcatheter Aortic Valve Replacement (TAVR), we have the expertise to get your heart pumping perfectly again.",
 features: ["Transcatheter Aortic Valve Replacement (TAVR)", "Mitral Valve Repair (MVR)", "Durable Mechanical & Tissue Valves", "Beating Heart Surgery Options"],
 benefits: ["Eliminates Severe Breathlessness", "Prevents Heart Failure", "Minimally Invasive Options Available", "Long-Term Survival Improvement"]
 },
 {
 id: "t-131",
 slug: "cardiac-surgery-bypass",
 parentServiceSlug: "cardiology",
 title: "Cardiac Bypass (CABG)",
 shortDescription: "Beating-heart bypass surgery for severe coronary artery disease.",
 fullDescription: "When multiple heart arteries are severely blocked, a <strong>Coronary Artery Bypass Graft (CABG)</strong> is the safest, most durable solution. Our renowned cardiothoracic surgeons perform 'Beating Heart' (Off-Pump) bypass surgeries, using your own healthy blood vessels to create new pathways for blood to reach your heart muscle, significantly reducing recovery times.",
 features: ["Off-Pump (Beating Heart) CABG", "Total Arterial Revascularization (LIMA-RIMA)", "Dedicated Cardiac ICU", "Minimally Invasive Options (MIDCAB)"],
 benefits: ["Relieves Severe Angina", "Reduces Risk of Future Heart Attacks", "Promotes Long-term Heart Function", "Safer for Diabetic Patients"]
 },
 {
 id: "t-132",
 slug: "dementia-alzheimers-care",
 parentServiceSlug: "neurology",
 title: "Dementia & Alzheimer's",
 shortDescription: "Compassionate, comprehensive care for memory loss disorders.",
 fullDescription: "Watching a loved one experience memory loss is incredibly difficult. Our multidisciplinary Neurology team provides expert <strong>Dementia & Alzheimer's Care</strong>. Through precise neuro-cognitive testing and MRI imaging, we diagnose the exact type of dementia, offering advanced medical therapies and behavioral management to slow progression and improve quality of life.",
 features: ["Detailed Neuro-Cognitive Assessments", "High-Resolution Brain MRI/PET", "Medication Management Protocols", "Caregiver Support & Counseling"],
 benefits: ["Slows Down Cognitive Decline", "Manages Behavioral Symptoms", "Improves Daily Patient Safety", "Provides Essential Family Guidance"]
 },
 {
 id: "t-133",
 slug: "stroke-unit-rehabilitation",
 parentServiceSlug: "neurology",
 title: "Elite Stroke Unit & Rehab",
 shortDescription: "Rapid 'Golden Hour' response and advanced neuro-rehabilitation post-stroke.",
 fullDescription: "Life after a stroke requires intensive, specialized rehabilitation. Our <strong>Stroke Recovery</strong> center combines expert neurology with dedicated physiotherapy and speech therapy. Using evidence-based neuroplasticity techniques, we help patients regain lost motor skills, speech, and independence in a supportive environment.",
 features: ["Golden Hour Thrombolysis", "Robotic-Assisted Gait Training", "Speech and Swallow Therapy", "Occupational Therapy for Daily Living"],
 benefits: ["Accelerates Brain Rewiring", "Restores Lost Muscle Mobility", "Improves Communication Skills", "Drives Independence at Home"]
 },
 {
 id: "t-134",
 slug: "epilepsy-and-seizure-care",
 parentServiceSlug: "neurology",
 title: "Elite Epilepsy & Seizure Care",
 shortDescription: "Precise seizure diagnosis and targeted management protocols for all ages.",
 fullDescription: "Seizures should not control your life. We offer comprehensive <strong>Epilepsy Treatment</strong> starting with continuous Video EEG monitoring to pinpoint the exact origin of seizures in the brain. We then tailor treatment plans, ranging from Anti-Epileptic Drugs (AEDs) to ketogenic diets and surgical evaluations for drug-resistant cases.",
 features: ["Long-Term Digital EEG Monitoring", "High-Resolution 3T Epilepsy MRI", "Advanced Anti-Epileptic Drug Management", "Epilepsy Surgery Evaluation"],
 benefits: ["Achieves Long-Term Seizure Freedom", "Prevents Brain Injury from Falls", "Optimizes Medication to Avoid Side Effects", "Restores Driving and Work Capabilities"]
 },
 {
 id: "t-135",
 slug: "migraine-relief-management",
 parentServiceSlug: "neurology",
 title: "Migraine Relief",
 shortDescription: "Targeted therapies and lifestyle management for chronic migraines.",
 fullDescription: "Don't let debilitating headaches steal your days. Our comprehensive <strong>Migraine Relief & Management</strong> clinic offers highly specialized care for chronic migraines and cluster headaches. We combine advanced diagnostic imaging with modern prophylactics, acute abortive therapies, and Botox injections to significantly reduce headache frequency and severity.",
 features: ["CGRP Monoclonal Antibodies Therapy", "Botox Injections for Chronic Migraine", "Trigger Identification Counseling", "Advanced MRI to Rule Out Secondary Causes"],
 benefits: ["Drastically Reduces Headache Days", "Minimizes Reliance on Painkillers", "Restores Quality of Life and Work", "Personalized Attack Action Plans"]
 },
 {
 id: "t-136",
 slug: "parkinsons-disease-care",
 parentServiceSlug: "neurology",
 title: "Parkinson's Disease",
 shortDescription: "Expert movement disorder management and DBS evaluation.",
 fullDescription: "Regain control of your movements. Our Movement Disorders Clinic specializes in the holistic care of <strong>Parkinson's Disease</strong>. Our neurologists offer optimized pharmacological therapies to manage tremors, rigidity, and bradykinesia natively, alongside evaluation for advanced interventions like Deep Brain Stimulation (DBS) for qualifying patients.",
 features: ["Optimized Levodopa Therapy Protocols", "Evaluation for Deep Brain Stimulation (DBS)", "Targeted Physical & Occupational Therapy", "Botulinum Toxin for Dystonia"],
 benefits: ["Improves Motor Function & Balance", "Reduces Tremors and Rigidity", "Prolongs Independent Living", "Multidisciplinary Support System"]
 },
 {
 id: "t-139",
 slug: "ercp-bile-duct-stone-removal",
 aliases: [
 "ercp", "bile-duct-stone", "jaundice-treatment", "pancreatitis-management",
 "best-hospital-in-vellore-for-gastro-problem", "best-hospital-for-gastrointestinal-issues",
 "gastro-doctor-in-vellore", "endoscopy-in-vellore", "endoscopy-specialist-in-vellore",
 "endoscopy-surgery-in-vellore", "ulcer-problem-treatment-in-vellore", "gastric-problem-treatment-in-vellore",
 "gastric-problem-specialist-doctor-in-vellore", "blood-vomitting-treatment-in-vellore",
 "blood-while-passing-motion-treatment-in-vellore", "blood-while-passing-stool-treatment-in-vellore",
 "ibs-treatment-in-vellore", "rectal-prolapse-treatment-in-vellore", "laparoscopic-rectal-prolapse-surgery-treatment-in-vellore-tn",
 "pain-while-passing-motion-treatment-specialist-in-vellore", "constipation-treatment-in-vellore",
 "chronic-diarrhoea-treatment-in-vellore", "difficulty-in-swallowing-problem", "hiatus-hernia-problem-treatment-in-vellore",
 "hiatus-hernia-problem-surgery-in-vellore", "hiatus-hernia-surgeon-in-vellore", "best-hospital-for-hiatus-hernia-treatment-in-vellore",
 "best-surgeon-for-hiatus-hernia-problem-treatment-in-vellore-tn"
 ],
 parentServiceSlug: "gastroenterology",
 title: "ERCP Bile Duct",
 shortDescription: "Advanced endoscopic removal of bile duct stones and stents.",
 fullDescription: "Jaundice or severe abdominal pain caused by a blocked bile duct requires expert intervention. <strong>ERCP (Endoscopic Retrograde Cholangiopancreatography)</strong> is a highly specialized, non-surgical procedure used to diagnose and treat conditions of the bile and pancreatic ducts, including the extraction of stones and placement of stents to relieve blockages.",
 features: ["Non-Surgical Stone Extraction", "Placement of Plastic or Metal Stents", "Fluoroscopic X-Ray Guidance", "Therapeutic and Diagnostic Capabilities"],
 benefits: ["Avoids Major Open Surgery", "Rapid Relief from Obstructive Jaundice", "Quick Post-Procedure Recovery", "Highly Effective for Complex Biliary Disease"]
 },
 {
 id: "t-140",
 slug: "liver-cirrhosis-treatment",
 parentServiceSlug: "gastroenterology",
 title: "Liver Cirrhosis",
 shortDescription: "Comprehensive management and transplant evaluation for liver disease.",
 fullDescription: "Chronic liver damage needs urgent, specialized care. Our Hepatology department provides expert <strong>Liver Cirrhosis Management</strong>. We focus on halting disease progression, managing complex complications like ascites or variceal bleeding, and providing seamless evaluation and bridging therapies for liver transplantation when necessary.",
 features: ["Liver FibroScan for Non-Invasive Staging", "Variceal Banding (EVL)", "Transjugular Intrahepatic Portosystemic Shunt (TIPS)", "Liver Transplant Evaluation Clinic"],
 benefits: ["Delays Progression to End-Stage Liver Failure", "Prevents Fatal Gastrointestinal Bleeding", "Optimizes Nutrition and Fluid Balance", "Improves Overall Survival Rates"]
 },
 {
 id: "t-142",
 slug: "ibs-treatment-guide",
 parentServiceSlug: "gastroenterology",
 title: "IBS Treatment",
 shortDescription: "Personalized dietary and medical protocols for irritable bowel.",
 fullDescription: "Living with chronic bloating, diarrhea, or constipation? <strong>Irritable Bowel Syndrome (IBS)</strong> requires a highly individualized approach. Our gastroenterologists utilize a combination of specific dietary modifications (like the FODMAP diet), gut-brain therapeutics, and targeted medications to restore your gut health and give you back control of your life.",
 features: ["FODMAP Diet Guidance", "Gut-Brain Behavioral Therapy", "Advanced Microbiome Assessments", "Targeted Spasmolytic Medications"],
 benefits: ["Resolves Chronic Bloating and Pain", "Normalizes Bowel Movements", "Identifies Specific Food Triggers", "Significantly Improves Daily Comfort"]
 },
 {
 id: "t-144",
 slug: "advanced-dialysis-center",
 parentServiceSlug: "nephrology",
 title: "Advanced Dialysis Center",
 shortDescription: "Elite 24/7 high-flux hemodialysis and CRRT for critical care.",
 fullDescription: "Our Advanced Dialysis unit provides safe and effective hemodialysis using high-flux filtration technology for patients with renal failure, integrated with 24/7 ICU support.",
 features: ["24/7 High-Flux Hemodialysis", "CRRT Multi-Filtrate System", "Strict Infection Control Protocols"],
 benefits: ["Effectively Cleanses Blood Toxins", "Maintains Safe Fluid Balance", "Highly Sterile Infection-Free Environment", "Professional Renal Nursing"]
 },
 {
 id: "t-144-1",
 slug: "preventive-kidney-care",
 parentServiceSlug: "nephrology",
 title: "Preventive Kidney Care",
 shortDescription: "Halting kidney disease progression in diabetic and hypertensive patients.",
 fullDescription: "Proactive clinical intervention to slow down CKD and diabetic nephropathy, focused on preservation and avoiding dialysis.",
 features: ["Metabolic Renal Profiling", "Precision BP Management", "Diabetic Nephropathy Control"],
 benefits: ["Delay Dialysis for Years", "Integrated Renal Nutrition", "Specialized Lab Access"]
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
 fullDescription: "Diabetes is the leading cause of kidney failure. Protect your kidneys early with our <strong>Diabetic Nephropathy Clinic</strong>. We use early microalbuminuria screening protocols natively integrated into your diabetes care plan, deploying advanced nephroprotective medications to stop protein leakage and halt kidney function decline.",
 features: ["Early Microalbuminuria Screening", "Advanced SGLT2 & RAAS Inhibitor Therapy", "Integrated Endocrinologist Collaboration", "Strict Blood Pressure Management"],
 benefits: ["Prevents Progression to Dialysis", "Slows Rate of GFR Decline", "Protects Cardiovascular Health", "Holistic Diabetic Management"]
 },
 {
 id: "t-147",
 slug: "chronic-kidney-disease-stages",
 parentServiceSlug: "nephrology",
 title: "CKD Stages Management",
 shortDescription: "Targeted staging and proactive progression slowing for CKD.",
 fullDescription: "Navigating <strong>Chronic Kidney Disease (CKD)</strong> requires expert, staged care. Whether you are at Stage 1 or approaching Stage 5, our nephrologists provide personalized dietary modifications, anemia management, and bone metabolism stabilization to keep your native kidneys functioning for as long as possible.",
 features: ["Renal Diet & Nutrition Counseling", "Erythropoietin Therapy for Anemia", "Bone/Mineral Metabolism Control", "Pre-emptive Transplant Planning"],
 benefits: ["Delays Need for Dialysis", "Manages Severe Fatigue and Weakness", "Prevents Bone Fractures", "Provides a Clear Long-Term Care Roadmap"]
 },
 {
 id: "t-148",
 slug: "chemotherapy-side-effects",
 parentServiceSlug: "oncology",
 title: "Chemotherapy & Targeted Therapy",
 shortDescription: "Systemic cancer treatment tailored to your specific tumor genetics.",
 fullDescription: "Fighting cancer requires strategy and precision. Our Medical Oncology department offers advanced <strong>Chemotherapy, Targeted Therapy, and Immunotherapy</strong> protocols. We construct bespoke treatment regimens based on the molecular profiling of your tumor safely administered within our specialized Day-Care Infusion Center.",
 features: ["Molecular Tumor Board Assessments", "Genomic-Guided Targeted Therapy", "Immunotherapy Access", "Dedicated Day-Care Infusion Unit"],
 benefits: ["Maximizes Efficacy Against Cancer Cells", "Actively Manages Side Effects like Nausea", "Outpatient Administration for Comfort", "Personalized to Your Genetic Profile"]
 },
 {
 id: "t-149",
 slug: "radiation-therapy-overview",
 parentServiceSlug: "oncology",
 title: "Radiation Therapy",
 shortDescription: "Ultra-precise radiation delivery to eradicate deep-seated tumors.",
 fullDescription: "Our <strong>Radiation Oncology</strong> center utilizes high-end Linear Accelerators to deliver pinpoint-accurate radiation. By employing advanced techniques like IMRT and VMAT, we deliver maximum tumoricidal doses directly to the cancer while actively sparing the surrounding healthy organs from collateral damage.",
 features: ["Intensity-Modulated Radiation (IMRT)", "Volumetric Modulated Arc Therapy (VMAT)", "Image-Guided Precision (IGRT)", "Brachytherapy Options"],
 benefits: ["Painless, Non-Invasive Treatment", "Drastically Reduces Collateral Tissue Damage", "Shrinks Tumors Before Surgery", "Curative for Many Localized Cancers"]
 },
 {
 id: "t-150-1",
 slug: "surgical-oncology-center",
 parentServiceSlug: "oncology",
 title: "Elite Surgical Oncology Center",
 shortDescription: "Curative, radical tumor resections using precision techniques.",
 fullDescription: "Expert execution of complex cancer surgeries including Mastectomy, Colectomy, and Gastrectomy with curative intent.",
 features: ["Radical Cancer Resections", "Minimally Invasive Onco-Surgery", "HEPA-Filtered Operating Suites"],
 benefits: ["Tumor Board Governance", "Rapid Staging Diagnostics", "Compassionate Care Ecosystem"]
 },
 {
 id: "t-150-2",
 slug: "medical-oncology-chemotherapy",
 parentServiceSlug: "oncology",
 title: "Elite Medical Oncology & Chemo",
 shortDescription: "Targeted systemic therapy and immunotherapy in a comfort-first day care center.",
 fullDescription: "Administration of advanced chemotherapy and targeted drugs focusing on tumor response and patient quality of life.",
 features: ["Precision Chemotherapy", "Advanced Immunotherapy", "Pain & Palliative Management"],
 benefits: ["Stress-Free Day Care", "Elite Oncology Nursing", "Nutritional Oncology Support"]
 },
 {
 id: "t-151",
 slug: "breast-cancer-screening-guide",
 parentServiceSlug: "oncology",
 title: "Breast Cancer Clinic",
 shortDescription: "Early detection screening and complete breast cancer management.",
 fullDescription: "Early detection saves lives. Our dedicated <strong>Breast Cancer Clinic</strong> provides a safe, private environment for comprehensive screening using advanced 3D Mammography and Ultrasound. We offer end-to-end care, from needle biopsies to breast-conserving surgeries (lumpectomies) and immediate aesthetic breast reconstruction.",
 features: ["3D Digital Mammography (Tomosynthesis)", "Minimally Invasive Core Needle Biopsies", "Breast-Conserving Surgery (BCS)", "Oncoplastic Reconstructive Surgery"],
 benefits: ["Detects Cancer Years Before Symptoms", "High Rate of Complete Cure", "Superior Aesthetic Outcomes", "Compassionate, All-Female Support Staff Available"]
 },
 {
 id: "t-152",
 slug: "palliative-care-services",
 parentServiceSlug: "oncology",
 title: "Palliative Care",
 shortDescription: "Compassionate pain management and quality of life support.",
 fullDescription: "Cancer treatment can be physically and emotionally taxing. Our <strong>Palliative Care Services</strong> focus solely on your comfort. We provide expert pain management, nutritional support, and psychological counseling to help you and your family navigate the challenges of advanced illness with dignity and profound support.",
 features: ["Advanced Pain Management Protocols", "Customized Nutritional Support Plans", "Dedicated Psychological Counseling", "Family & Caregiver Support Groups"],
 benefits: ["Significantly Improves Daily Comfort", "Reduces Treatment-Related Nausea/Fatigue", "Alleviates Anxiety and Depression", "Ensures Patient Dignity Always"]
 }
,
 {
 id: "t-302",
 slug: "acute-kidney-injury-care",
 parentServiceSlug: "nephrology",
 title: "Acute Kidney Injury (AKI)",
 shortDescription: "Rapid diagnostic and critical care for sudden loss of kidney function.",
 fullDescription: "Acute Kidney Injury (AKI) requires immediate clinical intervention. Our nephrology team specializes in identifying the cause—whether pre-renal (blood flow), intrinsic (tissue), or post-renal (obstruction)—and implementing advanced fluid management and emergency dialysis (CRRT) to prevent permanent kidney damage.",
 features: ["Emergency CRRT Capabilities","Advanced Fluid Monitoring","Urine Output Auditing","Electrolyte Correction Tech"],
 benefits: ["Prevents Chronic Failure","Restores Fluid Balance","Rapid Functional Recovery","Critical Care Integration"]
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
 title: "Dementia & Alzheimer's (Clinical)",
 shortDescription: "Compassionate, high-intensity care for memory loss and cognitive decline.",
 fullDescription: "Alzheimer's and related dementias require more than just medication—they need a structured environment and specialist neurological support. Our dementia care unit provides precise neuro-cognitive profiling, medication management (cholinesterase inhibitors), and caregiver training to maintain dignity and slow cognitive progression.",
 features: ["Cognitive Profiling Suite","3T Brain MRI Imaging","Medication Management Lab","Caregiver Support Training"],
 benefits: ["Slows Memory Decline","Manages Behavioral Symptoms","Improves Patient Vigor","Peace of Mind for Families"]
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
 title: "Bell's Palsy Recovery",
 shortDescription: "Rapid diagnostic and steroid therapy for sudden facial paralysis.",
 fullDescription: "Bell's Palsy is a sudden weakness in the muscles on one half of the face. Our neurology team provides immediate intervention using high-dose corticosteroids and antiviral therapies to reduce nerve inflammation, coupled with specialized facial physiotherapy to ensure complete functional recovery and minimize long-term facial drooping.",
 features: ["Nerve Conduction Mapping","Facial Physio Protocols","Advanced Steroid Therapy","Rapid Diagnostic Audit"],
 benefits: ["Faster Functional Regain","Prevents Muscle Atrophy","Full Aesthetic Recovery","Reduces Nerve Inflammation"]
 },
 {
 id: "t-311",
 slug: "bladder-cancer-treatment-options",
 parentServiceSlug: "nephrology",
 title: "Bladder Cancer Overview",
 shortDescription: "Diagnostic and therapeutic strategies for urothelial carcinoma.",
 fullDescription: "Bladder cancer detection involves advanced cystoscopy and molecular testing. Our treatment protocols include Transurethral Resection (TURBT), intravesical immunotherapy (BCG), and radical surgical options for muscle-invasive cases, ensuring a focus on both cancer clearance and functional preservation.",
 features: ["HD Blue Light Cystoscopy","TURBT Surgical Precision","Intravesical BCG Therapy","Tumor Molecular Profiling"],
 benefits: ["Early Stage Detection","Preserves Bladder Function","High Remission Rates","Advanced Uro-Oncology Support"]
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
 title: "Brain Tumor Microsurgery",
 shortDescription: "Advanced neuro-oncology for benign and malignant brain tumors.",
 fullDescription: "Tumors of the brain and spine require unparalleled surgical precision. Our neuro-oncology unit utilizes high-definition microscopes, neuronavigation systems, and intraoperative monitoring to safely excise tumors while preserving critical neurological functions. We provide end-to-end care from biopsy to advanced recovery.",
 features: ["HD Neuronavigation Systems","Intraoperative Monitoring","Micro-Surgical Suites","Neuro-Oncology Specialists"],
 benefits: ["Maximizes Tumor Clearance","Preserves Motor Functions","Minimal Surgical Trauma","Complete Life Support Back-up"]
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
 title: "Cancer Pain Management",
 shortDescription: "Advanced palliative care and multi-modal pain relief strategies.",
 fullDescription: "Chronic pain is a significant challenge in oncology. Our pain management team utilizes a WHO-compliant analgesic ladder, including specialized nerve blocks, PCA pumps, and pharmaceutical interventions, to ensure maximum comfort and improved quality of life for patients undergoing active treatment or palliative care.",
 features: ["WHO-Ladder Analgesia","Specialized Nerve Blocks","Multi-Modal Pain Protocols","Palliative Support Team"],
 benefits: ["Significant Pain Reduction","Improves Sleep & Appetite","Enhances Patient Comfort","Dignified Care Approach"]
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
 title: "Cervical Cancer Screening",
 shortDescription: "Pap smear and HPV testing for early detection and prevention.",
 fullDescription: "Cervical cancer is highly preventable with regular screening. We offer advanced liquid-based cytology (Pap Smear) and high-risk HPV DNA testing to identify precancerous changes early. Our specialists provide clear guidance on results and follow-up colposcopy if needed for definitive diagnosis.",
 features: ["Liquid-Based Cytology","HPV DNA Typing Lab","Colposcopy Suites","Rapid Result Audits"],
 benefits: ["Prevents Cancer Progress","Early Pre-Cancer Discovery","Safe and Routine Procedure","Guided Prevention Path"]
 },
 {
 id: "t-328",
 slug: "cervical-cancer-vaccines",
 parentServiceSlug: "oncology",
 title: "HPV Vaccination (Cervical)",
 shortDescription: "Preventative immunization against cancer-causing HPV strains.",
 fullDescription: "The HPV vaccine is a breakthrough in cancer prevention. Consisting of a course of injections, it protects against the most common types of Human Papillomavirus that cause cervical, vaginal, and vulvar cancers. We provide screening and vaccination for girls and young women in a safe clinical environment.",
 features: ["WHO-Approved Vaccines","Pain-Free Injection Tech","Adolescent Health Suite","Immunization Tracking"],
 benefits: ["Lifelong Cancer Shield","High Prevention Efficacy","Safe Clinical Standards","Invests in Future Health"]
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
 title: "ZSR Stapler Circumcision",
 shortDescription: "Modern, stitch-less circumcision for phimosis and aesthetics.",
 fullDescription: "We provide the latest in urological technology with ZSR Stapler Circumcision. Unlike traditional surgery, this method is stitch-free, virtually bloodless, and offers a perfect cosmetic finish. It is the preferred solution for both medical (Phimosis, Balanitis) and aesthetic requirements with minimal downtime.",
 features: ["ZSR Stitchless Tech","Bloodless Procedure Flow","Perfect Cosmetic Result","15-Minute Surgical Time"],
 benefits: ["Superior Aesthetic Finish","Virtually Painless Post-Op","No Stitch Removal Needed","Same-Day Work Return"]
 },
 {
 id: "t-333",
 slug: "colon-cancer-treatment",
 parentServiceSlug: "oncology",
 title: "Colon Cancer Surgery",
 shortDescription: "Advanced resection and chemotherapy for colorectal malignancies.",
 fullDescription: "Colorectal cancer requires a combination of surgery and systemic therapy. Our gastro-oncologists perform precise tumor resections—including laparoscopic colectomies—followed by targeted chemotherapy protocols. We focus on preserving bowel function and achieving the highest possible cure rates through multidisciplinary care.",
 features: ["Laparoscopic Colectomy","Precision Tumor Staging","Advanced Chemotherapy Lab","Stoma Management Support"],
 benefits: ["Maximizes Cure Potential","Preserves Bowel Integrity","Faster Surgical Recovery","Targeted Cancer Clearance"]
 },
 {
 id: "t-335",
 slug: "colposcopy-procedure-details",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Diagnostic Colposcopy",
 shortDescription: "Detailed cervical examination following an abnormal Pap smear.",
 fullDescription: "A colposcopy is a more detailed look at the cervix using a specialized magnifying instrument. If your screening results were atypical, our gynecologists use colposcopy to identify potential precancerous areas. We can perform a micro-biopsy during the same session if any suspicious cells are detected.",
 features: ["High-Mag Colposcope","Digital Imaging Capture","In-Office Micro-Biopsy","Guided Prevention Audit"],
 benefits: ["Pinpoint Diagnostic Focus","Prevents Cancer Progress","Quick 15-Minute Procedure","Clear Guided Next Steps"]
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
 id: "t-708",
 slug: "diabetic-foot-ulcer-care",
 parentServiceSlug: "general-surgery",
 title: "Comprehensive Diabetic Foot Salvage & Care",
 shortDescription: "Multi-disciplinary wound management focusing on limb preservation and rapid ulcer healing.",
 fullDescription: "<h2>Limb Preservation: The Diabetic Foot Excellence Program</h2>\n<p>For a diabetic patient, a small foot wound can quickly escalate into a life-threatening infection. At Indira Super Speciality Hospital, our <strong>Diabetic Foot Salvage Program</strong> is dedicated to one goal: preventing amputations. We combine vascular surgery, infectious disease control, and advanced podiatric wound care to heal even the most stubborn 'non-healing' ulcers.</p>\n<p>We utilize <strong>VAC (Vacuum-Assisted Closure)</strong> therapy and bio-active dressings to stimulate rapid tissue growth. By addressing both the infection and the underlying blood flow issues (ischemia), we provide a comprehensive safety net for the diabetic foot.</p>\n\n<h3>Our Foot Salvage Protocol</h3>\n<ul>\n<li><strong>Precision Debridement</strong>: Surgical removal of infected tissue to allow healthy skin to granulate.</li>\n<li><strong>Vascular Optimization</strong>: Working with interventionalists to ensure adequate blood supply reaching the toes.</li>\n<li><strong>Off-loading Techniques</strong>: Using specialized footwear and 'Total Contact Casts' to take pressure off the ulcer site.</li>\n<li><strong>Infection Bio-Mapping</strong>: Targeted antibiotic therapy based on deep tissue cultures, not just surface swabs.</li>\n</ul>",
 features: [
 { title: "VAC Therapy", description: "Negative pressure wound therapy to accelerate healing.", icon: "Activity" },
 { title: "Vascular Doppler", description: "Assessment of lower limb circulation for healing potential.", icon: "Zap" },
 { title: "Bio-Active Dressings", description: "Use of silver and collagen dressings to fight infection.", icon: "Shield" }
 ],
 benefits: [
 { title: "Amputation Prevention", description: "90% success rate in salvaging high-risk diabetic limbs.", icon: "CheckCircle" },
 { title: "Rapid Wound Closure", description: "Significantly faster healing times than traditional gauze.", icon: "Clock" },
 { title: "Restored Mobility", description: "Getting you back on your feet with specialized footwear.", icon: "Star" }
 ],
 faq: [
 { question: "Why won't my foot ulcer heal?", answer: "High blood sugar, poor circulation, and nerve damage (neuropathy) all prevent normal healing. Professional 'off-loading' and debridement are usually required to restart the healing process." },
 { question: "Is amputation the only option for gangrene?", answer: "Not always. If caught early, aggressive debridement and vascular bypass or stenting can often save the limb or at least limit the extent of surgery." },
 { question: "How can I prevent foot ulcers?", answer: "Daily self-inspection, never walking barefoot, and choosing professionally fitted diabetic footwear are the three most important steps." }
 ]
 },
 {
 id: "t-348",
 slug: "diabetic-nephropathy-prevention",
 parentServiceSlug: "nephrology",
 title: "Diabetic Kidney Prevention",
 shortDescription: "Proactive screening and medical strategies to protect diabetic kidneys.",
 fullDescription: "Diabetes is the leading cause of renal failure. Our prevention program focuses on early microalbuminuria detection, blood pressure optimization using ACE/ARBs, and advanced SGLT2 inhibitor therapy to shield the kidneys from glucose-related damage and halt the progression of nephropathy.",
 features: ["Microalbuminuria Screening","Precision BP Management","SGLT2 Shielding Therapy","Renal-Diabetic Dietotics"],
 benefits: ["Prevents Dialysis Need","Slows Filtration Decline","Protects Heart Health","Early Detection Security"]
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
 title: "Ectopic Pregnancy Care",
 shortDescription: "Emergency medical and surgical management of tubal pregnancies.",
 fullDescription: "An ectopic pregnancy is a life-threatening condition where the fetus grows outside the uterus. We provide rapid diagnostic ultrasound and beta-hCG monitoring, followed by emergency laparoscopic surgery or medical management (Methotrexate) to safely resolve the pregnancy and preserve future fertility.",
 features: ["Emergency USG Diagnostics","Laparoscopic Salpingectomy","Methotrexate Protocols","Fertility Preservation Focus"],
 benefits: ["Saves Maternal Health","Prevents Internal Bleeding","Rapid Emergency Response","Emotional Support Care"]
 },
 {
 id: "t-352",
 slug: "eeg-test-procedure",
 parentServiceSlug: "neurology",
 title: "EEG (Brain Wave) Study",
 shortDescription: "Diagnostic brain wave monitoring to detect seizures and epilepsy.",
 fullDescription: "An Electroencephalogram (EEG) is a non-invasive test that records the electrical activity of your brain. Our advanced digital EEG systems can capture even subtle abnormal activity, aiding in the diagnosis of epilepsy, sleep disorders, and other encephalopathies. We offer both standard and long-term video EEG monitoring.",
 features: ["Digital Waveform Capture","Video EEG Synchronization","Specialist Neurologist Audit","Comfortable Testing Suite"],
 benefits: ["Precise Seizure Discovery","Identifies Epilepsy Type","Non-Invasive and Safe","Accurate Diagnostic Roadmap"]
 },
 {
 id: "t-353",
 slug: "endometriosis-pain-management",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Endometriosis Care",
 shortDescription: "Advanced laparoscopic excision and hormonal pain management.",
 fullDescription: "Endometriosis is a painful condition where tissue similar to the lining of the uterus grows outside of it. Our clinic specializes in <strong>Endometriosis Treatment</strong>, focusing on advanced laparoscopic excision of lesions and hormonal management to relieve chronic pelvic pain and improve fertility outcomes.",
 features: ["Cold-Excision Laparoscopy","Expert Pelvic Mapping","Hormonal Balance Suite","Fertility Preservation Lab"],
 benefits: ["Resolves Chronic Pain","Improves Fertility Path","Reduces Cyst Recurrence","Holistic Quality of Life"]
 },
 {
 id: "t-356",
 slug: "erectile-dysfunction-treatment",
 parentServiceSlug: "nephrology",
 title: "Erectile Dysfunction (Urological)",
 shortDescription: "Clinical diagnosis and treatment for male sexual health concerns.",
 fullDescription: "Erectile dysfunction (ED) is often linked to vascular health or chronic conditions like diabetes and kidney disease. We offer a discreet clinical environment to diagnose the root cause—whether hormonal, neurological, or vascular—and provide effective medical and surgical (penile implant) solutions.",
 features: ["Hormonal Profiling Suite","Penile Doppler Imaging","Medical Therapy Protocols","Discrete Specialist Care"],
 benefits: ["Restores Sexual Confidence","Identifies Vascular Risks","Personalized Treatment Plan","Confidential Clinical Setting"]
 },
 {
 id: "t-358",
 slug: "fibroid-removal-surgery",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Fibroid Removal (Myomectomy)",
 shortDescription: "Surgical excision of uterine fibroids to restore health and fertility.",
 fullDescription: "Uterine fibroids can cause heavy bleeding and pain. Our surgical team specializes in both open and minimally invasive (Laparoscopic) myomectomies to remove fibroids while keeping the uterus intact. This is the preferred solution for women who wish to preserve their fertility and resolve chronic symptoms.",
 features: ["Laparoscopic Myomectomy","Precision Uterine Suture","Minimally Invasive Entry","Post-Op Recovery Support"],
 benefits: ["Stops Heavy Bleeding","Preserves Fertility Paths","Reduces Pelvic Pressure","Faster Return to Work"]
 },
 {
 id: "t-361",
 slug: "fluid-restriction-guidelines",
 parentServiceSlug: "nephrology",
 title: "Fluid Management Guide",
 shortDescription: "Clinical daily fluid limits for patients on dialysis or with advanced CKD.",
 fullDescription: "For patients with end-stage renal disease, managing fluid intake is critical to prevent pulmonary edema and heart failure. We provide personalized 'pints-per-day' guidelines, low-sodium dietary strategies, and weight-tracking protocols to ensure you stay in a safe fluid balance between dialysis sessions.",
 features: ["Daily Intake Mapping","Sodium Retention Audit","Weight Gain Tracking","Clinical Edema Screening"],
 benefits: ["Prevents Heart Strain","Reduces Breathing Issues","Improves Dialysis Efficacy","Ensures Patient Safety"]
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
 title: "Glomerulonephritis Care",
 shortDescription: "Advanced immunomodulation for inflammation of the kidney filters.",
 fullDescription: "Inflammation of the glomeruli (Glomerulonephritis) can lead to rapid kidney failure. We use kidney biopsies to identify the specific type—IgA, Membranous, or Lupus Nephritis—and apply targeted immunotherapy, steroids, and ACE inhibitors to stop protein leakage and preserve filtration function.",
 features: ["Biopsy-Guided Diagnosis","Advanced Immunotherapy","Proteinuria Tracking","Auto-Immune Screening"],
 benefits: ["Prevents Renal Progress","Stops Protein Leakage","Reduces Body Swelling","Customized Clinical Protocols"]
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
 title: "Head & Neck Oncology",
 shortDescription: "Oral, throat, and thyroid cancer management.",
 fullDescription: "Head and neck cancers affect critical functions like speech, swallowing, and appearance. Our multidisciplinary team provides advanced surgical resections, reconstructive micro-surgery, and precision radiation therapy. We focus on eradicating the cancer while maximizing functional and aesthetic outcomes for every patient.",
 features: ["Micro-Vascular Reconstruction","Precision Radiation (IMRT)","Speech Therapy Modules","Swallowing Rehab Support"],
 benefits: ["Preserves Speech & Swallow","High Reconstruction Success","Dedicated Support Team","Holistic Recovery Path"]
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
 title: "Hemodialysis vs PD Options",
 shortDescription: "Comparing blood-based and abdominal-based dialysis for better life quality.",
 fullDescription: "Choosing between Hemodialysis (HD) and Peritoneal Dialysis (PD) depends on your lifestyle and medical history. While HD offers high-efficiency filtration in our 24/7 center, PD provides greater mobility for home-based care. We help you choose the modality that offers the best quality of life and clinical outcomes.",
 features: ["HD Efficiency Audit","PD Training Program","Vascular Access Mapping","Home Mobility Evaluation"],
 benefits: ["Tailored Lifestyle Fit","Ensures Optimal Clearance","Informed Modality Choice","Continuous Clinical Support"]
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
 title: "High Creatinine Diagnosis",
 shortDescription: "Identifying the root cause of elevated kidney markers in blood.",
 fullDescription: "Elevated creatinine is a warning sign of reduced kidney function. We perform a deep clinical audit—including GFR calculation, ultrasound imaging, and serum analysis—to determine if the cause is dehydration, infection, medical toxicity, or underlying CKD, allowing for immediate corrective therapy.",
 features: ["eGFR Precision Mapping","Serum Electrolyte Screen","Renal Ultrasound Audit","Drug Toxicity Review"],
 benefits: ["Early Kidney Protection","Accurate Marker Analysis","Prevents Future Damage","Guided Treatment Plan"]
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
 title: "Hydrocele Surgery",
 shortDescription: "Minimally invasive correction of scrotal fluid swelling.",
 fullDescription: "A hydrocele is a collection of fluid around the testicle that causes painless swelling. Our urologists provide surgical correction (Hydrocelectomy) using advanced techniques to ensure minimal discomfort and rapid recovery. We focus on achieving a definitive solution with excellent cosmetic results.",
 features: ["Precision Hydrocelectomy","Incision-less Drainage Options","Day-Care Surgical Flow","Minimal Post-Op Swelling"],
 benefits: ["Resolves Scrotal Heaviness","Painless Recovery Path","Eliminates Infection Risk","Rapid Return to Routine"]
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
 title: "Cancer Immunotherapy",
 shortDescription: "Harnessing the immune system to recognize and attack cancer cells.",
 fullDescription: "Immunotherapy is a revolutionary cancer treatment that helps your own immune system fight the disease. We offer a range of options including checkpoint inhibitors and monoclonal antibodies, tailored to your specific cancer type. This approach can lead to long-term remission with a different side-effect profile than traditional chemotherapy.",
 features: ["Checkpoint Inhibitor Access","Monoclonal Antibody Suite","Immune Response Monitoring","Advanced Side-Effect Labs"],
 benefits: ["Long-Term Disease Control","Targeted Immune Response","Spares Healthy Cells","Personalized Treatment Flow"]
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
 title: "Kidney Biopsy (Renal)",
 shortDescription: "Ultrasound-guided tissue sampling for precise kidney diagnosis.",
 fullDescription: "A kidney biopsy is the gold standard for diagnosing complex renal diseases. Using real-time ultrasound guidance and automated biopsy needles, we safely extract a tiny tissue sample under local anesthesia. This allows for detailed histopathology and immunofluorescence to determine the exact cause of kidney dysfunction.",
 features: ["USG-Guided Precision","Local Anesthesia Suite","Automated Biopsy Tech","Rapid Histopathology Audit"],
 benefits: ["Accurate Disease Staging","Informed Treatment Path","Minimally Invasive Entry","Safe Clinical Execution"]
 },
 {
 id: "t-399",
 slug: "kidney-diet-plan",
 parentServiceSlug: "nephrology",
 title: "Renal Nutrition Plan",
 shortDescription: "Customized diets to manage phosphorus, potassium, and protein.",
 fullDescription: "Diet is as important as medication in renal care. Our clinical nutritionists provide evidence-based renal meal plans that strictly manage electrolytes (Sodium, Potassium, Phosphorus) and calculate your ideal protein intake. This diet reduces the workload on your kidneys and prevents the build-up of metabolic toxins.",
 features: ["Renal Calorie Mapping","Electrolyte Conscious Lab","Personalized Meal Charts","Phosphorus Management Tech"],
 benefits: ["Lowers Metabolic Toxins","Prevents Heart Complications","Sustains Kidney Function","Improves Patient Vigor"]
 },
 {
 id: "t-401",
 slug: "kidney-stone-prevention-tips",
 parentServiceSlug: "nephrology",
 title: "Preventing Kidney Stones",
 shortDescription: "Clinical strategies to stop stone recurrence through hydration and diet.",
 fullDescription: "Once you've had a kidney stone, the risk of recurrence is high. Our prevention clinic provides metabolic stone analysis (24-hour urine collection) to identify why stones form. We then provide targeted hydration targets, citrate therapy, and calcium-balance diets to keep your kidneys stone-free forever.",
 features: ["Metabolic Stone Analysis","24-Hour Urine Profiling","Citrate Therapy Protocols","Oxalate Management Guides"],
 benefits: ["Stops Painful Recurrence","Avoids Repeated Surgeries","Protects Kidney Tissue","Natural Preventive Care"]
 },
 {
 id: "t-402",
 slug: "kidney-transplant-preparation",
 parentServiceSlug: "nephrology",
 title: "Transplant Prep (Renal)",
 shortDescription: "Surgical and medical optimization for kidney transplant candidates.",
 fullDescription: "Preparing for a kidney transplant involves rigorous physical and psychological optimization. We ensure all pre-transplant clearances—including cardiac fitness, cross-matching, and HLA typing—are completed meticulously. Our goal is to ensure both donor and recipient are in peak clinical condition for the most successful outcome.",
 features: ["HLA Cross-Matching Lab","Cardiac Fitness Clearance","Pre-Transplant Stabilization","Donor Optimization Suite"],
 benefits: ["Higher Transplant Success","Lower Rejection Risk","Ensures Patient Safety","Detailed Clinical Readiness"]
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
 title: "HoLEP Laser Prostatectomy",
 shortDescription: "Advanced holmium laser enucleation for severe BPH.",
 fullDescription: "Holmium Laser Enucleation of the Prostate (HoLEP) is a modern, minimally invasive alternative to traditional TURP. Using a high-power laser, we surgically remove the obstructive part of the prostate without any external incisions. This technique is ideal for very large prostates and ensures minimal bleeding with rapid recovery.",
 features: ["Holmium Laser Precision","Incision-less Endoscopy","Large Prostate Specialists","Real-Time Flow Monitoring"],
 benefits: ["Safe for Blood-Thinner Patients","Superior Urinary Flow","Virtually No Bleeding","Rapid Discharge (24 Hours)"]
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
 id: "t-709",
 slug: "lipoma-excision-surgery",
 parentServiceSlug: "general-surgery",
 title: "Precision Lipoma & Soft Tissue Excision",
 shortDescription: "Aesthetic surgical removal of fatty tumors and skin lumps with hidden scarring.",
 fullDescription: "<h2>Gentle Surgery: Removing Benign Lumps & Bumps</h2>\n<p><strong>Lipomas</strong> are non-cancerous growths of fatty tissue that develop slowly under the skin. While they are generally harmless, they can become painful if they press on nerves or aesthetically bothersome if they grow large. At Indira Super Speciality Hospital, we provide <strong>Precision Lipoma Excision</strong>, ensuring the entire tumor is removed to prevent it from returning.</p>\n<p>We specialize in 'Minimal-Incision' techniques. By using an incision much smaller than the lump itself, we can gently 'deliver' the lipoma out, leaving you with a significantly smaller surgical mark that fades beautifully over time.</p>\n\n<h3>Why Opt for Surgical Excision?</h3>\n<ul>\n<li><strong>Definitive Cure</strong>: Unlike 'squeezing' or injections, surgery removes the entire capsule, meaning the lump will not return.</li>\n<li><strong>Histopathology Check</strong>: Every tissue we remove is sent to our lab to 100% confirm its benign nature, providing you with total peace of mind.</li>\n<li><strong>Immediate Comfort</strong>: If the lipoma was causing pressure or restricting movement, the relief is instantaneous.</li>\n</ul>",
 features: [
 { title: "Minimal Incision", description: "Removing large lumps through tiny, aesthetic openings.", icon: "Sparkles" },
 { title: "Local Anesthesia", description: "Safe, awake procedure with zero 'hangover' from sedation.", icon: "Shield" },
 { title: "Hidden Closures", description: "Sub-cuticular stitches that don't need removal.", icon: "CheckCircle" }
 ],
 benefits: [
 { title: "Permanent Result", description: "Complete removal of the fat capsule to prevent recurrence.", icon: "Target" },
 { title: "Superior Aesthetics", description: "Fine-line scars that are almost invisible once healed.", icon: "Award" },
 { title: "Day-Care Flow", description: "In and out of the hospital in under 2 hours.", icon: "Clock" }
 ],
 faq: [
 { question: "Will my lipoma grow back?", answer: "If the entire capsule is removed surgically, it is extremely rare for it to return in the same spot." },
 { question: "Is the surgery done under local anesthesia?", answer: "Yes, most single lipomas are easily removed under local anesthesia while you are awake and comfortable." },
 { question: "Do I need to stay in the hospital?", answer: "No. This is a classic 'lunch-break' procedure. You can drive yourself home immediately after the dressing is applied." }
 ]
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
 title: "Lung Cancer Diagnostics",
 shortDescription: "Rapid screening and staging for early-stage lung malignancies.",
 fullDescription: "Early detection is key to surviving lung cancer. Our diagnostic suite includes Low-Dose CT (LDCT) scans, bronchoscopy with biopsy, and advanced molecular markers to identify tumors at their most treatable stage. We provide immediate staging and a clear roadmap for surgery or systemic therapy.",
 features: ["Low-Dose CT Screening","Bronchoscopy Suite","Molecular Marker Lab","Rapid Staging Protocols"],
 benefits: ["Early Detection Security","Informs Treatment Choice","Minimally Invasive Biopsy","Guided Clinical Support"]
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
 title: "Multiple Sclerosis (MS)",
 shortDescription: "Advanced immunomodulation to manage chronic nerve inflammation.",
 fullDescription: "Multiple Sclerosis (MS) is an autoimmune disorder affecting the central nervous system. We provide comprehensive Disease-Modifying Therapy (DMT) to slow progression and manage relapses. Our team also offers specialized neuro-rehabilitation and symptomatic management for fatigue, spasticity, and mobility challenges.",
 features: ["Disease Modifying Therapy","Flare-Up Steroid Protocols","Neuro-Mobility Training","Bladder & Fatigue Support"],
 benefits: ["Slower Disease Progression","Reduced Relapse Frequency","Improves Daily Mobility","Comprehensive Life Support"]
 },
 {
 id: "t-419",
 slug: "myasthenia-gravis-care",
 parentServiceSlug: "neurology",
 title: "Myasthenia Gravis Clinic",
 shortDescription: "Clinical management of muscle weakness and neuromuscular junction fatigue.",
 fullDescription: "Myasthenia Gravis is a chronic autoimmune neuromuscular disease that causes weakness in the skeletal muscles. Our clinic provides expert diagnosis via Repetitive Nerve Stimulation and antibody testing. Treatment focus includes pyridostigmine, immunosuppressive therapy, and plasma exchange for severe myasthenic crises.",
 features: ["Repetitive Nerve Stimulation","Antibody Diagnostic Lab","Plasma Exchange Suite","IVIG Therapy Options"],
 benefits: ["Restores Muscle Strength","Prevents Respiratory Crisis","Improves Daily Mobility","Consistent Symptom Control"]
 },
 {
 id: "t-420",
 slug: "myomectomy-surgery-cost",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Advanced Myomectomy",
 shortDescription: "Evidence-based surgical resection of uterine fibroids.",
 fullDescription: "Myomectomy is the surgical removal of fibroids from the uterus. We offer advanced surgical options—including laparoscopic and hysteroscopic approaches—tailored to the size and location of your fibroids. Our goal is to provide a permanent solution to symptomatic fibroids while prioritizing a quick and safe recovery.",
 features: ["Microsurgical Suturing","Laparoscopic Precision","Hysteroscopic Access","Comprehensive Post-Op Care"],
 benefits: ["Permanent Symptom Relief","Preserves Uterine Integrity","Minimally Invasive Options","High Success Rates"]
 },
 {
 id: "t-421",
 slug: "ncs-emg-test-guide",
 parentServiceSlug: "neurology",
 title: "NCS & EMG Diagnostic",
 shortDescription: "Electrophysiological testing for nerve and muscle health.",
 fullDescription: "Nerve Conduction Studies (NCS) and Electromyography (EMG) are essential for diagnosing nerve damage, muscle disease, or neuromuscular issues. These tests help identify conditions like carpal tunnel syndrome, neuropathy, or radiculopathy, allowing our neurologists to design a precise treatment roadmap for your recovery.",
 features: ["Advanced Electromyography","Nerve Conduction Velocities","Specialist Neuro-interpretation","Rapid Diagnostic Reporting"],
 benefits: ["Identifies Nerve Compression","Pinpoints Muscle Weakness","Guides Precise Therapy","Non-Invasive Diagnosis"]
 },
 {
 id: "t-422",
 slug: "nephrotic-syndrome-cure",
 parentServiceSlug: "nephrology",
 title: "Nephrotic Syndrome Care",
 shortDescription: "Clinical management of severe protein leakage and body swelling.",
 fullDescription: "Nephrotic syndrome is characterized by heavy proteinuria, low blood albumin, and severe edema (swelling). We use advanced diagnostic profiling to identify primary causes (like Minimal Change Disease) or secondary triggers. Treatment focuses on steroids, immunosuppressants, and strict dietary sodium control to restore kidney integrity.",
 features: ["Steroid Sparing Protocols","Daily Proteinuria Tracking","Advanced Edema Control","Serum Albumin Monitoring"],
 benefits: ["Resolves Severe Swelling","Restores Protein Balance","Prevents Kidney Scarring","Customized Patient Care"]
 },
 {
 id: "t-423",
 slug: "neuropathy-pain-relief",
 parentServiceSlug: "neurology",
 title: "Neuropathy Pain Relief",
 shortDescription: "Targeted clinical therapy for nerve pain and numbness.",
 fullDescription: "Chronic nerve pain (neuropathy) can be debilitating. We provide a comprehensive relief program focusing on identify the root cause—whether diabetic, nutritional, or toxic—and implementing advanced therapies like neuropathic agents, vitamin infusions, and lifestyle modifications to restore nerve health and comfort.",
 features: ["Nerve Damage Mapping","Targeted Pain Meds","Vitamin Infusion Therapy","Diabetic Foot Shielding"],
 benefits: ["Reduces Burning & Pain","Restores Normal Sensation","Prevents Future Damage","Significantly Improved Comfort"]
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
 title: "Ovarian Cyst Surgery",
 shortDescription: "Minimally invasive removal of painful or persistent ovarian cysts.",
 fullDescription: "Ovarian cysts that are large, persistent, or causing pain may require surgical removal. Using advanced laparoscopic (keyhole) surgery, we can precisely remove the cyst while preserving the healthy ovary. This ensures minimal pain, tiny scars, and a much faster return to your daily routine.",
 features: ["Keyhole Surgical Access","Ovarian Tissue Preservation","Rapid Staging Analysis","Minimal Incision Tech"],
 benefits: ["Significantly Less Pain","Preserves Ovarian Function","Tiny Aesthetic Scars","Rapid Hospital Discharge"]
 },
 {
 id: "t-427",
 slug: "overactive-bladder-relief",
 parentServiceSlug: "nephrology",
 title: "Overactive Bladder (OAB)",
 shortDescription: "Restoring bladder control and reducing urinary urgency.",
 fullDescription: "Overactive bladder (OAB) causes frequent, sudden urges to urinate that may be difficult to control. We provide a stepwise approach to relief, encompassing bladder retraining, pharmaceutical anticholinergics, and advanced therapies like Botox injections or Sacral Neuromodulation for refractory cases.",
 features: ["Urodynamic Flow Studies","Bladder Volume Mapping","Advanced Pharmacotherapy","Neuromodulation Options"],
 benefits: ["Stops Sudden Urgency","Restores Sleep (No Nocturia)","Increases Social Confidence","Non-Surgical Relief Paths"]
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
 title: "PET/CT Cancer Imaging",
 shortDescription: "High-resolution metabolic imaging for precise cancer staging.",
 fullDescription: "PET/CT scans provide a detailed metabolic map of your body, allowing oncologists to detect cancer cells that might be missed by traditional CT or MRI. This technology is vital for accurate staging, monitoring treatment response, and planning precision radiation or surgical interventions with unparalleled accuracy.",
 features: ["High-Res PET Integration","Metabolic Tumor Mapping","Precise Staging Reports","Radiation Planning Mesh"],
 benefits: ["Detects Tiny Metastases","Validates Treatment Success","Clear Clinical Roadmap","Reduces Unnecessary Surgery"]
 },
 {
 id: "t-439",
 slug: "phimosis-treatment-options",
 parentServiceSlug: "nephrology",
 title: "Phimosis Treatment",
 shortDescription: "Medical and surgical solutions for tight foreskin issues.",
 fullDescription: "Phimosis can lead to recurrent infections and urinary difficulties. We offer a full spectrum of care, from conservative steroid cream applications to painless ZSR Stapler Circumcision. The stapler technique ensures a perfectly aesthetic result with zero stitches and minimal post-operative downtime.",
 features: ["ZSR Stapler Technology","No-Stitch Procedure","Steroid Cream Mapping","Pediatric and Adult Care"],
 benefits: ["Painless Procedural Flow","Superior Aesthetic Outcome","Immediate Return to Work","Eliminates Infection Risk"]
 },
 {
 id: "t-441",
 slug: "polycystic-kidney-disease-management",
 parentServiceSlug: "nephrology",
 title: "PKD Management (Polycystic)",
 shortDescription: "Expert care for inherited cystic kidney disorders.",
 fullDescription: "Polycystic Kidney Disease (PKD) requires vigilant lifelong management to protect renal function. Our specialists focus on intensive blood pressure control, cyst volume monitoring via imaging, and the use of modern V2-receptor antagonists (Tolvaptan) to slow the growth of cysts and preserve native kidney function.",
 features: ["Genetic Risk Counseling","Cyst Volume MRI Tracking","Advanced BP Stabilization","Tolvaptan Access Program"],
 benefits: ["Slows Kidney Decline","Manages Chronic Pain","Lower Stroke Risk","Family Screening Support"]
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
 title: "Prostate Health Screen",
 shortDescription: "PSA testing and clinical exams for early prostate cancer detection.",
 fullDescription: "Prostate cancer is often asymptomatic in its early stages. Our screening program includes Prostate-Specific Antigen (PSA) blood tests and Digital Rectal Exams (DRE). For elevated results, we utilize advanced Multi-Parametric MRI (mpMRI) to identify clinical significance before recommending biopsy.",
 features: ["High-Precision PSA Lab","Multi-Parametric MRI","Specialist Uro-Analysis","Risk Stratification Audit"],
 benefits: ["Early-Stage Detection","Avoids Biopsy if Unnecessary","Informed Clinical Roadmap","Peace of Mind for Men"]
 },
 {
 id: "t-444",
 slug: "prostate-cancer-treatment-options",
 parentServiceSlug: "urology",
 title: "Prostate Cancer Care",
 shortDescription: "Surgical and medical solutions including Radical Prostatectomy.",
 fullDescription: "When prostate cancer is diagnosed, we provide a full spectrum of treatment options tailored to the tumor grade. This includes Active Surveillance, Nerve-Sparing Radical Prostatectomy, and advanced Hormone Therapy. Our goal is to achieve cancer clearance while prioritizing your quality of life and functionality.",
 features: ["Nerve-Sparing Surgery","Hormone Therapy Suite","Active Surveillance Log","Radiation Oncology Link"],
 benefits: ["High Cancer Clearance","Preserves Continence","Maintains Sexual Health","Customized Treatment Plan"]
 },
 {
 id: "t-446",
 slug: "proteinuria-treatment-options",
 parentServiceSlug: "nephrology",
 title: "Proteinuria Management",
 shortDescription: "Clinical strategies to stop protein leakage and protect kidneys.",
 fullDescription: "Protein in the urine (proteinuria) is a key marker of kidney stress. Our nephrology team provide targeted therapies including ACE inhibitors, ARBs, and dietary modifications to reduce the workload on your kidneys. We focus on stabilizing the glomerular basement membrane and preventing the progression to chronic kidney disease.",
 features: ["Precision Protein Tracking","ACE/ARB Stabilization","24-Hour Urine Profiling","Renal Dietetics Support"],
 benefits: ["Stops Kidney Scarring","Lowers Filtration Stress","Prevents Fluid Retention","Long-Term Renal Protection"]
 },
 {
 id: "t-447",
 slug: "radiation-therapy-guide",
 parentServiceSlug: "oncology",
 title: "Radiation Therapy (IMRT)",
 shortDescription: "Ultra-precise radiation delivery for deep-seated tumors.",
 fullDescription: "Radiation therapy uses high-energy beams to destroy cancer cells. We utilize Intensity Modulated Radiation Therapy (IMRT) and IG-RT to target tumors with sub-millimeter precision. This maximizes the dose to the cancer while sparing the surrounding healthy organs, leading to better control and fewer side effects.",
 features: ["Precision IMRT Planning","IG-RT Real-Time Imaging","Advanced Linear Accelerator","Multi-Leaf Collimation Tech"],
 benefits: ["Painless, Non-Invasive","Protects Healthy Tissue","Shrinks Tumors Effectively","Outpatient Treatment Flow"]
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
 id: "t-710",
 slug: "sebaceous-cyst-removal",
 parentServiceSlug: "general-surgery",
 title: "Advanced Sebaceous Cyst & Skin Lesion Removal",
 shortDescription: "Complete surgical excision of skin cysts to prevent infection and recurrence.",
 fullDescription: "<h2>Definitive Care for Skin Cysts: Zero Recurrence Focus</h2>\n<p>A <strong>Sebaceous Cyst</strong> (or Epidermoid Cyst) is a closed sac under the skin filled with keratin. Unlike a simple pimple, a cyst has a 'wall' or capsule. If this capsule is not completely removed, the cyst will inevitably regrow or become painfully infected (abscess). At Indira Super Speciality Hospital, our General Surgery team performs <strong>Definitive Cyst Excision</strong>.</p>\n<p>We prioritize removing the cyst 'in-toto'—meaning we take out the entire sac intact. This ensures the highest possible success rate and prevents the need for repeated procedures.</p>\n\n<h3>Managing Infected Cysts</h3>\n<p>If your cyst has already become red, painful, and swollen, it may have turned into an abscess. We provide immediate <strong>Incision and Drainage (I&D)</strong> to relieve the pressure and clear the infection, followed by a planned excision of the wall once the inflammation has settled.</p>\n\n<h3>Our Aesthetic Promise</h3>\n<p>We understand that many cysts appear on the face, neck, or back. Our surgeons use fine, plastic-surgery grade instruments and sutures to ensure that the eventual mark is as discreet as possible.</p>",
 features: [
 { title: "Total Capsule Excision", description: "Ensuring the entire cyst wall is removed to stop recurrence.", icon: "Target" },
 { title: "Infection Management", description: "Immediate relief for abscessed or painful cysts.", icon: "Zap" },
 { title: "Plastic Grade Sutures", description: "Use of fine materials for a nearly invisible scar.", icon: "Sparkles" }
 ],
 benefits: [
 { title: "Zero Regrowth", description: "Definitive surgical solution that lasts a lifetime.", icon: "CheckCircle" },
 { title: "Immediate Relief", description: "Stops the pressure and 'tightness' of the cyst.", icon: "Star" },
 { title: "Cosmetic Integrity", description: "Preserving your skin's appearance with expert closures.", icon: "Shield" }
 ],
 faq: [
 { question: "Can I just 'pop' the cyst myself?", answer: "No! Squeezing a cyst can force the contents deeper into the skin, causing a severe infection or even blood poisoning (cellulitis)." },
 { question: "How long does the surgery take?", answer: "Most simple cysts are removed in 15 to 20 minutes under local anesthesia." },
 { question: "What is the recovery time?", answer: "The small wound heals in 5-7 days. You can shower normally after 48 hours once the initial dressing is removed." }
 ]
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
 fullDescription: "Dental implants are the gold standard for replacing missing teeth. Our clinic specializes in <strong>Dental Implants</strong>, performing the procedure under <strong>Dr. Rockson Samuel</strong>, an expert in oral implantology. We use US-FDA approved titanium implants to ensure lifelong durability and a natural-looking smile.",
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
 title: "Polysomnography (Sleep Study)",
 shortDescription: "Comprehensive overnight monitoring to diagnose sleep apnea.",
 fullDescription: "Do you snore excessively or feel tired all day? A Polysomnography (Sleep Study) is the gold standard for diagnosing obstructive sleep apnea and other sleep-related breathing disorders. Our specialists monitor brain waves, oxygen levels, and heart rhythm overnight to tailor your CPAP or surgical treatment path.",
 features: ["Overnight Monitoring Suite","Oxygen Saturation Tracking","Digital EEG Integration","CPAP Titration Service"],
 benefits: ["Prevents Heart Strain","Restores Restful Sleep","Eliminating Daytime Fatigue","Long-Term Cardiac Protection"]
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
 title: "Spinal Cord Rehab",
 shortDescription: "Intensive neuro-rehabilitation for spinal trauma and surgery recovery.",
 fullDescription: "Recovering from a spinal cord injury requires a multidisciplinary approach. Our center combines expert neurology, intensive physiotherapy, and occupational therapy to help patients regain maximum possible motor function and independence. We use evidence-based protocols to manage spasticity and promote neuro-plastic recovery.",
 features: ["Gait Training Modules","Spasticity Control Clinic","Neuro-Physiotherapist Team","Occupational Daily Training"],
 benefits: ["Maximizes Functional Regain","Prevents Pressure Ulcers","Drives Patient Independence","Holistic Recovery Support"]
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
 title: "Targeted Cancer Therapy",
 shortDescription: "Targeted medicine designed to attack specific cancer cell markers.",
 fullDescription: "Targeted therapy is at the forefront of modern oncology. Unlike traditional chemotherapy, these drugs are designed to interfere with specific molecules involved in tumor growth. We use genetic profiling to identify if your cancer has markers that can be effectively targeted, leading to better outcomes with fewer side effects.",
 features: ["Genetic Tumor Profiling","Specific Marker Meds","Molecular Oncology Suite","Side-Effect Shielding"],
 benefits: ["Higher Treatment Efficacy","Fewer Systemic Side Effects","Tailored to Your Cancer","Advanced Clinical Standard"]
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
 parentServiceSlug: "urology",
 title: "Torsion Rescue Surgery",
 shortDescription: "Emergency 24/7 detorsion for acute scrotal pain.",
 fullDescription: "Testicular torsion is an absolute emergency. When the blood supply is cut off, every minute counts in saving the testicle. Our urology team is on-call 24/7 for immediate Doppler diagnosis and emergency Orchidopexy (surgical detorsion and fixation) to restore blood flow and prevent permanent loss of the organ.",
 features: ["24/7 Emergency Detorsion","Immediate Doppler Lab","Rapid Surgical Access","Bilateral Fixation Flow"],
 benefits: ["Saves Organ Viability","Rapid Pain Resolution","Prevents Future Episode","Preserves Male Fertility"]
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
 title: "Tubal Ligation (Sterilization)",
 shortDescription: "Permanent contraceptive surgery via keyhole technique.",
 fullDescription: "Tubal ligation is a safe and permanent form of birth control for women who have completed their families. Using minimally invasive laparoscopic techniques, we block or seal the fallopian tubes to prevent pregnancy. The procedure is reliable, permanent, and allows for a quick return to normal activities.",
 features: ["Laparoscopic Keyhole Entry","Permanent Birth Control","Day-Care Surgical Flow","Sterile Clinical Precision"],
 benefits: ["High Contraceptive Efficacy","Quick Recovery Time","No Long-Term Medication","Reliable Family Planning"]
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
 title: "Urethral Stricture Repair",
 shortDescription: "Advanced endoscopic and surgical widening of the urinary passage.",
 fullDescription: "Narrowing of the urethra (stricture) causes significant urinary blockage and pain. We offer specialized solutions including minimally invasive Optical Internal Urethrotomy (OIU) and complex Urethroplasty using buccal mucosa grafts, ensuring a permanent and robust restoration of urinary flow.",
 features: ["Laser Urethrotomy (OIU)","Buccal Mucosa Grafting","Uroflowmetry Validation","Advanced Urodynamics"],
 benefits: ["Permanent Passage Widening","Restores Strong Flow","Low Recurrence Rate","Minimally Invasive Options"]
 },
 {
 id: "t-486",
 slug: "urinary-incontinence-treatment",
 parentServiceSlug: "urology",
 title: "Urinary Incontinence",
 shortDescription: "Restoring bladder control through medical and surgical means.",
 fullDescription: "Urinary incontinence can significantly impact your quality of life. We provide a comprehensive diagnostic evaluation, including urodynamics, to identify the type—whether stress, urge, or overflow. Treatment ranges from pelvic floor rehabilitation and medication to advanced surgical 'sling' procedures for durable relief.",
 features: ["Urodynamic Flow Studies","Pelvic Floor Rehab","Advanced Surgical Slings","Medication Management Suite"],
 benefits: ["Stops Involuntary Leaks","Restores Social Confidence","Improves Physical Comfort","Tailored Relief Journey"]
 },
 {
 id: "t-487",
 slug: "urinary-tract-infection-treatment",
 parentServiceSlug: "nephrology",
 title: "UTI Clinical Management",
 shortDescription: "Expert diagnosis and targeted therapy for persistent urinary infections.",
 fullDescription: "Urinary Tract Infections (UTIs) can range from simple cystitis to severe kidney infections (Pyelonephritis). We provide rapid urine culture analysis to identify specific pathogens and deliver targeted antimicrobial therapy, along with investigating structural causes to prevent painful recurrences.",
 features: ["Rapid Culture Assessments","Structural passage Imaging","Targeted Antibiotic Lab","Recurrence Prevention Audit"],
 benefits: ["Rapid Pain Relief","Prevents Kidney Damage","Stops Chronic Recurrences","Safe Pregnancy Protocols"]
 },
 {
 id: "t-488",
 slug: "varicocele-surgery-guide",
 parentServiceSlug: "urology",
 title: "Varicocele Microsurgery",
 shortDescription: "Advanced correction of scrotal veins to improve fertility.",
 fullDescription: "A varicocele is an enlargement of the veins within the scrotum, which can cause pain and male infertility. We specialize in microsurgical sub-inguinal varicocelectomy—the gold standard approach—which provides the highest success rates and lowest recurrence with the fastest post-operative recovery.",
 features: ["Gold-Standard Microsurgery","High Magnification Optics","Infertility Risk Profiling","Rapid Recovery Protocols"],
 benefits: ["Improves Sperm Quality","Resolves Chronic Scrotal Pain","Minimally Invasive Entry","Maximizes Fertility Success"]
 },
 {
 id: "t-490",
 slug: "vertigo-dizziness-treatment",
 parentServiceSlug: "neurology",
 title: "Vertigo & Balance Care",
 shortDescription: "Clinical diagnosis and vestibular rehab for dizziness disorders.",
 fullDescription: "Dizziness and vertigo can be caused by inner ear issues or central neurological problems. We provide comprehensive vestibular assessments and maneuver-based therapies (like Epley) to resolve vertigo rapidly. Our balance clinic focuses on restoring stability and preventing falls in elderly and high-risk patients.",
 features: ["Vestibular Flow Audit","Epley Maneuver Specialists","Balance Training Tech","Central Neuro-screening"],
 benefits: ["Instantly Resolves Vertigo","Prevents Fall-Related Injury","Restores Stable Walking","Clear Diagnostic Certainty"]
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
 id: "t-25",
 slug: "laser-fissure-treatment",
 parentServiceSlug: "proctology",
 title: "Laser Fissure Treatment (L-SFM)",
 shortDescription: "Quick, effective laser solution for chronic anal fissures with rapid pain relief.",
 fullDescription: "Anal fissures are small tears in the lining of the anus that cause severe pain and bleeding. Our laser-assisted sphincterotomy (L-SFM) is a highly precise procedure that releases the tension in the anal muscle, allowing the fissure to heal rapidly without the need for large cuts or prolonged recovery.",
 features: [
 { title: "L-SFM Dilation", description: "Precision laser dilation of the internal sphincter.", icon: "Target" },
 { title: "No Stitches", description: "Minimal tissue trauma means no surgical stitches required.", icon: "Shield" },
 { title: "Rapid Pain Relief", description: "Nerve-ending cauterization provides instant pain reduction.", icon: "Zap" }
 ],
 benefits: [
 { title: "Immediate Comfort", description: "Significant reduction in pain during the first bowel movement.", icon: "Star" },
 { title: "Early Healing", description: "Complete mucosal healing within 10-14 days.", icon: "CheckCircle" },
 { title: "Non-Invasive", description: "Zero risk of major surgical scarring or trauma.", icon: "Activity" }
 ],
 faq: [
 { question: "Is laser fissure surgery painful?", answer: "The procedure itself is performed under anesthesia. Post-operatively, most patients report far less pain than they were experiencing from the fissure itself." },
 { question: "Can fissures recur after laser treatment?", answer: "When combined with a proper high-fiber diet and hydration, the recurrence rate after L-SFM is extremely low." }
 ]
 },
 {
 id: "t-26",
 slug: "fistula-surgery-treatment",
 parentServiceSlug: "proctology",
 title: "FiLaC Laser Fistula Closure",
 shortDescription: "Sphincter-saving laser closure for complex anal fistulas.",
 fullDescription: "FiLaC (Fistula-tract Laser Closure) is a revolutionary procedure for treating anal fistulas. Unlike traditional surgery (fistulotomy) which may involve cutting the sphincter muscle, FiLaC uses laser energy to close the fistula tract from the inside, preserving the muscle integrity and ensuring complete recovery without the risk of incontinence.",
 features: [
 { title: "Sphincter-Saving", description: "Preserves 100% of anal sphincter integrity.", icon: "Shield" },
 { title: "Radial Fiber Tech", description: "360-degree laser emission for uniform tract closure.", icon: "Zap" },
 { title: "Zero Cuttings", description: "No surgical incisions or deep tissue trauma.", icon: "Target" }
 ],
 benefits: [
 { title: "Incontinence Prevention", description: "Eliminates the risk of fecal incontinence associated with old surgery.", icon: "CheckCircle" },
 { title: "Faster Healing", description: "Tissue seals from within, allowing rapid outward healing.", icon: "Star" },
 { title: "Minimal Dressing", description: "No painful deep wound dressings required post-surgery.", icon: "Clock" }
 ],
 faq: [
 { question: "Can complex fistulas be treated with FiLaC?", answer: "Yes, FiLaC is particularly effective for complex and recurrent fistulas where preserving the sphincter muscle is critical to maintaining bowel control." },
 { question: "What is the success rate?", answer: "FiLaC has a high success rate, often exceeding 90% when performed by experienced proctologists using the correct laser power settings." }
 ]
 },
 {
 id: "t-27",
 slug: "laser-pilonidal-sinus-surgery",
 parentServiceSlug: "proctology",
 title: "SiLaC Laser Pilonidal Sinus Surgery",
 shortDescription: "Advanced laser ablation for pilonidal sinus with minimal scarring.",
 fullDescription: "SiLaC (Sinus Laser Closure) provides a minimally invasive alternative to wide excision for pilonidal sinus. By using a specialized 360-degree laser probe to ablate the sinus cavity and tract, we ensure a faster healing process with minimal tissue loss and significantly less scarring compared to traditional 'flap' surgery.",
 features: [
 { title: "Probe-Based Ablation", description: "Flexible laser fiber reaches the depth of every tract.", icon: "Zap" },
 { title: "Zero Flaps", description: "No large skin flaps or painful open wounds.", icon: "Shield" },
 { title: "Day-Care Choice", description: "Quick procedure with same-day return home.", icon: "Clock" }
 ],
 benefits: [
 { title: "Minimal Scarring", description: "Tiny entry points instead of large surgical scars.", icon: "Star" },
 { title: "Low Recurrence", description: "High-power laser sterilization of the sinus cavity.", icon: "CheckCircle" },
 { title: "Activity Return", description: "Resume sports and bike riding much faster than old methods.", icon: "Zap" }
 ],
 faq: [
 { question: "Is SiLaC better than traditional surgery?", answer: "Yes, for most cases. It avoids the large 'open wounds' that take months to heal, allowing patients to return to work in days." },
 { question: "When can I sit normally after SiLaC?", answer: "Most patients can sit comfortably within 2-3 days of the procedure." }
 ]
 },
 {
 id: "t-28",
 slug: "anal-abscess-treatment",
 parentServiceSlug: "proctology",
 title: "Comprehensive Anal Abscess Treatment",
 shortDescription: "Immediate emergency drainage and management for perianal abscesses.",
 fullDescription: "Anal abscesses are painful collections of pus near the anus that require immediate medical attention. At Indira Hospital, we provide 24/7 emergency drainage and comprehensive management to prevent the formation of anal fistulas and ensure rapid pain relief.",
 features: [
 "24/7 Emergency Drainage Facility",
 "Precision USG-guided aspiration",
 "Advanced antibiotic protocols",
 "Modern surgical drainage in modular OTs"
 ],
 benefits: [
 "Instant relief from throbbing pain",
 "Prevents complex fistula formation",
 "Expert critical care support",
 "Rapid wound healing management"
 ]
 },
 {
 id: "t-29",
 slug: "ibs-and-constipation-management",
 parentServiceSlug: "proctology",
 title: "IBS & Chronic Constipation Management",
 shortDescription: "Scientific management of bowel disorders and motility issues.",
 fullDescription: "Irritable Bowel Syndrome (IBS) and chronic constipation are complex conditions that affect the quality of life. Our proctology team uses a multidisciplinary approach, combining dietary modification, biofeedback, and advanced motility testing to provide long-term relief.",
 features: [
 "Comprehensive motility assessments",
 "Dietary and lifestyle counseling",
 "Advanced biofeedback therapy",
 "Stress-management integration"
 ],
 benefits: [
 "Consistent regular bowel movements",
 "Reduced bloating and abdominal pain",
 "Improved overall digestive health",
 "Personalized long-term management care"
 ]
 },
 {
 id: "t-30",
 slug: "rectal-prolapse-surgery",
 parentServiceSlug: "proctology",
 title: "Advanced Rectal Prolapse Surgery",
 shortDescription: "Laparoscopic and perineal repairs for rectal prolapse with high success rates.",
 fullDescription: "Rectal prolapse requires precise surgical correction to restore normal anatomy and function. We offer both laparoscopic (keyhole) rectopexy and perineal repairs (Thiersch/Altemeier's) specialized for the patient's age and health condition, ensuring optimal long-term outcomes.",
 features: [
 "Laparoscopic Ventral Mesh Rectopexy",
 "Perineal (Bottom-up) repair options",
 "High-definition surgical systems",
 "Senior colorectal surgical expertise"
 ],
 benefits: [
 "Restores normal bowel control",
 "Correction of pelvic floor descent",
 "Low recurrence with mesh integration",
 "Rapid post-surgical mobilization"
 ]
 },
 {
 id: "t-601",
 slug: "functional-endoscopic-sinus-surgery-fess",
 parentServiceSlug: "ent",
 title: "Functional Endoscopic Sinus Surgery (FESS)",
 shortDescription: "Precision 4K endoscopic treatment for chronic sinusitis, nasal polyps, and sinus drainage restoration.",
 fullDescription: "<h2>Reclaiming Your Airway: Advanced FESS at Indira Elite ENT Units</h2>\n<p>Chronic Rhinosinusitis is not merely a 'stuffed nose'; it is a debilitating clinical condition that affects your productivity, sleep quality, and overall cognitive clarity. When the natural drainage pathways of the paranasal sinuses are obstructed by inflammation, structural narrowing, or nasal polyps, it creates a persistent cycle of infection. <strong>Functional Endoscopic Sinus Surgery (FESS)</strong> is the modern gold standard designed to break this cycle by restoring natural sinus ventilation and drainage physiology.</p>\n<p>At Indira Super Speciality Hospital, under the expert leadership of our senior ENT surgeons, we have moved beyond traditional sinus surgery. We utilize <strong>4K Ultra-High Definition Endoscopy</strong>, which provides our surgical team with sub-millimeter visualization of the complex ethmoid, maxillary, frontal, and sphenoid sinus anatomy. This magnification allows for the precise removal of diseased tissue while meticulously preserving the surrounding healthy mucosa—a principle known as 'Functional' restoration.</p>\n\n<h3>The Technology Behind the Precision</h3>\n<p>Our ENT modular theaters are equipped with the most advanced surgical technology stack available in the region:</p>\n<ul>\n<li><strong>4K UHD Visualization</strong>: Provides 4 times the detail of standard HD, allowing for absolute precision near the delicate skull base and eye orbits.</li>\n<li><strong>Micro-Debrider Systems</strong>: Specialized 'power tools' that simultaneously shave and aspirate diseased polyps and tissue, preventing the tearing and trauma associated with traditional instruments.</li>\n<li><strong>Image-Guided Navigation (if required)</strong>: A 'GPS' for the sinuses that tracks the surgeon's tools in real-time against a pre-operative CT scan, ensuring safety in complex or recurrent cases.</li>\n</ul>\n\n<h3>Clinical Indications for FESS</h3>\n<p>While many sinus conditions respond to medical management (nasal steroids and saline rinses), FESS is definitively indicated when:</p>\n<ul>\n<li><strong>Chronic Sinusitis (CRS)</strong>: Inflammation persists for more than 12 weeks despite aggressive medical therapy.</li>\n<li><strong>Nasal Polyposis</strong>: Multiple or persistent polyps that obstruct the airway and smell receptors.</li>\n<li><strong>Recurrent Acute Sinusitis</strong>: Patients suffering from more than 4-5 severe episodes of acute infection per year.</li>\n<li><strong>Antro-choanal Polyps</strong>: Large polyps originating from the maxillary sinus that block the back of the throat.</li>\n<li><strong>Mucoceles</strong>: Mucus-filled cysts that can expand and put pressure on the brain or optic nerves.</li>\n</ul>\n\n<h3>Recovery and Post-Operative Outcomes</h3>\n<p>One of the most significant benefits of the 'Elite' approach to FESS is the rapid recovery. Because we perform the entire procedure through the natural nostrils (zero external incisions), there is no 'bruising' or 'black eyes' typically associated with older sinus procedures. Our <strong>Precision Recovery Protocol</strong> includes:</p>\n<ul>\n<li><strong>Advanced Dissolvable Packing</strong>: Most patients no longer require painful 'stripping' of nasal packs; we use materials that naturally dissolve or are easily suctioned during post-op visits.</li>\n<li><strong>Return to Work</strong>: Most patients return to light desk work within 3 to 5 days post-procedure.</li>\n<li><strong>Long-term Success</strong>: By restoring the natural 'Mucociliary Clearance' mechanism, we ensure that your sinuses can once again clear themselves of dust, bacteria, and allergens.</li>\n</ul>",
 features: [
 { title: "4K Endoscopy", description: "Sub-millimeter visualization of the skull base and orbits.", icon: "Activity" },
 { title: "Micro-Debrider", description: "Precision tissue removal with zero mucosal tearing.", icon: "Target" },
 { title: "Dissolvable Packs", description: "Painless recovery with no traditional 'nasal pack' removal.", icon: "Shield" }
 ],
 benefits: [
 { title: "Sinus Clarity", description: "Permanent resolution of chronic facial pain and pressure.", icon: "Star" },
 { title: "Easy Breathing", description: "Immediate and dramatic improvement in nasal airflow.", icon: "Zap" },
 { title: "Smell Restoration", description: "Clearing polyps often restores lost sense of smell (anosmia).", icon: "Sparkles" }
 ],
 faq: [
 { question: "Is FESS painful?", answer: "The procedure is done under high-quality general anesthesia. Post-operative pain is typically described as a 'heavy pressure' or 'severe head cold' for 48 hours, which is easily managed with mild pain-relief medications." },
 { question: "Will my nose shape change?", answer: "No. FESS is an internal procedure. There are no external cuts, and the external cosmetics of your nose remain identical to before surgery." },
 { question: "Can polyps return after surgery?", answer: "Surgery clears the 'blockage', but the underlying 'allergy' might remain. We provide a post-operative medical maintenance plan to minimize the risk of recurrence to less than 10-15%." }
 ]
 },
 {
 id: "t-602",
 slug: "septoplasty-deviated-septum-repair",
 parentServiceSlug: "ent",
 title: "Septoplasty: Deviated Septum Repair",
 shortDescription: "Surgical correction of the nasal septum to restore clear breathing, reduce snoring, and prevent sinus infections.",
 fullDescription: "<h2>Breathing with Clarity: Why Septoplasty is Essential</h2>\n<p>A <strong>Deviated Nasal Septum (DNS)</strong> is more than a structural asymmetry—it is a functional blockage that forces the body to work harder for every breath. When the thin wall of bone and cartilage between your nostrils is displaced, it can lead to chronic nasal obstruction, severe snoring, obstructive sleep apnea, and recurring sinus infections due to unilateral blockage.</p>\n<p>At Indira Hospital's Center for Rhinology, we approach <strong>Septoplasty</strong> with a commitment to both functional restoration and structural stability. Our senior surgeons perform 'Endoscopic Septoplasty', using small telescopes to visualize the deepest parts of the deviation that are often missed in traditional 'head-mirror' surgery. This ensures that the airway is maximally cleared without weakening the structural bridge of the nose.</p>\n\n<h3>Signs You May Need a Septoplasty</h3>\n<p>Chronic mouth-breathing and dependence on nasal decongestant sprays are major warning signs. Clinical symptoms include:</p>\n<ul>\n<li><strong>Persistent Nasal Blockage</strong>: Constant difficulty breathing through one or both nostrils.</li>\n<li><strong>Chronic Snoring</strong>: Often associated with sleep apnea and morning fatigue.</li>\n<li><strong>Recurring Sinus Infections</strong>: Caused by the 'spur' of the septum pressing against the sinus drainage areas.</li>\n<li><strong>Chronic Headaches</strong>: Specifically 'Contact Point' headaches where the septum touches the sensitive nasal turbines.</li>\n<li><strong>Recurrent Nosebleeds</strong>: Dryness on the side of the deviation causing frequent crusting and bleeding.</li>\n</ul>\n\n<h3>The Endoscopic Septoplasty Advantage</h3>\n<p>Unlike traditional methods that often rely on 'feel' and blind resection, our endoscopic approach offers:</p>\n<ul>\n<li><strong>Targeted Correction</strong>: We only remove or reshape the specific 'spur' or 'curved' portion, preserving maximum healthy cartilage for nose support.</li>\n<li><strong>Turbinate Reduction (Co-procedure)</strong>: We often combine septoplasty with 'Coblation Turbinoplasty' to shrink the swollen soft tissues inside the nose for a 2X improvement in breathing.</li>\n<li><strong>Minimal Bruising</strong>: The precision of the endoscope means far less trauma to the surrounding tissues, resulting in minimal post-operative swelling.</li>\n</ul>\n\n<h3>Recovery: What to Expect</h3>\n<p>Septoplasty is typically a day-care or short-stay procedure. Because the surgery is entirely internal, there are no visible external changes or scars. You may feel like you have a 'blocked nose' for 48-72 hours due to internal swelling, but once this subsides, patients often report the first 'clear breath' of their adult lives. Most patients are back to full professional capacity within 5 to 7 days.</p>",
 features: [
 { title: "Endoscopic Precision", description: "Direct visualization of the entire septal anatomy.", icon: "Activity" },
 { title: "Turbinate Contouring", description: "Simultaneous reduction of airway obstruction.", icon: "Target" },
 { title: "Cartilage Sparing", description: "Maximum strength preservation for the nasal bridge.", icon: "Shield" }
 ],
 benefits: [
 { title: "Clear Airway", description: "Immediate and permanent improvement in breathing.", icon: "CheckCircle" },
 { title: "Silence Snoring", description: "Significant reduction in night-time snoring and apnea.", icon: "Zap" },
 { title: "Stop Spray Dependence", description: "Reduces the need for habit-forming nasal decongestants.", icon: "Clock" }
 ],
 faq: [
 { question: "Will my nose look different?", answer: "No. Septoplasty is a functional surgery performed inside the nose. If you desire a change in the external shape as well, that would be a 'Septo-Rhinoplasty', which we also offer." },
 { question: "How long is the surgery?", answer: "A typical septoplasty takes approximately 45-60 minutes under general anesthesia." },
 { question: "Can I go home the same day?", answer: "Yes, the majority of our septoplasty patients are discharged on the same evening once the effects of anesthesia have worn off." }
 ]
 },
 {
 id: "t-603",
 slug: "coblation-tonsillectomy-and-adenoidectomy",
 parentServiceSlug: "ent",
 title: "Advanced Coblation Tonsillectomy & Adenoidectomy",
 shortDescription: "Pain-free, bloodless removal of tonsils and adenoids using low-temperature plasma technology. Ideal for pediatric and adult patients.",
 fullDescription: "<h2>The Evolution of Tonsil Surgery: Advanced Coblation Techniques</h2>\n<p>Chronic tonsillitis and enlarged adenoids are not just 'childhood issues'; they can lead to severe obstructive sleep apnea, recurring high-grade fevers, and permanent hearing issues due to Eustachian tube blockage. Traditional 'cold-steel' or 'cautery-based' tonsillectomy is often associated with significant post-operative pain and the risk of delayed bleeding. At Indira Hospital, we have pioneered the use of <strong>Coblation-assisted Tonsillectomy & Adenoidectomy</strong> in the region.</p>\n<p><strong>What is Coblation?</strong> Unlike standard cautery which operates at several hundred degrees (literally burning the tissue), Coblation uses low-temperature radiofrequency plasma (typically 40°C to 70°C). This allows the surgeon to gently dissolve the tissue at a molecular level with virtually zero heat damage to the sensitive pillars of the throat. This 'cold-ablation' makes the recovery for children and adults significantly smoother and faster.</p>\n\n<h3>Why Opt for Coblation over Traditional Cautery?</h3>\n<p>The primary reason is the <strong>Integrity of the Throat Pillars</strong>. By avoiding high heat, we ensure:</p>\n<ul>\n<li><strong>Drastically Less Pain</strong>: Patients report up to 50-60% less pain in the first 48 hours compared to laser or electric cautery.</li>\n<li><strong>Bloodless Procedure</strong>: The coblation wand simultaneously clears the tissue and seals the tiny blood vessels, resulting in a cleaner operative field.</li>\n<li><strong>Rapid Return to Diet</strong>: Children are often able to eat soft foods (like ice cream or chilled liquids) within just 2-3 hours of waking up from surgery.</li>\n<li><strong>Decreased Risk of Bleeding</strong>: The minimized thermal damage significantly reduces the risk of 'secondary' bleeding that can occur days after standard surgery.</li>\n</ul>\n\n<h3>Indications for Tonsil and Adenoid Removal</h3>\n<p>Our ENT specialists recommend intervention when the conditions become life-impairing:</p>\n<ul>\n<li><strong>Sleep Apnea</strong>: The child (or adult) stops breathing for seconds during sleep, leading to severe morning fatigue and growth issues in children.</li>\n<li><strong>Recurring Infections</strong>: More than 5-7 episodes of high-grade fever and sore throat per year.</li>\n<li><strong>Mouth Breathing</strong>: Chronic adenoid enlargement leading to 'Adenoid Facies' (changes in facial bone growth).</li>\n<li><strong>Peritonsillar Abscess</strong>: A severe 'collection of pus' in the throat that requires definitive tonsil removal.</li>\n</ul>\n\n<h3>The Pediatric Recovery Experience</h3>\n<p>We believe that a child’s hospital experience should be as trauma-free as possible. Our 'Elite' surgical unit uses pediatric-specific anesthetic protocols and the Coblation technology to ensure that the child is back home on the same day. Most children are back to their normal playful selves and school within 7 to 10 days, with minimal reliance on strong painkillers.</p>",
 features: [
 { title: "Plasma Technology", description: "Molecular dissolution of tissue with minimal heat damage.", icon: "Activity" },
 { title: "Bloodless Field", description: "Simultaneous ablation and coagulation for safety.", icon: "Shield" },
 { title: "Pediatric Focus", description: "Kid-friendly surgical and recovery protocols.", icon: "Target" }
 ],
 benefits: [
 { title: "Half the Pain", description: "Significantly more comfortable recovery than laser surgery.", icon: "Zap" },
 { title: "Fast-Track Diet", description: "Return to normal swallowing within hours/days, not weeks.", icon: "Apple" },
 { title: "Permanent Relief", description: "Eliminates snoring and recurring high-grade fevers.", icon: "CheckCircle" }
 ],
 faq: [
 { question: "Is Coblation better than Laser for tonsils?", answer: "Yes. Lasers operate at very high temperatures which can cause deep thermal burns in the throat. Coblation is a 'cold' technology that preserves the underlying muscle, leading to a much faster and less painful recovery." },
 { question: "What is the best age for this surgery?", answer: "Surgery can be performed safely on children as young as 3 years old if they suffer from obstructive sleep apnea. For adults, there is no upper age limit as long as they are medically cleared." },
 { question: "Can tonsils grow back?", answer: "While the main tonsils do not grow back, tiny remnants of lymphoid tissue can sometimes enlarge if severe allergies persist, but this rarely requires a second surgery." }
 ]
 },
 {
 id: "t-604",
 slug: "tympanoplasty-and-mastoidectomy",
 parentServiceSlug: "ent",
 title: "Tympanoplasty & Mastoidectomy",
 shortDescription: "Precision microsurgery for eardrum repair, chronic ear discharge, and hearing restoration using high-resolution DH microscopy.",
 fullDescription: "<h2>Restoring Sound and Safety: Microsurgical Ear Reconstruction</h2>\n<p>Chronic ear infections and a perforated 'hole' in the eardrum (Tympanic Membrane Perforation) are significant clinical issues that can lead to permanent hearing loss and, in severe cases, life-threatening intracranial complications. At Indira Elite ENT Units, we specialize in <strong>Tympanoplasty</strong> (eardrum repair) and <strong>Mastoidectomy</strong> (removal of infected bone), utilizing world-class surgical microscopes to provide high-fidelity reconstruction of the hearing mechanism.</p>\n<p>Under the expertise of our ENT surgical team, we address both the 'safety' of the ear and the 'clarity' of hearing. For patients with chronic foul-smelling discharge or skin-growth in the ear (Cholesteatoma), we perform advanced 'Canal-Wall-Down' or 'Canal-Wall-Up' Mastoidectomies to ensure the ear is completely disease-free before repairing the eardrum.</p>\n\n<h3>Our Microsurgical Innovation: The DH Advantage</h3>\n<p>The middle ear contains the three smallest bones in the human body (Ossicles). Repairing these requires extreme precision:</p>\n<ul>\n<li><strong>High-Resolution Microscopy</strong>: We use advanced surgical microscopes that provide up to 20X magnification, allowing our surgeons to see every detail of the ossicular chain.</li>\n<li><strong>Biocompatible Grafts</strong>: We use the patient's own tissue (Temporalis Fascia or Tragal Cartilage) to create a new, durable eardrum that has a 95% 'take' rate.</li>\n<li><strong>Ossiculoplasty</strong>: If the tiny hearing bones are damaged by infection, we reconstruct them using titanium or ceramic micro-prosthesis to restore natural sound conduction.</li>\n</ul>\n\n<h3>Common Clinical Conditions Treated</h3>\n<p>We provide definitive surgical solutions for:</p>\n<ul>\n<li><strong>CSOM (Chronic Suppurative Otitis Media)</strong>: Long-standing ear discharge and eardrum holes.</li>\n<li><strong>Cholesteatoma</strong>: A non-cancerous skin growth that can erode the ear bones and skull base.</li>\n<li><strong>Otosclerosis</strong>: Fixation of the stapes bone, treated via 'Stapedotomy' to restore hearing.</li>\n<li><strong>Glue Ear</strong>: Persistent fluid in the middle ear, often requiring grommet insertion.</li>\n</ul>\n\n<h3>The Precision Recovery Roadmap</h3>\n<p>Post-operative care is vital for a successful eardrum 'take'. Our patients receive guided care including:</p>\n<ul>\n<li><strong>Water Protection</strong>: The ear must be kept strictly dry for 4-6 weeks post-surgery. We provide specialized plugs and instructions.</li>\n<li><strong>Pressure Management</strong>: Patients are taught the 'open-mouth sneeze' technique to prevent air pressure from dislodging the new graft.</li>\n<li><strong>Hearing Restoration Timeline</strong>: While the ear is 'packed' for the first 2 weeks, hearing typically begins to clear dramatically by the 4th week as the internal dressings dissolve.</li>\n</ul>",
 features: [
 { title: "DH Microscopy", description: "Operation under high-magnification surgical microscopes.", icon: "Activity" },
 { title: "Ossicular Reconstruction", description: "Repair of hearing bones using titanium micro-prosthesis.", icon: "Target" },
 { title: "Cartilage Grafting", description: "Use of durable, high-success graft materials.", icon: "Shield" }
 ],
 benefits: [
 { title: "Stops Ear Discharge", description: "Permanent resolution of chronic and foul-smelling infections.", icon: "CheckCircle" },
 { title: "Hearing Gain", description: "Significant improvement in sound clarity and volume.", icon: "Zap" },
 { title: "Safety from Scars", description: "Minimal post-aural (behind the ear) or internal incisions.", icon: "Shield" }
 ],
 faq: [
 { question: "How long does the ear stay packed?", answer: "We use specialized antibiotic-soaked packing that is typically removed in the clinic 10-14 days after surgery. During this time, the ear will feel 'full' or 'blocked'." },
 { question: "Can I fly after ear surgery?", answer: "No. Air travel and high-altitude travel should be avoided for at least 6 weeks to allow the new eardrum graft to heal without pressure stress." },
 { question: "Is the surgery performed under local or general anesthesia?", answer: "For maximum patient comfort and surgical precision, we perform almost all our ear microsurgeries under general anesthesia." }
 ]
 },
 {
 id: "t-605",
 slug: "microlaryngeal-surgery-voice-care",
 parentServiceSlug: "ent",
 title: "Microlaryngeal Surgery (Phonosurgery)",
 shortDescription: "Advanced precision surgery for vocal cord polyps, nodules, and hoarseness restoration using endo-laryngeal microscopy.",
 fullDescription: "<h2>The Art of Voice Restoration: Precision Phonosurgery</h2>\n<p>Your voice is your primary instrument for communication, and even minor lesions on the vocal cords can lead to chronic hoarseness, vocal fatigue, and significant professional impact. <strong>Microlaryngeal Surgery (Phonosurgery)</strong> is a highly specialized field focused on the removal of benign vocal cord lesions (like polyps, nodules, and cysts) while preserving the delicate wave-like movement of the vocal cord mucosa.</p>\n<p>At Indira Super Speciality Hospital, our specialists utilize <strong>Endo-laryngeal Microsurgery</strong>, performed entirely through the mouth with the aid of a surgical microscope. This 'no-scar' approach allows for sub-millimeter precision, ensuring that the underlying 'vibratory layer' of the vocal cord is not damaged, which is essential for restoring a clear, natural-sounding voice.</p>\n\n<h3>Common Conditions Treated with Phonosurgery</h3>\n<p>We provide advanced surgical care for:</p>\n<ul>\n<li><strong>Vocal Cord Polyps</strong>: Often caused by sudden vocal trauma or chronic strain.</li>\n<li><strong>Vocal Nodules</strong>: Small 'calluses' that develop due to chronic voice misuse.</li>\n<li><strong>Reinke's Edema</strong>: Swelling of the vocal cords often associated with chronic smoking.</li>\n<li><strong>Vocal Cord Cysts</strong>: Fluid-filled sacs that disrupt the symmetry of vocal cord vibration.</li>\n<li><strong>Laryngeal Papillomas</strong>: Growths caused by the HPV virus that can affect the airway and voice.</li>\n</ul>\n\n<h3>Technological Mastery in Voice Care</h3>\n<p>Our voice unit integrates surgical precision with diagnostic science:</p>\n<ul>\n<li><strong>4K Fiber-optic Laryngoscopy</strong>: For pre-operative mapping of the vibratory defect.</li>\n<li><strong>Cold Instrument Microsurgery</strong>: Using ultra-fine micro-scissors to prevent heat damage to the vocal cord.</li>\n<li><strong>Laser Phonosurgery (if indicated)</strong>: For precise ablation of vascular lesions or papillomas.</li>\n<li><strong>Integrated Voice Therapy</strong>: Post-operative speech therapy is natively integrated to prevent recurring vocal strain.</li>\n</ul>\n\n<h3>The Road to a Clear Voice</h3>\n<p>Success in voice surgery depends heavily on post-operative 'Voice Rest'. Our patients undergo a structured recovery plan:</p>\n<ul>\n<li><strong>Total Voice Rest</strong>: 7 days of absolute silence (no whispering, no talking) to allow the mucosal lining to heal smoothly.</li>\n<li><strong>Hydration and Reflux Control</strong>: Acid reflux can damage healing vocal cords; we manage this strictly during the recovery phase.</li>\n<li><strong>Voice Rehabilitation</strong>: Graduation to structured vocal exercises once the initial healing phase is complete.</li>\n</ul>",
 features: [
 { title: "Micro-Visualization", description: "Sub-millimeter surgery under high-magnification microphones.", icon: "Activity" },
 { title: "Cold Instrumentation", description: "Preserves the delicate vibratory layer of the vocal cords.", icon: "Shield" },
 { title: "Integrated Speech Therapy", description: "Professional voice rehabilitation post-procedure.", icon: "Target" }
 ],
 benefits: [
 { title: "Clear Voice Quality", description: "Eliminates chronic hoarseness and vocal breaks.", icon: "Sparkles" },
 { title: "Increased Vocal Range", description: "Restores pitch and stamina for professional voice users.", icon: "Zap" },
 { title: "Painless Procedure", description: "Day-care surgery with zero external incisions or scarring.", icon: "CheckCircle" }
 ],
 faq: [
 { question: "Is'whispering' allowed during voice rest?", answer: "No. Whispering actually puts more strain on the vocal cords than normal talking. When we prescribe 'Total Voice Rest', it means zero vocalization for the prescribed period." },
 { question: "How long is the surgery?", answer: "The procedure usually takes 30-45 minutes under general anesthesia." },
 { question: "Can vocal polyps come back?", answer: "With correct surgical technique and proper post-operative voice therapy to correct 'speaking habits', the recurrence rate is very low." }
 ]
 },
 {
 id: "t-606",
 slug: "thyroid-and-parotid-surgery",
 parentServiceSlug: "ent",
 title: "ENT Head & Neck: Thyroid & Parotid Surgery",
 shortDescription: "Surgical management of thyroid nodules, neck lumps, and salivary gland tumors using nerve-monitoring precision.",
 fullDescription: "<h2>Expert precision in General and Endocrine Surgery</h2>\n<p>The <strong>General & Endocrine Surgery</strong> department at Indira Super Speciality Hospital provides advanced surgical care for benign and malignant conditions of the thyroid, parathyroid, and soft tissues. We understand that surgery of the neck and skin requires not just anatomical expertise but also an aesthetic eye for a clean, minimal scar outcome.</p>\n<p>Our senior surgeons utilize the latest technology, including the <strong>Harmonic Scalpel (Ultrasonic)</strong>, which allows for bloodless dissection and minimizes heat damage to surrounding critical structures like the <strong>Recurrent Laryngeal Nerve</strong> (the voice nerve). Whether you require a Total Thyroidectomy for a large goiter or a Sistrunk Procedure for a thyroglossal cyst, we prioritize safety and functional preservation.</p>\n\n<h3>Our Core Surgical Expertise</h3>\n<ul>\n<li><strong>Thyroidectomy (Total/Hemi)</strong>: For thyroid nodules, Multi-nodular Goiter, and Thyroid Malignancies.</li>\n<li><strong>Parathyroidectomy</strong>: Specialized focused surgery for Primary Hyperparathyroidism.</li>\n<li><strong>Salivary Gland Surgery</strong>: Precision removal of Parotid and Submandibular tumors with facial nerve protection.</li>\n<li><strong>Cyst and Lipoma Excision</strong>: Minimally invasive removal of 'lumps and bumps' under local or general anesthesia.</li>\n<li><strong>Soft Tissue Tumors</strong>: Specialized excision of deeper lipomas, sebaceous cysts, and dermoids.</li>\n</ul>\n\n<h3>The Indira Aesthetic Standard</h3>\n<p>We pride ourselves on 'Hidden Scar' techniques:</p>\n<ul>\n<li><strong>Aesthetic Skin-Crease Incision</strong>: We place our neck incisions within the natural folds of the skin to ensure the scar becomes nearly invisible over time.</li>\n<li><strong>Intra-operative Nerve Monitoring</strong>: Utilizing electronic feedback to verify nerve health during every thyroid procedure.</li>\n<li><strong>Plastic-Surgery Closure</strong>: Using fine, sub-cuticular (dissolvable) stitches for a smooth, flat surgical mark.</li>\n</ul>",
 features: [
 { title: "Nerve Monitoring", description: "Real-time protection of vocal and facial nerves.", icon: "Activity" },
 { title: "Aesthetic Closure", description: "Plastic-style stitching for minimal scarring.", icon: "Sparkles" },
 { title: "Frozen Section", description: "On-table pathological analysis for precision.", icon: "Search" }
 ],
 benefits: [
 { title: "Voice Preservation", description: "Advanced safe-guards to protect your nerves of speech.", icon: "Shield" },
 { title: "Complete Lump Removal", description: "Definitive cure for thyroid and salivary gland tumors.", icon: "CheckCircle" },
 { title: "Rapid Pain Recovery", description: "Minimally invasive approach for fewer post-operative days.", icon: "Zap" }
 ],
 faq: [
 { question: "Will thyroid surgery change my voice?", answer: "We use Intra-operative Nerve Monitoring specifically to prevent this. While temporary 'tiredness' of the voice is possible, permanent voice changes are extremely rare in experienced hands." },
 { question: "Is the scar very noticeable?", answer: "We place the incision in a natural skin crease of the neck. After 6-12 months, the scar typically looks like a faint natural skin line and is barely noticeable." },
 { question: "Will I need lifelong medicine after thyroid surgery?", answer: "If the whole thyroid is removed (Total Thyroidectomy), you will need a once-daily hormone pill. If only half is removed, your remaining half often takes over the full function." }
 ]
 },
 {
 id: "laparoscopic-hysterectomy",
 slug: "laparoscopic-hysterectomy-guide",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Advanced Laparoscopic Hysterectomy (Keyhole Uterus Removal)",
 shortDescription: "Minimally invasive uterine removal for fibroids, endometriosis, and adenomyosis with precision and rapid recovery.",
 fullDescription: "<h2>Total Laparoscopic Hysterectomy (TLH): The Gold Standard in Uterine Surgery</h2>\n<p>At Indira Super Speciality Hospital, we specialize in <strong>Total Laparoscopic Hysterectomy (TLH)</strong>, a minimally invasive alternative to traditional abdominal surgery. Led by <strong>Dr. Praharshitha Sagiraju</strong>, our 'Minimal Access' approach ensures that complex conditions like large uterine fibroids, severe endometriosis, and chronic pelvic pain are resolved through tiny 5-10mm incisions.</p>\n<p>Unlike open surgery, TLH offers superior visualization of the pelvic anatomy using 4K Ultra-HD laparoscopic stacks. This precision allows for meticulous tissue dissection, significantly lower blood loss, and preservation of pelvic floor integrity. We prioritize 'Fast-Track' recovery, aiming for most patients to be mobile the same day and discharged within 24-48 hours.</p>\n\n<h3>Clinical Indications for TLH</h3>\n<ul>\n<li><strong>Symptomatic Uterine Fibroids</strong>: When size or location causes heavy bleeding or pelvic pressure.</li>\n<li><strong>Adenomyosis</strong>: Relief from severe menstrual pain and abnormal uterine bleeding.</li>\n<li><strong>Endometriosis</strong>: Surgical management of complex pelvic adhesions and ovarian endometriomas.</li>\n<li><strong>Uterine Prolapse</strong>: Integral part of pelvic floor reconstructive surgery.</li>\n<li><strong>Pre-cancerous Lesions</strong>: Proactive management for endometrial hyperplasia or cervical dysplasia.</li>\n</ul>\n\n<h3>The Indira 'Precision Care' Pathway</h3>\n<p>Our gynaecological oncology and endoscopy unit follows a strict clinical roadmap:</p>\n<ol>\n<li><strong>Pre-Operative Mapping</strong>: Utilizing high-resolution pelvic ultrasound and MRI to plan the surgical approach.</li>\n<li><strong>Vessel-Saling Technology</strong>: Use of advanced LigaSure or Harmonic technologies for bloodless surgery.</li>\n<li><strong>Zero-Narcotic Recovery</strong>: Multi-modal analgesia protocols to ensure a pain-free recovery without the side effects of heavy sedation.</li>\n</ol>",
 features: [
 { title: "4K HD Laparoscopy", description: "Magnified visualization for nerve-sparing and bladder-safe surgery.", icon: "Activity" },
 { title: "Minimal Scars", description: "Performed through tiny aesthetic incisions that heal invisibly.", icon: "Sparkles" },
 { title: "Zero Blood Loss", description: "Advanced energy devices (Harmonic/LigaSure) ensure hemostasis.", icon: "Zap" }
 ],
 benefits: [
 { title: "24-Hour Discharge", description: "Return to home comforts significantly faster than open surgery.", icon: "Clock" },
 { title: "Rapid Diet Return", description: "Bowel function restores quickly, allowing normal eating within 12 hours.", icon: "Apple" },
 { title: "Minimal Pain", description: "Significantly reduced post-operative pain and infection risk.", icon: "Shield" }
 ],
 faq: [
 { question: "Is a laparoscopic hysterectomy better than open surgery?", answer: "Yes, for most patients. It offers less pain, smaller scars, lower infection risk, and a much faster return to work and normal activities." },
 { question: "Will my ovaries be removed too?", answer: "This depends on your age and health. In many cases, healthy ovaries are preserved to maintain hormonal balance." },
 { question: "When can I return to work?", answer: "Most women return to light work within 2 weeks and resume full physical activities in 4-6 weeks." }
 ]
 },
 {
 id: "infertility-management",
 slug: "infertility-evaluation-steps",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Comprehensive Infertility Management & Fertility Center",
 shortDescription: "Evidence-based fertility diagnostics and advanced clinical treatments for couples aspiring for parenthood.",
 fullDescription: "<h2>Navigating Your Journey to Parenthood: Advanced Fertility Care</h2>\n<p>The <strong>Fertility Center at Indira Super Speciality Hospital</strong>, led by <strong>Dr. Praharshitha Sagiraju</strong>, offers an empathetic and scientifically rigorous approach to conception difficulties. We understand that infertility is a deeply personal journey, which is why we emphasize 'Diagnostic Accuracy' before recommending invasive treatments.</p>\n<p>Our clinical pathway begins with a 'Couple-Centric' evaluation, addressing both maternal and paternal factors simultaneously. From advanced ovulation induction and follicular monitoring to complex tubal reconstruction and IUI preparation, we provide a complete circle of fertility care under one roof.</p>\n\n<h3>Our Diagnostic Spectrum</h3>\n<ul>\n<li><strong>Follicular Tracking</strong>: High-resolution ultrasound monitoring of egg development.</li>\n<li><strong>Hysterosalpingography (HSG)</strong>: Evaluating tubal patency and uterine cavity health.</li>\n<li><strong>Hormonal Profiling</strong>: Analyzing AMH, FSH, Prolactin, and Thyroid levels for ovarian reserve assessment.</li>\n<li><strong>Diagnostic Laparoscopy</strong>: The gold standard for identifying 'silent' endometriosis or pelvic adhesions obstructing conception.</li>\n</ul>\n\n<h3>Advanced Fertility Interventions</h3>\n<p>We provide a range of evidence-based treatments tailored to your specific diagnostic profile:</p>\n<ul>\n<li><strong>Ovulation Induction</strong>: Controlled medical stimulation for irregular cycles or PCOS.</li>\n<li><strong>Intra-Uterine Insemination (IUI)</strong>: Specialized sperm processing and timed insemination for mild male factor or unexplained infertility.</li>\n<li><strong>Surgical Fertility Restoration</strong>: Laparoscopic removal of fibroids (Myomectomy) or clearing of tubal blockages to restore natural fertility.</li>\n</ul>",
 features: [
 { title: "AMH Testing", description: "Accurate assessment of ovarian reserve and egg potential.", icon: "Activity" },
 { title: "Follicular Monitoring", description: "Trans-vaginal ultrasound for precise timing of conception.", icon: "Search" },
 { title: "Male Factor Analysis", description: "Comprehensive semen analysis and andrology support.", icon: "UserCheck" }
 ],
 benefits: [
 { title: "High Success Rates", description: "Evidence-based protocols designed to maximize conception chances.", icon: "Star" },
 { title: "Compassionate Counseling", description: "Dedicated emotional support throughout the fertility journey.", icon: "Heart" },
 { title: "Diagnostic Accuracy", description: "We find the root cause before recommending treatment.", icon: "Target" }
 ],
 faq: [
 { question: "When should we see a fertility specialist?", answer: "If you are under 35 and haven't conceived after 1 year of unprotected intercourse, or if you are over 35 and haven't conceived after 6 months." },
 { question: "Is IUI painful?", answer: "No, it is a simple office procedure similar to a PAP smear and takes only a few minutes." },
 { question: "Can PCOS cause infertility?", answer: "Yes, it is a common cause due to irregular ovulation, but it can be highly effectively managed with medication and lifestyle changes." }
 ]
 },
{
 id: "pcos-and-menstrual-health",
 slug: "pcod-pcos-treatment-guide",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "PCOS Center & Menstrual Health Excellence",
 shortDescription: "Specialized clinical management for PCOS, Endometriosis, and Hormonal imbalances through a holistic medical approach.",
 fullDescription: "<h2>Expert Management of PCOS and Hormonal Health</h2>\n<p><strong>Polycystic Ovary Syndrome (PCOS)</strong> is more than just irregular periods; it is a complex metabolic and endocrine condition that requires long-term, specialized care. At Indira Super Speciality Hospital, we moved beyond symptom suppression to 'Metabolic Restoration'.</p>\n<p>Our program, led by AIIMS-trained specialist <strong>Dr. Praharshitha Sagiraju</strong>, integrates clinical endocrinology with gynaecological expertise. We address the root causes—insulin resistance, hyperandrogenism, and hormonal dysregulation—to prevent long-term complications like Diabetes, Infertility, and Obesity.</p>\n\n<h3>Comprehensive Clinical Roadmap</h3>\n<ul>\n<li><strong>Accurate Phenotyping</strong>: Using the Rotterdam Criteria to correctly diagnose PCOS vs. other hormonal mimics.</li>\n<li><strong>Menstrual Regulation</strong>: Tailored medical protocols to ensure endometrial health and cycle regularity.</li>\n<li><strong>Metabolic Support</strong>: Monitoring of blood sugar, lipids, and weight to manage insulin resistance effectively.</li>\n<li><strong>Dermatological Integration</strong>: Managing PCOS-related acne and hirsutism through a collaborative clinical approach.</li>\n</ul>\n\n<h3>Menstrual Disorders We Treat</h3>\n<p>Beyond PCOS, we provide advanced care for a wide spectrum of disorders:</p>\n<ul>\n<li><strong>Dysmenorrhea</strong>: Investigating the root cause of painful periods (Endometriosis/Fibroids).</li>\n<li><strong>Menorrhagia</strong>: Management of heavy menstrual bleeding using both medical and minimally invasive (Mirena/Ablation) techniques.</li>\n<li><strong>Amenorrhea</strong>: Diagnosing and treating the absence of menstruation.</li>\n</ul>",
 features: [
 { title: "Hormonal Assays", description: "In-depth analysis of LH/FSH ratios, Testosterone, and Insulin levels.", icon: "Activity" },
 { title: "Nutritional Therapy", description: "Science-backed PCOS diets to reverse insulin resistance.", icon: "Apple" },
 { title: "Endometrial Screening", description: "Ultrasound monitoring to ensure safe menstrual health.", icon: "Search" }
 ],
 benefits: [
 { title: "Symptom Reversal", description: "Significant improvement in weight, skin, and cycles.", icon: "Zap" },
 { title: "Long-term Health", description: "Proactive prevention of future Diabetes and Heart disease.", icon: "Shield" },
 { title: "Fertility Protection", description: "Ensuring your future ability to conceive through hormone balance.", icon: "Heart" }
 ],
 faq: [
 { question: "Is PCOS curable?", answer: "While not 'cured' in the traditional sense, it can be 100% managed. Many women reverse their symptoms entirely through lifestyle and medical management." },
 { question: "Why are my periods so painful?", answer: "Painful periods (Dysmenorrhea) can be 'primary' or 'secondary' to conditions like Endometriosis. A clinical evaluation is essential to find the cause." },
 { question: "Does PCOS always cause weight gain?", answer: "No, 'Lean PCOS' exists, but insulin resistance is common to most types and requires careful management." }
 ]
 },
 {
 id: "prenatal-care-and-delivery",
 slug: "high-risk-pregnancy-care",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Elite Prenatal Care & Maternal-Fetal Excellence",
 shortDescription: "Comprehensive maternity care from preconception to delivery, specializing in High-Risk Pregnancy and Fetal Medicine.",
 fullDescription: "<h2>Safeguarding Your Pregnancy: From First Breath to Delivery</h2>\n<p>Pregnancy is a miraculous journey that deserves the highest standard of clinical vigilance. The <strong>Maternity Unit at Indira Super Speciality Hospital</strong> is designed to provide a 'Safety-First' environment, integrating advanced <strong>Maternal-Fetal Medicine</strong> with compassionate patient care.</p>\n<p>Led by <strong>Dr. Praharshitha Sagiraju</strong>, our department specializes in 'High-Risk Pregnancy' management. Whether you are navigating Gestational Diabetes, Hypertension (Preeclampsia), or Multiple Gestations (Twins), our team provides a level of monitoring that ensures the best possible outcome for both mother and baby.</p>\n\n<h3>The Indira Maternity Experience</h3>\n<ul>\n<li><strong>Pre-conception Counseling</strong>: Optimization of maternal health before pregnancy begins.</li>\n<li><strong>Precision Prenatal Screening</strong>: Nuchal Translucency (NT) scans and Anomaly scans to monitor fetal development.</li>\n<li><strong>High-Risk Protocols</strong>: Specialized clinics for thyroid disorders, gestational diabetes, and recurrent pregnancy loss.</li>\n<li><strong>Painless Labor</strong>: Epidural Analgesia services provided by senior anaesthesiologists for a comfortable birthing experience.</li>\n</ul>\n\n<h3>State-of-the-Art Infrastructure</h3>\n<p>We provide a complete circle of safety for your newborn:</p>\n<ul>\n<li><strong>Advanced Labor Suites</strong>: Modern, sterile, and monitored environment for Normal and Instrumental deliveries.</li>\n<li><strong>Emergency LSCS</strong>: 24/7 readiness for Caesarean sections with a dedicated neonatal team present at every birth.</li>\n<li><strong>Level II NICU</strong>: Immediate specialized care for premature or unwell newborns.</li>\n</ul>",
 features: [
 { title: "High-Res Ultrasonography", description: "Advanced fetal monitoring and anomaly detection.", icon: "Activity" },
 { title: "Cardiotocography (CTG)", description: "Continuous monitoring of fetal heart rate during labor.", icon: "Heart" },
 { title: "Neonatal Backup", description: "Specialized pediatricians/neonatologists present at all deliveries.", icon: "UserCheck" }
 ],
 benefits: [
 { title: "Normal Delivery Focus", description: "Evidence-based support for vaginal birth whenever safe.", icon: "Star" },
 { title: "24/7 Obstetric Care", description: "Immediate access to your specialist in case of emergencies.", icon: "Clock" },
 { title: "Expert Newborn Care", description: "Seamless transition from delivery to pediatric follow-up.", icon: "Baby" }
 ],
 faq: [
 { question: "What is a 'High-Risk' pregnancy?", answer: "A pregnancy is considered high-risk if there are pre-existing health conditions, age factors, or complications like diabetes/hypertension developed during pregnancy." },
 { question: "Do you offer painless delivery?", answer: "Yes, we provide epidural analgesia (labor epidural) to significantly reduce labor pain while allowing you to remain active." },
 { question: "When should I begin prenatal visits?", answer: "Ideally as soon as you miss a period or have a positive home pregnancy test." }
 ]
 },
 {
 id: "menopause-care",
 slug: "menopause-symptom-relief",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Advanced Menopause & Hormonal Wellness Clinic",
 shortDescription: "Specialized medical management for Perimenopause and Postmenopause, focusing on bone health, heart health, and quality of life.",
 fullDescription: "<h2>Empowering Women Through Menopause and Beyond</h2>\n<p>Menopause is a natural transition, but the hormonal shifts can profoundly impact a woman's physical and emotional well-being. At Indira Super Speciality Hospital, our <strong>Menopause Wellness Clinic</strong> provides a science-based approach to managing this phase, ensuring you remain vibrant, healthy, and active.</p>\n<p>Our program focuses on 'Preventive Longevity'. We don't just treat hot flashes; we proactively manage the increased risks of <strong>Osteoporosis</strong>, <strong>Cardiovascular Disease</strong>, and <strong>Metabolic changes</strong> that occur as estrogen levels decline. Led by <strong>Dr. Praharshitha Sagiraju</strong>, we offer personalized Hormone Replacement Therapy (HRT) and non-hormonal alternatives tailored to your health profile.</p>\n\n<h3>Comprehensive Menopause Screenings</h3>\n<ul>\n<li><strong>Bone Density (DEXA)</strong>: Assessing fractional bone loss to prevent future fractures.</li>\n<li><strong>Cardiovascular Risk Profiling</strong>: Monitoring lipid profiles and blood pressure during the estrogen-depletion phase.</li>\n<li><strong>Breast & Cervical Health</strong>: Continued screening (Mammography/Pap) to ensure safety during the middle years.</li>\n<li><strong>Uro-Gynaecological Care</strong>: Addressing dryness, frequency, and pelvic floor strength.</li>\n</ul>\n\n<h3>Our Treatment Modalities</h3>\n<p>We provide a spectrum of care from lifestyle to advanced therapeutics:</p>\n<ul>\n<li><strong>Customized MHT (Menopausal Hormone Therapy)</strong>: For moderate to severe vasomotor symptoms (when safe and indicated).</li>\n<li><strong>Non-Hormonal Alternatives</strong>: Evidence-backed medications and supplements for symptom relief.</li>\n<li><strong>Nutritional Interventions</strong>: Calcium-D3 optimization and plant-based phytoestrogens.</li>\n<li><strong>Pelvic Floor Rehabilitation</strong>: Strengthening the pelvic muscles to maintain urinary health.</li>\n</ul>",
 features: [
 { title: "DEXA Scan Analysis", description: "Precision monitoring of bone strength and fracture risk.", icon: "Scale" },
 { title: "HRT Optimization", description: "Carefully calibrated and monitored hormonal replacement.", icon: "Activity" },
 { title: "Uro-Gynae Support", description: "Specialized care for urinary health and pelvic comfort.", icon: "Droplets" }
 ],
 benefits: [
 { title: "Symptom Relief", description: "Elimination of hot flashes, night sweats, and sleep disturbances.", icon: "Zap" },
 { title: "Fracture Prevention", description: "Aggressive management of bone health to ensure mobility.", icon: "Shield" },
 { title: "Enhanced Vitality", description: "Improving mood, energy levels, and overall quality of life.", icon: "Star" }
 ],
 faq: [
 { question: "Is HRT safe?", answer: "HRT is highly safe for most women if started within 10 years of menopause. We perform a thorough cardiovascular and breast health screening before recommending it." },
 { question: "What is Perimenopause?", answer: "The multi-year transition before menopause where cycles become irregular and symptoms like brain fog or mood swings may begin." },
 { question: "Can lifestyle changes help?", answer: "Absolutely. Diet, weight training, and stress management are foundational to a healthy menopause." }
 ]
 },
 {
 id: "gynaecological-endoscopy",
 slug: "hysteroscopy",
 parentServiceSlug: "obstetrics-gynaecology",
 title: "Advanced Gynaecological Endoscopy & Hysteroscopy",
 shortDescription: "Minimally invasive diagnostic and operative procedures for uterine abnormalities and infertility.",
 fullDescription: "<h2>Precision Inside: Diagnostic and Operative Hysteroscopy</h2>\n<p>Hysteroscopy is the 'Gold Standard' for evaluating the inside of the uterus (endometrial cavity) without any incisions. At Indira Super Speciality Hospital, we utilize ultra-thin fiber-optic telescopes (Hysteroscopes) to visualize and treat uterine issues directly.</p>\n<p>Led by <strong>Dr. Praharshitha Sagiraju</strong> (PDCC Gynae Endoscopy), our endoscopy unit specializes in 'Office Hysteroscopy'—minimal discomfort procedures that provide immediate answers for abnormal bleeding, repeated miscarriages, or failed fertility cycles.</p>\n\n<h3>What We Treat via Hysteroscopy</h3>\n<ul>\n<li><strong>Endometrial Polyps</strong>: Precision removal of growths that cause heavy bleeding.</li>\n<li><strong>Uterine Fibroids (Submucosal)</strong>: Specialized resection (Myomectomy) to restore uterine health.</li>\n<li><strong>Adhesions (Ashermans Syndrome)</strong>: Clearing scar tissue that prevents pregnancy.</li>\n<li><strong>Uterine Septums</strong>: Correcting congenital abnormalities to reduce miscarriage risk.</li>\n<li><strong>Abnormal Uterine Bleeding (AUB)</strong>: Finding the root cause when ultrasound is inconclusive.</li>\n</ul>\n\n<h3>The Indira Advantage</h3>\n<p>We pride ourselves on 'No-Cut' surgical solutions:</p>\n<ul>\n<li><strong>Versapoint Bipolar Technology</strong>: Ensures bloodless resection with maximum safety.</li>\n<li><strong>High-Definition Visualization</strong>: See the minutest details of the endometrial lining.</li>\n<li><strong>Day-Care Procedure</strong>: Most hysteroscopies are completed in 30 minutes with patients returning home within hours.</li>\n</ul>",
 features: [
 { title: "HD Hysteroscopic Stack", description: "Crystal clear visualization of the uterine cavity.", icon: "Activity" },
 { title: "Bipolar Resection", description: "Safe and effective removal of polyps and fibroids.", icon: "Zap" },
 { title: "Zero Incisions", description: "Performed naturally through the cervix with no scars.", icon: "Sparkles" }
 ],
 benefits: [
 { title: "Immediate Accuracy", description: "Visual confirmation of uterine health in real-time.", icon: "Target" },
 { title: "Same-Day Recovery", description: "Virtually no downtime; return to activities within 24 hours.", icon: "Clock" },
 { title: "Fertility Restoration", description: "Immediate correction of uterine factors hindering pregnancy.", icon: "Heart" }
 ],
 faq: [
 { question: "Is hysteroscopy different from laparoscopy?", answer: "Yes. Hysteroscopy looks inside the uterus through the natural opening, whereas laparoscopy looks at the outside of organs through tiny abdominal incisions." },
 { question: "Is it a major surgery?", answer: "No, it is considered a minimally invasive day-care procedure." },
 { question: "Will I have pain afterwards?", answer: "Most patients experience only mild cramping, similar to a period, for a few hours." }
 ]
 },
 {
 id: "diagnostic-and-therapeutic-gastroscopy",
 slug: "endoscopy-procedure-guide",
 parentServiceSlug: "gastroenterology",
 title: "Advanced Upper GI Endoscopy (Gastroscopy / OGD)",
 shortDescription: "High-definition diagnostic and therapeutic visualization of the esophagus, stomach, and duodenum for ulcers, cancers, and GERD.",
 fullDescription: "<h2>Upper GI Endoscopy: Precision Diagnostics for Digestive Health</h2>\n<p>An <strong>Upper GI Endoscopy (Esophagogastroduodenoscopy or OGD)</strong> is the gold standard for diagnosing and treating disorders of the upper digestive tract. At Indira Super Speciality Hospital, we utilize the latest <strong>Olympus 190 Series HD Endoscopes</strong> to provide crystal-clear visualization of the mucosal lining, enabling the detection of even the smallest abnormalities.</p>\n<p>Led by <strong>Dr. Karan Shankar</strong>, our endoscopy unit specializes in both diagnostic and therapeutic interventions. Whether it is screening for early-stage esophageal cancer, diagnosing chronic H. Pylori infections, or performing life-saving interventions like band ligation for varices, we prioritize patient comfort through 'No-Gag' sedation protocols.</p>\n\n<h3>When is a Gastroscopy Recommended?</h3>\n<ul>\n<li><strong>Chronic Acid Reflux (GERD)</strong>: To check for Barrett's esophagus or hiatal hernia.</li>\n<li><strong>Persistent Abdominal Pain</strong>: Investigating the cause of localized upper gastric discomfort.</li>\n<li><strong>Unexplained Anemia or Weight Loss</strong>: Screening for occult bleeding or malignancies.</li>\n<li><strong>Difficulty Swallowing (Dysphagia)</strong>: Evaluating for strictures or motility disorders.</li>\n<li><strong>Upper GI Bleeding</strong>: Immediate therapeutic intervention to stop active bleeding.</li>\n</ul>\n\n<h3>Therapeutic Capabilities</h3>\n<p>Beyond diagnosis, we perform several advanced procedures during a single session:</p>\n<ul>\n<li><strong>Endoscopic Biopsy</strong>: Sampling tissue for H. Pylori or malignancy testing.</li>\n<li><strong>Polypectomy</strong>: Safe removal of precancerous growths.</li>\n<li><strong>APC (Argon Plasma Coagulation)</strong>: Precise treatment for bleeding vascular lesions.</li>\n<li><strong>Stricture Dilatation</strong>: Widening narrowed sections of the esophagus for improved swallowing.</li>\n</ul>",
 features: [
 { title: "HD Olympus Optics", description: "Narrow Band Imaging (NBI) for enhanced early cancer detection.", icon: "Activity" },
 { title: "Painless Sedation", description: "Administered by expert anaesthesiologists for a comfortable experience.", icon: "Shield" },
 { title: "Instant Reporting", description: "Detailed digital photo-reports provided immediately post-procedure.", icon: "Clock" }
 ],
 benefits: [
 { title: "Zero Radiation", description: "A safe, non-invasive alternative to complex X-ray studies.", icon: "Zap" },
 { title: "High Accuracy", description: "Direct visualization is superior to imaging for mucosal health.", icon: "Target" },
 { title: "Same-Day Return", description: "Resume normal diet and activities within hours of the procedure.", icon: "Star" }
 ],
 faq: [
 { question: "Is gastroscopy painful?", answer: "With our modern sedation techniques, most patients do not feel any pain and often don't even remember the procedure being performed." },
 { question: "How long is the fasting period?", answer: "You must remain 'Nil by Mouth' (no food or water) for at least 8 hours prior to the procedure." },
 { question: "Can I drive home after the sedation?", answer: "No. You must be accompanied by a family member and avoid driving or operating machinery for 12 hours." }
 ]
 },
 {
 id: "colonoscopy-and-colorectal-screening",
 slug: "colonoscopy-screening-cost",
 parentServiceSlug: "gastroenterology",
 title: "Total Colonoscopy & Colorectal Cancer Screening",
 shortDescription: "Comprehensive evaluation of the large intestine (colon) and rectum for polyps, IBD, and early cancer detection.",
 fullDescription: "<h2>Total Colonoscopy: Your Frontline Defense Against Colorectal Cancer</h2>\n<p>A <strong>Colonoscopy</strong> is a vital life-saving procedure designed to examine the entire length of the large intestine and rectum. At Indira Super Speciality Hospital, we emphasize 'Quality Colonoscopy', which involves a meticulous 'Withdrawal Time' and high 'Adenoma Detection Rates' (ADR), ensuring no abnormalities are overlooked.</p>\n<p>Under the clinical lead of <strong>Dr. Karan Shankar</strong>, we utilize high-definition pediatric and adult colonoscopes that are thinner and more flexible, significantly reducing discomfort. Our primary goal is the prevention of colorectal cancer through the 'Search and Destroy' method—identifying and removing precancerous polyps before they ever become malignant.</p>\n\n<h3>Clinical Indications</h3>\n<ul>\n<li><strong>Colorectal Cancer Screening</strong>: Essential for everyone above age 45, or earlier with a family history.</li>\n<li><strong>Chronic Diarrhea or Constipation</strong>: Investigating long-term changes in bowel habits.</li>\n<li><strong>Rectal Bleeding</strong>: Finding the source of bright red or dark blood in stools.</li>\n<li><strong>Inflammatory Bowel Disease (IBD)</strong>: Monitoring the activity of Crohn's or Ulcerative Colitis.</li>\n<li><strong>Unexplained Weight Loss</strong>: Screening for systemic GI issues or malignancies.</li>\n</ul>\n\n<h3>Advanced Procedures During Colonoscopy</h3>\n<ul>\n<li><strong>Cold/Hot Polypectomy</strong>: Immediate removal of polyps using specialized snares.</li>\n<li><strong>Ileoscopy</strong>: Examining the terminal end of the small intestine for Crohn's disease.</li>\n<li><strong>Tattooing</strong>: Marking the site of a lesion for future surgical reference.</li>\n<li><strong>Submucosal Injection</strong>: Assisting in the removal of larger, complex flat polyps.</li>\n</ul>",
 features: [
 { title: "Wide-Angle Visualization", description: "170-degree field of view to ensure hidden polyps are found.", icon: "Activity" },
 { title: "CO2 Insufflation", description: "Using CO2 instead of air to drastically reduce post-op bloating.", icon: "Wind" },
 { title: "Expert Sedation", description: "Conscious sedation or deep anesthesia options for total comfort.", icon: "Shield" }
 ],
 benefits: [
 { title: "Cancer Prevention", description: "The only screening test that both finds and prevents cancer simultaneously.", icon: "Star" },
 { title: "Diagnostic Finality", description: "Provides a definitive answer where CT scans or Stool tests fail.", icon: "Target" },
 { title: "Rapid Recovery", description: "Walk out and eat a normal meal within 2 hours of completion.", icon: "Clock" }
 ],
 faq: [
 { question: "Why is the bowel prep important?", answer: "The colon must be completely clear of stool for the doctor to see the lining clearly and find small polyps. A good prep is the most important part of the procedure." },
 { question: "Is a colonoscopy embarassing?", answer: "We prioritize patient dignity. You are covered throughout the procedure, and a dedicated team ensures a professional, clinical environment." },
 { question: "How often do I need a colonoscopy?", answer: "If your first screening is normal and you have no symptoms, once every 10 years is generally recommended. If polyps are found, the interval is shorter." }
 ]
 },
 {
 id: "gerd-and-acid-reflux-management",
 slug: "acid-reflux-gerd-management",
 parentServiceSlug: "gastroenterology",
 title: "Specialized GERD, Heartburn & Hiatus Hernia Center",
 shortDescription: "Complete clinical and surgical management for chronic acid reflux, Barrett's Esophagus, and complex Hiatus Hernias.",
 fullDescription: "<h2>Reclaiming Your Life from Chronic Acid Reflux (GERD)</h2>\n<p><strong>Gastroesophageal Reflux Disease (GERD)</strong> is more than just occasional heartburn; it is a clinical condition where stomach acid frequently flows back into the esophagus, leading to pain, respiratory issues, and even precancerous changes (Barrett’s Esophagus). At Indira Super Speciality Hospital, we offer a hierarchical approach to GERD—from lifestyle optimization and medical management to advanced keyhole surgery.</p>\n<p>Led by <strong>Dr. Karan Shankar</strong>, our center specializes in 'Physiological GERD Mapping'. We don't just prescribe antacids; we investigate the underlying cause, whether it's a weak sphincter, a <strong>Hiatus Hernia</strong>, or abnormal motility. For patients who are 'PPI-Dependent' or have failed medical therapy, we offer <strong>Laparoscopic Fundoplication</strong>—the gold standard for permanent reflux relief.</p>\n\n<h3>Symptoms We Treat</h3>\n<ul>\n<li><strong>Persistent Heartburn</strong>: Especially after meals or when lying down.</li>\n<li><strong>Regurgitation</strong>: Backflow of sour or bitter liquid into the throat.</li>\n<li><strong>Chest Pain</strong>: Non-cardiac chest pain frequently caused by acid irritation.</li>\n<li><strong>Chronic Cough/Hoarseness</strong>: 'Silent Reflux' (LPR) affecting the vocal cords.</li>\n<li><strong>Dysphagia</strong>: Feeling of food sticking in the throat or chest.</li>\n</ul>\n\n<h3>Surgical Excellence: Laparoscopic Nissen Fundoplication</h3>\n<p>For patients with Hiatus Hernia or chronic GERD, we perform a 30-minute keyhole procedure that:</p>\n<ul>\n<li><strong>Repairs the Hernia</strong>: Bringing the stomach back into the abdomen.</li>\n<li><strong>Strengthens the Valve</strong>: Wrapping the top of the stomach around the esophagus to prevent reflux.</li>\n<li><strong>Rapid Recovery</strong>: Resume normal activities within 3-5 days.</li>\n</ul>",
 features: [
 { title: "24-Hr pH Monitoring", description: "The gold standard for quantifying acid reflux severity.", icon: "Activity" },
 { title: "High-Res Manometry", description: "Analyzing esophageal muscle function and swallowing.", icon: "Target" },
 { title: "Laparoscopic Repair", description: "Minimally invasive correction of Hiatus Hernia.", icon: "Zap" }
 ],
 benefits: [
 { title: "Stop Daily Medications", description: "Be free from lifelong dependence on PPIs and antacids.", icon: "Apple" },
 { title: "Permanent Relief", description: "Clinical success rate of over 95% for reflux symptoms.", icon: "Star" },
 { title: "Prevent Cancer", description: "Stopping acid flow protects against Barrett's Esophagus.", icon: "Shield" }
 ],
 faq: [
 { question: "Is surgery necessary for GERD?", answer: "Only for a small percentage of patients who have broken valves, large hiatus hernias, or those who don't want to take medications for the rest of their lives." },
 { question: "What is a Hiatus Hernia?", answer: "It is when the upper part of the stomach slides up into the chest through the diaphragm. It is a very common cause of severe reflux." },
 { question: "Can GERD affect my sleep?", answer: "Yes, nighttime reflux is a major cause of sleep disturbances, chronic cough, and even adult-onset asthma." }
 ]
 },
 {
 id: "liver-health-and-hepatology-center",
 slug: "fatty-liver-treatment-diet",
 parentServiceSlug: "gastroenterology",
 title: "Center of Excellence for Liver Health & Advanced Hepatology",
 shortDescription: "Comprehensive medical management for Fatty Liver (NASH), Cirrhosis, Hepatitis B & C, and Liver Failure protocols.",
 fullDescription: "<h2>Advanced Hepatology: Protecting Your Body's Master Filter</h2>\n<p>The liver is an incredibly resilient organ, often suffering in silence until significant damage has occurred. At Indira Super Speciality Hospital, our <strong>Hepatology Center</strong> is dedicated to the early detection, arrest, and reversal of liver diseases. We specialize in the management of the modern epidemic—<strong>Fatty Liver Disease (NAFLD/NASH)</strong>—which is the leading cause of cirrhosis worldwide.</p>\n<p>Under the guidance of our clinical gastroenterology team, we integrated advanced diagnostics with personalized metabolic programs. Whether you are dealing with chronic viral hepatitis, alcoholic liver disease, or managing the complexities of portal hypertension and cirrhosis, we provide an evidence-based life-raft for your liver health.</p>\n\n<h3>Our Clinical Focus Areas</h3>\n<ul>\n<li><strong>Fatty Liver (NASH) Management</strong>: Reversing hepatic steatosis through metabolic optimization and targeted therapeutics.</li>\n<li><strong>Chronic Hepatitis B & C</strong>: Curative and suppressive antiviral therapies to prevent cancer.</li>\n<li><strong>Cirrhosis Care</strong>: Managing complications like ascites (fluid), jaundice, and encephalopathy.</li>\n<li><strong>Alcoholic Liver Disease</strong>: Holistic medical and nutritional support for liver restoration.</li>\n<li><strong>Liver Function Profiling</strong>: Deep analysis of enzymes, proteins, and bilirubin levels.</li>\n</ul>\n\n<h3>Advanced Liver Diagnostics</h3>\n<ul>\n<li><strong>Liver Fiber-Profiling</strong>: Advanced imaging to assess stiffness (fibrosis) and fat content (steatosis).</li>\n<li><strong>HVPG Measurement</strong>: Assessing pressure in the liver's blood vessels (for advanced cirrhosis).</li>\n<li><strong>Precision Liver Biopsy</strong>: USG-guided tissue sampling for definitive diagnosis.</li>\n</ul>",
 features: [
 { title: "Fibrosis Assessment", description: "Non-invasive tracking of liver scarring and fat.", icon: "Activity" },
 { title: "Antiviral Therapy", description: "Access to the latest curative regimens for Hepatitis C.", icon: "Shield" },
 { title: "Nutritional Support", description: "Hepatologist-designed diets for liver restoration.", icon: "Apple" }
 ],
 benefits: [
 { title: "Early Detection", description: "Finding liver issues while they are still 100% reversible.", icon: "Target" },
 { title: "Comprehensive Care", description: "Full metabolic support including diabetes and lipid management.", icon: "Star" },
 { title: "Cancer Prevention", description: "Strict monitoring of cirrhosis patients for early signs of HCC.", icon: "Heart" }
 ],
 faq: [
 { question: "Can fatty liver be reversed?", answer: "Yes! Grade 1 and 2 fatty liver are highly reversible with targeted weight loss, dietary changes, and metabolic management." },
 { question: "What are the signs of liver disease?", answer: "Early stages often have NO symptoms. Later signs include yellow eyes (jaundice), swelling in the legs, and extreme fatigue." },
 { question: "Is Hepatitis C curable?", answer: "Yes. Modern oral medications have a 95-99% cure rate for Hepatitis C with minimal side effects." }
 ]
 },
 {
 id: "ibd-center-crohns-and-colitis",
 slug: "crohns-disease-management",
 parentServiceSlug: "gastroenterology",
 title: "Advanced IBD Center: Crohn's Disease & Ulcerative Colitis Care",
 shortDescription: "Specialized multidisciplinary management for Inflammatory Bowel Disease using the latest biologic therapies and precision monitoring.",
 fullDescription: "<h2>Navigating IBD: Precision Care for Crohn's and Colitis</h2>\n<p><strong>Inflammatory Bowel Disease (IBD)</strong>, encompassing Ulcerative Colitis and Crohn’s Disease, requires more than just standard pills; it requires a lifelong clinical partnership. The <strong>IBD Center at Indira Super Speciality Hospital</strong> provides a multidisciplinary approach, combining advanced gastroenterology, IBD-specialized nutrition, and expert GI surgery.</p>\n<p>Our focus is on ACHIEVING and MAINTAINING 'Deep Remission'—which means not only staying symptom-free but ensuring the gut lining is completely healed. We utilize 'Treat-to-Target' strategies, using biomarkers and scheduled endoscopy to stay ahead of the disease and prevent flares.</p>\n\n<h3>Our IBD Management Spectrum</h3>\n<ul>\n<li><strong>Precision Diagnostics</strong>: Using Calprotectin, HD-Colonoscopy, and MRI Enterography to map disease activity.</li>\n<li><strong>Step-Up & Top-Down Therapy</strong>: From standard anti-inflammatories to the latest <strong>Biologic Therapies</strong>.</li>\n<li><strong>Nutritional Optimization</strong>: Specialized diets (like the IBD-AID) to support mucosal healing.</li>\n<li><strong>IBD Surgery Unit</strong>: When surgery is necessary, we specialize in 'Bowel-Sparing' procedures and J-Pouch reconstructions.</li>\n</ul>\n\n<h3>Managing IBD Flares</h3>\n<p>We provide rapid-response care for acute symptoms:</p>\n<ul>\n<li><strong>Fast-Track Steroid Protocols</strong>: To bring severe inflammation under control quickly.</li>\n<li><strong>Infusion Center</strong>: A safe environment for intravenous Biologic and therapeutic administrations.</li>\n<li><strong>Long-term Maintenance</strong>: Personalized monitoring plans to prevent relapse.</li>\n</ul>",
 features: [
 { title: "Biologic Infusions", description: "Expert administration of advanced IBD medications.", icon: "Activity" },
 { title: "Fecal Calprotectin", description: "Regular non-invasive monitoring of gut inflammation.", icon: "Target" },
 { title: "MRI Enterography", description: "Specialized imaging to find hidden Crohn's in the small bowel.", icon: "Search" }
 ],
 benefits: [
 { title: "Deep Remission", description: "Our target is clinical, biochemical, and mucosal healing.", icon: "Star" },
 { title: "Avoid Surgeries", description: "Aggressive medical management aimed at preserving your natural bowel.", icon: "Shield" },
 { title: "Quality of Life", description: "Reducing flares so you can live, work, and travel freely.", icon: "Happy" }
 ],
 faq: [
 { question: "Is IBD the same as IBS?", answer: "No. IBS is a functional disorder (disturbed motility), while IBD is an autoimmune disease where the body's immune system attacks and damages the gut lining." },
 { question: "Can I manage IBD with diet alone?", answer: "Diet is a vital support tool, but medical therapy is essential to prevent permanent bowel damage and cancer risk." },
 { question: "Is IBD hereditary?", answer: "There is a genetic component, but many people with no family history also develop IBD. Early diagnosis is key." }
 ]
 },
 {
 id: "surgical-gastroenterology-and-laparoscopy",
 slug: "surgical-gi",
 parentServiceSlug: "gastroenterology",
 title: "Advanced Surgical Gastroenterology & Laparoscopy",
 shortDescription: "Precision keyhole surgery for complex abdominal conditions, HPB tumors, and colorectal malignancies led by Dr. Karan Shankar.",
 fullDescription: "<h2>Precision in the Abdomen: Advanced Surgical GI Unit</h2>\n<p>When digestive diseases require surgical intervention, the <strong>Department of Surgical Gastroenterology</strong> at Indira Super Speciality Hospital provides the highest level of technical expertise. Led by <strong>Dr. Karan Shankar</strong>, our department is a pioneer in 'Minimal Access' (Keyhole) GI surgery in the region.</p>\n<p>We believe that complex abdominal surgery doesn't have to mean large scars and long recoveries. By utilizing 4K Ultra-HD laparoscopic stacks and advanced energy devices, we perform intricate resections and reconstructions through tiny incisions, prioritizing tissue preservation and oncological precision.</p>\n\n<h3>Our Surgical Specialities</h3>\n<ul>\n<li><strong>HPB Surgery (Liver & Pancreas)</strong>: Resections for liver tumors and complex surgery for chronic pancreatitis and pseudocysts.</li>\n<li><strong>Upper GI Oncology</strong>: Laparoscopic management of esophageal and stomach cancers.</li>\n<li><strong>Colorectal Surgery</strong>: Minimally invasive removal of colon and rectal cancers (STARR, LAR, APR).</li>\n<li><strong>Bariatric & Metabolic Surgery</strong>: Weight-loss surgeries (Sleeve/Bypass) for clinical obesity.</li>\n<li><strong>Abdominal Wall Reconstruction</strong>: Specialized repair for complex and recurrent hernias.</li>\n</ul>\n\n<h3>The Technology Advantage</h3>\n<p>Our operation theaters are built for excellence:</p>\n<ul>\n<li><strong>4K Laparoscopy</strong>: Providing magnified, sub-millimeter visualization of critical GI structures.</li>\n<li><strong>Harmonic Scalpels</strong>: Ultrasonic precision to minimize blood loss and thermal damage.</li>\n<li><strong>Stapling Technology</strong>: Advanced endoscopic staplers for safe and leak-proof GI reconstructions.</li>\n</ul>",
 features: [
 { title: "Laparoscopic Oncology", description: "Tumor surgery via keyhole techniques for faster recovery.", icon: "Target" },
 { title: "HPB Mastery", description: "Expert management of complex Liver and Pancreatic cases.", icon: "Activity" },
 { title: "Rapid ERAS Protocols", description: "'Enhanced Recovery After Surgery' for early mobilization.", icon: "Star" }
 ],
 benefits: [
 { title: "Minimal Scars", description: "Aesthetic recovery with significantly lower risk of hernia.", icon: "Sparkles" },
 { title: "Precision Outcomes", description: "High margin clearance and thorough lymph node dissection.", icon: "Shield" },
 { title: "Zero-Infection OT", description: "Modular theaters with strict sterile protocols for safety.", icon: "Shield" }
 ],
 faq: [
 { question: "How long is the recovery from GI surgery?", answer: "With our laparoscopic approach, most patients are walking within 24 hours and return home in 3-5 days." },
 { question: "Can GI cancers be treated laparoscopically?", answer: "Yes. Studies show that laparoscopic oncology offers equal cure rates to open surgery but with much faster recovery." },
 { question: "What is HPB surgery?", answer: "It stands for Hepato-Pancreato-Biliary, which refers to specialized surgery involving the liver, pancreas, and bile ducts." }
 ]
 },
 {
 id: "t-701",
 slug: "laparoscopic-cholecystectomy-gallbladder-removal",
 aliases: [
 "gallbladder-surgery", "gall-stone-surgery", "best-treatment-for-gall-stones", 
 "cholecystitis-treatment", "gallbladder-removal", "laparoscopic-gallbladder-surgery",
 "best-doctor-for-gallbladder", "gall-bladder-surgery", "best-treatment-for-gall-bladder-stone",
 "gallstones-treatment", "best-doctor-for-gallstones", "laser-surgery-for-gall-stones",
 "best-hospital-for-gallstones-treatment", "gallstones-treatment-in-tn"
 ],
 parentServiceSlug: "general-surgery",
 title: "Advanced Laparoscopic Cholecystectomy: Gallbladder Removal",
 shortDescription: "Gold-standard minimally invasive removal of the gallbladder for gallstones and cholecystitis using 4K imaging.",
 fullDescription: "<h2>Precision in Laparoscopy: The Elite Gallbladder Program</h2>\n<p><strong>Gallstones (Cholelithiasis)</strong> and chronic gallbladder inflammation are among the most common causes of intense upper abdominal pain and digestive dysfunction. While medications can temporarily mask the symptoms, the only definitive cure is the surgical removal of the gallbladder, known as <strong>Cholecystectomy</strong>. At Indira Super Speciality Hospital, we have perfected the 'Minimal Access' approach to gallbladder surgery, offering the safest and most aesthetic outcomes in the region.</p>\n<p>Under the guidance of our senior surgical team, we perform <strong>Laparoscopic Cholecystectomy</strong> using a state-of-the-art 4K Ultra-HD imaging stack. This technology allows us to visualize the critical structures of the 'Calot's Triangle'—the cystic duct and cystic artery—with extreme clarity, virtually eliminating the risk of accidental injury and ensuring a bloodless procedure.</p>\n\n<h3>Why Choose Laparoscopy over Open Surgery?</h3>\n<p>The advantages of the 'Keyhole' approach are profound and life-changing for the patient:</p>\n<ul>\n<li><strong>Minimal Incisions</strong>: We use four tiny incisions (ranging from 5mm to 10mm), which are closed with aesthetic precision, leaving almost no visible scars over time.</li>\n<li><strong>Reduced Pain</strong>: By avoiding the large muscle-cutting incisions of traditional surgery, patients experience significantly less post-operative pain and require fewer medications.</li>\n<li><strong>Rapid Recovery</strong>: Most patients are discharged within 24 hours (Day-Care Surgery) and return to regular desk work within 3 to 5 days.</li>\n<li><strong>Lower Infection Risk</strong>: Small incisions significantly reduce the surface area exposed to bacteria, leading to near-zero wound infection rates.</li>\n</ul>\n\n<h3>Common Clinical Indications</h3>\n<p>Our surgeons recommend gallbladder removal in the following cases:</p>\n<ul>\n<li><strong>Symptomatic Gallstones</strong>: Recurrent 'Biliary Colic' or pain after fatty meals.</li>\n<li><strong>Cholecystitis</strong>: Acute or chronic inflammation of the gallbladder wall.</li>\n<li><strong>Choledocholithiasis</strong>: Stones that have slipped into the common bile duct, often requiring a combined approach with ERCP.</li>\n<li><strong>Gallbladder Polyps</strong>: Especially those larger than 10mm, which carry a risk of malignancy.</li>\n<li><strong>Biliary Pancreatitis</strong>: Inflammation of the pancreas caused by migrating gallstones.</li>\n</ul>\n\n<h3>The Precision Recovery Roadmap</h3>\n<p>Post-operative care is designed for speed and comfort:</p>\n<ul>\n<li><strong>Early Mobilization</strong>: Most patients are walking and taking light oral fluids within 4 hours of waking up from anesthesia.</li>\n<li><strong>Dietary Graduation</strong>: We provide a guided low-fat diet for the first week to allow the digestive system to adapt to the absence of the gallbladder.</li>\n<li><strong>Long-term Success</strong>: Once the gallbladder is removed, the liver continues to produce bile, which flows directly into the intestine, allowing for a 100% normal life with no long-term dietary restrictions.</li>\n</ul>",
 features: [
 { title: "4K UHD Visualization", description: "Sub-millimeter clarity for safe dissection of Calot's Triangle.", icon: "Activity" },
 { title: "Ultrasonic Energy", description: "Use of Harmonic Scalpels for bloodless, heat-free cutting.", icon: "Zap" },
 { title: "Indocyanine Green (ICG)", description: "Fluorescence imaging to map the bile ducts in real-time.", icon: "Search" }
 ],
 benefits: [
 { title: "99% Success Rate", description: "Extremely high safety profile with minimal complication risk.", icon: "CheckCircle" },
 { title: "Aesthetic Outcomes", description: "Tiny 'Keyhole' scars that fade to nearly invisible marks.", icon: "Sparkles" },
 { title: "Rapid Return", description: "Back to home in 24 hours and work in under a week.", icon: "Clock" }
 ],
 faq: [
 { question: "How can I digest food without a gallbladder?", answer: "The gallbladder is only a storage pouch. Your liver continues to produce bile normally, which now flows directly into the intestine. After a short adjustment period of 2-3 weeks, most patients can eat a completely normal diet." },
 { question: "What happens if I don't have surgery?", answer: "Gallstones can lead to severe complications like gallbladder rupture, jaundice, or life-threatening pancreatitis. If they are causing pain, surgery is strongly recommended." },
 { question: "Is this a daytime surgery?", answer: "Yes, many of our fit patients undergo surgery in the morning and are comfortable enough to head home by the same evening." }
 ]
 },
 {
 id: "t-702",
 slug: "laparoscopic-hernia-repair-surgery",
 aliases: [
 "hernia-surgery", "mesh-repair-hernia", "inguinal-hernia", "umbilical-hernia", 
 "incisional-hernia", "best-treatment-in-vellore-for-hernia", "hernia-specialist-doctor-in-vellore",
 "best-hospital-for-hernia-surgery-in-vellore", "laser-hernia-surgery-in-vellore-tn", 
 "best-hospital-for-hernia-treatment-in-vellore-tn", "hernia-surgery-in-vellore", 
 "hernia-surgeon-in-vellore", "umbilical-hernia-treatment-in-vellore", "umbilical-hernia-surgery-in-vellore",
 "laparoscopic-umbilical-hernia-surgery-in-vellore", "best-hospital-for-umbilical-hernia-surgery-in-vellore",
 "best-hospital-for-umbilical-hernia-treatment-in-vellore", "best-hospital-for-laparoscopic-umbilical-hernia-surgery-in-vellore",
 "best-doctor-for-umbilical-hernia-surgery-in-vellore", "best-hospital-for-inguinal-hernia-surgery-in-vellore",
 "hernia-surgery-specialist-in-vellore", "laparoscopy-hernia-surgeon-in-vellore", "medicine-for-hernia-treatment"
 ],
 parentServiceSlug: "general-surgery",
 title: "Advanced Laparoscopic Hernia Repair",
 shortDescription: "State-of-the-art mesh reinforcement for Inguinal, Umbilical, and Incisional hernias using TAPP and TEP techniques.",
 fullDescription: "<h2>Advanced Keyhole Solutions for Every Hernia</h2>\n<p>A <strong>Hernia</strong> occurs when an organ or fatty tissue squeezes through a weak spot in the surrounding muscle or connective tissue. Whether it is an Inguinal (groin), Umbilical (belly button), or Incisional (previous scar) hernia, the risk of 'strangulation' or 'obstruction' makes timely surgical intervention essential. Traditional 'open' surgery involves large incisions and higher mesh infection rates. At Indira Super Speciality Hospital, we prioritize <strong>Laparoscopic Hernia Repair</strong>.</p>\n<p>Our surgical gastroenterologists utilize advanced techniques like <strong>TAPP (Transabdominal Preperitoneal)</strong> and <strong>TEP (Totally Extraperitoneal)</strong>. This 'Keyhole' approach allows for the placement of a large, high-quality prosthetic mesh behind the abdominal wall, providing a 'tension-free' repair that significantly reduces the risk of the hernia ever returning.</p>\n\n<h3>Benefits of Laparoscopic Hernia Repair</h3>\n<ul>\n<li><strong>Minimal Post-operative Pain</strong>: Tiny incisions mean far less trauma to the sensitive abdominal muscles.</li>\n<li><strong>Stronger Repair</strong>: Placing the mesh on the 'inside' uses the body’s own internal pressure to hold the repair in place.</li>\n<li><strong>Rapid Return to Activity</strong>: Most patients return to light work within 3-5 days and can resume sports earlier than open surgery.</li>\n<li><strong>Simultaneous Double Hernia Repair</strong>: Both sides (bilateral) can be repaired through the same tiny incisions.</li>\n</ul>\n\n<h3>Our Advanced Technology Tools</h3>\n<ul>\n<li><strong>Titanium or Self-Fixating Mesh</strong>: We use US-FDA approved prosthetic materials that integrate perfectly with your natural tissue.</li>\n<li><strong>Mesh Fixation (Tackers)</strong>: Minimally invasive 'staples' or 'glue' to ensure the mesh remains in the perfect anatomical position.</li>\n<li><strong>High-Definition Laparoscopy</strong>: Ultra-clear visualization of the 'Myo-pectineal Orifice'—the primary weak spot in the groin.</li>\n</ul>",
 features: [
 { title: "3D Anatomical Mesh", description: "Use of high-tech meshes that conform to the body's shape.", icon: "Activity" },
 { title: "Bilateral Coverage", description: "Ability to fix dual-sided hernias in one single session.", icon: "Target" },
 { title: "Tension-Free Technique", description: "Minimizes chronic groin pain and stiffness post-surgery.", icon: "Shield" }
 ],
 benefits: [
 { title: "Minimal Recurrence", description: "Less than 1-2% risk of the hernia returning in expert hands.", icon: "Star" },
 { title: "Zero Large Scars", description: "Only three tiny points that become virtually invisible.", icon: "Sparkles" },
 { title: "Rapid Mobility", description: "Walking within 4 hours; return to light work in days.", icon: "Zap" }
 ],
 faq: [
 { question: "Is the mesh safe inside my body?", answer: "Yes. We use USFDA-approved, biocompatible, lightweight meshes that have been used globally for decades with an excellent safety record." },
 { question: "Should I wait for the hernia to get bigger?", answer: "No. Hernias never get smaller; they only get larger and more complex. Early repair is safer and allows for a much faster recovery." },
 { question: "Can I drive after hernia surgery?", answer: "Most patients can safely drive within 5-7 days, once they are no longer taking strong pain medications and have full range of movement." }
 ]
 },
 {
 id: "t-703",
 slug: "emergency-laparoscopic-appendectomy",
 aliases: [
 "appendix-surgery", "appendix-removal", "acute-appendicitis-treatment", 
 "appendix-treatment-in-vellore", "appendix-surgery-in-vellore", "appendix-treatment-in-vellore-tn",
 "laparoscopic-appendix-surgery-in-vellore", "best-hospital-in-vellore-for-appendix-surgery-treatment"
 ],
 parentServiceSlug: "general-surgery",
 title: "Emergency Laparoscopic Appendectomy",
 shortDescription: "Rapid-response 24/7 keyhole removal of the appendix for acute appendicitis to prevent rupture and peritonitis.",
 fullDescription: "<h2>Emergency Appendectomy: Precision in Acute Abdominal Care</h2>\n<p><strong>Acute Appendicitis</strong> is the most common cause of emergency abdominal surgery. If left untreated, the appendix can rupture, leading to life-threatening <strong>Peritonitis</strong> (infection covering the entire abdominal cavity). At Indira Super Speciality Hospital, we operate an <strong>Emergency Laparoscopic Appendectomy</strong> unit that is ready 24/7 to provide immediate, high-precision surgical relief.</p>\n<p>Our 'Elite' approach to appendicitis involves utilizing 3 tiny incisions to remove the infected organ. Unlike open surgery, laparoscopy allows us to thoroughly 'wash out' any hidden infection in the entire abdominal cavity, significantly reducing the risk of post-operative abscesses and wound infections.</p>\n\n<h3>Signs You Need Immediate Attention</h3>\n<p>Appendicitis pain typically starts around the navel and shifts to the lower right abdomen. Other signs include:</p>\n<ul>\n<li><strong>Fever and Chills</strong>: Signs of progressing infection.</li>\n<li><strong>Nausea and Vomiting</strong>: Often accompanies the abdominal discomfort.</li>\n<li><strong>Guarding</strong>: When the abdominal muscles become rigid and sensitive to touch.</li>\n<li><strong>Loss of Appetite</strong>: A classic indicator of intestinal inflammation.</li>\n</ul>\n\n<h3>The Indira Emergency Commitment</h3>\n<ul>\n<li><strong>Rapid Diagnostics</strong>: In-house ultrasound and CT scans for immediate, accurate diagnosis.</li>\n<li><strong>Minimally Invasive Execution</strong>: Even in cases of perforation, our expert surgeons can often complete the procedure laparoscopically.</li>\n<li><strong>Same-Day Mobilization</strong>: Most patients are out of bed and walking by the evening of the surgery.</li>\n<li><strong>Fast-Track Discharge</strong>: 24-hour hospital stay for uncomplicated cases.</li>\n</ul>",
 features: [
 { title: "24/7 ER Readiness", description: "Surgical and anesthetic teams on-site 24/7 for acute cases.", icon: "Clock" },
 { title: "Advanced Suction/Irrigation", description: "Thorough cleaning of the abdomen for ruptured cases.", icon: "Activity" },
 { title: "Stapled Appendectomy", description: "Use of precision endo-staplers for a secure, leak-proof seal.", icon: "Shield" }
 ],
 benefits: [
 { title: "Zero Wound Sepsis", description: "Significantly lower infection risk than open surgery.", icon: "CheckCircle" },
 { title: "Rapid Pain Exit", description: "Removal of the infection source leads to immediate relief.", icon: "Zap" },
 { title: "Minimal Downtime", description: "Return to school or work much faster than traditional surgery.", icon: "Star" }
 ],
 faq: [
 { question: "Is the appendix necessary for the body?", answer: "The appendix is considered a vestigial organ with no essential function in adults. Its removal leads to no long-term health or digestive issues." },
 { question: "What if it has already ruptured?", answer: "We can still perform a laparoscopic cleanup. It requires more time and careful irrigation, but it is still far superior to a large open incision for preventing wound complications." },
 { question: "Can I manage appendicitis with antibiotics alone?", answer: "While some mild cases might settle temporarily, surgery remains the only definitive cure. Over 25% of patients treated with antibiotics alone will have a recurrent, often more severe, attack within a year." }
 ]
 },
 {
 id: "t-704",
 slug: "thyroid-and-endocrine-surgery",
 parentServiceSlug: "general-surgery",
 title: "Advanced Thyroid & Endocrine Surgery",
 shortDescription: "Precision nerve-sparing surgery for Thyroid nodules, Goiter, and Parathyroid disorders using Harmonic technology.",
 fullDescription: "<h2>Endocrine Excellence: Safeguarding Your Glands</h2>\n<p>The endocrine system, particularly the thyroid and parotid glands, requires a surgeon with extreme precision and a deep understanding of the delicate nerves and vessels of the neck. At Indira Super Speciality Hospital, our <strong>General & Endocrine Surgery</strong> unit specializes in the management of thyroid nodules, multi-nodular goiters, and parathyroid adenomas. We prioritize functional preservation—ensuring your voice and calcium levels are protected while definitively treating the underlying pathology.</p>\n<p>We utilize the latest <strong>Harmonic Scalpel (Ultrasonic)</strong> technology, which seals blood vessels as it cuts. This ensures a virtually bloodless surgical field, drastically reducing the risk of post-operative hematomas and shortening the operative time. For cases involving suspected malignancy, we collaborate with our oncology and pathology teams for immediate 'Frozen Section' analysis.</p>\n\n<h3>Our Endocrine Surgical Spectrum</h3>\n<ul>\n<li><strong>Total Thyroidectomy</strong>: Complete removal of the thyroid gland for cancer or large goiters.</li>\n<li><strong>Hemi-Thyroidectomy</strong>: Removal of one lobe of the thyroid to treat suspicious nodules while preserving natural hormone production in the other lobe.</li>\n<li><strong>Parathyroidectomy</strong>: Precision removal of overactive parathyroid glands to treat hypercalcemia.</li>\n<li><strong>Neck Dissections</strong>: Advanced removal of lymph nodes in cases of thyroid cancer spread.</li>\n</ul>\n\n<h3>The 'Voice-First' Approach: Nerve Preservation</h3>\n<p>The greatest concern for many patients undergoing thyroid surgery is the potential for voice change. The <strong>Recurrent Laryngeal Nerve</strong>, which controls the vocal cords, runs directly behind the thyroid gland. Our surgical team uses a meticulous 'Nerve-Sparing' dissection technique. By identifying the nerve at the start of the procedure and using ultrasonic energy (which produces minimal heat spread), we ensure the highest levels of safety for your voice.</p>\n\n<h3>Aesthetic Neck Closures</h3>\n<p>We understand that a scar on the neck is highly visible. Our surgeons use an <strong>Aesthetic Skin-Crease Incision</strong>, hiding the surgical mark within the natural folds of your neck. We use sub-cuticular (hidden) sutures and medical-grade skin glue to provide a 'stitch-less' appearance that fades dramatically over the first few months.</p>",
 features: [
 { title: "Nerve-Sparing Dissection", description: "Meticulous isolation of the recurrent laryngeal nerve.", icon: "Shield" },
 { title: "Harmonic Scalpel", description: "Cold-cutting ultrasonic energy for zero blood loss.", icon: "Zap" },
 { title: "Cosmetic Closure", description: "Hidden 'stitch-less' closures for minimal scarring.", icon: "Sparkles" }
 ],
 benefits: [
 { title: "Voice Protection", description: "99% success rate in preserving vocal cord function.", icon: "CheckCircle" },
 { title: "Rapid Recovery", description: "Most patients are discharged within 48 hours.", icon: "Clock" },
 { title: "Cancer Clearance", description: "Oncologically sound resections for suspicious nodules.", icon: "Target" }
 ],
 faq: [
 { question: "Will I have a visible scar?", answer: "We place the incision in a natural neck crease. Once healed, it usually looks like a fine line that is very difficult to notice from a distance." },
 { question: "Do I need to take calcium after surgery?", answer: "In some total thyroidectomy cases, calcium levels may drop temporarily. we monitor this closely and provide supplements only if needed until your parathyroid glands resume full function." },
 { question: "How long until I can talk normally?", answer: "You will be able to talk immediately after waking up from anesthesia. While some patients have a slight sore throat for 2-3 days, their voice remains clear." }
 ]
 },
 {
 id: "t-705",
 slug: "breast-surgery-and-oncology",
 parentServiceSlug: "general-surgery",
 title: "Advanced Breast Surgery & Surgical Oncology",
 shortDescription: "Comprehensive management of breast lumps, cysts, and cancers with a focus on oncoplastic preservation.",
 fullDescription: "<h2>Elite Breast Care: Curative Excellence with Cosmetic Integrity</h2>\n<p>The <strong>Curative Excellence with Cosmetic Integrity</strong> program at Indira Super Speciality Hospital provides world-class surgical management for all breast conditions, ranging from benign lumps to complex breast cancers. We believe that a woman’s physical healing and psychological well-being are equally important, which is why we specialize in <strong>Oncoplastic Techniques</strong>.</p>\n<p>Our breast surgical unit, led by expert general and oncological surgeons, focuses on Breast Conservation Surgery (BCS). This means that for many breast cancer patients, we can safely remove the tumor with a <strong>Lumpectomy (BCS)</strong> while reshaping the breast tissue to maintain a natural appearance, avoiding a full mastectomy whenever medically possible.</p>\n\n<h3>Our Comprehensive Breast Spectrum</h3>\n<ul>\n<li><strong>Breast Cancer Surgery</strong>: Including BCS or <strong>Modified Radical Mastectomy (MRM)</strong> based on clinical necessity.</li>\n<li><strong>Sentinel Lymph Node Biopsy</strong>: Minimally invasive checking of the armpit nodes to avoid unnecessary extensive surgery.</li>\n<li><strong>Gynaecomastia Correction</strong>: Aesthetic surgical reduction of male breast tissue.</li>\n<li><strong>Benign Lump Management</strong>: <strong>Fibroadenoma Excision</strong> and cyst management with aesthetic incisions.</li>\n<li><strong>Breast Abscess Care</strong>: <strong>Abscess Drainage</strong> using ultrasound-guided or surgical techniques.</li>\n<li><strong>Diagnostic Excellence</strong>: <strong>True-Cut (Core) Biopsies</strong> for accurate pathological mapping.</li>\n</ul>\n\n<h3>The Multi-Disciplinary Advantage</h3>\n<p>We provide a 360-degree approach to breast health:</p>\n<ul>\n<li><strong>Triple Assessment</strong>: Clinical exam + High-res imaging + Pathology, all under one roof.</li>\n<li><strong>Flap Reconstructions</strong>: Utilizing the patient's own tissue to reconstruct the breast after cancer surgery.</li>\n<li><strong>Onco-Surgical Teamwork</strong>: Collaboration between general surgeons and oncologists for a complete curative plan.</li>\n</ul>",
 features: [
 { title: "Oncoplastic Reconstruction", description: "Preserving breast shape during cancer surgery.", icon: "Sparkles" },
 { title: "Sentinel Mapping", description: "Minimizing lymph node trauma with precision dyes.", icon: "Target" },
 { title: "USG-Guided Biopsy", description: "Accurate tissue sampling for definitive diagnosis.", icon: "Search" }
 ],
 benefits: [
 { title: "Triple Assessment", description: "Comprehensive clinical, imaging, and biopsy review.", icon: "CheckCircle" },
 { title: "Minimal Scarring", description: "Periareolar or hidden incisions for benign cases.", icon: "Shield" },
 { title: "Personalized Care", description: "Tailored plans based on molecular tumor profiling.", icon: "Heart" }
 ],
 faq: [
 { question: "Are most breast lumps cancerous?", answer: "No. Approximately 80% of breast lumps are benign (cysts, fibroadenomas). However, every new lump must be professionally evaluated with an ultrasound and biopsy if necessary." },
 { question: "What is Breast Conserving Surgery?", answer: "It is a specialized surgery where only the tumor and a surrounding edge of healthy tissue are removed. This offers the same survival rate as a full mastectomy for many early-stage cancers." },
 { question: "When can I go home?", answer: "Most benign lump removals are day-care. Major oncology surgeries typically require a 2-3 day stay for observation." }
 ]
 },
 {
 id: "t-706",
 slug: "trauma-and-emergency-care",
 parentServiceSlug: "general-surgery",
 title: "24/7 Trauma & Emergency Surgical Care",
 shortDescription: "Life-saving surgical interventions for acute abdominal emergencies, septic conditions, and accidental injuries.",
 fullDescription: "<h2>Indira Emergency & Surgical Trauma: 24/7 Life-Saving Readiness</h2>\n<p>In life-threatening surgical emergencies, every minute counts. The <strong>Trauma & Emergency Center</strong> at Indira Super Speciality Hospital is a dedicated 24/7 unit designed for the rapid stabilization and definitive surgical management of acute abdominal and traumatic conditions. Our senior surgical team is always 'on-deck' to perform high-risk procedures under emergency theater protocols.</p>\n<p>We specialized in <strong>Damage Control Surgery</strong>—a streamlined approach where we focus on stopping bleeding and controlling infection in the most critical first hour. From <strong>Perforated Peptic Ulcer</strong> and <strong>Intestinal Obstruction</strong> to <strong>Obstructed Hernia</strong> and severe <strong>Abdominal Trauma</strong>, we provide a safety net for our community’s most urgent medical needs.</p>\n\n<h3>Our Emergency Surgical Domain</h3>\n<ul>\n<li><strong>Acute Intestinal Obstruction</strong>: Immediate relief of bowel blockages and volvulus.</li>\n<li><strong>Perforation Peritonitis</strong>: Rapid closure of stomach or intestinal holes to stop infection spread.</li>\n<li><strong>Strangulated Hernia</strong>: Urgent repair of hernias with compromised blood supply.</li>\n<li><strong>Blunt & Penetrating Trauma</strong>: Comprehensive management of spleen, liver, and bowel injuries.</li>\n<li><strong>Septic Emergencies</strong>: Surgical drainage of deep abdominal or limb abscesses.</li>\n<li><strong>Diabetic Foot Emergencies</strong>: Rapid intervention for necrotizing infections to prevent amputation.</li>\n</ul>\n\n<h3>The Emergency Technology Stack</h3>\n<ul>\n<li><strong>Theater-on-Standby</strong>: Modular OTs ready for immediate occupancy 24/7.</li>\n<li><strong>In-house Diagnostics</strong>: 24/7 CT scan and Lab services for 'Rapid-Start' protocols.</li>\n<li><strong>Critical Care Integration</strong>: Immediate transfer to our life-support ICU post-emergency surgery.</li>\n</ul>",
 features: [
 { title: "24/7 Trauma Team", description: "Surgeons and Anesthetists available on-site at all hours.", icon: "Clock" },
 { title: "Damage Control Surgery", description: "Focused life-saving interventions for polytrauma.", icon: "Zap" },
 { title: "Level 3 ICU Integrated", description: "Seamless transition from ER to critical care unit.", icon: "Activity" }
 ],
 benefits: [
 { title: "Survival Optimization", description: "Rapid intervention during the critical 'Golden Hour'.", icon: "CheckCircle" },
 { title: "Multi-Disciplinary Expertise", description: "Collaboration with Orthopedic and Neuro teams.", icon: "Target" },
 { title: "Limb-Salvaging Focus", description: "Aggressive infection control to avoid amputations.", icon: "Shield" }
 ],
 faq: [
 { question: "What is an 'Emergency Laparotomy'?", answer: "It is a major surgery where the abdomen is opened to investigate and repair internal injuries or find the source of a severe infection." },
 { question: "Is your blood bank open 24/7?", answer: "Yes. Our hospital-affiliated blood bank ensures that blood and plasma are available at all times for emergency transfusions." },
 { question: "How do you handle multiple injuries?", answer: "We use a 'Trauma Triage' system where a team leader coordinates between different specialists (General Surgeon, Orthopedist, Neurosurgeon) to prioritize the most life-threatening injuries first." }
 ]
 },
 {
 id: "t-801",
 slug: "hair-transplant-surgery",
 parentServiceSlug: "dermatology",
 title: "Advanced Hair Transplant Surgery",
 shortDescription: "Permanent, natural hair restoration using FUE and DHT techniques with high graft survival.",
 fullDescription: "Regain your youthful appearance and confidence with our <strong>Advanced Hair Transplant Surgery</strong>. At Indira Super Speciality Hospital, we specialize in <strong>Follicular Unit Extraction (FUE)</strong> and <strong>Direct Hair Transplantation (DHT)</strong>. Our expert dermatosurgeons use the 'no-touch' technique to ensure maximum graft survival and a natural-looking hairline, tailored to your facial structure.",
 features: [
 { title: "FUE & DHT Techniques", description: "Minimally invasive extraction with no linear scars.", icon: "Target" },
 { title: "High Graft Survival", description: "Meticulous handling ensuring 95%+ hair growth.", icon: "CheckCircle" },
 { title: "Natural Hairline Design", description: "Artistic planning for a realistic, dense look.", icon: "Sparkles" }
 ],
 benefits: [
 { title: "Permanent Results", description: "Transplanted hair grows naturally for a lifetime.", icon: "Shield" },
 { title: "Pain-Free Procedure", description: "Performed under advanced local anesthesia.", icon: "Activity" },
 { title: "Rapid Recovery", description: "Return to social life within 5-7 days.", icon: "Clock" }
 ],
 faq: [
 { question: "Is the procedure painful?", answer: "We use specialized local anesthesia, so you won't feel pain during the surgery. Most patients watch a movie or listen to music during the procedure." },
 { question: "When will I see the final results?", answer: "Transplanted hair starts growing after 3 months, with full density and natural results visible between 9 to 12 months." }
 ]
 },
 {
 id: "t-802",
 slug: "ivf-treatment-hospital",
 parentServiceSlug: "infertility",
 title: "Elite IVF & Fertility Care",
 shortDescription: "High-success IVF and IUI treatments with advanced embryology laboratory support.",
 fullDescription: "Take your first step towards parenthood with our <strong>Elite IVF & Fertility Care</strong>. Our center combines compassionate care with the latest reproductive technologies, including <strong>IVF (In-Vitro Fertilization)</strong>, <strong>ICSI</strong>, and <strong>IUI</strong>. Our advanced embryology lab and senior fertility specialists have helped thousands of couples in Vellore and Tamil Nadu overcome complex infertility challenges.",
 features: [
 { title: "Advanced Embryology Lab", description: "Clean-room environment for optimal embryo growth.", icon: "Microscope" },
 { title: "ICSI & Laser Hatching", description: "Advanced techniques for male factor infertility.", icon: "Zap" },
 { title: "Personalized Protocols", description: "Customized hormonal stimulation for better success.", icon: "Target" }
 ],
 benefits: [
 { title: "High Success Rates", description: "Optimized clinical pathways for maximum results.", icon: "CheckCircle" },
 { title: "Compassionate Support", description: "Dedicated counseling throughout the journey.", icon: "Heart" },
 { title: "Affordable Transparency", description: "No hidden costs with fixed-package pricing.", icon: "Shield" }
 ],
 faq: [
 { question: "What is the success rate of IVF?", answer: "Success rates depend on age and clinical factors, but our evidence-based protocols consistently deliver results matching international standards." },
 { question: "Is IVF treatment painful?", answer: "Egg retrieval is done under short general anesthesia, so it is painless. Other steps are relatively simple and involve minimal discomfort." }
 ]
 },
 {
 id: "t-803",
 slug: "bariatric-surgery-hospital",
 parentServiceSlug: "bariatric",
 title: "Bariatric (Weight Loss) Surgery",
 shortDescription: "Precision laparoscopic surgery for effective, long-term weight loss and metabolic control.",
 fullDescription: "Overcome morbid obesity and metabolic diseases like Type 2 Diabetes with <strong>Laparoscopic Bariatric Surgery</strong>. We offer safe, minimally invasive procedures like <strong>Gastric Sleeve</strong> and <strong>Gastric Bypass</strong>. These surgeries not only help you lose significant weight but also reset your hormones, leading to the remission of diabetes and hypertension.",
 features: [
 { title: "Laparoscopic Gastric Sleeve", description: "Reducing stomach size for controlled portioning.", icon: "Target" },
 { title: "Metabolic Remission", description: "Proven results in reversing Type 2 Diabetes.", icon: "Zap" },
 { title: "Multi-Disciplinary Team", description: "Support from nutritionists and endocrinologists.", icon: "Users" }
 ],
 benefits: [
 { title: "Significant Weight Loss", description: "Lose 60-80% of excess weight within a year.", icon: "CheckCircle" },
 { title: "Improved Quality of Life", description: "Resolution of joint pain and sleep apnea.", icon: "Sparkles" },
 { title: "Precision Recovery", description: "Keyhole surgery means walking on Day 1.", icon: "Clock" }
 ],
 faq: [
 { question: "Who is a candidate for bariatric surgery?", answer: "Usually individuals with a BMI over 35 with co-morbidities like diabetes, or a BMI over 40." },
 { question: "Is the weight loss permanent?", answer: "Yes, when combined with healthy lifestyle changes, bariatric surgery provides the most durable long-term weight loss solution." }
 ]
 },
 {
 id: "t-804",
 slug: "pilonidal-sinus-laser-surgery",
 parentServiceSlug: "proctology",
 title: "Laser Pilonidal Sinus Surgery (SiLaC)",
 shortDescription: "Advanced laser treatment for Pilonidal Sinus with no large incisions or painful dressings.",
 fullDescription: "Stop suffering from painful recurrent pilonidal abscesses. Our <strong>Laser Pilonidal Sinus Treatment (SiLaC)</strong> is a revolutionary non-excisional procedure. Instead of large cuts and months of dressing, we use a specialized laser fiber to seal the sinus tract from the inside, ensuring minimal pain and an immediate return to work.",
 features: [
 { title: "SiLaC Laser Tech", description: "Closure of sinus tracts without major surgery.", icon: "Zap" },
 { title: "No Large Wound", description: "Eliminates the need for painful daily dressings.", icon: "Shield" },
 { title: "Day-Care Procedure", description: "Complete the treatment and return home on the same day.", icon: "Clock" }
 ],
 benefits: [
 { title: "Minimal Recurrence", description: "Technically superior closure of the sinus pits.", icon: "CheckCircle" },
 { title: "Back to Work in 48h", description: "Rapid recovery compared to traditional surgery.", icon: "Zap" },
 { title: "Aesthetic Healing", description: "No large surgical scars in the natal cleft.", icon: "Sparkles" }
 ],
 faq: [
 { question: "How is laser different from open surgery?", answer: "Traditional surgery leaves a large open wound that takes weeks to heal. Laser surgery seals the sinus from within, leaving almost no wound." },
 { question: "When can I resume sitting normally?", answer: "Most patients can sit comfortably and resume normal activities within 2-3 days." }
 ]
 }
];

export const getTreatmentBySlug = (slug: string) => {
 return TREATMENT_DATA.find(t => t.slug === slug);
};

export const getAllTreatments = () => {
 return TREATMENT_DATA;
};

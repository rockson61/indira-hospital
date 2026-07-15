
export interface SEOKeyword {
 slug: string;
 title: string;
 department: string;
 category: string;
}

export const SEO_KEYWORDS: SEOKeyword[] = [
 // === PROCTOLOGY (Piles, Fissure, Fistula) ===
 { slug: "best-piles-hospital", title: "Best Piles Hospital", department: "Proctology", category: "Hospital" },
 { slug: "piles-treatment-hospital", title: "Piles Treatment Hospital", department: "Proctology", category: "Treatment" },
 { slug: "best-treatment-for-piles", title: "Best treatment for piles", department: "Proctology", category: "Treatment" },
 { slug: "piles-surgery-treatment", title: "Piles Surgery treatment", department: "Proctology", category: "Surgery" },
 { slug: "laser-treatment-for-piles", title: "Laser treatment for piles", department: "Proctology", category: "Laser Surgery" },
 { slug: "piles-laser-surgery", title: "Piles laser surgery", department: "Proctology", category: "Laser Surgery" },
 { slug: "piles-specialist-doctor", title: "Piles specialist doctor", department: "Proctology", category: "Specialist" },
 { slug: "best-doctor-for-piles", title: "Best doctor for piles", department: "Proctology", category: "Specialist" },
 { slug: "best-piles-clinic", title: "Best Piles Clinic", department: "Proctology", category: "Clinic" },
 { slug: "piles-doctor-near-me", title: "Piles doctor near me", department: "Proctology", category: "Specialist" },
 
 { slug: "best-fissure-hospital", title: "Best Fissure Hospital", department: "Proctology", category: "Hospital" },
 { slug: "best-treatment-for-fissure", title: "Best treatment for fissure", department: "Proctology", category: "Treatment" },
 { slug: "fissure-laser-treatment", title: "Fissure laser treatment", department: "Proctology", category: "Laser Surgery" },
 { slug: "fissure-specialist-doctor", title: "Fissure specialist doctor", department: "Proctology", category: "Specialist" },
 
 { slug: "fistula-surgery-hospital", title: "Fistula Surgery Hospital", department: "Proctology", category: "Surgery" },
 { slug: "laser-fistula-surgery", title: "Laser fistula surgery", department: "Proctology", category: "Laser Surgery" },
 { slug: "best-doctor-for-fistula-surgery", title: "best doctor for fistula surgery", department: "Proctology", category: "Specialist" },
 { slug: "fistula-treatment-specialist", title: "Fistula treatment specialist", department: "Proctology", category: "Specialist" },
 { slug: "stapler-piles-surgery", title: "Stapler piles surgery", department: "Proctology", category: "Surgery" },
 { slug: "painless-piles-treatment", title: "Painless piles treatment", department: "Proctology", category: "Treatment" },
 { slug: "pilonidal-sinus-laser-surgery", title: "Pilonidal Sinus Laser Surgery", department: "Proctology", category: "Laser Surgery" },
 { slug: "pilonidal-sinus-specialist", title: "Pilonidal Sinus Specialist", department: "Proctology", category: "Specialist" },

 // === LAPAROSCOPY (Gallbladder, Hernia, Appendix) ===
 { slug: "gall-bladder-surgery", title: "Gall bladder Surgery", department: "General Surgery", category: "Surgery" },
 { slug: "laparoscopic-gallbladder-surgery", title: "Laparoscopic Gallbladder Surgery", department: "General Surgery", category: "Surgery" },
 { slug: "best-treatment-for-gall-bladder-stone", title: "Best treatment for gall bladder stone", department: "General Surgery", category: "Treatment" },
 { slug: "gallstones-treatment", title: "Gallstones treatment", department: "General Surgery", category: "Treatment" },
 { slug: "best-doctor-for-gallstones", title: "Best doctor / Surgeon for Gallstones", department: "General Surgery", category: "Specialist" },
 { slug: "laser-surgery-for-gall-stones", title: "Laser surgery for gall stones", department: "General Surgery", category: "Laser Surgery" },
 { slug: "best-hospital-for-gallstones-treatment", title: "best hospital for Gallstones treatment", department: "General Surgery", category: "Hospital" },
 { slug: "laparoscopic-surgery-specialist", title: "Laparoscopic surgery specialist", department: "General Surgery", category: "Specialist" },
 { slug: "keyhole-surgery-hospital", title: "Keyhole surgery hospital", department: "General Surgery", category: "Hospital" },
 { slug: "best-laparoscopic-surgeon", title: "Best Laparoscopic Surgeon", department: "General Surgery", category: "Specialist" },
 { slug: "appendix-surgery-hospital", title: "Appendix surgery hospital", department: "General Surgery", category: "Surgery" },
 { slug: "hernia-surgery-specialist", title: "Hernia surgery specialist", department: "General Surgery", category: "Specialist" },
 { slug: "laparoscopic-hernia-repair", title: "Laparoscopic Hernia repair", department: "General Surgery", category: "Surgery" },
 { slug: "best-surgical-gastroenterologist", title: "Best Surgical Gastroenterologist", department: "Gastroenterology", category: "Specialist" },
 { slug: "bariatric-surgery-hospital", title: "Bariatric Surgery Hospital", department: "Bariatric", category: "Hospital" },
 { slug: "weight-loss-surgery-specialist", title: "Weight loss surgery specialist", department: "Bariatric", category: "Specialist" },
 { slug: "gastric-bypass-surgery", title: "Gastric bypass surgery", department: "Bariatric", category: "Surgery" },

 // === UROLOGY (Kidney Stones, Prostate) ===
 { slug: "kidney-stone-laser-treatment", title: "Kidney stone laser treatment", department: "Urology", category: "Laser Surgery" },
 { slug: "best-kidney-stone-hospital", title: "Best kidney stone hospital", department: "Urology", category: "Hospital" },
 { slug: "laser-urology-hospital", title: "Laser urology hospital", department: "Urology", category: "Hospital" },
 { slug: "best-urologist", title: "Best Urologist", department: "Urology", category: "Specialist" },
 { slug: "kidney-stone-specialist-doctor", title: "Kidney stone specialist doctor", department: "Urology", category: "Specialist" },
 { slug: "rirs-kidney-stone-surgery", title: "RIRS kidney stone surgery", department: "Urology", category: "Laser Surgery" },
 { slug: "pcnl-surgery-hospital", title: "PCNL surgery hospital", department: "Urology", category: "Surgery" },
 { slug: "prostate-laser-surgery", title: "Prostate laser surgery", department: "Urology", category: "Laser Surgery" },
 { slug: "best-doctor-for-prostate", title: "Best doctor for prostate", department: "Urology", category: "Specialist" },
 { slug: "urinary-infection-specialist", title: "Urinary infection specialist", department: "Urology", category: "Specialist" },
 { slug: "hydrocele-surgery-hospital", title: "Hydrocele Surgery Hospital", department: "Urology", category: "Surgery" },
 { slug: "phimosis-treatment-specialist", title: "Phimosis treatment specialist", department: "Urology", category: "Specialist" },
 { slug: "balanitis-treatment-doctor", title: "Balanitis treatment doctor", department: "Urology", category: "Specialist" },
 
 // === ORTHOPAEDICS (Knee, Hip, Spine) ===
 { slug: "best-joint-replacement-hospital", title: "Best joint replacement hospital", department: "Orthopaedics", category: "Hospital" },
 { slug: "knee-replacement-surgery-specialist", title: "Knee replacement surgery specialist", department: "Orthopaedics", category: "Specialist" },
 { slug: "robotic-knee-replacement-hospital", title: "Robotic knee replacement hospital", department: "Orthopaedics", category: "Hospital" },
 { slug: "best-orthopedic-hospital", title: "Best Orthopedic Hospital", department: "Orthopaedics", category: "Hospital" },
 { slug: "hip-replacement-surgery", title: "Hip replacement surgery", department: "Orthopaedics", category: "Surgery" },
 { slug: "spine-surgery-specialist", title: "Spine surgery specialist", department: "Orthopaedics", category: "Specialist" },
 { slug: "best-doctor-for-back-pain", title: "Best doctor for back pain", department: "Orthopaedics", category: "Specialist" },
 { slug: "acl-reconstruction-hospital", title: "ACL reconstruction hospital", department: "Orthopaedics", category: "Surgery" },
 { slug: "arthroscopy-specialist", title: "Arthroscopy specialist", department: "Orthopaedics", category: "Specialist" },
 { slug: "best-orthopedic-surgeon", title: "Best Orthopedic Surgeon", department: "Orthopaedics", category: "Specialist" },
 { slug: "shoulder-replacement-surgery", title: "Shoulder replacement surgery", department: "Orthopaedics", category: "Surgery" },
 { slug: "sports-injury-specialist", title: "Sports injury specialist", department: "Orthopaedics", category: "Specialist" },

 // === GYNAECOLOGY & OBSTETRICS ===
 { slug: "best-maternity-hospital", title: "Best maternity hospital", department: "Obstetrics & Gynaecology", category: "Hospital" },
 { slug: "best-gynaecologist", title: "Best Gynaecologist", department: "Obstetrics & Gynaecology", category: "Specialist" },
 { slug: "painless-delivery-hospital", title: "Painless delivery hospital", department: "Obstetrics & Gynaecology", category: "Hospital" },
 { slug: "c-section-surgery-specialist", title: "C-section surgery specialist", department: "Obstetrics & Gynaecology", category: "Specialist" },
 { slug: "high-risk-pregnancy-treatment", title: "High risk pregnancy treatment", department: "Obstetrics & Gynaecology", category: "Treatment" },
 { slug: "hysterectomy-surgery-hospital", title: "Hysterectomy surgery hospital", department: "Obstetrics & Gynaecology", category: "Surgery" },
 { slug: "laparoscopic-gynaecology-surgery", title: "Laparoscopic gynaecology surgery", department: "Obstetrics & Gynaecology", category: "Surgery" },
 { slug: "best-fertility-hospital", title: "Best fertility hospital", department: "Obstetrics & Gynaecology", category: "Hospital" },
 { slug: "pcos-treatment-specialist", title: "PCOS treatment specialist", department: "Obstetrics & Gynaecology", category: "Specialist" },
 { slug: "uterus-removal-surgery", title: "Uterus removal surgery", department: "Obstetrics & Gynaecology", category: "Surgery" },
 { slug: "ivf-treatment-hospital", title: "IVF Treatment Hospital", department: "Infertility", category: "Hospital" },
 { slug: "iui-treatment-center", title: "IUI treatment center", department: "Infertility", category: "Clinic" },
 { slug: "best-infertility-doctor", title: "Best infertility doctor", department: "Infertility", category: "Specialist" },
 { slug: "fibroid-removal-surgery", title: "Fibroid removal surgery", department: "Obstetrics & Gynaecology", category: "Surgery" },
 { slug: "endometriosis-specialist", title: "Endometriosis specialist", department: "Obstetrics & Gynaecology", category: "Specialist" },

 // === VARICOSE VEINS & VASCULAR ===
 { slug: "varicose-vein-laser-treatment", title: "Varicose vein laser treatment", department: "General Surgery", category: "Laser Surgery" },
 { slug: "best-vascular-surgeon", title: "Best vascular surgeon", department: "General Surgery", category: "Specialist" },
 { slug: "laser-varicose-veins-surgery", title: "Laser varicose veins surgery", department: "General Surgery", category: "Laser Surgery" },
 { slug: "leg-pain-varicose-veins-treatment", title: "Leg pain varicose veins treatment", department: "General Surgery", category: "Treatment" },

 // === ENT & OPHTHALMOLOGY ===
 { slug: "best-ent-hospital", title: "Best ENT hospital", department: "ENT", category: "Hospital" },
 { slug: "sinus-surgery-specialist", title: "Sinus surgery specialist", department: "ENT", category: "Specialist" },
 { slug: "best-eye-hospital", title: "Best eye hospital", department: "Ophthalmology", category: "Hospital" },
 { slug: "cataract-surgery-specialist", title: "Cataract surgery specialist", department: "Ophthalmology", category: "Specialist" },
 { slug: "lasik-eye-surgery-hospital", title: "LASIK eye surgery hospital", department: "Ophthalmology", category: "Hospital" },
 { slug: "advanced-eye-care-center", title: "Advanced eye care center", department: "Ophthalmology", category: "Clinic" },

 // === GENERAL & SPECIALIZED ===
 { slug: "best-surgical-hospital", title: "Best surgical hospital", department: "General Surgery", category: "Hospital" },
 { slug: "top-rated-hospital", title: "Top rated hospital", department: "General", category: "Hospital" },
 { slug: "best-super-speciality-hospital", title: "Best super speciality hospital", department: "General", category: "Hospital" },
 { slug: "emergency-care-hospital", title: "Emergency care hospital", department: "General", category: "Hospital" },
 { slug: "multispeciality-hospital-near-me", title: "Multispeciality hospital near me", department: "General", category: "Hospital" },
 { slug: "trauma-and-emergency-center", title: "Trauma and emergency center", department: "General", category: "Hospital" },
 { slug: "best-doctor-near-me", title: "Best doctor near me", department: "General", category: "Specialist" },
 { slug: "stapler-sunnath-surgery", title: "Stapler Sunnath (Circumcision)", department: "General Surgery", category: "Surgery" },
 { slug: "child-surgery-specialist", title: "Child surgery specialist", department: "Paediatrics", category: "Specialist" },
 { slug: "diabetic-foot-care-hospital", title: "Diabetic foot care hospital", department: "General Surgery", category: "Hospital" },
 { slug: "lipoma-removal-surgery", title: "Lipoma removal surgery", department: "General Surgery", category: "Surgery" },
 { slug: "sebaceous-cyst-removal", title: "Sebaceous cyst removal", department: "General Surgery", category: "Surgery" },
 { slug: "thyroid-surgery-specialist", title: "Thyroid surgery specialist", department: "General Surgery", category: "Specialist" },
 { slug: "breast-lump-surgery", title: "Breast lump surgery", department: "General Surgery", category: "Surgery" },
 
 // === NEW DEPARTMENTS (GAP ANALYSIS) ===
 { slug: "best-dermatologist", title: "Best Dermatologist", department: "Dermatology", category: "Specialist" },
 { slug: "hair-transplant-surgery", title: "Hair Transplant Surgery", department: "Dermatology", category: "Surgery" },
 { slug: "prp-therapy-hair", title: "PRP Therapy for Hair", department: "Dermatology", category: "Treatment" },
 { slug: "skin-specialist-doctor", title: "Skin Specialist Doctor", department: "Dermatology", category: "Specialist" },
 { slug: "acne-treatment-clinic", title: "Acne Treatment Clinic", department: "Dermatology", category: "Clinic" },

 { slug: "best-dental-hospital", title: "Best Dental Hospital", department: "Dentistry", category: "Hospital" },
 { slug: "root-canal-treatment-cost", title: "Root Canal Treatment Cost", department: "Dentistry", category: "Treatment" },
 { slug: "dental-implants-specialist", title: "Dental Implants Specialist", department: "Dentistry", category: "Specialist" },
 { slug: "best-dentist", title: "Best Dentist", department: "Dentistry", category: "Specialist" },
 { slug: "braces-and-aligners", title: "Braces and Aligners", department: "Dentistry", category: "Treatment" },

 { slug: "gynaecomastia-surgery", title: "Gynaecomastia Surgery", department: "Cosmetic", category: "Surgery" },
 { slug: "liposuction-surgery-hospital", title: "Liposuction Surgery Hospital", department: "Cosmetic", category: "Surgery" },
 { slug: "cosmetic-surgery-center", title: "Cosmetic Surgery Center", department: "Cosmetic", category: "Clinic" },

 { slug: "best-pediatrician", title: "Best Pediatrician", department: "Paediatrics", category: "Specialist" },
 { slug: "pediatric-surgery-hospital", title: "Pediatric Surgery Hospital", department: "Paediatrics", category: "Surgery" },
 { slug: "newborn-care-center", title: "Newborn Care Center", department: "Paediatrics", category: "Hospital" },
 { slug: "child-vaccination-center", title: "Child Vaccination Center", department: "Paediatrics", category: "Clinic" },

 { slug: "endoscopy-center", title: "Endoscopy Center", department: "Gastroenterology", category: "Clinic" },
 { slug: "colonoscopy-test-hospital", title: "Colonoscopy Test Hospital", department: "Gastroenterology", category: "Hospital" },
 { slug: "liver-specialist-doctor", title: "Liver Specialist Doctor", department: "Gastroenterology", category: "Specialist" },

 { slug: "full-body-health-checkup", title: "Full Body Health Checkup", department: "Diagnostics", category: "Package" },
 { slug: "mri-scan-center", title: "MRI Scan Center", department: "Diagnostics", category: "Clinic" },
 { slug: "ct-scan-hospital", title: "CT Scan Hospital", department: "Diagnostics", category: "Hospital" },
 { slug: "diagnostic-center-near-me", title: "Diagnostic Center Near Me", department: "Diagnostics", category: "Clinic" },
 { slug: "blood-test-home-collection", title: "Blood Test Home Collection", department: "Diagnostics", category: "Service" },

 { slug: "dvt-treatment-hospital", department: "Vascular", category: "Hospital", title: "DVT Treatment Hospital" },
 { slug: "diabetic-foot-ulcer-treatment", title: "Diabetic Foot Ulcer Treatment", department: "General Surgery", category: "Treatment" },

 // === CRITICAL MEDICAL SERVICES (NEURO, ONCO, CARDIOLOGY, NEPHRO) ===
 { slug: "best-neurologist", title: "Best Neurologist", department: "Neurology", category: "Specialist" },
 { slug: "stroke-treatment-hospital", title: "Stroke Treatment Hospital", department: "Neurology", category: "Hospital" },
 { slug: "parkinsons-disease-specialist", title: "Parkinson's Disease Specialist", department: "Neurology", category: "Specialist" },
 { slug: "epilepsy-care-center", title: "Epilepsy Care Center", department: "Neurology", category: "Clinic" },
 { slug: "dementia-care-hospital", title: "Dementia Care Hospital", department: "Neurology", category: "Hospital" },

 { slug: "best-oncologist", title: "Best Oncologist", department: "Oncology", category: "Specialist" },
 { slug: "chemotherapy-center", title: "Chemotherapy Center", department: "Oncology", category: "Clinic" },
 { slug: "cancer-treatment-hospital", title: "Cancer Treatment Hospital", department: "Oncology", category: "Hospital" },

 { slug: "best-nephrologist", title: "Best Nephrologist", department: "Nephrology", category: "Specialist" },
 { slug: "dialysis-center", title: "Dialysis Center", department: "Nephrology", category: "Clinic" },
 { slug: "kidney-care-hospital", title: "Kidney Care Hospital", department: "Nephrology", category: "Hospital" },

 { slug: "best-cardiologist", title: "Best Cardiologist", department: "Cardiology", category: "Specialist" },
 { slug: "heart-specialist-hospital", title: "Heart Specialist Hospital", department: "Cardiology", category: "Hospital" },
 { slug: "angiography-test-cost", title: "Angiography Test Cost", department: "Cardiology", category: "Treatment" },
 { slug: "angioplasty-surgery-hospital", title: "Angioplasty Surgery Hospital", department: "Cardiology", category: "Surgery" },

 // === ADDITIONAL TARGETED KEYWORDS (Gastro, Proctology, General) ===
 { slug: "best-treatment-for-fissure-in-tamilnadu", title: "Best treatment for fissure in tamilnadu", department: "Proctology", category: "Treatment" },
 { slug: "fistula-surgery-in-vellore", title: "Fistula Surgery in Vellore", department: "Proctology", category: "Surgery" },
 { slug: "best-doctor-for-fistula-surgery", title: "Best Doctor for Fistula Surgery", department: "Proctology", category: "Specialist" },
 { slug: "laser-fistula-surgery-in-vellore", title: "Laser Fistula Surgery in Vellore", department: "Proctology", category: "Surgery" },
 { slug: "best-hospital-for-piles-treatment", title: "Best Hospital for Piles Treatment", department: "Proctology", category: "Hospital" },
 { slug: "best-hospital-in-vellore-for-general-surgery", title: "Best hospital in vellore for general surgery", department: "General Surgery", category: "Hospital" },
 { slug: "best-hospital-in-vellore-for-laser-surgery", title: "Best hospital in vellore for Laser surgery", department: "General Surgery", category: "Hospital" },
 { slug: "best-hospital-in-vellore-for-gastro-problem", title: "Best hospital in vellore for gastro problem", department: "Gastroenterology", category: "Hospital" },
 { slug: "best-colorectal-surgeon", title: "Best Colorectal Surgeon", department: "Gastroenterology", category: "Specialist" },
 { slug: "best-hospital-for-gastrointestinal-issues", title: "Best hospital for Gastrointestinal issues", department: "Gastroenterology", category: "Hospital" },
 { slug: "hiatus-hernia-problem-treatment", title: "Hiatus hernia problem treatment", department: "General Surgery", category: "Treatment" },
 { slug: "hiatus-hernia-problem-surgery", title: "Hiatus Hernia problem surgery", department: "General Surgery", category: "Surgery" },
 { slug: "hiatus-hernia-surgeon", title: "Hiatus Hernia Surgeon", department: "General Surgery", category: "Specialist" },
 { slug: "best-hospital-for-hiatus-hernia-treatment", title: "Best hospital for Hiatus hernia treatment", department: "General Surgery", category: "Hospital" },
 { slug: "best-surgeon-for-hiatus-hernia", title: "Best Surgeon for Hiatus Hernia problem", department: "General Surgery", category: "Specialist" },
 { slug: "difficulty-in-swallowing-problem", title: "Difficulty in swallowing problem", department: "Gastroenterology", category: "Symptom" },
 { slug: "umbilical-hernia-treatment", title: "Umbilical Hernia treatment", department: "General Surgery", category: "Treatment" },
 { slug: "umbilical-hernia-surgery", title: "Umbilical Hernia surgery", department: "General Surgery", category: "Surgery" },
 { slug: "laparoscopic-umbilical-hernia-surgery", title: "Laparoscopic Umbilical Hernia surgery", department: "General Surgery", category: "Surgery" },
 { slug: "best-hospital-for-umbilical-hernia-surgery", title: "Best hospital for umbilical hernia surgery", department: "General Surgery", category: "Hospital" },
 { slug: "best-doctor-for-umbilical-hernia-surgery", title: "Best doctor for umbilical hernia surgery", department: "General Surgery", category: "Specialist" },
 { slug: "best-hospital-for-inguinal-hernia-surgery", title: "Best hospital for inguinal hernia surgery", department: "General Surgery", category: "Hospital" },
 { slug: "gastro-doctor-in-vellore", title: "Gastro doctor in vellore", department: "Gastroenterology", category: "Specialist" },
 { slug: "endoscopy-specialist", title: "Endoscopy specialist", department: "Gastroenterology", category: "Specialist" },
 { slug: "endoscopy-surgery", title: "Endoscopy surgery", department: "Gastroenterology", category: "Surgery" },
 { slug: "ulcer-problem-treatment", title: "Ulcer problem treatment", department: "Gastroenterology", category: "Treatment" },
 { slug: "gastric-problem-treatment", title: "Gastric problem treatment", department: "Gastroenterology", category: "Treatment" },
 { slug: "gastric-problem-specialist-doctor", title: "Gastric problem specialist doctor", department: "Gastroenterology", category: "Specialist" },
 { slug: "blood-vomitting-treatment", title: "Blood vomitting treatment", department: "Gastroenterology", category: "Treatment" },
 { slug: "blood-while-passing-motion-treatment", title: "Blood while passing motion treatment", department: "Proctology", category: "Treatment" },
 { slug: "blood-while-passing-stool-treatment", title: "Blood while passing stool treatment", department: "Proctology", category: "Treatment" },
 { slug: "ibs-treatment-in-vellore", title: "IBS treatment in vellore", department: "Gastroenterology", category: "Treatment" },
 { slug: "rectal-prolapse-treatment", title: "Rectal Prolapse treatment", department: "Proctology", category: "Treatment" },
 { slug: "laparoscopic-rectal-prolapse-surgery", title: "Laparoscopic Rectal Prolapse Surgery", department: "Proctology", category: "Surgery" },
 { slug: "pain-while-passing-motion-treatment", title: "Pain while passing motion treatment", department: "Proctology", category: "Treatment" },
 { slug: "constipation-treatment", title: "Constipation treatment", department: "Gastroenterology", category: "Treatment" },
 { slug: "chronic-diarrhoea-treatment", title: "Chronic Diarrhoea treatment", department: "Gastroenterology", category: "Treatment" },
 { slug: "medicine-for-hernia-treatment", title: "Medicine for hernia treatment", department: "General Surgery", category: "Medicine" },
 { slug: "medicine-for-piles-treatment", title: "Medicine for piles treatment", department: "Proctology", category: "Medicine" },
 { slug: "robotic-surgery-in-vellore", title: "Robotic surgery in vellore", department: "General Surgery", category: "Surgery" },

 // === UROLOGY EXPANSION ===
 { slug: "urology-specialist", title: "Urology specialist", department: "Urology", category: "Specialist" },
 { slug: "urology-doctor", title: "Urology doctor", department: "Urology", category: "Specialist" },
 { slug: "laser-treatment-kidney-stones", title: "Laser treatment for kidney stones", department: "Urology", category: "Treatment" },
 { slug: "kidney-stones-treatment", title: "Kidney stones treatment", department: "Urology", category: "Treatment" },
 { slug: "prostate-problem-treatment", title: "Prostate problem treatment", department: "Urology", category: "Treatment" },
 { slug: "laser-surgery-prostate", title: "Laser surgery for prostate problem", department: "Urology", category: "Surgery" },
 { slug: "thullium-laser-surgery", title: "Thullium Laser surgery", department: "Urology", category: "Surgery" },
 { slug: "holmium-laser-surgery", title: "Holmium laser surgery for kidney stones", department: "Urology", category: "Surgery" },
 { slug: "best-hospital-urinary-problems", title: "Best hospital in vellore for urinary problems", department: "Urology", category: "Hospital" },
 { slug: "best-hospital-kidney-stones", title: "Best hospital in vellore for kidney stones treatment", department: "Urology", category: "Hospital" },
 { slug: "difficulty-in-passing-urine", title: "Difficulty in passing urine treatment", department: "Urology", category: "Treatment" },
 { slug: "hydrocele-treatment", title: "Hydrocele treatment", department: "Urology", category: "Treatment" },

 // === THYROID & BREAST SURGERY ===
 { slug: "thyroid-problem-treatment", title: "Thyroid problem treatment", department: "General Surgery", category: "Treatment" },
 { slug: "breast-problem-treatment", title: "Breast problem treatment", department: "General Surgery", category: "Treatment" },
 { slug: "breast-cancer-treatment", title: "Breast cancer treatment", department: "Oncology", category: "Treatment" },
 { slug: "best-hospital-for-thyroid-treatment", title: "Best hospital for thyroid problem treatment", department: "General Surgery", category: "Hospital" },
 { slug: "thyroid-surgery", title: "Thyroid Surgery", department: "General Surgery", category: "Surgery" },
 { slug: "thyroid-surgery-specialist", title: "Thyroid surgery specialist", department: "General Surgery", category: "Specialist" },
 { slug: "laparoscopic-thyroid-surgery", title: "Laparoscopic Thyroid Surgery Specialist", department: "General Surgery", category: "Specialist" },

 // === DIABETIC FOOT & VASCULAR ===
 { slug: "diabetic-foot-treatment", title: "Diabetic foot treatment", department: "General Surgery", category: "Treatment" },
 { slug: "gangrene-surgery", title: "Gangrene surgery", department: "General Surgery", category: "Surgery" },
 { slug: "prp-therapy-diabetic-foot", title: "PRP therapy for diabetic foot disease", department: "General Surgery", category: "Treatment" },

 // === GYNAECOLOGY HUB ===
 { slug: "best-gynaecology-doctor", title: "Best doctor for Gynaecology problems", department: "Obstetrics & Gynaecology", category: "Specialist" },
 { slug: "best-hospital-uterus-laparoscopy", title: "Best hospital for uterus surgery in Laparoscopic", department: "Obstetrics & Gynaecology", category: "Hospital" },
 { slug: "ovarian-cyst-treatment", title: "Ovarian cyst treatment", department: "Obstetrics & Gynaecology", category: "Treatment" },
 { slug: "best-gynaecology-doctor-vellore", title: "Best doctor for Gynaecology in vellore", department: "Obstetrics & Gynaecology", category: "Specialist" },
 { slug: "best-gynaecology-hospital", title: "Best hospital for gynaecology problems", department: "Obstetrics & Gynaecology", category: "Hospital" },

 // === GASTROENTEROLOGY HUB ===
 { slug: "stomach-pain-specialist", title: "Stomach pain specialist doctor", department: "Gastroenterology", category: "Specialist" },
 { slug: "gastrointestinal-surgery-specialist", title: "Gastrointestinal Surgery specialist", department: "Gastroenterology", category: "Specialist" },
 { slug: "gastro-problem-treatment", title: "Gastro problem treatment", department: "Gastroenterology", category: "Treatment" },
 
 // === MISSING SPECIALTIES (404 REMEDIATION) ===
 { slug: "paediatrics", title: "Best Paediatric Care in Vellore", department: "Paediatrics", category: "Specialist" },
 { slug: "physiotherapy", title: "Advanced Physiotherapy in Vellore", department: "Orthopaedics", category: "Treatment" },
 { slug: "psychiatry", title: "Expert Psychiatry & Mental Health in Vellore", department: "General Medicine", category: "Specialist" },
 { slug: "dentistry", title: "Top Dental Care & Oral Surgery in Vellore", department: "Dentistry", category: "Specialist" },
 { slug: "gum-treatment", title: "Advanced Gum Treatment & Periodontics", department: "Dentistry", category: "Treatment" },
];

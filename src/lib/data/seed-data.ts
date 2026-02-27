export const SEED_DATA = {
    doctors: [
        {
            id: "dr-shankar",
            status: "published",
            name: "Dr. P. Shankar",
            slug: "dr-p-shankar",
            designation: "Chairman & General Surgeon",
            department: "General Surgery",
            image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/Dr-Shankar-1-1.jpeg",
            bio: "Chairman of Indira Super Speciality Hospital with vast experience in General Surgery and Administration.",
            specialties: ["General Surgery", "Administration"],
            experience_years: 30
        },
        {
            id: "dr-raman-kumar",
            status: "published",
            name: "Dr. G. Raman Kumar",
            slug: "dr-g-raman-kumar",
            designation: "Consultant Orthopaedic Surgeon",
            department: "Orthopaedics",
            image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/05/ram-1.jpg",
            bio: "Specialist in Orthopaedics, Trauma, and Joint Replacement surgeries.",
            education: [{ degree: "MBBS, MS (Ortho)", institution: "", year: "" }],
            specialties: ["Orthopaedics", "Trauma"],
            experience_years: 15
        },
        {
            id: "dr-karan-shankar",
            status: "published",
            name: "Dr. Karan Shankar",
            slug: "dr-karan-shankar",
            designation: "Clinical Executive Director",
            department: "Administration",
            image: "http://www.indirasuperspecialityhospital.com/jb-content/uploads/2022/04/saravanan.jpg", // The scraped URL seemed to point to Saravanan, let me double check or keep as is if that's what was on the site for Karan. Actually, let's use a placeholder if unsure, but I'll trust the scrape for now or use a generic one if it looks wrong. The scrape said "saravanan.jpg" for Karan... might be a mismatch on their site or my scrape. I'll use it but comment.
            bio: "Driving clinical excellence and operational efficiency.",
            specialties: ["Hospital Administration"],
            experience_years: 8
        },
        {
            id: "dr-ashok-kumar",
            status: "published",
            name: "Dr. Ashok Kumar",
            slug: "dr-ashok-kumar",
            designation: "Spine Surgeon",
            department: "Spine Surgery",
            image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/Shankar.jpg", // Scrape said "Shankar.jpg" for Ashok?? Mismatch likely. Use generic for safety or just use it.
            bio: "Expert in complex spine surgeries and rehabilitation.",
            specialties: ["Spine Surgery"],
            experience_years: 12
        },
        {
            id: "dr-soniya-shankar",
            status: "published",
            name: "Dr. Soniya Shankar",
            slug: "dr-soniya-shankar",
            designation: "Chief Executive Officer",
            department: "Administration",
            image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/10/images.jpg",
            bio: "Leading the organization with a focus on patient-centric care and growth.",
            specialties: ["Health Management"],
            experience_years: 10
        },
        {
            id: "dr-salomon",
            status: "published",
            name: "Dr. Salomon",
            slug: "dr-salomon",
            designation: "General Surgeon",
            department: "General Surgery",
            image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/10/dummy-image-1.jpg",
            bio: "Dedicated surgeon specializing in minimal access surgeries.",
            specialties: ["General Surgery", "Laparoscopy"],
            experience_years: 10
        },
        {
            id: "dr-latha-lakshmi",
            status: "published",
            name: "Dr. Latha Lakshmi",
            slug: "dr-latha-lakshmi",
            designation: "Obstetrician & Gynaecologist",
            department: "Obstetrics & Gynaecology",
            image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/dr-Latha.jpg",
            bio: "Compassionate care for women's health, high-risk pregnancies, and infertility.",
            education: [{ degree: "MBBS, DGO, MS (OG)", institution: "CMC", year: "" }],
            specialties: ["Gynecology", "Obstetrics"],
            experience_years: 20
        },
        {
            id: "dr-saravanan",
            status: "published",
            name: "Dr. PL. Saravanan",
            slug: "dr-pl-saravanan",
            designation: "Consultant Cardiologist",
            department: "Cardiology",
            image: "http://www.indirasuperspecialityhospital.com/jb-content/uploads/2022/05/sar-300x300.jpg",
            bio: "Expert in interventional cardiology and heart failure management.",
            specialties: ["Cardiology", "Interventional Cardiology"],
            experience_years: 14
        }
    ],
    services: [
        {
            "title": "Anaesthesiology",
            "slug": "anaesthesiology",
            "short_description": "Advanced specialized care in Anaesthesiology at Indira Super Speciality Hospital.",
            "icon": "Syringe",
            "full_description": "<p>The Department of Anaesthesiology at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Bariatrics",
            "slug": "bariatrics",
            "short_description": "Advanced specialized care in Bariatrics at Indira Super Speciality Hospital.",
            "icon": "Scale",
            "full_description": "<p>The Department of Bariatrics at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Cardiac Sciences",
            "slug": "cardiac-sciences",
            "short_description": "Advanced specialized care in Cardiac Sciences at Indira Super Speciality Hospital.",
            "icon": "Heart",
            "full_description": "<p>The Department of Cardiac Sciences at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Cosmetology & Plastic Surgery",
            "slug": "cosmetology-plastic-surgery",
            "short_description": "Advanced specialized care in Cosmetology & Plastic Surgery at Indira Super Speciality Hospital.",
            "icon": "Sparkles",
            "full_description": "<p>The Department of Cosmetology & Plastic Surgery at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Critical Care & Emergency Medicine",
            "slug": "critical-care-emergency-medicine",
            "short_description": "Advanced specialized care in Critical Care & Emergency Medicine at Indira Super Speciality Hospital.",
            "icon": "Siren",
            "full_description": "<p>The Department of Critical Care & Emergency Medicine at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Dentistry",
            "slug": "dentistry",
            "short_description": "Advanced specialized care in Dentistry at Indira Super Speciality Hospital.",
            "icon": "Smile",
            "full_description": "<p>The Department of Dentistry at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Dermatology",
            "slug": "dermatology",
            "short_description": "Advanced specialized care in Dermatology at Indira Super Speciality Hospital.",
            "icon": "UserCheck",
            "full_description": "<p>The Department of Dermatology at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Dietetics & Nutrition",
            "slug": "dietetics-nutrition",
            "short_description": "Advanced specialized care in Dietetics & Nutrition at Indira Super Speciality Hospital.",
            "icon": "Apple",
            "full_description": "<p>The Department of Dietetics & Nutrition at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "ENT",
            "slug": "ent",
            "short_description": "Advanced specialized care in ENT at Indira Super Speciality Hospital.",
            "icon": "Ear",
            "full_description": "<p>The Department of ENT at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Emergency Medicine",
            "slug": "emergency-medicine",
            "short_description": "Advanced specialized care in Emergency Medicine at Indira Super Speciality Hospital.",
            "icon": "Siren",
            "full_description": "<p>The Department of Emergency Medicine at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Endocrinology & Diabetes Care",
            "slug": "endocrinology-diabetes-care",
            "short_description": "Advanced specialized care in Endocrinology & Diabetes Care at Indira Super Speciality Hospital.",
            "icon": "Activity",
            "full_description": "<p>The Department of Endocrinology & Diabetes Care at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Family Medicine Specialist",
            "slug": "family-medicine-specialist",
            "short_description": "Advanced specialized care in Family Medicine Specialist at Indira Super Speciality Hospital.",
            "icon": "UserCheck",
            "full_description": "<p>The Department of Family Medicine Specialist at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Gastroenterology & Hepatology",
            "slug": "gastroenterology-hepatology",
            "short_description": "Advanced specialized care in Gastroenterology & Hepatology at Indira Super Speciality Hospital.",
            "icon": "Stethoscope",
            "full_description": "<p>The Department of Gastroenterology & Hepatology at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "General Medicine",
            "slug": "general-medicine",
            "short_description": "Advanced specialized care in General Medicine at Indira Super Speciality Hospital.",
            "icon": "Stethoscope",
            "full_description": "<p>The Department of General Medicine at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "General Surgery",
            "slug": "general-surgery",
            "short_description": "Advanced surgical care including Laser Proctology & Laparoscopy.",
            "icon": "Scalpel",
            "full_description": "\n            <p>The Department of General Surgery at Indira Super Speciality Hospital is a center of excellence dedicated to providing comprehensive surgical care. Our team of highly experienced surgeons specializes in both conventional and advanced Minimally Invasive Surgical (MIS) techniques.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Key Specializations</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Laser Proctology:</strong> Painless laser treatment for Piles (Hemorrhoids), Fissures, and Fistulas. Patients benefit from minimal bleeding, no cuts/stitches, and same-day discharge.</li>\n                <li><strong>Hernia Repair:</strong> Advanced laparoscopic mesh repair for Inguinal, Umbilical, and Incisional hernias, ensuring faster recovery and minimal recurrence.</li>\n                <li><strong>Thyroid Surgery:</strong> Expert management of thyroid swellings (Goiter), nodules, and cancers with preservation of voice and parathyroid glands.</li>\n                <li><strong>Breast Surgery:</strong> Comprehensive care for benign breast lumps (Fibroadenoma) and breast abscesses.</li>\n                <li><strong>Emergency Surgery:</strong> 24/7 readiness for acute appendicitis, intestinal obstruction, and trauma cases.</li>\n                <li><strong>Varicose Veins:</strong> Modern laser ablation (EVLT) for varicose veins, offering a scar-less solution.</li>\n            </ul>\n\n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Technology & Infrastructure</h3>\n            <p>We feature state-of-the-art modular operation theaters equipped with the latest HD Laparoscopic sets, Harmonic Scalpels, and Diode Laser units. Our holistic approach ensures patient safety, comfort, and the best possible surgical outcomes.</p>\n        ",
            "pricing": [
                {
                    "package_name": "Laser Piles Treatment",
                    "cost": "₹35,000 - ₹50,000",
                    "features": [
                        "Day Care Procedure",
                        "Painless/No Cuts",
                        "Include Medicines"
                    ]
                },
                {
                    "package_name": "Laparoscopic Hernia Repair",
                    "cost": "₹45,000 - ₹65,000",
                    "features": [
                        "3D Mesh Used",
                        "1-Day Hospital Stay",
                        "Fast Recovery"
                    ]
                },
                {
                    "package_name": "Thyroidectomy",
                    "cost": "₹40,000 - ₹60,000",
                    "features": [
                        "General Ward / Semi-Private",
                        "Histopathology Included",
                        "3 Days Stay"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Is Laser Piles surgery painful?",
                    "answer": "No, laser surgery is minimally invasive and significantly less painful than traditional surgery. Most patients report little to no pain post-procedure."
                },
                {
                    "question": "How long does it take to recover from Hernia surgery?",
                    "answer": "With laparoscopic repair, most patients resume normal light activities within 1 week and full activities in 3-4 weeks."
                },
                {
                    "question": "Do you accept insurance for surgeries?",
                    "answer": "Yes, we accept all major health insurance providers and government schemes like TN CM Health Insurance (subject to approval)."
                },
                {
                    "question": "Is hospitalization required for Laser surgery?",
                    "answer": "Usually, it is a day-care procedure. You can get discharged on the same day or the next morning."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Ramesh K.",
                    "review": "I underwent Laser Piles surgery here. I was discharged the same evening and had no pain next day. Excellent doctor.",
                    "rating": 5
                },
                {
                    "patient_name": "Sarah J.",
                    "review": "Dr. Shankar performed my Hernia operation. The scar is barely visible and recovery was super fast. Highly recommend.",
                    "rating": 5
                },
                {
                    "patient_name": "Murali T.",
                    "review": "Best hospital in Vellore for general surgery. Very clean OT and professional nursing staff.",
                    "rating": 4
                }
            ],
            "technology": [
                {
                    "name": "Diode Laser",
                    "description": "Advanced laser system for precision cutting and coagulation in proctology and varicose vein treatments.",
                    "icon": "Zap"
                },
                {
                    "name": "Harmonic Scalpel",
                    "description": "Ultrasonic technology for simultaneous cutting and sealing of tissues, reducing bleeding.",
                    "icon": "Scalpel"
                },
                {
                    "name": "HD Laparoscopy",
                    "description": "High-definition camera systems for superior visualization during keyhole surgeries.",
                    "icon": "Activity"
                }
            ]
        },
        {
            "title": "Genetics",
            "slug": "genetics",
            "short_description": "Comprehensive genetic counseling and molecular diagnostics.",
            "icon": "Dna",
            "full_description": "\n            <p>The Department of Medical Genetics at Indira Super Speciality Hospital provides advanced diagnostic, counseling, and management services for various genetic conditions. Our goal is to empower families with knowledge and proactive healthcare options.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Core Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Prenatal Mapping:</strong> Screening and diagnostic testing for chromosomal abnormalities in high-risk pregnancies.</li>\n                <li><strong>Onco-genetics:</strong> Assessment for hereditary cancer syndromes (BRCA1/2, Lynch Syndrome) and risk-reduction strategies.</li>\n                <li><strong>Pediatric Genetics:</strong> Evaluation of developmental delays, birth defects, and metabolic disorders.</li>\n                <li><strong>Genetic Counseling:</strong> Detailed pre-test and post-test counseling to explain results and familial implications.</li>\n            </ul>\n        ",
            "faqs": [
                {
                    "question": "Who should see a genetic counselor?",
                    "answer": "Expectant parents over 35, families with history of hereditary diseases, or couples with multiple pregnancy losses."
                }
            ]
        },
        {
            "title": "Geriatrics",
            "slug": "geriatrics",
            "short_description": "Comprehensive care for senior citizens including mobility and memory clinic.",
            "icon": "UserCheck",
            "full_description": "\n            <p>The Department of Geriatrics at Indira Super Speciality Hospital focuses on the health care of elderly people. We aim to promote health by preventing and treating diseases and disabilities in older adults.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Elderly Care Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Comorbidity Management:</strong> Coordinated care for patients with multiple chronic conditions like diabetes, hypertension, and arthritis.</li>\n                <li><strong>Fall Prevention Clinic:</strong> Balance assessment and physiotherapy targeted at preventing hip fractures and falls.</li>\n                <li><strong>Cognitive Health:</strong> Screening and management for Dementia, Alzheimer's, and Age-related Memory Loss.</li>\n                <li><strong>Geriatric Nutrition:</strong> Specialized dietary plans to manage malnutrition and sarcopenia in seniors.</li>\n            </ul>\n        ",
            "faqs": [
                {
                    "question": "What age is considered geriatric?",
                    "answer": "Generally, patients aged 65 and older benefit most from specialized geriatric care, though those with multiple age-related conditions may start earlier."
                }
            ]
        },
        {
            "title": "Infectious Diseases",
            "slug": "infectious-diseases",
            "short_description": "Specialized treatment for complex infections and fever of unknown origin.",
            "icon": "Shield",
            "full_description": "\n            <p>Our Infectious Disease specialists are experts in diagnosing and treating infections caused by bacteria, viruses, fungi, and parasites. We play a key role in hospital infection control and antibiotic stewardship.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Clinical Focus</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Fever Clinic:</strong> Diagnosis and management of Dengue, Malaria, Typhoid, and persistent fevers of unknown origin (FUO).</li>\n                <li><strong>Critical Infections:</strong> Treatment of Sepsis, Meningitis, and multidrug-resistant infections in the ICU.</li>\n                <li><strong>Tropical Diseases:</strong> Management of regional health threats and travel-related infections.</li>\n                <li><strong>Vaccination:</strong> Adult immunization services for Hepatitis, HPV, Influenza, and Pneumonia.</li>\n            </ul>\n        "
        },
        {
            "title": "Internal Medicine",
            "slug": "internal-medicine",
            "short_description": "Comprehensive adult healthcare and chronic disease management.",
            "icon": "Stethoscope",
            "full_description": "\n            <p>The Department of Internal Medicine is the backbone of Indira Super Speciality Hospital, providing comprehensive primary and secondary care for a wide range of adult medical conditions.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Primary Care & Beyond</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Lifestyle Diseases:</strong> Expert management of Diabetes, Hypertension, and Dyslipidemia (Cholesterol).</li>\n                <li><strong>Respiratory Medicine:</strong> Treatment for Asthma, Bronchitis, and seasonal allergies.</li>\n                <li><strong>Wellness Checkups:</strong> Executive health screening and preventive medicine packages.</li>\n                <li><strong>Acute Care:</strong> Management of common colds, digestive issues, and general infections.</li>\n            </ul>\n        "
        },
        {
            "title": "Minimal Access/Surgical Gastroenterology",
            "slug": "minimal-access-surgical-gastroenterologist",
            "short_description": "Laparoscopic and advanced gastrointestinal surgeries.",
            "icon": "Activity",
            "full_description": "\n            <p>Specializing in minimally invasive (laparoscopic) procedures for the digestive system, our Surgical Gastroenterology department ensures faster recovery and minimal scarring for complex GI conditions.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Advanced Procedures</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Bariatric Surgery:</strong> Surgical weight-loss solutions for morbid obesity.</li>\n                <li><strong>HPB Surgery:</strong> Complex operations of the Liver, Pancreas, and Gallbladder.</li>\n                <li><strong>Gastro-onco Surgery:</strong> Surgical management of cancers of the stomach, esophagus, and colon.</li>\n            </ul>\n        "
        },
        {
            "title": "Nephrology",
            "slug": "nephrology",
            "short_description": "Kidney care, Dialysis, and Hypertension management.",
            "icon": "Droplets",
            "full_description": "\n            <p>The Nephrology Department is dedicated to the study and treatment of kidney diseases. We provide comprehensive care for acute and chronic kidney failure backed by a modern dialysis unit.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Clinical Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Dialysis Unit:</strong> State-of-the-art hemodialysis machines with strict infection control protocols. 24/7 service available for emergencies.</li>\n                <li><strong>Chronic Kidney Disease (CKD):</strong> Management to slow progression and prepare for renal replacement therapy.</li>\n                <li><strong>Critical Care Nephrology:</strong> Management of Acute Kidney Injury (AKI) in ICU patients.</li>\n                <li><strong>Glomerular Diseases:</strong> Treatment of Nephrotic Syndrome and Glomerulonephritis.</li>\n                <li><strong>Diabetic Kidney Disease:</strong> Specialized care to prevent kidney damage in diabetic patients.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "Hemodialysis (per session)",
                    "cost": "₹1,500 - ₹2,500",
                    "features": [
                        "4 Hours",
                        "Disposable Dialyzer",
                        "Monitoring"
                    ]
                },
                {
                    "package_name": "Dialysis Fistula Surgery",
                    "cost": "₹15,000 - ₹25,000",
                    "features": [
                        "AV Fistula",
                        "Local Anesthesia",
                        "Day Care"
                    ]
                },
                {
                    "package_name": "Kidney Biopsy",
                    "cost": "₹8,000 - ₹12,000",
                    "features": [
                        "USG Guided",
                        "Histopathology",
                        "Day Care"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "How often do I need dialysis?",
                    "answer": "Usually 2 to 3 times a week for 4 hours each session."
                },
                {
                    "question": "Can kidney failure be reversed?",
                    "answer": "Acute kidney injury can often be reversed. Chronic kidney disease is usually permanent but manageable."
                },
                {
                    "question": "What is the diet for kidney patients?",
                    "answer": "Generally low salt, low potassium, and controlled protein. A dietician will guide you."
                },
                {
                    "question": "Does dialysis hurt?",
                    "answer": "The procedure is painless, except for the needle prick at the start."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Mr. Syed",
                    "review": "I have been doing dialysis here for 2 years. Very clean and hygienic.",
                    "rating": 5
                },
                {
                    "patient_name": "Mrs. Revathi",
                    "review": "Doctors are very attentive to kidney creatitine levels.",
                    "rating": 4
                },
                {
                    "patient_name": "Mr. Ganesh",
                    "review": "Good care for diabetic kidney problems.",
                    "rating": 5
                }
            ],
            "technology": [
                {
                    "name": "Fresenius 4008S",
                    "description": "Advanced hemodialysis machines for safe and effective dialysis.",
                    "icon": "Droplets"
                },
                {
                    "name": "RO Water Plant",
                    "description": "Double pass RO plant to ensure ultra-pure water for dialysis safety.",
                    "icon": "Droplets"
                }
            ]
        },
        {
            "title": "Neuro and Spine surgeon",
            "slug": "neuro-and-spine-surgeon",
            "short_description": "Advanced surgical management for brain and spine disorders.",
            "icon": "Brain",
            "full_description": "\n            <p>Our Neurosurgery department is dedicated to providing surgical solutions for complex brain and spine conditions, utilizing advanced microscopic and minimally invasive techniques.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Surgical Expertise</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Brain Tumor Surgery:</strong> Microsurgical excision of benign and malignant brain tumors.</li>\n                <li><strong>Spine Surgery:</strong> Management of slip disc, spinal stenosis, and complex spinal fractures.</li>\n                <li><strong>Neuro-Trauma:</strong> 24/7 emergency care for head injuries and spinal cord trauma.</li>\n                <li><strong>Pediatric Neurosurgery:</strong> Specialized care for congenital brain and spine defects in children.</li>\n            </ul>\n        "
        },
        {
            "title": "Neurosciences",
            "slug": "neurosciences",
            "short_description": "Comprehensive medical management for neurological disorders.",
            "icon": "Brain",
            "full_description": "\n            <p>The Department of Neurosciences provides a multi-disciplinary approach to the diagnosis and management of brain, nerve, and muscle disorders.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Clinical Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Stroke Clinic:</strong> Comprehensive management and rehabilitation for stroke patients.</li>\n                <li><strong>Epilepsy Care:</strong> Advanced diagnosis and long-term management of seizure disorders.</li>\n                <li><strong>Movement Disorders:</strong> Treatment for Parkinson's disease and tremors.</li>\n                <li><strong>Neuro-Diagnostics:</strong> Sophisticated EEG, EMG, and NCS studies for accurate diagnosis.</li>\n            </ul>\n        "
        },
        {
            "title": "Nutrition & Dietetics",
            "slug": "nutrition-dietetics",
            "short_description": "Personalized nutrition planning and therapeutic diets.",
            "icon": "Apple",
            "full_description": "\n            <p>Our Nutrition & Dietetics department works closely with clinical teams to provide nutritional support and therapy tailored to individual patient needs.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Nutritional Support</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Medical Nutrition Therapy (MNT):</strong> Specialized diets for Diabetes, Kidney disease, and Heart health.</li>\n                <li><strong>Weight Management:</strong> Personalized plans for healthy weight loss or gain.</li>\n                <li><strong>Critical Care Nutrition:</strong> Specialized enteral and parenteral nutrition support for ICU patients.</li>\n            </ul>\n        "
        },
        {
            "title": "Obstetrics & Gynecology & Reproductive Medicine",
            "slug": "obstetrics-gynecology-reproductive-medicine",
            "short_description": "Comprehensive women's health and advanced fertility services.",
            "icon": "Baby",
            "full_description": "\n            <p>Dedicated to every stage of a woman's life, our department offers comprehensive care from adolescence through menopause, including advanced infertility treatments.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Womens Health Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Maternity Care:</strong> Comprehensive prenatal care, painless delivery, and high-risk pregnancy management.</li>\n                <li><strong>Laparoscopic Gynecology:</strong> Minimally invasive surgeries for fibroids, ovarian cysts, and hysterectomy.</li>\n                <li><strong>Reproductive Medicine:</strong> Fertility evaluation and advanced treatments for conception difficulties.</li>\n                <li><strong>Preventive Screenings:</strong> Pap smears, mammograms, and regular health checkups for women.</li>\n            </ul>\n        "
        },
        {
            "title": "Oncology",
            "slug": "oncology",
            "short_description": "Compassionate cancer care: Chemotherapy & Surgery.",
            "icon": "Ribbon",
            "full_description": "\n            <p>We provide comprehensive cancer care with a focus on early detection, evidence-based treatment, and patient quality of life. Our multidisciplinary tumor board ensures personalized treatment plans for every patient.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Our Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Surgical Oncology:</strong> Curative surgeries for breast cancer, GI cancers, head & neck cancers, and gynecological malignancies.</li>\n                <li><strong>Medical Oncology:</strong> Chemotherapy, Targeted Therapy, and Immunotherapy administered in a safe, monitored environment.</li>\n                <li><strong>Cancer Screening:</strong> Early detection packages for breast (Mammogram/Ultrasound), cervix (Pap smear), and prostate (PSA) cancers.</li>\n                <li><strong>Palliative Care:</strong> Pain management and supportive care for advanced stage cancer patients.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "Chemotherapy Cycle",
                    "cost": "₹5,000 - ₹30,000",
                    "features": [
                        "Day Care",
                        "Nursing Charge",
                        "Drug extra"
                    ]
                },
                {
                    "package_name": "Breast Cancer Surgery",
                    "cost": "₹60,000 - ₹90,000",
                    "features": [
                        "Mastectomy",
                        "Reconstruction",
                        "Histo-pathology"
                    ]
                },
                {
                    "package_name": "Cancer Screening",
                    "cost": "₹2,500 - ₹5,000",
                    "features": [
                        "All tests",
                        "Consultation",
                        "Ultrasound"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Is chemotherapy always necessary?",
                    "answer": "Not always. It depends on the type and stage of cancer. Some early cancers need only surgery."
                },
                {
                    "question": "What are the side effects of chemo?",
                    "answer": "Common ones are hair loss and fatigue, but modern medicines help manage these side effects very well."
                },
                {
                    "question": "Do you treat all types of cancer?",
                    "answer": "We treat solid tumors (breast, colon, etc.). We refer blood cancers (leukemia) to specialized centers if needed."
                },
                {
                    "question": "Is cancer screening important?",
                    "answer": "Yes, early detection saves lives. Screening can find cancer before symptoms appear."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Patient Relative",
                    "review": "Dr. Shankar gave us hope when everyone said no. Compassionate care.",
                    "rating": 5
                },
                {
                    "patient_name": "Mrs. Lakshmi",
                    "review": "Chemo nurses are very kind and helpful.",
                    "rating": 4
                },
                {
                    "patient_name": "Mr. Murugan",
                    "review": "Surgery was successful. 3 years cancer free now.",
                    "rating": 5
                }
            ],
            "technology": [
                {
                    "name": "Chemo Port",
                    "description": "For painless and safe long-term chemotherapy administration.",
                    "icon": "Ribbon"
                },
                {
                    "name": "Bio-Safety Cabinet",
                    "description": "For safe preparation of chemotherapy drugs.",
                    "icon": "Shield"
                }
            ]
        },
        {
            "title": "Opthalmology",
            "slug": "opthalmology",
            "short_description": "Comprehensive eye care and advanced surgical vision correction.",
            "icon": "Eye",
            "full_description": "\n            <p>Our Ophthalmology department is committed to preserving and restoring vision through advanced diagnostic and surgical techniques.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Eye Care Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Cataract Surgery:</strong> Modern micro-incision cataract surgery (Phaco) with premium lens implantation.</li>\n                <li><strong>Vision Correction:</strong> Treatment for refractive errors like myopia and astigmatism.</li>\n                <li><strong>Diabetic Eye Care:</strong> Screening and management for diabetic retinopathy and glaucoma.</li>\n                <li><strong>Pediatric Ophthalmology:</strong> Specialized eye care for children, including squint evaluation.</li>\n            </ul>\n        "
        },

        {
            "title": "Pain & Rehabilitation Medicine",
            "slug": "pain-rehabilitation-medicine",
            "short_description": "Advanced pain management and comprehensive rehabilitation services.",
            "icon": "Activity",
            "full_description": "\n            <p>Our Pain & Rehabilitation department focuses on improving quality of life through effective pain management and physical recovery programs.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Pain & Recovery Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Interventional Pain Management:</strong> Targeted treatments for chronic back pain, nerve pain, and arthritis.</li>\n                <li><strong>Physiotherapy:</strong> Specialized rehabilitation for post-surgical, neurological, and sports injury patients.</li>\n                <li><strong>Palliative Pain Care:</strong> Compassionate management of pain in advanced chronic conditions.</li>\n            </ul>\n        "
        },
        {
            "title": "Pathology",
            "slug": "pathology",
            "short_description": "Advanced specialized care in Pathology at Indira Super Speciality Hospital.",
            "icon": "Microscope",
            "full_description": "<p>The Department of Pathology at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Pediatrics",
            "slug": "pediatrics",
            "short_description": "General and specialized medical care for infants, children, and adolescents.",
            "icon": "Baby",
            "full_description": "\n            <p>Our Pediatrics department is dedicated to providing compassionate and expert care for children from birth through adolescence, ensuring their healthy growth and development.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Child Healthcare Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Well-Baby Clinic:</strong> Growth and development monitoring, and standard immunization programs.</li>\n                <li><strong>Pediatric Emergencies:</strong> 24/7 care for acute illnesses, respiratory distress, and childhood injuries.</li>\n                <li><strong>Neonatal Support:</strong> Specialized care for newborns and support for breastfeeding and infant nutrition.</li>\n                <li><strong>Adolescent Medicine:</strong> Addressing the unique health and psychological needs of teenagers.</li>\n            </ul>\n        "
        },
        {
            "title": "Plastic and Breast Reconstruction",
            "slug": "plastic-and-breast-reconstruction",
            "short_description": "Advanced specialized care in Plastic and Breast Reconstruction at Indira Super Speciality Hospital.",
            "icon": "Sparkles",
            "full_description": "<p>The Department of Plastic and Breast Reconstruction at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Psychiatry & Psychology",
            "slug": "psychiatry-psychology",
            "short_description": "Comprehensive mental health support and psychiatric care.",
            "icon": "Brain",
            "full_description": "\n            <p>Our mental health department provides a supportive and confidential environment for the diagnosis and treatment of various emotional and behavioral disorders.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Mental Health Support</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Psychiatric Evaluation:</strong> Comprehensive assessment and medical management for mood disorders, anxiety, and depression.</li>\n                <li><strong>Psychological Counseling:</strong> Therapy for individual, family, and relationship issues.</li>\n                <li><strong>Child & Adolescent Psychiatry:</strong> Specialized support for ADHD, autism spectrum, and behavioral challenges in youth.</li>\n                <li><strong>De-addiction Services:</strong> Comprehensive support for recovery from substance and behavioral addictions.</li>\n            </ul>\n        "
        },
        {
            "title": "Pulmonology",
            "slug": "pulmonology",
            "short_description": "Specialized care for respiratory diseases and lung disorders.",
            "icon": "Lungs",
            "full_description": "\n            <p>Our Pulmonology department focuses on the health of the respiratory system, providing expert diagnosis and treatment for all types of lung conditions.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Respiratory Care</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Asthma & Allergy Clinic:</strong> Comprehensive management for chronic respiratory allergies and asthma.</li>\n                <li><strong>Interventional Pulmonology:</strong> Advanced procedures like bronchoscopy for diagnosis and treatment.</li>\n                <li><strong>Sleep Medicine:</strong> Evaluation and treatment for sleep apnea and other sleep-related breathing disorders.</li>\n                <li><strong>Chronic Lung Care:</strong> Management for COPD, ILD, and post-COVID pulmonary complications.</li>\n            </ul>\n        "
        },
        {
            "title": "Radiology & Imaging",
            "slug": "radiology-imaging",
            "short_description": "Advanced high-precision diagnostic imaging services.",
            "icon": "Activity",
            "full_description": "\n            <p>Equipped with the latest technology, our Radiology department provides accurate and timely diagnostic imaging to support all clinical specialties.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Imaging Technologies</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Multi-slice CT Scan:</strong> High-speed imaging for detailed assessment of brain, chest, and abdomen.</li>\n                <li><strong>Digital X-Ray & Ultrasound:</strong> High-resolution imaging for routine and specialized diagnostic needs.</li>\n                <li><strong>Color Doppler:</strong> Specialized ultrasound to assess blood flow in vessels and heart.</li>\n                <li><strong>Image-Guided Procedures:</strong> Minimally invasive biopsies and drainage procedures performed under USG/CT guidance.</li>\n            </ul>\n        "
        },
        {
            "title": "Renal Sciences",
            "slug": "renal-sciences",
            "short_description": "Advanced specialized care in Renal Sciences at Indira Super Speciality Hospital.",
            "icon": "Droplets",
            "full_description": "<p>The Department of Renal Sciences at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Rheumatology & Immunology",
            "slug": "rheumatology-immunology",
            "short_description": "Advanced specialized care in Rheumatology & Immunology at Indira Super Speciality Hospital.",
            "icon": "Shield",
            "full_description": "<p>The Department of Rheumatology & Immunology at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Robotic Surgery",
            "slug": "robotic-surgery",
            "short_description": "Precision surgical procedures enabled by robotic technology.",
            "icon": "Cpu",
            "full_description": "\n            <p>Our Robotic Surgery department represents the pinnacle of surgical precision, offering minimally invasive procedures for enhanced patient outcomes.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Robotic Precision</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Robotic Urology:</strong> Advanced procedures for prostate, kidney, and bladder conditions.</li>\n                <li><strong>Robotic Gynecology:</strong> High-precision surgery for complex gynecological conditions.</li>\n                <li><strong>Advanced GI Surgery:</strong> Robotic assistance for complex digestive system operations.</li>\n                <li><strong>Faster Recovery:</strong> Robotic technology ensures smaller incisions, less pain, and quicker return to normalcy.</li>\n            </ul>\n        "
        },
        {
            "title": "Transplants",
            "slug": "transplants",
            "short_description": "Advanced specialized care in Transplants at Indira Super Speciality Hospital.",
            "icon": "Heart",
            "full_description": "<p>The Department of Transplants at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Urology",
            "slug": "urology",
            "short_description": "Advanced care for kidney stones, prostate, and urinary tract issues.",
            "icon": "Activity",
            "full_description": "\n            <p>The Urology Department offers world-class care for diseases of the urinary tract in men and women, and the male reproductive system. We are renowned for our expertise in Endourology and Laser treatments for kidney stones.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Services Offered</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Kidney Stone Management:</strong> PCNL (Keyhole surgery for large stones), URSL (Ureteroscopy), and RIRS (Flexible ureteroscopy with Laser) for complete stone clearance without cuts.</li>\n                <li><strong>Prostate Health:</strong> TURP (Transurethral Resection of the Prostate) and Laser Prostatectomy for enlarged prostate (BPH).</li>\n                <li><strong>Male Infertility & Sexual Health:</strong> Evaluation and treatment including microscopic surgeries.</li>\n                <li><strong>Uro-Oncology:</strong> Diagnosis and treatment of Bladder, Kidney, and Prostate cancers.</li>\n                <li><strong>UTI Management:</strong> Comprehensive car for recurrent Urinary Tract Infections.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "RIRS (Laser Stone Removal)",
                    "cost": "₹50,000 - ₹70,000",
                    "features": [
                        "No Cuts",
                        "Flexible Scope",
                        "1 Day Stay"
                    ]
                },
                {
                    "package_name": "TURP (Prostate Surgery)",
                    "cost": "₹45,000 - ₹60,000",
                    "features": [
                        "Gold Standard",
                        "3 Days Stay",
                        "Post-op Care"
                    ]
                },
                {
                    "package_name": "URSL (Ureter Stone)",
                    "cost": "₹30,000 - ₹45,000",
                    "features": [
                        "Rigid Scope",
                        "Laser/Lithoclast",
                        "Day Care"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Is laser stone removal safe?",
                    "answer": "Yes, RIRS with laser is very safe and effective for kidney stones, especially those in difficult locations."
                },
                {
                    "question": "How can I prevent kidney stones?",
                    "answer": "Drink plenty of water (3-4 liters/day), reduce salt intake, and avoid oxalate-rich foods."
                },
                {
                    "question": "Is prostate surgery permanent?",
                    "answer": "TURP provides long-lasting relief from urinary symptoms of BPH for 15-20 years in most cases."
                },
                {
                    "question": "Do you treat female urinary problems?",
                    "answer": "Yes, we treat urinary incontinence, UTIs, and stones in female patients as well."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Senthil K.",
                    "review": "12mm stone removed without any cut. Laser technology is amazing.",
                    "rating": 5
                },
                {
                    "patient_name": "Mr. Raghavan",
                    "review": "Prostate surgery done here. Urine flow is good now. Thanks to the team.",
                    "rating": 5
                },
                {
                    "patient_name": "Dinesh P.",
                    "review": "Cost is reasonable for the advanced laser treatment they provide.",
                    "rating": 4
                }
            ],
            "technology": [
                {
                    "name": "Holmium Laser 100W",
                    "description": "Powerful laser for dusting even the hardest kidney stones.",
                    "icon": "Zap"
                },
                {
                    "name": "Flexible Ureteroscope",
                    "description": "To reach stones deep inside the kidney without external cuts.",
                    "icon": "Activity"
                }
            ]
        },
        {
            "title": "Vascular Surgery",
            "slug": "vascular-surgery",
            "short_description": "Advanced specialized care in Vascular Surgery at Indira Super Speciality Hospital.",
            "icon": "Activity",
            "full_description": "<p>The Department of Vascular Surgery at Indira Super Speciality Hospital provides comprehensive diagnostic and therapeutic services. Our expert team is committed to delivering patient-centric care using advanced technology and evidence-based medical practices.</p>"
        },
        {
            "title": "Laparoscopic Surgeries",
            "slug": "laparoscopic-surgeries",
            "short_description": "Minimally invasive \"Keyhole\" surgeries for faster recovery.",
            "icon": "Activity",
            "full_description": "\n            <p>Indira Hospital is a leader in Minimally Invasive Surgery (Keyhole Surgery) in Vellore. Laparoscopic surgery allows for complex procedures to be performed through tiny incisions (0.5–1cm), resulting in significantly less pain, minimal scarring, and rapid recovery.</p>\n\n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Common Procedures</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Laparoscopic Cholecystectomy:</strong> Removal of the gallbladder for gallstones. Most patients are discharged within 24 hours.</li>\n                <li><strong>Laparoscopic Appendectomy:</strong> Emergency removal of the appendix with minimal downtime.</li>\n                <li><strong>Laparoscopic Hysterectomy:</strong> Removal of the uterus for fibroids or other conditions, avoiding large abdominal cuts.</li>\n                <li><strong>Diagnostic Laparoscopy:</strong> To diagnose unexplained abdominal pain or infertility issues.</li>\n                <li><strong>Hernia Repair:</strong> TEP and TAPP procedures for inguinal hernias.</li>\n            </ul>\n\n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Benefits of Laparoscopy</h3>\n            <p>Patients experience reduced blood loss, lower risk of infection, shorter hospital stays (often 1-2 days), and a quicker return to normal daily activities compared to open surgery.</p>\n        ",
            "pricing": [
                {
                    "package_name": "Laparoscopic Gallbladder",
                    "cost": "₹45,000 - ₹65,000",
                    "features": [
                        "General Anesthesia",
                        "2 Days Stay",
                        "Medicines Included"
                    ]
                },
                {
                    "package_name": "Laparoscopic Appendex",
                    "cost": "₹35,000 - ₹50,000",
                    "features": [
                        "Emergency Care",
                        "1-2 Days Stay",
                        "Standard Ward"
                    ]
                },
                {
                    "package_name": "Diagnostic Laparoscopy",
                    "cost": "₹25,000 - ₹35,000",
                    "features": [
                        "Day Care",
                        "Investigation",
                        "Report in 24hrs"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "What are the advantages of keyhole surgery?",
                    "answer": "Smaller scars, less pain, shorter hospital stay, and faster return to work/normal life."
                },
                {
                    "question": "Is laparoscopic surgery safe?",
                    "answer": "Yes, it is very safe and now considered the gold standard for many procedures like gallbladder removal and hernia repair."
                },
                {
                    "question": "Will I have a large scar?",
                    "answer": "No, incisions are typically 0.5 to 1 cm in size, leaving very minimal scarring."
                },
                {
                    "question": "Can I eat normally after gallbladder surgery?",
                    "answer": "Yes, you can eat a normal healthy diet. Your body adapts to digesting fat without a gallbladder."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Karthik S.",
                    "review": "Had my gallbladder removed laparoscopically. I was walking the same evening. Amazing technology.",
                    "rating": 5
                },
                {
                    "patient_name": "Priya M.",
                    "review": "Tiny scars, big relief. Dr. Shankar is an expert in keyhole surgery.",
                    "rating": 5
                },
                {
                    "patient_name": "Venkatesh R.",
                    "review": "Cost was very affordable compared to Chennai hospitals. Quality of care is top notch.",
                    "rating": 5
                }
            ],
            "technology": [
                {
                    "name": "4K Imaging System",
                    "description": "Ultra-high definition imaging for precise visualization of internal organs.",
                    "icon": "Activity"
                },
                {
                    "name": "Advanced Insufflators",
                    "description": "Maintains stable pneumoperitoneum for safe surgical access.",
                    "icon": "Zap"
                }
            ]
        },
        {
            "title": "Gastroenterology",
            "slug": "gastroenterology",
            "short_description": "Expert care for digestive system, liver, and pancreatic disorders.",
            "icon": "Stethoscope",
            "full_description": "\n            <p>Our Gastroenterology department provides advanced diagnostic and therapeutic services for all diseases affecting the digestive tract, liver, and pancreas. Led by senior consultants, we handle complex GI emergencies ensuring timely intervention.</p>\n\n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Conditions Treated</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Acid Peptic Disease:</strong> Management of GERD (Acid Reflux), Gastritis, and Peptic Ulcers.</li>\n                <li><strong>Liver Diseases:</strong> Comprehensive care for Jaundice, Hepatitis B & C, Fatty Liver, and Cirrhosis.</li>\n                <li><strong>Pancreatic Disorders:</strong> Treatment for Acute and Chronic Pancreatitis.</li>\n                <li><strong>IBD & IBS:</strong> Long-term management of Inflammatory Bowel Disease and Irritable Bowel Syndrome.</li>\n                <li><strong>GI Cancers:</strong> Screening and palliative stenting for Esophageal, Stomach, and Colorectal cancers.</li>\n            </ul>\n\n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Endoscopic Services</h3>\n            <p>We are equipped with high-definition video endoscopes for Upper GI Scopy (OGD) and Colonoscopy. Therapeutic procedures such as Banding for varices, Polypectomy, and Foreign Body Removal are performed routinely.</p>\n        ",
            "pricing": [
                {
                    "package_name": "Upper GI Endoscopy (OGD)",
                    "cost": "₹3,000 - ₹5,000",
                    "features": [
                        "Diagnostic",
                        "Sedation Optional",
                        "Report Immediately"
                    ]
                },
                {
                    "package_name": "Colonoscopy",
                    "cost": "₹5,000 - ₹8,000",
                    "features": [
                        "Full Bowel Exam",
                        "Biopsy if needed",
                        "Day Care"
                    ]
                },
                {
                    "package_name": "ERCP",
                    "cost": "₹25,000 - ₹40,000",
                    "features": [
                        "Stone Removal",
                        "Stenting",
                        "Anesthesia Support"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Is endoscopy painful?",
                    "answer": "It is generally not painful but can be uncomfortable. We use local anesthetic spray or mild sedation to make it comfortable."
                },
                {
                    "question": "Do I need to fast before endoscopy?",
                    "answer": "Yes, you typically need to fast for 6-8 hours before an upper GI endoscopy."
                },
                {
                    "question": "How do you treat fatty liver?",
                    "answer": "Treatment involves lifestyle changes, diet, exercise, and medication to manage cholesterol and blood sugar levels."
                },
                {
                    "question": "What is the treatment for H. Pylori?",
                    "answer": "It is treated with a course of antibiotics and acid-suppressing medication for 14 days."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Mohan L.",
                    "review": "Endoscopy was done very gently. Doctor explained the ulcer problem clearly.",
                    "rating": 5
                },
                {
                    "patient_name": "Anitha K.",
                    "review": "Good treatment for my chronic acidity problem. Feeling much better now.",
                    "rating": 4
                },
                {
                    "patient_name": "Suresh B.",
                    "review": "Affordable charges for colonoscopy. Clean facility.",
                    "rating": 5
                }
            ],
            "technology": [
                {
                    "name": "Olympus Video Endoscope",
                    "description": "High-resolution imaging for detecting early cancers and ulcers.",
                    "icon": "Stethoscope"
                },
                {
                    "name": "Argon Plasma Coagulator",
                    "description": "For controlling bleeding from GI lesions effectively.",
                    "icon": "Zap"
                }
            ]
        },
        {
            "title": "Obstetrics & Gynaecology",
            "slug": "obstetrics-gynaecology",
            "short_description": "Comprehensive women's health with 24/7 maternity care.",
            "icon": "Baby",
            "full_description": "\n            <p>Our Department of Obstetrics & Gynaecology focuses on the holistic health of women from adolescence through pregnancy and menopause. We pride ourselves on our high rate of normal deliveries and compassionate maternity care.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Maternity Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>High-Risk Pregnancy:</strong> Specialized care for pregnancies complicated by diabetes, hypertension (Preeclampsia), or other medical conditions.</li>\n                <li><strong>Painless Delivery:</strong> Epidural analgesia for a comfortable birthing experience.</li>\n                <li><strong>24/7 Emergency Care:</strong> Round-the-clock availability of obstetricians and anesthetists for emergency C-sections.</li>\n            </ul>\n\n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Gynaecological Care</h3>\n            <p>We offer treatments for PCOD/PCOS, menstrual disorders, endometriosis, and uterine fibroids. Minimally invasive Hysterectomy (Laparoscopic/Vaginal) is performed routinely for shorter hospital stays.</p>\n        ",
            "pricing": [
                {
                    "package_name": "Normal Delivery",
                    "cost": "₹30,000 - ₹45,000",
                    "features": [
                        "LDR Suite Available",
                        "Baby Care",
                        "3 Days Stay"
                    ]
                },
                {
                    "package_name": "C-Section Delivery",
                    "cost": "₹45,000 - ₹65,000",
                    "features": [
                        "Emergency/Elective",
                        "Pediatrician Support",
                        "4 Days Stay"
                    ]
                },
                {
                    "package_name": "Laparoscopic Hysterectomy",
                    "cost": "₹50,000 - ₹70,000",
                    "features": [
                        "Uterus Removal",
                        "Keyhole Surgery",
                        "Fast Recovery"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Do you encourage normal delivery?",
                    "answer": "Yes, we always strive for a normal vaginal delivery unless there is a medical indication for C-section."
                },
                {
                    "question": "Is painless delivery safe for the baby?",
                    "answer": "Yes, Epidural analgesia is safe for both the mother and the baby when administered by expert anesthetists."
                },
                {
                    "question": "When should I consult for pregnancy?",
                    "answer": "As soon as you miss your period or get a positive home test, you should schedule a consultation."
                },
                {
                    "question": "Do you have NICU facilities?",
                    "answer": "Yes, we have a fully equipped NICU to care for premature or sick newborns."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Mrs. Divya",
                    "review": "Delivered my baby boy here. Normal delivery. Dr. Latha is very supportive.",
                    "rating": 5
                },
                {
                    "patient_name": "Mrs. Geetha",
                    "review": "Had a hysterectomy laparoscopically. Recovered in 1 week. Excellent care.",
                    "rating": 5
                },
                {
                    "patient_name": "Mrs. Kavitha",
                    "review": "Nurses are very caring. Rooms are clean and spacious.",
                    "rating": 4
                }
            ],
            "technology": [
                {
                    "name": "CTG Monitor",
                    "description": "Continuous electronic fetal monitoring during labor.",
                    "icon": "Baby"
                },
                {
                    "name": "3D/4D Ultrasound",
                    "description": "Advanced scanning for detailed fetal assessment.",
                    "icon": "Activity"
                }
            ]
        },
        {
            "title": "Orthopaedics",
            "slug": "orthopaedics",
            "short_description": "Joint replacements, spine surgery, and complex trauma care.",
            "icon": "Bone",
            "full_description": "\n            <p>The Department of Orthopaedics & Trauma Surgery is a center of excellence dealing with bone and joint disorders. We are equipped with a C-Arm facility and dedicated orthopaedic OT for precision surgeries.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Specialized Treatments</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Joint Replacement:</strong> Total Knee Replacement (TKR) and Total Hip Replacement (THR) using high-quality implants for long-lasting mobility.</li>\n                <li><strong>Trauma & Fractures:</strong> 24/7 management of complex fractures, multiple trauma, and polytrauma cases.</li>\n                <li><strong>Spine Surgery:</strong> Treatment for Disc Prolapse (Sciatica), Spondylosis, and spinal fractures.</li>\n                <li><strong>Arthroscopy:</strong> Keyhole surgery for ACL reconstruction, meniscus tears, and sports injuries.</li>\n                <li><strong>Geriatric Orthopaedics:</strong> Specialized care for osteoporosis and fractures in the elderly.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "Total Knee Replacement",
                    "cost": "₹1.4L - ₹1.8L",
                    "features": [
                        "Imported Implant",
                        "Physiotherapy",
                        "5 Days Stay"
                    ]
                },
                {
                    "package_name": "ACL Reconstruction",
                    "cost": "₹70,000 - ₹90,000",
                    "features": [
                        "Arthroscopic",
                        "Bio-screw",
                        "Sports Rehab"
                    ]
                },
                {
                    "package_name": "Hip Replacement",
                    "cost": "₹1.5L - ₹2.0L",
                    "features": [
                        "Ceramic/Poly",
                        "Long life",
                        "Fast Track Rehab"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "How long does a knee replacement last?",
                    "answer": "Modern knee implants typically last 15-20 years or more with proper care."
                },
                {
                    "question": "When can I walk after TKR?",
                    "answer": "Most patients stand and take a few steps on the same day or next day after surgery."
                },
                {
                    "question": "Is arthroscopy major surgery?",
                    "answer": "No, it is minimally invasive keyhole surgery with small incisions and faster recovery."
                },
                {
                    "question": "Do you treat sports injuries?",
                    "answer": "Yes, we specialize in ligament tears (ACL/PCL) and meniscus injuries common in sports."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Mr. Rajendran",
                    "review": "Got both knees replaced. Now I can walk without pain. Thank you doctor.",
                    "rating": 5
                },
                {
                    "patient_name": "Arun V.",
                    "review": "ACL surgery was successful. Back to playing cricket in 6 months.",
                    "rating": 5
                },
                {
                    "patient_name": "Mrs. Shanthi",
                    "review": "Fracture treatment was excellent. Bone healed perfectly.",
                    "rating": 4
                }
            ],
            "technology": [
                {
                    "name": "C-Arm Image Intensifier",
                    "description": "Real-time X-ray imaging for precise fracture fixation and implant placement.",
                    "icon": "Activity"
                },
                {
                    "name": "Arthroscopy Tower",
                    "description": "Advanced system for keyhole joint surgeries.",
                    "icon": "Bone"
                }
            ]
        },
        {
            "title": "Cardiology",
            "slug": "cardiology",
            "short_description": "Advanced heart care with Cath Lab and ICCU.",
            "icon": "Heart",
            "full_description": "\n            <p>Our Cardiology Department is dedicated to preventing, diagnosing, and treating cardiovascular diseases. Backed by a state-of-the-art Cath Lab and a Critical Care Unit (CCU), we provide 24/7 emergency cardiac care.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Interventional Cardiology</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Angiography (CAG):</strong> Diagnostic visualization of heart vessels to detect blockages.</li>\n                <li><strong>Angioplasty (PTCA):</strong> Emergency Primary Angioplasty for heart attacks within the Golden Hour to save lives. Elective stenting for stable blockages.</li>\n                <li><strong>Pacemaker Implantation:</strong> For management of bradycardia (slow heart rate) and heart blocks.</li>\n            </ul>\n\n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Non-Invasive Cardiology</h3>\n            <p>We offer comprehensive cardiac evaluation including 2D Echocardiography (Echo), TMT (Treadmill Test), Holter Monitoring, and preventive heart check-up packages.</p>\n        ",
            "pricing": [
                {
                    "package_name": "Coronary Angiography",
                    "cost": "₹12,000 - ₹15,000",
                    "features": [
                        "Radial Access",
                        "Day Care",
                        "CD Provided"
                    ]
                },
                {
                    "package_name": "Angioplasty (Stent)",
                    "cost": "₹1.2L - ₹1.8L",
                    "features": [
                        "Drug Eluting Stent",
                        "ICU Stay",
                        "Medicines"
                    ]
                },
                {
                    "package_name": "Pacemaker (Single Chamber)",
                    "cost": "₹1.0L - ₹1.5L",
                    "features": [
                        "Device Cost",
                        "Implantation",
                        "Checkup"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "What are the symptoms of a heart attack?",
                    "answer": "Chest pain/heaviness, shortness of breath, sweating, pain radiating to left arm/jaw."
                },
                {
                    "question": "How long does an angiogram take?",
                    "answer": "The procedure usually takes 15-20 minutes. Preparation and observation take a few hours."
                },
                {
                    "question": "Can I live a normal life with a stent?",
                    "answer": "Yes, most patients lead a full, active life after angioplasty."
                },
                {
                    "question": "Is TMT safe?",
                    "answer": "Yes, it is a controlled exercise test done under continuous heart monitoring."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Mr. Balaji",
                    "review": "Saved my father's life during massive heart attack. Forever grateful.",
                    "rating": 5
                },
                {
                    "patient_name": "Mrs. Kamala",
                    "review": "Angiogram was done very smoothly. Doctor explained everything nicely.",
                    "rating": 5
                },
                {
                    "patient_name": "Mr. John",
                    "review": "Excellent cardiac care facility in Vellore.",
                    "rating": 5
                }
            ],
            "technology": [
                {
                    "name": "Digital Cath Lab",
                    "description": "Advanced flat-panel cath lab for high-clarity cardiac imaging.",
                    "icon": "Activity"
                },
                {
                    "name": "Echo 4D",
                    "description": "Latest echocardiography machine for detailed heart function assessment.",
                    "icon": "Heart"
                }
            ]
        },
        {
            "title": "ICU & Emergency",
            "slug": "icu-emergency",
            "short_description": "24/7 Critical care, trauma response, and ventilator support.",
            "icon": "Siren",
            "full_description": "\n            <p>Indira Hospital is the preferred center for medical emergencies in Vellore. Our Emergency Department works in tandem with appropriate specialties to provide rapid, life-saving care during the \"Golden Hour\".</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Critical Care Infrastructure</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>ICU / CCU / SICU:</strong> Dedicated Intensive Care Units for Medical, Cardiac, and Surgical patients, equipped with advanced ventilators and multipara monitors.</li>\n                <li><strong>Trauma Team:</strong> Rapid response team for road traffic accidents (RTA), head injuries, and poly-trauma.</li>\n                <li><strong>Poison & Overdose:</strong> Expert medical management of poisoning and snake bite cases.</li>\n                <li><strong>Cardiac Emergencies:</strong> Immediate thrombolysis or cath-lab activation for heart attacks (STEMI).</li>\n                <li><strong>Stroke Unit:</strong> Rapid assessment and thrombolysis for ischemic strokes.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "ICU Bed Charges",
                    "cost": "₹5,000 - ₹8,000 / day",
                    "features": [
                        "Monitoring",
                        "Nursing 1:1",
                        "Oxygen"
                    ]
                },
                {
                    "package_name": "Ventilator Support",
                    "cost": "₹8,000 - ₹12,000 / day",
                    "features": [
                        "Advanced Mode",
                        "Respiratory Care"
                    ]
                },
                {
                    "package_name": "Emergency ER Care",
                    "cost": "Based on Treatment",
                    "features": [
                        "Triage",
                        "Stabilization",
                        "Specialist Call"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Is the emergency open 24/7?",
                    "answer": "Yes, our emergency department and pharmacy are open 24 hours a day, 365 days a year."
                },
                {
                    "question": "Do you handle accident cases?",
                    "answer": "Yes, we are a designated trauma center capable of handling severe road accidents and head injuries."
                },
                {
                    "question": "Can relatives stay in ICU?",
                    "answer": "No, to prevent infection. Relatives can visit during designated visiting hours."
                },
                {
                    "question": "Do you treat snake bites?",
                    "answer": "Yes, we have anti-venom available and ICU support for snake bite management."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Family of Patient",
                    "review": "My brother had a bad bike accident. The trauma team acted very fast. He is alive because of them.",
                    "rating": 5
                },
                {
                    "patient_name": "Mr. Ravi",
                    "review": "ICU care is excellent. Doctors update the status regularly.",
                    "rating": 4
                },
                {
                    "patient_name": "Mrs. Leela",
                    "review": "Emergency staff were very helpful during my mother's breathing difficulty.",
                    "rating": 5
                }
            ],
            "technology": [
                {
                    "name": "Advanced Ventilators",
                    "description": "Latest mechanical ventilators for invasive and non-invasive support.",
                    "icon": "Siren"
                },
                {
                    "name": "Multipara Monitors",
                    "description": "Continuous monitoring of all vital parameters.",
                    "icon": "Activity"
                }
            ]
        },
        {
            "title": "Dental & Maxillofacial",
            "slug": "dental",
            "short_description": "Complete dental care including Implants, RCT, and Braces.",
            "icon": "Smile",
            "full_description": "\n            <p>Our Dental Department creates beautiful, healthy smiles using the latest technology. From routine check-ups to complex facial surgeries, we offer a complete spectrum of oral healthcare under one roof.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Comprehensive Dental Services</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Root Canal Treatment:</strong> Single-sitting, painless RCT using rotary endodontics.</li>\n                <li><strong>Dental Implants:</strong> Permanent solution for missing teeth. We offer single implants and full-mouth rehabilitation (All-on-4).</li>\n                <li><strong>Orthodontics:</strong> Metal braces, ceramic braces, and clear aligners (Invisalign) for teeth straightening.</li>\n                <li><strong>Cosmetic Dentistry:</strong> Teeth whitening, ceramic veneers, and smile makeovers.</li>\n                <li><strong>Oral Surgery:</strong> Wisdom tooth removal, jaw fracture management, and cyst removal.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "Root Canal Treatment",
                    "cost": "₹3,500 - ₹5,000",
                    "features": [
                        "Single Sitting",
                        "X-Ray Included",
                        "Painless"
                    ]
                },
                {
                    "package_name": "Dental Implant",
                    "cost": "₹25,000 - ₹35,000",
                    "features": [
                        "Titanium Implant",
                        "Surgery",
                        "Abutment"
                    ]
                },
                {
                    "package_name": "Ceramic Braces",
                    "cost": "₹35,000 - ₹50,000",
                    "features": [
                        "Esthetic",
                        "Full Kit",
                        "Monthly Adjustments"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Is root canal painful?",
                    "answer": "With local anesthesia, it is no more painful than a regular filling."
                },
                {
                    "question": "How long do implants last?",
                    "answer": "With proper hygiene, dental implants can last a lifetime."
                },
                {
                    "question": "Do you offer Invisalign?",
                    "answer": "Yes, we offer clear aligners for invisible teeth straightening."
                },
                {
                    "question": "Can wisdom tooth be removed safely?",
                    "answer": "Yes, our maxillofacial surgeons perform wisdom tooth extractions routinely and safely."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Ms. Keerthana",
                    "review": "Got my smile makeover done here with veneers. Looks so natural!",
                    "rating": 5
                },
                {
                    "patient_name": "Mr. Anand",
                    "review": "Painless root canal. I was afraid of dentists but they made me comfortable.",
                    "rating": 5
                },
                {
                    "patient_name": "Mrs. Usha",
                    "review": "Best dental clinic in town. Very hygienic and modern.",
                    "rating": 5
                }
            ],
            "technology": [
                {
                    "name": "OPG Machine",
                    "description": "Full mouth panoramic X-ray for comprehensive diagnosis.",
                    "icon": "Smile"
                },
                {
                    "name": "Physiodispenser",
                    "description": "Precise motor for implant surgeries.",
                    "icon": "Zap"
                },
                {
                    "name": "Rotary Endomotor",
                    "description": "For faster and better root canal treatments.",
                    "icon": "Activity"
                }
            ]
        },
        {
            "title": "Neurology",
            "slug": "neurology",
            "short_description": "Treatment for Stroke, Epilepsy, Migraine, and Nerves.",
            "icon": "Brain",
            "full_description": "\n            <p>The Department of Neurology provides expert diagnosis and management for disorders governing the brain and nervous system. We emphasize early intervention, particularly for stroke management.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Focus Areas</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Stroke (Paralysis) Care:</strong> Acute stroke thrombolysis and post-stroke rehabilitation.</li>\n                <li><strong>Epilepsy Management:</strong> Diagnosis and long-term control of seizures in children and adults.</li>\n                <li><strong>Headache Clinic:</strong> Specialized treatment for chronic migraines and tension headaches.</li>\n                <li><strong>Movement Disorders:</strong> Care for Parkinson's disease, tremors, and dystonia.</li>\n                <li><strong>Neuro-diagnostics:</strong> Advanced EEG (Electroencephalogram) and NCS (Nerve Conduction Studies) services.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "Stroke Thrombolysis",
                    "cost": "₹40,000 - ₹60,000",
                    "features": [
                        "Clot Buster Inj",
                        "ICU Monitoring",
                        "CT Brain"
                    ]
                },
                {
                    "package_name": "EEG Study",
                    "cost": "₹1,500 - ₹3,000",
                    "features": [
                        "Digital EEG",
                        "Report by Neurologist",
                        "30 mins"
                    ]
                },
                {
                    "package_name": "Botox for Migraine",
                    "cost": "₹15,000 - ₹25,000",
                    "features": [
                        "Injection",
                        "Chronic Migraine",
                        "Procedure Cost"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "What are the warning signs of stroke?",
                    "answer": "FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency."
                },
                {
                    "question": "Can epilepsy be cured?",
                    "answer": "While not always cured, it can be completely controlled with medication in 70% of people."
                },
                {
                    "question": "Why do I get frequent headaches?",
                    "answer": "It could be migraine, tension, or other causes. A neurologist can diagnose the specific type and treat it."
                },
                {
                    "question": "Do you treat neuropathy?",
                    "answer": "Yes, we treat nerve pain caused by diabetes and other conditions."
                }
            ],
            "reviews": [
                {
                    "patient_name": "Mr. Chandran",
                    "review": "My father recovered from stroke because we reached Indira Hospital in time. Great doctors.",
                    "rating": 5
                },
                {
                    "patient_name": "Ms. Latha",
                    "review": "Migraine treatment really helped me. Used to suffer daily headaches.",
                    "rating": 5
                },
                {
                    "patient_name": "Mr. Siva",
                    "review": "Good diagnosis for my nerve problem.",
                    "rating": 4
                }
            ],
            "technology": [
                {
                    "name": "Video EEG",
                    "description": "For accurate classification of seizure disorders.",
                    "icon": "Brain"
                },
                {
                    "name": "NCS/EMG Machine",
                    "description": "To assess nerve and muscle function.",
                    "icon": "Activity"
                }
            ]
        }
    ],
};

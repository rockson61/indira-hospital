export const SEED_DATA = {
    doctors: [
        {
            id: "dr-shankar",
            status: "published",
            name: "Dr. P. Shankar",
            slug: "dr-p-shankar",
            specialty_slug: "proctology",
            designation: "Chairman & HOD - General Surgery | Top Proctologist in India & Tamil Nadu",
            department: "General Surgery",
            image: "/images/doctors/dr-shankar.jpg",
            bio: "Dr. P. Shankar is the esteemed Chairman of Indira Hospital and is widely recognized as the best proctologist in India and Tamil Nadu. A veteran General Surgeon with over 30 years of clinical and administrative excellence, he specializes in advanced Proctology (Laser Piles, Laser Fistula, Fissure), Laparoscopic Surgery (Hernia, Gallbladder, Appendix), and Surgical Gastroenterology. His expertise also extends to Diabetic Foot Care and complex General Surgical procedures. Under his leadership, Indira Hospital has become a center of excellence for minimally invasive and day-care surgeries, ensuring world-class healthcare delivery with a focus on patient safety and rapid recovery.",
            education: [
                { degree: "MBBS", institution: "Stanley Medical College", year: "1988" },
                { degree: "MS - General Surgery", institution: "Madras Medical College", year: "1993" }
            ],
            specialties: ["General Surgery", "Proctology", "Laparoscopic Surgery", "Surgical Gastroenterology", "Diabetic Foot Care"],
            procedures: [
                "Laser Piles Treatment",
                "Laser Fistula Closure (FiLaC)",
                "Laser Fissure Surgery",
                "Advanced Laparoscopic Surgeries",
                "Complex Hernia Repair",
                "Thyroidectomy",
                "Gastrointestinal Surgeries",
                "Diabetic Foot Management"
            ],
            experience_years: 30,
            memberships: ["Association of Surgeons of India (ASI)", "Indian Medical Association (IMA)"],
            faqs: [
                {
                    question: "What is Dr. Shankar's primary surgical focus?",
                    answer: "As a senior surgeon, he focuses on advanced proctology and complex laparoscopic procedures, ensuring long-term surgical success and patient safety."
                },
                {
                    question: "Does the Chairman still perform surgeries?",
                    answer: "Yes, Dr. Shankar remains active in the operating theater for complex and specialized laser and laparoscopic cases."
                }
            ],
            reviews: [
                {
                    patient_name: "Venkatraman G.",
                    content: "Dr. Shankar is a legend in Vellore. His surgical precision in laser proctology and the way he manages the hospital are truly inspiring.",
                    rating: 5,
                    date: "2023-10-12"
                }
            ]
        },
        {
            id: "dr-karan-shankar",
            status: "published",
            name: "Dr. Karan Shankar",
            slug: "dr-karan-shankar",
            specialty_slug: "proctology",
            designation: "Clinical/Speciality Lead - Indira Laser & Laparoscopy Centre | Executive Director",
            department: "General Surgery",
            image: "/images/doctors/dr-karan-shankar.png",
            bio: "As the Executive Director of Indira Super Speciality Hospital & Clinical Lead of Indira Laser & Laparoscopy Centre in Vellore, Tamil Nadu, Dr. Karan Shankar leads a team dedicated towards providing exceptional multidisciplinary healthcare services. With extensive expertise as a General Surgeon, specializing in Advanced Laparoscopic and Colorectal surgeries, he is committed to advancing the standards of surgical healthcare in the community for delivering precise, patient-centric treatments.\n\nHis career is marked by a strong focus on Minimal Access Surgery and Proctology, where he has developed a robust brand value for delivering precise, patient-centric treatments. He strives to utilize the latest technological advancements and minimally invasive techniques to ensure faster recovery times and improved outcomes for patients.",
            education: [
                { degree: "MBBS", institution: "Meenakshi Medical College", year: "2017" },
                { degree: "MS (General Surgery)", institution: "Dr M.G.R Medical University", year: "2022" },
                { degree: "FIAGES", institution: "Fellowship of Indian Association of Gastrointestinal Endosurgeons", year: "2022" },
                { degree: "FMAS", institution: "Fellowship in Minimal Access Surgery", year: "" },
                { degree: "DMAS (WALS)", institution: "Diploma in Minimal Access Surgery – World Association of Laparoscopic Surgeons", year: "" },
                { degree: "FAGIE", institution: "Fellow of Asian Gastrointestinal Endoscopy Association", year: "" }
            ],
            memberships: [
                "Association of Surgeons of India",
                "Indian Association of Gastrointestinal & Endoscopic Surgeons",
                "Association of Colorectal Surgeons of India (ACRSI)",
                "World Association of Laparoscopic Surgeons (WALS)"
            ],
            specialties: [
                "General Surgery",
                "Advanced Laparoscopic Surgery",
                "Colorectal Surgery",
                "Minimal Access Surgery",
                "Abdominal Wall Reconstructive Surgery",
                "Proctology"
            ],
            procedures: [
                "Hernia Surgery",
                "Gallstones/Gallbladder Surgery",
                "Appendix Surgery",
                "Rectal Prolapse",
                "Varicocoele",
                "Hiatus Hernia",
                "Rectum & Colon Cancer Surgery",
                "Gastrointestinal Surgeries",
                "Laser Surgery for Piles/Fissure",
                "Laser Surgery for Fistula (FiLaC)",
                "Laser Pilonidal Sinus (SiLaC)",
                "Stapler Hemorrhoidopexy",
                "Abdominal Wall Reconstruction",
                "Comprehensive Proctology Solutions"
            ],
            experience_years: 12,
            related_services: ["general-surgery", "laparoscopic-surgeries", "minimal-access-surgical-gastroenterologist"],
            available_locations: ["vellore", "katpadi", "ranipet"],
            faqs: [
                {
                    question: "What are the advantages of Laser Surgery for Piles?",
                    answer: "Laser treatment for piles (hemorrhoids) is minimally invasive, offers rapid recovery, minimal blood loss, and significantly less post-operative pain compared to traditional surgical methods."
                },
                {
                    question: "How long is the recovery after Laparoscopic Hernia Repair?",
                    answer: "Most patients can return to light desk work within 3-5 days and resume normal daily activities within a week. Strenuous exercise should be avoided for 4-6 weeks."
                },
                {
                    question: "What is FiLaC for Fistula?",
                    answer: "FiLaC (Fistula-tract Laser Closure) is a sphincter-saving procedure that uses laser energy to close the fistula tract without cutting the sphincter muscle, ensuring preservation of continence."
                }
            ],
            reviews: [
                {
                    patient_name: "Ramakrishna V.",
                    content: "Dr. Karan's laser surgery for my fistula was life-changing. I was back home the next day with almost no pain. Highly recommended for advanced proctology.",
                    rating: 5,
                    date: "2024-01-15"
                },
                {
                    patient_name: "Suresh Menon",
                    content: "Excellent laparoscopic surgeon. My gallbladder surgery was handled with extreme professionalism. The scars are barely visible.",
                    rating: 5,
                    date: "2023-11-20"
                }
            ]
        },
        {
            id: "dr-soniya-shankar",
            status: "published",
            name: "Dr. Soniya Shankar",
            slug: "dr-soniya-shankar",
            specialty_slug: "administration",
            designation: "Chief Executive Officer",
            department: "Administration",
            image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/10/images.jpg",
            bio: "Dr. Soniya Shankar, the CEO of Indira Hospital, leads with a vision of compassionate, patient-centric healthcare. Under her leadership, the hospital has achieved significant milestones in quality standards and infrastructure expansion, ensuring ethical and excellence-driven medical services for the region.",
            education: [{ degree: "MBA in Hospital Management", institution: "BITS Pilani", year: "2015" }],
            specialties: ["Healthcare Administration", "Strategic Planning", "Quality Assurance"],
            experience_years: 12,
            memberships: ["Indian Society of Hospital Administrators"],
            faqs: [
                {
                    question: "What is the hospital's patient care philosophy?",
                    answer: "Our philosophy is centered on 'Compassion with Excellence,' ensuring every patient receives ethical, affordable, and world-class medical treatment."
                }
            ]
        },
        {
            id: "dr-gayathri",
            status: "published",
            name: "Dr. Gayathri",
            slug: "dr-gayathri",
            specialty_slug: "ent",
            designation: "Senior Consultant - ENT & Head/Neck Surgery",
            department: "ENT",
            image: "/images/doctors/dr-gayathri.png",
            bio: "Dr. Gayathri is a trained ENT and Head & Neck surgeon with expertise in the diagnosis and surgical management of a wide spectrum of ear, nose, throat, and thyroid disorders. She completed her MBBS from Saveetha Medical College, Chennai, and her postgraduate training in Otorhinolaryngology at Kovai Medical Center and Hospital, Coimbatore, where she received extensive exposure to advanced ENT and endoscopic procedures. She has significant experience in managing both routine and complex ENT conditions with a focus on modern, minimally invasive surgical techniques.",
            education: [{ degree: "MBBS", institution: "Saveetha Medical College", year: "" }, { degree: "Otorhinolaryngology", institution: "KMCH", year: "" }],
            procedures: [
                "Functional Endoscopic Sinus Surgery (FESS)",
                "CSF Rhinorrhoea Repair",
                "Endoscopic Sphenopalatine Artery Ligation (ESPAL)",
                "Tympanoplasty",
                "Mastoidectomy",
                "Adenotonsillectomy",
                "Thyroidectomy",
                "Coblation-assisted ENT surgeries",
                "Septoplasty",
                "Microscopic Laryngeal Surgeries",
                "Salivary Gland Surgeries"
            ],
            experience_years: 8,
            related_services: ["ent"],
            available_locations: ["vellore", "katpadi", "arakkonam"],
            faqs: [
                {
                    question: "What is FESS (Functional Endoscopic Sinus Surgery)?",
                    answer: "FESS is a minimally invasive surgical procedure used to treat chronic sinus infections by opening the natural drainage pathways of the sinuses using endoscopes."
                },
                {
                    question: "How long is the recovery after Thyroidectomy?",
                    answer: "Most patients can return to light activities within a week and full normal life in 2 weeks. Hospital stay is usually 2-3 days."
                },
                {
                    question: "What is Coblation-assisted surgery in ENT?",
                    answer: "Coblation uses low-temperature radiofrequency energy to remove tissue like tonsils or adenoids, causing less heat damage and significantly reduced post-operative pain compared to traditional methods."
                }
            ],
            reviews: [
                {
                    patient_name: "Meenakshi R.",
                    content: "Dr. Gayathri handled my sinus surgery so well. I can finally breathe clearly after years of struggle. Her explanation of the FESS procedure was very comforting.",
                    rating: 5,
                    date: "2024-02-10"
                },
                {
                    patient_name: "Arun Kumar",
                    content: "Very calm and knowledgeable doctor. She performed my tonsillectomy using coblation, and the recovery was much faster than I expected.",
                    rating: 5,
                    date: "2023-12-05"
                }
            ]
        },
        {
            id: "dr-praharshitha-sagiraju",
            status: "published",
            name: "Dr. Praharshitha Sagiraju",
            slug: "dr-praharshitha-sagiraju",
            specialty_slug: "obstetrics-gynaecology",
            designation: "Elite Consultant - Obstetrics & Gynaecology | MS (AIIMS), PDCC",
            department: "Obstetrics & Gynaecology",
            image: "/images/doctors/dr-praharshitha.png",
            bio: "Dr. Praharshitha Sagiraju is a highly qualified Obstetrician and Gynaecologist with a specialization in Minimal Access Surgery and Gynaecological Endoscopy. With her background from AIIMS Raipur and Andhra Medical College, she brings expertise in operative laparoscopic and hysteroscopic procedures, Maternal & Fetal Medicine, and Urogynecology. She is dedicated to evidence-based care and has published research on PCOS and laparoscopic techniques.",
            education: [
                { degree: "MBBS", institution: "Andhra Medical College", year: "2020" },
                { degree: "MS (OBGY)", institution: "AIIMS Raipur", year: "2024" },
                { degree: "DNB (OBGY)", institution: "", year: "2024" },
                { degree: "FMAS", institution: "", year: "2024" },
                { degree: "PDCC (Gynae Endoscopy)", institution: "AIIMS Raipur", year: "2025" }
            ],
            procedures: [
                "Pregnancy & High-Risk Pregnancy care",
                "Normal & Caesarean Delivery",
                "Family planning Services",
                "Menstrual disorders & PCOS",
                "Infertility",
                "Laparoscopic surgeries (Keyhole)",
                "Fibroids & Ovarian cysts",
                "Menopause care",
                "Cervical cancer screening"
            ],
            experience_years: 5,
            related_services: ["obstetrics-gynaecology", "laparoscopic-surgeries"],
            available_locations: ["vellore", "katpadi", "arcot"],
            faqs: [
                {
                    question: "What are the benefits of Gynaecological Endoscopy?",
                    answer: "Endoscopy (laparoscopy or hysteroscopy) allows for surgical procedures through tiny incisions, leading to faster recovery, less pain, and shorter hospital stays compared to open surgery."
                },
                {
                    question: "What is Maternal & Fetal Medicine?",
                    answer: "It is a branch of medicine that focuses on managing health concerns of the mother and fetus prior to, during, and shortly after pregnancy, especially in high-risk cases."
                },
                {
                    question: "Can PCOS be managed effectively?",
                    answer: "Yes, PCOS can be managed through a combination of lifestyle modifications, medical management, and specialized care tailored to symptoms like irregular periods, weight gain, and fertility issues."
                }
            ],
            reviews: [
                {
                    patient_name: "Deepika S.",
                    content: "I had a complicated pregnancy, but Dr. Praharshitha's care in Maternal & Fetal Medicine gave me confidence. She is very patient and detail-oriented.",
                    rating: 5,
                    date: "2024-02-18"
                },
                {
                    patient_name: "Lakshmi Narayanan",
                    content: "Highly recommend for laparoscopic gynae surgery. Fast recovery and excellent guidance throughout the treatment of my ovarian cysts.",
                    rating: 5,
                    date: "2024-01-22"
                }
            ]
        },
        {
            id: "dr-srinivasan-karbar",
            status: "published",
            name: "Dr. Srinivasan Karbar",
            slug: "dr-srinivasan-karbar",
            designation: "Emergency Medicine Specialist",
            department: "Emergency Medicine",
            image: "/images/doctors/dr-srinivasan-karbar.jpg",
            bio: "Dr. Srinivasan Karbar is a distinguished Emergency Medicine specialist with over 10 years of clinical mastery in high-acuity trauma and critical care. Currently serving as a Consultant Emergency Physician at Indira Super Speciality Hospital, he leads the rapid-response trauma team with a focus on evidence-based resuscitation protocols. His international academic background with the Royal College of Emergency Medicine (UK) ensures that Indira's ER operations meet global gold standards for patient stabilization and acute care management.",
            education: [
                { degree: "MRCEM (Member of Royal College of Emergency Medicine)", institution: "RCEM, United Kingdom", year: "2024" },
                { degree: "GWU MEM (Masters in Emergency Medicine)", institution: "Global Hospital Chennai / GWU", year: "2017" },
                { degree: "MBBS", institution: "Kempegowda Institute of Medical Sciences", year: "2012" }
            ],
            specialties: ["Emergency Medicine", "Resuscitation & ACLS", "Polytrauma Management", "Critical Care Medicine"],
            procedures: [
                "Advanced Airway Management (Intubation)",
                "Emergency Resuscitation & Life Support",
                "Advanced Polytrauma Stabilization",
                "FAST Ultrasound in Trauma",
                "Acute Cardiac Care Management",
                "Central & Arterial Line Placements",
                "Procedural Sedation & Analgesia"
            ],
            experience_years: 12,
            faqs: [
                {
                    question: "What is Dr. Srinivasan's area of expertise?",
                    answer: "He specializes in emergency resuscitation, polytrauma stabilization, and managing high-acuity patients in critical care settings using international protocols."
                },
                {
                    question: "Is the ER team trained in ACLS?",
                    answer: "Yes, under Dr. Srinivasan's leadership, the entire ER nursing and clinical staff are trained in Advanced Cardiac Life Support (ACLS) and Pediatric Advanced Life Support (PALS)."
                }
            ]
        },
        {
            id: "dr-jackson-p-john",
            status: "published",
            name: "Dr. Jackson P John",
            slug: "dr-jackson-p-john",
            designation: "Emergency Medicine Specialist",
            department: "Emergency Medicine",
            image: "/images/doctors/dr-jackson-p-john.jpg",
            bio: "Dr. Jackson P John is a premier Emergency Medicine Specialist with over 8 years of intensive clinical experience, including a significant tenure with the Oman Ministry of Health. He is a master of high-stress clinical environments, specializing in advanced airway management, complex trauma stabilization, and critical care transport. His approach combines rapid diagnostic intuition with technical precision in surgical and trauma emergencies, ensuring the highest survival rates for critical arrivals at Indira Hospital.",
            education: [
                { degree: "MBBS", institution: "D.Y Patil University, Navi Mumbai", year: "2017" },
                { degree: "Masters in Emergency Medicine", institution: "Kokilaben Dhirubhai Ambani Hospital, Mumbai" }
            ],
            specialties: ["Emergency Medicine", "Advanced Airway Management", "Trauma & Surgical Emergencies", "Disaster Medicine"],
            procedures: [
                "Oro-tracheal Intubation & RSI",
                "Advanced Trauma Life Support (ATLS)",
                "Central Venous Access",
                "Tube Thoracostomy (Chest Tube)",
                "Management of Septic & Cardiogenic Shock",
                "Focused Assessment with Sonography in Trauma (FAST)"
            ],
            experience_years: 9,
            faqs: [
                {
                    question: "What is the average response time for critical trauma?",
                    answer: "Under Dr. Jackson's protocols, the primary stabilization occurs within the 'Golden Hour'—often within minutes of arrival at our dedicated Triage unit."
                },
                {
                    question: "Does Dr. Jackson handle pediatric emergencies?",
                    answer: "Yes, he is highly trained in managing acute pediatric respiratory and trauma emergencies."
                }
            ]
        },
        {
            id: "dr-t-s-dhanushmi",
            status: "published",
            name: "Dr. T. S. Dhanushmi",
            slug: "dr-t-s-dhanushmi",
            designation: "Specialist Dentist",
            department: "Dentistry",
            image: "/images/doctors/dr-dhanushmi.jpg",
            bio: "Dr. T. S. Dhanushmi is a premier restorative and preventive dental specialist at Smile Happy Dental Club, Indira Hospital. With her Fellowship in Advanced Clinical Training, she specializes in aesthetic smile corrections and painless restorative procedures. Her clinical philosophy focuses on 'Preventive Precision'—identifying oral health issues before they require invasive intervention. Known for her gentle chairside manner and patient education, she ensures a stress-free experience for patients with dental anxiety while delivering high-aesthetic composite and ceramic restorations.",
            education: [
                { degree: "Bachelor of Dental Surgery (BDS)", institution: "Raja Rajeswari Dental College, Bengaluru", year: "2019" },
                { degree: "F.C.E (Fellowship in Advanced Clinical Training)", institution: "AIAD", year: "2021" }
            ],
            specialties: ["Aesthetic Dentistry", "Preventive Care", "Micro-Restorations", "Pediatric Dental Wellness"],
            procedures: [
                "Advanced Ultrasonic Scaling",
                "Aesthetic Composite Bonding",
                "Painless Tooth Restorations",
                "Ceramic Veneer Preparations",
                "Surgical Extractions & Alveoloplasty",
                "Preventive Pit & Fissure Sealants",
                "Interdisciplinary Endodontic Assistance"
            ],
            experience_years: 6,
            related_services: ["dentistry"],
            available_locations: ["vellore"],
            faqs: [
                {
                    question: "How often should I visit for ultrasonic scaling?",
                    answer: "Dr. Dhanushmi recommends a professional cleaning every 6 months to prevent periodontal disease and maintain restorative work."
                },
                {
                    question: "Are your composite fillings tooth-colored?",
                    answer: "Yes, we use advanced nano-hybrid composites that perfectly match the natural shade and translucency of your teeth."
                }
            ],
            reviews: []
        },
        {
            id: "dr-rockson-samuel",
            status: "published",
            name: "Dr. Rockson Samuel",
            slug: "dr-rockson-samuel",
            designation: "Chief Dentist",
            department: "Dentistry",
            image: "/images/doctors/dr-rockson-samuel.jpg",
            bio: "Dr. Rockson Samuel is the Chief Dentist at Indira Dental Clinic – Smile Happy Dental Club, dedicated to providing comprehensive, patient-focused dental care. With a strong background in clinical dentistry and healthcare innovation, he focuses on delivering safe, effective, and personalized dental treatments for patients of all ages.",
            education: [
                { degree: "BDS", institution: "Rajiv Gandhi University of Health Sciences", year: "" },
                { degree: "BDA", institution: "", year: "" },
                { degree: "PgD DM", institution: "", year: "" }
            ],
            specialties: ["Clinical Dentistry", "Healthcare Innovation", "Preventive Care", "Cosmetic Dentistry"],
            procedures: [
                "Preventive dental care and oral health check-ups",
                "Dental fillings and restorative treatments",
                "Tooth extractions and minor oral surgery",
                "Cosmetic dental treatments and smile enhancement"
            ],
            experience_years: 5,
            related_services: ["dentistry"],
            available_locations: ["vellore"],
            faqs: [
                {
                    question: "What is Dr. Rockson Samuel's approach to patient care?",
                    answer: "He emphasizes accurate diagnosis, personalized treatment plans, comfortable and stress-free visits, and ethical, evidence-based dental care."
                },
                {
                    question: "What languages does Dr. Rockson Samuel speak?",
                    answer: "He communicates in English, Tamil, Hindi, Malayalam, Telugu, and Kannada."
                }
            ],
            reviews: []
        }
    ],
    services: [
        {
            "title": "Anaesthesiology",
            "slug": "anaesthesiology",
            "aliases": ["anaesthesia", "anesthesiology", "pain-clinic"],
            "short_description": "Advanced Anaesthesiology care ensuring a safe, painless surgical experience at Indira Hospital.",
            "icon": "Syringe",
            "full_description": "<h2>Advanced Anaesthesiology & Pain Management at Indira Hospital</h2>\n<p>At Indira Super Speciality Hospital, your safety, comfort, and swift recovery are our absolute priorities. Whether you are undergoing a minor day-care procedure or complex surgery, our <strong>Department of Anaesthesiology</strong> utilizes state-of-the-art monitoring systems and advanced anesthetic protocols to ensure a smooth, pain-free experience.</p>\n<h3>Why Trust Indira Hospital for Your Procedure?</h3>\n<ul>\n<li><strong>Pre-Anaesthetic Checkup (PAC)</strong>: Thorough pre-surgical evaluation to determine the safest anesthetic strategy tailored to your specific health profile.</li>\n<li><strong>Comprehensive Techniques</strong>: Expertise in General Anaesthesia, Regional Anesthesia (Spinal/Epidural), and targeted Nerve Blocks for enhanced post-operative comfort.</li>\n<li><strong>Advanced Monitoring</strong>: Continuous, real-time tracking of vital parameters by our dedicated ICU and anaesthesia specialists throughout the procedure.</li>\n<li><strong>Post-Surgical Pain Management</strong>: Specialized acute pain management protocols designed to accelerate recovery and reduce reliance on strong medications.</li>\n</ul>\n<p>Our highly experienced anaesthesiologists work in tandem with the surgical teams to mitigate risks and deliver the highest standard of perioperative care in Vellore.</p>"
        },
        {
            "title": "Bariatrics",
            "slug": "bariatrics",
            "aliases": ["obesity-surgery", "weight-loss-surgery", "sleeve-gastrectomy"],
            "short_description": "Transform your life with safe, effective Bariatric & Weight Loss Surgery at Indira Hospital.",
            "icon": "Scale",
            "specialists": ["dr-karan-shankar"],
            "full_description": "<h2>Complete Bariatric & Weight Loss Solutions at Indira Hospital</h2>\n<p>Struggling with severe obesity and related health conditions? The <strong>Department of Bariatrics</strong> at Indira Super Speciality Hospital offers a highly effective, surgical pathway to sustained weight loss, reversing metabolic issues, and reclaiming your quality of life.</p>\n<h3>Advanced Laparoscopic Bariatric Procedures</h3>\n<p>Our highly skilled surgical team specializes in minimally invasive weight loss procedures that ensure minimal scarring, reduced pain, and rapid recovery:</p>\n<ul>\n<li><strong>Laparoscopic Sleeve Gastrectomy</strong>: A highly effective procedure that reduces stomach volume, limiting food intake and lowering hunger-inducing hormones.</li>\n<li><strong>Gastric Bypass Surgery (Roux-en-Y)</strong>: The gold standard in bariatric surgery, resolving severe obesity and drastically improving conditions like Type 2 Diabetes.</li>\n<li><strong>Mini Gastric Bypass</strong>: A simpler, faster alternative to the traditional bypass with comparable weight-loss results and excellent metabolic outcomes.</li>\n</ul>\n<h3>A Holistic Approach to Your Weight Loss Journey</h3>\n<p>Bariatric surgery is just the beginning. Our dedicated multidisciplinary team—comprising surgeons, endocrinologists, dietitians, and physiotherapists—provides comprehensive pre-operative screening and lifelong post-operative support. We partner with you to ensure sustainable weight management and a profound transformation in your overall health.</p>"
        },
        {
            "title": "Cardiac Sciences",
            "slug": "cardiac-sciences",
            "aliases": ["cardiology", "heart-specialist", "heart-surgery", "cardiac-surgeon"],
            "short_description": "Premier Cardiac Sciences offering advanced interventional and surgical heart care in Vellore.",
            "icon": "Heart",
            "full_description": "<h2>World-Class Cardiac Care at Indira Super Speciality Hospital</h2>\n<p>Your heart deserves nothing but the best. The <strong>Department of Cardiac Sciences</strong> at Indira Hospital is a Center of Excellence equipped with cutting-edge technology and renowned cardiologists dedicated to the prevention, diagnosis, and treatment of complex heart conditions.</p>\n<h3>Comprehensive Cardiology & Cardiovascular Surgery</h3>\n<ul>\n<li><strong>Interventional Cardiology</strong>: 24/7 Primary Angioplasty for heart attacks (STEMI), complex coronary stenting, and pacemaker implantations performed in our advanced Cath Lab.</li>\n<li><strong>Non-Invasive Cardiology</strong>: Pinpoint accurate diagnostics including 2D Echocardiography, TMT (Treadmill Test), Holter monitoring, and comprehensive cardiac health check-ups.</li>\n<li><strong>Cardiothoracic & Vascular Surgery (CTVS)</strong>: Expertise in Coronary Artery Bypass Grafting (CABG), heart valve repair/replacement, and thoracic vascular surgeries.</li>\n<li><strong>Heart Failure & Arrhythmia Management</strong>: Specialized clinics offering targeted therapies and advanced device implantations (ICDs, CRT) for optimal heart rhythm and function.</li>\n</ul>\n<p>With a state-of-the-art Cardiac ICU (CCU) and a team of dedicated cardiac intensivists, we ensure rapid triage and critical care when every second counts. Experience compassionate, evidence-based heart care at Indira Hospital.</p>"
        },
        {
            "title": "Cosmetology & Plastic Surgery",
            "slug": "cosmetology-plastic-surgery",
            "aliases": ["plastic-surgery", "cosmetology", "cosmetic-surgeon", "rhinoplasty", "liposuction"],
            "short_description": "Expert Cosmetology and Plastic Surgery for aesthetic enhancement and reconstructive restoration.",
            "icon": "Sparkles",
            "full_description": "<h2>Expert Cosmetology & Reconstructive Plastic Surgery in Vellore</h2>\n<p>Enhance your natural beauty and restore function with the <strong>Department of Cosmetology & Plastic Surgery</strong> at Indira Super Speciality Hospital. Our board-certified plastic surgeons combine surgical precision with an artistic eye, utilizing state-of-the-art techniques to deliver safe, natural-looking results.</p>\n<h3>Aesthetic & Reconstructive Excellence</h3>\n<ul>\n<li><strong>Cosmetic Surgery</strong>: Transformative procedures including Rhinoplasty (nose reshaping), Liposuction, Tummy Tucks (Abdominoplasty), Breast Augmentation/Reduction, and Facelifts designed to boost your confidence.</li>\n<li><strong>Non-Surgical Aesthetics</strong>: Advanced, minimally invasive treatments such as Botox, dermal fillers, chemical peels, and laser skin rejuvenation for a youthful, radiant glow without the downtime.</li>\n<li><strong>Reconstructive Surgery</strong>: Critical restorative procedures following trauma, burn injuries, tumor excisions, or for congenital anomalies. We focus on restoring both aesthetics and essential function.</li>\n<li><strong>Scar Revision & Burn Care</strong>: Specialized treatments to minimize scarring and manage acute burns with advanced wound care techniques.</li>\n</ul>\n<p>We prioritize your privacy, comfort, and safety. Every procedure begins with a detailed, personalized consultation to align our surgical plan perfectly with your aesthetic goals and medical needs.</p>"
        },
        {
            "title": "Critical Care & Emergency Medicine",
            "slug": "critical-care-emergency-medicine",
            "short_description": "Rapid, life-saving 24/7 Critical Care and Emergency protocols at Indira Hospital.",
            "icon": "Siren",
            "full_description": "<h2>24/7 Critical Care & Emergency Medicine: When Every Second Counts</h2>\n<p>In a medical crisis, immediate, expert intervention is the difference between life and death. The <strong>Department of Critical Care & Emergency Medicine</strong> at Indira Super Speciality Hospital is a highly responsive, state-of-the-art facility operating 24 hours a day, 365 days a year to manage all forms of acute medical emergencies and severe trauma.</p>\n<h3>Advanced Emergency Infrastructure</h3>\n<ul>\n<li><strong>Rapid Triage & Resuscitation</strong>: Immediate assessment by trained ER physicians using globally accepted triage protocols to prioritize critical patients instantly.</li>\n<li><strong>Comprehensive Trauma Center</strong>: Multidisciplinary trauma team (including surgeons, orthopedists, and neurosurgeons) ready to manage severe accidents, head injuries, and poly-trauma.</li>\n<li><strong>Code Blue & Cardiac Emergencies</strong>: Dedicated 'Code Blue' team and a direct pathway to our advanced Cardiac Cath Lab for immediate intervention during heart attacks (STEMI).</li>\n<li><strong>State-of-the-Art ICU</strong>: Fully equipped Intensive Care Units featuring advanced ventilators, continuous hemodynamic monitoring, and 1:1 specialist nursing care for the most vulnerable patients.</li>\n</ul>\n<p>Supported by rapid laboratory diagnostics, 24/7 imaging (CT, MRI, Ultrasound), and a fully equipped ambulance fleet, Indira Hospital delivers unmatched emergency medical care to the Vellore region.</p>"
        },
        {
            "title": "Dentistry",
            "slug": "dentistry",
            "aliases": ["dental", "dentist", "tooth-doctor", "smile-correction", "root-canal"],
            "short_description": "Advanced specialized care in Dentistry at Indira Super Speciality Hospital.",
            "icon": "Smile",
            "specialists": ["dr-rockson-samuel", "dr-dhanushmi"],
            "full_description": "<h2>Advanced Dentistry & Maxillofacial Care</h2>\n<p>A healthy smile is foundational to your overall well-being. The <strong>Department of Dentistry</strong> at Indira Super Speciality Hospital, led by <strong>Dr. Rockson Samuel</strong>, is equipped with state-of-the-art dental chairs, digital imaging, and a highly experienced team of specialists to solve complex dental challenges.</p>\n<h3>Comprehensive Dental Services</h3>\n<p>Our aesthetic and functional dental solutions include:</p>\n<ul>\n<li><strong>Restorative Dentistry</strong>: Painless single-sitting root canals, zirconium crowns, and high-quality dental bridges securely restoring your bite.</li>\n<li><strong>Implantology</strong>: Precision-guided, permanent titanium dental implants replicating the look and feel of natural teeth.</li>\n<li><strong>Maxillofacial Surgery</strong>: Advanced surgical correction for facial trauma, jaw deformities, and complex wisdom tooth extractions.</li>\n<li><strong>Cosmetic Odontology</strong>: Professional teeth whitening, customized veneers, and complete smile makeovers perfectly aligned with your facial structure.</li>\n</ul>\n<p>From routine scaling and polishing to advanced full-mouth rehabilitations, Dr. Rockson Samuel and his team ensure a virtually pain-free experience in a sterile, modern environment.</p>"
        },
        {
            "title": "Dermatology",
            "slug": "dermatology",
            "short_description": "Advanced specialized care in Dermatology at Indira Super Speciality Hospital.",
            "icon": "UserCheck",
            "full_description": "<h2>Expert Dermatology & Cosmetology</h2>\n<p>Your skin is your body’s largest organ, demanding specialized medical attention. The <strong>Department of Dermatology & Cosmetology</strong> at Indira Super Speciality Hospital provides advanced clinical and aesthetic treatments designed to restore the health, function, and radiant appearance of your skin, hair, and nails.</p>\n<h3>Clinical & Aesthetic Skin Care</h3>\n<p>Our board-certified dermatologists offer customized, evidence-based therapies:</p>\n<ul>\n<li><strong>Clinical Dermatology</strong>: Rapid, accurate diagnosis and management of severe acne, chronic psoriasis, vitiligo, severe eczema, and complex skin infections.</li>\n<li><strong>Advanced Cosmetology</strong>: Precision chemical peels, microdermabrasion, and anti-aging interventions including Botox and dermal fillers to rejuvenate facial aesthetics.</li>\n<li><strong>Laser Therapeutics</strong>: FDA-approved Q-Switched and Diode lasers for safe, permanent hair reduction, scar revision, and pigmentation removal suitable for all skin types.</li>\n<li><strong>Trichology Services</strong>: Comprehensive evaluations and targeted medical treatments for rapid hair loss (alopecia), scalp disorders, and hair thinning.</li>\n</ul>\n<p>We blend profound medical expertise with advanced cosmetic technologies to safely elevate your confidence and dermatological health.</p>"
        },
        {
            "title": "Dietetics & Nutrition",
            "slug": "dietetics-nutrition",
            "short_description": "Comprehensive Dietetics & Nutritional care tailored for optimal health and recovery.",
            "icon": "Apple",
            "full_description": "<h2>Expert Dietetics & Nutrition Planning at Indira Hospital</h2>\n<p>True healing begins from within. The <strong>Department of Dietetics & Nutrition</strong> at Indira Super Speciality Hospital is dedicated to enhancing your health, managing chronic diseases, and accelerating post-surgical recovery through personalized, science-backed nutritional therapy.</p>\n<h3>Personalized Nutritional Care</h3>\n<p>Our clinical dietitians work closely with your treating physicians to develop customized meal plans that respect your lifestyle, dietary preferences, and medical requirements. We specialize in:</p>\n<ul>\n<li><strong>Disease-Specific Diets</strong>: Targeted nutritional support for Diabetes, Hypertension, Kidney Disease (Renal Diet), Liver Disorders, and Cardiovascular diseases.</li>\n<li><strong>Weight Management & Bariatric Nutrition</strong>: Comprehensive dietary counseling for healthy weight loss and structured pre/post-bariatric surgery meal planning.</li>\n<li><strong>Critical Care Nutrition</strong>: Specialized Enteral (tube feeding) and Parenteral (IV feeding) nutrition formulations for ICU patients to prevent malnutrition and promote rapid healing.</li>\n<li><strong>Maternal & Pediatric Nutrition</strong>: Guidance for healthy pregnancies, gestational diabetes management, and optimal child growth and development.</li>\n</ul>\n<p>We emphasize education and sustainable lifestyle modifications, empowering you to make informed food choices that lead to lifelong wellness.</p>"
        },
        {
            "title": "ENT",
            "slug": "ent",
            "aliases": ["ear-nose-throat", "otorhinolaryngology", "sinus-specialist", "tonsil-surgery"],
            "short_description": "Advanced micro-surgery and comprehensive care for Ear, Nose, and Throat disorders.",
            "icon": "Ear",
            "specialists": ["dr-gayathri"],
            "full_description": "<h2>Specialized Ear, Nose, and Throat (ENT) Care in Vellore</h2>\n<p>Experience clear hearing, easy breathing, and a healthy voice. The <strong>Department of ENT (Otorhinolaryngology)</strong> at Indira Super Speciality Hospital provides advanced diagnostic and surgical solutions for complex disorders of the ear, nose, throat, head, and neck.</p><h3>Advanced Diagnostics & Micro-Surgery</h3>\n<p>Equipped with state-of-the-art diagnostic audiometry, nasal endoscopy, and microscopy, our renowned ENT specialists offer sophisticated treatments with minimal discomfort:</p>\n<ul>\n<li><strong>Otology (Ear Care)</strong>: Micro-ear surgeries for hearing restoration (Tympanoplasty, Mastoidectomy), treatment of chronic ear infections, vertigo, and dizziness management.</li>\n<li><strong>Rhinology (Nose & Sinus)</strong>: Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis, Septoplasty for deviated septum, and management of nasal polyps and allergies.</li>\n<li><strong>Laryngology (Throat & Voice)</strong>: Micro-laryngeal surgery for vocal cord nodules/polyps, treatment of tonsillitis, adenoids, and swallowing disorders.</li>\n<li><strong>Head & Neck Surgery</strong>: Expert surgical management of thyroid, parathyroid, and salivary gland tumors, ensuring optimal oncological and functional outcomes.</li>\n</ul>\n<p>From pediatric ENT issues like recurrent ear infections to complex adult head and neck pathologies, we provide compassionate, comprehensive care tailored to your needs.</p>"
        },
        {
            "title": "Emergency Medicine",
            "slug": "emergency-medicine",
            "short_description": "Comprehensive Emergency Medicine providing rapid, life-saving triage and resuscitation.",
            "icon": "Siren",
            "full_description": "<h2>Rapid Response Trauma & Emergency Medicine</h2>\n<p>When unexpected medical crises occur, every minute dictates the outcome. The <strong>Department of Emergency Medicine</strong> at Indira Super Speciality Hospital is the frontline of acute care in Vellore, providing instantaneous, life-saving interventions 24 hours a day.</p>\n<h3>Why Our ER is the Preferred Choice</h3>\n<ul>\n<li><strong>Multidisciplinary Trauma Team</strong>: Immediate availability of emergency physicians, orthopedic trauma surgeons, neurosurgeons, and general surgeons to manage catastrophic injuries.</li>\n<li><strong>Advanced Resuscitation Bays</strong>: Equipped with the latest cardiac monitors, defibrillators, and ventilators, built for treating acute myocardial infarctions (heart attacks), strokes, and respiratory failure.</li>\n<li><strong>Rapid Diagnostics</strong>: Zero-delay access to 24/7 in-house Pathology, highly advanced CT scans, Ultrasound, and X-ray facilities to fast-track critical decisions.</li>\n<li><strong>Dedicated Ambulance Fleet</strong>: Fully equipped Advanced Life Support (ALS) ambulances providing vital pre-hospital care and safe transport.</li>\n</ul>\n<p>From pediatric emergencies and acute poisoning to complex industrial accidents, our Emergency Medicine experts follow global triage protocols to deliver swift, decisive, and compassionate care.</p>"
        },
        {
            "title": "Endocrinology & Diabetes Care",
            "slug": "endocrinology-diabetes-care",
            "aliases": ["diabetology", "diabetes-specialist", "thyroid-specialist", "hormone-doctor"],
            "short_description": "Expert Endocrinology & Diabetes management for optimal hormonal and metabolic health.",
            "icon": "Activity",
            "full_description": "<h2>Premier Endocrinology & Complete Diabetes Care in Vellore</h2>\n<p>Hormonal imbalances can disrupt your entire life. The <strong>Department of Endocrinology & Diabetes Care</strong> at Indira Super Speciality Hospital specializes in the precise diagnosis and comprehensive management of complex endocrine, metabolic, and hormonal disorders.</p>\n<h3>Comprehensive Management & Reversal Strategies</h3>\n<ul>\n<li><strong>Advanced Diabetes Care</strong>: Holistic management of Type 1, Type 2, and Gestational Diabetes. We focus on achieving tight glycemic control, preventing complications (like diabetic foot and neuropathy), and exploring diabetes reversal strategies through lifestyle integration.</li>\n<li><strong>Thyroid Disorders</strong>: Expert evaluation and treatment of Hypothyroidism, Hyperthyroidism, Hashimotos disease, Thyroid nodules, and Thyroid cancers.</li>\n<li><strong>Reproductive Endocrinology</strong>: Targeted therapies for Polycystic Ovary Syndrome (PCOS), menstrual irregularities, and hormonal causes of infertility.</li>\n<li><strong>Bone & Mineral Disorders</strong>: Effective management of Osteoporosis, Vitamin D deficiency, and hyperparathyroidism to prevent fractures and maintain bone density.</li>\n</ul>\n<p>Partnering closely with dietitians and diabetic educators, our endocrinologists provide a multidisciplinary approach that empowers you to take control of your metabolic health and enjoy a vibrant life.</p>"
        },
        {
            "title": "Family Medicine Specialist",
            "slug": "family-medicine-specialist",
            "short_description": "Your first line of defense: Comprehensive Family Medicine & Preventive Healthcare.",
            "icon": "UserCheck",
            "full_description": "<h2>Holistic Family Medicine & Preventive Care at Indira Hospital</h2>\n<p>Your journey to lifelong wellness starts here. The <strong>Department of Family Medicine</strong> serves as the cornerstone of healthcare at Indira Super Speciality Hospital, providing comprehensive, continuous, and compassionate care for individuals and families across all ages—from pediatrics to geriatrics.</p>\n<h3>Your Trusted Primary Care Partner</h3>\n<ul>\n<li><strong>Comprehensive Health Assessments</strong>: Routine check-ups, preventive health screenings, and master health check-up packages designed to detect hidden conditions before they become serious.</li>\n<li><strong>Chronic Disease Management</strong>: Expert, ongoing monitoring and coordination of care for chronic conditions such as Hypertension, Asthma, COPD, and mild metabolic disorders.</li>\n<li><strong>Infectious Disease Care</strong>: Rapid diagnosis and management of acute viral fevers, respiratory infections, and seasonal ailments.</li>\n<li><strong>Geriatric Care</strong>: Specialized, empathetic care tailored for the elderly, addressing age-related health challenges, mobility issues, and medication optimization.</li>\n</ul>\n<p>Our Family Medicine specialists coordinate seamlessly with our super-specialty departments, ensuring that if you need advanced targeted care, your transition is smooth, informed, and perfectly managed.</p>"
        },
        {
            "title": "Gastroenterology & Hepatology",
            "slug": "gastroenterology-hepatology",
            "aliases": ["gastroenterology", "gastrology", "liver-specialist", "digestive-health"],
            "short_description": "Advanced Gastrointestinal, Liver, and Pancreatic care by top specialists.",
            "icon": "Stethoscope",
            "full_description": "<h2>Advanced Digestive Health & Liver Care at Indira Hospital</h2>\n<p>Your digestive health is central to your overall well-being. The <strong>Department of Gastroenterology & Hepatology</strong> at Indira Super Speciality Hospital offers comprehensive, state-of-the-art diagnostic and therapeutic care for diseases of the digestive tract, liver, gallbladder, and pancreas.</p>\n<h3>State-of-the-Art Endoscopy & Hepatology</h3>\n<ul>\n<li><strong>Diagnostic & Therapeutic Endoscopy</strong>: Advanced Upper GI Endoscopy and Colonoscopy for the painless detection and removal of polyps, ulcers, and early-stage GI cancers.</li>\n<li><strong>ERCP (Endoscopic Retrograde Cholangiopancreatography)</strong>: Expert minimally invasive management of bile duct stones, strictures, and pancreatic disorders without the need for open surgery.</li>\n<li><strong>Comprehensive Liver Care</strong>: Specialized treatment for Hepatitis B & C, Fatty Liver Disease (NASH), Cirrhosis, and Liver Failure management by renowned hepatologists.</li>\n<li><strong>Functional GI Disorders</strong>: Targeted therapies for Irritable Bowel Syndrome (IBS), severe Acid Reflux (GERD), and Chronic Constipation.</li>\n</ul>\n<p>Equipped with ultra-modern endoscopic suites and working alongside our GI surgeons, we provide a seamless, multidisciplinary approach to resolving complex digestive issues quickly and safely.</p>"
        },
        {
            "title": "General Medicine",
            "slug": "general-medicine",
            "short_description": "Comprehensive diagnostic and therapeutic Internal Medicine care for complex health conditions.",
            "icon": "Stethoscope",
            "full_description": "<h2>Expert Internal Medicine & Complex Disease Management</h2>\n<p>When you face undiagnosed symptoms or multi-system health conditions, you need medical detectives you can trust. The <strong>Department of General Medicine (Internal Medicine)</strong> at Indira Super Speciality Hospital is the diagnostic powerhouse of our institution, providing expert care for complex adult illnesses.</p>\n<h3>Comprehensive Adult Healthcare</h3>\n<p>Our highly experienced internists specialize in cross-disciplinary medical care, ensuring accurate diagnoses and highly effective treatment plans:</p>\n<ul>\n<li><strong>Infectious Diseases & Fever Clinic</strong>: Rapid diagnosis and evidence-based treatment for Dengue, Malaria, Typhoid, persistent fevers of unknown origin, and severe respiratory infections.</li>\n<li><strong>Chronic Disease Management</strong>: Coordinated management of systemic issues such as severe Hypertension, resistant Diabetes, Dyslipidemia (high cholesterol), and metabolic syndromes.</li>\n<li><strong>Multi-System Disorders</strong>: Expert care for patients suffering from overlapping medical conditions, ensuring medications are perfectly balanced to avoid interactions.</li>\n<li><strong>Adult Immunology & Rheumatology</strong>: Evaluation and management of autoimmune conditions, chronic joint pains, and severe allergic reactions.</li>\n</ul>\n<p>Acting as your central medical coordinator, our General Medicine specialists seamlessly integrate care with our surgeons and super-specialists, providing a unified path to your recovery.</p>"
        },
        {
            "title": "General Surgery",
            "slug": "general-surgery",
            "aliases": ["laparoscopic-surgery", "laser-surgery", "piles-specialist", "hernia-specialist", "fistula-specialist"],
            "short_description": "Precision General and Laparoscopic surgeries designed for minimal pain and faster recovery.",
            "icon": "Scalpel",
            "specialists": ["dr-shankar", "dr-karan-shankar"],
            "full_description": "<h2>Advanced General & Laparoscopic Surgery in Vellore</h2>\n<p>When medication is not enough, you need surgical expertise you can trust implicitly. The <strong>Department of General & Laparoscopic Surgery</strong> at Indira Super Speciality Hospital blends unmatched surgical skill with modern minimally invasive technology to deliver safe, highly effective outcomes.</p>\n<h3>Minimally Invasive Focus</h3>\n<p>We believe in faster healing with minimal scarring. Our surgical center is equipped with state-of-the-art modular operation theaters and high-definition laparoscopy units:</p>\n<ul>\n<li><strong>Advanced Laser Proctology</strong>: Painless, bloodless, and stitchless laser interventions for Piles (Hemorrhoids), Fissures, and complex Fistulas. Most cases offer same-day discharge.</li>\n<li><strong>Laparoscopic Hernia Repair</strong>: Advanced 3D mesh repair for Inguinal, Umbilical, and Incisional hernias, ensuring very low recurrence rates and rapid return to daily life.</li>\n<li><strong>Endocrine & Breast Surgery</strong>: Specialized surgical management for Thyroid conditions (goiter, nodules, cancers) and comprehensive breast lump excisions using cosmetic preservation techniques.</li>\n<li><strong>Emergency & Trauma Surgery</strong>: 24/7 readiness for acute conditions such as appendicitis, intestinal obstruction, and acute cholecystitis (gallbladder stones).</li>\n</ul>\n<p>Your safety is paramount. Our surgeons utilize advanced Harmonic Scalpels and Diode Laser units to ensure precision, dramatically reducing post-operative pain and accelerating your recovery path.</p>",
            "pricing": [
                {
                    "package_name": "Laser Piles Treatment",
                    "cost": "Available on Request",
                    "features": [
                        "Day Care Procedure",
                        "Painless/No Cuts",
                        "Include Medicines"
                    ]
                },
                {
                    "package_name": "Laparoscopic Hernia Repair",
                    "cost": "Available on Request",
                    "features": [
                        "3D Mesh Used",
                        "1-Day Hospital Stay",
                        "Fast Recovery"
                    ]
                },
                {
                    "package_name": "Thyroidectomy",
                    "cost": "Available on Request",
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
            "short_description": "Predictive genetic screening and counseling for hereditary conditions and family health planning.",
            "icon": "Dna",
            "full_description": "<h2>Specialized Medical Genetics & Predictive Counseling</h2>\n<p>Understanding your DNA is the key to proactive health management. The <strong>Department of Medical Genetics</strong> at Indira Super Speciality Hospital offers highly advanced diagnostic screening and expert counseling to help you and your family navigate inheritable conditions safely and confidently.</p>\n<h3>Comprehensive Molecular Diagnostics</h3>\n<p>Our goal is to convert complex genetic data into actionable health strategies:</p>\n<ul>\n<li><strong>High-Risk Prenatal Screening</strong>: Accurate chromosomal mapping during pregnancy to detect anomalies early, empowering parents with vital information.</li>\n<li><strong>Onco-Genetics (Cancer Risk)</strong>: Deep genetic profiling for hereditary cancer syndromes (including BRCA1/2, Lynch Syndrome). We help build aggressive risk-reduction and early-detection plans for your family members.</li>\n<li><strong>Pediatric & Developmental Genetics</strong>: Thorough molecular evaluation of birth defects, early developmental delays, and rare metabolic disorders in newborns and infants.</li>\n<li><strong>Empathetic Genetic Counseling</strong>: A diagnosis can be overwhelming. Our certified counselors provide detailed pre- and post-test guidance to clearly map out the medical implications and future planning.</li>\n</ul>\n<p>Armed with knowledge, you can make informed decisions. We partner with you to demystify genetics and protect future generations.</p>",
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
            "short_description": "Compassionate, specialized Geriatric care for senior citizens focusing on mobility and vitality.",
            "icon": "UserCheck",
            "full_description": "<h2>Dedicated Geriatric Healthcare & Senior Citizen Support</h2>\n<p>Aging should be celebrated, not feared. The <strong>Department of Geriatrics</strong> at Indira Super Speciality Hospital provides extremely compassionate, multi-disciplinary care tailored exclusively for the unique physical and cognitive needs of elderly patients, ensuring they maintain their independence and dignity.</p>\n<h3>Holistic Aging & Preventive Protocols</h3>\n<p>Health challenges in older adults are often interconnected. We offer a unified approach to senior wellness:</p>\n<ul>\n<li><strong>Polypharmacy & Comorbidity Management</strong>: Careful harmonization of medications for patients managing overlapping chronic diseases like Diabetes, severe Arthritis, and Hypertension.</li>\n<li><strong>Fall Prevention & Mobility Clinic</strong>: Comprehensive balance assessments paired with targeted neuro-physiotherapy to strengthen core stability, preventing hip fractures and debilitating falls.</li>\n<li><strong>Cognitive Health & Memory Care</strong>: Early detection screening and empathetic management strategies for Age-Related Memory Loss, Dementia, and Alzheimers Disease.</li>\n<li><strong>Geriatric Nutrition Therapy</strong>: Custom dietary interventions designed to combat muscle loss (sarcopenia) and prevent malnutrition in seniors.</li>\n</ul>\n<p>We dont just treat the illness; we focus intensely on improving the overall quality of daily life, supporting both our senior patients and their devoted families.</p>",
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
            "short_description": "Expert diagnosis and high-level targeted treatment for complex infectious diseases and persistent fevers.",
            "icon": "Shield",
            "full_description": "<h2>Advanced Infectious Disease Diagnosis & Treatment</h2>\n<p>When an infection is aggressive, resistant, or difficult to diagnose, time is of the essence. The <strong>Department of Infectious Diseases</strong> at Indira Super Speciality Hospital is a frontline defense unit, specializing in the rapid identification and targeted elimination of complex viral, bacterial, fungal, and parasitic infections.</p>\n<h3>Targeted Fever & Infection Control</h3>\n<p>We strictly enforce antibiotic stewardship to ensure you receive the precise treatment needed for rapid recovery:</p>\n<ul>\n<li><strong>Targeted Fever Clinic</strong>: Pinpoint accurate diagnosis and management for Tropical Diseases like Dengue, severe Malaria, Typhoid, and resolving stubbornly persistent Fevers of Unknown Origin (FUO).</li>\n<li><strong>ICU & Critical Infections</strong>: Immediate, aggressive protocols for managing life-threatening conditions including Sepsis, severe Pneumonia, Encephalitis, and Meningitis.</li>\n<li><strong>Immune & Post-Surgical Support</strong>: Expert care for surgical site infections, resistant hospital-acquired infections, and prophylactic care for immuno-compromised individuals.</li>\n<li><strong>Adult Immunization Program</strong>: Comprehensive vaccination guidance against Hepatitis, HPV, Influenza, and Pneumococcal diseases to safeguard your future health.</li>\n</ul>\n<p>Backed by our highly advanced in-house pathology and microbiology labs, our specialists deliver definitive answers and customized anti-microbial therapies without delay.</p>"
        },
        {
            "title": "Internal Medicine",
            "slug": "internal-medicine",
            "short_description": "Comprehensive internal medicine addressing overlapping adult health conditions effectively.",
            "icon": "Stethoscope",
            "full_description": "<h2>Expert Internal Medicine & Complex Disease Management</h2>\n<p>When you face undiagnosed symptoms or multi-system health conditions, you need medical detectives you can trust. The <strong>Department of Internal Medicine</strong> at Indira Super Speciality Hospital is the clinical backbone of our institution, offering expert cross-disciplinary care for adults.</p>\n<h3>Your Central Medical Coordinator</h3>\n<p>Our highly experienced internists seamlessly coordinate your healthcare journey:</p>\n<ul>\n<li><strong>Chronic Disease Management</strong>: Coordinated, long-term care for systemic lifestyle diseases such as severe Hypertension, Type 2 Diabetes, and Dyslipidemia (Cholesterol imbalances).</li>\n<li><strong>Adult Respiratory Medicine</strong>: Immediate and long-term treatment strategies for Asthma, Bronchitis, and severe seasonal respiratory allergies.</li>\n<li><strong>Comprehensive Annual Screenings</strong>: Deep-dive Executive Health Checkups designed to detect early warning signs of cardiovascular, metabolic, or oncological issues before they emerge.</li>\n<li><strong>Acute Medical Care</strong>: Fast, effective management of severe gastrointestinal distress, acute unexplainable pain, and complex viral/bacterial infections.</li>\n</ul>\n<p>Acting as your primary health anchor, our Internal Medicine specialists collaborate closely with all super-specialists to formulate unified, highly effective treatment pathways tailored specifically to you.</p>"
        },
        {
            "title": "Minimal Access/Surgical Gastroenterology",
            "slug": "minimal-access-surgical-gastroenterologist",
            "short_description": "Advanced laparoscopic and minimally invasive gastrointestinal surgeries for rapid recovery.",
            "icon": "Activity",
            "full_description": "<h2>Advanced Minimal Access & Surgical Gastroenterology</h2>\n<p>Complex abdominal and digestive conditions no longer require large, painful incisions. The <strong>Department of Minimal Access & Surgical Gastroenterology</strong> at Indira Super Speciality Hospital excels in highly advanced laparoscopic techniques, ensuring you return to a pain-free life faster.</p>\n<h3>Pioneering Keyhole Surgery</h3>\n<p>By utilizing high-definition 3D camera systems and micro-surgical instruments, our elite surgical team offers unmatched precision and safety:</p>\n<ul>\n<li><strong>HPB (Hepato-Pancreato-Biliary) Surgery</strong>: Expert surgical management for severe liver diseases, complex gallbladder issues, bile duct repairs, and pancreatic tumors.</li>\n<li><strong>Gastro-Intestinal Oncology (Cancer Surgery)</strong>: Curative, minimally invasive resections for stomach, esophageal, colorectal, and pancreatic cancers with a strong focus on margin clearance and rapid recovery.</li>\n<li><strong>Advanced Bariatrics</strong>: Life-changing surgical weight-loss solutions (Sleeve Gastrectomy, Gastric Bypass) aimed at long-term obesity management and metabolic disease reversal.</li>\n<li><strong>Complex Hernia & GI Tract Repairs</strong>: State-of-the-art laparoscopic solutions for recurrent hernias, severe acid reflux (GERD), and inflammatory bowel diseases (Crohns, Ulcerative Colitis).</li>\n</ul>\n<p>Our minimally invasive approach dramatically reduces post-surgical pain, minimizes the risk of infection, and cuts down mandatory hospital stay times, putting your healing first.</p>"
        },
        {
            "title": "Nephrology",
            "slug": "nephrology",
            "short_description": "Comprehensive kidney care, advanced modern dialysis, and severe hypertension management.",
            "icon": "Droplets",
            "full_description": "<h2>Complete Nephrology & Advanced Kidney Care Center</h2>\n<p>Your kidneys are vital filters that sustain your entire body's balance. The <strong>Department of Nephrology</strong> at Indira Super Speciality Hospital is dedicated to the precise diagnosis, management, and long-term care of all acute and chronic renal (kidney) diseases.</p>\n<h3>Comprehensive Renal Services</h3>\n<p>Our acclaimed nephrologists specialize in arresting kidney damage and restoring quality of life through advanced therapeutic protocols:</p>\n<ul>\n<li><strong>Advanced Dialysis Center</strong>: Our ultra-modern, 24/7 dialysis unit utilizes world-class Fresenius machines, stringent infection-control protocols, and ultra-pure RO water to ensure the safest, most comfortable hemodialysis sessions possible.</li>\n<li><strong>Chronic Kidney Disease (CKD) Management</strong>: Proactive medical interventions designed to halt the progression of kidney failure, aggressively manage associated hypertension, and gracefully prepare patients for renal replacement therapies if necessary.</li>\n<li><strong>Critical Care Nephrology</strong>: Rapid, high-stakes intervention for Acute Kidney Injury (AKI) and complex electrolyte imbalances within our specialized Intensive Care Units.</li>\n<li><strong>Renal Biopsy & Glomerular Diseases</strong>: Precision ultrasound-guided kidney biopsies providing accurate diagnoses for conditions like Nephrotic Syndrome, enabling highly targeted treatments.</li>\n</ul>\n<p>We believe in a holistic approach, closely involving clinical dietitians to ensure your nutritional plan perfectly complements your medical treatment.</p>",
            "pricing": [
                {
                    "package_name": "Hemodialysis (per session)",
                    "cost": "Available on Request",
                    "features": [
                        "4 Hours",
                        "Disposable Dialyzer",
                        "Monitoring"
                    ]
                },
                {
                    "package_name": "Dialysis Fistula Surgery",
                    "cost": "Available on Request",
                    "features": [
                        "AV Fistula",
                        "Local Anesthesia",
                        "Day Care"
                    ]
                },
                {
                    "package_name": "Kidney Biopsy",
                    "cost": "Available on Request",
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
            "aliases": ["neurosurgery", "spine-surgery", "brain-surgeon", "neurosurgeon"],
            "short_description": "High-precision expert microsurgery for complex disorders of the brain and spine.",
            "icon": "Brain",
            "full_description": "<h2>Expert Neurosurgery & Advanced Spinal Interventions</h2>\n<p>When it comes to the brain and spine, absolute precision is non-negotiable. The <strong>Department of Neurosurgery</strong> at Indira Super Speciality Hospital utilizes the most advanced operative microscopes, neuro-navigation systems, and minimally invasive techniques to treat complex central nervous system disorders.</p>\n<h3>Advanced Surgical Interventions</h3>\n<p>Our renowned neurosurgical team handles the most challenging cases with a focus on maximizing neurological function and post-operative recovery:</p>\n<ul>\n<li><strong>Minimally Invasive Spine Surgery (MISS)</strong>: Advanced microscopic solutions for severe slip discs, herniations, spinal canal stenosis, and sophisticated spinal fixations for trauma, resulting in significantly less pain and faster mobilization.</li>\n<li><strong>Complex Brain Tumor Surgery</strong>: High-precision excision of benign and malignant intracranial tumors using state-of-the-art intraoperative monitoring to protect critical brain areas.</li>\n<li><strong>Emergency Neuro-Trauma Care</strong>: Specialized, rapid-response surgical management for life-threatening traumatic brain injuries (TBI) and devastating spinal cord traumas available 24 hours a day, 365 days a year.</li>\n<li><strong>Pediatric Neurosurgery</strong>: Compassionate, highly specialized operative care for congenital anomalies of the pediatric brain and spine, including hydrocephalus and spina bifida.</li>\n</ul>\n<p>Supported by a dedicated Neuro-ICU, we provide comprehensive peri-operative monitoring to ensure the highest standards of safety and the best possible outcomes in Vellore.</p>"
        },
        {
            "title": "Neurosciences",
            "slug": "neurosciences",
            "aliases": ["neurology", "neurologist", "stroke-specialist", "epilepsy-care"],
            "short_description": "Comprehensive medical management and targeted therapies for complex neurological disorders.",
            "icon": "Brain",
            "full_description": "<h2>Comprehensive Medical Neurology & Stroke Care</h2>\n<p>The human nervous system is incredibly complex. The <strong>Department of Neurosciences (Neurology)</strong> at Indira Super Speciality Hospital offers an integrated, multidisciplinary approach to the precise diagnosis and comprehensive management of disorders affecting the brain, spinal cord, nerves, and muscles.</p>\n<h3>Advanced Clinical Neurology Services</h3>\n<p>Our expert neurologists utilize sophisticated diagnostics to develop highly effective, long-term therapeutic plans:</p>\n<ul>\n<li><strong>Acute Stroke Unit</strong>: A rapid-response team dedicated to the immediate management of acute ischemic and hemorrhagic strokes. We offer time-critical therapies (thrombolysis) and intense, structured stroke rehabilitation.</li>\n<li><strong>Comprehensive Epilepsy Clinic</strong>: Advanced EEG-guided diagnostics and meticulously managed medical therapies aimed at controlling complex seizure disorders and restoring independence.</li>\n<li><strong>Movement Disorders & Parkinson’s Care</strong>: Targeted medical management and deeply personalized therapy plans for Parkinson's disease, essential tremors, dystonia, and spasticity.</li>\n<li><strong>Advanced Neuro-Diagnostics</strong>: Pinpoint accurate evaluations utilizing high-resolution MRI, continuous EEG, Electromyography (EMG), and Nerve Conduction Studies (NCS) to uncover the root cause of neurological symptoms.</li>\n</ul>\n<p>We are dedicated to combating progressive neurological illnesses, partnering with highly skilled physiotherapists and occupational therapists to dramatically improve your quality of life.</p>"
        },
        {
            "title": "Nutrition & Dietetics",
            "slug": "nutrition-dietetics",
            "short_description": "Expert personalized nutrition and precise therapeutic diets for healing and wellness.",
            "icon": "Apple",
            "full_description": "<h2>Clinical Nutrition & Advanced Dietetic Care</h2>\n<p>Proper nutrition is the bedrock of rapid medical recovery and sustained vitality. The <strong>Department of Nutrition & Dietetics</strong> at Indira Super Speciality Hospital provides evidence-based, highly personalized nutritional interventions that act as essential medical therapies.</p>\n<h3>Therapeutic Nutritional Support</h3>\n<p>Our certified clinical dietitians seamlessly integrate dietary planning with your overarching medical treatments:</p>\n<ul>\n<li><strong>Medical Nutrition Therapy (MNT)</strong>: Scientifically formulated, disease-specific diets tailored to aggressively manage complex conditions like brittle Diabetes, severe Kidney Disease (predialysis/dialysis diets), and advanced Cardiac/Heart conditions.</li>\n<li><strong>Metabolic Weight Management</strong>: Highly structured, completely personalized nutritional blueprints for healthy, sustainable weight loss or strategic weight gain, addressing the metabolic root causes of weight fluctuations.</li>\n<li><strong>Critical Care & ICU Nutrition</strong>: Life-saving precision nutrition utilizing advanced enteral (feeding tubes) and parenteral (intravenous) pathways to prevent severe malnutrition and accelerate healing in critically ill patients.</li>\n<li><strong>Post-Surgical Healing Diets</strong>: Specially designed, easily digestible meal plans structured to promote rapid tissue repair and swift recovery following major surgeries.</li>\n</ul>\n<p>We empower you with practical, sustainable nutritional education, ensuring you have the tools to maintain optimal health long after you leave the hospital.</p>"
        },
        {
            "title": "Obstetrics & Gynecology & Reproductive Medicine",
            "slug": "obstetrics-gynecology-reproductive-medicine",
            "aliases": ["gynecology", "obstetrics", "maternity", "fertility", "pregnancy-care", "gynaecology", "obstetrics-gynaecology"],
            "short_description": "Elite Women's Healthcare extending from comprehensive maternity to advanced minimally invasive gynecology.",
            "icon": "Baby",
            "full_description": "<h2>Comprehensive Obstetrics, Gynecology & Reproductive Medicine</h2>\n<p>Empowering women through exceptional healthcare at every life stage. The <strong>Department of Obstetrics & Gynecology</strong> at Indira Super Speciality Hospital is a sanctuary of complete, compassionate care, ensuring safety, privacy, and clinical excellence for women from adolescence to post-menopause.</p>\n<h3>Complete Maternity & Gynecological Solutions</h3>\n<p>Whether you’re expecting a child or navigating complex gynecological health issues, our renowned specialists provide unmatched support:</p>\n<ul>\n<li><strong>High-Risk Maternity Care</strong>: Dedicated 24/7 obstetric support, world-class labor suites, painless delivery options (epidurals), and meticulous management of complex, high-risk pregnancies.</li>\n<li><strong>Advanced Laparoscopic Gynecology</strong>: Minimally invasive, rapid-recovery surgical interventions for complex uterine fibroids, persistent ovarian cysts, severe endometriosis, and total laparoscopic hysterectomies.</li>\n<li><strong>Reproductive Medicine & Fertility</strong>: Deep-dive diagnostic evaluation and highly advanced, compassionate therapeutic protocols for couples facing conception difficulties.</li>\n<li><strong>Preventive Gynecological Screenings</strong>: Comprehensive, proactive well-woman health checks, including advanced Pap smears, high-resolution mammograms, and vital bone-density evaluations for menopausal health.</li>\n</ul>\n<p>Supported continuously by our state-of-the-art Neonatal ICU (NICU), we guarantee the safest, most supportive environment for both mother and baby.</p>"
        },
        {
            "title": "Oncology",
            "slug": "oncology",
            "short_description": "Multi-disciplinary, highly advanced, and compassionate Cancer Care and Oncology treatments.",
            "icon": "Ribbon",
            "full_description": "<h2>Comprehensive Multidisciplinary Cancer Care Center</h2>\n<p>A cancer diagnosis is life-altering, but you never have to face it alone. The <strong>Department of Oncology</strong> at Indira Super Speciality Hospital combines highly advanced, evidence-based medical science with profound human compassion. Our elite multidisciplinary Tumor Board works collaboratively to architect the most effective, personalized treatment blueprint for every single patient.</p>\n<h3>Advanced Oncological Interventions</h3>\n<p>We are dedicated to maximizing cure rates while stringently protecting your quality of life:</p>\n<ul><li><strong>Advanced Surgical Oncology</strong>: Highly advanced, curative-intent resections for complex breast cancers, gastrointestinal (GI) tumors, head & neck malignancies, and intricate gynecological cancers using minimally invasive techniques whenever possible.</li>\n<li><strong>Targeted Medical Oncology</strong>: The latest generation of Cytotoxic Chemotherapy, cutting-edge Targeted Therapies, and highly effective Immunotherapy administered within a tightly monitored, extremely safe infusion environment.</li>\n<li><strong>Proactive Cancer Screening</strong>: Preventative, high-accuracy early detection packages customized for breast cancer (3D Mammography/USG), cervical cancer (Pap smear/HPV testing), and prostate cancer (PSA).</li>\n<li><strong>Integrative Palliative Care</strong>: Aggressive pain management, specialized nutritional support, and deep psychological counseling for advanced-stage cancer patients, ensuring maximum dignity and comfort at all times.</li>\n</ul>\n<p>From the moment of diagnosis through survivorship, our dedicated oncology nursing staff and specialists are your steadfast partners in the fight for your life.</p>",
            "pricing": [
                {
                    "package_name": "Chemotherapy Cycle",
                    "cost": "Available on Request",
                    "features": [
                        "Day Care",
                        "Nursing Charge",
                        "Drug extra"
                    ]
                },
                {
                    "package_name": "Breast Cancer Surgery",
                    "cost": "Available on Request",
                    "features": [
                        "Mastectomy",
                        "Reconstruction",
                        "Histo-pathology"
                    ]
                },
                {
                    "package_name": "Cancer Screening",
                    "cost": "Available on Request",
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
            "title": "Ophthalmology",
            "slug": "ophthalmology",
            "short_description": "World-class Ophthalmology offering micro-incision cataract surgery and comprehensive eye care.",
            "icon": "Eye",
            "full_description": "<h2>Advanced Ophthalmology & Vision Restoration</h2>\n<p>Your eyesight is your window to the world. The <strong>Department of Ophthalmology</strong> at Indira Super Speciality Hospital is deeply committed to preserving, correcting, and entirely restoring your vision through state-of-the-art diagnostic imaging and microscopic surgical precision.</p>\n<h3>Comprehensive Eye Care Interventions</h3>\n<p>Our renowned eye specialists utilize the latest optical technologies to deliver crystal-clear results:</p>\n<ul>\n<li><strong>Advanced Cataract Surgery</strong>: Stitchless, completely painless Micro-Incision Cataract Surgery (Phacoemulsification) featuring the implantation of premium, high-definition Intraocular Lenses (IOLs) for immediate vision clarity.</li><li><strong>Advanced Vision Correction</strong>: Expert medical evaluation and advanced treatment pathways for severe refractive errors, including high-degree myopia, hyperopia, and complex astigmatism.</li>\n<li><strong>Diabetic Retinopathy & Glaucoma</strong>: Thorough, high-resolution retinal screening and aggressive, long-term management strategies to prevent irreversible vision loss in diabetic and high-pressure eye patients.</li>\n<li><strong>Specialized Pediatric Eye Care</strong>: Empathetic, child-friendly diagnostics and treatments for early-onset vision issues, including the critical evaluation and surgical correction of strabismus (squint).</li>\n</ul>\n<p>We combine deep clinical expertise with cutting-edge ophthalmic instrumentation to protect your sight for a lifetime.</p>"
        },

        {
            "title": "Pain & Rehabilitation Medicine",
            "slug": "pain-rehabilitation-medicine",
            "short_description": "Elite Pain Management and targeted Physical Rehabilitation to restore mobility fast.",
            "icon": "Activity",
            "full_description": "<h2>Expert Pain Management & Physical Rehabilitation</h2>\n<p>Living with chronic pain drastically reduces your quality of life. The <strong>Department of Pain & Rehabilitation Medicine</strong> at Indira Super Speciality Hospital is relentlessly focused on rapidly diagnosing the root cause of your pain and implementing highly effective, non-surgical and interventional therapies to restore your full physical mobility.</p>\n<h3>Targeted Recovery Programs</h3>\n<p>We do not just mask the pain; we architect comprehensive physical recovery blueprints:</p>\n<ul>\n<li><strong>Advanced Interventional Pain Management</strong>: Highly precise, image-guided nerve blocks, epidural steroid injections, and targeted joint injections customized for severe chronic back pain, refractory sciatica, and debilitating osteoarthritis.</li>\n<li><strong>Elite Physiotherapy & Sports Rehab</strong>: Intensive, structured physical therapy programs specifically designed to accelerate recovery for post-surgical orthopedic patients, complex neurological cases (stroke recovery), and acute sports injuries.</li>\n<li><strong>Integrative Palliative Pain Care</strong>: Exceptionally compassionate, multi-modal pain suppression strategies tailored for patients navigating advanced chronic illnesses and late-stage oncology conditions.</li>\n</ul>\n<p>Our multidisciplinary team of pain specialists and senior physiotherapists collaborate to ensure you regain your strength, flexibility, and independence as swiftly as possible.</p>"
        },
        {
            "title": "Pathology",
            "slug": "pathology",
            "short_description": "High-precision Clinical Pathology and rapid laboratory diagnostics.",
            "icon": "Microscope",
            "full_description": "<h2>Advanced Clinical Pathology & Diagnostic Services</h2>\n<p>Accurate medical treatment demands flawless diagnostics. The <strong>Department of Pathology</strong> at Indira Super Speciality Hospital operates a fully automated, world-class reference laboratory governed by the strictest international quality control protocols to deliver pinpoint-accurate diagnostic intelligence.</p>\n<h3>Comprehensive Laboratory Diagnostics</h3>\n<p>Our board-certified pathologists provide the critical data your doctors rely on to make life-saving decisions:</p>\n<ul>\n<li><strong>Hematology & Clinical Biochemistry</strong>: Rapid, high-volume automated testing for comprehensive blood profiling, critical electrolyte balancing, and complex metabolic/hormonal tracking.</li>\n<li><strong>Advanced Histopathology & Cytology</strong>: Expert microscopic analysis of biopsied tissues and cellular fluids for the definitive diagnosis of benign tumors, malignant cancers, and complex inflammatory conditions.</li>\n<li><strong>Microbiology & Serology</strong>: Highly specific culture and sensitivity testing designed to rapidly identify infectious agents (bacteria, viruses, fungi) and determine the exact targeted antibiotic required.</li>\n<li><strong>24/7 Rapid Response Lab</strong>: Zero-delay emergency diagnostic capabilities directly supporting our ICU, Emergency Room, and surgical theaters when every minute counts.</li>\n</ul>\n<p>Through relentless quality assurance and the latest diagnostic instrumentation, we ensure that every single test result is conclusive, reliable, and swift.</p>"
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
            "full_description": "<h2>Advanced Plastic & Reconstructive Surgery</h2>\n<p>Transformative surgical precision designed to restore form, function, and confidence. The <strong>Department of Plastic & Breast Reconstruction</strong> at Indira Super Speciality Hospital is renowned for executing highly complex reconstructive procedures and state-of-the-art aesthetic enhancements, utilizing the latest in microsurgical techniques.</p>\n<h3>Transformative Surgical Expertise</h3>\n<p>Our board-certified plastic surgeons deliver profound, life-enhancing outcomes:</p>\n<ul>\n<li><strong>Breast Reconstruction</strong>: Highly specialized structural recovery post-mastectomy using advanced implant-based or autologous tissue flap (DIEP/TRAM) procedures to profoundly restore breast contour.</li>\n<li><strong>Trauma & Maxillofacial Reconstruction</strong>: Critical, time-sensitive repair of complex facial fractures and severe soft-tissue trauma following major accidents, minimizing functional loss and scarring.</li>\n<li><strong>Burn Care & Scar Revision</strong>: Intensive clinical management of severe thermal burns combined with advanced laser and surgical scar reduction techniques.</li>\n<li><strong>Aesthetic Surgery</strong>: Expertly calibrated cosmetic enhancements including rhinoplasty, advanced liposuction, abdominoplasty (tummy tucks), and comprehensive body contouring.</li>\n</ul>\n<p>We approach every patient with the utmost discretion and surgical mastery, ensuring results that align perfectly with your restorative goals.</p>"
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
            "full_description": "<h2>Advanced Renal Sciences & Nephrology</h2>\n<p>Optimal kidney function is absolutely critical to your systemic health. The <strong>Department of Renal Sciences</strong> at Indira Super Speciality Hospital offers unmatched clinical expertise in diagnosing, managing, and treating the most complex kidney disorders. We operate one of the region's most advanced 24/7 dialysis units.</p>\n<h3>Comprehensive Kidney Care</h3>\n<p>Our leading nephrologists and transplant specialists deploy rapid, life-saving interventions:</p>\n<ul>\n<li><strong>Advanced Hemodialysis</strong>: State-of-the-art, high-flux dialysis units operating round-the-clock providing rigorously safe, infection-free blood purification for acute and chronic kidney failure (CKD).</li>\n<li><strong>Critical Care Nephrology</strong>: Rapid deployment of Continuous Renal Replacement Therapy (CRRT) and SLED for extremely unstable, critically ill ICU patients experiencing acute kidney injury.</li>\n<li><strong>Preventive Nephrology</strong>: Aggressive clinical management of diabetic nephropathy, severe hypertension-related kidney damage, and chronic glomerular diseases to halt disease progression.</li>\n<li><strong>Kidney Transplant Workup</strong>: Comprehensive, meticulous evaluation planning and post-transplant immunosuppressive management to ensure long-term graft survival.</li>\n</ul>\n<p>Through relentless monitoring and precision medicine, we strive to preserve your kidney function and maximize your clinical outcomes.</p>"
        },
        {
            "title": "Rheumatology & Immunology",
            "slug": "rheumatology-immunology",
            "short_description": "Advanced specialized care in Rheumatology & Immunology at Indira Super Speciality Hospital.",
            "icon": "Shield",
            "full_description": "<h2>Specialized Rheumatology & Immunology</h2>\n<p>Autoimmune conditions and chronic joint pain can severely limit your potential. The <strong>Department of Rheumatology & Immunology</strong> at Indira Super Speciality Hospital leverages advanced diagnostics and highly targeted biologic therapies to aggressively suppress inflammation, halt joint destruction, and rapidly restore your physical mobility.</p>\n<h3>Targeted Autoimmune Therapies</h3>\n<p>Our expert rheumatologists architect precise treatment protocols for complex systemic conditions:</p>\n<ul>\n<li><strong>Inflammatory Arthritis</strong>: Aggressive, early-stage intervention for Rheumatoid Arthritis (RA), Ankylosing Spondylitis, and Psoriatic Arthritis using cutting-edge DMARDs and highly specific Biologics.</li>\n<li><strong>Systemic Autoimmune Diseases</strong>: Comprehensive, multidisciplinary clinical management of life-threatening conditions like Systemic Lupus Erythematosus (SLE), Scleroderma, and Myositis.</li>\n<li><strong>Degenerative Joint Disease</strong>: Precision medical management and localized intra-articular injections specifically formulated to treat severe Osteoarthritis and chronic localized pain syndromes.</li>\n<li><strong>Crystal Arthropathies</strong>: Rapid diagnostic aspiration and acute/preventative management of highly painful Gout and Pseudogout attacks.</li>\n</ul>\n<p>We focus exclusively on achieving medical remission, vastly improving your daily function, and eliminating the chronic pain associated with immune-mediated diseases.</p>"
        },
        {
            "title": "Robotic Surgery",
            "slug": "robotic-surgery",
            "short_description": "Precision surgical procedures enabled by robotic technology.",
            "icon": "Cpu",
            "full_description": "\n            <p>Our Robotic Surgery department represents the pinnacle of surgical precision, offering minimally invasive procedures for enhanced patient outcomes.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Robotic Excellence</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Robotic Urology:</strong> Advanced procedures for prostate, kidney, and bladder conditions.</li>\n                <li><strong>Robotic Gynecology:</strong> High-precision surgery for complex gynecological conditions.</li>\n                <li><strong>Advanced GI Surgery:</strong> Robotic assistance for complex digestive system operations.</li>\n                <li><strong>Faster Recovery:</strong> Robotic technology ensures smaller incisions, less pain, and quicker return to normalcy.</li>\n            </ul>\n        "
        },
        {
            "title": "Transplants",
            "slug": "transplants",
            "short_description": "Advanced specialized care in Transplants at Indira Super Speciality Hospital.",
            "icon": "Heart",
            "full_description": "<h2>World-Class Organ Transplant Surgery</h2>\n<p>When an organ system irreversibly fails, a successful transplant represents an immediate new lease on life. The <strong>Department of Transplants</strong> at Indira Super Speciality Hospital is a pioneering center of excellence, equipped with ultra-sterile dedicated HEPA-filtered modular theaters and an elite multidisciplinary team of transplant surgeons, immunologists, and critical care intensivists.</p>\n<h3>Advanced Transplant Protocols</h3>\n<p>Our transplant command center seamlessly coordinates highly complex, life-saving procedures:</p>\n<ul>\n<li><strong>Kidney Transplantation (Renal)</strong>: Highly precise living-donor and deceased-donor kidney transplant surgeries, supported by rigorous pre-op cross-matching and advanced post-transplant immunosuppression optimization to guarantee graft success.</li>\n<li><strong>Pre-Transplant Evaluation</strong>: Exhaustive, multidisciplinary clinical screening of both donor and recipient to surgically rule out contraindications and maximize long-term survival rates.</li>\n<li><strong>Transplant Immunology & ICU</strong>: Specialized isolation intensive care units dedicated exclusively to the immediate, hyper-vigilant recovery of post-transplant patients to absolutely minimize the risk of opportunistic infections and acute rejection.</li>\n<li><strong>Long-Term Graft Monitoring</strong>: Relentless, lifetime surveillance programs designed to fine-tune anti-rejection medications and rapidly detect any signs of complication.</li>\n</ul>\n<p>Led by surgical veterans, our transplant programs strictly adhere to international quality and ethical protocols, delivering world-class survival outcomes.</p>"
        },
        {
            "title": "Urology",
            "slug": "urology",
            "aliases": ["urologist", "kidney-stone", "prostate-specialist", "urinary-problems"],
            "short_description": "Advanced care for kidney stones, prostate, and urinary tract issues.",
            "icon": "Activity",
            "full_description": "\n            <p>The Urology Department offers world-class care for diseases of the urinary tract in men and women, and the male reproductive system. We are renowned for our expertise in Endourology and Laser treatments for kidney stones.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Services Offered</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Kidney Stone Management:</strong> PCNL (Keyhole surgery for large stones), URSL (Ureteroscopy), and RIRS (Flexible ureteroscopy with Laser) for complete stone clearance without cuts.</li>\n                <li><strong>Prostate Health:</strong> TURP (Transurethral Resection of the Prostate) and Laser Prostatectomy for enlarged prostate (BPH).</li>\n                <li><strong>Male Infertility & Sexual Health:</strong> Evaluation and treatment including microscopic surgeries.</li>\n                <li><strong>Uro-Oncology:</strong> Diagnosis and treatment of Bladder, Kidney, and Prostate cancers.</li>\n                <li><strong>UTI Management:</strong> Comprehensive car for recurrent Urinary Tract Infections.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "RIRS (Laser Stone Removal)",
                    "cost": "Available on Request",
                    "features": [
                        "No Cuts",
                        "Flexible Scope",
                        "1 Day Stay"
                    ]
                },
                {
                    "package_name": "TURP (Prostate Surgery)",
                    "cost": "Available on Request",
                    "features": [
                        "Gold Standard",
                        "3 Days Stay",
                        "Post-op Care"
                    ]
                },
                {
                    "package_name": "URSL (Ureter Stone)",
                    "cost": "Available on Request",
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
            "full_description": "<h2>Elite Vascular & Endovascular Surgery</h2>\n<p>Compromised blood flow requires immediate, highly precise surgical intervention to prevent organ damage or limb loss. The <strong>Department of Vascular Surgery</strong> at Indira Super Speciality Hospital specializes in the rapid diagnosis and cutting-edge surgical management of all complex diseases affecting arteries and veins outside of the heart and brain.</p>\n<h3>Advanced Vascular Interventions</h3>\n<p>Our board-certified vascular surgeons deploy minimally invasive, life-saving techniques:</p>\n<ul>\n<li><strong>Endovascular Aneurysm Repair (EVAR)</strong>: Highly advanced, minimally invasive stent-grafting to permanently bypass life-threatening aortic aneurysms without major open surgery.</li>\n<li><strong>Diabetic Foot & Limb Salvage</strong>: Aggressive surgical revascularization (bypass grafting and angioplasty) specifically designed to restore critical blood flow and proactively prevent amputations in severe diabetic patients.</li>\n<li><strong>Varicose Vein Laser Therapy</strong>: Rapid, painless Endovenous Laser Ablation (EVLA) and Radiofrequency ablation for the permanent elimination of painful, swollen varicose veins with zero downtime.</li>\n<li><strong>Carotid Artery Surgery</strong>: Critical Carotid Endarterectomy (plaque removal) procedures designed to immediately restore blood flow to the brain and aggressively prevent major strokes.</li>\n</ul>\n<p>By blending open surgical mastery with the latest in catheter-based endovascular technologies, we ensure optimal vascular health and exceptionally fast recovery times.</p>"
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
                    "cost": "Available on Request",
                    "features": [
                        "General Anesthesia",
                        "2 Days Stay",
                        "Medicines Included"
                    ]
                },
                {
                    "package_name": "Laparoscopic Appendex",
                    "cost": "Available on Request",
                    "features": [
                        "Emergency Care",
                        "1-2 Days Stay",
                        "Standard Ward"
                    ]
                },
                {
                    "package_name": "Diagnostic Laparoscopy",
                    "cost": "Available on Request",
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
            "title": "Gastroenterology & Hepatology",
            "slug": "gastroenterology",
            "short_description": "Advanced therapeutic endoscopy and comprehensive liver care led by Dr. Karan Shankar.",
            "icon": "Stethoscope",
            "full_description": "<h2>Advanced Gastroenterology & Hepatology Center</h2>\n<p>Your digestive health is fundamental to your systemic well-being. The <strong>Department of Gastroenterology</strong> at Indira Super Speciality Hospital is a center of regional excellence, specializing in the precision diagnosis and non-surgical management of complex gastrointestinal and liver disorders.</p>\n<h3>Elite Endoscopic & Hepatology Services</h3>\n<p>Led by <strong>Dr. Karan Shankar</strong>, our department utilizes high-definition visualization technology to deliver definitive clinical outcomes:</p>\n<ul>\n<li><strong>Precision Lower & Upper GI Scopy</strong>: High-resolution (4K) diagnostic and therapeutic Gastroenteroscopy (OGD) and Colonoscopy for early cancer screening, ulcer detection, and polyp removal.</li>\n<li><strong>Advanced Hepatology Unit</strong>: Comprehensive clinical protocols for the reversal of Fatty Liver (NASH), management of Chronic Hepatitis B & C, and advanced Cirrhosis care focused on preventing liver failure.</li>\n<li><strong>Therapeutic GI Interventions</strong>: Minimally invasive procedures including Band Ligation for varices, Argon Plasma Coagulation (APC) for bleeding, and Esophageal Dilatation for strictures.</li>\n<li><strong>Precision IBD & IBS Care</strong>: Evidence-backed, long-term management strategies for Inflammatory Bowel Disease (Crohn’s, Ulcerative Colitis) and Chronic Constipation.</li>\n</ul>\n<p>By integrating advanced nutrition with the latest in therapeutic endoscopy, we ensure a rapid return to digestive comfort and long-term health maintenance.</p>",
            "pricing": [
                {
                    "package_name": "Upper GI Endoscopy (Diagnostic)",
                    "cost": "₹3,500 - ₹5,500",
                    "features": [
                        "HD 4K Visualization",
                        "Biopsy included",
                        "Instant Digital Report"
                    ]
                },
                {
                    "package_name": "Full Colonoscopy Screening",
                    "cost": "₹6,500 - ₹9,500",
                    "features": [
                        "Painless Sedation",
                        "Polypectomy Ready",
                        "Zero-Radiation"
                    ]
                },
                {
                    "package_name": "Liver Health Profile (Advanced)",
                    "cost": "₹4,500 - ₹7,000",
                    "features": [
                        "Fatty Liver Grade Analysis",
                        "Hepatitis Panel",
                        "Consultation"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "Is the endoscopy procedure painful?",
                    "answer": "No. We utilize 'Painless Endoscopy' protocols using mild, safe sedation that ensures you are comfortable and relaxed throughout the procedure."
                },
                {
                    "question": "Do I need to fast before my procedure?",
                    "answer": "Yes, for Upper GI Endoscopy, you must be 'Nil by Mouth' for 8 hours. For Colonoscopy, a specific bowel preparation kit is required 24 hours prior."
                }
            ],
            "technology": [
                {
                    "name": "Olympus 190 Series HD",
                    "description": "The world-standard in high-definition endoscopy for mucosal visualization.",
                    "icon": "Activity"
                },
                {
                    "name": "Argon Plasma Coagulator (APC)",
                    "description": "Advanced technology for non-contact thermal coagulation of GI bleeding.",
                    "icon": "Zap"
                }
            ]
        },
        {
            "title": "Obstetrics & Gynaecology / Reproductive Medicine",
            "slug": "obstetrics-gynaecology",
            "short_description": "Elite Women's Healthcare including advanced Laparoscopy and Maternal Fetal medicine.",
            "icon": "Baby",
            "specialists": ["dr-praharshitha-sagiraju"],
            "full_description": "<h2>Comprehensive Gynaecology & Maternal-Fetal Medicine</h2>\n<p>Empowering women through every stage of life—from adolescence to menopause. The <strong>Department of Obstetrics & Gynaecology</strong> at Indira Super Speciality Hospital, led by <strong>Dr. Praharshitha Sagiraju</strong> (MS AIIMS, PDCC), is a sanctuary of clinical excellence and compassionate care.</p>\n<h3>Advanced Women's Health Interventions</h3>\n<p>We provide a wide spectrum of surgical and medical solutions designed for rapid recovery and optimal outcomes:</p>\n<ul>\n<li><strong>Precision Gynaec Laparoscopy</strong>: Minimally invasive (Keyhole) surgical management for complex Uterine Fibroids, Ovarian Cysts, Endometriosis, and Total Laparoscopic Hysterectomy (TLH).</li>\n<li><strong>High-Risk Maternity Care</strong>: Dedicated 24/7 obstetric support for pregnancies complicated by Gestational Diabetes, Preeclampsia (BP), and Twin pregnancies.</li>\n<li><strong>Elite Fertility Center</strong>: Compassionate diagnostic evaluation and advanced therapeutic protocols for couples navigating conception challenges, led by specialists in Reproductive Medicine.</li>\n<li><strong>Aesthetic & Preventive Gynaecology</strong>: Advanced PAP smear screenings, Colposcopy, and specialized care for Menopausal health including bone density and heart health.</li>\n</ul>\n<p>Supported by a Level II NICU, we ensure that both mother and newborn receive the highest standard of safety and clinical vigilance in Vellore.</p>",
            "pricing": [
                {
                    "package_name": "Normal Delivery (Comfort Package)",
                    "cost": "₹35,000 - ₹55,000",
                    "features": [
                        "Painless Delivery Option",
                        "LDR Suite",
                        "Neonatal Consultation"
                    ]
                },
                {
                    "package_name": "Laparoscopic Hysterectomy",
                    "cost": "₹85,000 - ₹1,15,000",
                    "features": [
                        "Minimal Invasive (Keyhole)",
                        "24-Hour Discharge",
                        "Zero Blood Loss Technology"
                    ]
                },
                {
                    "package_name": "Fertility Workup (Couple)",
                    "cost": "₹12,000 - ₹18,000",
                    "features": [
                        "Hormone Profile",
                        "USG Follicular Study",
                        "Specialist Consultation"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "What is the advantage of Laparoscopic (Keyhole) surgery?",
                    "answer": "It involves tiny incisions (5-10mm), resulting in significantly less pain, minimal scarring, and a much faster return to work—usually within 1 week."
                },
                {
                    "question": "Do you offer painless labor services?",
                    "answer": "Yes, we have round-the-clock availability of senior anaesthesiologists who provide Epidural Analgesia for a comfortable birthing experience."
                }
            ],
            "technology": [
                {
                    "name": "4K Laparoscopic Stack",
                    "description": "Ultra-HD magnification for precision nerve-sparing pelvic surgery.",
                    "icon": "Activity"
                },
                {
                    "name": "Level II NICU",
                    "description": "Specialized neonatal intensive care for high-risk and premature newborns.",
                    "icon": "Heater"
                }
            ]
        },
        {
            "title": "Orthopaedics",
            "slug": "orthopaedics",
            "aliases": ["orthopedic", "orthopaedics-surgeon", "joint-replacement", "knee-replacement"],
            "short_description": "Joint replacements, spine surgery, and complex trauma care.",
            "icon": "Bone",
            "full_description": "\n            <p>The Department of Orthopaedics & Trauma Surgery is a center of excellence dealing with bone and joint disorders. We are equipped with a C-Arm facility and dedicated orthopaedic OT for precision surgeries.</p>\n            \n            <h3 class=\"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3\">Specialized Treatments</h3>\n            <ul class=\"list-disc pl-5 space-y-2 mb-6\">\n                <li><strong>Joint Replacement:</strong> Total Knee Replacement (TKR) and Total Hip Replacement (THR) using high-quality implants for long-lasting mobility.</li>\n                <li><strong>Trauma & Fractures:</strong> 24/7 management of complex fractures, multiple trauma, and polytrauma cases.</li>\n                <li><strong>Spine Surgery:</strong> Treatment for Disc Prolapse (Sciatica), Spondylosis, and spinal fractures.</li>\n                <li><strong>Arthroscopy:</strong> Keyhole surgery for ACL reconstruction, meniscus tears, and sports injuries.</li>\n                <li><strong>Geriatric Orthopaedics:</strong> Specialized care for osteoporosis and fractures in the elderly.</li>\n            </ul>\n        ",
            "pricing": [
                {
                    "package_name": "Total Knee Replacement",
                    "cost": "Available on Request",
                    "features": [
                        "Imported Implant",
                        "Physiotherapy",
                        "5 Days Stay"
                    ]
                },
                {
                    "package_name": "ACL Reconstruction",
                    "cost": "Available on Request",
                    "features": [
                        "Arthroscopic",
                        "Bio-screw",
                        "Sports Rehab"
                    ]
                },
                {
                    "package_name": "Hip Replacement",
                    "cost": "Available on Request",
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
                    "cost": "Available on Request",
                    "features": [
                        "Radial Access",
                        "Day Care",
                        "CD Provided"
                    ]
                },
                {
                    "package_name": "Angioplasty (Stent)",
                    "cost": "Available on Request",
                    "features": [
                        "Drug Eluting Stent",
                        "ICU Stay",
                        "Medicines"
                    ]
                },
                {
                    "package_name": "Pacemaker (Single Chamber)",
                    "cost": "Available on Request",
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
                    "cost": "Available on Request",
                    "features": [
                        "Monitoring",
                        "Nursing 1:1",
                        "Oxygen"
                    ]
                },
                {
                    "package_name": "Ventilator Support",
                    "cost": "Available on Request",
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
                    "cost": "Available on Request",
                    "features": [
                        "Single Sitting",
                        "X-Ray Included",
                        "Painless"
                    ]
                },
                {
                    "package_name": "Dental Implant",
                    "cost": "Available on Request",
                    "features": [
                        "Titanium Implant",
                        "Surgery",
                        "Abutment"
                    ]
                },
                {
                    "package_name": "Ceramic Braces",
                    "cost": "Available on Request",
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
                    "cost": "Available on Request",
                    "features": [
                        "Clot Buster Inj",
                        "ICU Monitoring",
                        "CT Brain"
                    ]
                },
                {
                    "package_name": "EEG Study",
                    "cost": "Available on Request",
                    "features": [
                        "Digital EEG",
                        "Report by Neurologist",
                        "30 mins"
                    ]
                },
                {
                    "package_name": "Botox for Migraine",
                    "cost": "Available on Request",
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
    diagnostics: [
        {
            id: "d-1",
            slug: "mri-scan",
            name: "3T MRI Scan",
            category: "radiology",
            short_description: "High-resolution magnetic resonance imaging for detailed body structures.",
            description: "<p>Our advanced 3T MRI provides exceptional image quality and faster scan times compared to standard MRI machines.</p>",
            price: 7500,
            report_time: "12 Hours",
            home_collection: false,
            fasting_required: false,
            sample_type: "N/A - Imaging",
            used_to_diagnose: JSON.stringify(["Tumors", "Stroke", "Spinal Cord Injuries", "Joint Abnormalities"])
        },
        {
            id: "d-2",
            slug: "ct-scan",
            name: "128-Slice CT Scan",
            category: "radiology",
            short_description: "Rapid, highly detailed cross-sectional imaging.",
            description: "<p>The 128-slice CT scanner delivers ultra-fast scans with minimal radiation exposure, ideal for cardiac, neuro, and trauma imaging.</p>",
            price: 4500,
            report_time: "6 Hours",
            home_collection: false,
            fasting_required: false,
            sample_type: "N/A - Imaging",
            used_to_diagnose: JSON.stringify(["Internal Bleeding", "Bone Fractures", "Lung Nodules", "Cancers"])
        },
        {
            id: "d-3",
            slug: "complete-blood-count",
            name: "Complete Blood Count (CBC)",
            category: "pathology",
            short_description: "Comprehensive panel measuring white & red blood cells and platelets.",
            description: "<p>A Complete Blood Count (CBC) test evaluates your overall health and helps detect a wide range of disorders, including anemia, infection, and leukemia.</p>",
            price: 450,
            report_time: "Same Day",
            home_collection: true,
            fasting_required: false,
            sample_type: "Blood",
            parameters_count: 24,
            used_to_diagnose: JSON.stringify(["Anemia", "Infections", "Blood Disorders"])
        },
        {
            id: "d-4",
            slug: "lipid-profile",
            name: "Lipid Profile Basic",
            category: "pathology",
            short_description: "Measures cholesterol and triglyceride levels to assess heart disease risk.",
            description: "<p>This blood test measures the amount of cholesterol and triglycerides in your blood, helping to determine your risk of plaque buildup in your arteries.</p>",
            price: 600,
            report_time: "Same Day",
            home_collection: true,
            fasting_required: true,
            sample_type: "Blood",
            parameters_count: 8,
            used_to_diagnose: JSON.stringify(["High Cholesterol", "Heart Disease Risk", "Atherosclerosis"])
        },
        {
            id: "d-5",
            slug: "ecg",
            name: "Electrocardiogram (ECG)",
            category: "cardiology",
            short_description: "Records the electrical signals in your heart.",
            description: "<p>An ECG is a common and painless test used to quickly detect heart problems and monitor your heart's health.</p>",
            price: 500,
            report_time: "Instant",
            home_collection: false,
            fasting_required: false,
            sample_type: "N/A - Procedure",
            used_to_diagnose: JSON.stringify(["Arrhythmias", "Heart Attacks", "Coronary Artery Disease"])
        },
        {
            id: "d-6",
            slug: "urinalysis",
            name: "Complete Urinalysis",
            category: "other",
            short_description: "Detailed analysis of urine for kidney and metabolic diseases.",
            description: "<p>A urinalysis is a test of your urine. It's used to detect and manage a wide range of disorders, such as urinary tract infections, kidney disease and diabetes.</p>",
            price: 250,
            report_time: "Same Day",
            home_collection: true,
            fasting_required: false,
            sample_type: "Urine",
            parameters_count: 15,
            used_to_diagnose: JSON.stringify(["Urinary Tract Infection (UTI)", "Kidney Disease", "Diabetes"])
        },
        {
            "title": "Proctology",
            "slug": "proctology",
            "short_description": "Advanced Laser Proctology Center of Excellence for Piles, Fissure, and Fistula.",
            "icon": "Zap",
            "full_description": "<h2>Indira Laser Proctology Center: Excellence in Colorectal Care</h2>\n<p>Welcome to the most advanced <strong>Proctology Center in Vellore</strong>. Led by veteran surgeons <strong>Dr. P. Shankar</strong> and <strong>Dr. Karan Shankar</strong>, our department is a pioneer in minimally invasive laser treatments for complex anal and colorectal conditions.</p>\n<p>We understand that proctological issues can be distressing. Our center is designed to provide a discrete, professional, and virtually pain-free treatment environment, ensuring the highest standards of clinical excellence and patient comfort.</p>\n\n<h3>Why Choose Indira Hospital for Proctology?</h3>\n<ul>\n<li><strong>Elite Expertise</strong>: Over 30 years of surgical excellence in treating complex Piles, Fissures, and Fistulas.</li>\n<li><strong>Precision Laser Technology</strong>: We utilize cutting-edge 1470nm Diode Lasers (FiLaC, SiLaC) to ensure zero incisions and rapid recovery.</li>\n<li><strong>Sphincter-Saving Procedures</strong>: Our focus is on preserving natural function and ensuring zero risk of incontinence.</li>\n<li><strong>International Standards</strong>: NABH accredited safety protocols and modular OTs for infection-free outcomes.</li>\n</ul>\n\n<h3>Comprehensive Proctology Solutions</h3>\n<p>Our specialists provide advanced care for a wide spectrum of conditions:</p>\n<ul>\n<li><strong>Laser Hemorrhoidopexy</strong>: Painless shrinkage of piles without surgical excision.</li>\n<li><strong>Lateral Internal Sphincterotomy (Laser)</strong>: Rapid healing for chronic anal fissures.</li>\n<li><strong>FiLaC (Fistula Laser Closure)</strong>: The gold standard for complex anal fistulas.</li>\n<li><strong>SiLaC (Sinus Laser Closure)</strong>: Minimally invasive ablation for pilonidal sinus.</li>\n<li><strong>Bowel Motility Management</strong>: Expert care for IBS, Chronic Constipation, and Incontinence.</li>\n</ul>\n<p>At Indira Super Speciality Hospital, we don't just treat the symptoms; we provide a roadmap to long-term colorectal health through scientific diagnostics, advanced surgery, and personalized post-operative care.</p>",
            "pricing": [
                {
                    "package_name": "Laser Piles Treatment Plan",
                    "cost": "Elite Package",
                    "features": [
                        "Day Care Procedure",
                        "Zero Incisions / Stitchless",
                        "Post-Op Kit Included"
                    ]
                },
                {
                    "package_name": "Complex Fistula Closure (FiLaC)",
                    "cost": "Precision Care",
                    "features": [
                        "Sphincter Saving",
                        "High success rate",
                        "Modular OT"
                    ]
                }
            ],
            "technology": [
                {
                    "name": "1470nm Diode Laser",
                    "description": "High-precision laser for bloodless and painless proctology procedures.",
                    "icon": "Zap"
                },
                {
                    "name": "High-Def Anoscopy",
                    "description": "Digital visualization for accurate diagnosis of anal canal issues.",
                    "icon": "Activity"
                }
            ]
        },
        {
            "title": "General Surgery",
            "slug": "general-surgery",
            "short_description": "Advanced Surgical Center for Laparoscopic, Breast, Endocrine, and Trauma Care.",
            "icon": "Stethoscope",
            "full_description": "<h2>Indira General Surgery: Advanced Precision & Patient-First Care</h2>\n<p>General Surgery at Indira Super Speciality Hospital is more than just standard procedures; it is an elite clinical unit dedicated to <strong>Minimally Invasive (Keyhole)</strong> and <strong>Precision Surgical Oncology</strong>. Led by <strong>Dr. P. Shankar</strong>, our department combines decades of traditional surgical wisdom with the latest technological breakthroughs in laparoscopy and robotic assistance.</p>\n<p>We specialize in the surgical management of the abdomen, digestive tract, endocrine system, and breast conditions. Our goal is to provide safe, effective, and ethically-billed surgical interventions that minimize recovery time and maximize the quality of life.</p>\n\n<h3>Why Choose Indira Hospital for General Surgery?</h3>\n<ul>\n<li><strong>Precision Laparoscopy</strong>: Over 90% of our abdominal procedures are performed via keyhole techniques, ensuring minimal pain and scars.</li>\n<li><strong>24/7 Emergency Readiness</strong>: Our trauma and acute care surgery team is on-call 24 hours a day for appendicitis, perforated ulcers, and accidental injuries.</li>\n<li><strong>Elite Clinical Outcomes</strong>: We maintain a near-zero infection rate through strict adherence to NABH-accredited sterile protocols and high-end modular OTs.</li>\n<li><strong>Comprehensive Endocrine & Breast Care</strong>: Specialized units for Thyroid, Parathyroid, and Breast surgical oncology (Mastectomy/Lumpectomy).</li>\n</ul>\n\n<h3>Our Clinical Spectrum</h3>\n<ul>\n<li><strong>Laparoscopic Hernia Repair</strong>: Advanced 3D mesh reinforcement for all types of hernias.</li>\n<li><strong>Laparoscopic Cholecystectomy</strong>: Safe, HD-guided removal of stones and diseased gallbladders.</li>\n<li><strong>Breast Surgical Oncology</strong>: Accurate diagnosis and surgical management of benign and malignant breast conditions.</li>\n<li><strong>Endocrine Surgery</strong>: Nerve-sparing Thyroid and Parathyroid procedures.</li>\n<li><strong>Minimally Invasive Appendectomy</strong>: Rapid emergency relief for acute appendicitis.</li>\n<li><strong>Vascular Surgery</strong>: Laser (EVLA) and surgical management for Varicose Veins.</li>\n</ul>\n<p>At Indira Super Speciality Hospital, we believe in 'Patient-Centric Surgery.' This means every patient receives a transparent pre-operative assessment, a high-precision surgical execution, and a dedicated post-operative recovery roadmap designed to return them to their active lives as quickly as possible.</p>",
            "pricing": [
                {
                    "package_name": "Laparoscopic Hernia Repair",
                    "cost": "Value Package",
                    "features": [
                        "3D Mesh Included",
                        "Keyhole Technique",
                        "24-Hour Discharge"
                    ]
                },
                {
                    "package_name": "Gallbladder Removal (Chole)",
                    "cost": "Precision Care",
                    "features": [
                        "HD-Laparoscopy",
                        "Harmonic Scalpel",
                        "Minimal Scars"
                    ]
                }
            ],
            "faqs": [
                {
                    "question": "What is laparoscopic surgery?",
                    "answer": "Also known as keyhole surgery, it involves using a camera and specialized instruments through tiny incisions, resulting in less pain and faster healing."
                },
                {
                    "question": "Are general surgeries safe?",
                    "answer": "Yes, with modern anesthesia and sterile techniques, general surgery has a very high safety profile. Our team conducts thorough pre-op evaluations to minimize risks."
                }
            ],
            "technology": [
                {
                    "name": "HD Laparoscopic Stack",
                    "description": "Ultra-high-definition visualization for precise internal surgery.",
                    "icon": "Activity"
                },
                {
                    "name": "Harmonic Scalpel",
                    "description": "Ultrasonic energy to cut and seal vessels simultaneously, reducing blood loss.",
                    "icon": "Zap"
                }
            ]
        },
        {
            "title": "ENT (Otolaryngology)",
            "slug": "ent",
            "short_description": "Elite ENT, Head & Neck Surgery Center for Advanced Microsurgery and Endoscopy.",
            "icon": "Mic",
            "full_description": "<h2>Indira ENT & Head Neck Centre: Precision in Microsurgery</h2>\n<p>Welcome to the **Center of Excellence for ENT and Head & Neck Surgery** at Indira Super Speciality Hospital. Led by **Dr. Gayathri**, our department is dedicated to the advanced surgical and medical management of ear, nose, throat, and complex neck conditions. We combine high-end microscopic technology with minimally invasive endoscopic techniques to provide world-class clinical outcomes.</p>\n<p>Whether it is restoring hearing through microsurgery, clearing chronic sinus issues via FESS, or performing precision thyroid surgery, our focus remains on tissue preservation, minimal pain, and rapid patient recovery.</p>\n\n<h3>Why Choose Indira Hospital for ENT?</h3>\n<ul>\n<li><strong>Microscopic Precision</strong>: We use high-resolution surgical microscopes for all ear and laryngeal procedures, ensuring sub-millimeter accuracy.</li>\n<li><strong>Advanced Endoscopy</strong>: 4K Ultra-HD endoscopic systems for Sinus (FESS) and Skull Base surgeries, eliminating the need for external incisions.</li>\n<li><strong>Coblation Technology</strong>: State-of-the-art radiofrequency 'cold ablation' for nearly bloodless and painless tonsil and adenoid removals.</li>\n<li><strong>Nerve-Sparing Head & Neck Surgery</strong>: Specialized intra-operative nerve monitoring for safe Thyroid and Parotid surgeries.</li>\n</ul>\n\n<h3>Our Clinical Specialities</h3>\n<ul>\n<li><strong>Otology (Ear)</strong>: Tympanoplasty, Mastoidectomy, and Grommet insertions for hearing restoration.</li>\n<li><strong>Rhinology (Nose)</strong>: FESS for chronic sinusitis, Septoplasty for deviated septums, and CSF leak repairs.</li>\n<li><strong>Laryngology (Throat)</strong>: Micro-laryngeal surgery for voice polyps and nodules (Phonosurgery).</li>\n<li><strong>Head & Neck Oncology</strong>: Comprehensive management of Thyroid, Parotid, and Submandibular gland tumors.</li>\n<li><strong>Pediatric ENT</strong>: Gentle, Coblation-assisted management of tonsils and adenoids in children.</li>\n</ul>\n<p>At Indira Super Speciality Hospital, we believe in a multidisciplinary approach to ENT health, integrating speech therapy, audiology, and radiology to provide a complete circle of care for our patients.</p>",
            "pricing": [
                {
                    "package_name": "FESS (Sinus Surgery)",
                    "cost": "Value Care",
                    "features": [
                        "HD Endoscopy",
                        "Micro-debrider",
                        "Same Day Discharge"
                    ]
                },
                {
                    "package_name": "Coblation Tonsillectomy",
                    "cost": "Premium Comfort",
                    "features": [
                        "Minimal Pain",
                        "Zero Bleeding",
                        "Rapid Diet Return"
                    ]
                }
            ],
            "technology": [
                {
                    "name": "Carl Zeiss Microscope",
                    "description": "Premium surgical microscope for intricate ear and laryngeal microsurgery.",
                    "icon": "Search"
                },
                {
                    "name": "Coblation II System",
                    "description": "Radiofrequency plasma technology for low-temperature tissue removal.",
                    "icon": "Zap"
                },
                {
                    "name": "4K Endoscopy Stack",
                    "description": "Ultra-HD visualization for advanced sinus and nasal surgeries.",
                    "icon": "Activity"
                }
            ]
        }
    ]
};

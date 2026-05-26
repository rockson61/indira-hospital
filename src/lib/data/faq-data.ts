export interface FAQItem {
 question: string;
 answer: string;
 category?: string;
 relatedSlugs?: string[];
}

export const generalFaqs: FAQItem[] = [
 {
 question: "What are the hospital visiting hours?",
 answer: "Our standard visiting hours are from 10:00 AM to 1:00 PM and 4:00 PM to 7:00 PM. However, for critical care units, visiting is restricted to specific times provided by the nursing station.",
 category: "General"
 },
 {
 question: "How do I book an appointment at Indira Hospital?",
 answer: "You can book an appointment by calling our 24/7 helpline at 098423 24425, visiting our website's booking portal, or simply sending us a message on WhatsApp. We offer both physical and tele-consultation options.",
 category: "Appointments"
 },
 {
 question: "Do you offer emergency services 24/7?",
 answer: "Yes, our Emergency and Trauma Care department is fully functional 24/7 with a dedicated team of doctors, nurses, and advanced life-support ambulances.",
 category: "Emergency"
 },
 {
 question: "What insurance plans and TPAs do you accept?",
 answer: "We are empanelled with major insurance providers including Star Health, Aditya Birla, HDFC Ergo, and ICICI Lombard. We also support various government health schemes. Please check with our insurance desk for cashless eligibility.",
 category: "Insurance"
 },
 {
 question: "Is there an in-house pharmacy and lab?",
 answer: "Yes, we have a 24/7 in-house pharmacy and a fully automated diagnostic laboratory providing rapid and accurate test results.",
 category: "Facilities"
 },
 {
 question: "What is the process for international patients?",
 answer: "We have a dedicated International Patient Services desk that assists with visa invitations, airport transfers, local accommodation, and language interpretation to ensure a seamless healthcare journey.",
 category: "International"
 },
 {
 question: "What are your outpatient (OPD) registration charges?",
 answer: "Registration fees are nominal and vary by specialty. For new patients, a one-time registration card is issued which helps in maintaining your digital health records for future visits.",
 category: "General"
 },
 {
 question: "Can I get my medical reports online?",
 answer: "Yes, we provide digital reports via our secure patient portal and also send them directly to your registered WhatsApp number for quick access.",
 category: "General"
 }
];

export const cardiologyFaqs: FAQItem[] = [
 {
 question: "What are the signs of a heart attack?",
 answer: "Common signs include chest pain or pressure, shortness of breath, pain in the jaw, neck or back, and feeling weak or lightheaded. If you experience these, seek emergency medical care immediately.",
 category: "Cardiology"
 },
 {
 question: "What is an Angioplasty?",
 answer: "Angioplasty is a minimally invasive procedure used to open blocked coronary arteries and restore blood flow to the heart muscle. It often involves the placement of a stent.",
 category: "Cardiology",
 relatedSlugs: ["angioplasty-stenting", "angiography", "cardiology"]
 },
 {
 question: "How often should I have a cardiac check-up?",
 answer: "For healthy adults over 40, an annual check-up is recommended. However, if you have risk factors like diabetes, hypertension, or family history, more frequent evaluations may be necessary.",
 category: "Cardiology",
 relatedSlugs: ["cardiology"]
 },
 {
 question: "What is the difference between a pacemaker and an ICD?",
 answer: "A pacemaker primarily treats slow heart rhythms, while an ICD (Implantable Cardioverter Defibrillator) can also deliver a shock to treat life-threatening fast heart rhythms.",
 category: "Cardiology",
 relatedSlugs: ["cardiology"]
 },
 {
 question: "Is heart surgery safe at Indira Hospital?",
 answer: "Yes, our Cardiac Sciences department is equipped with a modern Cath Lab and CT surgery suites, achieving surgical success rates comparable to international standards.",
 category: "Cardiology",
 relatedSlugs: ["cardiology"]
 },
 {
 question: "Do you offer non-invasive heart tests?",
 answer: "Yes, we provide ECG, 2D Echo, Stress Tests, and Holter monitoring to diagnose heart conditions without invasive procedures.",
 category: "Cardiology",
 relatedSlugs: ["cardiology"]
 },
 {
 question: "What is the recovery time after a heart bypass (CABG)?",
 answer: "Most patients stay in the hospital for 5-7 days and can return to light activities in 4-6 weeks, with full recovery in 3 months.",
 category: "Cardiology",
 relatedSlugs: ["cardiology", "surgery"]
 },
 {
 question: "Can diet alone reverse heart disease?",
 answer: "While diet is crucial for management and prevention, established heart disease often requires a combination of medication, lifestyle changes, and sometimes surgical intervention.",
 category: "Cardiology",
 relatedSlugs: ["cardiology"]
 }
];

export const dentalFaqs: FAQItem[] = [
 {
 question: "How long do dental implants last?",
 answer: "With proper care and maintenance, dental implants can last 25 years or even a lifetime. They are designed to be a permanent solution for missing teeth.",
 category: "Dentistry",
 relatedSlugs: ["dental-implants"]
 },
 {
 question: "Is the dental implant procedure painful?",
 answer: "The procedure is typically performed under local anesthesia, so you shouldn't feel pain during the surgery. Dr. Rockson Samuel ensures a stress-free experience, and most patients report that it's less uncomfortable than a tooth extraction.",
 category: "Dentistry",
 relatedSlugs: ["dental-implants"]
 },
 {
 question: "At what age should children have their first dental visit?",
 answer: "The American Academy of Pediatric Dentistry recommends a first visit by the age of one. At Indira Hospital, Dr. Dhanushmi provides gentle care to establish a 'dental home' for your child.",
 category: "Dentistry",
 relatedSlugs: ["dentistry"]
 },
 {
 question: "Do you offer invisible braces (Clear Aligners)?",
 answer: "Yes, we provide advanced orthodontic solutions including clear aligners like Invisalign for patients seeking a discreet way to straighten their teeth.",
 category: "Dentistry",
 relatedSlugs: ["dentistry", "orthodontics"]
 },
 {
 question: "What is a root canal treatment (RCT)?",
 answer: "RCT is a procedure to save an infected tooth. Under the expertise of Dr. Rockson Samuel, we use advanced lasers and rotary endodontics for a painless, single-sitting experience.",
 category: "Dentistry",
 relatedSlugs: ["dentistry", "root-canal"]
 },
 {
 question: "How can I prevent gum disease?",
 answer: "Regular brushing twice a day, flossing, and professional cleanings every 6 months are the most effective ways to prevent gingivitis and periodontitis.",
 category: "Dentistry",
 relatedSlugs: ["dentistry"]
 },
 {
 question: "Does teeth whitening damage the enamel?",
 answer: "Professional whitening, when done correctly, does not damage enamel. It temporarily opens the pores of the teeth to remove deep-seated stains.",
 category: "Dentistry",
 relatedSlugs: ["dentistry", "teeth-whitening"]
 },
 {
 question: "What should I do in a dental emergency?",
 answer: "If a tooth is knocked out or you have severe swelling, contact our 24/7 emergency unit immediately. Fast intervention can often save a tooth.",
 category: "Dentistry",
 relatedSlugs: ["dentistry", "emergency"]
 }
];

export const surgeryFaqs: FAQItem[] = [
 {
 question: "Is laparoscopic surgery better than open surgery?",
 answer: "Laparoscopic (minimally invasive) surgery generally offers faster recovery, less pain, and smaller scars compared to traditional open surgery. However, the choice depends on the specific medical condition.",
 category: "Surgery",
 relatedSlugs: ["laparoscopic-surgeries"]
 },
 {
 question: "Is gallbladder surgery safe?",
 answer: "Yes, laparoscopic cholecystectomy is one of the most common and safest surgical procedures performed today. Most patients go home the same day or the next morning.",
 category: "Surgery",
 relatedSlugs: ["cholecystectomy", "gallbladder-stones"]
 },
 {
 question: "How long is the recovery after laser piles treatment?",
 answer: "Laser piles treatment is a day-care procedure. Most patients can return to light activities within 24-48 hours and resume full work in 3-5 days.",
 category: "Surgery",
 relatedSlugs: ["laser-piles-treatment", "piles-treatment", "fissure-treatment"]
 },
 {
 question: "What is the wait time for elective surgery at Indira Hospital?",
 answer: "We strive to minimize wait times. Most elective procedures can be scheduled within 3-7 days, depending on the pre-surgical evaluation and bed availability.",
 category: "Surgery",
 relatedSlugs: ["surgery"]
 },
 {
 question: "Do you offer keyhole surgery for appendicitis?",
 answer: "Yes, laparoscopic appendectomy is the standard of care at our hospital, allowing patients to return home within 24-48 hours.",
 category: "Surgery",
 relatedSlugs: ["surgery", "appendix"]
 },
 {
 question: "What should I bring for my surgical admission?",
 answer: "Please bring all current medications, relevant imaging (X-rays/CT), a valid ID, and comfortable clothing. We provide hospital gowns and basic amenities.",
 category: "Surgery",
 relatedSlugs: ["surgery"]
 },
 {
 question: "Is general anesthesia safe for elderly patients?",
 answer: "Our senior anaesthesiologists perform thorough pre-anaesthetic checkups (PAC) to customize the approach, making it safe for elderly patients with co-morbidities.",
 category: "Surgery",
 relatedSlugs: ["surgery", "anesthesia"]
 },
 {
 question: "What is 'Day Care' surgery?",
 answer: "Day Care surgeries are procedures where the patient is admitted, operated upon, and discharged the same day, thanks to minimally invasive techniques.",
 category: "Surgery",
 relatedSlugs: ["surgery", "daycare"]
 }
];

export const nephrologyFaqs: FAQItem[] = [
 {
 question: "How often do I need dialysis if I have kidney failure?",
 answer: "Most patients with end-stage renal disease require dialysis three times a week, with each session lasting about 4 hours, though this is tailored to individual needs.",
 category: "Nephrology",
 relatedSlugs: ["dialysis-services", "nephrology"]
 },
 {
 question: "What are the early symptoms of kidney disease?",
 answer: "Early signs include persistent fatigue, swelling in ankles (edema), changes in urination frequency, and persistent itching. Many kidney conditions are 'silent' and detected via blood tests.",
 category: "Nephrology",
 relatedSlugs: ["nephrology"]
 },
 {
 question: "Can kidney stones be treated without surgery?",
 answer: "Small stones often pass with hydration and medication. For larger stones, we offer non-invasive Lithotripsy (ESWL) or minimally invasive laser procedures.",
 category: "Nephrology",
 relatedSlugs: ["nephrology", "urology"]
 },
 {
 question: "Is a kidney transplant better than lifelong dialysis?",
 answer: "For eligible patients, a kidney transplant generally offers a better quality of life and longer life expectancy compared to long-term dialysis.",
 category: "Nephrology",
 relatedSlugs: ["nephrology", "transplant"]
 },
 {
 question: "What is the role of diet in managing chronic kidney disease (CKD)?",
 answer: "A renal-friendly diet (low in sodium, potassium, and phosphorus) is critical to slowing the progression of CKD and preventing complications.",
 category: "Nephrology",
 relatedSlugs: ["nephrology"]
 },
 {
 question: "How does diabetes affect the kidneys?",
 answer: "High blood sugar can damage the kidneys' filtering system over time, leading to Diabetic Nephropathy. Regular screening is essential for diabetic patients.",
 category: "Nephrology",
 relatedSlugs: ["nephrology"]
 },
 {
 question: "Is polycystic kidney disease (PKD) hereditary?",
 answer: "Yes, PKD is a genetic disorder where clusters of cysts develop in the kidneys. Counseling and early detection are key for family members.",
 category: "Nephrology",
 relatedSlugs: ["nephrology"]
 },
 {
 question: "What is an AV Fistula for dialysis?",
 answer: "An AV fistula is a surgically created connection between an artery and a vein, providing a reliable and long-term access point for hemodialysis sessions.",
 category: "Nephrology",
 relatedSlugs: ["nephrology", "dialysis"]
 }
];

export const neurologyFaqs: FAQItem[] = [
 {
 question: "What types of neurological disorders do you treat?",
 answer: "We treat a wide spectrum of disorders including stroke, epilepsy, migraines, Parkinson's disease, multiple sclerosis, and dementia (Alzheimer's).",
 category: "Neurology",
 relatedSlugs: ["neurology"]
 },
 {
 question: "When should I see a neurologist for headaches?",
 answer: "Consult a neurologist if your headaches are frequent, severe, accompanied by visual disturbances, weakness, or if they interfere with daily life.",
 category: "Neurology",
 relatedSlugs: ["neurology", "migraine"]
 },
 {
 question: "What are the early warning signs of a stroke?",
 answer: "Remember FAST: Facial drooping, Arm weakness, Speech difficulty, Time to call emergency. Immediate intervention is critical for stroke recovery.",
 category: "Neurology",
 relatedSlugs: ["neurology", "emergency"]
 },
 {
 question: "How is epilepsy diagnosed?",
 answer: "Diagnosis involves a clinical evaluation, EEG (Electroencephalogram) to record brain activity, and often MRI/CT scans to identify structural causes.",
 category: "Neurology",
 relatedSlugs: ["neurology", "epilepsy"]
 },
 {
 question: "Do you offer pediatric neurology services?",
 answer: "Yes, we provide specialized care for children with developmental delays, pediatric epilepsy, and other neuro-developmental conditions.",
 category: "Neurology",
 relatedSlugs: ["neurology"]
 },
 {
 question: "What treatment options are available for Parkinson's disease?",
 answer: "Management includes personalized medication, physical therapy, and in some advanced cases, evaluation for surgical options like Deep Brain Stimulation.",
 category: "Neurology",
 relatedSlugs: ["neurology", "parkinsons"]
 },
 {
 question: "What are the common tests for nerve damage?",
 answer: "We use Electromyography (EMG) and Nerve Conduction Velocity (NCV) tests to evaluate muscle health and the speed of nerve signals.",
 category: "Neurology",
 relatedSlugs: ["neurology"]
 },
 {
 question: "Can sleep disorders be neurological?",
 answer: "Yes, conditions like narcolepsy or restless leg syndrome are neurological in nature and can be managed effectively by our specialists.",
 category: "Neurology",
 relatedSlugs: ["neurology", "sleep-disorders"]
 }
];

export const urologyFaqs: FAQItem[] = [
 {
 question: "What is the most effective treatment for kidney stones?",
 answer: "Treatment depends on size and location. We offer Laser Lithotripsy (RIRS), PCNL for large stones, and ESWL (shockwave therapy).",
 category: "Urology",
 relatedSlugs: ["urology", "kidney-stones"]
 },
 {
 question: "What are the symptoms of an enlarged prostate (BPH)?",
 answer: "Common symptoms include frequent urination (especially at night), weak urine flow, and a feeling that the bladder hasn't emptied completely.",
 category: "Urology",
 relatedSlugs: ["urology", "prostate"]
 },
 {
 question: "Is blood in the urine always a cause for concern?",
 answer: "Yes, hematuria should always be evaluated by a urologist to rule out infections, stones, or more serious conditions like bladder or kidney tumors.",
 category: "Urology",
 relatedSlugs: ["urology"]
 },
 {
 question: "Do you offer minimally invasive urological surgeries?",
 answer: "Yes, we specialize in laparoscopic urology and robotic-assisted procedures for faster recovery and less pain.",
 category: "Urology",
 relatedSlugs: ["urology", "laparoscopic"]
 },
 {
 question: "What are the signs of a urinary tract infection (UTI)?",
 answer: "Symptoms include a strong, persistent urge to urinate, a burning sensation when urinating, and cloudy or strong-smelling urine.",
 category: "Urology",
 relatedSlugs: ["urology"]
 },
 {
 question: "Can male infertility be treated?",
 answer: "Yes, we offer comprehensive evaluations and treatments including micro-surgical varicocele repair and hormone therapy.",
 category: "Urology",
 relatedSlugs: ["urology", "infertility"]
 },
 {
 question: "What is Urodynamics testing?",
 answer: "It is a series of tests that show how well your bladder, sphincters, and urethra are storing and releasing urine.",
 category: "Urology",
 relatedSlugs: ["urology"]
 },
 {
 question: "Is prostate cancer screening important?",
 answer: "Yes, men over 50 (or younger with family history) should undergo regular PSA tests and clinical exams for early detection.",
 category: "Urology",
 relatedSlugs: ["urology", "cancer-screening"]
 }
];

export const gynaecologyFaqs: FAQItem[] = [
 {
 question: "What prenatal services do you offer?",
 answer: "We provide comprehensive care including regular check-ups, high-resolution ultrasounds, genetic screening, and nutritional counseling for expectant mothers.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine", "pregnancy"]
 },
 {
 question: "Do you handle high-risk pregnancies?",
 answer: "Yes, our team is highly experienced in managing complications like gestational diabetes, hypertension (preeclampsia), and multiple births.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine"]
 },
 {
 question: "What are the symptoms of PCOS?",
 answer: "Common signs include irregular periods, excess facial/body hair, acne, and weight gain. Early diagnosis is key to long-term management.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine", "pcos"]
 },
 {
 question: "Do you offer painless delivery options?",
 answer: "Yes, we provide epidural anesthesia (painless labor) services administered by expert anaesthesiologists to ensure a comfortable birthing experience.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine"]
 },
 {
 question: "When should I have my first PAP smear?",
 answer: "Generally, women should start screening at age 21. Your gynaecologist will recommend the frequency based on your health history.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine", "cancer-screening"]
 },
 {
 question: "What are the options for heavy period (Menorrhagia) treatment?",
 answer: "We offer both medical management and minimally invasive surgical options like Endometrial Ablation or Laparoscopic Hysterectomy if required.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine"]
 },
 {
 question: "Do you provide adolescent gynaecology services?",
 answer: "Yes, we offer sensitive care and counseling for young girls dealing with puberty-related issues and menstrual irregularities.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine"]
 },
 {
 question: "What is the importance of pre-conception counseling?",
 answer: "It helps identify health risks and provides guidance on supplements like folic acid to ensure the best possible start for a healthy pregnancy.",
 category: "Obstetrics & Gynecology",
 relatedSlugs: ["obstetrics-gynecology-reproductive-medicine"]
 }
];

export const orthopaedicFaqs: FAQItem[] = [
 {
 question: "When is joint replacement surgery necessary?",
 answer: "It is considered when severe pain and stiffness limit daily activities and no longer respond to medication, physical therapy, or other non-surgical options.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics", "joint-replacement"]
 },
 {
 question: "How long does a knee replacement last?",
 answer: "Modern knee implants are highly durable and can last between 15-25 years depending on the patient's activity level and bone quality.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics", "knee-replacement"]
 },
 {
 question: "What is Arthroscopy?",
 answer: "Arthroscopy is a minimally invasive 'keyhole' surgery used to diagnose and treat joint problems, typically in the knee, shoulder, or ankle.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics", "arthroscopy"]
 },
 {
 question: "Can sports injuries be treated without surgery?",
 answer: "Many minor injuries like sprains or minor tears respond well to RICE (Rest, Ice, Compression, Elevation) and specialized physiotherapy.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics", "sports-medicine"]
 },
 {
 question: "What are the common causes of chronic back pain?",
 answer: "Causes include herniated discs, spinal stenosis, muscle strain, and poor posture. We offer comprehensive diagnostic and pain management solutions.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics", "spine"]
 },
 {
 question: "Do you offer pediatric orthopaedic care?",
 answer: "Yes, we treat conditions like clubfoot, hip dysplasia, and pediatric fractures with child-specific techniques.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics"]
 },
 {
 question: "What is the recovery protocol after ACL surgery?",
 answer: "Recovery involves several months of structured physiotherapy to regain strength and stability before returning to competitive sports.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics", "acl-surgery"]
 },
 {
 question: "How can I prevent Osteoporosis?",
 answer: "A calcium-rich diet, weight-bearing exercises, and adequate Vitamin D intake are essential for maintaining bone density as you age.",
 category: "Orthopaedics",
 relatedSlugs: ["orthopaedics", "osteoporosis"]
 }
];

export const dermatologyFaqs: FAQItem[] = [
 {
 question: "What skin conditions do you treat at Indira Hospital?",
 answer: "Our dermatology department treats a wide range of conditions including acne, eczema, psoriasis, vitiligo, skin allergies, fungal infections, and skin cancers.",
 category: "Dermatology",
 relatedSlugs: ["dermatology"]
 },
 {
 question: "Do you offer laser treatments for skin rejuvenation?",
 answer: "Yes, we use advanced aesthetic lasers for skin resurfacing, scar reduction, and pigment correction with minimal downtime.",
 category: "Dermatology",
 relatedSlugs: ["dermatology"]
 },
 {
 question: "Is hair transplant surgery available?",
 answer: "Yes, our specialists perform advanced hair restoration using FUE (Follicular Unit Extraction) techniques for natural-looking results.",
 category: "Dermatology",
 relatedSlugs: ["dermatology", "hair-transplant"]
 },
 {
 question: "How do I prepare for a dermatology consultation?",
 answer: "Bring a list of all current medications, skin products you use, and details of any allergies. Bringing clear photos of flare-ups is also helpful.",
 category: "Dermatology",
 relatedSlugs: ["dermatology"]
 },
 {
 question: "Do you treat pediatric skin conditions?",
 answer: "Yes, we have specialists experienced in managing sensitive skin issues in infants and children, including neonatal rashes and pediatric eczema.",
 category: "Dermatology",
 relatedSlugs: ["dermatology"]
 },
 {
 question: "Are chemical peels safe for all skin types?",
 answer: "Chemical peels are safe when supervised by a dermatologist. We customize the peel strength based on your skin type and sensitivity to ensure optimal results.",
 category: "Dermatology",
 relatedSlugs: ["dermatology"]
 },
 {
 question: "Do you provide biopsy services for skin lesions?",
 answer: "Yes, if a suspicious mole or lesion is found, we perform in-house biopsies with rapid histopathology results to rule out malignancy.",
 category: "Dermatology",
 relatedSlugs: ["dermatology"]
 },
 {
 question: "What is the success rate for chronic eczema management?",
 answer: "While 'cures' vary, we achieve high success in symptom control and long-term remission through personalized biological therapies and lifestyle management.",
 category: "Dermatology",
 relatedSlugs: ["dermatology"]
 }
];


export const locationFaqs: FAQItem[] = [
 {
 question: "Where is Indira Hospital located in Vellore?",
 answer: "We are located at 54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006. We are approximately 2.5 km from the Vellore Katpadi Junction railway station.",
 category: "Location",
 relatedSlugs: ["vellore", "contact"]
 },
 {
 question: "How do I reach the hospital from the nearest airport?",
 answer: "The nearest international airport is Chennai (MAA), which is about 130 km away. You can reach us by taxi (approx. 2.5–3 hours) or by train. We also provide airport pickup services for international patients.",
 category: "Location",
 relatedSlugs: ["international", "transport"]
 }
];

export const insuranceFaqs: FAQItem[] = [
 {
 question: "Is CMCHIS (Chief Minister's Scheme) available at Indira Hospital?",
 answer: "Yes, we are a fully empanelled provider for the Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS). Our dedicated insurance desk will help you with the documentation and approval process.",
 category: "Insurance",
 relatedSlugs: ["insurance"]
 },
 {
 question: "What documents are required for cashless treatment?",
 answer: "To avail cashless treatment, please bring your valid insurance ID card, a government-issued photo ID (Aadhar/Voter ID), and the doctor's consultation note or referral.",
 category: "Insurance",
 relatedSlugs: ["insurance"]
 },
 {
 question: "Does your hospital support TPA (Third Party Administrators)?",
 answer: "Yes, we work with almost all major TPAs in India including Medi Assist, Raksha, Heritage, and Family Health Plan. Our TPA desk is available 24/7 for assistance.",
 category: "Insurance"
 },
 {
 question: "Is there a waiting period for surgery under insurance?",
 answer: "Waiting periods are defined by your specific insurance policy (e.g., 2 or 4 years for pre-existing diseases). However, emergency surgeries are typically processed immediately.",
 category: "Insurance"
 },
 {
 question: "How long does the insurance discharge process take?",
 answer: "The discharge process usually takes 2-4 hours from the time the final bill is uploaded, depending on the response time of your insurance provider's authorization team.",
 category: "Insurance"
 },
 {
 question: "Do you have a dedicated desk for government schemes?",
 answer: "Yes, we have a specialized counter for CMCHIS and other government-sponsored health missions to ensure beneficiaries get treatment without any out-of-pocket expenses.",
 category: "Insurance"
 },
 {
 question: "Can I upgrade my room if I have insurance?",
 answer: "Yes, you can opt for a room upgrade by paying the difference in room rent and associated proportional charges as per your insurance company's guidelines.",
 category: "Insurance"
 },
 {
 question: "Is day-care surgery covered under insurance?",
 answer: "Most modern policies cover day-care procedures like cataract surgery, dialysis, and chemotherapy. We recommend checking your specific policy 'Day Care' list.",
 category: "Insurance"
 }
];

export const scanFaqs: FAQItem[] = [
 {
 question: "How long does it take to get MRI or CT scan reports?",
 answer: "At Indira Hospital, we prioritize rapid results. Most routine scan reports are ready within 6-12 hours. Critical emergency scans are reported immediately by our on-call radiologists.",
 category: "Scans",
 relatedSlugs: ["scans", "diagnostics"]
 },
 {
 question: "Is any special preparation needed for a CT scan?",
 answer: "Preparation depends on the type of scan. For contrast scans, we usually advise fasting for 4-6 hours. Our diagnostics team will provide specific instructions tailored to your prescribed test.",
 category: "Scans",
 relatedSlugs: ["scans"]
 }
];

export const pharmacyFaqs: FAQItem[] = [
 {
 question: "Do you offer home delivery for medicines?",
 answer: "Yes, we provide fast home delivery across Vellore city limits. You can send your prescription via WhatsApp to place an order.",
 category: "Pharmacy",
 relatedSlugs: ["pharmacy"]
 },
 {
 question: "Is the pharmacy open 24/7?",
 answer: "Our in-house pharmacy is open 24 hours a day, 365 days a year, ensuring life-saving medications are always accessible.",
 category: "Pharmacy",
 relatedSlugs: ["pharmacy"]
 }
];

export const infrastructureFaqs: FAQItem[] = [
 {
 question: "What are your visiting hours for patients in the ICU?",
 answer: "To ensure patient safety and infection control, ICU visiting hours are strictly scheduled from 11:00 AM to 12:00 PM and 5:00 PM to 6:00 PM. Only one visitor is allowed at a time.",
 category: "Hospital",
 relatedSlugs: ["facilities", "about"]
 },
 {
 question: "Does the hospital have a 24-hour emergency department?",
 answer: "Yes, Indira Hospital features a fully-equipped 24/7 Emergency and Trauma center with specialized ER physicians and surgeons on standby.",
 category: "Hospital",
 relatedSlugs: ["facilities", "emergency-medicine"]
 }
];

export const brandFaqs: FAQItem[] = [
 {
 question: "How long has Indira Hospital been serving the Vellore community?",
 answer: "Indira Hospital was established in 1988. For over 35 years, we have been a trusted healthcare provider, performing over 15,000 successful surgeries.",
 category: "Hospital",
 relatedSlugs: ["about", "why-choose-indira"]
 },
 {
 question: "What makes Indira Hospital different from other hospitals in Vellore?",
 answer: "We combine multi-speciality clinical excellence with a patient-first focus. Our surgeons have performed over 10,000+ procedures each, and we offer 24/7 advanced diagnostics and emergency care.",
 category: "Hospital",
 relatedSlugs: ["why-choose-indira", "indira-hospital"]
 },
 {
 question: "Is Indira Hospital accredited for quality and safety?",
 answer: "Yes, we maintain rigorous internal clinical audits and comply with international medical ethics and safety standards to ensure the best patient outcomes.",
 category: "Hospital",
 relatedSlugs: ["about", "quality-safety"]
 }
];

export const gastroFaqs: FAQItem[] = [
 {
 question: "What are the common symptoms of gastrointestinal issues?",
 answer: "Common symptoms include chronic abdominal pain, persistent bloating, heartburn, acid reflux, unexplained weight loss, and changes in bowel habits.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology"]
 },
 {
 question: "Is endoscopy a painful procedure?",
 answer: "Modern endoscopies are performed under light conscious sedation, making the procedure virtually painless and comfortable for the patient.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology", "endoscopy"]
 },
 {
 question: "What is a colonoscopy used for?",
 answer: "Colonoscopy is used to detect and treat polyps, screening for colorectal cancer, and investigating chronic diarrhea or rectal bleeding.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology", "colonoscopy"]
 },
 {
 question: "How do I prepare for a health checkup involving gastroenterology?",
 answer: "Usually, an 8-12 hour fast is required. For colonoscopy, specific bowel preparation instructions will be provided 24 hours in advance.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology"]
 },
 {
 question: "Can diet alone cure acid reflux?",
 answer: "While diet is crucial, chronic GERD often requires medical management to prevent esophageal damage. Our specialists provide combined therapy plans.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology"]
 },
 {
 question: "Do you treat fatty liver disease?",
 answer: "Yes, we have specialized protocols for managing Non-Alcoholic Fatty Liver Disease (NAFLD) focusing on metabolic health and liver restoration.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology"]
 },
 {
 question: "Are your scopes sterilized between procedures?",
 answer: "We follow international gold-standard automated re-processing protocols for all endoscopes to ensure 100% patient safety and zero cross-contamination.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology"]
 },
 {
 question: "When should I consult a gastroenterologist?",
 answer: "Consult if you have symptoms lasting over 2 weeks or if you have a family history of GI cancers and are over 45 years of age.",
 category: "Gastroenterology",
 relatedSlugs: ["gastroenterology-hepatology"]
 }
];

export const entFaqs: FAQItem[] = [
 {
 question: "What types of ENT surgeries are performed at Indira Hospital?",
 answer: "We perform micro-ear surgeries, FESS for sinuses, tonsillectomies, adenoidectomies, and advanced head and neck tumor surgeries.",
 category: "ENT",
 relatedSlugs: ["ent"]
 },
 {
 question: "Can you help with chronic snoring and sleep apnea?",
 answer: "Yes, we offer comprehensive sleep studies and surgical/non-surgical solutions for obstructive sleep apnea and snoring issues.",
 category: "ENT",
 relatedSlugs: ["ent"]
 },
 {
 question: "Do you have hearing aid services?",
 answer: "Our audiology department provides high-precision hearing assessments and advanced digital hearing aid fittings customized to your hearing loss profile.",
 category: "ENT",
 relatedSlugs: ["ent"]
 },
 {
 question: "Are tonsil surgeries safe for children?",
 answer: "Yes, tonsillectomy is a standard pediatric procedure. We use modern coblation techniques which minimize bleeding and speed up recovery in children.",
 category: "ENT",
 relatedSlugs: ["ent"]
 },
 {
 question: "How do I manage chronic allergic rhinitis?",
 answer: "We provide immunotherapy and targeted nasal therapies to manage severe allergies, improving quality of life without constant dependency on pills.",
 category: "ENT",
 relatedSlugs: ["ent"]
 },
 {
 question: "Do you treat vertigo and balance disorders?",
 answer: "Our specialized vertigo clinic uses repositioning maneuvers and vestibular rehabilitation to treat inner-ear related balance issues effectively.",
 category: "ENT",
 relatedSlugs: ["ent"]
 },
 {
 question: "Is there a solution for chronic sinus infections?",
 answer: "For cases not responding to medicine, we offer FESS (Functional Endoscopic Sinus Surgery) to clear obstructions and restore normal sinus drainage.",
 category: "ENT",
 relatedSlugs: ["ent"]
 },
 {
 question: "What is the recovery time for ear drum repair?",
 answer: "Most patients can return to work in 1 week. Complete healing of the tympanoplasty typically takes 4-6 weeks with water-protection precautions.",
 category: "ENT",
 relatedSlugs: ["ent"]
 }
];

export const comprehensiveFaqs: FAQItem[] = [
 ...generalFaqs,
 ...cardiologyFaqs,
 ...dentalFaqs,
 ...surgeryFaqs,
 ...nephrologyFaqs,
 ...dermatologyFaqs,
 ...gastroFaqs,
 ...entFaqs,
 ...neurologyFaqs,
 ...urologyFaqs,
 ...gynaecologyFaqs,
 ...orthopaedicFaqs,
 ...locationFaqs,
 ...insuranceFaqs,
 ...scanFaqs,
 ...pharmacyFaqs,
 ...infrastructureFaqs,
 ...brandFaqs
];

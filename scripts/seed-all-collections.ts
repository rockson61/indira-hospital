import { createDirectus, rest, staticToken, createItem, readItems } from '@directus/sdk';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local first
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const DIRECTUS_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

if (!DIRECTUS_TOKEN) {
    console.error('Error: DIRECTUS_TOKEN is not set. Run: export DIRECTUS_TOKEN=$(npx tsx scripts/fetch-token.ts)');
    process.exit(1);
}

const client = createDirectus(DIRECTUS_URL)
    .with(staticToken(DIRECTUS_TOKEN))
    .with(rest());

// =============================================
// DATA DEFINITIONS
// =============================================

const departments = [
    { name: "General Surgery", slug: "general-surgery", description: "Comprehensive surgical care including Laser Piles, Hernia, Laparoscopic Surgery, and more." },
    { name: "Cardiology", slug: "cardiology", description: "Advanced cardiac care with Cath Lab facility — angiography, angioplasty, pacemaker implantation, and heart failure management." },
    { name: "Orthopaedics", slug: "orthopaedics", description: "Joint replacements, spine surgery, trauma care, arthroscopy, and sports injury management." },
    { name: "Gastroenterology", slug: "gastroenterology", description: "Expert care for digestive system disorders including endoscopy, liver diseases, and pancreatic conditions." },
    { name: "Urology", slug: "urology", description: "Comprehensive urological care — kidney stones, prostate issues, UTIs, and minimally invasive procedures." },
    { name: "Obstetrics & Gynaecology", slug: "obstetrics-gynaecology", description: "Complete women's health — high-risk pregnancies, painless delivery, infertility treatments, and gynecological surgeries." },
    { name: "ICU & Emergency", slug: "icu-emergency", description: "24/7 state-of-the-art ICU and Emergency Department staffed by critical care specialists." },
    { name: "Neurology", slug: "neurology", description: "Advanced neurological care — stroke, epilepsy, headaches, Parkinson's, and neuromuscular disorders." },
    { name: "Oncology", slug: "oncology", description: "Multidisciplinary cancer care — early detection, chemotherapy, targeted therapy, and palliative care." },
    { name: "Nephrology", slug: "nephrology", description: "Complete kidney care including dialysis, chronic kidney disease management, and transplant evaluation." },
    { name: "Dental", slug: "dental", description: "Comprehensive dental care — root canal, implants, orthodontics, cosmetic dentistry, oral surgery." },
    { name: "ENT", slug: "ent", description: "Ear, Nose, and Throat treatment — sinus surgery, tonsillectomy, hearing issues, and voice disorders." },
];

const doctors = [
    { name: "Dr. P. Shankar", slug: "dr-p-shankar", designation: "Chairman & General Surgeon", department_slug: "general-surgery", bio: "Chairman of Indira Super Speciality Hospital with vast experience in General Surgery and Administration.", experience_years: 30, specialties: ["General Surgery", "Administration"], image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/Dr-Shankar-1-1.jpeg" },
    { name: "Dr. G. Raman Kumar", slug: "dr-g-raman-kumar", designation: "Consultant Orthopaedic Surgeon", department_slug: "orthopaedics", bio: "Specialist in Orthopaedics, Trauma, and Joint Replacement surgeries.", experience_years: 15, specialties: ["Orthopaedics", "Trauma"], image: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/05/ram-1.jpg" },
    { name: "Dr. Karan Shankar", slug: "dr-karan-shankar", designation: "Clinical Executive Director", department_slug: "general-surgery", bio: "Driving clinical excellence and operational efficiency across all departments.", experience_years: 8, specialties: ["Hospital Administration"], image: "" },
    { name: "Dr. Ashok Kumar", slug: "dr-ashok-kumar", designation: "Spine Surgeon", department_slug: "orthopaedics", bio: "Expert in complex spine surgeries and rehabilitation.", experience_years: 12, specialties: ["Spine Surgery"], image: "" },
    { name: "Dr. Soniya Shankar", slug: "dr-soniya-shankar", designation: "Chief Executive Officer", department_slug: "general-surgery", bio: "Leading the organization with a focus on patient-centric care and growth.", experience_years: 10, specialties: ["Health Management"], image: "" },
    { name: "Dr. Salomon", slug: "dr-salomon", designation: "General Surgeon", department_slug: "general-surgery", bio: "Dedicated surgeon specializing in minimal access surgeries.", experience_years: 10, specialties: ["General Surgery", "Laparoscopy"], image: "" },
    { name: "Dr. Latha Lakshmi", slug: "dr-latha-lakshmi", designation: "Obstetrician & Gynaecologist", department_slug: "obstetrics-gynaecology", bio: "Compassionate care for women's health, high-risk pregnancies, and infertility.", experience_years: 20, specialties: ["Gynecology", "Obstetrics"], image: "" },
    { name: "Dr. PL. Saravanan", slug: "dr-pl-saravanan", designation: "Consultant Cardiologist", department_slug: "cardiology", bio: "Expert in interventional cardiology and heart failure management.", experience_years: 14, specialties: ["Cardiology", "Interventional Cardiology"], image: "" },
];

const services = [
    { title: "General Surgery", slug: "general-surgery", short_description: "Laser Surgery For Piles, Hernia, Thyroid, and more.", full_description: "Comprehensive surgical care including Laser Surgery For Piles, Minimally Invasive Laparoscopic Surgery, Hydrocele, Hernia, Varicose Veins, Lipoma, Dermoid Cyst, Thyroid Swelling, Fibroadenoma Breast, Colonic Polyp, Cancer Breast.", department_slug: "general-surgery" },
    { title: "Laparoscopic Surgeries", slug: "laparoscopic-surgeries", short_description: "Minimally invasive keyhole surgeries.", full_description: "Minimally invasive surgeries offering shorter recovery times, less pain, and smaller scars.", department_slug: "general-surgery" },
    { title: "Gastroenterology", slug: "gastroenterology", short_description: "Expert care for digestive system disorders.", full_description: "Advanced treatment for gastrointestinal disorders, liver diseases, and pancreatic conditions using the latest medical and surgical interventions.", department_slug: "gastroenterology" },
    { title: "Urology", slug: "urology", short_description: "Care for kidneys, ureters, and bladder.", full_description: "Comprehensive urological care including management of kidney stones, prostate issues, and urinary tract infections.", department_slug: "urology" },
    { title: "Obstetrics & Gynaecology", slug: "obstetrics-gynaecology", short_description: "Comprehensive women's health services.", full_description: "Complete care for women including high-risk pregnancy management, painless delivery, infertility treatments, and gynecological surgeries.", department_slug: "obstetrics-gynaecology" },
    { title: "Orthopaedics", slug: "orthopaedics", short_description: "Joint replacements, spine and trauma care.", full_description: "Specialized care for bone and joint disorders, including total knee/hip replacements, arthroscopy, and complex trauma management.", department_slug: "orthopaedics" },
    { title: "Cardiology", slug: "cardiology", short_description: "Heart care and interventional cardiology.", full_description: "Advanced cardiac care including angiography, angioplasty, pacemaker implantation, and management of heart failure.", department_slug: "cardiology" },
    { title: "ICU & Emergency", slug: "icu-emergency", short_description: "24/7 Critical care and trauma response.", full_description: "State-of-the-art Intensive Care Units and 24/7 Emergency Department staffed by critical care specialists to handle all medical emergencies.", department_slug: "icu-emergency" },
    { title: "Dental", slug: "dental", short_description: "Complete dental care from routine check-ups to advanced implants.", full_description: "Comprehensive dental services including root canal treatment, dental implants, orthodontics, cosmetic dentistry, oral surgery, teeth whitening, and preventive care.", department_slug: "dental" },
    { title: "Neurology", slug: "neurology", short_description: "Expert care for brain, spine, and nervous system disorders.", full_description: "Advanced neurological care including diagnosis and treatment of stroke, epilepsy, headaches, Parkinson's disease, multiple sclerosis, peripheral neuropathy, and neuromuscular disorders.", department_slug: "neurology" },
    { title: "Oncology", slug: "oncology", short_description: "Comprehensive cancer diagnosis and treatment.", full_description: "Multidisciplinary cancer care offering early detection, chemotherapy, targeted therapy, immunotherapy, surgical oncology, and palliative care.", department_slug: "oncology" },
    { title: "Nephrology", slug: "nephrology", short_description: "Kidney care, dialysis, and renal disease management.", full_description: "Complete kidney care including management of chronic kidney disease, dialysis services, kidney stone prevention, hypertension management, electrolyte disorders, and pre-transplant evaluation.", department_slug: "nephrology" },
];

const faqs = [
    { question: "What are the visiting hours at Indira Hospital?", answer: "Visiting hours are 10:00 AM – 12:00 PM and 4:00 PM – 6:00 PM daily. ICU visiting is restricted to one visitor at a time for 15 minutes, twice daily. Emergency department is open 24/7.", category: "general" },
    { question: "Does Indira Hospital accept health insurance?", answer: "Yes, we accept all major health insurance providers including Star Health, New India Assurance, ICICI Lombard, HDFC Ergo, and more. We offer cashless treatment facility for most policies. Contact our insurance desk at +91 98423 42525 for verification.", category: "insurance" },
    { question: "How can I book an appointment?", answer: "You can book via WhatsApp at +91 70106 50063, by calling +91 98423 42525, or through our website. We also accept walk-in consultations during OPD hours.", category: "general" },
    { question: "What emergency services are available?", answer: "Our emergency department operates 24/7 with trauma specialists, ICU beds with ventilators, ambulance services, rapid response teams, and a fully equipped emergency resuscitation room.", category: "general" },
    { question: "What is the Cath Lab facility?", answer: "Our advanced Cath Lab (Catheterization Laboratory) is equipped for coronary angiography, angioplasty with stenting, pacemaker implantation, and other cardiac interventions. It's staffed 24/7 for cardiac emergencies.", category: "treatment" },
    { question: "Does the hospital have cashless insurance?", answer: "Yes, we provide cashless treatment for most major insurance policies. Our dedicated insurance desk helps with pre-authorization, claim processing, and documentation to ensure a hassle-free experience.", category: "insurance" },
    { question: "What is Laser Piles Treatment?", answer: "Laser Piles Treatment is a minimally invasive, outpatient procedure using laser energy to treat hemorrhoids. Benefits include minimal pain, no wounds, quick recovery (1-2 days), and high success rate. Walk in or call to consult our surgical team.", category: "treatment" },
    { question: "Is laparoscopic surgery available?", answer: "Yes, we perform a wide range of laparoscopic (keyhole) surgeries including cholecystectomy, appendectomy, hernia repair, and gynecological procedures. Benefits include smaller incisions, faster recovery, less pain, and shorter hospital stay.", category: "treatment" },
    { question: "What are the OPD consultation timings?", answer: "OPD consultations are available Monday to Saturday from 9:00 AM to 1:00 PM and 4:00 PM to 8:00 PM. Sunday consultations are by prior appointment only. Emergency OPD runs 24/7.", category: "general" },
    { question: "How do I reach Indira Hospital from Chennai?", answer: "Indira Hospital is on Katpadi Road, Vellore — approximately 135 km from Chennai. Take NH48 via Ranipet (2.5 hours by car). Regular buses and trains connect Chennai to Katpadi Junction, which is 12 km from the hospital.", category: "general" },
];

const testimonials = [
    { patient_name: "Lakshmi Narayanan", content: "The cardiology team at Indira Hospital saved my life. Dr. P. Shankar personally oversaw my treatment and the 24/7 ICU care was exceptional. Truly world-class facility in Vellore.", rating: 5 },
    { patient_name: "Rajesh Kumar", content: "Had my gallbladder surgery done laparoscopically. The procedure was minimally invasive and I recovered within days. The surgical team was highly professional and caring.", rating: 5 },
    { patient_name: "Meera Devi", content: "Dr. Raman Kumar treated my chronic gastritis issue effectively. His diagnostic approach was thorough and the treatment plan worked brilliantly. Highly recommend the gastro department.", rating: 5 },
    { patient_name: "Vikram Singh", content: "After my accident, the orthopaedic team at Indira Hospital reconstructed my fractured leg. The trauma care response was incredibly fast and the follow-up rehabilitation was thorough.", rating: 5 },
    { patient_name: "Sunita Reddy", content: "The general medicine department is outstanding. Regular health checkups here have been thorough and affordable. The staff is always courteous and the facilities are very clean.", rating: 5 },
    { patient_name: "Anand Patel", content: "I traveled from Chennai for my urological procedure. The quality of care at Indira Hospital rivals any major city hospital, but at a fraction of the cost. Excellent experience.", rating: 5 },
    { patient_name: "Priya Krishnan", content: "Had my delivery at Indira Hospital. The OB-GYN team was wonderful and the NICU facility gave us great peace of mind. My baby received the best neonatal care possible.", rating: 5 },
    { patient_name: "Arjun Murugan", content: "The ENT department has state-of-the-art equipment. My sinus surgery was performed with precision and the post-operative recovery was smooth. Very satisfied with the results.", rating: 5 },
    { patient_name: "Kamala Devi", content: "The dialysis unit at Indira Hospital is modern and well-maintained. The staff treats patients with dignity and compassion. I feel safe and cared for during every session.", rating: 5 },
];

const healthPackages = [
    { title: "Basic Health Checkup", price: 999, tests_included: "Complete Blood Count (CBC), Blood Sugar (Fasting & PP), Lipid Profile, Liver Function Test, Kidney Function Test, Urine Routine, Chest X-ray, ECG, Doctor Consultation" },
    { title: "Comprehensive Health Checkup", price: 2499, tests_included: "All Basic tests + Thyroid Profile, Vitamin D, Vitamin B12, HbA1c, PSA (Male) / Pap Smear (Female), Ultrasound Abdomen, Echo & TMT, Ophthalmology Screening, Dietary Counselling" },
    { title: "Cardiac Health Package", price: 3999, tests_included: "Lipid Profile, Blood Sugar, ECG, 2D Echocardiogram, Treadmill Test (TMT), Chest X-ray, Complete Blood Count, Kidney Function, Cardiologist Consultation, Diet Plan" },
    { title: "Women's Wellness Package", price: 2999, tests_included: "CBC, Thyroid Profile, Pap Smear, Mammography, Bone Density (DEXA), Vitamin D, Calcium, Iron Studies, Pelvic Ultrasound, Gynaecologist Consultation" },
    { title: "Diabetic Care Package", price: 1999, tests_included: "Fasting Blood Sugar, HbA1c, Lipid Profile, Kidney Function, Liver Function, Urine Microalbumin, ECG, Eye Screening, Foot Examination, Diabetologist Consultation" },
    { title: "Senior Citizen Package", price: 4999, tests_included: "All Comprehensive tests + Bone Density, PSA/Mammography, 2D Echo, TMT, Pulmonary Function Test, Eye Screening, Hearing Test, Neurological Assessment, Specialist Consultations (x3)" },
];

const insurances = [
    { name: "Star Health Insurance", tier: "gold" },
    { name: "New India Assurance", tier: "gold" },
    { name: "ICICI Lombard", tier: "gold" },
    { name: "HDFC Ergo", tier: "silver" },
    { name: "Bajaj Allianz", tier: "silver" },
    { name: "Religare", tier: "silver" },
    { name: "Max Bupa", tier: "silver" },
    { name: "United India Insurance", tier: "bronze" },
    { name: "Oriental Insurance", tier: "bronze" },
];

const locations = [
    { name: "Katpadi", slug: "katpadi", district: "Vellore", distance_from_hospital: "12 km", address: "Katpadi, Vellore, Tamil Nadu", phone: "+919842342525" },
    { name: "Chennai", slug: "chennai", district: "Chennai", distance_from_hospital: "135 km", address: "Chennai, Tamil Nadu", phone: "+919842342525" },
    { name: "Ambur", slug: "ambur", district: "Tirupattur", distance_from_hospital: "55 km", address: "Ambur, Tirupattur, Tamil Nadu", phone: "+919842342525" },
    { name: "Ranipet", slug: "ranipet", district: "Ranipet", distance_from_hospital: "30 km", address: "Ranipet, Tamil Nadu", phone: "+919842342525" },
    { name: "Vaniyambadi", slug: "vaniyambadi", district: "Tirupattur", distance_from_hospital: "35 km", address: "Vaniyambadi, Tirupattur, Tamil Nadu", phone: "+919842342525" },
    { name: "Tiruvannamalai", slug: "tiruvannamalai", district: "Tiruvannamalai", distance_from_hospital: "85 km", address: "Tiruvannamalai, Tamil Nadu", phone: "+919842342525" },
    { name: "Krishnagiri", slug: "krishnagiri", district: "Krishnagiri", distance_from_hospital: "95 km", address: "Krishnagiri, Tamil Nadu", phone: "+919842342525" },
    { name: "Arcot", slug: "arcot", district: "Ranipet", distance_from_hospital: "25 km", address: "Arcot, Ranipet, Tamil Nadu", phone: "+919842342525" },
    { name: "Gudiyatham", slug: "gudiyatham", district: "Vellore", distance_from_hospital: "40 km", address: "Gudiyatham, Vellore, Tamil Nadu", phone: "+919842342525" },
    { name: "Walajapet", slug: "walajapet", district: "Vellore", distance_from_hospital: "18 km", address: "Walajapet, Vellore, Tamil Nadu", phone: "+919842342525" },
    { name: "Kanchipuram", slug: "kanchipuram", district: "Kanchipuram", distance_from_hospital: "70 km", address: "Kanchipuram, Tamil Nadu", phone: "+919842342525" },
    { name: "Salem", slug: "salem", district: "Salem", distance_from_hospital: "165 km", address: "Salem, Tamil Nadu", phone: "+919842342525" },
];

const pages = [
    { title: "About Us", slug: "about", content: "<h2>About Indira Super Speciality Hospital</h2><p>Indira Super Speciality Hospital is a leading multi-speciality hospital in Vellore, Tamil Nadu. Founded by Dr. P. Shankar, the hospital has grown into a 100+ bed facility offering advanced medical care across 10+ departments with 25+ expert doctors.</p><p>Our mission is to provide world-class, affordable healthcare to the people of Vellore and surrounding districts. We are committed to clinical excellence, compassionate care, and cutting-edge medical technology.</p><h3>Our Facilities</h3><ul><li>Advanced Cath Lab for cardiac procedures</li><li>State-of-the-art ICU with ventilators</li><li>Modern Operation Theatres</li><li>24/7 Emergency Department</li><li>Fully equipped Dialysis Unit</li><li>Digital X-ray, CT Scan, Ultrasound</li></ul>", seo_title: "About Indira Super Speciality Hospital Vellore", seo_description: "Learn about Indira Super Speciality Hospital — Vellore's trusted multi-speciality hospital with 25+ doctors, advanced Cath Lab, and 24/7 emergency care." },
    { title: "Contact Us", slug: "contact", content: "<h2>Contact Indira Super Speciality Hospital</h2><p><strong>Address:</strong> Katpadi Road, Vellore, Tamil Nadu 632004</p><p><strong>Phone:</strong> +91 98423 42525</p><p><strong>WhatsApp:</strong> +91 70106 50063</p><p><strong>Email:</strong> info@indirahospital.com</p><h3>OPD Timings</h3><p>Monday – Saturday: 9:00 AM – 1:00 PM, 4:00 PM – 8:00 PM</p><p>Sunday: By prior appointment</p><p>Emergency: 24/7</p>", seo_title: "Contact Indira Super Speciality Hospital Vellore", seo_description: "Contact Indira Hospital Vellore — call +91 98423 42525 or WhatsApp +91 70106 50063. Located on Katpadi Road. 24/7 emergency services available." },
    { title: "Privacy Policy", slug: "privacy-policy", content: "<h2>Privacy Policy</h2><p>Indira Super Speciality Hospital is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.</p><p>We collect personal information only when voluntarily submitted for appointment booking, health inquiries, or feedback. All medical records are kept strictly confidential in compliance with applicable laws.</p>", seo_title: "Privacy Policy — Indira Hospital", seo_description: "Privacy policy for Indira Super Speciality Hospital website and services." },
];

// =============================================
// SEED FUNCTIONS
// =============================================

async function seedCollection(collectionName: string, items: any[], slugField = 'slug') {
    console.log(`\n--- Seeding ${collectionName} ---`);
    let created = 0, skipped = 0, failed = 0;

    for (const item of items) {
        try {
            const filterField = slugField;
            const filterValue = (item as any)[filterField];
            if (!filterValue) {
                console.log(`  ⚠️  Skipping item with no ${filterField}`);
                skipped++;
                continue;
            }

            const existing = await client.request(readItems(collectionName as any, {
                filter: { [filterField]: { _eq: filterValue } } as any,
                limit: 1,
            }));

            if ((existing as any[]).length > 0) {
                console.log(`  ⏭️  ${(item as any).name || (item as any).title || (item as any).patient_name || filterValue} (exists)`);
                skipped++;
            } else {
                await client.request(createItem(collectionName as any, {
                    status: 'published',
                    ...item,
                } as any));
                console.log(`  ✅ ${(item as any).name || (item as any).title || (item as any).patient_name || filterValue}`);
                created++;
            }
        } catch (err: any) {
            console.error(`  ❌ Failed: ${(item as any).name || (item as any).title || 'unknown'} — ${err.message}`);
            failed++;
        }
    }

    console.log(`  Summary: ${created} created, ${skipped} skipped, ${failed} failed`);
}

async function seedDoctorsWithDepartments() {
    console.log('\n--- Seeding Doctors (with department linking) ---');

    // Fetch all departments to map slugs → IDs
    const allDepts = await client.request(readItems('departments', { limit: -1 })) as any[];
    const deptMap = new Map(allDepts.map((d: any) => [d.slug, d.id]));

    let created = 0, skipped = 0, failed = 0;

    for (const doc of doctors) {
        try {
            const existing = await client.request(readItems('doctors' as any, {
                filter: { slug: { _eq: doc.slug } } as any,
                limit: 1,
            }));

            if ((existing as any[]).length > 0) {
                console.log(`  ⏭️  ${doc.name} (exists)`);
                skipped++;
                continue;
            }

            const deptId = deptMap.get(doc.department_slug) || null;
            const { department_slug, image, ...rest } = doc;

            await client.request(createItem('doctors' as any, {
                status: 'published',
                ...rest,
                department: deptId,
            } as any));
            console.log(`  ✅ ${doc.name} → dept: ${department_slug} (${deptId || 'unlinked'})`);
            created++;
        } catch (err: any) {
            console.error(`  ❌ Failed: ${doc.name} — ${err.message}`);
            failed++;
        }
    }

    console.log(`  Summary: ${created} created, ${skipped} skipped, ${failed} failed`);
}

async function seedServicesWithDepartments() {
    console.log('\n--- Seeding Services (with department linking) ---');

    const allDepts = await client.request(readItems('departments', { limit: -1 })) as any[];
    const deptMap = new Map(allDepts.map((d: any) => [d.slug, d.id]));

    let created = 0, skipped = 0, failed = 0;

    for (const svc of services) {
        try {
            const existing = await client.request(readItems('services' as any, {
                filter: { slug: { _eq: svc.slug } } as any,
                limit: 1,
            }));

            if ((existing as any[]).length > 0) {
                console.log(`  ⏭️  ${svc.title} (exists)`);
                skipped++;
                continue;
            }

            const deptId = deptMap.get(svc.department_slug) || null;
            const { department_slug, ...rest } = svc;

            await client.request(createItem('services' as any, {
                status: 'published',
                ...rest,
                department: deptId,
            } as any));
            console.log(`  ✅ ${svc.title} → dept: ${department_slug} (${deptId || 'unlinked'})`);
            created++;
        } catch (err: any) {
            console.error(`  ❌ Failed: ${svc.title} — ${err.message}`);
            failed++;
        }
    }

    console.log(`  Summary: ${created} created, ${skipped} skipped, ${failed} failed`);
}

async function seedTestimonials() {
    console.log('\n--- Seeding Testimonials ---');
    let created = 0, skipped = 0, failed = 0;

    for (const t of testimonials) {
        try {
            const existing = await client.request(readItems('testimonials' as any, {
                filter: { patient_name: { _eq: t.patient_name } } as any,
                limit: 1,
            }));

            if ((existing as any[]).length > 0) {
                console.log(`  ⏭️  ${t.patient_name} (exists)`);
                skipped++;
            } else {
                await client.request(createItem('testimonials' as any, {
                    status: 'published',
                    ...t,
                } as any));
                console.log(`  ✅ ${t.patient_name}`);
                created++;
            }
        } catch (err: any) {
            console.error(`  ❌ Failed: ${t.patient_name} — ${err.message}`);
            failed++;
        }
    }
    console.log(`  Summary: ${created} created, ${skipped} skipped, ${failed} failed`);
}

async function seedFAQs() {
    console.log('\n--- Seeding FAQs ---');
    let created = 0, skipped = 0, failed = 0;

    for (const faq of faqs) {
        try {
            const existing = await client.request(readItems('faqs' as any, {
                filter: { question: { _eq: faq.question } } as any,
                limit: 1,
            }));

            if ((existing as any[]).length > 0) {
                console.log(`  ⏭️  "${faq.question.substring(0, 50)}..." (exists)`);
                skipped++;
            } else {
                await client.request(createItem('faqs' as any, {
                    status: 'published',
                    ...faq,
                } as any));
                console.log(`  ✅ "${faq.question.substring(0, 50)}..."`);
                created++;
            }
        } catch (err: any) {
            console.error(`  ❌ Failed FAQ — ${err.message}`);
            failed++;
        }
    }
    console.log(`  Summary: ${created} created, ${skipped} skipped, ${failed} failed`);
}

// =============================================
// MAIN
// =============================================

async function main() {
    console.log(`🌱 Seeding ALL Directus Collections at ${DIRECTUS_URL}`);
    console.log('='.repeat(60));

    // 1. Departments (must be first — doctors & services reference them)
    await seedCollection('departments', departments);

    // 2. Doctors (linked to departments)
    await seedDoctorsWithDepartments();

    // 3. Services (linked to departments)
    await seedServicesWithDepartments();

    // 4. FAQs
    await seedFAQs();

    // 5. Testimonials
    await seedTestimonials();

    // 6. Health Packages
    await seedCollection('health_packages', healthPackages, 'title');

    // 7. Insurances
    await seedCollection('insurances', insurances, 'name');

    // 8. Locations
    await seedCollection('locations', locations);

    // 9. Pages
    await seedCollection('pages', pages);

    console.log('\n' + '='.repeat(60));
    console.log('✨ All collections seeded!');
}

main().catch(console.error);

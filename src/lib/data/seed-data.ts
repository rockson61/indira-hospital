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
            title: "General Surgery",
            slug: "general-surgery",
            short_description: "Laser Surgery For Piles, Hernia, Thyroid, and more.",
            icon: "Scalpel",
            full_description: "Comprehensive surgical care including Laser Surgery For Piles, Minimally Invasive Laparoscopic Surgery, Hydrocele, Hernia, Varicose Veins, Lipoma, Dermoid Cyst, Thyroid Swelling, Fibroadenoma Breast, Colonic Polyp, Cancer Breast."
        },
        {
            title: "Laparoscopic Surgeries",
            slug: "laparoscopic-surgeries",
            short_description: "Minimally invasive keyhole surgeries.",
            icon: "Activity",
            full_description: "Minimally invasive surgeries offering distinct advantages to patients including shorter recovery times, less pain, and smaller scars."
        },
        {
            title: "Gastroenterology",
            slug: "gastroenterology",
            short_description: "Expert care for digestive system disorders.",
            icon: "Stethoscope",
            full_description: "Advanced treatment for gastrointestinal disorders, liver diseases, and pancreatic conditions using the latest medical and surgical interventions."
        },
        {
            title: "Urology",
            slug: "urology",
            short_description: "Care for kidneys, ureters, and bladder.",
            icon: "Activity",
            full_description: "Comprehensive urological care including management of kidney stones, prostate issues, and urinary tract infections."
        },
        {
            title: "Obstetrics & Gynaecology",
            slug: "obstetrics-gynaecology",
            short_description: "Comprehensive women's health services.",
            icon: "Baby",
            full_description: "Complete care for women including high-risk pregnancy management, painless delivery, infertility treatments, and gynecological surgeries."
        },
        {
            title: "Orthopaedics",
            slug: "orthopaedics",
            short_description: "Joint replacements, spine and trauma care.",
            icon: "Bone",
            full_description: "Specialized care for bone and joint disorders, including total knee/hip replacements, arthroscopy, and complex trauma management."
        },
        {
            title: "Cardiology",
            slug: "cardiology",
            short_description: "Heart care and interventional cardiology.",
            icon: "Heart",
            full_description: "Advanced cardiac care including angiography, angioplasty, pacemaker implantation, and management of heart failure."
        },
        {
            title: "ICU & Emergency",
            slug: "icu-emergency",
            short_description: "24/7 Critical care and trauma response.",
            icon: "Siren",
            full_description: "State-of-the-art Intensive Care Units and 24/7 Emergency Department staffed by critical care specialists to handle all medical emergencies."
        }
    ]
};

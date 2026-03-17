import { DOCTORS_DATA } from "@/config/constants";

export interface Doctor {
    id: string;
    name: string;
    slug: string;
    specialty: string;
    departmentId: string;
    experience: number;
    education: string[];
    imageUrl: string;
    availability: string[];
    bio: string;
    specialties?: string[];
    procedures?: string[];
    years_of_experience?: number;
}

export const doctors: readonly Doctor[] = [
    {
        id: "dr-gayathri",
        name: "Dr. Gayathri",
        slug: "dr-gayathri",
        specialty: "Consultant – ENT, Head & Neck Surgery",
        departmentId: "ent",
        experience: 8,
        education: ["MBBS", "MS (ENT)"],
        imageUrl: "/images/doctors/dr-gayathri.png",
        availability: ["Mon", "Wed", "Fri"],
        bio: "Dr. Gayathri is a trained ENT surgeon specializing in minimally invasive endoscopic sinus surgery and thyroid disorders, providing advanced care for ear, nose, and throat conditions.",
    },
    {
        id: "dr-praharshitha-sagiraju",
        name: "Dr. Praharshitha Sagiraju",
        slug: "dr-praharshitha-sagiraju",
        specialty: "Obstetrician & Gynaecologist",
        departmentId: "obstetrics-gynaecology",
        experience: 5,
        education: ["MBBS", "MS (OBGY)", "DNB", "FMAS"],
        imageUrl: "/images/doctors/dr-praharshitha.png",
        availability: ["Tue", "Thu", "Sat"],
        bio: "Dr. Praharshitha Sagiraju is an AIIMS-trained OBGYN specialist focusing on high-risk pregnancy and laparoscopic gynecological procedures, ensuring modern care for women's health.",
    },
    {
        id: "dr-karan-shankar",
        name: "Dr. Karan Shankar",
        slug: "dr-karan-shankar",
        specialty: "General Surgeon | Laparoscopic, Gastrointestinal & Colorectal Surgeon",
        departmentId: "general-surgery",
        experience: 12,
        education: ["MBBS", "MS (General Surgery)", "FIAGES", "FMAS", "DMAS (WALS)", "FAGIE"],
        imageUrl: "/images/doctors/dr-karan-shankar.png",
        availability: ["Daily"],
        bio: "As the Executive Director of Indira Super Speciality Hospital & Clinical Lead of Indira Laser & Laparoscopy Centre in Vellore, Tamil Nadu, Dr. Karan Shankar leads a team dedicated towards providing exceptional multidisciplinary healthcare services. With extensive expertise as a General Surgeon, specializing in Advanced Laparoscopic and Colorectal surgeries, he is committed to advancing the standards of surgical healthcare in the community for delivering precise, patient-centric treatments.",
        specialties: ["Laparoscopic Surgery", "Proctology", "General Surgery", "Colorectal Surgery"],
        procedures: [
            "Laparoscopic Hernia Repair",
            "Laparoscopic Gallbladder (Cholecystectomy)",
            "Laparoscopic Appendix",
            "Laser Piles (Hemorrhoids)",
            "Laser Fistula (FiLaC)",
            "Laser Fissure",
            "Stapler Circumcision"
        ],
    },
    {
        id: "dr-shankar",
        name: "Dr. P. Shankar",
        slug: "dr-p-shankar",
        specialty: "Chairman & HOD - General Surgery | Top Proctologist in India",
        departmentId: "general-surgery",
        experience: 30,
        education: ["MBBS", "MS - General Surgery"],
        imageUrl: "/images/doctors/dr-shankar.jpg",
        availability: ["Mon-Sat"],
        bio: "Dr. P. Shankar is the esteemed Chairman of Indira Hospital and is widely recognized as the best proctologist in India and Tamil Nadu. A veteran General Surgeon with over 30 years of clinical and administrative excellence, he specializes in advanced Proctology (Laser Piles, Laser Fistula, Fissure), Laparoscopic Surgery (Hernia, Gallbladder, Appendix), and Surgical Gastroenterology. His expertise also extends to Diabetic Foot Care and complex General Surgical procedures. Under his leadership, Indira Hospital has become a center of excellence for minimally invasive and day-care surgeries, ensuring world-class healthcare delivery with a focus on patient safety and rapid recovery.",
        years_of_experience: 30,
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
    },
    {
        id: "dr-soniya-shankar",
        name: "Dr. Soniya Shankar",
        slug: "dr-soniya-shankar",
        specialty: "Chief Executive Officer & Healthcare Administrator",
        departmentId: "administration",
        experience: 12,
        education: ["MBA in Hospital Management (BITS Pilani)"],
        imageUrl: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/10/images.jpg",
        availability: ["By Appointment"],
        bio: "Dr. Soniya Shankar, the CEO of Indira Hospital, leads with a vision of compassionate, patient-centric healthcare. Under her leadership, the hospital has achieved significant milestones in quality standards and infrastructure expansion, ensuring ethical and excellence-driven medical services for the region.",
    },
    {
        id: "dr-srinivasan-karbar",
        name: "Dr. Srinivasan Karbar",
        slug: "dr-srinivasan-karbar",
        specialty: "Emergency Medicine Specialist",
        departmentId: "emergency-services",
        experience: 10,
        education: [
            "MRCEM Part A (Royal College Of Emergency Medicine, UK), 2024",
            "GWU MEM (Global Hospital Chennai), 2017",
            "MBBS (Kempegowda Institute of Medical Sciences), 2012",
            "Fellowship in Neuro Emergencies (TICEM Madhurai)",
            "CCEBDM (PHFI India)",
            "PGDMLE (National Law School Bangalore, ongoing)"
        ],
        imageUrl: "/images/doctors/dr-jackson-p-john.jpg",
        availability: ["Mon-Sat"],
        bio: "Dr. Srinivasan Karbar is an experienced Emergency Medicine specialist with over 10 years of clinical experience. He currently serves as a consultant Emergency physician at Indira Super Speciality Hospital. He is actively involved in leading the emergency team, mentoring junior doctors, and ensuring the delivery of high-quality critical care. His expertise includes Trauma care, Acute pain management, Emergency procedures, and Ultrasonography.",
    },
    {
        id: "dr-jackson-p-john",
        name: "Dr. Jackson P John",
        slug: "dr-jackson-p-john",
        specialty: "Emergency Medicine Specialist",
        departmentId: "emergency-services",
        experience: 8,
        education: [
            "MBBS (D.Y Patil University Navi Mumbai)",
            "Master's in Emergency Medicine (Kokilaben Dhirubhai Ambani Hospital Mumbai)"
        ],
        imageUrl: "/images/doctors/dr-srinivasan-karbar.jpg",
        availability: ["Mon-Sat"],
        bio: "Dr. Jackson P John is an Emergency Medicine Specialist with over 8 years of experience. He previously worked in Oman Ministry of Health. He is well-versed in emergency procedures like airway management (Intubation & Resuscitation), IV access (Central Line, Arterial Line), and surgical & trauma management. Registration number: 2017051750.",
    }
];

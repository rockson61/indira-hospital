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
}

export const doctors: readonly Doctor[] = [
    {
        id: "dr-ar-ram",
        name: "Dr. A.R. Ram",
        slug: "dr-ar-ram",
        specialty: "Senior Consultant Cardiologist",
        departmentId: "cardiology",
        experience: 20,
        education: ["MBBS", "MD", "DM (Cardiology)"],
        imageUrl: DOCTORS_DATA.PLACEHOLDER_IMAGE,
        availability: ["Monday", "Wednesday", "Friday"],
        bio: "Dr. A.R. Ram is a senior interventional cardiologist at Indira Hospital with over 20 years of experience, specializing in complex angioplasties and managing critical cardiac emergencies.",
    },
    {
        id: "dr-s-kumar",
        name: "Dr. S. Kumar",
        slug: "dr-s-kumar",
        specialty: "Senior Consultant Neurologist",
        departmentId: "neurology",
        experience: 15,
        education: ["MBBS", "MD", "DM (Neurology)"],
        imageUrl: DOCTORS_DATA.PLACEHOLDER_IMAGE,
        availability: ["Tuesday", "Thursday", "Saturday"],
        bio: "Dr. S. Kumar is a leading neurologist specializing in stroke management, epilepsy, and neuro-rehabilitation, providing evidence-based care for complex neurological disorders.",
    },
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
    },
    {
        id: "dr-shankar",
        name: "Dr. P. Shankar",
        slug: "dr-p-shankar",
        specialty: "Chairman & General Surgeon",
        departmentId: "general-surgery",
        experience: 30,
        education: ["MBBS", "MS - General Surgery"],
        imageUrl: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/Dr-Shankar-1-1.jpeg",
        availability: ["Mon-Sat"],
        bio: "Dr. P. Shankar is the esteemed Chairman of Indira Hospital. A veteran General Surgeon with over 30 years of clinical and administrative excellence.",
    },
    {
        id: "dr-raman-kumar",
        name: "Dr. G. Raman Kumar",
        slug: "dr-g-raman-kumar",
        specialty: "Consultant Orthopaedic Surgeon",
        departmentId: "orthopaedics",
        experience: 15,
        education: ["MBBS", "MS (Ortho)"],
        imageUrl: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/05/ram-1.jpg",
        availability: ["Mon-Sat"],
        bio: "Dr. G. Raman Kumar is a distinguished Orthopaedic Surgeon specializing in complex trauma care and joint replacement surgeries with 15 years of experience.",
    },
    {
        id: "dr-ashok-kumar",
        name: "Dr. Ashok Kumar",
        slug: "dr-ashok-kumar",
        specialty: "Consultant Spine Surgeon",
        departmentId: "spine-surgery",
        experience: 12,
        education: ["MBBS", "MS (Ortho)", "FNB (Spine Surgery)"],
        imageUrl: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/Shankar.jpg",
        availability: ["Mon-Fri"],
        bio: "Dr. Ashok Kumar is a highly skilled Spine Surgeon dedicated to treating complex spinal deformities and injuries specializing in minimally invasive spine surgery.",
    },
    {
        id: "dr-salomon",
        name: "Dr. Salomon",
        slug: "dr-salomon",
        specialty: "Consultant General & Laparoscopic Surgeon",
        departmentId: "general-surgery",
        experience: 10,
        education: ["MBBS", "MS (General Surgery)"],
        imageUrl: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/10/dummy-image-1.jpg",
        availability: ["Mon-Sat"],
        bio: "Dr. Salomon is a dedicated General Surgeon with a strong focus on minimal access techniques and laparoscopic procedures.",
    },
    {
        id: "dr-latha-lakshmi",
        name: "Dr. Latha Lakshmi",
        slug: "dr-latha-lakshmi",
        specialty: "Consultant Obstetrician & Gynaecologist",
        departmentId: "obstetrics-gynaecology",
        experience: 20,
        education: ["MBBS", "DGO", "MS (OG)"],
        imageUrl: "https://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/dr-Latha.jpg",
        availability: ["Mon-Sat"],
        bio: "Dr. Latha Lakshmi is a senior Consultant Obstetrician and Gynaecologist with two decades of experience in high-risk pregnancy and infertility.",
    },
    {
        id: "dr-saravanan",
        name: "Dr. PL. Saravanan",
        slug: "dr-pl-saravanan",
        specialty: "Consultant Cardiologist",
        departmentId: "cardiology",
        experience: 14,
        education: ["MBBS", "MD", "DM (Cardio)"],
        imageUrl: "http://www.indirasuperspecialityhospital.com/jb-content/uploads/2022/05/sar-300x300.jpg",
        availability: ["Mon-Sat"],
        bio: "Dr. PL. Saravanan is a senior cardiologist specializing in interventional cardiology and cardiac emergencies.",
    }
];

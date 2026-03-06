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
        id: "1",
        name: "Dr. A.R. Ram",
        slug: "dr-ar-ram",
        specialty: "Senior Cardiologist",
        departmentId: "cardiology",
        experience: 20,
        education: ["MBBS", "MD", "DM (Cardiology)"],
        imageUrl: DOCTORS_DATA.PLACEHOLDER_IMAGE,
        availability: ["Monday", "Wednesday", "Friday"],
        bio: "Dr. A.R. Ram is a highly experienced cardiologist specializing in interventional cardiology and advanced heart failure management.",
    },
    {
        id: "2",
        name: "Dr. S. Kumar",
        slug: "dr-s-kumar",
        specialty: "Chief Neurologist",
        departmentId: "neurology",
        experience: 15,
        education: ["MBBS", "MD", "DM (Neurology)"],
        imageUrl: DOCTORS_DATA.PLACEHOLDER_IMAGE,
        availability: ["Tuesday", "Thursday", "Saturday"],
        bio: "Expert in neuro-immunology and stroke management with over 15 years of dedicated patient care.",
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
        bio: "Dr. Gayathri is a trained ENT and Head & Neck surgeon with expertise in the diagnosis and surgical management of a wide spectrum of ear, nose, throat, and thyroid disorders.",
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
        bio: "Dr. Praharshitha Sagiraju is a highly qualified Obstetrician and Gynaecologist with a specialization in Minimal Access Surgery and Gynaecological Endoscopy.",
    },
    {
        id: "dr-karan-shankar",
        name: "Dr. Karan Shankar",
        slug: "dr-karan-shankar",
        specialty: "General Surgeon",
        departmentId: "general-surgery",
        experience: 8,
        education: ["MBBS", "MS - General Surgery", "FIAGES"],
        imageUrl: "/images/doctors/dr-karan-shankar.png",
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        bio: "Dr. Karan Shankar is a dedicated General Surgeon with over 8 years of experience, specializing in advanced laparoscopic and laser surgeries.",
    }
];

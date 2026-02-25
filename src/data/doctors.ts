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
    }
] as const;

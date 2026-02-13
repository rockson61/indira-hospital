import { Award, GraduationCap, Calendar, Users } from "lucide-react"

export const achievements = [
    { icon: GraduationCap, label: "BDS Degree", value: "Bachelor of Dental Surgery" },
    { icon: Calendar, label: "Experience", value: "15+ Years" },
    { icon: Users, label: "Patients Treated", value: "5000+" },
    { icon: Award, label: "Success Rate", value: "98%" },
]

export const specializations = [
    "Root Canal Treatment",
    "Dental Implants",
    "Orthodontics & Braces",
    "Cosmetic Dentistry",
    "Periodontal Surgery",
    "General Dentistry",
]

export const doctors = [
    {
        name: "Dr. Rockson Samuel",
        role: "Lead Dentist",
        title: "General Dentist & Implantologist",
        qualifications: "BDS, PgDM, BDM",
        experience: "15+ Years",
        patients: "5000+",
        rating: 4.9,
        reviews: 500,
        image: "/Dentist-near-you-Dr-Rockson-Samuel.jpg", // Updated to the specific image used in DoctorSection
        email: "dr.rockson@indiradental.com",
        phone: "7010650063",
        status: "Active",
        specialization: "General Dentistry & Implants",
        department: "Dental Surgery",
        description: "Dr. Rockson Samuel is a leading dentist and orthodontist in Vellore, with over 15 years of experience in providing top-quality dental care. Specializing in Invisalign and clear braces, Dr. Samuel has transformed countless smiles in Vellore and the surrounding areas.",
        bio: [
            "Dr. Rockson Samuel is a leading dentist and orthodontist in Vellore, with over 15 years of experience in providing top-quality dental care. Specializing in Invisalign and clear braces, Dr. Samuel has transformed countless smiles in Vellore and the surrounding areas.",
            "As a certified Invisalign provider and clear braces expert, Dr. Samuel combines his extensive knowledge with cutting-edge technology to deliver personalized orthodontic treatments. His commitment to continuing education ensures that patients in Vellore receive the most advanced and effective orthodontic care available.",
            "Dr. Samuel's patient-centric approach and gentle demeanor have earned him a reputation as one of Vellore's most trusted dental professionals, particularly in the field of invisible orthodontics."
        ]
    }
]

export const clinicStats = {
    trustScore: "5.00",
    totalReviews: 39,
    skillEndorsements: 10
}

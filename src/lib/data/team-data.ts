import { Award, GraduationCap, Calendar, Users, Heart, Activity } from "lucide-react"

export const achievements = [
    { icon: GraduationCap, label: "Specialties", value: "15+ Super Specialities" },
    { icon: Calendar, label: "Legacy", value: "25+ Years of Care" },
    { icon: Users, label: "Patients Treated", value: "1 Lakh+" },
    { icon: Award, label: "Success Rate", value: "99% in Surgeries" },
]

export const specializations = [
    "General & Laparoscopic Surgery",
    "Interventional Cardiology",
    "Orthopaedics & Joint Replacement",
    "Obstetrics & Gynaecology",
    "Nephrology & Dialysis",
    "Pediatrics & Neonatology",
    "Emergency & Trauma Care",
]

export const doctors: any[] = [
    // Add new hospital doctors here if needed for specific widgets
];

export const clinicStats = {
    trustScore: "4.9",
    totalReviews: 1250,
    skillEndorsements: 45
}

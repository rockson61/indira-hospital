import { Award, GraduationCap, Calendar, Users } from "lucide-react"
import { Heart, HeartCardiogram } from "healthicons-react/outline";

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

export interface TeamMember {
 name: string;
 email?: string;
 role: string;
 department: string;
 specialization: string;
 status: "Active" | "On Call" | "Leave";
 image?: string;
}

export const doctors: TeamMember[] = [
 // Add new hospital doctors here if needed for specific widgets
];

export const clinicStats = {
 trustScore: "4.9",
 totalReviews: 1250,
 skillEndorsements: 45
}

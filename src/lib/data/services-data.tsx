import {
    Shield,
    Smile,
    Zap,
    Heart,
    Baby,
    Stethoscope,
    Sparkles,
    Activity,
    Activity as Lung,
    ClipboardCheck
} from "lucide-react";

export interface ServiceData {
    id: string;
    title: string;
    description: string;
    icon: any;
    image: string;
    href: string;
    price?: string;
    features?: string[];
    popular?: boolean;
    duration?: string;
}

export const servicesData: ServiceData[] = [
    {
        id: "general-surgery",
        title: "General & Laparoscopic Surgery",
        description: "Advanced minimally invasive procedures for hernia, gallbladder, and laser treatment for piles/fistula.",
        icon: Zap,
        image: "/hero-hospital.png",
        href: "/departments/general-surgery",
        features: ["Laser Piles Treatment", "Laparoscopic Hernia Repair", "Appendix Removal", "Breast Surgery"],
        popular: true,
    },
    {
        id: "orthopaedics",
        title: "Orthopaedics & Joint Replacement",
        description: "Expert care for bone and joint issues, including total knee and hip replacements.",
        icon: Activity,
        image: "/hero-hospital.png",
        href: "/departments/orthopaedics",
        features: ["Knee Replacement", "Hip Replacement", "Fracture Management", "Spine Surgery"],
        popular: true,
    },
    {
        id: "cardiology",
        title: "Interventional Cardiology",
        description: "24/7 cardiac emergency care with advanced Cath Lab for Angioplasty and Stenting.",
        icon: Heart,
        image: "/hero-hospital.png",
        href: "/departments/cardiology",
        features: ["Angioplasty", "Echocardiography", "Pacemaker", "TMT / ECG"],
        popular: true,
    },
    {
        id: "obstetrics-gynaecology",
        title: "Obstetrics & Gynaecology",
        description: "Comprehensive women's healthcare, from maternity to advanced gynaecological surgeries.",
        icon: Baby,
        image: "/hero-hospital.png",
        href: "/departments/obstetrics-gynaecology",
        features: ["Painless Delivery", "High-Risk Pregnancy", "Laparoscopic Gynaecology", "Infertility"],
    },
    {
        id: "nephrology",
        title: "Nephrology & Dialysis",
        description: "Dedicated dialysis unit and expert management of chronic kidney diseases.",
        icon: Shield,
        image: "/hero-hospital.png",
        href: "/departments/nephrology",
        features: ["24/7 Dialysis", "CKD Management", "Kidney Stones", "Hypertension"],
    },
    {
        id: "diagnostics",
        title: "Advanced Diagnostics",
        description: "Fully automated NABL accredited lab and imaging center (MRI, CT, Ultrasound).",
        icon: ClipboardCheck,
        image: "/hero-hospital.png",
        href: "/diagnostics",
        features: ["3T MRI", "128-Slice CT", "Ultrasound", "Digital X-Ray"],
    },
    {
        id: "dentistry",
        title: "Maxillofacial & Dentistry",
        description: "Specialized oral and maxillofacial surgery, implants, and orthodontics.",
        icon: Sparkles,
        image: "/hero-hospital.png",
        href: "/departments/dentistry",
        features: ["Maxillofacial Surgery", "Dental Implants", "Orthodontics", "Root Canal"],
    }
];

export const bookingServices = [
    { value: "general-consultation", label: "General Physician Consultation", duration: "15-30 min" },
    { value: "surgery-consultation", label: "General / Laparoscopic Surgery Consultation", duration: "30 min" },
    { value: "ortho-consultation", label: "Orthopaedics Consultation", duration: "30 min" },
    { value: "cardio-consultation", label: "Cardiology Consultation", duration: "30 min" },
    { value: "gynaecology-consultation", label: "Gynaecology Consultation", duration: "30 min" },
    { value: "diagnostics", label: "Lab Tests / Imaging (MRI/CT)", duration: "Variable" },
    { value: "health-package", label: "Health Checkup Package", duration: "2-4 hours" },
    { value: "dialysis", label: "Dialysis Session", duration: "4 hours" },
    { value: "emergency", label: "Emergency / Trauma Care", duration: "Immediate" },
    { value: "other", label: "Other (Please specify in message)", duration: "Variable" },
];

import { Sparkles, ClipboardCheck, Shield } from "lucide-react";
import { Happy, Electricity, Heart, Baby0203m, Stethoscope, HeartCardiogram } from "healthicons-react/outline";

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
 description: "Laser piles, laparoscopic hernia, gallbladder removal — same-day discharge, half the metro cost. 15,000+ surgeries done.",
 icon: Electricity,
 image: "/hero-hospital.png",
 href: "/departments/general-surgery",
 features: ["Laser Piles Treatment", "Laparoscopic Hernia Repair", "Appendix Removal", "Breast Surgery"],
 popular: true,
 },
 {
 id: "orthopaedics",
 title: "Orthopaedics & Joint Replacement",
 description: "Walking pain-free again starts here. Total knee & hip replacement by surgeons with 1,000+ joint replacements each.",
 icon: HeartCardiogram,
 image: "/hero-hospital.png",
 href: "/departments/orthopaedics",
 features: ["Knee Replacement", "Hip Replacement", "Fracture Management", "Spine Surgery"],
 popular: true,
 },
 {
 id: "cardiology",
 title: "Interventional Cardiology",
 description: "Chest pain? Don&apos;t wait. 24/7 Cath Lab with < 30 min door-to-balloon time. Angioplasty, stenting & pacemakers by India&apos;s best.",
 icon: Heart,
 image: "/hero-hospital.png",
 href: "/departments/cardiology",
 features: ["Angioplasty", "Echocardiography", "Pacemaker", "TMT / ECG"],
 popular: true,
 },
 {
 id: "obstetrics-gynaecology",
 title: "Obstetrics & Gynaecology",
 description: "Painless delivery, high-risk pregnancy care, and laparoscopic gynaecology — because every mother deserves the safest hands.",
 icon: Baby0203m,
 image: "/hero-hospital.png",
 href: "/departments/obstetrics-gynaecology",
 features: ["Painless Delivery", "High-Risk Pregnancy", "Laparoscopic Gynaecology", "Infertility"],
 },
 {
 id: "nephrology",
 title: "Nephrology & Dialysis",
 description: "24/7 dialysis. Kidney stones removed in 45 minutes. CKD managed before it&apos;s too late. Don&apos;t delay — your kidneys can&apos;t wait.",
 icon: Shield,
 image: "/hero-hospital.png",
 href: "/departments/nephrology",
 features: ["24/7 Dialysis", "CKD Management", "Kidney Stones", "Hypertension"],
 },
 {
 id: "diagnostics",
 title: "Advanced Diagnostics",
 description: "NABL accredited. 3T MRI, 128-slice CT, digital X-ray — reports in under 12 hours. Stop guessing, get diagnosed today.",
 icon: ClipboardCheck,
 image: "/hero-hospital.png",
 href: "/diagnostics",
 features: ["3T MRI", "128-Slice CT", "Ultrasound", "Digital X-Ray"],
 },
 {
 id: "oncology",
 title: "Medical & Surgical Oncology",
 description: "Cancer doesn&apos;t wait, and neither should you. Chemotherapy, targeted therapy & tumour removal under one NABH-accredited roof.",
 icon: Sparkles,
 image: "/hero-hospital.png",
 href: "/departments/oncology",
 features: ["Chemotherapy", "Surgical Oncology", "Cancer Screening", "Palliative Care"],
 }
];

export const bookingServices = [
 { value: "general-consultation", label: "General Physician Consultation", duration: "15-30 min" },
 { value: "surgery-consultation", label: "Surgery Consultation (Free Cost Estimate)", duration: "30 min" },
 { value: "ortho-consultation", label: "Orthopaedics Consultation", duration: "30 min" },
 { value: "cardio-consultation", label: "Cardiology Consultation", duration: "30 min" },
 { value: "gynaecology-consultation", label: "Gynaecology Consultation", duration: "30 min" },
 { value: "diagnostics", label: "Lab Tests / Imaging (MRI/CT)", duration: "Variable" },
 { value: "health-package", label: "Health Checkup Package", duration: "2-4 hours" },
 { value: "dialysis", label: "Dialysis Session", duration: "4 hours" },
 { value: "emergency", label: "Emergency / Trauma Care", duration: "Immediate" },
 { value: "other", label: "Other (Please specify in message)", duration: "Variable" },
];

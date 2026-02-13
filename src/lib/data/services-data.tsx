import {
    Shield,
    Smile,
    Zap,
    Heart,
    Baby,
    Stethoscope,
    Sparkles,
    Drill,
    Crown,
    Bluetooth as Tooth
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
        id: "root-canal",
        title: "Root Canal Treatment",
        description: "Pain-free RCT with advanced techniques. Single sitting & multi-visit options available.",
        icon: Drill,
        image: "/dental-clinic-vellore.jpg",
        href: "/services/root-canal-treatment",
        price: "₹3,000 - ₹8,000",
        features: ["Single Sitting RCT", "Painless Procedure", "Digital X-Ray", "Crown Included"],
        popular: true,
        duration: "1-2 hours",
    },
    {
        id: "dental-implants",
        title: "Dental Implants",
        description: "Permanent tooth replacement with titanium implants. Lifetime warranty available.",
        icon: Shield,
        image: "/dental-clinic-vellore.jpg",
        href: "/services/dental-implants",
        price: "₹25,000 - ₹45,000",
        features: ["Titanium Implants", "Lifetime Warranty", "Natural Look", "Bone Grafting"],
        duration: "3-6 months",
    },
    {
        id: "cosmetic-dentistry",
        title: "Cosmetic Dentistry",
        description: "Transform your smile with veneers, whitening, and smile makeovers.",
        icon: Sparkles,
        image: "/dental-clinic-vellore.jpg",
        href: "/services/cosmetic-dentistry",
        price: "₹5,000 - ₹25,000",
        features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Bonding"],
        duration: "1-3 visits",
    },
    {
        id: "orthodontics",
        title: "Orthodontics & Braces",
        description: "Align your teeth perfectly with braces or aligners.",
        icon: Smile,
        image: "/dental-clinic-vellore.jpg",
        href: "/services/orthodontics",
        price: "₹30,000 - ₹80,000",
        features: ["Metal Braces", "Ceramic Braces", "Invisalign", "Retainers"],
        duration: "12-24 months",
    },
    {
        id: "general-dentistry",
        title: "General Dentistry",
        description: "Comprehensive check-ups and improved oral health.",
        icon: Stethoscope,
        image: "/dental-clinic-vellore.jpg",
        href: "/services/general-dentistry",
        price: "₹500 - ₹5,000",
        features: ["Regular Check-ups", "Dental Cleaning", "Fillings", "Extractions"],
        duration: "30-60 mins",
    },
    {
        id: "pediatric-dentistry",
        title: "Pediatric Dentistry",
        description: "Specialized dental care for children in a friendly, comfortable environment.",
        icon: Baby,
        image: "/dental-clinic-vellore.jpg",
        href: "/services/pediatric-dentistry",
        price: "₹800 - ₹3,000",
        features: ["Child-Friendly Care", "Preventive Treatment", "Fluoride Application", "Sealants"],
        duration: "30-45 mins",
    },
    {
        id: "periodontics",
        title: "Periodontics",
        description: "Expert gum care and treatment for periodontal diseases.",
        icon: Crown,
        image: "/dental-clinic-vellore.jpg",
        href: "/services/periodontics",
        price: "₹1,000 - ₹15,000",
        features: ["Gum Surgery", "Deep Cleaning", "Laser Treatment", "Bone Graphs"],
        duration: "1-2 hours",
    }
];

export const bookingServices = [
    { value: "general-checkup", label: "General Dental Checkup", duration: "30 min" },
    { value: "teeth-cleaning", label: "Professional Teeth Cleaning", duration: "45 min" },
    { value: "dental-filling", label: "Dental Filling", duration: "60 min" },
    { value: "root-canal", label: "Root Canal Treatment", duration: "90 min" },
    { value: "dental-implant", label: "Dental Implant Consultation", duration: "45 min" },
    { value: "teeth-whitening", label: "Teeth Whitening", duration: "60 min" },
    { value: "braces-consultation", label: "Braces/Orthodontics Consultation", duration: "45 min" },
    { value: "wisdom-teeth", label: "Wisdom Teeth Removal", duration: "60 min" },
    { value: "cosmetic-dentistry", label: "Cosmetic Dentistry Consultation", duration: "30 min" },
    { value: "emergency-care", label: "Emergency Dental Care", duration: "30 min" },
    { value: "oral-surgery", label: "Oral Surgery Consultation", duration: "45 min" },
    { value: "pediatric-dentistry", label: "Pediatric Dentistry", duration: "30 min" },
    { value: "periodontics", label: "Gum Disease Treatment", duration: "60 min" },
    { value: "other", label: "Other (Please specify in message)", duration: "Variable" },
];

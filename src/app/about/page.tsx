import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
    title: "About Us | 35 Years of Clinical Excellence | Indira Super Speciality Hospital",
    description: "Established in 1988, Indira Super Speciality Hospital is the most trusted healthcare destination in Vellore, Tamil Nadu. Delivering advanced, ethical, and compassionate quaternary care.",
    keywords: ["best hospital in Vellore", "Indira Hospital history", "top multi-speciality hospital Tamil Nadu", "NABH accredited hospital Vellore"],
    openGraph: {
        title: "About Us | Indira Super Speciality Hospital",
        description: "35 Years of Trust and Clinical Mastery in Vellore.",
        type: "website",
    }
};

export default function AboutPage() {
    return (
        <>
            <JsonLdSchema type="hospital" />
            <AboutClient />
        </>
    );
}

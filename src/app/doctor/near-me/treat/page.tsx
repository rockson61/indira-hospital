import { Metadata } from "next";
import HealthLibraryClient from "./HealthLibraryClient";

export const metadata: Metadata = {
    title: "Health Library & Treatment Guides in Vellore, India | Indira Hospital",
    description: "Access comprehensive medical resources, symptom guides, and advanced treatment information at Indira Hospital Vellore. Expert healthcare insights from India's leading specialists.",
    keywords: ["Health Library", "Symptom Checker", "Medical Guides India", "Vellore Healthcare", "Treatment Information", "Indira Hospital"],
};

export default function HealthLibraryPage() {
    return <HealthLibraryClient />;
}

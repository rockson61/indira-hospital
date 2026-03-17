import { Metadata } from "next";
import HealthLibraryClient from "./HealthLibraryClient";

export const metadata: Metadata = {
    title: "Advanced Surgical Treatments & Medical Guides in Vellore | Indira Hospital",
    description: "Explore world-class surgical treatments including Laser Proctology, Laparoscopic Surgery, and specialized clinical care at Indira Hospital, Vellore. Comprehensive medical guides for patients.",
    keywords: ["Surgical Treatments Vellore", "Laser Piles Treatment India", "Laparoscopic Surgery Vellore", "Medical Guides", "Indira Hospital Treatments"],
};

export default function HealthLibraryPage() {
    return <HealthLibraryClient />;
}

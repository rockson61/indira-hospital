import { Metadata } from "next";
import VirtualTourClient from "@/components/interactive/VirtualTourClient";

export const metadata: Metadata = {
 title: "360° Virtual Tour | Experience Indira Super Speciality Ho...",
 description: "Take an immersive 360-degree virtual tour of Indira Super Speciality Hospital. Explore our advanced modular OTs, premium patient suites, and world-class...",
};

export default function VirtualTourPage() {
 return <VirtualTourClient />;
}

import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hospital Locations & Directions | Indira Hospital",
    description: "Find Indira Super Speciality Hospital locations and the areas we serve across Tamil Nadu.",
    alternates: {
        canonical: "/doctor/near-me"
    }
};

export default function LocationsRedirectPage() {
    // We redirect to the primary location page to prevent SEO duplicate content penalties
    // while fixing any legacy broken /locations links.
    redirect("/doctor/near-me");
}

import type { Metadata } from "next"

export const metadata: Metadata = {
 title: "Dr. Rockson Samuel - Chief Dentist & Implantologist | Indira Super Speciality Hospital",
 description:
 "Consult Dr. Rockson Samuel, Chief Dentist & Implantologist at Indira Super Speciality Hospital, Vellore. Specialist in dental implants, immediate-loading teeth replacement, and digital smile design.",
 alternates: {
 canonical: "/doctor/dentistry/dr-rockson-samuel",
 },
 openGraph: {
 title: "Dr. Rockson Samuel - Chief Dentist & Implantologist",
 description:
 "Specialist in dental implants, immediate-loading teeth replacement, and digital smile design at Indira Super Speciality Hospital, Vellore.",
 url: "/doctor/dentistry/dr-rockson-samuel",
 type: "profile",
 },
}

export default function Layout({ children }: { children: React.ReactNode }) {
 return children
}

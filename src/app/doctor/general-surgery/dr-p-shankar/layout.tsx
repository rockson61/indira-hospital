import type { Metadata } from "next"

export const metadata: Metadata = {
 title: "Dr. P. Shankar - Chairman & HOD, General Surgery | Indira Super Speciality Hospital",
 description:
 "Consult Dr. P. Shankar, Chairman & Head of General Surgery at Indira Super Speciality Hospital, Vellore. Leading proctologist in India specializing in laser proctology, laparoscopic and gastro surgery.",
 alternates: {
 canonical: "/doctor/general-surgery/dr-p-shankar",
 },
 openGraph: {
 title: "Dr. P. Shankar - Chairman & HOD, General Surgery",
 description:
 "Leading proctologist specializing in laser proctology, laparoscopic and gastro surgery at Indira Super Speciality Hospital, Vellore.",
 url: "/doctor/general-surgery/dr-p-shankar",
 type: "profile",
 },
}

export default function Layout({ children }: { children: React.ReactNode }) {
 return children
}

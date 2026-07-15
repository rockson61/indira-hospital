import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Soniya Shankar - CEO & Director, Patient Advocacy | Indira Super Speciality Hospital",
  description:
    "Meet Dr. Soniya Shankar, Chief Executive Officer and Director of Patient Advocacy & Quality at Indira Super Speciality Hospital, Vellore. Leading NABH-accredited multi-specialty patient care.",
  alternates: {
    canonical: "/doctor/administration/dr-soniya-shankar",
  },
  openGraph: {
    title: "Dr. Soniya Shankar - CEO & Director, Patient Advocacy",
    description:
      "Chief Executive Officer and Director of Patient Advocacy & Quality at Indira Super Speciality Hospital, Vellore.",
    url: "/doctor/administration/dr-soniya-shankar",
    type: "profile",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

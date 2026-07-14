import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "For Medical Professionals | Indira Super Speciality Hospital",
  description:
    "Careers, referrals, and clinical collaboration at Indira Super Speciality Hospital, Vellore. Join our NABH-accredited multi-specialty team or refer your patients for advanced tertiary care.",
  alternates: {
    canonical: "/professionals",
  },
  openGraph: {
    title: "For Medical Professionals",
    description:
      "Careers, referrals, and clinical collaboration at Indira Super Speciality Hospital, Vellore.",
    url: "/professionals",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

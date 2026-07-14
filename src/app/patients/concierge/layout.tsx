import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patient Concierge Services | Indira Super Speciality Hospital",
  description:
    "Personalized patient concierge services at Indira Super Speciality Hospital, Vellore — priority scheduling, treatment coordination, insurance assistance, and dedicated care support from admission to recovery.",
  alternates: {
    canonical: "/patients/concierge",
  },
  openGraph: {
    title: "Patient Concierge Services",
    description:
      "Priority scheduling, treatment coordination, insurance assistance, and dedicated care support at Indira Super Speciality Hospital, Vellore.",
    url: "/patients/concierge",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

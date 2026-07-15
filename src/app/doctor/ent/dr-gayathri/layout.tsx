import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Gayathri - ENT, Head & Neck Surgeon | Indira Super Speciality Hospital",
  description:
    "Consult Dr. Gayathri, Consultant ENT, Head & Neck Surgeon at Indira Super Speciality Hospital, Vellore. Specialist in FESS sinus surgery, micro-ear surgery, and 4K endoscopic ENT procedures.",
  alternates: {
    canonical: "/doctor/ent/dr-gayathri",
  },
  openGraph: {
    title: "Dr. Gayathri - ENT, Head & Neck Surgeon",
    description:
      "Specialist in FESS sinus surgery, micro-ear surgery, and 4K endoscopic ENT procedures at Indira Super Speciality Hospital, Vellore.",
    url: "/doctor/ent/dr-gayathri",
    type: "profile",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

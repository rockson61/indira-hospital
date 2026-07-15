import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Karan Shankar - Laser & Laparoscopic Surgeon | Indira Super Speciality Hospital",
  description:
    "Consult Dr. Karan Shankar, Clinical Lead of the Indira Laser & Laparoscopy Centre, Vellore. WALS Fellow specializing in 4K laparoscopic surgery, hernia repair, and laser proctology.",
  alternates: {
    canonical: "/doctor/general-surgery/dr-karan-shankar",
  },
  openGraph: {
    title: "Dr. Karan Shankar - Laser & Laparoscopic Surgeon",
    description:
      "WALS Fellow specializing in 4K laparoscopic surgery, hernia repair, and laser proctology at Indira Super Speciality Hospital, Vellore.",
    url: "/doctor/general-surgery/dr-karan-shankar",
    type: "profile",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

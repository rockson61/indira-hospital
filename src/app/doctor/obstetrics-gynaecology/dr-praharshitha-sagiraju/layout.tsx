import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Praharshitha Sagiraju - Obstetrics & Gynaecology | Indira Super Speciality Hospital",
  description:
    "Consult Dr. Praharshitha Sagiraju, AIIMS-trained Consultant in Obstetrics, Gynaecology & Fetal Medicine at Indira Super Speciality Hospital, Vellore. High-risk pregnancy and gynae-endoscopy specialist.",
  alternates: {
    canonical: "/doctor/obstetrics-gynaecology/dr-praharshitha-sagiraju",
  },
  openGraph: {
    title: "Dr. Praharshitha Sagiraju - Obstetrics & Gynaecology",
    description:
      "AIIMS-trained specialist in high-risk obstetrics, fetal medicine, and gynae-endoscopy at Indira Super Speciality Hospital, Vellore.",
    url: "/doctor/obstetrics-gynaecology/dr-praharshitha-sagiraju",
    type: "profile",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

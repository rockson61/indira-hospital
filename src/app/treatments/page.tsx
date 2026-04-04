import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { redirect } from "next/navigation"


export const metadata: Metadata = constructMetadata({
    title: "Treatments | Indira Super Speciality Hospital",
    description: "Learn more about treatments at Indira Hospital, Vellore's leading super-speciality center for advanced clinical care.",
    path: "/treatments"
});

export default function TreatmentsRedirect() {
    redirect("/doctor/near-me/treat")
}

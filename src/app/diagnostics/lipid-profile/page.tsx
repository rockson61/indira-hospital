import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { LipidProfileClient } from './Client';

export const metadata: Metadata = constructMetadata({
 title: "Lipid Profile & Cholesterol Test in Vellore | Indira Hospital",
 description: "Assess your cardiovascular risk with high-precision lipid profile testing at Indira Super Speciality Hospital, Vellore. NABL certified metabolic reporting.",
 path: "/diagnostics/lipid-profile"
});

export default function LipidProfilePage() {
 return <LipidProfileClient />;
}

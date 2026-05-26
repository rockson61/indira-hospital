import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { CasesClient } from './Client';

export const metadata: Metadata = constructMetadata({
 title: "Clinical Case Archives & Surgical Outcomes | Indira Hospital",
 description: "Explore peer-reviewed surgical case studies and technical clinical data at Indira Super Speciality Hospital. High-authority outcomes for medical professionals.",
 path: "/professionals/cases"
});

export default function CaseRepositoryPage() {
 return <CasesClient />;
}

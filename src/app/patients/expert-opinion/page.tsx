import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import ExpertOpinionClient from './ExpertOpinionClient';

export const metadata: Metadata = constructMetadata({
 title: "Patients | Indira Super Speciality Hospital",
 description: "Learn more about patients at Indira Hospital, Vellore's leading super-speciality center for advanced clinical care.",
 path: "/patients/expert-opinion"
});

export default function ExpertOpinionPage() {
 return <ExpertOpinionClient />;
}

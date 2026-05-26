import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { ProctologyDiagnosticsClient } from './Client';

export const metadata: Metadata = constructMetadata({
 title: "HD Digital Anoscopy & Proctology Diagnostics in Vellore | Indira Hospital",
 description: "Specialized colorectal and proctology diagnostics at Indira Super Speciality Hospital, Vellore. High-definition digital mapping for piles, fistula, and fissure care.",
 path: "/diagnostics/proctology"
});

export default function ProctologyDiagnosticsPage() {
 return <ProctologyDiagnosticsClient />;
}

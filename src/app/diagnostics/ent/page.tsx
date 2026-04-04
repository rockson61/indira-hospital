import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { ENTDiagnosticsClient } from './Client';

export const metadata: Metadata = constructMetadata({
    title: "4K Endoscopic ENT Diagnostics in Vellore | Indira Hospital",
    description: "Advanced ENT, Head & Neck diagnostics at Indira Super Speciality Hospital, Vellore. 4K Ultra-HD nasal endoscopy and microsurgical visualization for precision care.",
    path: "/diagnostics/ent"
});

export default function ENTDiagnosticsPage() {
    return <ENTDiagnosticsClient />;
}

import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { GeneralSurgeryDiagnosticsClient } from './Client';

export const metadata: Metadata = constructMetadata({
 title: "Pre-Surgical Diagnostics & Ultrasonography in Vellore | Indira Hospital",
 description: "Definitive pre-surgical diagnostics at Indira Super Speciality Hospital, Vellore. High-definition USG mapping and Ultrasound-guided FNAC for precision surgical care.",
 path: "/diagnostics/general-surgery"
});

export default function GeneralSurgeryDiagnosticsPage() {
 return <GeneralSurgeryDiagnosticsClient />;
}

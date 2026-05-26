import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { ECGClient } from './Client';

export const metadata: Metadata = constructMetadata({
 title: "Elite 12-Lead Digital ECG in Vellore | Indira Hospital",
 description: "Get high-precision digital ECG diagnostics at Indira Super Speciality Hospital, Vellore. Advanced cardiac electrical mapping for rapid arrhythmia and ischemia detection.",
 path: "/diagnostics/ecg"
});

export default function ECGPage() {
 return <ECGClient />;
}

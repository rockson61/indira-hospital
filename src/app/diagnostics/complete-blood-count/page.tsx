import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { CBCClient } from './Client';

export const metadata: Metadata = constructMetadata({
 title: "Complete Blood Count (CBC/Hemogram) in Vellore | Indira Hospital",
 description: "Get precise 6-part differential CBC blood tests at Indira Super Speciality Hospital, Vellore. NABL accredited pathology lab with same-day digital reporting.",
 path: "/diagnostics/complete-blood-count"
});

export default function CBCPage() {
 return <CBCClient />;
}

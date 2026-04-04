import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { MRIScanClient } from './Client';

export const metadata: Metadata = constructMetadata({
    title: "Elite 3T Silent MRI Scan in Vellore | Indira Hospital",
    description: "Experience the precision of 3.0 Tesla MRI at Indira Super Speciality Hospital, Vellore. Ultra-high resolution imaging for brain, spine, and joints in a comfortable, wide-bore environment.",
    path: "/diagnostics/mri-scan"
});

export default function MRIScanPage() {
    return <MRIScanClient />;
}

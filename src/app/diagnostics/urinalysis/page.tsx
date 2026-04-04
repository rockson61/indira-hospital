import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { UrinalysisClient } from './Client';

export const metadata: Metadata = constructMetadata({
    title: "Complete Urinalysis & Kidney Health Test in Vellore | Indira Hospital",
    description: "Get comprehensive urine analysis at Indira Super Speciality Hospital, Vellore. Automated chemical testing and microscopic sediment evaluation for renal health.",
    path: "/diagnostics/urinalysis"
});

export default function UrinalysisPage() {
    return <UrinalysisClient />;
}

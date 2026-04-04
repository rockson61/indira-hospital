import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { GuidesClient } from './Client';

export const metadata: Metadata = constructMetadata({
    title: "Clinical Journey Maps & Patient Guides | Indira Hospital",
    description: "Printable clinical guides for advanced surgical protocols. Clear recovery timelines and technical overviews for patients and referring doctors at Indira Hospital.",
    path: "/resources/guides"
});

export default function ClinicalGuidesPage() {
    return <GuidesClient />;
}

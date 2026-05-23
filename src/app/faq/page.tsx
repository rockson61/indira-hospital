import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import FAQClient from './FaqClient';

export const metadata: Metadata = constructMetadata({
    title: "Faq | Indira Super Speciality Hospital",
    description: "Learn more about faq at Indira Hospital, Vellore&apos;s leading super-speciality center for advanced clinical care.",
    path: "/faq"
});

export default function FAQPage() {
    return <FAQClient />;
}

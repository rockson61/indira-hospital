import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import { CTScanClient } from './Client';

export const metadata: Metadata = constructMetadata({
 title: "Elite 128-Slice MDCT Scan in Vellore | Indira Hospital",
 description: "Experience the precision of 128-slice CT scans at Indira Super Speciality Hospital, Vellore. Ultra-fast diagnostics with minimized radiation dose for cardiac and body imaging.",
 path: "/diagnostics/ct-scan"
});

export default function CTScanPage() {
 return <CTScanClient />;
}

import { Metadata } from "next";
import PatientPortalClient from "./PatientPortalClient";

export const metadata: Metadata = {
 title: "Patient Portal | Secure Health Records | Indira Hospital",
 description: "Access your medical records, lab results, and manage appointments securely via Indira Hospital&apos;s online patient portal.",
};

export default function PatientPortalPage() {
 return <PatientPortalClient />;
}

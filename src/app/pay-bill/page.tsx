import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { PayBillClient } from "@/components/forms/PayBillClient";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Pay Your Bill Online | Secure Payment Portal | Indira Hos...",
 description: "Securely pay your medical bills online at Indira Super Speciality Hospital, Vellore. Quick and easy payment via UPI, credit card, or net banking.",
};

export default function PayBillPage() {
 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
 <PayBillClient />

 {/* TRUST SIGNALS */}
 <SectionContainer className="max-w-3xl mx-auto pb-24">
 <EntityFAQs
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="insurance"
 title="Payment & Billing FAQs"
 description="Questions about UPI, credit cards, and online payment security."
 />
 </SectionContainer>
 </main>
 );
}

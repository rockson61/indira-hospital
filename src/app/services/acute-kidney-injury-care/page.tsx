// RockSEO Auto-Generated Page Template
// Topic: Acute Kidney Injury Care
// Cluster: nephrology
// Hub: /services/nephrology
// Generated: 2026-02-25T04:19:28.081Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Acute Kidney Injury Care | Indira Hospital Vellore",
  description: "Learn about Acute Kidney Injury Care at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function AcuteKidneyInjuryCarePage() {
  return (
    <SubServiceTemplate
      title="Acute Kidney Injury Care"
      eyebrow="Nephrology"
      description={
        <span>
          <strong>Acute Kidney Injury Care is a specialized treatment provided at Indira Super Speciality Hospital in Vellore.</strong> The procedure offers long-lasting results with affordable pricing, bringing you premium care at up to 50% lower cost than Chennai and Bangalore.
        </span>
      }
      departmentName="Nephrology"
      departmentSlug="nephrology"
      quickFacts={[
        { label: "Cost Estimate", value: "₹X,XXX", icon: "IndianRupee" },
        { label: "Procedure Time", value: "X hours", icon: "Clock" },
        { label: "Recovery", value: "X days", icon: "Activity" },
        { label: "Success Rate", value: "X%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Our streamlined approach to Acute Kidney Injury Care",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Acute Kidney Injury Care",
        entitySlug: "nephrology/acute-kidney-injury-care"
      }}
    >
        {/* Main Content (Information Gain) */}
        <h2>What is Acute Kidney Injury Care?</h2>
        <p>Acute Kidney Injury Care is a specialized, advanced medical procedure designed to address specific clinical symptoms, restore function, and improve patient health. At Indira Hospital, our distinguished professionals employ state-of-the-art diagnostic and treatment modalities to deliver an exceptional standard of care.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>Patients experiencing persistent discomfort, reduced functionality, or those advised by a specialist may require Acute Kidney Injury Care. Ideal candidates typically exhibit clinical indications that warrant proactive intervention to prevent further deterioration and ensure long-term health stabilization.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The course of Acute Kidney Injury Care involves an initial consultation, comprehensive digital diagnostics, and a personalized treatment roadmap. The actual process is minimally invasive where possible, utilizing modern anesthetics and advanced surgical precision to ensure patient comfort, usually taking a few hours to complete with a highly predictable recovery phase.</p>
        
        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Hospital, Vellore.
          This is significantly lower than tier-1 cities while maintaining world-class standards.
          0% EMI available via Bajaj Finserv, HDFC, ICICI.
        </p>
    </SubServiceTemplate>
  );
}

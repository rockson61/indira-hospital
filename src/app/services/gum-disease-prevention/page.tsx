// RockSEO Auto-Generated Page Template
// Topic: Gum Disease Prevention
// Cluster: gum-treatment
// Hub: /services/gum-treatment
// Generated: 2026-02-25T03:34:09.112Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Gum Disease Prevention | Indira Hospital Vellore",
  description: "Learn about Gum Disease Prevention at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function GumDiseasePreventionPage() {
  return (
    <SubServiceTemplate
      title="Gum Disease Prevention"
      eyebrow="Gum Treatment"
      description={
        <span>
          <strong>Gum Disease Prevention is a specialized treatment provided at Indira Super Speciality Hospital in Vellore.</strong> The procedure offers long-lasting results with affordable pricing, bringing you premium care at up to 50% lower cost than Chennai and Bangalore.
        </span>
      }
      departmentName="Gum Treatment"
      departmentSlug="gum-treatment"
      quickFacts={[
        { label: "Cost Estimate", value: "₹X,XXX", icon: "IndianRupee" },
        { label: "Procedure Time", value: "X hours", icon: "Clock" },
        { label: "Recovery", value: "X days", icon: "Activity" },
        { label: "Success Rate", value: "X%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Our streamlined approach to Gum Disease Prevention",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Gum Disease Prevention",
        entitySlug: "gum-treatment/gum-disease-prevention"
      }}
    >
        {/* Main Content (Information Gain) */}
        <h2>What is Gum Disease Prevention?</h2>
        <p>Gum Disease Prevention is a specialized, advanced medical procedure designed to address specific clinical symptoms, restore function, and improve patient health. At Indira Hospital, our distinguished professionals employ state-of-the-art diagnostic and treatment modalities to deliver an exceptional standard of care.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>Patients experiencing persistent discomfort, reduced functionality, or those advised by a specialist may require Gum Disease Prevention. Ideal candidates typically exhibit clinical indications that warrant proactive intervention to prevent further deterioration and ensure long-term health stabilization.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The course of Gum Disease Prevention involves an initial consultation, comprehensive digital diagnostics, and a personalized treatment roadmap. The actual process is minimally invasive where possible, utilizing modern anesthetics and advanced surgical precision to ensure patient comfort, usually taking a few hours to complete with a highly predictable recovery phase.</p>
        
        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Hospital, Vellore.
          This is significantly lower than tier-1 cities while maintaining world-class standards.
          0% EMI available via Bajaj Finserv, HDFC, ICICI.
        </p>
    </SubServiceTemplate>
  );
}

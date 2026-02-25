// RockSEO Auto-Generated Page Template
// Topic: Surgical Oncology Overview
// Cluster: oncology
// Hub: /services/oncology
// Generated: 2026-02-25T03:34:09.138Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Surgical Oncology Overview | Indira Hospital Vellore",
  description: "Learn about Surgical Oncology Overview at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function SurgicalOncologyOverviewPage() {
  return (
    <SubServiceTemplate
      title="Surgical Oncology Overview"
      eyebrow="Oncology"
      description={
        <span>
          <strong>Surgical Oncology Overview is a specialized treatment provided at Indira Super Speciality Hospital in Vellore.</strong> The procedure offers long-lasting results with affordable pricing, bringing you premium care at up to 50% lower cost than Chennai and Bangalore.
        </span>
      }
      departmentName="Oncology"
      departmentSlug="oncology"
      quickFacts={[
        { label: "Cost Estimate", value: "₹X,XXX", icon: "IndianRupee" },
        { label: "Procedure Time", value: "X hours", icon: "Clock" },
        { label: "Recovery", value: "X days", icon: "Activity" },
        { label: "Success Rate", value: "X%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Our streamlined approach to Surgical Oncology Overview",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Surgical Oncology Overview",
        entitySlug: "oncology/surgical-oncology-overview"
      }}
    >
        {/* Main Content (Information Gain) */}
        <h2>What is Surgical Oncology Overview?</h2>
        <p>Surgical Oncology Overview is a specialized, advanced medical procedure designed to address specific clinical symptoms, restore function, and improve patient health. At Indira Hospital, our distinguished professionals employ state-of-the-art diagnostic and treatment modalities to deliver an exceptional standard of care.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>Patients experiencing persistent discomfort, reduced functionality, or those advised by a specialist may require Surgical Oncology Overview. Ideal candidates typically exhibit clinical indications that warrant proactive intervention to prevent further deterioration and ensure long-term health stabilization.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The course of Surgical Oncology Overview involves an initial consultation, comprehensive digital diagnostics, and a personalized treatment roadmap. The actual process is minimally invasive where possible, utilizing modern anesthetics and advanced surgical precision to ensure patient comfort, usually taking a few hours to complete with a highly predictable recovery phase.</p>
        
        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Hospital, Vellore.
          This is significantly lower than tier-1 cities while maintaining world-class standards.
          0% EMI available via Bajaj Finserv, HDFC, ICICI.
        </p>
    </SubServiceTemplate>
  );
}

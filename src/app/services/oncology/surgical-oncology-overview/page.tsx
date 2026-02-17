import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Surgical Oncology Overview | Indira Super Speciality Hospital Vellore",
  description: "Advanced Surgical Oncology Overview at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function SurgicalOncologyOverviewPage() {
  return (
    <SubServiceTemplate
      title="Surgical Oncology Overview"
      eyebrow="Oncology Treatment"
      description={
        <p>
          Surgical Oncology Overview at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "oncology/surgical-oncology-overview",
        related: [
          { title: "All Oncology Services", href: "/services/oncology" }
        ]
      }}
      reviews={{
        entityName: "Surgical Oncology Overview",
        entitySlug: "oncology/surgical-oncology-overview"
      }}
    >
      <section>
        <h2>What is Surgical Oncology Overview?</h2>
        <p>
          TODO: Comprehensive explanation of Surgical Oncology Overview and its benefits for patients. Surgical Oncology Overview is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Surgical Oncology Overview. Consult with our specialists to determine if this is the right treatment for you.
        </p>
        
        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Super Speciality Hospital, Vellore.
          We offer 50% lower costs than Chennai/Bangalore with 0% EMI options available via major banks.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Chemotherapy Side Effects | Indira Super Speciality Hospital Vellore",
  description: "Advanced Chemotherapy Side Effects at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function ChemotherapySideEffectsPage() {
  return (
    <SubServiceTemplate
      title="Chemotherapy Side Effects"
      eyebrow="Oncology Treatment"
      description={
        <p>
          Chemotherapy Side Effects at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "oncology/chemotherapy-side-effects",
        related: [
          { title: "All Oncology Services", href: "/services/oncology" }
        ]
      }}
      reviews={{
        entityName: "Chemotherapy Side Effects",
        entitySlug: "oncology/chemotherapy-side-effects"
      }}
    >
      <section>
        <h2>What is Chemotherapy Side Effects?</h2>
        <p>
          TODO: Comprehensive explanation of Chemotherapy Side Effects and its benefits for patients. Chemotherapy Side Effects is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Chemotherapy Side Effects. Consult with our specialists to determine if this is the right treatment for you.
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

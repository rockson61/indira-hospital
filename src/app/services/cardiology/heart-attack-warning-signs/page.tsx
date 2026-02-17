import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Heart Attack Warning Signs | Indira Super Speciality Hospital Vellore",
  description: "Advanced Heart Attack Warning Signs at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function HeartAttackWarningSignsPage() {
  return (
    <SubServiceTemplate
      title="Heart Attack Warning Signs"
      eyebrow="Cardiology Treatment"
      description={
        <p>
          Heart Attack Warning Signs at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "cardiology/heart-attack-warning-signs",
        related: [
          { title: "All Cardiology Services", href: "/services/cardiology" }
        ]
      }}
      reviews={{
        entityName: "Heart Attack Warning Signs",
        entitySlug: "cardiology/heart-attack-warning-signs"
      }}
    >
      <section>
        <h2>What is Heart Attack Warning Signs?</h2>
        <p>
          TODO: Comprehensive explanation of Heart Attack Warning Signs and its benefits for patients. Heart Attack Warning Signs is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Heart Attack Warning Signs. Consult with our specialists to determine if this is the right treatment for you.
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

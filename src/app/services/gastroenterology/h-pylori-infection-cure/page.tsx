import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "H-pylori Infection Cure | Indira Super Speciality Hospital Vellore",
  description: "Advanced H-pylori Infection Cure at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function HPyloriInfectionCurePage() {
  return (
    <SubServiceTemplate
      title="H-pylori Infection Cure"
      eyebrow="Gastroenterology Treatment"
      description={
        <p>
          H-pylori Infection Cure at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "gastroenterology/h-pylori-infection-cure",
        related: [
          { title: "All Gastroenterology Services", href: "/services/gastroenterology" }
        ]
      }}
      reviews={{
        entityName: "H-pylori Infection Cure",
        entitySlug: "gastroenterology/h-pylori-infection-cure"
      }}
    >
      <section>
        <h2>What is H-pylori Infection Cure?</h2>
        <p>
          TODO: Comprehensive explanation of H-pylori Infection Cure and its benefits for patients. H-pylori Infection Cure is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for H-pylori Infection Cure. Consult with our specialists to determine if this is the right treatment for you.
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

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Urinary Tract Infection Treatment | Indira Super Speciality Hospital Vellore",
  description: "Advanced Urinary Tract Infection Treatment at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function UrinaryTractInfectionTreatmentPage() {
  return (
    <SubServiceTemplate
      title="Urinary Tract Infection Treatment"
      eyebrow="Urology Treatment"
      description={
        <p>
          Urinary Tract Infection Treatment at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "urology/urinary-tract-infection-treatment",
        related: [
          { title: "All Urology Services", href: "/services/urology" }
        ]
      }}
      reviews={{
        entityName: "Urinary Tract Infection Treatment",
        entitySlug: "urology/urinary-tract-infection-treatment"
      }}
    >
      <section>
        <h2>What is Urinary Tract Infection Treatment?</h2>
        <p>
          TODO: Comprehensive explanation of Urinary Tract Infection Treatment and its benefits for patients. Urinary Tract Infection Treatment is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Urinary Tract Infection Treatment. Consult with our specialists to determine if this is the right treatment for you.
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

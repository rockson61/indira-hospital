import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Epilepsy Treatment Options | Indira Super Speciality Hospital Vellore",
  description: "Advanced Epilepsy Treatment Options at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function EpilepsyTreatmentOptionsPage() {
  return (
    <SubServiceTemplate
      title="Epilepsy Treatment Options"
      eyebrow="Neurology Treatment"
      description={
        <p>
          Epilepsy Treatment Options at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "neurology/epilepsy-treatment-options",
        related: [
          { title: "All Neurology Services", href: "/services/neurology" }
        ]
      }}
      reviews={{
        entityName: "Epilepsy Treatment Options",
        entitySlug: "neurology/epilepsy-treatment-options"
      }}
    >
      <section>
        <h2>What is Epilepsy Treatment Options?</h2>
        <p>
          TODO: Comprehensive explanation of Epilepsy Treatment Options and its benefits for patients. Epilepsy Treatment Options is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Epilepsy Treatment Options. Consult with our specialists to determine if this is the right treatment for you.
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

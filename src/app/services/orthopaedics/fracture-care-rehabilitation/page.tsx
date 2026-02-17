import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Fracture Care Rehabilitation | Indira Super Speciality Hospital Vellore",
  description: "Advanced Fracture Care Rehabilitation at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function FractureCareRehabilitationPage() {
  return (
    <SubServiceTemplate
      title="Fracture Care Rehabilitation"
      eyebrow="Orthopaedics Treatment"
      description={
        <p>
          Fracture Care Rehabilitation at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "orthopaedics/fracture-care-rehabilitation",
        related: [
          { title: "All Orthopaedics Services", href: "/services/orthopaedics" }
        ]
      }}
      reviews={{
        entityName: "Fracture Care Rehabilitation",
        entitySlug: "orthopaedics/fracture-care-rehabilitation"
      }}
    >
      <section>
        <h2>What is Fracture Care Rehabilitation?</h2>
        <p>
          TODO: Comprehensive explanation of Fracture Care Rehabilitation and its benefits for patients. Fracture Care Rehabilitation is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Fracture Care Rehabilitation. Consult with our specialists to determine if this is the right treatment for you.
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

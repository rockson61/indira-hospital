import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Hip Replacement Surgery Guide | Indira Super Speciality Hospital Vellore",
  description: "Advanced Hip Replacement Surgery Guide at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function HipReplacementSurgeryGuidePage() {
  return (
    <SubServiceTemplate
      title="Hip Replacement Surgery Guide"
      eyebrow="Orthopaedics Treatment"
      description={
        <p>
          Hip Replacement Surgery Guide at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "orthopaedics/hip-replacement-surgery-guide",
        related: [
          { title: "All Orthopaedics Services", href: "/services/orthopaedics" }
        ]
      }}
      reviews={{
        entityName: "Hip Replacement Surgery Guide",
        entitySlug: "orthopaedics/hip-replacement-surgery-guide"
      }}
    >
      <section>
        <h2>What is Hip Replacement Surgery Guide?</h2>
        <p>
          TODO: Comprehensive explanation of Hip Replacement Surgery Guide and its benefits for patients. Hip Replacement Surgery Guide is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Hip Replacement Surgery Guide. Consult with our specialists to determine if this is the right treatment for you.
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

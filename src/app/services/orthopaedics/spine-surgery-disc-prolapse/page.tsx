import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Spine Surgery Disc Prolapse | Indira Super Speciality Hospital Vellore",
  description: "Advanced Spine Surgery Disc Prolapse at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function SpineSurgeryDiscProlapsePage() {
  return (
    <SubServiceTemplate
      title="Spine Surgery Disc Prolapse"
      eyebrow="Orthopaedics Treatment"
      description={
        <p>
          Spine Surgery Disc Prolapse at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "orthopaedics/spine-surgery-disc-prolapse",
        related: [
          { title: "All Orthopaedics Services", href: "/services/orthopaedics" }
        ]
      }}
      reviews={{
        entityName: "Spine Surgery Disc Prolapse",
        entitySlug: "orthopaedics/spine-surgery-disc-prolapse"
      }}
    >
      <section>
        <h2>What is Spine Surgery Disc Prolapse?</h2>
        <p>
          TODO: Comprehensive explanation of Spine Surgery Disc Prolapse and its benefits for patients. Spine Surgery Disc Prolapse is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Spine Surgery Disc Prolapse. Consult with our specialists to determine if this is the right treatment for you.
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

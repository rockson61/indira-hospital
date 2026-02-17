import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Acl Reconstruction Recovery | Indira Super Speciality Hospital Vellore",
  description: "Advanced Acl Reconstruction Recovery at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function AclReconstructionRecoveryPage() {
  return (
    <SubServiceTemplate
      title="Acl Reconstruction Recovery"
      eyebrow="Orthopaedics Treatment"
      description={
        <p>
          Acl Reconstruction Recovery at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "orthopaedics/acl-reconstruction-recovery",
        related: [
          { title: "All Orthopaedics Services", href: "/services/orthopaedics" }
        ]
      }}
      reviews={{
        entityName: "Acl Reconstruction Recovery",
        entitySlug: "orthopaedics/acl-reconstruction-recovery"
      }}
    >
      <section>
        <h2>What is Acl Reconstruction Recovery?</h2>
        <p>
          TODO: Comprehensive explanation of Acl Reconstruction Recovery and its benefits for patients. Acl Reconstruction Recovery is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Acl Reconstruction Recovery. Consult with our specialists to determine if this is the right treatment for you.
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

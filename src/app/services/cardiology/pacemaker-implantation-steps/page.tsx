import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Pacemaker Implantation Steps | Indira Super Speciality Hospital Vellore",
  description: "Advanced Pacemaker Implantation Steps at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function PacemakerImplantationStepsPage() {
  return (
    <SubServiceTemplate
      title="Pacemaker Implantation Steps"
      eyebrow="Cardiology Treatment"
      description={
        <p>
          Pacemaker Implantation Steps at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "cardiology/pacemaker-implantation-steps",
        related: [
          { title: "All Cardiology Services", href: "/services/cardiology" }
        ]
      }}
      reviews={{
        entityName: "Pacemaker Implantation Steps",
        entitySlug: "cardiology/pacemaker-implantation-steps"
      }}
    >
      <section>
        <h2>What is Pacemaker Implantation Steps?</h2>
        <p>
          TODO: Comprehensive explanation of Pacemaker Implantation Steps and its benefits for patients. Pacemaker Implantation Steps is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Pacemaker Implantation Steps. Consult with our specialists to determine if this is the right treatment for you.
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

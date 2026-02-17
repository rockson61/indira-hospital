import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Preventive Heart Checkup | Indira Super Speciality Hospital Vellore",
  description: "Advanced Preventive Heart Checkup at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function PreventiveHeartCheckupPage() {
  return (
    <SubServiceTemplate
      title="Preventive Heart Checkup"
      eyebrow="Cardiology Treatment"
      description={
        <p>
          Preventive Heart Checkup at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "cardiology/preventive-heart-checkup",
        related: [
          { title: "All Cardiology Services", href: "/services/cardiology" }
        ]
      }}
      reviews={{
        entityName: "Preventive Heart Checkup",
        entitySlug: "cardiology/preventive-heart-checkup"
      }}
    >
      <section>
        <h2>What is Preventive Heart Checkup?</h2>
        <p>
          TODO: Comprehensive explanation of Preventive Heart Checkup and its benefits for patients. Preventive Heart Checkup is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Preventive Heart Checkup. Consult with our specialists to determine if this is the right treatment for you.
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

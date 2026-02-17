import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Varicose Veins Laser Treatment | Indira Super Speciality Hospital Vellore",
  description: "Advanced Varicose Veins Laser Treatment at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function VaricoseVeinsLaserTreatmentPage() {
  return (
    <SubServiceTemplate
      title="Varicose Veins Laser Treatment"
      eyebrow="General-surgery Treatment"
      description={
        <p>
          Varicose Veins Laser Treatment at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "general-surgery/varicose-veins-laser-treatment",
        related: [
          { title: "All General-surgery Services", href: "/services/general-surgery" }
        ]
      }}
      reviews={{
        entityName: "Varicose Veins Laser Treatment",
        entitySlug: "general-surgery/varicose-veins-laser-treatment"
      }}
    >
      <section>
        <h2>What is Varicose Veins Laser Treatment?</h2>
        <p>
          TODO: Comprehensive explanation of Varicose Veins Laser Treatment and its benefits for patients. Varicose Veins Laser Treatment is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Varicose Veins Laser Treatment. Consult with our specialists to determine if this is the right treatment for you.
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

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Av Fistula Surgery | Indira Super Speciality Hospital Vellore",
  description: "Advanced Av Fistula Surgery at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function AvFistulaSurgeryPage() {
  return (
    <SubServiceTemplate
      title="Av Fistula Surgery"
      eyebrow="Nephrology Treatment"
      description={
        <p>
          Av Fistula Surgery at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "nephrology/av-fistula-surgery",
        related: [
          { title: "All Nephrology Services", href: "/services/nephrology" }
        ]
      }}
      reviews={{
        entityName: "Av Fistula Surgery",
        entitySlug: "nephrology/av-fistula-surgery"
      }}
    >
      <section>
        <h2>What is Av Fistula Surgery?</h2>
        <p>
          TODO: Comprehensive explanation of Av Fistula Surgery and its benefits for patients. Av Fistula Surgery is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Av Fistula Surgery. Consult with our specialists to determine if this is the right treatment for you.
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

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Coronary Angiography Guide | Indira Super Speciality Hospital Vellore",
  description: "Advanced Coronary Angiography Guide at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function CoronaryAngiographyGuidePage() {
  return (
    <SubServiceTemplate
      title="Coronary Angiography Guide"
      eyebrow="Cardiology Treatment"
      description={
        <p>
          Coronary Angiography Guide at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "cardiology/coronary-angiography-guide",
        related: [
          { title: "All Cardiology Services", href: "/services/cardiology" }
        ]
      }}
      reviews={{
        entityName: "Coronary Angiography Guide",
        entitySlug: "cardiology/coronary-angiography-guide"
      }}
    >
      <section>
        <h2>What is Coronary Angiography Guide?</h2>
        <p>
          TODO: Comprehensive explanation of Coronary Angiography Guide and its benefits for patients. Coronary Angiography Guide is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Coronary Angiography Guide. Consult with our specialists to determine if this is the right treatment for you.
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

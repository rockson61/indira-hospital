import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Kidney Stone Prevention Tips | Indira Super Speciality Hospital Vellore",
  description: "Advanced Kidney Stone Prevention Tips at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function KidneyStonePreventionTipsPage() {
  return (
    <SubServiceTemplate
      title="Kidney Stone Prevention Tips"
      eyebrow="Urology Treatment"
      description={
        <p>
          Kidney Stone Prevention Tips at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "urology/kidney-stone-prevention-tips",
        related: [
          { title: "All Urology Services", href: "/services/urology" }
        ]
      }}
      reviews={{
        entityName: "Kidney Stone Prevention Tips",
        entitySlug: "urology/kidney-stone-prevention-tips"
      }}
    >
      <section>
        <h2>What is Kidney Stone Prevention Tips?</h2>
        <p>
          TODO: Comprehensive explanation of Kidney Stone Prevention Tips and its benefits for patients. Kidney Stone Prevention Tips is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Kidney Stone Prevention Tips. Consult with our specialists to determine if this is the right treatment for you.
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

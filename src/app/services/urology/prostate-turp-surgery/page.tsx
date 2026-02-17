import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Prostate TURP Surgery | Indira Super Speciality Hospital Vellore",
  description: "Advanced Prostate TURP Surgery at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function ProstateTurpSurgeryPage() {
  return (
    <SubServiceTemplate
      title="Prostate TURP Surgery"
      eyebrow="Urology Treatment"
      description={
        <p>
          Prostate TURP Surgery at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "urology/prostate-turp-surgery",
        related: [
          { title: "All Urology Services", href: "/services/urology" }
        ]
      }}
      reviews={{
        entityName: "Prostate TURP Surgery",
        entitySlug: "urology/prostate-turp-surgery"
      }}
    >
      <section>
        <h2>What is Prostate TURP Surgery?</h2>
        <p>
          TODO: Comprehensive explanation of Prostate TURP Surgery and its benefits for patients. Prostate TURP Surgery is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Prostate TURP Surgery. Consult with our specialists to determine if this is the right treatment for you.
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

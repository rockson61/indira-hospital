import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Male Infertility Causes | Indira Super Speciality Hospital Vellore",
  description: "Advanced Male Infertility Causes at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function MaleInfertilityCausesPage() {
  return (
    <SubServiceTemplate
      title="Male Infertility Causes"
      eyebrow="Urology Treatment"
      description={
        <p>
          Male Infertility Causes at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "urology/male-infertility-causes",
        related: [
          { title: "All Urology Services", href: "/services/urology" }
        ]
      }}
      reviews={{
        entityName: "Male Infertility Causes",
        entitySlug: "urology/male-infertility-causes"
      }}
    >
      <section>
        <h2>What is Male Infertility Causes?</h2>
        <p>
          TODO: Comprehensive explanation of Male Infertility Causes and its benefits for patients. Male Infertility Causes is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Male Infertility Causes. Consult with our specialists to determine if this is the right treatment for you.
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

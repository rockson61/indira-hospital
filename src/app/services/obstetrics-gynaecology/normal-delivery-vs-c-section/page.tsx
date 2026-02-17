import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Normal Delivery Vs C-section | Indira Super Speciality Hospital Vellore",
  description: "Advanced Normal Delivery Vs C-section at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function NormalDeliveryVsCSectionPage() {
  return (
    <SubServiceTemplate
      title="Normal Delivery Vs C-section"
      eyebrow="Obstetrics-gynaecology Treatment"
      description={
        <p>
          Normal Delivery Vs C-section at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "obstetrics-gynaecology/normal-delivery-vs-c-section",
        related: [
          { title: "All Obstetrics-gynaecology Services", href: "/services/obstetrics-gynaecology" }
        ]
      }}
      reviews={{
        entityName: "Normal Delivery Vs C-section",
        entitySlug: "obstetrics-gynaecology/normal-delivery-vs-c-section"
      }}
    >
      <section>
        <h2>What is Normal Delivery Vs C-section?</h2>
        <p>
          TODO: Comprehensive explanation of Normal Delivery Vs C-section and its benefits for patients. Normal Delivery Vs C-section is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Normal Delivery Vs C-section. Consult with our specialists to determine if this is the right treatment for you.
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

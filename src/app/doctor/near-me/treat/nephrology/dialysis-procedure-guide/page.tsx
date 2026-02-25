import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Dialysis Procedure Guide & Cost | Indira Hospital Vellore",
  description: "Advanced Hemodialysis and Peritoneal Dialysis at Indira Super Speciality Hospital, Vellore. State-of-the-art dialysis unit for safe, high-efficiency kidney replacement therapy.",
  keywords: ["Dialysis Vellore", "Hemodialysis cost Vellore", "Kidney dialysis hospital", "ESRD treatment", "Dialysis unit Vellore"]
};

export default function DialysisProcedureGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="Nephrology"
      departmentSlug="nephrology"
      title="Dialysis Procedure Guide"
      eyebrow="Renal Replacement Therapy"
      description={
        <p>
          Indira Hospital's <strong>Dialysis Unit</strong> is equipped with the latest Fresenius 5008 machines, RO-purified water systems, and a dedicated team of trained dialysis technicians and nurses. We provide a safe, hygienic, and comfortable dialysis experience for all our patients.
        </p>
      }
      quickFacts={[
        { label: "Cost/Session", value: "₹1,200 – ₹1,800", icon: "IndianRupee" },
        { label: "Duration", value: "3-4 Hours", icon: "Clock" },
        { label: "Frequency", value: "3x/Week", icon: "Activity" },
        { label: "Machines", value: "Fresenius 5008", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "dialysis-types",
            heading: "Hemodialysis vs. Peritoneal Dialysis",
            description: "We offer counselling and support for both dialysis modalities:",
            table: {
              headers: ["Factor", "Hemodialysis (HD)", "Peritoneal Dialysis (PD)"],
              rows: [
                ["Location", "Hospital (3x/week)", "Home (Daily)"],
                ["Access", "AV Fistula / Catheter", "PD Catheter (Peritoneum)"],
                ["Flexibility", "Fixed Schedule", "More Flexible"],
                ["Dietary freedom", "Moderate", "Higher"],
                ["Ideal For", "In-centre stable patients", "Working patients, diabetics"]
              ],
              caption: "Choosing the right dialysis modality with your nephrologist."
            }
          }
        ],
        faqs: [
          {
            question: "Can I travel while on dialysis?",
            answer: "Yes. Hemodialysis patients can travel with prior arrangement at partner dialysis centres in the destination city. We assist patients with scheduling. Peritoneal dialysis patients have even higher flexibility as they can perform exchanges at home or in a clean environment while travelling."
          }
        ]
      }}
      timeline={{
        title: "A Typical Hemodialysis Session",
        steps: [
          { title: "Pre-dialysis Assessment", description: "BP, weight, and blood flow check. Needles inserted into AV fistula.", duration: "15 Mins" },
          { title: "Dialysis Run", description: "Blood flows through the dialyzer (artificial kidney), which filters waste and excess fluid.", duration: "3-4 Hours" },
          { title: "Post-dialysis", description: "Needles removed, pressure applied. BP and weight re-checked.", duration: "15 Mins" },
          { title: "Recovery", description: "Most patients feel well enough to drive home and resume light activities.", duration: "30 Mins+" }
        ]
      }}
      relatedServices={{
        serviceSlug: "nephrology",
        related: [
          { title: "AV Fistula Surgery", href: "/doctor/near-me/treat/nephrology/av-fistula-surgery" },
          { title: "CKD Stages Guide", href: "/doctor/near-me/treat/nephrology/chronic-kidney-disease-stages" },
          { title: "Diabetic Nephropathy", href: "/doctor/near-me/treat/nephrology/diabetic-nephropathy-prevention" }
        ]
      }}
      reviews={{ entityName: "Dialysis Care", entitySlug: "nephrology", entityType: "department" }}
    >
      <section>
        <h2>Our Dialysis Unit at Indira Hospital</h2>
        <p>
          Our 10-station dialysis unit maintains the highest standards of infection control. All machines undergo complete disinfection between sessions, water quality is tested daily, and we use high-flux dialyzers for maximum clearance. Separate areas are maintained for Hepatitis B positive patients.
        </p>
        <h3>Patient Comfort & Support</h3>
        <p>
          We understand that dialysis is a major life commitment. Our team works to make each session as comfortable as possible with individual TV screens, comfortable recliners, and a dedicated social worker who supports patients with dietary counseling and psychosocial needs.
        </p>
        <h2>Government Scheme Support</h2>
        <p>
          Dialysis is covered under the <strong>National Dialysis Programme (NDP)</strong> and <strong>TN CM Health Insurance</strong> for eligible patients, making it available at significantly subsidized or zero cost. Our nephrologist and billing team will assist you in accessing all available benefits.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

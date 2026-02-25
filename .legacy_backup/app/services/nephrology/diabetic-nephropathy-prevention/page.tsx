import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Diabetic Nephropathy: Prevention & Treatment | Indira Hospital Vellore",
  description: "Prevent and treat Diabetic Kidney Disease at Indira Super Speciality Hospital, Vellore. Specialist nephrology and endocrinology care to protect kidney function in diabetes.",
  keywords: ["Diabetic nephropathy Vellore", "Diabetic kidney disease treatment", "Kidney protection diabetes", "Nephrologist Vellore", "Proteinuria treatment"]
};

export default function DiabeticNephropathyPreventionPage() {
  return (
    <SubServiceTemplate
      departmentName="Nephrology"
      departmentSlug="nephrology"
      title="Diabetic Nephropathy Prevention"
      eyebrow="Diabetes & Kidney Care"
      description={
        <p>
          <strong>Diabetic Nephropathy</strong> is the leading cause of kidney failure in India. High blood sugar damages kidney blood vessels over years. The crucial insight is that this damage is <em>largely preventable and reversible in early stages</em> with the right care.
        </p>
      }
      quickFacts={[
        { label: "Risk", value: "30-40% of Diabetics", icon: "Activity" },
        { label: "Key Test", value: "Urine Microalbumin", icon: "ShieldCheck" },
        { label: "Reversal", value: "Possible (Early)", icon: "Star" },
        { label: "Annual Check", value: "All Diabetics", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "nephrology",
        related: [
          { title: "CKD Stages Guide", href: "/services/nephrology/chronic-kidney-disease-stages" },
          { title: "Dialysis Procedure", href: "/services/nephrology/dialysis-procedure-guide" },
          { title: "AV Fistula Surgery", href: "/services/nephrology/av-fistula-surgery" }
        ]
      }}
      reviews={{ entityName: "Nephrology Care", entitySlug: "nephrology", entityType: "department" }}
    >
      <section>
        <h2>How Diabetes Damages the Kidneys</h2>
        <p>
          Persistently high blood glucose leads to <strong>glomerulosclerosis</strong> — scarring of the tiny kidney filters (glomeruli). Initially, the kidneys compensate by working harder, leading to hyperfiltration. Over time, the filters are permanently damaged and the kidneys can no longer clear waste, causing CKD and eventually kidney failure.
        </p>
        <h3>Stages of Diabetic Nephropathy</h3>
        <ul>
          <li><strong>Stage 1 (Hyperfiltration):</strong> eGFR is elevated; no clinical symptoms. Fully reversible.</li>
          <li><strong>Stage 2 (Silent):</strong> Minor changes seen on biopsy; urine normal. Still reversible.</li>
          <li><strong>Stage 3 (Microalbuminuria):</strong> Small amounts of protein detectable in urine. Progression can be halted.</li>
          <li><strong>Stage 4 (Macroalbuminuria/Proteinuria):</strong> Heavy protein loss; BP rises. CKD is established.</li>
          <li><strong>Stage 5 (ESRD):</strong> Kidney failure requiring dialysis or transplant.</li>
        </ul>
        <h2>Prevention & Treatment Strategy</h2>
        <p>
          Our coordinated team of nephrologists, endocrinologists, and dietitians tackles diabetic nephropathy from every angle:
        </p>
        <ul>
          <li><strong>HbA1c Target ≤7%:</strong> Tight glucose control is the single most protective intervention.</li>
          <li><strong>ACE Inhibitors/ARBs:</strong> These blood pressure medications have an independent kidney-protective effect and reduce proteinuria even in normal BP patients.</li>
          <li><strong>SGLT-2 Inhibitors (Dapagliflozin, Empagliflozin):</strong> Now evidence-based standard of care for slowing diabetic CKD progression.</li>
          <li><strong>Low-Protein Renal Diet:</strong> Reduces hyperfiltration and slows CKD progression.</li>
          <li><strong>Strict BP Control (&lt;130/80 mmHg):</strong> Essential to slow kidney damage.</li>
        </ul>
        <h2>Annual Kidney Screening for All Diabetics</h2>
        <p>
          Every diabetic patient should have annual <strong>urine microalbumin and serum creatinine</strong> tests. Our diabetic nephropathy screening package includes all relevant tests plus a nephrologist consultation at an affordable price.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

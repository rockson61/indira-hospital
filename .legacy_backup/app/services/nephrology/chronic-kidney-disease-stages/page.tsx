import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Chronic Kidney Disease (CKD) Stages & Treatment | Indira Hospital Vellore",
  description: "Comprehensive CKD management at Indira Super Speciality Hospital, Vellore. Expert nephrologists managing all 5 stages of Chronic Kidney Disease and delaying dialysis.",
  keywords: ["CKD treatment Vellore", "Chronic kidney disease hospital", "Nephrology specialist Vellore", "Kidney failure management", "CKD stages India"]
};

export default function ChronicKidneyDiseaseStagesPage() {
  return (
    <SubServiceTemplate
      departmentName="Nephrology"
      departmentSlug="nephrology"
      title="Chronic Kidney Disease (CKD)"
      eyebrow="Nephrology Excellence"
      description={
        <p>
          <strong>Chronic Kidney Disease (CKD)</strong> is a silent, progressive condition where the kidneys gradually lose their filtering ability over months or years. Expert nephrology care at Indira Hospital aims to slow progression, manage complications, and preserve quality of life at every stage.
        </p>
      }
      quickFacts={[
        { label: "Stages", value: "1 – 5 (ESRD)", icon: "Activity" },
        { label: "Key Marker", value: "eGFR + Creatinine", icon: "ShieldCheck" },
        { label: "Dialysis", value: "Stage 4-5", icon: "Clock" },
        { label: "Slows With", value: "Early Rx", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "ckd-stages",
            heading: "The 5 Stages of CKD",
            description: "CKD is classified by eGFR (estimated Glomerular Filtration Rate), a measure of kidney function:",
            table: {
              headers: ["Stage", "eGFR (ml/min)", "Description", "Action"],
              rows: [
                ["Stage 1", ">90", "Normal function, kidney damage present", "Monitor, control BP/sugar"],
                ["Stage 2", "60-89", "Mildly reduced function", "Nephrology referral, renal diet"],
                ["Stage 3", "30-59", "Moderate reduction", "Active management, avoid nephrotoxins"],
                ["Stage 4", "15-29", "Severely reduced", "Dialysis/transplant preparation"],
                ["Stage 5", "<15", "Kidney failure (ESRD)", "Dialysis or kidney transplant"]
              ],
              caption: "CKD stages defined by KDIGO guidelines."
            }
          }
        ],
        faqs: [
          {
            question: "Can CKD be reversed?",
            answer: "CKD is generally not curable (except when caused by a treatable condition), but progression can be dramatically slowed with optimal control of blood pressure, blood sugar, and proteinuria. Early-stage CKD patients can maintain near-normal kidney function for many years."
          }
        ]
      }}
      relatedServices={{
        serviceSlug: "nephrology",
        related: [
          { title: "Dialysis Procedure Guide", href: "/services/nephrology/dialysis-procedure-guide" },
          { title: "AV Fistula Surgery", href: "/services/nephrology/av-fistula-surgery" },
          { title: "Diabetic Nephropathy", href: "/services/nephrology/diabetic-nephropathy-prevention" }
        ]
      }}
      reviews={{ entityName: "Nephrology Care", entitySlug: "nephrology", entityType: "department" }}
    >
      <section>
        <h2>Expert Nephrology in Vellore</h2>
        <p>
          Indira Hospital's nephrology department provides a full spectrum of kidney care — from early CKD detection, immunosuppressive therapy for kidney diseases like IgA Nephropathy, to complex management of ESRD including dialysis and transplant evaluation.
        </p>
        <h3>Key CKD Management Goals</h3>
        <ul>
          <li><strong>BP Control:</strong> Target &lt;130/80 mmHg (especially with proteinuria) using ACE inhibitors or ARBs.</li>
          <li><strong>Blood Sugar (Diabetes):</strong> HbA1c target of ~7% to protect kidney function.</li>
          <li><strong>Proteinuria Reduction:</strong> Protein in urine is a key driver of CKD progression. SGLT-2 inhibitors (Dapagliflozin) are now standard of care.</li>
          <li><strong>Renal Diet:</strong> Our dedicated renal dietitian prescribes a low-sodium, low-potassium, controlled-protein diet tailored to each stage.</li>
          <li><strong>Anemia Management:</strong> Erythropoietin-stimulating agents (ESA) and intravenous iron for CKD anaemia.</li>
        </ul>
        <h2>When to Prepare for Dialysis or Transplant</h2>
        <p>
          When eGFR falls below 20, we initiate dialysis access planning (AV Fistula creation) and explore transplant eligibility as early as possible. Starting this process early ensures the smoothest possible transition without emergency interventions.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

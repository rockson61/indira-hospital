import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Urinary Tract Infection (UTI) Treatment | Indira Hospital Vellore",
  description: "Expert UTI diagnosis and treatment at Indira Super Speciality Hospital, Vellore. Culture-guided antibiotic therapy and specialist evaluation for recurrent urinary tract infections.",
  keywords: ["UTI treatment hospital Vellore", "Urinary tract infection specialist", "Recurrent UTI Vellore", "Urine infection culture", "Urologist Vellore"]
};

export default function UrinaryTractInfectionTreatmentPage() {
  return (
    <SubServiceTemplate
      departmentName="Urology"
      departmentSlug="urology"
      title="Urinary Tract Infection Treatment"
      eyebrow="Urology & Infectious Disease"
      description={
        <p>
          <strong>Urinary Tract Infections (UTIs)</strong> are among the most common bacterial infections worldwide. At Indira Hospital, our urology team provides accurate, culture-guided diagnosis and effective antibiotic treatment — and for recurrent cases, a thorough investigation to identify and correct the underlying cause.
        </p>
      }
      quickFacts={[
        { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
        { label: "Test", value: "Urine C&S", icon: "ShieldCheck" },
        { label: "Treatment", value: "5-14 Day Antibiotics", icon: "Clock" },
        { label: "Recurrent?", value: "Full Workup", icon: "Activity" }
      ]}
      relatedServices={{
        serviceSlug: "urology",
        related: [
          { title: "Kidney Stone Surgery", href: "/services/urology/kidney-stone-laser-surgery" },
          { title: "Prostate TURP Surgery", href: "/services/urology/prostate-turp-surgery" },
          { title: "Male Infertility", href: "/services/urology/male-infertility-causes" }
        ]
      }}
      reviews={{ entityName: "Urology Care", entitySlug: "urology", entityType: "department" }}
    >
      <section>
        <h2>Types of UTI</h2>
        <p>
          UTIs are classified by the part of the urinary tract they affect:
        </p>
        <ul>
          <li><strong>Urethritis:</strong> Infection of the urethra — burning on urination, discharge.</li>
          <li><strong>Cystitis (Bladder Infection):</strong> Most common UTI. Frequent urination, burning, urgency, cloudy urine. Usually mild and easily treated.</li>
          <li><strong>Pyelonephritis (Kidney Infection):</strong> More serious. Fever, chills, back/flank pain, nausea. Requires more aggressive antibiotic treatment and sometimes hospital admission.</li>
        </ul>
        <h2>Why Culture Testing Matters</h2>
        <p>
          We strongly advocate for a <strong>Urine Culture and Sensitivity (C&S) test</strong> for all UTIs — especially in men, recurrent UTIs, or hospital-acquired infections. Antibiotic resistance (particularly to commonly used drugs like Ciprofloxacin and Trimethoprim) is rising rapidly in India. A culture test identifies the exact bacteria and its antibiotic sensitivity — ensuring we prescribe the <em>right</em> antibiotic, not just any antibiotic.
        </p>
        <h3>Symptoms That Need Immediate Attention</h3>
        <ul>
          <li>High fever (&gt;38.5°C) with UTI symptoms (suspect pyelonephritis)</li>
          <li>Blood in urine (haematuria) — could indicate stones, cancer</li>
          <li>Severe pain in the back or side (could indicate kidney stone or abscess)</li>
          <li>UTI symptoms in men (always warrants investigation)</li>
          <li>UTI in a diabetic patient (higher risk of complicated infection)</li>
        </ul>
        <h2>Recurrent UTI Investigation</h2>
        <p>
          Three or more UTIs in a year, or two in six months, defines <strong>Recurrent UTIs</strong>. Our urology team performs:
        </p>
        <ul>
          <li>Renal tract ultrasound — to detect stones, structural anomalies, or incomplete bladder emptying</li>
          <li>Uroflowmetry and post-void residual — to assess bladder emptying efficiency</li>
          <li>Cystoscopy — to examine the bladder lining for polyps, stones, or fistula</li>
          <li>Hormonal assessment — topical vaginal oestrogen dramatically reduces UTI recurrence in post-menopausal women</li>
        </ul>
        <h2>Effective Prevention</h2>
        <ul>
          <li>Drink 2-2.5 litres of water daily to flush bacteria from the urinary tract</li>
          <li>Always urinate after sexual intercourse</li>
          <li>Wipe front to back after using the toilet (women)</li>
          <li>Avoid holding urine for extended periods</li>
          <li>Low-dose prophylactic antibiotics for selected patients with very frequent recurrences</li>
        </ul>
      </section>
    </SubServiceTemplate>
  );
}

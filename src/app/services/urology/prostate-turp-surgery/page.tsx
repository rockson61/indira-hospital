import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Prostate TURP Surgery (BPH Treatment) | Indira Hospital Vellore",
  description: "Expert Prostate TURP Surgery at Indira Super Speciality Hospital, Vellore. Minimally invasive treatment for enlarged prostate (BPH) with fast recovery.",
  keywords: ["Prostate surgery Vellore", "TURP surgery cost", "BPH treatment", "Enlarged prostate specialist", "Urology hospital Vellore"]
};

export default function ProstateTurpSurgeryPage() {
  return (
    <SubServiceTemplate
      departmentName="Urology"
      departmentSlug="urology"
      title="Prostate TURP Surgery"
      eyebrow="Urology Excellence"
      description={
        <p>
          Transurethral Resection of the Prostate (TURP) is the gold-standard treatment for Benign Prostatic Hyperplasia (BPH). Our urology experts use advanced endoscopic equipment to restore normal urinary flow with minimal hospital stay.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹55k – ₹75k", icon: "IndianRupee" },
        { label: "Duration", value: "60-90 Mins", icon: "Clock" },
        { label: "Stay", value: "2-3 Days", icon: "ShieldCheck" },
        { label: "Success Rate", value: "98%+", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "urology",
        related: [
          { title: "Kidney Stone Laser Surgery", href: "/services/urology/kidney-stone-laser-surgery" },
          { title: "UTI Treatment", href: "/services/urology/urinary-tract-infection-treatment" },
          { title: "RIRS Procedure", href: "/services/urology/rirs-treatment" }
        ]
      }}
      reviews={{
        entityName: "Urology",
        entitySlug: "urology",
        entityType: "department"
      }}
      timeline={{
        title: "TURP Procedure & Recovery",
        steps: [
          { title: "Evaluation", description: "Uroflowmetry, Ultrasound, and PSA testing to assess prostate volume.", duration: "1 Day" },
          { title: "TURP Surgery", description: "Endoscopic removal of obstructing prostate tissue—no external cuts.", duration: "1.5 Hours" },
          { title: "Catheter Care", description: "Post-op monitoring with a temporary catheter for bladder flushing.", duration: "48 Hours" },
          { title: "Discharge", description: "Catheter removal, successful voiding trial, and home care instructions.", duration: "Day 3" }
        ]
      }}
    >
      <section>
        <h2>What is TURP Surgery?</h2>
        <p>
          <strong>TURP (Transurethral Resection of the Prostate)</strong> is a surgical procedure used to treat urinary problems caused by an enlarged prostate. Because the entire procedure is performed through the urethra, there are no external incisions, leading to a faster and less painful recovery than open surgery.
        </p>

        <h3>Benefits of the TURP Procedure</h3>
        <ul>
          <li><strong>Significant Symptom Relief:</strong> Immediate improvement in urine flow and bladder emptying.</li>
          <li><strong>No External Scars:</strong> Performed entirely through natural passages.</li>
          <li><strong>Proven Longevity:</strong> High long-term success rates with very low recurrence of symptoms.</li>
          <li><strong>Comprehensive:</strong> Allows for biopsy of removed tissue to rule out other conditions.</li>
        </ul>

        <h2>Who Needs TURP Surgery?</h2>
        <p>
          TURP is recommended for men with moderate to severe urinary symptoms that haven't responded to medication. Symptoms of an enlarged prostate (BPH) include:
        </p>
        <ul>
          <li>Frequent or urgent need to urinate, especially at night (nocturia).</li>
          <li>Difficulty starting urination or a weak urine stream.</li>
          <li>Urinary retention (inability to empty the bladder completely).</li>
          <li>Recurrent urinary tract infections or bladder stones.</li>
        </ul>

        <h2>Cost & Insurance</h2>
        <p>
          <strong>Affordable Urology Packages:</strong> The cost for TURP surgery at Indira Super Speciality Hospital, Vellore, is significantly more affordable than in major metropolitan cities. Our packages include high-quality consumables and expert surgical fees.
        </p>
        <p>
          We are empaneled with over 50+ Insurance and TPA providers for <strong>Cashless Surgery</strong>. 0% EMI options are also available for self-paying patients through our strategic banking partners.
        </p>

        <h3>Why Choose Our Urology Team?</h3>
        <p>
          Our department is led by some of the most experienced urologists in the region, specializing in advanced endo-urological procedures. With dedicated urology suites and the latest medical technology, we provide safe and effective treatment for all prostate-related conditions.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

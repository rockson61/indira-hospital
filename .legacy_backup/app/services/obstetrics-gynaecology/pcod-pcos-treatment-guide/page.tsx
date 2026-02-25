import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "PCOD/PCOS Treatment Guide & Management | Indira Hospital Vellore",
  description: "Expert PCOD/PCOS diagnosis and treatment at Indira Super Speciality Hospital, Vellore. Holistic management for hormonal balance, weight, fertility, and long-term health.",
  keywords: ["PCOS treatment Vellore", "PCOD specialist hospital", "Hormonal imbalance Vellore", "PCOS fertility treatment", "Gynaecologist Vellore"]
};

export default function PCODPCOSTreatmentGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="Obstetrics & Gynaecology"
      departmentSlug="obstetrics-gynaecology"
      title="PCOD / PCOS Treatment"
      eyebrow="Gynaecoendocrinology"
      description={
        <p>
          <strong>Polycystic Ovary Syndrome (PCOS)</strong> is the most common hormonal disorder in women of reproductive age, affecting 1 in 5 Indian women. At Indira Hospital, our holistic approach addresses the full spectrum of PCOS — from menstrual irregularity and weight management to fertility and long-term metabolic health.
        </p>
      }
      quickFacts={[
        { label: "Prevalence", value: "15-20% Women", icon: "Activity" },
        { label: "Treatable?", value: "Yes, Highly", icon: "ShieldCheck" },
        { label: "Fertility", value: "Can Conceive", icon: "Star" },
        { label: "Approach", value: "Holistic / Long-term", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "obstetrics-gynaecology",
        related: [
          { title: "Infertility Evaluation", href: "/services/obstetrics-gynaecology/infertility-evaluation-steps" },
          { title: "High Risk Pregnancy", href: "/services/obstetrics-gynaecology/high-risk-pregnancy-care" },
          { title: "Laparoscopic Hysterectomy", href: "/services/obstetrics-gynaecology/laparoscopic-hysterectomy-guide" }
        ]
      }}
      reviews={{ entityName: "Gynaecology Care", entitySlug: "obstetrics-gynaecology", entityType: "department" }}
    >
      <section>
        <h2>Understanding PCOS</h2>
        <p>
          PCOS is a complex endocrine disorder characterized by three hallmarks (the Rotterdam Criteria — at least 2 of the 3 must be present): <strong>Irregular periods</strong> (oligomenorrhoea/amenorrhoea), <strong>Polycystic ovaries</strong> on ultrasound, and <strong>Signs of excess androgens</strong> (acne, hirsutism, or elevated blood androgen levels).
        </p>
        <h3>What Causes PCOS?</h3>
        <p>
          The exact cause is unknown, but <strong>Insulin Resistance</strong> is a central feature in 50-80% of cases. High insulin levels stimulate the ovaries to produce excess testosterone. Genetics, inflammation, and lifestyle all play significant roles.
        </p>
        <h2>Our PCOS Treatment Strategy</h2>
        <p>
          There is no single cure for PCOS, but its symptoms and long-term risks are highly manageable:
        </p>
        <ul>
          <li><strong>Lifestyle (First & Most Powerful):</strong> A 5-10% reduction in body weight can dramatically restore menstrual regularity, reduce androgen levels, and improve fertility in overweight/obese PCOS patients.</li>
          <li><strong>Oral Contraceptive Pills (OCPs):</strong> For menstrual regulation and acne/hirsutism management in non-pregnancy-seeking patients.</li>
          <li><strong>Metformin:</strong> Improves insulin sensitivity, lowers androgen levels, and can restore ovulation.</li>
          <li><strong>Clomiphene/Letrozole:</strong> For ovulation induction in women seeking pregnancy.</li>
          <li><strong>Anti-Androgens (Spironolactone):</strong> For significant hirsutism and acne unresponsive to OCPs.</li>
          <li><strong>Laparoscopic Ovarian Drilling:</strong> A surgical option for OCP+Metformin resistant PCOS with fertility needs.</li>
        </ul>
        <h2>Long-Term Health Monitoring</h2>
        <p>
          PCOS increases the long-term risk of Type 2 Diabetes, endometrial cancer, cardiovascular disease, and sleep apnoea. We provide a <strong>Long-Term PCOS Management Plan</strong> with annual metabolic screening to keep you healthy for decades.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

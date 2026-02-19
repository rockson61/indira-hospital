import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Laparoscopic Hysterectomy Guide & Cost | Indira Hospital Vellore",
  description: "Minimally invasive Laparoscopic Hysterectomy at Indira Super Speciality Hospital, Vellore. Expert gynaecological surgeons offering less pain, smaller incisions, and rapid recovery.",
  keywords: ["Laparoscopic hysterectomy Vellore", "Uterus removal surgery cost", "LAVH TLH Vellore", "Gynaecology surgeon Vellore", "Fibroid uterus removal"]
};

export default function LaparoscopicHysterectomyGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="Obstetrics & Gynaecology"
      departmentSlug="obstetrics-gynaecology"
      title="Laparoscopic Hysterectomy"
      eyebrow="Advanced Gynaecological Surgery"
      description={
        <p>
          Indira Hospital specializes in <strong>Total Laparoscopic Hysterectomy (TLH)</strong> — the most advanced form of minimally invasive uterine removal. Using 3-4 small incisions and HD cameras, our experienced gynecologists achieve the same outcomes as open surgery with a fraction of the recovery time.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹65k – ₹1.0L", icon: "IndianRupee" },
        { label: "Duration", value: "60-100 Mins", icon: "Clock" },
        { label: "Stay", value: "2-3 Days", icon: "Activity" },
        { label: "Recovery", value: "2-3 Weeks", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "lap-vs-open",
            heading: "Laparoscopic vs. Open Hysterectomy",
            description: "Why keyhole surgery is the preferred approach at Indira Hospital:",
            table: {
              headers: ["Factor", "Laparoscopic (TLH)", "Open (Abdominal)"],
              rows: [
                ["Incision", "3-4 small (5-10mm)", "Large abdominal (10-15cm)"],
                ["Blood Loss", "Minimal", "Moderate-High"],
                ["Pain", "Mild-Moderate", "Significant"],
                ["Hospital Stay", "2-3 Days", "4-6 Days"],
                ["Recovery", "2-3 Weeks", "6-8 Weeks"]
              ],
              caption: "Comparison of hysterectomy approaches at Indira Hospital."
            }
          }
        ],
        faqs: [
          {
            question: "Will I go into immediate menopause after a hysterectomy?",
            answer: "It depends on whether the ovaries are removed. A hysterectomy (uterus removal alone) stops periods but does NOT cause menopause. Menopause only occurs if both ovaries are also removed (oophorectomy). We discuss this with every patient pre-operatively."
          }
        ]
      }}
      timeline={{
        title: "Surgical Journey",
        steps: [
          { title: "Pre-op Assessment", description: "Ultrasound, blood tests, consultant anaesthesia review." },
          { title: "Surgery", description: "Uterus (and optionally cervix/ovaries) removed via laparoscopic port sites." },
          { title: "Hospital Stay", description: "Ambulation begins Day 1; light diet. Discharge on Day 2-3." },
          { title: "Home Recovery", description: "Return to light work in 2 weeks. Full activity at 4-6 weeks." }
        ]
      }}
      relatedServices={{
        serviceSlug: "obstetrics-gynaecology",
        related: [
          { title: "PCOS/PCOD Treatment", href: "/services/obstetrics-gynaecology/pcod-pcos-treatment-guide" },
          { title: "High Risk Pregnancy", href: "/services/obstetrics-gynaecology/high-risk-pregnancy-care" },
          { title: "Infertility Evaluation", href: "/services/obstetrics-gynaecology/infertility-evaluation-steps" }
        ]
      }}
      reviews={{ entityName: "Gynaecology Surgery", entitySlug: "obstetrics-gynaecology", entityType: "department" }}
    >
      <section>
        <h2>Expert Minimally Invasive Surgery in Vellore</h2>
        <p>
          Hysterectomy is one of the most common major surgeries performed in women. Modern techniques have transformed this from a large open operation with a weeks-long recovery to a <strong>same-day or next-day discharge procedure</strong> in many centers. Indira Hospital has the team and technology to offer this to women in Vellore and surrounding areas.
        </p>
        <h3>Conditions Treated with Hysterectomy</h3>
        <ul>
          <li>Large fibroid uterus causing heavy bleeding, pain, or pressure symptoms</li>
          <li>Endometriosis unresponsive to hormonal therapy</li>
          <li>Adenomyosis causing debilitating periods</li>
          <li>Uterine prolapse</li>
          <li>Abnormal/pre-cancerous uterine lesions (endometrial hyperplasia)</li>
          <li>Uterine or cervical cancer (oncological hysterectomy)</li>
        </ul>
        <h2>Cost & Insurance</h2>
        <p>
          Laparoscopic Hysterectomy at Indira Hospital costs between <strong>₹65,000 and ₹1,00,000</strong> (all-inclusive). Abdominal hysterectomy is more economical. Both are covered under most major insurances and government schemes. Our counselors will advise you on the most cost-effective approach for your specific condition.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

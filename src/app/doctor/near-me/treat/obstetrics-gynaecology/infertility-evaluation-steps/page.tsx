import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Infertility Evaluation: Steps & Tests | Indira Hospital Vellore",
  description: "Comprehensive Infertility Evaluation for couples at Indira Super Speciality Hospital, Vellore. Expert fertility specialists, advanced diagnostic tests, and personalized treatment plans.",
  keywords: ["Infertility specialist Vellore", "Fertility evaluation steps", "IVF hospital Vellore", "Semen analysis Vellore", "Female infertility test"]
};

export default function InfertilityEvaluationStepsPage() {
  return (
    <SubServiceTemplate
      departmentName="Obstetrics & Gynaecology"
      departmentSlug="obstetrics-gynaecology"
      title="Infertility Evaluation Steps"
      eyebrow="Fertility & Reproductive Medicine"
      description={
        <p>
          Struggling to conceive can be an emotionally challenging journey. Indira Hospital's <strong>Reproductive Medicine</strong> team takes a systematic, compassionate approach to identify the underlying cause of infertility in both partners and design the most effective treatment pathway.
        </p>
      }
      quickFacts={[
        { label: "Consultation", value: "₹700 – ₹1,000", icon: "IndianRupee" },
        { label: "Evaluation", value: "Both Partners", icon: "Activity" },
        { label: "Common Cause", value: "PCOS / Sperm", icon: "ShieldCheck" },
        { label: "Success Rate", value: "IUI: 15-20%", icon: "Star" }
      ]}
      timeline={{
        title: "Infertility Evaluation Pathway",
        steps: [
          { title: "Initial Consultation", description: "Detailed history for both partners — medical, surgical, menstrual, and sexual history.", duration: "Week 1" },
          { title: "Female Investigations", description: "Hormonal panel (FSH, LH, AMH, TSH, Prolactin), HSG (tubal patency), pelvic ultrasound.", duration: "Week 1-2" },
          { title: "Male Investigations", description: "Semen Analysis and anti-sperm antibody testing.", duration: "Week 1-2" },
          { title: "Diagnosis & Planning", description: "Findings reviewed; customized treatment plan (OI, IUI, IVF, or surgery) presented.", duration: "Week 3" }
        ]
      }}
      relatedServices={{
        serviceSlug: "obstetrics-gynaecology",
        related: [
          { title: "PCOS/PCOD Treatment", href: "/doctor/near-me/treat/obstetrics-gynaecology/pcod-pcos-treatment-guide" },
          { title: "High Risk Pregnancy Care", href: "/doctor/near-me/treat/obstetrics-gynaecology/high-risk-pregnancy-care" },
          { title: "Male Infertility Causes", href: "/doctor/near-me/treat/urology/male-infertility-causes" }
        ]
      }}
      reviews={{ entityName: "Fertility Care", entitySlug: "obstetrics-gynaecology", entityType: "department" }}
    >
      <section>
        <h2>Understanding Infertility</h2>
        <p>
          Infertility is defined as the inability to achieve pregnancy after 12 months of regular, unprotected intercourse (6 months if the woman is over 35). It affects approximately 10-15% of couples globally. Crucially, it is a <em>couple's problem</em> — male factor infertility accounts for 40-50% of cases.
        </p>
        <h3>Common Causes in Women</h3>
        <ul>
          <li>PCOS (Polycystic Ovarian Syndrome) — most common cause</li>
          <li>Tubal blockage (from past PID, STI, or endometriosis)</li>
          <li>Diminished Ovarian Reserve (low egg count/quality)</li>
          <li>Uterine abnormalities (fibroids, polyps, septum)</li>
          <li>Thyroid disorders or hyperprolactinemia</li>
        </ul>
        <h3>Common Causes in Men</h3>
        <ul>
          <li>Low sperm count (Oligospermia) or no sperm (Azoospermia)</li>
          <li>Poor sperm motility (Asthenospermia)</li>
          <li>Abnormal sperm morphology (Teratospermia)</li>
          <li>Varicocele (varicose veins in the scrotum)</li>
        </ul>
        <h2>Treatment Options</h2>
        <p>
          Based on the evaluation, our fertility team recommends the least invasive, most cost-effective treatment first:
        </p>
        <ul>
          <li><strong>Ovulation Induction (OI): </strong>Oral medications like Clomiphene or Letrozole with timed intercourse.</li>
          <li><strong>Intrauterine Insemination (IUI):</strong> Washed, concentrated sperm is placed directly into the uterus during ovulation.</li>
          <li><strong>Laparoscopy/Hysteroscopy:</strong> To correct tubal blockage, remove fibroids, or treat endometriosis surgically.</li>
          <li><strong>IVF/ICSI:</strong> For complex cases including severe male factor or failed previous treatments.</li>
        </ul>
      </section>
    </SubServiceTemplate>
  );
}

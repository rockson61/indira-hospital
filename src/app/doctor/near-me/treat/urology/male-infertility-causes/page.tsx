import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Male Infertility: Causes & Treatments | Indira Hospital Vellore",
  description: "Expert Male Infertility diagnosis and treatment at Indira Super Speciality Hospital, Vellore. Urologist and andrologist evaluation: semen analysis, varicocele surgery, and ART procedures.",
  keywords: ["Male infertility Vellore", "Low sperm count treatment", "Azoospermia hospital", "Varicocele surgery Vellore", "Andrologist Vellore"]
};

export default function MaleInfertilityCausesPage() {
  return (
    <SubServiceTemplate
      departmentName="Urology"
      departmentSlug="urology"
      title="Male Infertility: Causes & Treatments"
      eyebrow="Male Reproductive Health"
      description={
        <p>
          Male factor infertility is a contributing cause in <strong>40-50% of all infertile couples</strong>. Despite this, men are often the last to be investigated. Indira Hospital's Urology and Andrology team provides comprehensive male fertility evaluation and treatment — often restoring natural fertility or enabling successful assisted reproduction.
        </p>
      }
      quickFacts={[
        { label: "Prevalence", value: "40-50% of Cases", icon: "Activity" },
        { label: "Key Test", value: "Semen Analysis", icon: "ShieldCheck" },
        { label: "Varicocele Rx", value: "Surgical Fix", icon: "Star" },
        { label: "IVF/ICSI", value: "ART Available", icon: "Clock" }
      ]}
      timeline={{
        title: "Male Fertility Evaluation Pathway",
        steps: [
          { title: "Initial Consultation", description: "Detailed medical, surgical, and sexual history. Physical examination." },
          { title: "Semen Analysis", description: "WHO-standard analysis of count, motility, morphology, and volume." },
          { title: "Hormonal Panel", description: "FSH, LH, Testosterone, Prolactin to identify endocrine causes." },
          { title: "Advanced Tests", description: "DNA fragmentation, genetic testing (Karyotype, AZF deletion) for azoospermia." },
          { title: "Treatment", description: "Medical therapy, varicocele surgery, or ART (IUI/IVF/ICSI) as appropriate." }
        ]
      }}
      relatedServices={{
        serviceSlug: "urology",
        related: [
          { title: "Infertility Evaluation (Female)", href: "/doctor/near-me/treat/obstetrics-gynaecology/infertility-evaluation-steps" },
          { title: "Prostate TURP Surgery", href: "/doctor/near-me/treat/urology/prostate-turp-surgery" },
          { title: "Kidney Stone Prevention", href: "/doctor/near-me/treat/urology/kidney-stone-prevention-guide" }
        ]
      }}
      reviews={{ entityName: "Urology Care", entitySlug: "urology", entityType: "department" }}
    >
      <section>
        <h2>Common Causes of Male Infertility</h2>
        <ul>
          <li><strong>Varicocele (40% of male infertility):</strong> Dilated veins in the scrotum that raise testicular temperature and impair sperm production. Surgically treatable with high success rates.</li>
          <li><strong>Oligospermia:</strong> Low sperm count (&lt;15M/mL). Causes include hormonal imbalance, heat exposure, smoking, and steroid use.</li>
          <li><strong>Azoospermia:</strong> No sperm in ejaculate. Can be obstructive (blockage) or non-obstructive (production failure). Surgical sperm retrieval (TESA/Micro-TESE) is possible for ART.</li>
          <li><strong>Asthenospermia:</strong> Poor sperm motility (&lt;32% progressive motility). May be caused by oxidative stress, infection, or structural sperm defects.</li>
          <li><strong>Teratospermia:</strong> High proportion of abnormally shaped sperm (&gt;96% abnormal by Kruger strict criteria). Often managed with ICSI.</li>
          <li><strong>Retrograde Ejaculation:</strong> Sperm goes into the bladder instead of out. Caused by diabetes, prostate surgery, or certain medications.</li>
        </ul>
        <h2>Treatment Options</h2>
        <ul>
          <li><strong>Varicocelectomy:</strong> Microsurgical repair has a ~60% improvement in semen parameters and 30-40% natural pregnancy rates within 2 years.</li>
          <li><strong>Medical Therapy:</strong> Clomiphene, FSH injections, and antioxidant supplements for hormonal and idiopathic cases.</li>
          <li><strong>Surgical Sperm Retrieval (TESA/PESA/Micro-TESE):</strong> For obstructive or non-obstructive azoospermia — sperm retrieved for use in ICSI.</li>
          <li><strong>IUI and ICSI:</strong> Intrauterine insemination for mild male factor; ICSI (injecting single sperm into egg) for severe male factor.</li>
        </ul>
        <h2>Lifestyle Optimization</h2>
        <p>
          Sperm production cycle is 74 days. Lifestyle changes — stopping smoking, avoiding scrotal heat (tight underwear, laptops on lap, hot water immersion), reducing alcohol, taking antioxidant supplements — can measurably improve semen parameters within 2-3 months.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

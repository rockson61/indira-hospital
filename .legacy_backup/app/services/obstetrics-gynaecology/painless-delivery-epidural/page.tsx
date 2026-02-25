import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Painless Delivery with Epidural Analgesia | Indira Hospital Vellore",
  description: "Safe, effective Painless Delivery (Epidural Analgesia) at Indira Super Speciality Hospital, Vellore. Expert anaesthesiologists and obstetricians for a gentle birth experience.",
  keywords: ["Painless delivery Vellore", "Epidural analgesia Vellore", "Labour pain relief", "Epidural during pregnancy Vellore", "Childbirth anaesthesia"]
};

export default function PainlessDeliveryEpiduralPage() {
  return (
    <SubServiceTemplate
      departmentName="Obstetrics & Gynaecology"
      departmentSlug="obstetrics-gynaecology"
      title="Painless Delivery (Epidural)"
      eyebrow="Labour Analgesia Services"
      description={
        <p>
          <strong>Epidural Analgesia</strong> is the safest and most effective method of pain relief during labour. Administered by our trained obstetric anaesthesiologists, it allows you to remain awake, alert, and in control while experiencing significantly reduced labour pain.
        </p>
      }
      quickFacts={[
        { label: "Epidural Cost", value: "₹8,000 – ₹15,000", icon: "IndianRupee" },
        { label: "Relief Onset", value: "10-20 Minutes", icon: "Clock" },
        { label: "Safety", value: "Well Established", icon: "ShieldCheck" },
        { label: "Move Freely", value: "Walking Epidural", icon: "Activity" }
      ]}
      relatedServices={{
        serviceSlug: "obstetrics-gynaecology",
        related: [
          { title: "Normal vs. C-Section", href: "/services/obstetrics-gynaecology/normal-delivery-vs-c-section" },
          { title: "High Risk Pregnancy Care", href: "/services/obstetrics-gynaecology/high-risk-pregnancy-care" },
          { title: "Infertility Evaluation", href: "/services/obstetrics-gynaecology/infertility-evaluation-steps" }
        ]
      }}
      reviews={{ entityName: "Obstetrics Care", entitySlug: "obstetrics-gynaecology", entityType: "department" }}
    >
      <section>
        <h2>How Does an Epidural Work?</h2>
        <p>
          A thin, flexible catheter is inserted into the <strong>epidural space</strong> outside the spinal cord in the lower back. A continuous infusion of local anaesthetic (like Bupivacaine) is delivered through this catheter, blocking pain signals from the uterus and birth canal from reaching the brain.
        </p>
        <h3>Benefits of Epidural Analgesia</h3>
        <ul>
          <li><strong>Dramatic Pain Relief:</strong> From severe pain to mild pressure or none at all, within 20 minutes.</li>
          <li><strong>Full Awareness:</strong> You remain completely awake, interactive, and can push effectively.</li>
          <li><strong>Reduces Maternal Stress:</strong> Lower circulating stress hormones may actually improve placental blood flow.</li>
          <li><strong>Versatile:</strong> Can be "topped up" for an emergency C-section, avoiding general anaesthesia.</li>
          <li><strong>Walking Epidural:</strong> Lower-dose formulations (CSE) allow maintained sensation and the ability to walk with support.</li>
        </ul>
        <h3>Common Concerns, Answered</h3>
        <ul>
          <li><strong>"Will it harm my baby?"</strong> No. Studies consistently show epidurals are safe for the baby. Neonatal outcomes are excellent.</li>
          <li><strong>"Will it cause back pain?"</strong> The vast majority of post-partum back pain is caused by the strain of pregnancy and delivery itself, not the epidural.</li>
          <li><strong>"Will I push less effectively?"</strong> Modern low-dose epidurals preserve motor function, and the obstetric team guides you through pushing effectively.</li>
          <li><strong>"Will it slow my labour?"</strong> Current evidence shows epidurals may slightly lengthen the active phase but do not increase C-section rates.</li>
        </ul>
        <h2>Our Anaesthesia Team</h2>
        <p>
          Epidural insertion is performed exclusively by our trained, experienced obstetric anaesthesiologists — <strong>24 hours a day, 7 days a week</strong>. You can request an epidural at any point during your labour.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

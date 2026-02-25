import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "High Risk Pregnancy Care | Maternal-Fetal Medicine Vellore",
  description: "Specialized High Risk Pregnancy care at Indira Super Speciality Hospital, Vellore. Expert maternal-fetal medicine specialists for gestational diabetes, preeclampsia, and twin pregnancies.",
  keywords: ["High risk pregnancy Vellore", "Maternal fetal medicine", "Gestational diabetes hospital", "Preeclampsia management Vellore", "Twin pregnancy specialist"]
};

export default function HighRiskPregnancyCarePage() {
  return (
    <SubServiceTemplate
      departmentName="Obstetrics & Gynaecology"
      departmentSlug="obstetrics-gynaecology"
      title="High Risk Pregnancy Care"
      eyebrow="Maternal-Fetal Medicine"
      description={
        <p>
          A pregnancy is considered "high risk" when there are factors that could affect the health of the mother, the baby, or both. Indira Hospital's dedicated <strong>Maternal-Fetal Medicine</strong> team provides expert, compassionate monitoring and intervention to navigate these challenges and maximize outcomes for mother and child.
        </p>
      }
      quickFacts={[
        { label: "NICU", value: "Level 3 On-Site", icon: "ShieldCheck" },
        { label: "Monitoring", value: "Advanced Doppler", icon: "Activity" },
        { label: "Fetal Echo", value: "Available", icon: "Star" },
        { label: "24/7 Obs", value: "Always Available", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "obstetrics-gynaecology",
        related: [
          { title: "Normal vs. C-Section", href: "/doctor/near-me/treat/obstetrics-gynaecology/normal-delivery-vs-c-section" },
          { title: "Painless Delivery (Epidural)", href: "/doctor/near-me/treat/obstetrics-gynaecology/painless-delivery-epidural" },
          { title: "Laparoscopic Hysterectomy", href: "/doctor/near-me/treat/obstetrics-gynaecology/laparoscopic-hysterectomy-guide" }
        ]
      }}
      reviews={{ entityName: "Obstetrics & Gynaecology", entitySlug: "obstetrics-gynaecology", entityType: "department" }}
    >
      <section>
        <h2>What Constitutes a High Risk Pregnancy?</h2>
        <p>
          Several maternal or fetal factors can make a pregnancy high risk. Our specialists manage:
        </p>
        <ul>
          <li><strong>Gestational Diabetes Mellitus (GDM):</strong> Blood sugar elevation during pregnancy requiring dietary and medication management.</li>
          <li><strong>Preeclampsia & Hypertension:</strong> Dangerous high BP during pregnancy with close monitoring and timely delivery planning.</li>
          <li><strong>Twin / Multiple Pregnancies:</strong> Higher risk for preterm labour and growth restriction, requiring frequent monitoring.</li>
          <li><strong>Advanced Maternal Age (&gt;35 years):</strong> Increased risk of chromosomal abnormalities and complications.</li>
          <li><strong>Placenta Previa / Accreta:</strong> Abnormal placental placement requiring specialized surgical team on standby for delivery.</li>
          <li><strong>Previous Caesarean Section:</strong> Management of VBAC (Vaginal Birth After Caesarean) or elective repeat section.</li>
          <li><strong>Fetal Growth Restriction (FGR):</strong> Close Doppler monitoring and precise timing of delivery.</li>
        </ul>
        <h2>Our Comprehensive Monitoring Arsenal</h2>
        <ul>
          <li><strong>Level 2 Anomaly Scan (18-22 weeks):</strong> Detailed anatomical survey of the baby.</li>
          <li><strong>Fetal Echocardiography:</strong> Specialized heart scan for the baby.</li>
          <li><strong>Doppler Velocimetry:</strong> Blood flow assessment in umbilical and fetal vessels to detect placental insufficiency.</li>
          <li><strong>Non-Stress Test (NST):</strong> Regular fetal heart rate monitoring in the last trimester.</li>
        </ul>
        <h2>Level 3 NICU — Always Ready</h2>
        <p>
          For high-risk pregnancies, peace of mind comes from knowing a <strong>Level 3 NICU</strong> is on-site. Our neonatologists are present at deliveries where a sick or premature baby is anticipated, ensuring the best possible start for your newborn.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

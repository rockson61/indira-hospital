import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Normal Delivery vs C-Section: Expert Guide | Indira Hospital Vellore",
  description: "Expert guidance on Normal Delivery vs Caesarean Section at Indira Super Speciality Hospital, Vellore. Our obstetricians prioritize safe vaginal birth while offering C-section when needed.",
  keywords: ["Normal delivery Vellore", "C section hospital Vellore", "Caesarean section cost", "LSCS vs vaginal birth", "Obstetrician Vellore"]
};

export default function NormalDeliveryVsCsectionPage() {
  return (
    <SubServiceTemplate
      departmentName="Obstetrics & Gynaecology"
      departmentSlug="obstetrics-gynaecology"
      title="Normal Delivery vs. C-Section"
      eyebrow="Obstetrics & Birth Planning"
      description={
        <p>
          Every birth is unique. At Indira Hospital, our experienced obstetricians prioritize a <strong>safe, positive birth experience</strong>. We are committed to supporting vaginal birth whenever medically possible, while having the full surgical team and NICU ready for any emergency.
        </p>
      }
      quickFacts={[
        { label: "Normal Delivery", value: "₹20k – ₹35k", icon: "IndianRupee" },
        { label: "C-Section (LSCS)", value: "₹45k – ₹70k", icon: "IndianRupee" },
        { label: "NICU", value: "Level 3 On-Site", icon: "ShieldCheck" },
        { label: "Obstetricians", value: "24/7 Available", icon: "Clock" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "comparison",
            heading: "Normal Delivery vs. Caesarean Section",
            description: "Understanding the key differences to help you make an informed birth plan:",
            table: {
              headers: ["Factor", "Normal (Vaginal) Delivery", "Caesarean Section (LSCS)"],
              rows: [
                ["Recovery", "1-2 Days", "4-5 Days"],
                ["Activity", "Normal in 2-4 Weeks", "Normal in 6-8 Weeks"],
                ["Future Pregnancy", "No restriction", "VBAC or repeat C-section"],
                ["Baby Benefits", "Less respiratory issues", "Can be planned"],
                ["When Indicated", "Uncomplicated Labour", "Medical necessity / Choice"]
              ],
              caption: "Birth plan comparison — discussed with your obstetrician at Indira Hospital."
            }
          }
        ],
        faqs: [
          {
            question: "Can I choose to have a C-section even if vaginal birth is possible?",
            answer: "Patient-requested C-section (CDMR) is a valid option. Our obstetricians will comprehensively counsel you about the benefits and risks of both methods so you can make a fully informed choice."
          }
        ]
      }}
      relatedServices={{
        serviceSlug: "obstetrics-gynaecology",
        related: [
          { title: "Painless Delivery (Epidural)", href: "/services/obstetrics-gynaecology/painless-delivery-epidural" },
          { title: "High Risk Pregnancy Care", href: "/services/obstetrics-gynaecology/high-risk-pregnancy-care" },
          { title: "Infertility Evaluation", href: "/services/obstetrics-gynaecology/infertility-evaluation-steps" }
        ]
      }}
      reviews={{ entityName: "Obstetrics Care", entitySlug: "obstetrics-gynaecology", entityType: "department" }}
    >
      <section>
        <h2>Indira Hospital's Philosophy: Safe Birth First</h2>
        <p>
          We believe in evidence-based obstetrics. Our team uses the <strong>Robson Classification</strong> to continuously audit our C-section rates and ensure that surgical delivery is performed only when genuinely necessary. We actively promote:
        </p>
        <ul>
          <li>Continuous electronic fetal monitoring in labour</li>
          <li>Active management of labour to reduce prolonged labour</li>
          <li>Epidural analgesia to reduce pain and improve labour progress</li>
          <li>VBAC (Vaginal Birth After Caesarean) for eligible candidates</li>
          <li>Partner/family presence during labour for emotional support</li>
        </ul>
        <h3>When is a C-Section Necessary?</h3>
        <p>
          An emergency or elective Caesarean section may be recommended for:
        </p>
        <ul>
          <li>Fetal distress (abnormal heart rate pattern in labour)</li>
          <li>Cephalopelvic disproportion (baby's head too large for the pelvis)</li>
          <li>Placenta previa (placenta blocking the cervix)</li>
          <li>Abnormal fetal position (breech, transverse)</li>
          <li>Labour failing to progress despite adequate contractions</li>
          <li>Maternal conditions (eclampsia, active herpes, HIV)</li>
        </ul>
      </section>
    </SubServiceTemplate>
  );
}

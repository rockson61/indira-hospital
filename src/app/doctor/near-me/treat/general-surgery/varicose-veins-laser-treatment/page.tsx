import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Varicose Veins Laser Treatment (EVLA) | Indira Hospital Vellore",
  description: "Advanced Varicose Veins Laser treatment (EVLA/RFA) at Indira Super Speciality Hospital, Vellore. Painless, scar-free treatment for swollen leg veins with immediate results.",
  keywords: ["Varicose veins treatment Vellore", "EVLA laser vein Vellore", "Varicose veins surgery cost", "Spider veins hospital Vellore", "Vascular surgeon Vellore"]
};

export default function VaricoseVeinsLaserTreatmentPage() {
  return (
    <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
      title="Varicose Veins Laser Treatment"
      eyebrow="Vascular & Interventional"
      description={
        <p>
          Indira Hospital offers <strong>Endovenous Laser Ablation (EVLA)</strong> — the modern, gold-standard treatment for varicose veins. This walk-in/walk-out procedure uses laser energy to permanently seal the abnormal vein from the inside, with no surgical incisions and no general anaesthesia.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹40k – ₹75k", icon: "IndianRupee" },
        { label: "Duration", value: "45-60 Mins", icon: "Clock" },
        { label: "Anaesthesia", value: "Local Tumescent", icon: "ShieldCheck" },
        { label: "Walk Out", value: "Same Day", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "evla-vs-surgery",
            heading: "Laser (EVLA) vs. Traditional Surgery",
            description: "Why EVLA is now the preferred treatment at Indira Hospital:",
            table: {
              headers: ["Factor", "EVLA (Laser)", "Traditional Surgery"],
              rows: [
                ["Incision", "None (Needle Only)", "Multiple cuts"],
                ["Anaesthesia", "Local + Sedation", "General / Spinal"],
                ["Recovery", "1-2 Days", "7-14 Days"],
                ["Scar", "No Scar", "Surgical Scars"],
                ["Recurrence", "~5% at 5 Years", "~10-20% at 5 Years"]
              ],
              caption: "Varicose vein treatment comparison."
            }
          }
        ],
        faqs: [
          {
            question: "Will varicose veins come back after laser treatment?",
            answer: "EVLA has a very high long-term success rate. The treated vein is permanently sealed and is reabsorbed by the body. However, new varicosities can develop from other veins over years, especially without lifestyle changes (weight management, compression stockings)."
          }
        ]
      }}
      relatedServices={{
        serviceSlug: "general-surgery",
        related: [
          { title: "Laser Piles Treatment", href: "/doctor/near-me/treat/general-surgery/laser-piles-treatment-cost" },
          { title: "Laparoscopic Hernia Repair", href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
          { title: "Gallbladder Surgery", href: "/doctor/near-me/treat/general-surgery/gallbladder-stone-surgery" }
        ]
      }}
      reviews={{ entityName: "General Surgery", entitySlug: "general-surgery", entityType: "department" }}
    >
      <section>
        <h2>What are Varicose Veins?</h2>
        <p>
          Varicose veins are twisted, enlarged veins just beneath the skin surface, most often in the legs. They occur when the valves inside leg veins weaken, causing blood to pool and the vein walls to bulge outward. Beyond cosmetic concerns, they can cause:
        </p>
        <ul>
          <li>Aching, heaviness, and fatigue in the legs</li>
          <li>Swollen ankles and feet (oedema)</li>
          <li>Itching and skin discolouration around the ankle</li>
          <li>Venous eczema or skin hardening (lipodermatosclerosis)</li>
          <li>Venous ulcers in severe, untreated cases</li>
        </ul>
        <h3>The EVLA Procedure at Indira Hospital</h3>
        <p>
          Under ultrasound guidance, a thin laser fibre is inserted into the faulty vein through a needle puncture. A tumescent local anaesthetic is injected around the vein for pain control and protection of surrounding tissue. The laser is then fired as the fibre is slowly withdrawn — delivering precise thermal energy that seals the vein permanently. The entire procedure takes under an hour and you walk out of the clinic.
        </p>
        <h2>Book Your Free Vascular Assessment</h2>
        <p>
          Our vascular surgeon performs a duplex ultrasound scan to map your venous system before treatment. This ensures a precise, customized treatment plan. Book your assessment today and take the first step towards lighter, beautiful legs.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

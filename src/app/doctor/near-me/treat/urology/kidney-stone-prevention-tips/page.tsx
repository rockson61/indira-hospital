import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Kidney Stone Prevention Tips & Diet Guide | Indira Hospital Vellore",
  description: "Proven kidney stone prevention tips and diet guidance at Indira Super Speciality Hospital, Vellore. Urologist-recommended strategies to prevent recurrent kidney stone formation.",
  keywords: ["Kidney stone prevention tips", "Prevent kidney stones diet", "Stone recurrence Vellore", "Urologist advice kidney stones", "Hydration kidney stones"]
};

export default function KidneyStonePreventionTipsPage() {
  return (
    <SubServiceTemplate
      departmentName="Urology"
      departmentSlug="urology"
      title="Kidney Stone Prevention Tips"
      eyebrow="Urology & Wellness"
      description={
        <p>
          Having one kidney stone significantly raises your risk of forming another. The good news is that the <strong>right dietary habits and lifestyle changes can reduce your recurrence risk by 50-80%</strong>. Our urology team provides personalized, practical stone prevention advice based on your stone type and metabolic profile.
        </p>
      }
      quickFacts={[
        { label: "Recurrence Risk", value: "50% in 10 Years", icon: "Activity" },
        { label: "Prevention", value: "Highly Effective", icon: "ShieldCheck" },
        { label: "#1 Strategy", value: "Drink 3L Water/Day", icon: "Star" },
        { label: "Stone Check", value: "Annual Ultrasound", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "urology",
        related: [
          { title: "Kidney Stone Laser Surgery", href: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
          { title: "Kidney Stone Prevention Guide", href: "/doctor/near-me/treat/urology/kidney-stone-prevention-guide" },
          { title: "UTI Treatment", href: "/doctor/near-me/treat/urology/uti-treatment-guide" }
        ]
      }}
      reviews={{ entityName: "Urology Care", entitySlug: "urology", entityType: "department" }}
    >
      <section>
        <h2>Top 5 Kidney Stone Prevention Tips</h2>
        <h3>1. Stay Hydrated — Always</h3>
        <p>
          This is the single most evidence-based strategy. Aim to produce at least <strong>2-2.5 litres of urine per day</strong> (your urine should be pale yellow). Most people need to drink 3+ litres of fluid. In summer or during exercise, increase this further. Water is best; lemon water (with citric acid) actively inhibits calcium stone formation.
        </p>
        <h3>2. Reduce Salt Intake</h3>
        <p>
          Excess sodium causes the kidneys to excrete more calcium into the urine — the main ingredient in 80% of all stones. Target &lt;2,300 mg of sodium per day (about 1 teaspoon of salt). Avoid processed foods, pickles, papads, and restaurant food which are high in sodium.
        </p>
        <h3>3. Eat Adequate Calcium (Don't Restrict It!)</h3>
        <p>
          Counterintuitively, <em>restricting dairy actually increases stone risk</em>. Dietary calcium binds to oxalate in the gut, preventing its absorption and excretion in urine. Aim for 1,000-1,200 mg/day from food sources like milk, curd, and paneer. However, avoid high-dose calcium supplements.
        </p>
        <h3>4. Reduce Animal Protein</h3>
        <p>
          High meat consumption raises uric acid levels and urinary calcium while reducing protective citrate. Limit red meat, seafood, and eggs to moderate portions. Replace some animal protein with plant-based sources like lentils, legumes, and nuts (in moderation for oxalate stones).
        </p>
        <h3>5. Limit Oxalate-Rich Foods (for Calcium Oxalate Stones)</h3>
        <p>
          If you have calcium oxalate stones, limit: spinach, almonds, peanuts, chocolate, wheat bran, and regular tea. These are high in oxalate. You don't need to eliminate them — moderation and always consuming them with a calcium-containing food (e.g., almonds with milk) helps.
        </p>
        <h2>Stone-Specific Advice</h2>
        <ul>
          <li><strong>Uric Acid Stones:</strong> Avoid organ meats, shellfish. Take Potassium Citrate to alkalize urine. Consider allopurinol if uric acid is consistently high.</li>
          <li><strong>Struvite Stones:</strong> These are caused by bacteria. Treat all UTIs promptly and completely.</li>
        </ul>
        <h2>Annual Monitoring</h2>
        <p>
          We recommend an annual kidney ultrasound and urine test to catch any new stone formation early — before it causes pain or damage. Our urology clinic provides convenient, affordable annual stone monitoring packages.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

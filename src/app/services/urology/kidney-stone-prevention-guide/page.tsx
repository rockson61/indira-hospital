import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
    title: "Kidney Stone Prevention Guide | Indira Hospital Vellore",
    description: "Comprehensive kidney stone prevention and dietary guidance at Indira Super Speciality Hospital, Vellore. Expert urology and nephrology team identifying recurrence risk and preventing future stones.",
    keywords: ["Kidney stone prevention Vellore", "Stone recurrence diet", "Urologist Vellore", "Nephrolithiasis prevention", "Kidney stone management India"]
};

export default function KidneyStonePreventionGuidePage() {
    return (
        <SubServiceTemplate
      departmentName="Urology"
      departmentSlug="urology"
            title="Kidney Stone Prevention Guide"
            eyebrow="Urology & Metabolic Stone Clinic"
            description={
                <p>
                    After passing or removing a kidney stone, your most important question should be: <em>"How do I stop this happening again?"</em>. At Indira Hospital's <strong>Metabolic Stone Clinic</strong>, our urologists and nephrologists perform comprehensive stone risk analysis to prevent recurrence with evidence-based lifestyle and dietary changes.
                </p>
            }
            quickFacts={[
                { label: "Recurrence", value: "50% in 10 Years", icon: "Activity" },
                { label: "Prevention", value: "Highly Effective", icon: "ShieldCheck" },
                { label: "Key Habit", value: "3L Water/Day", icon: "Star" },
                { label: "Stone Analysis", value: "Every Stone", icon: "Clock" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "stone-types-diet",
                        heading: "Stone Type & Dietary Prevention",
                        description: "Prevention strategy is tailored to the specific stone composition:",
                        table: {
                            headers: ["Stone Type", "Prevalence", "Key Prevention"],
                            rows: [
                                ["Calcium Oxalate", "~70%", "Reduce oxalate foods, increase calcium intake, fluids"],
                                ["Uric Acid", "~10%", "Low purine diet, alkalize urine (citrate), reduce meat"],
                                ["Struvite (Infection)", "~5%", "Treat underlying UTI; eradicate causative bacteria"],
                                ["Calcium Phosphate", "~10%", "Address hyperparathyroidism, reduce sodium, fluids"],
                                ["Cystine", "Rare", "High fluid intake (4L+), alkalize urine, D-Penicillamine"]
                            ],
                            caption: "Stone type determines prevention strategy at our Metabolic Stone Clinic."
                        }
                    }
                ],
                faqs: [
                    {
                        question: "How much water should I drink to prevent kidney stones?",
                        answer: "The goal is to produce at least 2-2.5 litres of urine per day, which typically requires drinking 3+ litres of total fluid. Your urine should be pale yellow or clear. In hot weather or with exercise, you need to drink even more."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "urology",
                related: [
                    { title: "Kidney Stone Laser Surgery", href: "/services/urology/kidney-stone-laser-surgery" },
                    { title: "Prostate TURP Surgery", href: "/services/urology/prostate-turp-surgery" },
                    { title: "UTI Treatment", href: "/services/urology/uti-treatment-guide" }
                ]
            }}
            reviews={{ entityName: "Urology Care", entitySlug: "urology", entityType: "department" }}
        >
            <section>
                <h2>The Metabolic Stone Evaluation</h2>
                <p>
                    Patients who have had more than one kidney stone, or a single stone before age 30, should have a metabolic stone evaluation. This includes:
                </p>
                <ul>
                    <li>Chemical analysis of any passed or retrieved stone fragments</li>
                    <li>24-hour urine collection for calcium, oxalate, citrate, uric acid, pH, and volume</li>
                    <li>Blood tests for calcium, uric acid, parathyroid hormone (PTH), and kidney function</li>
                    <li>Renal tract ultrasound or CTU for anatomical causes of stone formation</li>
                </ul>
                <h3>Key Lifestyle Changes for Everyone</h3>
                <ul>
                    <li><strong>Fluid Intake:</strong> Drink 3+ litres of fluid daily. Water is best. Lemon water (citrate) actively prevents calcium stones.</li>
                    <li><strong>Reduce Sodium:</strong> A high-salt diet raises urinary calcium. Target &lt;2,300 mg/day (&lt;1 teaspoon of salt).</li>
                    <li><strong>Adequate Calcium:</strong> Counterintuitively, <em>low</em> dietary calcium increases oxalate absorption and stone risk. Aim for 1,000-1,200 mg/day from food (not supplements).</li>
                    <li><strong>Limit Animal Protein:</strong> Excess meat raises uric acid and calcium in urine while reducing citrate.</li>
                    <li><strong>Reduce Oxalate-Rich Foods:</strong> Spinach, nuts, chocolate, and tea are high in oxalate. Moderation is key.</li>
                </ul>
                <h2>Medications for Stone Prevention</h2>
                <p>
                    For high-risk patients or specific metabolic abnormalities, medications form an important part of prevention:
                </p>
                <ul>
                    <li><strong>Potassium Citrate:</strong> Alkalizes urine and directly binds to calcium — reduces both calcium oxalate and uric acid stones.</li>
                    <li><strong>Thiazide Diuretics:</strong> Reduce urinary calcium excretion in patients with hypercalciuria.</li>
                    <li><strong>Allopurinol:</strong> For uric acid stones and calcium stones with hyperuricosuria.</li>
                </ul>
            </section>
        </SubServiceTemplate>
    );
}

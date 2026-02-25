import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Fatty Liver Treatment & Diet Plan | Indira Hospital Vellore",
  description: "Expert Fatty Liver (NAFLD/NASH) treatment and diet guidance at Indira Super Speciality Hospital, Vellore. Prevent progression to cirrhosis with personalized care.",
  keywords: ["Fatty liver treatment Vellore", "NAFLD NASH diet", "Liver disease hospital", "Gastroenterologist Vellore", "Hepatologist Vellore"]
};

export default function FattyLiverTreatmentDietPage() {
  return (
    <SubServiceTemplate
      departmentName="Gastroenterology"
      departmentSlug="gastroenterology"
      title="Fatty Liver Treatment & Diet"
      eyebrow="Hepatology & Gastroenterology"
      description={
        <p>
          <strong>Non-Alcoholic Fatty Liver Disease (NAFLD)</strong> is now the most common liver condition in India, driven by obesity and diabetes. Left untreated, it can progress to NASH (Nonalcoholic Steatohepatitis), cirrhosis, and liver failure. Early intervention at Indira Hospital can halt and reverse this progression.
        </p>
      }
      quickFacts={[
        { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
        { label: "Reversible?", value: "Yes (Grade 1-2)", icon: "ShieldCheck" },
        { label: "Key Treatment", value: "Lifestyle Change", icon: "Activity" },
        { label: "Screening", value: "FibroScan / USG", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "gastroenterology",
        related: [
          { title: "Endoscopy Procedure", href: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
          { title: "H.Pylori Infection", href: "/doctor/near-me/treat/gastroenterology/h-pylori-infection-cure" },
          { title: "Pancreatitis Treatment", href: "/doctor/near-me/treat/gastroenterology/pancreatitis-treatment-steps" }
        ]
      }}
      reviews={{ entityName: "Hepatology Care", entitySlug: "gastroenterology", entityType: "department" }}
    >
      <section>
        <h2>Understanding Fatty Liver Disease</h2>
        <p>
          Fatty liver is diagnosed when more than 5% of the liver weight is made up of fat. While Grade 1 (mild) fatty liver is often benign, <strong>Grade 2-3 NASH</strong> involves active inflammation and can scar the liver (fibrosis), eventually leading to cirrhosis.
        </p>
        <h3>Risk Factors</h3>
        <ul>
          <li>Obesity or central adiposity (belly fat)</li>
          <li>Type 2 Diabetes and Insulin Resistance</li>
          <li>High blood triglycerides and cholesterol</li>
          <li>Metabolic Syndrome</li>
          <li>Rapid weight loss or malnutrition (paradoxically)</li>
        </ul>
        <h2>Treatment: Diet, Lifestyle & Medication</h2>
        <p>
          There is no single approved drug for NAFLD, but our multidisciplinary team — including gastroenterologists, diabetologists, and nutritionists — designs a <strong>coordinated treatment plan</strong>:
        </p>
        <ul>
          <li><strong>Weight Loss:</strong> A 7-10% reduction in body weight can dramatically reduce liver fat and inflammation.</li>
          <li><strong>Dietary Changes:</strong> Mediterranean-style diet, reduced fructose (sweetened drinks), and refined carbohydrates.</li>
          <li><strong>Exercise:</strong> 150-300 minutes per week of moderate aerobic exercise directly reduces liver fat.</li>
          <li><strong>Diabetes & Cholesterol Control:</strong> Optimizing Vitamin E, and medications like Pioglitazone or GLP-1 agonists in selected patients.</li>
        </ul>
        <h2>FibroScan: Non-Invasive Liver Staging</h2>
        <p>
          We use <strong>FibroScan (Transient Elastography)</strong> — a painless, bedside ultrasound-based test that measures liver stiffness and fat content in minutes, often replacing the need for a liver biopsy for baseline staging.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

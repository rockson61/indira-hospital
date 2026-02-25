import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Pancreatitis Treatment & Recovery Steps | Indira Hospital Vellore",
  description: "Expert Pancreatitis (Acute & Chronic) treatment at Indira Super Speciality Hospital, Vellore. Gastroenterology and surgical team managing complex pancreatic disease.",
  keywords: ["Pancreatitis treatment Vellore", "Acute chronic pancreatitis hospital", "Pancreatic pain specialist", "Gastroenterology Vellore", "Pancreas disease treatment"]
};

export default function PancreatitrisTreatmentStepsPage() {
  return (
    <SubServiceTemplate
      departmentName="Gastroenterology"
      departmentSlug="gastroenterology"
      title="Pancreatitis Treatment"
      eyebrow="Advanced Gastroenterology"
      description={
        <p>
          Pancreatitis, whether acute or chronic, is a serious condition requiring expert gastroenterological and surgical management. At Indira Super Speciality Hospital, our multidisciplinary team provides comprehensive care from initial emergency stabilization through to long-term recovery.
        </p>
      }
      quickFacts={[
        { label: "Type", value: "Acute & Chronic", icon: "Activity" },
        { label: "ICU", value: "If Severe Acute", icon: "ShieldCheck" },
        { label: "Endoscopy", value: "ERCP Available", icon: "Star" },
        { label: "Diet Mgmt", value: "Specialist-Led", icon: "Clock" }
      ]}
      timeline={{
        title: "Treatment Pathway for Acute Pancreatitis",
        steps: [
          { title: "Emergency Admission", description: "IV fluids, pain control, and bowel rest (NPO) to allow the pancreas to recover.", duration: "Days 1-3" },
          { title: "Monitoring", description: "Regular blood tests (Amylase, Lipase), CT scan to assess severity and detect complications.", duration: "Days 2-5" },
          { title: "Nutritional Support", description: "Early enteral feeding via nasojejunal tube or gradual oral feeding to promote recovery.", duration: "Days 3-7" },
          { title: "Addressing the Cause", description: "Gallstone removal (ERCP/cholecystectomy) or alcohol abstinence counselling.", duration: "Week 2+" }
        ]
      }}
      relatedServices={{
        serviceSlug: "gastroenterology",
        related: [
          { title: "Gallbladder Stone Surgery", href: "/services/general-surgery/gallbladder-stone-surgery" },
          { title: "Colonoscopy Screening", href: "/services/gastroenterology/colonoscopy-screening-cost" },
          { title: "Fatty Liver Treatment", href: "/services/gastroenterology/fatty-liver-treatment-diet" }
        ]
      }}
      reviews={{ entityName: "Gastroenterology", entitySlug: "gastroenterology", entityType: "department" }}
    >
      <section>
        <h2>Acute vs. Chronic Pancreatitis</h2>
        <p>
          <strong>Acute Pancreatitis</strong> is a sudden inflammation of the pancreas, most commonly caused by gallstones or alcohol. Severity ranges from mild (resolves in a few days) to severe (requiring ICU care with systemic complications). <strong>Chronic Pancreatitis</strong> is a progressive, long-standing inflammation associated with permanent scarring, malabsorption, and diabetes.
        </p>
        <h3>ERCP for Biliary Pancreatitis</h3>
        <p>
          Gallstone-induced pancreatitis (biliary pancreatitis) requires removal of the stones from the common bile duct. We perform <strong>Endoscopic Retrograde Cholangiopancreatography (ERCP)</strong> — a minimally invasive procedure to extract stones and stent the duct, using the latest high-definition duodenoscopes.
        </p>
        <h2>Chronic Pancreatitis Management</h2>
        <p>
          Long-term care focuses on:
        </p>
        <ul>
          <li><strong>Pancreatic Enzyme Replacement Therapy (PERT):</strong> Capsules taken with meals to aid digestion and prevent malnutrition.</li>
          <li><strong>Pain Management:</strong> Tailored analgesic regimen; endoscopic celiac plexus block for refractory pain.</li>
          <li><strong>Diabetes Management:</strong> Pancreatic diabetes (Type 3c) requires careful insulin management with low hypoglycemia risk.</li>
          <li><strong>Surgical Options:</strong> Lateral Pancreaticojejunostomy (Puestow procedure) for selected patients with dilated pancreatic duct.</li>
        </ul>
      </section>
    </SubServiceTemplate>
  );
}

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Breast Cancer Screening: Mammography & Guide | Indira Hospital Vellore",
  description: "Advanced Breast Cancer Screening with Digital Mammography at Indira Super Speciality Hospital, Vellore. Early detection specialist team for comprehensive breast health.",
  keywords: ["Breast cancer screening Vellore", "Mammography cost Vellore", "Breast lump check", "Oncology hospital Vellore", "Women's cancer screening"]
};

export default function BreastCancerScreeningGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="Oncology"
      departmentSlug="oncology"
      title="Breast Cancer Screening Guide"
      eyebrow="Oncology & Women's Health"
      description={
        <p>
          <strong>Breast cancer</strong> is the most common cancer in Indian women. Early detection through screening dramatically improves survival rates — Stage 1 breast cancer has a 98%+ 5-year survival rate. Indira Hospital's oncology team provides comprehensive breast health screening and evaluation.
        </p>
      }
      quickFacts={[
        { label: "Mammogram Cost", value: "₹1,500 – ₹2,500", icon: "IndianRupee" },
        { label: "Duration", value: "20-30 Mins", icon: "Clock" },
        { label: "Start At", value: "Age 40 (Annual)", icon: "Activity" },
        { label: "Survival (Stage 1)", value: "98%+", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "oncology",
        related: [
          { title: "Surgical Oncology", href: "/doctor/near-me/treat/oncology/surgical-oncology-overview" },
          { title: "Chemotherapy Guide", href: "/doctor/near-me/treat/oncology/chemotherapy-side-effects" },
          { title: "Breast Lump Removal", href: "/doctor/near-me/treat/general-surgery/breast-lump-removal" }
        ]
      }}
      reviews={{ entityName: "Oncology Care", entitySlug: "oncology", entityType: "department" }}
    >
      <section>
        <h2>Why Breast Cancer Screening is Life-Saving</h2>
        <p>
          Over 70% of breast cancers in India are diagnosed at an advanced stage (Stage 3 or 4). This is largely because of delayed screening and lack of awareness. A simple mammogram can detect cancers <strong>2-3 years before they can be felt</strong> as a lump, at a stage when treatment is most effective and breast-conserving surgery is possible.
        </p>
        <h3>Screening Methods Available at Indira Hospital</h3>
        <ul>
          <li><strong>Digital Mammography:</strong> Gold standard for women 40+. Annual screening recommended. High accuracy with lower radiation than traditional film X-ray.</li>
          <li><strong>Breast Ultrasound:</strong> Recommended for women under 40, those with dense breasts, or as an adjunct to mammography. No radiation.</li>
          <li><strong>MRI Breast:</strong> For high-risk women (BRCA gene mutation carriers) or to characterize lesions seen on mammogram.</li>
          <li><strong>Fine Needle Aspiration Cytology (FNAC) / Core Biopsy:</strong> For suspicious lumps. Performed in-clinic; results in 24-48 hours.</li>
        </ul>
        <h2>Who Should be Screened?</h2>
        <ul>
          <li><strong>All Women 40+:</strong> Annual mammogram screening.</li>
          <li><strong>High-Risk Women (30-40):</strong> Close family history of breast or ovarian cancer; annual MRI + mammogram.</li>
          <li><strong>Any Woman with Symptoms:</strong> A new lump, nipple discharge, skin thickening, or dimpling warrants immediate evaluation regardless of age.</li>
        </ul>
        <h2>Comprehensive Breast Clinic</h2>
        <p>
          Our Multidisciplinary Breast Clinic brings together a surgical oncologist, radiologist, pathologist, and medical oncologist. If a suspicious lesion is found, you receive a complete diagnosis and treatment plan in a single visit — eliminating the anxiety of multiple appointments across different specialists.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

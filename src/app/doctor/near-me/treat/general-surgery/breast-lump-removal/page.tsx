import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Breast Lump Removal (Lumpectomy) | Indira Hospital Vellore",
  description: "Expert Breast Lump Removal surgery (Lumpectomy/WLE) at Indira Super Speciality Hospital, Vellore. Oncoplastic techniques to treat breast lumps with excellent cosmetic outcomes.",
  keywords: ["Breast lump removal Vellore", "Lumpectomy cost India", "Fibroadenoma surgery Vellore", "Breast biopsy hospital", "Breast surgeon Vellore"]
};

export default function BreastLumpRemovalPage() {
  return (
    <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
      title="Breast Lump Removal"
      eyebrow="Breast Surgery"
      description={
        <p>
          Finding a breast lump is understandably frightening, but most breast lumps are <strong>benign (non-cancerous)</strong>. Our breast surgery team provides rapid assessment, accurate diagnosis, and if needed, minimally disruptive lump removal with careful attention to cosmetic outcomes.
        </p>
      }
      quickFacts={[
        { label: "Cost (Benign)", value: "₹25k – ₹45k", icon: "IndianRupee" },
        { label: "Duration", value: "30-60 Mins", icon: "Clock" },
        { label: "Anaesthesia", value: "Local / GA", icon: "ShieldCheck" },
        { label: "Same Day", value: "Day Surgery", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "general-surgery",
        related: [
          { title: "Breast Cancer Screening", href: "/doctor/near-me/treat/oncology/breast-cancer-screening-guide" },
          { title: "Thyroid Surgery", href: "/doctor/near-me/treat/general-surgery/thyroid-surgery-guide" },
          { title: "Surgical Oncology", href: "/doctor/near-me/treat/oncology/surgical-oncology-overview" }
        ]
      }}
      reviews={{ entityName: "General Surgery", entitySlug: "general-surgery", entityType: "department" }}
    >
      <section>
        <h2>Types of Breast Lumps We Treat</h2>
        <ul>
          <li><strong>Fibroadenoma:</strong> The most common benign breast lump in young women. Firm, smooth, mobile lumps. Large or growing fibroadenomas are excised.</li>
          <li><strong>Breast Cysts:</strong> Fluid-filled sacs. Simple cysts can be aspirated (drained) in clinic. Complex cysts are surgically removed.</li>
          <li><strong>Breast Abscess:</strong> Infected lump with pus. Aspirated or I&D (Incision and Drainage) as appropriate.</li>
          <li><strong>Phyllodes Tumour:</strong> Rare breast tumour requiring wide local excision with clear margins.</li>
          <li><strong>Early Breast Cancer (Lumpectomy/WLE):</strong> Breast conserving surgery for small cancers ≤4-5cm, achieving cure rates equivalent to mastectomy when combined with radiation.</li>
        </ul>
        <h2>Our Diagnostic Approach: "Triple Assessment"</h2>
        <p>
          All breast lumps are evaluated using the gold-standard <strong>Triple Assessment</strong>:
        </p>
        <ul>
          <li><strong>Clinical Examination:</strong> Specialist breast examination.</li>
          <li><strong>Imaging:</strong> Ultrasound ± Mammogram based on age and lump characteristics.</li>
          <li><strong>Needle Biopsy:</strong> FNAC or Core Cut Biopsy for tissue diagnosis.</li>
        </ul>
        <p>
          This systematic approach ensures a definitive diagnosis before any surgery is planned. Results are typically available within 24-48 hours.
        </p>
        <h3>Oncoplastic Technique: Removing Lumps Beautifully</h3>
        <p>
          For lumpectomies, our surgeons use <strong>oncoplastic principles</strong> — hiding incisions in the breast fold (periareolar or inframammary), using glandular reshaping to fill the defect, and achieving excellent cosmetic results even for larger excisions.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

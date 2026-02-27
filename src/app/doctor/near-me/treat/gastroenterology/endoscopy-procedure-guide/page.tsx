import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Endoscopy Procedure Guide | Indira Super Speciality Hospital Vellore",
  description: "Advanced Endoscopy Procedure Guide at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function EndoscopyProcedureGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="Gastroenterology"
      departmentSlug="gastroenterology"
      title="Endoscopy Procedure Guide"
      eyebrow="Gastroenterology Treatment"
      description={
        <p>
          High-definition diagnostic <strong>Upper GI Endoscopy (OGD)</strong> and <strong>Colonoscopy</strong> services using advanced video endoscopes. Led by senior gastroenterologists for accurate diagnosis of digestive, liver, and pancreatic disorders.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹3,000 – ₹8,000", icon: "IndianRupee" },
        { label: "Duration", value: "15–30 Minutes", icon: "Clock" },
        { label: "Recovery", value: "2–4 Hours", icon: "Activity" },
        { label: "Accuracy", value: "High-Def", icon: "Eye" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "endoscopy-types",
            heading: "Diagnostic & Therapeutic Endoscopy",
            description: "We provide specialized endoscopic services for various digestive conditions:",
            table: {
              headers: ["Service", "Purpose", "Duration", "Preparation"],
              rows: [
                ["Upper GI (OGD)", "Stomach/Esophagus", "15 Mins", "6h Fasting"],
                ["Colonoscopy", "Large Intestine", "30 Mins", "Full Bowel Prep"],
                ["Sigmoidoscopy", "Lower Colon", "20 Mins", "Enema Prep"],
                ["Endoscopic Biopsy", "Tissue Sampling", "Extra 5 Mins", "Same as OGD"]
              ],
              caption: "Endoscopic diagnostic services available at Indira Hospital's Gastroenterology unit."
            }
          },
          {
            id: "indications",
            heading: "When do you need an Endoscopy?",
            bullets: [
              "Chronic acid reflux or GERD that doesn't resolve with medicine",
              "Persistent abdominal pain, bloating, or nausea",
              "Difficulty in swallowing (Dysphagia) or feeling of food 'stuck'",
              "Unexplained weight loss or loss of appetite",
              "Screening for Stomach or Colorectal cancers"
            ]
          },
          {
            id: "procedure",
            heading: "Life-Saving Therapeutic Procedures",
            description: "Beyond diagnosis, our senior specialists perform therapeutic interventions during endoscopy:",
            bullets: [
              "Variceal Banding (EVL) for preventing liver-related bleeding",
              "Endoscopic Polypectomy: Removing pre-cancerous growths",
              "Stricture Dilatation: Widening a narrowed food pipe",
              "Foreign Body Removal from the food pipe or stomach"
            ]
          }
        ],
        faqs: [
          {
            question: "Is endoscopy painful?",
            answer: "The procedure can be slightly uncomfortable, but it is not painful. At Indira Hospital, we offer 'Conscious Sedation' so you are relaxed and won't feel any pain."
          },
          {
            question: "How long does it take to get the report?",
            answer: "For diagnostic endoscopy, high-definition images and preliminary reports are provided immediately after the procedure."
          }
        ]
      }}
      timeline={{
        title: "Your Procedure Steps",
        steps: [
          { title: "Preparation", description: "6-8 hours of strict fasting for clear view." },
          { title: "Sedation", description: "Optional mild sedation for complete comfort." },
          { title: "The Procedure", description: "Safe insertion of the flexible scope (10-15 mins)." },
          { title: "Post-op Rest", description: "Recovery in a specialized room (30-60 mins)." }
        ]
      }}
      relatedServices={{
        serviceSlug: "gastroenterology/endoscopy-procedure-guide",
        related: [
          { title: "Colonoscopy Guide", href: "/doctor/near-me/treat/gastroenterology/colonoscopy" },
          { title: "Liver Care", href: "/doctor/near-me/treat/gastroenterology/liver-diseases" }
        ]
      }}
      reviews={{
        entityName: "Endoscopy Procedure Guide",
        entitySlug: "gastroenterology/endoscopy-procedure-guide"
      }}
    >
      <section>
        <h2>Advanced High-Definition Endoscopy in Vellore</h2>
        <p>
          An Upper GI Endoscopy (also known as OGD) is a vital diagnostic tool that allows our specialists to look directly at the lining of your upper digestive tract. We use the latest <strong>HD Video Endoscopes</strong> to detect ulcers, inflammation, and early-stage tumors with pinpoint accuracy.
        </p>

        <h3>Why Choose Indira Hospital for Endoscopy?</h3>
        <p>
          We maintain the highest standards of hygiene and sterilization. Each endoscope undergoes a 7-step mechanized disinfection process. Our dedicated recovery suites and senior nursing staff ensure you are comfortable before, during, and after the procedure.
        </p>

        <div className="my-8 p-6 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-3xl border border-fuchsia-100 dark:border-fuchsia-800">
          <h4 className="text-xl font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-4 tracking-tight">Same-Day Diagnostic Results</h4>
          <p className="text-slate-700 dark:text-slate-300">
            We understand the anxiety of waiting for results. Our gastroenterology lab provides <strong>instant high-quality printouts</strong> of your endoscopy images and a detailed report right after your procedure.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center gap-2 font-medium text-fuchsia-800 dark:text-fuchsia-200"><CheckCircle className="w-4 h-4" /> NABL Accredited Lab</li>
            <li className="flex items-center gap-2 font-medium text-fuchsia-800 dark:text-fuchsia-200"><CheckCircle className="w-4 h-4" /> HD Digital Imaging</li>
            <li className="flex items-center gap-2 font-medium text-fuchsia-800 dark:text-fuchsia-200"><CheckCircle className="w-4 h-4" /> Certified Sterilization</li>
            <li className="flex items-center gap-2 font-medium text-fuchsia-800 dark:text-fuchsia-200"><CheckCircle className="w-4 h-4" /> Senior Gastroenterologists</li>
          </ul>
        </div>

        <h2>Cost & Appointment Booking</h2>
        <p>
          Diagnostic Endoscopy (OGD) packages start at <strong>₹3,000</strong>. We also offer emergency endoscopy services for foreign body removals or GI bleeding cases. You can book an appointment online or visit our 24/7 emergency department for urgent cases.
        </p>
      </section>
    </SubServiceTemplate>
  );
}

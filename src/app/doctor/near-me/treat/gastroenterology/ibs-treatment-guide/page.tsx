import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Irritable Bowel Syndrome (IBS) Treatment | Indira Hospital Vellore",
    description: "Expert IBS (Irritable Bowel Syndrome) diagnosis and treatment at Indira Hospital, Vellore. Dietary counselling, stress management, and evidence-based medication therapy.",
    keywords: ["IBS treatment Vellore", "Irritable bowel syndrome Vellore", "IBS doctor Tamil Nadu", "Digestive disorder treatment", "Gastroenterologist Vellore", "Gut health specialist"]
};

export default function IBSTreatmentPage() {
    return (
        <SubServiceTemplate
            departmentName="Gastroenterology"
            departmentSlug="gastroenterology"
            title="IBS (Irritable Bowel Syndrome) Treatment"
            eyebrow="Functional Gut Disorders"
            description={
                <p>
                    <strong>Irritable Bowel Syndrome (IBS)</strong> is one of the most common functional gastrointestinal disorders, affecting up to 15% of the population. Characterized by recurrent abdominal pain, bloating, and altered bowel habits, IBS significantly impacts daily life. At Indira Hospital, our gastroenterologists offer a <strong>comprehensive, evidence-based treatment approach</strong> that goes far beyond just prescribing antispasmodics.
                </p>
            }
            quickFacts={[
                { label: "OPD Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "Diagnosis", value: "Rome IV Criteria", icon: "Activity" },
                { label: "Treatment", value: "Multi-modal Approach", icon: "ShieldCheck" },
                { label: "Follow-up", value: "Monthly Initially", icon: "Clock" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "ibs-subtypes",
                        heading: "IBS Subtypes — Tailored Treatment",
                        description: "Treatment is individualized based on your dominant symptom pattern (Rome IV classification):",
                        table: {
                            headers: ["IBS Subtype", "Main Symptom", "First-Line Treatment"],
                            rows: [
                                ["IBS-D (Diarrhea-predominant)", "Loose stools, urgency", "Loperamide, Rifaximin, Low-FODMAP diet"],
                                ["IBS-C (Constipation-predominant)", "Hard stools, straining", "Psyllium, Linaclotide, Osmotic laxatives"],
                                ["IBS-M (Mixed)", "Alternating bowel habits", "Dietary modification, antispasmodics"],
                                ["IBS-U (Unclassified)", "Does not fit above", "Comprehensive symptom management"]
                            ],
                            caption: "Individualized IBS management at Indira Hospital Gastroenterology OPD."
                        }
                    },
                    {
                        id: "diet",
                        heading: "Low-FODMAP Diet & Lifestyle Changes",
                        bullets: [
                            "Low-FODMAP diet: Eliminates fermentable carbohydrates that trigger symptoms",
                            "Soluble fibre supplementation (psyllium husk) for IBS-C",
                            "Regular aerobic exercise shown to reduce symptom severity by 40%",
                            "Gut-directed hypnotherapy and CBT for gut-brain axis modulation",
                            "Probiotic therapy (specific strains) for bloating and diarrhoea-predominant IBS",
                            "Stress management techniques: mindfulness, yoga, sleep hygiene"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "How is IBS diagnosed?",
                        answer: "IBS is a clinical diagnosis based on Rome IV criteria (recurring abdominal pain ≥1 day/week for 3 months with ≥2 of: related to defecation, change in stool frequency, or change in stool form). We exclude inflammatory bowel disease, celiac disease, and colorectal cancer with targeted investigations."
                    },
                    {
                        question: "Is IBS dangerous? Can it turn into cancer?",
                        answer: "IBS itself is not dangerous and does not increase the risk of colon cancer or inflammatory bowel disease. However, ongoing symptoms significantly impact quality of life and require proper management."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "gastroenterology",
                related: [
                    { title: "Acid Reflux / GERD", href: "/doctor/near-me/treat/gastroenterology/acid-reflux-gerd-management" },
                    { title: "Colonoscopy Screening", href: "/doctor/near-me/treat/gastroenterology/colonoscopy-screening-cost" },
                    { title: "H. Pylori Cure", href: "/doctor/near-me/treat/gastroenterology/h-pylori-infection-cure" }
                ]
            }}
            reviews={{
                entityName: "Gastroenterology",
                entitySlug: "gastroenterology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Understanding IBS — Beyond the Gut</h2>
                <p>
                    Modern research has established IBS as a <strong>gut-brain axis disorder</strong>. The enteric nervous system (the "second brain") in the gut communicates bidirectionally with the central nervous system. Stress, anxiety, and depression profoundly influence gut motility, visceral sensitivity, and intestinal permeability.
                </p>

                <h3>Red Flag Symptoms — When IBS is Not IBS</h3>
                <p>Our gastroenterologist will carefully screen for the following "alarm features" that warrant urgent investigation:</p>
                <ul>
                    <li><strong>Rectal bleeding or blood in stool</strong></li>
                    <li><strong>Unintentional weight loss (&gt;5% in 6 months)</strong></li>
                    <li><strong>Anaemia (low haemoglobin)</strong></li>
                    <li><strong>Nocturnal symptoms</strong> (waking from sleep with diarrhoea)</li>
                    <li><strong>Family history</strong> of colorectal cancer or IBD</li>
                    <li><strong>Fever</strong> or evidence of systemic inflammation</li>
                </ul>
                <p>If any of these are present, a colonoscopy and blood work will be performed urgently.</p>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 rounded-[2.5rem] border border-fuchsia-100 dark:border-fuchsia-900 shadow-sm dark:shadow-slate-900/30">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-fuchsia-300 mb-4 tracking-tight">Our IBS & Functional Gut Clinic</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Dedicated Functional GI Clinic (Tue & Fri)",
                            "Dietitian-Led Low-FODMAP Counselling",
                            "Hydrogen Breath Test for SIBO",
                            "Gut Microbiome Assessment"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Book Your IBS Consultation</h2>
                <p>
                    Struggling with chronic bloating, cramping, or unpredictable bowel habits? Our gastroenterologist will give you a precise diagnosis and a structured treatment plan — not just symptomatic relief, but lasting improvement in gut health and quality of life.
                </p>
            </section>
        </SubServiceTemplate>
    );
}

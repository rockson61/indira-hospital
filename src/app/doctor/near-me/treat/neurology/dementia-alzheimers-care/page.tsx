import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Dementia & Alzheimer's Care | Indira Hospital Vellore",
    description: "Comprehensive Memory Clinic and Dementia Care at Indira Hospital, Vellore. Diagnosis, medication, cognitive therapy, and caregiver support for Alzheimer's and other dementias.",
    keywords: ["Dementia treatment Vellore", "Alzheimer's doctor Vellore", "Memory clinic Vellore", "Cognitive decline treatment", "Neurologist Vellore", "Aged care neurology"]
};

export default function DementiaCareePage() {
    return (
        <SubServiceTemplate
            departmentName="Neurology"
            departmentSlug="neurology"
            title="Dementia & Alzheimer's Care"
            eyebrow="Memory & Cognitive Health"
            description={
                <p>
                    <strong>Dementia</strong> is not a normal part of ageing — it is a syndrome of progressive cognitive decline severe enough to interfere with daily life. <strong>Alzheimer's disease</strong> accounts for 60-70% of all dementia cases. Indira Hospital's Neurology department offers a dedicated <strong>Memory Clinic</strong> providing early diagnosis, evidence-based treatment, and compassionate support for patients and their families.
                </p>
            }
            quickFacts={[
                { label: "OPD Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "MMSE / MoCA Test", value: "Done at First Visit", icon: "Activity" },
                { label: "MRI Brain", value: "Advanced Protocol", icon: "ShieldCheck" },
                { label: "Caregiver Support", value: "Included in Plan", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "types",
                        heading: "Types of Dementia We Treat",
                        description: "Our neurologists are trained to differentiate the specific type of dementia — critical for selecting the right treatment:",
                        table: {
                            headers: ["Type", "Key Feature", "Treatment Focus"],
                            rows: [
                                ["Alzheimer's Disease", "Memory loss first; amyloid plaques", "AChEIs, Memantine, lifestyle modification"],
                                ["Vascular Dementia", "Stepwise decline; history of strokes", "Vascular risk factor control"],
                                ["Lewy Body Dementia", "Visual hallucinations + parkinsonism", "Rivastigmine; avoid antipsychotics"],
                                ["Frontotemporal Dementia", "Personality/behavior changes first", "Behavioral medication, SSRIs"],
                                ["Mixed Dementia", "Alzheimer's + vascular features", "Combined approach"]
                            ],
                            caption: "Differentiation requires detailed clinical assessment and neuroimaging at Indira Hospital."
                        }
                    },
                    {
                        id: "treatment",
                        heading: "Our Dementia Management Approach",
                        bullets: [
                            "Cholinesterase inhibitors (Donepezil, Rivastigmine) to slow cognitive decline",
                            "Memantine for moderate-to-severe Alzheimer's disease",
                            "Aggressive vascular risk factor control (BP, diabetes, lipids) for vascular dementia",
                            "Cognitive Stimulation Therapy (CST) and reminiscence therapy",
                            "Behaviour management: evidence-based strategies for agitation and aggression",
                            "Caregiver education and burnout prevention",
                            "Safety assessment: driving, cooking, medication management at home"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "What is the difference between normal forgetfulness and dementia?",
                        answer: "Normal age-related forgetfulness means forgetting where you placed your keys but remembering later. Dementia involves forgetting conversations you just had, getting lost in familiar places, or being unable to manage daily tasks you previously handled easily."
                    },
                    {
                        question: "Is there a cure for Alzheimer's disease?",
                        answer: "Currently, there is no cure. However, available medications can slow the progression and improve quality of life for years. New disease-modifying therapies (anti-amyloid antibodies) are showing promise in clinical trials."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "neurology",
                related: [
                    { title: "Parkinson's Disease Care", href: "/doctor/near-me/treat/neurology/parkinsons-disease-care" },
                    { title: "Stroke Recovery", href: "/doctor/near-me/treat/neurology/stroke-recovery-exercises" },
                    { title: "Epilepsy Treatment", href: "/doctor/near-me/treat/neurology/epilepsy-treatment-options" }
                ]
            }}
            reviews={{
                entityName: "Neurology Care",
                entitySlug: "neurology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Indira Hospital Memory Clinic</h2>
                <p>
                    Our <strong>Memory Clinic</strong> provides a structured, one-stop service for individuals with cognitive concerns. At the first visit, we perform a detailed cognitive assessment using validated tools (MMSE, MoCA, CDR) and order appropriate investigations to establish a diagnosis and plan treatment.
                </p>

                <h3>What Investigations are Done?</h3>
                <ul>
                    <li><strong>Neuropsychological Testing:</strong> Formal cognitive assessment covering memory, language, attention, and executive function</li>
                    <li><strong>MRI Brain (Dementia Protocol):</strong> Assesses hippocampal atrophy, vascular changes, and rules out treatable causes</li>
                    <li><strong>Blood Tests:</strong> B12, folate, thyroid function, syphilis, HIV — all treatable causes of cognitive decline</li>
                    <li><strong>CSF Biomarkers (where indicated):</strong> Aβ42/T-tau/P-tau for Alzheimer's confirmation</li>
                    <li><strong>EEG:</strong> Useful in Creutzfeldt-Jakob disease and certain epileptic encephalopathies</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-fuchsia-50 to-fuchsia-50 dark:from-violet-900/10 dark:to-fuchsia-900/10 rounded-[2.5rem] border border-violet-100 dark:border-violet-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-violet-300 mb-4 tracking-tight">Holistic Support for Families</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Monthly Memory Clinic OPD",
                            "Caregiver Training & Burnout Support",
                            "Home Safety Assessment Guidance",
                            "Dementia Support Group (via NGO partners)"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Early Diagnosis Makes a Difference</h2>
                <p>
                    Research consistently shows that <strong>early diagnosis and intervention</strong> significantly slows functional decline. If you notice memory changes in yourself or a loved one — especially confusion about dates, getting lost, repetitive questioning, or difficulty with familiar tasks — bring them to our Memory Clinic promptly.
                </p>
            </section>
        </SubServiceTemplate>
    );
}

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
    title: "UTI Urinary Tract Infection Treatment | Indira Hospital Vellore",
    description: "Expert UTI diagnosis and treatment at Indira Super Speciality Hospital, Vellore. Urology specialists managing recurrent UTIs, resistant infections, and structural urinary tract causes.",
    keywords: ["UTI treatment Vellore", "Urinary tract infection hospital", "Recurrent UTI specialist", "Urine infection antibiotic Vellore", "Urologist Vellore"]
};

export default function UTITreatmentGuidePage() {
    return (
        <SubServiceTemplate
      departmentName="Urology"
      departmentSlug="urology"
            title="UTI Treatment Guide"
            eyebrow="Urology & Infectious Disease"
            description={
                <p>
                    Urinary Tract Infections (UTIs) are among the most common bacterial infections, particularly in women. At Indira Hospital, our urology team provides accurate diagnosis and targeted antibiotic treatment — and critically, investigates and eliminates <strong>underlying structural or functional causes</strong> in patients with recurrent infections.
                </p>
            }
            quickFacts={[
                { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "Test", value: "Urine C&S (Culture)", icon: "ShieldCheck" },
                { label: "Women Risk", value: "50% Lifetime", icon: "Activity" },
                { label: "Recurrent", value: "Needs Workup", icon: "Clock" }
            ]}
            relatedServices={{
                serviceSlug: "urology",
                related: [
                    { title: "Kidney Stone Surgery", href: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                    { title: "Kidney Stone Prevention", href: "/doctor/near-me/treat/urology/kidney-stone-prevention-guide" },
                    { title: "Prostate TURP Surgery", href: "/doctor/near-me/treat/urology/prostate-turp-surgery" }
                ]
            }}
            reviews={{ entityName: "Urology Care", entitySlug: "urology", entityType: "department" }}
        >
            <section>
                <h2>Understanding Urinary Tract Infections</h2>
                <p>
                    A UTI occurs when bacteria (most commonly <em>E. coli</em>) enter the urinary tract through the urethra and multiply in the bladder (cystitis), or ascend to the kidneys (pyelonephritis). While lower UTIs are often easily treated, upper tract infections and recurrent infections require specialist evaluation.
                </p>
                <h3>Recognizing UTI Symptoms</h3>
                <ul>
                    <li><strong>Lower UTI (Cystitis):</strong> Burning or pain on urination (dysuria), frequent urge to urinate, incomplete bladder emptying, cloudy or foul-smelling urine.</li>
                    <li><strong>Upper UTI (Pyelonephritis):</strong> The above symptoms PLUS fever, chills, back/flank pain, nausea, and vomiting. Requires hospital admission in severe cases.</li>
                    <li><strong>In Men:</strong> UTIs are less common; when they occur, they often indicate a structural problem (enlarged prostate, kidney stone) and should always be investigated.</li>
                </ul>
                <h2>Our Diagnostic Approach</h2>
                <p>
                    We always obtain a <strong>Urine Culture and Sensitivity (C&S)</strong> test before prescribing antibiotics — especially for recurrent or hospital-acquired UTIs. This identifies the exact bacteria causing the infection and its antibiotic sensitivity pattern, preventing overuse of broad-spectrum antibiotics and ensuring effective treatment.
                </p>
                <h3>Antibiotic Treatment</h3>
                <p>
                    Treatment is tailored to culture results and patient allergy history:
                </p>
                <ul>
                    <li>Simple lower UTI: 3-7 day course of Nitrofurantoin or Trimethoprim-Sulfmethoxazole</li>
                    <li>Complicated/Upper UTI: Fluoroquinolones or IV antibiotics (Ceftriaxone) for 10-14 days</li>
                    <li>Recurrent UTI prophylaxis: Low-dose nightly antibiotic or post-coital prophylaxis in selected patients</li>
                </ul>
                <h2>Investigating Recurrent UTIs</h2>
                <p>
                    Patients who have 3+ UTIs per year deserve thorough investigation to identify correctable causes:
                </p>
                <ul>
                    <li>Renal tract ultrasound and cystoscopy to check for structural abnormalities, stones, or bladder pathology</li>
                    <li>Post-void residual volume measurement for incomplete emptying</li>
                    <li>Hormonal assessment in post-menopausal women (topical oestrogen dramatically reduces recurrent UTI)</li>
                    <li>Urine cytology if blood in urine is a feature</li>
                </ul>
                <h2>Prevention Tips</h2>
                <ul>
                    <li>Drink 2-3 litres of water daily to flush bacteria from the bladder</li>
                    <li>Urinate after sexual intercourse</li>
                    <li>Wipe front to back (women)</li>
                    <li>Avoid harsh feminine hygiene products that disturb vaginal flora</li>
                    <li>Cranberry extract supplements (evidence-based for mild prevention)</li>
                </ul>
            </section>
        </SubServiceTemplate>
    );
}

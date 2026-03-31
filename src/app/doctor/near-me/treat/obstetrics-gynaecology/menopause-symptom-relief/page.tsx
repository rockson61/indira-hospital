'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Activity,
    CheckCircle2,
    Search,
    History,
    Dna,
    Thermometer,
    Heart
} from 'lucide-react'

export default function MenopauseCarePage() {
    return (
        <SubServiceTemplate
            title="Elite Menopause & Golden-Years Wellness"
            slug="menopause-symptom-relief"
            parentServiceSlug="obstetrics-gynaecology"
            departmentName="Indira Elite Women's Care"
            description={
                <>
                    <p>
                        Menopause is a natural transition, but the accompanying symptoms—hot flashes, night sweats, mood changes, and bone density loss—can significantly affect your quality of life. At Indira Super Speciality Hospital, we offer **Elite Menopause Wellness Protocols**. Our specialized 'Golden-Years' clinic provides a combination of Hormone Replacement Therapy (HRT) safety audits, holistic symptom management, and cardiovascular and bone-health monitoring to ensure this new phase of life is one of vitality and comfort.
                    </p>
                    <p className="mt-4 text-rose-600 dark:text-rose-400 font-semibold italic">
                        "Graceful transition: Holistic care for your next great chapter."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Bone Audit', value: 'DEXA Ready', icon: 'Activity' },
                { label: 'Care Type', value: 'Wellness', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Ongoing"
            hospitalStay="Outpatient"
            recoveryTime="Chronic Mgmt"
            anesthesia="N/A"
            reviews={{
                entityType: 'service',
                entityName: 'Menopause Symptom Relief',
                entitySlug: 'menopause-symptom-relief'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Specialized Menopause Care? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-rose-50 dark:bg-rose-900/50 border border-rose-100 dark:border-rose-800 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 blur-2xl group-hover:bg-rose-300/30 transition-all opacity-50" />
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-rose-800 dark:text-rose-300">The Wellness Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "HRT Safety Audit", text: "We perform a thorough evaluation for breast health, uterine lining, and cardiovascular risk before safely initiating Hormone Replacement Therapy (HRT)." },
                                { title: "DEXA Bone Screening", text: "Early detection of'Silent' bone loss (Osteoporosis). We provide specialized calcium/vitamin-D loading and medical protocols to keep your bones strong." },
                                { title: "Cardiac Health Monitoring", text: "Menopause increases the risk of heart disease. We provide specialized lipid and vascular screening to protect your 'Golden-Years' heart health." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Activity className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-rose-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-rose-100 dark:border-slate-800 shadow-2xl">
                            <Thermometer className="w-24 h-24 text-rose-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Steady Comfort</p>
                            <p className="text-slate-500 text-sm italic pr-4">Effectively cooling the 'hot flash' and nighttime symptoms through precision hormonal support.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Understanding the Menopausal Transition</h3>
                    <p>
                        Menopause is officially reached after 12 consecutive months without a menstrual period. However, the 'Perimenopause' (the years leading up to it) can be equally challenging due to fluctuating oestrogen and progesterone levels. This shift doesn't just affect your cycle—it affects your mood, your skin, your sleep, and even your metabolism.
                    </p>
                    <p>
                        At Indira Hospital, our goal is to **Optimize the Transition**. We don't believe women should just 'tough it out.' By using evidence-based medical and holistic therapies, we can mitigate the uncomfortable symptoms of menopause while protecting against the long-term metabolic risks that come with a low-oestrogen state.
                    </p>

                    <h4 className="text-[#005f73] dark:text-rose-400 font-primary">Common Symptom Clusters We Manage:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Vasomotor Symptoms (Hot flashes, Night sweats)",
                            "Genitourinary Syndrome (Dryness, frequent UTI)",
                            "Cognitive & Mood Changes (Brain fog, irritability)",
                            "Bone Health Issues (Osteopenia, Joint pains)",
                            "Metabolic Changes (Stubborn weight gain, hair thinning)",
                            "Sleep disturbances and chronic fatigue"
                        ].map((symptom, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-rose-500" />
                                <span className="text-sm font-medium">{symptom}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-rose-500 pl-4 py-2 italic font-serif">A Multi-Dimensional Health Plan</h3>
                    <p>
                        Our specialized Menopause Clinic utilizes a **Holistic Recovery Model**. This includes the option for Hormone Replacement Therapy (HRT) for appropriate candidates, non-hormonal medical alternatives for others, and a strong focus on clinical nutrition and weight-bearing exercise protocols. We coordinate with cardiologists and endocrinologists to ensure that your metabolic health remains a top priority during this transition.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-rose-400 mt-10">Why Choose Indira for Menopausal Care?</h4>
                    <ul>
                        <li>**Expert HRT Guidance**: Using only the safest low-dose transdermal or oral options when indicated.</li>
                        <li>**DEXA Bone Density Scans**: Precision monitoring for early bone loss with in-house imaging.</li>
                        <li>**Women's Integrative Rehab**: Specialized physiotherapy focused on pelvic floor health and joint mobility during menopause.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent shadow-2xl" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-rose-400" />
                        Menopause Wellness: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Is Hormone Replacement Therapy (HRT) safe?",
                                a: "For most healthy women under 60 who are early in their menopausal journey, HRT is very safe and highly effective. We perform a thorough safety screening (including Mammography and USG) before starting therapy."
                            },
                            {
                                q: "Can I get menopause symptoms even if I still have periods?",
                                a: "Yes. This is called 'Perimenopause.' You may experience hot flashes or mood swings several years before your periods actually stop completely."
                            },
                            {
                                q: "How can I prevent osteoporosis during menopause?",
                                a: "The best prevention is a combination of adequate Calcium/Vitamin D intake and regular weight-bearing exercise (like walking or strength training), with medical support if DEXA scans show early bone loss."
                            },
                            {
                                q: "Will symptoms ever go away on their own?",
                                a: "For some, symptoms gradually fade after several years. However, for others, symptoms like dryness and bone loss are progressive and require long-term management for a comfortable lifestyle."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-rose-400 mb-4 flex items-start gap-2">
                                    <Zap className="w-5 h-5 mt-1 shrink-0" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed antialiased pl-7">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SubServiceTemplate>
    );
}

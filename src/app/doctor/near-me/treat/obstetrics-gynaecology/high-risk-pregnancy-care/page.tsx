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
    Baby,
    Heart,
    HandHeart,
    Waves
} from 'lucide-react'

export default function HighRiskPregnancyPage() {
    return (
        <SubServiceTemplate
            title="Elite High-Risk Pregnancy & Neonatal Care"
            slug="high-risk-pregnancy-care"
            parentServiceSlug="obstetrics-gynaecology"
            departmentName="Indira Elite Women's Care"
            description={
                <>
                    <p>
                        A high-risk pregnancy—whether due to twins, maternal age, gestational diabetes, or hypertension—requires more than just routine care. At Indira Super Speciality Hospital, we specialized in **Elite Obstetric Security**. Our multidisciplinary team combines advanced maternal-fetal monitoring with a 'Level II' Neonatal Intensive Care Unit (NICU), ensuring that both mother and baby are protected by the highest safety standards in the region.
                    </p>
                    <p className="mt-4 text-rose-600 dark:text-rose-400 font-semibold italic">
                        "Unwavering safety for your most precious journey."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'NICU Backup', value: 'Level II+', icon: 'Baby' },
                { label: 'Care Type', value: 'High-Risk', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Ongoing"
            hospitalStay="2-4 Days"
            recoveryTime="6 Weeks"
            anesthesia="Spinal/General"
            reviews={{
                entityType: 'service',
                entityName: 'High-Risk Pregnancy Care',
                entitySlug: 'high-risk-pregnancy-care'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Specialized Pregnancy Care? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-rose-50 dark:bg-rose-900/50 border border-rose-100 dark:border-rose-800 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 blur-2xl group-hover:bg-rose-300/30 transition-all opacity-50" />
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-rose-800 dark:text-rose-300">The Security Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Level II+ NICU Support", text: "Immediate backup for premature or unwell newborns, equipped with advanced ventilators and 24/7 neonatal intensive care specialists." },
                                { title: "Fetal Medicine Integration", text: "Specialized 4D scans to monitor fetal growth, blood flow (Doppler), and organ development with precision." },
                                { title: "24/7 Obstetric Emergency", text: "Dedicated obstetrician-on-site protocols ensuring instant response for emergency C-sections or pre-eclampsia management." }
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
                            <Baby className="w-24 h-24 text-rose-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Safe Arrival</p>
                            <p className="text-slate-500 text-sm italic pr-4">Expert management of complex pregnancies to ensure the healthiest outcome for mother and child.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Defining High-Risk Pregnancy</h3>
                    <p>
                        A pregnancy is labeled 'high-risk' when there are potential complications that could affect the mother, the baby, or both. This doesn't mean something will go wrong, but it means that we must be more vigilant. Early identification and specialized management are the keys to a successful delivery.
                    </p>
                    <p>
                        At Indira Hospital, our **Maternal-Fetal Security Team** oversees all high-risk cases. We coordinate between obstetricians, neonatologists, and internal medicine specialists to manage underlying conditions like hypertension or thyroid disorders throughout the nine-month journey.
                    </p>

                    <h4 className="text-[#005f73] dark:text-rose-400 font-primary">Conditions requiring High-Risk Care:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Preeclampsia (High blood pressure in pregnancy)",
                            "Gestational Diabetes management",
                            "Multiple gestations (Twins, Triplets)",
                            "Advanced Maternal Age (Pregnancy after 35)",
                            "History of recurrent miscarriages or preterm birth",
                            "Placenta Previa or Placental Abruption risks"
                        ].map((condition, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-rose-500" />
                                <span className="text-sm font-medium">{condition}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-rose-500 pl-4 py-2 italic font-serif">Comprehensive Pre-natal & Neonatal Synergy</h3>
                    <p>
                        The true strength of our High-Risk unit is the synergy between the labor room and the NICU. Our neonatologists are present for every high-risk delivery, ready to provide immediate specialized resuscitation if needed. We utilize high-resolution fetal Doppler imaging to monitor the baby's blood flow in real-time, allowing us to choose the safest time and method for delivery.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-rose-400 mt-10">Why Choose Indira for Your Delivery?</h4>
                    <ul>
                        <li>**Advanced Labor Suites**: Monitored environments for safe trial-of-labor after C-section (VBAC) in suitable cases.</li>
                        <li>**Expert Pain Management**: 24/7 availability of painless labor (Epidural) services.</li>
                        <li>**Post-natal Wellness**: Specialized support for breastfeeding and maternal mental health.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent shadow-2xl" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-rose-400" />
                        High-Risk Pregnancy: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Does high-risk mean I must have a C-section?",
                                a: "No. Many women with high-risk factors can have successful natural births. Our goal is to monitor closely so we can support a safe natural delivery whenever possible, reserving C-sections for true medical necessity."
                            },
                            {
                                q: "How often will I need check-ups?",
                                a: "In a high-risk pregnancy, visits are typically more frequent—initially every 2-3 weeks, and moving to weekly visits as the delivery date approaches to ensure perfect blood pressure and glucose control."
                            },
                            {
                                q: "What should I look out for at home?",
                                a: "Warning signs include persistent headaches, blurred vision, sudden swelling of hands/face, or a decrease in fetal movements. We provide all our high-risk patients with an emergency direct-line."
                            },
                            {
                                q: "Is the NICU available 24/7?",
                                a: "Yes. Our NICU is fully staffed 24/7 with trained neonatal nurses and specialists, ensuring that your baby has 'gold-standard' care from the very first second of life."
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

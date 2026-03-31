'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { PRICING_DATA } from '@/lib/data/pricing-data'

export default function RIRSPage() {
    const pricing = PRICING_DATA.find(p => p.id === 'p-8')

    return (
        <SubServiceTemplate
            title="Laser Kidney Stone Treatment (RIRS)"
            eyebrow="Elite Urology & Laser Center"
            description={
                <>
                    Experience the future of stone removal with <strong>Retrograde Intrarenal Surgery (RIRS)</strong>. We utilize high-power 100W Holmium Lasers to dust kidney stones into fine powder, allowing for natural passage without any external incisions or scars.
                </>
            }
            quickFacts={[
                { label: 'Starting Price', value: pricing?.startingPrice || '₹65,000', icon: 'IndianRupee' },
                { label: 'Procedure time', value: '45-60 Mins', icon: 'Clock' },
                { label: 'Hospital Stay', value: '24 Hours', icon: 'Shield' },
                { label: 'Technology', value: '100W Laser', icon: 'Zap' },
            ]}
            marketingContent={{
                features: [
                    {
                        title: '100W Holmium Laser',
                        description: 'Ultra-powerful laser that can dust even the hardest staghorn stones into fine powder.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Flexible Ureteroscopy',
                        description: 'Advanced German scopes that navigate the entire kidney internal structure without cuts.',
                        icon: 'Activity'
                    },
                    {
                        title: 'Zero-Incision Recovery',
                        description: 'Since no skin is cut, patients experience minimal pain and zero scarring.',
                        icon: 'Shield'
                    }
                ],
                benefits: [
                    {
                        title: 'Same-Day Discharge',
                        description: 'Most RIRS patients are discharged within 24 hours of the procedure.',
                        icon: 'Clock'
                    },
                    {
                        title: 'High Clearance Rate',
                        description: 'Exceptional success rates even for stones in difficult lower-pole locations.',
                        icon: 'CheckCircle'
                    },
                    {
                        title: 'Insurance Concierge',
                        description: 'Full assistance with TPA and Cashless approval for all major insurers.',
                        icon: 'Shield'
                    }
                ],
                faqs: [
                    {
                        question: "How is RIRS different from regular surgery?",
                        answer: "RIRS is completely incision-less. We access the kidney through the natural urinary passage using a flexible scope and dust the stone with a laser. Traditional surgery involves a cut in the back or abdomen."
                    },
                    {
                        question: "Is the procedure painful?",
                        answer: "The procedure is performed under general anesthesia, so you feel no pain. Post-operative discomfort is minimal because there are no external wounds."
                    },
                    {
                        question: "Will I need a stent after surgery?",
                        answer: "In most cases, a small internal tube (JJ Stent) is placed for a few days to ensure the kidney drains properly while the dust passes out. This is removed easily in an OPD setting later."
                    },
                    {
                        question: "What size of stones can be treated with RIRS?",
                        answer: "RIRS is ideal for stones up to 2cm. For very large or multiple stones, we may recommend a combined approach or PCNL (Keyhole surgery)."
                    }
                ]
            }}
            timeline={{
                title: "Your Journey to Stone-Free Health",
                description: "A precision-guided recovery path at Indira's Urology Center of Excellence.",
                steps: [
                    {
                        title: 'Step 1: Expert Laser Mapping',
                        description: 'High-resolution CT KUB and metabolic profiling to determine stone density and exact location.',
                        duration: 'Day 0'
                    },
                    {
                        title: 'Step 2: Laser Dusting (RIRS)',
                        description: 'The stone is vaporized into micron-sized particles using the 100W Holmium Laser system.',
                        duration: 'Day 1'
                    },
                    {
                        title: 'Step 3: Rapid Observation',
                        description: 'Recover in our high-end surgical suite with dedicated vitals monitoring.',
                        duration: '24 Hours'
                    },
                    {
                        title: 'Step 4: Discharge & Follow-up',
                        description: 'Return home with a clear recovery plan and zero physical restrictions.',
                        duration: 'Day 2'
                    }
                ]
            }}
            reviews={{
                entityType: 'department',
                entityName: 'Urology',
                entitySlug: 'urology'
            }}
            departmentName="Urology"
            departmentSlug="urology"
            slug="doctor/near-me/treat/urology/kidney-stone-laser-surgery"
            duration="45-60 Mins"
            hospitalStay="24 Hours"
            recoveryTime="2-3 Days"
            anesthesia="General Anesthesia"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-3xl font-bold mb-4">India's Premier Laser Urology Center in Vellore</h2>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        Indira Super Speciality Hospital is at the forefront of <strong>Modern Endourology</strong>. Our RIRS program is designed specifically for patients who seek high-success, low-pain solutions for kidney stones. By eliminating the need for external incisions, we reduce the risk of infection and significantly shorten the recovery curve.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="bg-fuchsia-50 dark:bg-fuchsia-950/30 p-8 rounded-[2rem] border border-fuchsia-100 dark:border-fuchsia-900/50">
                        <h3 className="text-xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-4">Why RIRS over PCNL?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="text-fuchsia-600 font-bold">•</span>
                                <span><strong>No External Scars:</strong> Entirely performed through natural passages.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-fuchsia-600 font-bold">•</span>
                                <span><strong>Lower Risk of Bleeding:</strong> Significantly safer for elderly or high-risk patients.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-fuchsia-600 font-bold">•</span>
                                <span><strong>Bilateral Treatment:</strong> Possible to treat both kidneys in a single sitting.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                        <h3 className="text-xl font-bold mb-4">Precision Technology</h3>
                        <p className="text-slate-300 mb-4">
                            We use the <strong>Olympus Flexible Ureteroscope</strong> coupled with a high-end <strong>100W Holmium Laser</strong>. This combination allows our surgeons to target stones in every nook and corner of the kidney with absolute precision.
                        </p>
                        <div className="flex items-center gap-4 text-emerald-400">
                            <div className="w-12 h-12 rounded-full border border-emerald-400/30 flex items-center justify-center">
                                <span className="font-bold">99%</span>
                            </div>
                            <span className="text-sm font-medium">Stone clearance rate across 1000+ cases.</span>
                        </div>
                    </div>
                </div>
            </div>
        </SubServiceTemplate>
    )
}

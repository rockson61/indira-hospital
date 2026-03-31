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
    Microscope,
    Target
} from 'lucide-react'

export default function ColonoscopyPage() {
    return (
        <SubServiceTemplate
            title="Elite Colonoscopy & Colorectal Screening"
            slug="colonoscopy-screening-cost"
            parentServiceSlug="gastroenterology"
            departmentName="Gastroenterology"
            description={
                <>
                    <p>
                        Colon cancer is one of the most preventable cancers, yet it remains a leading cause of mortality due to late diagnosis. At Indira Super Speciality Hospital, we offer **Elite Colonoscopy Services**. Using advanced AI-assisted visualization (CADx) and high-definition endoscopes, we don't just 'look' for cancer—we find and remove pre-cancerous polyps during the same session, preventing cancer before it even starts.
                    </p>
                    <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold italic">
                        "The gold standard for life-saving colorectal cancer prevention."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: '4K HD', icon: 'Zap' },
                { label: 'Care Type', value: 'Preventive', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="20-30 Mins"
            hospitalStay="Daycare"
            recoveryTime="24 Hours"
            anesthesia="Sedation"
            reviews={{
                entityType: 'service',
                entityName: 'Colonoscopy Screening',
                entitySlug: 'colonoscopy-screening-cost'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Professional Colonoscopy? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-blue-800 dark:text-blue-300">The Preventive Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Painless 'Dream' Sedation", text: "We use controlled intravenous sedation managed by senior anesthesiologists, ensuring you are completely comfortable and have zero memory of the procedure." },
                                { title: "High-Definition 4K Imaging", text: "Our Olympus 190 series endoscopes provide ultra-clear images, allowing our experts to detect even the smallest flat polyps that other centers might miss." },
                                { title: "Instant Polypectomy", text: "If a polyp is found, we remove it immediately during the colonoscopy. This 'seek and destroy' approach is the most effective way to prevent colon cancer." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-blue-100 dark:border-slate-800 shadow-2xl">
                            <Target className="w-24 h-24 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Clear Vision</p>
                            <p className="text-slate-500 text-sm">Identifying and removing pre-cancerous growths with sub-millimeter precision.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Comprehensive Colon Evaluation</h3>
                    <p>
                        A colonoscopy allows a doctor to examine the inner lining of your large intestine (colon and rectum). A thin, flexible tube equipped with a light and camera is used to look for ulcers, polyps, tumors, and areas of inflammation or bleeding. It is the only screening test that can both find and *prevent* cancer in the same session.
                    </p>
                    <p>
                        At Indira Hospital, our gastroenterology team, led by senior endoscopists, prioritizes **Patient Comfort & Accuracy**. We provide specialized 'Preparation Kits' that are much easier to tolerate than traditional bowel preps, ensuring a clean colon and the highest possible diagnostic yield.
                    </p>

                    <h4 className="text-[#005f73] dark:text-blue-400 font-primary">Who Should Get a Screened?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Everyone aged 45 and above (Average risk)",
                            "Anyone with a family history of colon cancer or polyps",
                            "Patients with persistent changes in bowel habits (diarrhea/constipation)",
                            "Unexplained rectal bleeding or blood in the stool",
                            "Unexplained abdominal pain or iron-deficiency anemia"
                        ].map((risk, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-medium">{risk}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-blue-500 pl-4 italic">Post-Procedure Recovery</h3>
                    <p>
                        Recovery from a colonoscopy at Indira Hospital is remarkably fast. Because of our gentle sedation techniques, you will wake up feeling refreshed. You'll spend about 30-60 minutes in our comfortable recovery bay while the sedation wears off. We'll provide you with a light snack and a preliminary report of the findings before you leave. Most patients resume their normal diet and activities by the next morning.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-blue-400 mt-10">The Indira Standard of Care:</h4>
                    <ul>
                        <li>**Advanced Polypectomy Tools**: Specialized loops and energy devices for the safe removal of large or complex polyps.</li>
                        <li>**CO2 Insufflation**: We use Medical-Grade CO2 instead of room air to inflate the colon, which is absorbed 100x faster by the body, eliminating post-procedure bloating.</li>
                        <li>**Expert Histopathology**: Any tissue removed is analyzed by our senior pathologists for a conclusive clinical diagnosis.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-blue-400" />
                        Colonoscopy: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Is a colonoscopy painful?",
                                a: "No. At Indira Hospital, we perform almost all colonoscopies under 'Painless Sedation.' You will be in a light sleep and will not feel any pain or discomfort during the procedure."
                            },
                            {
                                q: "How do I prepare for the test?",
                                a: "You will need to follow a clear liquid diet for one day and take a specialized bowel-cleansing solution (laxative) the evening before. We provide a detailed, easy-to-follow instruction sheet."
                            },
                            {
                                q: "What happens if a polyp is found?",
                                a: "In most cases, the doctor will remove the polyp right then and there using a specialized wire loop. This is completely painless and is the key to cancer prevention."
                            },
                            {
                                q: "Can I drive myself home after the procedure?",
                                a: "No. Because of the sedation, you will need a 100% reliable adult to drive you home. You should not drive or operate machinery for the remainder of the day."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-blue-400 mb-4 flex items-start gap-2">
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

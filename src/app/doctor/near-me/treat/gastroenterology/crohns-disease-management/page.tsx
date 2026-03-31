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
    Heart
} from 'lucide-react'

export default function CrohnsManagementPage() {
    return (
        <SubServiceTemplate
            title="Elite Crohn's & IBD Management"
            slug="crohns-disease-management"
            parentServiceSlug="gastroenterology"
            departmentName="Gastroenterology"
            description={
                <>
                    <p>
                        Inflammatory Bowel Disease (IBD), including Crohn's Disease and Ulcerative Colitis, is a complex, life-long journey that requires more than just symptom relief—it requires deep clinical remission. At Indira Super Speciality Hospital, we offer **Elite IBD Specialist Care**. By integrating advanced biologics, nutritional optimization, and precision endoscopy, we help patients achieve long-term steroid-free remission and a significantly improved quality of life.
                    </p>
                    <p className="mt-4 text-sky-600 dark:text-sky-400 font-semibold italic">
                        "Advanced biological protocols for deep mucosal healing."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'Biologics Ready', icon: 'Zap' },
                { label: 'Care Type', value: 'Chronic Mgmt', icon: 'Heart' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Ongoing"
            hospitalStay="Outpatient"
            recoveryTime="Chronic Mgmt"
            anesthesia="N/A"
            reviews={{
                entityType: 'service',
                entityName: "Crohn's Disease Management",
                entitySlug: 'crohns-disease-management'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Specialized IBD Care? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-sky-50 dark:bg-sky-900/50 border border-sky-100 dark:border-sky-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-sky-800 dark:text-sky-300">The IBD Remission Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Target-to-Treat Strategy", text: "We don't just treat symptoms. We use objective markers like Calprotectin and ileocolonoscopy to ensure the lining of the bowel is completely healed." },
                                { title: "Advanced Biologics Unit", text: "Direct access to the latest biological therapies and small molecules, managed by specialists who ensure safety and maximum efficacy." },
                                { title: "Nutritional Support", text: "IBD often leads to severe malabsorption. Our clinical dietitians build 'low-residue' and anti-inflammatory meal plans tailored to your flare status." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Activity className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-sky-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <Microscope className="w-24 h-24 text-sky-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mucosal Healing</p>
                            <p className="text-slate-500 text-sm">Aiming for 100% tissue recovery to prevent long-term complications like strictures or surgery.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Understanding Crohn's & IBD</h3>
                    <p>
                        Crohn's Disease is a chronic inflammatory condition of the gastrointestinal tract. Unlike ulcerative colitis, which only affects the colon, Crohn's can affect any part of the GI tract from mouth to anus. The inflammation can be "transmural," meaning it can penetrate the entire thickness of the bowel wall, leading to complications like fistulas and abscesses.
                    </p>
                    <p>
                        At Indira Hospital, our approach, led by senior gastroenterologists, is focused on **Early Intervention**. By starting the right therapy early—especially biological drugs when indicated—we can often halt the disease's progression and avoid the need for permanent surgical removal of bowel segments.
                    </p>

                    <h4 className="text-[#005f73] dark:text-sky-400 font-primary">Common Warning Signs of an IBD Flare:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Persistent diarrhea (often bloody in colitis)",
                            "Severe abdominal pain and cramping",
                            "Unexplained weight loss and fatigue",
                            "Frequent urgent need for bowel movements",
                            "Extraintestinal symptoms like joint pain or eye inflammation"
                        ].map((symptom, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-sky-500" />
                                <span className="text-sm font-medium">{symptom}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-sky-500 pl-4 italic">The Journey to Remission</h3>
                    <p>
                        Achieving remission in Crohn's Disease is a marathon, not a sprint. We use a **"Tight Control"** monitoring approach, tracking your fecal calprotectin and serum drug levels every 3-6 months. This allow us to 'tweak' your medication dosage based on real-time data, ensuring you get the maximally effective dose with minimal side effects.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-sky-400 mt-10">Why Indira Hospital for IBD?</h4>
                    <ul>
                        <li>**Integrated IBD Unit**: Dedicated access to gastroenterologists, infusion nurses, and GI surgeons who specialized in IBD complications.</li>
                        <li>**Precision Endoscopy**: High-resolution colonoscopy to monitor 'mucosal healing'—the only reliable indicator of long-term success.</li>
                        <li>**Patient Support System**: Direct communication channels for flare management and medication guidance.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-950 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-sky-400" />
                        Crohn's & IBD: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Can Crohn's disease be permanently cured?",
                                a: "While there is currently no permanent cure for Crohn's, deep clinical and mucosal remission is achievable for most patients. In remission, you can live a completely normal, healthy, and symptom-free life."
                            },
                            {
                                q: "Are biological drugs dangerous?",
                                a: "Like all potent medications, biologics have side effects, but for moderate-to-severe IBD, the risk of untreated disease (surgery, colon cancer, fistulas) is far higher than the risk of the medication. We monitor you closely for safety."
                            },
                            {
                                q: "Does diet affect the inflammation in Crohn's?",
                                a: "Diet doesn't cause IBD, but specific trigger foods can definitely make symptoms worse during a flare. Conversely, an anti-inflammatory diet can support the healing process initiated by medications."
                            },
                            {
                                q: "Will I definitely need surgery if I have Crohn's?",
                                a: "No. With modern 'top-down' biological therapy, we are significantly reducing the number of patients who require surgery. Surgery is reserved for complications like obstructions or fistulas that don't respond to medicine."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-sky-400 mb-4 flex items-start gap-2">
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

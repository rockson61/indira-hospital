import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Elite Crohn's & IBD Management in Vellore | Indira Hospital",
    description: "Advanced Elite Crohn's & IBD Management surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and same-day dis...",
    path: "/doctor/near-me/treat/gastroenterology/crohns-disease-management"
});

export default function CrohnsManagementPage() {
    return (
        <SubServiceTemplate
            title="Elite Crohn's & IBD Management"
            slug="crohns-disease-management"
            parentServiceSlug="gastroenterology"
            departmentName="Gastroenterology"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>Elite Crohn's & IBD Management</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
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
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: Elite Crohn's & IBD Management in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                {/* Visual Section: Why Specialized IBD Care? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-sky-50 dark:bg-sky-900/50 border border-sky-100 dark:border-sky-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-heading text-sky-800 dark:text-sky-300">The IBD Remission Edge</h4>
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
                    <h3 className="text-slate-900 dark:text-white font-heading font-bold">Understanding Crohn's & IBD</h3>
                    <p>
                        Crohn's Disease is a chronic inflammatory condition of the gastrointestinal tract. Unlike ulcerative colitis, which only affects the colon, Crohn's can affect any part of the GI tract from mouth to anus. The inflammation can be "transmural," meaning it can penetrate the entire thickness of the bowel wall, leading to complications like fistulas and abscesses.
                    </p>
                    <p>
                        At Indira Hospital, our approach, led by senior gastroenterologists, is focused on **Early Intervention**. By starting the right therapy early—especially biological drugs when indicated—we can often halt the disease's progression and avoid the need for permanent surgical removal of bowel segments.
                    </p>

                    <h4 className="text-[#005f73] dark:text-sky-400 font-heading">Common Warning Signs of an IBD Flare:</h4>
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

                    <h3 className="text-slate-900 dark:text-white font-heading font-bold text-2xl mt-12 mb-6 border-l-4 border-sky-500 pl-4 italic">The Journey to Remission</h3>
                    <p>
                        Achieving remission in Crohn's Disease is a marathon, not a sprint. We use a **"Tight Control"** monitoring approach, tracking your fecal calprotectin and serum drug levels every 3-6 months. This allow us to 'tweak' your medication dosage based on real-time data, ensuring you get the maximally effective dose with minimal side effects.
                    </p>

                    <h4 className="font-heading text-[#005f73] dark:text-sky-400 mt-10">Why Indira Hospital for IBD?</h4>
                    <ul>
                        <li>**Integrated IBD Unit**: Dedicated access to gastroenterologists, infusion nurses, and GI surgeons who specialized in IBD complications.</li>
                        <li>**Precision Endoscopy**: High-resolution colonoscopy to monitor 'mucosal healing'—the only reliable indicator of long-term success.</li>
                        <li>**Patient Support System**: Direct communication channels for flare management and medication guidance.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-950 to-transparent" />
                    
                    <h3 className="font-heading text-3xl font-bold mb-12 flex items-center gap-3 font-heading relative z-10">
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
            </article>
            </div>
        </SubServiceTemplate>
    );
}
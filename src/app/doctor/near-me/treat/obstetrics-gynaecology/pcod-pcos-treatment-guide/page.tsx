import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Elite PCOD & PCOS Treatment in Vellore, Ta in Vellore | I...",
 description: "Advanced Elite PCOD & PCOS Treatment in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited ca...",
 path: "/doctor/near-me/treat/obstetrics-gynaecology/pcod-pcos-treatment-guide"
});

export default function PCODManagementPage() {
 return (
 <SubServiceTemplate
 title="Elite PCOD & PCOS Treatment in Vellore, Tamil Nadu"
 slug="pcod-pcos-treatment-guide"
 parentServiceSlug="obstetrics-gynaecology"
 departmentName="Indira Elite Women&apos;s Care"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Elite PCOD & PCOS Treatment</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
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
 entityName: 'PCOD & PCOS Treatment',
 entitySlug: 'pcod-pcos-treatment-guide'
 }}
 >
 <div className="space-y-16">
 {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
 <AioKnowledgeBlock 
 title="Quick Facts: Elite PCOD & PCOS Treatment in Vellore"
 items={[
 { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
 { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
 { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
 { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
 ]}
 />

 <article className="space-y-12">
 {/* Visual Section: Why Specialized PCOS Care? */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
 <div className="p-8 rounded-3xl bg-rose-50 dark:bg-rose-900/50 border border-rose-100 dark:border-rose-800 shadow-lg relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 blur-2xl group-hover:bg-rose-300/30 transition-all opacity-50" />
 <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-heading text-rose-800 dark:text-rose-300">The PCOS Edge</h4>
 <ul className="space-y-4">
 {[
 { title: "Hormonal Deep-Dive", text: "We perform comprehensive blood panels to check androstenedione, insulin resistance, and thyroid function, not just a simple ultrasound." },
 { title: "Insulin Sensitivity Focus", text: "Targeting the root metabolic cause of PCOS to reduce weight gain and improve ovulation naturally." },
 { title: "Dermatological Integration", text: "Coordinated care to manage PCOD-related acne, hair thinning, and hirsutism (excess hair growth)." }
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
 <Leaf className="w-24 h-24 text-rose-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Hormonal Balance</p>
 <p className="text-slate-500 text-sm italic pr-4">Restoring your body&apos;s natural cyclical rhythm through evidence-based lifestyle and medical support.</p>
 </div>
 </div>
 </div>

 {/* Deep Dive Content */}
 <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
 <h3 className="text-slate-900 dark:text-white font-heading font-bold">Understanding PCOD & PCOS</h3>
 <p>
 While often used interchangeably, PCOD (Polycystic Ovary Disease) and PCOS (Polycystic Ovary Syndrome) are different levels of the same endocrine spectrum. PCOS is a more severe metabolic condition involving high levels of male hormones (androgens) and insulin resistance, which can lead to long-term risks like Type 2 Diabetes and cardiovascular issues.
 </p>
 <p>
 At Indira Hospital, our Gynaecology and Endocrine teams work together to provide a **"360-Degree Management"** plan. We move beyond just 'prescribing birth control' to address the underlying metabolic dysregulation that drives the condition.
 </p>

 <h4 className="text-[#005f73] dark:text-rose-400 font-heading">Common PCOS Symptoms:</h4>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
 {[
 "Irregular or prolonged menstrual cycles",
 "Excess facial and body hair (Hirsutism)",
 "Severe adult acne or oily skin",
 "Difficulty losing weight (especially around the abdomen)",
 "Thinning of hair on the scalp (Male-pattern baldness)",
 "Darkening of skin in creases (Acanthosis nigricans)"
 ].map((symptom, i) => (
 <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
 <CheckCircle2 className="w-5 h-5 text-rose-500" />
 <span className="text-sm font-medium">{symptom}</span>
 </div>
 ))}
 </div>

 <h3 className="text-slate-900 dark:text-white font-heading font-bold text-2xl mt-12 mb-6 border-l-4 border-rose-500 pl-4 py-2 italic font-serif">A Personalized Roadmap to Reversal</h3>
 <p>
 The "Indira PCOS Protocol" is built on four pillars: **Metabolic Audit, Clinical Nutrition, Stress Resilience, and Targeted Medical Therapy**. We track your progress through objective data—not just how you feel, but through monthly monitoring of insulin levels, BMI, and hormonal ratios. This scientific approach ensures that we are making real progress toward reversing the condition and preventing its long-term complications.
 </p>

 <h4 className="font-heading text-[#005f73] dark:text-rose-400 mt-10">What are the Benefits of Women&apos;s Care Surgery?</h4>
 <ul>
 <li>**Advanced Pelvic Ultrasound**: Identifying 'string of pearls' follicles and monitoring endometrial thickness with high clarity.</li>
 <li>**In-house Metabolic Lab**: Rapid testing for oral glucose tolerance and fasting insulin levels.</li>
 <li>**Clinical Nutritionists**: Specialized diet plans focused on low-GI foods that reduce the 'insulin spike' after meals.</li>
 </ul>
 </div>

 {/* FAQ Section */}
 <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
 <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent shadow-2xl" />
 
 <h3 className="font-heading text-3xl font-bold mb-12 flex items-center gap-3 font-heading relative z-10">
 <Info className="text-rose-400" />
 PCOD & PCOS: Essential FAQs
 </h3>
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
 {[
 {
 q: "Can PCOS be completely cured?",
 a: "While 'remission' is a more accurate term, the symptoms of PCOS can be completely reversed through diligent lifestyle management and medical therapy. Many women resume regular cycles and have successful pregnancies after treatment."
 },
 {
 q: "Will I definitely have trouble getting pregnant?",
 a: "Not necessarily. While PCOS is a leading cause of infertility due to lack of ovulation, most women can successfully conceive with the help of simple ovulation-induction medications and metabolic management."
 },
 {
 q: "Is taking the 'Pill' the only treatment?",
 a: "No. Birth control pills only manage the cycle; they don&apos;t fix the underlying metabolic issue. We use a combination of insulin sensitizers, anti-androgens, and diet therapy for a more comprehensive result."
 },
 {
 q: "Why am I gaining weight even though I eat little?",
 a: "In PCOS, insulin resistance causes your body to store fat more aggressively. It&apos;s not about 'eating less,' but about eating 'low-insulin-trigger' foods that we will help you identify."
 }
 ].map((faq, idx) => (
 <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-white dark:bg-slate-900 transition-colors">
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
 </article>
 </div>
 </SubServiceTemplate>
 );
}
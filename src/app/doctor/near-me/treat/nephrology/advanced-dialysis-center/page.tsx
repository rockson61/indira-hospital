import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Dialysis & Renal Support Center in Vellore in Vellore | I...",
 description: "Advanced Dialysis & Renal Support Center in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredite...",
 path: "/doctor/near-me/treat/nephrology/advanced-dialysis-center"
});

export default function DialysisPage() {
 return (
 <SubServiceTemplate
 title="Dialysis & Renal Support Center in Vellore, Tamil Nadu"
 eyebrow="24/7 Advanced Kidney Care"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Dialysis & Renal Support Center</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
 </p>
 </article>
 }
 quickFacts={[
 { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
 { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
 { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
 { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
 ]}
 marketingContent={{
 features: [
 {
 title: 'High-Flux Hemodialysis',
 description: 'Advanced filtration technology that removes larger middle-molecule toxins more efficiently than standard dialysis.',
 icon: 'Activity'
 },
 {
 title: 'CRRT for ICU Patients',
 description: 'Continuous Renal Replacement Therapy for critically unstable patients, providing gentle, 24-hour blood purification.',
 icon: 'Siren'
 },
 {
 title: 'Infection-Free Protocols',
 description: 'Dedicated machines and strictly separated zones for different patient profiles to ensure absolute safety.',
 icon: 'Shield'
 }
 ],
 benefits: [
 {
 title: 'Premium Comfort Suites',
 description: 'Undergo treatment in a relaxed environment with individual entertainment systems and ergonomic recliners.',
 icon: 'Bed'
 },
 {
 title: 'Expert Nephrology Cover',
 description: 'Round-the-clock availability of senior nephrologists to manage any intra-dialytic complications.',
 icon: 'UserCheck'
 },
 {
 title: 'Nutritional Support',
 description: 'Customized renal diet planning provided by our senior clinical nutritionists during every session.',
 icon: 'Apple'
 }
 ],
 faqs: [
 {
 question: "How long does a standard dialysis session take?",
 answer: "A typical hemodialysis session takes approximately 4 hours, depending on the patient's medical requirements and toxin clearance needs."
 },
 {
 question: "What is High-Flux Dialysis?",
 answer: "High-Flux dialysis uses a more permeable membrane that allows for the removal of larger uremic toxins, which can lead to better long-term health outcomes and less fatigue."
 },
 {
 question: "Is the dialysis unit open on Sundays?",
 answer: "Yes, our dialysis center operates 24/7, including Sundays and holidays, to ensure uninterrupted care for our regular and emergency patients."
 }
 ]
 }}
 timeline={{
 title: "Your Dialysis Care Path",
 description: "Seamless and safe blood purification at Indira's Renal Center.",
 steps: [
 {
 title: 'Pre-Dialysis Vitals',
 description: 'Rigorous checking of weight, blood pressure, and vascular access (Fistula/Catheter) health.',
 duration: '15 Mins'
 },
 {
 title: 'Advanced Purification',
 description: 'The high-flux dialysis process, continuously monitored by our expert renal technicians.',
 duration: '4 Hours'
 },
 {
 title: 'Post-Care Recovery',
 description: 'Stabilization period with post-dialysis weight check and nutritional supplement.',
 duration: '30 Mins'
 },
 {
 title: 'Long-Term Monitoring',
 description: 'Monthly biochemical profiling to adjust dialysis frequency and medication.',
 duration: 'Monthly'
 }
 ]
 }}
 reviews={{
 entityType: 'department',
 entityName: 'Renal Sciences',
 entitySlug: 'renal-sciences'
 }}
 departmentName="Renal Sciences"
 departmentSlug="renal-sciences"
 slug="doctor/near-me/treat/nephrology/advanced-dialysis-center"
 duration="4 Hours"
 hospitalStay="Day Care"
 recoveryTime="Immediate"
 anesthesia="Not Required"
 >
 <div className="space-y-8">
 <section>
 <h2 className="font-heading text-3xl font-bold mb-4">India's Elite Destination for Comprehensive Renal Health</h2>
 <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
 At the <strong>Indira Renal Center</strong>, we believe that dialysis should not just sustain life, but enhance its quality. By combining world-class Fresenius technology with a compassionate, patient-first approach, we ensure that our patients lead active, fulfilling lives despite their renal challenges.
 </p>
 </section>

 <div className="grid md:grid-cols-3 gap-6 my-12">
 {[
 { title: 'SLED & CRRT', desc: 'Sustained Low-Efficiency Dialysis for unstable ICU patients.', icon: 'Zap' },
 { title: 'Fistula Care', desc: 'Expert vascular access management and rescue.', icon: 'Activity' },
 { title: 'Home Training', desc: 'Guidance for peritoneal dialysis and home care kits.', icon: 'Globe' },
 ].map((feature, i) => (
 <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
 <h4 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
 <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </SubServiceTemplate>
 )
}
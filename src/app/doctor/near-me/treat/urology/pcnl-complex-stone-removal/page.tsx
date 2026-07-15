import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Complex Kidney Stone Surgery (PCNL) in Vel in Vellore | I...",
 description: "Advanced Complex Kidney Stone Surgery (PCNL) surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and same-da...",
 path: "/doctor/near-me/treat/urology/pcnl-complex-stone-removal"
});

export default function PCNLPage() {
 return (
 <SubServiceTemplate
 title="Complex Kidney Stone Surgery (PCNL)"
 eyebrow="Centre of Excellence in Endourology"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Complex Kidney Stone Surgery (PCNL)</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
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
 title: 'Ultra-Thin Keyhole Access',
 description: 'Miniaturized access tracts (Mini-PCNL) that reduce bleeding and post-operative pain significantly.',
 icon: 'Activity'
 },
 {
 title: 'Pneumatic & Laser Fragmentation',
 description: 'Using high-speed lithoclasts to rapidly break down massive stones into removable pieces.',
 icon: 'Zap'
 },
 {
 title: 'Total Clearance Protocol',
 description: 'Rigorous intra-operative fluoroscopy to ensure no stone fragments are left behind.',
 icon: 'CheckCircle'
 }
 ],
 benefits: [
 {
 title: 'Definitive Stone Removal',
 description: 'The most effective method for high stone loads that cannot be cleared by laser alone.',
 icon: 'Star'
 },
 {
 title: 'Minimal Scarring',
 description: 'Performed through a tiny 5-10mm incision on the back, leaving almost no visible scar.',
 icon: 'Shield'
 },
 {
 title: 'Rapid Return to Normalcy',
 description: 'Patients generally return to routine sedentary work within 7-10 days of the procedure.',
 icon: 'Clock'
 }
 ],
 faqs: [
 {
 question: "How is PCNL different from RIRS?",
 answer: "PCNL involves a tiny keyhole incision in the back to reach large stones directly. RIRS is incision-less and uses natural passages. PCNL is preferred for stones larger than 2cm or staghorn stones."
 },
 {
 question: "Will there be a tube in my back after surgery?",
 answer: "In most standard PCNL cases, a small drainage tube (Nephrostomy) is placed for 24-48 hours. This is removed easily before discharge."
 },
 {
 question: "Can both kidneys be treated at once?",
 answer: "For PCNL, we usually treat one kidney at a time to ensure maximum safety and focus, typically with a 2-4 week gap between procedures if needed."
 }
 ]
 }}
 timeline={{
 title: "Precision Recovery Plan",
 description: "Managing complex stone removal with professional surgical vigilance.",
 steps: [
 {
 title: 'Surgical Mapping',
 description: '3D Reconstructed CT imaging to plan the exact keyhole trajectory into the kidney.',
 duration: 'Day 0'
 },
 {
 title: 'The Procedure',
 description: 'Endoscopic fragmentation and removal of the stone through the percutaneous tract.',
 duration: '90-120 Mins'
 },
 {
 title: 'Post-op Monitoring',
 description: 'Observing drainage and renal function in our high-dependency surgical unit.',
 duration: '48 Hours'
 },
 {
 title: 'Drain Removal & Home',
 description: 'Successful ultrasound check and drain removal before returning home stone-free.',
 duration: 'Day 3'
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
 slug="doctor/near-me/treat/urology/pcnl-complex-stone-removal"
 duration="90-120 Mins"
 hospitalStay="2-3 Days"
 recoveryTime="7-10 Days"
 anesthesia="General Anesthesia"
 >
 <div className="space-y-8">
 <section>
 <h2 className="font-heading text-3xl font-bold mb-4">India's Leading Center for Complex Staghorn Stones</h2>
 <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
 At Indira Super Speciality Hospital, we thrive on complexity. Our <strong>Advanced PCNL Program</strong> is specifically designed for patients with massive stone loads or large staghorn stones that have been deemed "untreatable"elsewhere. By utilizing Mini-PCNL techniques and state-of-the-artimaging, we ensure world-class clearance rates with minimal morbidity.
 </p>
 </section>

 <div className="grid md:grid-cols-2 gap-8 my-12">
 <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
 <h3 className="text-xl font-bold mb-4 text-emerald-400">Mini-PCNL Advantage</h3>
 <p className="text-slate-300">
 We utilize <strong>Mini-PCNL stacks</strong> which require much smaller tracts (15-18 French) compared to standard PCNL (24-30 French). This leads to:
 </p>
 <ul className="mt-4 space-y-2 text-sm text-slate-100">
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
 Less Blood Loss
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
 Lower Post-op Pain
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
 Shorter Hospital Stay
 </li>
 </ul>
 </div>
 </div>
 </div>
 </SubServiceTemplate>
 )
}
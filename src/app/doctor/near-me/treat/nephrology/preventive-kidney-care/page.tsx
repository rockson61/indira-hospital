import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Elite Preventive Kidney Care in Vellore | Indira Hospital",
 description: "Advanced Elite Preventive Kidney Care surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and same-day disch...",
 path: "/doctor/near-me/treat/nephrology/preventive-kidney-care"
});

export default function PreventiveKidneyPage() {
 return (
 <SubServiceTemplate
 title="Elite Preventive Kidney Care"
 eyebrow="Halting Kidney Disease Progression"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Elite Preventive Kidney Care</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
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
 title: 'Metabolic Renal Profiling',
 description: 'Detailed assessment of GFR, proteinuria, and electrolyte balance to stage kidney disease accurately.',
 icon: 'Activity'
 },
 {
 title: 'Precision BP Management',
 description: 'Utilizing specialized medications (ACEi/ARBs) to reduce internal kidney pressure and slow scarring.',
 icon: 'HeartCardiogram'
 },
 {
 title: 'Diabetic Nephropathy Control',
 description: 'Advanced protocols to manage blood sugar and urinary protein levels to prevent kidney failure in diabetics.',
 icon: 'Droplets'
 }
 ],
 benefits: [
 {
 title: 'Delay Dialysis for Years',
 description: 'Patients under our preventive care often significantly delay or entirely avoid the need for dialysis.',
 icon: 'Clock'
 },
 {
 title: 'Integrated Renal Nutrition',
 description: 'Receive personalized low-protein, low-potassium diet plans from our senior renal dietitians.',
 icon: 'Apple'
 },
 {
 title: 'Specialized Lab Access',
 description: 'Priority access to advanced kidney biomarkers and automated 24/7 diagnostic laboratory testing.',
 icon: 'Microscope'
 }
 ],
 faqs: [
 {
 question: "Can chronic kidney disease (CKD) be reversed?",
 answer: "While damaged kidney tissue cannot always be 'regrown,' our preventive protocols can significantly slow down or even halt the progression of the disease, preserving your remaining function for decades."
 },
 {
 question: "Does high blood pressure damage kidneys?",
 answer: "Yes, uncontrolled hypertension is one of the leading causes of kidney failure. It damages the tiny blood vessels in the kidneys, leading to scarring (glomerulosclerosis)."
 },
 {
 question: "How often should a diabetic patient check kidney function?",
 answer: "All diabetic patients should undergo a microalbuminuria test and Serum Creatinine (eGFR) check at least once a year, or more frequently if early signs of kidney damage are detected."
 }
 ]
 }}
 timeline={{
 title: "Your Preventive Care Roadmap",
 description: "Proactive clinical vigilance to protect your essential renal health.",
 steps: [
 {
 title: 'Stage I: Renal Audit',
 description: 'Comprehensive 24-hour urine collection, eGFR calculation, and renal ultrasound mapping.',
 duration: 'Day 1'
 },
 {
 title: 'Stage II: Precision Therapy',
 description: 'Initiation of targeted medications to reduce proteinuria and optimize intra-renal pressure.',
 duration: 'Week 1'
 },
 {
 title: 'Stage III: Nutritional Optimization',
 description: 'In-depth consultation with our renal dietician to calibrate protein and electrolyte intake.',
 duration: 'Month 1'
 },
 {
 title: 'Stage IV: Surveillance',
 description: 'Quarterly review of markers to ensure the therapeutic plan is effectively slowing disease progression.',
 duration: 'Ongoing'
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
 slug="doctor/near-me/treat/nephrology/preventive-kidney-care"
 duration="Consultation"
 hospitalStay="OPD Based"
 recoveryTime="Not Applicable"
 anesthesia="Not Required"
 >
 <div className="space-y-8">
 <section>
 <h2 className="font-heading text-3xl font-bold mb-4">India's Premier Center for Early-Stage Kidney Interventions</h2>
 <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
 At Indira Super Speciality Hospital, our <strong>Elite Renal Team</strong> is focused on preservation. We utilize the latest evidence-backed pharmacological interventions and nutritional strategies to ensure that your kidneys continue to function at their peak capacity. Our mission is to transform the management of CKD from "wait-and-watch" to "proactive-and-protect."
 </p>
 </section>

 <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
 <h3 className="text-xl font-bold mb-4 text-fuchsia-400">The Power of Early Intervention</h3>
 <p className="text-slate-300 mb-6 font-medium">
 CKD is often a "silent" disease. By the time symptoms appear, significant kidney function may already be lost. Early screening and preventive care are your most powerful defenses.
 </p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { value: '75%', label: 'Progression Halt Rate' },
 { value: '500+', label: 'Happy Dialysis-Free Patients' },
 { value: '24/7', label: 'Nephrology Support' },
 { value: '5-Star', label: 'Patient Experience' }
 ].map((stat, i) => (
 <div key={i} className="text-center">
 <p className="text-2xl font-black text-white">{stat.value}</p>
 <p className="text-[10px] text-fuchsia-200 uppercase tracking-widest">{stat.label}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </SubServiceTemplate>
 )
}
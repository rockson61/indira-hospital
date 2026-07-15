import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Elite Stroke Unit & Neuro-Rehabilitation i in Vellore | I...",
 description: "Advanced Elite Stroke Unit & Neuro-Rehabilitation surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and sa...",
 path: "/doctor/near-me/treat/neurology/stroke-unit-rehabilitation"
});

export default function StrokeUnitPage() {
 return (
 <SubServiceTemplate
 title="Elite Stroke Unit & Neuro-Rehabilitation"
 eyebrow="Rapid 'Golden Hour' Response"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Elite Stroke Unit & Neuro-Rehabilitation</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
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
 title: 'Golden Hour Thrombolysis',
 description: 'Rapid administration of clot-dissolving medications to restore brain blood flow and minimize paralysis.',
 icon: 'Activity'
 },
 {
 title: 'Intensive Neuro-Monitoring',
 description: 'Round-the-clock observation in our specialized ICU with dedicated neuro-vitals tracking.',
 icon: 'Siren'
 },
 {
 title: 'Advanced Brain Imaging',
 description: 'High-speed CT Brain and MRI services available 24/7 for the immediate differentiation of stroke types.',
 icon: 'Microscope'
 }
 ],
 benefits: [
 {
 title: 'Elite Stroke Specialist Hub',
 description: 'Consultation with senior neurologists expert in managing complex ischemic and hemorrhagic strokes.',
 icon: 'UserCheck'
 },
 {
 title: 'Comprehensive Neuro-Rehab',
 description: 'Specialized physiotherapy, speech therapy, and occupational therapy to regain lost functions.',
 icon: 'Activity'
 },
 {
 title: 'Family-Focused Education',
 description: 'Detailed counseling to help families understand post-stroke care and long-term prevention strategies.',
 icon: 'Heart'
 }
 ],
 faqs: [
 {
 question: "What are the early warning signs of a stroke?",
 answer: "Remember FAST: Face Drooping, Arm Weakness, Speech Difficulty, and Time to call emergency. Reaching the hospital within 3 hours is critical for recovery."
 },
 {
 question: "Is stroke recovery possible after paralysis?",
 answer: "Yes. With rapid thrombolysis and intensive neuro-rehabilitation, many stroke patients can significantly regain mobility and independence over time."
 },
 {
 question: "Do you have 24/7 Neurology cover?",
 answer: "Yes, our Stroke Unit is backed by 24/7 on-call neurologists and emergency physicians trained in stroke-management protocols."
 }
 ]
 }}
 timeline={{
 title: "Rapid Stroke Recovery Roadmap",
 description: "Every minute counts. Our coordinated response at Indira's Neurology Center.",
 steps: [
 {
 title: 'Minute 0-15: ER Triage',
 description: 'Immediate assessment and blood work initiation upon Arrival at our dedicated emergency dock.',
 duration: 'ER Arrival'
 },
 {
 title: 'Minute 15-30: Brain Mapping',
 description: "Priority CT Brain scan to confirm the stroke's location and type (Ischemic vs Hemorrhagic).",
 duration: 'Stat!'
 },
 {
 title: 'Minute 30-60: Thrombolysis',
 description: 'Administration of clot-dissolving medication in suitable ischemic cases to save brain tissue.',
 duration: 'Golden Hour'
 },
 {
 title: 'Day 2+: Advanced Rehab',
 description: 'Commencement of physiotherapy and speech-swallow assessment for long-term recovery.',
 duration: 'Ongoing'
 }
 ]
 }}
 reviews={{
 entityType: 'department',
 entityName: 'Neurology',
 entitySlug: 'neurology'
 }}
 departmentName="Neurology"
 departmentSlug="neurology"
 slug="doctor/near-me/treat/neurology/stroke-unit-rehabilitation"
 duration="Variable (ICU)"
 hospitalStay="3-7 Days"
 recoveryTime="Weeks to Months"
 anesthesia="Not Required"
 >
 <div className="space-y-8">
 <section>
 <h2 className="font-heading text-3xl font-bold mb-4">India's Premier Rapid-Response Center for Brain Attacks</h2>
 <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
 At the <strong>Indira Stroke Unit</strong>, we understand that time is brain. Our precision-guided protocols are designed for speed and reliability, ensuring that every patient receives the best possible chance of a full recovery. Backed by an advanced 24/7 Imaging Center and ICU, we are the regional leader in managing complex neurological emergencies.
 </p>
 </section>

 <div className="border-l-4 border-red-500 pl-6 my-10 py-2 bg-red-50 dark:bg-red-950/20">
 <p className="text-2xl font-heading font-black text-red-900 dark:text-red-100">
 Over 1000+ Brain Strikes managed with high-success thrombolysis rates.
 </p>
 <p className="text-red-600 font-bold mt-2">— Indira Neurology Department Statistics</p>
 </div>
 </div>
 </SubServiceTemplate>
 )
}
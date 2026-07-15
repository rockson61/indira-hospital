import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Elite Medical Oncology & Chemotherapy in V in Vellore | I...",
 description: "Advanced Elite Medical Oncology & Chemotherapy surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and same-...",
 path: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy"
});

export default function MedicalOncologyPage() {
 return (
 <SubServiceTemplate
 title="Elite Medical Oncology & Chemotherapy"
 eyebrow="Targeted & Systemic Cancer Therapies"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Elite Medical Oncology & Chemotherapy</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
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
 title: 'Precision Chemotherapy',
 description: 'Individually calibrated dosing protocols based on the latest international guidelines (ASCO/NCCN).',
 icon: 'Activity'
 },
 {
 title: 'Advanced Immunotherapy',
 description: 'Using specialized drugs (Check-point inhibitors) to empower your own immune system to fight cancer.',
 icon: 'Dna'
 },
 {
 title: 'Pain & Palliative Management',
 description: 'Dedicated protocols to manage cancer pain and improve life quality throughout the treatment journey.',
 icon: 'Heart'
 }
 ],
 benefits: [
 {
 title: 'Stress-Free Day Care',
 description: 'Most infusions are completed in our day-care unit, allowing you to return home the same evening.',
 icon: 'Bed'
 },
 {
 title: 'Elite Oncology Nursing',
 description: 'Care provided by highly trained nurses specialized in chemo-administration and side-effect management.',
 icon: 'UserCheck'
 },
 {
 title: 'Nutritional Oncology Support',
 description: 'Personalized diet plans to maintain strength and immune function during systemic therapy.',
 icon: 'Apple'
 }
 ],
 faqs: [
 {
 question: "How long does a chemotherapy session take?",
 answer: "Chemotherapy sessions vary from 1 hour to 6 hours depending on the drug protocol. Most our patients complete treatment in our day-care and go home the same day."
 },
 {
 question: "What is a Chemo Port and do I need one?",
 answer: "A Chemo Port is a tiny device placed under the skin to provide safe, painless access for multiple infusions. It's often recommended for long-term treatments to avoid multiple needle pricks."
 },
 {
 question: "Will I lose my hair during treatment?",
 answer: "Hair loss depends on the specific chemotherapy drugs used. Not all regimens cause it. Your oncologist will discuss this with you before starting treatment."
 }
 ]
 }}
 timeline={{
 title: "Your Comfort-First Treatment Path",
 description: "Nurturing your health through every cycle of systemic therapy.",
 steps: [
 {
 title: 'Cycle Pre-Screening',
 description: 'Detailed blood work (CBC/Kidney/Liver) to ensure your body is ready for the next dose.',
 duration: 'Day 0'
 },
 {
 title: 'Targeted Infusion',
 description: 'Administration of systemic therapy in our premium, relaxed medical oncology suites.',
 duration: '1-6 Hours'
 },
 {
 title: 'Clinical Observation',
 description: 'Short period after infusion to manage any immediate reactions and ensure comfort.',
 duration: '1 Hour'
 },
 {
 title: 'Home-Care Monitoring',
 description: '24/7 tele-support to manage any side effects from the comfort of your home.',
 duration: 'Post-Cycle'
 }
 ]
 }}
 reviews={{
 entityType: 'department',
 entityName: 'Oncology',
 entitySlug: 'oncology'
 }}
 departmentName="Oncology"
 departmentSlug="oncology"
 slug="doctor/near-me/treat/oncology/medical-oncology-chemotherapy"
 duration="1-6 Hours"
 hospitalStay="Day Care"
 recoveryTime="2-3 Days"
 anesthesia="Not Required"
 >
 <div className="space-y-8">
 <section>
 <h2 className="font-heading text-3xl font-bold mb-4">India's Premier Sanctuary for Medical Cancer Care</h2>
 <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
 At the <strong>Indira Medical Oncology Center</strong>, we provide more than just medication; we provide a complete support system. Our oncology specialists utilize the latest therapeutic blueprints to fight cancer while ensuring that you live life with as much strength and normalcy as possible. Our unit is equipped with specialized Bio-Safety Cabinets for safe, accurate drug preparation by master pharmacists.
 </p>
 </section>

 <div className="bg-fuchsia-50 dark:bg-fuchsia-950/30 p-10 rounded-[3rem] border border-fuchsia-100 dark:border-fuchsia-900/50">
 <h3 className="text-2xl font-bold mb-6 text-fuchsia-900 dark:text-fuchsia-100">Integrated Support Services</h3>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="space-y-2">
 <h4 className="font-bold text-fuchsia-800 dark:text-fuchsia-300">Onco-Dietetics</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">Personalized nutrition to combat weight loss and cachexia during treatment.</p>
 </div>
 <div className="space-y-2">
 <h4 className="font-bold text-fuchsia-800 dark:text-fuchsia-300">Pain Management</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">Specialized palliative interventional protocols for cancer-related chronic pain.</p>
 </div>
 <div className="space-y-2">
 <h4 className="font-bold text-fuchsia-800 dark:text-fuchsia-300">Psychology</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">Dedicated mental health support for patients and their families navigations oncology.</p>
 </div>
 </div>
 </div>
 </div>
 </SubServiceTemplate>
 )
}
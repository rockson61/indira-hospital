'use client'

import React from 'react'
import { CheckCircle2, XCircle, Zap, ShieldAlert, Clock, Bed, Smile, Activity } from 'lucide-react'

interface ComparisonRowProps {
  label: string
  traditional: string
  elite: string
  isEliteBetter?: boolean
}

const ComparisonRow = ({ label, traditional, elite, isEliteBetter = true }: ComparisonRowProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 border-b border-slate-100 dark:border-slate-800 items-center">
    <div className="col-span-2 md:col-span-1">
      <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
    <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl md:bg-transparent md:p-0">
      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
      <span className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">{traditional}</span>
    </div>
    <div className="flex items-center gap-3 bg-fuchsia-50 dark:bg-fuchsia-950/30 p-4 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-900/50 md:bg-transparent md:p-0 md:border-none">
      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
      <span className="text-slate-900 dark:text-white font-bold text-sm md:text-base">{elite}</span>
    </div>
  </div>
)

interface ProcedureComparisonProps {
  type?: 'laser' | 'laparoscopy' | 'orthopedics' | 'ophthalmology' | 'dentistry' | 'general'
}

export const ProcedureComparison = ({ type = 'general' }: ProcedureComparisonProps) => {
  // Define dataset based on comparison type
  const comparisonData = {
    laser: {
      title: "The Advantage: Advanced Laser vs. Traditional Surgery",
      rows: [
        { label: "Pain Level", traditional: "High (Requires heavy painkillers)", elite: "Minimal (Virtually painless)" },
        { label: "Recovery Time", traditional: "4 - 6 Weeks", elite: "48 - 72 Hours" },
        { label: "Hospital Stay", traditional: "3 - 5 Days", elite: "Daycare (Discharge in 6 hrs)" },
        { label: "Incision & Scars", traditional: "Large cuts (Significant scarring)", elite: "Pin-hole (Zero visible scars)" },
        { label: "Complications", traditional: "Risk of infection & bleeding", elite: "Standard safety; zero blood loss" },
        { label: "Back to Work", traditional: "After 3 - 4 weeks", elite: "Within 2 - 3 days" }
      ],
      footnote1: "100% Sphincter-Preserving & Tissue-Saving Protocols.",
      footnote2: "Advanced USFDA Approved Laser Tech."
    },
    laparoscopy: {
      title: "The Advantage: Laparoscopic Keyhole vs. Open Surgery",
      rows: [
        { label: "Pain Level", traditional: "High (Requires heavy painkillers)", elite: "Low (Minimal discomfort)" },
        { label: "Recovery Time", traditional: "6 - 8 Weeks", elite: "1 - 2 Weeks" },
        { label: "Hospital Stay", traditional: "5 - 7 Days", elite: "1 - 2 Days" },
        { label: "Incision & Scars", traditional: "Large abdominal cuts (10-15cm)", elite: "Keyhole cuts (3-5mm tiny marks)" },
        { label: "Complications", traditional: "Higher wound complications & infection", elite: "Lower risk of infection & hernia" },
        { label: "Back to Work", traditional: "After 4 - 6 weeks", elite: "Within 7 - 10 days" }
      ],
      footnote1: "Incision-less & Muscle-Sparing Protocols.",
      footnote2: "High-Definition 4K Laparoscopy Tech."
    },
    orthopedics: {
      title: "The Advantage: Computer-Guided Joint Care vs. Conventional Methods",
      rows: [
        { label: "Pain Level", traditional: "High (Standard systemic control)", elite: "Highly controlled (Advanced blocks)" },
        { label: "Recovery Time", traditional: "8 - 12 Weeks", elite: "3 - 4 Weeks" },
        { label: "Hospital Stay", traditional: "7 - 10 Days", elite: "2 - 3 Days" },
        { label: "Incision & Scars", traditional: "Large tissue-disrupting cuts", elite: "Minimally invasive muscle-sparing" },
        { label: "Complications", traditional: "Imperfect alignment risk; higher wear", elite: "Perfect alignment; minimal implant wear" },
        { label: "Back to Work", traditional: "After 8 - 10 weeks", elite: "Within 3 - 4 weeks" }
      ],
      footnote1: "Rapid Mobilization & Walk-on-Same-Day Protocols.",
      footnote2: "Advanced Titanium & Cobalt-Chromium Implants."
    },
    dentistry: {
      title: "The Advantage: Digital Guided Dentistry vs. Traditional Dental Methods",
      rows: [
        { label: "Pain Level", traditional: "Moderate (Standard drilling)", elite: "Virtually Painless (Local/Sedation)" },
        { label: "Recovery Time", traditional: "7 - 10 Days (For surgery)", elite: "Immediate / Same-Day" },
        { label: "Hospital Stay", traditional: "Multiple long visits", elite: "Daycare (In-Out in 1-2 hours)" },
        { label: "Incision & Scars", traditional: "Surgical flaps & sutures", elite: "Incision-free digital templates" },
        { label: "Complications", traditional: "Higher implant failure & infection risk", elite: "99.2% Success; sterile micro-implants" },
        { label: "Back to Work", traditional: "After 2 - 3 days", elite: "Immediate (Same-day)" }
      ],
      footnote1: "Painless Single-Sitting Root Canals & Digital Smile Design.",
      footnote2: "State-of-the-Art Digital CBCT & Intraoral Scanners."
    },
    ophthalmology: {
      title: "The Advantage: Advanced Micro-Surgery vs. Traditional Vision Methods",
      rows: [
        { label: "Pain Level", traditional: "Moderate (Standard surgical cuts)", elite: "Painless (Aesthetic drops)" },
        { label: "Recovery Time", traditional: "3 - 4 Weeks", elite: "24 - 48 Hours" },
        { label: "Hospital Stay", traditional: "1 - 2 Days admission", elite: "Daycare (Walk-in, walk-out in 30 mins)" },
        { label: "Incision & Scars", traditional: "Sutured blade-cuts", elite: "Incision-less blade-free laser" },
        { label: "Complications", traditional: "Higher risk of dry eye & infection", elite: "Standard safety; microscopic accuracy" },
        { label: "Back to Work", traditional: "After 1 - 2 weeks", elite: "Within 24 hours" }
      ],
      footnote1: "Ultra-precise flapless and blade-free vision care.",
      footnote2: "USFDA Approved Refractive Laser Tech."
    },
    general: {
      title: "The Advantage: Advanced Care Protocols vs. Conventional Methods",
      rows: [
        { label: "Pain Level", traditional: "Standard postoperative pain", elite: "Highly managed & minimal" },
        { label: "Recovery Time", traditional: "Standard recovery timeline", elite: "Rapid recovery cycle" },
        { label: "Hospital Stay", traditional: "Standard hospital admission", elite: "Daycare / Short stay" },
        { label: "Incision & Scars", traditional: "Conventional open access", elite: "Precision minimal access" },
        { label: "Complications", traditional: "Standard complication rate", elite: "Extremely low complication rate" },
        { label: "Back to Work", traditional: "Extended rest required", elite: "Quick return to activity" }
      ],
      footnote1: "Patient-First Care & Continuous Clinical Monitoring.",
      footnote2: "USFDA Approved Infrastructure & Sterilization."
    }
  }

  const currentData = comparisonData[type] || comparisonData.general

  return (
    <section className="my-16">
      <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-float border border-slate-100 dark:border-slate-800 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 font-heading">
            {currentData.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Modern medical science allows for precision that traditional methods simply cannot match. Compare how our advanced procedures redefine the patient experience.
          </p>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 pb-6 border-b-2 border-slate-100 dark:border-slate-800">
          <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Efficiency Metric</div>
          <div className="text-lg font-bold text-red-600 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" /> Traditional Open
          </div>
          <div className="text-lg font-bold text-fuchsia-600 flex items-center gap-2">
            <Zap className="w-5 h-5" /> Modern Treatment
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-2">
          {currentData.rows.map((row, index) => (
            <ComparisonRow 
              key={index}
              label={row.label} 
              traditional={row.traditional} 
              elite={row.elite} 
            />
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm">
              <Smile className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {currentData.footnote1}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-fuchsia-600 shadow-sm">
              <Activity className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {currentData.footnote2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

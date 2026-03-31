'use client'

import React from 'react'
import { Clock, Bed, HeartPulse, ShieldCheck, Zap, Activity } from 'lucide-react'

interface QuickFactItemProps {
    label: string
    value: string
    icon: React.ElementType
    color: string
}

const QuickFactItem = ({ label, value, icon: Icon, color }: QuickFactItemProps) => (
    <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{label}</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">{value}</p>
        </div>
    </div>
)

interface ServiceQuickSummaryProps {
    duration?: string
    hospitalStay?: string
    recoveryTime?: string
    anesthesia?: string
}

export const ServiceQuickSummary = ({
    duration = '30 - 45 Mins',
    hospitalStay = 'Daycare (6 hrs)',
    recoveryTime = '48 Hours',
    anesthesia = 'Local/Spinal'
}: ServiceQuickSummaryProps) => {
    return (
        <section className="my-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <QuickFactItem 
                    label="Proc. Duration" 
                    value={duration} 
                    icon={Clock} 
                    color="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600" 
                />
                <QuickFactItem 
                    label="Hospital Stay" 
                    value={hospitalStay} 
                    icon={Bed} 
                    color="bg-fuchsia-50 dark:bg-fuchsia-950/30 text-fuchsia-600" 
                />
                <QuickFactItem 
                    label="Recovery Time" 
                    value={recoveryTime} 
                    icon={ShieldCheck} 
                    color="bg-blue-50 dark:bg-blue-950/30 text-blue-600" 
                />
                <QuickFactItem 
                    label="Anesthesia" 
                    value={anesthesia} 
                    icon={HeartPulse} 
                    color="bg-rose-50 dark:bg-rose-950/30 text-rose-600" 
                />
            </div>
        </section>
    )
}

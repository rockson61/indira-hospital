'use client'

import React, { useState } from 'react'
import { 
    Zap, 
    UserCheck, 
    IndianRupee, 
    MessageSquare, 
    ShieldCheck,
    ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { InsuranceCheckerModal } from './InsuranceCheckerModal'

const CARDS = [
    {
        id: 'procedures',
        title: 'Latest Procedures',
        icon: Zap,
        color: 'bg-amber-50 text-amber-600 border-amber-100',
        action: 'View All',
        href: '#related-treatments'
    },
    {
        id: 'surgeons',
        title: 'Top Surgeons',
        icon: UserCheck,
        color: 'bg-rose-50 text-rose-600 border-rose-100',
        action: 'Connect Now',
        href: '#surgeons'
    },
    {
        id: 'cost',
        title: 'Cost Estimates',
        icon: IndianRupee,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        action: 'Get Quote',
        href: '#pricing'
    },
    {
        id: 'opinion',
        title: 'Second Opinion',
        icon: MessageSquare,
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        action: 'Book Free',
        href: '#opinion-form'
    },
    {
        id: 'insurance',
        title: 'Insurance Checker',
        icon: ShieldCheck,
        color: 'bg-orange-50 text-orange-600 border-orange-100',
        action: 'Check Now',
        isModal: true
    }
]

export function ConversionGrid({ whatsappUrl }: { whatsappUrl: string }) {
    const [isInsuranceModalOpen, setIsInsuranceModalOpen] = useState(false)

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {CARDS.map((card, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className={cn(
                            "group cursor-pointer rounded-3xl p-6 border transition-all duration-300",
                            card.color,
                            "hover:shadow-xl hover:shadow-black/5"
                        )}
                        onClick={() => {
                            if (card.isModal) {
                                setIsInsuranceModalOpen(true)
                            } else if (card.href?.startsWith('#')) {
                                const el = document.querySelector(card.href)
                                if (el) el.scrollIntoView({ behavior: 'smooth' })
                            } else {
                                window.open(whatsappUrl, '_blank')
                            }
                        }}
                    >
                        <div className="flex flex-col h-full justify-between gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-black/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-black text-slate-900 text-sm md:text-base leading-tight mb-1">
                                    {card.title}
                                </h3>
                                <div className="flex items-center gap-1 group-hover:gap-2 transition-all opacity-80 decoration-none no-underline border-none">
                                    <span className="text-[11px] font-bold uppercase tracking-wider">{card.action}</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <InsuranceCheckerModal 
                isOpen={isInsuranceModalOpen} 
                onClose={() => setIsInsuranceModalOpen(false)} 
                whatsappUrl={whatsappUrl}
            />
        </>
    )
}

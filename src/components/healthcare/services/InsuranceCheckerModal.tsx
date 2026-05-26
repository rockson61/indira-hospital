'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
 ShieldCheck, 
 X, 
 ArrowRight, 
 Building2, 
 CheckCircle2,
 MessageCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function InsuranceCheckerModal({ 
 isOpen, 
 onClose, 
 whatsappUrl 
}: { 
 isOpen: boolean
 onClose: () => void
 whatsappUrl: string 
}) {
 const [step, setStep] = useState(1)

 return (
 <AnimatePresence>
 {isOpen && (
 <>
 {/* Backdrop */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onClick={onClose}
 className="fixed inset-0 z-[100] bg-slate-950/60 "
 />

 {/* Modal */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 20 }}
 className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg overflow-hidden"
 >
 <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 relative mx-4">
 {/* Close Button */}
 <button 
 onClick={onClose}
 className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all transition-colors z-10"
 >
 <X className="w-5 h-5" />
 </button>

 {/* Content */}
 <div className="p-8 md:p-12">
 <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-600 mb-8">
 <ShieldCheck className="w-8 h-8" />
 </div>

 <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2 uppercase italic leading-none">
 Check Insurance Coverage
 </h2>
 <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Verify your surgical benefits instantly via WhatsApp with our specialized counselors.</p>

 <div className="space-y-4 mb-10">
 {[
 'Covers 50+ Top TPA & Insurance Providers',
 'Cashless Processing for All Surgeries',
 'Dedicated Claims Assistance Executive',
 '0% Foreclosure Penalty on EMIs'
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3">
 <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
 <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
 </div>
 <span className="text-sm font-bold text-slate-700 dark:text-slate-300 italic tracking-tight">{item}</span>
 </div>
 ))}
 </div>

 <div className="grid grid-cols-1 gap-4">
 <Button 
 asChild
 className="h-16 rounded-[2rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-colors font-black text-lg uppercase tracking-widest italic group overflow-hidden relative shadow-xl shadow-black/10 hover:shadow-black/20 transition-all hover:scale-[1.02]"
 >
 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
 <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
 Check on WhatsApp
 <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
 </a>
 </Button>
 <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
 Takes less than 2 minutes. No paperwork needed.
 </p>
 </div>
 </div>

 {/* Footer Decor */}
 <div className="h-4 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-indigo-600" />
 </div>
 </motion.div>
 </>
 )}
 </AnimatePresence>
 )
}

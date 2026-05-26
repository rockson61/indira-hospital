'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
 Info, 
 UserCheck, 
 IndianRupee, 
 HelpCircle, 
 ChevronRight,
 MessageCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface NavItem {
 id: string
 label: string
 icon: React.ElementType
}

const NAV_ITEMS: NavItem[] = [
 { id: 'about', label: 'About', icon: Info },
 { id: 'surgeons', label: 'Surgeons', icon: UserCheck },
 { id: 'pricing', label: 'Pricing', icon: IndianRupee },
 { id: 'faq', label: 'FAQ', icon: HelpCircle },
]

export function TreatmentSecondaryNav({ 
 treatmentName, 
 whatsappUrl 
}: { 
 treatmentName: string
 whatsappUrl: string 
}) {
 const [isSticky, setIsSticky] = useState(false)

 useEffect(() => {
 const handleScroll = () => {
 setIsSticky(window.scrollY > 400)
 }
 window.addEventListener('scroll', handleScroll)
 return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 return (
 <AnimatePresence>
 {isSticky && (
 <motion.div
 initial={{ y: -100, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: -100, opacity: 0 }}
 className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg shadow-black/5"
 >
 <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
 {/* Left: Breadcrumb/Title */}
 <div className="hidden lg:flex items-center gap-2 text-sm font-medium">
 <span className="text-slate-400">Treatment</span>
 <ChevronRight className="w-3 h-3 text-slate-300" />
 <span className="text-slate-900 dark:text-white font-bold truncate max-w-[200px]">
 {treatmentName}
 </span>
 </div>

 {/* Center: Nav Items */}
 <nav className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar">
 {NAV_ITEMS.map((item) => (
 <a
 key={item.id}
 href={`#${item.id}`}
 className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
 >
 <item.icon className="w-4 h-4" />
 {item.label}
 </a>
 ))}
 </nav>

 {/* Right: CTA */}
 <div className="flex items-center gap-3">
 <Button 
 variant="outline" 
 size="sm" 
 className="hidden md:flex rounded-full border-fuchsia-100/50 hover:bg-fuchsia-50 text-fuchsia-600 font-bold text-xs uppercase tracking-widest px-6 h-9 transition-transform hover:scale-105"
 onClick={() => window.open(whatsappUrl, '_blank')}
 >
 <MessageCircle className="w-3.5 h-3.5 mr-2" />
 Get Pricing
 </Button>
 <Button 
 size="sm" 
 className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest px-6 h-9 shadow-lg shadow-black/10 transition-transform hover:scale-105"
 onClick={() => window.open(whatsappUrl, '_blank')}
 >
 Book Now
 </Button>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 )
}

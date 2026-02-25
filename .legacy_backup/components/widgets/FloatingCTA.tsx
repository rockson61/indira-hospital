"use client"

import { Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:hidden pb-safe"
                >
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-2xl flex gap-3">
                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 rounded-xl border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                        >
                            <a href="https://wa.me/917010650063">
                                <Phone className="w-4 h-4 mr-2" />
                                WhatsApp
                            </a>
                        </Button>
                        <Button
                            asChild
                            className="flex-1 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                        >
                            <a href="/contact">
                                <Calendar className="w-4 h-4 mr-2" />
                                Book Now
                            </a>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

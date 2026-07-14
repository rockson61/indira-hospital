"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingWhatsApp = () => {
 const [isVisible, setIsVisible] = useState(false);
 const [isExpanded, setIsExpanded] = useState(false);

 // Show after scrolling down slightly or after 3 seconds
 useEffect(() => {
 const timer = setTimeout(() => {
 setIsVisible(true);
 }, 3000);

 const handleScroll = () => {
 if (window.scrollY > 300) {
 setIsVisible(true);
 }
 };

 window.addEventListener("scroll", handleScroll);
 return () => {
 clearTimeout(timer);
 window.removeEventListener("scroll", handleScroll);
 };
 }, []);

 if (!isVisible) return null;

 return (
 <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col items-end pointer-events-none">
 <AnimatePresence>
 {isExpanded && (
 <motion.div
 initial={{ opacity: 0, y: 20, scale: 0.9 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 exit={{ opacity: 0, y: 20, scale: 0.9 }}
 transition={{ type: "spring", stiffness: 300, damping: 25 }}
 className="mb-4 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-clay dark:shadow-clay-dark border border-slate-100 dark:border-slate-800 pointer-events-auto max-w-[280px]"
 >
 <div className="flex justify-between items-center mb-3">
 <div className="flex items-center gap-2">
 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
 <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
 Indira Care Coordinator
 </span>
 </div>
 <button
 onClick={() => setIsExpanded(false)}
 className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
 >
 <X className="w-4 h-4" />
 </button>
 </div>
 <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
 Hello! I&apos;m part of the patient care team. How can I help you book an appointment or find a treatment today?
 </p>
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I need help with an appointment at Indira Hospital.`}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-semibold transition-colors"
 >
 <MessageCircle className="w-4 h-4" />
 Chat on WhatsApp
 </a>
 </motion.div>
 )}
 </AnimatePresence>

 <motion.button
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={() => setIsExpanded(!isExpanded)}
 className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-clay dark:shadow-clay-dark pointer-events-auto relative overflow-hidden group"
 aria-label="WhatsApp Support"
 >
 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
 <MessageCircle className="w-7 h-7 relative z-10" />
 </motion.button>
 </div>
 );
};

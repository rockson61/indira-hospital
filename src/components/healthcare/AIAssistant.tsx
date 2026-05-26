"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Activity, IndianRupee, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface Message {
 id: string;
 type: "user" | "bot";
 content: string;
 isActionable?: boolean;
}

const SUGGESTED_QUERIES = [
 { icon: <Activity className="w-4 h-4" />, text: "Check my symptoms" },
 { icon: <IndianRupee className="w-4 h-4" />, text: "Cost for Laser Piles Surgery" },
 { icon: <Sparkles className="w-4 h-4" />, text: "Book an Appointment" }
];

export const AIAssistant = () => {
 const [messages, setMessages] = useState<Message[]>([
 {
 id: "1",
 type: "bot",
 content: "Hello! I am Indira AI, your advanced healthcare assistant. I can help you check symptoms, estimate surgery costs, or connect you directly to our expert surgeons. How can I assist you today?"
 }
 ]);
 const [inputValue, setInputValue] = useState("");
 const [isTyping, setIsTyping] = useState(false);
 const scrollAreaRef = useRef<HTMLDivElement>(null);

 // Auto-scroll
 useEffect(() => {
 if (scrollAreaRef.current) {
 scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
 }
 }, [messages, isTyping]);

 const handleSend = async (text: string) => {
 if (!text.trim()) return;

 const userMsg: Message = { id: Date.now().toString(), type: "user", content: text };
 setMessages(prev => [...prev, userMsg]);
 setInputValue("");
 setIsTyping(true);

 // Mock AI Processing Delay
 setTimeout(() => {
 let botResponse = "";
 let isActionable = false;
 const lowerText = text.toLowerCase();

 if (lowerText.includes("cost") || lowerText.includes("price") || lowerText.includes("rupees")) {
 botResponse = "For standard procedures like Laser Piles or Hernia, our all-inclusive packages generally range from ₹35,000 to ₹65,000 depending on clinical complexity and room grade. Would you like me to connect you to our billing counselor for an exact quote?";
 isActionable = true;
 } else if (lowerText.includes("pain") || lowerText.includes("symptom") || lowerText.includes("stomach") || lowerText.includes("bleeding")) {
 botResponse = "I understand you're experiencing some discomfort. Based on those symptoms, a consultation with a General Surgeon or Gastroenterologist is recommended to rule out conditions like fissures, piles, or hernias. Shall I help you book a priority OPD slot?";
 isActionable = true;
 } else if (lowerText.includes("book") || lowerText.includes("appointment")) {
 botResponse = "I can certainly help you with that. The fastest way to secure a confirmed slot is via our WhatsApp Support line, or you can call us directly.";
 isActionable = true;
 } else {
 botResponse = "Thank you for sharing. Indira Super Speciality Hospital is equipped with advanced diagnostic and surgical capabilities. Could you tell me a bit more about what you're looking for, or would you prefer to speak directly with our medical team?";
 }

 setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), type: "bot", content: botResponse, isActionable }]);
 setIsTyping(false);
 }, 1500);
 };

 return (
 <div className="flex flex-col h-[600px] max-h-[80vh] bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-clay dark:shadow-clay-dark border border-slate-200 dark:border-slate-800">
 {/* Header */}
 <div className="bg-white dark:bg-slate-950 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between z-10">
 <div className="flex items-center gap-3">
 <div className="relative">
 <div className="w-10 h-10 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center border border-fuchsia-200 dark:border-fuchsia-800">
 <Bot className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
 </div>
 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-950 rounded-full" />
 </div>
 <div>
 <h3 className="font-bold text-slate-900 dark:text-white leading-tight">Indira AI</h3>
 <p className="text-xs text-slate-500 font-medium">Symptom & Cost Assistant</p>
 </div>
 </div>
 </div>

 {/* Chat Area */}
 <div 
 ref={scrollAreaRef}
 className="flex-1 p-4 overflow-y-auto space-y-6 scroll-smooth bg-[url('/noise.png')] bg-repeat opacity-95"
 >
 <AnimatePresence initial={false}>
 {messages.map((msg) => (
 <motion.div
 key={msg.id}
 initial={{ opacity: 0, y: 10, scale: 0.95 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 transition={{ type: "spring", stiffness: 200, damping: 20 }}
 className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
 >
 <div className={`flex gap-3 max-w-[85%] ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
 <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.type === "user" ? "bg-slate-200 dark:bg-slate-800" : "bg-fuchsia-100 dark:bg-fuchsia-900/50"}`}>
 {msg.type === "user" ? <User className="w-4 h-4 text-slate-600 dark:text-slate-400" /> : <Bot className="w-4 h-4 text-fuchsia-600 dark:text-fuchsia-400" />}
 </div>
 
 <div className="flex flex-col gap-2">
 <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
 msg.type === "user" 
 ? "bg-fuchsia-600 text-white rounded-tr-sm shadow-sm" 
 : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-sm shadow-clay-sm dark:shadow-clay-dark border border-slate-100 dark:border-slate-700"
 }`}>
 {msg.content}
 </div>
 
 {/* Actionable CTA appended to bot message */}
 {msg.isActionable && msg.type === "bot" && (
 <motion.a
 initial={{ opacity: 0, y: 5 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I was speaking to your AI assistant and need further help.`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 self-start px-4 py-2 bg-green-50 hover:bg-green-100 dark:bg-green-950/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-bold rounded-xl transition-colors border border-green-200 dark:border-green-800/50"
 >
 Connect to Live Agent <ArrowRight className="w-3 h-3" />
 </motion.a>
 )}
 </div>
 </div>
 </motion.div>
 ))}
 
 {isTyping && (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.9 }}
 className="flex justify-start"
 >
 <div className="flex gap-3">
 <div className="w-8 h-8 bg-fuchsia-100 dark:bg-fuchsia-900/50 rounded-full flex items-center justify-center shrink-0 mt-1">
 <Bot className="w-4 h-4 text-fuchsia-600 dark:text-fuchsia-400" />
 </div>
 <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-sm shadow-clay-sm dark:shadow-clay-dark border border-slate-100 dark:border-slate-700 flex gap-1 items-center h-10">
 <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-slate-300 dark:bg-slate-500 rounded-full" />
 <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-slate-300 dark:bg-slate-500 rounded-full" />
 <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-slate-300 dark:bg-slate-500 rounded-full" />
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* Input Area */}
 <div className="bg-white dark:bg-slate-950 p-4 border-t border-slate-200 dark:border-slate-800 z-10">
 <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
 {SUGGESTED_QUERIES.map((query, i) => (
 <button
 key={i}
 onClick={() => handleSend(query.text)}
 className="whitespace-nowrap flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-fuchsia-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors"
 >
 {query.icon} {query.text}
 </button>
 ))}
 </div>
 
 <form 
 onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
 className="flex gap-2 items-end relative"
 >
 <textarea
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 placeholder="Type your symptoms or query..."
 className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 resize-none h-[52px] min-h-[52px] shadow-inner"
 onKeyDown={(e) => {
 if (e.key === 'Enter' && !e.shiftKey) {
 e.preventDefault();
 handleSend(inputValue);
 }
 }}
 />
 <button
 type="submit"
 disabled={!inputValue.trim() || isTyping}
 className="h-[52px] px-5 bg-slate-900 hover:bg-fuchsia-600 disabled:bg-slate-300 dark:bg-white dark:text-slate-900 dark:hover:bg-fuchsia-500 dark:disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-2xl flex items-center justify-center transition-all shadow-clay-sm"
 >
 {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
 </button>
 </form>
 <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">
 Indira AI provides informational estimates and is not a substitute for clinical diagnosis.
 </p>
 </div>
 </div>
 );
};

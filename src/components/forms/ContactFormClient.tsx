"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail, Clock, Send, Shield } from "lucide-react";
import { HeartCardiogram } from "healthicons-react/outline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { submitContactForm } from "@/app/actions/contact-actions";

export function ContactFormClient() {
 const [formData, setFormData] = useState({
 first_name: "",
 last_name: "",
 email: "",
 phone: "",
 message: ""
 });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);
 const [error, setError] = useState("");

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setIsSubmitting(true);
 setError("");

 try {
 const result: any = await submitContactForm(formData);
 if (result.success) {
 setIsSuccess(true);
 setFormData({
 first_name: "",
 last_name: "",
 email: "",
 phone: "",
 message: ""
 });
 } else {
 setError(result.error || "Failed to send message.");
 }
 } catch (err) {
 setError("Something went wrong. Please try again.");
 } finally {
 setIsSubmitting(false);
 }
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 if (isSuccess) {
 return (
 <main className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
 <motion.div 
 initial={{ scale: 0.9, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 text-center max-w-2xl"
 >
 <div className="w-20 h-20 bg-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(217,70,239,0.5)]">
 <Send className="w-10 h-10 text-white" />
 </div>
 <h2 className="elite-section-title text-white mb-4">Message Sent!</h2>
 <p className="text-xl text-slate-300 mb-10">
 Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
 </p>
 <Button 
 onClick={() => setIsSuccess(false)}
 className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-10 py-6 rounded-2xl font-bold text-lg"
 >
 Send Another Message
 </Button>
 </motion.div>
 </main>
 );
 }

 return (
 <>
 {/* Bold Asymmetrical Deep Hero */}
 <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />
 <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

 <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
 <motion.div
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
 >
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-rose-500/30">
 <HeartCardiogram className="w-4 h-4 animate-pulse" /> Available 24/7
 </span>
 <h1 className="elite-hero-title text-white mb-6 max-w-6xl mx-auto">
 Contact Indira Hospital <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">in Vellore.</span>
 </h1>
 <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
 Need an appointment, emergency trauma care, or a free cost estimate? Reach out to the top multispeciality hospital in Vellore. Our expert team is ready 24/7.
 </p>
 </motion.div>
 </div>
 </section>

 {/* Main Interactive Grid */}
 <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-24 sm:-mt-32">
 <div className="grid lg:grid-cols-12 gap-10 items-start">

 {/* Left Column: Contact Bento */}
 <div className="lg:col-span-5 space-y-10">
 {/* Primary Contact Details */}
 <motion.div
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="bg-white dark:bg-slate-900 p-10 lg:p-14 rounded-[4rem] border border-slate-200 dark:border-slate-700/50 shadow-2xl space-y-10 relative overflow-hidden group animate-in fade-in slide-in-from-left-8 duration-1000 ease-out"
 >
 <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
 <h2 className="elite-section-title text-slate-900 dark:text-white lg:mb-12 relative z-10">Get in Touch</h2>

 <div className="space-y-10 relative z-10">
 <div className="flex gap-6 group/item cursor-pointer">
 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700 group-hover/item:bg-green-500 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:scale-110">
 <MessageCircle className="w-7 h-7" />
 </div>
 <div>
 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">WhatsApp Support</h3>
 <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block text-green-600 font-black hover:text-green-700 transition-colors text-2xl mb-2">Chat Now</a>
 <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Free Instant Consult</p>
 </div>
 </div>

 <div className="flex gap-6 group/item">
 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700 group-hover/item:bg-fuchsia-500 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:scale-110">
 <MapPin className="w-7 h-7" />
 </div>
 <div>
 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Address</h3>
 <p className="text-xl text-slate-600 leading-relaxed font-bold group-hover/item:text-fuchsia-700 transition-colors">
 {siteConfig.contact.address.split(', ').map((line, i) => (
 <React.Fragment key={i}>
 {line}{i < siteConfig.contact.address.split(', ').length - 1 ? <br /> : ''}
 </React.Fragment>
 ))}
 </p>
 </div>
 </div>

 <div className="flex gap-6 group/item cursor-pointer">
 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700 group-hover/item:bg-rose-500 group-hover/item:text-white transition-all duration-500 shadow-sm relative group-hover/item:scale-110">
 <Phone className="w-7 h-7" />
 </div>
 <div>
 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Rapid Response</h3>
 <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="block text-rose-600 font-black hover:text-rose-700 transition-colors text-2xl mb-2">{siteConfig.contact.phone}</a>
 <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s+/g, '')}`} className="block text-slate-600 font-bold hover:text-fuchsia-600 transition-colors text-lg">{siteConfig.contact.emergencyPhone} <span className="text-xs text-slate-400 uppercase tracking-widest ml-2">(Emergency)</span></a>
 </div>
 </div>

 <div className="flex gap-6 group/item cursor-pointer">
 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:scale-110">
 <Mail className="w-7 h-7" />
 </div>
 <div>
 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Digital Enquiry</h3>
 <a href={`mailto:${siteConfig.contact.email}`} className="text-xl text-slate-600 font-bold hover:text-blue-600 transition-colors break-all">{siteConfig.contact.email}</a>
 </div>
 </div>

 <div className="flex gap-6 group/item">
 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700 group-hover/item:bg-pink-500 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:scale-110">
 <Clock className="w-7 h-7" />
 </div>
 <div>
 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Visiting Hours</h3>
 <div className="space-y-2">
 <p className="text-lg text-slate-600 font-bold"><span className="text-slate-400 font-black mr-3">AM:</span>10:00 - 12:00</p>
 <p className="text-lg text-slate-600 font-bold"><span className="text-slate-400 font-black mr-3">PM:</span>04:00 - 07:00</p>
 </div>
 </div>
 </div>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="h-[400px] bg-white dark:bg-slate-900 rounded-[4rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-2xl group relative"
 >
 <div className="absolute inset-0 border-[12px] border-slate-200 dark:border-slate-800 rounded-[4rem] pointer-events-none z-10" />
 <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0838965825227!2d79.1325!3d12.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA2LjIiTiA3OcKwMDcnNTcuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
 width="100%"
 height="100%"
 style={{ border: 0, filter: 'contrast(1.1) saturate(1.2) brightness(0.95)' }}
 allowFullScreen
 loading="lazy"
 aria-label="Google Map of Indira Hospital Location"
 className="transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
 ></iframe>
 </motion.div>
 </div>

 {/* Right Column: Premium Elite WhatsApp Consultation */}
 <div className="lg:col-span-7">
 <motion.div
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="bg-slate-900 p-10 sm:p-20 rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden group animate-in fade-in slide-in-from-right-8 duration-1000 ease-out flex flex-col items-center text-center"
 >
 <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

 <div className="relative z-10 mb-12">
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm dark:shadow-slate-900/30">
 <Shield className="w-4 h-4" /> Secure Elite Channel
 </span>
 <h2 className="elite-section-title text-white">Elite WhatsApp Consultation</h2>
 <p className="text-slate-400 mt-6 text-xl font-medium max-w-2xl leading-relaxed">
 In alignment with our surgical precision standards, we have pivoted to a <span className="text-fuchsia-400 font-black">WhatsApp-First</span> consultation model. This ensures instant, encrypted access to our medical coordinators.
 </p>
 </div>

 <div className="relative z-10 w-full max-w-md space-y-8">
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I%20have%20a%20clinical%20inquiry%20from%20the%20Indira%20Elite%20website.`}
 target="_blank"
 rel="noopener noreferrer"
 className="group/btn relative flex items-center justify-center w-full px-10 py-10 bg-green-500 text-white font-black rounded-[2.5rem] transition-all duration-500 hover:scale-[1.05] shadow-[0_20px_50px_rgba(34,197,94,0.3)] overflow-hidden"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 opacity-100" />
 <span className="relative z-10 text-2xl uppercase tracking-[0.1em] pr-4">Start Elite Chat</span>
 <MessageCircle className="w-8 h-8 relative z-10 group-hover/btn:rotate-12 transition-transform" />
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out" />
 </a>

 <div className="grid grid-cols-2 gap-4">
 <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
 <div className="text-fuchsia-400 font-black text-2xl mb-1">~2 Min</div>
 <div className="text-slate-500 text-xs uppercase tracking-widest">Avg Response</div>
 </div>
 <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
 <div className="text-fuchsia-400 font-black text-2xl mb-1">Direct</div>
 <div className="text-slate-500 text-xs uppercase tracking-widest">No Forms</div>
 </div>
 </div>
 </div>

 <div className="relative z-10 mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 w-full flex flex-col items-center">
 <p className="text-sm text-slate-500 font-medium mb-6 uppercase tracking-widest">Trusted by 50,000+ Patients</p>
 <div className="flex -space-x-3">
 {[1, 2, 3, 4, 5].map((i) => (
 <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden relative">
 <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" fill className="object-cover grayscale" />
 </div>
 ))}
 <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-fuchsia-500 flex items-center justify-center text-[10px] font-black text-white">
 +50K
 </div>
 </div>
 </div>

 <p className="relative z-10 text-center text-xs text-slate-500 dark:text-slate-400 font-medium mt-12 max-w-md">
 Your data is protected by End-to-End Encryption. By initiating a chat, you agree to our <a href="/privacy-policy" className="text-fuchsia-400 hover:underline">Elite Privacy Protocols</a>.
 </p>
 </motion.div>
 </div>
 </div>
 </section>
 </>
 );
}

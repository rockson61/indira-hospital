"use client";

import { useState } from "react";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";
import { DOCTORS_DIRECTORY } from "@/config/constants";
import Link from "next/link";
import { Search, Filter, MapPin, ArrowRight, Clock, Sparkles, Star, ChevronDown, Shield } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { motion, AnimatePresence } from "framer-motion";
import { DoctorAvatar } from "@/components/entities/DoctorAvatar";

export default function DoctorsDirectoryClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDept, setSelectedDept] = useState<string>(DOCTORS_DIRECTORY.DEFAULT_SEARCH_DEPT);

    const filteredDoctors = doctors.filter((doc) => {
        const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDept = selectedDept === DOCTORS_DIRECTORY.DEFAULT_SEARCH_DEPT || doc.departmentId === selectedDept;
        return matchesSearch && matchesDept;
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                        <Stethoscope className="w-4 h-4" /> Specialist Directory
                    </span>
                    <h1 className="elite-hero-title text-white mb-8 max-w-5xl mx-auto">
                        Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Proficiency.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                        Search our elite roster of world-class specialists dedicated to advancing healthcare and your well-being.
                    </p>

                    {/* Glassmorphic Tactical Command Search Bar */}
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-3xl p-3 sm:p-5 rounded-[2.5rem] border border-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row gap-4">
                        <div className="relative flex-grow group">
                            <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
                                <Search className="h-6 w-6 text-fuchsia-400 group-focus-within:text-fuchsia-300 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by name or specialty..."
                                className="block w-full pl-18 pr-6 py-5 sm:py-6 bg-white/5 text-white placeholder-slate-400 rounded-3xl focus:ring-4 focus:ring-fuchsia-500/20 focus:bg-white/10 transition-all outline-none font-bold border border-transparent focus:border-white/30 text-xl"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="relative min-w-[280px] group">
                            <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none z-10">
                                <Filter className="h-6 w-6 text-fuchsia-400 group-focus-within:text-fuchsia-300 transition-colors" />
                            </div>
                            <select
                                className="block w-full pl-18 pr-12 py-5 sm:py-6 bg-white/5 text-white rounded-3xl focus:ring-4 focus:ring-fuchsia-500/20 focus:bg-slate-900 transition-all outline-none appearance-none font-bold border border-transparent focus:border-white/30 text-xl cursor-pointer"
                                value={selectedDept}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDept(e.target.value)}
                            >
                                <option className="bg-slate-900 text-white" value={DOCTORS_DIRECTORY.DEFAULT_SEARCH_DEPT}>All Departments</option>
                                {departments.map(dept => (
                                    <option className="bg-slate-900 text-white" key={dept.id} value={dept.id}>{dept.name}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none text-fuchsia-400">
                                <ChevronDown className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Results */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 -mt-16 relative z-30">
                <AnimatePresence mode="wait">
                    {filteredDoctors.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-3xl mx-auto text-center py-24 bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-slate-700 shadow-2xl"
                        >
                            <div className="w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-inner group">
                                <Search className="h-14 w-14 text-slate-300 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="elite-section-title text-slate-900 dark:text-white mb-6">{DOCTORS_DIRECTORY.DEFAULT_NO_DOCTORS_MESSAGE}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-xl mb-12 max-w-md mx-auto">{DOCTORS_DIRECTORY.DEFAULT_NO_DOCTORS_SUGGESTION}</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedDept(DOCTORS_DIRECTORY.DEFAULT_SEARCH_DEPT); }}
                                className="group/btn relative px-12 py-6 bg-fuchsia-500 text-slate-900 dark:text-white rounded-2xl font-black text-lg transition-all hover:scale-[1.05] shadow-xl shadow-fuchsia-500/25 overflow-hidden"
                            >
                                <span className="relative z-10 uppercase tracking-widest">{DOCTORS_DIRECTORY.DEFAULT_CLEAR_FILTERS_TEXT}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </button>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredDoctors.map((doctor, idx) => (
                                <motion.div
                                    key={doctor.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="relative h-full bg-white/70 backdrop-blur-2xl border border-slate-200 dark:border-slate-700/50 rounded-[3.5rem] p-10 lg:p-14 hover:bg-white dark:bg-slate-900 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-700 flex flex-col overflow-hidden">
                                        {/* Light Streak Animation */}
                                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                                        <div className="flex flex-col sm:flex-row gap-10 mb-10 items-start relative z-10">
                                            <DoctorAvatar
                                                src={doctor.imageUrl}
                                                name={doctor.name}
                                                initials={doctor.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                                                className="h-32 w-32 lg:h-40 lg:w-40 rounded-[2.5rem] relative z-10"
                                            />
                                            <div className="pt-2">
                                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 border border-fuchsia-100 text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-600 mb-4 shadow-sm group-hover:bg-fuchsia-500 group-hover:text-white transition-colors">
                                                    <Sparkles className="w-3 h-3" /> Specialist
                                                </div>
                                                <h2 className="elite-section-title text-slate-900 dark:text-white mb-3 group-hover:text-fuchsia-700 transition-colors">
                                                    <Link href={`/doctor/${(doctor.specialty || 'specialist').toLowerCase().replace(/\s+/g, '-')}/${doctor.slug}`} className="before:absolute before:inset-0 outline-none">
                                                        {doctor.name}
                                                    </Link>
                                                </h2>
                                                <div className="space-y-1">
                                                    <p className="text-xl font-bold text-fuchsia-600 group-hover:text-fuchsia-500 transition-colors">{doctor.specialty}</p>
                                                    <div className="flex items-center gap-2 text-sm text-slate-400 font-black uppercase tracking-widest">
                                                        <MapPin className="h-4 w-4 text-slate-300" /> {DOCTORS_DIRECTORY.MAIN_CAMPUS_LOCATION}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl line-clamp-3 leading-relaxed mb-12 flex-grow font-light relative z-10">
                                            {doctor.bio}
                                        </p>

                                        {/* Elite Stats & Expertise */}
                                        <div className="grid grid-cols-2 gap-4 mb-12 relative z-10">
                                            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 group-hover:bg-white dark:bg-slate-900 group-hover:border-fuchsia-100 transition-all">
                                                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                                    <Clock className="w-3 h-3 text-fuchsia-500" /> Experience
                                                </div>
                                                <p className="text-lg font-black text-slate-900 dark:text-white">{doctor.experience}{DOCTORS_DIRECTORY.EXPERIENCE_SUFFIX}</p>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 group-hover:bg-white dark:bg-slate-900 group-hover:border-fuchsia-100 transition-all">
                                                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                                    <Star className="w-3 h-3 text-pink-500" /> Qualification
                                                </div>
                                                <p className="text-lg font-black text-slate-900 dark:text-white truncate">
                                                    {typeof doctor.education[0] === 'string' ? doctor.education[0] : (doctor.education[0] as any).degree}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Premium Footer Actions */}
                                        <div className="pt-10 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-20">
                                            <Link
                                                href={`/doctor/${(doctor.specialty || 'specialist').toLowerCase().replace(/\s+/g, '-')}/${doctor.slug}`}
                                                className="text-sm font-black text-slate-400 hover:text-fuchsia-600 uppercase tracking-[0.2em] transition-all flex items-center gap-2"
                                            >
                                                View Profile <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={`${DOCTORS_DIRECTORY.BOOK_VISIT_HREF_PREFIX}?doctor=${doctor.id}`}
                                                className="elite-button-primary text-base w-full sm:w-auto overflow-hidden"
                                            >
                                                <span className="relative z-10 uppercase tracking-widest mr-4">Book Visit</span>
                                                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

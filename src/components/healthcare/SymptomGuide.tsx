"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Search, PhoneCall, Stethoscope, Video, Activity, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CareLevel = 'teleconsult' | 'opd' | 'daycare' | 'emergency';

interface Symptom {
    name: string;
    category: string;
    recommended: CareLevel[];
    departmentLink?: string;
    departmentName?: string;
}

const SYMPTOMS: Symptom[] = [
    { name: "Allergic reaction where it's hard to breathe", category: "Respiratory & ENT", recommended: ['emergency'] },
    { name: "Allergies", category: "Respiratory & ENT", recommended: ['teleconsult', 'opd', 'daycare'], departmentLink: "/book-appointment", departmentName: "General Physician" },
    { name: "Asthma attack - inhalers are not helping and difficulty breathing", category: "Respiratory & ENT", recommended: ['emergency'] },
    { name: "Asthma attack - inhalers are working some", category: "Respiratory & ENT", recommended: ['opd', 'daycare'] },
    { name: "Cough with stuffy or runny nose, sore throat like a cold", category: "Respiratory & ENT", recommended: ['teleconsult', 'opd', 'daycare'] },
    { name: "Trouble breathing", category: "Respiratory & ENT", recommended: ['emergency'] },
    { name: "Ear pain, eye pain or infection", category: "Respiratory & ENT", recommended: ['opd', 'daycare'] },
    { name: "Sinus infections", category: "Respiratory & ENT", recommended: ['teleconsult', 'opd', 'daycare'] },

    { name: "Burns - severe", category: "Trauma & Injuries", recommended: ['emergency'] },
    { name: "Burns - minor", category: "Trauma & Injuries", recommended: ['opd', 'daycare'] },
    { name: "Bone breaks (large bones or serious breaks)", category: "Trauma & Injuries", recommended: ['emergency'], departmentLink: "/departments/orthopaedics", departmentName: "Orthopaedics" },
    { name: "Bone breaks (minor)", category: "Trauma & Injuries", recommended: ['daycare'], departmentLink: "/departments/orthopaedics", departmentName: "Orthopaedics" },
    { name: "Cuts that are deep or bleeding that won't stop", category: "Trauma & Injuries", recommended: ['emergency'], departmentLink: "/departments/general-surgery", departmentName: "General Surgery" },
    { name: "Cuts - minor", category: "Trauma & Injuries", recommended: ['opd', 'daycare'] },
    { name: "Sprains", category: "Trauma & Injuries", recommended: ['opd', 'daycare'], departmentLink: "/departments/orthopaedics", departmentName: "Orthopaedics" },
    { name: "Trauma or very bad injury", category: "Trauma & Injuries", recommended: ['emergency'] },
    { name: "Snake bites*", category: "Trauma & Injuries", recommended: ['emergency'] },
    { name: "Insect stings and bites", category: "Trauma & Injuries", recommended: ['opd', 'daycare'] },
    { name: "Work-type injury or exams, workers' comp", category: "Trauma & Injuries", recommended: ['opd', 'daycare'] },

    { name: "Chest pain", category: "Chest, Head & Neurological", recommended: ['emergency'], departmentLink: "/departments/cardiology", departmentName: "Cardiology" },
    { name: "Dizziness or vertigo", category: "Chest, Head & Neurological", recommended: ['opd', 'daycare'] },
    { name: "Headache", category: "Chest, Head & Neurological", recommended: ['teleconsult', 'opd', 'daycare'] },
    { name: "Headache - severe", category: "Chest, Head & Neurological", recommended: ['daycare', 'emergency'] },
    { name: "Passing out or blacking out", category: "Chest, Head & Neurological", recommended: ['emergency'] },
    { name: "Seizures", category: "Chest, Head & Neurological", recommended: ['emergency'] },
    { name: "Stroke symptoms", category: "Chest, Head & Neurological", recommended: ['emergency'] },

    { name: "Bladder infection (UTI)", category: "Gastrointestinal & Urinary", recommended: ['teleconsult', 'opd', 'daycare'], departmentLink: "/departments/nephrology", departmentName: "Nephrology" },
    { name: "Stomach pain - severe", category: "Gastrointestinal & Urinary", recommended: ['emergency'], departmentLink: "/departments/general-surgery", departmentName: "General Surgery" },
    { name: "Stomach pain - minor, throwing up, loose stools", category: "Gastrointestinal & Urinary", recommended: ['teleconsult', 'opd', 'daycare'] },
    { name: "Coughing or throwing up blood", category: "Gastrointestinal & Urinary", recommended: ['emergency'] },

    { name: "Care for life-long health problems (diabetes, high blood pressure)", category: "General Health & Routine", recommended: ['teleconsult', 'opd'], departmentLink: "/book-appointment", departmentName: "General Physician" },
    { name: "Exams for school, camp, work", category: "General Health & Routine", recommended: ['opd'] },
    { name: "Sports physicals", category: "General Health & Routine", recommended: ['opd'] },
    { name: "New medications or prescription refills", category: "General Health & Routine", recommended: ['teleconsult', 'opd'] },
    { name: "Shots (vaccines) to prevent illness, such as the flu", category: "General Health & Routine", recommended: ['opd'] },
    { name: "Flu-like symptoms, such as a fever, achy body, cough", category: "General Health & Routine", recommended: ['teleconsult', 'opd', 'daycare'] },
    { name: "Fever over 104 degrees (adult)", category: "General Health & Routine", recommended: ['daycare', 'emergency'] },
    { name: "Rashes and other minor skin problems", category: "General Health & Routine", recommended: ['teleconsult', 'opd', 'daycare'] },
    { name: "Poisoning*", category: "General Health & Routine", recommended: ['emergency'] },
    { name: "Back pain", category: "Bones & Muscles", recommended: ['teleconsult', 'opd', 'daycare'], departmentLink: "/departments/orthopaedics", departmentName: "Orthopaedics" },
];

const COLUMNS = [
    { id: 'teleconsult', label: 'Teleconsultation', price: '₹', icon: Video, color: 'bg-indigo-500', hover: 'hover:bg-indigo-600', lightColor: 'bg-indigo-50 text-indigo-700', darkColor: 'dark:bg-indigo-500/10 dark:text-indigo-400' },
    { id: 'opd', label: 'OPD / Clinic', price: '₹₹', icon: Stethoscope, color: 'bg-blue-500', hover: 'hover:bg-blue-600', lightColor: 'bg-blue-50 text-blue-700', darkColor: 'dark:bg-blue-500/10 dark:text-blue-400' },
    { id: 'daycare', label: 'Daycare / Minor OP', price: '₹₹₹', icon: Activity, color: 'bg-fuchsia-500', hover: 'hover:bg-fuchsia-600', lightColor: 'bg-fuchsia-50 text-fuchsia-700', darkColor: 'dark:bg-fuchsia-500/10 dark:text-fuchsia-400' },
    { id: 'emergency', label: 'Emergency', price: '₹₹₹₹₹', icon: PhoneCall, color: 'bg-rose-600', hover: 'hover:bg-rose-700', lightColor: 'bg-rose-50 text-rose-700', darkColor: 'dark:bg-rose-500/10 dark:text-rose-400' },
];

export function SymptomGuide() {
    const [searchTerm, setSearchTerm] = useState("");
    const categories = Array.from(new Set(SYMPTOMS.map(s => s.category)));

    const filteredSymptoms = SYMPTOMS.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.departmentName && s.departmentName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">

            {/* Table Header Area */}
            <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search your symptom (e.g., Back pain, Fever)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all font-medium"
                        />
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                        <Info className="w-4 h-4 text-fuchsia-500" />
                        <span>*For poisoning or snake bites, go straight to Emergency.</span>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white dark:bg-slate-900 border-b-2 border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-10">
                            <th className="p-6 font-bold text-slate-900 dark:text-white w-1/3 min-w-[300px] text-lg">Symptoms</th>
                            {COLUMNS.map(col => (
                                <th key={col.id} className="p-4 align-bottom text-center min-w-[120px]">
                                    <div className="flex flex-col items-center gap-2 group cursor-default">
                                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:-translate-y-1", col.color, col.hover)}>
                                            <col.icon className="w-6 h-6" />
                                        </div>
                                        <div className="font-bold text-slate-900 dark:text-white text-sm mt-2 leading-tight">
                                            {col.label}
                                        </div>
                                        <div className="text-xs font-black text-slate-400 dark:text-slate-500 tracking-wider">
                                            {col.price}
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        {categories.map(category => {
                            const categorySymptoms = filteredSymptoms.filter(s => s.category === category);
                            if (categorySymptoms.length === 0) return null;

                            return (
                                <React.Fragment key={category}>
                                    {/* Category Header Row */}
                                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                                        <td colSpan={5} className="py-3 px-6 font-bold text-sm uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400 border-y border-slate-200 dark:border-slate-700/50">
                                            {category}
                                        </td>
                                    </tr>

                                    {/* Symtoms Rows */}
                                    {categorySymptoms.map((symptom, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors group">
                                            <td className="p-6">
                                                <div className="font-medium text-slate-700 dark:text-slate-200 leading-snug">
                                                    {symptom.name}
                                                </div>
                                                {symptom.departmentLink && (
                                                    <Link
                                                        href={symptom.departmentLink}
                                                        className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors"
                                                    >
                                                        Visit {symptom.departmentName} <ChevronRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </td>
                                            {COLUMNS.map(column => (
                                                <td key={column.id} className="p-4 text-center">
                                                    {symptom.recommended.includes(column.id as CareLevel) ? (
                                                        <div className="flex justify-center">
                                                            <div className={cn("flex flex-col items-center justify-center w-8 h-8 rounded-full", column.lightColor, column.darkColor)}>
                                                                <CheckCircle2 className="w-5 h-5" />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="w-8 h-8 mx-auto rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-200 dark:text-slate-700">
                                                            -
                                                        </div>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </React.Fragment>
                            );
                        })}

                        {filteredSymptoms.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-12 text-center text-slate-500 dark:text-slate-400">
                                    No symptoms found matching your search. If it&apos;s an emergency, please visit our ER immediately.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Bottom Action Area */}
            <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Still not sure?</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md">Our 24/7 medical helpline can guide you to the right care facility based on your immediate symptoms.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <Link href="/book-appointment" className="flex-1 md:flex-none text-center px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                        Book OPD
                    </Link>
                    <a href="tel:08041414141" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-rose-600/20">
                        <PhoneCall className="w-4 h-4" /> Call Emergency
                    </a>
                </div>
            </div>
        </div>
    );
}

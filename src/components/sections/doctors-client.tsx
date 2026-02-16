"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, User } from "lucide-react";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { getImageUrl } from "@/lib/utils";

interface Doctor {
    name: string;
    designation: string;
    department?: { name: string } | string;
    slug: string;
    image?: string;
    specialties?: string[];
}

export default function DoctorsClient({ initialDoctors }: { initialDoctors: Doctor[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDept, setSelectedDept] = useState("All");

    const departments = useMemo(() => {
        const depts = new Set<string>();
        depts.add("All");
        initialDoctors.forEach((doc) => {
            const deptName = typeof doc.department === 'string' ? doc.department : doc.department?.name;
            if (deptName) depts.add(deptName);
        });
        return Array.from(depts).sort();
    }, [initialDoctors]);

    const filteredDoctors = useMemo(() => {
        return initialDoctors.filter((doc) => {
            const deptName = typeof doc.department === 'string' ? doc.department : doc.department?.name;
            const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (deptName && deptName.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesDept = selectedDept === "All" || deptName === selectedDept;
            return matchesSearch && matchesDept;
        });
    }, [initialDoctors, searchTerm, selectedDept]);

    return (
        <section className="bg-slate-50 dark:bg-slate-950 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* FILTERS */}
                <div className="mt-12 mb-16 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-24 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name or specialty..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        <Filter className="w-5 h-5 text-slate-400 hidden md:block" />
                        <div className="flex gap-2">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDept(dept)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${selectedDept === dept
                                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 hover:border-purple-300"
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                {filteredDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredDoctors.map((doc) => {
                            const deptName = typeof doc.department === 'string' ? doc.department : doc.department?.name;
                            return (
                                <DoctorCard
                                    key={doc.slug}
                                    doctor={doc}
                                    variant="grid"
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                            <User className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No doctors found</h3>
                        <p className="text-slate-500 max-w-sm mx-auto">Try adjusting your search term or selecting a different department.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

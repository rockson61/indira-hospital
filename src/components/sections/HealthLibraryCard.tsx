import React from "react";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export function HealthLibraryCard() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 transition-shadow hover:shadow-2xl">

                {/* Left Panel: Solid Blue */}
                <div className="bg-[#0086d6] text-white p-12 md:p-16 flex flex-col items-center justify-center md:w-1/2 min-h-[300px]">
                    <div className="flex items-center gap-4 text-3xl sm:text-4xl font-bold tracking-tight">
                        <LayoutGrid className="w-10 h-10 sm:w-12 sm:h-12" />
                        Health Library
                    </div>
                </div>

                {/* Right Panel: Light Blue List */}
                <div className="bg-[#f3f9fd] dark:bg-slate-900 p-12 md:p-16 flex flex-col justify-center md:w-1/2">
                    <ul className="space-y-6 flex flex-col items-start">
                        <li>
                            <Link href="/doctor/near-me/treat#body-systems" className="text-[#0086d6] hover:text-[#006bb3] dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg lg:text-xl border-b border-[#0086d6]/30 hover:border-[#0086d6] transition-colors pb-1">
                                Body Systems & Organs
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor/near-me/treat#conditions" className="text-[#0086d6] hover:text-[#006bb3] dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg lg:text-xl border-b border-[#0086d6]/30 hover:border-[#0086d6] transition-colors pb-1">
                                Diseases & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor/near-me/treat#treatments" className="text-[#0086d6] hover:text-[#006bb3] dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg lg:text-xl border-b border-[#0086d6]/30 hover:border-[#0086d6] transition-colors pb-1">
                                Treatments
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor/near-me/treat#diagnostics" className="text-[#0086d6] hover:text-[#006bb3] dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg lg:text-xl border-b border-[#0086d6]/30 hover:border-[#0086d6] transition-colors pb-1">
                                Procedures
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor/near-me/treat#pharmacy" className="text-[#0086d6] hover:text-[#006bb3] dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg lg:text-xl border-b border-[#0086d6]/30 hover:border-[#0086d6] transition-colors pb-1">
                                Drugs, Devices & Supplements
                            </Link>
                        </li>
                        <li>
                            <Link href="/diagnostics" className="text-[#0086d6] hover:text-[#006bb3] dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg lg:text-xl border-b border-[#0086d6]/30 hover:border-[#0086d6] transition-colors pb-1">
                                Diagnostics & Testing
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor/near-me/treat#symptoms" className="text-[#0086d6] hover:text-[#006bb3] dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg lg:text-xl border-b border-[#0086d6]/30 hover:border-[#0086d6] transition-colors pb-1">
                                Symptoms
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

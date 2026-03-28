import { departments } from "@/data/departments";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeartCardiogram, Neurology, Orthopaedics } from "healthicons-react/outline";

// Icon mapper since we store strings in data
const iconMap: Record<string, React.ReactNode> = {
    HeartCardiogram: <HeartCardiogram className="h-8 w-8 text-red-500" />,
    Neurology: <Neurology className="h-8 w-8 text-fuchsia-500" />,
    Orthopaedics: <Orthopaedics className="h-8 w-8 text-orange-500" />,
};

export function DepartmentGridSection() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm mb-6">
                            Our Expertise
                        </div>
                        <h2 className="elite-section-title text-slate-900 dark:text-white">
                            Elite Medical Units
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            Comprehensive care across all major medical disciplines, led by industry veterans.
                        </p>
                    </div>
                    <Link
                        href="/doctor/near-me/treat"
                        className="hidden md:inline-flex items-center text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors"
                    >
                        View all departments
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept) => (
                        <Link
                            key={dept.id}
                            href={`/doctor/near-me/treat/${dept.slug}`}
                            className="group block rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 transition-all duration-300"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-gray-50 dark:bg-slate-950 flex items-center justify-center mb-6 group-hover:bg-fuchsia-50 dark:bg-fuchsia-950 group-hover:scale-110 transition-all">
                                {iconMap[dept.icon] || <HeartCardiogram className="h-8 w-8 text-gray-500 dark:text-gray-400" />}
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{dept.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                                {dept.description}
                            </p>

                            <div className="flex items-center text-sm font-bold text-fuchsia-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Learn more
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link
                        href="/doctor/near-me/treat"
                        className="elite-button-secondary w-full"
                    >
                        View all departments
                    </Link>
                </div>
            </div>
        </section>
    );
}

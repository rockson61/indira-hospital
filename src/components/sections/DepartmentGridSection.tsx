import { departments } from "@/data/departments";
import Link from "next/link";
import { ArrowRight, Activity, Brain, Bone, HeartPulse } from "lucide-react";

// Icon mapper since we store strings in data
const iconMap: Record<string, React.ReactNode> = {
    HeartPulse: <HeartPulse className="h-8 w-8 text-red-500" />,
    Brain: <Brain className="h-8 w-8 text-fuchsia-500" />,
    Bone: <Bone className="h-8 w-8 text-orange-500" />,
};

export function DepartmentGridSection() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-fuchsia-600 uppercase mb-3">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            Centers of Excellence
                        </h3>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
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
                            <div className="h-16 w-16 rounded-2xl bg-gray-50 dark:bg-slate-950 flex items-center justify-center mb-6 group-hover:bg-fuchsia-50 group-hover:scale-110 transition-all">
                                {iconMap[dept.icon] || <Activity className="h-8 w-8 text-gray-500 dark:text-gray-400" />}
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
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 dark:border-slate-700 font-semibold rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:bg-slate-950 transition-colors w-full"
                    >
                        View all departments
                    </Link>
                </div>
            </div>
        </section>
    );
}

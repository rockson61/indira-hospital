import Link from "next/link";
import { Globe, CircleDollarSign, ArrowRight } from "lucide-react";
import { Heart } from "healthicons-react/outline";
import { SectionContainer } from "@/components/ui/section-container";
import { PATIENT_RESOURCES } from "@/lib/data/patient-resources";

const resourceGroups = [
    {
        title: "Patient Information",
        icon: Heart,
        description: "Important information you need to know before seeing your Indira Hospital doctor, as well as other patient resources we offer.",
        category: "Information",
    },
    {
        title: "Parking, Lodging & Travel",
        icon: Globe,
        description: "No matter where you're coming from, traveling for medical care can be overwhelming. Let us help get you started.",
        category: "Travel",
    },
    {
        title: "Billing & Insurance",
        icon: CircleDollarSign,
        description: "Manage your Indira Hospital account. Find billing information and financial assistance, plus FAQs.",
        category: "Billing",
    },
];

export function PatientResources({ hideViewAll = false }: { hideViewAll?: boolean }) {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <SectionContainer>
                {/* Addition: Title for Patients on Homepage */}
                <div className="max-w-4xl mb-16">
                    <h2 className="elite-section-title text-slate-900 dark:text-white mb-6">
                        For Patients
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                        Everything you need to know before your visit, how to manage your care securely, and specialized services.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {resourceGroups.map((group, idx) => {
                        const Icon = group.icon;
                        const links = PATIENT_RESOURCES.filter((r) => r.category === group.category);

                        return (
                            <div
                                key={idx}
                                className="group relative bg-white dark:bg-slate-950 rounded-3xl p-8 border border-slate-200/60 dark:border-slate-800 hover:border-fuchsia-300 dark:hover:border-fuchsia-800 transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(232,121,249,0.15)] overflow-hidden flex flex-col"
                            >
                                {/* Ambient Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100/30 to-transparent dark:from-fuchsia-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 mb-8 flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center mb-6 border border-fuchsia-100 dark:border-fuchsia-800/50 text-fuchsia-600 dark:text-fuchsia-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300 transition-colors">
                                        {group.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm">
                                        {group.description}
                                    </p>
                                </div>

                                <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-6 relative z-10" />

                                <ul className="space-y-4 flex-1 relative z-10">
                                    {links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.customHref || `/patients/${link.slug}`}
                                                className="group/link flex items-start gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                                            >
                                                <span className="border-b border-transparent group-hover/link:border-current pb-0.5 transition-colors leading-tight">
                                                    {link.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                    {/* Primary CTA Link */}
                                    {!hideViewAll && (
                                        <li className="pt-2">
                                            <Link
                                                href="/patients"
                                                className="group/btn inline-flex items-center text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors"
                                            >
                                                View all resources
                                                <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all" />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </SectionContainer>
        </section >
    );
}

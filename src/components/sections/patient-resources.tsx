import Link from "next/link";
import { Heart, Globe, CircleDollarSign, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

const resourceGroups = [
    {
        title: "Patient Information",
        icon: Heart,
        description: "Important information you need to know before seeing your Indira Hospital doctor, as well as other patient resources we offer.",
        links: [
            { label: "Appointment checklist", href: "#" },
            { label: "Admissions", href: "#" },
            { label: "Accessibility", href: "#" },
            { label: "Masking Policy", href: "#" },
            { label: "Preparing for surgery", href: "#" },
            { label: "Planning to go home", href: "#" },
            { label: "Request your medical records", href: "#" },
            { label: "View all patient resources", href: "#", primary: true },
        ],
    },
    {
        title: "Parking, Lodging & Travel",
        icon: Globe,
        description: "No matter where you're coming from, traveling for medical care can be overwhelming. Let us help get you started.",
        links: [
            { label: "International patients", href: "#" },
            { label: "Language assistance", href: "#" },
            { label: "Lodging", href: "#" },
            { label: "Parking", href: "#" },
            { label: "Transportation", href: "#" },
            { label: "Travel assistance", href: "#" },
            { label: "Visiting our main campus", href: "#" },
        ],
    },
    {
        title: "Billing & Insurance",
        icon: CircleDollarSign,
        description: "Manage your Indira Hospital account. Find billing information and financial assistance, plus FAQs.",
        links: [
            { label: "Accepted insurance", href: "#" },
            { label: "Financial assistance", href: "#" },
            { label: "Frequently asked questions", href: "#" },
            { label: "Pay your bill online", href: "#" },
            { label: "View all billing and finance resources", href: "#", primary: true },
        ],
    },
];

export function PatientResources() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/50">
            <SectionContainer>
                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    {resourceGroups.map((group, idx) => {
                        const Icon = group.icon;
                        return (
                            <div key={idx} className="flex flex-col">
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950/30 flex items-center justify-center mb-6 border border-fuchsia-100 dark:border-fuchsia-900/50 text-fuchsia-600 dark:text-fuchsia-400">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                                        {group.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {group.description}
                                    </p>
                                </div>

                                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50 mb-8" />

                                <ul className="space-y-4 flex-1">
                                    {group.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.href}
                                                className={`group flex items-start gap-2 text-sm font-semibold transition-colors ${link.primary
                                                        ? "text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300"
                                                        : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                                                    }`}
                                            >
                                                <span className="border-b border-transparent group-hover:border-current pb-0.5 transition-colors">
                                                    {link.label}
                                                </span>
                                                {link.primary && <ArrowRight className="w-4 h-4 ml-1 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </SectionContainer>
        </section>
    );
}

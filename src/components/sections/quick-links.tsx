
import Link from "next/link";
import { Microscope, Globe, FileText, ArrowRight } from "lucide-react";

const links = [
    {
        title: "See Our Equipment",
        description: "3T MRI, Cath Lab, HD Endoscopy — why diagnosis here is faster.",
        icon: Microscope,
        href: "/technology",
        color: "bg-teal-50 text-teal-600",
        hover: "hover:border-blue-200"
    },
    {
        title: "Flying In for Surgery?",
        description: "Airport pickup, translator, visa letter — we handle everything.",
        icon: Globe,
        href: "/patients/international",
        color: "bg-teal-50 text-teal-600",
        hover: "hover:border-teal-200"
    },
    {
        title: "Don't Google Your Symptoms",
        description: "Read expert-written guides by our surgeons instead.",
        icon: FileText,
        href: "/blog",
        color: "bg-green-50 text-green-600",
        hover: "hover:border-green-200"
    }
];

export function QuickLinks() {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className={`flex items-center gap-4 p-6 rounded-2xl border border-transparent bg-slate-50 transition-all duration-300 ${link.hover} hover:shadow-lg group`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform`}>
                                <link.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{link.title}</h3>
                                <p className="text-sm text-slate-500">{link.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}


import Link from "next/link";
import { Microscope, Globe, FileText, ArrowRight } from "lucide-react";

const links = [
    {
        title: "Advanced Technology",
        description: "Explore our cutting-edge medical equipment.",
        icon: Microscope,
        href: "/technology",
        color: "bg-blue-50 text-blue-600",
        hover: "hover:border-blue-200"
    },
    {
        title: "International Patients",
        description: "Dedicated services for overseas visitors.",
        icon: Globe,
        href: "/patients/international",
        color: "bg-purple-50 text-purple-600",
        hover: "hover:border-purple-200"
    },
    {
        title: "Health Insights",
        description: "Read the latest news and medical articles.",
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
                                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{link.title}</h3>
                                <p className="text-sm text-slate-500">{link.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

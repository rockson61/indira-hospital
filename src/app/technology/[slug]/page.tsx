import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { getTechnologyBySlug, getAllTechnologies } from "@/lib/data/technology-data";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const tech = getTechnologyBySlug(slug);

    if (!tech) {
        return {
            title: "Technology Not Found",
        };
    }

    return {
        title: `${tech.title} | Advanced Technology at Indira Hospital`,
        description: tech.shortDescription,
    };
}

export async function generateStaticParams() {
    const techs = getAllTechnologies();
    return techs.map((tech) => ({
        slug: tech.slug,
    }));
}

export default async function TechnologyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const tech = getTechnologyBySlug(slug);

    if (!tech) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 pb-12">
            {/* Hero Section */}
            <section className="bg-purple-900 text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <Link href="/" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors text-sm">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{tech.title}</h1>
                        <p className="text-xl text-purple-100">{tech.shortDescription}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {tech.fullDescription}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {tech.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl">
                                            <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-purple-700"></div>
                                            </div>
                                            <span className="text-gray-800 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Benefits & CTA */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    Benefits
                                </h3>
                                <ul className="space-y-3">
                                    {tech.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white text-center">
                                <h3 className="font-bold text-lg mb-2">Need More Info?</h3>
                                <p className="text-purple-100 text-sm mb-4">Contact our enquiry desk to learn more about this facility.</p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    Contact Us <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Technologies */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Advanced Facilities</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {getAllTechnologies().filter(t => t.slug !== tech.slug).slice(0, 4).map((t) => (
                        <Link
                            key={t.slug}
                            href={`/technology/${t.slug}`}
                            className="block p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all bg-white group"
                        >
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                                {t.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-2 line-clamp-2">{t.shortDescription}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

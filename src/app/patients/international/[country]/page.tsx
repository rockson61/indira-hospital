import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    Plane, Globe2, ShieldCheck, Clock,
    MapPin, CheckCircle2, Languages,
    ArrowLeft, MessageCircle, Info,
    Stethoscope, Activity
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";
import { SEED_DATA } from "@/lib/data/seed-data";

export async function generateStaticParams() {
    return INTERNATIONAL_COUNTRIES.map((country) => ({
        country: country.slug,
    }));
}

interface PageProps {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country: slug } = await params;
    const country = INTERNATIONAL_COUNTRIES.find(c => c.slug === slug);

    if (!country) return { title: "Country Not Found" };

    return {
        title: `Medical Treatment for Patients from ${country.name} | Indira Hospital`,
        description: `Comprehensive healthcare guide for patients from ${country.name} traveling to India for surgery. Flight time ${country.flight_duration}, visa info, and top treatments.`,
    };
}

export default async function CountryGuidePage({ params }: PageProps) {
    const { country: slug } = await params;
    const country = INTERNATIONAL_COUNTRIES.find(c => c.slug === slug);

    if (!country) notFound();

    // Get some relevant services/doctors for specific treatments
    const featuredServices = SEED_DATA.services.slice(0, 3);
    const featuredDoctors = SEED_DATA.doctors.slice(0, 2);

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* HEADER / BREADCRUMB */}
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4">
                <SectionContainer>
                    <Link href="/patients/international" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to International Patients
                    </Link>
                </SectionContainer>
            </div>

            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-20 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                    <Globe2 className="w-96 h-96" />
                </div>
                <SectionContainer>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Welcoming Patients from <br />
                            <span className="text-teal-400">{country.name}</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Providing world-class medical excellence and personalized support
                            for our guests from {country.name}. Discover why {country.name}
                            trusts Indira Hospital for specialized surgeries.
                        </p>
                    </div>
                </SectionContainer>
            </section>

            <SectionContainer className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* TRAVEL LOGISTICS */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Plane className="w-6 h-6 mr-3 text-teal-600" />
                                Travel & Logistics from {country.name}
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Card className="p-6 border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
                                    <Clock className="w-5 h-5 text-teal-600 mb-3" />
                                    <h3 className="font-bold mb-1">Flight Duration</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">{country.flight_duration}</p>
                                </Card>
                                <Card className="p-6 border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
                                    <ShieldCheck className="w-5 h-5 text-teal-600 mb-3" />
                                    <h3 className="font-bold mb-1">Visa Information</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">{country.visa_info}</p>
                                </Card>
                            </div>
                        </section>

                        {/* WHY CHOOSE US */}
                        <section className="bg-teal-50 dark:bg-teal-900/10 rounded-[2rem] p-8 md:p-12 border border-teal-100 dark:border-teal-900/30">
                            <h2 className="text-2xl font-bold mb-4">Why {country.name} Chooses Indira Hospital?</h2>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic">
                                "{country.why_choose_us}"
                            </p>
                            <div className="grid gap-4">
                                {country.common_treatments.map((t, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                                        <span className="font-semibold text-slate-800 dark:text-slate-200">Specialized in {t}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* STEP BY STEP GUIDE */}
                        <section>
                            <h3 className="text-2xl font-bold mb-6">Patient Journey Step-by-Step</h3>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                {[
                                    { t: "Remote Inquiry", d: "Send us your medical reports via WhatsApp or Email." },
                                    { t: "Medical Opinion", d: "Consult with our surgeons online for free." },
                                    { t: "Scheduling", d: "Finalize your surgery date and hotel booking." },
                                    { t: "Arrival", d: "Personal pickup at Chennai (MAA) airport." }
                                ].map((step, i) => (
                                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-teal-500 group-hover:text-white transition-all">
                                            {i + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                            <h4 className="font-bold text-slate-900 dark:text-white">{step.t}</h4>
                                            <p className="text-sm text-slate-500">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* SIDEBAR */}
                    <aside className="space-y-8">
                        {/* QUICK CONTACT */}
                        <Card className="p-8 bg-slate-900 text-white border-none rounded-[2rem] shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <MessageCircle className="w-20 h-20" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Dedicated Desk</h3>
                            <p className="text-slate-400 text-sm mb-6">Connect with our International Patient Coordinator directly.</p>
                            <div className="space-y-4">
                                <a href="https://wa.me/917010650063" className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all">
                                    <MessageCircle className="w-5 h-5 text-teal-400" />
                                    <span className="font-medium text-sm">Chat on WhatsApp</span>
                                </a>
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                                    <Languages className="w-5 h-5 text-teal-400" />
                                    <span className="font-medium text-sm">Arabic & English Support</span>
                                </div>
                            </div>
                        </Card>

                        {/* RECOMMENDED SPECIALISTS */}
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Recommended Specialists</h3>
                            <div className="space-y-4">
                                {featuredDoctors.map((doc, idx) => (
                                    <Link key={idx} href={`/doctors/${doc.slug}`} className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-teal-200 transition-all">
                                        <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-xl object-cover" />
                                        <div>
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">{doc.name}</p>
                                            <p className="text-xs text-slate-500">{doc.designation}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* HELPFUL LINKS */}
                        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Info className="w-4 h-4 text-teal-600" />
                                Resources
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/patients/insurance" className="text-slate-600 hover:text-teal-600">Insurance Partners</Link></li>
                                <li><Link href="/health-packages" className="text-slate-600 hover:text-teal-600">Executive Health Checkups</Link></li>
                                <li><Link href="/contact" className="text-slate-600 hover:text-teal-600">Get Invitation Letter</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </SectionContainer>

            {/* CTA GRID */}
            <section className="bg-slate-50 dark:bg-slate-900/30 py-24">
                <SectionContainer>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Medical Excellence Awaits</h2>
                        <p className="text-slate-600">Over 500 successful surgeries performed for guests from {country.name}.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800">
                            <Stethoscope className="w-10 h-10 text-teal-600 mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Consult a Specialist</h4>
                            <p className="text-slate-500 mb-8 leading-relaxed">Schedule a video consultation to discuss your reports and treatment plan.</p>
                            <button className="px-8 py-3 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-colors">Book Video Call</button>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800">
                            <Activity className="w-10 h-10 text-teal-600 mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Price Transparency</h4>
                            <p className="text-slate-500 mb-8 leading-relaxed">Receive a detailed cost estimate including hospital stay, surgery, and medicines.</p>
                            <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors">Request Quote</button>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}

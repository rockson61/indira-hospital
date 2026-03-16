import { SectionContainer } from "@/components/ui/section-container";
import { ShieldCheck, Award, CheckCircle2, Star, Sparkles, Building2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quality & Accreditations | NABH Certified Indira Hospital",
    description: "Indira Super Speciality Hospital is committed to high standards of patient safety and clinical excellence. Learn about our NABH accreditation and quality benchmarks.",
};

const certifications = [
    {
        title: "NABH Accredited",
        description: "National Accreditation Board for Hospitals & Healthcare Providers certification for excellence in patient care.",
        icon: <Award className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "NABH Nursing",
        description: "Specialized certification for nursing excellence and standardized patient care protocols.",
        icon: <ShieldCheck className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Quality Standards",
        description: "Adherence to international clinical protocols and rigorous safety benchmarks.",
        icon: <CheckCircle2 className="w-8 h-8 text-fuchsia-600" />
    }
];

export default function QualityPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-950">
            <SectionContainer className="mb-20">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-full text-xs font-black text-fuchsia-600 uppercase mb-8">
                        <ShieldCheck className="w-4 h-4" /> Excellence in Healthcare
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8">
                        Our Commitment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Quality</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        At Indira Hospital, quality is not just a certification—it&apos;s a culture. We continuously monitor and improve our processes to ensure absolute patient safety and clinical success.
                    </p>
                </div>
            </SectionContainer>

            <SectionContainer>
                <div className="grid md:grid-cols-3 gap-8">
                    {certifications.map((cert, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {cert.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{cert.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Quality Pillars */}
            <SectionContainer className="mt-24">
                <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Our Quality Pillars</h2>
                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                            {[
                                { title: "Patient Safety First", desc: "Rigorous protocols to prevent infections and ensure medication safety." },
                                { title: "Clinical Excellence", desc: "Evidence-based medical practices guided by international standards." },
                                { title: "Continuous Improvement", desc: "Regular audits and feedback loops to enhance hospital operations." },
                                { title: "Transparent Care", desc: "Clear communication with patients regarding treatments and outcomes." }
                            ].map((pillar, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-xl font-black text-fuchsia-400">{pillar.title}</h4>
                                    <p className="text-slate-400 font-medium">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}

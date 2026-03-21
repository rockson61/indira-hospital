import { SectionContainer } from "@/components/ui/section-container";
import { Users, FileText, PhoneCall, Share2, ClipboardCheck, Building2, Sparkles, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Provider Resources | Partner with Indira Super Speciality Hospital",
    description: "Dedicated resources for referring physicians, healthcare partners, and medical professionals. Explore our referral process and collaborative care models.",
};

const resources = [
    {
        title: "Refer a Patient",
        description: "Seamless digital referral process ensuring your patients receive immediate specialist attention.",
        icon: <Share2 className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Clinical Protocols",
        description: "Access our standardized clinical pathways and surgical guidelines for collaborative care.",
        icon: <ClipboardCheck className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Direct Physician Line",
        description: "Priority communication channel for referring doctors to discuss complex cases with our specialists.",
        icon: <PhoneCall className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Continuing Education",
        description: "Join our regular CMEs, surgical workshops, and medical webinars hosted by our elite faculty.",
        icon: <Users className="w-8 h-8 text-fuchsia-600" />
    }
];

export default function ProviderResourcesPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10">
                        <Building2 className="w-4 h-4" /> Professional Partnership
                    </div>
                    <h1 className="elite-hero-title text-white mb-6">
                        For Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Healthcare Partners.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        We believe in a collaborative ecosystem. Our provider portal is designed to support referring physicians with streamlined clinical excellence.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resources.map((resource, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {resource.icon}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{resource.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm">{resource.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Collaboration Block */}
            <SectionContainer className="mt-24">
                <div className="bg-slate-900 text-white rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px] will-change-transform transform-gpu" />
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                                <MessageSquare className="w-8 h-8 text-fuchsia-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Elite Care Coordination</h2>
                            <p className="text-slate-300 text-xl font-light leading-relaxed mb-8">
                                We ensure that your referred patients receive a seamless transition back to your primary care with detailed surgical summaries and rehabilitation plans.
                            </p>
                            <button className="elite-button-primary hover:bg-fuchsia-700">
                                Contact Referral Desk
                            </button>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                            {[
                                { title: "1-Hour Referral Response", icon: <Sparkles className="w-4 h-4" /> },
                                { title: "Shared Data Access", icon: <FileText className="w-4 h-4" /> },
                                { title: "Priority Admissions", icon: <Building2 className="w-4 h-4" /> },
                                { title: "Post-Op Summaries", icon: <ClipboardCheck className="w-4 h-4" /> }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                                    <div className="text-fuchsia-400 mb-4 inline-block">{item.icon}</div>
                                    <div className="font-bold text-xs uppercase tracking-widest">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}

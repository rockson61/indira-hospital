import { notFound } from "next/navigation";
import { departments } from "@/data/departments";
import { ArrowRight, CheckCircle2, MapPin, Sparkles, HeartPulse, Activity } from "lucide-react";

export default async function LocationDepartmentPage({
    params,
}: {
    params: Promise<{ city: string; slug: string }>;
}) {
    const { city, slug } = await params;
    const currDept = departments.find((d) => d.slug === slug);

    if (!currDept) {
        notFound();
    }

    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    // Randomize some icons for the service grid to look dynamic
    const icons = [CheckCircle2, HeartPulse, Activity, Sparkles];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* Bold Asymmetrical Hero with Subtle Pattern */}
            <div className="relative pt-44 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        {/* Glassmorphism Location Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <MapPin className="w-4 h-4" />
                            Indira Hospital {formattedCity}
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8">
                            {currDept.name} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-200">
                                In {formattedCity}.
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                            World-class {currDept.name.toLowerCase()} care. {currDept.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 lg:-mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Interactive Bento Box Services Grid */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 dark:border-slate-700">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <Sparkles className="w-8 h-8 text-fuchsia-500" />
                                Premium Services Available
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {currDept.features.map((feature, i) => {
                                    const RandomIcon = icons[i % icons.length];
                                    return (
                                        <div key={i} className="group relative p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100/60 hover:border-fuchsia-200 hover:bg-fuchsia-50/50 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-100/50 hover:-translate-y-1">
                                            <div className="flex items-start gap-4">
                                                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl shadow-sm group-hover:bg-fuchsia-500 group-hover:text-white transition-colors duration-300 text-slate-400">
                                                    <RandomIcon className="w-5 h-5" />
                                                </div>
                                                <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed group-hover:text-slate-900 dark:text-white transition-colors">
                                                    {feature}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Standout Booking Widget */}
                    <div className="lg:col-span-4 sticky top-32">
                        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-fuchsia-900 rounded-[2rem] p-10 overflow-hidden shadow-2xl shadow-fuchsia-900/20 group">
                            {/* Animated Background Elements */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-[60px] group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                                    Ready for <br />
                                    Better Health?
                                </h3>
                                <p className="text-fuchsia-100/70 font-light mb-10 leading-relaxed">
                                    Experience world-class {currDept.name.toLowerCase()} care without leaving {formattedCity}. Skip the queue and book directly.
                                </p>

                                <a
                                    href="/book-appointment"
                                    className="relative flex items-center justify-between w-full px-8 py-5 bg-fuchsia-500 hover:bg-fuchsia-400 text-[#002b36] font-black rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_-10px_var(--tw-shadow-color)] shadow-fuchsia-400/50 overflow-hidden group/btn"
                                >
                                    <span className="relative z-10 text-lg uppercase tracking-wider">Book Visit</span>
                                    <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                </a>

                                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-fuchsia-100/40 uppercase tracking-widest font-bold">
                                    <span>Verified Facility</span>
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

import { SectionHeader } from "@/components/ui/section-header";
import { getTestimonials } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { Star, Play, ArrowRight } from "lucide-react";
import { testimonials as localTestimonials } from "@/lib/data/testimonials-data";

export async function Testimonials() {
    let testimonials: any[] = await getTestimonials().catch(() => []);

    // Fallback to local data
    if (testimonials.length === 0) {
        testimonials = localTestimonials.map(t => ({
            id: t.name,
            patient_name: t.name,
            content: t.text,
            rating: t.rating,
            image: null,
        }));
    }

    if (testimonials.length === 0) return null;

    return (
        <section className="py-32 bg-slate-900 text-white relative isolate overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Real Stories, Real Healing"
                    subtitle="Patient Testimonials"
                    description="Hear directly from patients who entrusted us with their health and received world-class medical care."
                    className="text-white"
                />

                <div className="mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial: any, i: number) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-slate-800/40 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/5 hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-3 shadow-2xl overflow-hidden"
                        >
                            {/* Decorative Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />

                            {/* VIDEO PLAY OVERLAY (Premium) */}
                            <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white scale-90 group-hover:scale-100 opacity-60 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-blue-900/40 border border-white/20 cursor-pointer overflow-hidden">
                                <span className="absolute inset-0 bg-white/20 animate-pulse group-hover:hidden" />
                                <Play className="w-5 h-5 fill-current relative z-10" />
                            </div>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-tighter mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                Verified Video Story
                            </div>

                            <blockquote className="text-xl font-medium text-slate-100 leading-relaxed mb-8">
                                “{testimonial.content}”
                            </blockquote>

                            <div className="flex items-center gap-x-4 border-t border-white/5 pt-8">
                                {testimonial.image ? (
                                    <img
                                        className="h-14 w-14 rounded-2xl bg-gray-800 object-cover ring-2 ring-white/10"
                                        src={getImageUrl(testimonial.image)!}
                                        alt={testimonial.patient_name}
                                    />
                                ) : (
                                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
                                        {testimonial.patient_name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-black text-white text-lg">{testimonial.patient_name}</h3>
                                    <div className="flex text-yellow-500 mt-1 gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Optional: Watch Story text for high intent */}
                            <div className="mt-6 flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-3 h-3" /> Watch Video Story
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

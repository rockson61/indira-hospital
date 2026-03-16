import { SectionHeader } from "@/components/ui/section-header";
import { getTestimonials } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { Star, Play, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { testimonials as localTestimonials } from "@/lib/data/testimonials-data";
import Image from "next/image";

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

    // Filter out any entries missing required fields
    testimonials = testimonials.filter(t => t.patient_name && t.content);

    if (testimonials.length === 0) return null;

    return (
        <section className="py-32 bg-white dark:bg-slate-900 relative isolate overflow-hidden">
            {/* Background Glow — only visible in dark mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none hidden dark:block" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Real Stories, Real Healing"
                    subtitle="Patient Testimonials"
                    description="Hear directly from patients who entrusted us with their health and received world-class medical care."
                />

                <div className="mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial: any, i: number) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-slate-50 dark:bg-slate-800/40 backdrop-blur-none dark:backdrop-blur-2xl rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 hover:border-fuchsia-200 dark:hover:border-fuchsia-500/30 transition-all duration-700 hover:-translate-y-3 shadow-lg dark:shadow-2xl overflow-hidden"
                        >
                            {/* Decorative Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 dark:bg-fuchsia-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-fuchsia-500/10 transition-colors" />

                            {/* VIDEO PLAY OVERLAY (Premium) */}
                            <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-fuchsia-600 to-fuchsia-600 flex items-center justify-center text-white scale-90 group-hover:scale-100 opacity-60 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-fuchsia-900/20 dark:shadow-fuchsia-900/40 border border-fuchsia-500/30 dark:border-white/20 cursor-pointer overflow-hidden">
                                <span className="absolute inset-0 bg-white/20 animate-pulse group-hover:hidden" />
                                <Play className="w-5 h-5 fill-current relative z-10" />
                            </div>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-400 text-[10px] font-black uppercase tracking-tighter mb-6 group-hover:bg-fuchsia-100 dark:group-hover:bg-fuchsia-500/20 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                                Verified Video Story
                            </div>

                            <blockquote className="text-xl font-medium text-slate-700 dark:text-slate-100 leading-relaxed mb-8">
                                &ldquo;{testimonial.content}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-x-4 border-t border-slate-200 dark:border-white/5 pt-8">
                                {testimonial.image ? (
                                    <Image
                                        src={getImageUrl(testimonial.image)!}
                                        alt={testimonial.patient_name}
                                        width={56}
                                        height={56}
                                        className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-gray-800 object-cover ring-2 ring-slate-200 dark:ring-white/10"
                                    />
                                ) : (
                                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-fuchsia-500/20">
                                        {testimonial.patient_name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-black text-slate-900 dark:text-white text-lg">{testimonial.patient_name}</h3>
                                    <div className="flex text-yellow-500 mt-1 gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Optional: Watch Story text for high intent */}
                            <div className="mt-6 flex items-center gap-2 text-fuchsia-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-3 h-3" /> Watch Video Story
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center justify-center p-12 bg-fuchsia-100 dark:bg-fuchsia-950/30 rounded-[3rem] border border-fuchsia-200 dark:border-fuchsia-500/20 text-center">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Start Your Own Healing Journey</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
                        Our experts are ready to provide you with the same world-class care these patients received. Chat with us now for a free consultation estimate.
                    </p>
                    <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I was inspired by the testimonials. I'd like to book a consultation.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-fuchsia-500/20"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Book via WhatsApp
                        <ArrowRight className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
}

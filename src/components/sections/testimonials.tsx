import { SectionHeader } from "@/components/ui/section-header";
import { getTestimonials } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { Star } from "lucide-react";
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
        <section className="py-24 bg-gray-900 text-white relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80')] bg-cover bg-center bg-no-repeat bg-fixed blend-overlay"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="What Our Patients Say"
                    subtitle="Testimonials"
                    description="Real stories from real patients who have experienced our care."
                    className="text-white"
                />
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial: any) => (
                            <div key={testimonial.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl bg-white/10 p-8 text-sm leading-6 ring-1 ring-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                                    <blockquote className="text-gray-100">
                                        <p>“{testimonial.content}”</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        {testimonial.image ? (
                                            <img
                                                className="h-10 w-10 rounded-full bg-gray-800 object-cover"
                                                src={getImageUrl(testimonial.image)!}
                                                alt={testimonial.patient_name}
                                            />
                                        ) : (
                                            <div className="h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
                                                {testimonial.patient_name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-semibold text-white">{testimonial.patient_name}</div>
                                            <div className="flex text-yellow-400 mt-1">
                                                {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

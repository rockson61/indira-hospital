import { Star, CheckCircle, Quote } from "lucide-react"

interface Testimonial {
  name: string
  location: string
  quote: string
  rating: number
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[]
  title?: string
}

export function ServiceTestimonials({ testimonials, title = "What Our Patients Say" }: ServiceTestimonialsProps) {
  return (
    <section className="py-16">
        <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950/30 border border-fuchsia-100 dark:border-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-400 text-xs font-black tracking-widest uppercase mb-6">
                <Quote className="w-3.5 h-3.5" /> Verified Reviews
            </span>
            <h2 className="elite-section-title text-slate-900 dark:text-white">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
                    
                    <div className="absolute top-5 right-5 w-9 h-9 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-xl flex items-center justify-center">
                        <Quote className="w-4 h-4 text-fuchsia-500 dark:text-fuchsia-400" />
                    </div>

                    <div className="flex mb-5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-5 h-5 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 dark:text-slate-700"}`}
                            />
                        ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">&ldquo;{testimonial.quote}&rdquo;</p>
                    
                    <div className="flex items-center gap-3 pt-5 border-t border-slate-100 dark:border-slate-800">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-black text-sm">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="font-black text-slate-900 dark:text-white text-sm">{testimonial.name}</p>
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                            <p className="text-xs text-slate-400 font-medium">{testimonial.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

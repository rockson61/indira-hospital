import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
 {
 name: "Sam Franklin",
 review: "Highly recommend Indira Super Speciality Hospital for affordable and quality care near VIT University.",
 rating: 5,
 },
 {
 name: "Rajendiran",
 review: "Treatment at Indira Hospital is very good. The doctors listen to patients well and explain everything clearly.",
 rating: 5,
 },
 {
 name: "John D.",
 review: "Great service from the team, they explained to me everything they did in detail.",
 rating: 4,
 },
]

export function Reviews() {
 return (
 <section className="py-20">
 <div className="container mx-auto px-4">
 <h2 className="elite-section-title text-center mb-16">Global Patient Stories</h2>
 <div className="grid md:grid-cols-3 gap-8">
 {reviews.map((review, index) => (
 <div key={index} className="elite-card p-8 group hover:scale-[1.02] flex flex-col justify-between h-full">
 <div>
 <div className="flex gap-1 mb-6">
 {[...Array(review.rating)].map((_, i) => (
 <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
 ))}
 </div>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light italic text-lg mb-8">&ldquo;{review.review}&rdquo;</p>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-full bg-fuchsia-100 dark:bg-white dark:bg-slate-900 flex items-center justify-center text-fuchsia-600 font-black text-xs uppercase">{review.name.charAt(0)}</div>
 <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs italic">{review.name}</h4>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 )
}

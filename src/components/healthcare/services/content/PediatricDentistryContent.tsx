import { CheckCircle2, Heart, Baby, ShieldCheck } from "lucide-react"

export function PediatricDentistryContent() {
    return (
        <div className="space-y-8">
            <div className="bg-pink-50/50 p-6 rounded-xl border border-pink-100">
                <h3 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                    <Baby className="text-pink-600" />
                    Gentle Dental Care for Kids
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Ages: 0–16 years. First visit: ₹500. Treatments from ₹1,000–₹5,000.</strong> At Indira Dental Clinic, Dr. Rockson Samuel specializes in making dental visits fun and fearless for children. <strong>We treat 50+ kids every month with 0% injection anxiety using child-friendly communication techniques.</strong> Our pediatric treatments focus on prevention, early detection, and instilling good oral hygiene habits that last a lifetime.
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>Fluoride treatments to strengthen enamel</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>Dental sealants to prevent cavities</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>Painless cavity fillings</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>Early orthodontic assessment</span>
                    </li>
                </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-green-600" /> Why Start Early?
                </h4>
                <p className="text-foreground/80 mb-4">
                    <strong>First dental visit should be by age 1 or within 6 months of first tooth.</strong> Early visits help us monitor jaw and teeth growth, catch issues like baby bottle tooth decay or thumb-sucking habits, and prevent complex problems later. <strong>Children who start early have 60% fewer cavities by age 12.</strong>
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-sm md:text-base">
                    <strong>Parent Tip:</strong> Speak positively about the dentist at home. Avoid using words like "pain" or "needle" to prevent dental anxiety.
                </div>
            </div>
        </div>
    )
}

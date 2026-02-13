import { CheckCircle2, Shield, Search, Sparkles } from "lucide-react"

export function PreventiveDentistryContent() {
    return (
        <div className="space-y-8">
            <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                    <Shield className="text-green-600" />
                    Preventive Dental Care
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Consultation: ₹300. Cleaning (Scaling): ₹1,000–₹2,000.</strong> Prevention is better than cure. At Indira Dental Clinic, Dr. Rockson Samuel emphasizes preventive care to stop cavities and gum disease before they start. <strong>Regular checkups can save you ₹50,000+ in future dental bills.</strong>
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Comprehensive Dental Exams</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Professional Teeth Cleaning (Scaling)</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Oral Cancer Screening</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Fluoride Therapy</span>
                    </li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-xl bg-card shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Search className="text-blue-500" /> Regular Checkups
                    </h4>
                    <p className="text-muted-foreground">
                        Visiting us every 6 months allows us to catch problems early when they are easier and cheaper to treat.
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-card shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Sparkles className="text-yellow-500" /> Professional Cleaning
                    </h4>
                    <p className="text-muted-foreground">
                        Scaling removes hardened plaque (tartar) that brushing can't reach. <strong>Recommended every 6 months for gum health. Painless procedure: 20-30 minutes.</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

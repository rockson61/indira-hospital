import { CheckCircle2, Crown, Sparkles, Smile } from "lucide-react"

export function TeethWhiteningContent() {
    return (
        <div className="space-y-8">
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Sparkles className="text-blue-600" />
                    Professional Teeth Whitening
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Cost: ₹5,000–₹15,000. Results: 4–8 shades brighter in 45 minutes.</strong> Professional teeth whitening at Indira Dental Clinic uses dental-grade Zoom/LED whitening—safer, faster, and longer-lasting than over-the-counter kits. Results last 1–2 years with proper care.
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Removes deep stains</strong>: coffee, tea, wine, smoking, age-related</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Enamel-safe</strong>: pH-balanced gel protects enamel and gums</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>45-minute session</strong>: Walk in, walk out with a brighter smile</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Take-home kit included</strong>: Custom trays + gel for maintenance (₹2,500 value)</span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Our Whitening Process</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">1</div>
                        <h4 className="font-semibold mb-2">Consultation & Cleaning (15 min)</h4>
                        <p className="text-sm text-muted-foreground">Dental check + professional scaling removes plaque for better whitening results. <strong>Included in package.</strong></p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">2</div>
                        <h4 className="font-semibold mb-2">Gel Application (10 min)</h4>
                        <p className="text-sm text-muted-foreground">Gum barrier applied. 35% hydrogen peroxide gel on teeth. <strong>Sensitivity minimized with desensitizing agent.</strong></p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">3</div>
                        <h4 className="font-semibold mb-2">LED Activation (20 min)</h4>
                        <p className="text-sm text-muted-foreground">Blue LED light activates gel for maximum brightness. <strong>4–8 shades lighter in one session.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { CheckCircle2, Crown, Sparkles, Smile } from "lucide-react"

export function VeneersContent() {
    return (
        <div className="space-y-8">
            <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
                <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                    <Smile className="text-purple-600" />
                    Porcelain Veneers & Laminates
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Cost: ₹8,000–₹25,000 per tooth. Lifespan: 10–15 years.</strong> Transform your smile completely with custom-made porcelain veneers at Indira Dental Clinic. Dr. Rockson Samuel uses IPS E.Max and Zirconia veneers—the same materials used in Hollywood smile makeovers. <strong>Complete smile makeover (8 veneers): ₹60,000–₹2,00,000 with 3-year warranty.</strong>
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Fix chipped or broken teeth</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Close gaps between teeth</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Mask severe discoloration</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Highly stain-resistant material</span>
                    </li>
                </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h4 className="text-lg font-bold mb-3">Composite vs. Porcelain Veneers</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-foreground/80 font-semibold border-b">
                            <tr>
                                <th className="py-3 px-4">Feature</th>
                                <th className="py-3 px-4">Porcelain Veneers</th>
                                <th className="py-3 px-4">Composite Veneers</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="py-3 px-4 font-medium">Durability</td>
                                <td className="py-3 px-4">High (10-15 years)</td>
                                <td className="py-3 px-4">Medium (5-7 years)</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">Stain Resistance</td>
                                <td className="py-3 px-4">Excellent</td>
                                <td className="py-3 px-4">Good</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">Cost at Indira Dental</td>
                                <td className="py-3 px-4"><strong>₹15,000–₹25,000/tooth</strong></td>
                                <td className="py-3 px-4"><strong>₹8,000–₹12,000/tooth</strong></td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">Visits</td>
                                <td className="py-3 px-4">2 Visits</td>
                                <td className="py-3 px-4">1 Visit (Usually)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

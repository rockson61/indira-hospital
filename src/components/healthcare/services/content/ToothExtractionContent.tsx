import { CheckCircle2, Scissors, ShieldAlert, HeartPulse } from "lucide-react"

export function ToothExtractionContent() {
    return (
        <div className="space-y-8">
            <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <Scissors className="text-red-600" />
                    Painless Tooth Extractions
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Simple extraction: ₹1,000–₹2,000. Wisdom tooth: ₹3,000–₹8,000. Recovery: 3–7 days.</strong> While our goal is always to save your natural teeth, sometimes extraction is necessary to protect your overall oral health. Dr. Rockson Samuel performs 50+ painless extractions monthly using modern anesthesia and gentle techniques. <strong>100% of patients report zero pain during procedure.</strong>
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Impacted Wisdom Teeth Removal</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Severe Decay or Infection</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Orthodontic Extractions (for overcrowding)</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Advanced Gum Disease</span>
                    </li>
                </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <ShieldAlert className="text-orange-500" /> Wisdom Teeth Symptoms
                </h4>
                <p className="text-foreground/80 mb-4">
                    <strong>80% of adults have impacted wisdom teeth that require removal.</strong> If you experience pain at the back of your jaw, swollen gums, or difficulty opening your mouth, your wisdom teeth may be impacted. Early removal prevents damage to adjacent teeth and potential infection. <strong>Get wisdom teeth X-ray assessment: ₹300 only.</strong>
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                    <HeartPulse className="text-green-600 mt-1" />
                    <div>
                        <strong>Post-Extraction Care:</strong> We provide detailed instructions to ensure a quick recovery, including soft diet recommendations and pain management tips.
                    </div>
                </div>
            </div>
        </div>
    )
}

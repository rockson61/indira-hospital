import { CheckCircle2, RotateCw, Settings, Smile } from "lucide-react"

export function FullMouthRehabContent() {
    return (
        <div className="space-y-8">
            <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <RotateCw className="text-indigo-600" />
                    Full Mouth Rehabilitation
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Cost: ₹1,50,000–₹5,00,000. Treatment time: 2–6 months.</strong> Full mouth rehabilitation is a customized treatment plan at Indira Dental Clinic. Dr. Rockson Samuel combines restorative, cosmetic, and neuromuscular dentistry to restore the function, health, and aesthetics of your entire mouth. <strong>Corrects worn teeth, missing teeth, and TMJ issues permanently.</strong>
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Restores full chewing function</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Corrects bite alignment (TMJ)</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Improves facial aesthetics</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Prevent future dental deterioration</span>
                    </li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Settings className="text-muted-foreground" /> Procedures Involved
                    </h4>
                    <ul className="space-y-2 text-foreground/80 text-sm">
                        <li>• Dental Implants or Bridges</li>
                        <li>• Porcelain Crowns & Veneers</li>
                        <li>• Root Canal Therapy</li>
                        <li>• Gum Surgery or Contouring</li>
                    </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Smile className="text-blue-500" /> Who Needs It?
                    </h4>
                    <p className="text-foreground/80 text-sm">
                        Patients with extensive decay, severe acid erosion (GERD), trauma/injury, or chronic teeth grinding (bruxism) are prime candidates. <strong>Restore 100% chewing efficiency and a youthful smile.</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

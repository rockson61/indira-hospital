import { CheckCircle2, Timer, Gem, Smile } from "lucide-react"

export function InvisalignContent() {
    return (
        <div className="space-y-8">
            <div className="bg-teal-50/50 p-6 rounded-xl border border-teal-100">
                <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                    <Gem className="text-teal-600" />
                    Clear Aligners (Invisalign)
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Cost: ₹80,000–₹2,50,000. Treatment: 6–18 months. 95% patient satisfaction.</strong> Straighten your teeth discreetly with clear aligners at Indira Dental Clinic. Dr. Rockson Samuel is a certified Invisalign provider with 500+ successful cases. <strong>We offer 0% EMI options via Bajaj Finserv, HDFC, and ICICI.</strong> Perfect for working professionals who want invisible orthodontic treatment.
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Virtually invisible treatment</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Removable for eating and brushing</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>No metal wires or brackets</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Fewer office visits required</span>
                    </li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-xl bg-card shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Timer className="text-orange-500" /> Treatment Duration
                    </h4>
                    <p className="text-muted-foreground">
                        <strong>Simple cases: 6–12 months. Complex cases: 12–18 months.</strong> Visible improvement starts within 2–3 weeks. Dr. Rockson Samuel uses 3D ClinCheck technology to show your expected results before treatment begins.
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-card shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Smile className="text-blue-500" /> Comfort & Lifestyle
                    </h4>
                    <p className="text-muted-foreground">
                        Smooth plastic aligners don’t irritate your cheeks or gums. You can eat whatever you want by simply removing them.
                    </p>
                </div>
            </div>
        </div>
    )
}

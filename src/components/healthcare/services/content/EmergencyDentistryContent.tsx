import { CheckCircle2, Siren, PhoneCall, Clock } from "lucide-react"

export function EmergencyDentistryContent() {
    return (
        <div className="space-y-8">
            <div className="bg-orange-50/50 dark:bg-orange-950/30 p-6 rounded-xl border border-orange-100 dark:border-orange-800/50">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4 flex items-center gap-2">
                    <Siren className="text-orange-600 dark:text-orange-400" />
                    Emergency Dental Care
                </h3>
                <p className="text-foreground/80 dark:text-slate-300 leading-relaxed mb-4">
                    <strong>Same-day appointments. Emergency fee: ₹500. Most treatments: ₹1,000–₹15,000.</strong> Dental emergencies can happen anytime—severe toothache, broken tooth, knocked-out tooth, or lost filling. At Indira Dental Clinic, Dr. Rockson Samuel prioritizes emergency cases ensuring quick relief within 30 minutes. <strong>Call 7010650063 immediately for emergency dental care in Vellore.</strong>
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground/80 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Severe Toothache Relief</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Chipped or Broken Teeth</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Knocked-Out Teeth</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Lost Crowns or Fillings</span>
                    </li>
                </ul>
            </div>

            <div className="bg-card dark:bg-slate-800/60 p-6 rounded-lg shadow-sm border border-border/50 dark:border-slate-700 border-l-4 border-l-orange-500 dark:border-l-orange-400">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-foreground dark:text-slate-100">
                    <PhoneCall className="text-orange-600 dark:text-orange-400" /> Rapid Response
                </h4>
                <p className="text-foreground/80 dark:text-slate-300 mb-4">
                    If you are in pain, don't wait. Call us immediately at <strong>7010650063</strong>. We often offer same-day appointments for urgent cases.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-400">
                    <Clock size={16} />
                    <span><strong>Mon-Sat: 10AM-8PM. Sunday: 10AM-1:30PM (Emergencies only).</strong> Average wait time for emergencies: 15-30 minutes.</span>
                </div>
            </div>
        </div>
    )
}

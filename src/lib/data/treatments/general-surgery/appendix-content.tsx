import Image from "next/image";
import React from 'react'
import { 
 Zap, 
 Shield, 
 Activity, 
 Award, 
 Clock, 
 CheckCircle2, 
 HeartPulse, 
 Microscope, 
 Info, 
 AlertOctagon,
 Crosshair,
 Users,
 ClipboardCheck,
 Stethoscope,
 Layers,
 Sparkles,
 Scale,
 Minimize2,
 Flame,
 Thermometer
} from 'lucide-react'

export const AppendixLongForm = () => {
 return (
 <div className="appendix-longform-content space-y-16 py-8">
 {/* 1. Executive Summary */}
 <section className="executive-summary">
 <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-heading underline decoration-rose-600/20 underline-offset-8">
 The Critical Guide to Emergency Laparoscopic Appendectomy in Vellore
 </h2>
 <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
 <p>
 Appendicitis is the most common reason for emergency abdominal surgery globally. It is a time-sensitive condition where a delay of even a few hours can mean the difference between a simple 20-minute keyhole procedure and a life-threatening ruptured appendix with widespread infection (Peritonitis). At <strong>Indira Super Speciality Hospital, Vellore</strong>, we maintain <strong>24/7 Surgical Readiness</strong> for acute appendicitis.
 </p>
 <p className="mt-6">
 Under the expert guidance of <strong>Dr. P. Shankar</strong> and <strong>Dr. Karan Shankar</strong>, our department specializes in <strong>Emergency Laparoscopic Appendectomy</strong>. This minimally invasive approach allows for a faster recovery, minimal pain, and superior cosmetic results, even in the middle of a clinical emergency. This guide details everything you need to know about spotting the signs and seeking the right surgical cure.
 </p>
 </div>
 </section>

 {/* 2. Spotting the Signs */}
 <section className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 blur-[100px] -mr-32 -mt-32" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 font-heading">
 <Info className="text-rose-600 w-10 h-10" />
 Recognizing Appendicitis: The "Pain Shift"
 </h3>
 <div className="grid md:grid-cols-2 gap-12">
 <div className="space-y-6">
 <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
 Appendicitis is the inflammation of the vermiform appendix—a small vestigial pouch attached to the large intestine. The classic indicator isn't just pain, but the <strong>way the pain moves</strong>.
 </p>
 <h4 className="font-bold text-rose-900 dark:text-rose-300 mt-6 font-heading text-xl uppercase">The Clinical Progression:</h4>
 <div className="space-y-4">
 {[
 { t: 'Early Phase', d: 'Dull pain around the belly button (umbilicus) often mistaken for gas or indigestion.' },
 { t: 'The Shift', d: 'After 6-12 hours, the pain migrates to the Right Lower Abdomen (Right Iliac Fossa).' },
 { t: 'Localized Pain', d: 'The pain becomes sharp, constant, and worsens with movement, coughing, or walking.' },
 { t: 'Systemic Signs', d: 'Low-grade fever, nausea, vomiting, and a total loss of appetite (Anorexia).' }
 ].map((item, i) => (
 <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group transition-all hover:border-rose-200">
 <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
 <div>
 <p className="font-bold text-slate-900 m-0 text-sm">{item.t}</p>
 <p className="text-xs text-slate-500 m-0">{item.d}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div className="bg-rose-950 p-10 rounded-[4rem] border border-slate-200 dark:border-slate-800 text-white relative overflow-hidden flex flex-col justify-center">
 <div className="absolute top-0 right-0 p-8 opacity-10">
 <AlertOctagon className="w-24 h-24 text-rose-400" />
 </div>
 <h4 className="font-black text-rose-400 mb-6 font-heading uppercase tracking-tighter">Emergency: The Buried Danger</h4>
 <p className="text-sm text-slate-400 leading-relaxed mb-8">
 If the pain suddenly disappears for a short period, it might <strong>not</strong> mean you are cured. It often means the appendix has <strong>ruptured</strong>, releasing pressure. Within hours, this leads to <strong>Peritonitis</strong>—a massive infection.
 </p>
 <div className="space-y-4 relative z-10">
 {[
 "High Fever (>101°F)",
 "Rigid, Board-like Abdomen",
 "Inability to Walk Straight",
 "Severe Bloating & Vomiting"
 ].map((warn, i) => (
 <div key={i} className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-rose-400/60">
 <div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> {warn}
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 3. The Laparoscopic Choice */}
 <section className="tech-advantage bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
 <div className="max-w-4xl relative z-10 mx-auto text-center">
 <h2 className="text-4xl font-black mb-10 text-rose-400 font-heading uppercase tracking-tighter shrink-0">Emergency Keyhole Appendectomy</h2>
 <div className="grid md:grid-cols-2 gap-12 text-left">
 <div className="space-y-6">
 <h4 className="text-2xl font-bold font-heading italic text-rose-100 uppercase">Why Laparoscopy for Emergencies?</h4>
 <p className="text-slate-400 leading-relaxed text-sm">
 Traditionally, surgeons used a 3-inch "McBurney's" incision. Today, we use <strong>three 5mm ports</strong>. In an emergency, laparoscopy allows the surgeon to visualize the <strong>entire abdominal cavity</strong>, ensuring that if there is any pus or fluid from a leak, it can be thoroughly washed out (Laparoscopic Lavage), something impossible with a small open incision.
 </p>
 <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-inner">
 <h5 className="text-rose-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Clinical Benefits:</h5>
 <ul className="space-y-3 text-xs font-bold text-white/70">
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full abdominal inspection</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Minimal post-op wound infection rating</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Faster return of bowel function</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> discharge in 24 hours</li>
 </ul>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-center group/card">
 <h4 className="text-rose-400 font-bold mb-4 font-heading text-xl">The Precision Advantage</h4>
 <p className="text-slate-400 text-xs leading-relaxed mb-8">
 At Indira Hospital, we use <strong>High-Definition (HD) camera stacks</strong> and the <strong>Harmonic Scalpel</strong>. This allows us to seal the blood supply to the appendix instantly with ultrasound energy, ensuring a bloodless and safe removal.
 </p>
 <div className="w-full h-1 bg-white dark:bg-slate-900 rounded-full overflow-hidden">
 <div className="w-[99.5%] h-full bg-rose-500 shadow-[0_0_15px_#f43f5e]" />
 </div>
 <p className="text-[10px] text-slate-500 mt-2 uppercase font-black tracking-widest text-right">Success Rate for Emergency Lap-Appendectomy</p>
 </div>
 </div>
 </div>
 </section>

 {/* 4. Diagnostic Excellence */}
 <section className="diagnostic-excellence py-12">
 <div className="flex flex-col md:flex-row gap-16 items-center">
 <div className="md:w-1/2 space-y-8">
 <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic m-0 tracking-tighter uppercase">Precision Triage & Diagnostics</h2>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg opacity-80 font-light">
 In an emergency, speed and accuracy must go hand-in-hand. We follow the <strong>Alvarado Scoring System</strong> combined with modern imaging to confirm appendicitis within 30 minutes of arrival.
 </p>
 <div className="grid grid-cols-1 gap-6">
 {[
 { t: 'Emergency USG Abdomen', d: 'The primary tool to visualize a non-compressible appendix (>6mm in diameter).', i: Activity },
 { t: 'Point-of-Care Bloods (CBC)', d: 'Checking for elevated White Blood Cell (WBC) counts, a key marker of inflammation.', i: HeartPulse },
 { t: '3T CT Abdomen', d: 'Used for atypical presentations or elderly patients to rule out other abdominal issues.', i: Microscope }
 ].map((item, i) => (
 <div key={i} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl">
 <div className="p-4 rounded-2xl bg-rose-100 text-rose-600 shrink-0">
 <item.i className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-bold text-slate-900 dark:text-white text-md m-0">{item.t}</h4>
 <p className="text-xs text-slate-500 m-0 font-medium">{item.d}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div className="md:w-1/2 bg-rose-50 dark:bg-rose-950/30 p-12 rounded-[5rem] border border-rose-100 dark:border-rose-900/30 shadow-2xl relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 rounded-full blur-[80px]" />
 <h4 className="text-2xl font-black text-rose-900 dark:text-rose-400 mb-6 font-heading italic uppercase underline decoration-rose-600/10 underline-offset-8">Clinical Importance of Timing</h4>
 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
 "Appendicitis never stays the same. It is either getting better (rare without surgery) or getting much worse. A ruptured appendix requires an open surgery, larger scars, and a 5-7 day hospital stay. Early laparoscopy is always the safer, cleaner path."
 </p>
 <div className="flex items-center gap-4 border-t border-rose-200 dark:border-rose-900/40 pt-8">
 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rose-600 p-0.5 group-hover:scale-110 transition-transform">
 <Image width={48} height={48} src="/images/doctors/dr-shankar.jpg" alt="Dr P Shankar" className="rounded-full grayscale" />
 </div>
 <div className="text-[10px] font-black uppercase text-rose-900 dark:text-rose-400 tracking-widest leading-tight">Dr. P. Shankar <br/> <span className="text-slate-400 font-normal">Chairman & Lead Surgeon</span></div>
 </div>
 </div>
 </div>
 </section>

 {/* 5. Accelerated Recovery Protocol */}
 <section className="bg-white dark:bg-slate-900 rounded-[4rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl">
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 font-heading uppercase tracking-widest text-center">Post-Op Recovery Roadmap</h2>
 <div className="grid md:grid-cols-4 gap-6">
 {[
 { day: '6 Hours', title: 'Ambulation', desc: 'You will be sit up and walk with support to prevent clots.' },
 { day: '24 Hours', title: 'Homecoming', desc: 'Discharge typically happens within 24 hours for uncomplicated cases.' },
 { day: '48 Hours', title: 'Normal Diet', desc: 'Restarting regular food as bowel sounds return to normal.' },
 { day: '7 Days', title: 'Stitch Removal', desc: 'Tiny dissolvable stitches or single knots are checked and cleared.' }
 ].map((step, i) => (
 <div key={i} className="p-8 bg-slate-50 dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 text-center group hover:shadow-2xl transition-all">
 <div className="text-xs font-black text-rose-600 uppercase tracking-widest mb-4">{step.day}</div>
 <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading">{step.title}</h4>
 <p className="text-[10px] text-slate-500 leading-relaxed">{step.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* 6. Pricing & Insurance Transparency */}
 <section className="pricing-transparency">
 <div className="bg-slate-950 p-16 rounded-[5rem] text-white relative overflow-hidden group">
 <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />
 <div className="grid md:grid-cols-2 gap-16 items-center">
 <div className="space-y-8">
 <h2 className="text-4xl font-black text-rose-400 font-heading uppercase tracking-tighter m-0">Economic Transparency</h2>
 <p className="text-slate-400 leading-relaxed">
 We provide transparent, all-inclusive emergency surgical packages. Our goal is to ensure you focus on recovery while our billing team handles the insurance procedures.
 </p>
 <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem]">
 <h4 className="text-rose-400 font-bold mb-4 font-heading text-lg flex items-center gap-3">
 <Shield className="w-5 h-5" /> Insurance & TPA
 </h4>
 <p className="text-xs text-slate-400 mb-4">Partnered with 100% of major providers, including Government Schemes:</p>
 <div className="flex flex-wrap gap-2">
 {['TN CMCHIS', 'Star Health', 'HDFC Ergo', 'NIVA Bupa', 'United India'].map((ins, i) => (
 <div key={i} className="px-4 py-1.5 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-rose-100">{ins}</div>
 ))}
 </div>
 </div>
 </div>
 <div className="space-y-6 text-center">
 <div className="p-10 bg-rose-600 rounded-[4rem] shadow-2xl relative group-hover:scale-105 transition-transform duration-500 overflow-hidden">
 <div className="absolute top-0 right-0 p-8 opacity-20">
 <Flame className="w-16 h-16" />
 </div>
 <h4 className="text-2xl font-black mb-2 font-heading text-white">Estimated Package:</h4>
 <p className="text-5xl font-black tracking-tighter mb-4 text-white flex justify-center items-center gap-2">
 ₹40k - ₹75k
 </p>
 <p className="text-xs font-medium text-white/70 leading-relaxed">
 *Price includes HD-Laparoscopic tower fees, anesthesia, medications, and 24-hour ward stay.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 7. Comprehensive FAQ */}
 <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 font-heading uppercase tracking-widest text-center underline underline-offset-8 decoration-rose-600/20">Appendix Care FAQ</h2>
 <div className="grid md:grid-cols-2 gap-10">
 {[
 { q: "Can antibiotics cure appendicitis without surgery?", a: "While 'antibiotic-first' therapy is a rising clinical topic, it has a high failure rate (over 30% recur within a year). For a permanent, safe cure, laparoscopic surgery remains the gold standard." },
 { q: "What happens if the appendix has already burst?", a: "If the appendix has burst (peritonitis), the surgery becomes longer as we have to 'wash out' (lavage) the abdomen thoroughly. Recovery may take 3-5 days instead of 24 hours." },
 { q: "Is appendicitis surgery safe for children?", a: "Yes, it is one of the most common pediatric surgical procedures. We use specialized pediatric laparoscopic instruments for children to ensure maximum safety." },
 { q: "Will I have a large scar after emergency surgery?", a: "No. With our laparoscopic approach, you will have three tiny marks (5mm each) that are almost invisible after 4-6 months, unlike the 3-inch diagonal scar of open surgery." },
 { q: "How soon can I return to school or work?", a: "Most patients return to light activities and school/desk work within 4 to 5 days. Heavy sports should be avoided for 3 weeks." },
 { q: "Why choose Indira Hospital for an emergency?", a: "We maintain 24/7 on-site senior surgical coverage, a dedicated emergency OT, and high-end ICU backup, ensuring no time is wasted in life-saving triage." }
 ].map((faq, i) => (
 <div key={i} className="space-y-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
 <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-snug flex items-start gap-3">
 <Info className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
 {faq.q}
 </h4>
 <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
 </div>
 ))}
 </div>
 </section>

 {/* 8. Final Silo Transition CTA */}
 <section className="bg-rose-950 rounded-[4rem] p-20 text-center text-white relative overflow-hidden group/cta">
 <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] animate-pulse" />
 <h2 className="text-5xl font-black mb-6 font-heading uppercase tracking-tighter">Emergency Care That Cannot Wait</h2>
 <p className="text-rose-100/60 mb-12 max-w-2xl mx-auto italic text-xl leading-relaxed font-light">
 Don't ignore abdominal pain. Trust Vellore's emergency surgical leaders for immediate, precise, and life-saving care.
 </p>
 <div className="flex flex-wrap justify-center gap-8 relative z-10">
 <button className="px-14 py-6 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-3xl transition-all shadow-2xl shadow-rose-600/30 uppercase tracking-widest group-hover/cta:scale-110 active:scale-95">24/7 Emergency Line</button>
 <button className="px-14 py-6 bg-white dark:bg-slate-900 hover:bg-white dark:bg-slate-900 text-white font-black rounded-3xl transition-all border border-slate-200 dark:border-slate-800 uppercase tracking-widest">WhatsApp Diagnostics</button>
 </div>
 </section>
 </div>
 )
}

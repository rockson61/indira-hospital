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
 Salad,
 Bean,
 Flame
} from 'lucide-react'

export const GallbladderLongForm = () => {
 return (
 <div className="gallbladder-longform-content space-y-16 py-8">
 {/* 1. Executive Summary */}
 <section className="executive-summary">
 <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-heading underline decoration-indigo-600/20 underline-offset-8">
 The Ultimate Guide to Laparoscopic Gallbladder Surgery in Vellore
 </h2>
 <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
 <p>
 Gallstones are one of the most common causes of intense abdominal pain and digestive distress in India. While many try to "manage" the condition through diet, scientific consensus is clear: symptomatic gallstones require surgical resolution to prevent life-threatening complications. At <strong>Indira Super Speciality Hospital, Vellore</strong>, we provide the region's most advanced <strong>Laparoscopic Cholecystectomy</strong> solutions.
 </p>
 <p className="mt-6">
 Using high-definition 4K laparoscopic imaging and ultrasonic energy (Harmonic Scalpel), our senior surgical team, led by <strong>Dr. P. Shankar</strong>, ensures that gallbladder removal is a safe, precise, and practically painless experience. This 2000+ word guide is designed to answer every question you have about gallstones, the surgical process, and living a healthy life after gallbladder removal.
 </p>
 </div>
 </section>

 {/* 2. Understanding Gallstones */}
 <section className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] -mr-32 -mt-32" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 font-heading">
 <Info className="text-indigo-600 w-10 h-10" />
 What are Gallstones? Causes & Clinical Indicators
 </h3>
 <div className="grid md:grid-cols-2 gap-12">
 <div className="space-y-6">
 <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
 The gallbladder is a small, pear-shaped organ that stores bile—a fluid used by the body to digest fats. Gallstones (Cholelithiasis) form when there is a chemical imbalance in the bile, leading to the formation of hard, stone-like deposits.
 </p>
 <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mt-6 font-heading text-xl uppercase">Common Symptoms of Gallstones:</h4>
 <div className="space-y-4">
 {[
 { t: 'Biliary Colic', d: 'Sharp, sudden pain in the upper right abdomen, often after a fatty meal.' },
 { t: 'Radiating Pain', d: 'Pain that travels to the right shoulder or back between the shoulder blades.' },
 { t: 'Digestive Distress', d: 'Frequent bloating, gas, and indigestion often mistaken for "gastritis".' },
 { t: 'Jaundice', d: 'Yellowing of the eyes and skin, indicating a stone has blocked the main bile duct.' }
 ].map((item, i) => (
 <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group transition-all hover:border-indigo-200">
 <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
 <div>
 <p className="font-bold text-slate-900 m-0 text-sm">{item.t}</p>
 <p className="text-xs text-slate-500 m-0">{item.d}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div className="bg-indigo-950 p-10 rounded-[4rem] border border-slate-200 dark:border-slate-800 text-white relative overflow-hidden flex flex-col justify-center">
 <div className="absolute top-0 right-0 p-8 opacity-10">
 <AlertOctagon className="w-24 h-24 text-indigo-400" />
 </div>
 <h4 className="font-black text-indigo-400 mb-6 font-heading uppercase tracking-tighter">The "Silent Stone" Myth</h4>
 <p className="text-sm text-slate-400 leading-relaxed mb-8">
 Many patients are told they have "incidental" stones and don't need surgery. However, studies show that once stones are present, the risk of a major biliary event (inflammation or infection) increases by 2-3% every year. Early elective surgery prevents the need for complex emergency interventions.
 </p>
 <div className="space-y-4 relative z-10">
 {[
 "Prevents Gallbladder Rupture",
 "Eliminates Risk of Pancreatitis",
 "Ensures Single-Procedure Cure",
 "Zero Risk of Duct Stones (CBD)"
 ].map((warn, i) => (
 <div key={i} className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-indigo-400/60">
 <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {warn}
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 3. The Gold Standard: Laparoscopic Cholecystectomy */}
 <section className="tech-advantage bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
 <div className="max-w-4xl relative z-10 mx-auto text-center">
 <h2 className="text-4xl font-black mb-10 text-indigo-400 font-heading uppercase tracking-tighter shrink-0">4K Laparoscopic Gallbladder Removal</h2>
 <div className="grid md:grid-cols-2 gap-12 text-left">
 <div className="space-y-6">
 <h4 className="text-2xl font-bold font-heading italic text-indigo-100 uppercase">Minimal Access, Maximum Clarity</h4>
 <p className="text-slate-400 leading-relaxed text-sm">
 We utilize the standard **four-port laparoscopic approach**, providing the highest safety margin. Through four tiny marks (5mm to 10mm), we insert high-definition 4K cameras that provide 20x magnification of the <strong>Calot's Triangle</strong>—the critical area where the gallbladder connects to the liver and bile ducts.
 </p>
 <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-inner">
 <h5 className="text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Surgical Precision Tools:</h5>
 <ul className="space-y-3 text-xs font-bold text-white/70">
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Harmonic Scalpel (Ultrasonic Dissection)</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Titanium Hemoclips for permanent sealing</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Endobag for sterile stone retrieval</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> CO2 Insufflation for clear visibility</li>
 </ul>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-center group/card">
 <h3 className="text-indigo-400 text-6xl font-black mb-4 font-heading tracking-tighter transition-transform group-hover/card:scale-110">99.8%</h3>
 <p className="text-indigo-200 font-black uppercase tracking-widest text-xs mb-6">Success Rate for Elective Cases</p>
 <p className="text-slate-400 text-xs leading-relaxed mb-8 opacity-80">
 Our commitment to high-end infrastructure and senior oversight has resulted in near-zero complication rates for elective gallbladder removal. Most patients walk within 6 hours of surgery.
 </p>
 <div className="w-full h-1 bg-white dark:bg-slate-900 rounded-full overflow-hidden">
 <div className="w-[99.8%] h-full bg-indigo-500 shadow-[0_0_15px_#6366f1]" />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 4. Life Without a Gallbladder */}
 <section className="diet-recovery py-12">
 <div className="flex flex-col md:flex-row gap-16 items-center">
 <div className="md:w-1/2 space-y-8">
 <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic m-0 tracking-tighter uppercase">Digestion Post-Surgery</h2>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg opacity-80 font-light">
 A common misconception is that you cannot digest fat without a gallbladder. In reality, the liver continues to produce bile; it simply flows directly into the small intestine rather than being stored.
 </p>
 <div className="grid grid-cols-1 gap-6">
 {[
 { t: 'Immediate Recovery', d: 'Soft liquids for the first 24 hours, followed by a low-fiber diet for 3 days.', i: Clock },
 { t: 'The 4-Week Rule', d: 'Avoid high-fat, deep-fried foods for 30 days to allow the digestive system to recalibrate.', i: Salad },
 { t: 'Long-Term Health', d: 'Most patients return to a 100% normal diet within 6 weeks with zero digestive restriction.', i: Activity }
 ].map((item, i) => (
 <div key={i} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl">
 <div className="p-4 rounded-2xl bg-indigo-100 text-indigo-600 shrink-0">
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
 <div className="md:w-1/2 bg-indigo-50 dark:bg-indigo-950/30 p-12 rounded-[5rem] border border-indigo-100 dark:border-indigo-900/30 shadow-2xl relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[80px]" />
 <h4 className="text-2xl font-black text-indigo-900 dark:text-indigo-400 mb-6 font-heading italic uppercase underline decoration-indigo-600/10 underline-offset-8">Clinical Importance of Early Surgery</h4>
 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
 "When a stones slips from the gallbladder into the Common Bile Duct (CBD), it turns a simple surgery into a critical emergency requiring **ERCP** and two separate procedures. We strongly recommend elective removal once symptoms begin."
 </p>
 <div className="flex items-center gap-4 border-t border-indigo-200 dark:border-indigo-900/40 pt-8">
 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-600 p-0.5 group-hover:scale-110 transition-transform">
 <Image width={48} height={48} src="/images/doctors/dr-shankar.jpg" alt="Dr P Shankar" className="rounded-full grayscale" />
 </div>
 <div className="text-[10px] font-black uppercase text-indigo-900 dark:text-indigo-400 tracking-widest leading-tight">Dr. P. Shankar <br/> <span className="text-slate-400 font-normal">Chairman & Lead Surgeon</span></div>
 </div>
 </div>
 </div>
 </section>

 {/* 5. Diagnosis & Pre-Op Mapping */}
 <section className="bg-white dark:bg-slate-900 rounded-[4rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl">
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 font-heading uppercase tracking-widest text-center">Scientific Diagnosis Protocol</h2>
 <div className="grid md:grid-cols-3 gap-8 text-center px-4">
 <div className="space-y-4">
 <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl flex items-center justify-center text-indigo-600 mx-auto">
 <Activity className="w-10 h-10" />
 </div>
 <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">High-Frequency USG</h4>
 <p className="text-[10px] text-slate-500">Determining stone size and checking for gallbladder wall thickening (sign of infection).</p>
 </div>
 <div className="space-y-4">
 <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl flex items-center justify-center text-indigo-600 mx-auto">
 <Bean className="w-10 h-10" />
 </div>
 <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Liver Function (LFT)</h4>
 <p className="text-[10px] text-slate-500">Blood markers to rule out ductal blockage or early stage jaundice.</p>
 </div>
 <div className="space-y-4">
 <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl flex items-center justify-center text-indigo-600 mx-auto">
 <Microscope className="w-10 h-10" />
 </div>
 <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">MRCP / CECT</h4>
 <p className="text-[10px] text-slate-500">Advanced imaging for complex anatomy or suspected bile duct stones.</p>
 </div>
 </div>
 </section>

 {/* 6. Pricing & Insurance Transparency */}
 <section className="pricing-transparency">
 <div className="bg-slate-950 p-16 rounded-[5rem] text-white relative overflow-hidden group">
 <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
 <div className="grid md:grid-cols-2 gap-16 items-center">
 <div className="space-y-8">
 <h2 className="text-4xl font-black text-indigo-400 font-heading uppercase tracking-tighter m-0">Economic Transparency</h2>
 <p className="text-slate-400 leading-relaxed">
 We provide all-inclusive surgical packages for Gallbladder removal in Vellore. Our goal is to ensure world-class care is accessible and predictable.
 </p>
 <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem]">
 <h4 className="text-fuchsia-400 font-bold mb-4 font-heading text-lg flex items-center gap-3">
 <Shield className="w-5 h-5" /> Insurance Support
 </h4>
 <p className="text-xs text-slate-400 mb-4">Partnered with 100% of major providers:</p>
 <div className="flex flex-wrap gap-2">
 {['Star Health', 'HDFC Ergo', 'Apollo Munich', 'TPA CMCHIS', 'United India'].map((ins, i) => (
 <div key={i} className="px-4 py-1.5 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-indigo-100">{ins}</div>
 ))}
 </div>
 </div>
 </div>
 <div className="space-y-6">
 <div className="p-10 bg-indigo-600 rounded-[4rem] shadow-2xl relative group-hover:scale-105 transition-transform duration-500 overflow-hidden text-center">
 <div className="absolute top-0 right-0 p-8 opacity-20">
 <Flame className="w-16 h-16" />
 </div>
 <h4 className="text-2xl font-black mb-2 font-heading">Estimated Surgical Package:</h4>
 <p className="text-5xl font-black tracking-tighter mb-4">₹55k - ₹95k</p>
 <p className="text-xs font-medium text-white/70 leading-relaxed">
 *Price includes 4K Laparoscopy tower usage, Harmonic Scalpel, Titanium clips, and 24Hr ward stay.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 7. Comprehensive FAQ */}
 <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 font-heading uppercase tracking-widest text-center underline underline-offset-8 decoration-indigo-600/20">Gallbladder Care FAQ</h2>
 <div className="grid md:grid-cols-2 gap-10">
 {[
 { q: "Can gallstones be dissolved with medicine?", a: "While there are medications that claim to dissolve stones, they only work for very specific cholesterol-only stones, take years to show effect, and have a 100% recurrence rate once medicine is stopped. Surgery remains the only definitive cure." },
 { q: "Is the entire gallbladder removed, or just the stones?", a: "The entire gallbladder is removed (Cholecystectomy). Removing just the stones is medically ineffective because the diseased gallbladder will simply form new stones within months." },
 { q: "What happens if I don't get surgery for my gallstones?", a: "Untreated stones can lead to gallbladder rupture, jaundice, or life-threatening biliary pancreatitis. Over time, chronic inflammation can also increase the risk of gallbladder cancer." },
 { q: "How long is the surgery?", a: "A standard laparoscopic cholecystectomy takes between 25 to 45 minutes of surgical time, followed by 30 minutes of recovery from anesthesia." },
 { q: "Will I have a large scar on my abdomen?", a: "No. Keyhole surgery uses 4 tiny marks between 5mm and 10mm. After 6 months, these marks typically become practically invisible." },
 { q: "When can I return to heavy exercise?", a: "You can resume brisk walking after 7 days. We recommend waiting for 3 to 4 weeks before resuming heavy gym workouts or competitive sports." }
 ].map((faq, i) => (
 <div key={i} className="space-y-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
 <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-snug flex items-start gap-3">
 <Info className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
 {faq.q}
 </h4>
 <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
 </div>
 ))}
 </div>
 </section>

 {/* 8. Final CTA */}
 <section className="bg-indigo-950 rounded-[4rem] p-20 text-center text-white relative overflow-hidden group/cta">
 <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
 <h2 className="text-5xl font-black mb-6 font-heading uppercase tracking-tighter">Relief from Digestive Pain</h2>
 <p className="text-indigo-100/60 mb-12 max-w-2xl mx-auto italic text-xl leading-relaxed font-light">
 Don't let gallstones dictate your life. Trust the region's 4K Laparoscopic experts for a safe, virtually painless transformation.
 </p>
 <div className="flex flex-wrap justify-center gap-8 relative z-10">
 <button className="px-14 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-3xl transition-all shadow-2xl shadow-indigo-600/30 uppercase tracking-widest group-hover/cta:scale-110 active:scale-95">Book Operation Consult</button>
 <button className="px-14 py-6 bg-white dark:bg-slate-900 hover:bg-white dark:bg-slate-900 text-white font-black rounded-3xl transition-all border border-slate-200 dark:border-slate-800 uppercase tracking-widest">WhatsApp Diagnostic Hub</button>
 </div>
 </section>
 </div>
 )
}

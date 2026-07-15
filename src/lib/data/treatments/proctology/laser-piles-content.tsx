import React from 'react'
import { CheckCircle2, Info, Star, Shield, Zap, Clock, ShieldCheck, MapPin, IndianRupee } from 'lucide-react'

export const LaserPilesLongForm = () => {
 return (
 <div className="space-y-12">
 {/* Section 1: Comprehensive Introduction */}
 <section id="introduction">
 <h2 className="text-3xl font-bold text-slate-900 mb-6">Introduction to Advanced Piles Treatment in Vellore</h2>
 <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
 <p>
 Are you struggling with persistent discomfort, rectal bleeding, or painful lumps? If so, you are not alone. Hemorrhoids, commonly known as <strong>Piles</strong> (or <span>Moolam</span> in Tamil), affect nearly 50% of the population at some point in their lives. In Vellore, Tamil Nadu, we have seen a significant rise in these cases due to changing lifestyles, sedentary work cultures, and dietary shifts.
 </p>
 <p>
 At <strong>Indira Super Speciality Hospital, Vellore</strong>, we understand the physical and emotional toll that chronic piles can take. Under the leadership of <strong>Dr. Karan Shankar</strong>, a pioneer in minimally invasive proctology, we offer the region's most advanced <strong>Laser Piles Treatment</strong>. This modern approach is designed to provide long-term relief with minimal pain, zero blood loss, and a rapid return to your daily routine.
 </p>
 <p>
 This ultimate guide is crafted to help you understand your condition, evaluate your options, and discover why laser surgery is the global gold standard for treating Grade 2, 3, and 4 hemorrhoids.
 </p>
 </div>
 </section>

 {/* Section 2: What are Piles? Deep Anatomy */}
 <section id="what-are-piles">
 <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Piles: What Happens Internally?</h2>
 <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
 <p>
 Piles are essentially swollen and inflamed veins in the lower rectum and anus. They are similar to varicose veins. When the walls of these blood vessels stretch and become thin, they bulge and get irritated, especially during bowel movements.
 </p>
 <h3 className="text-xl font-bold text-slate-800 mt-6">Types and Grades of Piles</h3>
 <p>
 Clinical grading is crucial for determining the right treatment protocol. At Indira Hospital, our specialists categorize hemorrhoids into four distinct grades:
 </p>
 <ul className="space-y-4 list-none">
 <li className="flex gap-3">
 <span className="h-6 w-6 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 font-bold shrink-0 text-sm">1</span>
 <div>
 <strong>Grade 1 (Mild):</strong> These are small inflammations inside the anus. They are not visible and usually don't cause significant pain, though occasional bleeding may occur.
 </div>
 </li>
 <li className="flex gap-3">
 <span className="h-6 w-6 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 font-bold shrink-0 text-sm">2</span>
 <div>
 <strong>Grade 2 (Moderate):</strong> These piles protrude outside the anus during a bowel movement but retract on their own afterward.
 </div>
 </li>
 <li className="flex gap-3">
 <span className="h-6 w-6 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 font-bold shrink-0 text-sm">3</span>
 <div>
 <strong>Grade 3 (Severe):</strong> These often protrude and do not retract automatically. The patient may need to push them back in manually.
 </div>
 </li>
 <li className="flex gap-3">
 <span className="h-6 w-6 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 font-bold shrink-0 text-sm">4</span>
 <div>
 <strong>Grade 4 (Very Severe):</strong> These stay outside the anus permanently and cannot be pushed back in. They are often very painful and require immediate surgical intervention.
 </div>
 </li>
 </ul>
 </div>
 </section>

 {/* Section 3: Symptoms & Early Warning Signs */}
 <section id="symptoms">
 <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Common Symptoms: Recognizing the Signs Early</h2>
 <p className="text-lg text-slate-600 mb-6">
 Symptoms can vary depending on whether you have internal or external piles. In Vellore, many patients ignore these signs until they reach Grade 3 or 4. Early detection can often lead to simpler, non-surgical management.
 </p>
 <div className="grid md:grid-cols-2 gap-6">
 {[
 { title: "Painless Bleeding", desc: "Bright red blood on the toilet tissue or in the toilet bowl after a bowel movement." },
 { title: "Anal Itching", desc: "Persistent irritation or itching in your anal region (Pruritus ani)." },
 { title: "Pain or Discomfort", desc: "A dull ache or sharp pain, particularly severe in external or thrombosed piles." },
 { title: "Lumps Near Anus", desc: "A sensitive or painful lump near your anus, which may be a thrombosed hemorrhoid." },
 { title: "Incomplete Evacuation", desc: "A feeling that your bowels are still full even after finishing a bowel movement." },
 { title: "Mucus Discharge", desc: "Leakage of mucus, which can lead to skin irritation around the anus." }
 ].map((symptom, i) => (
 <div key={i} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
 <Info className="w-6 h-6 text-fuchsia-500 shrink-0 mt-1" />
 <div>
 <h4 className="font-bold text-slate-900">{symptom.title}</h4>
 <p className="text-sm text-slate-500 leading-relaxed">{symptom.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Section 4: Causes & Risk Factors localized for South India */}
 <section id="causes">
 <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Do Piles Occur? Causes and Risk Factors</h2>
 <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
 <p>
 The primary cause of piles is increased pressure on the lower rectum. This can happen due to several factors common in our South Indian lifestyle in Vellore:
 </p>
 <ul className="space-y-3">
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
 <span><strong>Low Fiber Diet:</strong> A diet heavy on polished white rice and lacking in greens, fruits, and whole grains can lead to constipation, the #1 trigger for piles.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
 <span><strong>Chronic Constipation or Diarrhea:</strong> Straining during bowel movements puts immense pressure on the anal canal veins.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
 <span><strong>Sedentary Lifestyle:</strong> Long hours of sitting, common among Vellore's IT and office professionals, reduces pelvic blood flow.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
 <span><strong>Obesity:</strong> Carrying excess weight puts additional strain on the pelvic region.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
 <span><strong>Pregnancy:</strong> The pressure of the growing fetus, coupled with hormonal changes, often leads to temporary or permanent hemorrhoids in expectant mothers.</span>
 </li>
 </ul>
 </div>
 </section>

 {/* Section 5: Why Laser? Comparison Section */}
 <section id="laser-vs-traditional" className="bg-slate-900 rounded-[3rem] p-12 text-white">
 <h2 className="text-3xl font-bold mb-8 text-center font-heading">Laser vs. Traditional Surgery: The Scientific Choice</h2>
 <div className="grid md:grid-cols-2 gap-8">
 <div className="space-y-6">
 <h3 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 text-fuchsia-300">Traditional Open Surgery</h3>
 <ul className="space-y-4">
 <li className="flex gap-3 text-white/70">
 <span className="text-red-400 font-bold">✕</span> Large incisions and painful stitches.
 </li>
 <li className="flex gap-3 text-white/70">
 <span className="text-red-400 font-bold">✕</span> Significant bleeding and hospital stay (3-5 days).
 </li>
 <li className="flex gap-3 text-white/70">
 <span className="text-red-400 font-bold">✕</span> High risk of infection and slow wound healing.
 </li>
 <li className="flex gap-3 text-white/70">
 <span className="text-red-400 font-bold">✕</span> Intense post-operative pain requiring heavy analgesics.
 </li>
 </ul>
 </div>
 <div className="space-y-6">
 <h3 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 text-emerald-400">Elite 1470nm Laser Surgery</h3>
 <ul className="space-y-4">
 <li className="flex gap-3 text-white/90">
 <span className="text-emerald-400 font-bold">✓</span> No cuts, no blood, and no permanent scars.
 </li>
 <li className="flex gap-3 text-white/90">
 <span className="text-emerald-400 font-bold">✓</span> Same-day discharge (4-6 hours hospital stay).
 </li>
 <li className="flex gap-3 text-white/90">
 <span className="text-emerald-400 font-bold">✓</span> Virtually painless with microscopic precision.
 </li>
 <li className="flex gap-3 text-white/90">
 <span className="text-emerald-400 font-bold">✓</span> Return to work within 48 hours.
 </li>
 </ul>
 </div>
 </div>
 </section>

 {/* Section 6: The Procedure Experience at Indira Hospital */}
 <section id="the-procedure">
 <h2 className="text-3xl font-bold text-slate-900 mb-6">The Laser Procedure: What to Expect?</h2>
 <div className="space-y-8">
 <div className="flex gap-6 items-start">
 <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">01</div>
 <div>
 <h4 className="text-xl font-bold text-slate-800 mb-2">Pre-Operative Consultation</h4>
 <p className="text-slate-600">Our proctology team conducts a thorough examination, including Video Anoscopy, to map the hemorrhoidal piles and plan the laser fiber entry points with high precision.</p>
 </div>
 </div>
 <div className="flex gap-6 items-start">
 <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">02</div>
 <div>
 <h4 className="text-xl font-bold text-slate-800 mb-2">Laser Hemorrhoidopexy (LHP)</h4>
 <p className="text-slate-600">Under conscious sedation, a fine laser fiber (1470nm) is inserted into the hemorrhoidal mass. The energy causes the tissue to shrink and seals the blood vessels from within. No tissue is cut away.</p>
 </div>
 </div>
 <div className="flex gap-6 items-start">
 <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">03</div>
 <div>
 <h4 className="text-xl font-bold text-slate-800 mb-2">Short Recovery & Discharge</h4>
 <p className="text-slate-600">The patient is moved to our premium recovery suite. Since there are no wounds, the recovery is instantaneous. Most patients walk out and return home by evening.</p>
 </div>
 </div>
 </div>
 </section>

 {/* Section 7: Cost Analysis in Vellore */}
 <section id="cost" className="bg-fuchsia-50 rounded-[3rem] p-12 border border-fuchsia-100">
 <div className="max-w-3xl mx-auto text-center space-y-6">
 <h2 className="text-3xl font-bold text-slate-900">Cost of Laser Piles Surgery in Vellore</h2>
 <p className="text-lg text-slate-600 leading-relaxed">
 At Indira Hospital, we believe in radical transparency. The cost for advanced laser treatment in Vellore typically ranges between <strong>₹40,000 to ₹60,000</strong> inclusive of the laser fiber, surgical fees, and daycare room.
 </p>
 <div className="grid sm:grid-cols-3 gap-4 pt-6">
 <div className="p-4 bg-white rounded-2xl shadow-sm border border-fuchsia-100">
 <span className="text-fuchsia-600 font-bold block mb-1">Insurance</span>
 <span className="text-sm text-slate-500">100% Cashless Support</span>
 </div>
 <div className="p-4 bg-white rounded-2xl shadow-sm border border-fuchsia-100">
 <span className="text-fuchsia-600 font-bold block mb-1">EMI Options</span>
 <span className="text-sm text-slate-500">No Cost Monthly Plans</span>
 </div>
 <div className="p-4 bg-white rounded-2xl shadow-sm border border-fuchsia-100">
 <span className="text-fuchsia-600 font-bold block mb-1">Global Tech</span>
 <span className="text-sm text-slate-500">Fixed Transparent Pricing</span>
 </div>
 </div>
 <p className="text-sm text-slate-400">Note: Final cost is determined after Dr. Karan Shankar evaluates the grade and complexity of the case.</p>
 </div>
 </section>

 {/* Section 8: Doctors & E-E-A-T */}
 <section id="our-experts">
 <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-8 border-fuchsia-600 pl-6 underline decoration-fuchsia-100">Our Surgical Leadership: Dr. Karan Shankar</h2>
 <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-[3rem] shadow-soft border border-slate-50">
 <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-lg bg-slate-200">
 {/* Placeholder for Dr. Karan Shankar Image */}
 <div className="w-full h-full bg-gradient-to-br from-fuchsia-100 to-slate-200" />
 </div>
 <div className="flex-1 space-y-4 text-center md:text-left">
 <h3 className="text-2xl font-bold text-slate-900">Dr. Karan Shankar, MS, FISCP</h3>
 <p className="text-lg text-fuchsia-600 font-semibold">Senior Consultant Proctologist & General Surgeon</p>
 <p className="text-slate-600 leading-relaxed">
 With over 15 years of surgical excellence and thousands of successful laser proctology procedures, Dr. Karan Shankar is recognized as Vellore's leading specialist in colorectal health. His patient-first approach and mastery of the 1470nm laser protocol ensure the highest success rates and zero patient trauma.
 </p>
 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
 <span className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-bold rounded-full border border-slate-200 flex items-center gap-2">
 <ShieldCheck className="w-4 h-4 text-emerald-500" />
 NABH Accredited
 </span>
 <span className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-bold rounded-full border border-slate-200 flex items-center gap-2">
 <Star className="w-4 h-4 text-yellow-500" />
 3000+ Surgeries
 </span>
 </div>
 </div>
 </div>
 </section>

 {/* Section 9: Extensive FAQs (Schema Ready Content) */}
 <section id="faqs" className="pt-12 border-t border-slate-100">
 <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
 <Clock className="w-8 h-8 text-fuchsia-600" />
 Everything You Need to Know (FAQs)
 </h2>
 <div className="space-y-6">
 {[
 { q: "Is Piles treatment covered under insurance in Vellore?", a: "Yes, laser piles surgery is a medical necessity and is covered by major health insurance companies like Star Health, HDFC Ergo, ICICI Lombard, and government health schemes. Our Vellore center provides full assistance for cashless claims." },
 { q: "How long does the recovery take after laser piles surgery?", a: "Recovery is remarkably fast. Most patients can walk comfortably 4 hours after surgery and return to desk-based professional work within 24 to 48 hours." },
 { q: "What is the Tamil name for Piles and Fissure?", a: "Piles is commonly referred to as 'Moolam' (மூலம்), while Anal Fissure is called 'Aasanavaai Vedippu' (ஆசனவாய் வெடிப்பு). Anal Fistula is known as 'Pauthiram' (பெளத்திரம்) in Tamil." },
 { q: "Will I need to take bed rest after the procedure?", a: "No. Unlike traditional surgery that requires 2-3 weeks of bed rest, laser surgery at Indira Hospital is a daycare procedure. We encourage light walking the same evening." },
 { q: "Are there any side effects of laser treatment for piles?", a: "Laser treatment has the lowest risk profile of any surgical method. Temporary discomfort or minor discharge is possible, but severe complications like incontinence or recurring infection are almost zero." },
 { q: "Can piles return after laser surgery?", a: "When performed by experts like Dr. Karan Shankar, the recurrence rate is less than 1%. However, patients must maintain a high-fiber diet to ensure long-term gut health." }
 ].map((faq, index) => (
 <div key={index} className="space-y-2">
 <h4 className="text-lg font-bold text-slate-900 flex gap-2">
 <span className="text-fuchsia-600">Q.</span> {faq.q}
 </h4>
 <p className="text-slate-600 pl-6">{faq.a}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Section 10: Final Clinical Summary */}
 <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
 <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
 <Shield className="w-6 h-6 text-fuchsia-600" />
 Health Disclaimer
 </h3>
 <p className="text-sm text-slate-500 leading-relaxed">
 The content on this page is for informational purposes only and should not replace professional medical advice from a qualified proctologist. Every patient's case is unique; please consult with Dr. Karan Shankar at Indira Super Speciality Hospital, Vellore, for a personalized diagnosis and treatment plan tailored to your condition. 
 </p>
 <div className="mt-8 flex justify-center">
 <p className="text-xs text-slate-400">Copyright © 2026 Indira Super Speciality Hospital, Vellore. All Rights Reserved.</p>
 </div>
 </section>
 </div>
 )
}

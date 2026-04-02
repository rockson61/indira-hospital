import React from 'react'
import { 
    Activity, 
    Clock, 
    CheckCircle2, 
    HeartPulse, 
    Microscope, 
    Info, 
    AlertOctagon,
    Shield,
    Ribbon,
    Stethoscope,
    Users
} from 'lucide-react'

export const BreastLongForm = () => {
    return (
        <div className="breast-longform-content space-y-16 py-8">
            {/* 1. Executive Summary */}
            <section className="executive-summary">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-heading italic underline decoration-pink-600/20 underline-offset-8">
                    The Ultimate Guide to Breast Surgery & Oncology in Vellore
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        Discovering a breast lump is an incredibly anxious experience. However, it is vital to remember that <strong>80% of all breast lumps are entirely benign (non-cancerous)</strong>. Whether dealing with a simple fibroadenoma or a complex breast malignancy, prompt, compassionate, and precise surgical care is critical to your physical and psychological recovery.
                    </p>
                    <p className="mt-6">
                        At <strong>Indira Super Speciality Hospital, Vellore</strong>, our dedicated Breast Surgery & Oncology department offers comprehensive diagnostics and surgical solutions. We focus on <strong>Breast Conservation Surgery (BCS)</strong> and advanced oncoplastic techniques, prioritizing both oncological safety and cosmetic outcomes. This 2000+ word clinical guide demystifies breast diseases, diagnostic protocols, and advanced surgical interventions.
                    </p>
                </div>
            </section>

            {/* 2. Understanding Breast Lumps & Pathologies */}
            <section className="bg-slate-50 dark:bg-slate-900/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 blur-[100px] -mr-32 -mt-32" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 font-heading">
                    <Info className="text-pink-600 w-10 h-10" />
                    Benign vs. Malignant: Decoding Breast Symptoms
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            A palpable lump is just one indicator. Understanding the clinical characteristics of different breast tissues helps in early triage.
                        </p>
                        <h4 className="font-bold text-pink-900 dark:text-pink-300 mt-6 font-heading text-xl uppercase italic">Common Benign Conditions:</h4>
                        <div className="space-y-4">
                            {[
                                { t: 'Fibroadenoma', d: 'Common in young women (15-35). Firm, smooth, rubbery, and highly mobile lumps (often called "breast mice").' },
                                { t: 'Fibrocystic Changes', d: 'Lumpy, tender breasts that fluctuate with menstrual cycles. Often bilateral (in both breasts).' },
                                { t: 'Breast Cysts', d: 'Fluid-filled sacs that can feel soft or firm. Common in women aged 35-50.' },
                                { t: 'Mastitis / Abscess', d: 'Painful, red, and swollen breast tissue, most common in lactating mothers due to bacterial infection.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:border-pink-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-slate-900 m-0 text-sm">{item.t}</p>
                                        <p className="text-xs text-slate-500 m-0 italic">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-pink-950 p-10 rounded-[4rem] border border-white/10 text-white relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <AlertOctagon className="w-24 h-24 text-pink-400" />
                        </div>
                        <h4 className="font-black text-pink-400 mb-6 font-heading uppercase tracking-tighter">Red Flag Warning Signs</h4>
                        <p className="text-sm text-slate-400 leading-relaxed italic mb-8">
                            While benign lumps are common, certain signs warrant an immediate oncology consultation to rule out malignancy (breast cancer).
                        </p>
                        <div className="space-y-4 relative z-10">
                            {[
                                "A hard lump that is fixed to the skin or chest wall",
                                "Skin dimpling or puckering (like an orange peel)",
                                "Nipple retraction (turning inward) or bloody discharge",
                                "Swollen lymph nodes under the armpit (Axilla)"
                            ].map((warn, i) => (
                                <div key={i} className="flex items-start gap-3 font-bold text-xs uppercase tracking-widest text-pink-100/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 mt-1" /> {warn}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Triple Assessment Protocol */}
            <section className="bg-white dark:bg-slate-900 rounded-[4rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 font-heading italic uppercase tracking-widest text-center">The Gold Standard: Triple Assessment</h2>
                <p className="text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 italic">
                    To ensure 100% diagnostic accuracy before any surgical intervention, we strictly follow the global "Triple Assessment" protocol for every breast lump.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                     {[
                        { title: "Clinical Examination", desc: "Detailed physical exam by our surgical oncologist to assess lump size, texture, mobility, and lymph node involvement.", icon: <Stethoscope /> },
                        { title: "Radiological Imaging", desc: "High-Resolution Sonomammography (Ultrasound) for women under 40, and Digital Mammography for women over 40.", icon: <Activity /> },
                        { title: "Pathological Biopsy", desc: "Core Needle Biopsy (CNB) or FNAC provides a definitive tissue diagnosis confirming benign or malignant status.", icon: <Microscope /> }
                     ].map((item, i) => (
                        <div key={i} className="p-10 border border-slate-100 dark:border-slate-800 bg-pink-50 dark:bg-slate-950 rounded-[3rem] text-center hover:shadow-2xl transition-all group">
                            <div className="w-16 h-16 rounded-3xl bg-white dark:bg-pink-950/30 text-pink-600 shadow-sm flex items-center justify-center mb-10 mx-auto group-hover:rotate-12 transition-transform">
                                {item.icon}
                            </div>
                            <h5 className="font-black text-slate-900 dark:text-white mb-3 font-heading uppercase tracking-tight italic">{item.title}</h5>
                            <p className="text-xs text-slate-500 leading-relaxed italic opacity-80">{item.desc}</p>
                        </div>
                     ))}
                </div>
            </section>

            {/* 4. Surgical Interventions: From Lumpectomy to Mastectomy */}
            <section className="tech-advantage bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-4xl relative z-10 mx-auto text-center">
                    <h2 className="text-4xl font-black mb-10 text-pink-400 font-heading italic uppercase tracking-tighter shrink-0">Advanced Surgical Oncology</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold font-heading italic text-pink-100 uppercase italic">Oncoplastic Breast Conservation</h4>
                            <p className="text-slate-400 leading-relaxed italic text-sm">
                                Historically, breast cancer meant losing the entire breast. Today, our primary approach is <strong>Breast Conservation Surgery (BCS) / Lumpectomy</strong> combined with Oncoplastic remodeling. We safely remove the tumor with wide negative margins while reshaping the remaining tissue to maintain cosmetic symmetry and volume.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] shadow-inner">
                                <h5 className="text-pink-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Surgical Excellence:</h5>
                                <ul className="space-y-3 text-xs font-bold italic text-white/70">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Sentinel Lymph Node Biopsy (SLNB)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Modified Radical Mastectomy (MRM) when indicated</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Hidden / Periareolar incisions for benign lumps</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Frozen Section analysis during surgery</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 flex flex-col justify-center group/card">
                             <h4 className="text-pink-400 font-bold mb-4 font-heading text-xl uppercase italic underline decoration-white/10 underline-offset-8 text-center shrink-0">Benign Lump Excision (Fibroadenoma)</h4>
                             <p className="text-slate-400 text-xs leading-relaxed mb-8 italic text-center">
                                For non-cancerous lumps like fibroadenomas, we utilize cosmetic micro-incisions usually placed along the areola border (peri-areolar) or in the infra-mammary fold. This ensures the tumor is completely excised while leaving virtually zero visible scarring.
                             </p>
                             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                 <div className="w-[99.5%] h-full bg-pink-500 shadow-[0_0_15px_#db2777]" />
                             </div>
                             <p className="text-[10px] text-slate-500 mt-2 uppercase font-black tracking-widest text-right italic leading-tight">Cosmetic Preservation Goal</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Pricing & Insurance Transparency */}
            <section className="pricing-transparency">
                <div className="bg-slate-950 p-16 rounded-[5rem] text-white relative overflow-hidden group">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-pink-400 font-heading italic uppercase tracking-tighter m-0">Economic Transparency</h2>
                            <p className="text-slate-400 leading-relaxed italic">
                                We believe expert breast care should be accessible. We offer fixed-package pricing for both benign excisions and oncological surgeries.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem]">
                                <h4 className="text-pink-400 font-bold mb-4 font-heading text-lg flex items-center gap-3">
                                    <Shield className="w-5 h-5" /> Insurance Support
                                </h4>
                                <p className="text-xs text-slate-400 italic mb-4">Empanelled with major corporate and government schemas:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Star Health', 'TN CMCHIS', 'HDFC Ergo', 'Apollo Munich', 'United India'].map((ins, i) => (
                                        <div key={i} className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-pink-100">{ins}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-10 bg-pink-600 rounded-[4rem] shadow-2xl relative group-hover:scale-105 transition-transform duration-500 overflow-hidden text-center">
                                <div className="absolute top-0 right-0 p-8 opacity-20">
                                    <Ribbon className="w-16 h-16" />
                                </div>
                                <h4 className="text-2xl font-black mb-2 font-heading italic">Benign Excision Package:</h4>
                                <p className="text-5xl font-black tracking-tighter mb-4 italic">₹25k - ₹40k</p>
                                <p className="text-xs font-medium text-white/70 leading-relaxed italic">
                                    *Price estimate for Fibroadenoma removal for self-paying patients. Oncology (Cancer) surgery pricing depends on staging and node clearance required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Comprehensive FAQ */}
            <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 font-heading italic uppercase tracking-widest text-center underline underline-offset-8 decoration-pink-600/20">Breast Surgery FAQ</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        { q: "Is a biopsy painful?", a: "A Core Needle Biopsy is performed under local anesthesia. You will feel a small pinch from the numbing injection, and perhaps some pressure during the procedure, but it is not painful." },
                        { q: "Will a biopsy spread cancer cells?", a: "This is a common but dangerous myth. Decades of clinical evidence prove that a needle biopsy does NOT cause cancer cells to spread. It is a mandatory step for safe diagnosis." },
                        { q: "Do all fibroadenomas need to be removed?", a: "No. Small, asymptomatic fibroadenomas under 2cm can often just be observed with annual ultrasounds. Surgery is indicated if they grow rapidly, cause pain, or create cosmetic deformity." },
                        { q: "How long is the recovery from a lumpectomy?", a: "Most patients go home the same day or next day. You can return to light activities within 3-5 days. A protective bra must be worn, and heavy lifting avoided for 2-3 weeks." },
                        { q: "What is a Sentinel Lymph Node Biopsy (SLNB)?", a: "Instead of removing all underarm lymph nodes (which causes arm swelling/lymphedema), SLNB identifies and removes only the first few 'guard' nodes to check if cancer has spread, preserving the rest." },
                        { q: "Can I breastfeed after benign lump surgery?", a: "Yes, in the vast majority of cases. Excision of a fibroadenoma or cyst uses techniques that preserve the main milk ducts, allowing for future breastfeeding." }
                    ].map((faq, i) => (
                        <div key={i} className="space-y-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-white italic text-lg leading-snug flex items-start gap-3">
                                <Info className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                                {faq.q}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="bg-pink-950 rounded-[4rem] p-20 text-center text-white relative overflow-hidden group/cta">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] animate-pulse" />
                <h2 className="text-5xl font-black mb-6 font-heading italic uppercase tracking-tighter shrink-0 italic underline decoration-pink-600/10">Compassionate, Expert Care</h2>
                <p className="text-pink-100/60 mb-12 max-w-2xl mx-auto italic text-xl leading-relaxed font-light italic">
                    Facing a breast diagnosis is difficult, but you are not alone. Let our surgical oncology team guide you with clarity, precision, and cosmetic preservation.
                </p>
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    <button className="px-14 py-6 bg-pink-600 hover:bg-pink-700 text-white font-black rounded-3xl transition-all shadow-2xl shadow-pink-600/30 uppercase tracking-widest italic group-hover/cta:scale-110 active:scale-95">Book Priority Consult</button>
                    <button className="px-14 py-6 bg-white/10 hover:bg-white/20 text-white font-black rounded-3xl transition-all border border-white/10 uppercase tracking-widest italic">WhatsApp Diagnostic Reports</button>
                </div>
            </section>
        </div>
    )
}

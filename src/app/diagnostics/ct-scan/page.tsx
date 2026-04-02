'use client'

import React from 'react'
import { DiagnosticTemplate } from '@/components/healthcare/DiagnosticTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Activity,
    CheckCircle2,
    Search,
    History,
    Flame,
    Target,
    ArrowRightCircle,
    Microscope,
    Radiation,
    Navigation,
    ThermometerSnowflake,
    PlayCircle,
    Eye,
    MapPin,
    UserCheck,
    Dna,
    Layers,
    Waves,
    Users,
    Users2,
    Stethoscope,
    HeartPulse,
    Sparkles,
    Wind,
    Star,
    Monitor,
    ZapOff,
    Camera
} from 'lucide-react'

export default function CTScanPage() {
    return (
        <DiagnosticTemplate
            title="Elite 128-Slice MDCT Scan"
            slug="ct-scan"
            category="Radiology & Advanced Imaging"
            description={
                <>
                    <p>
                        Computed Tomography (CT) is the cornerstone of rapid medical diagnostics, particularly for trauma, oncology, and cardiac assessment. At Indira Super Speciality Hospital, we utilize an **Elite 128-Slice Multi-Detector CT (MDCT)**. This high-speed system captures thousands of fine-sliced images in seconds, allowing for microscopic 3D reconstruction and ultra-fast diagnosis with the lowest possible radiation dose (AIDR technology).
                    </p>
                    <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold italic border-l-4 border-blue-500 pl-4 uppercase tracking-tighter">
                        "128-Slice Precision: Rapid diagnostic clarity, minimized radiation."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Technology', value: '128-Slice MDCT', icon: Camera },
                { label: 'Safety', value: 'Low-Dose AIDR', icon: Shield },
                { label: 'Report Time', value: '6-12 Hours', icon: Clock },
                { label: 'Vellore Hub', value: 'Indira', icon: MapPin }
            ]}
            reportTime="6-12 Hours"
            homeCollection={false}
            fastingRequired={false}
            price="Elite Standard"
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: 128-Slice Rapid Multi-Detector */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-blue-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: 128-Slice Volumetric Imaging
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    Traditional single-slice or 16-slice CT scanners capture images slowly, which can lead to blurring from breathing or heart movement. This often requires patients to hold their breath for extended periods, which is difficult for elderly or trauma patients.
                                </p>
                                <p className="mt-4">
                                    Our **Elite 128-Slice CT** captures a massive volume of data in a single rotation. A full chest scan, for example, takes fewer than 5 seconds. This speed allows us to freeze the motion of the heart for **CT Coronary Angiographies** and capture crystal-clear images of small lung nodules. Most importantly, our system uses **AIDR (Adaptive Iterative Dose Reduction)**, which automatically analyzes the patient's body habitus to deliver the absolute minimum radiation dose required for a diagnostic-grade image.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-blue-600" />
                                        <span><strong>3D Post-Processing</strong>: Creating holographic-like reconstructions of bones and blood vessels for surgeons.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-blue-600" />
                                        <span><strong>Low-Dose Chest CT (LDCT)</strong>: Specialized screening for early lung cancer with radiation levels comparable to an X-ray.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-xl flex flex-col justify-center">
                                <Radiation className="w-16 h-16 text-blue-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">Clinical Precision Benchmarks</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="text-sm"><strong>Sub-Millimeter Slices</strong>: 0.5mm resolution for identifying tiny vascular strictures.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="text-sm"><strong>Zero-Motion Blur</strong>: High temporal resolution for cardiac imaging.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Radiation Safety Optimized
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diagnostic Spectrum Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-heading text-blue-300 uppercase tracking-widest leading-none">Specialized CT Protocols</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "CT Coronary Angio", desc: "Non-invasive assessment of heart blockages without hospitalization.", icon: HeartPulse },
                                { title: "Trauma Whole-Body", desc: "Rapid internal injury screening in under 10 seconds for emergencies.", icon: Zap },
                                { title: "CT Oncology mapping", desc: "Precise staging and treatment monitoring for malignant conditions.", icon: Microscope },
                                { title: "3D Bone Reconstruction", desc: "Visualizing complex fractures and joint deformities for orthopedic pre-planning.", icon: Layers }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-blue-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Preparing for Your CT Section */}
                    <section className="text-left">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter uppercase uppercase uppercase">Preparing for Your Elite CT Scan</h3>
                            <p className="text-slate-600 dark:text-slate-400">Ensuring safety and crystal-clear diagnostic quality.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Contrast Safety Hub", desc: "For 'Enhanced CT' scans, we require a Serum Creatinine test (within 15 days) to ensure your kidneys can safely process the dye." },
                                { title: "Fasting Benchmark", desc: "For Abdominal or Contrast scans, 4-6 hours of fasting is generally required to ensure internal visualization is clear." },
                                { title: "Allergy Audit", desc: "Please inform our radiographers if you have a known allergy to iodine or shellfish, or if you have asthma." }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-blue-500">
                                    <h4 className="font-heading text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-blue-500" />
                            Elite Clinical FAQs: 128-Slice CT Scan
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Is a 128-Slice CT Scan better than standard CT?",
                                    a: "Yes. The more slices a scanner has, the faster it can scan, resulting in significantly higher resolution and much lower motion blur. It is especially superior for cardiac, lung, and abdominal imaging where organ movement is constant."
                                },
                                {
                                    q: "Should I be worried about radiation in a CT scan?",
                                    a: "While CT uses X-rays, modern 128-slice machines at Indira are equipped with AIDR (dose-reduction) software. This automatically minimizes radiation exposure by up to 75% compared to older systems, ensuring you receive only the medically necessary dose."
                                },
                                {
                                    q: "What does the 'Contrast Dye' feel like?",
                                    a: "During the injection, it is common to feel a brief warm sensation or a metallic taste in the mouth. This is completely normal and fades within minutes. We suggest drinking plenty of water after the scan to help your kidneys flush the dye."
                                },
                                {
                                    q: "Can I have a CT scan if I'm pregnant?",
                                    a: "Generally, no, as radiation can affect fetal development. We suggest alternatives like MRI or Ultrasound for pregnant women. However, in life-threatening emergencies, we use specialized 'Lead Shields' to protect the abdomen if a CT is absolutely necessary."
                                },
                                {
                                    q: "What is a 'CT Coronary Angiogram'?",
                                    a: "It is a highly specialized test that uses contrast and high-speed CT imaging to see the arteries of the heart. It is a non-invasive way to check for blockages without needing a catheter or hospital stay."
                                },
                                {
                                    q: "How long after the scan will I get my report?",
                                    a: "At Indira Super Speciality Hospital, we provide 'Rapid Reporting.' For emergencies, results can be ready within 2 hours. For routine scans, final verified reports are usually uploaded within 6-12 hours."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2 italic">
                                        <Zap className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            }
        />
    )
}

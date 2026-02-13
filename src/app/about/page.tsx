import { SectionContainer } from "@/components/ui/section-container"
import { Users, Target, Award, Building2 } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen pb-20">
            {/* Hero */}
            <div className="bg-teal-900 text-white py-24">
                <SectionContainer>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Pioneering Healthcare Since 1988</h1>
                    <p className="text-xl text-teal-100 max-w-3xl">
                        Indira Super Speciality Hospital stands as a beacon of hope and healing in Vellore.
                        Founded with a vision to make world-class healthcare accessible to all.
                    </p>
                </SectionContainer>
            </div>

            {/* Mission & Vision */}
            <SectionContainer className="py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-2xl border shadow-sm">
                        <Target className="w-12 h-12 text-teal-600 mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To provide comprehensive, compassionate, and cost-effective healthcare services
                            comparable to international standards, ensuring patient safety and satisfaction.
                        </p>
                    </div>
                    <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
                        <Users className="w-12 h-12 text-teal-600 mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg text-teal-900 leading-relaxed">
                            To be the most trusted healthcare destination in Tamil Nadu, recognized for clinical excellence,
                            ethical practices, and patient-centric care.
                        </p>
                    </div>
                </div>
            </SectionContainer>

            {/* Leadership */}
            <div className="bg-slate-50 py-20">
                <SectionContainer>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
                        <p className="text-muted-foreground">
                            Guided by visionaries dedicated to medical excellence and community service.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Placeholder for Images */}
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold">Dr. C. Paskal</h3>
                            <p className="text-sm text-teal-600 font-medium mb-3">Chairman & Managing Director</p>
                            <p className="text-sm text-muted-foreground">
                                A visionary leader with over 40 years of experience in healthcare administration and patient care.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold">Dr. P. Indira</h3>
                            <p className="text-sm text-teal-600 font-medium mb-3">Medical Director</p>
                            <p className="text-sm text-muted-foreground">
                                Ensuring the highest standards of clinical governance and medical ethics across all departments.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold">Mr. P. John</h3>
                            <p className="text-sm text-teal-600 font-medium mb-3">Chief Operating Officer</p>
                            <p className="text-sm text-muted-foreground">
                                Driving operational efficiency and digital transformation for enhanced patient experience.
                            </p>
                        </div>
                    </div>
                </SectionContainer>
            </div>

            {/* Accreditations */}
            <SectionContainer className="py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-900 text-white p-12 rounded-3xl">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                            <Award className="w-8 h-8 text-yellow-400" />
                            Accredited & Certified
                        </h2>
                        <p className="text-blue-100 max-w-xl">
                            We adhere to the strictest quality standards to ensure your safety.
                            Recognized by National Accreditation Board for Hospitals & Healthcare Providers (NABH).
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg">NABH</div>
                        <div className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg">NABL</div>
                        <div className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg">ISO 9001</div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}

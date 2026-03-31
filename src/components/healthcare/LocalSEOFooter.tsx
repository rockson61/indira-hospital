import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { Shield, Zap, Search, Users, Activity, Heart, Star, Microscope, Stethoscope, Clock, MapPin } from 'lucide-react';

export function LocalSEOFooter() {
    return (
        <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
            
            <SectionContainer>
                <div className="max-w-7xl mx-auto">
                    {/* Header: Semantic H2 for Local SEO */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white font-primary italic border-l-4 border-fuchsia-600 pl-6 mb-6">
                            List of Top Doctors in Vellore
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                            Looking for trusted healthcare professionals in Vellore? <strong>Indira Super Speciality Hospital</strong> brings you a verified list of doctors in Vellore from various specialties to help you find the best care possible. Whether you're searching for General Physician Doctors in Vellore or Specialist Surgeons in Vellore, we’ve got you covered.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Column 1: Specialties & Practitioners */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Stethoscope className="text-fuchsia-600 w-5 h-5" />
                                    All Medical Specialties Covered
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Our platform features an exhaustive list of practitioners including <strong>Ayurvedic Doctors in Vellore</strong>, <strong>Homeopathic Doctors in Vellore</strong>, <strong>Dermatologists in Vellore</strong>, and <strong>Cardiologists in Vellore</strong>. You can also find <strong>Pediatricians in Vellore</strong>, <strong>Orthopaedic Doctors in Vellore</strong>, <strong>ENT Doctors in Vellore</strong>, <strong>Physiotherapists in Vellore</strong>, and more.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Activity className="text-fuchsia-600 w-5 h-5" />
                                    Popular Medical Searches Nearby
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Specialized treatments such as <strong>Diabetologist Doctors in Vellore</strong>, <strong>Dietitians in Vellore</strong>, <strong>Sexologist Doctors in Vellore</strong>, and <strong>Psychiatrists in Vellore</strong> are available for consultation both in person and via teleconsultation.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Aesthetics & 24/7 Support */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Star className="text-fuchsia-600 w-5 h-5" />
                                    Aesthetic & Wellness Experts
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Explore highly rated <strong>Cosmetic Surgeon Doctors in Vellore</strong>, <strong>Plastic Surgeons in Vellore</strong>, and <strong>Trichologist Doctors in Vellore</strong> for aesthetic and hair-related treatments. You can also connect with <strong>Urologist Doctors in Vellore</strong>, <strong>Oncologists in Vellore</strong>, and <strong>Neurosurgeons in Vellore</strong> for advanced and critical care.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Clock className="text-fuchsia-600 w-5 h-5" />
                                    24/7 & Home Visit Services
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Need help at home? Book a <strong>Physiotherapist For Home Visits in Vellore</strong> or get in touch with <strong>Doctors On Call in Vellore</strong> anytime. We also feature <strong>24 Hours Dentists in Vellore</strong>, <strong>24 Hours Veterinary Doctors in Vellore</strong>, and <strong>On Call Gynaecologist Doctors in Vellore</strong> for urgent medical needs.
                                </p>
                            </div>
                        </div>

                        {/* Column 3: Alternative & Specialty Categories */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Zap className="text-fuchsia-600 w-5 h-5" />
                                    Unique & Alternative Treatments
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    <strong>Chiropractic Doctors</strong>, <strong>Acupuncture Doctors</strong>, <strong>Unani Doctors</strong>, <strong>Hypnotherapists</strong>, <strong>Stem Cell Therapy Doctors</strong>, <strong>Drug De-addiction Centres</strong>, and <strong>Therapist Doctors</strong> in Vellore are listed to provide holistic wellness options.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Shield className="text-fuchsia-600 w-5 h-5" />
                                    Chronic Conditions & Advanced Care
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    From <strong>Asthma</strong>, <strong>Arthritis</strong>, and <strong>Thyroid</strong> to <strong>Migraine</strong>, <strong>Infertility</strong>, and <strong>Weight Loss</strong>, find specialists for all chronic health needs. Connect with <strong>Breast Specialists</strong>, <strong>Kidney Transplant Doctors</strong>, and <strong>Lasik Eye Surgery Doctors</strong> with ease.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Link Sheet: Semantic Tags */}
                    <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Specialist Medical Categories You Can Explore</h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            {[
                                "Neurologists in Vellore", "ENT Surgeon Doctors", "Paediatric Neurologists",
                                "Gastroenterologists", "Endocrinologists", "Speech Therapists",
                                "Psychologists", "Clinical Psychologists", "Clinical Nutritionists",
                                "Cardiac Surgeons", "Dermatosurgeons", "Hepatologists", "Nephrologists",
                                "Rheumatologists", "Somnologists", "Vascular Surgeons"
                            ].map((category, i) => (
                                <span key={i} className="hover:text-fuchsia-600 transition-colors cursor-default whitespace-nowrap">
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Branding CTA */}
                    <div className="mt-16 p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">Why Choose Indira Super Speciality Hospital?</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-300">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" /> Verified listings and updated contact details</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" /> Thousands of patient reviews and ratings</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" /> Book appointments or request call-backs</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" /> Emergency and 24/7 medical support</li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="text-4xl font-black italic opacity-20 select-none">TRUSTED CARE</div>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
}

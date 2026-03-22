"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { CheckCircle2, User, Calendar, ArrowRight, ArrowLeft, ShieldCheck, Award, Star } from "lucide-react";
import { HeartCardiogram } from "healthicons-react/outline";
import Link from "next/link";
import { submitAppointment } from "@/app/actions/appointment-actions";

export default function AppointmentBookingClient() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        department: "",
        doctor: "",
        date: "",
        notes: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Effect to handle specialty/doctor pre-population from URL
    useEffect(() => {
        const deptParam = searchParams.get("dept");
        const doctorParam = searchParams.get("doctor");

        if (deptParam) {
            // Find the department ID that matches the slug
            const matchedDept = departments.find(d => 
                d.id.toLowerCase() === deptParam.toLowerCase() || 
                d.name.toLowerCase().includes(deptParam.toLowerCase())
            );
            if (matchedDept) {
                setFormData(prev => ({ ...prev, department: matchedDept.id }));
            }
        }

        if (doctorParam) {
            const matchedDoctor = doctors.find(d => 
                d.id.toLowerCase() === doctorParam.toLowerCase() || 
                d.name.toLowerCase().includes(doctorParam.toLowerCase())
            );
            if (matchedDoctor) {
                setFormData(prev => ({ 
                    ...prev, 
                    doctor: matchedDoctor.id,
                    department: matchedDoctor.departmentId || prev.department 
                }));
            }
        }
    }, [searchParams]);

    // Form Validation
    const isStep1Valid = formData.name.trim() !== "" && formData.phone.length >= 10;
    const isStep2Valid = formData.department !== "" && formData.date !== "";

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const result = await submitAppointment(formData as any);
            if (result.success) {
                setIsSuccess(true);
            } else {
                setSubmitError(result.error || "Failed to book appointment.");
            }
        } catch (error) {
            setSubmitError("An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const availableDoctors = doctors.filter(d => d.departmentId === formData.department);

    if (isSuccess) {
        return (
            <div className="bg-slate-900/60 backdrop-blur-3xl p-10 sm:p-14 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden text-center group animate-in zoom-in-95 duration-500">
                <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 border border-emerald-500/20 shadow-2xl animate-bounce">
                        <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                    </div>
                    <h2 className="elite-section-title text-white mb-4">Elite Access Confirmed</h2>
                    <p className="text-xl text-slate-400 font-light mb-12 max-w-lg mx-auto leading-relaxed">
                        Precision secured. <span className="text-white font-medium">{formData.name}</span>, your clinical request is prioritized. Our Elite coordinator will contact you at <span className="text-white font-medium tracking-wider">{formData.phone}</span> to finalize your surgical pathway.
                    </p>
                    <Link
                        href="/"
                        className="group/btn relative flex items-center justify-center px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden w-full sm:w-auto"
                    >
                        <span className="relative z-10 uppercase tracking-widest text-sm">Return to Hub</span>
                        <ArrowRight className="w-5 h-5 ml-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative grid lg:grid-cols-12 gap-8 items-start">
            {/* Trust Sidebar - Elite Institutional Presence */}
            <div className="lg:col-span-4 space-y-6 hidden lg:block">
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Clinical Mastery</h4>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/5 text-slate-300 shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">NABH Accredited</p>
                                <p className="text-xs text-slate-400 leading-relaxed">Highest national standard in patient safety.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/5 text-slate-300 shrink-0">
                                <Award className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">35+ Years Legacy</p>
                                <p className="text-xs text-slate-400 leading-relaxed">Surgical excellence since 1989.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/5 text-slate-300 shrink-0">
                                <Star className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">Robotic Precision</p>
                                <p className="text-xs text-slate-400 leading-relaxed">Advanced AI-driven surgical platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="px-8 flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Patient" />
                            </div>
                        ))}
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Joined by 12,000+ Elite Patients</p>
                </div>
            </div>

            {/* Main Form Area */}
            <div className="lg:col-span-8 bg-slate-900/60 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-white/10 p-8 sm:p-12 relative overflow-hidden group/form">
                {/* Form Background Orbs matching Hero depth */}
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-slate-500/5 rounded-full blur-[80px] pointer-events-none" />

                {/* Glowing Premium Progress Tracker */}
                <div className="relative mb-14 max-w-sm mx-auto z-10">
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/5 -z-10 -translate-y-1/2 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-slate-400 to-white transition-all duration-1000 ease-out ${step === 2 ? 'w-full' : 'w-0'}`} />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-700 shadow-2xl ${step >= 1 ? 'bg-white text-slate-900 scale-110 shadow-white/20' : 'bg-slate-800 text-slate-500 border border-white/5'}`}>
                            1
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-700 shadow-2xl ${step >= 2 ? 'bg-white text-slate-900 scale-110 shadow-white/20' : 'bg-slate-800 text-slate-500 border border-white/5'}`}>
                            2
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${step >= 1 ? 'text-white' : 'text-slate-500'}`}>Identity</span>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${step >= 2 ? 'text-white' : 'text-slate-500'}`}>Clinical</span>
                    </div>
                </div>

                <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="relative z-10">
                    {step === 1 && (
                        <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-700">
                            <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-xl text-white"><User className="h-4 w-4" /></div>
                                    Patient Identity
                                </h3>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Legal Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            className="w-full h-16 px-6 rounded-2xl border border-white/5 bg-slate-950/50 focus:border-white/20 focus:ring-4 focus:ring-white/5 transition-all font-medium text-white shadow-inner outline-none placeholder:text-slate-700"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Contact Priority</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            className="w-full h-16 px-6 rounded-2xl border border-white/5 bg-slate-950/50 focus:border-white/20 focus:ring-4 focus:ring-white/5 transition-all font-medium text-white shadow-inner outline-none tracking-widest placeholder:text-slate-700"
                                            placeholder="+91 00000 00000"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!isStep1Valid}
                                className="group/btn relative flex items-center justify-center w-full px-8 py-6 bg-white hover:bg-slate-100 disabled:opacity-20 disabled:pointer-events-none text-slate-950 font-black rounded-2xl transition-all duration-500 shadow-2xl overflow-hidden"
                            >
                                <span className="relative z-10 uppercase tracking-widest text-sm pr-4">Proceed to Clinical Needs</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-700">
                            <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-xl text-white"><HeartCardiogram className="h-4 w-4" /></div>
                                    Clinical Selection
                                </h3>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label htmlFor="department" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Elite Medical Unit</label>
                                        <select
                                            id="department"
                                            required
                                            className="w-full h-16 px-6 rounded-2xl border border-white/5 bg-slate-950/50 focus:border-white/20 focus:ring-4 focus:ring-white/5 transition-all font-medium text-white shadow-inner outline-none appearance-none"
                                            value={formData.department}
                                            onChange={(e) => handleInputChange("department", e.target.value)}
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                                        >
                                            <option value="" disabled className="bg-slate-900">Selectized surgical unit...</option>
                                            {departments.map(dept => (
                                                <option key={dept.id} value={dept.id} className="bg-slate-900">{dept.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-3">
                                        <label htmlFor="doctor" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Clinical Specialist (Optional)</label>
                                        <select
                                            id="doctor"
                                            className="w-full h-16 px-6 rounded-2xl border border-white/5 bg-slate-950/50 focus:border-white/20 focus:ring-4 focus:ring-white/5 transition-all font-medium text-white shadow-inner outline-none appearance-none"
                                            value={formData.doctor}
                                            onChange={(e) => handleInputChange("doctor", e.target.value)}
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                                        >
                                            <option value="" className="bg-slate-900">Earliest Elite Specialist</option>
                                            {availableDoctors.map(doc => (
                                                <option key={doc.id} value={doc.id} className="bg-slate-900">{doc.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="date" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Priority Date Selection</label>
                                        <div className="relative">
                                            <input
                                                id="date"
                                                type="date"
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full h-16 px-6 rounded-2xl border border-white/5 bg-slate-950/50 focus:border-white/20 focus:ring-4 focus:ring-white/5 transition-all font-medium text-white shadow-inner outline-none uppercase tracking-widest text-xs"
                                                value={formData.date}
                                                onChange={(e) => handleInputChange("date", e.target.value)}
                                            />
                                            <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="group/back flex items-center justify-center px-8 py-5 bg-transparent border border-white/10 hover:border-white/20 text-slate-400 font-bold rounded-2xl transition-all w-full sm:w-auto hover:text-white"
                                >
                                    <ArrowLeft className="w-5 h-5 mr-3 group-hover/back:-translate-x-1 transition-transform" />
                                    REVISE
                                </button>
                                <button
                                    type="submit"
                                    disabled={!isStep2Valid || isSubmitting}
                                    className="group/btn flex-1 relative flex items-center justify-center px-8 py-6 bg-white hover:bg-slate-100 disabled:opacity-20 disabled:pointer-events-none text-slate-950 font-black rounded-2xl transition-all duration-500 shadow-2xl min-h-[64px]"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-3 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span className="relative z-10 uppercase tracking-[0.2em] text-sm">Seal Clinical Pathway</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/5 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {submitError && (
                        <p className="mt-6 text-xs font-bold text-rose-500/80 tracking-widest text-center animate-pulse uppercase">
                            {submitError}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

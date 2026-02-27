"use client";

import { useState } from "react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { CheckCircle2, User, Calendar, Activity, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AppointmentBookingClient() {
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

    // Form Validation
    const isStep1Valid = formData.name.trim() !== "" && formData.phone.length >= 10;
    const isStep2Valid = formData.department !== "" && formData.date !== "";

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const availableDoctors = doctors.filter(d => d.departmentId === formData.department);

    if (isSuccess) {
        return (
            <div className="bg-white/90 backdrop-blur-2xl p-10 sm:p-14 rounded-[3rem] border border-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden text-center group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-8 shadow-inner animate-bounce delay-100">
                        <CheckCircle2 className="h-12 w-12 text-pink-500" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Booking Confirmed!</h2>
                    <p className="text-xl text-slate-500 font-medium mb-12 max-w-lg mx-auto">
                        Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Your request is secured. Our clinical coordinator will contact you shortly at <span className="font-bold text-slate-900 tracking-wider">{formData.phone}</span> to finalize your precise slot.
                    </p>
                    <Link
                        href="/"
                        className="group/btn relative flex items-center justify-center px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_-10px_var(--tw-shadow-color)] shadow-fuchsia-500/40 overflow-hidden w-full sm:w-auto"
                    >
                        <span className="relative z-10 text-lg uppercase tracking-wider pr-4">Return to Homepage</span>
                        <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/90 backdrop-blur-3xl rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] border border-white/50 p-8 sm:p-12 relative overflow-hidden group/form">
            {/* Form Background Orbs matching Hero depth */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-100/50 to-transparent rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100/30 to-transparent rounded-full blur-[80px] pointer-events-none" />

            {/* Glowing Premium Progress Tracker */}
            <div className="relative mb-14 max-w-md mx-auto z-10">
                <div className="absolute left-0 right-0 top-1/2 h-1.5 bg-slate-100 -z-10 -translate-y-1/2 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-fuchsia-400 to-pink-400 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(45,212,191,0.5)] ${step === 2 ? 'w-full' : 'w-0'}`} />
                </div>

                <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg transition-all duration-500 shadow-md ${step >= 1 ? 'bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 text-white shadow-fuchsia-500/40 scale-110' : 'bg-white text-slate-300 border-2 border-slate-100'}`}>
                        1
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg transition-all duration-500 shadow-md ${step >= 2 ? 'bg-gradient-to-br from-pink-400 to-fuchsia-500 text-white shadow-pink-500/40 scale-110' : 'bg-white text-slate-300 border-2 border-slate-100'}`}>
                        2
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className={`text-xs font-bold uppercase tracking-widest ${step >= 1 ? 'text-fuchsia-600' : 'text-slate-400'} -ml-3`}>Your Details</span>
                    <span className={`text-xs font-bold uppercase tracking-widest ${step >= 2 ? 'text-pink-600' : 'text-slate-400'} -mr-3`}>Clinical Need</span>
                </div>
            </div>

            <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="relative z-10">
                {step === 1 && (
                    <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500 fill-mode-forwards">
                        <div className="bg-slate-50/50 rounded-[2rem] p-8 border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <div className="p-2 bg-fuchsia-100/50 rounded-xl text-fuchsia-600"><User className="h-5 w-5" /></div>
                                Patient Details
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-2.5">
                                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name <span className="text-rose-500">*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        className="w-full h-14 px-5 rounded-2xl border-slate-200 bg-white focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-500/10 transition-all font-medium text-slate-900 shadow-sm outline-none"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-slate-500">Mobile Number <span className="text-rose-500">*</span></label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        required
                                        className="w-full h-14 px-5 rounded-2xl border-slate-200 bg-white focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-500/10 transition-all font-medium text-slate-900 shadow-sm outline-none tracking-wider"
                                        placeholder="+91 98765 00000"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!isStep1Valid}
                            className="group/btn relative flex items-center justify-center w-full px-8 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 disabled:bg-slate-300 disabled:pointer-events-none text-white font-black rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_-10px_var(--tw-shadow-color)] shadow-fuchsia-500/40 overflow-hidden"
                        >
                            <span className="relative z-10 text-lg uppercase tracking-wider pr-4">Proceed to Step 2</span>
                            <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500 fill-mode-forwards">
                        <div className="bg-slate-50/50 rounded-[2rem] p-8 border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <div className="p-2 bg-pink-100/50 rounded-xl text-pink-600"><Activity className="h-5 w-5" /></div>
                                Clinical Need
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-2.5">
                                    <label htmlFor="department" className="text-xs font-black uppercase tracking-widest text-slate-500">Select Department <span className="text-rose-500">*</span></label>
                                    <select
                                        id="department"
                                        required
                                        className="w-full h-14 px-5 rounded-2xl border-slate-200 bg-white focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-500/10 transition-all font-medium text-slate-900 shadow-sm outline-none appearance-none"
                                        value={formData.department}
                                        onChange={(e) => handleInputChange("department", e.target.value)}
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                                    >
                                        <option value="" disabled>Choose specialized department...</option>
                                        {departments.map(dept => (
                                            <option key={dept.id} value={dept.id}>{dept.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {formData.department && (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-2.5">
                                        <label htmlFor="doctor" className="text-xs font-black uppercase tracking-widest text-slate-500">Preferred Specialist (Optional)</label>
                                        <select
                                            id="doctor"
                                            className="w-full h-14 px-5 rounded-2xl border-slate-200 bg-white focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-500/10 transition-all font-medium text-slate-900 shadow-sm outline-none appearance-none"
                                            value={formData.doctor}
                                            onChange={(e) => handleInputChange("doctor", e.target.value)}
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                                        >
                                            <option value="">Any Available Specialist</option>
                                            {availableDoctors.map(doc => (
                                                <option key={doc.id} value={doc.id}>{doc.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <div className="space-y-2.5">
                                    <label htmlFor="date" className="text-xs font-black uppercase tracking-widest text-slate-500 flex justify-between items-center">
                                        <span>Preferred Date <span className="text-rose-500">*</span></span>
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                    </label>
                                    <input
                                        id="date"
                                        type="date"
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full h-14 px-5 rounded-2xl border-slate-200 bg-white focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-500/10 transition-all font-medium text-slate-900 shadow-sm outline-none uppercase tracking-widest text-sm"
                                        value={formData.date}
                                        onChange={(e) => handleInputChange("date", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="group/back flex items-center justify-center px-8 py-5 bg-white border-2 border-slate-100 hover:border-slate-300 text-slate-700 font-black rounded-2xl transition-all w-full sm:w-auto hover:bg-slate-50"
                            >
                                <ArrowLeft className="w-5 h-5 mr-3 group-hover/back:-translate-x-1 transition-transform" />
                                GO BACK
                            </button>
                            <button
                                type="submit"
                                disabled={!isStep2Valid || isSubmitting}
                                className="group/btn flex-1 relative flex items-center justify-center px-8 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 disabled:bg-slate-300 disabled:pointer-events-none text-white font-black rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_-10px_var(--tw-shadow-color)] shadow-fuchsia-500/40 overflow-hidden min-h-[64px]"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span className="relative z-10 text-lg uppercase tracking-wider">Confirm Booking</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, RefreshCw, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { elitePricingBank } from "@/data/pricing-elite";

const ROOM_TYPES = [
    { id: 'general', name: 'General Ward', multiplier: 1.0 },
    { id: 'private', name: 'Private Room', multiplier: 1.4 },
    { id: 'deluxe', name: 'Deluxe Suite', multiplier: 1.8 },
];

export function CostCalculator() {
    const [selectedId, setSelectedId] = useState(elitePricingBank[0].id);
    const [roomType, setRoomType] = useState(ROOM_TYPES[0].id);
    const [insurance, setInsurance] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const procedure = elitePricingBank.find(p => p.id === selectedId)!;
    const room = ROOM_TYPES.find(r => r.id === roomType)!;

    // Elite Value Calculation Logic
    const calculateCost = () => {
        const base = (procedure.minPrice + procedure.maxPrice) / 2;
        // 30% of cost is room-dependent in Elite tier
        const fixedPart = base * 0.7;
        const variablePart = base * 0.3 * room.multiplier;
        const total = Math.round(fixedPart + variablePart);
        // Round to nearest 1000 for elite transparency
        return Math.ceil(total / 1000) * 1000;
    };

    const estimatedCost = calculateCost();
    const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in an Elite Consultation for ${procedure.procedure}. My estimated value range is around ₹${estimatedCost.toLocaleString()}.`)}`;

    return (
        <Card className="p-8 bg-slate-950/40 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                    <Calculator className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Value Estimator</h3>
                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Elite Institutional Pricing</p>
                </div>
            </div>

            {!showResult ? (
                <div className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Select Procedure</label>
                        <select
                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 appearance-none cursor-pointer hover:bg-white/10 transition-all font-semibold"
                            value={selectedId}
                            onChange={(e) => setSelectedId(e.target.value)}
                        >
                            {elitePricingBank.map(p => <option key={p.id} value={p.id} className="bg-slate-900">{p.procedure}</option>)}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {ROOM_TYPES.map(r => (
                            <button
                                key={r.id}
                                onClick={() => setRoomType(r.id)}
                                className={`p-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${roomType === r.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}
                            >
                                {r.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 cursor-pointer group" onClick={() => setInsurance(!insurance)}>
                        <div className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${insurance ? 'bg-indigo-600 border-indigo-500' : 'border-white/20'}`}>
                            {insurance && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">I have Health Insurance</span>
                    </div>

                    <Button onClick={() => setShowResult(true)} className="w-full py-7 bg-white text-slate-950 hover:bg-indigo-50 font-black rounded-2xl uppercase tracking-widest text-xs">
                        Generate Estimate
                    </Button>
                </div>
            ) : (
                <div className="text-center animate-in fade-in zoom-in duration-500 py-4">
                    <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Transparent Value Quote</p>
                    <div className="text-5xl font-black text-white mb-4 tracking-tighter">
                        ₹{(estimatedCost/1000).toLocaleString()}K<span className="text-lg text-slate-500 ml-1 font-medium italic">Estimated</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-widest mb-8">
                        {insurance ? '✅ Cashless Ready' : '✨ Institutional Value Pricing'}
                    </div>

                    <p className="text-xs text-slate-500 mb-10 max-w-[280px] mx-auto font-medium italic leading-relaxed">
                        This range reflects Elite care standards. Get an all-inclusive surgical quote via our WhatsApp desk.
                    </p>

                    <div className="space-y-4">
                        <Button className="w-full py-7 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl uppercase tracking-widest text-xs" onClick={() => window.open(waUrl, '_blank')}>
                            <MessageCircle className="w-5 h-5 mr-2" /> Elite Consultation
                        </Button>

                        <button
                            onClick={() => setShowResult(false)}
                            className="flex items-center justify-center w-full text-slate-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
                        >
                            <RefreshCw className="w-3 h-3 mr-2" /> Adjust Parameters
                        </button>
                    </div>
                </div>
            )}
        </Card>
    );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, Calculator, RefreshCw } from "lucide-react";

const TREATMENTS = [
    { id: 'piles', name: 'Piles (Hemorrhoids)', base: 25000, laser_extra: 10000 },
    { id: 'fistula', name: 'Fistula', base: 30000, laser_extra: 12000 },
    { id: 'fissure', name: 'Fissure', base: 20000, laser_extra: 8000 },
    { id: 'hernia', name: 'Hernia', base: 45000, laser_extra: 15000 },
];

const ROOM_TYPES = [
    { id: 'general', name: 'General Ward', multiplier: 1.0 },
    { id: 'semi_private', name: 'Semi-Private', multiplier: 1.2 },
    { id: 'private', name: 'Private Room', multiplier: 1.5 },
    { id: 'deluxe', name: 'Deluxe Suite', multiplier: 2.0 },
];

export function CostCalculator() {
    const [selectedTreatment, setSelectedTreatment] = useState(TREATMENTS[0].id);
    const [method, setMethod] = useState<'open' | 'laser'>('laser');
    const [roomType, setRoomType] = useState(ROOM_TYPES[0].id);
    const [insurance, setInsurance] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const calculateCost = () => {
        const treatment = TREATMENTS.find(t => t.id === selectedTreatment)!;
        const room = ROOM_TYPES.find(r => r.id === roomType)!;

        let baseCost = treatment.base;
        if (method === 'laser') baseCost += treatment.laser_extra;

        // Apply room multiplier to a portion of the cost (hospital charges)
        // simplifying assumption: 40% of cost is room-dependent
        const fixedPart = baseCost * 0.6;
        const variablePart = baseCost * 0.4 * room.multiplier;

        let total = Math.round(fixedPart + variablePart);

        // Round to nearest 500
        return Math.ceil(total / 500) * 500;
    };

    const cost = calculateCost();

    return (
        <Card className="p-6 bg-white shadow-xl border-t-4 border-brand-600 rounded-xl">
            <div className="flex items-center gap-2 mb-6 text-brand-700">
                <Calculator className="w-6 h-6" />
                <h3 className="text-xl font-bold">Surgery Cost Estimator</h3>
            </div>

            {!showResult ? (
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Treatment</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                            value={selectedTreatment}
                            onChange={(e) => setSelectedTreatment(e.target.value)}
                        >
                            {TREATMENTS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Technique</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setMethod('laser')}
                                className={`p-2 text-sm font-medium rounded-md border ${method === 'laser' ? 'bg-brand-50 border-brand-500 text-brand-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                            >
                                Laser (Painless)
                            </button>
                            <button
                                onClick={() => setMethod('open')}
                                className={`p-2 text-sm font-medium rounded-md border ${method === 'open' ? 'bg-brand-50 border-brand-500 text-brand-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                            >
                                Open Surgery
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Room Preference</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                        >
                            {ROOM_TYPES.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="insurance"
                            checked={insurance}
                            onChange={(e) => setInsurance(e.target.checked)}
                            className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                        />
                        <label htmlFor="insurance" className="text-sm text-gray-700">I have Health Insurance</label>
                    </div>

                    <Button onClick={() => setShowResult(true)} className="w-full mt-2">
                        Calculate Estimate
                    </Button>
                </div>
            ) : (
                <div className="text-center animate-in fade-in zoom-in duration-300">
                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Estimated Cost</p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                        ₹{cost.toLocaleString()}*
                    </div>

                    {insurance && (
                        <div className="bg-green-50 text-green-700 p-2 rounded-md text-xs font-medium mb-4">
                            Cashless facility available for most providers.
                        </div>
                    )}

                    <p className="text-xs text-gray-400 mb-6">
                        *This is an approximate estimate. Final cost depends on patient condition and actual consumables used.
                    </p>

                    <Button className="w-full mb-3">Book Consultation</Button>

                    <button
                        onClick={() => setShowResult(false)}
                        className="flex items-center justify-center w-full text-brand-600 text-sm hover:underline"
                    >
                        <RefreshCw className="w-3 h-3 mr-1" /> Recalculate
                    </button>
                </div>
            )}
        </Card>
    );
}

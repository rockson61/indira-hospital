"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";

// In real app, this would come from API
const INSURANCES = [
    "Star Health Insurance",
    "HDFC Ergo",
    "ICICI Lombard",
    "Bajaj Allianz",
    "Niva Bupa (Max Bupa)",
    "United India Insurance",
    "New India Assurance",
    "Oriental Insurance",
    "FHPL (TPA)",
    "Medi Assist (TPA)",
    "Vidal Health (TPA)",
    "MD India (TPA)",
    "Good Health (TPA)",
    "Paramount (TPA)",
    "Heritage (TPA)"
];

export function InsuranceChecker() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState<'found' | 'not_found' | null>(null);

    const checkInsurance = () => {
        if (!query.trim()) return;

        const found = INSURANCES.some(ins => ins.toLowerCase().includes(query.toLowerCase()));
        setResult(found ? 'found' : 'not_found');
    };

    return (
        <Card className="p-6 bg-white shadow-sm border border-gray-100 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Health Insurance Check</h3>
                    <p className="text-sm text-gray-500">Verify if your TPA/Insurance is accepted.</p>
                </div>
            </div>

            <div className="relative flex gap-2">
                <Input
                    placeholder="Enter Provider Name (e.g. Star Health)"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setResult(null);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && checkInsurance()}
                    className="pr-10"
                />
                <Button onClick={checkInsurance}>
                    Check
                </Button>
            </div>

            {result === 'found' && (
                <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-lg flex items-center gap-2 text-green-700 animate-in slide-in-from-top-2">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <div className="text-sm">
                        <strong>Yes!</strong> We accept cashless claims for <strong>{query}</strong> (and associated TPAs).
                    </div>
                </div>
            )}

            {result === 'not_found' && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-lg flex items-center gap-2 text-yellow-700 animate-in slide-in-from-top-2">
                    <div className="text-sm">
                        <strong>Results unclear.</strong> Please call our insurance desk to confirm specifically for <strong>{query}</strong>.
                    </div>
                </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-center text-gray-400">Accepted: Star Health • HDFC Ergo • TPA • & 30+ more</p>
            </div>
        </Card>
    );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // Assuming shadcn progress exists, or will use standard
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
    {
        id: 1,
        text: "Do you experience bleeding during bowel movements?",
        options: [
            { label: "No bleeding", score: 0 },
            { label: "Occasional minor spotting", score: 1 },
            { label: "Frequent bleeding (Daily)", score: 2 },
            { label: "Heavy bleeding / Squirting", score: 3 },
        ]
    },
    {
        id: 2,
        text: "Is there any protrusion (mass coming out)?",
        options: [
            { label: "No protrusion", score: 0 },
            { label: "Comes out but goes back automatically", score: 1 },
            { label: "Comes out, need to push it back manually", score: 2 },
            { label: "Stays out permanently (Prolapsed)", score: 3 },
        ]
    },
    {
        id: 3,
        text: "How severe is the pain?",
        options: [
            { label: "No pain", score: 0 },
            { label: "Mild discomfort / Itching", score: 1 },
            { label: "Painful during bowel movements", score: 2 },
            { label: "Constant unbearable pain", score: 3 },
        ]
    }
];

export function SeverityQuiz() {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (optionScore: number) => {
        const newScore = score + optionScore;
        setScore(newScore);

        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const getResult = () => {
        if (score <= 2) return {
            grade: "Grade I (Mild)",
            advice: "Likely manageable with diet & medication.",
            color: "text-green-600",
            bg: "bg-green-50"
        };
        if (score <= 5) return {
            grade: "Grade II (Moderate)",
            advice: "May require non-invasive Laser treatment.",
            color: "text-yellow-600",
            bg: "bg-yellow-50"
        };
        return {
            grade: "Grade III/IV (Severe)",
            advice: "Surgical intervention highly recommended.",
            color: "text-red-600",
            bg: "bg-red-50"
        };
    };

    const resultData = getResult();

    return (
        <Card className="max-w-md mx-auto overflow-hidden bg-white shadow-lg border-2 border-brand-100">
            <div className="bg-brand-600 p-4 text-white text-center">
                <h3 className="font-bold text-lg">Piles Severity Check</h3>
                <p className="text-brand-100 text-xs">Answer 3 simple questions to know your stage.</p>
            </div>

            <div className="p-6">
                {!showResult ? (
                    <>
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                            <span>Question {step + 1} of {QUESTIONS.length}</span>
                            <span>{Math.round(((step) / QUESTIONS.length) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6 overflow-hidden">
                            <div className="bg-brand-500 h-full transition-all duration-300" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}></div>
                        </div>

                        <h4 className="text-lg font-medium text-gray-900 mb-6">{QUESTIONS[step].text}</h4>

                        <div className="space-y-3">
                            {QUESTIONS[step].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt.score)}
                                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-brand-500 hover:bg-brand-50 transition-all flex justify-between group"
                                >
                                    <span className="text-gray-700 font-medium group-hover:text-brand-700">{opt.label}</span>
                                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center animate-in fade-in zoom-in duration-300">
                        <div className={cn("mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4", resultData.bg, resultData.color)}>
                            <AlertTriangle className="w-8 h-8" />
                        </div>

                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Your Result</p>
                        <h2 className={cn("text-2xl font-bold mb-2", resultData.color)}>{resultData.grade}</h2>
                        <p className="text-gray-600 mb-8">{resultData.advice}</p>

                        <Button size="lg" className="w-full animate-bounce">
                            Consult a Doctor Now
                        </Button>
                        <p className="text-xs text-gray-400 mt-4">
                            *This tool provides an indication only and is not a medical diagnosis.
                        </p>
                    </div>
                )}
            </div>
        </Card>
    );
}

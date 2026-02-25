"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, BookOpen, ArrowRight, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GLOSSARY_DATA, GlossaryTerm } from "@/lib/data/glossary-data";

export default function GlossaryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    // Get unique starting letters
    const alphabet = useMemo(() => {
        const letters = new Set(GLOSSARY_DATA.map(term => term.term.charAt(0).toUpperCase()));
        return Array.from(letters).sort();
    }, []);

    // Filter terms based on search and selected letter
    const filteredTerms = useMemo(() => {
        return GLOSSARY_DATA.filter((term) => {
            const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                term.definition.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesLetter = selectedLetter ? term.term.charAt(0).toUpperCase() === selectedLetter : true;
            return matchesSearch && matchesLetter;
        }).sort((a, b) => a.term.localeCompare(b.term));
    }, [searchQuery, selectedLetter]);

    // Group terms by first letter for display
    const groupedTerms = useMemo(() => {
        const groups: Record<string, GlossaryTerm[]> = {};
        filteredTerms.forEach(term => {
            const letter = term.term.charAt(0).toUpperCase();
            if (!groups[letter]) groups[letter] = [];
            groups[letter].push(term);
        });
        return groups;
    }, [filteredTerms]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Medical Glossary</h1>
                    <p className="text-purple-100 text-lg max-w-2xl mx-auto">
                        Understanding medical terminology made easy. Explore our comprehensive guide to conditions, treatments, and procedures.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <Card className="p-6 shadow-lg border-none rounded-2xl bg-white">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search for a medical term (e.g., Angioplasty, MRI)..."
                                className="pl-10 h-12 text-base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                            <Button
                                variant={selectedLetter === null ? "default" : "outline"}
                                onClick={() => setSelectedLetter(null)}
                                className={selectedLetter === null ? "bg-purple-600 hover:bg-purple-700" : ""}
                            >
                                All
                            </Button>
                            {alphabet.map((letter) => (
                                <Button
                                    key={letter}
                                    variant={selectedLetter === letter ? "default" : "outline"}
                                    onClick={() => setSelectedLetter(letter === selectedLetter ? null : letter)}
                                    className={`w-10 h-10 p-0 flex-shrink-0 ${selectedLetter === letter ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                                >
                                    {letter}
                                </Button>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>

            {/* Terms List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {Object.keys(groupedTerms).length > 0 ? (
                    <div className="space-y-12">
                        {Object.keys(groupedTerms).sort().map((letter) => (
                            <div key={letter} id={`section-${letter}`} className="scroll-mt-24">
                                <div className="flex items-center gap-4 mb-6">
                                    <h2 className="text-4xl font-bold text-gray-200">{letter}</h2>
                                    <div className="h-px bg-gray-200 flex-1"></div>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {groupedTerms[letter].map((term) => (
                                        <Card key={term.term} className="p-6 hover:shadow-md transition-all border-l-4 border-l-purple-500 rounded-lg group">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                                                {term.term}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                {term.definition}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                                    {term.category}
                                                </span>
                                                {term.relatedService && (
                                                    <Link
                                                        href={`/department/${term.relatedService}`.replace('department', 'services')} // Mapping check needed, assuming services
                                                        className="text-purple-600 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                                                    >
                                                        Learn More <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">No terms found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or filter.</p>
                        <Button
                            variant="link"
                            className="text-purple-600 mt-2"
                            onClick={() => { setSearchQuery(""); setSelectedLetter(null); }}
                        >
                            Clear all filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

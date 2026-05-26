"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const languages = [
 { code: 'en', label: 'English' },
 { code: 'ta', label: 'தமிழ்' },
 { code: 'hi', label: 'हिंदी' },
 { code: 'te', label: 'తెలుగు' }
];

export function LanguageSwitcher() {
 const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef<HTMLDivElement>(null);

 // Close dropdown on outside click
 useEffect(() => {
 const handleClickOutside = (event: MouseEvent) => {
 if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
 setIsOpen(false);
 }
 };
 document.addEventListener('mousedown', handleClickOutside);
 return () => document.removeEventListener('mousedown', handleClickOutside);
 }, []);

 const changeLanguage = (langCode: string) => {
 setIsOpen(false);
 
 // Google Translate works by injecting a select element.
 // We programmatically change its value and trigger a change event.
 const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
 if (selectElement) {
 selectElement.value = langCode;
 selectElement.dispatchEvent(new Event('change'));
 }
 };

 return (
 <div className="relative" ref={dropdownRef}>
 <button 
 onClick={() => setIsOpen(!isOpen)}
 className="action-icon-button hover:text-fuchsia-600 flex items-center justify-center p-2 rounded-xl transition-all"
 title="Change Language"
 >
 <Globe className="h-5 w-5" />
 </button>

 {isOpen && (
 <div className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-slate-900 shadow-clay dark:shadow-clay-dark rounded-xl py-2 z-[200] border border-slate-100 dark:border-slate-800">
 {languages.map((lang) => (
 <button
 key={lang.code}
 onClick={() => changeLanguage(lang.code)}
 className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/30 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 font-medium transition-colors"
 >
 {lang.label}
 </button>
 ))}
 </div>
 )}
 </div>
 );
}

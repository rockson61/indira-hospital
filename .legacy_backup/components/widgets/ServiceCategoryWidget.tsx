"use client";

import React from 'react';
import Link from 'next/link';
import { GitMerge, Bone, Scissors, Sparkles, Baby, ShieldCheck, HeartPulse, Gem } from 'lucide-react';
import { cn } from "@/lib/utils";

const serviceCategories = [
  { name: 'Orthopedics', url: '/departments/orthopedics', icon: Bone },
  { name: 'Cardiology', url: '/departments/cardiology', icon: HeartPulse },
  { name: 'Neurology', url: '/departments/neurology', icon: GitMerge }, // Conceptual icon
  { name: 'Oncology', url: '/departments/oncology', icon: Sparkles },
  { name: 'Pediatrics', url: '/departments/pediatrics', icon: Baby },
  { name: 'General', url: '/departments/general-medicine', icon: ShieldCheck },
  { name: 'Urology', url: '/departments/urology', icon: Gem }, // Conceptual
  { name: 'Surgery', url: '/departments/surgery', icon: Scissors },
];

export default function ServiceCategoryWidget() {
  return (
    <div className="clay-card p-4 sm:p-6">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Explore <span className="gradient-text">Our Specialities</span>
      </h3>
      <div className="relative">
        <div className="flex space-x-3 overflow-x-auto pb-4 hide-scrollbar">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.url}
                className="flex-shrink-0 w-32 group"
              >
                <div className="clay-button p-4 h-full flex flex-col items-center justify-center text-center space-y-2 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/50 rounded-full">
                    <Icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{category.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
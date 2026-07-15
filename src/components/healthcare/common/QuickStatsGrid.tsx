import React from 'react';
import { Activity } from 'lucide-react';

interface FactItem {
  label: string;
  value: string;
  icon: React.ComponentType<any> | string;
}

interface QuickStatsGridProps {
  items: FactItem[];
  className?: string;
}

export function QuickStatsGrid({ items, className }: QuickStatsGridProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className || ''}`}>
      {items.map((fact, i) => {
        const IconComponent = typeof fact.icon === 'function' ? fact.icon : Activity;
        return (
          <div key={i} className="p-5 rounded-[1.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none group hover:border-fuchsia-500/50 dark:hover:border-fuchsia-500/50 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-600/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-300 mb-3 group-hover:scale-110 transition-transform border border-fuchsia-100 dark:border-fuchsia-500/30">
              <IconComponent className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-indigo-200/50 mb-1">{fact.label}</div>
            <div className="text-sm font-bold text-slate-800 dark:text-white truncate">{fact.value}</div>
          </div>
        );
      })}
    </div>
  );
}

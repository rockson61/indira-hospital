import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className={`flex items-center text-sm text-slate-500 dark:text-indigo-300/60 mb-10 overflow-x-auto whitespace-nowrap ${className || ''}`}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <ChevronRight className="w-4 h-4 mx-2 opacity-40 shrink-0" />}
            {isLast || !item.url ? (
              <span className="text-slate-900 dark:text-white font-black truncate">{item.name}</span>
            ) : (
              <Link href={item.url} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

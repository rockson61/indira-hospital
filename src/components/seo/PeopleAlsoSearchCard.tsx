import Link from "next/link";
import { Search } from "lucide-react";

interface PeopleAlsoSearchCardProps {
 keywords: {
 text: string;
 href: string;
 }[];
}

export function PeopleAlsoSearchCard({ keywords }: PeopleAlsoSearchCardProps) {
 if (!keywords || keywords.length === 0) return null;

 return (
 <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6">
 <div className="flex items-center gap-2 mb-4">
 <Search className="w-4 h-4 text-fuchsia-500" />
 <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">
 People Also Search
 </h3>
 </div>
 
 <div className="flex flex-wrap gap-2">
 {keywords.map((keyword, idx) => (
 <Link
 key={idx}
 href={keyword.href}
 prefetch={false}
 className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/30 text-slate-700 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 text-xs font-bold rounded-full border border-slate-200 dark:border-slate-700 hover:border-fuchsia-200 dark:hover:border-fuchsia-800 transition-colors"
 >
 {keyword.text}
 </Link>
 ))}
 </div>
 </div>
 );
}

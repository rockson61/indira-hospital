import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
 return (
 <div className="min-h-[70vh] flex items-center justify-center px-6 bg-slate-50 dark:bg-slate-950">
 <div className="text-center max-w-lg">
 <div className="mb-8">
 <span className="elite-hero-title elite-gradient-text">
 404
 </span>
 </div>
 <h1 className="elite-hero-title text-slate-900 dark:text-white mb-4">
 Page Not Found
 </h1>
 <p className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium">
 Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
 Let us help you find what you need.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 href="/"
 className="elite-button-primary text-base"
 >
 <Home className="w-4 h-4 mr-2" />
 Go Home
 </Link>
 <Link
 href="/contact"
 className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:bg-slate-800 transition-all shadow-sm dark:shadow-slate-900/30"
 >
 <ArrowLeft className="w-4 h-4 mr-2" />
 Contact Us
 </Link>
 </div>
 </div>
 </div>
 );
}

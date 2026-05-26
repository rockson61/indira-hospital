"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function GlobalError({
 error,
 reset,
}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
 useEffect(() => {
 // Log the error to an observability layer (like Sentry or PostHog) here
 console.error("Global Application Error Caught:", error);
 }, [error]);

 return (
 <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-20 text-center">
 <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-3xl border border-red-100 dark:border-red-900/50 flex flex-col items-center max-w-lg mb-8">
 <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-6">
 <AlertTriangle className="w-8 h-8" />
 </div>
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
 Something went wrong
 </h2>
 <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
 We apologize, but an unexpected error occurred while loading this page. Our team has been notified.
 </p>
 <button
 onClick={() => reset()}
 className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-sm shadow-red-500/20"
 >
 <RefreshCcw className="w-4 h-4" />
 Try again
 </button>
 </div>
 {process.env.NODE_ENV === "development" && (
 <div className="max-w-2xl w-full text-left bg-slate-900 rounded-xl p-4 overflow-x-auto shadow-xl">
 <p className="text-slate-400 text-xs mb-2 font-mono uppercase tracking-widest font-semibold flex justify-between">
 <span>Development Mode Detailed Error</span>
 <span>{error.digest && `Digest: ${error.digest}`}</span>
 </p>
 <pre className="text-red-400 font-mono text-xs whitespace-pre-wrap leading-relaxed">
 {error.message}
 {"\n"}
 {error.stack}
 </pre>
 </div>
 )}
 </div>
 );
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return (
            <button className="flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all min-h-[44px] min-w-[44px]" aria-label="Toggle theme">
                <Sun className="h-5 w-5 text-slate-400" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 hover:bg-fuchsia-50 dark:bg-fuchsia-950 dark:bg-slate-800 dark:hover:bg-fuchsia-950 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-200 dark:hover:border-fuchsia-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 min-h-[44px] min-w-[44px]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-400" />
            ) : (
                <Moon className="h-5 w-5 text-fuchsia-600" />
            )}
        </button>
    );
}

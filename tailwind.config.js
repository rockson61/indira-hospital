const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        // Dark mode backgrounds with opacity
        'dark:bg-slate-900',
        'dark:bg-slate-900/80',
        'dark:bg-slate-900/70',
        'dark:bg-slate-900/60',
        'dark:bg-slate-950',
        'dark:bg-slate-800',
        'dark:bg-slate-800/80',
        'dark:bg-slate-800/70',
        'dark:bg-slate-800/60',
        'dark:bg-slate-800/50',
        // Dark mode gradients
        'dark:from-slate-900',
        'dark:from-slate-950',
        'dark:via-slate-900',
        'dark:via-teal-950/30',
        'dark:to-slate-900',
        'dark:to-slate-950',
        'dark:to-teal-900/30',
        'dark:to-teal-950/50',
        // Dark mode text colors
        'dark:text-slate-100',
        'dark:text-slate-200',
        'dark:text-slate-300',
        'dark:text-slate-400',
        'dark:text-teal-400',
        'dark:text-teal-300',
        'dark:text-blue-400',
        'dark:text-blue-300',
        // Dark mode borders
        'dark:border-slate-700',
        'dark:border-slate-800',
        'dark:border-teal-700/40',
        'dark:border-teal-600/30',
        // Dark mode gradient heading
        'dark:from-teal-400',
        'dark:to-blue-400',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#0d9488", // Teal 600
                    foreground: "#ffffff",
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488",
                    700: "#0f766e",
                    800: "#115e59",
                    900: "#134e4a",
                    950: "#042f2e",
                },
                secondary: {
                    DEFAULT: "#2563eb", // Blue 600
                    foreground: "#ffffff",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), heroui()],
}

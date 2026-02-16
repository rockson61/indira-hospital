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
                    DEFAULT: "#841F74", // Brand Purple
                    foreground: "#ffffff",
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#d946ef",
                    600: "#c026d3",
                    700: "#a21caf",
                    800: "#86198f",
                    900: "#701a75",
                    950: "#4a044e",
                },
                secondary: {
                    DEFAULT: "#2C4167", // Brand Dark Blue
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

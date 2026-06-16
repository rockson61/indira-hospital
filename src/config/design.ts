/**
 * ─────────────────────────────────────────────────────────────
 * Indira Hospital — Centralized Design System Config
 * Single source of truth for all design tokens used in TSX/JS
 *
 * CSS-side tokens live in: src/app/globals.css (@theme block)
 * ─────────────────────────────────────────────────────────────
 */

// ── Brand Colors ──────────────────────────────────────────────
export const BRAND = {
  teal: '#54CAD3',
  tealHover: '#45b5bd',
  dark: '#002b36',
  forest: '#005f73',
  forestMid: '#0a3d47',
  fuchsia: '#d946ef',
  fuchsiaLight: '#f0abfc',
} as const;

// ── Hero Section ──────────────────────────────────────────────
/** Standard dark hero background — use as className */
export const HERO_SECTION_CLASS =
  'relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]';

/** Standard hero grid texture overlay */
export const HERO_GRID_OVERLAY_CLASS =
  'absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20';

/** Standard hero right ambient glow */
export const HERO_GLOW_RIGHT_CLASS =
  'absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse';

/** Standard hero left ambient glow */
export const HERO_GLOW_LEFT_CLASS =
  'absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none';

// ── Page Backgrounds ──────────────────────────────────────────
export const PAGE_BG = {
  light: 'min-h-screen bg-slate-50 dark:bg-slate-950',
  neutral: 'bg-[#FAFAFA] dark:bg-slate-950',
} as const;

// ── Section Backgrounds ───────────────────────────────────────
export const SECTION_BG = {
  white: 'bg-white dark:bg-slate-900',
  muted: 'bg-slate-50 dark:bg-slate-950',
  dark: 'bg-slate-900',
  /** Final CTA section — dark teal */
  cta: 'bg-slate-900',
} as const;

// ── Section Padding ───────────────────────────────────────────
export const SECTION_PY = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
} as const;

// ── Typography ────────────────────────────────────────────────
export const TYPOGRAPHY = {
  /** Page-level H1 */
  h1: 'elite-hero-title',
  /** Section H2 */
  h2: 'text-3xl font-black text-slate-900 dark:text-white font-heading',
  /** Card H3 */
  h3: 'text-xl font-bold text-slate-900 dark:text-white',
  /** Eyebrow label above headings */
  eyebrow: 'text-fuchsia-600 font-bold text-sm tracking-widest uppercase flex items-center gap-2',
  /** Body text */
  body: 'text-base text-slate-600 dark:text-slate-300 leading-relaxed',
  /** Supporting subtitle */
  subtitle: 'text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed',
} as const;

// ── Cards ─────────────────────────────────────────────────────
export const CARD = {
  light: 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] p-8',
  dark: 'bg-gradient-to-br from-slate-900 to-indigo-950 border-none rounded-[2rem] p-8 text-white',
  muted: 'bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8',
} as const;

// ── Buttons ───────────────────────────────────────────────────
/** Use these Tailwind class strings for manual button composition if needed */
export const BUTTON = {
  primary: 'elite-button-primary',
  secondary: 'elite-button-secondary',
} as const;

// ── Spacing ───────────────────────────────────────────────────
export const MAX_WIDTH = 'max-w-7xl mx-auto px-6 lg:px-8';

// ── Grid Layouts ──────────────────────────────────────────────
export const GRID = {
  /** 2-col responsive */
  cols2: 'grid sm:grid-cols-2 gap-8',
  /** 3-col responsive */
  cols3: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-8',
  /** 4-col responsive */
  cols4: 'grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
  /** Procedures/locations pill grid */
  pills: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3',
} as const;

// ── Breadcrumb ────────────────────────────────────────────────
export const BREADCRUMB_CLASS = 'flex items-center text-sm text-indigo-300/60 mb-10 overflow-x-auto whitespace-nowrap';

// ── Doctor/Specialist Section ─────────────────────────────────
export const DOCTORS_SECTION_CLASS = 'bg-slate-50 dark:bg-slate-950 py-20 border-t border-slate-100 dark:border-slate-800';

// ── OPD Hours (shared across templates) ──────────────────────
export const OPD_SCHEDULE: { day: string; time: string; emergency?: boolean }[] = [
  { day: 'Monday — Friday', time: '24 Hours' },
  { day: 'Saturday', time: '24 Hours' },
  { day: 'Emergency', time: 'Always Open', emergency: true },
];

// ── Why Indira Points (shared across templates) ───────────────
export const WHY_INDIRA_POINTS = [
  'NABH Accredited Hospital',
  'Expert Senior Specialists',
  'Affordable & Transparent Pricing',
  'Empanelled with 50+ Insurers',
  '24/7 Emergency & ICU Care',
] as const;

// ── Regional Locations (shared across templates) ──────────────
export const REGIONAL_LOCATIONS = [
  { name: 'Vellore', slug: 'vellore' },
  { name: 'Chennai', slug: 'chennai' },
  { name: 'Sivaganga', slug: 'sivaganga' },
  { name: 'Tenkasi', slug: 'tenkasi' },
  { name: 'Hosur', slug: 'hosur' },
  { name: 'Kanchipuram', slug: 'kanchipuram' },
  { name: 'Tirunelveli', slug: 'tirunelveli' },
  { name: 'Dharmapuri', slug: 'dharmapuri' },
  { name: 'Tiruvannamalai', slug: 'tiruvannamalai' },
  { name: 'Ranipet', slug: 'ranipet' },
] as const;

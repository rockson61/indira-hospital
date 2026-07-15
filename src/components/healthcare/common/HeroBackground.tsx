import React from 'react';

interface HeroBackgroundProps {
  children?: React.ReactNode;
  glowColor?: 'indigo' | 'fuchsia' | 'emerald' | 'blue';
  className?: string;
}

export function HeroBackground({ children, glowColor = 'indigo', className }: HeroBackgroundProps) {
  const glowMap = {
    indigo: 'bg-indigo-600/5 dark:bg-indigo-600/15',
    fuchsia: 'bg-fuchsia-600/5 dark:bg-fuchsia-600/15',
    emerald: 'bg-emerald-600/5 dark:bg-emerald-600/15',
    blue: 'bg-blue-600/5 dark:bg-blue-600/15',
  };

  return (
    <section className={`relative bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50/50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 text-foreground overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem] border-b border-slate-200/50 dark:border-none ${className || ''}`}>
      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20" />
      {/* Ambient glows */}
      <div className={`absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse ${glowMap[glowColor]}`} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/5 dark:bg-fuchsia-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      {children}
    </section>
  );
}

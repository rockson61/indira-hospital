import React from 'react';
import { Card } from '@/components/ui/card';
import { MessageCircle, Phone, Shield, ShieldCheck, Clock, Home, AlertCircle } from 'lucide-react';

interface BookingSidebarCardProps {
  title: string;
  subtitle?: string;
  price?: string;
  whatsappUrl: string;
  phoneUrl: string;
  phoneLabel?: string;
  verifiedText?: string;
  reportTime?: string;
  homeCollection?: boolean;
  fastingRequired?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function BookingSidebarCard({
  title,
  subtitle,
  price,
  whatsappUrl,
  phoneUrl,
  phoneLabel = "Call Health Desk",
  verifiedText = "Verified Care Provider",
  reportTime,
  homeCollection,
  fastingRequired,
  className,
  children
}: BookingSidebarCardProps) {
  return (
    <Card className={`p-8 border border-slate-200 dark:border-slate-800 shadow-soft dark:shadow-clay-dark rounded-[2.5rem] bg-white dark:bg-slate-900 text-slate-900 dark:text-white sticky top-24 overflow-hidden ${className || ''}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-3xl -z-10" />
      <div className="relative z-10 text-center space-y-6">
        
        {/* Top Header or Price display */}
        {price ? (
          <div className="flex justify-between items-start text-left mb-2">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400 mb-1">Estimated Cost</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">{price}</div>
            </div>
            <div className="bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 dark:border-green-500/30 p-2 rounded-xl text-green-600 dark:text-green-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        ) : (
          <div className="w-20 h-20 bg-fuchsia-50 dark:bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-fuchsia-100 dark:border-fuchsia-500/30">
            <MessageCircle className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-300" />
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          {subtitle && (
            <p className="text-slate-500 dark:text-fuchsia-100/60 mt-2 px-4 font-light text-sm">{subtitle}</p>
          )}
        </div>

        {/* Diagnostic Metadata */}
        {(reportTime || homeCollection || fastingRequired) && (
          <div className="space-y-4 text-left w-full">
            {reportTime && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <Clock className="w-4 h-4 text-fuchsia-600 dark:text-fuchsia-400 animate-pulse shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide text-slate-650 dark:text-slate-200">Report in: {reportTime}</span>
              </div>
            )}
            {homeCollection && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-300">
                <Home className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide">Home Collection Available</span>
              </div>
            )}
            {fastingRequired && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 text-amber-700 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 animate-bounce shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide">Fasting Required</span>
              </div>
            )}
          </div>
        )}

        {/* Custom children injection */}
        {children}

        {/* Action Button stack */}
        <div className="space-y-3 w-full">
          <a
            href={whatsappUrl}
            target="_blank" rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-8 py-5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-2xl transition-all shadow-sm text-md hover:scale-[1.03]"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Book via WhatsApp
          </a>
          <a
            href={phoneUrl}
            className="w-full inline-flex items-center justify-center px-8 py-4 bg-slate-50 dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-slate-700 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-white/10 transition-all text-xs uppercase tracking-widest"
          >
            <Phone className="w-4 h-4 mr-3 text-slate-500 dark:text-white" />
            {phoneLabel}
          </a>
        </div>

        {/* Verified Affiliation Badge */}
        {verifiedText && (
          <div className="pt-6 border-t border-slate-150 dark:border-white/10 flex items-center justify-between text-[10px] text-slate-400 dark:text-fuchsia-100/40 uppercase tracking-widest font-bold w-full">
            <span>{verifiedText}</span>
            <Shield className="w-4 h-4 text-slate-400 dark:text-white" />
          </div>
        )}

      </div>
    </Card>
  );
}

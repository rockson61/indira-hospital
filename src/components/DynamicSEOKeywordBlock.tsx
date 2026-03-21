'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { enhancedVelloreLocations } from '@/lib/data/enhanced-location-data';
import { navigation } from '@/config/navigation';
import { ChevronDown, MapPin, Stethoscope, Building2, Sparkles, TrendingUp, Globe, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DynamicSEOKeywordBlock() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  // Safely fallback if pathname is null
  const currentPath = pathname || '/';
  
  // Extract context from URL
  const isHomepage = currentPath === '/';
  const isLocationPage = currentPath.includes('/near-me');
  const isServicePage = currentPath.includes('/treat/');
  const isDoctorsPage = currentPath.includes('/doctors');

  // Extract specific city or service if present
  const activeCity = enhancedVelloreLocations.find(loc => currentPath.includes(loc.slug))?.name || 'Vellore';
  const activeServiceObj = navigation.specialtyNav.find(srv => currentPath.includes(srv.href.split('/').pop() || 'none'));
  const activeService = activeServiceObj?.title || 'Hospital';

  // LSI & Transitional Logic
  const getCoreLinks = () => {
    return [
      { text: `Best hospital in ${activeCity} for surgery`, href: '/' },
      { text: `Most trusted hospital in Tamil Nadu`, href: '/' },
      { text: `Top ${activeService} Specialists in Vellore`, href: isServicePage ? currentPath : '/doctors' },
      { text: `Indira Super Speciality Hospital ${activeCity}`, href: '/' },
      { text: `Emergency Hospital Near Me in ${activeCity}`, href: '/contact' },
    ];
  };

  const getLocationLinks = () => {
    return enhancedVelloreLocations.slice(0, 8).map(loc => ({
      text: `Best ${activeService} in ${loc.name}, TN`,
      href: `/doctor/near-me/${loc.slug}`
    }));
  };

  const getSpecialtyLinks = () => {
    return navigation.specialtyNav.slice(0, 8).map(spec => ({
      text: `Top ${spec.title} Doctors in ${activeCity}`,
      href: spec.href
    }));
  };

  const getHighValueLinks = () => {
    return [
      { text: `Medical Tourism in India — Indira Hospital`, href: '/patients/international' },
      { text: `Affordable Surgery Cost in Vellore`, href: '/patients/international/cost-estimator' },
      { text: `Best Hospital Alternatives to CMC Vellore`, href: '/patients/cmc-vellore-alternative' },
      { text: `24/7 Cardiac Care in North Tamil Nadu`, href: '/doctor/near-me/treat/cardiology' },
      { text: `NABH Accredited Hospital in Vellore`, href: '/about/quality-safety' },
    ];
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.button 
          onClick={() => setIsExpanded(!isExpanded)}
          initial={false}
          className="flex flex-col md:flex-row items-center justify-between w-full text-left group gap-6"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="px-2 py-0.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-950/50 border border-fuchsia-200 dark:border-fuchsia-800/50 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-fuchsia-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-700 dark:text-fuchsia-400">Elite SEO Network</span>
              </div>
            </div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2 group-hover:text-fuchsia-600 transition-colors">
              <Building2 className="w-6 h-6 text-fuchsia-600" />
              Specialized Medical Services & Locations in {activeCity}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">
              Explore advanced multi-speciality treatments, top-rated surgeons, and regional healthcare hubs served by Indira Hospital across North Tamil Nadu.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest hidden md:block">
              {isExpanded ? 'Show Less' : 'Explore Related'}
            </span>
            <div className={`p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:border-fuchsia-300 ${isExpanded ? 'rotate-180 bg-fuchsia-50 dark:bg-fuchsia-950' : ''}`}>
               <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-fuchsia-600" />
            </div>
          </div>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 py-8 border-t border-slate-200 dark:border-slate-800/60">
                
                {/* High Authority Core Links */}
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-fuchsia-600" />
                    Market Leadership
                  </h3>
                  <ul className="space-y-4">
                    {getCoreLinks().map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href} className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors block font-medium leading-snug">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                    <li><Link href="/doctor/near-me" className="text-[13px] text-fuchsia-600 font-bold hover:underline">Hospital Near Me in Vellore</Link></li>
                  </ul>
                </div>

                {/* Regional Patient Catchment */}
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Nearby Locations
                  </h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {getLocationLinks().map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href} className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors block font-medium leading-snug">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialized Doctors Link Grid */}
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-emerald-500" />
                    Expert Specialists
                  </h3>
                  <ul className="space-y-4">
                    {getSpecialtyLinks().map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href} className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors block font-medium leading-snug">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High Value Transitional Phrases */}
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-red-500" />
                    Patient Resources
                  </h3>
                  <ul className="space-y-4">
                    {getHighValueLinks().map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href} className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors block font-medium leading-snug">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                    <li>
                        <Link href="/sitemap" className="inline-flex items-center gap-2 text-[13px] text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-fuchsia-600 hover:text-white transition-all mt-4">
                            <Globe className="w-3 h-3" /> View All Services
                        </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

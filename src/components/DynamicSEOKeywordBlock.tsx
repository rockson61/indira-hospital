'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { enhancedVelloreLocations } from '@/lib/data/enhanced-location-data';
import { navigation } from '@/config/navigation';
import { ChevronDown, MapPin, Stethoscope, Building2 } from 'lucide-react';
import { useState } from 'react';

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

  // LSI Logic
  const getCoreLinks = () => {
    return [
      { text: `Best hospital in ${activeCity}`, href: '/' },
      { text: `Most trusted hospital in ${activeCity}`, href: '/' },
      { text: `Top Hospital in North Tamil Nadu`, href: '/' },
      { text: `Indira Superspeciality Hospital`, href: '/' },
    ];
  };

  const getLocationLinks = () => {
    return enhancedVelloreLocations.slice(0, 5).map(loc => ({
      text: `Best ${activeService} in ${loc.name}`,
      href: `/doctor/near-me/${loc.slug}`
    }));
  };

  const getSpecialtyLinks = () => {
    return navigation.specialtyNav.slice(0, 5).map(spec => ({
      text: `Top ${spec.title} Specialists in ${activeCity}`,
      href: spec.href
    }));
  };

  const getDoctorLinks = () => {
    return [
      { text: `Expert Doctors Near Me`, href: '/doctors' },
      { text: `Book Appointment with Top Specialists in ${activeCity}`, href: '/doctors' },
      { text: `Find the Best Surgeons in Vellore`, href: '/doctors' },
    ];
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left group"
        >
          <div>
            <h2 className="text-xl font-black text-slate-800 dark:text-slate-200 tracking-tight flex items-center gap-2">
              <Building2 className="w-5 h-5 text-fuchsia-600" />
              Related Searches & Services in {activeCity}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore specialized medical treatments, top-rated doctors, and hospital locations across Tamil Nadu.
            </p>
          </div>
          <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 overflow-hidden ${isExpanded ? 'mt-8 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          
          {/* Core Hospital Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              Our Hospital
            </h3>
            <ul className="space-y-3">
              {getCoreLinks().map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors block leading-tight">
                    {link.text}
                  </Link>
                </li>
              ))}
              <li><Link href="/doctor/near-me" className="text-sm text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors block leading-tight">Hospital Near Me</Link></li>
            </ul>
          </div>

          {/* Regional Catchment Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              Nearby Locations
            </h3>
            <ul className="space-y-3">
              {getLocationLinks().map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors block leading-tight">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialists & Doctors Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Stethoscope className="w-4 h-4 text-emerald-500" />
              Top Specialists
            </h3>
            <ul className="space-y-3">
              {getDoctorLinks().map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors block leading-tight">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Service Silos Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              Featured Departments
            </h3>
            <ul className="space-y-3">
              {getSpecialtyLinks().map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors block leading-tight">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

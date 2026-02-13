'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createPageUrl, createServicePageUrl } from '@/lib/utils';

export default function SEORedirectHandler() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname;

    // Redirects FROM Dubai URLs TO clean URLs for SEO (maintains backwards compatibility)
    const dubaiToCleanRedirects: Record<string, string> = {
      '/DentalCheckupDubai': createServicePageUrl('DentalCheckup'),
      '/TeethWhiteningDubai': createServicePageUrl('TeethWhitening'),
      '/RootCanalDubai': createServicePageUrl('RootCanal'),
      '/VeneersDubai': createServicePageUrl('Veneers'),
      '/BracesDubai': createServicePageUrl('Braces'),
      '/InvisalignDubai': createServicePageUrl('Invisalign'),
      '/EmergencyDentistDubai': createPageUrl('EmergencyDentist'),
      '/CosmeticDentistDubai': createPageUrl('CosmeticDentist'),
      '/OrthodontistDubai': createPageUrl('Orthodontist'),
      '/DentalCrownsDubai': createPageUrl('DentalCrowns'),
      '/DentalBridgesDubai': createPageUrl('DentalBridges'),
      '/WisdomTeethRemovalDubai': createServicePageUrl('WisdomTeethRemoval'),
      '/AllOnFourDubai': createPageUrl('AllOnFour'),
      '/DentalImplantsDubai': createServicePageUrl('DentalImplants'),
    };

    // Also redirect clean URLs to service page URLs
    const cleanToServiceRedirects: Record<string, string> = {
      '/DentalCheckup': createServicePageUrl('DentalCheckup'),
      '/TeethWhitening': createServicePageUrl('TeethWhitening'),
      '/RootCanal': createServicePageUrl('RootCanal'),
      '/Veneers': createServicePageUrl('Veneers'),
      '/Braces': createServicePageUrl('Braces'),
      '/Invisalign': createServicePageUrl('Invisalign'),
      '/DentalImplants': createServicePageUrl('DentalImplants'),
      '/WisdomTeethRemoval': createServicePageUrl('WisdomTeethRemoval'),
    };

    // Only handle specific known old URLs, don't interfere with existing pages
    const specificRedirects: Record<string, string> = {
      '/root-canals-in-dubai-science-park': createServicePageUrl('RootCanal'),
      '/dental-implants-dubai-science-park': createServicePageUrl('DentalImplants'),
      '/orthodontist-dubai-science-park': createPageUrl('Orthodontist'),
      '/cosmetic-dentist-dubai-science-park': createPageUrl('CosmeticDentist'),
      '/emergency-dentist-dubai-science-park': createPageUrl('EmergencyDentist'),
      '/DentalClinicNearMe': '/DentistNearMe',
      ...dubaiToCleanRedirects,
      ...cleanToServiceRedirects,
    };

    // Only redirect if it's an exact match for known old URLs
    if (specificRedirects[currentPath]) {
      router.replace(specificRedirects[currentPath]);
    }
  }, [pathname, router]);

  return null;
}
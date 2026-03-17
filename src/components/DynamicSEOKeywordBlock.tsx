'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DynamicSEOKeywordBlock() {
  const [keywords, setKeywords] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    // Read the H1 from the DOM
    const h1Element = document.querySelector('h1');
    const h1Text = h1Element?.innerText || 'Indira Hospital';
    
    // Generate keyword clusters
    const seed = h1Text.trim();
    const location = 'Vellore, Tamil Nadu, India';
    
    const cluster = [
      seed,
      `Best ${seed} in ${location}`,
      `${seed} Hospital near me`,
      `Expert ${seed} specialists in Vellore`,
      `Advanced medical treatment for ${seed}`,
      `${seed} clinical care and recovery`,
      `Top-rated ${seed} services at Indira Hospital`,
      `Affordable ${seed} surgery and consultation`,
      `${seed} diagnostics and health management`,
      `Comprehensive ${seed} solutions in South India`
    ];

    const htmlContent = `
      <section>
        <h2>${seed} Services at Indira Hospital</h2>
        <p>Indira Hospital provides specialized care for ${seed} in ${location}. Our multispecialty approach ensures high-quality outcomes for patients seeking ${seed}.</p>
        <h3>Related Keywords for ${seed}</h3>
        <ul>
          ${cluster.map(kw => `<li>${kw}</li>`).join('')}
        </ul>
        <h4>Specialized Care in Vellore</h4>
        <p>Expert medical professionals and state-of-the-art technology for ${seed} management.</p>
        <h5>Patient Support and Recovery</h5>
        <p>Dedicated support for ${seed} patients and their families in Tamil Nadu.</p>
        <h6>Medical Excellence in India</h6>
        <p>Leading the way in ${seed} across India.</p>
      </section>
    `;

    setKeywords(htmlContent);
  }, [pathname]);

  if (!keywords) return null;

  return (
    <div 
      id="dynamic-seo-keywords"
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: keywords }}
    />
  );
}

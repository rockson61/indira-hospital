import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SeoProps {
 title: string;
 description: string;
 path: string;
 image?: string;
 type?: 'website' | 'article';
 keywords?: string | string[];
}

/**
 * Generates an SEO meta object with strictly controlled lengths and required OG tags.
 */
export function constructMetadata({
 title,
 description,
 path,
 image = siteConfig.ogImage,
 type = 'website',
 keywords
}: SeoProps): Metadata {
 const baseUrl = siteConfig.url.endsWith('/') ? siteConfig.url.slice(0, -1) : siteConfig.url;
 const url = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
 
  // Clean and trim titles/descriptions to safe SEO limits, avoiding mid-word truncation
  const cleanTitle = title.trim();
  let safeTitle = cleanTitle;
  if (cleanTitle.length > 65) {
    const truncated = cleanTitle.slice(0, 62);
    safeTitle = `${truncated.slice(0, Math.max(truncated.lastIndexOf(' '), 40))}...`;
  }
  
  const cleanDesc = description.trim();
  let safeDesc = cleanDesc;
  if (cleanDesc.length > 160) {
    const truncated = cleanDesc.slice(0, 157);
    safeDesc = `${truncated.slice(0, Math.max(truncated.lastIndexOf(' '), 100))}...`;
  }

 return {
 title: safeTitle,
 description: safeDesc,
 keywords: keywords,
 alternates: {
 canonical: url,
 },
 openGraph: {
 title: safeTitle,
 description: safeDesc,
 url: url,
 siteName: siteConfig.name,
 type: type,
 images: [
 {
 url: image,
 width: 1200,
 height: 630,
 alt: safeTitle,
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: safeTitle,
 description: safeDesc,
 images: [image],
 creator: '@indirahospital',
 },
 };
}

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
    
    // Clean and trim titles/descriptions to safe SEO limits
    const cleanTitle = title.trim();
    const safeTitle = cleanTitle.length > 60 ? `${cleanTitle.slice(0, 57)}...` : cleanTitle;
    
    const cleanDesc = description.trim();
    const safeDesc = cleanDesc.length > 155 ? `${cleanDesc.slice(0, 152)}...` : cleanDesc;

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

import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Core Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/doctors',
        '/departments',
        '/contact',
        '/book-appointment',
        '/blog'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...staticRoutes]
}

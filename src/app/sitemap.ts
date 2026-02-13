import { MetadataRoute } from 'next'
import { getDirectusClient } from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { Doctor, Service, Location, Diagnostic, Post } from '@/lib/schema'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://indirahospital.com'
    const client = await getDirectusClient()

    // Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/doctors',
        '/departments',
        '/contact',
        '/book-appointment',
        '/diagnostics',
        '/blog',
        '/privacy-policy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    try {
        // Dynamic Routes Fetching
        const [doctors, services, locations, diagnostics, posts] = await Promise.all([
            client.request(readItems('doctors', { filter: { status: { _eq: 'published' } }, fields: ['slug', 'updated_at'] as any })),
            client.request(readItems('services', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any })),
            client.request(readItems('locations', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any })),
            client.request(readItems('diagnostics', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any })),
            client.request(readItems('posts', { filter: { status: { _eq: 'published' } }, fields: ['slug', 'date_created'] as any })),
        ]) as [any[], any[], any[], any[], any[]] // Using any to bypass strict type checks for sitemap generation

        const doctorUrls = doctors.map((doctor) => ({
            url: `${baseUrl}/doctors/${doctor.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))

        const serviceUrls = services.map((service) => ({
            url: `${baseUrl}/services/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))

        const locationUrls = locations.map((location) => ({
            url: `${baseUrl}/locations/${location.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

        const diagnosticUrls = diagnostics.map((diag) => ({
            url: `${baseUrl}/diagnostics/${diag.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

        const blogUrls = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date_created),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))

        return [
            ...staticRoutes,
            ...doctorUrls,
            ...serviceUrls,
            ...locationUrls,
            ...diagnosticUrls,
            ...blogUrls,
        ]

    } catch (error) {
        console.warn('Sitemap generation failed to fetch dynamic routes:', error)
        return staticRoutes
    }
}

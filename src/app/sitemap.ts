import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getServices, getDepartments, getDoctors, getLocations, getHealthPackages, getDiagnostics } from '@/lib/api';
import { getAllTechnologies } from '@/lib/data/technology-data';
import { PATIENT_RESOURCES } from '@/lib/data/patient-resources';
import { getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data';
import { INTERNATIONAL_COUNTRIES } from '@/lib/data/international-data';
import { GLOSSARY_DATA } from '@/lib/data/glossary-data';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = siteConfig.url;

    // Core Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/about/quality-safety',
        '/careers',
        '/contact',
        '/events',
        '/faq',
        '/gallery',
        '/glossary',
        '/patients',
        '/patients/international',
        '/patients/international/cost-estimator',
        '/patients/international/second-opinion',
        '/patients/international/testimonials',
        '/patients/cmc-vellore-alternative',
        '/patients/medical-visa-india',
        '/patients/lodging',
        '/patients/transportation',
        '/patients/visiting-our-main-campus',
        '/pay-bill',
        '/pharmacy',
        '/pricing',
        '/privacy-policy',
        '/scans',
        '/terms',
        '/virtual-tour',
        '/doctors',
        '/departments',
        '/doctor/near-me/treat',
        '/treatments',
        '/diagnostics',
        '/book-appointment',
        '/blog',
        '/health-packages',
        '/patient-portal',
        '/patients/insurance',
        '/technology'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    try {
        // Fetch CMS Data
        const [services, departments, doctors, locations, healthPackages, diagnostics] = await Promise.all([
            getServices().catch(() => []),
            getDepartments().catch(() => []),
            getDoctors().catch(() => []),
            getLocations().catch(() => []),
            getHealthPackages().catch(() => []),
            getDiagnostics().catch(() => [])
        ]);

        const technologies = getAllTechnologies();
        const patientResources = PATIENT_RESOURCES;
        const treatments = getAllTreatments();

        // Map Dynamic URLs
        const serviceRoutes = services.map((s: any) => ({
            url: `${baseUrl}/doctor/near-me/treat/${s.slug || s.id}`,
            lastModified: new Date(s.date_updated || s.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

        const departmentRoutes = departments.map((d: any) => ({
            url: `${baseUrl}/departments/${d.slug || d.id}`,
            lastModified: new Date(d.date_updated || d.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

        const doctorRoutes = doctors.map((doc: any) => ({
            url: `${baseUrl}/doctor/${doc.specialty_slug || 'specialist'}/${doc.slug}`,
            lastModified: new Date(doc.date_updated || doc.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        const locationRoutes = locations.map((loc: any) => ({
            url: `${baseUrl}/doctor/near-me/${loc.slug}`,
            lastModified: new Date(loc.date_updated || loc.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

        const healthPackageRoutes = healthPackages.map((hp: any) => ({
            url: `${baseUrl}/health-packages/${hp.slug || hp.id}`,
            lastModified: new Date(hp.date_updated || hp.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        const diagnosticRoutes = diagnostics.map((dg: any) => ({
            url: `${baseUrl}/diagnostics/${dg.slug || dg.id}`,
            lastModified: new Date(dg.date_updated || dg.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        const technologyRoutes = technologies.map((tech: any) => ({
            url: `${baseUrl}/technology/${tech.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        const patientResourceRoutes = patientResources.map((res: any) => ({
            url: `${baseUrl}/patients/${res.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        const treatmentRoutes = TREATMENT_DATA.map((t) => ({
            url: `${baseUrl}/doctor/near-me/treat/${t.parentServiceSlug}/${t.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        }));

        const internationalCountryRoutes = INTERNATIONAL_COUNTRIES.map((c) => ({
            url: `${baseUrl}/patients/international/${c.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

        const glossaryRoutes = GLOSSARY_DATA.map((item) => ({
            url: `${baseUrl}/glossary/${slugify(item.term)}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

        // City × Department sub-routes (sample — expand as needed)
        const cityDeptRoutes = (locations as any[]).flatMap((loc: any) =>
            (departments as any[]).map((dept: any) => ({
                url: `${baseUrl}/doctor/near-me/${loc.slug}/departments/${dept.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.75,
            }))
        );

        const cityDoctorRoutes = (locations as any[]).flatMap((loc: any) =>
            (doctors as any[]).map((doc: any) => ({
                url: `${baseUrl}/doctor/near-me/${loc.slug}/doctors/${doc.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.75,
            }))
        );

        return [
            ...staticRoutes,
            ...departmentRoutes,
            ...serviceRoutes,
            ...locationRoutes,
            ...doctorRoutes,
            ...healthPackageRoutes,
            ...diagnosticRoutes,
            ...technologyRoutes,
            ...patientResourceRoutes,
            ...treatmentRoutes,
            ...internationalCountryRoutes,
            ...glossaryRoutes,
            ...cityDeptRoutes,
            ...cityDoctorRoutes,
        ];
    } catch (error) {
        console.error("Error generating dynamic sitemap:", error);
        return staticRoutes;
    }
}

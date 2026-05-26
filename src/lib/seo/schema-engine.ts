import { GLOBAL_ENTITY_ID, HOSPITAL_GLOBAL_ENTITY } from "@/config/schema-defaults";
import { siteConfig } from "@/config/site";

export type PageType = 
    | "hospital" 
    | "physician" 
    | "procedure" 
    | "article" 
    | "location" 
    | "breadcrumb"
    | "faq"
    | "howTo"
    | "diagnostic"
    | "symptom"
    | "itemList"
    | "healthPackage"
    | "internationalPage"
    | "collectionPage"
    | "healthcareGraph";

export interface SchemaData {
    title?: string;
    description?: string;
    url?: string;
    slug?: string;
    image?: string;
    author?: string;
    datePublished?: string;
    faq?: { question: string; answer: string }[];
    steps?: { name: string; description: string; duration?: string }[];
    items?: { name: string; url: string }[]; // For Breadcrumbs
    reviews?: { author: string; datePublished: string; reviewBody: string; ratingValue: number; bestRating?: number }[];
    video?: { name: string; description: string; thumbnailUrl: string; uploadDate: string; contentUrl?: string; embedUrl?: string };
    doctor?: any;
    location?: { name: string; address: string; city: string; areaServed: string; telephone?: string };
    preparation?: string;
    // Diagnostic / Symptom specific
    category?: string;
    isNabl?: boolean;
    testParameters?: number;
    sampleType?: string;
}

/**
 * Helper: Extracts a clean title from a URL slug
 */
function extractTitleFromPath(path: string): string {
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "Hospital";
    return lastSegment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Semantic Knowledge Engine
 * Dynamically generates structured data (JSON-LD) based on page type, content, and entities.
 */
export function generateSchema(type: PageType, data: SchemaData, currentUrl: string) {
    const baseUrl = siteConfig.url.endsWith('/') ? siteConfig.url : `${siteConfig.url}/`;
    const fullUrl = currentUrl.startsWith('http') ? currentUrl : `${siteConfig.url}${currentUrl}`;

    // AEO Speakable Specification
    const speakable = {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".direct-answer", ".faq-answer", ".clinical-insight", ".symptom-check-result"]
    };

    const graph: any[] = [];

    // 1. Root Hospital Entity (Unified ID)
    graph.push({
        "@context": "https://schema.org",
        ...HOSPITAL_GLOBAL_ENTITY
    });

    // 2. Breadcrumbs (Universal for almost all pages)
    if (data.items && data.items.length > 0) {
        graph.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${fullUrl}/#breadcrumb`,
            "itemListElement": data.items.map((item, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": item.name,
                "item": item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`
            }))
        });
    }

    // 3. Main Entity Schema
    let mainSchema: any = {
        "@context": "https://schema.org"
    };

    switch (type) {
        case "healthcareGraph":
        case "hospital":
            mainSchema = {
                ...mainSchema,
                "@type": "WebPage",
                "@id": `${fullUrl}/#webpage`,
                "url": fullUrl,
                "name": data.title || siteConfig.name,
                "description": data.description || siteConfig.description,
                "publisher": { "@id": GLOBAL_ENTITY_ID },
                "mainEntity": { "@id": GLOBAL_ENTITY_ID },
                "speakable": speakable,
                "about": [
                    { "@type": "AdministrativeArea", "name": "Vellore" },
                    { "@type": "AdministrativeArea", "name": "Tamil Nadu" }
                ],
                "specialty": [
                    "General Surgery", "Proctology", "Laparoscopy", "Urology", "Orthopaedics", "Gastroenterology"
                ]
            };
            break;

        case "physician":
            if (data.doctor) {
                mainSchema = {
                    ...mainSchema,
                    "@type": "Physician",
                    "@id": `${fullUrl}/#physician`,
                    "name": data.doctor.name,
                    "description": data.doctor.bio || data.description,
                    "image": data.doctor.image ? (data.doctor.image.startsWith('http') ? data.doctor.image : `${baseUrl}${data.doctor.image}`) : undefined,
                    "url": fullUrl,
                    "medicalSpecialty": data.doctor.specialty || data.doctor.designation,
                    "knowsLanguage": data.doctor.languages || ["English", "Tamil"],
                    "worksFor": { "@id": GLOBAL_ENTITY_ID },
                    "speakable": speakable
                };
            }
            break;

        case "procedure":
            mainSchema = {
                ...mainSchema,
                "@type": "MedicalProcedure",
                "@id": `${fullUrl}/#procedure`,
                "name": data.title || `${extractTitleFromPath(currentUrl)} Procedure`,
                "description": data.description || `Specialized medical procedure at ${siteConfig.name} Vellore.`,
                "url": fullUrl,
                "provider": { "@id": GLOBAL_ENTITY_ID },
                "preparation": data.preparation,
                "speakable": speakable
            };
            break;

        case "diagnostic":
            mainSchema = {
                ...mainSchema,
                "@type": ["MedicalTest", "MedicalProcedure"],
                "@id": `${fullUrl}/#test`,
                "name": data.title || `${extractTitleFromPath(currentUrl)} Test`,
                "description": data.description || `Advanced diagnostic laboratory test at ${siteConfig.name}.`,
                "url": fullUrl,
                "provider": { "@id": GLOBAL_ENTITY_ID },
                "indication": data.category,
                "preparation": data.preparation || (data.isNabl ? "NABL Accredited Laboratory Testing" : undefined),
                "speakable": speakable
            };
            break;

        case "symptom":
            mainSchema = {
                ...mainSchema,
                "@type": "WebPage",
                "@id": `${fullUrl}/#symptom-guide`,
                "name": data.title || "Indira Symptom Checker & Care Guide",
                "description": data.description || "Medical symptom checker for emergency, OPD, and teleconsultation guidance.",
                "url": fullUrl,
                "mainEntity": { "@id": GLOBAL_ENTITY_ID },
                "speakable": speakable
            };
            break;

        case "article":
            mainSchema = {
                ...mainSchema,
                "@type": "Article",
                "@id": `${fullUrl}/#article`,
                "headline": data.title,
                "description": data.description,
                "url": fullUrl,
                "author": {
                    "@type": "Person",
                    "name": data.author || siteConfig.name,
                    "worksFor": { "@id": GLOBAL_ENTITY_ID }
                },
                "publisher": { "@id": GLOBAL_ENTITY_ID },
                "datePublished": data.datePublished || new Date().toISOString(),
                "speakable": speakable
            };
            break;

        case "location":
            if (data.location) {
                mainSchema = {
                    ...mainSchema,
                    "@type": ["MedicalClinic", "LocalBusiness"],
                    "@id": `${fullUrl}/#location`,
                    "name": data.location.name,
                    "description": data.description,
                    "url": fullUrl,
                    "telephone": data.location.telephone || siteConfig.contact.phone,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": data.location.address,
                        "addressLocality": data.location.city,
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                    },
                    "areaServed": data.location.areaServed,
                    "parentOrganization": { "@id": GLOBAL_ENTITY_ID }
                };
            }
            break;

        case "itemList":
            if (data.items) {
                mainSchema = {
                    ...mainSchema,
                    "@type": "ItemList",
                    "@id": `${fullUrl}/#itemlist`,
                    "name": data.title || "Directory List",
                    "description": data.description,
                    "itemListElement": data.items.map((item, i) => ({
                        "@type": "ListItem",
                        "position": i + 1,
                        "name": item.name,
                        "item": item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`
                    }))
                };
            }
            break;

        case "healthPackage":
            mainSchema = {
                ...mainSchema,
                "@type": "Offer",
                "@id": `${fullUrl}/#package`,
                "name": data.title || `${extractTitleFromPath(currentUrl)} Health Package`,
                "description": data.description || `Comprehensive preventive health checkup package at ${siteConfig.name}.`,
                "url": fullUrl,
                "offeredBy": { "@id": GLOBAL_ENTITY_ID },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "speakable": speakable
            };
            break;

        case "internationalPage":
            mainSchema = {
                ...mainSchema,
                "@type": "WebPage",
                "@id": `${fullUrl}/#international`,
                "name": data.title || "International Patient Care - Indira Hospital",
                "description": data.description || "World-class medical tourism and quaternary care for international patients in Vellore, India.",
                "url": fullUrl,
                "publisher": { "@id": GLOBAL_ENTITY_ID },
                "mainEntity": { "@id": GLOBAL_ENTITY_ID },
                "speakable": speakable,
                "about": [
                    { "@type": "Service", "name": "Medical Tourism" },
                    { "@type": "Service", "name": "Global Patient Care" }
                ]
            };
            break;

        case "collectionPage":
            mainSchema = {
                ...mainSchema,
                "@type": "CollectionPage",
                "@id": `${fullUrl}/#collection`,
                "name": data.title || `${extractTitleFromPath(currentUrl)} Directory`,
                "description": data.description || `Explore our comprehensive list of ${extractTitleFromPath(currentUrl).toLowerCase()} at ${siteConfig.name}.`,
                "url": fullUrl,
                "publisher": { "@id": GLOBAL_ENTITY_ID },
                "mainEntity": {
                    "@type": "ItemList",
                    "name": data.title || extractTitleFromPath(currentUrl),
                    "numberOfItems": data.items?.length || 10,
                    "itemListOrder": "https://schema.org/ItemListOrderDescending"
                },
                "speakable": speakable
            };
            break;
    }

    if (mainSchema["@type"]) {
        graph.push(mainSchema);
    }

    // 4. Automated Related Schemas (FAQs & HowTos)
    if (data.faq && data.faq.length > 0) {
        graph.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${fullUrl}/#faq`,
            "mainEntity": data.faq.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer
                }
            })),
            "publisher": { "@id": GLOBAL_ENTITY_ID }
        });
    }

    if (data.steps && data.steps.length > 0) {
        graph.push({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": `${fullUrl}/#howto`,
            "name": data.title || "Care Path Steps",
            "description": data.description,
            "step": data.steps.map((s, i) => ({
                "@type": "HowToStep",
                "position": i + 1,
                "name": s.name,
                "itemListElement": [{
                    "@type": "HowToDirection",
                    "text": s.description
                }]
            })),
            "publisher": { "@id": GLOBAL_ENTITY_ID }
        });
    }

    // 5. Automated Related Schemas (Reviews & Videos)
    if (data.reviews && data.reviews.length > 0) {
        // Append aggregate rating and reviews directly to the main entity (Physician/Hospital/Clinic)
        if (mainSchema["@type"]) {
            const sum = data.reviews.reduce((acc, r) => acc + r.ratingValue, 0);
            const avg = (sum / data.reviews.length).toFixed(1);
            mainSchema["aggregateRating"] = {
                "@type": "AggregateRating",
                "ratingValue": avg,
                "reviewCount": data.reviews.length,
                "bestRating": data.reviews[0].bestRating || 5
            };
            mainSchema["review"] = data.reviews.map(r => ({
                "@type": "Review",
                "author": { "@type": "Person", "name": r.author },
                "datePublished": r.datePublished,
                "reviewBody": r.reviewBody,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": r.ratingValue,
                    "bestRating": r.bestRating || 5
                }
            }));
        }
    }

    if (data.video) {
        graph.push({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "@id": `${fullUrl}/#video`,
            "name": data.video.name,
            "description": data.video.description,
            "thumbnailUrl": data.video.thumbnailUrl,
            "uploadDate": data.video.uploadDate,
            "contentUrl": data.video.contentUrl,
            "embedUrl": data.video.embedUrl,
            "publisher": { "@id": GLOBAL_ENTITY_ID }
        });
    }

    return graph;
}

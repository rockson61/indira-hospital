import { siteConfig } from "@/config/site";

/**
 * GLOBAL_ENTITY_ID: The master reference for all Indira Super Speciality Hospital schemas.
 */
export const GLOBAL_ENTITY_ID = "https://www.indirasuperspecialityhospital.com/#IndiraHospital";

/**
 * Base Hospital/Organization Schema
 * Used as a template and for root linking across all pages.
 */
export const HOSPITAL_GLOBAL_ENTITY = {
    "@type": ["Hospital", "MedicalClinic", "LocalBusiness"],
    "@id": GLOBAL_ENTITY_ID,
    "name": siteConfig.name,
    "alternateName": ["Indira Hospitals Vellore", "Best Hospital in Vellore"],
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": {
        "@type": "ImageObject",
        "@id": `${siteConfig.url}/#logo`,
        "url": `${siteConfig.url}/logo.png`,
        "width": "512",
        "height": "512"
    },
    "image": `${siteConfig.url}${siteConfig.ogImage}`,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
        "@type": "PostalAddress",
        "@id": `${siteConfig.url}/#hospitalAddress`,
        "addressCountry": "IN",
        "addressLocality": "Vellore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "632006",
        "streetAddress": "54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9165",
        "longitude": "79.1325"
    },
    "hasMap": "https://maps.google.com/maps?cid=9667111072695054632",
    "isAcceptingNewPatients": true,
    "priceRange": "₹₹",
    "slogan": "Precision in Surgery, Compassion in Care",
    "knowsLanguage": ["Tamil", "English", "Telugu", "Hindi", "Kannada", "Malayalam"],
    "knowsAbout": [
        "https://en.wikipedia.org/wiki/Surgery",
        "https://en.wikipedia.org/wiki/Laparoscopic_surgery",
        "https://en.wikipedia.org/wiki/Laser_surgery"
    ]
};

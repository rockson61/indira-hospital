import { Metadata } from "next"

export const siteConfig = {
    name: "Indira Dental Clinic",
    shortName: "IDCV",
    description:
        "⭐ #1 Rated Dental Clinic in Vellore (500+ Reviews). Expert RCT, Braces, Implants & Cosmetic Dentistry by Dr. Rockson Samuel. 50% Lower Costs | Same-Day Emergency Care | Book: 7010650063",
    url: "https://www.velloredental.com",
    ogImage: "https://www.velloredental.com/dental-clinic-vellore.jpg",
    links: {
        twitter: "https://twitter.com/indiradental",
        github: "https://github.com/indiradental",
        facebook: "https://www.facebook.com/indiradentalclinicvellore/",
        instagram: "https://www.instagram.com/indiradentalvellore/",
        pinterest: "https://in.pinterest.com/indradentalclinic/",
        youtube: "https://youtube.com/@indiradental",
    },
    address: {
        street: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
        city: "Vellore",
        state: "Tamil Nadu",
        zip: "632006",
        country: "India",
    },
    contact: {
        phone: "+91 70106 50063",
        email: "rockson68@hotmail.com",
    },
    creator: "Dr. Rockson Samuel",
    keywords: [
        "dentist in Vellore",
        "dental clinic Vellore",
        "Dr Rockson Samuel",
        "Indira Dental Clinic",
        "root canal treatment Vellore",
        "dental implants Vellore",
        "orthodontist Vellore",
        "teeth whitening Vellore",
        "cosmetic dentistry Vellore",
        "emergency dental care Vellore",
        "best dentist Vellore",
        "Gandhi Nagar dental clinic",
        "Katpadi dentist",
        "best dental clinic Vellore 2026",
        "top dentist Vellore",
        "affordable dental care Vellore"
    ]
}

export const baseMetadata: Metadata = {
    title: {
        default: "Best Dentist in Vellore 2026 | Top Dental Clinic | Dr. Rockson Samuel",
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }, { name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Best Dentist in Vellore 2026 | Top Dental Clinic | Dr. Rockson Samuel",
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - Best Dentist in Vellore`,
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Dentist in Vellore 2026 | Top Dental Clinic | Dr. Rockson Samuel",
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

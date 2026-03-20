import { siteConfig } from "./site";

export const defaultSeo = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | Best Hospital in Vellore | Laser & Laparoscopic Surgery`,
        template: `%s | ${siteConfig.name} | Vellore`,
    },
    description: siteConfig.description,
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@indirahospital",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

import { siteConfig } from "@/config/site";

type SchemaType = "hospital" | "itemList" | "physician" | "breadcrumb" | "medicalClinic";

interface HospitalSchemaProps {
    type: "hospital";
}

interface MedicalClinicSchemaProps {
    type: "medicalClinic";
    name: string;
    description: string;
    address: string;
    city: string;
    areaServed: string;
}

interface ItemListSchemaProps {
    type: "itemList";
    name: string;
    items: { name: string; url: string }[];
}

interface PhysicianSchemaProps {
    type: "physician";
    name: string;
    specialty: string;
    description: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    type: "breadcrumb";
    items: { name: string; url: string }[];
}

interface MedicalProcedureSchemaProps {
    type: "medicalProcedure";
    name: string;
    description: string;
    url: string;
    preparation?: string;
}

interface ArticleSchemaProps {
    type: "article";
    name: string;
    description: string;
    url: string;
    image?: string;
    author?: string;
    datePublished?: string;
}

type JsonLdSchemaProps = 
    | HospitalSchemaProps 
    | MedicalClinicSchemaProps 
    | ItemListSchemaProps 
    | PhysicianSchemaProps 
    | BreadcrumbSchemaProps 
    | MedicalProcedureSchemaProps
    | ArticleSchemaProps
    | FAQPageSchemaProps
    | HowToSchemaProps;

interface HowToSchemaProps {
    type: "howTo";
    name: string;
    description: string;
    steps: { name: string; description: string; duration?: string }[];
}

interface FAQPageSchemaProps {
    type: "faq";
    mainEntity: { question: string; answer: string }[];
}

export function JsonLdSchema(props: JsonLdSchemaProps) {
    let schema: Record<string, any>;

    if (props.type === "hospital") {
        schema = {
            "@context": "https://schema.org",
            "@type": ["Hospital", "MedicalBusiness"],
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            telephone: siteConfig.contact.phone,
            address: {
                "@type": "PostalAddress",
                streetAddress: "Vellore",
                addressLocality: "Vellore",
                addressRegion: "Tamil Nadu",
                postalCode: "632001",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: "12.9165",
                longitude: "79.1325",
            },
            medicalSpecialty: [
                "Cardiology", "General Surgery", "Laparoscopic Surgery",
                "Urology", "Proctology", "Orthopedics", "ENT",
                "Gynaecology", "Ophthalmology", "Dermatology",
            ],
            availableService: {
                "@type": "MedicalProcedure",
                name: "Multi-Speciality Healthcare Services",
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
            },
            sameAs: [
                siteConfig.socials.facebook,
                siteConfig.socials.instagram,
                siteConfig.socials.youtube,
                siteConfig.socials.twitter,
                siteConfig.socials.linkedin,
                siteConfig.socials.practo,
                siteConfig.socials.justdial,
            ].filter(Boolean),
        };
    } else if (props.type === "medicalClinic") {
        schema = {
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "Hospital"],
            name: `${siteConfig.name} - Serving ${props.city}`,
            description: props.description,
            url: siteConfig.url,
            telephone: siteConfig.contact.phone,
            address: {
                "@type": "PostalAddress",
                streetAddress: props.address,
                addressLocality: props.city,
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
            },
            areaServed: {
                "@type": "AdministrativeArea",
                name: props.areaServed,
            },
            parentOrganization: {
                "@type": "Hospital",
                name: siteConfig.name,
                url: siteConfig.url,
            },
        };
    } else if (props.type === "itemList") {
        schema = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: props.name,
            numberOfItems: props.items.length,
            itemListElement: props.items.map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: item.name,
                url: `${siteConfig.url}${item.url}`,
            })),
        };
    } else if (props.type === "faq") {
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: props.mainEntity.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        };
    } else if (props.type === "physician") {
        schema = {
            "@context": "https://schema.org",
            "@type": "Physician",
            name: props.name,
            medicalSpecialty: props.specialty,
            description: props.description,
            url: `${siteConfig.url}${props.url}`,
            worksFor: {
                "@type": "Hospital",
                name: siteConfig.name,
                url: siteConfig.url,
            },
        };
    } else if (props.type === "article") {
        schema = {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: props.name,
            description: props.description,
            url: `${siteConfig.url}${props.url}`,
            image: props.image || `${siteConfig.url}/og-image.jpg`,
            author: {
                "@type": "Person",
                name: props.author || siteConfig.name,
            },
            publisher: {
                "@type": "Hospital",
                name: siteConfig.name,
                logo: {
                    "@type": "ImageObject",
                    url: `${siteConfig.url}/logo.png`,
                },
            },
            datePublished: props.datePublished || new Date().toISOString(),
        };
    } else if (props.type === "medicalProcedure") {
        schema = {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: props.name,
            description: props.description,
            url: `${siteConfig.url}${props.url}`,
            provider: {
                "@type": "Hospital",
                name: siteConfig.name,
                url: siteConfig.url,
            },
            ...(props.preparation && { bodyLocation: props.preparation }),
        };
    } else if (props.type === "howTo") {
        schema = {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: props.name,
            description: props.description,
            step: props.steps.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.name,
                itemListElement: [{
                    "@type": "HowToDirection",
                    text: s.description
                }]
            }))
        };
    } else {
        schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: props.items.map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: item.name,
                item: `${siteConfig.url}${item.url}`,
            })),
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

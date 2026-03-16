import { siteConfig } from "@/config/site";

type SchemaType = "hospital" | "itemList" | "physician" | "breadcrumb";

interface HospitalSchemaProps {
    type: "hospital";
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

type JsonLdSchemaProps = HospitalSchemaProps | ItemListSchemaProps | PhysicianSchemaProps | BreadcrumbSchemaProps | MedicalProcedureSchemaProps;

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

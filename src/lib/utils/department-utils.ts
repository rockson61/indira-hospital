import { SEED_DATA } from "@/lib/data/seed-data";

export interface Department {
    name: string;
    slug: string;
    icon: string;
    description: string;
}

// List of slugs that are actual departments, not just sub-services
const DEPARTMENT_SLUGS = [
    "cardiology",
    "neurology",
    "orthopaedics",
    "gastroenterology",
    "oncology",
    "nephrology",
    "urology",
    "obstetrics-gynaecology",
    "general-surgery",
    "dental",
    "icu-emergency",
    "pediatrics",
    "ent",
    "dermatology",
    "pulmonology"
];

export function getEffectiveDepartments(): Department[] {
    // 1. Filter SEED_DATA.services to get only main departments
    // If a service isn't in DEPARTMENT_SLUGS, we can still include it if it looks like a department,
    // but this list helps prioritize and filter out things like "root-canal" if it were a top-level service.

    // For now, let's use all services but sort them, as the current seed data seems to be mostly departments.
    // However, if we want to be strict:

    const departments = SEED_DATA.services
        .map(s => ({
            name: s.title,
            slug: s.slug,
            icon: s.icon,
            description: s.short_description
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

    return departments;
}

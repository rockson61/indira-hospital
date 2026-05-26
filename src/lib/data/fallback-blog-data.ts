import { Post } from "@/lib/schema";

export const FALLBACK_BLOG_POSTS: Post[] = [
 {
 id: "fb-1",
 status: "published",
 title: "Laser Piles Treatment: Why It's the Gold Standard in 2026",
 slug: "laser-piles-treatment-gold-standard",
 excerpt: "Discover why Laser Piles (Hemorrhoids) treatment is preferred over traditional surgery for faster recovery and painless results in Vellore.",
 content: "<p>Laser treatment for piles has revolutionized proctology. At Indira Hospital, we use advanced SiLaC technology...</p>",
 image: undefined,
 date_created: new Date().toISOString(),
 category: "Surgery",
 author: { name: "Dr. Rockson Samuel" } as any
 },
 {
 id: "fb-2",
 status: "published",
 title: "Top 5 Benefits of Same-Day Discharge Surgeries",
 slug: "benefits-of-same-day-discharge",
 excerpt: "Learn how modern surgical techniques at Indira Hospital allow patients to return home within hours of complex procedures.",
 content: "<p>With the advancement of laparoscopic and laser technologies, many surgeries no longer require overnight stays...</p>",
 image: undefined,
 date_created: new Date().toISOString(),
 category: "Patient Care",
 author: { name: "Dr. Karan Shankar" } as any
 },
 {
 id: "fb-3",
 status: "published",
 title: "NABH Accreditation: What It Means for Your Safety",
 slug: "nabh-accreditation-patient-safety",
 excerpt: "Understanding the rigorous standards of NABH and why choosing an accredited hospital like Indira is crucial for your healthcare journey.",
 content: "<p>NABH standards are designed to ensure that hospitals follow the highest quality and safety protocols...</p>",
 image: undefined,
 date_created: new Date().toISOString(),
 category: "Quality",
 author: { name: "Quality Desk" } as any
 }
];

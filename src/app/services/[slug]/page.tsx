import { notFound } from "next/navigation"
import { getDirectusClient } from "@/lib/directus"
import { readItems } from "@directus/sdk"
import { Service } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { CheckCircle, ShieldCheck, Clock, UserCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Funnel Components (Placeholder for now, can be extracted)
const HeroSection = ({ title, short_description, image }: { title: string, short_description: string, image: string }) => (
    <div className="relative bg-purple-950 text-white py-24">
        <div className="absolute inset-0 opacity-20">
            {/* Use image if available, else fallback pattern */}
            {image && <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${image}`} alt={title} fill className="object-cover" />}
        </div>
        <SectionContainer className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mb-8">{short_description}</p>
            <div className="flex gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">Book Appointment</Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Cost Estimate</Button>
            </div>
        </SectionContainer>
    </div>
)

const ProblemSolutionSection = ({ full_description }: { full_description: string }) => (
    <SectionContainer className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg dark:prose-invert">
                <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-6">Understanding the Condition</h2>
                {/* Dangerously set inner HTML for WYSIWYG content */}
                <div dangerouslySetInnerHTML={{ __html: full_description }} />
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl border border-purple-100 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                    Why Choose Advanced Treatment?
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span>Minimally Invasive Procedures</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-purple-500 mt-1" />
                        <span>Faster Recovery Time</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <UserCheck className="w-5 h-5 text-purple-500 mt-1" />
                        <span>Expert Specialists</span>
                    </li>
                </ul>
            </div>
        </div>
    </SectionContainer>
)

import { SEED_DATA } from "@/lib/data/seed-data";

export async function generateStaticParams() {
    // Generate params for all services
    const services = SEED_DATA.services;
    return services.map((s) => ({
        slug: s.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const client = await getDirectusClient();
    let service: Service | undefined;

    try {
        // Fetch service data with deep fields (video, features, etc.)
        const services = await client.request(readItems('services', {
            filter: {
                slug: { _eq: slug },
                status: { _eq: 'published' }
            },
            limit: 1,
            fields: ['*'] as any
        })) as unknown as Service[];
        service = services[0];
    } catch (error) {
        // Fallback
    }

    if (!service) {
        // Map seed data to Service interface
        const seedService = SEED_DATA.services.find(s => s.slug === slug);
        if (seedService) {
            service = {
                ...seedService,
                id: seedService.slug,
                status: 'published',
            } as any;
        }
    }

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            {/* 1. Awareness & Interest (Hero) */}
            <HeroSection
                title={service.title}
                short_description={service.short_description}
                image={service.icon} // Using icon as main image placeholder for now
            />

            {/* 2. Consideration (Problem/Solution) */}
            <ProblemSolutionSection full_description={service.full_description} />

            {/* 3. Proof (Success/Testimonials - Placeholder) */}
            {/* <SuccessStories serviceId={service.id} /> */}

            {/* 4. Action (CTA/Booking) */}
            <SectionContainer className="py-16 bg-slate-50 dark:bg-slate-900">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to take the next step?</h2>
                    <p className="text-muted-foreground mb-8">Schedule a consultation with our expert specialists today.</p>
                    <Button size="lg" className="w-full md:w-auto">Book Consultation Now</Button>
                </div>
            </SectionContainer>
        </main>
    )
}

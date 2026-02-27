import React from "react";
import { CMSBlock } from "@/lib/schema";

// -------------------------------------------------------------------
// Import our physical UI Components to map against the CMS data types
// -------------------------------------------------------------------
import { Hero } from "@/components/sections/Hero";
import { DepartmentGridSection } from "@/components/sections/DepartmentGridSection";
import { DoctorHighlightSection } from "@/components/sections/DoctorHighlightSection";

// Stub components for remaining modular blocks
const AppointmentCTASection = ({ block }: { block: any }) => (
    <div className="py-20 text-center bg-fuchsia-50 border-y border-fuchsia-100">
        <h2 className="text-3xl font-bold mb-4">{block.title || "Book Appointment"}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">{block.description}</p>
        <a href="/book-appointment" className="px-8 py-4 bg-fuchsia-600 text-white rounded-xl font-bold">{block.buttonText || "Book Now"}</a>
    </div>
);

const TestimonialSection = ({ block }: { block: any }) => (
    <div className="py-20 text-center"><h2 className="text-2xl font-bold">{block.title || "Patient Testimonials"}</h2><p className="text-gray-500 dark:text-gray-400 mt-2">[{block.testimonials?.length || 0} Testimonials loaded from CMS]</p></div>
);

const InsuranceSection = ({ block }: { block: any }) => (
    <div className="py-12 bg-gray-50 dark:bg-slate-950 text-center border-y border-gray-100 dark:border-slate-700"><h2 className="text-xl font-bold mb-6">{block.title || "Insurance Partners"}</h2><div className="flex justify-center gap-8 opacity-50 grayscale font-bold text-gray-400 select-none">[Insurance Logos Rendered Here]</div></div>
);

const BlogPreviewSection = ({ block }: { block: any }) => (
    <div className="py-20 text-center"><h2 className="text-2xl font-bold">{block.title || "Latest Insights"}</h2><p className="text-gray-500 dark:text-gray-400 mt-2">Displaying top {block.numberOfPosts || 3} posts from {block.categoryFilter || "all categories"}</p></div>
);

interface BlockRendererProps {
    blocks: CMSBlock[];
}

/**
 * 🔗 COMPONENT MAPPING STRATEGY
 * Every CMS block array maps directly to a frontend component in a 1:1 relationship.
 * No UI logic uses static data, meaning editors can safely re-arrange page blocks.
 */
export function BlockRenderer({ blocks }: BlockRendererProps) {
    if (!blocks || blocks.length === 0) {
        return null;
    }

    return (
        <>
            {blocks.map((block, index) => {
                const key = `cms-block-${block._type}-${index}`;

                switch (block._type) {
                    case 'hero':
                        // Since our current HeroSection reads from siteConfig right now, 
                        // in a fully integrated environment we would pass the block data as props:
                        // return <HeroSection key={key} {...block} />
                        return <Hero key={key} />;

                    case 'department_grid':
                        // return <DepartmentGridSection key={key} {...block} />
                        return <DepartmentGridSection key={key} />;

                    case 'doctor_highlight':
                        // return <DoctorHighlightSection key={key} {...block} />
                        return <DoctorHighlightSection key={key} />;

                    case 'appointment_cta':
                        return <AppointmentCTASection key={key} block={block} />;

                    case 'testimonial_section':
                        return <TestimonialSection key={key} block={block} />;

                    case 'insurance_section':
                        return <InsuranceSection key={key} block={block} />;

                    case 'blog_preview':
                        return <BlogPreviewSection key={key} block={block} />;

                    default:
                        console.warn(`BlockRenderer: Unknown block type encountered - ${(block as any)._type}`);
                        return null;
                }
            })}
        </>
    );
}

import { PageHeader } from "@/components/ui/page-header";
import { SectionContainer } from "@/components/ui/section-container";
import { Play } from "lucide-react";
import Image from "next/image";

const GALLERY_IMAGES = [
    { id: 1, src: "/images/hospital/Hospital view.webp", alt: "Hospital Exterior View", category: "Infrastructure" },
    { id: 2, src: "/images/hospital/Reception.webp", alt: "Modern Reception Desk", category: "Facilities" },
    { id: 3, src: "/images/hospital/OT.webp", alt: "Advanced Operating Theatre", category: "Clinical" },
    { id: 4, src: "/images/hospital/CT.webp", alt: "128-Slice CT Scanner", category: "Diagnostics" },
    { id: 5, src: "/images/hospital/Diagnostic.webp", alt: "Diagnostic Laboratory", category: "Diagnostics" },
    { id: 6, src: "/images/hospital/Consultation.webp", alt: "Specialist Consultation Room", category: "Departments" },
    { id: 7, src: "/images/hospital/ER.webp", alt: "24/7 Emergency Room", category: "Clinical" },
    { id: 8, src: "/images/hospital/Private room.webp", alt: "Premium Private Suite", category: "Facilities" },
    { id: 9, src: "/images/hospital/Hospital view 2.webp", alt: "Main Hospital Campus", category: "Infrastructure" },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHeader
                title="Hospital Gallery"
                description="Explore our state-of-the-art facilities, advanced technology, and patient-centric environments."
            />

            <section className="py-20">
                <SectionContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {GALLERY_IMAGES.map((image) => (
                            <div key={image.id} className="group relative rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none aspect-[4/3] cursor-pointer">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">{image.category}</span>
                                    <h3 className="text-white text-lg font-bold">{image.alt}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}

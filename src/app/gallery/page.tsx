import { PageHeader } from "@/components/ui/page-header";
import { SectionContainer } from "@/components/ui/section-container";
import { Play } from "lucide-react";

const GALLERY_IMAGES = [
    { id: 1, src: "https://images.unsplash.com/photo-1519494026892-80ba3f524733?auto=format&fit=crop&q=80&w=800", alt: "Hospital Exterior", category: "Infrastructure" },
    { id: 2, src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800", alt: "Modern Operating Room", category: "Facilities" },
    { id: 3, src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", alt: "Patient Room", category: "Accommodation" },
    { id: 4, src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800", alt: "Advanced MRI Machine", category: "Technology" },
    { id: 5, src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800", alt: "NICU Ward", category: "Departments" },
    { id: 6, src: "https://images.unsplash.com/photo-1582719478250-c89402eb7ae6?auto=format&fit=crop&q=80&w=800", alt: "Reception Area", category: "Infrastructure" },
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
                                <img
                                    src={image.src}
                                    alt={image.alt}
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

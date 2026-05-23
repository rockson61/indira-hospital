import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Hospital } from "lucide-react";
import { Stethoscope, HeartCardiogram } from "healthicons-react/outline";
import { SectionContainer } from "@/components/ui/section-container";

const flowData = [
    {
        title: "Care That Gets You",
        description: "Well Connected by Indira Hospital helps you find doctors based on what matters most to you. Because the right care starts with the right fit.",
        ctaText: "Learn more",
        ctaHref: "/doctors",
        imageSrc: "/images/hospital/Reception.webp",
        imageAlt: "Mother and Father with new baby",
        icon: <HeartCardiogram className="w-8 h-8 text-fuchsia-500" />
    },
    {
        title: "Care When You Need It",
        description: "Experience unparalleled service and peace of mind with our comprehensive services; ensuring you receive the care you need, whenever you need it.",
        ctaText: "Find a Doctor",
        ctaHref: "/doctors",
        imageSrc: "/images/hospital/Hospital view.webp",
        imageAlt: "Indira Hospital exterior",
        icon: <Hospital className="w-8 h-8 text-blue-500" />
    },
    {
        title: "Locations Near You",
        description: "Indira Hospital offers many locations across Tamil Nadu to provide convenient care for you and your family. We&apos;re nearby when you need us.",
        ctaText: "View Our Locations",
        ctaHref: "/doctor/near-me",
        imageSrc: "/images/hospital/Hospital.webp",
        imageAlt: "Hospital location map",
        icon: <MapPin className="w-8 h-8 text-amber-500" />
    },
    {
        title: "Services We Offer",
        description: "We&apos;re proud to offer comprehensive healthcare services for our community, including heart care, cancer care, primary care and pediatrics. We provide healthcare for life.",
        ctaText: "View Our Services",
        ctaHref: "/doctor/near-me/treat",
        imageSrc: "/images/hospital/OT.webp",
        imageAlt: "Doctor checking patient",
        icon: <Stethoscope className="w-8 h-8 text-emerald-500" />
    }
];

export function HomeCareFlow() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-900 border-y border-slate-200/60 dark:border-slate-800">
            <SectionContainer>
                <div className="space-y-16">
                    {flowData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-blue-500/20 rounded-[3rem] transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500" />
                                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:shadow-2xl border border-slate-200/60 dark:border-slate-700 bg-white dark:bg-transparent">
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 dark:from-slate-900/40 to-transparent" />
                                    </div>
                                    <div className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl hidden md:block border border-slate-200/60 dark:border-slate-700 z-10 animate-bounce-slow`}>
                                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-6">
                                    <h2 className="elite-section-title text-slate-900 dark:text-white">
                                        {item.title}
                                    </h2>
                                    <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                    <Link href={item.ctaHref} className="elite-button-primary mt-4 group/btn">
                                        {item.ctaText}
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </SectionContainer>
        </section>
    );
}

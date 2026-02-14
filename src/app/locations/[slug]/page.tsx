import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import {
    MapPin, Bus, Train, Phone, ArrowLeft, CheckCircle2, Star,
    Stethoscope, Bone, Heart, Baby, FlaskConical, Siren, Zap,
    Shield, Clock, Award, Users, MessageCircle, ArrowRight,
    Smile, Brain, Ribbon, Droplets
} from "lucide-react";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { SEED_DATA } from "@/lib/data/seed-data";
import { clinicConfig } from "@/lib/data/clinic-config";
import { getLocationBySlug } from "@/lib/api"; // Added import

const WHATSAPP_NUMBER = "917010650063";

function getWhatsAppUrl(locationName: string, message?: string) {
    const text = message || `Hi, I am from ${locationName}. I want to book an appointment at Indira Super Speciality Hospital.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Merge all locations
function getAllLocations() {
    const slugSet = new Set<string>();
    const merged: Array<{
        name: string;
        slug: string;
        district: string;
        distance: string;
        travelTime: string;
        description: string;
        category: string;
        transportOptions: { bus: boolean; train: boolean; auto: boolean; taxi: boolean };
        specialFeatures?: string[];
    }> = [];

    for (const loc of enhancedVelloreLocations) {
        if (!slugSet.has(loc.slug)) {
            slugSet.add(loc.slug);
            merged.push({
                name: loc.name, slug: loc.slug, district: loc.district,
                distance: loc.distance, travelTime: loc.travelTime,
                description: loc.description, category: loc.category,
                transportOptions: loc.transportOptions, specialFeatures: loc.specialFeatures,
            });
        }
    }

    for (const loc of tamilNaduLocations) {
        if (!slugSet.has(loc.slug)) {
            slugSet.add(loc.slug);
            merged.push({
                name: loc.name, slug: loc.slug, district: loc.district,
                distance: loc.distance, travelTime: loc.travelTime,
                description: loc.description, category: loc.category,
                transportOptions: loc.transportOptions, specialFeatures: loc.specialFeatures,
            });
        }
    }

    return merged;
}

const allLocations = getAllLocations();

// Icon mapping for departments
const deptIcons: Record<string, React.ElementType> = {
    "General Surgery": Stethoscope,
    "Orthopaedics": Bone,
    "Gastroenterology": FlaskConical,
    "Urology": FlaskConical,
    "Obstetrics & Gynaecology": Baby,
    "Spine Surgery": Bone,
    "Cardiology": Heart,
    "ICU & Emergency": Siren,
    "Dental": Smile,
    "Neurology": Brain,
    "Oncology": Ribbon,
    "Nephrology": Droplets,
};

export function generateStaticParams() {
    return allLocations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const location = allLocations.find((l) => l.slug === slug);

    if (!location) return { title: "Location Not Found" };

    return {
        title: `Best Hospital Near ${location.name} | Laparoscopic Surgery, Laser Piles | Indira Hospital Vellore`,
        description: `Indira Super Speciality Hospital is ${location.travelTime} from ${location.name}. Best laparoscopic surgery, laser piles treatment, fistula removal in ${location.district}. 24/7 emergency, 15+ departments. WhatsApp us now!`,
        keywords: [
            `hospital near ${location.name}`,
            `best hospital ${location.district}`,
            `laparoscopic surgery ${location.name}`,
            `laser piles treatment ${location.name}`,
            `fistula removal ${location.name}`,
            `super speciality hospital ${location.district}`,
            "Indira Hospital Vellore",
        ],
        openGraph: {
            title: `Best Hospital Near ${location.name} | Indira Hospital Vellore`,
            description: `Just ${location.distance} from ${location.name}. #1 for Laparoscopic Surgery, Laser Piles & Fistula. 24/7 Emergency.`,
        },
    };
}

// Structured Data (JSON-LD) for SEO
function LocationJsonLd({ location }: { location: (typeof allLocations)[0] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Hospital",
        name: clinicConfig.name,
        description: `Best super speciality hospital accessible from ${location.name}. Advanced laparoscopic surgery, laser piles treatment, and fistula removal.`,
        address: {
            "@type": "PostalAddress",
            streetAddress: clinicConfig.address,
            addressLocality: "Vellore",
            addressRegion: "Tamil Nadu",
            postalCode: "632001",
            addressCountry: "IN",
        },
        telephone: clinicConfig.phone,
        url: `https://indirasuperspecialityhospital.com/locations/${location.slug}`,
        medicalSpecialty: [
            "General Surgery",
            "Laparoscopic Surgery",
            "Proctology",
            "Orthopaedics",
            "Cardiology",
        ],
        areaServed: {
            "@type": "Place",
            name: `${location.name}, ${location.district}`,
        },
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export default async function LocationPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const location = allLocations.find((l) => l.slug === slug);

    if (!location) notFound();

    // Fetch M2M data from API
    const apiLocation = await getLocationBySlug(slug).catch(() => null);

    const isNearby = parseInt(location.distance) <= 50;

    // Use M2M doctors if available, else fallback to SEED_DATA
    const doctors = (apiLocation?.related_doctors as any[])?.length > 0
        ? apiLocation!.related_doctors
        : SEED_DATA.doctors.slice(0, 3); // Fallback to first 3 if no specific link

    // Use M2M services if available, else fallback to SEED_DATA
    const departments = (apiLocation?.related_services as any[])?.length > 0
        ? apiLocation!.related_services
        : SEED_DATA.services;

    const waUrl = getWhatsAppUrl(location.name);

    // Google Maps embed URL for directions
    const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${encodeURIComponent(location.name + ", Tamil Nadu")}&destination=${encodeURIComponent("Indira Super Speciality Hospital, Vellore, Tamil Nadu")}&mode=driving`;

    return (
        <main className="min-h-screen">
            <LocationJsonLd location={location} />

            {/* ========== HERO ========== */}
            <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white py-20 lg:py-28 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <SectionContainer className="relative z-10">
                    <Link
                        href="/locations"
                        className="inline-flex items-center text-teal-200 hover:text-white mb-6 transition-colors text-sm"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        All Locations
                    </Link>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-block px-3 py-1 bg-amber-500 text-black font-bold text-xs rounded-full uppercase tracking-wider">
                                    Serving {location.name}
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur text-white text-xs rounded-full">
                                    <MapPin className="w-3 h-3" /> {location.distance} Away
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Best Super Speciality Hospital {isNearby ? "Near" : "for Patients from"}{" "}
                                <span className="text-amber-400">{location.name}</span>
                            </h1>
                            <p className="text-xl text-teal-100 mb-3">
                                World-class healthcare just <strong className="text-white">{location.travelTime}</strong> away.
                                {" "}#1 for <strong className="text-amber-300">Laparoscopic Surgery</strong>,{" "}
                                <strong className="text-amber-300">Laser Piles</strong> &{" "}
                                <strong className="text-amber-300">Fistula Treatment</strong> in Tamil Nadu.
                            </p>
                            <p className="text-teal-200 mb-8">{location.description}</p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    WhatsApp Us Now
                                </a>
                                <a
                                    href={`tel:${clinicConfig.phone}`}
                                    className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call {clinicConfig.phone}
                                </a>
                            </div>
                        </div>

                        {/* Hero Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Award, label: "Years Experience", value: "25+" },
                                { icon: Users, label: "Patients Treated", value: "1L+" },
                                { icon: Stethoscope, label: "Departments", value: "15+" },
                                { icon: Clock, label: "Emergency", value: "24/7" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center border border-white/10">
                                    <stat.icon className="w-7 h-7 text-amber-400 mx-auto mb-2" />
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-xs text-teal-200">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* ========== SIGNATURE TREATMENTS (Marketing/SEO) ========== */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                <SectionContainer>
                    <div className="text-center mb-12">
                        <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Why We Are #1</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                            Best Laparoscopic & Laser Surgery Center {isNearby ? "Near" : "for"} {location.name}
                        </h2>
                        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                            Indira Hospital is the most trusted destination for advanced minimally invasive surgeries in Tamil Nadu.
                            Patients from {location.name} choose us for our expertise and affordable care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Laparoscopic Surgery */}
                        <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                                <Zap className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Laparoscopic Surgery</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Advanced keyhole surgery for Hernia, Gallbladder, Appendix, and Bariatric procedures.
                                Minimal scars, faster recovery, and same-day discharge available.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {["3mm Incision Technology", "Same Day Discharge", "Insurance Cashless Accepted", "25+ Years Expert Surgeons"].map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                            <a href={getWhatsAppUrl(location.name, `Hi, I'm from ${location.name}. I need information about Laparoscopic Surgery.`)}
                                target="_blank" rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-800 group-hover:gap-2 gap-1 transition-all">
                                Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Laser Piles */}
                        <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                                Most Popular
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                                <Star className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Laser Piles Treatment</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                USFDA-approved laser treatment for Piles, Fissure & Fistula.
                                Painless, 30-minute procedure with 24-hour recovery.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {["No Cuts, No Stitches", "30 Minute Procedure", "24-Hour Recovery", "10,000+ Piles Patients Treated"].map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                            <a href={getWhatsAppUrl(location.name, `Hi, I'm from ${location.name}. I need information about Laser Piles Treatment.`)}
                                target="_blank" rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center text-red-600 font-semibold text-sm hover:text-red-800 group-hover:gap-2 gap-1 transition-all">
                                Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Fistula Removal */}
                        <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-5">
                                <Shield className="w-7 h-7 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fistula & Fissure Removal</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Permanent cure for Fistula using advanced VAAFT / Laser / LIFT techniques.
                                No recurrence guarantee, minimal pain, and quick recovery.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {["Advanced VAAFT Technique", "No Recurrence Guarantee", "Minimal Pain & Downtime", "Expert Proctology Team"].map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                            <a href={getWhatsAppUrl(location.name, `Hi, I'm from ${location.name}. I need information about Fistula Treatment.`)}
                                target="_blank" rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center text-teal-600 font-semibold text-sm hover:text-teal-800 group-hover:gap-2 gap-1 transition-all">
                                Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* ========== ALL DEPARTMENTS (Cross-linked) ========== */}
            <section className="py-16 bg-white">
                <SectionContainer>
                    <div className="text-center mb-12">
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">15+ Super Specialities</span>
                        <h2 className="text-3xl font-bold mt-2 text-gray-900">
                            Healthcare Departments for {location.name} Patients
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {(departments as any[]).map((dept) => {
                            const IconComp = deptIcons[dept.title] || Stethoscope;
                            // Check if API data has icon, else usage static map
                            // API services might have 'icon' string field
                            return (
                                <Link
                                    key={dept.slug}
                                    href={`/departments/${dept.slug}`} // Note: using departments route for services
                                    className="group flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-200"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-teal-100 group-hover:bg-teal-200 flex items-center justify-center flex-shrink-0 transition-colors">
                                        <IconComp className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors text-sm">
                                            {dept.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{dept.short_description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </SectionContainer>
            </section>

            {/* ========== DOCTORS (Cross-linked) ========== */}
            <section className="py-16 bg-gray-50">
                <SectionContainer>
                    <div className="text-center mb-12">
                        <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Our Expert Team</span>
                        <h2 className="text-3xl font-bold mt-2 text-gray-900">
                            Meet Our Doctors Serving {location.name}
                        </h2>
                        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                            Our experienced surgeons and specialists treat thousands of patients from {location.district} district every year.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(doctors as any[]).map((doc) => (
                            <Link
                                key={doc.slug}
                                href={`/doctors/${doc.slug}`}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                                        {doc.image ? (
                                            <img src={`https://admin.indirasuperspecialityhospital.com/assets/${doc.image}`} alt={doc.name} className="w-full h-full object-cover" />
                                        ) : (
                                            doc.name.split(" ").map((n: string) => n[0]).slice(0, 2).join("")
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                                            {doc.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{doc.designation}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{typeof doc.department === 'string' ? doc.department : doc.department?.name} • {doc.experience_years}+ Years</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-teal-600 font-medium">View Profile →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* ========== HOW TO REACH + GOOGLE MAP ========== */}
            <section className="py-16 bg-white">
                <SectionContainer>
                    <div className="text-center mb-12">
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Directions from {location.name}</span>
                        <h2 className="text-3xl font-bold mt-2 text-gray-900">
                            How to Reach Indira Hospital from {location.name}
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px] lg:h-full min-h-[350px]">
                            <iframe
                                src={mapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: 350 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Directions from ${location.name} to Indira Hospital`}
                            />
                        </div>

                        {/* Travel Options */}
                        <div className="space-y-5">
                            <div className="bg-teal-50 p-5 rounded-xl border border-teal-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Distance & Time</h3>
                                        <p className="text-sm text-teal-700">{location.distance} • {location.travelTime} drive</p>
                                    </div>
                                </div>
                            </div>

                            {location.transportOptions.bus && (
                                <div className="bg-white p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold flex items-center gap-2 mb-2">
                                        <Bus className="w-5 h-5 text-blue-600" /> By Bus
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {isNearby
                                            ? `Buses run frequently from ${location.name} Bus Stand to Vellore New Bus Stand. From there, take an auto (5 mins) to Indira Hospital.`
                                            : `Take a government or private bus from ${location.name} to Vellore. Multiple departures daily. Hospital is 5 min from Vellore Bus Stand.`}
                                    </p>
                                </div>
                            )}

                            {location.transportOptions.train && (
                                <div className="bg-white p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold flex items-center gap-2 mb-2">
                                        <Train className="w-5 h-5 text-blue-600" /> By Train
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Board a train to Katpadi Junction (Vellore){parseInt(location.distance) > 100 ? " via Chennai or major junctions" : ""}.
                                        The hospital is 15 mins from Katpadi station.
                                    </p>
                                </div>
                            )}

                            <div className="bg-white p-5 rounded-xl border border-gray-200">
                                <h3 className="font-bold flex items-center gap-2 mb-2">
                                    🚗 By Car / Taxi
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Drive from {location.name} to Vellore ({location.distance}, approximately {location.travelTime}).
                                    Private taxis and cab services are available.
                                </p>
                            </div>

                            <a
                                href={getWhatsAppUrl(location.name, `Hi, I'm from ${location.name}. Can you help me arrange transport to Indira Hospital?`)}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Need Transport Help? WhatsApp Us
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* ========== WHY CHOOSE US ========== */}
            <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
                <SectionContainer>
                    <div className="text-center mb-12">
                        <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider">Why {location.name} Patients Trust Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Best Hospital in Tamil Nadu for Advanced Surgery
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🏆", title: "25+ Years Legacy", desc: "Trusted by lakhs of patients across Tamil Nadu since 1999." },
                            { icon: "🔬", title: "Advanced Technology", desc: "Latest laparoscopic, laser & robotic surgical equipment." },
                            { icon: "👨‍⚕️", title: "Expert Surgeons", desc: "Board-certified super-specialists with 15-30 years experience." },
                            { icon: "💸", title: "Affordable Pricing", desc: "Transparent pricing. Insurance cashless for 50+ providers." },
                            { icon: "🚑", title: "24/7 Emergency", desc: "Round-the-clock emergency & ambulance support." },
                            { icon: "⭐", title: "10,000+ Surgeries", desc: "Proven track record in laparoscopic & laser procedures." },
                        ].map((item) => (
                            <div key={item.title} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-purple-200 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* ========== TREATMENTS CROSS-LINK ========== */}
            <section className="py-16 bg-gray-50">
                <SectionContainer>
                    <div className="text-center mb-12">
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Popular Treatments</span>
                        <h2 className="text-3xl font-bold mt-2 text-gray-900">
                            Treatment Pages for {location.name} Patients
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Piles Treatment", slug: "/treatments/piles-treatment-vellore", desc: "Laser piles treatment — no cuts, no pain, 30-min cure.", tag: "#1 in TN" },
                            { title: "Hernia Surgery", slug: "/departments/general-surgery", desc: "Laparoscopic mesh hernia repair with same-day discharge.", tag: "Laparoscopic" },
                            { title: "Gallbladder Surgery", slug: "/departments/general-surgery", desc: "Single-incision laparoscopic cholecystectomy.", tag: "Keyhole" },
                            { title: "Joint Replacement", slug: "/departments/orthopaedics", desc: "Total knee & hip replacement with navigation technology.", tag: "Advanced" },
                            { title: "Heart Care", slug: "/departments/cardiology", desc: "Angiography, angioplasty & pacemaker implantation.", tag: "24/7 Cath Lab" },
                            { title: "Spine Surgery", slug: "/departments/spine-surgery", desc: "Minimally invasive spine surgery and disc treatment.", tag: "Expert" },
                        ].map((t) => (
                            <Link
                                key={t.title}
                                href={t.slug}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">{t.title}</h3>
                                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex-shrink-0">{t.tag}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{t.desc}</p>
                                <span className="text-teal-600 text-sm font-medium">Learn More →</span>
                            </Link>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* ========== WHATSAPP CONTACT FORM / CTA ========== */}
            <section className="py-16 bg-white">
                <SectionContainer>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MessageCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Book Your Appointment from {location.name}
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
                            Skip the phone queue! Chat with our medical coordinator instantly on WhatsApp.
                            Get appointment dates, cost estimates, and doctor availability in minutes.
                        </p>

                        <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-xl mx-auto">
                            <a
                                href={getWhatsAppUrl(location.name)}
                                target="_blank" rel="noopener noreferrer"
                                className="flex flex-col items-center gap-2 p-5 bg-green-50 hover:bg-green-100 rounded-2xl transition-colors border border-green-200 group"
                            >
                                <MessageCircle className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-green-700 text-sm">WhatsApp</span>
                                <span className="text-xs text-green-600">Instant Reply</span>
                            </a>
                            <a
                                href={`tel:${clinicConfig.phone}`}
                                className="flex flex-col items-center gap-2 p-5 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors border border-blue-200 group"
                            >
                                <Phone className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-blue-700 text-sm">Call Us</span>
                                <span className="text-xs text-blue-600">{clinicConfig.phone}</span>
                            </a>
                            <Link
                                href="/contact"
                                className="flex flex-col items-center gap-2 p-5 bg-purple-50 hover:bg-purple-100 rounded-2xl transition-colors border border-purple-200 group"
                            >
                                <MapPin className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-purple-700 text-sm">Visit Us</span>
                                <span className="text-xs text-purple-600">Vellore, TN</span>
                            </Link>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* ========== FINAL STICKY CTA (WhatsApp) ========== */}
            <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-10">
                <SectionContainer>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Need Medical Help from {location.name}?
                            </h2>
                            <p className="text-green-100 mt-1">
                                WhatsApp us now for instant consultation, appointment booking, and cost estimates.
                            </p>
                        </div>
                        <a
                            href={waUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-lg flex-shrink-0"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}

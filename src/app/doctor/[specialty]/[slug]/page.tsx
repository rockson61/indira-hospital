import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { doctors } from "@/data/doctors";
import { getDepartments } from "@/lib/api";
import { Phone, Calendar, Clock, Award, MapPin, ChevronRight, Star, Stethoscope, GraduationCap } from "lucide-react";

export async function generateStaticParams() {
    return doctors.map((doc) => ({
        specialty: doc.specialty.toLowerCase().replace(/\s+/g, '-'),
        slug: doc.slug
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ specialty: string; slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const doc = doctors.find((d) => d.slug === slug);
    if (!doc) return { title: "Doctor Not Found" };
    return {
        title: `${doc.name} — ${doc.specialty} | Best Hospital in TN & India | Indira Hospital`,
        description: doc.bio,
    };
}

export default async function DoctorDetailPage({
    params,
}: {
    params: Promise<{ specialty: string; slug: string }>;
}) {
    const { slug, specialty } = await params;
    const currDoctor = doctors.find((d) => d.slug === slug);

    if (!currDoctor) {
        notFound();
    }

    // Fetch departments to find the matching one
    let departments: any[] = [];
    try {
        departments = await getDepartments().catch(() => []);
    } catch { departments = []; }

    const dept = departments.find((d: any) => d.slug === currDoctor.departmentId);

    // Get other doctors in the same department
    const relatedDoctors = doctors.filter(
        (d) => d.departmentId === currDoctor.departmentId && d.slug !== currDoctor.slug
    );

    const initials = currDoctor.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_70%)]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm text-slate-300 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
                        <Link href="/doctor/near-me" className="hover:text-white transition-colors capitalize">Our Specialists</Link>
                        <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
                        <span className="text-teal-300 font-medium">{currDoctor.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left: Doctor Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-start gap-6">
                                {/* Avatar */}
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-black text-3xl md:text-4xl shadow-xl flex-shrink-0">
                                    {initials}
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">{currDoctor.name}</h1>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-4 py-1.5 bg-teal-500/20 border border-teal-400/30 rounded-full text-sm font-bold text-teal-300">
                                            {currDoctor.specialty}
                                        </span>
                                        {dept && (
                                            <Link href={`/departments/${dept.slug}`} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 transition-colors">
                                                {dept.title} Dept.
                                            </Link>
                                        )}
                                    </div>
                                    <p className="text-slate-300 leading-relaxed max-w-2xl text-lg">{currDoctor.bio}</p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                                    <Clock className="w-5 h-5 text-teal-400 mx-auto mb-2" />
                                    <p className="text-2xl font-black text-white">{currDoctor.experience}+</p>
                                    <p className="text-xs text-slate-400 font-medium">Years Experience</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                                    <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                                    <p className="text-2xl font-black text-white">4.9</p>
                                    <p className="text-xs text-slate-400 font-medium">Patient Rating</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                                    <Award className="w-5 h-5 text-teal-400 mx-auto mb-2" />
                                    <p className="text-2xl font-black text-white">{currDoctor.education.length}</p>
                                    <p className="text-xs text-slate-400 font-medium">Qualifications</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: CTA Card */}
                        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl text-slate-900">
                            <h3 className="text-lg font-black mb-4">Book a Consultation</h3>
                            <p className="text-sm text-slate-500 mb-6">Schedule an appointment with {currDoctor.name} at Indira Super Speciality Hospital.</p>
                            <Link
                                href={`/book-appointment?doctor=${currDoctor.slug}`}
                                className="block w-full text-center px-6 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all shadow-md"
                            >
                                <Calendar className="w-5 h-5 inline-block mr-2 -mt-0.5" />
                                Book Appointment
                            </Link>
                            <a
                                href="tel:+919809824425"
                                className="block w-full text-center px-6 py-3 mt-3 bg-rose-50 text-rose-600 font-bold rounded-2xl hover:bg-rose-100 transition-colors"
                            >
                                <Phone className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Education */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900">Education & Qualifications</h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {currDoctor.education.map((edu, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl text-sm">
                                        {edu}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900">Availability Schedule</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {currDoctor.availability.map((day, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-3 bg-teal-50 border border-teal-100 rounded-xl">
                                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                                        <span className="text-sm font-bold text-teal-700">{day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Location Card */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-teal-600" />
                                </div>
                                <h3 className="font-bold text-slate-900">Hospital Location</h3>
                            </div>
                            <p className="text-sm text-slate-500">Indira Super Speciality Hospital, Vellore, Tamil Nadu</p>
                        </div>

                        {/* Related Doctors */}
                        {relatedDoctors.length > 0 && (
                            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                                        <Stethoscope className="w-4 h-4 text-teal-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900">More Specialists</h3>
                                </div>
                                <div className="space-y-3">
                                    {relatedDoctors.map((doc) => (
                                        <Link
                                            key={doc.slug}
                                            href={`/doctor/${doc.specialty.toLowerCase().replace(/\s+/g, '-')}/${doc.slug}`}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                <span className="text-teal-700 font-bold text-xs">
                                                    {doc.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{doc.name}</p>
                                                <p className="text-xs text-slate-500">{doc.specialty}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

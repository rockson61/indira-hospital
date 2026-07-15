import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getDoctors, getDepartments } from "@/lib/api";
import { constructMetadata } from "@/lib/seo-utils";
import { Phone, Calendar, Clock, Award, MapPin, ChevronRight, Star, GraduationCap, Settings, MessageCircle, Quote, Activity, Tag, Sparkles } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import EntityReviews from "@/components/trust/EntityReviews";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { UnifiedEntitySection } from "@/components/seo/UnifiedEntitySection";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";
import { HospitalCard } from "@/components/entities/HospitalCard";
import { DoctorAvatar } from "@/components/entities/DoctorAvatar";
import { LocationCard } from "@/components/entities/LocationCard";
import { SectionContainer } from "@/components/ui/section-container";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";
import { TREATMENT_DATA } from "@/lib/data/treatment-data";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { injectInternalLinks } from "@/lib/html-linkify";
import { EliteComparisonBank } from "@/components/seo/EliteComparisonBank";

/** Build a title → treatment lookup for O(1) resolution */
const treatmentByTitle = new Map(
 TREATMENT_DATA.map(t => [t.title.toLowerCase(), t])
);

/** Given any procedure display text, return the best-match href */
function getProcedureHref(procedure: string, doctorDeptSlug?: string): string {
 const key = procedure.toLowerCase();
 // 1. Exact title match
 const exact = treatmentByTitle.get(key);
 if (exact) return `/doctor/near-me/treat/${exact.parentServiceSlug}/${exact.slug}`;
 // 2. Partial match (procedure text contains treatment title or vice versa)
 for (const [title, t] of treatmentByTitle) {
 if (key.includes(title) || title.includes(key)) {
 return `/doctor/near-me/treat/${t.parentServiceSlug}/${t.slug}`;
 }
 }
 // 3. Fall back to department / service-level treat page
 const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
 if (doctorDeptSlug) return `/doctor/near-me/treat/${doctorDeptSlug}`;
 return `/doctor/near-me/treat/${toSlug(procedure)}`;
}

export const dynamicParams = false;

export function getDoctorSpecialtySlug(doc: any): string {
 const rawDept = typeof doc.department === 'string' ? doc.department : doc.department?.name || doc.specialty || 'specialist';
 return rawDept.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function generateStaticParams() {
 const doctors = await getDoctors().catch(() => []);
 return doctors.map((doc: any) => ({
 specialty: getDoctorSpecialtySlug(doc),
 slug: doc.slug
 }));
}

export async function generateMetadata({ params }: { params: Promise<{ specialty: string; slug: string }> }): Promise<Metadata> {
 const { slug, specialty } = await params;
 const doctors = await getDoctors().catch(() => []);
 const doc = doctors.find((d: any) => d.slug === slug);
 if (!doc) return { title: "Doctor Not Found"};
 const deptName = typeof doc.department === 'string' ? doc.department : doc.department?.name || 'Specialist';
 const title = doc.seo_title || `Best ${deptName} in Vellore — Dr. ${doc.name} | Same-Day Discharge | Indira Hospital`;
 const desc = doc.seo_description || doc.bio?.substring(0, 155) || `Consult with Dr. ${doc.name}, a leading ${deptName} at Indira Super Speciality Hospital, Vellore. NABH accredited care with advanced 24/7 laser and laparoscopic treatment.`;
 
 return constructMetadata({
 title,
 description: desc,
 path: `/doctor/${specialty}/${slug}`,
 image: doc.image || `/api/og?title=${encodeURIComponent(`Dr. ${doc.name}`)}&subtitle=${encodeURIComponent(deptName)}&type=Specialist`
 });
}


export default async function DoctorProfileRoute({
 params,
}: {
 params: Promise<{ specialty: string; slug: string }>;
}) {
 const { slug, specialty } = await params;
 const allDoctors = await getDoctors().catch(() => []);
 const currDoctor = allDoctors.find((d: any) => d.slug === slug);

 if (!currDoctor) {
 notFound();
 }

 const isLaserSpecialty = (currDoctor.specialty + (currDoctor.bio || "")).toLowerCase().match(/piles|fistula|fissure|laser|proctology|varicose/);
 const isLapSpecialty = (currDoctor.specialty + (currDoctor.bio || "")).toLowerCase().match(/laparoscopic|hernia|gallbladder|appendix/);
 const isOrthoSpecialty = (currDoctor.specialty + (currDoctor.bio || "")).toLowerCase().match(/ortho|joint|knee|hip|replacement|robotic/);
 const isEyeSpecialty = (currDoctor.specialty + (currDoctor.bio || "")).toLowerCase().match(/eye|ophthalmology|cataract|vision/);

 const comparisonType = isLaserSpecialty ? 'laser' : isLapSpecialty ? 'laparoscopy' : isOrthoSpecialty ? 'orthopedics' : isEyeSpecialty ? 'ophthalmology' : null;

 // Fetch departments to find the matching one
 let departments: any[] = [];
 try {
 departments = await getDepartments().catch(() => []);
 } catch { departments = []; }

 const dept = departments.find((d: any) => d.slug === currDoctor.departmentId);

 // Get other doctors in the same department
 const relatedDoctors = allDoctors.filter(
 (d: any) => d.department === currDoctor.department && d.slug !== currDoctor.slug
 );

 const initials = currDoctor.name.split("").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase();
 const deptName = typeof currDoctor.department === 'string' ? currDoctor.department : currDoctor.department?.name || currDoctor.specialty || 'Specialist';

 return (
 <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
 <JsonLdSchema
 type="physician"
 name={currDoctor.name}
 specialty={currDoctor.specialty || (typeof currDoctor.department === 'string' ? currDoctor.department : currDoctor.department?.name || 'Specialist')}
 description={currDoctor.bio || `Expert doctor at Indira Hospital`}
 url={`/doctor/${specialty}/${slug}`}
 />
 <JsonLdSchema
 type="breadcrumb"
 items={[
 { name: 'Home', url: '/' },
 { name: 'Doctors', url: '/doctors' },
 { name: currDoctor.name, url: `/doctor/${specialty}/${slug}` },
 ]}
 />
 
 {/* Modern Cinematic Hero Section */}
 <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden pb-16">
 <div className="absolute inset-0 opacity-10"
 style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px"}} />
 
 {/* Dynamic Ambient Glows */}
 <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse"/>
 <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none"/>

 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-24 z-10">
 {/* Breadcrumb */}
 <nav className="flex items-center text-sm tracking-wider uppercase breadcrumb-on-dark mb-8 font-semibold">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-3.5 h-3.5 mx-2 opacity-50 text-indigo-400"/>
 <Link href="/doctor/near-me"className="hover:text-white transition-colors">Our Specialists</Link>
 <ChevronRight className="w-3.5 h-3.5 mx-2 opacity-50 text-indigo-400"/>
 <span className="text-fuchsia-300 font-bold">{currDoctor.name}</span>
 </nav>

 <div className="grid lg:grid-cols-3 gap-10 items-start">
 {/* Left: Doctor Main Info */}
 <div className="lg:col-span-2 space-y-8">
 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
 {/* Avatar */}
 <div className="relative group">
 <div className="absolute -inset-1.5 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-[2.75rem] blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"/>
 <DoctorAvatar
 src={currDoctor.image}
 name={currDoctor.name}
 initials={initials}
 className="w-36 h-36 md:w-44 md:h-44 rounded-[2.5rem] border-4 border-slate-900 shadow-2xl bg-slate-900 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
 />
 </div>
 
 <div className="space-y-4">
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-300 text-sm font-black tracking-widest uppercase shadow-lg">
 <Sparkles className="w-4 h-4 text-amber-400 animate-pulse"/>
 Best {deptName} Doctor in Vellore
 </span>
 
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-tight">
 {currDoctor.name}
 </h1>
 
 <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-fuchsia-300 via-indigo-200 to-white bg-clip-text text-transparent">
 {currDoctor.designation || currDoctor.specialty || deptName}
 </p>
 
 {/* Keyword Tags */}
 {currDoctor.specialties && currDoctor.specialties.length > 0 && (
 <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
 {(currDoctor.specialties as string[]).slice(0, 5).map((tag: string) => (
 <span
 key={tag}
 className="inline-flex items-center gap-1.5 px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-sm font-semibold text-fuchsia-200"
 >
 <Tag className="w-3 h-3 opacity-70 text-fuchsia-400"/>
 {tag}
 </span>
 ))}
 {dept && (
 <Link
 href={`/departments/${dept.slug}`}
 className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-slate-300 hover:bg-white/10 transition-colors"
 >
 {dept.title} Dept.
 </Link>
 )}
 </div>
 )}
 </div>
 </div>

 <p 
 className="text-slate-300 leading-relaxed text-lg max-w-3xl font-light pt-2"
 dangerouslySetInnerHTML={{ __html: injectInternalLinks(currDoctor.bio || "") }}
 />
 
 {/* Elite Specialty Badge */}
 {comparisonType && (
 <div className="inline-flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-md">
 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
 <Activity className="w-6 h-6 animate-pulse"/>
 </div>
 <div>
 <p className="text-xs text-fuchsia-400 font-black uppercase tracking-[0.2em]">Indira Elite Standard</p>
 <p className="text-sm font-bold text-white leading-tight">Master Surgeon in {comparisonType === 'laser' ? 'Advanced Laser Proctology' : comparisonType === 'laparoscopy' ? 'Minimally Invasive Surgery' : comparisonType === 'orthopedics' ? 'Robotic Joint Reconstruction' : 'Micro-Incision Ophthalmology'}</p>
 </div>
 </div>
 )}

 {/* Quick Stats (Glassmorphic) */}
 <div className="grid grid-cols-3 gap-4 pt-4">
 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300">
 <Clock className="w-5 h-5 text-fuchsia-400 mx-auto mb-2"/>
 <p className="text-2xl font-black text-white">{currDoctor.experience_years || currDoctor.years_of_experience || currDoctor.experience || 10}+</p>
 <p className="text-xs text-subtle-on-light font-bold uppercase tracking-wider">Years Experience</p>
 </div>
 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300">
 <Star className="w-5 h-5 text-amber-400 mx-auto mb-2"/>
 <p className="text-2xl font-black text-white">4.9</p>
 <p className="text-xs text-subtle-on-light font-bold uppercase tracking-wider">Patient Rating</p>
 </div>
 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300">
 <Award className="w-5 h-5 text-indigo-400 mx-auto mb-2"/>
 <p className="text-2xl font-black text-white">{Array.isArray(currDoctor.qualifications || currDoctor.education) ? (currDoctor.qualifications || currDoctor.education).length : 2}</p>
 <p className="text-xs text-subtle-on-light font-bold uppercase tracking-wider">Qualifications</p>
 </div>
 </div>
 </div>

 {/* Right: Premium CTA Card */}
 <div className="lg:col-span-1">
 {(() => {
 const isDentalDoctor = currDoctor.department?.toLowerCase().includes('dental') || currDoctor.specialty?.toLowerCase().includes('dental') || specialty.includes('dental');
 const doctorPhone = isDentalDoctor ? "+91 7010650063": siteConfig.contact.phone;
 const doctorWhatsapp = isDentalDoctor ? "917010650063": siteConfig.contact.whatsapp;

 return (
 <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white space-y-6">
 <div>
 <h3 className="text-xl font-black tracking-tight mb-2">Consultation Booking</h3>
 <p className="text-sm text-slate-500 dark:text-subtle-on-light">Direct clinic scheduling for standard and surgical checkups.</p>
 </div>

 <div className="space-y-3">
 <Link
 href={`/book-appointment?doctor=${currDoctor.slug}`}
 className="flex items-center justify-center gap-2 w-full text-center px-6 py-4 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-extrabold rounded-2xl hover:from-fuchsia-500 hover:to-indigo-500 transition-all shadow-xl shadow-fuchsia-500/25"
 >
 <Calendar className="w-5 h-5"/>
 Book Appointment
 </Link>
 <a
 href={`https://wa.me/${doctorWhatsapp}?text=${encodeURIComponent(`Hi, I'd like to book an appointment with ${currDoctor.name}.`)}`}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center gap-2 w-full text-center px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white font-extrabold rounded-2xl transition-all shadow-lg shadow-green-500/20"
 >
 <MessageCircle className="w-5 h-5"/>
 WhatsApp Booking
 </a>
 <a
 href={`tel:${doctorPhone.replace(/\s+/g, '')}`}
 className="flex items-center justify-center gap-2 w-full text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 font-extrabold rounded-2xl transition-colors"
 >
 <Phone className="w-4 h-4"/>
 Call Specialist
 </a>
 </div>

 {/* Priority indicators */}
 <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5">
 <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-600 dark:text-subtle-on-light">
 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"/>
 <span>Priority Same-Day Diagnostics Available</span>
 </div>
 <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-600 dark:text-subtle-on-light">
 <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/>
 <span>All Major Insurances Accepted</span>
 </div>
 </div>
 </div>
 );
 })()}
 </div>
 </div>
 </div>
 </section>

 {/* Main Layout Grid */}
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
 <div className="grid lg:grid-cols-3 gap-10">
 {/* Main Body Column */}
 <div className="lg:col-span-2 space-y-10">
 {/* Expertise & Procedures */}
 {((currDoctor.specialties && currDoctor.specialties.length > 0) || (currDoctor.procedures && currDoctor.procedures.length > 0)) && (() => {
 const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
 const specialtySet = new Set<string>(currDoctor.specialties || []);
 const deptSlug = dept ? dept.slug : undefined;
 const allItems: string[] = [...(currDoctor.specialties || []), ...(currDoctor.procedures || [])];
 return (
 <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950/50 flex items-center justify-center">
 <Award className="w-5 h-5 text-fuchsia-600"/>
 </div>
 <h2 className="text-2xl font-black font-heading text-slate-900 dark:text-white">Expertise & Procedures</h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {allItems.map((item: string, i: number) => {
 const href = specialtySet.has(item)
 ? `/departments/${toSlug(item)}`
 : getProcedureHref(item, deptSlug || specialty);
 return (
 <Link
 key={i}
 href={href}
 className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800/50 group hover:border-fuchsia-400 dark:hover:border-fuchsia-700 hover:bg-fuchsia-50/50 dark:hover:bg-fuchsia-950/20 transition-all duration-300"
 >
 <div className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center flex-shrink-0 shadow-sm text-fuchsia-600 dark:text-fuchsia-400 font-bold text-sm">
 {i + 1}
 </div>
 <span className="flex-1 text-slate-700 dark:text-slate-200 font-semibold leading-snug group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300 transition-colors text-sm">
 {item}
 </span>
 <Activity className="w-3.5 h-3.5 text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"/>
 </Link>
 );
 })}
 </div>
 </div>
 );
 })()}

 {/* Education */}
 {((currDoctor.qualifications || currDoctor.education) && (
 <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950/50 flex items-center justify-center">
 <GraduationCap className="w-5 h-5 text-fuchsia-600"/>
 </div>
 <h2 className="text-2xl font-black font-heading text-slate-900 dark:text-white">Education & Qualifications</h2>
 </div>
 <div className="flex flex-wrap gap-3">
 {(Array.isArray(currDoctor.qualifications || currDoctor.education)
 ? (currDoctor.qualifications || currDoctor.education)
 : [currDoctor.qualifications || currDoctor.education]
 ).map((edu: any, i: number) => (
 <span key={i} className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl text-sm">
 {typeof edu === 'object' && edu !== null
 ? `${edu.degree || edu.name || ''} ${edu.institution ? `(${edu.institution})` : ''}`.trim() || JSON.stringify(edu)
 : edu}
 </span>
 ))}
 </div>
 </div>
 ))}

 {/* Availability Schedule */}
 <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950/50 flex items-center justify-center">
 <Calendar className="w-5 h-5 text-fuchsia-600"/>
 </div>
 <h2 className="text-2xl font-black font-heading text-slate-900 dark:text-white">Availability Schedule</h2>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
 {(Array.isArray(currDoctor.availability) ? currDoctor.availability : ['Mon - Sat']).map((day: string, i: number) => (
 <div key={i} className="flex items-center gap-3 px-5 py-4 bg-fuchsia-50/50 dark:bg-fuchsia-950/20 border border-fuchsia-100/50 dark:border-fuchsia-900/30 rounded-2xl">
 <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 animate-pulse"/>
 <span className="text-sm font-bold text-fuchsia-700 dark:text-fuchsia-300">{day}</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Sidebar Column */}
 <div className="space-y-8">
 {/* Hospital Card */}
 <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-1 shadow-sm border border-slate-100 dark:border-slate-800">
 <HospitalCard />
 </div>

 {/* Professional Memberships Card */}
 {currDoctor.memberships && currDoctor.memberships.length > 0 && (
 <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-8 h-8 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/50 flex items-center justify-center">
 <Award className="w-4 h-4 text-fuchsia-600"/>
 </div>
 <h3 className="font-bold text-slate-900 dark:text-white">Memberships</h3>
 </div>
 <ul className="space-y-3">
 {currDoctor.memberships.map((membership: string, i: number) => (
 <li key={i} className="flex gap-3 text-slate-600 dark:text-subtle-on-light">
 <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 mt-2 flex-shrink-0"/>
 <span className="text-sm font-semibold leading-relaxed">{membership}</span>
 </li>
 ))}
 </ul>
 </div>
 )}

 {/* Location / Clinics Card */}
 <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-8 h-8 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/50 flex items-center justify-center">
 <MapPin className="w-4 h-4 text-fuchsia-600"/>
 </div>
 <h3 className="font-bold text-slate-900 dark:text-white">Available at Clinics</h3>
 </div>
 <div className="space-y-2">
 {(currDoctor.available_locations && currDoctor.available_locations.length > 0) ? (
 currDoctor.available_locations.map((loc: any, i: number) => (
 <Link
 key={i}
 href={`/doctor/near-me/${typeof loc === 'string' ? loc : loc.slug}`}
 className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-semibold text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600"
 >
 <ChevronRight className="w-3 h-3 text-fuchsia-500"/>
 {typeof loc === 'string'
 ? (loc.charAt(0).toUpperCase() + loc.slice(1)).replace(/-/g, ' ')
 : loc.name}
 </Link>
 ))
 ) : (
 <p className="text-sm text-slate-500 dark:text-subtle-on-light">Indira Super Speciality Hospital, Vellore</p>
 )}
 </div>
 </div>

 {/* Related Services Card */}
 {currDoctor.related_services && currDoctor.related_services.length > 0 && (
 <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-8 h-8 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/50 flex items-center justify-center">
 <Settings className="w-4 h-4 text-fuchsia-600"/>
 </div>
 <h3 className="font-bold text-slate-900 dark:text-white">Specialized Services</h3>
 </div>
 <div className="space-y-2">
 {currDoctor.related_services.map((service: any, i: number) => {
 const deptSlug = dept ? dept.slug : (currDoctor.departmentId || specialty);
 return (
 <Link
 key={i}
 href={`/doctor/near-me/treat/${deptSlug}/${service.slug}`}
 className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-semibold text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600"
 >
 <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 mr-2"/>
 {typeof service === 'string'
 ? (service.charAt(0).toUpperCase() + service.slice(1)).replace(/-/g, ' ')
 : service.title}
 </Link>
 );
 })}
 </div>
 </div>
 )}

 {/* Related Doctors */}
 {relatedDoctors.length > 0 && (
 <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-8 h-8 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/50 flex items-center justify-center">
 <Stethoscope className="w-4 h-4 text-fuchsia-600"/>
 </div>
 <h3 className="font-bold text-slate-900 dark:text-white">More Specialists</h3>
 </div>
 <div className="space-y-3">
 {relatedDoctors.map((doc: any) => (
 <Link
 key={doc.slug}
 href={`/doctor/${(doc.department || 'specialist').toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '')}/${doc.slug}`}
 className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
 >
 <div className="w-10 h-10 rounded-full bg-fuchsia-100 dark:bg-fuchsia-950/50 flex items-center justify-center flex-shrink-0">
 <span className="text-fuchsia-700 dark:text-fuchsia-300 font-bold text-sm">
 {doc.name.split("").map((n: string) => n[0]).join("").slice(0, 2)}
 </span>
 </div>
 <div>
 <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-400 transition-colors">{doc.name}</p>
 <p className="text-sm text-slate-500 dark:text-subtle-on-light">{doc.specialty}</p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 )}
 </div>
 </div>
 </section >

 {/* Health Library & Advice */}
 <HealthLibraryCard />

 {/* FAQ section */}
 <EntityFAQs
 entityType="doctor"
 entityName={currDoctor.name}
 entitySlug={slug}
 title={`Common Questions about ${currDoctor.name}`}
 />

 {/* Reviews Section */}
 <EntityReviews
 entityType="doctor"
 entityName={currDoctor.name}
 entitySlug={slug}
 title={`${currDoctor.name} — Patient Reviews`}
 description={`Read what patients from Indira Hospital and nearby areas say about their experience with ${currDoctor.name}.`}
 />

 <SectionContainer className="py-24 max-w-7xl mx-auto">
 <PeopleAlsoSearchCard
 keywords={[
 { text: `Best ${deptName} in Vellore`, href: `/doctor/near-me` },
 { text: `${currDoctor.name} reviews`, href: `/doctor/${specialty}/${slug}` },
 { text: `${deptName} treatment cost`, href: `/departments/${getDoctorSpecialtySlug(currDoctor)}` },
 { text: `Indira Hospital ${currDoctor.name} appointment`, href: `/book-appointment?doctor=${slug}` },
 { text: `Top specialists in Tamil Nadu`, href: `/doctor/near-me` },
 { text: `Laser & Laparoscopic surgery Vellore`, href: `/doctor/near-me/treat` },
 ]}
 />
 </SectionContainer>

 {/* UNIFIED ENTITY QUERIES */}
 <UnifiedEntitySection type="services"title="Treatments Available"subtitle="Our Services"featuredLimit={6} linkLimit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"/>
 <UnifiedEntitySection type="departments"title="Our Departments"subtitle="Elite Medical Units"featuredLimit={6} linkLimit={12} className="bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800/50"/>
 <UnifiedEntitySection type="locations"title="Hospital Near You"subtitle="Our Locations"featuredLimit={6} linkLimit={12} className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"/>

 <InternalLinkGrid type="diagnostics"title="Related Diagnostics"subtitle="Laboratory Support"limit={12} className="bg-slate-50 dark:bg-slate-950 border-t"/>
 <InternalLinkGrid type="health-packages"title="Wellness Monitoring"subtitle="Health Packages"limit={8} className="bg-white dark:bg-slate-900 border-t"/>
 </div >
 );
}

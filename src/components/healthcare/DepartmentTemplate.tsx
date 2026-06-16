import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, CheckCircle2, ChevronRight, Award, Users, Shield, Zap, Clock, Target, Microscope, Sparkles, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { Stethoscope, Electricity, HeartCardiogram } from "healthicons-react/outline";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { WhyChooseUs } from "@/components/trust/WhyChooseUs";
import { ModernCard } from "@/components/ui/modern-card";
import { LocalSEOFooter } from "@/components/healthcare/LocalSEOFooter";
import { siteConfig } from "@/config/site";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import AioKnowledgeBlock from "@/components/seo/AioKnowledgeBlock";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { REGIONAL_LOCATIONS } from "@/config/design";

interface Procedure {
  name: string;
  link?: string;
}

interface PricingPackage {
  package_name: string;
  cost: string;
  features: string[];
}

interface Technology {
  name: string;
  description: string;
  icon: string;
}

interface DepartmentTemplateProps {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string | React.ReactNode;
  icon?: React.ReactNode;
  procedures?: string[] | Procedure[];
  relatedDoctors?: any[];
  relatedServices?: any[];
  pricing?: PricingPackage[];
  technology?: Technology[];
  children?: React.ReactNode;
  quickFacts?: { label: string; value: string; icon: string | any }[];
}

const iconMap: Record<string, any> = {
  Electricity,
  Shield,
  HeartCardiogram,
  Award,
  Users,
  Stethoscope,
  Zap,
  Clock,
  Target,
  Microscope,
  Sparkles
};

export function DepartmentTemplate({
  title,
  slug,
  shortDescription,
  fullDescription,
  icon,
  procedures = [],
  relatedDoctors = [],
  relatedServices = [],
  pricing = [],
  technology = [],
  children,
  quickFacts
}: DepartmentTemplateProps) {
  const phone = siteConfig.contact.phone;
  const whatsappUrl = `https://wa.me/${phone.replace(/\s+/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in ${title}. Can I get more details?`)}`;

  // Split title on " at " or " in " for the H1 two-line treatment
  const titleParts = title.includes(' at ') ? title.split(' at ') :
    title.includes(' in ') ? title.split(' in ') : [title, ''];
  const titleMain = titleParts[0];
  const titleLocation = titleParts.slice(1).join(' ');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* JSON-LD Schema */}
      <JsonLdSchema
        type="location"
        name={`${title} at Indira Super Speciality Hospital`}
        description={shortDescription}
        location={{
          name: `${title} - Indira Super Speciality Hospital`,
          address: "54, Katpadi Main Rd, Gandhi Nagar",
          city: "Vellore",
          areaServed: "Tamil Nadu"
        }}
        items={[
          { name: 'Home', url: '/' },
          { name: 'Departments', url: '/departments' },
          { name: title, url: `/departments/${slug}` }
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
        {/* Grid texture overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        {/* Ambient glows */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-56 lg:pb-28 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-indigo-300/60 mb-10 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
            <Link href="/departments" className="hover:text-white transition-colors">Departments</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
            <span className="text-white font-black">{title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="flex-1 space-y-8">
              {/* Department icon badge */}
              <div className="inline-flex p-3 rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-sm shadow-float">
                {icon || <Stethoscope className="h-10 w-10 text-fuchsia-300" />}
              </div>

              {/* H1 — split for SEO + visual hierarchy */}
              <h1 className="elite-hero-title text-white text-left">
                {titleMain}
                {titleLocation && (
                  <> <br /><span className="elite-gradient-text text-3xl sm:text-4xl">in {titleLocation}</span></>
                )}
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl leading-relaxed font-light opacity-90">
                {shortDescription}
              </p>

              <div className="flex flex-wrap gap-5 pt-2">
                <Link
                  href="/book-appointment"
                  className="elite-button-primary gap-3"
                >
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="elite-button-secondary gap-3"
                >
                  <MessageCircle className="h-5 w-5 text-fuchsia-400" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Quick highlights grid */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-72 shrink-0">
              {(quickFacts || [
                { label: 'Specialists', value: `${relatedDoctors.length}+ Doctors`, icon: 'Users' },
                { label: 'Procedures', value: `${procedures.length}+ Expert`, icon: 'HeartCardiogram' },
                { label: 'Availability', value: '24/7 Care', icon: 'Shield' },
                { label: 'Success Rate', value: '99% Positive', icon: 'Award' },
              ]).map((item, i) => {
                const Icon = typeof item.icon === 'string' ? (iconMap[item.icon] || HeartCardiogram) : item.icon;
                return (
                  <div key={i} className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-center flex flex-col items-center gap-2 hover:bg-white/15 transition-colors">
                    <Icon className="w-6 h-6 text-fuchsia-300 mb-1" />
                    <p className="text-xs text-indigo-300/70 uppercase font-bold tracking-widest">{item.label}</p>
                    <p className="text-sm font-black text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── AEO Knowledge Block ───────────────────────────────────────── */}
      <SectionContainer className="py-16">
        <div className="space-y-12">
          <AioKnowledgeBlock
            title={`Department Snapshot: ${title}`}
            items={[
              { label: 'Care Quality', value: 'NABH Accredited', icon: Shield },
              { label: 'Surgeries', value: `${procedures.length}+ Procedures`, icon: Zap },
              { label: 'Specialists', value: `${relatedDoctors.length}+ Senior Doctors`, icon: Users },
              { label: 'Service Hub', value: 'Vellore, Tamil Nadu', icon: MapPin }
            ]}
          />

          {/* Full Description / Long-Form Content */}
          {(fullDescription || children) && (
            <div className="prose prose-lg max-w-none prose-slate dark:prose-invert
              prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-fuchsia-500 prose-h2:pl-4 prose-h2:not-italic
              prose-h3:text-xl prose-h3:not-italic
              prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
              prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-black
              prose-a:text-fuchsia-600 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-[2rem] prose-img:shadow-float prose-em:not-italic">
              <h2 className="elite-section-title text-slate-900 dark:text-white mb-6">Expert Care in {title}</h2>
              {fullDescription && (
                typeof fullDescription === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
                ) : (
                  <div>{fullDescription}</div>
                )
              )}
              {children}
            </div>
          )}

          {/* Technology / Infrastructure Highlights */}
          {technology.length > 0 && (
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white font-heading mb-8">
                Advanced Technology & Infrastructure
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technology.map((tech, idx) => {
                  const Icon = iconMap[tech.icon] || HeartCardiogram;
                  return (
                    <ModernCard key={idx} className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <div className="flex gap-4">
                        <div className="p-3 rounded-2xl bg-fuchsia-600 text-white h-fit shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 dark:text-white text-base">{tech.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{tech.description}</p>
                        </div>
                      </div>
                    </ModernCard>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </SectionContainer>

      {/* ── Key Procedures Section ────────────────────────────────────── */}
      {procedures.length > 0 && (
        <section className="bg-white dark:bg-slate-900 py-20 border-y border-slate-100 dark:border-slate-700">
          <SectionContainer>
            <div className="text-center mb-16">
              <span className="text-fuchsia-600 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" /> Clinical Expertise
              </span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white font-heading mb-4">World-Class Procedures</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
                Our specialists at Indira Hospital utilize advanced technology to perform high-precision treatments.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {procedures.map((proc, idx) => {
                const name = typeof proc === 'string' ? proc : proc.name;
                const link = typeof proc === 'string' ? undefined : proc.link;
                const inner = (
                  <div className="flex items-center gap-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 hover:scale-[1.02] transition-all group border border-transparent hover:border-fuchsia-100 dark:hover:border-fuchsia-900 cursor-pointer">
                    <div className="bg-fuchsia-100 dark:bg-fuchsia-900/40 p-2 rounded-xl text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-tight">{name}</span>
                  </div>
                );
                return link ? (
                  <Link key={idx} href={link}>{inner}</Link>
                ) : (
                  <div key={idx}>{inner}</div>
                );
              })}
            </div>
          </SectionContainer>
        </section>
      )}

      {/* ── Related Services / Sub-Departments ───────────────────────── */}
      {relatedServices.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-950 py-24">
          <SectionContainer>
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-fuchsia-600 font-bold text-sm tracking-widest uppercase flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4" /> Specialized Units
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white font-heading">Elite Medical Units</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-3 text-base">
                  Highly specialized sub-departments within our {title} unit.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  service={{
                    title: service.title,
                    slug: service.url?.split('/').pop() || service.slug,
                    short_description: service.description || `Leading ${service.title} specialized care at Indira Super Speciality Hospital.`,
                    icon: service.icon || 'HeartCardiogram'
                  }}
                  variant="poster"
                />
              ))}
            </div>
          </SectionContainer>
        </section>
      )}

      {/* ── Meet the Doctors ──────────────────────────────────────────── */}
      {relatedDoctors.length > 0 && (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
          <SectionContainer>
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-fuchsia-600 font-bold text-sm tracking-widest uppercase flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4" /> Leading Clinical Expertise
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white font-heading">{title} Specialists Near You</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-3 text-base max-w-2xl">
                  Highly experienced surgeons and clinicians dedicated to your wellbeing.
                </p>
              </div>
              <Link href="/doctor" className="group flex items-center gap-2 text-fuchsia-700 font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs shrink-0">
                View All Doctors <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedDoctors.map((doctor, idx) => (
                <DoctorCard key={idx} doctor={doctor} variant="grid" />
              ))}
            </div>
          </SectionContainer>
        </section>
      )}

      {/* ── Regional Presence (full-width, not sidebar) ───────────────── */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-t border-slate-100 dark:border-slate-800">
        <SectionContainer>
          <div className="text-center mb-10">
            <span className="text-fuchsia-600 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-4 h-4" /> Regional Presence
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white font-heading">
              {title} Specialists Near You
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto text-base">
              Our elite {title.toLowerCase()} department serves patients across major Tamil Nadu districts.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {REGIONAL_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/doctor/near-me/${loc.slug}/${slug}`}
                className="px-4 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-600 transition-all shadow-sm text-center text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300"
              >
                {loc.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/doctor/near-me" className="text-sm font-black text-fuchsia-600 dark:text-fuchsia-400 hover:underline inline-flex items-center gap-2">
              View All 80+ Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionContainer>
      </section>

      <WhyChooseUs />

      <EntityFAQs
        entityType="department"
        entityName={title}
        entitySlug={slug}
        className="bg-slate-50/50"
      />

      <EntityReviews
        entityType="department"
        entityName={title}
        entitySlug={slug}
      />

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 dark:bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu" />
        <SectionContainer>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="elite-section-title text-white mb-6">Experience Better Healthcare at Indira Hospital</h2>
            <p className="text-xl text-fuchsia-100/70 font-light">
              Join over 1,00,000 satisfied patients who trusted us for their surgical and medical needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link
                href="/book-appointment"
                className="px-10 py-5 bg-white text-slate-900 font-bold rounded-full transition-all shadow-float hover:-translate-y-1 text-lg"
              >
                Secure Your Priority Appointment
              </Link>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-full transition-all hover:-translate-y-1 text-lg"
              >
                Call Our Experts
              </a>
            </div>
          </div>
        </SectionContainer>
      </section>
      <InternalLinkGrid type="treatments" title="Related Specialties" subtitle="Our Expertise" limit={8} className="bg-white dark:bg-slate-950 border-y" />
      <InternalLinkGrid type="locations" title="Visit our Elite Centers" subtitle="Nearest to You" limit={12} className="bg-slate-50 dark:bg-slate-900 border-b" />
      <LocalSEOFooter />
    </div>
  );
}

export default DepartmentTemplate;

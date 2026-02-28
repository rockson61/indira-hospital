import { Hero } from "@/components/sections/Hero";
import { StatsBanner } from "@/components/sections/stats-banner";
import { TrustStrip } from "@/components/sections/trust-strip";
import { DepartmentGridSection } from "@/components/sections/DepartmentGridSection";
import { DoctorHighlightSection } from "@/components/sections/DoctorHighlightSection";
import { SignatureTreatments } from "@/components/sections/signature-treatments";
import { Testimonials } from "@/components/sections/testimonials";
import { QuickLinks } from "@/components/sections/quick-links";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HOME_PAGE_CONTENT } from "@/config/constants";
import { MessageCircle, Phone, ArrowRight, Zap, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";
import { PatientResources } from "@/components/sections/patient-resources";
import { ProviderResources } from "@/components/sections/provider-resources";
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900">
      <JsonLdSchema type="hospital" />
      <Hero />
      <StatsBanner />

      {/* REFINED TRUST BAR */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-700 py-16 relative z-10 -mt-12 mb-12 rounded-[3rem] mx-4 sm:mx-8 shadow-xl shadow-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-black text-slate-400 tracking-[0.3em] uppercase mb-10 text-xs flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-slate-200 dark:bg-slate-700" />
            {HOME_PAGE_CONTENT.ACCREDITATION_TITLE}
            <span className="h-px w-12 bg-slate-200 dark:bg-slate-700" />
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {HOME_PAGE_CONTENT.ACCREDITATION_BADGES.map((badge, index) => (
              <div key={index} className="group flex items-center gap-3 px-6 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-200 hover:bg-fuchsia-50 dark:bg-fuchsia-950 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-2 h-2 rounded-full bg-fuchsia-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-black text-slate-500 dark:text-slate-400 group-hover:text-fuchsia-700 tracking-wider">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-32 pb-32">
        <TrustStrip />
        <DepartmentGridSection />
        <SignatureTreatments />
        <WhyChooseUs />
        <DoctorHighlightSection />
        <Testimonials />
        <HealthLibraryCard />
        <QuickLinks />
      </div>

      <PatientResources />
      <ProviderResources />

      {/* ENTITY CARD SECTIONS */}
      <EntityCardSection type="services" title="Popular Treatments" subtitle="Browse Services" limit={6} className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-700" />
      <EntityCardSection type="locations" title="Hospital Near You" subtitle="Our Coverage" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />

      {/* COMPACT SEO LINK STRIPS */}
      <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={16} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
      <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={16} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />

      {/* ELITE SIGNATURE HOME CTA */}
      <SectionContainer className="pb-32 px-4">
        <div className="bg-gradient-to-br from-slate-900 via-pink-950 to-fuchsia-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl relative group/cta flex flex-col items-center text-center p-12 sm:p-24">
          {/* Ambient Background Lights */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-1000 opacity-50" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px] opacity-40" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

          <div className="relative z-10 w-full max-w-4xl">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-10 shadow-[0_0_40px_rgba(20,184,166,0.3)] group-hover/cta:scale-110 transition-transform duration-500">
              <Sparkles className="w-10 h-10 text-fuchsia-300" />
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-white mb-10 tracking-tight leading-[1.05]">
              {HOME_PAGE_CONTENT.CTA_HEADING.split(' ').slice(0, -1).join(' ')} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">
                {HOME_PAGE_CONTENT.CTA_HEADING.split(' ').pop()}
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-slate-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              {HOME_PAGE_CONTENT.CTA_SUBTEXT}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-3xl mx-auto">
              <a
                href="/book-appointment"
                className="group/btn relative flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-fuchsia-500 text-slate-900 dark:text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-fuchsia-500/25 overflow-hidden text-xl"
              >
                <span className="relative z-10">{HOME_PAGE_CONTENT.CTA_BUTTON_BOOK}</span>
                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
              </a>

              <a
                href="/contact"
                className="flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all text-xl"
              >
                <Phone className="w-6 h-6 mr-3 text-fuchsia-400" />
                {HOME_PAGE_CONTENT.CTA_BUTTON_CONTACT}
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 opacity-40 grayscale group-hover/cta:grayscale-0 group-hover/cta:opacity-70 transition-all duration-700">
              <div className="flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase">
                <Zap className="w-4 h-4 text-fuchsia-400" /> Professional
              </div>
              <div className="flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase">
                <Zap className="w-4 h-4 text-fuchsia-400" /> Precise
              </div>
              <div className="flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase">
                <Zap className="w-4 h-4 text-fuchsia-400" /> Patient-First
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}

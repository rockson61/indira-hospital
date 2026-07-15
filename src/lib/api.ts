import { getDirectusClient } from './directus';
import { readItems, readSingleton } from '@directus/sdk';
import { Doctor, Service, Location, Post, GlobalSiteSettings, Diagnostic, Testimonial, FAQ, InsurancePartner, Department, HealthPackage } from './schema';
import { SEED_DATA } from './data/seed-data';
import { comprehensiveFaqs } from './data/faq-data';
import { testimonials as localTestimonials } from './data/testimonials-data';
import { tamilNaduLocations } from './data/tamilnadu-locations';
import { SEO_KEYWORDS } from './data/seo-keywords';
import { unstable_cache as next_unstable_cache } from 'next/cache';

function unstable_cache<T extends (...args: any[]) => any>(
  cb: T,
  keyParts?: string[],
  options?: { revalidate?: number | false; tags?: string[] }
): T {
  // Always bypass unstable_cache on Cloudflare Edge to prevent serialization and environment errors
  return cb;
}


export const getDoctors = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('doctors', { fields: ['*'] }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getDoctors', error);
 }
 return SEED_DATA.doctors as any;
 },
 ['directus-doctors'],
 { revalidate: 3600 }
);

export const getDoctorBySlug = unstable_cache(
 async (slug: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('doctors', {
 filter: { slug: { _eq: slug } },
 fields: ['*', { related_services: ['id', 'title', 'slug'], available_locations: ['id', 'name', 'slug'] }],
 limit: 1
 }));
 if (data && data.length > 0) return data[0] as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getDoctorBySlug ${slug}`, error);
 }

 const doctor = SEED_DATA.doctors.find((d: any) => d.slug === slug);
 if (!doctor) return null;
 return {
 ...doctor,
 related_services: (doctor as any).related_services || [],
 available_locations: (doctor as any).available_locations || []
 } as any;
 },
 ['directus-doctor-by-slug'],
 { revalidate: 3600 }
);

export const getDepartments = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('departments', { fields: ['*'] }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getDepartments', error);
 }
 return SEED_DATA.services as any;
 },
 ['directus-departments'],
 { revalidate: 3600 }
);

export const getDepartmentBySlug = unstable_cache(
 async (slug: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('departments', {
 filter: { slug: { _eq: slug } },
 fields: ['*', { related_doctors: ['id', 'name', 'slug'], related_services: ['id', 'title', 'slug'] } as any],
 limit: 1
 }));
 if (data && data.length > 0) return data[0] as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getDepartmentBySlug ${slug}`, error);
 }

 const dept = SEED_DATA.services.find((s: any) => s.slug === slug);
 if (!dept) return null;
 return {
 ...dept,
 related_doctors: SEED_DATA.doctors.filter((d: any) =>
 (d.department && d.department.toLowerCase().includes(dept.title.toLowerCase())) ||
 (d.specialties && d.specialties.some((sp: string) => sp.toLowerCase().includes(dept.title.toLowerCase())))
 ),
 related_services: []
 } as any;
 },
 ['directus-department-by-slug'],
 { revalidate: 3600 }
);

export const getServiceBySlug = unstable_cache(
 async (slug: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('services', {
 filter: { slug: { _eq: slug } },
 fields: ['*', { related_doctors: ['id', 'name', 'slug'], available_locations: ['id', 'name', 'slug'] }],
 limit: 1
 }));
 if (data && data.length > 0) return data[0] as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getServiceBySlug ${slug}`, error);
 }

 const service = SEED_DATA.services.find((s: any) => 
 s.slug === slug || (s.aliases && s.aliases.includes(slug))
 );
 if (!service) return null;
 return {
 ...service,
 related_doctors: SEED_DATA.doctors.filter((d: any) =>
 (d.department && service.title && d.department.toLowerCase().includes(service.title.toLowerCase())) ||
 (d.specialties && service.title && d.specialties.some((sp: string) => sp.toLowerCase().includes(service.title.toLowerCase())))
 ),
 available_locations: []
 } as any;
 },
 ['directus-service-by-slug'],
 { revalidate: 3600 }
);

import { TREATMENT_DATA } from './data/treatment-data';

export const getTreatmentBySlug = unstable_cache(
 async (slug: string) => {
 const lowerSlug = slug.toLowerCase();
 // First check standard TREATMENT_DATA
 const treatment = TREATMENT_DATA.find(t => 
 t.slug.toLowerCase() === lowerSlug || (t.aliases && t.aliases.some(a => a.toLowerCase() === lowerSlug))
 );
 if (treatment) return treatment;

 return null;
 },
 ['treatment-by-slug'],
 { revalidate: 3600 }
);

export const getLocationBySlug = unstable_cache(
 async (slug: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('locations', {
 filter: { slug: { _eq: slug } },
 fields: ['*', { related_doctors: ['id', 'name', 'slug'], related_services: ['id', 'title', 'slug'] }],
 limit: 1
 }));
 if (data && data.length > 0) return data[0] as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getLocationBySlug ${slug}`, error);
 }

 const loc = tamilNaduLocations.find((l: any) => l.slug === slug);
 if (!loc) return null;
 return {
 ...loc,
 related_doctors: SEED_DATA.doctors,
 related_services: SEED_DATA.services
 } as any;
 },
 ['directus-location-by-slug'],
 { revalidate: 3600 }
);

export const getPostBySlug = unstable_cache(
 async (slug: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('posts', {
 filter: { slug: { _eq: slug } },
 fields: ['*'],
 limit: 1
 }));
 if (data && data.length > 0) return data[0] as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getPostBySlug ${slug}`, error);
 }
 return null;
 },
 ['directus-post-by-slug'],
 { revalidate: 3600 }
);

export const getServices = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('services', { fields: ['*'] }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getServices', error);
 }
 return SEED_DATA.services as any;
 },
 ['directus-services'],
 { revalidate: 3600 }
);

export const getTestimonials = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('testimonials', { fields: ['*'] }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getTestimonials', error);
 }
 return localTestimonials as any;
 },
 ['directus-testimonials'],
 { revalidate: 3600 }
);

export const getReviewsByEntity = unstable_cache(
 async (type: string, name: string, slug?: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('testimonials', {
 filter: {
 _or: [
 { treatment: { _icontains: name } },
 { content: { _icontains: name } },
 { patient_name: { _icontains: name } }
 ]
 } as any,
 fields: ['*'],
 }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 // Silencing this specific warning as fallbacks are expected for many treatments
 // console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getReviewsByEntity ${type} ${name} ${slug}`, error);
 }

 // Granular filtering
 if (slug) {
 const slugMatches = (localTestimonials as any[]).filter(t => t.relatedSlugs?.includes(slug));
 if (slugMatches.length > 0) {
 return slugMatches.map((t, i) => ({
 id: `rev-${slug}-${i}`,
 patient_name: t.name,
 treatment_received: t.treatment,
 rating: t.rating,
 content: t.text,
 verified: t.verified
 }));
 }

 // Doctor-specific fallback from intrinsic data
 if (type === 'doctor') {
 const allDocs = await getDoctors();
 const doc = allDocs.find((d: any) => d.slug === slug);
 if (doc?.reviews && doc.reviews.length > 0) {
 return doc.reviews.map((r: any, i: number) => ({
 id: `rev-doc-${slug}-${i}`,
 patient_name: r.patient_name,
 treatment_received: doc.designation,
 rating: r.rating,
 content: r.content,
 verified: true
 }));
 }
 }
 }

 let finalReviews: any[] = [];
 const typeMatches = (localTestimonials as any[]).filter(t => 
 t.treatment?.toLowerCase().includes(type.toLowerCase()) || 
 t.treatment?.toLowerCase().includes(name.toLowerCase())
 );

 if (typeMatches.length > 0) {
 finalReviews = typeMatches.map((t, i) => ({
 id: `rev-type-${i}`,
 patient_name: t.name,
 treatment_received: t.treatment,
 rating: t.rating,
 content: t.text,
 verified: t.verified
 }));
 }

 // Fill up to 3 with general testimonials if needed
 if (finalReviews.length < 3) {
 const general = localTestimonials.slice(0, 5).map((t, i) => ({
 id: `rev-gen-${i}`,
 patient_name: t.name,
 treatment_received: t.treatment,
 rating: t.rating,
 content: t.text,
 verified: t.verified
 })).filter(gr => !finalReviews.some(fr => fr.patient_name === gr.patient_name));
 
 finalReviews = [...finalReviews, ...general].slice(0, 3);
 }

 return finalReviews.slice(0, 3) as any;
 },
 ['directus-reviews-by-entity'],
 { revalidate: 3600 }
);

export const getFaqsByEntity = unstable_cache(
 async (type: string, name: string, slug?: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('faqs', {
 filter: {
 _or: [
 { category: { _eq: name } },
 { category: { _eq: type } },
 { question: { _icontains: name } }
 ]
 },
 fields: ['*'],
 }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 // Silencing this specific warning as fallbacks are expected for many treatments
 // console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getFaqsByEntity ${type} ${name} ${slug}`, error);
 }

 let finalFaqs: any[] = [];
 
 // 1. Try Slug Matches
 if (slug) {
 const slugMatches = (comprehensiveFaqs as any[]).filter(f => f.relatedSlugs?.includes(slug));
 if (slugMatches.length > 0) finalFaqs = [...slugMatches];

 if (type === 'doctor') {
 const allDocs = await getDoctors();
 const doc = allDocs.find((d: any) => d.slug === slug);
 if (doc?.faqs && doc.faqs.length > 0) {
 finalFaqs = [...finalFaqs, ...doc.faqs];
 }
 }
 }

 // 2. Try Category Matches
 const typeMatches = (comprehensiveFaqs as any[]).filter(f => 
 f.category?.toLowerCase() === type.toLowerCase() || 
 f.category?.toLowerCase() === name.toLowerCase()
 );
 finalFaqs = [...finalFaqs, ...typeMatches];

 // 3. De-duplicate by question
 const uniqueFaqs = Array.from(new Map(finalFaqs.map(item => [item.question, item])).values());

 // 4. Fill up to 8 with General FAQs
 if (uniqueFaqs.length < 8) {
 const general = comprehensiveFaqs.filter(f => f.category === "General");
 const combined = [...uniqueFaqs, ...general];
 const finalUnique = Array.from(new Map(combined.map(item => [item.question, item])).values());
 return finalUnique.slice(0, 8) as any;
 }

 return uniqueFaqs.slice(0, 8) as any;
 },
 ['directus-faqs-by-entity'],
 { revalidate: 3600 }
);

export const getInsurances = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('insurances', { fields: ['*'] }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getInsurances', error);
 }
 return [];
 },
 ['directus-insurances'],
 { revalidate: 3600 }
);

export const getLocations = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('locations', { fields: ['*'] }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getLocations', error);
 }
 return tamilNaduLocations as any;
 },
 ['directus-locations'],
 { revalidate: 3600 }
);

export const getDiagnostics = unstable_cache(
 async (category?: string) => {
 try {
 const client = await getDirectusClient();
 const filter: any = category ? { category: { _eq: category } } : undefined;
 const data = await client.request(readItems('diagnostics', {
 fields: ['*'],
 filter
 }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getDiagnostics');
 }
 // Fallback to seed data
 return category
 ? SEED_DATA.diagnostics.filter(d => d.category === category)
 : SEED_DATA.diagnostics;
 },
 ['directus-diagnostics'],
 { revalidate: 3600 }
);

export const getDiagnosticBySlug = unstable_cache(
 async (slug: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('diagnostics', {
 filter: { slug: { _eq: slug } },
 fields: ['*'],
 limit: 1
 }));
 if (data && data.length > 0) return data[0] as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getDiagnosticBySlug - ${slug}`);
 }
 // Fallback to seed data
 return SEED_DATA.diagnostics.find(d => d.slug === slug) || null;
 },
 ['directus-diagnostic-by-slug'],
 { revalidate: 3600 }
);

export const getHealthPackages = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('health_packages', { fields: ['*'] }));
 if (data && data.length > 0) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getHealthPackages', error);
 }
 return [];
 },
 ['directus-health-packages'],
 { revalidate: 3600 }
);

export const getHealthPackageBySlug = unstable_cache(
 async (slug: string) => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readItems('health_packages', {
 filter: { slug: { _eq: slug } },
 fields: ['*'],
 limit: 1
 }));
 if (data && data.length > 0) return data[0] as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getHealthPackageBySlug ${slug}`, error);
 }
 return null;
 },
 ['directus-health-package-by-slug'],
 { revalidate: 3600 }
);

import { siteConfig } from '@/config/site';

export const getGlobalSiteSettings = unstable_cache(
 async () => {
 try {
 const client = await getDirectusClient();
 const data = await client.request(readSingleton('hospital_settings', { fields: ['*'] }));
 if (data) return data as any;
 } catch (error) {
 console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getGlobalSiteSettings', error);
 }

 return {
 hospitalName: siteConfig.name,
 emergencyPhone: siteConfig.contact.emergencyPhone,
 helplinePhone: siteConfig.contact.phone,
 address: siteConfig.contact.address,
 email: siteConfig.contact.email,
 } as any;
 },
 ['directus-global-settings'],
 { revalidate: 3600 }
);

export const getSEOKeywords = unstable_cache(
 async () => {
 return SEO_KEYWORDS;
 },
 ['seo-keywords'],
 { revalidate: 3600 }
);

export const getSEOKeywordBySlug = unstable_cache(
 async (slug: string) => {
 const lowerSlug = slug.toLowerCase();
 return SEO_KEYWORDS.find(k => k.slug.toLowerCase() === lowerSlug) || null;
 },
 ['seo-keyword-by-slug'],
 { revalidate: 3600 }
);

/**
 * Generates rich, high-authority fallback content for SEO keywords that don't map to a specific treatment.
 */
export function getRichSEOContent(keyword: any, location: any) {
 const title = keyword.title;
 const dept = keyword.department || "Specialist Care";
 
 return `
 <div class="space-y-6">
 <p class="text-lg leading-relaxed">
 Looking for the <strong>${title.toLowerCase()} in ${location.name}</strong>? At Indira Super Speciality Hospital, we bring world-class healthcare closer to home. Our facility is a recognized center of excellence in Tamil Nadu, combining decades of clinical expertise with the latest medical advancements in ${dept.toLowerCase()}.
 </p>
 
 <div class="grid sm:grid-cols-2 gap-6 my-8">
 <div class="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
 <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Advanced Infrastructure</h4>
 <p class="text-sm text-indigo-800 dark:text-indigo-400">Equipped with 4+ ultra-modern operation theatres and state-of-the-art diagnostic wing for precision care.</p>
 </div>
 <div class="p-5 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950/30 border border-fuchsia-100 dark:border-fuchsia-900/50">
 <h4 class="font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-2">Patient Safety First</h4>
 <p class="text-sm text-fuchsia-800 dark:text-fuchsia-400">NABH accredited protocols ensuring the highest standards of sterilization and post-operative safety for ${location.name} patients.</p>
 </div>
 </div>

 <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4 underline decoration-indigo-500 underline-offset-4">Why Choose Indira Hospital for ${dept}?</h3>
 <ul class="space-y-3 list-none">
 <li class="flex items-start gap-3">
 <span class="text-indigo-500 font-bold">✓</span>
 <span><strong>Experienced Surgeons</strong>: A dedicated team of 20+ specialized consultants available Round-the-Clock.</span>
 </li>
 <li class="flex items-start gap-3">
 <span class="text-indigo-500 font-bold">✓</span>
 <span><strong>Cashless Facilities</strong>: Empanelled with CMCHIS Govt Scheme and 50+ private health insurance networks.</span>
 </li>
 <li class="flex items-start gap-3">
 <span class="text-indigo-500 font-bold">✓</span>
 <span><strong>Modern Technology</strong>: Lead-Free high-definition laparoscopy and diode laser systems for minimally invasive surgery.</span>
 </li>
 <li class="flex items-start gap-3">
 <span class="text-indigo-500 font-bold">✓</span>
 <span><strong>Regional Accessibility</strong>: Direct transport and VIP assistance desk for patients arriving from ${location.name}.</span>
 </li>
 </ul>

 <p class="mt-8 italic text-slate-500 text-sm border-l-4 border-slate-200 pl-4">
 "Our mission at Indira Hospital is to provide international-standard healthcare to every resident of Tamil Nadu, ensuring that every patient from ${location.name} feels cared for at every step of their journey."
 </p>
 </div>
 `;
}

/**
 * Centralized Schema.org Structured Data Library
 * All schema generators return valid JSON-LD objects ready for use
 * in <script type="application/ld+json"> tags.
 */
import { siteConfig } from '@/config/site';

const BASE_URL = siteConfig.url;
const HOSPITAL_NAME = 'Indira Super Speciality Hospital';
const HOSPITAL_ADDRESS = {
 '@type': 'PostalAddress',
 streetAddress: '54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar',
 addressLocality: 'Vellore',
 addressRegion: 'Tamil Nadu',
 postalCode: '632006',
 addressCountry: 'IN',
};
const HOSPITAL_IMAGE = 'https://lh3.googleusercontent.com/La0fYC-XT-E8lRPk31cNfPmEgsfyWxy9VdOaX9wB81jgu-LOVYZVFeWqi4CcbxW_tOiyiECskDHNbb4vQQ=s0';
const HOSPITAL_PHONE = '+91 98423 24425';

/**
 * Global MedicalOrganization + Hospital schema for the root layout
 */
export function getHospitalSchema() {
 return {
 '@context': 'https://schema.org',
 '@type': ['Hospital', 'MedicalOrganization', 'LocalBusiness'],
 '@id': BASE_URL,
 name: HOSPITAL_NAME,
 url: BASE_URL,
 logo: `${BASE_URL}/logo.png`,
 image: HOSPITAL_IMAGE,
 description: 'NABH-accredited quaternary care hospital in Vellore, Tamil Nadu specializing in advanced laser & laparoscopic surgeries, cardiology, oncology, and orthopaedics.',
 telephone: HOSPITAL_PHONE,
 email: 'care@indirahospital.com',
 address: HOSPITAL_ADDRESS,
 geo: {
 '@type': 'GeoCoordinates',
 latitude: 12.9344,
 longitude: 79.1293,
 },
 hasMap: 'https://maps.google.com/maps?cid=9667111072695054632',
 openingHoursSpecification: [
 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '00:00', closes: '23:59' },
 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '00:00', closes: '23:59' },
 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '00:00', closes: '23:59' },
 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '00:00', closes: '23:59' },
 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '00:00', closes: '23:59' },
 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '00:00', closes: '23:59' },
 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '23:59' },
 ],
 availableService: ['Emergency Care', 'Laparoscopic Surgery', 'Laser Surgery', 'Cardiology', 'Oncology', 'Orthopaedics'],
 medicalSpecialty: [
 'Cardiovascular', 'Gastroenterology', 'Oncology', 'Orthopedic', 'Proctology', 'Urology'
 ],
 accreditation: 'NABH',
 priceRange: '$$',
 currenciesAccepted: 'INR',
 paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Insurance',
 sameAs: [
 'https://www.instagram.com/indirasuperspecialityhospitals/',
 'https://www.facebook.com/indirasuperspecialityhospitals/',
 'https://www.mappls.com/9w6owz',
 ],
 contactPoint: [
 {
 '@type': 'ContactPoint',
 telephone: HOSPITAL_PHONE,
 contactType: 'customer service',
 availableLanguage: ['English', 'Tamil', 'Hindi'],
 areaServed: 'IN',
 },
 {
 '@type': 'ContactPoint',
 telephone: '+91 98423 24425',
 contactType: 'emergency',
 availableLanguage: ['English', 'Tamil'],
 },
 ],
 };
}

/**
 * Website/Organization schema for sitelinks search box
 */
export function getWebsiteSchema() {
 return {
 '@context': 'https://schema.org',
 '@type': 'WebSite',
 '@id': `${BASE_URL}/#website`,
 url: BASE_URL,
 name: HOSPITAL_NAME,
 description: 'Indira Super Speciality Hospital — NABH-accredited quaternary care hospital in Vellore, Tamil Nadu.',
 potentialAction: {
 '@type': 'SearchAction',
 target: {
 '@type': 'EntryPoint',
 urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
 },
 'query-input': 'required name=search_term_string',
 },
 };
}

/**
 * Breadcrumb schema for inner pages
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
 return {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: items.map((item, index) => ({
 '@type': 'ListItem',
 position: index + 1,
 name: item.name,
 item: `${BASE_URL}${item.url}`,
 })),
 };
}

/**
 * Physician/Doctor schema
 */
export function getPhysicianSchema(doctor: {
 name: string;
 slug: string;
 specialty: string;
 designation: string;
 image?: string;
 bio?: string;
 education?: { degree: string; institution: string }[];
 telephone?: string;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'Physician',
 '@id': `${BASE_URL}/doctor/specialists/${doctor.slug}`,
 name: doctor.name,
 description: doctor.bio || `${doctor.name} is a ${doctor.designation} at ${HOSPITAL_NAME}.`,
 image: doctor.image ? `${BASE_URL}${doctor.image}` : HOSPITAL_IMAGE,
 url: `${BASE_URL}/doctor/specialists/${doctor.slug}`,
 jobTitle: doctor.designation,
 medicalSpecialty: doctor.specialty,
 worksFor: {
 '@type': 'Hospital',
 name: HOSPITAL_NAME,
 address: HOSPITAL_ADDRESS,
 },
 affiliation: {
 '@type': 'Hospital',
 name: HOSPITAL_NAME,
 url: BASE_URL,
 },
 address: HOSPITAL_ADDRESS,
 telephone: doctor.telephone || HOSPITAL_PHONE,
 alumniOf: doctor.education?.map(edu => ({
 '@type': 'EducationalOrganization',
 name: edu.institution,
 })),
 };
}

/**
 * Medical Specialty / Department schema
 */
export function getDepartmentSchema(dept: {
 name: string;
 slug: string;
 description?: string;
 medicalSpecialty?: string;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': ['MedicalSpecialty', 'MedicalBusiness'],
 '@id': `${BASE_URL}/departments/${dept.slug}`,
 name: `${dept.name} Department`,
 url: `${BASE_URL}/departments/${dept.slug}`,
 description: dept.description || `Expert ${dept.name} care at ${HOSPITAL_NAME}`,
 medicalSpecialty: dept.medicalSpecialty || dept.name,
 parentOrganization: {
 '@type': 'Hospital',
 name: HOSPITAL_NAME,
 url: BASE_URL,
 },
 address: HOSPITAL_ADDRESS,
 telephone: HOSPITAL_PHONE,
 };
}

/**
 * Medical Procedure / Service schema
 */
export function getServiceSchema(service: {
 name: string;
 slug: string;
 description?: string;
 bodyLocation?: string;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'MedicalProcedure',
 '@id': `${BASE_URL}/services/${service.slug}`,
 name: service.name,
 url: `${BASE_URL}/services/${service.slug}`,
 description: service.description || `${service.name} performed by expert surgeons at ${HOSPITAL_NAME}.`,
 bodyLocation: service.bodyLocation,
 followup: 'Post-surgical care and physiotherapy as required.',
 howPerformed: 'Minimally invasive techniques with state-of-the-art equipment.',
 recognizingAuthority: {
 '@type': 'Organization',
 name: 'NABH',
 },
 study: { '@type': 'MedicalStudy' },
 performer: {
 '@type': 'Hospital',
 name: HOSPITAL_NAME,
 url: BASE_URL,
 },
 };
}

/**
 * FAQ / Q&A schema
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
 return {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqs.map(faq => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.answer,
 },
 })),
 };
}

/**
 * LocalBusiness schema for location/city pages
 */
export function getLocalBusinessSchema(city: string, citySlug: string) {
 return {
 '@context': 'https://schema.org',
 '@type': ['Hospital', 'LocalBusiness'],
 name: `${HOSPITAL_NAME} — Serving ${city}`,
 url: `${BASE_URL}/doctor/near-me/${citySlug}`,
 description: `Indira Super Speciality Hospital provides world-class surgical and medical care to patients from ${city}, Tamil Nadu.`,
 telephone: HOSPITAL_PHONE,
 address: HOSPITAL_ADDRESS,
 areaServed: {
 '@type': 'City',
 name: city,
 addressRegion: 'Tamil Nadu',
 addressCountry: 'IN',
 },
 hasMap: 'https://maps.google.com/maps?cid=9667111072695054632',
 };
}

/**
 * Article / Blog Post schema
 */
export function getArticleSchema(post: {
 title: string;
 slug: string;
 description: string;
 author?: string;
 datePublished?: string;
 dateModified?: string;
 image?: string;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'MedicalWebPage',
 '@id': `${BASE_URL}/blog/${post.slug}`,
 headline: post.title,
 description: post.description,
 url: `${BASE_URL}/blog/${post.slug}`,
 image: post.image || HOSPITAL_IMAGE,
 author: {
 '@type': 'Person',
 name: post.author || 'Indira Hospital Medical Team',
 },
 publisher: {
 '@type': 'Organization',
 name: HOSPITAL_NAME,
 logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
 },
 datePublished: post.datePublished || new Date().toISOString(),
 dateModified: post.dateModified || new Date().toISOString(),
 medicalAudience: 'Patient',
 about: { '@type': 'MedicalCondition' },
 };
}

/**
 * Health Package / Offer schema
 */
export function getHealthPackageSchema(pkg: {
 name: string;
 slug: string;
 description?: string;
 price?: string;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'Offer',
 '@id': `${BASE_URL}/health-packages/${pkg.slug}`,
 name: pkg.name,
 url: `${BASE_URL}/health-packages/${pkg.slug}`,
 description: pkg.description || `${pkg.name} at ${HOSPITAL_NAME}.`,
 seller: {
 '@type': 'Hospital',
 name: HOSPITAL_NAME,
 url: BASE_URL,
 },
 priceSpecification: pkg.price
 ? { '@type': 'PriceSpecification', price: pkg.price, priceCurrency: 'INR' }
 : undefined,
 availability: 'https://schema.org/InStock',
 areaServed: { '@type': 'State', name: 'Tamil Nadu' },
 };
}

/**
 * Core Data Models (Interfaces)
 * Shared across the application for type safety
 */

export interface Appointment {
 id?: string;
 name: string;
 phone: string;
 email?: string;
 department?: string;
 doctor?: string;
 date: string;
 notes?: string;
 status?: 'pending' | 'confirmed' | 'cancelled';
}

export interface Doctor {
 id: string;
 status: string;
 name: string;
 slug: string;
 designation: string;
 department: string;
 image: string;
 bio: string;
 education: { degree: string; institution: string; year?: string }[];
 specialties: string[];
 procedures: string[];
 experience_years: number;
 memberships: string[];
 faqs: { question: string; answer: string }[];
 reviews: { patient_name: string; content: string; rating: number; date: string }[];
 related_services?: Service[];
 available_locations?: Location[];
}

export interface Department {
 id: string;
 status: string;
 title: string;
 slug: string;
 description: string;
 image?: string;
 icon?: string;
 features?: string[];
 related_doctors?: Doctor[];
 related_services?: Service[];
}

export interface Diagnostic {
 id: string;
 status: string;
 name: string;
 slug: string;
 category: string;
 description: string;
 short_description?: string;
 price?: number;
 report_time?: string;
 home_collection?: boolean;
 fasting_required?: boolean;
 sample_type?: string;
 parameters_count?: number;
 preparation_instructions?: string;
 normal_range?: string;
 used_to_diagnose?: string | string[];
 body_system?: string;
 seo_title?: string;
 seo_description?: string;
}

export interface HealthPackage {
 id: string;
 status: string;
 title: string;
 slug: string;
 description: string;
 short_description?: string;
 category?: string;
 is_featured?: boolean;
 price: string;
 discounted_price?: string;
 tests_included: string;
 benefits?: string[];
 ideal_for?: string[];
 seo_title?: string;
 seo_description?: string;
}

export interface Service {
 id: string;
 status: string;
 title: string;
 slug: string;
 description: string;
 related_doctors?: Doctor[];
 available_locations?: Location[];
}

export interface Location {
 id: string;
 name: string;
 slug: string;
 address?: string;
 coordinates?: { lat: number; lng: number };
}

export interface Post {
 id: string;
 status: string;
 title: string;
 slug: string;
 content: string;
 excerpt?: string;
 date_created: string;
 author?: BlogAuthor | string;
 image?: string;
 category?: string;
}

export interface BlogAuthor {
 id: string;
 name: string;
 avatar?: string;
 bio?: string;
}

export interface CMSBlock {
 _type: string;
 [key: string]: any;
}

export interface ContactMessage {
 id?: string;
 first_name: string;
 last_name: string;
 email: string;
 phone: string;
 subject?: string;
 message: string;
 status?: 'new' | 'read' | 'replied';
}

export interface BillingPayment {
 id?: string;
 patient_id: string;
 invoice_number: string;
 amount: number;
 phone?: string;
 payment_method?: string;
 transaction_id?: string;
 status?: 'pending' | 'success' | 'failed';
}

export interface GlobalSiteSettings {
 hospitalName: string;
 emergencyPhone: string;
 helplinePhone: string;
 address: string;
 email: string;
}

export interface Testimonial {
 id: string;
 patient_name: string;
 treatment_received: string;
 rating: number;
 content: string;
 verified: boolean;
}

export interface FAQ {
 id: string;
 question: string;
 answer: string;
 category: string;
}

export interface InsurancePartner {
 id: string;
 name: string;
 logo: string;
}

/**
 * Directus Schema Definition
 */
export interface Schema {
 doctors: Doctor[];
 departments: Department[];
 services: Service[];
 locations: Location[];
 posts: Post[];
 testimonials: Testimonial[];
 faqs: FAQ[];
 insurances: InsurancePartner[];
 diagnostics: Diagnostic[];
 health_packages: HealthPackage[];
 hospital_settings: GlobalSiteSettings;
 appointments: Appointment[];
 contacts: ContactMessage[];
 billing_payments: BillingPayment[];
}


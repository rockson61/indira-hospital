export const siteConfig = {
 name: "Indira Super Speciality Hospital",
 description: "Indira Super Speciality Hospital, Vellore — advanced laser & laparoscopic surgeries with same-day discharge. 15,000+ successful surgeries. 50+ cashless insurance partners. NABH accredited.",
 url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.indirasuperspecialityhospital.com",
 ogImage: "/images/hospital/Hospital view 2.webp",
 contact: {
 phone: "+91 98423 24425",
 whatsapp: "919842324425",
 emergencyPhone: "+91 98423 24425",
 email: "info@indirasuperspecialityhospital.com",
 address: "54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006",
 },
 socials: {
 facebook: "https://www.facebook.com/indirasuperspecialityhospitals/",
 instagram: "https://www.instagram.com/indirasuperspecialityhospitals/?hl=en",
 youtube: "https://www.youtube.com/@IndiraHospital",
 twitter: "https://twitter.com/indirahospital",
 linkedin: "https://www.linkedin.com/company/indira-super-speciality-hospital/",
 practo: "https://www.practo.com/vellore/hospital/indira-super-speciality-hospital-gandhi-nagar",
 justdial: "https://www.justdial.com/Vellore/Indira-Super-Speciality-Hospital-Opposite-New-Bus-Stand-Gandhi-Nagar/0416PX416-X416-180120150247-C1K4_BZDET",
 },
 hours: {
 monday_saturday: "9:00 AM - 9:00 PM",
 sunday: "10:00 AM - 2:00 PM",
 emergency: "24/7",
 }
};

export type SiteConfig = typeof siteConfig;

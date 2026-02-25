export const siteConfig = {
    name: "Indira Super Speciality Hospital",
    description: "Enterprise healthcare platform delivering world-class medical services with compassion and advanced technology.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://indirasuperspecialityhospital.com",
    ogImage: "/images/og.jpg",
    contact: {
        phone: "+91 098423 24425",
        emergencyPhone: "+91 098423 24425",
        email: "info@indirasuperspecialityhospital.com",
        address: "54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006",
    },
    socials: {
        facebook: "https://www.facebook.com/indirasuperspecialityhospitals/",
        instagram: "https://www.instagram.com/indirasuperspecialityhospitals/?hl=en",
        youtube: "https://www.youtube.com/@IndiraHospital",
        twitter: "https://twitter.com/indirahospital",
    },
    hours: {
        monday_saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 2:00 PM",
        emergency: "24/7",
    }
};

export type SiteConfig = typeof siteConfig;

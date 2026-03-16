import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MessageCircle, Star, MapPin, Clock, ExternalLink } from "lucide-react";

export function HospitalCard() {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 w-full bg-slate-100 dark:bg-slate-800">
                <Image
                    src="https://lh3.googleusercontent.com/La0fYC-XT-E8lRPk31cNfPmEgsfyWxy9VdOaX9wB81jgu-LOVYZVFeWqi4CcbxW_tOiyiECskDHNbb4vQQ=s0"
                    alt="Indira Superspeciality Hospital"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-2">
                    Indira Superspeciality Hospital
                </h3>

                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <div className="relative">
                            <Star className="w-4 h-4 text-amber-500/30 fill-current" />
                            <div className="absolute inset-0 overflow-hidden" style={{ width: '10%' }}>
                                <Star className="w-4 h-4 text-amber-500 fill-current" />
                            </div>
                        </div>
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">4.1</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">(296 reviews)</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    Premium State of the Art High level Quaternary care Superspeciality Hospital at the heart of Gandhinagar, Vellore.
                </p>

                <div className="space-y-4 mb-6">
                    <div className="flex flex-col gap-3">
                         <div className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                            <MapPin className="w-4 h-4 mt-0.5 text-fuchsia-600 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Gandhi Nagar (HQ)</p>
                                <p className="text-xs text-slate-500">54, Katpadi Road, Gandhi Nagar, Vellore</p>
                                <div className="flex items-center gap-3">
                                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-fuchsia-600 font-bold">{siteConfig.contact.phone}</a>
                                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                                        <MessageCircle className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                            <MapPin className="w-4 h-4 mt-0.5 text-fuchsia-600 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Konavattam Branch</p>
                                <p className="text-xs text-slate-500">Bangalore Road, Konavattam, Vellore</p>
                                <div className="flex items-center gap-3">
                                    <a href="tel:+919443334425" className="text-fuchsia-600 font-bold">+91 94433 34425</a>
                                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                                        <MessageCircle className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                            <MapPin className="w-4 h-4 mt-0.5 text-fuchsia-600 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Saidapet Branch</p>
                                <p className="text-xs text-slate-500">Saidapet, Vellore</p>
                                <div className="flex items-center gap-3">
                                    <a href="tel:+919443724425" className="text-fuchsia-600 font-bold">+91 94437 24425</a>
                                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                                        <MessageCircle className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3">
                        <Clock className="w-4 h-4 text-fuchsia-600 flex-shrink-0" />
                        <span className="font-medium">24/7 Emergency & ICU</span>
                    </div>
                </div>


                <div className="pt-2">
                    <a
                        href="https://maps.google.com/maps?cid=9667111072695054632"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 bg-fuchsia-50 dark:bg-fuchsia-500/10 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-400 text-sm font-bold rounded-xl transition-colors border border-fuchsia-100 dark:border-fuchsia-500/20"
                    >
                        View on Google Maps
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MessageCircle, Star, MapPin, Clock, ExternalLink } from "lucide-react";

export function HospitalCard() {
    return (
        <article className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 dark:hover:shadow-fuchsia-500/10 transition-all duration-500">
            <div className="relative h-32 w-full bg-slate-100 dark:bg-slate-800 shrink-0">
                {/* Simulated Glass Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 p-4 flex flex-col justify-end">
                    <h3 className="font-heading font-black text-white text-lg leading-tight drop-shadow-md">
                        Indira Superspeciality Hospital
                    </h3>
                </div>
                <Image
                    src="https://lh3.googleusercontent.com/La0fYC-XT-E8lRPk31cNfPmEgsfyWxy9VdOaX9wB81jgu-LOVYZVFeWqi4CcbxW_tOiyiECskDHNbb4vQQ=s0"
                    alt="Indira Superspeciality Hospital"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            <div className="p-5">

                <div className="flex items-center gap-2 mb-3 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 rounded-full inline-flex border border-amber-100 dark:border-amber-900/50">
                    <div className="flex items-center text-amber-500 tracking-tighter">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-[13px] font-black text-amber-900 dark:text-amber-100">4.1</span>
                    <span className="text-[11px] font-bold text-amber-700/60 dark:text-amber-300/60 uppercase tracking-widest">(296+ Reviews)</span>
                </div>

                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mb-5 leading-relaxed line-clamp-2">
                    Premium State of the Art High level Quaternary care Superspeciality Hospital at the heart of Gandhinagar, Vellore.
                </p>

                <div className="space-y-3 mb-5">
                    <div className="flex flex-col gap-2.5">
                         <div className="flex items-start gap-2.5 text-[13px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/60 transition-colors hover:border-slate-200 dark:hover:border-slate-700">
                            <MapPin className="w-4 h-4 mt-0.5 text-fuchsia-500 flex-shrink-0" />
                            <div className="w-full">
                                <div className="flex items-center justify-between mb-0.5">
                                    <p className="font-bold text-slate-900 dark:text-white">Gandhi Nagar (HQ)</p>
                                    <div className="flex items-center gap-2">
                                        <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 font-bold transition-colors">{siteConfig.contact.phone}</a>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">54, Katpadi Road, Gandhi Nagar, Vellore</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-[13px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/60 transition-colors hover:border-slate-200 dark:hover:border-slate-700">
                            <MapPin className="w-4 h-4 mt-0.5 text-fuchsia-500 flex-shrink-0" />
                            <div className="w-full">
                                <div className="flex items-center justify-between mb-0.5">
                                    <p className="font-bold text-slate-900 dark:text-white">Konavattam Branch</p>
                                    <div className="flex items-center gap-2">
                                        <a href="tel:+919443334425" className="text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 font-bold transition-colors">+91 94433 34425</a>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400">Bangalore Road, Konavattam, Vellore</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-[13px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/60 transition-colors hover:border-slate-200 dark:hover:border-slate-700">
                            <MapPin className="w-4 h-4 mt-0.5 text-fuchsia-500 flex-shrink-0" />
                            <div className="w-full">
                                <div className="flex items-center justify-between mb-0.5">
                                    <p className="font-bold text-slate-900 dark:text-white">Saidapet Branch</p>
                                    <div className="flex items-center gap-2">
                                        <a href="tel:+919443724425" className="text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 font-bold transition-colors">+91 94437 24425</a>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400">Saidapet, Vellore</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-4">
                        <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span className="font-black">24/7 Emergency & ICU</span>
                    </div>
                </div>

                <div className="pt-2 flex gap-2 w-full">
                    <a
                        href="https://maps.google.com/maps?cid=9667111072695054632"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative flex-1 inline-flex items-center justify-center py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-[12px] transition-all border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 uppercase tracking-wider"
                    >
                        Map <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-50 group-hover/btn:opacity-100 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-all" />
                    </a>
                    <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/wa relative flex-[1.5] inline-flex items-center justify-center py-2.5 bg-fuchsia-600 text-white font-black rounded-xl text-[12px] transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-none hover:bg-fuchsia-500 uppercase tracking-wider"
                    >
                        <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                        Chat Now
                    </a>
                </div>
            </div>
        </article>
    );
}

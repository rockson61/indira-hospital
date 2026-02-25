import { doctors } from "@/data/doctors";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export function DoctorHighlightSection() {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3">Our Experts</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Meet Our Top Specialists
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Dedicated professionals with decades of experience committed to your well-being.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-sm text-gray-400">
                                    [Doctor Photo]
                                </div>
                                {/* Temporary Image overlay for aesthetic mapping */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6 relative">
                                <div className="absolute -top-12 right-6 bg-white p-1 rounded-full shadow-md z-10 w-12 h-12 flex items-center justify-center text-teal-600 font-bold border border-gray-100">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-1">
                                    <Link href={`/doctor/${(doctor.specialty || 'specialist').toLowerCase().replace(/\s+/g, '-')}/${doctor.slug}`} className="hover:text-teal-600 transition-colors before:absolute before:inset-0">
                                        {doctor.name}
                                    </Link>
                                </h4>
                                <p className="text-sm text-teal-600 font-semibold mb-3">{doctor.specialty}</p>

                                <div className="flex border-t border-gray-100 pt-4 mt-4 text-sm text-gray-500 font-medium">
                                    <div className="flex-1">
                                        {doctor.experience}+ Years Exp.
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/doctor/near-me"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 font-bold rounded-xl text-gray-700 bg-white hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                    >
                        Browse All Doctors
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

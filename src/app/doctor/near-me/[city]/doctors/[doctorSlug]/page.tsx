import { notFound } from "next/navigation";
import { doctors } from "@/data/doctors";
import Link from "next/link";
import { ChevronRight, MapPin, CheckCircle2 } from "lucide-react";

export default async function LocationDoctorPage({
    params,
}: {
    params: Promise<{ city: string; doctorSlug: string }>;
}) {
    const { city, doctorSlug } = await params;
    const currDoctor = doctors.find((d) => d.slug === doctorSlug);

    if (!currDoctor) {
        notFound();
    }

    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    return (
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
            <nav className="flex items-center text-sm text-slate-400 mb-12">
                <Link href="/" className="hover:text-fuchsia-600">Home</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/doctor/near-me" className="hover:text-fuchsia-600">Locations</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-slate-600 font-medium">Dr. {currDoctor.name.split(' ').pop()} in {formattedCity}</span>
            </nav>

            <div className="mb-8 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-50 rounded-full blur-3xl opacity-60" />
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 text-sm font-medium mb-4">
                    Clinical Consultant in {formattedCity}
                </span>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{currDoctor.name}</h1>
                <p className="text-xl text-fuchsia-600 font-bold uppercase tracking-tight">{currDoctor.specialty} Specialist</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="col-span-2">
                    <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm mb-8">
                        <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                            About Dr. {currDoctor.name.split(' ').pop()}
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">{currDoctor.bio}</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                            <div className="px-4 py-2 bg-slate-50 rounded-xl">
                                <span className="font-black text-slate-900">{currDoctor.experience}+ Years</span>
                                <span className="text-xs text-slate-500 ml-2 uppercase tracking-widest font-bold">Experience</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 shadow-2xl sticky top-24 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-5 h-5 text-fuchsia-400" />
                            <h3 className="font-black text-lg">{formattedCity} Schedule</h3>
                        </div>
                        <ul className="space-y-3 mb-10">
                            {currDoctor.availability.map((day, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-fuchsia-500" /> {day}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={`/book-appointment?doctor=${currDoctor.id}&location=${city}`}
                            className="block w-full text-center px-6 py-4 bg-fuchsia-500 text-slate-900 font-black rounded-2xl hover:bg-fuchsia-400 transition-all hover:scale-[1.02] shadow-lg shadow-fuchsia-500/20"
                        >
                            Book in {formattedCity}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

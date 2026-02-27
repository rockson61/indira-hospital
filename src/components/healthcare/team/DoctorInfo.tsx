import Image from "next/image"

export function DoctorInfo() {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-100">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="aspect-square relative rounded-[2rem] overflow-hidden border-4 border-slate-50">
            <Image src="/dental-clinic-vellore.jpg" alt="Dr. Rockson Samuel" fill className="object-cover" />
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-heading font-black text-slate-900 mb-2">Dr. Rockson Samuel</h2>
          <p className="text-fuchsia-600 font-bold mb-4">General Dentist</p>

          <p className="text-slate-600 mb-6 font-medium leading-relaxed">
            Dr. Rockson Samuel is a highly skilled general dentist with extensive experience in providing comprehensive
            dental care. He specializes in Root Canal Treatments, Dental Implants, Braces, and Dental Fillings.
          </p>

          <div className="mb-6">
            <h3 className="font-heading font-bold text-slate-900 mb-3">Specializations:</h3>
            <div className="flex flex-wrap gap-2">
              {["Root Canal Treatment (RCT)", "Dental Implants", "Orthodontics (Braces)", "Dental Fillings", "General Dentistry"].map((s) => (
                <span key={s} className="px-4 py-1.5 bg-fuchsia-50 text-fuchsia-700 text-sm font-bold rounded-full border border-fuchsia-100">{s}</span>
              ))}
            </div>
          </div>

          <div className="mb-6 text-sm text-slate-600 font-medium space-y-1">
            <p>Email: rockson68@hotmail.com</p>
            <p>Phone: 7010650063</p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-fuchsia-700 transition-all shadow-sm"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  )
}

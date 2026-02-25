import Image from "next/image"

export function DoctorInfo() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="aspect-square relative rounded-md overflow-hidden">
            <Image src="/dental-clinic-vellore.jpg" alt="Dr. Rockson Samuel" fill className="object-cover" />
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">Dr. Rockson Samuel</h2>
          <p className="text-blue-600 font-medium mb-4">General Dentist</p>

          <p className="mb-4">
            Dr. Rockson Samuel is a highly skilled general dentist with extensive experience in providing comprehensive
            dental care. He specializes in Root Canal Treatments, Dental Implants, Braces, and Dental Fillings.
          </p>

          <div className="mb-4">
            <h3 className="font-bold mb-2">Specializations:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Root Canal Treatment (RCT)</li>
              <li>Dental Implants</li>
              <li>Orthodontics (Braces)</li>
              <li>Dental Fillings</li>
              <li>General Dentistry</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-2">Contact:</h3>
            <p>Email: rockson68@hotmail.com</p>
            <p>Phone: 7010650063</p>
          </div>

          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  )
}

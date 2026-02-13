import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16 text-brand-600">
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold leading-6 text-brand-600 ring-1 ring-inset ring-brand-600/10">
                            New: Advanced Cath Lab Available
                        </span>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        World-Class Care, Right Here in Vellore
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Indira Super Speciality Hospital provides comprehensive medical services with state-of-the-art technology and compassionate care.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="lg" asChild>
                            <Link href="/departments">Our Departments <span aria-hidden="true">→</span></Link>
                        </Button>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src="/hero-hospital.png"
                                alt="Indira Super Speciality Hospital modern interior"
                                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-[76rem] object-cover"
                                width={1216}
                                height={640}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

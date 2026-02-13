import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export function CTASection() {
    return (
        <section className="bg-brand-600 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left text-white max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Ready to prioritize your health?
                    </h2>
                    <p className="text-lg text-brand-100 opacity-90">
                        Book an appointment with our specialists today and experience world-class medical care at Indira Hospital.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                    <Button size="lg" variant="secondary" className="gap-2 text-brand-700 font-bold" asChild>
                        <Link href="/contact">
                            <CalendarCheck className="w-5 h-5" />
                            Book Appointment
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white" asChild>
                        <Link href="/doctors">
                            Find a Doctor
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileText, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";
import { clinicConfig } from "@/lib/data/clinic-config";

export const metadata = {
    title: "Insurance & TPA Partners",
    description: "Indira Super Speciality Hospital accepts all major insurance providers and TPA partners. Cashless treatment available.",
};

const insurancePartners = [
    "Star Health Insurance",
    "New India Assurance",
    "United India Insurance",
    "ICICI Lombard",
    "HDFC Ergo",
    "Bajaj Allianz",
    "Max Bupa",
    "Religare Health",
    "Manipal Cigna",
    "Care Health (formerly Religare)",
    "Niva Bupa (formerly Max Bupa)",
    "Cholamandalam MS",
    "Tata AIG",
    "SBI General",
    "Oriental Insurance",
    "National Insurance",
    "MedSave Healthcare TPA",
    "Paramount Health Services TPA",
    "Vidal Health TPA",
    "Heritage Health TPA",
];

const benefits = [
    { title: "Cashless Treatment", description: "Get treated without upfront payment at our hospital.", icon: ShieldCheck },
    { title: "Quick Pre-Authorization", description: "Fast insurance approval process — usually within 2-4 hours.", icon: FileText },
    { title: "Dedicated Insurance Desk", description: "Our team handles all paperwork and claim processing.", icon: Phone },
    { title: "Wide Network", description: "We are empanelled with 30+ insurance companies and TPAs.", icon: CheckCircle },
];

export default function InsurancePage() {
    return (
        <main className="min-h-screen pb-20">
            {/* Hero */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
                <SectionContainer>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Insurance & TPA Partners</h1>
                    <p className="text-xl text-purple-100 text-center max-w-2xl mx-auto">
                        We accept all major health insurance policies. Enjoy hassle-free cashless treatment at Indira Super Speciality Hospital.
                    </p>
                </SectionContainer>
            </div>

            {/* Benefits */}
            <SectionContainer className="py-16">
                <SectionHeader
                    title="Why Choose Us for Insured Treatment?"
                    subtitle="Benefits"
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {benefits.map((b) => (
                        <Card key={b.title} className="text-center border-none shadow-md hover:shadow-xl transition-shadow">
                            <CardContent className="pt-8 pb-6">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                                    <b.icon className="h-7 w-7" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                                <p className="text-sm text-gray-600">{b.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </SectionContainer>

            {/* Insurance Partners Grid */}
            <SectionContainer className="py-16 bg-gray-50">
                <SectionHeader
                    title="Accepted Insurance & TPA Partners"
                    subtitle="Our Network"
                    description="We are empanelled with the following insurance companies and Third-Party Administrators (TPAs)."
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
                    {insurancePartners.map((name) => (
                        <div
                            key={name}
                            className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                                <span className="text-sm font-medium text-gray-800">{name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* CTA */}
            <SectionContainer className="py-16">
                <div className="bg-purple-50 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Insurance Claims?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Our dedicated insurance desk is available to assist you with pre-authorization, claim submission, and any queries.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Contact Insurance Desk</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href={`tel:${clinicConfig.phone}`}>
                                <Phone className="w-4 h-4 mr-2" />
                                Call {clinicConfig.phone}
                            </a>
                        </Button>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}

import { SectionHeader } from "@/components/ui/section-header";
import { Clock, ShieldCheck, HeartPulse, Trophy } from "lucide-react";

const features = [
    {
        name: '24/7 Emergency Care',
        description: 'Round-the-clock emergency services with minimal waiting time and expert trauma care.',
        icon: Clock,
    },
    {
        name: 'Experienced Professionals',
        description: 'A team of highly qualified doctors and nursing staff dedicated to patient recovery.',
        icon: ShieldCheck,
    },
    {
        name: 'Advanced Technology',
        description: 'State-of-the-art diagnostic and surgical equipment for precise treatment.',
        icon: HeartPulse,
    },
    {
        name: 'Award Winning Care',
        description: 'Recognized for excellence in patient safety and clinical outcomes.',
        icon: Trophy,
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-50/50 -skew-y-3 transform origin-top-left -z-10 h-full w-full"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Why Choose Indira Hospital?"
                    subtitle="Our Commitment"
                />
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-bold leading-7 text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

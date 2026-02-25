import { IconBox } from "@/components/ui/IconBox";
import { SectionContainer } from "@/components/ui/section-container";
import { Microscope, Zap, ScanFace, ShieldCheck, MonitorPlay } from "lucide-react";

import { clinicEquipment } from "@/lib/data/clinic-config";
import type { LucideIcon } from "lucide-react";

export function EquipmentSection() {
    const iconMap: Record<string, LucideIcon> = {
        cbct: ScanFace,
        microscope: Microscope,
        laser: Zap,
        scanner: MonitorPlay,
        autoclave: ShieldCheck,
    };

    const equipment = clinicEquipment.map(item => ({
        ...item,
        icon: iconMap[item.id] || Zap
    }));

    return (
        <SectionContainer className="bg-card">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Infrastructure</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We invest in the latest dental technology to provide you with safer, faster, and more comfortable treatments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipment.map((item, index) => (
                    <IconBox
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        variant="card"
                        className="h-full hover:shadow-md transition-shadow"
                    />
                ))}
            </div>
        </SectionContainer>
    );
}

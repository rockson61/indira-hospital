import { Timeline } from "@/components/ui/Timeline";
import { SectionContainer } from "@/components/ui/section-container";

interface ProcedureStep {
    title: string;
    description: string;
    duration?: string;
}

interface ProcedureTimelineProps {
    steps: ProcedureStep[];
    title?: string;
    description?: string;
}

export function ProcedureTimeline({
    steps,
    title = "Treatment Journey",
    description = "Here is what you can expect during your treatment."
}: ProcedureTimelineProps) {
    return (
        <div className="py-12 bg-default-50 dark:bg-default-50/5 rounded-3xl border border-default-100 dark:border-default-50/10">
            <SectionContainer>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading text-foreground mb-4">{title}</h2>
                    <p className="text-lg text-default-500 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Timeline items={steps.map(s => ({
                        title: s.title,
                        description: s.description,
                        date: s.duration
                    }))} />
                </div>
            </SectionContainer>
        </div>
    );
}

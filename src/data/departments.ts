export interface Department {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string; // Lucide icon name or image path
    features: string[];
}

export const departments: readonly Department[] = [
    {
        id: "cardiology",
        name: "Cardiology",
        slug: "cardiology",
        description: "Advanced cardiac care unit with state-of-the-art cath labs and non-invasive diagnostic facilities.",
        icon: "HeartPulse",
        features: ["24/7 Primary Angioplasty", "Echocardiography", "Heart Failure Clinic"],
    },
    {
        id: "neurology",
        name: "Neurology",
        slug: "neurology",
        description: "Comprehensive care for neurological disorders including stroke, epilepsy, and movement disorders.",
        icon: "Brain",
        features: ["Advanced Stroke Unit", "Video EEG", "Neuro Rehabilitation"],
    },
    {
        id: "orthopedics",
        name: "Orthopedics",
        slug: "orthopedics",
        description: "Specialized care for joint replacements, spine surgery, and sports medicine.",
        icon: "Bone",
        features: ["Robotic Joint Replacement", "Minimally Invasive Spine Surgery", "Sports Injury Clinic"],
    }
] as const;

export interface GlossaryTerm {
    term: string;
    definition: string;
    category: string;
    relatedService?: string; // Slug of the related service
    relatedServiceTitle?: string;
}

export const GLOSSARY_DATA: GlossaryTerm[] = [
    // Cardiology
    {
        term: "Angioplasty",
        definition: "A procedure to restore blood flow through the artery. It involves threading a catheter with a small balloon into a blocked blood vessel.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Arrhythmia",
        definition: "An improper beating of the heart, whether irregular, too fast, or too slow.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Echocardiogram",
        definition: "A test that uses sound waves to produce live images of your heart. It allows your doctor to monitor how your heart and its valves are functioning.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Holter Monitor",
        definition: "A small, wearable device that keeps track of your heart rhythm. You usually wear a Holter monitor for one to two days to record all of your heartbeats.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Stent",
        definition: "A tiny tube that your doctor can insert into a blocked passageway to keep it open. It restores the flow of blood or other fluids, depending on where it's placed.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },

    // Neurology
    {
        term: "Epilepsy",
        definition: "A central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness.",
        category: "Neurology",
        relatedService: "neurology",
        relatedServiceTitle: "Neurology"
    },
    {
        term: "Migraine",
        definition: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.",
        category: "Neurology",
        relatedService: "neurology",
        relatedServiceTitle: "Neurology"
    },
    {
        term: "Stroke",
        definition: "Damage to the brain from interruption of its blood supply.",
        category: "Neurology",
        relatedService: "neurology",
        relatedServiceTitle: "Neurology"
    },
    {
        term: "Electroencephalogram (EEG)",
        definition: "A test that detects electrical activity in your brain using small, metal discs (electrodes) attached to your scalp.",
        category: "Neurology",
        relatedService: "neurology",
        relatedServiceTitle: "Neurology"
    },

    // Orthopaedics
    {
        term: "Arthroscopy",
        definition: "A minimally invasive surgical procedure on a joint in which an examination and sometimes treatment of damage is performed using an arthroscope.",
        category: "Orthopaedics",
        relatedService: "orthopaedics",
        relatedServiceTitle: "Orthopaedics"
    },
    {
        term: "Fracture",
        definition: "A complete or partial break in a bone.",
        category: "Orthopaedics",
        relatedService: "orthopaedics",
        relatedServiceTitle: "Orthopaedics"
    },
    {
        term: "Joint Replacement",
        definition: "A surgery to replace a damaged joint with an artificial joint (prosthesis).",
        category: "Orthopaedics",
        relatedService: "orthopaedics",
        relatedServiceTitle: "Orthopaedics"
    },
    {
        term: "Osteoporosis",
        definition: "A condition in which bones become weak and brittle.",
        category: "Orthopaedics",
        relatedService: "orthopaedics",
        relatedServiceTitle: "Orthopaedics"
    },

    // Gastroenterology
    {
        term: "Endoscopy",
        definition: "A nonsurgical procedure used to examine a person's digestive tract.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },
    {
        term: "Gastritis",
        definition: "Inflammation of the lining of the stomach.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },
    {
        term: "Colonoscopy",
        definition: "An exam used to detect changes or abnormalities in the large intestine (colon) and rectum.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },
    {
        term: "Hernia",
        definition: "A bulging of an organ or tissue through an abnormal opening.",
        category: "General Surgery",
        relatedService: "general-surgery",
        relatedServiceTitle: "General Surgery"
    },

    // Urology
    {
        term: "Dialysis",
        definition: "A treatment that takes over your kidney functions to filter your blood.",
        category: "Nephrology",
        relatedService: "nephrology",
        relatedServiceTitle: "Nephrology"
    },
    {
        term: "Kidney Stones",
        definition: "Hard deposits made of minerals and salts that form inside your kidneys.",
        category: "Urology",
        relatedService: "urology",
        relatedServiceTitle: "Urology"
    },
    {
        term: "Prostate",
        definition: "A small walnut-shaped gland in males that produces seminal fluid.",
        category: "Urology",
        relatedService: "urology",
        relatedServiceTitle: "Urology"
    },
    {
        term: "Lithotripsy",
        definition: "A medical procedure that uses shock waves or a laser to break down stones in the kidney, gallbladder, or ureter.",
        category: "Urology",
        relatedService: "urology",
        relatedServiceTitle: "Urology"
    },

    // Oncology
    {
        term: "Biopsy",
        definition: "An examination of tissue removed from a living body to discover the presence, cause, or extent of a disease.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Chemotherapy",
        definition: "A drug treatment that uses powerful chemicals to kill fast-growing cells in your body.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Mammogram",
        definition: "An X-ray picture of the breast used to check for breast cancer in women who have no signs or symptoms of the disease.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },

    // Obstetrics & Gynaecology
    {
        term: "Ultrasound",
        definition: "A medical test that uses high-frequency sound waves to capture live images from the inside of your body.",
        category: "Obstetrics & Gynaecology",
        relatedService: "obstetrics-gynaecology",
        relatedServiceTitle: "Obstetrics & Gynaecology"
    },
    {
        term: "Laparoscopy",
        definition: "A surgical procedure in which a fiber-optic instrument is inserted through the abdominal wall to view the organs in the abdomen or to permit a surgical procedure.",
        category: "General Surgery", // Often fits here or gynae
        relatedService: "laparoscopic-surgeries",
        relatedServiceTitle: "Laparoscopic Surgery"
    },
    {
        term: "Caesarean Section (C-Section)",
        definition: "A surgical procedure used to deliver a baby through incisions in the abdomen and uterus.",
        category: "Obstetrics & Gynaecology",
        relatedService: "obstetrics-gynaecology",
        relatedServiceTitle: "Obstetrics & Gynaecology"
    },

    // General Terms
    {
        term: "Anesthesia",
        definition: "A temporary state of controlled loss of sensation or awareness that is induced for medical purposes.",
        category: "General",
        relatedService: "icu-emergency",
        relatedServiceTitle: "Emergency"
    },
    {
        term: "ICU (Intensive Care Unit)",
        definition: "A special department of a hospital or health care facility that provides intensive treatment medicine.",
        category: "ICU & Emergency",
        relatedService: "icu-emergency",
        relatedServiceTitle: "ICU & Emergency"
    },
    {
        term: "Trauma",
        definition: "A severe injury to the body caused by violence or an accident.",
        category: "ICU & Emergency",
        relatedService: "icu-emergency",
        relatedServiceTitle: "ICU & Emergency"
    }

];

export const getGlossaryTerms = () => {
    return GLOSSARY_DATA.sort((a, b) => a.term.localeCompare(b.term));
};

export const getGlossaryTermsByCategory = (category: string) => {
    return GLOSSARY_DATA.filter(term => term.category === category).sort((a, b) => a.term.localeCompare(b.term));
};

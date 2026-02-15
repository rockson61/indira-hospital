export interface GlossaryTerm {
    term: string;
    definition: string;
    category: string;
    relatedService?: string; // Slug of the related service
    relatedServiceTitle?: string;
}

export const GLOSSARY_DATA: GlossaryTerm[] = [
    // A
    {
        term: "Ablation",
        definition: "A form of treatment that uses electrical energy, heat, cold, or alcohol to destroy a small section of damaged tissue. Commonly used in heart rhythm treatments.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Abscess",
        definition: "Pus that collects in a pocket of swollen, red tissue. Often occurs on the surface of the skin or inside the body.",
        category: "General Surgery",
        relatedService: "general-surgery",
        relatedServiceTitle: "General Surgery"
    },
    {
        term: "Acute",
        definition: "A condition that comes on suddenly, often with severe, but short-lived symptoms.",
        category: "General",
        relatedService: "icu-emergency",
        relatedServiceTitle: "Emergency"
    },
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

    // B
    {
        term: "Bacteria",
        definition: "Tiny single-celled organisms. Some bacteria cause disease, although most are harmless.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bariatric Surgery",
        definition: "Weight loss surgery performed on people who are dangerously overweight, to restrict or reduce food intake and/or absorption.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },
    {
        term: "Basal Cell Carcinoma",
        definition: "The most common skin cancer. It usually develops on sun-exposed areas like the face and neck.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Benign",
        definition: "Harmless; often used to refer to a tumor that is not cancerous and does not usually spread.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Beta Blockers",
        definition: "Medications that reduce blood pressure and slow the heart rate. Used to treat heart rhythm problems and hypertension.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
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

    // C
    {
        term: "Calcium",
        definition: "A mineral that the body needs for bone formation, heart rate regulation, and muscle contraction.",
        category: "Orthopaedics",
        relatedService: "orthopaedics",
        relatedServiceTitle: "Orthopaedics"
    },
    {
        term: "Cancer",
        definition: "A group of diseases in which abnormal cells grow in an uncontrolled way, sometimes forming tumors.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Carcinogen",
        definition: "Any substance that can cause cancer.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Cardiac Arrest",
        definition: "The sudden cessation of heart contractions capable of circulating blood. It requires immediate CPR.",
        category: "Cardiology",
        relatedService: "icu-emergency",
        relatedServiceTitle: "Emergency"
    },
    {
        term: "Cardiac Catheterization",
        definition: "A procedure to diagnose heart problems; a thin tube is inserted into a blood vessel and maneuvered into the heart.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Cardiovascular",
        definition: "Pertaining to the heart and blood vessels.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
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
    },

    // D
    {
        term: "Deep Vein Thrombosis (DVT)",
        definition: "A blood clot that forms in a vein deep in the body, most often in the lower leg or thigh.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Dermatologist",
        definition: "A doctor who specializes in conditions involving the skin, hair, and nails.",
        category: "Dermatology",
        relatedService: "dermatology",
        relatedServiceTitle: "Dermatology"
    },
    {
        term: "Diabetes",
        definition: "A disease in which the body’s ability to produce or respond to the hormone insulin is impaired, resulting in abnormal metabolism of carbohydrates and elevated levels of glucose in the blood.",
        category: "Diabetology",
        relatedService: "diabetology",
        relatedServiceTitle: "Diabetology"
    },
    {
        term: "Diuretic",
        definition: "A medication that helps the kidneys remove excess water and salt from the body through urine. Often used to treat high blood pressure.",
        category: "Nephrology",
        relatedService: "nephrology",
        relatedServiceTitle: "Nephrology"
    },

    // E
    {
        term: "Edema",
        definition: "Swelling caused by excess fluid trapped in your body's tissues.",
        category: "General Medicine",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Embolism",
        definition: "Obstruction of an artery, typically by a clot of blood or an air bubble.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Epidural",
        definition: "An injection of anesthesia into the space around the spinal cord, commonly used to block pain during childbirth.",
        category: "Obstetrics & Gynaecology",
        relatedService: "obstetrics-gynaecology",
        relatedServiceTitle: "Maternity"
    },

    // F
    {
        term: "Fibrillation",
        definition: "Rapid, irregular, and unsynchronized contraction of muscle fibers, particularly of the heart.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Fibroids",
        definition: "Non-cancerous growths of the uterus that often appear during childbearing years.",
        category: "Obstetrics & Gynaecology",
        relatedService: "obstetrics-gynaecology",
        relatedServiceTitle: "Gynaecology"
    },
    {
        term: "Fistula",
        definition: "An abnormal connection between organs or vessels that do not normally connect.",
        category: "General Surgery",
        relatedService: "general-surgery",
        relatedServiceTitle: "General Surgery"
    },

    // G
    {
        term: "Gastroenteritis",
        definition: "Inflammation of the lining of the intestines caused by a virus, bacteria, or parasites.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },
    {
        term: "Glaucoma",
        definition: "A group of eye conditions that damage the optic nerve, the health of which is vital for good vision.",
        category: "Ophthalmology",
        relatedService: "ophthalmology",
        relatedServiceTitle: "Eye Care"
    },

    // H
    {
        term: "Hematoma",
        definition: "A solid swelling of clotted blood within the tissues.",
        category: "General Surgery",
        relatedService: "general-surgery",
        relatedServiceTitle: "General Surgery"
    },
    {
        term: "Hemorrhoids",
        definition: "Swollen veins in your lower rectum. Internal hemorrhoids are usually painless, but usually tend to bleed.",
        category: "General Surgery",
        relatedService: "general-surgery",
        relatedServiceTitle: "Piles Treatment"
    },
    {
        term: "Hepatitis",
        definition: "Inflammation of the liver.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },
    {
        term: "Hypertension",
        definition: "Abnormally high blood pressure. A state of great psychological stress.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Hysterectomy",
        definition: "A surgical operation to remove all or part of the uterus.",
        category: "Obstetrics & Gynaecology",
        relatedService: "obstetrics-gynaecology",
        relatedServiceTitle: "Gynaecology"
    },

    // I
    {
        term: "Immunotherapy",
        definition: "A type of cancer treatment that helps your immune system fight cancer.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Implant",
        definition: "A thing implanted in something else, especially a piece of tissue, prosthetic device, or other object implanted in the body.",
        category: "Dental",
        relatedService: "dental",
        relatedServiceTitle: "Dental Care"
    },
    {
        term: "Insulin",
        definition: "A hormone produced in the pancreas by the islets of Langerhans that regulates the amount of glucose in the blood.",
        category: "Diabetology",
        relatedService: "diabetology",
        relatedServiceTitle: "Diabetology"
    },
    {
        term: "Intravenous (IV)",
        definition: "Existing or taking place within, or administered into, a vein or veins.",
        category: "General",
        relatedService: "icu-emergency",
        relatedServiceTitle: "Emergency"
    },

    // J
    {
        term: "Jaundice",
        definition: "A medical condition with yellowing of the skin or whites of the eyes, arising from excess of the pigment bilirubin.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },

    // K
    {
        term: "Kidney Failure",
        definition: "A condition in which the kidneys lose the ability to remove waste and balance fluids.",
        category: "Nephrology",
        relatedService: "nephrology",
        relatedServiceTitle: "Nephrology"
    },

    // L
    {
        term: "Lipid Profile",
        definition: "A blood test that measures the amount of cholesterol and fats called triglycerides in the blood.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Master Health Checkup"
    },
    {
        term: "Lumbar Puncture",
        definition: "A medical procedure in which a needle is inserted into the spinal canal to collect cerebrospinal fluid for diagnostic testing.",
        category: "Neurology",
        relatedService: "neurology",
        relatedServiceTitle: "Neurology"
    },

    // M
    {
        term: "MRI (Magnetic Resonance Imaging)",
        definition: "A medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.",
        category: "Radiology",
        relatedService: "radiology",
        relatedServiceTitle: "Radiology"
    },
    {
        term: "Mastectomy",
        definition: "A surgical operation to remove a breast.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Menopause",
        definition: "The ceasing of menstruation.",
        category: "Obstetrics & Gynaecology",
        relatedService: "obstetrics-gynaecology",
        relatedServiceTitle: "Gynaecology"
    },
    {
        term: "Metabolism",
        definition: "The chemical processes that occur within a living organism in order to maintain life.",
        category: "Endocrinology",
        relatedService: "endocrinology",
        relatedServiceTitle: "Endocrinology"
    },

    // N
    {
        term: "Nephrology",
        definition: "The branch of medicine that deals with the physiology and diseases of the kidneys.",
        category: "Nephrology",
        relatedService: "nephrology",
        relatedServiceTitle: "Nephrology"
    },
    {
        term: "Neuropathy",
        definition: "Weakness, numbness, and pain from nerve damage, usually in the hands and feet.",
        category: "Neurology",
        relatedService: "neurology",
        relatedServiceTitle: "Neurology"
    },

    // O
    {
        term: "Oncology",
        definition: "The study and treatment of tumors.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Orthodontics",
        definition: "The treatment of irregularities in the teeth (especially of alignment and occlusion) and jaws, including the use of braces.",
        category: "Dental",
        relatedService: "dental",
        relatedServiceTitle: "Dental Care"
    },

    // P
    {
        term: "Pacemaker",
        definition: "An artificial device for stimulating the heart muscle and regulating its contractions.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Palliative Care",
        definition: "Specialized medical care for people living with a serious illness. This type of care is focused on providing relief from the symptoms and stress of the illness.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Pathology",
        definition: "The science of the causes and effects of diseases.",
        category: "Laboratory",
        relatedService: "laboratory",
        relatedServiceTitle: "Lab Services"
    },
    {
        term: "Pediatrician",
        definition: "A medical practitioner specializing in children and their diseases.",
        category: "Pediatrics",
        relatedService: "pediatrics",
        relatedServiceTitle: "Pediatrics"
    },
    {
        term: "Physiotherapy",
        definition: "The treatment of disease, injury, or deformity by physical methods such as massage, heat treatment, and exercise rather than by drugs or surgery.",
        category: "Physiotherapy",
        relatedService: "physiotherapy",
        relatedServiceTitle: "Physiotherapy"
    },
    {
        term: "Pneumonia",
        definition: "Infection that inflames air sacs in one or both lungs, which may fill with fluid.",
        category: "Pulmonology",
        relatedService: "pulmonology",
        relatedServiceTitle: "Pulmonology"
    },
    {
        term: "Polyp",
        definition: "A small growth, typically benign and with a stalk, protruding from a mucous membrane.",
        category: "Gastroenterology",
        relatedService: "gastroenterology",
        relatedServiceTitle: "Gastroenterology"
    },
    {
        term: "Prenatal",
        definition: "Before birth; during or relating to pregnancy.",
        category: "Obstetrics & Gynaecology",
        relatedService: "obstetrics-gynaecology",
        relatedServiceTitle: "Maternity"
    },

    // R
    {
        term: "Radiation Therapy",
        definition: "The use of high-energy radiation to damage cancer cells' DNA and destroy their ability to divide and grow.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },
    {
        term: "Radiology",
        definition: "The science dealing with X-rays and other high-energy radiation, especially the use of such radiation for the diagnosis and treatment of disease.",
        category: "Radiology",
        relatedService: "radiology",
        relatedServiceTitle: "Radiology"
    },
    {
        term: "Renal",
        definition: "Relating to the kidneys.",
        category: "Nephrology",
        relatedService: "nephrology",
        relatedServiceTitle: "Nephrology"
    },
    {
        term: "Rheumatoid Arthritis",
        definition: "A chronic progressive disease causing inflammation in the joints and resulting in painful deformity and immobility.",
        category: "Orthopaedics",
        relatedService: "orthopaedics",
        relatedServiceTitle: "Orthopaedics"
    },

    // S
    {
        term: "Sepsis",
        definition: "A life-threatening complication of an infection.",
        category: "ICU & Emergency",
        relatedService: "icu-emergency",
        relatedServiceTitle: "Critical Care"
    },
    {
        term: "Sinusitis",
        definition: "A condition in which the cavities around the nasal passages become inflamed.",
        category: "ENT",
        relatedService: "ent",
        relatedServiceTitle: "ENT"
    },
    {
        term: "Sleep Apnea",
        definition: "A potentially serious sleep disorder in which breathing repeatedly stops and starts.",
        category: "Pulmonology",
        relatedService: "pulmonology",
        relatedServiceTitle: "Pulmonology"
    },

    // T
    {
        term: "Tachycardia",
        definition: "A heart rate that exceeds the normal resting rate.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Thrombosis",
        definition: "Local coagulation or clotting of the blood in a part of the circulatory system.",
        category: "Cardiology",
        relatedService: "cardiology",
        relatedServiceTitle: "Cardiology"
    },
    {
        term: "Thyroid",
        definition: "A large ductless gland in the neck that secretes hormones regulating growth and development through the rate of metabolism.",
        category: "Endocrinology",
        relatedService: "endocrinology",
        relatedServiceTitle: "Endocrinology"
    },
    {
        term: "Tumor",
        definition: "A swelling of a part of the body, generally without inflammation, caused by an abnormal growth of tissue, whether benign or malignant.",
        category: "Oncology",
        relatedService: "oncology",
        relatedServiceTitle: "Oncology"
    },

    // U
    {
        term: "Urology",
        definition: "The branch of medicine and physiology concerned with the function and disorders of the urinary system.",
        category: "Urology",
        relatedService: "urology",
        relatedServiceTitle: "Urology"
    },

    // V
    {
        term: "Vaccination",
        definition: "Treatment with a vaccine to produce immunity against a disease.",
        category: "Pediatrics",
        relatedService: "pediatrics",
        relatedServiceTitle: "Pediatrics"
    },
    {
        term: "Varicose Veins",
        definition: "Gnarled, enlarged veins, most commonly appearing in the legs and feet.",
        category: "General Surgery",
        relatedService: "general-surgery",
        relatedServiceTitle: "General Surgery"
    },
    {
        term: "Ventilator",
        definition: "A machine that supports breathing.",
        category: "ICU & Emergency",
        relatedService: "icu-emergency",
        relatedServiceTitle: "Critical Care"
    },
    {
        term: "Vertigo",
        definition: "A sensation of whirling and loss of balance.",
        category: "Neurology",
        relatedService: "neurology",
        relatedServiceTitle: "Neurology"
    },

    // X
    {
        term: "X-ray",
        definition: "A photographic or digital image of the internal composition of something, especially a part of the body.",
        category: "Radiology",
        relatedService: "radiology",
        relatedServiceTitle: "Radiology"
    },

    // Z
    {
        term: "Zoonosis",
        definition: "A disease which can be transmitted to humans from animals.",
        category: "General Medicine",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    }
];

export const getGlossaryTerms = () => {
    return GLOSSARY_DATA.sort((a, b) => a.term.localeCompare(b.term));
};

export const getGlossaryTermsByCategory = (category: string) => {
    return GLOSSARY_DATA.filter(term => term.category === category).sort((a, b) => a.term.localeCompare(b.term));
};

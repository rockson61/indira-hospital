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
        category: "Dentistry",
        relatedService: "dentistry",
        relatedServiceTitle: "Maxillofacial & Dentistry"
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
        category: "Dentistry",
        relatedService: "dentistry",
        relatedServiceTitle: "Maxillofacial & Dentistry"
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
    ,
    // Auto-imported bulk terms
    {
        term: "About Your Veins",
        definition: "Find expert knowledge and treatments for About Your Veins at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Acetabular Dysplasia",
        definition: "Find expert knowledge and treatments for Acetabular Dysplasia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Achalasia",
        definition: "Find expert knowledge and treatments for Achalasia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Achilles Tendinitis",
        definition: "Find expert knowledge and treatments for Achilles Tendinitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Achilles Tendon Rupture",
        definition: "Find expert knowledge and treatments for Achilles Tendon Rupture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Acne",
        definition: "Find expert knowledge and treatments for Acne at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Acoustic Neuroma (Vestibular Schwannoma)",
        definition: "Find expert knowledge and treatments for Acoustic Neuroma (Vestibular Schwannoma) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Acute Headaches - Neuro Infusion Services",
        definition: "Find expert knowledge and treatments for Acute Headaches - Neuro Infusion Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Acute Spinal Cord Injury",
        definition: "Find expert knowledge and treatments for Acute Spinal Cord Injury at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Addiction and Substance Abuse Services",
        definition: "Find expert knowledge and treatments for Addiction and Substance Abuse Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Adolescent Medicine",
        definition: "Find expert knowledge and treatments for Adolescent Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Adrenal Cancer",
        definition: "Find expert knowledge and treatments for Adrenal Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Adrenal Tumors",
        definition: "Find expert knowledge and treatments for Adrenal Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Adult Congenital Heart Disease",
        definition: "Find expert knowledge and treatments for Adult Congenital Heart Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Adult Cystic Fibrosis Program",
        definition: "Find expert knowledge and treatments for Adult Cystic Fibrosis Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Adult Scoliosis",
        definition: "Find expert knowledge and treatments for Adult Scoliosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "AIDS-Related Cancer Care",
        definition: "Find expert knowledge and treatments for AIDS-Related Cancer Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "AIDS-Related Cancers",
        definition: "Find expert knowledge and treatments for AIDS-Related Cancers at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Alcohol Abuse",
        definition: "Find expert knowledge and treatments for Alcohol Abuse at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Allergy and Immunology",
        definition: "Find expert knowledge and treatments for Allergy and Immunology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Alzheimer's Disease",
        definition: "Find expert knowledge and treatments for Alzheimer's Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ambulatory EEG",
        definition: "Find expert knowledge and treatments for Ambulatory EEG at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ambulatory Precision Lung Sparing Surgery Program",
        definition: "Find expert knowledge and treatments for Ambulatory Precision Lung Sparing Surgery Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Amyloidosis",
        definition: "Find expert knowledge and treatments for Amyloidosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Amyotrophic Lateral Sclerosis (ALS)",
        definition: "Find expert knowledge and treatments for Amyotrophic Lateral Sclerosis (ALS) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Anal Cancer",
        definition: "Find expert knowledge and treatments for Anal Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Anal Incontinence",
        definition: "Find expert knowledge and treatments for Anal Incontinence at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Anesthesiology",
        definition: "Find expert knowledge and treatments for Anesthesiology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ankle Arthritis",
        definition: "Find expert knowledge and treatments for Ankle Arthritis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ankle Cartilage Damage",
        definition: "Find expert knowledge and treatments for Ankle Cartilage Damage at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ankle Fracture",
        definition: "Find expert knowledge and treatments for Ankle Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ankle Instability",
        definition: "Find expert knowledge and treatments for Ankle Instability at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ankylosing Spondylitis",
        definition: "Find expert knowledge and treatments for Ankylosing Spondylitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Anterior Ankle Impingement (Athlete's Ankle)",
        definition: "Find expert knowledge and treatments for Anterior Ankle Impingement (Athlete's Ankle) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Anterior Talofibular Ligament Injury",
        definition: "Find expert knowledge and treatments for Anterior Talofibular Ligament Injury at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Anxiety",
        definition: "Find expert knowledge and treatments for Anxiety at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Aortic Aneurysm",
        definition: "Find expert knowledge and treatments for Aortic Aneurysm at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Aortic Dissection",
        definition: "Find expert knowledge and treatments for Aortic Dissection at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Aphasia",
        definition: "Find expert knowledge and treatments for Aphasia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Arrhythmia",
        definition: "Find expert knowledge and treatments for Arrhythmia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Arthritis",
        definition: "Find expert knowledge and treatments for Arthritis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Articular Cartilage Injuries of the Knee",
        definition: "Find expert knowledge and treatments for Articular Cartilage Injuries of the Knee at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Aspiration Pneumonia",
        definition: "Find expert knowledge and treatments for Aspiration Pneumonia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Asthma",
        definition: "Find expert knowledge and treatments for Asthma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Asthma and COPD",
        definition: "Find expert knowledge and treatments for Asthma and COPD at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Astigmatism",
        definition: "Find expert knowledge and treatments for Astigmatism at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ataxia",
        definition: "Find expert knowledge and treatments for Ataxia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Atelectasis and Pneumothorax",
        definition: "Find expert knowledge and treatments for Atelectasis and Pneumothorax at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Atención para trastornos del movimiento en español",
        definition: "Find expert knowledge and treatments for Atención para trastornos del movimiento en español at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Athlete's Foot",
        definition: "Find expert knowledge and treatments for Athlete's Foot at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Athletic Training and Sports Performance Clinic",
        definition: "Find expert knowledge and treatments for Athletic Training and Sports Performance Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Atrial Fibrillation",
        definition: "Find expert knowledge and treatments for Atrial Fibrillation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Atypical Parkinsonian Symptoms",
        definition: "Find expert knowledge and treatments for Atypical Parkinsonian Symptoms at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Atypical Parkinsonisms",
        definition: "Find expert knowledge and treatments for Atypical Parkinsonisms at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Audiology",
        definition: "Find expert knowledge and treatments for Audiology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Autoimmune Encephalitis",
        definition: "Find expert knowledge and treatments for Autoimmune Encephalitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Back Pain",
        definition: "Find expert knowledge and treatments for Back Pain at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Back, Neck and Spine",
        definition: "Find expert knowledge and treatments for Back, Neck and Spine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Balance And Vestibular Conditions",
        definition: "Find expert knowledge and treatments for Balance And Vestibular Conditions at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Barrett's Esophagus",
        definition: "Find expert knowledge and treatments for Barrett's Esophagus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Before Stroke",
        definition: "Find expert knowledge and treatments for Before Stroke at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Behavioral Health Services",
        definition: "Find expert knowledge and treatments for Behavioral Health Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Behavioral Medicine",
        definition: "Find expert knowledge and treatments for Behavioral Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Behavioral Medicine for Digestive Health",
        definition: "Find expert knowledge and treatments for Behavioral Medicine for Digestive Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bell Palsy",
        definition: "Find expert knowledge and treatments for Bell Palsy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ben Gordon Center The Living Room",
        definition: "Find expert knowledge and treatments for Ben Gordon Center The Living Room at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Benign (Noncancerous) Breast Conditions",
        definition: "Find expert knowledge and treatments for Benign (Noncancerous) Breast Conditions at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Benign Prostatic Hyperplasia",
        definition: "Find expert knowledge and treatments for Benign Prostatic Hyperplasia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bicuspid Aortic Valve Disease",
        definition: "Find expert knowledge and treatments for Bicuspid Aortic Valve Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bimalleolar Fracture",
        definition: "Find expert knowledge and treatments for Bimalleolar Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bipolar Disorder",
        definition: "Find expert knowledge and treatments for Bipolar Disorder at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bladder and Cloacal Exstrophy",
        definition: "Find expert knowledge and treatments for Bladder and Cloacal Exstrophy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bladder Cancer",
        definition: "Find expert knowledge and treatments for Bladder Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bladder Stones",
        definition: "Find expert knowledge and treatments for Bladder Stones at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Blood Cancers",
        definition: "Find expert knowledge and treatments for Blood Cancers at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Blood Clot Disorder",
        definition: "Find expert knowledge and treatments for Blood Clot Disorder at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bone Cancer",
        definition: "Find expert knowledge and treatments for Bone Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bone Spurs",
        definition: "Find expert knowledge and treatments for Bone Spurs at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Botulinum Toxin (Botox)",
        definition: "Find expert knowledge and treatments for Botulinum Toxin (Botox) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Brain and Spine Tumors",
        definition: "Find expert knowledge and treatments for Brain and Spine Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Brain Injury Outpatient Therapy and Day Rehabilitation Programs",
        definition: "Find expert knowledge and treatments for Brain Injury Outpatient Therapy and Day Rehabilitation Programs at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Brain Tumors",
        definition: "Find expert knowledge and treatments for Brain Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Breast Cancer",
        definition: "Find expert knowledge and treatments for Breast Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Breast Cancer Risk Assessment and Prevention",
        definition: "Find expert knowledge and treatments for Breast Cancer Risk Assessment and Prevention at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Breast Cancer Screening and Diagnosis",
        definition: "Find expert knowledge and treatments for Breast Cancer Screening and Diagnosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Breast Cancer Treatment",
        definition: "Find expert knowledge and treatments for Breast Cancer Treatment at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Breast Health Program",
        definition: "Find expert knowledge and treatments for Breast Health Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bronchiectasis Program",
        definition: "Find expert knowledge and treatments for Bronchiectasis Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bronchitis",
        definition: "Find expert knowledge and treatments for Bronchitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Bunion (Hallux Valgus)",
        definition: "Find expert knowledge and treatments for Bunion (Hallux Valgus) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Calcaneus Fracture",
        definition: "Find expert knowledge and treatments for Calcaneus Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cam Impingement",
        definition: "Find expert knowledge and treatments for Cam Impingement at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Camps for Kids",
        definition: "Find expert knowledge and treatments for Camps for Kids at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cancer",
        definition: "Find expert knowledge and treatments for Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cancer Care",
        definition: "Find expert knowledge and treatments for Cancer Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cancer Genetics",
        definition: "Find expert knowledge and treatments for Cancer Genetics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cancer Support Services",
        definition: "Find expert knowledge and treatments for Cancer Support Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "CAR T-Cell Therapy Program",
        definition: "Find expert knowledge and treatments for CAR T-Cell Therapy Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Carotid Artery Disease",
        definition: "Find expert knowledge and treatments for Carotid Artery Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Carotid Artery Disease and Stroke",
        definition: "Find expert knowledge and treatments for Carotid Artery Disease and Stroke at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Carpal Tunnel Syndrome",
        definition: "Find expert knowledge and treatments for Carpal Tunnel Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cataract",
        definition: "Find expert knowledge and treatments for Cataract at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cavernous Malformations and Angiomas",
        definition: "Find expert knowledge and treatments for Cavernous Malformations and Angiomas at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cavovarus Foot",
        definition: "Find expert knowledge and treatments for Cavovarus Foot at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cavus Foot",
        definition: "Find expert knowledge and treatments for Cavus Foot at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Center for Complex Gynecology",
        definition: "Find expert knowledge and treatments for Center for Complex Gynecology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Center for Home-Based Advanced Respiratory Devices",
        definition: "Find expert knowledge and treatments for Center for Home-Based Advanced Respiratory Devices at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Center for Sexual Medicine and Menopause",
        definition: "Find expert knowledge and treatments for Center for Sexual Medicine and Menopause at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Center for Surgery of the Hand",
        definition: "Find expert knowledge and treatments for Center for Surgery of the Hand at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Center for Voice at Northwestern University",
        definition: "Find expert knowledge and treatments for Center for Voice at Northwestern University at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Central Nervous System Lymphoma",
        definition: "Find expert knowledge and treatments for Central Nervous System Lymphoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Central Pain Syndrome",
        definition: "Find expert knowledge and treatments for Central Pain Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Central Sleep Apnea",
        definition: "Find expert knowledge and treatments for Central Sleep Apnea at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cerebral Aneurysms",
        definition: "Find expert knowledge and treatments for Cerebral Aneurysms at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cerebral or Spinal Arteriovenous Malformations and Dural Arteriovenous Fistulas",
        definition: "Find expert knowledge and treatments for Cerebral or Spinal Arteriovenous Malformations and Dural Arteriovenous Fistulas at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cerebrospinal Fluid Leak Program",
        definition: "Find expert knowledge and treatments for Cerebrospinal Fluid Leak Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cervical Cancer",
        definition: "Find expert knowledge and treatments for Cervical Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cervical Myelopathy and Radiculopathy",
        definition: "Find expert knowledge and treatments for Cervical Myelopathy and Radiculopathy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cervical Spine",
        definition: "Find expert knowledge and treatments for Cervical Spine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Charcot Marie Tooth Disease",
        definition: "Find expert knowledge and treatments for Charcot Marie Tooth Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chemotherapy Induced Alopecia",
        definition: "Find expert knowledge and treatments for Chemotherapy Induced Alopecia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Child Life Specialists",
        definition: "Find expert knowledge and treatments for Child Life Specialists at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Childhood or Pediatric Cancers",
        definition: "Find expert knowledge and treatments for Childhood or Pediatric Cancers at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chiropractic Medicine",
        definition: "Find expert knowledge and treatments for Chiropractic Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chlamydia",
        definition: "Find expert knowledge and treatments for Chlamydia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Choosing a Primary Care Physician",
        definition: "Find expert knowledge and treatments for Choosing a Primary Care Physician at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chordoma",
        definition: "Find expert knowledge and treatments for Chordoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chordoma Center",
        definition: "Find expert knowledge and treatments for Chordoma Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chronic Ankle Sprain",
        definition: "Find expert knowledge and treatments for Chronic Ankle Sprain at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chronic Cough",
        definition: "Find expert knowledge and treatments for Chronic Cough at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chronic Obstructive Pulmonary Disease (COPD)",
        definition: "Find expert knowledge and treatments for Chronic Obstructive Pulmonary Disease (COPD) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Chronic Pelvic Pain Syndromes",
        definition: "Find expert knowledge and treatments for Chronic Pelvic Pain Syndromes at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Circadian Rhythm Sleep Disorders",
        definition: "Find expert knowledge and treatments for Circadian Rhythm Sleep Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "CLIA",
        definition: "Find expert knowledge and treatments for CLIA at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Clinical Genetics",
        definition: "Find expert knowledge and treatments for Clinical Genetics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Clinical Trials",
        definition: "Find expert knowledge and treatments for Clinical Trials at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Clinical Trials and Research",
        definition: "Find expert knowledge and treatments for Clinical Trials and Research at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Clinically Isolated Demyelinating Syndromes",
        definition: "Find expert knowledge and treatments for Clinically Isolated Demyelinating Syndromes at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Clinics and Specialty Clinics",
        definition: "Find expert knowledge and treatments for Clinics and Specialty Clinics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cloacal Anomalies",
        definition: "Find expert knowledge and treatments for Cloacal Anomalies at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Clostridium Difficile (C. diff) Infection",
        definition: "Find expert knowledge and treatments for Clostridium Difficile (C. diff) Infection at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cochlear Implants (ENT)",
        definition: "Find expert knowledge and treatments for Cochlear Implants (ENT) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cochlear Implants (Neurosciences)",
        definition: "Find expert knowledge and treatments for Cochlear Implants (Neurosciences) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cold Sores",
        definition: "Find expert knowledge and treatments for Cold Sores at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Collaborative Behavioral Health Program",
        definition: "Find expert knowledge and treatments for Collaborative Behavioral Health Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Collagen Vascular Disease",
        definition: "Find expert knowledge and treatments for Collagen Vascular Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Colon Cancer",
        definition: "Find expert knowledge and treatments for Colon Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Colorectal Cancer",
        definition: "Find expert knowledge and treatments for Colorectal Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Colorectal Disease Program",
        definition: "Find expert knowledge and treatments for Colorectal Disease Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Complementary Medicine",
        definition: "Find expert knowledge and treatments for Complementary Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Complex Primary Care",
        definition: "Find expert knowledge and treatments for Complex Primary Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Complex Regional Pain Syndrome",
        definition: "Find expert knowledge and treatments for Complex Regional Pain Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Comprehensive Care After COVID-19",
        definition: "Find expert knowledge and treatments for Comprehensive Care After COVID-19 at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Comprehensive Care for Low Grade Gliomas",
        definition: "Find expert knowledge and treatments for Comprehensive Care for Low Grade Gliomas at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Comprehensive Epilepsy Center",
        definition: "Find expert knowledge and treatments for Comprehensive Epilepsy Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Comprehensive Headache Center at Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Comprehensive Headache Center at Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Comprehensive Melanoma Program",
        definition: "Find expert knowledge and treatments for Comprehensive Melanoma Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Comprehensive Programs and Evaluations to Help You Return to Work",
        definition: "Find expert knowledge and treatments for Comprehensive Programs and Evaluations to Help You Return to Work at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Concierge Medicine Program",
        definition: "Find expert knowledge and treatments for Concierge Medicine Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Concierge Physical Therapy",
        definition: "Find expert knowledge and treatments for Concierge Physical Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Concussion",
        definition: "Find expert knowledge and treatments for Concussion at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Concussion Clinic",
        definition: "Find expert knowledge and treatments for Concussion Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Congenital Anomalies",
        definition: "Find expert knowledge and treatments for Congenital Anomalies at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Congenital Urology",
        definition: "Find expert knowledge and treatments for Congenital Urology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Constipation",
        definition: "Find expert knowledge and treatments for Constipation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Contact Dermatitis",
        definition: "Find expert knowledge and treatments for Contact Dermatitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Corneal Dystrophy",
        definition: "Find expert knowledge and treatments for Corneal Dystrophy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Corneal Injuries",
        definition: "Find expert knowledge and treatments for Corneal Injuries at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Coronary Artery Chronic Total Occlusion",
        definition: "Find expert knowledge and treatments for Coronary Artery Chronic Total Occlusion at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Coronary Artery Disease",
        definition: "Find expert knowledge and treatments for Coronary Artery Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Corporate Wellness",
        definition: "Find expert knowledge and treatments for Corporate Wellness at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Corticobasal Degeneration",
        definition: "Find expert knowledge and treatments for Corticobasal Degeneration at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "COVID-19",
        definition: "Find expert knowledge and treatments for COVID-19 at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Critical Care Medicine",
        definition: "Find expert knowledge and treatments for Critical Care Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Crohn's Disease",
        definition: "Find expert knowledge and treatments for Crohn's Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cutaneous Lymphoma",
        definition: "Find expert knowledge and treatments for Cutaneous Lymphoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cystic Fibrosis",
        definition: "Find expert knowledge and treatments for Cystic Fibrosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cysts",
        definition: "Find expert knowledge and treatments for Cysts at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Cytomegalovirus Disease",
        definition: "Find expert knowledge and treatments for Cytomegalovirus Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dandruff",
        definition: "Find expert knowledge and treatments for Dandruff at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Deep Vein Thrombosis",
        definition: "Find expert knowledge and treatments for Deep Vein Thrombosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dementia",
        definition: "Find expert knowledge and treatments for Dementia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Depression",
        definition: "Find expert knowledge and treatments for Depression at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dermatitis Herpetiformis",
        definition: "Find expert knowledge and treatments for Dermatitis Herpetiformis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dermatologic Cancers",
        definition: "Find expert knowledge and treatments for Dermatologic Cancers at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dermatology",
        definition: "Find expert knowledge and treatments for Dermatology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Developmental Therapeutics - Lurie Cancer Center",
        definition: "Find expert knowledge and treatments for Developmental Therapeutics - Lurie Cancer Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Diabetes",
        definition: "Find expert knowledge and treatments for Diabetes at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Diabetic Retinopathy",
        definition: "Find expert knowledge and treatments for Diabetic Retinopathy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Diagnostic Testing",
        definition: "Find expert knowledge and treatments for Diagnostic Testing at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Differences of Sexual Development",
        definition: "Find expert knowledge and treatments for Differences of Sexual Development at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Digestive Health Center",
        definition: "Find expert knowledge and treatments for Digestive Health Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Discogram and Provocation Discography",
        definition: "Find expert knowledge and treatments for Discogram and Provocation Discography at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Disorders of the Diaphragm",
        definition: "Find expert knowledge and treatments for Disorders of the Diaphragm at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Diverticular Disease",
        definition: "Find expert knowledge and treatments for Diverticular Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dizziness and Balance Disorders",
        definition: "Find expert knowledge and treatments for Dizziness and Balance Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Donate Blood",
        definition: "Find expert knowledge and treatments for Donate Blood at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "DREAM Program",
        definition: "Find expert knowledge and treatments for DREAM Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Driver Rehabilitation",
        definition: "Find expert knowledge and treatments for Driver Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Drug Addiction",
        definition: "Find expert knowledge and treatments for Drug Addiction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dry Eye",
        definition: "Find expert knowledge and treatments for Dry Eye at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dupuytren's Contracture",
        definition: "Find expert knowledge and treatments for Dupuytren's Contracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dysphagia",
        definition: "Find expert knowledge and treatments for Dysphagia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Dystonia",
        definition: "Find expert knowledge and treatments for Dystonia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ear, Nose and Throat (ENT)",
        definition: "Find expert knowledge and treatments for Ear, Nose and Throat (ENT) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Eating Disorders",
        definition: "Find expert knowledge and treatments for Eating Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Eczema",
        definition: "Find expert knowledge and treatments for Eczema at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Electroencephalogram (EEG)",
        definition: "Find expert knowledge and treatments for Electroencephalogram (EEG) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Emergency Care for Sexual Assault",
        definition: "Find expert knowledge and treatments for Emergency Care for Sexual Assault at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Emergency Medicine",
        definition: "Find expert knowledge and treatments for Emergency Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Emphysema",
        definition: "Find expert knowledge and treatments for Emphysema at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Employee Assistance Program",
        definition: "Find expert knowledge and treatments for Employee Assistance Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Encephalitis",
        definition: "Find expert knowledge and treatments for Encephalitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Endocrine Cancer",
        definition: "Find expert knowledge and treatments for Endocrine Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Endocrine Surgery",
        definition: "Find expert knowledge and treatments for Endocrine Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Endocrinology and Metabolism",
        definition: "Find expert knowledge and treatments for Endocrinology and Metabolism at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Endometrial Cancer",
        definition: "Find expert knowledge and treatments for Endometrial Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Endometriosis",
        definition: "Find expert knowledge and treatments for Endometriosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Endoscopy Services",
        definition: "Find expert knowledge and treatments for Endoscopy Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Energy Medicine",
        definition: "Find expert knowledge and treatments for Energy Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Enlarged Prostate",
        definition: "Find expert knowledge and treatments for Enlarged Prostate at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Eosinophilic Esophagitis",
        definition: "Find expert knowledge and treatments for Eosinophilic Esophagitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Epilepsy and Seizure Disorders",
        definition: "Find expert knowledge and treatments for Epilepsy and Seizure Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Epilepsy Monitoring Unit (EMU)",
        definition: "Find expert knowledge and treatments for Epilepsy Monitoring Unit (EMU) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Epispadias",
        definition: "Find expert knowledge and treatments for Epispadias at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Erectile Dysfunction",
        definition: "Find expert knowledge and treatments for Erectile Dysfunction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Cancer",
        definition: "Find expert knowledge and treatments for Esophageal Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Center",
        definition: "Find expert knowledge and treatments for Esophageal Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Diseases",
        definition: "Find expert knowledge and treatments for Esophageal Diseases at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Diverticula",
        definition: "Find expert knowledge and treatments for Esophageal Diverticula at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Motility Disorders",
        definition: "Find expert knowledge and treatments for Esophageal Motility Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Scleroderma",
        definition: "Find expert knowledge and treatments for Esophageal Scleroderma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Stricture",
        definition: "Find expert knowledge and treatments for Esophageal Stricture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Esophageal Varices",
        definition: "Find expert knowledge and treatments for Esophageal Varices at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Essential Tremor",
        definition: "Find expert knowledge and treatments for Essential Tremor at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ethnic Skin Care",
        definition: "Find expert knowledge and treatments for Ethnic Skin Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Executive Health",
        definition: "Find expert knowledge and treatments for Executive Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care for Glioblastoma",
        definition: "Find expert knowledge and treatments for Expert Care for Glioblastoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care for Meningioma at Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Expert Care for Meningioma at Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care for Metastatic Brain Tumors",
        definition: "Find expert knowledge and treatments for Expert Care for Metastatic Brain Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care For Pituitary Tumors",
        definition: "Find expert knowledge and treatments for Expert Care For Pituitary Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care for Primary Brain Tumors",
        definition: "Find expert knowledge and treatments for Expert Care for Primary Brain Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care for Primary Spine Tumors",
        definition: "Find expert knowledge and treatments for Expert Care for Primary Spine Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care for Rare and Aggressive Brain and Spine Tumors",
        definition: "Find expert knowledge and treatments for Expert Care for Rare and Aggressive Brain and Spine Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Expert Care For Skull Base Tumors",
        definition: "Find expert knowledge and treatments for Expert Care For Skull Base Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Extracorporeal Membrane Oxygenation (ECMO) Program",
        definition: "Find expert knowledge and treatments for Extracorporeal Membrane Oxygenation (ECMO) Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Eye Cancer",
        definition: "Find expert knowledge and treatments for Eye Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Eye Infections",
        definition: "Find expert knowledge and treatments for Eye Infections at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Facial Aging and Trauma",
        definition: "Find expert knowledge and treatments for Facial Aging and Trauma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Facial Nerve Disorders",
        definition: "Find expert knowledge and treatments for Facial Nerve Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Failed Back Surgery Syndrome",
        definition: "Find expert knowledge and treatments for Failed Back Surgery Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Family Medicine",
        definition: "Find expert knowledge and treatments for Family Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Family Planning",
        definition: "Find expert knowledge and treatments for Family Planning at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Fecal Incontinence",
        definition: "Find expert knowledge and treatments for Fecal Incontinence at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Femoroacetabular Impingement",
        definition: "Find expert knowledge and treatments for Femoroacetabular Impingement at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Fertility and Reproductive Medicine",
        definition: "Find expert knowledge and treatments for Fertility and Reproductive Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Fertility Preservation",
        definition: "Find expert knowledge and treatments for Fertility Preservation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Fibroids",
        definition: "Find expert knowledge and treatments for Fibroids at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Fibromuscular Dysplasia",
        definition: "Find expert knowledge and treatments for Fibromuscular Dysplasia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Find an Integrative Medicine Provider",
        definition: "Find expert knowledge and treatments for Find an Integrative Medicine Provider at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Fine Motor Delays",
        definition: "Find expert knowledge and treatments for Fine Motor Delays at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Flat Feet",
        definition: "Find expert knowledge and treatments for Flat Feet at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Flu",
        definition: "Find expert knowledge and treatments for Flu at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Foot and Ankle",
        definition: "Find expert knowledge and treatments for Foot and Ankle at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Foot Fracture",
        definition: "Find expert knowledge and treatments for Foot Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "For Integrative Medicine Health Professionals",
        definition: "Find expert knowledge and treatments for For Integrative Medicine Health Professionals at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },

    {
        term: "Friends and Family Lung Cancer Screening Program",
        definition: "Find expert knowledge and treatments for Friends and Family Lung Cancer Screening Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Frontotemporal Dementia",
        definition: "Find expert knowledge and treatments for Frontotemporal Dementia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Functional Dyspepsia",
        definition: "Find expert knowledge and treatments for Functional Dyspepsia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Functional Movement Disorders Program At Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Functional Movement Disorders Program At Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Fungal Infections",
        definition: "Find expert knowledge and treatments for Fungal Infections at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gallbladder Cancer",
        definition: "Find expert knowledge and treatments for Gallbladder Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gastric Cancer",
        definition: "Find expert knowledge and treatments for Gastric Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gastroenterology",
        definition: "Find expert knowledge and treatments for Gastroenterology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gastroenterology Services in the South Suburbs",
        definition: "Find expert knowledge and treatments for Gastroenterology Services in the South Suburbs at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gastroesophageal Reflux Disease (GERD)",
        definition: "Find expert knowledge and treatments for Gastroesophageal Reflux Disease (GERD) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gastrointestinal Cancer Care",
        definition: "Find expert knowledge and treatments for Gastrointestinal Cancer Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gastroparesis",
        definition: "Find expert knowledge and treatments for Gastroparesis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gay and Bisexual Men's Urology Program",
        definition: "Find expert knowledge and treatments for Gay and Bisexual Men's Urology Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gender Pathways Program",
        definition: "Find expert knowledge and treatments for Gender Pathways Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Generalized And Focal Epilepsy",
        definition: "Find expert knowledge and treatments for Generalized And Focal Epilepsy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Genetic Counseling and Testing for Neurological Disorders",
        definition: "Find expert knowledge and treatments for Genetic Counseling and Testing for Neurological Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Genetic Testing",
        definition: "Find expert knowledge and treatments for Genetic Testing at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Genital Condyloma (Warts)",
        definition: "Find expert knowledge and treatments for Genital Condyloma (Warts) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Genitourinary Cancer Care",
        definition: "Find expert knowledge and treatments for Genitourinary Cancer Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Geriatric Fractures",
        definition: "Find expert knowledge and treatments for Geriatric Fractures at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Geriatrics",
        definition: "Find expert knowledge and treatments for Geriatrics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Geriatrics Virtual Memory Care Clinic",
        definition: "Find expert knowledge and treatments for Geriatrics Virtual Memory Care Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Glaucoma",
        definition: "Find expert knowledge and treatments for Glaucoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Glioblastoma",
        definition: "Find expert knowledge and treatments for Glioblastoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gluteus Medius Tear",
        definition: "Find expert knowledge and treatments for Gluteus Medius Tear at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gonorrhea",
        definition: "Find expert knowledge and treatments for Gonorrhea at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gout",
        definition: "Find expert knowledge and treatments for Gout at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Graston therapy/instrument-assisted soft tissue mobilization",
        definition: "Find expert knowledge and treatments for Graston therapy/instrument-assisted soft tissue mobilization at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Graves' Disease and Hyperthyroidism",
        definition: "Find expert knowledge and treatments for Graves' Disease and Hyperthyroidism at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gross Motor Delays",
        definition: "Find expert knowledge and treatments for Gross Motor Delays at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gynecologic Cancer Care",
        definition: "Find expert knowledge and treatments for Gynecologic Cancer Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gynecologic Cancers",
        definition: "Find expert knowledge and treatments for Gynecologic Cancers at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Gynecology",
        definition: "Find expert knowledge and treatments for Gynecology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hair Disorders and Hair Loss Prevention",
        definition: "Find expert knowledge and treatments for Hair Disorders and Hair Loss Prevention at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hair Loss",
        definition: "Find expert knowledge and treatments for Hair Loss at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hammer Toe",
        definition: "Find expert knowledge and treatments for Hammer Toe at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hand Deformities",
        definition: "Find expert knowledge and treatments for Hand Deformities at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hand, Wrist and Elbow",
        definition: "Find expert knowledge and treatments for Hand, Wrist and Elbow at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hashimotos Thyroiditis",
        definition: "Find expert knowledge and treatments for Hashimotos Thyroiditis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Head and Neck AVMs and Lymphatic or Venous Malformations",
        definition: "Find expert knowledge and treatments for Head and Neck AVMs and Lymphatic or Venous Malformations at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Head and Neck Cancer Program",
        definition: "Find expert knowledge and treatments for Head and Neck Cancer Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Head and Neck Cancers",
        definition: "Find expert knowledge and treatments for Head and Neck Cancers at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Headaches",
        definition: "Find expert knowledge and treatments for Headaches at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Headaches and Migraines",
        definition: "Find expert knowledge and treatments for Headaches and Migraines at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Health Assessment Tools",
        definition: "Find expert knowledge and treatments for Health Assessment Tools at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "HealthLab Testing",
        definition: "Find expert knowledge and treatments for HealthLab Testing at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hearing Loss",
        definition: "Find expert knowledge and treatments for Hearing Loss at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Heart & Vascular Care",
        definition: "Find expert knowledge and treatments for Heart & Vascular Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Heart Attack",
        definition: "Find expert knowledge and treatments for Heart Attack at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Heart Failure",
        definition: "Find expert knowledge and treatments for Heart Failure at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Heel Spur",
        definition: "Find expert knowledge and treatments for Heel Spur at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hematology",
        definition: "Find expert knowledge and treatments for Hematology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hematology and Oncology",
        definition: "Find expert knowledge and treatments for Hematology and Oncology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hemophilia",
        definition: "Find expert knowledge and treatments for Hemophilia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hemorrhagic Stroke",
        definition: "Find expert knowledge and treatments for Hemorrhagic Stroke at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hepatitis A",
        definition: "Find expert knowledge and treatments for Hepatitis A at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hepatitis B",
        definition: "Find expert knowledge and treatments for Hepatitis B at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hepatitis C",
        definition: "Find expert knowledge and treatments for Hepatitis C at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hereditary Gastrointestinal Cancer Risk and Prevention Program",
        definition: "Find expert knowledge and treatments for Hereditary Gastrointestinal Cancer Risk and Prevention Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Herniated Disk",
        definition: "Find expert knowledge and treatments for Herniated Disk at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Herpes Simplex Virus",
        definition: "Find expert knowledge and treatments for Herpes Simplex Virus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hiatal Hernia",
        definition: "Find expert knowledge and treatments for Hiatal Hernia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hip Instability",
        definition: "Find expert knowledge and treatments for Hip Instability at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hip Pain",
        definition: "Find expert knowledge and treatments for Hip Pain at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hispanic Brain and Spine Tumor Program",
        definition: "Find expert knowledge and treatments for Hispanic Brain and Spine Tumor Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "HIV",
        definition: "Find expert knowledge and treatments for HIV at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "HIV/AIDS",
        definition: "Find expert knowledge and treatments for HIV/AIDS at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "HIV/AIDS Program",
        definition: "Find expert knowledge and treatments for HIV/AIDS Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Home Care and Hospice",
        definition: "Find expert knowledge and treatments for Home Care and Hospice at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Home Dialysis",
        definition: "Find expert knowledge and treatments for Home Dialysis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Homeward Healing Swing Bed Program",
        definition: "Find expert knowledge and treatments for Homeward Healing Swing Bed Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hospital at Home",
        definition: "Find expert knowledge and treatments for Hospital at Home at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hospitalist Services",
        definition: "Find expert knowledge and treatments for Hospitalist Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hot Flashes",
        definition: "Find expert knowledge and treatments for Hot Flashes at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Huntington's Disease",
        definition: "Find expert knowledge and treatments for Huntington's Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hyperhidrosis",
        definition: "Find expert knowledge and treatments for Hyperhidrosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hyperopia",
        definition: "Find expert knowledge and treatments for Hyperopia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hyperparathyroidism",
        definition: "Find expert knowledge and treatments for Hyperparathyroidism at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hypertension",
        definition: "Find expert knowledge and treatments for Hypertension at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hyperthyroidism",
        definition: "Find expert knowledge and treatments for Hyperthyroidism at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hypertrophic Cardiomyopathy",
        definition: "Find expert knowledge and treatments for Hypertrophic Cardiomyopathy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hypogonadism",
        definition: "Find expert knowledge and treatments for Hypogonadism at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Hypospadias",
        definition: "Find expert knowledge and treatments for Hypospadias at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Idiopathic Intracranial Hypertension and Venous Stenosis",
        definition: "Find expert knowledge and treatments for Idiopathic Intracranial Hypertension and Venous Stenosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Imaging Services",
        definition: "Find expert knowledge and treatments for Imaging Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Immediate Care",
        definition: "Find expert knowledge and treatments for Immediate Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Incontinence",
        definition: "Find expert knowledge and treatments for Incontinence at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Infections related to travel",
        definition: "Find expert knowledge and treatments for Infections related to travel at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Infectious Disease",
        definition: "Find expert knowledge and treatments for Infectious Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Infertility",
        definition: "Find expert knowledge and treatments for Infertility at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Inflammatory Bowel Disease Program",
        definition: "Find expert knowledge and treatments for Inflammatory Bowel Disease Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Infusion Services",
        definition: "Find expert knowledge and treatments for Infusion Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Inpatient Brain Injury Rehabilitation",
        definition: "Find expert knowledge and treatments for Inpatient Brain Injury Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Inpatient Neuromuscular Rehabilitation",
        definition: "Find expert knowledge and treatments for Inpatient Neuromuscular Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Inpatient Pediatric Rehabilitation",
        definition: "Find expert knowledge and treatments for Inpatient Pediatric Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Insomnia",
        definition: "Find expert knowledge and treatments for Insomnia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Instrument-Assisted Soft Tissue Mobilization (IASTM) and The Graston Technique",
        definition: "Find expert knowledge and treatments for Instrument-Assisted Soft Tissue Mobilization (IASTM) and The Graston Technique at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Insurance and Financial Information",
        definition: "Find expert knowledge and treatments for Insurance and Financial Information at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Integrative Medicine",
        definition: "Find expert knowledge and treatments for Integrative Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Integrative Medicine Consults",
        definition: "Find expert knowledge and treatments for Integrative Medicine Consults at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Integrative Primary Care",
        definition: "Find expert knowledge and treatments for Integrative Primary Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Integrative Women's Health",
        definition: "Find expert knowledge and treatments for Integrative Women's Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Intercranial EEG",
        definition: "Find expert knowledge and treatments for Intercranial EEG at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Internal Medicine",
        definition: "Find expert knowledge and treatments for Internal Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interstitial Cystitis",
        definition: "Find expert knowledge and treatments for Interstitial Cystitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interstitial Lung Disease and Pulmonary Fibrosis Program",
        definition: "Find expert knowledge and treatments for Interstitial Lung Disease and Pulmonary Fibrosis Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interventional Endoscopy Program",
        definition: "Find expert knowledge and treatments for Interventional Endoscopy Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interventional Neuroradiology",
        definition: "Find expert knowledge and treatments for Interventional Neuroradiology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interventional Oncology",
        definition: "Find expert knowledge and treatments for Interventional Oncology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interventional Pulmonology",
        definition: "Find expert knowledge and treatments for Interventional Pulmonology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interventional Pulmonology at Northwestern Medicine Central DuPage Hospital and Delnor Hospital",
        definition: "Find expert knowledge and treatments for Interventional Pulmonology at Northwestern Medicine Central DuPage Hospital and Delnor Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Interventional Radiology",
        definition: "Find expert knowledge and treatments for Interventional Radiology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Intestinal Obstruction",
        definition: "Find expert knowledge and treatments for Intestinal Obstruction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Intracerebral Hemorrhage",
        definition: "Find expert knowledge and treatments for Intracerebral Hemorrhage at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Intracranial Stenosis",
        definition: "Find expert knowledge and treatments for Intracranial Stenosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Irritable Bowel Syndrome",
        definition: "Find expert knowledge and treatments for Irritable Bowel Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ischemic Stroke",
        definition: "Find expert knowledge and treatments for Ischemic Stroke at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Joint Preservation",
        definition: "Find expert knowledge and treatments for Joint Preservation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Joint Replacement",
        definition: "Find expert knowledge and treatments for Joint Replacement at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Joint Replacement at Northwestern Medicine Palos Hospital",
        definition: "Find expert knowledge and treatments for Joint Replacement at Northwestern Medicine Palos Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Jones Fracture",
        definition: "Find expert knowledge and treatments for Jones Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Keloids",
        definition: "Find expert knowledge and treatments for Keloids at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Keratoconus",
        definition: "Find expert knowledge and treatments for Keratoconus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ketogenic Diet",
        definition: "Find expert knowledge and treatments for Ketogenic Diet at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Kidney Cancer",
        definition: "Find expert knowledge and treatments for Kidney Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Kidney Disease",
        definition: "Find expert knowledge and treatments for Kidney Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Kidney Failure",
        definition: "Find expert knowledge and treatments for Kidney Failure at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Kidney Stones",
        definition: "Find expert knowledge and treatments for Kidney Stones at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Kidney Transplant Program",
        definition: "Find expert knowledge and treatments for Kidney Transplant Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Knee Cartilage Defect",
        definition: "Find expert knowledge and treatments for Knee Cartilage Defect at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Knee Pain",
        definition: "Find expert knowledge and treatments for Knee Pain at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Kyphosis",
        definition: "Find expert knowledge and treatments for Kyphosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Labor and Delivery",
        definition: "Find expert knowledge and treatments for Labor and Delivery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Laboratory Services",
        definition: "Find expert knowledge and treatments for Laboratory Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Labral Hip Tear",
        definition: "Find expert knowledge and treatments for Labral Hip Tear at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Laryngitis",
        definition: "Find expert knowledge and treatments for Laryngitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Larynx Cancer",
        definition: "Find expert knowledge and treatments for Larynx Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lasik Surgery",
        definition: "Find expert knowledge and treatments for Lasik Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lateral Malleolus Fracture",
        definition: "Find expert knowledge and treatments for Lateral Malleolus Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Leukemia",
        definition: "Find expert knowledge and treatments for Leukemia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Leukemia Cancer Care",
        definition: "Find expert knowledge and treatments for Leukemia Cancer Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Life After Stroke",
        definition: "Find expert knowledge and treatments for Life After Stroke at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lifestyle Medicine",
        definition: "Find expert knowledge and treatments for Lifestyle Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lipomas of the Skin",
        definition: "Find expert knowledge and treatments for Lipomas of the Skin at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Liver Cancer",
        definition: "Find expert knowledge and treatments for Liver Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Liver Disease",
        definition: "Find expert knowledge and treatments for Liver Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Liver Transplant Oncology",
        definition: "Find expert knowledge and treatments for Liver Transplant Oncology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Liver Transplant Program",
        definition: "Find expert knowledge and treatments for Liver Transplant Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Living-Donor Transplant Program",
        definition: "Find expert knowledge and treatments for Living-Donor Transplant Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Locomotion Falls And Balance",
        definition: "Find expert knowledge and treatments for Locomotion Falls And Balance at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lois Insolia ALS Clinic",
        definition: "Find expert knowledge and treatments for Lois Insolia ALS Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Long COVID",
        definition: "Find expert knowledge and treatments for Long COVID at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Loose Bodies in Hip",
        definition: "Find expert knowledge and treatments for Loose Bodies in Hip at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lou and Jean Malnati Brain Tumor Institute of the Lurie Cancer Center at Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Lou and Jean Malnati Brain Tumor Institute of the Lurie Cancer Center at Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Low Grade Glioma",
        definition: "Find expert knowledge and treatments for Low Grade Glioma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Low Testosterone",
        definition: "Find expert knowledge and treatments for Low Testosterone at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lower Urinary Tract Symptoms",
        definition: "Find expert knowledge and treatments for Lower Urinary Tract Symptoms at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lung Cancer",
        definition: "Find expert knowledge and treatments for Lung Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lung Cancer Care",
        definition: "Find expert knowledge and treatments for Lung Cancer Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lung Cancer Screening Program",
        definition: "Find expert knowledge and treatments for Lung Cancer Screening Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lung Diseases",
        definition: "Find expert knowledge and treatments for Lung Diseases at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lung Nodules",
        definition: "Find expert knowledge and treatments for Lung Nodules at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lyme Disease",
        definition: "Find expert knowledge and treatments for Lyme Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lymphedema",
        definition: "Find expert knowledge and treatments for Lymphedema at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Lymphoma",
        definition: "Find expert knowledge and treatments for Lymphoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Macular Degeneration",
        definition: "Find expert knowledge and treatments for Macular Degeneration at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Marfan Syndrome and Related Disorders",
        definition: "Find expert knowledge and treatments for Marfan Syndrome and Related Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Massage Therapy",
        definition: "Find expert knowledge and treatments for Massage Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Maternal-Fetal Medicine",
        definition: "Find expert knowledge and treatments for Maternal-Fetal Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mckenzie Method",
        definition: "Find expert knowledge and treatments for Mckenzie Method at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Measles",
        definition: "Find expert knowledge and treatments for Measles at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Medial Malleolar Fracture",
        definition: "Find expert knowledge and treatments for Medial Malleolar Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mediastinal Tumors",
        definition: "Find expert knowledge and treatments for Mediastinal Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Melanoma",
        definition: "Find expert knowledge and treatments for Melanoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ménière's Disease",
        definition: "Find expert knowledge and treatments for Ménière's Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Meningioma",
        definition: "Find expert knowledge and treatments for Meningioma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Meningitis",
        definition: "Find expert knowledge and treatments for Meningitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Menopause Program",
        definition: "Find expert knowledge and treatments for Menopause Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mesenteric Artery Disease",
        definition: "Find expert knowledge and treatments for Mesenteric Artery Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Metastatic Brain Tumors",
        definition: "Find expert knowledge and treatments for Metastatic Brain Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Middle Ear Infection (Otitis Media)",
        definition: "Find expert knowledge and treatments for Middle Ear Infection (Otitis Media) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Midwifery",
        definition: "Find expert knowledge and treatments for Midwifery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Migraine Headaches",
        definition: "Find expert knowledge and treatments for Migraine Headaches at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mild Cognitive Impairment",
        definition: "Find expert knowledge and treatments for Mild Cognitive Impairment at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Minimally Invasive Brain Tumor Surgery",
        definition: "Find expert knowledge and treatments for Minimally Invasive Brain Tumor Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Minimally Invasive Gynecologic Surgery",
        definition: "Find expert knowledge and treatments for Minimally Invasive Gynecologic Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Minimally Invasive Neurosurgery",
        definition: "Find expert knowledge and treatments for Minimally Invasive Neurosurgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mitral Valve Disease",
        definition: "Find expert knowledge and treatments for Mitral Valve Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mobile Stroke Unit",
        definition: "Find expert knowledge and treatments for Mobile Stroke Unit at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Moles and Melanoma",
        definition: "Find expert knowledge and treatments for Moles and Melanoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Morton's Neuroma",
        definition: "Find expert knowledge and treatments for Morton's Neuroma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Movement Disorder Care In Spanish",
        definition: "Find expert knowledge and treatments for Movement Disorder Care In Spanish at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Movement Disorders Cognitive Behavioral Program at Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Movement Disorders Cognitive Behavioral Program at Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Moyamoya Disease",
        definition: "Find expert knowledge and treatments for Moyamoya Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mucosal Disorders",
        definition: "Find expert knowledge and treatments for Mucosal Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multidisciplinary Care for Acoustic Neuromas",
        definition: "Find expert knowledge and treatments for Multidisciplinary Care for Acoustic Neuromas at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multidisciplinary Care for Central Nervous System Lymphoma",
        definition: "Find expert knowledge and treatments for Multidisciplinary Care for Central Nervous System Lymphoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multidisciplinary Care For Gliomas",
        definition: "Find expert knowledge and treatments for Multidisciplinary Care For Gliomas at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multidisciplinary Lung Nodule Program",
        definition: "Find expert knowledge and treatments for Multidisciplinary Lung Nodule Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multiple Endocrine Neoplasia and Von Hippel Lindau Syndrome",
        definition: "Find expert knowledge and treatments for Multiple Endocrine Neoplasia and Von Hippel Lindau Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multiple Myeloma",
        definition: "Find expert knowledge and treatments for Multiple Myeloma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multiple Sclerosis (MS)",
        definition: "Find expert knowledge and treatments for Multiple Sclerosis (MS) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Multiple Sclerosis and Clinical Neuroimmunology Program",
        definition: "Find expert knowledge and treatments for Multiple Sclerosis and Clinical Neuroimmunology Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Muscular Dystrophy",
        definition: "Find expert knowledge and treatments for Muscular Dystrophy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Muscular Dystrophy Association Clinic at Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Muscular Dystrophy Association Clinic at Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Mutiple Sclerosis and Pregnancy",
        definition: "Find expert knowledge and treatments for Mutiple Sclerosis and Pregnancy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Myasthenia Gravis",
        definition: "Find expert knowledge and treatments for Myasthenia Gravis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Myopia",
        definition: "Find expert knowledge and treatments for Myopia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Myositis",
        definition: "Find expert knowledge and treatments for Myositis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Myositis Clinic",
        definition: "Find expert knowledge and treatments for Myositis Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Narcolepsy",
        definition: "Find expert knowledge and treatments for Narcolepsy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nasal and Sinus Cancer",
        definition: "Find expert knowledge and treatments for Nasal and Sinus Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nasal Deformity",
        definition: "Find expert knowledge and treatments for Nasal Deformity at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nasal Sinus Polyps",
        definition: "Find expert knowledge and treatments for Nasal Sinus Polyps at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neck Pain",
        definition: "Find expert knowledge and treatments for Neck Pain at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neonatal Intensive Care Units (NICUs)",
        definition: "Find expert knowledge and treatments for Neonatal Intensive Care Units (NICUs) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nephrology",
        definition: "Find expert knowledge and treatments for Nephrology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nerve Compression Syndrome",
        definition: "Find expert knowledge and treatments for Nerve Compression Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nerve-Related Problems",
        definition: "Find expert knowledge and treatments for Nerve-Related Problems at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuro Infusion Services",
        definition: "Find expert knowledge and treatments for Neuro Infusion Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuro Lyme disease",
        definition: "Find expert knowledge and treatments for Neuro Lyme disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuro Ophthalmologic Disease",
        definition: "Find expert knowledge and treatments for Neuro Ophthalmologic Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neurobehavior and Memory Clinic",
        definition: "Find expert knowledge and treatments for Neurobehavior and Memory Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neurogenic Bladder and Bowel",
        definition: "Find expert knowledge and treatments for Neurogenic Bladder and Bowel at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuroinfectious Diseases Program At Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Neuroinfectious Diseases Program At Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuromodulation and Functional Neurosurgery",
        definition: "Find expert knowledge and treatments for Neuromodulation and Functional Neurosurgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuromuscular Deformities",
        definition: "Find expert knowledge and treatments for Neuromuscular Deformities at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuromuscular Disorders",
        definition: "Find expert knowledge and treatments for Neuromuscular Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuromuscular Outpatient Therapy and Day Rehabilitation Programs at Northwestern Medicine",
        definition: "Find expert knowledge and treatments for Neuromuscular Outpatient Therapy and Day Rehabilitation Programs at Northwestern Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuromuscular Program",
        definition: "Find expert knowledge and treatments for Neuromuscular Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neuromyelitis Optica",
        definition: "Find expert knowledge and treatments for Neuromyelitis Optica at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neurosarcoidosis",
        definition: "Find expert knowledge and treatments for Neurosarcoidosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neurosciences",
        definition: "Find expert knowledge and treatments for Neurosciences at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neurosurgery",
        definition: "Find expert knowledge and treatments for Neurosurgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neurosyphilis",
        definition: "Find expert knowledge and treatments for Neurosyphilis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Neurovascular Compression Syndromes",
        definition: "Find expert knowledge and treatments for Neurovascular Compression Syndromes at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "NICU (Obstetrics)",
        definition: "Find expert knowledge and treatments for NICU (Obstetrics) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Non Epileptic Seizures",
        definition: "Find expert knowledge and treatments for Non Epileptic Seizures at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Normal Pressure Hydrocephalus",
        definition: "Find expert knowledge and treatments for Normal Pressure Hydrocephalus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medical Group Pediatrics",
        definition: "Find expert knowledge and treatments for Northwestern Medical Group Pediatrics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Aphasia Center At Marianjoy",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Aphasia Center At Marianjoy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Cancer Center at Central DuPage Hospital",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Cancer Center at Central DuPage Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Canning Thoracic Institute Hispanic Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Canning Thoracic Institute Hispanic Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Canning Thoracic Institute Second Opinion",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Canning Thoracic Institute Second Opinion at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Concussion and Sports Neurology Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Concussion and Sports Neurology Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Diaphragm Muscle Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Diaphragm Muscle Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Hair Loss Clinic",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Hair Loss Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Lupus Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Lupus Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Mobile Physical Therapy Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Mobile Physical Therapy Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Neuropalliative Care Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Neuropalliative Care Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Pride Center",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Pride Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Pulsatile Tinnitus Clinic",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Pulsatile Tinnitus Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Sarcoma Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Sarcoma Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Scleroderma Program",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Scleroderma Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Medicine Vasculitis Center",
        definition: "Find expert knowledge and treatments for Northwestern Medicine Vasculitis Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Northwestern Memorial Hospital Inpatient Pharmacy Services",
        definition: "Find expert knowledge and treatments for Northwestern Memorial Hospital Inpatient Pharmacy Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nose Bleeds",
        definition: "Find expert knowledge and treatments for Nose Bleeds at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nutrition",
        definition: "Find expert knowledge and treatments for Nutrition at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Nutritional Services",
        definition: "Find expert knowledge and treatments for Nutritional Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "OB/GYN",
        definition: "Find expert knowledge and treatments for OB/GYN at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Obstetrics",
        definition: "Find expert knowledge and treatments for Obstetrics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Obstructive Sleep Apnea",
        definition: "Find expert knowledge and treatments for Obstructive Sleep Apnea at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Occupational Health",
        definition: "Find expert knowledge and treatments for Occupational Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Occupational Lung Disease and Black Lung Program",
        definition: "Find expert knowledge and treatments for Occupational Lung Disease and Black Lung Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Occupational Therapy",
        definition: "Find expert knowledge and treatments for Occupational Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Oncofertility",
        definition: "Find expert knowledge and treatments for Oncofertility at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Oncology Triage Clinic",
        definition: "Find expert knowledge and treatments for Oncology Triage Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ophthalmic Tumors",
        definition: "Find expert knowledge and treatments for Ophthalmic Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ophthalmology",
        definition: "Find expert knowledge and treatments for Ophthalmology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Optic Neuritis",
        definition: "Find expert knowledge and treatments for Optic Neuritis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Oral Cancer",
        definition: "Find expert knowledge and treatments for Oral Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Organ Transplant",
        definition: "Find expert knowledge and treatments for Organ Transplant at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Orthopaedic Infections Program",
        definition: "Find expert knowledge and treatments for Orthopaedic Infections Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Orthopaedic Inpatient Rehabilitation",
        definition: "Find expert knowledge and treatments for Orthopaedic Inpatient Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Orthopaedic Outpatient Therapy and Day Rehabilitation Programs",
        definition: "Find expert knowledge and treatments for Orthopaedic Outpatient Therapy and Day Rehabilitation Programs at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Orthopaedic rehabilitation",
        definition: "Find expert knowledge and treatments for Orthopaedic rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Orthopaedic Surgery",
        definition: "Find expert knowledge and treatments for Orthopaedic Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Orthopaedics",
        definition: "Find expert knowledge and treatments for Orthopaedics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Osher Center for Integrative Health",
        definition: "Find expert knowledge and treatments for Osher Center for Integrative Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Osteoarthritis",
        definition: "Find expert knowledge and treatments for Osteoarthritis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Osteochondral Lesion of Talus",
        definition: "Find expert knowledge and treatments for Osteochondral Lesion of Talus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Osteochondritis Dissecans",
        definition: "Find expert knowledge and treatments for Osteochondritis Dissecans at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Osteomyelitis",
        definition: "Find expert knowledge and treatments for Osteomyelitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Osteoporosis",
        definition: "Find expert knowledge and treatments for Osteoporosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Osteoporotic Fracture",
        definition: "Find expert knowledge and treatments for Osteoporotic Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Other Dementia Disorders",
        definition: "Find expert knowledge and treatments for Other Dementia Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Otitis Externa",
        definition: "Find expert knowledge and treatments for Otitis Externa at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Otolaryngology",
        definition: "Find expert knowledge and treatments for Otolaryngology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Otology, Neurotology and Skull Base Surgery Program",
        definition: "Find expert knowledge and treatments for Otology, Neurotology and Skull Base Surgery Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ovarian Cancer",
        definition: "Find expert knowledge and treatments for Ovarian Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pain in Women",
        definition: "Find expert knowledge and treatments for Pain in Women at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pain Management",
        definition: "Find expert knowledge and treatments for Pain Management at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pain Medicine",
        definition: "Find expert knowledge and treatments for Pain Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Palliative Medicine and Supportive Care",
        definition: "Find expert knowledge and treatments for Palliative Medicine and Supportive Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pancreas and Islet Cell Transplant",
        definition: "Find expert knowledge and treatments for Pancreas and Islet Cell Transplant at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pancreatic Cancer",
        definition: "Find expert knowledge and treatments for Pancreatic Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pancreatic Cancer Program",
        definition: "Find expert knowledge and treatments for Pancreatic Cancer Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pancreatic Neuroendocrine Tumors",
        definition: "Find expert knowledge and treatments for Pancreatic Neuroendocrine Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pancreaticobiliary Program",
        definition: "Find expert knowledge and treatments for Pancreaticobiliary Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pancreatitis",
        definition: "Find expert knowledge and treatments for Pancreatitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Panic Attacks",
        definition: "Find expert knowledge and treatments for Panic Attacks at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Paraneoplastic Neurological Syndromes",
        definition: "Find expert knowledge and treatments for Paraneoplastic Neurological Syndromes at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Parasomnias",
        definition: "Find expert knowledge and treatments for Parasomnias at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Parkinson's Disease",
        definition: "Find expert knowledge and treatments for Parkinson's Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Parkinson's Disease and Movement Disorders Center",
        definition: "Find expert knowledge and treatments for Parkinson's Disease and Movement Disorders Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Patellar Instability",
        definition: "Find expert knowledge and treatments for Patellar Instability at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Patent Foramen Ovale (PFO)",
        definition: "Find expert knowledge and treatments for Patent Foramen Ovale (PFO) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pathology",
        definition: "Find expert knowledge and treatments for Pathology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "PEAPOD Clinic",
        definition: "Find expert knowledge and treatments for PEAPOD Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Allergy and Immunology",
        definition: "Find expert knowledge and treatments for Pediatric Allergy and Immunology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric and Adolescent Gynecology",
        definition: "Find expert knowledge and treatments for Pediatric and Adolescent Gynecology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Anesthesiology",
        definition: "Find expert knowledge and treatments for Pediatric Anesthesiology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Cancer and Blood Diseases",
        definition: "Find expert knowledge and treatments for Pediatric Cancer and Blood Diseases at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Cardiology and Electrophysiology",
        definition: "Find expert knowledge and treatments for Pediatric Cardiology and Electrophysiology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Dermatology",
        definition: "Find expert knowledge and treatments for Pediatric Dermatology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Developmental and Behavioral Health",
        definition: "Find expert knowledge and treatments for Pediatric Developmental and Behavioral Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Emergency Department at Northwestern Medicine Central DuPage Hospital",
        definition: "Find expert knowledge and treatments for Pediatric Emergency Department at Northwestern Medicine Central DuPage Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Endocrinology",
        definition: "Find expert knowledge and treatments for Pediatric Endocrinology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Family Support Services",
        definition: "Find expert knowledge and treatments for Pediatric Family Support Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Gastroenterology",
        definition: "Find expert knowledge and treatments for Pediatric Gastroenterology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Genitourinary Cancer",
        definition: "Find expert knowledge and treatments for Pediatric Genitourinary Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Hospitalists",
        definition: "Find expert knowledge and treatments for Pediatric Hospitalists at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Intensive Care Unit (PICU)",
        definition: "Find expert knowledge and treatments for Pediatric Intensive Care Unit (PICU) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Medical Imaging",
        definition: "Find expert knowledge and treatments for Pediatric Medical Imaging at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Nephrology",
        definition: "Find expert knowledge and treatments for Pediatric Nephrology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Neurology",
        definition: "Find expert knowledge and treatments for Pediatric Neurology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Neuro-Oncology and Proton Therapy Program",
        definition: "Find expert knowledge and treatments for Pediatric Neuro-Oncology and Proton Therapy Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Newborn and Infant Care",
        definition: "Find expert knowledge and treatments for Pediatric Newborn and Infant Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Occupational Therapy",
        definition: "Find expert knowledge and treatments for Pediatric Occupational Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Ophthalmology",
        definition: "Find expert knowledge and treatments for Pediatric Ophthalmology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Physical Therapy",
        definition: "Find expert knowledge and treatments for Pediatric Physical Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Psychiatry",
        definition: "Find expert knowledge and treatments for Pediatric Psychiatry at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Psychological Testing Services",
        definition: "Find expert knowledge and treatments for Pediatric Psychological Testing Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Psychology",
        definition: "Find expert knowledge and treatments for Pediatric Psychology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Pulmonary Medicine",
        definition: "Find expert knowledge and treatments for Pediatric Pulmonary Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Scoliosis",
        definition: "Find expert knowledge and treatments for Pediatric Scoliosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Special Care Nursery",
        definition: "Find expert knowledge and treatments for Pediatric Special Care Nursery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Speech Language Pathology",
        definition: "Find expert knowledge and treatments for Pediatric Speech Language Pathology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Surgery",
        definition: "Find expert knowledge and treatments for Pediatric Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Therapy",
        definition: "Find expert knowledge and treatments for Pediatric Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Urology",
        definition: "Find expert knowledge and treatments for Pediatric Urology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatric Wellness and Weight Management Program",
        definition: "Find expert knowledge and treatments for Pediatric Wellness and Weight Management Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pediatrics",
        definition: "Find expert knowledge and treatments for Pediatrics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pelvic Congestion Syndrome",
        definition: "Find expert knowledge and treatments for Pelvic Congestion Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pelvic Floor Disorders",
        definition: "Find expert knowledge and treatments for Pelvic Floor Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pelvic Floor Therapy",
        definition: "Find expert knowledge and treatments for Pelvic Floor Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pelvic Health",
        definition: "Find expert knowledge and treatments for Pelvic Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pelvic Organ Prolapse",
        definition: "Find expert knowledge and treatments for Pelvic Organ Prolapse at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Penile Reconstruction",
        definition: "Find expert knowledge and treatments for Penile Reconstruction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pericardial Disease",
        definition: "Find expert knowledge and treatments for Pericardial Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Peripheral Neuropathy",
        definition: "Find expert knowledge and treatments for Peripheral Neuropathy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Peripheral Neuropathy Clinic At Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Peripheral Neuropathy Clinic At Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Peripheral Vascular Disease",
        definition: "Find expert knowledge and treatments for Peripheral Vascular Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Peroneal Tendon Subluxation",
        definition: "Find expert knowledge and treatments for Peroneal Tendon Subluxation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Persistent Pain After Previous Hip Arthroscopy",
        definition: "Find expert knowledge and treatments for Persistent Pain After Previous Hip Arthroscopy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Physiatry Physical Medicine and Rehabilitation",
        definition: "Find expert knowledge and treatments for Physiatry Physical Medicine and Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Physical Therapy",
        definition: "Find expert knowledge and treatments for Physical Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pigment Disorders",
        definition: "Find expert knowledge and treatments for Pigment Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pincer Impingement",
        definition: "Find expert knowledge and treatments for Pincer Impingement at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pituitary Tumors",
        definition: "Find expert knowledge and treatments for Pituitary Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Plantar Fasciitis",
        definition: "Find expert knowledge and treatments for Plantar Fasciitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Plastic Surgery",
        definition: "Find expert knowledge and treatments for Plastic Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pleurisy and Pleural Effusion",
        definition: "Find expert knowledge and treatments for Pleurisy and Pleural Effusion at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Polsky Urologic Cancer Institute",
        definition: "Find expert knowledge and treatments for Polsky Urologic Cancer Institute at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pornography Addiction",
        definition: "Find expert knowledge and treatments for Pornography Addiction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Posterior Ankle Pain",
        definition: "Find expert knowledge and treatments for Posterior Ankle Pain at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Posterior Tibialis Tendon Insufficiency",
        definition: "Find expert knowledge and treatments for Posterior Tibialis Tendon Insufficiency at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Posterior Tibialis Tendon Rupture",
        definition: "Find expert knowledge and treatments for Posterior Tibialis Tendon Rupture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Posterior Tibialis Tendon Tear",
        definition: "Find expert knowledge and treatments for Posterior Tibialis Tendon Tear at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Posterior Urethral Valves",
        definition: "Find expert knowledge and treatments for Posterior Urethral Valves at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Postnatal Care",
        definition: "Find expert knowledge and treatments for Postnatal Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Postpartum Thyroiditis",
        definition: "Find expert knowledge and treatments for Postpartum Thyroiditis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Precision Medicine",
        definition: "Find expert knowledge and treatments for Precision Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Prenatal Care",
        definition: "Find expert knowledge and treatments for Prenatal Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Prentice Ambulatory Care Clinic",
        definition: "Find expert knowledge and treatments for Prentice Ambulatory Care Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Presbyopia",
        definition: "Find expert knowledge and treatments for Presbyopia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Prevent and Prepare",
        definition: "Find expert knowledge and treatments for Prevent and Prepare at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Preventive Wellness Services in the Northwest Suburbs",
        definition: "Find expert knowledge and treatments for Preventive Wellness Services in the Northwest Suburbs at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Primary Care",
        definition: "Find expert knowledge and treatments for Primary Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Primary Progressive Aphasia",
        definition: "Find expert knowledge and treatments for Primary Progressive Aphasia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Programa Hispano del Canning Thoracic Institute de Northwestern Medicine",
        definition: "Find expert knowledge and treatments for Programa Hispano del Canning Thoracic Institute de Northwestern Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Progressive Supranuclear Palsy",
        definition: "Find expert knowledge and treatments for Progressive Supranuclear Palsy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Prostate Cancer",
        definition: "Find expert knowledge and treatments for Prostate Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Prosthetic Joint Infections",
        definition: "Find expert knowledge and treatments for Prosthetic Joint Infections at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Prosthetics And Orthotics Clinic",
        definition: "Find expert knowledge and treatments for Prosthetics And Orthotics Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Provoked Epileptic Seizures",
        definition: "Find expert knowledge and treatments for Provoked Epileptic Seizures at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Prune Belly Syndrome (Eagle Barrett Syndrome)",
        definition: "Find expert knowledge and treatments for Prune Belly Syndrome (Eagle Barrett Syndrome) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Psoriasis",
        definition: "Find expert knowledge and treatments for Psoriasis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Psoriatic Arthritis",
        definition: "Find expert knowledge and treatments for Psoriatic Arthritis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Psychiatry and the Law",
        definition: "Find expert knowledge and treatments for Psychiatry and the Law at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Psychology Services For Rehabilitation Patients",
        definition: "Find expert knowledge and treatments for Psychology Services For Rehabilitation Patients at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pterygium",
        definition: "Find expert knowledge and treatments for Pterygium at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pulmonary and Thoracic Surgery",
        definition: "Find expert knowledge and treatments for Pulmonary and Thoracic Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Pulmonary Hypertension",
        definition: "Find expert knowledge and treatments for Pulmonary Hypertension at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Radiation Oncology",
        definition: "Find expert knowledge and treatments for Radiation Oncology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Radiation-Associated Heart Disease",
        definition: "Find expert knowledge and treatments for Radiation-Associated Heart Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Radiology",
        definition: "Find expert knowledge and treatments for Radiology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rare Bleeding Disorders",
        definition: "Find expert knowledge and treatments for Rare Bleeding Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Recover And Support",
        definition: "Find expert knowledge and treatments for Recover And Support at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Recovery from Early Psychosis Program",
        definition: "Find expert knowledge and treatments for Recovery from Early Psychosis Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Recurrent Pregnancy Loss",
        definition: "Find expert knowledge and treatments for Recurrent Pregnancy Loss at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Regional Therapeutics Program",
        definition: "Find expert knowledge and treatments for Regional Therapeutics Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rehabilitation Services",
        definition: "Find expert knowledge and treatments for Rehabilitation Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rehabilitation Specialty Programs",
        definition: "Find expert knowledge and treatments for Rehabilitation Specialty Programs at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rehabilitation Technology",
        definition: "Find expert knowledge and treatments for Rehabilitation Technology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Renal Artery Disease",
        definition: "Find expert knowledge and treatments for Renal Artery Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Reproductive Endocrinology and Infertility",
        definition: "Find expert knowledge and treatments for Reproductive Endocrinology and Infertility at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Reproductive Genetics",
        definition: "Find expert knowledge and treatments for Reproductive Genetics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Respiratory Failure Program",
        definition: "Find expert knowledge and treatments for Respiratory Failure Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Respiratory Infection",
        definition: "Find expert knowledge and treatments for Respiratory Infection at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Respiratory Syncytial Virus (RSV)",
        definition: "Find expert knowledge and treatments for Respiratory Syncytial Virus (RSV) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Respiratory Therapy",
        definition: "Find expert knowledge and treatments for Respiratory Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Respiratory Viruses",
        definition: "Find expert knowledge and treatments for Respiratory Viruses at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Restless Legs Syndrome",
        definition: "Find expert knowledge and treatments for Restless Legs Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rheumatoid Arthritis",
        definition: "Find expert knowledge and treatments for Rheumatoid Arthritis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rheumatology",
        definition: "Find expert knowledge and treatments for Rheumatology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rhinitis",
        definition: "Find expert knowledge and treatments for Rhinitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rosacea",
        definition: "Find expert knowledge and treatments for Rosacea at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Routine EEG",
        definition: "Find expert knowledge and treatments for Routine EEG at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Rube Walker Blood Center",
        definition: "Find expert knowledge and treatments for Rube Walker Blood Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Salivary Gland Cancer",
        definition: "Find expert knowledge and treatments for Salivary Gland Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Salivary Gland Disease",
        definition: "Find expert knowledge and treatments for Salivary Gland Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sarcoidosis",
        definition: "Find expert knowledge and treatments for Sarcoidosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sarcoidosis Program",
        definition: "Find expert knowledge and treatments for Sarcoidosis Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sarcoma",
        definition: "Find expert knowledge and treatments for Sarcoma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Scleroderma (Dermatology)",
        definition: "Find expert knowledge and treatments for Scleroderma (Dermatology) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Scleroderma (Rheumatology)",
        definition: "Find expert knowledge and treatments for Scleroderma (Rheumatology) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sebaceous Cysts",
        definition: "Find expert knowledge and treatments for Sebaceous Cysts at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Seborrheic Dermatitis",
        definition: "Find expert knowledge and treatments for Seborrheic Dermatitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Second Opinion",
        definition: "Find expert knowledge and treatments for Second Opinion at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sexual Dysfunction",
        definition: "Find expert knowledge and treatments for Sexual Dysfunction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sexual Medicine Program",
        definition: "Find expert knowledge and treatments for Sexual Medicine Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Simple and Complex Fractures of the Hand",
        definition: "Find expert knowledge and treatments for Simple and Complex Fractures of the Hand at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sinus and Allergy Center",
        definition: "Find expert knowledge and treatments for Sinus and Allergy Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sjögren Syndrome",
        definition: "Find expert knowledge and treatments for Sjögren Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Skin and Soft Tissue Infections",
        definition: "Find expert knowledge and treatments for Skin and Soft Tissue Infections at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Skin Cancer",
        definition: "Find expert knowledge and treatments for Skin Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Skin Complications from Chemotherapy",
        definition: "Find expert knowledge and treatments for Skin Complications from Chemotherapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Skin Disorders of the Esophagus",
        definition: "Find expert knowledge and treatments for Skin Disorders of the Esophagus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Skull Base Tumors",
        definition: "Find expert knowledge and treatments for Skull Base Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sleep Apnea",
        definition: "Find expert knowledge and treatments for Sleep Apnea at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sleep Health Centers",
        definition: "Find expert knowledge and treatments for Sleep Health Centers at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sleep Surgery",
        definition: "Find expert knowledge and treatments for Sleep Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sleep Surgery Clinic",
        definition: "Find expert knowledge and treatments for Sleep Surgery Clinic at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sleep-Related Hypoventilation and Hypoxemic Syndromes",
        definition: "Find expert knowledge and treatments for Sleep-Related Hypoventilation and Hypoxemic Syndromes at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Smell and Taste Disturbances",
        definition: "Find expert knowledge and treatments for Smell and Taste Disturbances at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Snapping Hip",
        definition: "Find expert knowledge and treatments for Snapping Hip at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Snoring",
        definition: "Find expert knowledge and treatments for Snoring at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spastic Esophageal Motility Disorder",
        definition: "Find expert knowledge and treatments for Spastic Esophageal Motility Disorder at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spasticity",
        definition: "Find expert knowledge and treatments for Spasticity at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Specialty Care For Women",
        definition: "Find expert knowledge and treatments for Specialty Care For Women at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Speech Programs for Patients With Parkinson’s Disease",
        definition: "Find expert knowledge and treatments for Speech Programs for Patients With Parkinson’s Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Speech Therapy",
        definition: "Find expert knowledge and treatments for Speech Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spina Bifida",
        definition: "Find expert knowledge and treatments for Spina Bifida at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spinal Cord Injury Inpatient Rehabilitation",
        definition: "Find expert knowledge and treatments for Spinal Cord Injury Inpatient Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spinal Cord Injury Outpatient and Day Rehabilitation Services",
        definition: "Find expert knowledge and treatments for Spinal Cord Injury Outpatient and Day Rehabilitation Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spinal Muscular Atrophy",
        definition: "Find expert knowledge and treatments for Spinal Muscular Atrophy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spinal Muscular Atrophy (SMA)",
        definition: "Find expert knowledge and treatments for Spinal Muscular Atrophy (SMA) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Spinal Stenosis",
        definition: "Find expert knowledge and treatments for Spinal Stenosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sports Injury",
        definition: "Find expert knowledge and treatments for Sports Injury at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sports Medicine (Orthopaedic)",
        definition: "Find expert knowledge and treatments for Sports Medicine (Orthopaedic) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sports Rehabilitation",
        definition: "Find expert knowledge and treatments for Sports Rehabilitation at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sprains",
        definition: "Find expert knowledge and treatments for Sprains at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stem Cell Transplant and Cell Therapy for Autoimmune Diseases",
        definition: "Find expert knowledge and treatments for Stem Cell Transplant and Cell Therapy for Autoimmune Diseases at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stem Cell Transplant Program",
        definition: "Find expert knowledge and treatments for Stem Cell Transplant Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stereotactic Radiosurgery",
        definition: "Find expert knowledge and treatments for Stereotactic Radiosurgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Strabismus",
        definition: "Find expert knowledge and treatments for Strabismus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stroke",
        definition: "Find expert knowledge and treatments for Stroke at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stroke and Cerebrovascular Care",
        definition: "Find expert knowledge and treatments for Stroke and Cerebrovascular Care at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stroke Inpatient Rehabilitation for Adults",
        definition: "Find expert knowledge and treatments for Stroke Inpatient Rehabilitation for Adults at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stroke Rehabilitation Outpatient and Day Rehabilitation Service",
        definition: "Find expert knowledge and treatments for Stroke Rehabilitation Outpatient and Day Rehabilitation Service at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Stroke-Induced Sleep Disorders",
        definition: "Find expert knowledge and treatments for Stroke-Induced Sleep Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Subarachnoid Hemorrhage",
        definition: "Find expert knowledge and treatments for Subarachnoid Hemorrhage at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Substance Abuse And Addiction",
        definition: "Find expert knowledge and treatments for Substance Abuse And Addiction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Sudden Unexpected Death in Epilepsy (SUDEP)",
        definition: "Find expert knowledge and treatments for Sudden Unexpected Death in Epilepsy (SUDEP) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Support for Substance Abuse Prevention in DeKalb County",
        definition: "Find expert knowledge and treatments for Support for Substance Abuse Prevention in DeKalb County at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Supportive Care at Kishwaukee Hospital",
        definition: "Find expert knowledge and treatments for Supportive Care at Kishwaukee Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Surgical Services",
        definition: "Find expert knowledge and treatments for Surgical Services at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Surgical Services in the Southern Suburbs",
        definition: "Find expert knowledge and treatments for Surgical Services in the Southern Suburbs at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Survivewell",
        definition: "Find expert knowledge and treatments for Survivewell at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Swallowing And Voice Center",
        definition: "Find expert knowledge and treatments for Swallowing And Voice Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Swallowing Disorders",
        definition: "Find expert knowledge and treatments for Swallowing Disorders at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Synovial Chondromatosis",
        definition: "Find expert knowledge and treatments for Synovial Chondromatosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Syphilis",
        definition: "Find expert knowledge and treatments for Syphilis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Systemic Lupus Erythematosus",
        definition: "Find expert knowledge and treatments for Systemic Lupus Erythematosus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Technology Overuse and Addiction",
        definition: "Find expert knowledge and treatments for Technology Overuse and Addiction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Telehealth Appointments",
        definition: "Find expert knowledge and treatments for Telehealth Appointments at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Telestroke Program",
        definition: "Find expert knowledge and treatments for Telestroke Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tendon Injuries",
        definition: "Find expert knowledge and treatments for Tendon Injuries at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Test and Treat",
        definition: "Find expert knowledge and treatments for Test and Treat at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Testicular Cancer",
        definition: "Find expert knowledge and treatments for Testicular Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "The Northwestern Medicine Health and Fitness Center at Marianjoy Rehabilitation Hospital",
        definition: "Find expert knowledge and treatments for The Northwestern Medicine Health and Fitness Center at Marianjoy Rehabilitation Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "The Schroth Method",
        definition: "Find expert knowledge and treatments for The Schroth Method at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Theranostics",
        definition: "Find expert knowledge and treatments for Theranostics at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thoracic Outlet Syndrome",
        definition: "Find expert knowledge and treatments for Thoracic Outlet Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Throat Cancer",
        definition: "Find expert knowledge and treatments for Throat Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thyroid and Endocrine Surgery Program",
        definition: "Find expert knowledge and treatments for Thyroid and Endocrine Surgery Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thyroid Cancer",
        definition: "Find expert knowledge and treatments for Thyroid Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thyroid Conditions",
        definition: "Find expert knowledge and treatments for Thyroid Conditions at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thyroid Conditions in Women",
        definition: "Find expert knowledge and treatments for Thyroid Conditions in Women at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thyroid Hormone Replacement Therapy",
        definition: "Find expert knowledge and treatments for Thyroid Hormone Replacement Therapy at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thyroid Nodules",
        definition: "Find expert knowledge and treatments for Thyroid Nodules at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Thyroid Tumors",
        definition: "Find expert knowledge and treatments for Thyroid Tumors at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tic Disorder Overview",
        definition: "Find expert knowledge and treatments for Tic Disorder Overview at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tinnitus",
        definition: "Find expert knowledge and treatments for Tinnitus at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tourette Syndrome",
        definition: "Find expert knowledge and treatments for Tourette Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tracheal and Bronchial Stenosis",
        definition: "Find expert knowledge and treatments for Tracheal and Bronchial Stenosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tracheobronchomalacia (TBM)",
        definition: "Find expert knowledge and treatments for Tracheobronchomalacia (TBM) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tracheoesophageal Fistula and Esophageal Atresia",
        definition: "Find expert knowledge and treatments for Tracheoesophageal Fistula and Esophageal Atresia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Traditional Chinese Medicine - Acupuncture and Chinese Herbal Medicine",
        definition: "Find expert knowledge and treatments for Traditional Chinese Medicine - Acupuncture and Chinese Herbal Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Transient Ischemic Attack (TIA)",
        definition: "Find expert knowledge and treatments for Transient Ischemic Attack (TIA) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Transitional Care After a Hospital Visit",
        definition: "Find expert knowledge and treatments for Transitional Care After a Hospital Visit at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Transplant and Immunocompromised Host Infectious Diseases Service",
        definition: "Find expert knowledge and treatments for Transplant and Immunocompromised Host Infectious Diseases Service at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Transplant-related Infections",
        definition: "Find expert knowledge and treatments for Transplant-related Infections at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Transverse Myelitis",
        definition: "Find expert knowledge and treatments for Transverse Myelitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Transverse Myelitis Clinic At Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Transverse Myelitis Clinic At Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Trauma",
        definition: "Find expert knowledge and treatments for Trauma at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Traumatic Injuries",
        definition: "Find expert knowledge and treatments for Traumatic Injuries at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Travel Medicine",
        definition: "Find expert knowledge and treatments for Travel Medicine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Travel-related Infections",
        definition: "Find expert knowledge and treatments for Travel-related Infections at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tricuspid Valve Disease",
        definition: "Find expert knowledge and treatments for Tricuspid Valve Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Trigeminal Neuralgia",
        definition: "Find expert knowledge and treatments for Trigeminal Neuralgia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Trigeminal Neuralgia Program",
        definition: "Find expert knowledge and treatments for Trigeminal Neuralgia Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Trimalleolar Fracture",
        definition: "Find expert knowledge and treatments for Trimalleolar Fracture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Trochanteric Bursitis",
        definition: "Find expert knowledge and treatments for Trochanteric Bursitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Trouble swallowing",
        definition: "Find expert knowledge and treatments for Trouble swallowing at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tuberculosis",
        definition: "Find expert knowledge and treatments for Tuberculosis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Tumors of Spine",
        definition: "Find expert knowledge and treatments for Tumors of Spine at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ulcerative Colitis",
        definition: "Find expert knowledge and treatments for Ulcerative Colitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Understanding Stroke and Cerebrovascular Disease",
        definition: "Find expert knowledge and treatments for Understanding Stroke and Cerebrovascular Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ureteral Anomalies",
        definition: "Find expert knowledge and treatments for Ureteral Anomalies at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Ureteropelvic Junction Obstruction",
        definition: "Find expert knowledge and treatments for Ureteropelvic Junction Obstruction at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urethral Stricture",
        definition: "Find expert knowledge and treatments for Urethral Stricture at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urinary Incontinence",
        definition: "Find expert knowledge and treatments for Urinary Incontinence at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urinary Tract Infections",
        definition: "Find expert knowledge and treatments for Urinary Tract Infections at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urogynecology",
        definition: "Find expert knowledge and treatments for Urogynecology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urogynecology and Reconstructive Pelvic Surgery",
        definition: "Find expert knowledge and treatments for Urogynecology and Reconstructive Pelvic Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urologic Cancer (Cancer Care)",
        definition: "Find expert knowledge and treatments for Urologic Cancer (Cancer Care) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urologic Cancer (Urology)",
        definition: "Find expert knowledge and treatments for Urologic Cancer (Urology) at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Urology",
        definition: "Find expert knowledge and treatments for Urology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Uterine Cancer",
        definition: "Find expert knowledge and treatments for Uterine Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Uterine Fibroids",
        definition: "Find expert knowledge and treatments for Uterine Fibroids at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Uterine Fibroids Embolization",
        definition: "Find expert knowledge and treatments for Uterine Fibroids Embolization at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Uveitis",
        definition: "Find expert knowledge and treatments for Uveitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vaginal Cancer",
        definition: "Find expert knowledge and treatments for Vaginal Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Valgus Malalignment",
        definition: "Find expert knowledge and treatments for Valgus Malalignment at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Varicocele",
        definition: "Find expert knowledge and treatments for Varicocele at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Varicose Veins",
        definition: "Find expert knowledge and treatments for Varicose Veins at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Varus Malalignment",
        definition: "Find expert knowledge and treatments for Varus Malalignment at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vascular Dementia",
        definition: "Find expert knowledge and treatments for Vascular Dementia at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vasculitis",
        definition: "Find expert knowledge and treatments for Vasculitis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vater Syndrome",
        definition: "Find expert knowledge and treatments for Vater Syndrome at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vein Center",
        definition: "Find expert knowledge and treatments for Vein Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vein Center at Central DuPage Hospital",
        definition: "Find expert knowledge and treatments for Vein Center at Central DuPage Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vein Center at Delnor Hospital",
        definition: "Find expert knowledge and treatments for Vein Center at Delnor Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vein Center at Glenview Outpatient Center",
        definition: "Find expert knowledge and treatments for Vein Center at Glenview Outpatient Center at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vein Center at Lake Forest Hospital",
        definition: "Find expert knowledge and treatments for Vein Center at Lake Forest Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vein Center at Northwestern Memorial Hospital",
        definition: "Find expert knowledge and treatments for Vein Center at Northwestern Memorial Hospital at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Venous Ulcer",
        definition: "Find expert knowledge and treatments for Venous Ulcer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vesicoureteral Reflux",
        definition: "Find expert knowledge and treatments for Vesicoureteral Reflux at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Viral Hepatitis Co-Infection Program",
        definition: "Find expert knowledge and treatments for Viral Hepatitis Co-Infection Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vocal Cord Paralysis",
        definition: "Find expert knowledge and treatments for Vocal Cord Paralysis at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vocal Cord Polyps and Nodules",
        definition: "Find expert knowledge and treatments for Vocal Cord Polyps and Nodules at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Von Hippel-Lindau Disease",
        definition: "Find expert knowledge and treatments for Von Hippel-Lindau Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Von Hippel-Lindau Program",
        definition: "Find expert knowledge and treatments for Von Hippel-Lindau Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Von Willebrand Disease",
        definition: "Find expert knowledge and treatments for Von Willebrand Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vulvar and Vaginal Health",
        definition: "Find expert knowledge and treatments for Vulvar and Vaginal Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Vulvar Cancer",
        definition: "Find expert knowledge and treatments for Vulvar Cancer at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Warts",
        definition: "Find expert knowledge and treatments for Warts at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Weight Loss Surgery",
        definition: "Find expert knowledge and treatments for Weight Loss Surgery at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Weight Management",
        definition: "Find expert knowledge and treatments for Weight Management at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Wheelchair and positioning",
        definition: "Find expert knowledge and treatments for Wheelchair and positioning at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Wilson Disease",
        definition: "Find expert knowledge and treatments for Wilson Disease at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Women’s Infectious Disease Program",
        definition: "Find expert knowledge and treatments for Women’s Infectious Disease Program at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Women’s Skin Health",
        definition: "Find expert knowledge and treatments for Women’s Skin Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Women's Health",
        definition: "Find expert knowledge and treatments for Women's Health at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Women's Neurology",
        definition: "Find expert knowledge and treatments for Women's Neurology at Indira Hospital.",
        category: "General",
        relatedService: "general-medicine",
        relatedServiceTitle: "General Medicine"
    },
    {
        term: "Wound Care",
        definition: "Find expert knowledge and treatments for Wound Care at Indira Hospital.",
        category: "General",
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

export const navigation = {
    mainNav: [
        { title: "Treatments", href: "/doctor/near-me/treat" },
        { title: "Doctors", href: "/doctors" },
        { title: "Diagnostics", href: "/diagnostics" },
        { title: "Locations", href: "/doctor/near-me" },
        { title: "International", href: "/patients/international" },
    ],

    // Pristyn Care-style secondary specialty nav with dropdowns
    specialtyNav: [
        {
            title: "Proctology", href: "/doctor/near-me/treat/proctology", subServices: [
                { title: "Laser Piles Treatment", href: "/doctor/near-me/treat/proctology/laser-piles-treatment" },
                { title: "Laser Fistula (FiLaC)", href: "/doctor/near-me/treat/proctology/fistula-surgery-treatment" },
                { title: "Anal Fissure Care", href: "/doctor/near-me/treat/proctology/laser-fissure-treatment" },
                { title: "Pilonidal Sinus", href: "/doctor/near-me/treat/proctology/laser-pilonidal-sinus-surgery" },
            ]
        },
        {
            title: "Laparoscopy", href: "/doctor/near-me/treat/general-surgery", subServices: [
                { title: "Hernia Repair", href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair-surgery" },
                { title: "Gallbladder Removal", href: "/doctor/near-me/treat/general-surgery/gallbladder-removal-recovery" },
                { title: "Appendix Surgery", href: "/doctor/near-me/treat/general-surgery/appendix-surgery-steps" },
            ]
        },
        {
            title: "Gynaecology", href: "/doctor/near-me/treat/obstetrics-gynaecology", subServices: [
                { title: "Laparoscopic Hysterectomy", href: "/doctor/near-me/treat/obstetrics-gynaecology/laparoscopic-hysterectomy-guide" },
                { title: "PCOD / PCOS Treatment", href: "/doctor/near-me/treat/obstetrics-gynaecology/pcod-pcos-treatment-guide" },
                { title: "Endometriosis", href: "/doctor/near-me/treat/obstetrics-gynaecology/endometriosis-treatment" },
                { title: "High-Risk Pregnancy", href: "/doctor/near-me/treat/obstetrics-gynaecology/high-risk-pregnancy-care" },
                { title: "Painless Delivery", href: "/doctor/near-me/treat/obstetrics-gynaecology/painless-delivery-epidural" },
                { title: "C-Section vs Normal", href: "/doctor/near-me/treat/obstetrics-gynaecology/normal-delivery-vs-c-section" },
                { title: "Cervical Cancer Screening", href: "/doctor/near-me/treat/obstetrics-gynaecology/cervical-cancer-screening" },
            ]
        },
        { title: "ENT", href: "/doctor/near-me/treat/ent" },
        {
            title: "Urology", href: "/doctor/near-me/treat/urology", subServices: [
                { title: "Kidney Stone Laser (RIRS)", href: "/doctor/near-me/treat/urology/laser-kidney-stone-surgery" },
                { title: "Elite Laser Prostate (TURP)", href: "/doctor/near-me/treat/urology/laser-prostate-surgery" },
                { title: "Complex Stone (PCNL)", href: "/doctor/near-me/treat/urology/pcnl-complex-stone-removal" },
                { title: "Bladder Cancer Unit", href: "/doctor/near-me/treat/urology/bladder-cancer-diagnosis-treatment" },
                { title: "UTI Treatment Guide", href: "/doctor/near-me/treat/urology/uti-treatment-guide" },
            ]
        },
        {
            title: "Vascular", href: "/doctor/near-me/treat/general-surgery", subServices: [
                { title: "Varicose Veins Laser", href: "/doctor/near-me/treat/general-surgery/varicose-veins-laser-treatment" },
                { title: "AV Fistula Surgery", href: "/doctor/near-me/treat/nephrology/av-fistula-surgery" },
            ]
        },
        { title: "Aesthetics", href: "/doctor/near-me/treat/dermatology" },
        {
            title: "Orthopedics", href: "/doctor/near-me/treat/orthopaedics", subServices: [
                { title: "Knee Replacement", href: "/doctor/near-me/treat/orthopaedics/robotic-knee-replacement" },
                { title: "Hip Replacement", href: "/doctor/near-me/treat/orthopaedics/hip-replacement-surgery-guide" },
                { title: "Arthroscopy", href: "/doctor/near-me/treat/orthopaedics/arthroscopy-joint-surgery" },
                { title: "ACL Reconstruction", href: "/doctor/near-me/treat/orthopaedics/acl-reconstruction-recovery" },
                { title: "Spine Surgery", href: "/doctor/near-me/treat/orthopaedics/spine-surgery-disc-prolapse" },
                { title: "Fracture Care", href: "/doctor/near-me/treat/orthopaedics/fracture-care-rehabilitation" },
            ]
        },
        { title: "Ophthalmology", href: "/doctor/near-me/treat/ophthalmology" },
        {
            title: "Fertility", href: "/doctor/near-me/treat/obstetrics-gynaecology", subServices: [
                { title: "Infertility Evaluation", href: "/doctor/near-me/treat/obstetrics-gynaecology/infertility-evaluation-steps" },
                { title: "Male Infertility", href: "/doctor/near-me/treat/urology/male-infertility-causes" },
            ]
        },
        { title: "Weight Loss", href: "/doctor/near-me/treat/general-surgery" },
        { title: "Dermatology", href: "/doctor/near-me/treat/dermatology" },
        {
            title: "Cardiology", href: "/doctor/near-me/treat/cardiology", subServices: [
                { title: "Coronary Angiography", href: "/doctor/near-me/treat/cardiology/coronary-angiography-guide" },
                { title: "Heart Angioplasty", href: "/doctor/near-me/treat/cardiology/heart-angioplasty-procedure" },
                { title: "Pacemaker Implantation", href: "/doctor/near-me/treat/cardiology/pacemaker-implantation-steps" },
                { title: "Heart Valve Replacement", href: "/doctor/near-me/treat/cardiology/heart-valve-replacement-surgery" },
                { title: "Cardiac Bypass", href: "/doctor/near-me/treat/cardiology/cardiac-surgery-bypass" },
            ]
        },
        {
            title: "Neurology", href: "/doctor/near-me/treat/neurology", subServices: [
                { title: "Stroke Unit & Rehab", href: "/doctor/near-me/treat/neurology/stroke-unit-rehabilitation" },
                { title: "Epilepsy & Seizure Care", href: "/doctor/near-me/treat/neurology/epilepsy-and-seizure-care" },
                { title: "Dementia & Alzheimer's", href: "/doctor/near-me/treat/neurology/dementia-alzheimers-care" },
                { title: "Migraine Relief", href: "/doctor/near-me/treat/neurology/migraine-relief-management" },
                { title: "Parkinson's Care", href: "/doctor/near-me/treat/neurology/parkinsons-disease-care" },
            ]
        },
        {
            title: "Gastroenterology", href: "/doctor/near-me/treat/gastroenterology", subServices: [
                { title: "Endoscopy Guide", href: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
                { title: "Colonoscopy", href: "/doctor/near-me/treat/gastroenterology/colonoscopy-screening-cost" },
                { title: "ERCP Bile Duct", href: "/doctor/near-me/treat/gastroenterology/ercp-bile-duct-stone-removal" },
                { title: "Liver Cirrhosis", href: "/doctor/near-me/treat/gastroenterology/liver-cirrhosis-treatment" },
                { title: "Fatty Liver", href: "/doctor/near-me/treat/gastroenterology/fatty-liver-treatment-diet" },
                { title: "IBS Treatment", href: "/doctor/near-me/treat/gastroenterology/ibs-treatment-guide" },
                { title: "Acid Reflux / GERD", href: "/doctor/near-me/treat/gastroenterology/acid-reflux-gerd-management" },
            ]
        },
        {
            title: "Nephrology", href: "/doctor/near-me/treat/nephrology", subServices: [
                { title: "Advanced Dialysis Center", href: "/doctor/near-me/treat/nephrology/advanced-dialysis-center" },
                { title: "Preventive Kidney Care", href: "/doctor/near-me/treat/nephrology/preventive-kidney-care" },
                { title: "Kidney Transplant", href: "/doctor/near-me/treat/nephrology/kidney-transplant-guide" },
                { title: "Diabetic Kidney (CKD)", href: "/doctor/near-me/treat/nephrology/diabetic-kidney-disease-ckd" },
            ]
        },
        {
            title: "Oncology", href: "/doctor/near-me/treat/oncology", subServices: [
                { title: "Surgical Oncology", href: "/doctor/near-me/treat/oncology/surgical-oncology-center" },
                { title: "Medical Oncology & Chemo", href: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" },
                { title: "Breast Cancer Clinic", href: "/doctor/near-me/treat/oncology/breast-cancer-screening-guide" },
                { title: "Radiation Therapy", href: "/doctor/near-me/treat/oncology/radiation-therapy-overview" },
            ]
        },
        {
            title: "Dentistry", href: "/doctor/near-me/treat/dentistry", subServices: [
                { title: "Laser Root Canal", href: "/doctor/near-me/treat/dentistry/root-canal-treatment" },
                { title: "3D Guided Implants", href: "/doctor/near-me/treat/dentistry/dental-implants" },
                { title: "Invisalign Aligners", href: "/doctor/near-me/treat/dentistry/invisalign-clear-aligners" },
                { title: "Smile Makeover", href: "/doctor/near-me/treat/dentistry/dental-veneers-types" },
            ]
        },
        {
            title: "General Medicine", href: "/doctor/near-me/treat/general-medicine", subServices: [
                { title: "Diabetology & Sugar", href: "/doctor/near-me/treat/general-medicine/diabetes-management-guide" },
                { title: "Hypertension Hub", href: "/doctor/near-me/treat/general-medicine/hypertension-care-vellore" },
                { title: "Full Body Checkup", href: "/doctor/near-me/treat/general-medicine/master-health-checkup" },
            ]
        },
        {
            title: "Pulmonology", href: "/doctor/near-me/treat/pulmonology", subServices: [
                { title: "Asthma & Allergy", href: "/doctor/near-me/treat/pulmonology" },
                { title: "Sleep Apnea / BiPAP", href: "/doctor/near-me/treat/pulmonology" },
                { title: "COPD Management", href: "/doctor/near-me/treat/pulmonology" },
            ]
        },
        { title: "Physiotherapy", href: "/doctor/near-me/treat/physiotherapy" },
        { title: "Paediatrics", href: "/doctor/near-me/treat/paediatrics" },
        { title: "Psychiatry", href: "/doctor/near-me/treat/psychiatry" },
    ],

    // Actual Tamil Nadu catchment areas served by Indira Hospital
    hospitalLocations: [
        { title: "Vellore (Main Campus)", href: "/doctor/near-me/vellore" },
        { title: "Ranipet", href: "/doctor/near-me/ranipet" },
        { title: "Tiruvannamalai", href: "/doctor/near-me/tiruvannamalai" },
        { title: "Krishnagiri", href: "/doctor/near-me/krishnagiri" },
        { title: "Dharmapuri", href: "/doctor/near-me/dharmapuri" },
        { title: "Kanchipuram", href: "/doctor/near-me/kanchipuram" },
        { title: "Villupuram", href: "/doctor/near-me/villupuram" },
        { title: "Chennai", href: "/doctor/near-me/chennai" },
        { title: "Salem", href: "/doctor/near-me/salem" },
        { title: "Tirupattur", href: "/doctor/near-me/tirupattur" },
        { title: "Chengalpattu", href: "/doctor/near-me/chengalpattu" },
    ],

    footerNav: {
        services: [
            { title: "Cardiology", href: "/doctor/near-me/treat/cardiology" },
            { title: "Neurology", href: "/doctor/near-me/treat/neurology" },
            { title: "Orthopedics", href: "/doctor/near-me/treat/orthopaedics" },
            { title: "Gastroenterology", href: "/doctor/near-me/treat/gastroenterology" },
            { title: "General Surgery", href: "/doctor/near-me/treat/general-surgery" },
            { title: "Urology", href: "/doctor/near-me/treat/urology" },
            { title: "Oncology", href: "/doctor/near-me/treat/oncology" },
            { title: "Paediatrics", href: "/doctor/near-me/treat/paediatrics" },
            { title: "Physiotherapy", href: "/doctor/near-me/treat/physiotherapy" },
            { title: "Psychiatry", href: "/doctor/near-me/treat/psychiatry" },
        ],
        company: [
            { title: "About Us", href: "/about" },
            { title: "For Patients", href: "/patients" },
            { title: "Medical Professionals", href: "/professionals" },
            { title: "Clinical Guides", href: "/resources/guides" },
            { title: "Contact", href: "/contact" },
        ],
        legal: [
            { title: "Privacy Policy", href: "/privacy-policy" },
            { title: "Terms of Service", href: "/terms" },
        ],
    }
};

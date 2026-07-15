"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

const guidesData = [
 {
 category: "Bones, Muscles and Joints",
 links: [
 "ACL Injuries", "Arthritis", "Concussion", "Elbow Pain", "Foot and Ankle Pain",
 "Hand and Wrist Pain", "Hip Pain", "Knee Pain", "Lupus", "Osteoporosis",
 "Pain Management", "Pediatric Orthopaedics", "Running Injuries", "Sarcoma",
 "Scoliosis", "Shoulder Pain", "Sports Health", "Sports Injuries", "Vasculitis"
 ]
 },
 {
 category: "Brain, Nerves and Spine",
 links: [
 "Aneurysm", "Back Pain", "Brain Health", "Brain Tumors", "Concussion",
 "Epilepsy", "Gamma Knife", "Movement Disorders", "Multiple Sclerosis",
 "Pain Management", "Scoliosis", "Sleep", "Stroke"
 ]
 },
 {
 category: "Cancer",
 links: [
 "Bladder Cancer", "Brain Tumors", "Breast Cancer", "Cervical Cancer",
 "Colon Cancer", "Gamma Knife", "Gynecological Cancer", "Head and Neck Cancers",
 "Kidney Cancer", "Leukemia", "Liver Cancer", "Lung Cancer", "Lymphoma",
 "Melanoma", "Mesothelioma", "Nasal Cancer", "Oral Cancer", "Ovarian Cancer",
 "Pancreatic Cancer", "Prostate Cancer", "Rare Cancers and Blood Diseases",
 "Sarcoma", "Testicular Cancer", "Throat Cancer", "Uterine Cancer"
 ]
 },
 {
 category: "Children's Health",
 links: [
 "Blood and Marrow Transplant", "Childhood Leukemia", "Childhood Lymphoma",
 "Children's Health", "Congenital Heart Disease", "Cystic Fibrosis", "Epilepsy",
 "Fractures", "Headache", "Hypoplastic Left Heart Syndrome (HLHS)",
 "Inflammatory Bowel Disease", "Juvenile Arthritis", "Orthopaedics",
 "Pain/RSD/CRPS", "Pectus Excavatum", "Pediatric Liver Transplant", "Sarcoma",
 "Scoliosis", "Tetralogy of Fallot"
 ]
 },
 {
 category: "Dermatology and Plastic Surgery",
 links: [
 "Body Contouring", "Breast Reconstruction", "Breast Surgery", "Cosmetic Facial Surgery"
 ]
 },
 {
 category: "Digestive Diseases",
 links: [
 "Bariatric Weight Loss", "Colon Cancer", "Colonoscopy", "Crohn’s Disease",
 "Hemorrhoids", "Hernia", "HIPEC", "Inflammatory Bowel Disease", "J-Pouch",
 "Liver Transplant", "Liver Tumor Clinic", "Pancreatic Disease",
 "Pelvic Floor Disorders", "Small Bowel Transplant", "Swallowing Disorders",
 "Ulcerative Colitis"
 ]
 },
 {
 category: "Endocrinology",
 links: [
 "Calcium and Parathyroid Disorders", "Diabetes", "Thyroid Conditions"
 ]
 },
 {
 category: "Eye",
 links: [
 "Age-Related Macular Degeneration (AMD)", "Diabetes-Related Retinopathy",
 "Laser Cataract Surgery", "Laser Vision Correction", "Retinal Diseases"
 ]
 },
 {
 category: "Head and Neck",
 links: [
 "Facial Reconstruction and Facial Nerve Disorders", "Head and Neck Cancers",
 "Hearing Aids", "Nasal Cancer", "Oral Cancer", "Sinus Disorders",
 "Throat Cancer", "Voice Treatment"
 ]
 },
 {
 category: "Heart, Vascular & Thoracic",
 links: [
 "Aortic Aneurysm", "Atrial Fibrillation", "Congenital Heart Disease",
 "Coronary Artery Disease", "Heart Failure", "Heart Valve Disease",
 "Hypertrophic Cardiomyopathy", "Marfan Syndrome", "May-Thurner Syndrome",
 "Pericarditis", "Sclerotherapy", "Swallowing Disorders", "Thoracic Outlet Syndrome",
 "Ventricular Tachycardia"
 ]
 },
 {
 category: "Respiratory",
 links: [
 "Asthma", "Cystic Fibrosis", "Hereditary Hemorrhagic Telangiectasia (HHT)",
 "Interstitial Lung Disease", "Lung Cancer", "Pulmonary Hypertension",
 "Sarcoidosis", "Seasonal Allergy"
 ]
 },
 {
 category: "Urology and Kidney",
 links: [
 "Bladder Cancer", "Chronic Kidney Disease", "Genitourinary Reconstruction",
 "Infertility", "Kidney Cancer", "Kidney Stones", "Kidney Transplant Surgery",
 "Male Fertility Preservation Options", "Peyronie's Disease", "Prolapse and Incontinence",
 "Prostate Cancer", "Resistant Hypertension", "Testicular Cancer Treatment",
 "Transitional Urology"
 ]
 },
 {
 category: "Wellness",
 links: [
 "Executive Health", "Wound Care"
 ]
 },
 {
 category: "Women's Health",
 links: [
 "Birth Control Options", "Breast Cancer", "Cervical Cancer", "Chronic Pelvic Pain",
 "Endometriosis", "Fibroids", "Gynecological Cancer", "Hair Loss in Women",
 "Infertility", "Menopause", "Obesity and Menopause", "Osteoporosis",
 "Ovarian Cancer", "Perimenopause", "Prenatal Care", "Prolapse and Incontinence",
 "Sexual Health in Menopause", "Uterine Cancer", "Vulvar Disorders"
 ]
 }
];

function slugify(text: string) {
 return text
 .toString()
 .toLowerCase()
 .replace(/\s+/g, '-') // Replace spaces with -
 .replace(/[^\w\-]+/g, '') // Remove all non-word chars
 .replace(/\-\-+/g, '-') // Replace multiple - with single -
 .trim();
}

export function TreatmentGuides() {
 return (
 <section id="guides" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 scroll-mt-32">
 <SectionContainer>
 <div className="max-w-4xl mx-auto text-center mb-16">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 mb-6">
 <BookOpen className="w-8 h-8" />
 </div>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-6">
 Browse Our Free Guides
 </h2>
 <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
 Looking for reliable information on specific diseases and conditions? Browse our free guides by disease, condition, and procedure. One click will start you on the path to becoming a more informed patient.
 </p>
 </div>

 <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
 {guidesData.map((category, idx) => (
 <div key={idx} className="break-inside-avoid bg-slate-50 dark:bg-slate-950/50 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 dark:hover:border-fuchsia-900/50 transition-colors">
 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
 <span className="w-2 h-2 rounded-full bg-fuchsia-500 hidden sm:block"></span>
 {category.category}
 </h3>
 <ul className="space-y-3">
 {category.links.map((link, linkIdx) => (
 <li key={linkIdx}>
 <Link
 href={`/doctor/near-me/treat/${slugify(link)}`}
 className="group flex gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0086d6] dark:hover:text-[#0086d6] transition-colors"
 >
 <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#0086d6]" />
 <span className="leading-snug">{link}</span>
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </SectionContainer>
 </section>
 );
}

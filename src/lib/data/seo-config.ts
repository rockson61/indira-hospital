import fs from "fs";
import path from "path";

export interface SurgicalSilo {
  id: string;
  name: string;
  category: string;
  cluster: string;
}

export interface LocationData {
  name: string;
  slug: string;
}

export const surgicalSilos: SurgicalSilo[] = [
  // Proctology Variants
  { id: "robotic-piles-1", name: "Robotic Laser Piles Treatment", category: "Proctology", cluster: "proctology" },
  { id: "robotic-piles-2", name: "Painless Laser Piles Surgery", category: "Proctology", cluster: "proctology" },
  { id: "robotic-piles-3", name: "Laser Piles Specialist", category: "Proctology", cluster: "proctology" },
  { id: "robotic-piles-4", name: "Robotic Hemorrhoid Removal", category: "Proctology", cluster: "proctology" },
  { id: "robotic-piles-5", name: "Laser Piles Hospital", category: "Proctology", cluster: "proctology" },
  { id: "robotic-piles-6", name: "Advanced Piles Treatment", category: "Proctology", cluster: "proctology" },

  // Orthopaedics Variants
  { id: "robotic-knee-1", name: "Robotic Total Knee Replacement", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "robotic-knee-2", name: "AI-Guided Knee Surgery", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "robotic-knee-3", name: "Best Knee Replacement Surgeon", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "robotic-knee-4", name: "Knee Replacement Recovery Hub", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "robotic-knee-5", name: "Advanced Joint Replacement", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "robotic-knee-6", name: "Robotic Orthopaedic Surgery", category: "Orthopaedics", cluster: "orthopaedics" },

  // Ophthalmology Variants
  { id: "cataract-1", name: "Robotic Cataract Surgery", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "cataract-2", name: "Premium IOL Cataract Treatment", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "cataract-3", name: "MICS Cataract Surgery", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "cataract-4", name: "Laser Eye Specialist", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "cataract-5", name: "Advanced Eye Care Hospital", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "cataract-6", name: "Robotic Eye Surgery Mastery", category: "Ophthalmology", cluster: "ophthalmology" },

  // General Surgery Variants
  { id: "hernia-1", name: "Laparoscopic Hernia Repair", category: "General Surgery", cluster: "general-surgery" },
  { id: "hernia-2", name: "Robotic Hernia Surgery", category: "General Surgery", cluster: "general-surgery" },
  { id: "hernia-3", name: "Hernia Specialist Surgeon", category: "General Surgery", cluster: "general-surgery" },
  { id: "hernia-4", name: "Painless Hernia Treatment", category: "General Surgery", cluster: "general-surgery" },
  { id: "hernia-5", name: "Advanced Hernia Repair Hub", category: "General Surgery", cluster: "general-surgery" },
  { id: "hernia-6", name: "Inguinal Hernia Laser Repair", category: "General Surgery", cluster: "general-surgery" },

  // Proctology (Fistula) Variants
  { id: "fistula-1", name: "Laser Fistula Treatment", category: "Proctology", cluster: "proctology" },
  { id: "fistula-2", name: "Painless Fistula Surgery", category: "Proctology", cluster: "proctology" },
  { id: "fistula-3", name: "Fistula Laser Closure (FiLaC)", category: "Proctology", cluster: "proctology" },
  { id: "fistula-4", name: "Best Fistula Specialist", category: "Proctology", cluster: "proctology" },
  { id: "fistula-5", name: "Robotic Fistula Removal", category: "Proctology", cluster: "proctology" },
  { id: "fistula-6", name: "Advanced Fistula Care", category: "Proctology", cluster: "proctology" },

  // Gynaecology Variants
  { id: "ivf-1", name: "IVF / Infertility Treatment", category: "Gynaecology", cluster: "gynaecology" },
  { id: "ivf-2", name: "Advanced IVF Success Hub", category: "Gynaecology", cluster: "gynaecology" },
  { id: "ivf-3", name: "Best Fertility Specialist", category: "Gynaecology", cluster: "gynaecology" },
  { id: "ivf-4", name: "Robotic Gynaec Surgery", category: "Gynaecology", cluster: "gynaecology" },
  { id: "ivf-5", name: "Infertility Diagnostic Center", category: "Gynaecology", cluster: "gynaecology" },
  { id: "ivf-6", name: "Premium IVF Care Pathway", category: "Gynaecology", cluster: "gynaecology" },

  // Neuro Surgery Variants
  { id: "spine-1", name: "Spinal Disc Surgery", category: "Neuro Surgery", cluster: "neuro-surgery" },
  { id: "spine-2", name: "Microsurgical Discectomy", category: "Neuro Surgery", cluster: "neuro-surgery" },
  { id: "spine-3", name: "Best Spine Surgeon", category: "Neuro Surgery", cluster: "neuro-surgery" },
  { id: "spine-4", name: "Robotic Spine Interventions", category: "Neuro Surgery", cluster: "neuro-surgery" },
  { id: "spine-5", name: "Advanced Neuro/Spine Hub", category: "Neuro Surgery", cluster: "neuro-surgery" },
  { id: "spine-6", name: "Disc Prolapse Management", category: "Neuro Surgery", cluster: "neuro-surgery" },

  // Orthopaedics (ACL) Variants
  { id: "acl-1", name: "ACL Reconstruction Surgery", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "acl-2", name: "Sports Injury Specialist", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "acl-3", name: "Arthroscopic ACL Repair", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "acl-4", name: "Robotic ACL Surgery", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "acl-5", name: "Knee Ligament Hospital", category: "Orthopaedics", cluster: "orthopaedics" },
  { id: "acl-6", name: "Advanced Orthopaedic Rehab", category: "Orthopaedics", cluster: "orthopaedics" },

  // Ophthalmology (LASIK) Variants
  { id: "lasik-1", name: "Contoura Vision LASIK", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "lasik-2", name: "Bladeless LASIK Eye Surgery", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "lasik-3", name: "Best LASIK Surgeon", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "lasik-4", name: "Robotic LASIK Surgery", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "lasik-5", name: "Vision Correction Center", category: "Ophthalmology", cluster: "ophthalmology" },
  { id: "lasik-6", name: "Advanced Contoura Vision Hub", category: "Ophthalmology", cluster: "ophthalmology" },

  // Cardiology Variants
  { id: "heart-1", name: "Angioplasty & Heart Stent", category: "Cardiology", cluster: "cardiology" },
  { id: "heart-2", name: "Best Cardiology Hospital", category: "Cardiology", cluster: "cardiology" },
  { id: "heart-3", name: "Heart Attack Management", category: "Cardiology", cluster: "cardiology" },
  { id: "heart-4", name: "Robotic Cardiac Interventions", category: "Cardiology", cluster: "cardiology" },
  { id: "heart-5", name: "Advanced Heart Care Pathway", category: "Cardiology", cluster: "cardiology" },
  { id: "heart-6", name: "Preventive Heart Screening", category: "Cardiology", cluster: "cardiology" }
];

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

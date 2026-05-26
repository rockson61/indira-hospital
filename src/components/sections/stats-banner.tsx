import { getDoctors, getDepartments } from "@/lib/api";
import { StatsCounterClient } from "./stats-counter-client";

export async function StatsBanner() {
 let doctorCount = 25;
 let departmentCount = 10;
 const patientCount = 15000;

 try {
 const [doctors, departments] = await Promise.all([
 getDoctors().catch(() => []),
 getDepartments().catch(() => []),
 ]);

 if (doctors.length > 0) doctorCount = doctors.length;
 if (departments.length > 0) departmentCount = departments.length;
 } catch {
 doctorCount = 20;
 departmentCount = 10;
 }

 return (
 <StatsCounterClient
 doctorCount={doctorCount}
 departmentCount={departmentCount}
 patientCount={patientCount}
 />
 );
}

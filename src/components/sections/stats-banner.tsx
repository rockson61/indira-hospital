import { getDoctors, getDepartments } from "@/lib/api";
import { SEED_DATA } from "@/lib/data/seed-data";
import { StatsCounterClient } from "./stats-counter-client";

export async function StatsBanner() {
    let doctorCount = 25;
    let departmentCount = 10;
    let patientCount = 15000;

    try {
        const [doctors, departments] = await Promise.all([
            getDoctors().catch(() => []),
            getDepartments().catch(() => []),
        ]);

        if (doctors.length > 0) doctorCount = doctors.length;
        else doctorCount = SEED_DATA.doctors.length;

        if (departments.length > 0) departmentCount = departments.length;
        else departmentCount = SEED_DATA.services.length;
    } catch {
        doctorCount = SEED_DATA.doctors.length;
        departmentCount = SEED_DATA.services.length;
    }

    return (
        <StatsCounterClient
            doctorCount={doctorCount}
            departmentCount={departmentCount}
            patientCount={patientCount}
        />
    );
}

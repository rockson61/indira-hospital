import { getDoctors, getDepartments } from "@/lib/api";
import { SEED_DATA } from "@/lib/data/seed-data";
import { getEffectiveDepartments } from "@/lib/utils/department-utils";
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
        else departmentCount = getEffectiveDepartments().length;
    } catch {
        doctorCount = SEED_DATA.doctors.length;
        departmentCount = getEffectiveDepartments().length;
    }

    return (
        <StatsCounterClient
            doctorCount={doctorCount}
            departmentCount={departmentCount}
            patientCount={patientCount}
        />
    );
}

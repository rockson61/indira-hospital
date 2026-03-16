"use server";

import { getAdminClient } from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { Appointment } from "@/lib/schema";

export async function submitAppointment(formData: Appointment) {
    try {
        const client = await getAdminClient();
        const result = await client.request(createItem('appointments', {
            ...formData,
            status: 'pending'
        }));
        return { success: true, data: result };
    } catch (error) {
        console.error("Error submitting appointment:", error);
        return { success: false, error: "Failed to book appointment. Please try again." };
    }
}

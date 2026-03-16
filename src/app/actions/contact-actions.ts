"use server";

import { getAdminClient } from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { ContactMessage } from "@/lib/schema";

export async function submitContactForm(formData: ContactMessage) {
    try {
        const client = await getAdminClient();
        const result = await client.request(createItem('contacts', {
            ...formData,
            status: 'new'
        }));
        return { success: true, data: result };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { success: false, error: "Failed to send message. Please try again." };
    }
}

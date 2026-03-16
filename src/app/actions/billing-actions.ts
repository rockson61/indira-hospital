"use server";

import { getAdminClient } from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { BillingPayment } from "@/lib/schema";

export async function submitBillingPayment(formData: BillingPayment) {
    try {
        const client = await getAdminClient();
        const result = await client.request(createItem('billing_payments', {
            ...formData,
            status: 'success' // Simulating a successful payment for now
        }));
        return { success: true, data: result };
    } catch (error) {
        console.error("Error submitting billing payment:", error);
        return { success: false, error: "Failed to process payment. Please try again." };
    }
}

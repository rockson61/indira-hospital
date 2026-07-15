"use server";

import { headers } from "next/headers";
import { getAdminClient } from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { BillingPayment } from "@/lib/schema";
import { billingPaymentSchema, isRateLimited } from "@/lib/validation";

export async function submitBillingPayment(formData: BillingPayment) {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`billing:${ip}`)) {
    return { success: false, error: "Too many requests. Please try again in a minute." };
  }

  const parsed = billingPaymentSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message || "Invalid form data." };
  }

  try {
    const client = await getAdminClient();
    const result = await client.request(createItem('billing_payments', {
      ...parsed.data,
      status: 'pending'
    }));
    return { success: true, data: result };
  } catch (error) {
    console.error("Error submitting billing payment:", error);
    return { success: false, error: "Failed to process payment. Please try again." };
  }
}

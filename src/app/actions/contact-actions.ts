"use server";

import { headers } from "next/headers";
import { getAdminClient } from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { ContactMessage } from "@/lib/schema";
import { contactMessageSchema, isRateLimited } from "@/lib/validation";

export async function submitContactForm(formData: ContactMessage) {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`contact:${ip}`)) {
    return { success: false, error: "Too many requests. Please try again in a minute." };
  }

  const parsed = contactMessageSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message || "Invalid form data." };
  }

  try {
    const client = await getAdminClient();
    const result = await client.request(createItem('contacts', {
      ...parsed.data,
      status: 'new'
    }));
    return { success: true, data: result };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}

"use server";

import { headers } from "next/headers";
import { getAdminClient } from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { Appointment } from "@/lib/schema";
import { appointmentSchema, isRateLimited } from "@/lib/validation";

export async function submitAppointment(formData: Appointment) {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`appointment:${ip}`)) {
    return { success: false, error: "Too many requests. Please try again in a minute." };
  }

  const parsed = appointmentSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message || "Invalid form data." };
  }

  try {
    const client = await getAdminClient();
    const result = await client.request(createItem('appointments', {
      ...parsed.data,
      status: 'pending'
    }));
    return { success: true, data: result };
  } catch (error) {
    console.error("Error submitting appointment:", error);
    return { success: false, error: "Failed to book appointment. Please try again." };
  }
}

import { z } from "zod";

/**
 * Shared server-side validation schemas for public form submissions.
 * All schemas strip unknown keys so callers can never inject extra
 * fields (e.g. overriding `status`) into Directus records.
 */

const phoneSchema = z
  .string()
  .trim()
  .min(7, "Phone number is too short")
  .max(20, "Phone number is too long")
  .regex(/^[+\d][\d\s\-()]{5,}$/, "Invalid phone number");

export const appointmentSchema = z
  .object({
    name: z.string().trim().min(2, "Name is required").max(120),
    phone: phoneSchema,
    email: z.email("Invalid email").max(254).optional().or(z.literal("")),
    department: z.string().trim().max(120).optional(),
    doctor: z.string().trim().max(120).optional(),
    date: z.string().trim().min(1, "Date is required").max(40),
    notes: z.string().trim().max(2000).optional(),
  })
  .strip();

export const contactMessageSchema = z
  .object({
    first_name: z.string().trim().min(1, "First name is required").max(80),
    last_name: z.string().trim().min(1, "Last name is required").max(80),
    email: z.email("Invalid email").max(254),
    phone: phoneSchema,
    subject: z.string().trim().max(200).optional(),
    message: z.string().trim().min(5, "Message is too short").max(5000),
  })
  .strip();

export const billingPaymentSchema = z
  .object({
    patient_id: z.string().trim().min(1, "Patient ID is required").max(80),
    invoice_number: z.string().trim().min(1, "Invoice number is required").max(80),
    amount: z.number().positive("Amount must be positive").max(10_000_000),
    phone: phoneSchema.optional(),
    payment_method: z.string().trim().max(60).optional(),
    transaction_id: z.string().trim().max(120).optional(),
  })
  .strip();

/**
 * Best-effort in-memory rate limiter (per server instance).
 * Not a substitute for edge/WAF rate limiting, but blocks basic abuse.
 */
const submissionLog = new Map<string, number[]>();

export function isRateLimited(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const entries = (submissionLog.get(key) ?? []).filter((t) => now - t < windowMs);
  if (entries.length >= limit) {
    submissionLog.set(key, entries);
    return true;
  }
  entries.push(now);
  submissionLog.set(key, entries);
  // Prevent unbounded growth
  if (submissionLog.size > 10_000) {
    const oldest = submissionLog.keys().next().value;
    if (oldest) submissionLog.delete(oldest);
  }
  return false;
}

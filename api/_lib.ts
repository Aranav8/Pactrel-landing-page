// Shared helpers for the API routes. The leading underscore keeps Vercel from
// exposing this file as its own endpoint.

export const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || "Pactrel <onboarding@resend.dev>";

// Only local/preview environments may fake a success when Resend isn't configured.
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/;

export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) return null;
  return email;
}

// Best-effort, per-instance rate limit: 5 requests per IP per 10 minutes.
// Serverless instances don't share memory, so this only slows down bursts.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(req: any): boolean {
  const forwarded = req.headers?.["x-forwarded-for"];
  const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0]?.trim()
    || req.socket?.remoteAddress
    || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS;
}

// Hidden form field that real visitors never fill in.
export function isHoneypotFilled(body: any): boolean {
  return typeof body?.website === "string" && body.website.trim() !== "";
}

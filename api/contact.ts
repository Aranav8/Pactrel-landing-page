import { Resend } from "resend";
import { SENDER_EMAIL, IS_PRODUCTION, escapeHtml, normalizeEmail, isRateLimited, isHoneypotFilled } from "./_lib.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_MESSAGE_LENGTH = 2000;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};

  if (isHoneypotFilled(body)) {
    return res.status(200).json({ success: true });
  }

  if (isRateLimited(req)) {
    return res.status(429).json({ error: "Too many requests. Please try again in a few minutes." });
  }

  const email = normalizeEmail(body.email);
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!email) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (!message) {
    return res.status(400).json({ error: "Please enter a message." });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.` });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.WAITLIST_EMAIL_TO;

  if (!apiKey || !toEmail) {
    if (IS_PRODUCTION) {
      console.error("Contact form is not configured: RESEND_API_KEY or WAITLIST_EMAIL_TO is missing.");
      return res.status(500).json({ error: "We couldn't send your message. Please email hello@pactrel.com." });
    }
    console.warn("⚠️ Resend env vars missing. Simulating contact form (non-production only) for:", email);
    return res.status(200).json({ success: true, simulated: true });
  }

  try {
    // Only the admin inbox receives the message. No confirmation goes to the
    // typed address, so the form can't be used to send mail to arbitrary inboxes.
    const { error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: toEmail,
      subject: "New contact message from pactrel.com",
      html: `<p>You have a new message from the contact form.</p><p>From: <strong>${escapeHtml(email)}</strong></p><div style="background:#f4f4f4;padding:15px;margin-top:15px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(message)}</div>`,
      replyTo: email,
    });
    if (error) throw new Error(error.message);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Contact error:", error);
    return res.status(500).json({ error: "We couldn't send your message. Please try again or email hello@pactrel.com." });
  }
}

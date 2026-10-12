import { Resend } from "resend";
import { SENDER_EMAIL, IS_PRODUCTION, escapeHtml, normalizeEmail, isRateLimited, isHoneypotFilled } from "./_lib.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const PLANS = ["Free", "Starter", "Pro", "Agency"];
const BILLINGS = ["monthly", "yearly"];

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};

  // Bots that fill the hidden field get a quiet success and nothing is stored.
  if (isHoneypotFilled(body)) {
    return res.status(200).json({ success: true });
  }

  if (isRateLimited(req)) {
    return res.status(429).json({ error: "Too many requests. Please try again in a few minutes." });
  }

  const email = normalizeEmail(body.email);
  if (!email) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const plan = PLANS.includes(body.plan) ? body.plan : "Not specified";
  const billing = BILLINGS.includes(body.billing) ? body.billing : "";

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const toEmail = process.env.WAITLIST_EMAIL_TO;

  if (!apiKey || !audienceId || !toEmail) {
    if (IS_PRODUCTION) {
      console.error("Waitlist is not configured: RESEND_API_KEY, RESEND_AUDIENCE_ID or WAITLIST_EMAIL_TO is missing.");
      return res.status(500).json({ error: "We couldn't save your signup. Please try again later." });
    }
    console.warn("⚠️ Resend env vars missing. Simulating waitlist signup (non-production only) for:", email);
    return res.status(200).json({ success: true, simulated: true });
  }

  try {
    // 1. Store the signup. If this fails, the signup is not saved, so report an error.
    const { error: contactError } = await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false,
      properties: { plan, billing: billing || null },
    });
    if (contactError && !/already exists/i.test(contactError.message)) {
      throw new Error(contactError.message);
    }

    // 2. Notify the admin and confirm to the user. The signup is already stored,
    //    so failures here are logged rather than reported to the visitor.
    const [adminResult, userResult] = await Promise.all([
      resend.emails.send({
        from: SENDER_EMAIL,
        to: toEmail,
        subject: "New waitlist signup",
        html: `<p>You have a new waitlist signup!</p><p>Email: <strong>${escapeHtml(email)}</strong></p><p>Interested plan: <strong>${escapeHtml(plan)}${billing ? ` (${escapeHtml(billing)})` : ""}</strong></p>`,
      }),
      resend.emails.send({
        from: SENDER_EMAIL,
        to: email,
        subject: "You're on the Pactrel waitlist",
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; background-color: #0a0a0a; color: #FFF3F0; text-align: center;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #111; padding: 40px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
    <h1 style="margin-top: 0; color: #fff; font-size: 24px; font-weight: 600;">You're on the list!</h1>
    <p style="color: rgba(255,243,240,0.7); font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
      Thanks for joining the Pactrel waitlist. Pactrel gives your clients one link for the whole project, from proposal and signature to the final invoice.
    </p>
    <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <p style="margin: 0; color: #e5c1a5; font-size: 14px; font-weight: 500;">Waitlist Status</p>
      <p style="margin: 5px 0 0 0; color: #fff; font-size: 18px; font-weight: 600;">Confirmed</p>
    </div>
    <p style="color: rgba(255,243,240,0.7); font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
      We'll email you when your access is ready. In the meantime, if you have any questions, just reply to this email. To be removed from the waitlist, email hello@pactrel.com.
    </p>
    <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px;" />
    <p style="color: rgba(255,243,240,0.4); font-size: 12px; margin: 0;">
      © 2026 Pactrel
    </p>
  </div>
</div>
      `,
      }),
    ]);
    if (adminResult.error) console.error("Waitlist admin email failed:", adminResult.error);
    if (userResult.error) console.error("Waitlist confirmation email failed:", userResult.error);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Waitlist error:", error);
    return res.status(500).json({ error: "We couldn't save your signup. Please try again." });
  }
}

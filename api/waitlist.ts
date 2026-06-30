import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || "Pactrel <onboarding@resend.dev>";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, plan, billing } = req.body || {};
  
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.WAITLIST_EMAIL_TO;
    
    if (!apiKey || !toEmail) {
       console.warn("⚠️ WAITLIST_EMAIL_TO or RESEND_API_KEY missing. Simulating waitlist signup for:", email);
       await new Promise(resolve => setTimeout(resolve, 1000));
       return res.status(200).json({ success: true, simulated: true });
    }

    const adminEmail = resend.emails.send({
      from: SENDER_EMAIL,
      to: toEmail,
      subject: "🎉 New Waitlist Signup",
      html: `<p>You have a new waitlist signup!</p><p>Email: <strong>${email}</strong></p><p>Interested Plan: <strong>${plan || 'Not specified'} ${billing ? `(${billing})` : ''}</strong></p>`,
    });

    const userEmail = resend.emails.send({
      from: SENDER_EMAIL,
      to: email,
      subject: "You're on the Pactrel waitlist! 🎉",
      html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; background-color: #0a0a0a; color: #FFF3F0; text-align: center;">
  <div style="max-w: 600px; margin: 0 auto; background-color: #111; padding: 40px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
    <h1 style="margin-top: 0; color: #fff; font-size: 24px; font-weight: 600;">You're on the list! 🎉</h1>
    <p style="color: rgba(255,243,240,0.7); font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
      Thanks for joining the Pactrel waitlist. We're building the client portal for freelancers who don't have time to waste, and we're thrilled to have you with us.
    </p>
    <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <p style="margin: 0; color: #e5c1a5; font-size: 14px; font-weight: 500;">Waitlist Status</p>
      <p style="margin: 5px 0 0 0; color: #fff; font-size: 18px; font-weight: 600;">Confirmed</p>
    </div>
    <p style="color: rgba(255,243,240,0.7); font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
      We'll email you the moment we open up access. In the meantime, if you have any questions, just reply to this email!
    </p>
    <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px;" />
    <p style="color: rgba(255,243,240,0.4); font-size: 12px; margin: 0;">
      © 2026 Pactrel, Inc.
    </p>
  </div>
</div>
      `
    });

    const results = await Promise.allSettled([adminEmail, userEmail]);
    
    const adminResult = results[0];
    if (adminResult.status === 'rejected') {
      throw new Error(adminResult.reason?.message || "Failed to send admin notification");
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Waitlist error:", error);
    return res.status(500).json({ error: error.message || "Failed to process waitlist signup" });
  }
}

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cors());

  let resendClient: Resend | null = null;
  function getResend() {
    if (!resendClient) {
      const key = process.env.RESEND_API_KEY;
      if (!key) {
        throw new Error("RESEND_API_KEY environment variable is required");
      }
      resendClient = new Resend(key);
    }
    return resendClient;
  }

  const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || "Pactrel <onboarding@resend.dev>";

  // API Routes
  app.post("/api/waitlist", async (req, res) => {
    const { email, plan, billing } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const apiKey = process.env.RESEND_API_KEY;
      const toEmail = process.env.WAITLIST_EMAIL_TO;
      
      if (!apiKey || !toEmail) {
         console.warn("⚠️ WAITLIST_EMAIL_TO or RESEND_API_KEY missing. Simulating waitlist signup for:", email);
         await new Promise(resolve => setTimeout(resolve, 1000));
         return res.json({ success: true, simulated: true });
      }

      const resend = getResend();
      
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

      // Send both emails concurrently. We don't throw if userEmail fails (e.g. unverified domain on free tier).
      const results = await Promise.allSettled([adminEmail, userEmail]);
      
      const adminResult = results[0];
      if (adminResult.status === 'rejected') {
        throw new Error(adminResult.reason?.message || "Failed to send admin notification");
      }

      res.json({ success: true });
    } catch (error: any) {
      console.error("Waitlist error:", error);
      res.status(500).json({ error: error.message || "Failed to process waitlist signup" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const { email, message } = req.body;
    
    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required" });
    }

    try {
      const apiKey = process.env.RESEND_API_KEY;
      const toEmail = process.env.WAITLIST_EMAIL_TO;
      
      if (!apiKey || !toEmail) {
         console.warn("⚠️ WAITLIST_EMAIL_TO or RESEND_API_KEY missing. Simulating contact form for:", email);
         await new Promise(resolve => setTimeout(resolve, 1000));
         return res.json({ success: true, simulated: true });
      }

      const resend = getResend();
      
      const adminEmail = resend.emails.send({
        from: SENDER_EMAIL,
        to: toEmail,
        subject: "📬 New Contact Message from Pactrel",
        html: `<p>You have a new message from the contact form!</p><p>From: <strong>${email}</strong></p><div style="background:#f4f4f4;padding:15px;margin-top:15px;border-radius:8px;">${message.replace(/\n/g, '<br/>')}</div>`,
        replyTo: email,
      });

      const userEmail = resend.emails.send({
        from: SENDER_EMAIL,
        to: email,
        subject: "We received your message",
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; background-color: #0a0a0a; color: #FFF3F0; text-align: center;">
  <div style="max-w: 600px; margin: 0 auto; background-color: #111; padding: 40px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
    <h1 style="margin-top: 0; color: #fff; font-size: 24px; font-weight: 600;">Message Received</h1>
    <p style="color: rgba(255,243,240,0.7); font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
      Thanks for reaching out! We've received your message and will get back to you as soon as possible.
    </p>
    <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 24px; text-align: left;">
      <p style="margin: 0; color: #e5c1a5; font-size: 14px; font-weight: 500;">Your Message:</p>
      <p style="margin: 10px 0 0 0; color: #fff; font-size: 15px; font-weight: 400; line-height: 1.5; white-space: pre-wrap;">${message}</p>
    </div>
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
        throw new Error(adminResult.reason?.message || "Failed to send contact notification");
      }

      res.json({ success: true });
    } catch (error: any) {
      console.error("Contact error:", error);
      res.status(500).json({ error: error.message || "Failed to process contact submission" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

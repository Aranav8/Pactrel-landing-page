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

  // API Routes
  app.post("/api/waitlist", async (req, res) => {
    const { email, plan } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const apiKey = process.env.RESEND_API_KEY;
      const toEmail = process.env.WAITLIST_EMAIL_TO;
      
      if (!apiKey || !toEmail) {
         console.warn("⚠️ WAITLIST_EMAIL_TO or RESEND_API_KEY missing. Simulating email send for:", email, "Plan:", plan);
         // Simulate network delay
         await new Promise(resolve => setTimeout(resolve, 1000));
         return res.json({ success: true, simulated: true });
      }

      const resend = getResend();
      await resend.emails.send({
        from: "Waitlist <onboarding@resend.dev>", // This is Resend's default testing sender
        to: toEmail,
        subject: "New Waitlist Signup",
        html: `<p>You have a new waitlist signup!</p><p>Email: <strong>${email}</strong></p><p>Interested Plan: <strong>${plan || 'Not specified'}</strong></p>`,
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("Waitlist error:", error);
      res.status(500).json({ error: error.message || "Failed to process waitlist signup" });
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

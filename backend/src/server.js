import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import ContactMessage from "./models/ContactMessage.js";
import NewsletterSubscriber from "./models/NewsletterSubscriber.js";
import { buildPricingEmail } from "./utils/pricingEmailTemplate.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5050;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const MONGODB_URI = process.env.MONGODB_URI;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in backend/.env");
  process.exit(1);
}

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ message: "your backend is up" });
});

app.get("/", (_req, res) => {
  res.status(200).send("your backend is up");
});

app.post("/api/contact", async (req, res, next) => {
  const { fullName, email, subject, message } = req.body ?? {};

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  if (!emailRegex.test(String(email).trim())) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  try {
    const createdMessage = await ContactMessage.create({
      fullName: String(fullName).trim(),
      email: String(email).trim(),
      subject: String(subject).trim(),
      message: String(message).trim(),
    });

    return res.status(201).json({
      message: "Message sent successfully.",
      id: createdMessage._id,
    });
  } catch (error) {
    return next(error);
  }
});

const mailTransporter =
  SMTP_HOST && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })
    : null;

app.post("/api/newsletter/subscribe", async (req, res, next) => {
  const { email } = req.body ?? {};
  const normalizedEmail = String(email ?? "").trim().toLowerCase();

  if (!normalizedEmail) {
    return res.status(400).json({ message: "Email is required." });
  }

  if (!emailRegex.test(normalizedEmail)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  try {
    const subscriber = await NewsletterSubscriber.findOneAndUpdate(
      { email: normalizedEmail },
      {
        $set: {
          email: normalizedEmail,
          lastSubscribedAt: new Date(),
        },
        $inc: {
          subscriptionCount: 1,
        },
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );

    if (!mailTransporter || !MAIL_FROM) {
      return res.status(503).json({
        message: "Email service is not configured on server.",
      });
    }

    const pricingEmail = buildPricingEmail();

    await mailTransporter.sendMail({
      from: MAIL_FROM,
      to: normalizedEmail,
      subject: pricingEmail.subject,
      text: pricingEmail.text,
      html: pricingEmail.html,
    });

    subscriber.lastPricingEmailSentAt = new Date();
    await subscriber.save();

    return res.status(200).json({
      message: "Pricing details sent to your email.",
    });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error("Request failed:", error);
  res.status(500).json({ message: "Failed to process request." });
});

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`your backend is up on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start backend:", error);
    process.exit(1);
  }
}

startServer();

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_FROM_EMAIL",
] as const;

const getMissingEnvVars = () =>
  requiredEnvVars.filter((key) => {
    const value = process.env[key];
    return !value || value.trim().length === 0;
  });

export async function POST(request: Request) {
  const missingEnvVars = getMissingEnvVars();
  if (missingEnvVars.length > 0) {
    console.error("Contact form is missing SMTP configuration:", missingEnvVars);

    return NextResponse.json(
      { error: "Contact form is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message ?? "Please check the form fields and try again.",
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, message } = parsed.data;
    const smtpPort = Number(process.env.SMTP_PORT);

    if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
      console.error("Invalid SMTP_PORT value:", process.env.SMTP_PORT);

      return NextResponse.json(
        { error: "Contact form is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "rajeshsawant98@gmail.com";
    const safePhone = phone?.trim() ? phone.trim() : "Not provided";

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${safePhone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

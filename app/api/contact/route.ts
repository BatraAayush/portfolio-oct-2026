import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const smtpPass =
      process.env.SMTP_PASS ||
      process.env.GMAIL_APP_PASSWORD ||
      process.env.EMAIL_PASS;
    const smtpUser = process.env.SMTP_USER || "aayushbatra33@gmail.com";

    // Method 1: If SMTP / Gmail App Password is configured, use Nodemailer directly
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`,
        to: "aayushbatra33@gmail.com",
        replyTo: email,
        subject: subject
          ? `[Portfolio Contact] ${subject} - from ${name}`
          : `[Portfolio Contact] New Message from ${name}`,
        text: `From: ${name} (${email})\nSubject: ${subject || "General Inquiry"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #111;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
            <div style="margin-top: 16px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap; margin-top: 8px;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #6b7280; margin-top: 24px;">Sent directly via Aayush Batra's Portfolio Website</p>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message:
          "Thank you for reaching out! Your message has been sent successfully. I will get back to you shortly.",
      });
    }

    // Method 2: Zero-config relay via FormSubmit
    const origin = req.headers.get("origin") || "http://localhost:3000";
    const referer = req.headers.get("referer") || "http://localhost:3000/";

    const formSubmitRes = await fetch(
      "https://formsubmit.co/ajax/aayushbatra33@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: referer,
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject
            ? `[Portfolio Contact] ${subject} - from ${name}`
            : `[Portfolio Contact] New Inquiry from ${name}`,
          message,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    const result = await formSubmitRes.json();

    if (formSubmitRes.ok && result.success !== "false") {
      return NextResponse.json({
        success: true,
        message:
          "Thank you for reaching out! Your message has been sent successfully. I will get back to you shortly.",
      });
    }

    // If FormSubmit requires one-time activation
    if (result.message && result.message.includes("Activation")) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          "FormSubmit sent a one-time activation email to aayushbatra33@gmail.com. Please check your Spam/Junk/Updates folder and click 'Activate Form' to begin receiving emails.",
      });
    }

    return NextResponse.json(
      {
        error:
          result.message ||
          "Could not send email automatically. Please email aayushbatra33@gmail.com directly.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      {
        error:
          "Internal error delivering message. Please email aayushbatra33@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}

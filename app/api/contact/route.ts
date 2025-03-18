import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const username = process.env.REACT_APP_EMAIL_FROM;
  const password = process.env.REACT_APP_EMAIL_PASSWORD;
  const recipientEmail = process.env.REACT_APP_EMAIL_TO;

  try {
    const formData = await request.json();
    const { name, email, message } = formData;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    });

    const mail = await transporter.sendMail({
      from: username,
      to: recipientEmail,
      replyTo: email,
      subject: `Web Moose Contact Form Submission`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
} 
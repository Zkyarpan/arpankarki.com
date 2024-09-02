import { connectDB } from "@/config/dbConfig";
import ContactUs from "@/models/contactForm";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

connectDB();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, message } = reqBody;

    if (!email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const newMessage = new ContactUs({ email, message });
    await newMessage.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for reaching out to Arpan",
      html: `
        <p>Dear ${email} 👋,</p>
    <p>Thank you for reaching out through my website! I’m thrilled to connect and can’t wait to work together.</p>
    <p>Until then, take care and keep shining!</p>
    <p>With gratitude,<br>Arpan Karki</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New message from portfolio contact",
      html: `
        <p>You have received a new message from:</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json({
      message: "Submitted successfully! It's time to celebrate",
      success: true,
    });
  } catch (error: any) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

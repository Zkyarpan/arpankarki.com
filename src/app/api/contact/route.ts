import { connectDB } from "@/config/dbConfig";
import ContactUs from "@/models/contactForm";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

connectDB();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, message } = reqBody;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const existingMessage = await ContactUs.findOne({ email });
    if (existingMessage) {
      return NextResponse.json(
        {
          message:
            "You have already sent a message. Please wait for a response.",
        },
        { status: 400 }
      );
    }

    const newMessage = new ContactUs({ name, email, message });
    await newMessage.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your message",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out! We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Your Company</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <p>You have received a new message from:</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json({
      message: "Your message has been received. Thank you!",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

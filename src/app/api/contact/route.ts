"use server";

import { connectDB } from "@/config/dbConfig";
import ContactUs from "@/models/contactForm";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ message: "Email and message are required." }, { status: 400 });
    }

    // Save to database first (fast)
    const newMessage = new ContactUs({ email, message });
    await newMessage.save();
    console.log("Message saved:", newMessage._id);

    const emailUser = process.env.EMAIL_USER || "";
    const emailPass = process.env.EMAIL_APP_PASSWORD?.replace(/\s+/g, "") || "";

    let emailSent = false;

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: emailUser, pass: emailPass },
          tls: { rejectUnauthorized: false },
        });

        // Removed verify() → it's slow and often unnecessary
        // Send only ONE email to yourself (most important)
        await transporter.sendMail({
          from: `"Arpan Karki" <${emailUser}>`,
          to: emailUser,
          replyTo: email,
          subject: "New Contact Form Submission",
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#f5f5f5;padding:10px;border-radius:5px;">${message}</p>
            <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
          `,
        });

        // Optional: Send thank you to user (comment out if you want max speed)
        // await transporter.sendMail({ ... thank you email ... });

        emailSent = true;
        console.log("Email sent successfully");
      } catch (emailError: any) {
        console.error("Email error:", emailError.message);
      }
    }

    return NextResponse.json({
      message: emailSent 
        ? "Your message has been sent successfully!" 
        : "Message saved. I'll reply soon.",
      success: true,
    });

  } catch (error: any) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
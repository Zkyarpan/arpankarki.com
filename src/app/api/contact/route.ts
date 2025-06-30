"use server";

import { connectDB } from "@/config/dbConfig";
import ContactUs from "@/models/contactForm";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // ✅ Ensure database connection is awaited
    await connectDB();

    // Parse request body
    const reqBody = await request.json();
    const { email, message } = reqBody;

    if (!email || !message) {
      return NextResponse.json(
        { message: "Email and message are required." },
        { status: 400 }
      );
    }

    // Save message to DB
    try {
      const newMessage = new ContactUs({ email, message });
      await newMessage.save();
      console.log("Message saved to database:", newMessage._id);
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { message: "Failed to save your message. Please try again." },
        { status: 500 }
      );
    }

    const emailUser = process.env.EMAIL_USER || "";
    const emailPass = process.env.EMAIL_APP_PASSWORD?.replace(/\s+/g, "") || "";

    if (!emailUser || !emailPass) {
      console.error("Email credentials not properly configured");
      return NextResponse.json({
        message:
          "Your message was saved successfully, but email could not be sent.",
        success: true,
      });
    }

    let emailSent = false;

    // Optional: implement Resend if desired here...

    // Fallback to nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
        debug: true,
      });

      await transporter.verify();
      console.log("SMTP verified.");

      // Email to user
      await transporter.sendMail({
        from: `"Arpan Karki" <${emailUser}>`,
        to: email,
        subject: "Thank you for contacting me",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>Thank You for Reaching Out!</h2>
            <p>I've received your message and will get back to you as soon as possible.</p>
            <p>Best regards,<br>Arpan Karki</p>
          </div>
        `,
      });

      // Email to self
      await transporter.sendMail({
        from: `"Contact Form" <${emailUser}>`,
        to: emailUser,
        subject: "New Contact Form Submission",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
            <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
          </div>
        `,
      });

      emailSent = true;
    } catch (emailError: any) {
      console.error("Email sending error:", emailError);
      if (emailError.code === "EAUTH") {
        console.error("Invalid Gmail credentials. Check app password.");
      }
    }

    return NextResponse.json({
      message: emailSent
        ? "Your message has been sent successfully!"
        : "Message saved, but email sending failed.",
      success: true,
    });
  } catch (error: any) {
    console.error("Submission error:", error);
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

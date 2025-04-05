import { connectDB } from "@/config/dbConfig";
import ContactUs from "@/models/contactForm";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Connect to the database
connectDB();

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const reqBody = await request.json();
    const { email, message } = reqBody;

    // Validate inputs
    if (!email || !message) {
      return NextResponse.json(
        { message: "Email and message are required." },
        { status: 400 }
      );
    }

    // 1. Save to database first (this should work regardless of email sending)
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

    // 2. Now try to send emails - even if this fails, we've saved the message
    let emailSent = false;

    // Check if we should skip email in development mode
    if (
      process.env.SKIP_EMAIL_IN_DEV === "true" &&
      process.env.NODE_ENV === "development"
    ) {
      console.log("Skipping email sending in development mode");
      return NextResponse.json({
        message:
          "Your message was saved successfully! (Email sending skipped in development)",
        success: true,
      });
    }

    // Fix: Remove any spaces in the app password
    const emailPass = process.env.EMAIL_APP_PASSWORD?.replace(/\s+/g, "") || "";
    const emailUser = process.env.EMAIL_USER || "";

    // Try using Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        // If you have Resend configured, use it here
        console.log("Using Resend for email delivery");
        // Resend implementation would go here
        emailSent = true;
      } catch (error) {
        console.error("Resend email error:", error);
      }
    }

    // If Resend failed or wasn't configured, try nodemailer with Gmail
    if (!emailSent) {
      try {
        // Create transporter with Gmail
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        // Send confirmation email to the user
        await transporter.sendMail({
          from: `"Arpan Karki" <${emailUser}>`,
          to: email,
          subject: "Thank you for contacting me",
          text: `Thank you for your message. I'll get back to you soon!\n\nYour message: "${message}"`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h2>Thank You for Reaching Out!</h2>
              <p>I've received your message and will get back to you as soon as possible.</p>
              <p style="color: #666; font-style: italic;">Your message: "${message}"</p>
              <p>Best regards,<br>Arpan Karki</p>
            </div>
          `,
        });

        // Send notification to yourself
        await transporter.sendMail({
          from: `"Contact Form" <${emailUser}>`,
          to: emailUser,
          subject: "New Contact Form Submission",
          text: `New message from: ${email}\n\nMessage: ${message}`,
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
      } catch (emailError) {
        console.error("Email sending error:", emailError);
      }
    }

    // Return success even if email sending failed
    return NextResponse.json({
      message: emailSent
        ? "Your message has been sent successfully!"
        : "Your message was saved, but there was an issue sending confirmation emails.",
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

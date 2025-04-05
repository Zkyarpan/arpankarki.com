import mongoose from "mongoose";

// Define schema
const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    isResponded: {
      type: Boolean,
      default: false, // Track if you've responded to this message
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create or use existing model
const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", contactSchema);

export default ContactUs;

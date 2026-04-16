"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok || data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: data.message || "I'll get back to you soon.",
          variant: "default",
          duration: 5000,
        });

        resetForm();
      } else {
        toast({
          title: "Submission Failed",
          description: data.message || "Please try again later.",
          variant: "destructive",
          duration: 4000,
        });
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description:
          "Failed to connect. Please check your internet and try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Let's Build Something Amazing
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? I'm just one message away.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-2xl">
          <Formik
            initialValues={{ email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid }) => (
              <Form className="space-y-8">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    disabled={isLoading}
                    className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-all disabled:opacity-70"
                    placeholder="you@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-2"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <Field
                    name="message"
                    as="textarea"
                    rows={7}
                    disabled={isLoading}
                    className="w-full bg-gray-800 border border-gray-700 rounded-3xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 resize-none transition-all disabled:opacity-70"
                    placeholder="Tell me about your project, idea, or how I can help..."
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-2"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !isValid}
                  className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-600 hover:via-teal-600 hover:to-sky-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          I usually reply within 24 hours
        </p>
      </div>
    </section>
  );
};

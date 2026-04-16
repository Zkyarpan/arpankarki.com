"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(5, "Message too short")
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
          description: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {data.message}
            </div>
          ),
        });
        resetForm();
      } else {
        toast({
          variant: "destructive",
          description: (
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {data.message || "Failed to send message"}
            </div>
          ),
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Network error. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Let's Build Something Amazing
        </h2>
        <p className="text-gray-400">
          I'll get back to you as soon as possible
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
        <Formik
          initialValues={{ email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="your@email.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <Field
                  name="message"
                  as="textarea"
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 resize-none"
                  placeholder="Tell me about your project..."
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-medium py-3.5 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

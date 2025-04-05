"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Send,
  MessageSquare,
  Loader2,
  X,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Define types for form values and API response
interface ContactFormValues {
  email: string;
  message: string;
}

interface ContactApiResponse {
  message: string;
  success?: boolean;
  error?: string;
}

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(5, "Message must be at least 5 characters"),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result: ContactApiResponse = await response.json();

      if (response.ok) {
        toast({
          description: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>
                {result.message || "Your message has been sent successfully!"}
              </span>
            </div>
          ),
          duration: 4000,
        });
        resetForm();
        setIsModalOpen(false);
      } else {
        toast({
          variant: "destructive",
          description: (
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>
                {result.message || "Something went wrong. Please try again."}
              </span>
            </div>
          ),
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        variant: "destructive",
        description: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>An error occurred. Please try again.</span>
          </div>
        ),
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="py-10 md:py-16 lg:py-20 overflow-hidden relative"
    >
      {/* Background accents for visual interest */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-r from-emerald-300/90 to-sky-400/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl shadow-sky-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-gray-900 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Let&apos;s create something <br className="hidden md:block" />{" "}
                amazing together
              </h2>
              <p className="mt-3 text-gray-800/90 max-w-md">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>

              {/* Feature points with icons - visible on all devices */}
              <div className="mt-4 md:mt-6 flex flex-col gap-2 md:gap-3 text-sm">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="bg-white/20 p-1.5 rounded-full">
                    <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-gray-900" />
                  </div>
                  <span className="text-xs md:text-sm">
                    Professional web development
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="bg-white/20 p-1.5 rounded-full">
                    <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-gray-900" />
                  </div>
                  <span className="text-xs md:text-sm">
                    Responsive modern designs
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="bg-white/20 p-1.5 rounded-full">
                    <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-gray-900" />
                  </div>
                  <span className="text-xs md:text-sm">
                    Quick response, fast delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto mt-6 md:mt-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group w-full md:w-auto py-3 px-5 md:py-3.5 md:px-6 flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-md"
              >
                <span className="font-medium">Contact Me</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90%] sm:max-w-md p-0 rounded-xl overflow-hidden bg-gray-950 border border-gray-800/50 shadow-xl mx-auto">
          {/* Header with simplified gradient */}
          <div className="bg-emerald-400 h-14 relative flex items-end">
            {/* Overlapping icon card */}
            <div className="absolute -bottom-8 left-4 sm:left-6 bg-gray-900 p-3 sm:p-4 rounded-xl border-4 border-gray-950 shadow-lg">
              <div className="bg-emerald-500 h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 pt-12 sm:pt-14">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Get In Touch
              </DialogTitle>
              <DialogDescription className="text-gray-400 mt-1.5 text-sm">
                Fill out this form and I&apos;ll get back to you as soon as
                possible.
              </DialogDescription>
            </DialogHeader>

            <Formik
              initialValues={{ email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-white font-medium text-sm flex items-center gap-1.5"
                    >
                      <Mail className="h-3.5 w-3.5 text-emerald-400" />
                      Email
                    </Label>
                    <div className="mt-1.5 relative">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@example.com"
                        className={`w-full bg-gray-800/50 text-white text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg placeholder-gray-500 border ${
                          errors.email && touched.email
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        } outline-none transition-all`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-white font-medium text-sm flex items-center gap-1.5"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                      Message
                    </Label>
                    <div className="mt-1.5 relative">
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={4}
                        className={`w-full bg-gray-800/50 text-white text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg placeholder-gray-500 border ${
                          errors.message && touched.message
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        } outline-none transition-all resize-none`}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 sm:py-3 rounded-lg font-medium mt-5 sm:mt-6 shadow-md disabled:opacity-70 transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

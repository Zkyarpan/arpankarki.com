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
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Phone,
  Calendar,
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

      // Check for success - using both status code and success flag
      // This will handle both normal success and "email skipped" success cases
      if (response.ok || result.success) {
        toast({
          description: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>{result.message}</span>
            </div>
          ),
          duration: 4000,
        });

        // Always reset the form on success
        resetForm();

        // Close modal if it's open
        setIsModalOpen(false);
      } else {
        // This is for explicit error cases
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
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:py-32 mt-16 relative z-10 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 z-[-1]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 pb-2">
            Let's Build Something Amazing
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm here to help you
            create exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Contact Info */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 h-full">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Why Work With Me
            </h3>

            <ul className="space-y-5">
              <li className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Expert Development
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Modern web applications built with Next.js, React, and other
                    cutting-edge technologies.
                  </p>
                </div>
              </li>

              <li className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                  <Phone className="h-5 w-5 text-sky-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Responsive Design
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Beautifully crafted interfaces that work perfectly on any
                    device, from mobile to desktop.
                  </p>
                </div>
              </li>

              <li className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Calendar className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Quick Turnaround
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Fast and efficient development process with clear
                    communication throughout.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 lg:mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/20"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right column - Contact Form Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="h-2 bg-gradient-to-r from-emerald-500 to-sky-500"></div>

            <div className="p-6 md:p-8 relative">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Send a Message
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    I'll get back to you as soon as possible
                  </p>
                </div>
              </div>

              <Formik
                initialValues={{ email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-5">
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-white text-sm font-medium flex items-center space-x-2"
                      >
                        <Mail className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Email</span>
                      </Label>
                      <div className="mt-1.5">
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className={`w-full bg-gray-800/50 text-white text-sm py-3 px-4 rounded-lg placeholder:text-gray-500 border ${
                            errors.email && touched.email
                              ? "border-red-500/50 focus:border-red-500 focus:ring focus:ring-red-500/20"
                              : "border-gray-700/50 focus:border-emerald-500 focus:ring focus:ring-emerald-500/20"
                          } outline-none transition-all`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-xs mt-1.5 flex items-center"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-white text-sm font-medium flex items-center space-x-2"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Message</span>
                      </Label>
                      <div className="mt-1.5">
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          className={`w-full bg-gray-800/50 text-white text-sm py-3 px-4 rounded-lg placeholder:text-gray-500 border ${
                            errors.message && touched.message
                              ? "border-red-500/50 focus:border-red-500 focus:ring focus:ring-red-500/20"
                              : "border-gray-700/50 focus:border-emerald-500 focus:ring focus:ring-emerald-500/20"
                          } outline-none transition-all resize-none`}
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500 text-xs mt-1.5 flex items-center"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all disabled:opacity-70"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
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
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md p-0 rounded-xl overflow-hidden bg-gray-950 border border-gray-800 shadow-xl mx-auto">
          {/* Header with gradient */}
          <div className="h-2 bg-gradient-to-r from-emerald-500 to-sky-500"></div>

          <div className="p-6">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-2">
                  <MessageSquare className="h-4 w-4 text-emerald-500" />
                </div>
                Get In Touch
              </DialogTitle>
              <DialogDescription className="text-gray-400 mt-1.5 text-sm">
                Fill out this form and I'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>

            <Formik
              initialValues={{ email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-4">
                  <div>
                    <Label
                      htmlFor="modal-email"
                      className="text-white font-medium text-sm flex items-center gap-2"
                    >
                      <Mail className="h-3.5 w-3.5 text-emerald-500" />
                      Email
                    </Label>
                    <div className="mt-1.5">
                      <Field
                        id="modal-email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className={`w-full bg-gray-800/50 text-white text-sm py-3 px-4 rounded-lg placeholder:text-gray-500 border ${
                          errors.email && touched.email
                            ? "border-red-500/50 focus:border-red-500 focus:ring focus:ring-red-500/20"
                            : "border-gray-700/50 focus:border-emerald-500 focus:ring focus:ring-emerald-500/20"
                        } outline-none transition-all`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs mt-1.5 flex items-center"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="modal-message"
                      className="text-white font-medium text-sm flex items-center gap-2"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                      Message
                    </Label>
                    <div className="mt-1.5">
                      <Field
                        as="textarea"
                        id="modal-message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={4}
                        className={`w-full bg-gray-800/50 text-white text-sm py-3 px-4 rounded-lg placeholder:text-gray-500 border ${
                          errors.message && touched.message
                            ? "border-red-500/50 focus:border-red-500 focus:ring focus:ring-red-500/20"
                            : "border-gray-700/50 focus:border-emerald-500 focus:ring focus:ring-emerald-500/20"
                        } outline-none transition-all resize-none`}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-xs mt-1.5 flex items-center"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white py-3 rounded-lg font-medium mt-4 shadow-lg hover:shadow-emerald-500/20 transition-all disabled:opacity-70"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
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
    </section>
  );
};

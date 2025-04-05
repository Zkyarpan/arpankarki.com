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
import { Mail, Send, MessageCircle, Loader2, X } from "lucide-react";

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
          description:
            result.message || "Your message has been sent successfully!",
          duration: 3000,
        });
        resetForm();
        setIsModalOpen(false);
      } else {
        toast({
          variant: "destructive",
          description:
            result.message || "Something went wrong. Please try again.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        variant: "destructive",
        description: "An error occurred. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="py-8 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-900 text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-medium">
                Let&apos;s create something amazing together
              </h2>
              <p className="mt-2 text-gray-800">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md p-0 rounded-xl overflow-hidden bg-gray-950 border-0">
          {/* Modal header gradient */}
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 h-14 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          <div className="p-5">
            <DialogHeader>
              <DialogTitle className="text-teal-400 text-xl">
                Contact Me
              </DialogTitle>
              <DialogDescription className="text-gray-400 text-sm">
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
                <Form className="mt-4 space-y-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-teal-400 mb-1 block text-sm"
                    >
                      Email
                    </Label>
                    <div className="relative">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@abc.com"
                        className={`w-full bg-gray-900 text-white pl-9 p-2.5 rounded-lg placeholder-gray-500 border ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-700 focus:border-teal-400"
                        }`}
                      />
                      <Mail
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                        size={16}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-teal-400 mb-1 block text-sm"
                    >
                      Message
                    </Label>
                    <div className="relative">
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={4}
                        className={`w-full bg-gray-900 text-white p-2.5 pl-9 rounded-lg placeholder-gray-500 border ${
                          errors.message && touched.message
                            ? "border-red-500"
                            : "border-gray-700 focus:border-teal-400"
                        } resize-none`}
                      />
                      <MessageCircle
                        className="absolute left-3 top-6 text-gray-500"
                        size={16}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-300 to-sky-400 hover:from-emerald-400 hover:to-sky-500 text-gray-900 p-2.5 rounded-lg font-medium mt-4 disabled:opacity-70"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit</span>
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

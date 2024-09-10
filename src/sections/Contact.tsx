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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, MessageCircle, Loader2 } from "lucide-react";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          description: result.message || "Your message has been sent.",
          duration: 3000,
        });
        resetForm();
        setIsModalOpen(false);
      } else {
        toast({
          description:
            result.message || "Something went wrong. Please try again.",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        description: "An error occurred. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-6 md:px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="button-82-pushable"
                role="button"
              >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front font-serif">Contact Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[350px] md:max-w-[450px] lg:max-w-[400px] bg-gray-950 border-teal-400/30 p-4 sm:p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="text-teal-400 text-base sm:text-lg md:text-xl">
              Contact Me
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm md:text-base">
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
              <Form className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="email" className="text-teal-400 text-sm">
                    Email
                  </Label>
                  <div className="relative">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndoe@abc.com"
                      className={`bg-[#1e293b] text-white text-sm sm:text-base md:text-lg placeholder-gray-500 border p-2 pl-10 w-full resize-none focus:outline-none focus:ring-0 rounded-lg ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-600"
                      }`}
                    />
                    <Mail
                      className="absolute left-3 top-3.5 text-center text-gray-400"
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
                  <Label htmlFor="message" className="text-teal-400 text-sm">
                    Message
                  </Label>
                  <div className="relative">
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="I'd love a compliment from you."
                      className={`bg-[#1e293b] text-white text-sm sm:text-base md:text-lg placeholder-gray-500 border p-2 pl-10 w-full h-28 resize-none focus:outline-none focus:ring-0 rounded-lg ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : "border-gray-600"
                      }`}
                    />
                    <MessageCircle
                      className="absolute left-3 lg:top-6 top-5 transform -translate-y-1/2 text-gray-400"
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
                  className="w-full bg-gradient-to-r from-emerald-300 to-sky-400 hover:from-sky-400 hover:to-emerald-300 text-gray-900 p-2 rounded-full flex items-center justify-center font-serif disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2" size={16} />
                  )}
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

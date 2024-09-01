"use client";

import React, { useState } from "react";
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
import { User, Mail, Send, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setName("");
    setEmail("");
    setMessage("");
    toast({
      description: "Your message has been sent.",
      duration: 3000,
    });
  };

  return (
    <div id="contact" className="py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-6 md:px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url('/api/placeholder/400/300')`,
            }}
          ></div>
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
        <DialogContent className="sm:max-w-[305px] sm:-10 bg-[#0b1120] text-white p-4 sm:p-6 md:max-w-[370px] lg:max-w-[405px]">
          <DialogHeader>
            <DialogTitle className="text-teal-400 text-lg md:text-xl">
              Contact Me
            </DialogTitle>
            <DialogDescription className="text-sm md:text-base">
              Fill out this form and I&apos;ll get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="text-teal-400 text-sm">
                Name
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  value={name}
                  placeholder="Arpan Karki"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#1e293b] text-white border border-gray-600 p-2 pl-10 font-serif"
                  required
                />
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-teal-400 text-sm">
                Email
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Arpankarki23@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1e293b] text-white border border-gray-600 p-2 pl-10 font-serif"
                  required
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-teal-400 ">
                Message
              </Label>
              <div className="relative">
                <textarea
                  id="message"
                  value={message}
                  placeholder="Your message here..."
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#1e293b] text-white text-sm placeholder-gray-500 border border-gray-600 p-2 pl-10 font-serif w-full h-28 resize-none focus:outline-none focus:ring-0 rounded-lg"
                  required
                />
                <MessageCircle
                  className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-400 text-black hover:bg-teal-500 p-2 rounded-full flex items-center justify-center font-serif"
            >
              <Send className="mr-2" size={16} />
              Submit
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

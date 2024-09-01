"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsModalOpen(false);
    setName("");
    setEmail("");
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
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
                className="bg-transparent inline-flex items-center px-4 md:px-6 h-10 md:h-12 rounded-xl gap-2 w-full md:w-auto"
              >
                <button className="button-82-pushable" role="button">
                  <span className="button-82-shadow"></span>
                  <span className="button-82-edge"></span>
                  <span className="button-82-front font-serif">
                    👋 Let&apos;s Connect
                  </span>
                </button>
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
              <Label htmlFor="name" className="font-bold text-teal-400 text-sm">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                placeholder="Arpan Karki"
                onChange={(e) => setName(e.target.value)}
                className="bg-[#1e293b] text-white border border-gray-600 p-2"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="font-bold text-teal-400 text-sm"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="Arpankarki23@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1e293b] text-white border border-gray-600 p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full font-bold bg-teal-400 text-black hover:bg-teal-500 p-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

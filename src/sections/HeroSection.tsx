"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import mainImage from "@/assets/images/main.jpg";
import { FlipWords } from "@/components/ui/flip-words";

export function HeroSection() {
  const flipWords = [
    "creative",
    "scalable",
    "reliable",
    "portable",
    "securely",
    "flexible",
    "powerful",
    "accurate",
    "adaptive",
    "reactive",
    "dynamic",
    "refined",
    "logical",
    "optimal",
    "minimal",
    "compact",
    "elegant",
    "intense",
    "agilely",
    "modular",
    "extreme",
    "robustly",
    "precise",
    "crafted",
    "focused",
    "cleaner",
    "lighter",
    "smarter",
    "faster",
    "updated",
  ];

  return (
    <div id="home" className="relative w-full min-h-screen mt-10">
      <AnimatedGridPattern
        numSquares={60}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full",
          "md:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "sm:[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] -mt-20",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
        <Image
          src={mainImage}
          className="rounded-full border-4 border-gray-800 shadow-lg w-[150px] h-[150px] object-cover"
          alt="ArpanHeroSection"
          priority
          placeholder="blur"
        />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
          <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large text-center justify-center"></div>
          </div>
          <div className="text-sm font-serif text-white/80">
            Let&apos;s work&nbsp;
            <span className="inline-block text-green-500">
              <FlipWords words={flipWords} />
            </span>
            together
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-white">
            👋🏼 Hey, I&apos;m Arpan
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Virtual greetings to you stranger, This is my personal space on the
            Internets.
          </p>
        </div>
      </div>
    </div>
  );
}

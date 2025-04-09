"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import mainImage from "@/assets/images/main.jpg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "../components/HeroOrbit";
import {
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Terminal,
  Zap,
  Code,
} from "lucide-react";

// Skill tag component for the floating skills
const SkillTag = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={`inline-flex px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-sm text-white shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Typing effect for the roles/titles
  const roles = ["Developer", "Designer", "Problem Solver"];
  const controls = useAnimation();
  const [displayText, setDisplayText] = React.useState("");

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        for (const role of roles) {
          // Type each letter
          for (let i = 0; i <= role.length; i++) {
            setDisplayText(role.substring(0, i));
            await controls.start({
              opacity: 1,
              transition: { duration: 0.1 },
            });
          }
          // Pause at full word
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Delete each letter
          for (let i = role.length; i >= 0; i--) {
            setDisplayText(role.substring(0, i));
            await controls.start({
              opacity: 1,
              transition: { duration: 0.05 },
            });
          }
          // Short pause between words
          await new Promise((resolve) => setTimeout(resolve, 400));
        }
      }
    };

    sequence();
  }, [controls]);

  return (
    <motion.section
      id="home"
      ref={containerRef}
      className="min-h-screen pt-16 pb-32 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-950 -z-20"></div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950 -z-10"></div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] -z-10"></div>

      {/* Animated orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-9 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="36s">
          <div className="size-3 rounded-full bg-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-4 rounded-full bg-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={90} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-45}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300/40" />
        </HeroOrbit>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-32">
          {/* Profile Image with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur opacity-70"></div>
            <div className="relative rounded-full border-4 border-gray-800 overflow-hidden w-32 h-32 md:w-40 md:h-40">
              <Image
                src={mainImage}
                className="object-cover"
                alt="Arpan Karki - Developer"
                priority
                placeholder="blur"
                fill
              />
            </div>

            {/* Animated pulse circles */}
            <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 animate-ping-slow"></div>
          </motion.div>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 bg-gray-900/80 backdrop-blur-sm border border-gray-800 px-4 py-2 rounded-full inline-flex items-center gap-3 shadow-lg"
          >
            <div className="relative">
              <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-medium text-white">
              Let's work together
            </span>
          </motion.div>

          {/* Main heading with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 font-serif text-4xl md:text-6xl font-bold text-center tracking-tight text-white"
          >
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
              Arpan
            </span>
          </motion.h1>

          {/* Animated typing text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 flex justify-center items-center h-8"
          >
            <span className="text-gray-400 text-xl mr-2">I'm a</span>
            <motion.div custom={0}>{displayText}</motion.div>
            {/* Controlled by useAnimation hook */}
            <motion.span
              className="w-0.5 h-6 bg-emerald-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 text-center text-gray-400 max-w-xl mx-auto text-lg"
          >
            Virtual greetings to you stranger, this is my personal space on the
            internet. I create exceptional digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 bg-gray-900/50 text-white font-medium hover:bg-gray-800/50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-8 flex justify-center gap-4"
          >
            {[
              {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com",
                label: "GitHub",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: <Twitter className="w-5 h-5" />,
                href: "https://twitter.com",
                label: "Twitter",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80 border border-gray-700/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Floating skill tags */}
          <div className="mt-20 relative w-full max-w-4xl mx-auto hidden md:block">
            <SkillTag className="absolute top-0 left-[10%]" delay={1.6}>
              <Terminal className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              NextJS
            </SkillTag>
            <SkillTag className="absolute top-12 left-[30%]" delay={1.7}>
              <Zap className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
              React
            </SkillTag>
            <SkillTag className="absolute top-0 left-[60%]" delay={1.8}>
              <Code className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              TypeScript
            </SkillTag>
            <SkillTag className="absolute top-16 left-[80%]" delay={1.9}>
              <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Tailwind CSS
            </SkillTag>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-gray-500 text-sm mb-2">Scroll Down</span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import { IconCloudDemo } from "@/components/InteractiveIconCloud";
import { AnimatedBeamMultipleOutputDemo } from "./Beam";
import { Book, Box, Code, Sparkles, Shapes, ArrowRight } from "lucide-react";

const hobbies = [
  { title: "Traveling", emoji: "✈️", color: "from-sky-400 to-blue-500" },
  { title: "Painting", emoji: "🎨", color: "from-purple-400 to-pink-500" },
  { title: "Hiking", emoji: "🥾", color: "from-green-400 to-emerald-500" },
  { title: "Photography", emoji: "📸", color: "from-amber-400 to-orange-500" },
  { title: "Music", emoji: "🎶", color: "from-rose-400 to-red-500" },
  { title: "Fitness", emoji: "⛹️‍♀️", color: "from-cyan-400 to-teal-500" },
  { title: "Reading", emoji: "📚", color: "from-indigo-400 to-violet-500" },
  { title: "Cooking", emoji: "🍳", color: "from-yellow-400 to-amber-500" },
  { title: "Gardening", emoji: "🌻", color: "from-lime-400 to-green-500" },
  { title: "Gaming", emoji: "🎮", color: "from-blue-400 to-indigo-500" },
  { title: "Writing", emoji: "✍️", color: "from-pink-400 to-rose-500" },
  { title: "Dancing", emoji: "💃", color: "from-red-400 to-pink-500" },
  { title: "Camping", emoji: "🏕️", color: "from-teal-400 to-cyan-500" },
  { title: "Cycling", emoji: "🚴‍♂️", color: "from-emerald-400 to-green-500" },
];

// Card component with hover effects and animations
const Card = ({
  children,
  className = "",
  icon,
  title,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  delay?: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 ${className}`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Subtle border glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

      <div className="relative p-6 h-full z-10">
        {title && (
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border border-gray-800">
              {icon}
            </div>
            <h3 className="text-xl font-medium text-white">{title}</h3>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const constraintRef = useRef(null);

  // Animation variants for hobby bubbles
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 -z-10"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute -top-64 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-64 -left-32 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-16 space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* My Reads Card */}
            <Card
              title="My Reads"
              icon={<Book className="w-5 h-5 text-emerald-400" />}
              delay={0.1}
              className="md:col-span-1"
            >
              <p className="text-gray-400 mb-6">
                Explore the books shaping my perspectives and thinking.
              </p>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-sky-500/30 rounded-lg blur-sm opacity-75"></div>
                <div className="relative bg-gray-900 rounded-lg p-4 flex justify-center">
                  <div className="w-40 transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500">
                    <Image
                      src={bookImage}
                      alt="Atomic Habits by James Clear"
                      className="drop-shadow-lg"
                    />
                    <p className="text-center text-xs text-gray-400 mt-2">
                      Atomic Habits
                    </p>
                    <p className="text-center text-xs text-gray-500">
                      James Clear
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* My Toolbox Card */}
            <Card
              title="My Toolbox"
              icon={<Code className="w-5 h-5 text-sky-400" />}
              delay={0.2}
              className="md:col-span-2"
            >
              <p className="text-gray-400 mb-4">
                Technologies and tools I use to craft exceptional digital
                experiences.
              </p>
              <div className="bg-gray-950/50 rounded-lg border border-gray-800 overflow-hidden h-90">
                <IconCloudDemo />
              </div>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Beyond the Code Card */}
            <Card
              title="Beyond the Code"
              icon={<Sparkles className="w-5 h-5 text-purple-400" />}
              delay={0.3}
              className="md:col-span-2"
            >
              <p className="text-gray-400 mb-4">
                Explore my interests and hobbies beyond the digital realm.
              </p>
              <div
                ref={constraintRef}
                className="bg-gray-950/50 rounded-lg border border-gray-800 p-4 h-64 relative"
              >
                <motion.div
                  className="h-full"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.title}
                      className={`absolute inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${hobby.color} shadow-md cursor-grab active:cursor-grabbing transition-shadow duration-300 hover:shadow-lg`}
                      style={{
                        left: `${(index % 5) * 20 + Math.random() * 10}%`,
                        top: `${
                          Math.floor(index / 5) * 25 + Math.random() * 10
                        }%`,
                      }}
                      drag
                      dragConstraints={constraintRef}
                      dragElastic={0.1}
                      dragTransition={{
                        bounceStiffness: 600,
                        bounceDamping: 20,
                      }}
                      variants={bubbleVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xs font-medium text-white">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>

            {/* Location Beam Card */}
            <Card
              title="Current Focus"
              icon={<Shapes className="w-5 h-5 text-orange-400" />}
              delay={0.4}
              className="md:col-span-1"
            >
              <p className="text-gray-400 mb-4">
                What I'm currently learning and exploring in tech.
              </p>
              <div className="bg-gray-950/50 rounded-lg border border-gray-800 p-4 h-60 relative overflow-hidden">
                {/* Progress Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-32 h-32">
                    {/* Outer Ring - AI/ML */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-gray-700"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 0.75 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                    </motion.div>

                    {/* Middle Ring - Web3 */}
                    <motion.div
                      className="absolute inset-4 rounded-full border-4 border-gray-600"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 0.6 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute -top-2 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    </motion.div>

                    {/* Inner Ring - Mobile Dev */}
                    <motion.div
                      className="absolute inset-8 rounded-full border-4 border-gray-500"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 0.85 }}
                      transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                    >
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                    </motion.div>

                    {/* Center Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-2 left-2 text-xs text-gray-400">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>AI/ML</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Web3</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Connect Button */}
          <div className="flex justify-center mt-16">
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Connect With Me
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

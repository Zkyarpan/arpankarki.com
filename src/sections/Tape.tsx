"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Star,
  Zap,
  Lock,
  Smartphone,
  ArrowUpRight,
  Layers,
} from "lucide-react";

// Define skill tags with icons
const skillTags = [
  {
    text: "Performance-optimized",
    icon: <Zap className="w-3.5 h-3.5" />,
    color: "from-amber-400 to-orange-500",
  },
  {
    text: "Responsive",
    icon: <Smartphone className="w-3.5 h-3.5" />,
    color: "from-sky-400 to-blue-500",
  },
  {
    text: "Secure",
    icon: <Lock className="w-3.5 h-3.5" />,
    color: "from-emerald-400 to-green-500",
  },
  {
    text: "Scalable",
    icon: <ArrowUpRight className="w-3.5 h-3.5" />,
    color: "from-purple-400 to-indigo-500",
  },
  {
    text: "Accessible",
    icon: <Layers className="w-3.5 h-3.5" />,
    color: "from-rose-400 to-pink-500",
  },
  {
    text: "Modern",
    icon: <Star className="w-3.5 h-3.5" />,
    color: "from-emerald-400 to-sky-500",
  },
  {
    text: "Performance-driven",
    icon: <Zap className="w-3.5 h-3.5" />,
    color: "from-amber-400 to-orange-500",
  },
  {
    text: "Mobile-first",
    icon: <Smartphone className="w-3.5 h-3.5" />,
    color: "from-sky-400 to-blue-500",
  },
  {
    text: "Security-focused",
    icon: <Lock className="w-3.5 h-3.5" />,
    color: "from-emerald-400 to-green-500",
  },
  {
    text: "User-friendly",
    icon: <Layers className="w-3.5 h-3.5" />,
    color: "from-purple-400 to-indigo-500",
  },
];

// Marquee component with proper Tailwind animations
const Marquee = ({ children, reverse = false, duration = 30, delay = 0 }: { children: React.ReactNode; reverse?: boolean; duration?: number; delay?: number }) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div
        className={`flex animate-marquee whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

// Individual skill tag component
interface SkillTagProps {
  text: string;
  icon: React.ReactNode;
  color?: string;
}

const SkillTag = ({ text, icon, color = "from-emerald-400 to-sky-500" }: SkillTagProps) => {
  return (
    <div className="flex items-center mx-3 my-2 group">
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${color} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
      >
        <span className="text-white">{icon}</span>
        <span className="text-sm font-medium text-white whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
};

export const TapeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create parallax effect
  const yTop = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950/90 -z-10"></div>

      {/* Diagonal stripes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

        <motion.div
          style={{ y: yTop }}
          className="absolute top-0 -left-10 right-0 h-64 w-[200%] bg-gradient-to-r from-emerald-500/5 via-sky-500/10 to-emerald-500/5 -rotate-3"
        ></motion.div>

        <motion.div
          style={{ y: yBottom }}
          className="absolute bottom-0 -left-10 right-0 h-64 w-[200%] bg-gradient-to-r from-sky-500/5 via-emerald-500/10 to-sky-500/5 rotate-3"
        ></motion.div>
      </div>

      {/* Top row - left to right */}
      <motion.div style={{ y: yTop }} className="relative py-4">
        <Marquee duration={40}>
          {skillTags.map((tag, index) => (
            <SkillTag
              key={`top-${index}`}
              text={tag.text}
              icon={tag.icon}
              color={tag.color}
            />
          ))}
        </Marquee>
      </motion.div>

      {/* Bottom row - right to left */}
      <motion.div style={{ y: yBottom }} className="relative py-4">
        <Marquee reverse={true} duration={35} delay={2}>
          {[...skillTags].reverse().map((tag, index) => (
            <SkillTag
              key={`bottom-${index}`}
              text={tag.text}
              icon={tag.icon}
              color={tag.color}
            />
          ))}
        </Marquee>
      </motion.div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
      `}</style>
    </section>
  );
};

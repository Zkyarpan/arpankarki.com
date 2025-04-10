"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Layout, Shield, Code, LineChart, Layers } from "lucide-react";

// Define our skills for both rows
const centricSkills = [
  { text: "Performance-centric", icon: <Zap className="w-4 h-4" /> },
  { text: "Accessibility-centric", icon: <Layout className="w-4 h-4" /> },
  { text: "Security-centric", icon: <Shield className="w-4 h-4" /> },
  { text: "Responsive-centric", icon: <Code className="w-4 h-4" /> },
  { text: "Scalable-centric", icon: <LineChart className="w-4 h-4" /> },
  { text: "Versatile-centric", icon: <Layers className="w-4 h-4" /> },
];

const focusedSkills = [
  { text: "Performance-focused", icon: <Zap className="w-4 h-4" /> },
  { text: "Accessibility-focused", icon: <Layout className="w-4 h-4" /> },
  { text: "Security-focused", icon: <Shield className="w-4 h-4" /> },
  { text: "Responsive-focused", icon: <Code className="w-4 h-4" /> },
  { text: "Scalable-focused", icon: <LineChart className="w-4 h-4" /> },
  { text: "Versatile-focused", icon: <Layers className="w-4 h-4" /> },
];

// Simple skill tag component
interface SkillTagProps {
  text: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const SkillTag = ({ text, icon, highlight = false }: SkillTagProps) => {
  return (
    <div
      className={`
      flex items-center gap-2 px-4 py-2 rounded-full border
      ${
        highlight
          ? "bg-gradient-to-r from-emerald-500 to-sky-500 border-transparent text-white"
          : "bg-gray-800/70 border-gray-700/50 text-white"
      }
      shadow-md transition-transform hover:scale-105 duration-300
    `}
    >
      {icon}
      <span className="text-sm font-medium whitespace-nowrap">{text}</span>
    </div>
  );
};

// Marquee component
const Marquee = ({
  children,
  reverse = false,
  speed = 35,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number;
}) => {
  return (
    <div className="relative flex overflow-x-hidden py-3">
      <div
        className={`flex gap-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export const TapeSection = () => {
  return (
    <section className="py-4 md:py-8 relative overflow-hidden bg-gray-900/30 backdrop-blur-sm">
      {/* Top row */}
      <Marquee speed={40}>
        {centricSkills.map((skill, i) => (
          <div key={`centric-${i}`} className="mx-2">
            <SkillTag
              text={skill.text}
              icon={skill.icon}
              highlight={
                skill.text === "Responsive-centric" ||
                skill.text === "Performance-centric"
              }
            />
          </div>
        ))}
      </Marquee>

      {/* Bottom row - reverse direction */}
      <Marquee reverse={true} speed={35}>
        {focusedSkills.map((skill, i) => (
          <div key={`focused-${i}`} className="mx-2">
            <SkillTag
              text={skill.text}
              icon={skill.icon}
              highlight={
                skill.text === "Performance-focused" ||
                skill.text === "Security-focused"
              }
            />
          </div>
        ))}
      </Marquee>

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

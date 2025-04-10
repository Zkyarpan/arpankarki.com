"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anjil",
    username: "@anjil",
    body: "Worked with him on a couple of projects. Always delivers what's needed without fuss.",
    img: "https://avatars.githubusercontent.com/u/137144698?v=4",
  },
  {
    name: "Prabinzz",
    username: "@prabinzz",
    body: "He's reliable and communicates well. Never had issues meeting deadlines.",
    img: "https://avatars.githubusercontent.com/u/17066166?v=4",
  },
  {
    name: "Taushif",
    username: "@taushif",
    body: "Understands what's needed quickly and doesn't overcomplicate things. Gets the job done.",
    img: "https://avatars.githubusercontent.com/u/112973122?v=4",
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "No-nonsense approach. I appreciate that he keeps things efficient and to the point.",
    img: "https://avatars.githubusercontent.com/u/126384589?v=4",
  },
  {
    name: "Benjamin",
    username: "@benjamin",
    body: "Straightforward and easy to work with. Always delivers what he promises.",
    img: "https://avatars.githubusercontent.com/u/51664?v=4",
  },
  {
    name: "Pratik",
    username: "@pratik",
    body: "Does exactly what's needed, when it's needed. I trust him with my projects.",
    img: "https://avatars.githubusercontent.com/u/107355273?v=4",
  },
];

// Split reviews into two rows
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  return (
    <div className="relative mx-4 w-80 overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:bg-gray-700/90">
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={name}
          className="h-10 w-10 rounded-full object-cover border border-gray-700/50"
          loading="lazy"
        />
        <div>
          <h3 className="text-white font-medium text-sm">{name}</h3>
          <p className="text-gray-400 text-xs">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-gray-300 text-sm leading-relaxed">
        "{body}"
      </blockquote>
      <div className="mt-3 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500"
          />
        ))}
      </div>
    </div>
  );
};

// Marquee component with smooth animation
const Marquee = ({ children, reverse = false, speed = 30 }: { children: React.ReactNode; reverse?: boolean; speed?: number }) => {
  return (
    <div className="relative flex overflow-x-hidden py-4">
      <div
        className={`flex ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children} {/* Duplicate to ensure continuous flow */}
      </div>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 -z-10"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 mb-8">
        <SectionHeader
          eyebrow="People Saying"
          title="What People Are Saying"
          description="Don't just take my word for it. Here's what real people are saying about me"
        />
      </div>

      <div className="mt-8 relative">
        {/* First row - left to right */}
        <Marquee speed={40}>
          {firstRow.map((review, index) => (
            <ReviewCard key={`first-${index}`} {...review} />
          ))}
        </Marquee>

        {/* Second row - right to left */}
        <Marquee speed={35} reverse={true}>
          {secondRow.map((review, index) => (
            <ReviewCard key={`second-${index}`} {...review} />
          ))}
        </Marquee>

        {/* Edge gradients for fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-900 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-900 to-transparent"></div>
      </div>

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
}

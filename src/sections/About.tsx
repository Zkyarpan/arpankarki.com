"use client";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import CardHeader from "../components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";
import MapComponent from "./Map";
import { IconCloudDemo } from "@/components/InteractiveIconCloud";

const hobbies = [
  {
    title: "Traveling",
    emoji: "✈️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎶  ",
    left: "70%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "⛹️‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "20%",
    top: "20%",
  },
  {
    title: "Gardening",
    emoji: "🌻",
    left: "60%",
    top: "20%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "80%",
    top: "60%",
  },
  {
    title: "Writing",
    emoji: "✍️",
    left: "25%",
    top: "50%",
  },
  {
    title: "Dancing",
    emoji: "💃",
    left: "75%",
    top: "30%",
  },
  {
    title: "Camping",
    emoji: "🏕️",
    left: "30%",
    top: "75%",
  },
  {
    title: "Cycling",
    emoji: "🚴‍♂️",
    left: "70%",
    top: "55%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about Who I am, and What I do, What inspires Me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-8 md:mt-5">
                <Image src={bookImage} alt="bookImage" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2 shadow-lg">
              <div className="flex justify-center h-[200px] overflow-hidden">
                <IconCloudDemo />
              </div>
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="flex flex-col lg:flex-row justify-between text-sm sm:text-md lg:text-lg px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 text-white"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5  gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm"
                  className="px-6 py-6"
                />
              </div>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span className="">{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <MapComponent />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  mt-12 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute  inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

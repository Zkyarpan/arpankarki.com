"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import { Quote, Star, ChevronLeft, ChevronRight, User } from "lucide-react";

const reviews = [
  {
    name: "Anjil",
    username: "@anjil",
    body: "Worked with him on a couple of projects. Always delivers what's needed without fuss.",
    img: "https://avatars.githubusercontent.com/u/137144698?v=4",
    rating: 5,
    role: "Project Manager",
  },
  {
    name: "Prabinzz",
    username: "@prabinzz",
    body: "He's reliable and communicates well. Never had issues meeting deadlines.",
    img: "https://avatars.githubusercontent.com/u/17066166?v=4",
    rating: 5,
    role: "Senior Developer",
  },
  {
    name: "Taushif",
    username: "@taushif",
    body: "Understands what's needed quickly and doesn't overcomplicate things. Gets the job done.",
    img: "https://avatars.githubusercontent.com/u/112973122?v=4",
    rating: 5,
    role: "UX Designer",
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "No-nonsense approach. I appreciate that he keeps things efficient and to the point.",
    img: "https://avatars.githubusercontent.com/u/126384589?v=4",
    rating: 5,
    role: "Product Owner",
  },
  {
    name: "Benjamin",
    username: "@benjamin",
    body: "Straightforward and easy to work with. Always delivers what he promises.",
    img: "https://avatars.githubusercontent.com/u/51664?v=4",
    rating: 5,
    role: "Tech Lead",
  },
  {
    name: "Pratik",
    username: "@pratik",
    body: "Does exactly what's needed, when it's needed. I trust him with my projects.",
    img: "https://avatars.githubusercontent.com/u/107355273?v=4",
    rating: 5,
    role: "Startup Founder",
  },
];

const features = [
  "Responsive",
  "Scalable",
  "Versatile",
  "Performance-centric",
  "Accessible",
  "Secure",
  "Responsive",
  "Scalable-focused",
  "Versatile-focused",
  "Performance-optimized",
  "Accessibility-focused",
  "Security-focused",
];

// Featured Testimonial Card
const FeaturedTestimonial = ({ review }: { review: Review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-8 rounded-2xl shadow-lg border border-gray-700/50 backdrop-blur-md"
    >
      <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-gradient-to-r from-emerald-500 to-sky-500 p-4 rounded-full shadow-lg">
        <Quote className="text-white w-6 h-6" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
            <img
              src={review.img}
              alt={review.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-1 shadow-md">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-white">{review.name}</h3>
            <span className="text-emerald-400 text-sm font-medium">
              {review.username}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-3">{review.role}</p>

          <blockquote className="relative">
            <div className="absolute -left-6 top-0 text-emerald-500/20">
              <Quote className="w-12 h-12 rotate-180" />
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic relative z-10">
              "{review.body}"
            </p>
          </blockquote>

          <div className="mt-4 flex">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-emerald-500 fill-emerald-500"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Review type definition
interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
  rating: number;
  role: string;
}

// Individual Testimonial Card
const TestimonialCard = ({ review, index }: { review: Review; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative backdrop-blur-sm rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 transition-opacity duration-300"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>

      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
              {review.img ? (
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/30 to-sky-500/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-white/70" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full p-0.5">
              <Star className="w-3 h-3 text-white fill-white" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium">{review.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-emerald-400 text-xs">{review.username}</p>
              <span className="text-gray-500 text-xs">•</span>
              <p className="text-gray-400 text-xs">{review.role}</p>
            </div>
          </div>
        </div>

        <div className="text-gray-300 text-sm leading-relaxed flex-grow">
          "{review.body}"
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Animated Marquee Banner
const MarqueeBanner = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-emerald-500/5 via-sky-500/5 to-emerald-500/5">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>

      <div className="animate-marquee whitespace-nowrap flex items-center">
        {features.concat(features).map((item, index) => (
          <div
            key={index}
            className="mx-4 inline-flex items-center gap-2 text-sm font-medium text-white/70"
          >
            <span className="text-emerald-500">+</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Testimonials Section
export function TestimonialsSection() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [visibleColumns, setVisibleColumns] = useState(3);
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true });

  // Update visible columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleColumns(1);
      } else if (window.innerWidth < 1024) {
        setVisibleColumns(2);
      } else {
        setVisibleColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 -z-10"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute top-20 -right-64 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-64 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <SectionHeader
          eyebrow="People Saying"
          title="What People Are Saying"
          description="Don't just take my word for it. Here's what real people are saying about me"
        />

        {/* Feature Banner */}
        <MarqueeBanner />

        {/* Featured Testimonial */}
        <div className="mt-12 relative">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevFeatured}
              className="p-2 rounded-full bg-gray-800/80 text-white/70 hover:text-white hover:bg-gray-700/80 border border-gray-700/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextFeatured}
              className="p-2 rounded-full bg-gray-800/80 text-white/70 hover:text-white hover:bg-gray-700/80 border border-gray-700/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="transition-all duration-500 ease-in-out">
            <FeaturedTestimonial review={reviews[featuredIndex]} />
          </div>
        </div>

        {/* Testimonial Grid */}
        <div
          ref={cardsRef}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => {
            if (index === featuredIndex) return null; // Skip the featured testimonial
            return (
              <TestimonialCard
                key={review.username}
                review={review}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

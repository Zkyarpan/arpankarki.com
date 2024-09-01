"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleSetActive = useCallback((link: string) => {
    setActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const sections = ["home", "projects", "about", "contact"];

    const setInitialActiveLink = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sections.includes(hash)) {
        setActiveLink(hash);
      } else {
        setActiveLink("home");
      }
    };

    setInitialActiveLink();

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        (window.scrollY / (documentHeight - windowHeight)) * 100;

      let newActiveSection = "";

      if (scrollPercentage >= 95) {
        newActiveSection = "contact";
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
              newActiveSection = section;
              break;
            }
          }
        }
      }

      if (newActiveSection && newActiveSection !== activeLink) {
        setActiveLink(newActiveSection);
        if (window.history.pushState) {
          window.history.pushState(null, "", `#${newActiveSection}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", setInitialActiveLink);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", setInitialActiveLink);
    };
  }, [activeLink]);

  return (
    <motion.div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-1 border border-white/20 rounded-full bg-black/50 backdrop-blur-md shadow-lg">
        {["home", "projects", "about", "contact"].map((link) => (
          <motion.a
            key={link}
            href={`#${link}`}
            onClick={(e) => {
              e.preventDefault();
              handleSetActive(link);
            }}
            className={`relative px-4 py-2 rounded-full text-white transition-colors duration-300 ${
              activeLink === link
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
            {activeLink === link && (
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                layoutId="activeBackground"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

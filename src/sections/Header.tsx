"use client";

import { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  const handleSetActive = (link: string) => {
    setActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // console.log("Scroll Position:", scrollPosition);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          // console.log(
          //   `Section: ${section}, OffsetTop: ${element.offsetTop}, OffsetHeight: ${element.offsetHeight}`
          // );

          if (
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition
          ) {
            setActiveLink(section);
          }
        }
      });

      // Fallback for the last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setActiveLink("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={() => handleSetActive("home")}
          className={`nav-item ${
            activeLink === "home" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handleSetActive("projects")}
          className={`nav-item ${
            activeLink === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={() => handleSetActive("about")}
          className={`nav-item ${
            activeLink === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => handleSetActive("contact")}
          className={`nav-item ${
            activeLink === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

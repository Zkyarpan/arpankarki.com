// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";

// export const Header: React.FC = () => {
//   const [activeLink, setActiveLink] = useState<string>("");

//   const handleSetActive = useCallback((link: string) => {
//     setActiveLink(link);
//     const element = document.getElementById(link);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   useEffect(() => {
//     const sections = ["home", "projects", "about", "contact"];

//     const setInitialActiveLink = () => {
//       const hash = window.location.hash.slice(1);
//       if (hash && sections.includes(hash)) {
//         setActiveLink(hash);
//       } else {
//         setActiveLink("home");
//       }
//     };

//     setInitialActiveLink();

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight / 2;
//       const documentHeight = document.documentElement.scrollHeight;
//       const windowHeight = window.innerHeight;
//       const scrollPercentage =
//         (window.scrollY / (documentHeight - windowHeight)) * 100;

//       let newActiveSection = "";

//       if (scrollPercentage >= 95) {
//         newActiveSection = "contact";
//       } else {
//         for (const section of sections) {
//           const element = document.getElementById(section);
//           if (element) {
//             const { top, bottom } = element.getBoundingClientRect();
//             if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
//               newActiveSection = section;
//               break;
//             }
//           }
//         }
//       }

//       if (newActiveSection && newActiveSection !== activeLink) {
//         setActiveLink(newActiveSection);
//         if (window.history.pushState) {
//           window.history.pushState(null, "", `#${newActiveSection}`);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("hashchange", setInitialActiveLink);

//     // Initial check
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("hashchange", setInitialActiveLink);
//     };
//   }, [activeLink]);

//   return (
//     <motion.div className="flex justify-center items-center fixed top-3 w-full z-10">
//       <nav className="flex sm:gap-1 md:gap-2 lg:gap-3 sm:p-1 md:p-1 lg:p-1 border border-white/20 rounded-full bg-black/50 backdrop-blur-md shadow-lg">
//         {["home", "projects", "about", "contact"].map((link) => (
//           <motion.a
//             key={link}
//             href={`#${link}`}
//             onClick={(e) => {
//               e.preventDefault();
//               handleSetActive(link);
//             }}
//             className={`relative sm:px-3 md:px-4 lg:px-5 py-2 rounded-full text-white transition-colors duration-300 ${
//               activeLink === link
//                 ? "text-white"
//                 : "text-white/70 hover:text-white"
//             }`}
//           >
//             {link.charAt(0).toUpperCase() + link.slice(1)}
//             {activeLink === link && (
//               <motion.div
//                 className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
//                 layoutId="activeBackground"
//                 initial={false}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               />
//             )}
//           </motion.a>
//         ))}
//       </nav>
//     </motion.div>
//   );
// };

"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import MenuIcon from "@/assets/images/Menu.png";
import Image from "next/image";

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleSetActive = useCallback((link: string) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu when a link is clicked
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

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", setInitialActiveLink);
    };
  }, [activeLink]);

  return (
    <motion.div className="flex justify-between items-center fixed top-3 w-full z-10">
      <nav className="hidden md:flex gap-3 p-1 border border-white/20 rounded-full bg-black/50 backdrop-blur-md shadow-lg mx-auto">
        {["home", "projects", "about", "contact"].map((link) => (
          <motion.a
            key={link}
            href={`#${link}`}
            onClick={(e) => {
              e.preventDefault();
              handleSetActive(link);
            }}
            className={`relative sm:px-3 md:px-4 lg:px-5 py-2 rounded-full text-white transition-colors duration-300 ${
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
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      <button
        className="md:hidden p-2 cursor-pointer  ml-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X className="text-white w-8 h-9" />
        ) : (
          <Image src={MenuIcon} alt="Menu" className="w-10 h-10" />
        )}
      </button>

      <motion.div
        className={`fixed top-5 left-2 h-[35%] w-[40%] bg-black/50 border border-white/20 z-10 p-1 rounded-3xl backdrop-blur-md shadow-lg mt-10 text-center ${
          menuOpen ? "block" : "hidden"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col gap-4">
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
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

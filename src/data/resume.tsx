import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  projects: [
    {
      title: "Mentality - Mental Health Platform",
      href: "#", // Update when hosted
      dates: "2024 - Present",
      active: true,
      description:
        "A comprehensive mental health platform offering psychologist support, resources, video calls, chat, and progress tracking. Features secure user authentication, mood tracking surveys, personalized content suggestions, and real-time messaging with licensed psychologists.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Socket.io",
        "Stripe",
        "WebRTC",
        "NextAuth.js",
        "TailwindCSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "#", // Update when hosted
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Zkyarpan/FinalYearProject", // Update with your GitHub
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/mentality-project.png", // Add your image path
      video: "", // Add video if you have one
    },
    {
      title: "CTF Security Platform",
      href: "#", // Update when hosted
      dates: "2024",
      active: true,
      description:
        "A Capture The Flag (CTF) platform designed for cybersecurity challenges and competitions. Features multiple challenge categories including web security, cryptography, forensics, and reverse engineering with real-time scoring system and dynamic leaderboards.",
      technologies: [
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Socket.io",
        "Stripe",
        "WebRTC",
        "Clerk Auth",
        "Redux",
        "TailwindCSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "#", // Update when hosted
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/yourusername/ctf-platform", // Update with your GitHub
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/images/ctf-project.png", // Add your image path
      video: "", // Add video if you have one
    },
    {
      title: "TechHaven - Laptop E-commerce Store",
      href: "#", // Update when hosted
      dates: "2024",
      active: true,
      description:
        "A modern e-commerce platform specializing in laptops from top brands. Features premium product selection, expert guidance, competitive pricing, comprehensive product filtering, user authentication, shopping cart functionality, and responsive design for optimal shopping experience across all devices.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Express",
        "NextAuth.js",
        "TailwindCSS",
        "Stripe",
        "Cloudinary",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "#", // Update when hosted
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Zkyarpan/TechHaven",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/techhaven-project.png", // Update image name
      video: "", // Add video if you have one
    },
    {
      title: "Hotel Management System",
      href: "#", // Update when hosted
      dates: "2023 - 2024",
      active: true,
      description:
        "A comprehensive hotel management system handling complete operations including reservations, check-in/check-out processes, room management, automated billing, and staff coordination. Includes customer portal, administrative dashboard, and detailed reporting features.",
      technologies: [
        "React.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "NextAuth.js",
        "TailwindCSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "#", // Update when hosted
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Zkyarpan/HotelManagementSystem", // Update with your GitHub
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/hotel-project.png", // Add your image path
      video: "", // Add video if you have one
    },
  ],
};

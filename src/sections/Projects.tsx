import socialMediaApp from "@/assets/images/social.png";
import blogApp from "@/assets/images/blog.png";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";
import { FaGithub } from "react-icons/fa";

const portfolioProjects = [
  {
    company: "Social Connect",
    year: "2023",
    title: "Social Media App",
    description:
      "Connect with friends, share activities, and follow others in real-time. Stay updated with the latest posts and engage with content effortlessly.",
    link: "https://github.com/Zkyarpan/PostMe",
    image: socialMediaApp,
    showLink: true,
  },
  {
    company: "ThoughtWave",
    year: "2022",
    title: "Blog App",
    description:
      "Share your thoughts and ideas. Discover, create, and engage with meaningful content that resonates with your interests.",
    link: "https://github.com/Zkyarpan/blogVibe",
    image: blogApp,
    showLink: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="Check out some of my best projects. Each one highlights my skills and the real-world results I've achieved."
        />
        <div className="flex md:mt-20 flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    {project.company}
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/75 mt-4">
                    {project.description}
                  </p>
                  {project.showLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <FaGithub className="size-4" />
                        <span>Source Code</span>
                      </button>
                    </a>
                  )}
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

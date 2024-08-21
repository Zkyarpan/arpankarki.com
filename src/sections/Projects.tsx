import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to sky-400 text-center bg-clip-text text-transparent">
          Real-World Results
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6">
        Featured Projects
      </h2>
      <p className="text-center text-white/60 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident
        voluptatibus quis doloribus consequatur aliquid.
      </p>
      <div className="flex flex-col mt-10 space-y-10">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 p-6 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20"
          >
            <div className="flex justify-between">
              <span className="font-semibold text-lg">{project.title}</span>
              <span className="text-gray-400">{project.year}</span>
            </div>
            <h3 className="text-xl mt-4">
              {project.title}
              <span className="text-gray-400">Project Details</span>
            </h3>
            <ul className="mt-4 space-y-2">
              {project.results.map((result) => (
                <li key={result.title}>{result.title}</li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
                View Live Site
              </button>
            </a>=
            <Image
              src={project.image}
              alt={project.title}
              className="mt-6 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

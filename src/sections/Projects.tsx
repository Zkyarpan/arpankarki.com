import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

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
        <p className="uppercase font-semibold tracking-widest text-center text-transparent bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text w-full">
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
            className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8"
          >
            <div className="flex">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                {project.company}
                <span>&bull;</span>
                <span className="">{project.year}</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4" />
            <ul className="flex flex-col gap-4 mt-4">
              {project.results.map((result) => (
                <li
                  className="flex gap-2 text-sm text-white/50"
                  key={result.title}
                >
                  <CheckCircleIcon className="size-5" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold">
                View Live Site
              </button>
            </a>
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

import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import { ProjectCard } from "../sections/Projects"; 

export function ProjectsSection() {
  const BLUR_FADE_DELAY = 0.02;
  
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="inline-block rounded-full bg-emerald-500/10 text-emerald-400 px-3 py-1 text-sm font-medium mb-1">
              My Projects
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Check out my latest work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              I&apos;ve worked on a variety of projects, from simple websites to complex web applications.
              Here are a few of my favorites.
            </p>
          </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
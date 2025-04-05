import { Header } from "@/sections/Header";
import { ProjectCard } from "@/sections/Projects";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { TextHover } from "@/sections/TextHover";
import { TestimonialsSection } from "@/sections/Marquee";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/components/ProjectSecton";

const BLUR_FADE_DELAY = 0.02;

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Header />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <TextHover />
    </div>
  );
}

import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { TextHover } from "@/sections/TextHover";
import { TestimonialsSection } from "@/sections/Marquee";
import { HeroSection } from "@/sections/HeroSection";

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

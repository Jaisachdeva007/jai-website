import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsTicker } from "@/components/StatsTicker";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main id="top" className="relative">
      <ScrollProgress />
      <CursorSpotlight />
      <Nav />
      <Hero />
      <StatsTicker />
      <Projects />
      <Experience />
      <Publications />
      <Skills />
      <Footer />
    </main>
  );
}

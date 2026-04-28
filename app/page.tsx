import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <main id="top" className="relative">
      <CursorSpotlight />
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}

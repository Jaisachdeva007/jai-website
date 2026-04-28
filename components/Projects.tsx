import { PROJECTS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="container-x relative py-28 md:py-36">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects I've shipped"
        blurb="A mix of academic, hackathon, and freelance projects — touching AI, mobile, VR, and the occasional pizza shop."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

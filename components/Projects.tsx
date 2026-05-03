import { PROJECTS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="container-x relative py-28 md:py-36">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects I've shipped"
        blurb="A mix of research, hackathon, and side projects — touching AI, mobile, VR, and HCI."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={i}
            featured={i === 0}
            className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
          />
        ))}
      </div>
    </section>
  );
}

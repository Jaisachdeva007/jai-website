"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/cn";

export function Projects() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
      const step = first.offsetWidth + gap;
      setActive(Math.round(track.scrollLeft / step));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCard = (i: number) => {
    const track = trackRef.current;
    const card = track?.children[i] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <section id="projects" className="container-x relative py-28 md:py-36">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects I've shipped"
        blurb="A mix of research, hackathon, and side projects — touching AI, mobile, VR, and HCI."
      />

      {/* MOBILE — swipeable carousel */}
      <div className="mt-10 md:hidden">
        <div className="mb-4 flex items-center justify-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-bone-400">
          <span>swipe to explore</span>
          <motion.span
            aria-hidden
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-neon"
          >
            →
          </motion.span>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="w-[85%] flex-shrink-0 snap-center">
              <ProjectCard project={p} index={i} featured={i === 0} />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => scrollToCard(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                active === i ? "w-6 bg-neon-gradient" : "w-1.5 bg-white/15"
              )}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP — grid */}
      <div className="mt-16 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
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

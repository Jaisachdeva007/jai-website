"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/content";

type Props = {
  project: Project;
  index: number;
  featured?: boolean;
  className?: string;
};

export function ProjectCard({ project, index, featured = false, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  };
  const onLeave = () => setGlow((g) => ({ ...g, opacity: 0 }));

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-ink-900/60 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5",
        featured
          ? "border-neon/20 p-8 hover:border-neon/40 hover:shadow-glow-lg"
          : "border-white/10 p-7 hover:border-neon/25 hover:shadow-glow",
        className
      )}
    >
      {/* cursor-following highlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(${featured ? "500px" : "380px"} circle at ${glow.x}% ${glow.y}%, rgba(255,1,79,${featured ? "0.14" : "0.12"}), transparent 60%)`,
        }}
      />

      {/* top accent line for featured */}
      {featured && (
        <div className="absolute inset-x-0 top-0 h-px bg-neon-gradient opacity-60" />
      )}

      {project.badge && (
        <span className={cn(
          "absolute right-5 top-5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest",
          featured
            ? "border-neon/40 bg-neon/15 text-neon-300"
            : "border-neon/30 bg-neon/10 text-neon-300"
        )}>
          {project.badge}
        </span>
      )}

      <div className={cn("relative", featured && "lg:flex lg:gap-10")}>
        {/* main content */}
        <div className={featured ? "lg:flex-1" : ""}>
          {featured && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neon opacity-70">
              Featured project
            </p>
          )}
          <h3 className={cn(
            "font-display font-semibold text-white",
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          )}>
            {project.title}
          </h3>
          <p className={cn(
            "mt-2.5 leading-relaxed text-bone-300",
            featured ? "text-base" : "text-sm"
          )}>
            {project.blurb}
          </p>

          <ul className="mt-5 space-y-2">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm text-bone-200">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* side panel for featured */}
        <div className={cn(
          featured ? "mt-7 flex flex-col justify-between gap-5 lg:mt-0 lg:w-52 lg:shrink-0" : "mt-6"
        )}>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className={cn(
              "flex items-center gap-4",
              !featured && "border-t border-white/5 pt-5"
            )}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-bone-200 transition-colors hover:text-neon"
                >
                  <Github size={15} />
                  Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-bone-200 transition-colors hover:text-neon"
                >
                  <ArrowUpRight size={15} />
                  Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

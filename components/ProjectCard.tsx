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
        "group relative overflow-hidden rounded-2xl border bg-ink-900/60 p-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue",
        featured
          ? "border-neon/20 hover:border-electric/40"
          : "border-white/8 hover:border-electric/25",
        className
      )}
    >
      {/* cursor-following dual-colour highlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(${featured ? "500px" : "380px"} circle at ${glow.x}% ${glow.y}%, rgba(41,121,255,0.10), transparent 60%), radial-gradient(200px circle at ${glow.x}% ${glow.y}%, rgba(255,1,79,0.08), transparent 50%)`,
        }}
      />

      {/* terminal bar */}
      <div className="relative flex items-center gap-1.5 border-b border-white/6 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-[10px] tracking-wider text-bone-400">
          ~/{project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
        </span>
        {project.badge && (
          <span className="ml-3 rounded border border-neon/30 bg-neon/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-neon-300">
            {project.badge}
          </span>
        )}
      </div>

      <div className={cn("relative", featured ? "p-8" : "p-6")}>
        {featured && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neon opacity-70">
            Featured project
          </p>
        )}
        <h3 className={cn(
          "font-display font-semibold text-white",
          featured ? "text-3xl md:text-4xl" : "text-xl"
        )}>
          {project.title}
        </h3>
        <p className={cn(
          "mt-2.5 leading-relaxed text-bone-300",
          featured ? "text-base" : "text-sm"
        )}>
          {project.blurb}
        </p>

        <ul className={cn("mt-5 space-y-2", featured && "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0")}>
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm text-bone-200">
              <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-electric" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className={cn(
            "mt-6 flex items-center gap-4",
            !featured && "border-t border-white/5 pt-5"
          )}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-bone-300 transition hover:text-electric"
              >
                <Github size={14} />
                source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-bone-300 transition hover:text-electric"
              >
                <ArrowUpRight size={14} />
                live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y, opacity: 1 });
  };
  const onLeave = () => setGlow((g) => ({ ...g, opacity: 0 }));

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-neon/30 hover:shadow-glow"
    >
      {/* cursor-following highlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(255,1,79,0.18), transparent 60%)`,
        }}
      />

      {project.badge && (
        <span className="absolute right-5 top-5 rounded-full border border-neon/30 bg-neon/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-neon-300">
          {project.badge}
        </span>
      )}

      <div className="relative">
        <h3 className="font-display text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-bone-300">
          {project.blurb}
        </p>

        <ul className="mt-5 space-y-2">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm text-bone-200">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neon" />
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
          <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-bone-200 transition hover:text-neon"
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
                className="inline-flex items-center gap-1.5 text-sm font-medium text-bone-200 transition hover:text-neon"
              >
                <ArrowUpRight size={15} />
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

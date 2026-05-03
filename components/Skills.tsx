"use client";

import { motion } from "framer-motion";
import { Code2, FlaskConical, Wand2, type LucideIcon } from "lucide-react";
import { SKILLS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { TechMarquee } from "./TechMarquee";

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  flask: FlaskConical,
  wand: Wand2,
};

export function Skills() {
  return (
    <section id="skills" className="container-x relative py-28 md:py-36">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills & tooling"
        blurb="A focused toolkit I reach for across software, research, and design — chosen because they ship."
      />

      <div className="mt-12">
        <TechMarquee />
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => {
          const Icon = ICONS[group.icon] ?? Code2;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-neon/25 hover:shadow-glow"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-neon/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center gap-3.5">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-neon-gradient p-3 text-white shadow-glow">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold leading-tight text-white">
                  {group.title}
                </h3>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-bone-300">
                {group.blurb}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

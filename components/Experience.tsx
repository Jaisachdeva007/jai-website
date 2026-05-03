"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { EXPERIENCE } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const PATH_D =
  "M 350 40 C 540 200, 540 360, 350 480 C 160 600, 160 760, 350 880 C 540 1000, 540 1160, 350 1280";

const NODES = [
  { y: 80 },
  { y: 480 },
  { y: 880 },
  { y: 1280 },
];

export function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLen, setPathLen] = useState(0);
  const [comet, setComet] = useState({ x: 350, y: 40 });
  const [activeIdx, setActiveIdx] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"],
  });

  const drawn = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!pathRef.current || !pathLen) return;
    const clamped = Math.min(Math.max(p, 0), 1);
    const pt = pathRef.current.getPointAtLength(clamped * pathLen);
    setComet({ x: pt.x, y: pt.y });
    const next = NODES.reduce((acc, n, i) => (pt.y >= n.y - 80 ? i : acc), -1);
    setActiveIdx(next);
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="container-x relative py-28 md:py-36 dot-grid"
    >
      <SectionHeading
        eyebrow="Where I've contributed"
        title="Experience"
        blurb="Roles that have shaped how I work — research, leadership, support, and student engagement."
      />

      {/* DESKTOP */}
      <div className="relative mt-20 hidden md:block">
        <div className="relative mx-auto" style={{ height: "1380px" }}>
          <svg
            viewBox="0 0 700 1380"
            preserveAspectRatio="xMidYMin meet"
            className="absolute left-1/2 top-0 h-full w-[640px] -translate-x-1/2"
            aria-hidden
          >
            <defs>
              <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff014f" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ff3a72" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#6334ff" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="7" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={PATH_D}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <motion.path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: drawn }}
            />

            {NODES.map((n, i) => {
              const active = i <= activeIdx;
              return (
                <g key={i}>
                  <circle
                    cx="350"
                    cy={n.y}
                    r="16"
                    fill={active ? "rgba(255,1,79,0.15)" : "rgba(255,255,255,0.03)"}
                  />
                  <circle
                    cx="350"
                    cy={n.y}
                    r="7"
                    fill={active ? "#ff014f" : "#1c1c2b"}
                    stroke={active ? "rgba(255,1,79,0.7)" : "rgba(255,255,255,0.12)"}
                    strokeWidth="2.5"
                  />
                </g>
              );
            })}

            <g filter="url(#glow)">
              <circle cx={comet.x} cy={comet.y} r="22" fill="rgba(255,1,79,0.2)" />
              <circle cx={comet.x} cy={comet.y} r="10" fill="#ff014f" />
              <circle cx={comet.x} cy={comet.y} r="4.5" fill="#ffffff" />
            </g>
          </svg>

          {EXPERIENCE.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const top = NODES[i].y - 110;
            return (
              <motion.article
                key={exp.role}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                animate={{
                  opacity: i <= activeIdx ? 1 : 0.3,
                  x: 0,
                  scale: i <= activeIdx ? 1 : 0.96,
                }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={cn(
                  "absolute w-[310px] rounded-3xl border bg-ink-900/70 p-6 backdrop-blur-sm transition-shadow duration-500",
                  isLeft ? "left-[5%]" : "right-[5%]",
                  i <= activeIdx
                    ? "border-neon/25 shadow-glow"
                    : "border-white/8"
                )}
                style={{ top: `${top}px` }}
              >
                {i <= activeIdx && (
                  <div className="absolute inset-x-0 top-0 h-px rounded-t-3xl bg-neon-gradient opacity-50" />
                )}
                <span
                  className={cn(
                    "inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest",
                    i <= activeIdx
                      ? "bg-neon-gradient text-white"
                      : "bg-white/5 text-bone-300"
                  )}
                >
                  {exp.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {exp.role}
                </h3>
                <h4 className="mt-1 text-sm font-medium text-bone-300">{exp.org}</h4>
                <p className="mt-1.5 text-xs font-bold tracking-wider text-neon-300">
                  {exp.date}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">
                  {exp.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* MOBILE */}
      <div className="relative mt-12 md:hidden">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-neon/40 to-transparent" />
        <div className="space-y-5 pl-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-ink-900/60 p-5 backdrop-blur-sm"
            >
              <span className="absolute -left-[34px] top-6 h-3.5 w-3.5 rounded-full bg-neon shadow-glow ring-2 ring-ink-950 ring-offset-0" />
              <span className="inline-block rounded-full bg-neon-gradient px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {exp.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{exp.role}</h3>
              <h4 className="mt-1 text-sm font-medium text-bone-300">{exp.org}</h4>
              <p className="mt-1.5 text-xs font-bold tracking-wider text-neon-300">{exp.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-bone-300">{exp.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
// nodes: anchor points along the path corresponding to each experience item
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
    if (pathRef.current) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!pathRef.current || !pathLen) return;
    const clamped = Math.min(Math.max(p, 0), 1);
    const pt = pathRef.current.getPointAtLength(clamped * pathLen);
    setComet({ x: pt.x, y: pt.y });

    // activate cards as the comet passes their y-position
    const next = NODES.reduce(
      (acc, n, i) => (pt.y >= n.y - 80 ? i : acc),
      -1
    );
    setActiveIdx(next);
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="container-x relative py-28 md:py-36"
    >
      <SectionHeading
        eyebrow="Where I've contributed"
        title="Experience"
        blurb="Roles that have shaped how I work — research, leadership, support, and student engagement."
      />

      {/* DESKTOP: animated path layout */}
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
                <stop offset="100%" stopColor="#6334ff" stopOpacity="0.7" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* faint base path */}
            <path
              d={PATH_D}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* drawn (active) path */}
            <motion.path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: drawn }}
            />

            {/* nodes */}
            {NODES.map((n, i) => {
              const active = i <= activeIdx;
              return (
                <g key={i}>
                  <circle
                    cx="350"
                    cy={n.y}
                    r="14"
                    fill={active ? "rgba(255,1,79,0.18)" : "rgba(255,255,255,0.04)"}
                  />
                  <circle
                    cx="350"
                    cy={n.y}
                    r="6"
                    fill={active ? "#ff014f" : "#262638"}
                    stroke={active ? "rgba(255,1,79,0.6)" : "rgba(255,255,255,0.15)"}
                    strokeWidth="2"
                  />
                </g>
              );
            })}

            {/* comet */}
            <g filter="url(#glow)">
              <circle
                cx={comet.x}
                cy={comet.y}
                r="20"
                fill="rgba(255,1,79,0.25)"
              />
              <circle
                cx={comet.x}
                cy={comet.y}
                r="9"
                fill="#ff014f"
              />
              <circle
                cx={comet.x}
                cy={comet.y}
                r="4"
                fill="#ffffff"
              />
            </g>
          </svg>

          {/* cards positioned alongside nodes */}
          {EXPERIENCE.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const top = NODES[i].y - 100; // align card center to node
            return (
              <motion.article
                key={exp.role}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                animate={{
                  opacity: i <= activeIdx ? 1 : 0.35,
                  x: 0,
                  scale: i <= activeIdx ? 1 : 0.97,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={cn(
                  "absolute w-[300px] rounded-3xl border bg-ink-900/70 p-5 backdrop-blur-sm transition-shadow",
                  isLeft ? "left-[6%]" : "right-[6%]",
                  i <= activeIdx
                    ? "border-neon/25 shadow-glow"
                    : "border-white/8"
                )}
                style={{ top: `${top}px` }}
              >
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
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <h4 className="mt-1 text-sm font-medium text-bone-300">
                  {exp.org}
                </h4>
                <p className="mt-2 text-xs font-semibold tracking-wider text-neon-300">
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

      {/* MOBILE: simple stack with neon line */}
      <div className="relative mt-12 md:hidden">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-neon/50 to-transparent" />
        <div className="space-y-5 pl-12">
          {EXPERIENCE.map((exp) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl border border-white/10 bg-ink-900/60 p-5 backdrop-blur-sm"
            >
              <span className="absolute -left-[34px] top-6 h-3 w-3 rounded-full bg-neon shadow-glow" />
              <span className="inline-block rounded-full bg-neon-gradient px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {exp.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {exp.role}
              </h3>
              <h4 className="mt-1 text-sm font-medium text-bone-300">
                {exp.org}
              </h4>
              <p className="mt-2 text-xs font-semibold tracking-wider text-neon-300">
                {exp.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-bone-300">
                {exp.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

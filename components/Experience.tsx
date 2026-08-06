"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EXPERIENCE } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const START_Y = 40;
const NODE_SPACING = 440;
const LOOP_RADIUS = 70;
const LOOP_GAP = 110;

// Full circle via the standard 4-bezier approximation, centered at (cx, cy),
// starting/ending at its own top point so it can be spliced into a path.
function circleLoop(cx: number, cy: number, r: number, mirrored: boolean) {
  const k = r * 0.5523;
  const top = `${cx} ${cy - r}`;
  const side1 = mirrored ? cx - r : cx + r;
  const side2 = mirrored ? cx + r : cx - r;
  const sign = mirrored ? -1 : 1;
  let d = "";
  d += ` C ${cx + sign * k} ${cy - r}, ${side1} ${cy - k}, ${side1} ${cy}`;
  d += ` C ${side1} ${cy + k}, ${cx + sign * k} ${cy + r}, ${cx} ${cy + r}`;
  d += ` C ${cx - sign * k} ${cy + r}, ${side2} ${cy + k}, ${side2} ${cy}`;
  d += ` C ${side2} ${cy - k}, ${cx - sign * k} ${cy - r}, ${top}`;
  return d;
}

// Two playful loop-de-loops the comet traces before starting its climb down.
// circleLoop always returns to its own starting point, so the path cursor
// after both loops sits back at loop2StartY — that's what buildTimeline must
// continue from. The loops' visual footprint reaches further down though
// (to loop2Cy + LOOP_RADIUS), which is what node spacing needs to clear.
const loop1Cy = START_Y + LOOP_RADIUS;
const loop2StartY = START_Y + LOOP_RADIUS * 2;
const loop2Cy = loop2StartY + LOOP_RADIUS;
const LOOP_PATH_END_Y = loop2StartY;
const LOOP_VISUAL_BOTTOM = loop2Cy + LOOP_RADIUS;
const LOOP_D =
  `M 350 ${START_Y}` +
  circleLoop(350, loop1Cy, LOOP_RADIUS, false) +
  ` C 380 ${START_Y + 40}, 320 ${loop2StartY - 40}, 350 ${loop2StartY}` +
  circleLoop(350, loop2Cy, LOOP_RADIUS, true);

const NODE_START_Y = LOOP_VISUAL_BOTTOM + LOOP_GAP;
const MOBILE_DEFAULT_VISIBLE = 4;

function buildTimeline(count: number) {
  const nodes = Array.from({ length: count }, (_, i) => ({
    y: NODE_START_Y + i * NODE_SPACING,
  }));

  let d = LOOP_D;
  let prevY = LOOP_PATH_END_Y;
  nodes.forEach((n, i) => {
    const controlX = i % 2 === 0 ? 540 : 160;
    const span = n.y - prevY;
    const c1 = prevY + span * 0.35;
    const c2 = prevY + span * 0.75;
    d += ` C ${controlX} ${c1}, ${controlX} ${c2}, 350 ${n.y}`;
    prevY = n.y;
  });

  return { nodes, pathD: d, height: prevY + 100 };
}

const { nodes: NODES, pathD: PATH_D, height: TIMELINE_HEIGHT } = buildTimeline(
  EXPERIENCE.length
);
const LOOP_PIXEL_HEIGHT = LOOP_VISUAL_BOTTOM - START_Y;

export function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLen, setPathLen] = useState(0);
  const [loopLen, setLoopLen] = useState(0);
  const [comet, setComet] = useState({ x: 350, y: 40 });
  const [activeIdx, setActiveIdx] = useState(-1);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const mobileVisible = showAllMobile
    ? EXPERIENCE
    : EXPERIENCE.slice(0, MOBILE_DEFAULT_VISIBLE);
  const mobileHiddenCount = EXPERIENCE.length - MOBILE_DEFAULT_VISIBLE;

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.7", "end 0.3"],
  });

  const drawn = useMotionValue(0);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
    const temp = document.createElementNS("http://www.w3.org/2000/svg", "path");
    temp.setAttribute("d", LOOP_D);
    setLoopLen(temp.getTotalLength());
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!pathRef.current || !pathLen || !loopLen) return;
    const clamped = Math.min(Math.max(p, 0), 1);
    const pixelY = clamped * TIMELINE_HEIGHT;

    // The loop-de-loops pack a lot of arc length into little vertical space —
    // give them their own pixel-proportional budget instead of letting a flat
    // length-fraction eat scroll distance the rest of the timeline needs.
    let lengthAtPoint;
    if (pixelY <= LOOP_PIXEL_HEIGHT) {
      lengthAtPoint = (pixelY / LOOP_PIXEL_HEIGHT) * loopLen;
    } else {
      const remainingPixels = TIMELINE_HEIGHT - LOOP_PIXEL_HEIGHT;
      const remainingLength = pathLen - loopLen;
      const localProgress = (pixelY - LOOP_PIXEL_HEIGHT) / remainingPixels;
      lengthAtPoint = loopLen + localProgress * remainingLength;
    }

    drawn.set(lengthAtPoint / pathLen);

    const pt = pathRef.current.getPointAtLength(lengthAtPoint);
    setComet({ x: pt.x, y: pt.y });
    const next = NODES.reduce((acc, n, i) => (pt.y >= n.y - 80 ? i : acc), -1);
    setActiveIdx(next);
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="container-x relative py-16 md:py-28 lg:py-36 dot-grid"
    >
      <SectionHeading
        eyebrow="Where I've contributed"
        title="Experience"
        blurb="Roles that have shaped how I work — research, leadership, support, and student engagement."
      />

      {/* DESKTOP */}
      <div className="relative mt-20 hidden md:block">
        <div
          ref={timelineRef}
          className="relative mx-auto"
          style={{ height: `${TIMELINE_HEIGHT}px` }}
        >
          <svg
            viewBox={`0 0 700 ${TIMELINE_HEIGHT}`}
            preserveAspectRatio="xMidYMin meet"
            className="absolute left-1/2 top-0 h-full w-[640px] -translate-x-1/2 lg:w-[720px] xl:w-[800px]"
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
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow)"
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
      <div className="relative mt-10 md:hidden">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-neon/40 to-transparent" />
        <div className="space-y-4 pl-12">
          {mobileVisible.map((exp, i) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-ink-900/60 p-4 backdrop-blur-sm"
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

        {mobileHiddenCount > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAllMobile((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-bone-200 transition-all duration-200 hover:border-neon/40 hover:bg-neon/10 hover:text-white"
            >
              {showAllMobile ? "Show fewer" : `View all experience (+${mobileHiddenCount})`}
              <ChevronDown
                size={15}
                className={cn(
                  "transition-transform duration-300",
                  showAllMobile ? "rotate-180" : "group-hover:translate-y-0.5"
                )}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

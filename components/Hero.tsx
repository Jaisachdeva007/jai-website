"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";
import { PROFILE, STATS } from "@/lib/content";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section
      id="about"
      className="container-x relative isolate flex min-h-[100svh] items-center pt-32 md:pt-24 dot-grid"
    >
      {/* glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-neon/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[450px] w-[450px] rounded-full bg-purple/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[100px]"
      />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-bone-200 backdrop-blur-sm"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Open to opportunities · Canada / Remote
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl font-bold leading-[1.02] tracking-tight md:text-7xl xl:text-8xl"
          >
            <span className="text-gradient">Hi, I&apos;m </span>
            <span className="text-neon-gradient">Jai.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="mt-4 font-display text-2xl font-medium text-bone-200 md:text-3xl"
          >
            <Typewriter words={PROFILE.rotatingTitles} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-bone-300 md:text-lg"
          >
            {PROFILE.about}
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="mt-8 flex items-center gap-0 divide-x divide-white/10 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm"
          >
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-1 flex-col items-center py-4">
                <span className="font-display text-2xl font-bold text-gradient md:text-3xl">
                  {s.value}
                </span>
                <span className="mt-0.5 text-[11px] font-medium text-bone-400 text-center leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-neon-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-0.5"
            >
              View my work
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <div className="flex items-center gap-2">
              {[
                { href: PROFILE.socials.github, Icon: Github, label: "GitHub" },
                { href: PROFILE.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: PROFILE.socials.instagram, Icon: Instagram, label: "Instagram" },
                { href: PROFILE.socials.email, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-bone-200 transition-all duration-200 hover:border-neon/40 hover:text-white hover:bg-neon/10 hover:shadow-glow-sm"
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-800">
            {/* animated rotating glow ring */}
            <div className="pointer-events-none absolute -inset-1 animate-spin-slow rounded-[2.75rem] bg-[conic-gradient(from_0deg,#ff014f,transparent_30%,#6334ff_60%,transparent_85%,#ff014f)] opacity-50 blur-md" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-ink-900" />
            <Image
              src="/assets/header.png"
              alt="Jai Sachdeva"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="relative z-10 object-cover"
            />
            <div className="pointer-events-none absolute inset-0 z-20 rounded-[2.5rem] bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

            {/* location badge */}
            <div className="absolute bottom-4 left-4 z-30 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-bone-100 backdrop-blur-md">
              Halifax, NS 🇨🇦
            </div>
          </div>

          {/* floating available badge */}
          <motion.div
            initial={{ opacity: 0, x: 16, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -right-4 top-6 z-40 flex items-center gap-2 rounded-full border border-neon/30 bg-ink-900/90 px-3.5 py-2 text-xs font-semibold text-bone-100 shadow-glow backdrop-blur-md md:-right-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Available
          </motion.div>

        </motion.div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.25em] text-bone-400 transition hover:text-neon md:flex"
      >
        SCROLL
        <span className="block h-10 w-px animate-pulse-glow bg-gradient-to-b from-bone-300 to-transparent" />
      </a>
    </section>
  );
}

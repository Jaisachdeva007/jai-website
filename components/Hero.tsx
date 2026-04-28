"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";
import { PROFILE } from "@/lib/content";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section
      id="about"
      className="container-x relative isolate flex min-h-[100svh] items-center pt-32 md:pt-24"
    >
      {/* glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-neon/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]"
      />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-bone-200"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Open to opportunities · Canada / Remote
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="text-gradient">Hi, I&apos;m </span>
            <span className="text-neon-gradient">Jai.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-3 font-display text-2xl font-medium text-bone-200 md:text-3xl"
          >
            <Typewriter words={PROFILE.rotatingTitles} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-bone-300 md:text-lg"
          >
            {PROFILE.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-neon-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-glow-lg"
            >
              View my work
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-bone-200 transition hover:border-neon/40 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-bone-200 transition hover:border-neon/40 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PROFILE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-bone-200 transition hover:border-neon/40 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={PROFILE.socials.email}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-bone-200 transition hover:border-neon/40 hover:text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800">
            {/* animated rotating glow ring */}
            <div className="pointer-events-none absolute -inset-1 animate-spin-slow rounded-[2.25rem] bg-[conic-gradient(from_0deg,#ff014f,transparent_30%,#6334ff_60%,transparent_85%,#ff014f)] opacity-40 blur-md" />
            <div className="absolute inset-0 rounded-[2rem] bg-ink-900" />
            <Image
              src="/assets/header.png"
              alt="Jai Sachdeva"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="relative z-10 object-cover"
            />
            {/* dark vignette to make text labels pop */}
            <div className="pointer-events-none absolute inset-0 z-20 rounded-[2rem] bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 z-30 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-bone-100 backdrop-blur-md">
              Halifax, NS
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium tracking-widest text-bone-300 hover:text-neon md:flex"
      >
        SCROLL
        <span className="block h-8 w-px animate-pulse-glow bg-gradient-to-b from-bone-300 to-transparent" />
      </a>
    </section>
  );
}

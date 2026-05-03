"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      {/* background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-[400px] bg-gradient-to-b from-neon/5 via-transparent to-transparent blur-3xl"
      />

      <div className="container-x py-20 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-neon"
            >
              Let&apos;s build something
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-gradient md:text-5xl lg:text-6xl"
            >
              Got an idea, role, or chaotic side project?{" "}
              <span className="text-neon-gradient">I&apos;m in.</span>
            </motion.h2>

            <motion.a
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              href={PROFILE.socials.email}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-neon-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-0.5"
            >
              <Mail size={16} />
              jaisachdeva028@gmail.com
              <ArrowUpRight
                size={15}
                className="opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="flex flex-col items-start gap-5 md:items-end"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bone-400">
              Find me online
            </p>
            <div className="flex gap-2.5">
              {[
                { href: PROFILE.socials.github, Icon: Github, label: "GitHub" },
                { href: PROFILE.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: PROFILE.socials.instagram, Icon: Instagram, label: "Instagram" },
                { href: PROFILE.socials.orcid, label: "ORCID", text: "iD" },
              ].map(({ href, Icon, label, text }: any) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-xs font-bold text-bone-200 transition-all duration-200 hover:border-neon/40 hover:bg-neon/10 hover:text-white hover:shadow-glow-sm"
                >
                  {Icon ? <Icon size={18} /> : text}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-bone-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Jai Sachdeva — Built with Next.js, Tailwind &amp; Framer Motion.</p>
          <p className="font-mono tracking-wider">v2.0 · dark mode only</p>
        </div>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { PROFILE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">
              Let&apos;s build something
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight text-gradient md:text-5xl">
              Got an idea, role, or chaotic side project? I&apos;m in.
            </h2>
            <a
              href={PROFILE.socials.email}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-neon-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-glow-lg"
            >
              <Mail size={16} />
              jaisachdeva028@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bone-300">
              Find me
            </p>
            <div className="flex gap-2">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-bone-200 transition hover:border-neon/40 hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-bone-200 transition hover:border-neon/40 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PROFILE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-bone-200 transition hover:border-neon/40 hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href={PROFILE.socials.orcid}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-xs font-bold text-bone-200 transition hover:border-neon/40 hover:text-white"
              >
                iD
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-bone-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Jai Sachdeva — Built with Next.js, Tailwind & Framer Motion.</p>
          <p className="font-mono">v2.0 · dark mode by default</p>
        </div>
      </div>
    </footer>
  );
}

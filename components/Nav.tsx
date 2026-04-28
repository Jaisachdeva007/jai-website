"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed left-1/2 top-4 z-50 w-[min(92%,68rem)] -translate-x-1/2 rounded-full border transition-all duration-300",
          scrolled
            ? "border-white/10 bg-ink-900/70 backdrop-blur-xl shadow-card"
            : "border-white/5 bg-ink-900/40 backdrop-blur-md"
        )}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-neon-gradient text-sm font-bold text-white shadow-glow">
              JS
              <span className="absolute inset-0 rounded-full bg-neon/20 blur-md opacity-0 transition group-hover:opacity-100" />
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-bone-100 sm:inline">
              jai sachdeva
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm text-bone-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:jaisachdeva028@gmail.com"
            className="hidden items-center gap-2 rounded-full bg-neon-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-glow-lg md:inline-flex"
          >
            Get in touch
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-full p-2 text-bone-100 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl font-semibold text-bone-100 hover:text-neon"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="mailto:jaisachdeva028@gmail.com"
                onClick={close}
                className="mt-4 rounded-full bg-neon-gradient px-6 py-3 text-base font-semibold text-white shadow-glow"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

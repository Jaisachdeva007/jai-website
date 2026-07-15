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
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -60% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed left-1/2 top-4 z-50 w-[92%] max-w-[68rem] -translate-x-1/2 rounded-full border transition-all duration-500",
          scrolled
            ? "border-white/10 bg-ink-900/80 backdrop-blur-2xl shadow-card"
            : "border-white/5 bg-ink-900/30 backdrop-blur-md"
        )}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-dual-gradient text-sm font-bold text-white shadow-glow transition-shadow duration-300 group-hover:shadow-glow-lg">
              JS
              <span className="absolute inset-0 rounded-full bg-electric/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    active === l.href.slice(1)
                      ? "text-white"
                      : "text-bone-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {active === l.href.slice(1) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:jaisachdeva028@gmail.com"
            className="hidden items-center gap-2 rounded-full bg-neon-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-0.5 md:inline-flex"
          >
            Get in touch
          </a>

          <motion.button
            aria-label="Toggle menu"
            whileTap={{ scale: 0.88 }}
            className="flex items-center justify-center md:hidden h-9 w-9 flex-shrink-0 rounded-full bg-white/10 text-white transition-colors hover:bg-white/15"
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0, scale: 0.4 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.4 }}
                transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-hidden bg-ink-950/97 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-neon/15 blur-[100px]"
            />
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-electric/12 blur-[100px]"
            />

            <div className="relative flex h-full flex-col items-center justify-center gap-7 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 28, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    delay: 0.06 * i,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className={cn(
                    "font-display text-4xl font-bold transition-colors",
                    active === l.href.slice(1) ? "text-neon" : "text-bone-100 hover:text-neon"
                  )}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:jaisachdeva028@gmail.com"
                onClick={close}
                initial={{ opacity: 0, y: 28, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileTap={{ scale: 0.92 }}
                transition={{
                  delay: 0.06 * links.length,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="mt-4 rounded-full bg-neon-gradient px-8 py-3.5 text-base font-semibold text-white shadow-glow"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

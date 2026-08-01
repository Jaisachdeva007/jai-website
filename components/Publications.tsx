"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, ChevronDown } from "lucide-react";
import { PUBLICATIONS, type Publication } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const STATUS_STYLES: Record<Publication["status"], string> = {
  Published: "bg-neon-gradient text-white",
  Accepted: "border border-electric/30 bg-electric/10 text-electric-300",
  Presented: "border border-neon/30 bg-neon/10 text-neon-300",
  "Under Review": "border border-white/15 bg-white/5 text-bone-300",
};

const DEFAULT_VISIBLE = 4;

export function Publications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PUBLICATIONS : PUBLICATIONS.slice(0, DEFAULT_VISIBLE);
  const hiddenCount = PUBLICATIONS.length - DEFAULT_VISIBLE;

  return (
    <section id="publications" className="container-x relative py-16 md:py-28 lg:py-36">
      <SectionHeading
        eyebrow="Research output"
        title="Publications & talks"
        blurb="Peer-reviewed work spanning HCI, AI-assisted programming education, and VR interaction — from journal chapters to conference proceedings."
      />

      <div className="mx-auto mt-10 max-w-3xl space-y-3 md:mt-14 md:space-y-4">
        {visible.map((pub, i) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/25 hover:shadow-glow sm:p-6"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="mt-0.5 hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-neon-300 sm:inline-flex">
                <FileText size={18} />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest",
                      STATUS_STYLES[pub.status]
                    )}
                  >
                    {pub.status}
                  </span>
                  <span className="text-xs font-mono font-medium text-bone-400">
                    {pub.year}
                  </span>
                </div>

                <h3 className="mt-2.5 font-display text-base font-semibold leading-snug text-white sm:mt-3 md:text-lg">
                  {pub.title}
                </h3>
                <p className="mt-1.5 text-sm italic leading-relaxed text-bone-300">
                  {pub.venue}
                </p>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-bone-300 transition hover:text-electric"
                  >
                    <ExternalLink size={13} />
                    view DOI
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-bone-200 transition-all duration-200 hover:border-neon/40 hover:bg-neon/10 hover:text-white"
          >
            {showAll ? "Show fewer" : `View all publications (+${hiddenCount})`}
            <ChevronDown
              size={15}
              className={cn(
                "transition-transform duration-300",
                showAll ? "rotate-180" : "group-hover:translate-y-0.5"
              )}
            />
          </button>
        </div>
      )}
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  blurb?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, blurb, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-neon"
      >
        <span className="h-px w-8 bg-neon-gradient" />
        {eyebrow}
        <span className="h-px w-8 bg-neon-gradient" style={align === "left" ? { display: "none" } : {}} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.06 }}
        className="font-display text-4xl font-bold tracking-tight text-gradient md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {blurb && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.12 }}
          className="mt-5 text-base leading-relaxed text-bone-300 md:text-lg"
        >
          {blurb}
        </motion.p>
      )}
    </div>
  );
}

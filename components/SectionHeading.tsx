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
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neon"
      >
        <span className="h-px w-6 bg-neon" />
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.05 }}
        className="font-display text-4xl font-bold tracking-tight text-gradient md:text-5xl"
      >
        {title}
      </motion.h2>

      {blurb && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base leading-relaxed text-bone-300"
        >
          {blurb}
        </motion.p>
      )}
    </div>
  );
}

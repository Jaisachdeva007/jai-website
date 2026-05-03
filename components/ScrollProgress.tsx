"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        boxShadow: "0 0 10px rgba(255,1,79,0.8), 0 0 20px rgba(255,1,79,0.4)",
      }}
      className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-neon-gradient"
    />
  );
}

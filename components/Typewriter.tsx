"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
};

export function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1400,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const word = words[index % words.length];

    if (phase === "typing") {
      if (text.length < word.length) {
        const t = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          typeSpeed
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), pause);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(word.slice(0, text.length - 1)),
          deleteSpeed
        );
        return () => clearTimeout(t);
      }
      setIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }
  }, [text, phase, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[0.9em] w-[2px] -mb-0.5 animate-pulse-glow bg-neon align-middle"
      />
    </span>
  );
}

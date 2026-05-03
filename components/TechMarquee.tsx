"use client";

import { SKILLS } from "@/lib/content";

const items = SKILLS.flatMap((g) => g.items);

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-3">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="chip whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

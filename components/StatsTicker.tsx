"use client";

const ITEMS = [
  { label: "CS Society President", accent: "neon" },
  { label: "Research Assistant @ Dalhousie", accent: "electric" },
  { label: "7+ Projects Shipped", accent: "neon" },
  { label: "2 Hackathon Wins", accent: "electric" },
  { label: "5 Publications & Talks", accent: "neon" },
  { label: "Accepted to HCI International '26", accent: "electric" },
  { label: "4th Year CS", accent: "neon" },
  { label: "Halifax, NS", accent: "electric" },
  { label: "Open to Work", accent: "neon" },
];

const doubled = [...ITEMS, ...ITEMS];

export function StatsTicker() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-ink-900/50 py-3 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-5 text-[11px] font-mono font-medium uppercase tracking-widest text-bone-300"
          >
            <span
              className={
                item.accent === "neon"
                  ? "text-[9px] text-neon"
                  : "text-[9px] text-electric"
              }
            >
              ◆
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

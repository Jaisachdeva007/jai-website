export const PROFILE = {
  name: "Jai Sachdeva",
  tagline: "I build at the intersection of AI, design, and people.",
  about:
    "4th-year Computer Science student at Dalhousie University. Curious about Human–Computer Interaction, AI, and UI/UX. Off the keyboard: roller hockey, tennis, and competitive debating.",
  rotatingTitles: [
    "CS @ Dalhousie",
    "Builder",
    "AI tinkerer",
    "UI/UX nerd",
    "Research Assistant",
  ],
  socials: {
    github: "https://github.com/Jaisachdeva007",
    linkedin: "https://www.linkedin.com/in/jai-sachdeva-993261212",
    instagram: "https://instagram.com/jai_sachdevaaaa",
    orcid: "https://orcid.org/0009-0001-3902-3694",
    email: "mailto:jaisachdeva028@gmail.com",
  },
};

export type Project = {
  title: string;
  blurb: string;
  bullets: string[];
  stack: string[];
  github?: string;
  demo?: string;
  badge?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "EmoScape VR",
    blurb:
      "An embodied VR space where users revisit and reflect on their emotional history — built on a GI '26 research paper.",
    bullets: [
      "FastAPI pipeline: Whisper transcription, Ollama (Llama 3.2) reasoning, VADER sentiment",
      "Three.js + WebXR frontend rendering a 3D emotional spline of past sessions",
      "Runs on Quest or in-browser; SQLite session storage",
    ],
    stack: ["FastAPI", "Three.js", "WebXR", "Ollama", "Whisper"],
    github: "https://github.com/Jaisachdeva007/emoscape",
    badge: "Research",
  },
  {
    title: "Care Companion",
    blurb:
      "A Flutter app pairing seniors with caregivers — meds, voice help, and emergency services on one shared profile.",
    bullets: [
      "Dual-role accounts (senior ↔ caregiver) synced via Firebase Auth and Firestore",
      "Medication tracking with timezone-aware local reminders + voice in/out (speech_to_text, TTS)",
      "Emergency services lookup with geolocator + OpenStreetMap",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "OpenStreetMap"],
    github: "https://github.com/Jaisachdeva007/care-companion",
    badge: "Flagship",
  },
  {
    title: "EviaFi",
    blurb:
      "AI-powered personal finance app that helps students track spending and build healthier money habits.",
    bullets: [
      "RAG chatbot combining LLM reasoning with stored financial data",
      "Ollama-based local inference for personalized insights",
      "Habit tracking + dashboards designed to nudge behavior",
    ],
    stack: ["React Native", "Firebase", "Ollama", "RAG"],
  },
  {
    title: "Nurse Navigator",
    blurb:
      "Location-aware healthcare chatbot with on-device data — built in 36 hours at a Generative AI hackathon.",
    bullets: [
      "Generative AI guidance scoped to a specific facility",
      "Local data storage for context-aware answers",
      "Designed and shipped in Angular under hackathon constraints",
    ],
    stack: ["Angular", "Generative AI", "TypeScript"],
    github: "https://github.com/Jaisachdeva007/Gen-AI",
    badge: "Hackathon",
  },
  {
    title: "Smart Compass",
    blurb:
      "Indoor navigation system using Visual Positioning — with a treasure-hunt twist.",
    bullets: [
      "VPS-driven indoor wayfinding inside complex buildings",
      "Built in Unity / C# with custom interaction layer",
      "Treasure-hunt mechanic to make navigation playful",
    ],
    stack: ["Unity", "C#", "VPS"],
    badge: "Coming soon",
  },
  {
    title: "GGJ 2024 — VR",
    blurb:
      "A Meta Quest VR game built at Global Game Jam 2024. Won Most Ambitious.",
    bullets: [
      "Immersive VR designed around the GGJ theme",
      "Built in Unity with C# in 48 hours",
      "Awarded Most Ambitious Project",
    ],
    stack: ["Unity", "C#", "VR"],
    github: "https://github.com/AdrianLloyd7113/ggj2024",
    badge: "Award winner",
  },
];

export type Experience = {
  role: string;
  org: string;
  tag: string;
  date: string;
  description: string;
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Research Assistant",
    org: "Dalhousie University",
    tag: "Research",
    date: "2025 — Present",
    description:
      "Researching programming education and how students engage with course material. Analyzing engagement patterns to inform teaching practice.",
  },
  {
    role: "President, CS Society",
    org: "Dalhousie University",
    tag: "Leadership",
    date: "2025 — Present",
    description:
      "Leading the student society — running academic and social events, building partnerships with faculty, and growing the CS community.",
  },
  {
    role: "Engagement Student Ambassador",
    org: "Student Life, Dalhousie",
    tag: "Outreach",
    date: "2024 — Present",
    description:
      "Supporting outreach and campus engagement. Helping prospective and incoming students feel connected to university life.",
  },
  {
    role: "ITS Client Services",
    org: "Dalhousie University",
    tag: "Support",
    date: "2022 — Present",
    description:
      "Frontline tech support for students, faculty, and staff. Hardware and software troubleshooting, lab and systems management.",
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  blurb: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Programming & Development",
    icon: "code",
    blurb:
      "Building software across web, mobile, and interactive systems with a strong foundation in programming and architecture.",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C",
      "C#",
      "SQL",
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express",
      "Firebase",
    ],
  },
  {
    title: "Testing & Debugging",
    icon: "flask",
    blurb:
      "Writing reliable software and chasing down issues with a methodical, test-driven approach.",
    items: [
      "JUnit",
      "Espresso",
      "UI Automator",
      "TDD",
      "Unit Testing",
      "Debugging",
      "Root Cause Analysis",
      "Production Support",
    ],
  },
  {
    title: "Design & Interaction",
    icon: "wand",
    blurb:
      "Designing interfaces that feel obvious — with attention to typography, motion, and information hierarchy.",
    items: [
      "Figma",
      "UI/UX",
      "Tailwind CSS",
      "Framer Motion",
      "Prototyping",
      "Design Systems",
    ],
  },
];

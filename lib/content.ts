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
    "Published Researcher",
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
    title: "Grid-Sailing Experiment Platform",
    blurb:
      "A full-stack experiment management system built as lead developer for a Dalhousie Faculty of Health research study.",
    bullets: [
      "End-to-end platform covering 6 experimental groups with researcher and participant login",
      "Session block logic + SQLite data layer tracking reaction time, accuracy, score, and movement time",
      "In-app analytics viewer with drill-down charts, CSV export, and CI/CD via GitHub Actions",
    ],
    stack: ["Python", "Pygame", "SQLite", "CI/CD"],
    badge: "Flagship",
  },
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
    badge: "BeHCI Lab",
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
      "AR-powered indoor navigation and wayfinding system using AI for precise routing — no Wi-Fi or Bluetooth required.",
    bullets: [
      "AR overlays with behavioral analytics and adaptive route personalization",
      "Built in Unity / C# with a custom interaction layer",
      "Accepted to HCI International 2026 (LNCS, Springer)",
    ],
    stack: ["Unity", "C#", "AR"],
    badge: "HCI Intl '26",
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
    role: "Lead Developer",
    org: "Grid-Sailing Project, Faculty of Health",
    tag: "Research",
    date: "2025 — Present",
    description:
      "Architected and built a full-stack experiment platform from scratch for a Faculty of Health study — REST API, database schema, and a CI/CD pipeline via GitHub Actions — coordinating sprints directly with faculty stakeholders.",
  },
  {
    role: "Research Assistant",
    org: "BeHCI & Persuasive Computing Labs",
    tag: "Research",
    date: "2025 — Present",
    description:
      "Building Care Companion, EmoScape VR, and SmartCompass — privacy-first, AI-driven systems spanning mobile, VR, and AR wayfinding. SmartCompass accepted to HCI International 2026.",
  },
  {
    role: "President, CS Society",
    org: "Dalhousie University",
    tag: "Leadership",
    date: "2025 — Apr 2026",
    description:
      "Leading Dalhousie's largest faculty society — 1200+ Computer Science students. Organized a 300+ guest Snowball Awards Gala, hackathons, and ski trips; managed sponsorships and the executive team.",
  },
  {
    role: "Teaching Assistant",
    org: "Software Engineering, Intro Programming & Theory of CS",
    tag: "Teaching",
    date: "2025 — Apr 2026",
    description:
      "Supervising 8+ Agile teams shipping Firebase-backed Android apps, running weekly labs for 60+ intro programming students, and marking 150+ formal-proof submissions — across three concurrent courses.",
  },
  {
    role: "Campus Engagement & Community Safety",
    org: "Student Life & Residence Life, Dalhousie",
    tag: "Outreach",
    date: "2024 — Apr 2026",
    description:
      "Supporting 500+ student events as an Engagement Ambassador, plus residence safety monitoring and crisis response on the Community Safety Team.",
  },
  {
    role: "ITS Client Services",
    org: "Dalhousie University",
    tag: "Support",
    date: "2022 — Apr 2026",
    description:
      "Frontline tech support for 20,000+ students, faculty, and staff. 500+ tickets closed with hardware, software, and systems troubleshooting.",
  },
];

export type Publication = {
  title: string;
  venue: string;
  status: "Published" | "Accepted" | "Presented" | "Under Review";
  year: string;
  link?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Data-Informed Decision Making in Introductory Programming Instruction",
    venue: "Fostering Educational Culture for Student Success, IGI Global",
    status: "Published",
    year: "2026",
    link: "https://doi.org/10.4018/979-8-3373-6960-0.ch009",
  },
  {
    title:
      "SmartCompass: A Persuasive Mobile-Based Technology for Indoor Navigation and Wayfinding using Augmented Reality and Artificial Intelligence",
    venue: "HCI International 2026, LNCS Proceedings (Springer)",
    status: "Accepted",
    year: "2026",
  },
  {
    title:
      "Program Planning Notations in Introductory Programming Instruction: The Role of Generative AI Tools",
    venue: "DCUTL 2026 Pre-Conference, Dalhousie University",
    status: "Presented",
    year: "2026",
  },
  {
    title:
      "TriSelect: Distance Adaptive Multimodal Object Selection in VR Using Eye Gaze, Hand Gesture, and Voice",
    venue: "ICMI 2026",
    status: "Under Review",
    year: "2026",
  },
  {
    title: "EarCoach: Earable AI Scaffolding for Novice Programmers",
    venue: "Peer review",
    status: "Under Review",
    year: "2026",
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  blurb: string;
  items: string[];
};

export const STATS: { value: string; label: string }[] = [
  { value: "5", label: "Publications & talks" },
  { value: "7+", label: "Projects shipped" },
  { value: "1200+", label: "Students led" },
  { value: "2×", label: "Hackathon winner" },
];

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
      "Swift",
      "SQL",
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express",
      "GraphQL",
      "Firebase",
    ],
  },
  {
    title: "Data & Cloud",
    icon: "database",
    blurb:
      "Modeling, storing, and shipping data — from relational schemas to cloud deployment.",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Redis",
      "Google Cloud Platform",
      "Vercel",
      "Netlify",
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

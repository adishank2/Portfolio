// ========== PERSONAL INFO ==========
export const personalInfo = {
  name: "Dishank Agrawal",
  title: "Engineer · Developer",
  email: "adishank2@gmail.com",
  bio: "I remove all bugs from life.",
  location: "Indore, India",
  avatarUrl: null, // Will use a generated avatar
  about: "I am a passionate Engineer and Developer dedicated to building intelligent systems and seamless user experiences. With a focus on AI Agent development and modern web technologies, I thrive on solving complex problems and turning ideas into functional, clean, and high-performance code. I believe that technology should be intuitive, accessible, and most importantly, bug-free.",
};

// ========== SOCIAL LINKS ==========
export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/adishank2-3005412ba", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/adishank2", icon: "github" },
  { name: "Instagram", url: "https://instagram.com/dishank_agrwal", icon: "instagram" },
  { name: "Email", url: "mailto:adishank2@gmail.com", icon: "email" },
];

// ========== PROJECTS (Home page summary) ========== 
export const experienceSummary = [
  {
    company: "AI Dev Team 4.0",
    role: "Autonomous Multi-Agent Development Platform",
    status: "Completed",
    period: "Recent Project",
  },
  {
    company: "David AI",
    role: "Intelligent Voice-Activated Desktop Assistant",
    status: "Ongoing",
    period: "Personal Project",
  },
  {
    company: "Personal Portfolio",
    role: "Frontend Developer & Designer",
    status: "Completed",
  },
];

// ========== PROJECTS (Projects page detailed) ==========
export const projects = [
  {
    company: "AI Dev Team 4.0",
    role: "Autonomous Multi-Agent Development Platform",
    period: "Recent Project",
    location: "Personal Project",
    technologies: ["Python", "FastAPI", "WebSocket", "CrewAI", "LangChain", "React", "Ollama", "Git REST API"],
    achievements: [
      "Designed a sequential framework utilizing CrewAI where 5 highly specialized personas (Product Manager, System Architect, Senior Developer, QA Analyst, and DevOps Engineer) autonomously pass outputs down a virtual pipeline, converting raw user ideas into production-ready software.",
      "100% Local LLM Processing: Circumvented expensive API infrastructure by hard-wiring the cognitive engine to a localized Ollama server running Llama 3, allowing limitless, free software generation with absolute data privacy.",
      "Engineered a robust, non-blocking Python backend using asyncio and WebSockets to capture deep LLM generation thoughts native to the AnyIO worker threads, streaming real-time inner dialogue directly to the React frontend.",
      "Augmented the DevOps Agent to physically run native subprocess git commands, authenticate with the GitHub Developer API, spin up remote repositories, and push the workspace code live with zero human intervention.",
      "Built a responsive History Architecture that automatically isolates every generated project into a unique tracked folder, allowing seamless downloads of codebases as dynamic .zip file archives.",
      "Developed a stunning premium Glassmorphism React dashboard featuring interactive Agent 'About' panels, live-loading status updates, multi-tab navigation menus, and clean custom animations.",
    ],
  },
  {
    company: "David AI",
    role: "Intelligent Voice-Activated Desktop Assistant",
    period: "Ongoing",
    location: "Personal Project",
    technologies: ["Python", "FastAPI", "React", "Ollama", "Whisper", "WebSocket", "SQLite", "Three.js"],
    achievements: [
      "Designed and developed David AI, a privacy-first voice-activated desktop assistant that runs entirely on-device using Ollama (LLaMA 3.2/Phi-3) and OpenAI Whisper — zero cloud dependency for AI inference.",
      "Built a FastAPI WebSocket server bridging a React frontend to the Python backend, enabling real-time bidirectional communication with auto-reconnect and concurrent client support.",
      "Architected a plugin system with 12+ extensible modules: file operations, browser automation (Selenium), email (SMTP), clipboard manager, system monitor, screenshot/OCR, window control, calendar/reminders, weather, WhatsApp integration, music playback, and web search.",
      "Implemented semantic long-term memory using Ollama vector embeddings with cosine similarity retrieval, enabling contextual recall across conversations.",
      "Engineered a multi-layered security framework with command validation, file-path whitelisting, input sanitization, dangerous-command blocking, and JSON-based audit logging.",
      "Developed a voice pipeline featuring wake-word detection (Porcupine), voice activity detection (VAD), STT (Whisper), and TTS (Edge TTS), with interruptible speech support.",
    ],
  },
  {
    company: "Personal Portfolio",
    role: "Frontend Developer & Designer",
    period: "March 2026",
    location: "Personal Project",
    technologies: ["React", "Vite", "Framer Motion", "CSS"],
    achievements: [
      "Designed and developed a minimalist, highly responsive personal portfolio using React and Vite, achieving a perfect Lighthouse score.",
      "Implemented a comprehensive design system with native CSS variables, featuring seamless Light/Dark mode toggling and zero-flicker persistence.",
      "Engineered an interactive Command Palette (Ctrl+K shortcut) with fuzzy search for rapid site navigation and external link access.",
      "Utilized Framer Motion to create smooth page transitions, staggered list animations, and interactive hover effects across the UI.",
    ],
  },
];

// ========== NAVIGATION LINKS ==========
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

// ========== RESUME ==========
export const resumeInfo = {
  title: "Resume",
  subtitle: "View and download my professional resume.",
  pdfUrl: "https://drive.google.com/file/d/1xz-uLF6ErtvtO3LQ9vXfs4e0z6PXr7Fj/view?usp=sharing",
};

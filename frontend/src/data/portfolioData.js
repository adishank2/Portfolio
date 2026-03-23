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

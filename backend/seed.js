const { getDB, initDB } = require('./db');

// Temporary internal data to seed the database
const seedProjects = [
  {
    company: "David AI",
    role: "Intelligent Voice-Activated Desktop Assistant",
    status: "Completed",
    period: "Completed",
    location: "Remote",
    technologies: ["Python", "FastAPI", "React", "Ollama", "Whisper", "WebSocket", "SQLite", "Three.js"],
    achievements: [
      "Designed and developed David AI, a privacy-first voice-activated desktop assistant that runs entirely on-device using Ollama (LLaMA 3.2/Phi-3) and OpenAI Whisper — zero cloud dependency for AI inference.",
      "Built a FastAPI WebSocket server bridging a React frontend to the Python backend, enabling real-time bidirectional communication with auto-reconnect and concurrent client support.",
      "Architected a plugin system with 12+ extensible modules: file operations, browser automation (Selenium), email (SMTP), clipboard manager, system monitor, screenshot/OCR, window control, calendar/reminders, weather, WhatsApp integration, music playback, and web search.",
      "Implemented semantic long-term memory using Ollama vector embeddings with cosine similarity retrieval, enabling contextual recall across conversations.",
      "Engineered a multi-layered security framework with command validation, file-path whitelisting, input sanitization, dangerous-command blocking, and JSON-based audit logging.",
      "Developed a voice pipeline featuring wake-word detection (Porcupine), voice activity detection (VAD), STT (Whisper), and TTS (Edge TTS), with interruptible speech support.",
    ],
    githubUrl: "https://github.com/adishank2/david-ai",
    liveUrl: null,
    order: 2
  },
  {
    company: "Personal Portfolio",
    role: "Frontend Developer & Designer",
    status: "Completed",
    period: "March 2026",
    location: "Remote",
    technologies: ["React", "Vite", "Framer Motion", "CSS"],
    achievements: [
      "Designed and developed a minimalist, highly responsive personal portfolio using React and Vite, achieving a perfect Lighthouse score.",
      "Implemented a comprehensive design system with native CSS variables, featuring seamless Light/Dark mode toggling and zero-flicker persistence.",
      "Engineered an interactive Command Palette (Ctrl+K shortcut) with fuzzy search for rapid site navigation and external link access.",
      "Utilized Framer Motion to create smooth page transitions, staggered list animations, and interactive hover effects across the UI.",
    ],
    githubUrl: "https://github.com/adishank2/Portfolio",
    liveUrl: "https://portfolio-orcin-iota-ihbotfulv2.vercel.app",
    order: 3
  },
  {
    company: "Aegis Support Agent",
    role: "Full-Stack AI Developer",
    status: "Completed",
    period: "September 2026",
    location: "Personal Project",
    technologies: ["React", "FastAPI", "Python", "CSS", "WebSockets"],
    achievements: [
      "Designed and developed a premium glassmorphic landing page with deep chat widget integration, allowing users to trigger specific AI workflows via UI interactions.",
      "Built a robust stateful conversational AI backend using FastAPI and WebSockets, supporting multi-turn dialogues and dynamic typing delays.",
      "Engineered real-time JSON payload parsing to render structured, beautiful UI data cards for policy and claim statuses.",
      "Implemented seamless chat persistence using localStorage and a simulated live agent handoff sequence with automated state transitions."
    ],
    githubUrl: "https://github.com/adishank2/Aegis_support_agent",
    liveUrl: null,
    order: 4
  },
];

async function seedDatabase() {
  try {
    const db = await initDB();
    console.log('✅ Connected to SQLite database');

    console.log('🗑️ Clearing existing projects...');
    await db.exec('DELETE FROM projects');

    console.log('🌱 Seeding new projects...');

    const stmt = await db.prepare(`
      INSERT INTO projects (company, role, status, period, location, technologies, achievements, github_url, live_url, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const project of seedProjects) {
      await stmt.run([
        project.company,
        project.role,
        project.status || null,
        project.period,
        project.location || 'Remote',
        JSON.stringify(project.technologies || []),
        JSON.stringify(project.achievements || []),
        project.githubUrl || null,
        project.liveUrl || null,
        project.order || 0
      ]);
    }

    await stmt.finalize();

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

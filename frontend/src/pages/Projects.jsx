import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const techColors = {
  'React': '#61DAFB',
  'Node.js': '#339933',
  'TypeScript': '#3178C6',
  'PostgreSQL': '#4169E1',
  'AWS': '#FF9900',
  'Docker': '#2496ED',
  'Next.js': '#000000',
  'Tailwind CSS': '#06B6D4',
  'Framer Motion': '#BB4BE2',
  'Vercel': '#000000',
  'Figma': '#F24E1E',
  'Python': '#3776AB',
  'FastAPI': '#009688',
  'Redis': '#DC382D',
  'MongoDB': '#47A248',
  'Express.js': '#000000',
  'Supabase': '#3ECF8E',
  'OpenAI': '#412991',
  'CSS': '#1572B6',
  'Photoshop': '#31A8FF',
  'Ollama': '#000000',
  'Whisper': '#10a37f',
  'WebSocket': '#010101',
  'SQLite': '#003B57',
  'Three.js': '#000000',
  'React': '#61DAFB',
  'Framer Motion': '#0055FF',
  'Vite': '#646CFF',
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'AI / Agents', 'Frontend', 'Backend'];

  const getCategories = (techs) => {
    const cats = new Set(['All']);
    if (techs.some(t => ['React', 'Vite', 'CSS', 'Framer Motion'].includes(t))) cats.add('Frontend');
    if (techs.some(t => ['Python', 'FastAPI', 'Node.js', 'SQLite', 'WebSocket'].includes(t))) cats.add('Backend');
    if (techs.some(t => ['Ollama', 'CrewAI', 'LangChain', 'Whisper'].includes(t))) cats.add('AI / Agents');
    return Array.from(cats);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      className="projects-page"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div className="page-header" variants={fadeInUp} transition={{ duration: 0.5 }}>
        <h1>Projects</h1>
        <p>A showcase of the projects I've built and contributed to.</p>
      </motion.div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
          Loading projects...
        </div>
      ) : (
      <>
        {/* Filters */}
        <motion.div className="projects-filters" variants={fadeInUp} transition={{ duration: 0.5 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects-list">
          <AnimatePresence mode="popLayout">
            {projects
              .filter(p => selectedFilter === 'All' || getCategories(p.technologies || []).includes(selectedFilter))
              .map((project, i) => (
              <motion.article
                key={project.id || i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="project-entry glass"
              >
            {/* Header */}
            <div className="project-entry__header">
              <div className="project-entry__left">
                <h2 className="project-entry__company">{project.company}</h2>
                <p className="project-entry__role">{project.role}</p>
              </div>
              <div className="project-entry__right">
                <p className="project-entry__period">{project.period}</p>
                <p className="project-entry__location">{project.location}</p>
              </div>
            </div>

            <div className="project-entry__divider" />

            {/* Technologies */}
            <div className="project-entry__section">
              <h3 className="project-entry__section-title">Technologies & Tools</h3>
              <div className="project-entry__tech-list">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="tech-badge"
                    style={{
                      '--tech-color': techColors[tech] || '#6b6b6b',
                    }}
                  >
                    <span
                      className="tech-badge__dot"
                      style={{ background: techColors[tech] || '#6b6b6b' }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="project-entry__section">
              <h3 className="project-entry__section-title">What I've done</h3>
              <ul className="project-entry__achievements">
                {project.achievements.map((item, j) => (
                  <motion.li
                    key={j}
                    className="project-entry__achievement"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05, duration: 0.3 }}
                  >
                    <span className="project-entry__achievement-bullet">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            {(project.github_url || project.live_url) && (
              <div className="project-entry__actions">
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Source Code
                  </a>
                )}
                {project.live_url && (
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="project-action-btn primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
          </AnimatePresence>
        </motion.div>
      </>
      )}
    </motion.div>
  );
}

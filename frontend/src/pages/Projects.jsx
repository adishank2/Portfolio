import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

      <div className="projects-list">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            className="project-entry glass"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
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
          </motion.article>
        ))}
      </div>
      )}
    </motion.div>
  );
}

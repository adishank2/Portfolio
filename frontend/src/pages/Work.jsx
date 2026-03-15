import { motion } from 'framer-motion';
import { workExperience } from '../data/portfolioData';
import './Work.css';

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
};

export default function Work() {
  return (
    <motion.div
      className="work-page"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div className="page-header" variants={fadeInUp} transition={{ duration: 0.5 }}>
        <h1>Work</h1>
        <p>My professional journey and the companies I've had the privilege to work with.</p>
      </motion.div>

      <div className="work-list">
        {workExperience.map((job, i) => (
          <motion.article
            key={i}
            className="work-entry"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="work-entry__header">
              <div className="work-entry__left">
                <h2 className="work-entry__company">{job.company}</h2>
                <p className="work-entry__role">{job.role}</p>
              </div>
              <div className="work-entry__right">
                <p className="work-entry__period">{job.period}</p>
                <p className="work-entry__location">{job.location}</p>
              </div>
            </div>

            <div className="work-entry__divider" />

            {/* Technologies */}
            <div className="work-entry__section">
              <h3 className="work-entry__section-title">Technologies & Tools</h3>
              <div className="work-entry__tech-list">
                {job.technologies.map((tech, j) => (
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
            <div className="work-entry__section">
              <h3 className="work-entry__section-title">What I've done</h3>
              <ul className="work-entry__achievements">
                {job.achievements.map((item, j) => (
                  <motion.li
                    key={j}
                    className="work-entry__achievement"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05, duration: 0.3 }}
                  >
                    <span className="work-entry__achievement-bullet">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

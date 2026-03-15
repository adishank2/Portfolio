import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import SocialLinks from '../components/SocialLinks';
import { 
  SiPython, SiFastapi, SiReact, SiJavascript, SiSqlite, 
  SiFramer, SiVite, SiNodedotjs, SiTailwindcss, SiPostgresql 
} from 'react-icons/si';
import './Home.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [recentProjects, setRecentProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        // Only show top 3 projects on home page
        setRecentProjects(data.slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects for home page:', err);
        setLoading(false);
      });
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email');
    }
  };

  return (
    <motion.div
      className="home"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* Hero Section */}
      <motion.section className="hero" variants={fadeInUp} transition={{ duration: 0.5 }}>
        <div className="hero__avatar">
          <motion.div 
            className="hero__avatar-img"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <img src="/avatar.png" alt={personalInfo.name} />
          </motion.div>
        </div>

        <div className="hero__info glass">
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__title">{personalInfo.title}</p>
          <button className="hero__email-btn" onClick={handleCopyEmail}>
            <span>{personalInfo.email}</span>
            {emailCopied ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
            )}
          </button>
        </div>
      </motion.section>

      {/* Bio */}
      <motion.p className="home__bio" variants={fadeInUp} transition={{ duration: 0.5 }}>
        {personalInfo.bio}
      </motion.p>



      {/* Social Links */}
      <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
        <SocialLinks />
      </motion.div>

      {/* Experience Section */}
      <motion.section className="home-section" variants={fadeInUp} transition={{ duration: 0.5 }}>
        <h2 className="section-title">Projects</h2>
        <div className="experience-list">
          {loading ? (
            <div style={{ padding: '20px 0', color: 'var(--text-secondary)' }}>Loading projects...</div>
          ) : (
            recentProjects.map((exp, i) => (
              <motion.div
                key={i}
                className="experience-item glass"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <div className="experience-item__left">
                  <div className="experience-item__company-row">
                    <h3 className="experience-item__company">{exp.company}</h3>
                    {exp.status && (
                      <span className="experience-item__status">
                        <span className="experience-item__status-dot" />
                        {exp.status}
                      </span>
                    )}
                  </div>
                  <p className="experience-item__role">{exp.role}</p>
                </div>
                <div className="experience-item__right">
                  <p className="experience-item__period">{exp.period}</p>
                  <p className="experience-item__location">{exp.location}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <Link to="/projects" className="home-section__cta">
          Show all projects
        </Link>
      </motion.section>


      {/* Tech Stack Marquee */}
      <motion.section className="home-section marquee-section" variants={fadeInUp} transition={{ duration: 0.5 }}>
        <h2 className="section-title">Stack</h2>
        <div className="marquee">
          <div className="marquee-content">
            <div className="tech-item"><SiPython /><span>Python</span></div>
            <div className="tech-item"><SiFastapi /><span>FastAPI</span></div>
            <div className="tech-item"><SiReact /><span>React</span></div>
            <div className="tech-item"><SiJavascript /><span>JavaScript</span></div>
            <div className="tech-item"><SiSqlite /><span>SQLite</span></div>
            <div className="tech-item"><SiFramer /><span>Framer</span></div>
            <div className="tech-item"><SiVite /><span>Vite</span></div>
            <div className="tech-item"><SiNodedotjs /><span>Node.js</span></div>
            <div className="tech-item"><SiTailwindcss /><span>Tailwind</span></div>
            <div className="tech-item"><SiPostgresql /><span>PostgreSQL</span></div>
            {/* Duplicate for infinite effect */}
            <div className="tech-item"><SiPython /><span>Python</span></div>
            <div className="tech-item"><SiFastapi /><span>FastAPI</span></div>
            <div className="tech-item"><SiReact /><span>React</span></div>
            <div className="tech-item"><SiJavascript /><span>JavaScript</span></div>
            <div className="tech-item"><SiSqlite /><span>SQLite</span></div>
            <div className="tech-item"><SiFramer /><span>Framer</span></div>
            <div className="tech-item"><SiVite /><span>Vite</span></div>
            <div className="tech-item"><SiNodedotjs /><span>Node.js</span></div>
            <div className="tech-item"><SiTailwindcss /><span>Tailwind</span></div>
            <div className="tech-item"><SiPostgresql /><span>PostgreSQL</span></div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

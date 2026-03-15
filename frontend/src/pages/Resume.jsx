import { motion } from 'framer-motion';
import { resumeInfo } from '../data/portfolioData';
import './Resume.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Convert Google Drive view URL to embed/preview URL
function getDriveEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

function getDriveDownloadUrl(url) {
  if (!url) return null;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return url;
}

export default function Resume() {
  const embedUrl = getDriveEmbedUrl(resumeInfo.pdfUrl);
  const downloadUrl = getDriveDownloadUrl(resumeInfo.pdfUrl);

  return (
    <motion.div
      className="resume-page"
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="page-header"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <h1>{resumeInfo.title}</h1>
        <p>{resumeInfo.subtitle}</p>
      </motion.div>

      <motion.div
        className="resume-actions"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className="resume-actions__btn resume-actions__btn--primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </a>
        )}
        {resumeInfo.pdfUrl && (
          <a
            href={resumeInfo.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-actions__btn resume-actions__btn--secondary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Open in new tab
          </a>
        )}
      </motion.div>

      {embedUrl && (
        <motion.div
          className="resume-viewer"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            className="resume-viewer__iframe"
            src={embedUrl}
            title="Resume PDF"
            allow="autoplay"
            allowFullScreen
          />
        </motion.div>
      )}
    </motion.div>
  );
}

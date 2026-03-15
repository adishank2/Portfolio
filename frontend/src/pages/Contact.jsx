import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Connect to your new backend API
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Email error:', err);
      setStatus('error');
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div className="page-header" variants={fadeInUp} transition={{ duration: 0.5 }}>
        <h1>Contact</h1>
        <p>Let's build something great together. Send me a message!</p>
      </motion.div>

      <motion.div className="contact-container" variants={fadeInUp} transition={{ duration: 0.5 }}>
        
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>You can use the form to send me an email, or reach out directly at:</p>
          <a href={`mailto:${personalInfo.email}`} className="contact-email">
            {personalInfo.email}
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Elon Musk"
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="elon@spacex.com"
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              disabled={status === 'loading'}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${status === 'loading' ? 'loading' : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-message success">✅ Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="form-message error">❌ Failed to send message. Please try again later or reach out directly at {personalInfo.email}</p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
}

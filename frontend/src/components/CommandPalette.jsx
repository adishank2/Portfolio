import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks, personalInfo, socialLinks } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import './CommandPalette.css';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const allItems = [
    ...navLinks.map(l => ({ ...l, type: 'page', icon: 'page' })),
    { name: 'Toggle Theme', path: 'theme', type: 'action', icon: 'theme' },
    { name: 'Copy Email', path: 'copy-email', type: 'action', icon: 'email' },
    { name: 'Email Resume', path: 'email-resume', type: 'action', icon: 'email' },
    { name: 'View Source Code', path: personalInfo.repoUrl, type: 'external', icon: 'code' },
    ...socialLinks.filter(s => s.name !== 'Email').map(s => ({ 
      name: s.name, 
      path: s.url, 
      type: 'external', 
      icon: 'link' 
    })),
  ];

  const filtered = query
    ? allItems.filter(i => i.name.toLowerCase().includes(query.toLowerCase()))
    : allItems;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSelect = (item) => {
    if (item.type === 'page') {
      navigate(item.path);
    } else if (item.type === 'external') {
      window.open(item.path, '_blank');
    } else if (item.path === 'copy-email') {
      navigator.clipboard.writeText(personalInfo.email);
    } else if (item.path === 'email-resume') {
      window.open(`mailto:${personalInfo.email}?subject=Resume Request&body=Hi ${personalInfo.name},\n\nI'd like to request a copy of your resume.`);
    }
    onClose();
  };

  const getIcon = (type) => {
    switch (type) {
      case 'page':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
      case 'action':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
          </svg>
        );
      case 'external':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        );
      case 'code':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="command-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
        >
          <motion.div
            className="command-palette"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="command-palette__input-wrapper">
              <svg className="command-palette__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                className="command-palette__input"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <kbd className="command-palette__esc">ESC</kbd>
            </div>

            <div className="command-palette__results">
              {filtered.length === 0 ? (
                <div className="command-palette__empty">No results found.</div>
              ) : (
                filtered.map((item, i) => (
                  <button
                    key={i}
                    className="command-palette__item"
                    onClick={() => handleSelect(item)}
                  >
                    <span className="command-palette__item-icon">
                      {getIcon(item.type)}
                    </span>
                    <span className="command-palette__item-name">{item.name}</span>
                    <span className="command-palette__item-type">{item.type}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

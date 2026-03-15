import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import BackgroundBlobs from './components/BackgroundBlobs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <Router>
      <div className="app-wrapper">
        <BackgroundBlobs />
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenCommand={() => setCommandOpen(true)}
        />

        <CommandPalette
          isOpen={commandOpen}
          onClose={() => setCommandOpen(false)}
        />

        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

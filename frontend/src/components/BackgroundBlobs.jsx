import { motion } from 'framer-motion';
import './BackgroundBlobs.css';

export default function BackgroundBlobs() {
  return (
    <div className="blobs-container">
      <motion.div 
        className="blob blob-1"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="blob blob-2"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 150, -50, 0],
          scale: [1, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="blob blob-3"
        animate={{
          x: [0, 80, -100, 0],
          y: [0, -100, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

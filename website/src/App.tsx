import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { TestingPipeline } from './components/TestingPipeline';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export function App() {
  const [loading, setLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Clear all past performance, storage, and cache on fresh website load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Reset scroll position to top
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      // Clear past browser performance entries, marks, and measures
      try {
        if (window.performance) {
          if (typeof window.performance.clearMarks === 'function') {
            window.performance.clearMarks();
          }
          if (typeof window.performance.clearMeasures === 'function') {
            window.performance.clearMeasures();
          }
          if (typeof window.performance.clearResourceTimings === 'function') {
            window.performance.clearResourceTimings();
          }
        }
      } catch (err) {
        console.warn('Performance cleanup warning:', err);
      }

      // Clear localStorage and sessionStorage
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch (err) {
        console.warn('Storage cleanup warning:', err);
      }

      // Clear browser cache entries if accessible
      try {
        if ('caches' in window) {
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        }
      } catch (err) {
        console.warn('Cache cleanup warning:', err);
      }
    }
  }, []);

  return (
    <div className="relative bg-[#061329] text-white min-h-screen selection:bg-cyan-500 selection:text-black font-sans bg-cyber-grid">
      {/* QA Preloader Animation */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* 3D Canvas Background Particles & Objects */}
      <ThreeBackground />

      {/* Main UI Page Container */}
      <div className="relative z-10">
        {/* Sticky Glass Navbar */}
        <Navbar onOpenCV={() => setCvModalOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenCV={() => setCvModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Interactive 3D Testing Pipeline */}
        <TestingPipeline />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Achievements Section */}
        <Achievements />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact onOpenCV={() => setCvModalOpen(true)} />

        {/* Footer */}
        <Footer />
      </div>

      {/* Downloadable / Printable CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default App;

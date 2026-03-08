import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Purple gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-purple-100 to-purple-200" />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-xl font-medium text-neutral-900">Tiana Daye</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <a href="#projects" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              Work
            </a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </motion.nav>

      <Intro />
      <Projects />
      <Technologies />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">© 2026 Tiana Daye. All rights reserved.</p>
          <p className="text-neutral-500 text-sm">Designed & developed with care</p>
        </div>
      </footer>
    </div>
  );
}

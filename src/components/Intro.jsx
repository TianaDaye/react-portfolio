import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Intro() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
>
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-purple-600 uppercase tracking-wider text-sm font-semibold"
            >
              UI Designer
            </motion.p>
            
            <h2 className="text-5xl lg:text-7xl font-semibold text-neutral-900 leading-tight drop-shadow-sm">
              Crafting digital<br />experiences that<br />inspire & engage
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-neutral-700 max-w-2xl leading-relaxed font-medium"
          >
            I design intuitive interfaces that blend aesthetics with functionality,
            creating meaningful connections between users and products.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={scrollToProjects}
            className="group flex items-center gap-3 text-neutral-900 mt-8 hover:gap-4 transition-all font-medium"
          >
            <span className="text-lg">View selected work</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

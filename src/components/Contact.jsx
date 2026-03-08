import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h3 className="text-4xl lg:text-5xl font-medium text-neutral-900">Let's work together</h3>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities.
          </p>
          
          <div className="flex items-center justify-center gap-6 pt-8">
            <motion.a
              href="mailto:dayecreations6@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-500/30"
            >
              <Mail className="w-5 h-5" />
              <span>Get in touch</span>
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8">
            <motion.a
              href="https://www.linkedin.com/in/tiana-daye-627982191/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="text-neutral-600 hover:text-purple-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

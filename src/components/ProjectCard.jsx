import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export function ProjectCard({ title, description, category, imageUrl, tags, index, problem, solution, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl bg-neutral-100">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[16/10] w-full"
        >
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-full p-4"
          >
            <ArrowUpRight className="w-6 h-6 text-black" />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-purple-600 uppercase tracking-wider font-semibold">{category}</p>
          <motion.div animate={{ x: isHovered ? 4 : 0 }} transition={{ duration: 0.3 }}>
            <ArrowUpRight className="w-5 h-5 text-neutral-700" />
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-semibold text-neutral-900">{title}</h3>
        <p className="text-neutral-700 leading-relaxed">{description}</p>
        
        <div className="pt-4 space-y-4">
          <div className="space-y-2">
            <p className="text-xs text-purple-600 uppercase tracking-wider font-semibold">Problem</p>
            <p className="text-neutral-700 text-sm leading-relaxed">{problem}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-purple-600 uppercase tracking-wider font-semibold">Solution</p>
            <p className="text-neutral-700 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/60 backdrop-blur-sm text-neutral-800 text-sm rounded-full border border-neutral-200 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}
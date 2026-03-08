import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

import nsfImage from '../assets/NSF Causal Map.png';
import nexusImage from '../assets/Nexus 360 Website.png';
import youngcraftersImage from '../assets/YoungCrafters Webapp.png';
import figmaImage from '../assets/Figma App Redesign.png';

const projects = [
  {
    title: "NSF Causal Map",
    link: "https://surf-kit-55845178.figma.site/", 
    description: "An educational webapp prototype commissioned by RIT researchers, enabling physics students to build and visualize causal maps of their career interests — documenting influences and intentions over time.",
    category: "Web Design",
    imageUrl: nsfImage,
    tags: ["UI Design", "EdTech", "Prototype", "In Progress"],
    problem: "Two RIT professors conducting NSF-funded research since 2020 had been simulating their causal mapping concept through tools like Lucidchart. They needed a purpose-built platform to bring their research vision to life for real student use.",
    solution: "Commissioned to lead the full UI/UX design, I translated years of research and interview data into a functional webapp allowing students to create, explore, and document their career causal maps in an intuitive research-grade environment."
  },
  {
    title: "Nexus 360 Website",
    link: "https://app.nexus360llc.com/", 
    description: "A dynamic marketing and services platform for Nexus 360, a financial consultancy built around the wealth-health mindset — offering insurance, events, and thought leadership all under one brand.",
    category: "Web Design",
    imageUrl: nexusImage,
    tags: ["Web Design", "Branding", "Financial Services"],
    problem: "The Nexus 360 brand spans insurance services, live events, and a published book but had no unified digital presence to reflect the full scope and versatility of what they offer.",
    solution: "Designed an aesthetically cohesive platform that showcases every facet of the Nexus 360 brand, giving visitors a clear picture of their services while reinforcing the credibility and vision behind the company."
  },
  {
    title: "YoungCrafters Webapp",
    link: "https://youngcrafters.io/",
    description: "An AI-powered mentorship platform that unifies every aspect of the mentorship journey — from matching and messaging to goal setting, learning modules, video calling, and calendar syncing — all in one place. Free for everyone.",
    category: "SaaS Product",
    imageUrl: youngcraftersImage,
    tags: ["Product Design", "AI", "EdTech", "Startup"],
    problem: "Mentors and mentees are forced to juggle multiple disconnected tools like Zoom, iMessage, and Google Calendar just to maintain a single mentorship relationship. The friction makes meaningful mentorship harder to sustain.",
    solution: "As CEO and co-founder, I led the design of a unified platform consolidating all mentorship needs in one place. YoungCrafters allows existing programs to migrate onto the platform and supports participants with guidebooks and dedicated liaisons, all completely free."
  },
  {
    title: "Figma App Redesign",
    link: null,
    description: "A conceptual redesign of the Figma mobile experience, focused on improving accessibility and workflow for designers on the go.",
    category: "UI Design",
    imageUrl: figmaImage,
    tags: ["UI Design", "Redesign", "Coming Soon"],
    problem: "Coming soon.",
    solution: "Coming soon."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-purple-600 uppercase tracking-wider text-sm mb-4 font-semibold">Selected Projects</p>
          <h3 className="text-4xl lg:text-5xl font-semibold text-neutral-900">Recent Work</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
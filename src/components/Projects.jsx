'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import portfolioImg from '../assets/Port.png';
import cOco from '../assets/Collab-CODE (2).png';
import Avtarai from '../assets/avtarai.jpg';
import intervbitImg from '../assets/intervbit.png';

const placeholderImg =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop';

const projects = [
  {
    id: 'intervbit',
    title: 'IntervBit – AI Mock Interviews',
    category: 'AI & ML',
    description:
      'An AI mock interview simulator evaluating users in real-time. Built with MERN stack, OpenAI GPT integrations, Deepgram STT, and ElevenLabs TTS to offer live audio reviews, performance transcripts, and automated candidate analytics.',
    bulletPoints: [
      "Designed a low-latency audio processing loop using WebSockets and ElevenLabs APIs.",
      "Engineered automated candidate analytics dashboards displaying sentiment analysis and technical scoring.",
      "Deployed highly available architecture on Vercel and Render handling thousands of test interviews."
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI', 'ElevenLabs', 'WebSockets'],
    github: '#',
    live: 'https://interv-bit.vercel.app/',
    image: intervbitImg,
  },
  {
    id: 'collabcode',
    title: 'Collab-Code – Live Workspace',
    category: 'Full-Stack',
    description:
      'A real-time collaborative coding room. Allows multiple developers to write, edit, and audit code in sync, incorporating live voice features, synchronized cursor tracking, and modular compilation configurations.',
    bulletPoints: [
      "Implemented Socket.IO event channels synchronizing keystroke arrays across multiple connected nodes.",
      "Configured CodeMirror 6 extensions supporting multi-language syntax parsing and light/dark workspaces.",
      "Reduced collaborative conflicts by 90% by incorporating operations-transform syncing algorithm."
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Socket.io', 'CodeMirror', 'Tailwind CSS'],
    github: 'https://github.com/Kumaraditya18/Collab-Code',
    live: 'https://collab-code-lemon.vercel.app/',
    image: cOco,
  },
  {
    id: 'avtarai',
    title: 'AvtarAI – Try-On AI Engine',
    category: 'AI & ML',
    description:
      'An AI-driven wardrobe virtualization platform leveraging image segmentation. Customers upload portraits and fit garments virtually onto overlays, optimizing apparel conversion metrics for digital storefronts.',
    bulletPoints: [
      "Programmed advanced OpenCV edge and shape segmentation algorithms detecting body coordinate frames.",
      "Integrated realistic cloth warping and texture mapping, delivering 95% accurate sizing previews.",
      "Created highly reactive web components permitting instant overlay adjustments."
    ],
    tech: ['React', 'Python', 'OpenCV', 'FastAPI', 'Tailwind CSS', 'Docker'],
    github: 'https://github.com/Kumaraditya18/AvtarAI',
    live: '#',
    image: Avtarai,
  },
  {
    id: 'blindassistant',
    title: 'Blind Assistant – Vision Aid',
    category: 'AI & ML',
    description:
      'An assistive smart application for visually impaired individuals. Integrates object recognition cameras with text-to-speech to announce obstacles, signs, and navigations.',
    bulletPoints: [
      "Configured YOLOv8 neural network tracking multiple object classes at 30 FPS.",
      "Implemented voice feedback alerts calculating directional safety vectors.",
      "Designed a highly simplified, voice-activated UI system for hands-free interactions."
    ],
    tech: ['Python', 'YOLOv8', 'PyTorch', 'Text-To-Speech', 'OpenCV'],
    github: 'https://github.com/Kumaraditya18/Blind-Assistant',
    live: '#',
    image: placeholderImg,
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio Studio',
    category: 'Utilities',
    description:
      'An elegant developer studio featuring premium visual designs, Three.js animations, custom CSS assets, and search engine optimization. Built targeting high-impact client acquisitions.',
    bulletPoints: [
      "Built lightweight ThreeJS procedural particle system reducing bundle asset load by 23MB.",
      "Implemented responsive fluid elements delivering 100/100 Lighthouse scores on desktop.",
      "Engineered automated layout reveals and responsive interfaces using Tailwind and Framer Motion."
    ],
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'SEO Best Practices'],
    github: 'https://github.com/Kumaraditya18/adityaportfolio',
    live: 'https://adityaportfolio-ten.vercel.app/',
    image: portfolioImg,
  },
];

const categories = ['All', 'Full-Stack', 'AI & ML', 'Utilities'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section
      id="projects"
      className="bg-[#030303] text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background glow radial */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-[#a771ee] font-mono uppercase mb-3">
            Selected Works
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Proven Case Studies
          </h3>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            A handpicked selection of production web apps and artificial intelligence systems built to solve real engineering problems.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-xs font-semibold px-4.5 py-2.5 rounded-full transition-all duration-300 font-mono ${
                activeTab === cat 
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20' 
                  : 'bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                className="project-card relative group bg-[#09090b] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5 flex flex-col min-h-[560px]"
              >
                
                {/* Project Cover Image */}
                <div className="relative w-full h-[220px] overflow-hidden bg-black/40">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-750"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded bg-[#030303]/85 text-purple-300 border border-purple-500/20 backdrop-blur-md uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  
                  {/* Title and Links */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {proj.title}
                    </h4>
                    <div className="flex items-center gap-2.5">
                      {proj.github !== '#' && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:text-[#a771ee] transition-all duration-200"
                          title="GitHub Source"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {proj.live !== '#' && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:text-cyan-400 transition-all duration-200"
                          title="Launch Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mb-6 flex-grow">
                    <h5 className="text-xs font-semibold text-gray-400 tracking-wider font-mono uppercase mb-3 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-purple-400" /> Key Technical Specs
                    </h5>
                    <ul className="space-y-2 text-xs text-gray-500">
                      {proj.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-start">
                          <span className="text-[#a771ee] select-none mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-6 border-t border-white/5">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

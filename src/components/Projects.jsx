'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import portfolioImg from '../assets/Port.png';
import cOco from '../assets/Collab-CODE (2).png';
import Avtarai from '../assets/avtarai.jpg';
import intervbitImg from '../assets/intervbit.png';

const placeholderImg =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop';

const projects = [
  {
    id: 'intervbit',
    title: 'IntervBit',
    subtitle: 'AI Mock Interviews',
    category: 'AI & ML',
    description:
      'An AI mock interview simulator evaluating users in real-time. Built with the MERN stack, OpenAI GPT integrations, Deepgram STT, and ElevenLabs TTS to offer live audio reviews, performance transcripts, and automated candidate analytics.',
    bulletPoints: [
      "Low-latency audio processing loop using WebSockets and ElevenLabs APIs.",
      "Engineered automated candidate analytics dashboards displaying sentiment analysis and technical scoring.",
      "Deployed highly available architecture handling thousands of test interviews."
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI', 'ElevenLabs', 'WebSockets'],
    github: '#',
    live: 'https://interv-bit.vercel.app/',
    image: intervbitImg,
    span: 'md:col-span-2'
  },
  {
    id: 'collabcode',
    title: 'Collab-Code',
    subtitle: 'Live Workspace',
    category: 'Full-Stack',
    description:
      'A real-time collaborative coding room. Allows multiple developers to write, edit, and audit code in sync, incorporating live voice features, synchronized cursor tracking, and modular compilation configurations.',
    bulletPoints: [
      "Keystroke syncing across connected nodes with Socket.IO.",
      "Syntax parsing for 15+ languages via CodeMirror 6.",
      "Operations-transform syncing algorithm to reduce merge conflicts."
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Socket.io', 'CodeMirror'],
    github: 'https://github.com/Kumaraditya18/Collab-Code',
    live: 'https://collab-code-lemon.vercel.app/',
    image: cOco,
    span: 'md:col-span-1'
  },
  {
    id: 'avtarai',
    title: 'AvtarAI',
    subtitle: 'Try-On AI Engine',
    category: 'AI & ML',
    description:
      'An AI-driven wardrobe virtualization platform leveraging image segmentation. Customers upload portraits and fit garments virtually onto overlays, optimizing apparel conversion metrics for digital storefronts.',
    bulletPoints: [
      "OpenCV edge and shape segmentation detecting body coordinate frames.",
      "Integrated realistic cloth warping and texture mapping.",
      "Created highly reactive web components permitting overlay adjustments."
    ],
    tech: ['React', 'Python', 'OpenCV', 'FastAPI', 'Docker'],
    github: 'https://github.com/Kumaraditya18/AvtarAI',
    live: '#',
    image: Avtarai,
    span: 'md:col-span-1'
  },
  {
    id: 'blindassistant',
    title: 'Blind Assistant',
    subtitle: 'Vision Aid',
    category: 'AI & ML',
    description:
      'An assistive smart application for visually impaired individuals. Integrates object recognition cameras with text-to-speech to announce obstacles, signs, and navigations.',
    bulletPoints: [
      "YOLOv8 neural network tracking multiple object classes at 30 FPS.",
      "Voice feedback alerts calculating directional safety vectors.",
      "Voice-activated UI system for hands-free interactions."
    ],
    tech: ['Python', 'YOLOv8', 'PyTorch', 'Text-To-Speech', 'OpenCV'],
    github: 'https://github.com/Kumaraditya18/Blind-Assistant',
    live: '#',
    image: placeholderImg,
    span: 'md:col-span-1'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Studio',
    subtitle: 'Developer Studio',
    category: 'Utilities',
    description:
      'An elegant developer studio featuring premium visual designs, Three.js animations, custom CSS assets, and search engine optimization. Built targeting high-impact client acquisitions.',
    bulletPoints: [
      "Procedural particle system reducing bundle asset load by 23MB.",
      "Fluid layout delivering 100/100 Lighthouse scores on desktop.",
      "Automated viewport reveals using Framer Motion."
    ],
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'SEO'],
    github: 'https://github.com/Kumaraditya18/adityaportfolio',
    live: 'https://adityaportfolio-ten.vercel.app/',
    image: portfolioImg,
    span: 'md:col-span-1'
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
      className="bg-[#000000] text-white py-28 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#a771ee] font-mono uppercase mb-4">
            Selected Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Case Studies.
          </h3>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-white text-black font-semibold' 
                  : 'bg-white/5 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                className={`${proj.span} group relative bg-[#09090b]/40 border border-white/[0.04] hover:border-white/[0.08] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[480px]`}
              >
                
                {/* Image Header */}
                <div className="relative w-full h-[200px] overflow-hidden bg-black/40">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-[1.02] group-hover:opacity-80 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[9px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-black/80 text-zinc-300 border border-white/10 backdrop-blur-md uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  
                  <div>
                    {/* Title and Links */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-250">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5">{proj.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {proj.github !== '#' && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-all duration-200"
                            title="GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {proj.live !== '#' && (
                          <a
                            href={proj.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-all duration-200"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                      {proj.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 text-xs text-zinc-500 font-light mb-6">
                      {proj.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-start">
                          <span className="text-zinc-500 select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04] mt-auto font-mono">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400"
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

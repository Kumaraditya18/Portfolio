'use client';
import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'intervbit',
    title: 'IntervBit',
    subtitle: 'AI Mock Interviews',
    category: 'AI & ML',
    description:
      'An AI mock interview simulator evaluating users in real-time. Built with the MERN stack, OpenAI GPT integrations, Deepgram STT, and ElevenLabs TTS to offer live audio reviews, performance transcripts, and automated candidate analytics.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI', 'ElevenLabs', 'WebSockets'],
    github: '#',
    live: 'https://interv-bit.vercel.app/',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'collabcode',
    title: 'Collab-Code',
    subtitle: 'Live Workspace',
    category: 'Full-Stack',
    description:
      'A real-time collaborative coding room. Allows multiple developers to write, edit, and audit code in sync, incorporating live voice features, synchronized cursor tracking, and modular compilation configurations.',
    tech: ['React', 'Node.js', 'Express', 'Socket.io', 'CodeMirror'],
    github: 'https://github.com/Kumaraditya18/Collab-Code',
    live: 'https://collab-code-lemon.vercel.app/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'avtarai',
    title: 'AvtarAI',
    subtitle: 'Try-On AI Engine',
    category: 'AI & ML',
    description:
      'An AI-driven wardrobe virtualization platform leveraging image segmentation. Customers upload portraits and fit garments virtually onto overlays, optimizing apparel conversion metrics for digital storefronts.',
    tech: ['React', 'Python', 'OpenCV', 'FastAPI', 'Docker'],
    github: 'https://github.com/Kumaraditya18/AvtarAI',
    live: '#',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blindassistant',
    title: 'Blind Assistant',
    subtitle: 'Vision Aid',
    category: 'AI & ML',
    description:
      'An assistive smart application for visually impaired individuals. Integrates object recognition cameras with text-to-speech to announce obstacles, signs, and navigations.',
    tech: ['Python', 'YOLOv8', 'PyTorch', 'Text-To-Speech', 'OpenCV'],
    github: 'https://github.com/Kumaraditya18/Blind-Assistant',
    live: '#',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Studio',
    subtitle: 'Developer Studio',
    category: 'Utilities',
    description:
      'An elegant developer studio featuring premium visual designs, Three.js animations, custom CSS assets, and search engine optimization. Built targeting high-impact client acquisitions.',
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind', 'SEO'],
    github: 'https://github.com/Kumaraditya18/adityaportfolio',
    live: 'https://adityaportfolio-ten.vercel.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
];

// Triplicating array list to guarantee seamless infinite loop padding
const carouselItems = [...projects, ...projects, ...projects];

const Projects = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let autoX = 0;
    let loopWidth = 2000;

    const measureAndAnimate = () => {
      if (trackRef.current && trackRef.current.children.length >= 5) {
        const firstSet = Array.from(trackRef.current.children).slice(0, 5);
        const cardWidths = firstSet.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0);
        const gap = 24; // gap-6 gap sizing (24px)
        loopWidth = cardWidths + (gap * 5);
      }

      const updatePosition = () => {
        // Continuous slow scroll rate
        autoX -= 0.5;
        if (autoX <= -loopWidth) {
          autoX = 0;
        }

        // Steer position with page scroll
        const scrollMultiplier = -window.scrollY * 0.4;
        
        // Modulo keeps translation bounded inside loop width
        const totalX = (autoX + scrollMultiplier) % loopWidth;

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${totalX}px, 0, 0)`;
        }

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    // Delay measurement slightly for browser reflow
    const timer = setTimeout(measureAndAnimate, 100);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="projects"
      className="bg-bg-app text-text-app py-28 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#a771ee] font-mono uppercase mb-3">
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-app">
              Featured Projects.
            </h3>
          </div>
          <p className="text-text-muted-app text-sm max-w-sm font-light">
            Drag, hover, or scroll down to watch the portfolio track adapt interactively in real-time.
          </p>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div className="relative w-full overflow-hidden py-4 select-none cursor-grab active:cursor-grabbing">
        {/* Shadow overlays on sides for Apple visual style */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-app to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-app to-transparent z-10 pointer-events-none"></div>

        {/* Moving Track */}
        <div
          ref={trackRef}
          className="flex gap-6 w-max pl-6 md:pl-12 will-change-transform"
        >
          {carouselItems.map((proj, idx) => (
            <div
              key={`${proj.id}-${idx}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 group relative bg-card-app/40 border border-border-app hover:border-border-hover-app rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[460px]"
            >
              {/* Cover Image */}
              <div className="relative w-full h-[200px] overflow-hidden bg-black/40">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-app via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-[9px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-bg-app/90 text-text-app border border-border-app backdrop-blur-md uppercase">
                  {proj.category}
                </span>
              </div>

              {/* Card Copy */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-text-app group-hover:text-purple-300 transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-[11px] text-[#a771ee] font-mono mt-0.5">{proj.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      {proj.github !== '#' && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full hover:bg-card-app text-text-muted-app hover:text-text-app transition-colors"
                          title="GitHub Link"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {proj.live !== '#' && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full hover:bg-card-app text-text-muted-app hover:text-text-app transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-text-muted-app leading-relaxed font-light mt-2 line-clamp-4">
                    {proj.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-app mt-6 font-mono">
                  {proj.tech.slice(0, 5).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-semibold tracking-wider px-2 py-0.5 rounded bg-badge-app border border-border-app text-text-muted-app"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

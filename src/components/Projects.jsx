'use client';
import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

import nexusLabsImg from '../assets/nexus_labs.png';
import intervbitImg from '../assets/intervbit.png';
import collabcodeImg from '../assets/Collab-CODE (2).png';
import avtaraiImg from '../assets/avtarai.jpg';

const projects = [
  {
    id: 'nexus-labs',
    title: 'NEXUS LABS',
    subtitle: 'Luxury Hardware Storefront',
    category: 'Full-Stack & E-Commerce',
    description:
      'An ultra-premium, production-grade hardware storefront web application engineered with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Neon PostgreSQL. Features cinematic GTA VI-inspired 3D kinetic scroll dynamics, an AI-powered Cmd+K natural language spotlight search, real-time admin privilege delegation control center, live logistics telemetry with dynamic PDF invoice rendering, and Web Audio API interactive soundscapes.',
    highlights: [
      'GTA VI Kinetic 3D Scroll',
      'AI Cmd+K Spotlight Search',
      'Production Neon PostgreSQL DB',
      'Real-Time Privilege Control',
      'Logistics Telemetry & Invoices',
      'Web Audio Sound Synthesizer'
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind CSS v4', 'Framer Motion', 'Lucide React'],
    github: '#',
    live: 'https://nexus-labs-ten.vercel.app/',
    image: nexusLabsImg
  },
  {
    id: 'intervbit',
    title: 'IntervBit',
    subtitle: 'AI Mock Interviews',
    category: 'AI & ML',
    description:
      'An AI mock interview simulator evaluating users in real-time. Built with the MERN stack, OpenAI GPT integrations, Deepgram STT, and ElevenLabs TTS to offer live audio reviews, performance transcripts, and automated candidate analytics.',
    highlights: [
      'OpenAI GPT-4 Real-Time Audio',
      'Deepgram Speech-To-Text',
      'ElevenLabs Voice Synthesis',
      'Candidate Performance Transcripts',
      'Full-Stack MERN Architecture'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI', 'ElevenLabs', 'WebSockets'],
    github: '#',
    live: 'https://interv-bit.vercel.app/',
    image: intervbitImg
  },
  {
    id: 'collabcode',
    title: 'Collab-Code',
    subtitle: 'Live Workspace',
    category: 'Full-Stack',
    description:
      'A real-time collaborative coding room. Allows multiple developers to write, edit, and audit code in sync, incorporating live voice features, synchronized cursor tracking, and modular compilation configurations.',
    highlights: [
      'Multi-User Synchronized Editor',
      'Real-Time Socket.io WebSockets',
      'Live Cursor Tracking',
      'WebRTC Voice Rooms',
      'Modular Code Execution'
    ],
    tech: ['React', 'Node.js', 'Express', 'Socket.io', 'CodeMirror'],
    github: 'https://github.com/Kumaraditya18/Collab-Code',
    live: 'https://collab-code-lemon.vercel.app/',
    image: collabcodeImg
  },
  {
    id: 'avtarai',
    title: 'AvtarAI',
    subtitle: 'Try-On AI Engine',
    category: 'AI & ML',
    description:
      'An AI-driven wardrobe virtualization platform leveraging image segmentation. Customers upload portraits and fit garments virtually onto overlays, optimizing apparel conversion metrics for digital storefronts.',
    highlights: [
      'Virtual Wardrobe Overlay',
      'OpenCV Image Segmentation',
      'FastAPI AI Microservices',
      'Docker Containerized Stack',
      'Digital Storefront Analytics'
    ],
    tech: ['React', 'Python', 'OpenCV', 'FastAPI', 'Docker'],
    github: 'https://github.com/Kumaraditya18/AvtarAI',
    live: '#',
    image: avtaraiImg
  },
  {
    id: 'blindassistant',
    title: 'Blind Assistant',
    subtitle: 'Vision Aid',
    category: 'AI & ML',
    description:
      'An assistive smart application for visually impaired individuals. Integrates object recognition cameras with text-to-speech to announce obstacles, signs, and navigations.',
    highlights: [
      'YOLOv8 Real-Time Detection',
      'PyTorch Vision Processing',
      'Text-To-Speech Audio Feedback',
      'Spatial Obstacle Announcer',
      'Assistive Navigation'
    ],
    tech: ['Python', 'YOLOv8', 'PyTorch', 'Text-To-Speech', 'OpenCV'],
    github: 'https://github.com/Kumaraditya18/Blind-Assistant',
    live: '#',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  }
];

// Duplicate items list for a seamless infinite scroll loop
const carouselItems = [...projects, ...projects];

const Projects = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const autoScrollPos = useRef(0);
  const isInteracting = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);

  useEffect(() => {
    let animationFrameId;
    
    const updateScroll = () => {
      const container = containerRef.current;
      if (!container) {
        animationFrameId = requestAnimationFrame(updateScroll);
        return;
      }
      
      const halfWidth = container.scrollWidth / 2;
      if (halfWidth <= 0) {
        animationFrameId = requestAnimationFrame(updateScroll);
        return;
      }
      
      // Increment base auto scroll pos slowly when user is not dragging
      if (!isInteracting.current) {
        autoScrollPos.current += 0.35;
      }
      
      // Calculate dynamic scrolling offset from vertical scroll position
      const pageScrollOffset = window.scrollY * 0.45;
      
      // Keep autoScrollPos positive modulo halfWidth
      if (autoScrollPos.current < 0) {
        autoScrollPos.current += halfWidth * 1000;
      }
      
      // Target scroll wrapping seamlessly modulo halfWidth
      const target = (autoScrollPos.current + pageScrollOffset) % halfWidth;
      
      container.scrollLeft = target;

      // Update slide progress indicator bar scale
      if (progressRef.current) {
        const progressFraction = target / halfWidth;
        progressRef.current.style.transform = `scaleX(${progressFraction})`;
      }
      
      animationFrameId = requestAnimationFrame(updateScroll);
    };
    
    animationFrameId = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle Mouse / Touch Dragging
  const handleMouseDown = (e) => {
    isInteracting.current = true;
    startX.current = e.pageX || (e.touches && e.touches[0].pageX);
    dragDistance.current = 0;
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isInteracting.current) return;
    const currentX = e.pageX || (e.touches && e.touches[0].pageX);
    const delta = startX.current - currentX;
    if (Math.abs(delta) > 5) {
      isDragging.current = true;
    }
    dragDistance.current += Math.abs(delta);
    autoScrollPos.current += delta;
    startX.current = currentX;
  };

  const handleMouseUp = () => {
    isInteracting.current = false;
    setTimeout(() => {
      isDragging.current = false;
    }, 100);
  };

  // Handle Wheel Scroll
  const handleWheel = (e) => {
    const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
    autoScrollPos.current += delta * 0.8;
  };

  // Handle Card Click Navigation
  const handleCardClick = (proj) => {
    if (isDragging.current || dragDistance.current > 8) return;
    const targetUrl = proj.live !== '#' ? proj.live : (proj.github !== '#' ? proj.github : null);
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="projects"
      className="bg-bg-app text-text-app py-28 relative overflow-hidden select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-[15%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/2 right-[15%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="section-container mb-12 relative z-10">
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-[10px] font-semibold tracking-[0.25em] text-[#a771ee] font-mono uppercase mb-3">
            Selected Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-app">
            Featured Projects.
          </h3>
        </div>
      </div>

      {/* Carousel Scroll Container */}
      <div className="relative w-full py-4">
        {/* Side Shadow Blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg-app to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg-app to-transparent z-10 pointer-events-none"></div>

        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          onWheel={handleWheel}
          className="flex gap-8 overflow-x-scroll scrollbar-none pl-6 md:pl-16 pr-6 md:pr-16 py-2 cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'auto' }}
        >
          {carouselItems.map((proj, idx) => {
            const hasLink = proj.live !== '#' || proj.github !== '#';
            return (
              <div
                key={`${proj.id}-${idx}`}
                onClick={() => handleCardClick(proj)}
                className={`w-[300px] min-[480px]:w-[360px] min-[1200px]:w-[440px] flex-shrink-0 group relative bg-card-app border border-border-app hover:border-border-hover-app rounded-[28px] overflow-hidden hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between min-h-[480px] md:min-h-[540px] ${
                  hasLink ? 'cursor-pointer' : ''
                }`}
              >
                {/* Card Image */}
                <div className="relative w-full h-[190px] md:h-[240px] overflow-hidden bg-black/40">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-app via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[9px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-bg-app/90 text-text-app border border-border-app backdrop-blur-md uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* Card Copy Details */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-text-app group-hover:text-purple-300 transition-colors">
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
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-full hover:bg-bg-app text-text-muted-app hover:text-text-app transition-colors"
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
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-full hover:bg-bg-app text-text-muted-app hover:text-text-app transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-text-muted-app leading-relaxed font-light mt-2 line-clamp-4 md:line-clamp-5">
                      {proj.description}
                    </p>

                    {/* Highlight Chips */}
                    {proj.highlights && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {proj.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-app mt-6 font-mono">
                    {proj.tech.slice(0, 7).map((t, tIdx) => (
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
            );
          })}
        </div>
      </div>

      {/* Apple-style Slider Progress Bar */}
      <div className="flex justify-center mt-8">
        <div className="w-36 md:w-48 h-[2px] bg-border-app rounded-full overflow-hidden relative">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 bottom-0 w-full bg-text-app origin-left transform scale-x-0 transition-transform duration-75 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

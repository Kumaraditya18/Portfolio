'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioImg from '../assets/Port.png';
import cOco from '../assets/Collab-CODE (2).png';
import Avtarai from '../assets/avtarai.jpg';
import intervbitImg from '../assets/intervbit.png';

gsap.registerPlugin(ScrollTrigger);

const placeholderImg =
  'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Blind+Assistant';

const projects = [
  {
    id: 'intervbit',
    title: 'IntervBit – AI Interview Simulator',
    description:
      'An AI-powered mock interview platform built with the MERN stack, OpenAI GPT models, Deepgram STT, and ElevenLabs TTS. Simulates real-time verbal interviews, providing instant feedback, detailed analytics, and personalized improvement recommendations for candidates preparing for technical and HR interviews.',
    link: 'https://interv-bit.vercel.app/',
    image: intervbitImg,
  },
  {
    id: 'blindassistant',
    title: 'Blind Assistant – AI Vision Aid',
    description:
      'An assistive application designed for visually impaired users, built with Python, YOLO object detection, and text-to-speech conversion. Provides real-time environment scanning, obstacle detection, and voice feedback to enhance mobility and independence for users with low or no vision.',
    link: 'https://github.com/Kumaraditya18/Blind-Assistant',
    image: placeholderImg,
  },
  {
    id: 'collabcode',
    title: 'Collab-Code – Live Coding Workspace',
    description:
      'A real-time collaborative coding platform developed with Node.js, Express, Socket.IO, and CodeMirror editor. Supports multi-user sessions, synchronized editing, live chat, and customizable themes, making remote pair programming and interviews seamless and efficient.',
    link: 'https://collab-code-lemon.vercel.app/',
    image: cOco,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A professional developer portfolio built using React, Tailwind CSS, and Framer Motion. Features optimized SEO, dynamic routing, smooth transitions, and a recruiter-friendly layout to effectively showcase skills, achievements, and project highlights across devices.',
    link: 'https://adityaportfolio-ten.vercel.app/',
    image: portfolioImg,
  },
  {
    id: 'avtarai',
    title: 'AvtarAI – Virtual Try-On Experience',
    description:
      'An AI-driven web application leveraging OpenCV for image segmentation, enabling users to upload photos and visualize outfits digitally. Built for future AR e-commerce integrations, enhancing the online shopping experience with realistic clothing overlays and instant previews.',
    link: 'https://github.com/Kumaraditya18/AvtarAI',
    image: Avtarai,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide cards initially
      gsap.set(cardsRef.current, { opacity: 0, y: 50 });

      /** ✅ Timeline with pinning */
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1️⃣ Big Title Animation
      tl.fromTo(
        titleRef.current,
        { scale: 6, opacity: 0.3, y: '30vh' },
        { scale: 1, opacity: 1, y: 0, ease: 'power2.out', duration: 1 }
      );

      // 2️⃣ Reveal cards AFTER title finishes shrinking
      tl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#000000] text-white py-20 px-4 md:px-12 relative overflow-hidden min-h-screen"
    >
      {/* Big Animated Title */}
      <h2
        ref={titleRef}
        className="text-8xl md:text-7xl font-bold text-center text-[#a771ee] mb-20"
      >
        Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <a
            key={proj.id}
            ref={(el) => (cardsRef.current[index] = el)}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card relative group bg-[#121212] border border-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 flex flex-col min-h-[450px] w-[95%] mx-auto cursor-pointer"
          >
            {/* Blurry, Faded Image Header */}
            <div className="relative w-full h-[35%] overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover opacity-60 blur-[2px] group-hover:opacity-80 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow text-center md:text-left">
              <h3 className="text-xl font-semibold text-[#d2a8ff] mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {proj.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

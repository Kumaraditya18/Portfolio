'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import portfolioImg from '../assets/Port.png';
import cOco from '../assets/Collab-CODE (2).png';
import Avtarai from '../assets/avtarai.jpg';
import intervbitImg from '../assets/intervbit.png';

const projects = [
  {
    id: 'intervbit',
    title: "IntervBit",
    description:
      "A full-stack AI-powered mock interview platform simulating real-time verbal interviews. Users get instant feedback using OpenAI, Deepgram for STT, and ElevenLabs for TTS.",
    link: "https://interv-bit.vercel.app/",
    image: intervbitImg,
    stack: ["Next.js 15", "Tailwind CSS", "Firebase", "OpenAI", "Deepgram", "11Labs"],
  },
  {
    id: 'portfolio',
    title: "My Portfolio",
    description:
      "Responsive developer portfolio with smooth UI transitions, minimal design and dynamic routing. Showcases work and skills with modern design standards.",
    link: "https://adityaportfolio-ten.vercel.app/",
    image: portfolioImg,
    stack: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 'collabcode',
    title: "Collab-Code",
    description:
      "Real-time code collaboration tool supporting multiple users with socket-based code sync, chat, and custom room joining. Built with CodeMirror and Socket.IO.",
    link: "https://collab-code-lemon.vercel.app/",
    image: cOco,
    stack: ["React", "Node.js", "Socket.io", "CodeMirror", "Tailwind CSS"],
  },
  {
    id: 'avtarai',
    title: "AvtarAI",
    description:
      "Virtual try-on web app allowing users to upload photos and test outfits using OpenCV pipelines. Future-ready for e-commerce AR integration.",
    link: "https://github.com/Kumaraditya18/AvtarAI",
    image: Avtarai,
    stack: ["Python", "OpenCV", "Flask", "JavaScript"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Projects = () => {
  const sectionRefs = useRef([]);
  const [activeId, setActiveId] = useState(projects[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { threshold: 0.4 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12">
      <h2 className="text-5xl font-bold text-center text-[#a771ee] mb-20">Projects</h2>

      {/* Sidebar */}
      <div className="fixed left-4 top-1/3 hidden md:flex flex-col gap-4 z-20">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`w-3 h-3 rounded-full transition-all ${
              activeId === proj.id ? 'bg-[#a771ee] scale-125 shadow-lg' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-20 max-w-5xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            ref={(el) => (sectionRefs.current[idx] = el)}
            id={proj.id}
            className="flex flex-col md:flex-row w-full bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-lg overflow-hidden"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Left Image */}
            <div className="md:w-1/2 w-full h-60 md:h-96">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-[#65d77e] mb-2">{proj.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-200 px-3 py-1 text-xs rounded-full border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                className="text-[#65d77e] hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-24">
        <a
          href="/contact"
          className="text-white border border-[#a771ee] px-6 py-3 rounded-full hover:bg-[#a771ee] transition"
        >
          Let’s Work Together →
        </a>
      </div>
    </section>
  );
};

export default Projects;
